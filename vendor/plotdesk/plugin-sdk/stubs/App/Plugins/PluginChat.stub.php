<?php

namespace App\Plugins\Support;

use App\Models\Team;
use App\Models\User;

class PluginChat
{
    public static function run(Team $team, int $groupId, string $userMessage, string $contextType, ?User $user = null, ?string $model = null, bool $hidden = true): ?string {}
}
