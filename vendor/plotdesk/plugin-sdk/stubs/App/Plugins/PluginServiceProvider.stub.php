<?php

namespace App\Plugins;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Support\ServiceProvider;

abstract class PluginServiceProvider extends ServiceProvider
{
    public function pluginId(): string {}

    public function routes(): void {}

    public function apiRoutes(): void {}

    /**
     * @return array<int, array{section: string, name: string, route: string, icon: string, permission?: string}>
     */
    public function navigation(): array {}

    /**
     * @return array{global?: array<string, string>, group?: array<string, string>}
     */
    public function permissions(): array {}

    public function schedule(Schedule $schedule): void {}

    /**
     * @return array<string, array<class-string>>
     */
    public function events(): array {}
}
