<script setup>
import { computed } from 'vue';

const props = defineProps({
    payload: { type: Object, default: () => ({}) },
});

const results = computed(() => props.payload?.results || {});
const entities = computed(() => results.value.entities || {});

const groups = computed(() => [
    { id: 'people', label: 'People', style: 'pd-chip--brand' },
    { id: 'organizations', label: 'Organizations', style: 'pd-chip--info' },
    { id: 'places', label: 'Places', style: 'pd-chip--warning' },
    { id: 'dates', label: 'Dates', style: 'pd-chip--success' },
]);

const totalCount = computed(() =>
    Object.values(entities.value).reduce((acc, list) => acc + (Array.isArray(list) ? list.length : 0), 0),
);
</script>

<template>
    <div class="entities">
        <div class="entities__header">
            <span>Entities</span>
            <span class="entities__count">{{ totalCount }} found</span>
        </div>
        <div v-if="totalCount === 0" class="entities__empty">No entities detected.</div>
        <div v-else class="entities__groups">
            <div v-for="group in groups" :key="group.id" class="entities__group">
                <div class="entities__group-label">{{ group.label }}</div>
                <div class="entities__list">
                    <span
                        v-for="value in (entities[group.id] || [])"
                        :key="`${group.id}-${value}`"
                        class="pd-chip"
                        :class="group.style"
                    >{{ value }}</span>
                    <span v-if="(entities[group.id] || []).length === 0" class="entities__empty-inline">—</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.entities { background: var(--pd-bg-card); border: 1px solid var(--pd-border); border-radius: var(--pd-radius-md); overflow: hidden; }
.entities__header { padding: var(--pd-space-sm) var(--pd-space-md); background: var(--pd-bg-subtle); display: flex; justify-content: space-between; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--pd-text-secondary); border-bottom: 1px solid var(--pd-border-light); }
.entities__count { font-weight: 500; text-transform: none; letter-spacing: normal; color: var(--pd-text-muted); }
.entities__empty { padding: var(--pd-space-lg); text-align: center; color: var(--pd-text-muted); font-size: 13px; }
.entities__groups { padding: var(--pd-space-md); display: grid; gap: var(--pd-space-md); }
.entities__group-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--pd-text-secondary); font-weight: 600; margin-bottom: 4px; }
.entities__list { display: flex; flex-wrap: wrap; gap: 6px; }
.entities__empty-inline { color: var(--pd-text-muted); font-size: 13px; }

.pd-chip { display: inline-flex; padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 500; }
.pd-chip--brand { background: var(--pd-brand-light); color: var(--pd-brand); }
.pd-chip--info { background: var(--pd-info-light); color: var(--pd-info); }
.pd-chip--warning { background: var(--pd-warning-light); color: var(--pd-warning); }
.pd-chip--success { background: var(--pd-success-light); color: var(--pd-success); }
</style>
