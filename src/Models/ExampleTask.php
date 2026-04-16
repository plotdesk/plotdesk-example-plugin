<?php

namespace PlotdeskExamplePlugin\Models;

use Illuminate\Database\Eloquent\Model;

class ExampleTask extends Model
{
    protected $table = 'plotdesk_example_plugin_tasks';

    protected $fillable = [
        'team_id',
        'group_id',
        'user_id',
        'title',
        'description',
        'priority',
        'status',
        'assignee',
        'due_date',
        'completed_at',
    ];

    protected function casts(): array
    {
        return [
            'team_id' => 'integer',
            'group_id' => 'integer',
            'user_id' => 'integer',
            'due_date' => 'date',
            'completed_at' => 'datetime',
        ];
    }
}
