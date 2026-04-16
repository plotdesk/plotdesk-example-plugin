<script setup>
import { computed } from 'vue';
import { useTranslator } from '../translator.js';

const props = defineProps({
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) },
});

const $t = useTranslator(computed(() => props.translations));

const results = computed(() => props.payload?.results || {});
const summary = computed(() => results.value.summary || '');
const noteId = computed(() => results.value.note_id);
const title = computed(() => results.value.title || '');
</script>

<template>
    <div class="summary-card">
        <div class="summary-card__header">
            <div class="summary-card__icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
            </div>
            <div>
                <div class="summary-card__label">{{ $t('AI Summary') }}</div>
                <div v-if="title" class="summary-card__title">
                    <span v-if="noteId" class="summary-card__note-id">{{ $t('Note #{id}', { id: noteId }) }}</span> {{ title }}
                </div>
            </div>
        </div>
        <p class="summary-card__text">{{ summary || $t('No summary available.') }}</p>
    </div>
</template>

<style scoped>
.summary-card {
    background: var(--pd-success-light);
    border-left: 3px solid var(--pd-success);
    border-radius: var(--pd-radius-md);
    padding: var(--pd-space-md);
}
.summary-card__header { display: flex; gap: var(--pd-space-sm); align-items: flex-start; }
.summary-card__icon { width: 32px; height: 32px; border-radius: 8px; background: var(--pd-bg-card); color: var(--pd-success); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.summary-card__label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--pd-success); }
.summary-card__title { margin-top: 2px; color: var(--pd-text-primary); font-size: 14px; font-weight: 500; }
.summary-card__note-id { color: var(--pd-text-muted); font-size: 11px; margin-right: 4px; }
.summary-card__text { margin: var(--pd-space-sm) 0 0; color: var(--pd-text-primary); font-size: 13px; line-height: 1.5; white-space: pre-wrap; }
</style>
