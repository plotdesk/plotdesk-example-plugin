<?php

namespace PlotdeskExamplePlugin\Console;

use Illuminate\Console\Command;
use PlotdeskExamplePlugin\Models\ExampleWebhookEvent;

class CleanupExampleWebhookEventsCommand extends Command
{
    protected $signature = 'plotdesk-example-plugin:cleanup-webhooks {--days=30 : Delete webhook events older than this many days}';

    protected $description = 'Delete webhook events older than the given number of days (default 30).';

    public function handle(): int
    {
        $days = (int) $this->option('days');
        $cutoff = now()->subDays(max(1, $days));

        $deleted = ExampleWebhookEvent::query()
            ->where('created_at', '<', $cutoff)
            ->delete();

        $this->info("Deleted {$deleted} webhook event(s) older than {$days} days.");

        return self::SUCCESS;
    }
}
