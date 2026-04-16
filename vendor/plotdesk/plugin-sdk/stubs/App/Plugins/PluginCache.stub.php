<?php

namespace App\Plugins\Support;

use Closure;

class PluginCache
{
    public static function remember(string $pluginId, string $key, string|int $teamId, int $minutes, Closure $callback): mixed {}

    public static function get(string $pluginId, string $key, string|int $teamId, mixed $default = null): mixed {}

    public static function put(string $pluginId, string $key, string|int $teamId, mixed $value = null, int $minutes = 60): bool {}

    public static function forget(string $pluginId, string $key, string|int $teamId): bool {}

    public static function has(string $pluginId, string $key, string|int $teamId): bool {}
}
