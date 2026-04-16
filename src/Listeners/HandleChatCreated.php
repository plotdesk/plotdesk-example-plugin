<?php

namespace PlotdeskExamplePlugin\Listeners;

use App\Plugins\Events\PluginEvent;
use PlotdeskExamplePlugin\Models\ExampleActivityLog;

class HandleChatCreated
{
    public function handle(PluginEvent $event): void
    {
        $payload = $event->payload;

        $teamId = data_get($payload, 'team_id');
        $groupId = data_get($payload, 'group_id');
        $userId = data_get($payload, 'user_id');
        $chatId = data_get($payload, 'chat_id');

        if (! $teamId) {
            return;
        }

        ExampleActivityLog::create([
            'team_id' => $teamId,
            'group_id' => $groupId,
            'user_id' => $userId,
            'event_name' => 'chat.created',
            'payload' => [
                'chat_id' => $chatId,
            ],
        ]);
    }
}
