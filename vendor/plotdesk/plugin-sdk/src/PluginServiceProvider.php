<?php

namespace Plotdesk\PluginSdk;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Support\ServiceProvider;

/**
 * Base class for plotdesk plugin service providers.
 *
 * Every plugin must have a service provider that extends this class.
 * Register it in your plugin.json under "provider".
 *
 * At runtime, the actual App\Plugins\PluginServiceProvider from plotdesk is used.
 * This SDK class exists for IDE autocompletion during plugin development.
 */
abstract class PluginServiceProvider extends ServiceProvider
{
    abstract public function pluginId(): string;

    public function routes(): void {}

    public function apiRoutes(): void {}

    /**
     * @return array<int, array{section: string, name: string, route: string, icon: string, permission?: string}>
     */
    public function navigation(): array
    {
        return [];
    }

    /**
     * @return array{global?: array<string, string>, group?: array<string, string>}
     */
    public function permissions(): array
    {
        return [];
    }

    public function schedule(Schedule $schedule): void {}

    /**
     * @return array<string, array<class-string>>
     */
    public function events(): array
    {
        return [];
    }
}
