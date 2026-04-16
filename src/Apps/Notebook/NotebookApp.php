<?php

namespace PlotdeskExamplePlugin\Apps\Notebook;

use App\Apps\BasicApp;
use App\Models\ChatMessage;
use App\Models\ChatMessageApp;
use App\Plugins\Support\PluginAi;
use Override;
use PlotdeskExamplePlugin\Concerns\ResolvesChatContext;
use PlotdeskExamplePlugin\Models\ExampleNote;

class NotebookApp extends BasicApp
{
    use ResolvesChatContext;

    #[Override]
    public function getFunctions(): array
    {
        return [
            [
                'name' => 'create_example_note',
                'label' => 'Create Note',
                'description' => 'Store a new note in the example notebook. Use whenever the user wants to save information, research, decisions or meeting notes.',
                'parameters' => [
                    'type' => 'object',
                    'properties' => [
                        'title' => [
                            'type' => 'string',
                            'description' => 'A concise note title.',
                        ],
                        'content' => [
                            'type' => 'string',
                            'description' => 'Full note content (supports plain text and markdown).',
                        ],
                        'tags' => [
                            'type' => 'array',
                            'items' => ['type' => 'string'],
                            'description' => 'Optional list of tags.',
                        ],
                    ],
                    'required' => ['title', 'content'],
                ],
            ],
            [
                'name' => 'list_example_notes',
                'label' => 'List Notes',
                'description' => 'List recent notes for the current group. Optional tag filter.',
                'parameters' => [
                    'type' => 'object',
                    'properties' => [
                        'tag' => [
                            'type' => 'string',
                            'description' => 'Optional tag to filter by.',
                        ],
                        'limit' => [
                            'type' => 'integer',
                            'minimum' => 1,
                            'maximum' => 100,
                            'description' => 'Maximum number of notes (default 20).',
                        ],
                    ],
                ],
            ],
            [
                'name' => 'search_example_notes',
                'label' => 'Search Notes',
                'description' => 'Search the notebook by keyword. Matches title and content.',
                'parameters' => [
                    'type' => 'object',
                    'properties' => [
                        'query' => [
                            'type' => 'string',
                            'description' => 'Keyword(s) to search for.',
                        ],
                        'limit' => [
                            'type' => 'integer',
                            'minimum' => 1,
                            'maximum' => 50,
                            'description' => 'Maximum number of results (default 10).',
                        ],
                    ],
                    'required' => ['query'],
                ],
            ],
            [
                'name' => 'summarize_example_note',
                'label' => 'Summarize Note',
                'description' => 'Generate an AI summary of an existing note by id. Uses the configured plotdesk AI provider and stores the summary on the note.',
                'parameters' => [
                    'type' => 'object',
                    'properties' => [
                        'note_id' => [
                            'type' => 'integer',
                            'description' => 'Numeric id of the note to summarize.',
                        ],
                    ],
                    'required' => ['note_id'],
                ],
            ],
        ];
    }

    public function CreateExampleNote($arguments, ChatMessage $message, ChatMessageApp $chatMessageApp, ?ChatMessage $originalMessage = null): string
    {
        $teamId = $this->resolveTeamId($message);
        $groupId = $this->resolveGroupId($message);
        $userId = $this->resolveUserId($message, $originalMessage);

        if (! $teamId) {
            return 'Error: Could not determine team context for this note.';
        }

        $title = trim((string) data_get($arguments, 'title'));
        $content = trim((string) data_get($arguments, 'content'));

        if ($title === '' || $content === '') {
            return 'Error: Both title and content are required to create a note.';
        }

        $tags = data_get($arguments, 'tags', []);

        if (! is_array($tags)) {
            $tags = [];
        }

        $tags = array_values(array_filter(array_map('strval', $tags)));

        $loadingKey = 'example_notes_create_'.md5($title);
        $message->setLoading($loadingKey, 'Saving note...');

        $note = ExampleNote::create([
            'team_id' => $teamId,
            'group_id' => $groupId,
            'user_id' => $userId,
            'title' => mb_substr($title, 0, 200),
            'content' => $content,
            'tags' => $tags,
        ]);

        $message->removeLoading($loadingKey);

        $payload = $this->noteToArray($note);

        $chatMessageApp->update(['results' => $payload]);

        $message->attachPayload('create_example_note', $arguments, [
            'note' => $payload,
        ]);

        return sprintf('Note #%d "%s" saved.', $note->id, $note->title);
    }

    public function ListExampleNotes($arguments, ChatMessage $message, ChatMessageApp $chatMessageApp, ?ChatMessage $originalMessage = null): string
    {
        $teamId = $this->resolveTeamId($message);
        $groupId = $this->resolveGroupId($message);
        $tag = data_get($arguments, 'tag');
        $limit = (int) data_get($arguments, 'limit', 20);
        $limit = max(1, min(100, $limit));

        $message->setLoading('example_notes_list', 'Loading notes...');

        $notes = ExampleNote::query()
            ->where('team_id', $teamId)
            ->when($groupId, fn ($q) => $q->where('group_id', $groupId))
            ->when($tag, fn ($q) => $q->whereJsonContains('tags', $tag))
            ->latest()
            ->limit($limit)
            ->get();

        $message->removeLoading('example_notes_list');

        $payload = $notes->map(fn (ExampleNote $n): array => $this->noteToArray($n, false))->all();

        $chatMessageApp->update(['results' => ['notes' => $payload, 'count' => count($payload)]]);

        $message->attachPayload('list_example_notes', $arguments, [
            'notes' => $payload,
            'total' => count($payload),
            'filters' => ['tag' => $tag],
        ]);

        return sprintf('Found %d note(s).', $notes->count());
    }

    public function SearchExampleNotes($arguments, ChatMessage $message, ChatMessageApp $chatMessageApp, ?ChatMessage $originalMessage = null): string
    {
        $teamId = $this->resolveTeamId($message);
        $groupId = $this->resolveGroupId($message);
        $queryText = trim((string) data_get($arguments, 'query'));
        $limit = (int) data_get($arguments, 'limit', 10);
        $limit = max(1, min(50, $limit));

        if ($queryText === '') {
            return 'Error: A search query is required.';
        }

        $notes = ExampleNote::query()
            ->where('team_id', $teamId)
            ->when($groupId, fn ($q) => $q->where('group_id', $groupId))
            ->where(function ($q) use ($queryText): void {
                $q->where('title', 'like', '%'.$queryText.'%')
                    ->orWhere('content', 'like', '%'.$queryText.'%');
            })
            ->latest()
            ->limit($limit)
            ->get();

        $payload = $notes->map(fn (ExampleNote $n): array => $this->noteToArray($n, false))->all();

        $chatMessageApp->update(['results' => ['notes' => $payload, 'query' => $queryText]]);

        $message->attachPayload('search_example_notes', $arguments, [
            'notes' => $payload,
            'total' => count($payload),
            'filters' => ['query' => $queryText],
        ]);

        return sprintf('Found %d note(s) matching "%s".', $notes->count(), $queryText);
    }

    public function SummarizeExampleNote($arguments, ChatMessage $message, ChatMessageApp $chatMessageApp, ?ChatMessage $originalMessage = null): string
    {
        $teamId = $this->resolveTeamId($message);
        $noteId = (int) data_get($arguments, 'note_id');

        if (! $noteId) {
            return 'Error: A numeric note_id is required.';
        }

        $note = ExampleNote::query()
            ->where('team_id', $teamId)
            ->where('id', $noteId)
            ->first();

        if (! $note) {
            return "Error: Note #{$noteId} not found.";
        }

        $language = (string) data_get($this->app, 'appSettings.summary_language', 'auto');
        $style = (string) data_get($this->app, 'appSettings.summary_style', 'bullet');

        $styleInstruction = match ($style) {
            'executive' => 'Write an executive summary in 3-5 sentences.',
            'action' => 'Extract a list of concrete action items.',
            default => 'Summarize as concise bullet points (max 8 items).',
        };

        $languageInstruction = match ($language) {
            'en' => 'Always respond in English.',
            'de' => 'Antworte immer auf Deutsch.',
            default => 'Respond in the same language as the note.',
        };

        $loadingKey = 'example_notes_summarize_'.$noteId;
        $message->setLoading($loadingKey, 'Generating AI summary...');

        $summary = PluginAi::call(
            team: $this->team,
            systemPrompt: 'You are a precise summarizer for business notes. '.$styleInstruction.' '.$languageInstruction.' Do not invent facts that are not in the note.',
            userPrompt: "Title: {$note->title}\n\nContent:\n{$note->content}",
            contextType: 'plugin:plotdesk-example-plugin:summarize-note',
            temperature: 0.3,
        );

        $message->removeLoading($loadingKey);

        if (! $summary) {
            return 'Error: Could not generate summary. Please verify the AI configuration for this team.';
        }

        $note->update(['summary' => $summary]);

        $payload = $this->noteToArray($note);

        $chatMessageApp->update(['results' => $payload]);

        $message->attachPayload('summarize_example_note', $arguments, [
            'note' => $payload,
            'summary' => $summary,
            'style' => $style,
        ]);

        return sprintf("Note #%d summarized.\n\nSummary:\n%s", $note->id, $summary);
    }

    /**
     * @return array<string, mixed>
     */
    protected function noteToArray(ExampleNote $note, bool $includeContent = true): array
    {
        return [
            'id' => $note->id,
            'title' => $note->title,
            'content' => $includeContent ? $note->content : mb_substr($note->content, 0, 200).(mb_strlen($note->content) > 200 ? '...' : ''),
            'summary' => $note->summary,
            'tags' => $note->tags ?? [],
            'created_at' => optional($note->created_at)?->toIso8601String(),
            'updated_at' => optional($note->updated_at)?->toIso8601String(),
        ];
    }
}
