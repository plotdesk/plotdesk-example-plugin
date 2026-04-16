<?php

namespace PlotdeskExamplePlugin\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;
use PlotdeskExamplePlugin\Models\ExampleActivityLog;
use PlotdeskExamplePlugin\Models\ExampleNote;
use PlotdeskExamplePlugin\Models\ExampleTask;
use PlotdeskExamplePlugin\Models\ExampleWebhookEvent;

class DashboardController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $teamId = $request->user()?->current_team_id;

        $stats = [
            'open_tasks' => ExampleTask::query()
                ->where('team_id', $teamId)
                ->whereNull('completed_at')
                ->count(),
            'completed_tasks' => ExampleTask::query()
                ->where('team_id', $teamId)
                ->whereNotNull('completed_at')
                ->count(),
            'notes' => ExampleNote::query()
                ->where('team_id', $teamId)
                ->count(),
            'webhook_events_24h' => ExampleWebhookEvent::query()
                ->where('team_id', $teamId)
                ->where('created_at', '>=', now()->subDay())
                ->count(),
        ];

        $recentTasks = ExampleTask::query()
            ->where('team_id', $teamId)
            ->latest()
            ->limit(5)
            ->get()
            ->map(fn (ExampleTask $task): array => [
                'id' => $task->id,
                'title' => $task->title,
                'priority' => $task->priority,
                'status' => $task->status,
                'due_date' => optional($task->due_date)->toDateString(),
                'is_completed' => $task->completed_at !== null,
            ])
            ->all();

        $recentNotes = ExampleNote::query()
            ->where('team_id', $teamId)
            ->latest()
            ->limit(5)
            ->get()
            ->map(fn (ExampleNote $note): array => [
                'id' => $note->id,
                'title' => $note->title,
                'has_summary' => ! empty($note->summary),
                'updated_at' => optional($note->updated_at)?->toIso8601String(),
            ])
            ->all();

        $recentActivity = ExampleActivityLog::query()
            ->where('team_id', $teamId)
            ->latest()
            ->limit(10)
            ->get()
            ->map(fn (ExampleActivityLog $log): array => [
                'id' => $log->id,
                'event_name' => $log->event_name,
                'created_at' => optional($log->created_at)?->toIso8601String(),
                'payload' => $log->payload,
            ])
            ->all();

        return Inertia::render('Plugins/Page', [
            'pluginId' => 'plotdesk-example-plugin',
            'pluginName' => 'plotdesk Example Plugin',
            'page' => 'Dashboard',
            'pageTitle' => 'Example Dashboard',
            'data' => [
                'stats' => $stats,
                'recent_tasks' => $recentTasks,
                'recent_notes' => $recentNotes,
                'recent_activity' => $recentActivity,
            ],
        ]);
    }
}
