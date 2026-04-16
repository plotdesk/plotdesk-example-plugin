<?php

namespace PlotdeskExamplePlugin\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;
use PlotdeskExamplePlugin\Http\Requests\StoreNoteRequest;
use PlotdeskExamplePlugin\Http\Requests\UpdateNoteRequest;
use PlotdeskExamplePlugin\Models\ExampleNote;

class NoteController extends Controller
{
    public function index(Request $request): Response
    {
        $teamId = $request->user()?->current_team_id;

        $notes = ExampleNote::query()
            ->where('team_id', $teamId)
            ->latest()
            ->get()
            ->map(fn (ExampleNote $note): array => $this->format($note))
            ->all();

        return Inertia::render('Plugins/Page', [
            'pluginId' => 'plotdesk-example-plugin',
            'pluginName' => 'plotdesk Example Plugin',
            'page' => 'Notes',
            'pageTitle' => 'Example Notebook',
            'data' => [
                'notes' => $notes,
            ],
        ]);
    }

    public function store(StoreNoteRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        ExampleNote::create([
            'team_id' => $request->user()->current_team_id,
            'user_id' => $request->user()->id,
            'title' => $validated['title'],
            'content' => $validated['content'] ?? '',
            'tags' => $validated['tags'] ?? [],
        ]);

        return redirect()
            ->route('plugin.plotdesk-example-plugin.notes.index')
            ->with('success', 'Note created.');
    }

    public function update(UpdateNoteRequest $request, ExampleNote $note): RedirectResponse
    {
        abort_unless((int) $note->team_id === (int) $request->user()?->current_team_id, 403);

        $note->update($request->validated());

        return redirect()
            ->route('plugin.plotdesk-example-plugin.notes.index')
            ->with('success', 'Note updated.');
    }

    public function destroy(Request $request, ExampleNote $note): RedirectResponse
    {
        abort_unless((int) $note->team_id === (int) $request->user()?->current_team_id, 403);

        $note->delete();

        return redirect()
            ->route('plugin.plotdesk-example-plugin.notes.index')
            ->with('success', 'Note deleted.');
    }

    /**
     * @return array<string, mixed>
     */
    protected function format(ExampleNote $note): array
    {
        return [
            'id' => $note->id,
            'title' => $note->title,
            'content' => $note->content,
            'summary' => $note->summary,
            'tags' => $note->tags ?? [],
            'created_at' => optional($note->created_at)?->toIso8601String(),
            'updated_at' => optional($note->updated_at)?->toIso8601String(),
        ];
    }
}
