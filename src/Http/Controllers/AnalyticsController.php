<?php

namespace PlotdeskExamplePlugin\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Carbon;
use Inertia\Inertia;
use Inertia\Response;
use PlotdeskExamplePlugin\Models\ExampleTask;
use PlotdeskExamplePlugin\Models\ExampleWebhookEvent;

class AnalyticsController extends Controller
{
    public function __invoke(Request $request): Response
    {
        abort_unless(
            $request->user()?->hasPermission('view_plotdesk_example_plugin_analytics')
                || $request->user()?->is_platform_admin,
            403
        );

        $teamId = $request->user()?->current_team_id;

        $days = collect(range(6, 0))->map(fn (int $offset): string => Carbon::now()->subDays($offset)->toDateString())->all();

        $taskSeries = [];
        $webhookSeries = [];

        foreach ($days as $day) {
            $start = Carbon::parse($day)->startOfDay();
            $end = Carbon::parse($day)->endOfDay();

            $taskSeries[] = [
                'date' => $day,
                'count' => ExampleTask::query()
                    ->where('team_id', $teamId)
                    ->whereBetween('created_at', [$start, $end])
                    ->count(),
            ];

            $webhookSeries[] = [
                'date' => $day,
                'count' => ExampleWebhookEvent::query()
                    ->where('team_id', $teamId)
                    ->whereBetween('created_at', [$start, $end])
                    ->count(),
            ];
        }

        $priorityBreakdown = ExampleTask::query()
            ->where('team_id', $teamId)
            ->selectRaw('priority, count(*) as total')
            ->groupBy('priority')
            ->pluck('total', 'priority')
            ->all();

        $webhookStatus = ExampleWebhookEvent::query()
            ->where('team_id', $teamId)
            ->selectRaw('status, count(*) as total')
            ->groupBy('status')
            ->pluck('total', 'status')
            ->all();

        return Inertia::render('Plugins/Page', [
            'pluginId' => 'plotdesk-example-plugin',
            'pluginName' => 'plotdesk Example Plugin',
            'page' => 'Analytics',
            'pageTitle' => 'Example Analytics',
            'data' => [
                'task_series' => $taskSeries,
                'webhook_series' => $webhookSeries,
                'priority_breakdown' => $priorityBreakdown,
                'webhook_status' => $webhookStatus,
            ],
        ]);
    }
}
