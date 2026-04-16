<?php

namespace App\Apps;

use App\Models\ChatMessage;
use App\Models\ChatMessageApp;
use App\Models\User;
use App\Models\UserAppToken;

class BasicApp
{
    public function getFunctions(): array {}

    public static function getRoutes() {}

    /**
     * @return array<int, array{name: string, path: string, controller: array{class-string, string}, method: string, middleware?: array<string>}>
     */
    public static function getWebRoutes(): array {}

    public function requiresOAuth(): bool {}

    public function getOAuthConfig(): array {}

    public function getUserToken(User $user): ?UserAppToken {}

    public function requireAuthentication(ChatMessage $aiMessage, ChatMessageApp $chatMessageApp, ChatMessage $userMessage): string {}
}
