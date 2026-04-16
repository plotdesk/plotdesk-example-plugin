<script setup>
import { computed } from 'vue';
import { useTranslator } from '../translator.js';

const props = defineProps({
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) },
});

const $t = useTranslator(computed(() => props.translations));

const entities = computed(() => props.payload?.results?.entities || {});
const groups = computed(() =>
    Object.entries(entities.value)
        .filter(([, values]) => Array.isArray(values) && values.length)
        .map(([key, values]) => ({ key, values }))
);
const entityLabel = (key) => $t(`entity.${key}`);
</script>

<template>
    <div class="entities">
        <div class="entities__header">
            <span>{{ $t('Entities') }}</span>
        </div>
        <div v-if="groups.length === 0" class="entities__empty">{{ $t('No entities found.') }}</div>
        <div v-else class="entities__groups">
            <div v-for="group in groups" :key="group.key" class="entities__group">
                <div class="entities__label">{{ entityLabel(group.key) }}</div>
                <div class="entities__chips">
                    <span v-for="value in group.values" :key="`${group.key}-${value}`" class="pd-chip pd-chip--info">{{ value }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.entities { background: var(--pd-bg-card); border: 1px solid var(--pd-border); border-radius: var(--pd-radius-md); overflow: hidden; }
.entities__header { padding: var(--pd-space-sm) var(--pd-space-md); background: var(--pd-bg-subtle); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--pd-text-secondary); border-bottom: 1px solid var(--pd-border-light); }
.entities__empty { padding: var(--pd-space-lg); text-align: center; color: var(--pd-text-muted); font-size: 13px; }
.entities__groups { padding: var(--pd-space-md); display: grid; gap: var(--pd-space-sm); }
.entities__label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--pd-text-secondary); margin-bottom: 4px; }
.entities__chips { display: flex; flex-wrap: wrap; gap: 4px; }
.pd-chip { display: inline-flex; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 600; }
.pd-chip--info { background: var(--pd-info-light); color: var(--pd-info); }
</style>
