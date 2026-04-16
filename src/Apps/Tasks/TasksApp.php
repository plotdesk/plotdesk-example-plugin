<?php

namespace PlotdeskExamplePlugin\Apps\Tasks;

use App\Apps\BasicApp;
use App\Models\ChatMessage;
use App\Models\ChatMessageApp;
use Override;
use PlotdeskExamplePlugin\Concerns\ResolvesChatContext;
use PlotdeskExamplePlugin\Models\ExampleTask;
use Throwable;

class TasksApp extends BasicApp
{
    use ResolvesChatContext;

    #[Override]
    public function getFunctions(): array
    {
        return [
            [
                'name' => 'create_example_task',
                'label' => 'Create Task',
                'description' => 'Create a new task in the example plugin task tracker. Use this whenever the user asks to capture a to-do, action item, follow-up or reminder.',
                'parameters' => [
                    'type' => 'object',
                    'properties' => [
                        'title' => [
                            'type' => 'string',
                            'description' => 'Short, action-oriented title (max 120 chars).',
                        ],
                        'description' => [
                            'type' => 'string',
                            'description' => 'Optional longer description providing context.',
                        ],
                        'priority' => [
                            'type' => 'string',
                            'enum' => ['low', 'medium', 'high', 'urgent'],
                            'description' => 'Priority of the task.',
                        ],
                        'due_date' => [
                            'type' => 'string',
                            'description' => 'Optional due date in YYYY-MM-DD format.',
                        ],
                        'assignee' => [
                            'type' => 'string',
                            'description' => 'Optional assignee name.',
                        ],
                    ],
                    'required' => ['title'],
                ],
            ],
            [
                'name' => 'list_example_tasks',
                'label' => 'List Tasks',
                'description' => 'List tasks for the current group. Supports filtering by status and priority and a limit.',
                'parameters' => [
                    'type' => 'object',
                    'properties' => [
                        'status' => [
                            'type' => 'string',
                            'enum' => ['open', 'in_progress', 'blocked', 'done', 'all'],
                            'description' => 'Filter by status. Defaults to all open tasks.',
                        ],
                        'priority' => [
                            'type' => 'string',
                            'enum' => ['low', 'medium', 'high', 'urgent'],
                            'description' => 'Optional priority filter.',
                        ],
                        'limit' => [
                            'type' => 'integer',
                            'minimum' => 1,
                            'maximum' => 100,
                            'description' => 'Maximum number of tasks to return (default 20).',
                        ],
                    ],
                ],
            ],
            [
                'name' => 'search_example_tasks',
                'label' => 'Search Tasks',
                'description' => 'Search the task tracker by keyword. Matches title and description.',
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
                            'maximum' => 100,
                            'description' => 'Maximum number of results (default 20).',
                        ],
                    ],
                    'required' => ['query'],
                ],
            ],
            [
                'name' => 'complete_example_task',
                'label' => 'Complete Task',
                'description' => 'Mark an existing task as done by its numeric id.',
                'parameters' => [
                    'type' => 'object',
                    'properties' => [
                        'task_id' => [
                            'type' => 'integer',
                            'description' => 'Numeric id of the task to complete.',
                        ],
                    ],
                    'required' => ['task_id'],
                ],
            ],
            [
                'name' => 'delete_example_task',
                'label' => 'Delete Task',
                'description' => 'Delete a task by its numeric id. Use only when the user explicitly asks to remove a task.',
                'parameters' => [
                    'type' => 'object',
                    'properties' => [
                        'task_id' => [
                            'type' => 'integer',
                            'description' => 'Numeric id of the task to delete.',
                        ],
                    ],
                    'required' => ['task_id'],
                ],
            ],
        ];
    }

    public function CreateExampleTask($arguments, ChatMessage $message, ChatMessageApp $chatMessageApp, ?ChatMessage $originalMessage = null): string
    {
        $teamId = $this->resolveTeamId($message);
        $groupId = $this->resolveGroupId($message);
        $userId = $this->resolveUserId($message, $originalMessage);

        if (! $teamId) {
            return 'Error: Could not determine team context for this task.';
        }

        $title = trim((string) data_get($arguments, 'title'));

        if ($title === '') {
            return 'Error: A task title is required.';
        }

        $defaultPriority = (string) data_get($this->app, 'appSettings.default_priority', 'medium');
        $priority = data_get($arguments, 'priority', $defaultPriority);

        if (! in_array($priority, ['low', 'medium', 'high', 'urgent'], true)) {
            $priority = $defaultPriority;
        }

        $autoAssign = (bool) data_get($this->app, 'appSettings.auto_assign_creator', true);
        $assignee = data_get($arguments, 'assignee');

        if (! $assignee && $autoAssign && $userId) {
            $user = \App\Models\User::query()->find($userId);
            $assignee = $user?->name;
        }

        $dueDate = null;
        $rawDueDate = data_get($arguments, 'due_date');

        if ($rawDueDate) {
            try {
                $dueDate = \Carbon\Carbon::parse($rawDueDate)->toDateString();
            } catch (Throwable) {
                $dueDate = null;
            }
        }

        $message->setLoading('example_tasks_create_'.md5($title), 'Creating task...');

        $task = ExampleTask::create([
            'team_id' => $teamId,
            'group_id' => $groupId,
            'user_id' => $userId,
            'title' => mb_substr($title, 0, 120),
            'description' => data_get($arguments, 'description'),
            'priority' => $priority,
            'status' => 'open',
            'assignee' => $assignee,
            'due_date' => $dueDate,
        ]);

        $message->removeLoading('example_tasks_create_'.md5($title));

        $payload = $this->taskToArray($task);

        $chatMessageApp->update(['results' => $payload]);

        $message->attachPayload('create_example_task', $arguments, [
            'task' => $payload,
        ]);

        return sprintf(
            'Task #%d "%s" created with priority %s%s.',
            $task->id,
            $task->title,
            $task->priority,
            $task->due_date ? ' (due '.$task->due_date->toDateString().')' : '',
        );
    }

    public function ListExampleTasks($arguments, ChatMessage $message, ChatMessageApp $chatMessageApp, ?ChatMessage $originalMessage = null): string
    {
        $teamId = $this->resolveTeamId($message);
        $groupId = $this->resolveGroupId($message);

        if (! $teamId) {
            return 'Error: Could not determine team context.';
        }

        $status = data_get($arguments, 'status', 'open');
        $priority = data_get($arguments, 'priority');
        $limit = (int) data_get($arguments, 'limit', 20);
        $limit = max(1, min(100, $limit));

        $message->setLoading('example_tasks_list', 'Loading tasks...');

        $query = ExampleTask::query()
            ->where('team_id', $teamId)
            ->when($groupId, fn ($q) => $q->where('group_id', $groupId))
            ->latest();

        if ($status && $status !== 'all') {
            $query->where('status', $status);
        }

        if ($priority) {
            $query->where('priority', $priority);
        }

        $tasks = $query->limit($limit)->get();

        $message->removeLoading('example_tasks_list');

        $payload = $tasks->map(fn (ExampleTask $task): array => $this->taskToArray($task))->all();

        $chatMessageApp->update(['results' => ['tasks' => $payload, 'count' => count($payload)]]);

        $message->attachPayload('list_example_tasks', $arguments, [
            'tasks' => $payload,
            'total' => count($payload),
            'filters' => [
                'status' => $status,
                'priority' => $priority,
            ],
        ]);

        if ($tasks->isEmpty()) {
            return 'No matching tasks found.';
        }

        return sprintf('Found %d task(s). The list is displayed to the user.', $tasks->count());
    }

    public function SearchExampleTasks($arguments, ChatMessage $message, ChatMessageApp $chatMessageApp, ?ChatMessage $originalMessage = null): string
    {
        $teamId = $this->resolveTeamId($message);
        $groupId = $this->resolveGroupId($message);
        $queryText = trim((string) data_get($arguments, 'query'));

        if ($queryText === '') {
            return 'Error: A search query is required.';
        }

        $limit = (int) data_get($arguments, 'limit', 20);
        $limit = max(1, min(100, $limit));

        $message->setLoading('example_tasks_search_'.md5($queryText), 'Searching tasks...');

        $tasks = ExampleTask::query()
            ->where('team_id', $teamId)
            ->when($groupId, fn ($q) => $q->where('group_id', $groupId))
            ->where(function ($q) use ($queryText): void {
                $q->where('title', 'like', '%'.$queryText.'%')
                    ->orWhere('description', 'like', '%'.$queryText.'%')
                    ->orWhere('assignee', 'like', '%'.$queryText.'%');
            })
            ->latest()
            ->limit($limit)
            ->get();

        $message->removeLoading('example_tasks_search_'.md5($queryText));

        $payload = $tasks->map(fn (ExampleTask $task): array => $this->taskToArray($task))->all();

        $chatMessageApp->update(['results' => ['tasks' => $payload, 'query' => $queryText]]);

        $message->attachPayload('search_example_tasks', $arguments, [
            'tasks' => $payload,
            'total' => count($payload),
            'filters' => [
                'query' => $queryText,
            ],
        ]);

        return sprintf('Found %d task(s) matching "%s".', $tasks->count(), $queryText);
    }

    public function CompleteExampleTask($arguments, ChatMessage $message, ChatMessageApp $chatMessageApp, ?ChatMessage $originalMessage = null): string
    {
        $teamId = $this->resolveTeamId($message);
        $taskId = (int) data_get($arguments, 'task_id');

        if (! $taskId) {
            return 'Error: A numeric task_id is required.';
        }

        $task = ExampleTask::query()
            ->where('team_id', $teamId)
            ->where('id', $taskId)
            ->first();

        if (! $task) {
            return "Error: Task #{$taskId} not found in this team.";
        }

        $task->update([
            'status' => 'done',
            'completed_at' => now(),
        ]);

        $payload = $this->taskToArray($task);

        $chatMessageApp->update(['results' => $payload]);

        $message->attachPayload('complete_example_task', $arguments, [
            'task' => $payload,
        ]);

        return sprintf('Task #%d "%s" marked as done.', $task->id, $task->title);
    }

    public function DeleteExampleTask($arguments, ChatMessage $message, ChatMessageApp $chatMessageApp, ?ChatMessage $originalMessage = null): string
    {
        $teamId = $this->resolveTeamId($message);
        $taskId = (int) data_get($arguments, 'task_id');

        if (! $taskId) {
            return 'Error: A numeric task_id is required.';
        }

        $task = ExampleTask::query()
            ->where('team_id', $teamId)
            ->where('id', $taskId)
            ->first();

        if (! $task) {
            return "Error: Task #{$taskId} not found in this team.";
        }

        $title = $task->title;
        $task->delete();

        $chatMessageApp->update(['results' => ['deleted_id' => $taskId, 'title' => $title]]);

        return "Task #{$taskId} \"{$title}\" has been deleted.";
    }

    /**
     * @return array<string, mixed>
     */
    protected function taskToArray(ExampleTask $task): array
    {
        return [
            'id' => $task->id,
            'title' => $task->title,
            'description' => $task->description,
            'priority' => $task->priority,
            'status' => $task->status,
            'assignee' => $task->assignee,
            'due_date' => optional($task->due_date)->toDateString(),
            'completed_at' => optional($task->completed_at)?->toIso8601String(),
            'created_at' => optional($task->created_at)?->toIso8601String(),
        ];
    }
}
