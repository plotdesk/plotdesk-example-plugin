<?php

namespace PlotdeskExamplePlugin\Models;

use Illuminate\Database\Eloquent\Model;

class ExampleWebhookEvent extends Model
{
    protected $table = 'plotdesk_example_plugin_webhook_events';

    protected $fillable = [
        'team_id',
        'group_id',
        'user_id',
        'target_url',
        'event_name',
        'payload',
        'response_status',
        'response_body',
        'status',
        'dispatched_at',
    ];

    protected function casts(): array
    {
        return [
            'team_id' => 'integer',
            'group_id' => 'integer',
            'user_id' => 'integer',
            'payload' => 'array',
            'response_status' => 'integer',
            'dispatched_at' => 'datetime',
        ];
    }
}
