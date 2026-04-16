<?php

namespace App\Services;

use App\Models\Team;

class StorageService
{
    public static function downloadAndSaveAssetFromUrl(string $url, string $filename): string|false {}

    public static function downloadAndSaveAssetFromFile(string $fileContent, string $filename): string|false {}

    /**
     * Get file content from the appropriate disk based on configuration
     */
    public static function getFileContent(string $path) {}

    /**
     * Check if file exists on the appropriate disk based on configuration
     */
    public static function fileExists(string $path) {}

    /**
     * @return array{success: bool, storage_path: string}
     */
    public static function savePrivateFileForChat(string $fileContent, string $filename, string $chatId): array {}

    /**
     * @return array{success: bool, storage_path: string}
     */
    public static function savePresetFile(string $fileContent, string $filename, int $teamId, int $presetId): array {}

    public static function getPrivateFileForChat(string $storagePath): ?string {}

    public static function guessMimeType(string $filename): string {}

    public static function deletePrivateFilesForChat(string $chatId): void {}

    public static function deletePresetFiles(int $teamId, int $presetId): void {}

    public static function convertContentToText($team, $content, $filename, $convertImages = false, $lowPriority = false, $fileContainer = null) {}

    public static function convertFileToText($team, $file, $path, $fileExtension, $convertImages = false, $lowPriority = false, $fileContainer = null): bool {}

    public static function cleanHtmlForMarkdownConversion(string $htmlContent): string {}

    public static function getImageContents(?Team $team, string $path): void {}

    public static function convertFileToContainerIfNecessary($file, $path) {}
}
