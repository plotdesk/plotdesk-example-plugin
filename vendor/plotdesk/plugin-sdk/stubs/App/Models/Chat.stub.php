<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Chat extends Model
{
    public function team(): BelongsTo {}

    public function user(): BelongsTo {}

    public function group(): BelongsTo {}

    public function messages(): HasMany {}

    public function saves(): HasMany {}

    public function getUserMainAttribute() {}

    public function orderedMessages() {}

    public function firstMessage() {}

    public function firstDisabledMessage() {}

    public function lastAiMessage() {}

    public function lastMessage() {}

    public function prompts() {}

    public function schedulerExecution() {}

    public function widgetExecution() {}

    public function chatbot() {}

    public function agentParentChat(): BelongsTo {}

    public function agentSubChats(): HasMany {}

    public function scopePublic($query) {}

    public function wyredTeamAccess(): bool {}

    public static function getSavedChats($groupId) {}

    public static function getRecentChats(string $groupId) {}

    /**
     * Get a new factory instance for the model.
     *
     * @param  (callable(array<string, mixed>, static|null): array<string, mixed>)|array<string, mixed>|int|null  $count
     * @param  (callable(array<string, mixed>, static|null): array<string, mixed>)|array<string, mixed>  $state
     * @return TFactory
     */
    public static function factory($count = null, $state = []) {}
}
