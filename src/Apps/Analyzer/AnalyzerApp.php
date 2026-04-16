<?php

namespace PlotdeskExamplePlugin\Apps\Analyzer;

use App\Apps\BasicApp;
use App\Models\ChatMessage;
use App\Models\ChatMessageApp;
use App\Plugins\Support\PluginAi;
use App\Plugins\Support\PluginCache;
use Override;
use PlotdeskExamplePlugin\Concerns\ResolvesChatContext;
use Throwable;

class AnalyzerApp extends BasicApp
{
    use ResolvesChatContext;

    protected const PLUGIN_ID = 'plotdesk-example-plugin';

    #[Override]
    public function getFunctions(): array
    {
        return [
            [
                'name' => 'analyze_example_text',
                'label' => 'Analyze Text',
                'description' => 'Analyze an arbitrary text for sentiment, language and topics using the plotdesk AI provider. Returns a structured result.',
                'parameters' => [
                    'type' => 'object',
                    'properties' => [
                        'text' => [
                            'type' => 'string',
                            'description' => 'The text to analyze.',
                        ],
                    ],
                    'required' => ['text'],
                ],
            ],
            [
                'name' => 'translate_example_text',
                'label' => 'Translate Text',
                'description' => 'Translate a text into another language. If no target_language is given, the default target from the app settings is used.',
                'parameters' => [
                    'type' => 'object',
                    'properties' => [
                        'text' => [
                            'type' => 'string',
                            'description' => 'The text to translate.',
                        ],
                        'target_language' => [
                            'type' => 'string',
                            'description' => 'ISO language code such as en, de, fr, es.',
                        ],
                    ],
                    'required' => ['text'],
                ],
            ],
            [
                'name' => 'extract_example_entities',
                'label' => 'Extract Entities',
                'description' => 'Extract named entities (people, organizations, places, dates) from a text using the AI provider.',
                'parameters' => [
                    'type' => 'object',
                    'properties' => [
                        'text' => [
                            'type' => 'string',
                            'description' => 'The text to analyze.',
                        ],
                    ],
                    'required' => ['text'],
                ],
            ],
        ];
    }

    public function AnalyzeExampleText($arguments, ChatMessage $message, ChatMessageApp $chatMessageApp, ?ChatMessage $originalMessage = null): string
    {
        $text = trim((string) data_get($arguments, 'text'));

        if ($text === '') {
            return 'Error: A non-empty text is required for analysis.';
        }

        $teamId = $this->resolveTeamId($message);
        $cacheKey = 'analyze:'.md5($text);

        $loadingKey = 'example_analyzer_sentiment_'.md5($text);
        $message->setLoading($loadingKey, 'Analyzing text...');

        $result = PluginCache::remember(
            pluginId: self::PLUGIN_ID,
            key: $cacheKey,
            teamId: $teamId ?? 0,
            minutes: 60,
            callback: function () use ($text): ?array {
                $raw = PluginAi::call(
                    team: $this->team,
                    systemPrompt: 'You are a text analysis engine. Respond ONLY with valid JSON matching this schema: {"sentiment":"positive|neutral|negative","sentiment_score":-1.0..1.0,"language":"ISO-639-1 code","topics":["..."],"keywords":["..."],"summary":"one sentence"}',
                    userPrompt: $text,
                    contextType: 'plugin:plotdesk-example-plugin:analyze-text',
                    temperature: 0.2,
                    jsonMode: true,
                );

                if (! $raw) {
                    return null;
                }

                try {
                    $decoded = json_decode($raw, true, 512, JSON_THROW_ON_ERROR);

                    return is_array($decoded) ? $decoded : null;
                } catch (Throwable) {
                    return null;
                }
            }
        );

        $message->removeLoading($loadingKey);

        if (! $result) {
            return 'Error: Could not analyze text. Please verify the AI configuration for this team.';
        }

        $chatMessageApp->update(['results' => $result]);

        $message->attachPayload('analyze_example_text', $arguments, [
            'analysis' => $result,
            'text_preview' => mb_substr($text, 0, 200),
        ]);

        $sentiment = data_get($result, 'sentiment', 'neutral');
        $language = data_get($result, 'language', 'unknown');
        $topics = data_get($result, 'topics', []);

        return sprintf(
            'Sentiment: %s | Language: %s | Topics: %s',
            $sentiment,
            $language,
            is_array($topics) ? implode(', ', $topics) : '—',
        );
    }

    public function TranslateExampleText($arguments, ChatMessage $message, ChatMessageApp $chatMessageApp, ?ChatMessage $originalMessage = null): string
    {
        $text = trim((string) data_get($arguments, 'text'));

        if ($text === '') {
            return 'Error: A non-empty text is required for translation.';
        }

        $target = (string) data_get($arguments, 'target_language', data_get($this->app, 'appSettings.default_target_language', 'en'));

        $loadingKey = 'example_analyzer_translate_'.md5($text.$target);
        $message->setLoading($loadingKey, 'Translating...');

        $translation = PluginAi::call(
            team: $this->team,
            systemPrompt: "You are a professional translator. Translate the user's message into the language with ISO code '{$target}'. Preserve the formatting. Respond with only the translated text, no commentary.",
            userPrompt: $text,
            contextType: 'plugin:plotdesk-example-plugin:translate',
            temperature: 0.2,
        );

        $message->removeLoading($loadingKey);

        if (! $translation) {
            return 'Error: Could not translate text. Please verify the AI configuration for this team.';
        }

        $chatMessageApp->update(['results' => [
            'source' => $text,
            'translation' => $translation,
            'target_language' => $target,
        ]]);

        $message->attachPayload('translate_example_text', $arguments, [
            'source' => $text,
            'translation' => $translation,
            'target_language' => $target,
        ]);

        return "Translated to {$target}:\n\n{$translation}";
    }

    public function ExtractExampleEntities($arguments, ChatMessage $message, ChatMessageApp $chatMessageApp, ?ChatMessage $originalMessage = null): string
    {
        $text = trim((string) data_get($arguments, 'text'));

        if ($text === '') {
            return 'Error: A non-empty text is required.';
        }

        $loadingKey = 'example_analyzer_entities_'.md5($text);
        $message->setLoading($loadingKey, 'Extracting entities...');

        $raw = PluginAi::call(
            team: $this->team,
            systemPrompt: 'Extract named entities from the text. Respond ONLY with valid JSON: {"persons":["..."],"organizations":["..."],"locations":["..."],"dates":["..."],"misc":["..."]}',
            userPrompt: $text,
            contextType: 'plugin:plotdesk-example-plugin:extract-entities',
            temperature: 0.1,
            jsonMode: true,
        );

        $message->removeLoading($loadingKey);

        $entities = null;

        if ($raw) {
            try {
                $entities = json_decode($raw, true, 512, JSON_THROW_ON_ERROR);
            } catch (Throwable) {
                $entities = null;
            }
        }

        if (! is_array($entities)) {
            return 'Error: Could not extract entities.';
        }

        $chatMessageApp->update(['results' => $entities]);

        $message->attachPayload('extract_example_entities', $arguments, [
            'entities' => $entities,
            'text_preview' => mb_substr($text, 0, 200),
        ]);

        $total = array_sum(array_map(fn ($list): int => is_array($list) ? count($list) : 0, $entities));

        return "Extracted {$total} entities from the text.";
    }
}
