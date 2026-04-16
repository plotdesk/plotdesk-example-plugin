<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Collection;

class ChatMessage extends Model
{
    public function chat(): BelongsTo {}

    public function user(): BelongsTo {}

    public function preset() {}

    public function aiModelDeployment() {}

    public function appSummary() {}

    public function chatMessageApps() {}

    public function getUserMainAttribute() {}

    public function attachPayload($function, $arguments, $results) {}

    public function setPayload($payloadId, $function, $arguments, $results) {}

    public function setLoading($key, $value): void {}

    public function removeLoading($key): void {}

    public function attachMessage(string $text): void {}

    public function getModelCharLimit($percentageOfMax = 0.33, $tokenMultiplier = 4): float {}

    public function getMessageAttribute($value) {}

    public function attachCopyIconToCodeBlock($content) {}

    /**
     * @return \Illuminate\Support\Collection<int, Chat>
     */
    public function subAgentChats(): Collection {}

    public function getCacheKey(?int $userId = null): string {}

    /**
     * @return array<string, mixed>
     */
    public function getCacheData(): array {}

    public function updateCache(): void {}

    /**
     * @return array<string, mixed>|null
     */
    public static function getFromCache(string $chatId, int $messageId, ?int $userId = null): ?array {}

    /**
     * Get a new factory instance for the model.
     *
     * @param  (callable(array<string, mixed>, static|null): array<string, mixed>)|array<string, mixed>|int|null  $count
     * @param  (callable(array<string, mixed>, static|null): array<string, mixed>)|array<string, mixed>  $state
     * @return TFactory
     */
    public static function factory($count = null, $state = []) {}
}
