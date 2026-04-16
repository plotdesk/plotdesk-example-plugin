<?php

namespace PlotdeskExamplePlugin\Models;

use Illuminate\Database\Eloquent\Model;

class ExampleActivityLog extends Model
{
    protected $table = 'plotdesk_example_plugin_activity_log';

    protected $fillable = [
        'team_id',
        'group_id',
        'user_id',
        'event_name',
        'payload',
    ];

    protected function casts(): array
    {
        return [
            'team_id' => 'integer',
            'group_id' => 'integer',
            'user_id' => 'integer',
            'payload' => 'array',
        ];
    }
}
