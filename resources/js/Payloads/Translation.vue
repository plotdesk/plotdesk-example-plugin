<script setup>
import { computed } from 'vue';
import { useTranslator } from '../translator.js';

const props = defineProps({
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) },
});

const $t = useTranslator(computed(() => props.translations));

const results = computed(() => props.payload?.results || {});
const source = computed(() => results.value.source_text || '');
const translated = computed(() => results.value.translated_text || '');
const sourceLanguage = computed(() => results.value.source_language || '—');
const targetLanguage = computed(() => results.value.target_language || '—');
</script>

<template>
    <div class="translation">
        <div class="translation__header">
            <span>{{ $t('Translation') }}</span>
            <span class="translation__route">{{ sourceLanguage }} → {{ targetLanguage }}</span>
        </div>
        <div class="translation__grid">
            <div class="translation__pane">
                <div class="translation__label">{{ $t('Original') }}</div>
                <p class="translation__text">{{ source || '—' }}</p>
            </div>
            <div class="translation__pane translation__pane--target">
                <div class="translation__label">{{ $t('Translation') }}</div>
                <p class="translation__text">{{ translated || '—' }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.translation { background: var(--pd-bg-card); border: 1px solid var(--pd-border); border-radius: var(--pd-radius-md); overflow: hidden; }
.translation__header {
    padding: var(--pd-space-sm) var(--pd-space-md);
    background: var(--pd-bg-subtle);
    display: flex; justify-content: space-between; align-items: center;
    font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;
    color: var(--pd-text-secondary);
    border-bottom: 1px solid var(--pd-border-light);
}
.translation__route { font-family: 'SFMono-Regular', ui-monospace, monospace; font-weight: 600; color: var(--pd-text-muted); text-transform: none; letter-spacing: normal; }
.translation__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--pd-border-light); }
.translation__pane { background: var(--pd-bg-card); padding: var(--pd-space-md); }
.translation__pane--target { background: var(--pd-brand-light); }
.translation__label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--pd-text-secondary); margin-bottom: 4px; }
.translation__text { margin: 0; font-size: 13px; color: var(--pd-text-primary); white-space: pre-wrap; line-height: 1.5; }
</style>
