<?php

namespace PlotdeskExamplePlugin\Http\Controllers\Api;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use PlotdeskExamplePlugin\Http\Requests\StoreTaskRequest;
use PlotdeskExamplePlugin\Http\Requests\UpdateTaskRequest;
use PlotdeskExamplePlugin\Models\ExampleTask;

class ApiTaskController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $teamId = $request->user()?->current_team_id;

        $status = $request->string('status')->toString();
        $priority = $request->string('priority')->toString();

        $query = ExampleTask::query()->where('team_id', $teamId);

        if ($status !== '') {
            $query->where('status', $status);
        }

        if ($priority !== '') {
            $query->where('priority', $priority);
        }

        $tasks = $query->latest()->limit(200)->get()
            ->map(fn (ExampleTask $task): array => $this->format($task))
            ->all();

        return response()->json(['data' => $tasks]);
    }

    public function store(StoreTaskRequest $request): JsonResponse
    {
        $data = $request->validated();

        $task = ExampleTask::create([
            'team_id' => $request->user()->current_team_id,
            'user_id' => $request->user()->id,
            'title' => $data['title'],
            'description' => $data['description'] ?? null,
            'priority' => $data['priority'] ?? 'medium',
            'status' => $data['status'] ?? 'open',
            'due_date' => $data['due_date'] ?? null,
        ]);

        return response()->json(['data' => $this->format($task)], 201);
    }

    public function update(UpdateTaskRequest $request, ExampleTask $task): JsonResponse
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

        return response()->json(['data' => $this->format($task->fresh())]);
    }

    public function destroy(Request $request, ExampleTask $task): JsonResponse
    {
        abort_unless((int) $task->team_id === (int) $request->user()?->current_team_id, 403);

        $task->delete();

        return response()->json(['deleted' => true]);
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
            'updated_at' => optional($task->updated_at)?->toIso8601String(),
        ];
    }
}
