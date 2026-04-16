<?php

namespace PlotdeskExamplePlugin\Listeners;

use App\Plugins\Events\PluginEvent;
use PlotdeskExamplePlugin\Models\ExampleActivityLog;

class HandleUserJoinedTeam
{
    public function handle(PluginEvent $event): void
    {
        $payload = $event->payload;

        $teamId = data_get($payload, 'team_id');
        $userId = data_get($payload, 'user_id');

        if (! $teamId) {
            return;
        }

        ExampleActivityLog::create([
            'team_id' => $teamId,
            'user_id' => $userId,
            'event_name' => 'user.joined_team',
            'payload' => $payload,
        ]);
    }
}
