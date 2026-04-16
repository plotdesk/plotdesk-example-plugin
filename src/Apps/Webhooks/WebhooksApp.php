<?php

namespace PlotdeskExamplePlugin\Apps\Webhooks;

use App\Apps\BasicApp;
use App\Models\ChatMessage;
use App\Models\ChatMessageApp;
use Illuminate\Support\Facades\Http;
use Override;
use PlotdeskExamplePlugin\Concerns\ResolvesChatContext;
use PlotdeskExamplePlugin\Models\ExampleWebhookEvent;
use Throwable;

class WebhooksApp extends BasicApp
{
    use ResolvesChatContext;

    #[Override]
    public function getFunctions(): array
    {
        return [
            [
                'name' => 'dispatch_example_webhook',
                'label' => 'Dispatch Webhook',
                'description' => 'Trigger the configured webhook URL with a JSON payload. Use when the user wants to notify an external system (e.g. Slack, Zapier, custom API).',
                'parameters' => [
                    'type' => 'object',
                    'properties' => [
                        'event_name' => [
                            'type' => 'string',
                            'description' => 'Logical event name, e.g. "sales.deal_closed" or "support.ticket_escalated".',
                        ],
                        'payload' => [
                            'type' => 'object',
                            'description' => 'Arbitrary JSON payload sent to the webhook.',
                        ],
                    ],
                    'required' => ['event_name'],
                ],
            ],
            [
                'name' => 'list_example_webhook_events',
                'label' => 'List Webhook Events',
                'description' => 'Show recent webhook dispatch history for this team.',
                'parameters' => [
                    'type' => 'object',
                    'properties' => [
                        'limit' => [
                            'type' => 'integer',
                            'minimum' => 1,
                            'maximum' => 100,
                            'description' => 'Number of events to return (default 10).',
                        ],
                    ],
                ],
            ],
        ];
    }

    public function DispatchExampleWebhook($arguments, ChatMessage $message, ChatMessageApp $chatMessageApp, ?ChatMessage $originalMessage = null): string
    {
        $teamId = $this->resolveTeamId($message);
        $groupId = $this->resolveGroupId($message);
        $userId = $this->resolveUserId($message, $originalMessage);

        $url = (string) data_get($this->app, 'appSettings.webhook_url');

        if ($url === '') {
            return 'Error: No webhook URL configured. Please set the webhook URL in the app settings first.';
        }

        $event = trim((string) data_get($arguments, 'event_name'));

        if ($event === '') {
            return 'Error: event_name is required.';
        }

        $payload = data_get($arguments, 'payload', []);

        if (! is_array($payload)) {
            $payload = [];
        }

        $timeout = (int) data_get($this->app, 'appSettings.timeout_seconds', 10);
        $timeout = max(1, min(60, $timeout));
        $authHeader = (string) data_get($this->app, 'appSettings.auth_header');

        $loadingKey = 'example_webhook_'.md5($event);
        $message->setLoading($loadingKey, 'Dispatching webhook...');

        $log = ExampleWebhookEvent::create([
            'team_id' => $teamId,
            'group_id' => $groupId,
            'user_id' => $userId,
            'target_url' => $url,
            'event_name' => $event,
            'payload' => $payload,
            'status' => 'pending',
            'dispatched_at' => now(),
        ]);

        $status = null;
        $body = null;
        $success = false;

        try {
            $request = Http::timeout($timeout)
                ->acceptJson()
                ->asJson();

            if ($authHeader !== '') {
                $request = $request->withHeaders(['Authorization' => $authHeader]);
            }

            $response = $request->post($url, [
                'event' => $event,
                'payload' => $payload,
                'dispatched_at' => $log->dispatched_at?->toIso8601String(),
                'team_id' => $teamId,
                'group_id' => $groupId,
            ]);

            $status = $response->status();
            $body = mb_substr((string) $response->body(), 0, 2000);
            $success = $response->successful();
        } catch (Throwable $e) {
            $body = $e->getMessage();
        }

        $log->update([
            'status' => $success ? 'success' : 'failed',
            'response_status' => $status,
            'response_body' => $body,
        ]);

        $message->removeLoading($loadingKey);

        $result = [
            'id' => $log->id,
            'event' => $event,
            'status' => $log->status,
            'response_status' => $status,
            'response_preview' => $body ? mb_substr($body, 0, 300) : null,
            'dispatched_at' => $log->dispatched_at?->toIso8601String(),
        ];

        $chatMessageApp->update(['results' => $result]);

        $message->attachPayload('dispatch_example_webhook', $arguments, $result);

        return $success
            ? "Webhook \"{$event}\" dispatched successfully (HTTP {$status})."
            : "Webhook \"{$event}\" failed".($status !== null ? " (HTTP {$status})" : '').'.';
    }

    public function ListExampleWebhookEvents($arguments, ChatMessage $message, ChatMessageApp $chatMessageApp, ?ChatMessage $originalMessage = null): string
    {
        $teamId = $this->resolveTeamId($message);
        $limit = (int) data_get($arguments, 'limit', 10);
        $limit = max(1, min(100, $limit));

        $events = ExampleWebhookEvent::query()
            ->where('team_id', $teamId)
            ->latest()
            ->limit($limit)
            ->get();

        $payload = $events->map(fn (ExampleWebhookEvent $e): array => [
            'id' => $e->id,
            'event' => $e->event_name,
            'status' => $e->status,
            'response_status' => $e->response_status,
            'target_url' => $e->target_url,
            'dispatched_at' => optional($e->dispatched_at)?->toIso8601String(),
        ])->all();

        $chatMessageApp->update(['results' => ['events' => $payload, 'count' => count($payload)]]);

        return sprintf('Found %d webhook event(s).', count($payload));
    }
}
