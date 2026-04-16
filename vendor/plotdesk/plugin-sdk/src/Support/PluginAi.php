<?php

namespace Plotdesk\PluginSdk\Support;

use App\Models\Team;
use App\Models\User;

/**
 * SDK stub for PluginAi - provides AI access for plugins.
 *
 * At runtime, App\Plugins\Support\PluginAi is used.
 * This stub exists for IDE autocompletion during plugin development.
 */
class PluginAi
{
    /**
     * Make a direct AI call (simple prompt in, text out).
     *
     * Costs are automatically tracked via AiUsage with the given contextType.
     * Uses the team's default model unless explicitly specified.
     *
     * @param  Team  $team  The team context
     * @param  string  $systemPrompt  System prompt for the AI
     * @param  string  $userPrompt  User prompt for the AI
     * @param  string  $contextType  Tracking context (use 'plugin:{pluginId}:{action}')
     * @param  string|null  $model  Specific model name (null = team default)
     * @param  float  $temperature  Temperature setting (0.0-1.0)
     * @param  bool  $jsonMode  Request JSON output from the AI
     * @param  User|null  $user  User for tracking (optional)
     */
    public static function call(
        $team,
        string $systemPrompt,
        string $userPrompt,
        string $contextType,
        ?string $model = null,
        float $temperature = 0.7,
        bool $jsonMode = false,
        $user = null,
    ): ?string {
        return null;
    }
}
