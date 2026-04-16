<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Http\UploadedFile;

class Group extends Model
{
    public function parentGroup(): BelongsTo {}

    public function grandparentGroup(): BelongsTo {}

    public function groups(): HasMany {}

    public function grandchildGroups(): HasManyThrough {}

    public function team(): BelongsTo {}

    /**
     * @return BelongsTo<User, $this>
     */
    public function createdBy(): BelongsTo {}

    public function groupUsers(): HasMany {}

    public function startPreset(): BelongsTo {}

    public function startPresetWithoutContent(): BelongsTo {}

    /** @return BelongsTo<Workflow, $this> */
    public function startWorkflow(): BelongsTo {}

    public function teamAppSettings(): HasMany {}

    /**
     * Get the user roles for the group.
     */
    public function userRoles(): HasMany {}

    /**
     * Get the memories for the group.
     */
    public function memories(): HasMany {}

    public static function getChildGroupIds(string $groupId): array {}

    public static function getParentGroupId(string $groupId): ?int {}

    public static function getGrandparentGroupId(string $groupId): ?int {}

    public static function getParentGroupIds(string $groupId): array {}

    public function translatedWelcomeMessage(): void {}

    public function translatedInitialSuggestions(?string $targetLanguage = null): void {}

    /**
     * Determine if the group is a level 1 group (root group)
     */
    public function isLevelOne(): bool {}

    /**
     * Determine if the group is a level 2 group (child of root)
     */
    public function isLevelTwo(): bool {}

    /**
     * Determine if the group is a level 3 group (grandchild)
     */
    public function isLevelThree(): bool {}

    /**
     * Get the level of the group (1, 2, or 3)
     */
    public function getLevel(): int {}

    /**
     * Get all ancestor groups (parent and grandparent)
     */
    public function getAncestorIds(): array {}

    /**
     * Check if this group is a descendant of the provided group
     */
    public function isDescendantOf(int $ancestorId): bool {}

    /**
     * Check if a user has access to this group
     */
    public function userHasAccess(int $userId): bool {}

    public function updateChatbotAvatar(UploadedFile $photo, string $storagePath = 'group-avatars'): void {}

    public function deleteChatbotAvatar(): void {}

    public function chatbotAvatarUrl(): Attribute {}

    public function getFinalEnableResponseSuggestionsAttribute(): bool {}

    public function getFinalAgentModeAttribute(): string {}

    public function getFinalIsChatPrivacyForcedAttribute(): bool {}

    public function isAgentModeAvailable(): bool {}

    public function isAgentModeDefault(): bool {}

    /**
     * Get a new factory instance for the model.
     *
     * @param  (callable(array<string, mixed>, static|null): array<string, mixed>)|array<string, mixed>|int|null  $count
     * @param  (callable(array<string, mixed>, static|null): array<string, mixed>)|array<string, mixed>  $state
     * @return TFactory
     */
    public static function factory($count = null, $state = []) {}
}
