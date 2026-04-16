<?php

namespace PlotdeskExamplePlugin;

use App\Plugins\PluginServiceProvider;
use App\Plugins\Support\PluginSharedData;
use Illuminate\Console\Scheduling\Schedule;
use PlotdeskExamplePlugin\Console\CleanupExampleWebhookEventsCommand;
use PlotdeskExamplePlugin\Listeners\HandleChatCreated;
use PlotdeskExamplePlugin\Listeners\HandleChatMessageCreated;
use PlotdeskExamplePlugin\Listeners\HandleUserJoinedTeam;
use PlotdeskExamplePlugin\Models\ExampleTask;
use PlotdeskExamplePlugin\Models\ExampleWebhookEvent;

class PlotdeskExamplePluginPlugin extends PluginServiceProvider
{
    public function pluginId(): string
    {
        return 'plotdesk-example-plugin';
    }

    public function boot(): void
    {
        $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'plotdesk-example-plugin');

        if ($this->app->runningInConsole()) {
            $this->commands([
                CleanupExampleWebhookEventsCommand::class,
            ]);
        }

        PluginSharedData::register($this->pluginId(), function (): array {
            $teamId = optional(auth()->user())->current_team_id;

            if (! $teamId) {
                return [
                    'open_tasks' => 0,
                    'recent_webhooks' => 0,
                ];
            }

            return [
                'open_tasks' => ExampleTask::query()
                    ->where('team_id', $teamId)
                    ->whereNull('completed_at')
                    ->count(),
                'recent_webhooks' => ExampleWebhookEvent::query()
                    ->where('team_id', $teamId)
                    ->where('created_at', '>=', now()->subDay())
                    ->count(),
            ];
        });
    }

    public function schedule(Schedule $schedule): void
    {
        $schedule->command('plotdesk-example-plugin:cleanup-webhooks')
            ->daily()
            ->withoutOverlapping();
    }

    /**
     * @return array<string, array<class-string>>
     */
    public function events(): array
    {
        return [
            'chat.created' => [HandleChatCreated::class],
            'chat.message.created' => [HandleChatMessageCreated::class],
            'user.joined_team' => [HandleUserJoinedTeam::class],
        ];
    }
}
