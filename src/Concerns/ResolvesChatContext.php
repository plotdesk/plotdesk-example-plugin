<?php

namespace PlotdeskExamplePlugin\Concerns;

use App\Models\ChatMessage;

trait ResolvesChatContext
{
    protected function resolveTeamId(ChatMessage $message): ?int
    {
        if ($this->team?->id) {
            return (int) $this->team->id;
        }

        $message->loadMissing('chat');

        return $message->chat?->team_id;
    }

    protected function resolveGroupId(ChatMessage $message): ?int
    {
        $message->loadMissing('chat');

        return $message->chat?->group_id;
    }

    protected function resolveUserId(ChatMessage $message, ?ChatMessage $originalMessage = null): ?int
    {
        if ($originalMessage?->user_id) {
            return (int) $originalMessage->user_id;
        }

        $message->loadMissing('chat');

        return $message->chat?->user_id;
    }
}
