<?php

namespace PlotdeskExamplePlugin\Listeners;

use App\Plugins\Events\PluginEvent;
use App\Plugins\Support\PluginCache;
use PlotdeskExamplePlugin\Models\ExampleActivityLog;

class HandleChatMessageCreated
{
    public function handle(PluginEvent $event): void
    {
        $payload = $event->payload;

        $teamId = data_get($payload, 'team_id');
        $groupId = data_get($payload, 'group_id');
        $userId = data_get($payload, 'user_id');
        $chatId = data_get($payload, 'chat_id');
        $from = data_get($payload, 'from');

        if (! $teamId) {
            return;
        }

        ExampleActivityLog::create([
            'team_id' => $teamId,
            'group_id' => $groupId,
            'user_id' => $userId,
            'event_name' => 'chat.message.created',
            'payload' => [
                'chat_id' => $chatId,
                'from' => $from,
            ],
        ]);

        $cacheKey = 'message_count:'.now()->format('Y-m-d');
        $current = (int) PluginCache::get('plotdesk-example-plugin', $cacheKey, $teamId, 0);
        PluginCache::put('plotdesk-example-plugin', $cacheKey, $teamId, $current + 1, 60 * 24);
    }
}
