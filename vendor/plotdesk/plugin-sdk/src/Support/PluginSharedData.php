<?php

namespace Plotdesk\PluginSdk\Support;

use Closure;

/**
 * SDK stub for PluginSharedData - share data with the frontend via Inertia props.
 *
 * At runtime, App\Plugins\Support\PluginSharedData is used.
 * Register a callback in your plugin's boot() method to provide
 * data that will be available as `pluginSharedData.{pluginId}` in Vue.
 */
class PluginSharedData
{
    /**
     * Register a data provider callback for this plugin.
     *
     * The callback will be called on every Inertia request.
     * Return an array of data that will be shared with the frontend.
     *
     * Example:
     *   PluginSharedData::register('my-plugin', fn() => ['unread' => 5]);
     *
     * In Vue: usePage().props.pluginSharedData['my-plugin'].unread
     */
    public static function register(string $pluginId, Closure $callback): void {}

    /**
     * Resolve all registered providers. Called internally by plotdesk.
     *
     * @return array<string, mixed>
     */
    public static function resolve(): array
    {
        return [];
    }

    /**
     * Clear all registered providers.
     */
    public static function flush(): void {}
}
