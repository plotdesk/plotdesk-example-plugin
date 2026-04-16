<?php

namespace Plotdesk\PluginSdk\Support;

use App\Models\Team;
use App\Models\User;

/**
 * SDK stub for PluginChat - programmatic chat with full platform access.
 *
 * At runtime, App\Plugins\Support\PluginChat is used.
 * This stub exists for IDE autocompletion during plugin development.
 */
class PluginChat
{
    /**
     * Run a programmatic chat with full platform access.
     *
     * Creates a hidden chat in the specified group with access to all
     * group resources (Silos, Tables, Apps, File Containers, etc.).
     * Function calls run normally (up to 128 iterations).
     *
     * @param  Team  $team  The team context
     * @param  int  $groupId  The group to run the chat in
     * @param  string  $userMessage  The message to send
     * @param  string  $contextType  Tracking context (use 'plugin:{pluginId}:{action}')
     * @param  User|null  $user  User context (null = first team member)
     * @param  string|null  $model  Specific model name (null = team default)
     * @param  bool  $hidden  Hide the chat from the user (default: true)
     */
    public static function run(
        $team,
        int $groupId,
        string $userMessage,
        string $contextType,
        $user = null,
        ?string $model = null,
        bool $hidden = true,
    ): ?string {
        return null;
    }
}
