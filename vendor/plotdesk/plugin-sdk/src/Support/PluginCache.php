<?php

namespace Plotdesk\PluginSdk\Support;

use Closure;

/**
 * SDK stub for PluginCache - namespaced caching for plugins.
 *
 * At runtime, App\Plugins\Support\PluginCache is used.
 * All cache keys are automatically prefixed with plugin:{pluginId}:{key}:{teamId}.
 */
class PluginCache
{
    public static function remember(string $pluginId, string $key, int|string $teamId, int $minutes, Closure $callback): mixed
    {
        return null;
    }

    public static function get(string $pluginId, string $key, int|string $teamId, mixed $default = null): mixed
    {
        return null;
    }

    public static function put(string $pluginId, string $key, int|string $teamId, mixed $value, int $minutes = 60): bool
    {
        return false;
    }

    public static function forget(string $pluginId, string $key, int|string $teamId): bool
    {
        return false;
    }

    public static function has(string $pluginId, string $key, int|string $teamId): bool
    {
        return false;
    }
}
