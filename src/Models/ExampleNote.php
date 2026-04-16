<?php

namespace PlotdeskExamplePlugin\Models;

use Illuminate\Database\Eloquent\Model;

class ExampleNote extends Model
{
    protected $table = 'plotdesk_example_plugin_notes';

    protected $fillable = [
        'team_id',
        'group_id',
        'user_id',
        'title',
        'content',
        'summary',
        'tags',
    ];

    protected function casts(): array
    {
        return [
            'team_id' => 'integer',
            'group_id' => 'integer',
            'user_id' => 'integer',
            'tags' => 'array',
        ];
    }
}
