<?php

namespace PlotdeskExamplePlugin\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;
use PlotdeskExamplePlugin\Http\Requests\StoreTaskRequest;
use PlotdeskExamplePlugin\Http\Requests\UpdateTaskRequest;
use PlotdeskExamplePlugin\Models\ExampleTask;

class TaskController extends Controller
{
    public function index(Request $request): Response
    {
        $teamId = $request->user()?->current_team_id;

        $tasks = ExampleTask::query()
            ->where('team_id', $teamId)
            ->latest()
            ->get()
            ->map(fn (ExampleTask $task): array => $this->format($task))
            ->all();

        return Inertia::render('Plugins/Page', [
            'pluginId' => 'plotdesk-example-plugin',
            'pluginName' => 'plotdesk Example Plugin',
            'page' => 'Tasks',
            'pageTitle' => 'Example Tasks',
            'data' => [
                'tasks' => $tasks,
            ],
        ]);
    }

    public function store(StoreTaskRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        ExampleTask::create([
            'team_id' => $request->user()->current_team_id,
            'user_id' => $request->user()->id,
            'title' => $validated['title'],
            'description' => $validated['description'] ?? null,
            'priority' => $validated['priority'] ?? 'medium',
            'status' => $validated['status'] ?? 'open',
            'due_date' => $validated['due_date'] ?? null,
        ]);

        return redirect()
            ->route('plugin.plotdesk-example-plugin.tasks.index')
            ->with('success', 'Task created.');
    }

    public function update(UpdateTaskRequest $request, ExampleTask $task): RedirectResponse
    {
        abort_unless((int) $task->team_id === (int) $request->user()?->current_team_id, 403);

        $data = $request->validated();

        if (($data['status'] ?? null) === 'done' && $task->completed_at === null) {
            $data['completed_at'] = now();
        }

        if (array_key_exists('status', $data) && $data['status'] !== 'done') {
            $data['completed_at'] = null;
        }

        $task->update($data);

        return redirect()
            ->route('plugin.plotdesk-example-plugin.tasks.index')
            ->with('success', 'Task updated.');
    }

    public function destroy(Request $request, ExampleTask $task): RedirectResponse
    {
        abort_unless((int) $task->team_id === (int) $request->user()?->current_team_id, 403);

        $task->delete();

        return redirect()
            ->route('plugin.plotdesk-example-plugin.tasks.index')
            ->with('success', 'Task deleted.');
    }

    /**
     * @return array<string, mixed>
     */
    protected function format(ExampleTask $task): array
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
