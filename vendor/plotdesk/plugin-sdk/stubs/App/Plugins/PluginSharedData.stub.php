<?php

namespace App\Plugins\Support;

use Closure;

class PluginSharedData
{
    public static function register(string $pluginId, Closure $callback): void {}

    /**
     * @return array<string, mixed>
     */
    public static function resolve(): array {}

    public static function flush(): void {}
}
