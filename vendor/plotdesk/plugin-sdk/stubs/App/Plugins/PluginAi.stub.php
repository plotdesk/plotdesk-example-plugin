<?php

namespace App\Plugins\Support;

use App\Models\Team;
use App\Models\User;

class PluginAi
{
    public static function call(Team $team, string $systemPrompt, string $userPrompt, string $contextType, ?string $model = null, float $temperature = 0.7, bool $jsonMode = false, ?User $user = null): ?string {}
}
