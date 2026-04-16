<script setup>
import { computed } from 'vue';
import { useTranslator } from '../translator.js';

const props = defineProps({
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) },
});

const $t = useTranslator(computed(() => props.translations));

const results = computed(() => props.payload?.results || {});
const sentiment = computed(() => (results.value.sentiment || '').toLowerCase());
const sentimentLabel = computed(() => sentiment.value ? $t(sentiment.value) : '—');
const language = computed(() => results.value.language || '—');
const topics = computed(() => results.value.topics || []);

const sentimentStyle = computed(() => {
    const map = {
        positive: 'sent--positive',
        negative: 'sent--negative',
        neutral: 'sent--neutral',
        mixed: 'sent--mixed',
    };
    return map[sentiment.value] || 'sent--neutral';
});
</script>

<template>
    <div class="analysis">
        <div class="analysis__header">
            <span>{{ $t('Text Analysis') }}</span>
        </div>
        <div class="analysis__grid">
            <div class="analysis__box">
                <div class="analysis__label">{{ $t('Sentiment') }}</div>
                <div class="analysis__value" :class="sentimentStyle">{{ sentimentLabel }}</div>
            </div>
            <div class="analysis__box">
                <div class="analysis__label">{{ $t('Language') }}</div>
                <div class="analysis__value">{{ language }}</div>
            </div>
            <div class="analysis__box analysis__box--wide">
                <div class="analysis__label">{{ $t('Topics') }}</div>
                <div v-if="topics.length === 0" class="analysis__value">—</div>
                <div v-else class="analysis__topics">
                    <span v-for="topic in topics" :key="topic" class="pd-chip pd-chip--info">{{ topic }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.analysis { background: var(--pd-bg-card); border: 1px solid var(--pd-border); border-radius: var(--pd-radius-md); overflow: hidden; }
.analysis__header {
    padding: var(--pd-space-sm) var(--pd-space-md); background: var(--pd-bg-subtle);
    font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;
    color: var(--pd-text-secondary);
    border-bottom: 1px solid var(--pd-border-light);
}
.analysis__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: var(--pd-border-light);
}
.analysis__box { background: var(--pd-bg-card); padding: var(--pd-space-md); display: grid; gap: 4px; }
.analysis__box--wide { grid-column: 1 / -1; }
.analysis__label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--pd-text-secondary); font-weight: 600; }
.analysis__value { font-size: 15px; font-weight: 600; color: var(--pd-text-primary); text-transform: capitalize; }
.sent--positive { color: var(--pd-success); }
.sent--negative { color: var(--pd-danger); }
.sent--neutral { color: var(--pd-text-secondary); }
.sent--mixed { color: var(--pd-warning); }

.analysis__topics { display: flex; gap: 4px; flex-wrap: wrap; }
.pd-chip { display: inline-flex; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 600; }
.pd-chip--info { background: var(--pd-info-light); color: var(--pd-info); }
</style>
