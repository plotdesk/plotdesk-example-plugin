<script setup>
import { computed } from 'vue';

const props = defineProps({
    payload: { type: Object, default: () => ({}) },
});

const note = computed(() => props.payload?.results?.note || {});
</script>

<template>
    <div class="note-card">
        <div class="note-card__header">
            <div class="note-card__icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
            </div>
            <div>
                <div class="note-card__title">
                    <span v-if="note.id" class="note-card__id">#{{ note.id }}</span>
                    {{ note.title }}
                </div>
                <div v-if="(note.tags || []).length" class="note-card__tags">
                    <span v-for="tag in note.tags" :key="tag" class="pd-chip pd-chip--muted">{{ tag }}</span>
                </div>
            </div>
        </div>
        <p v-if="note.preview" class="note-card__preview">{{ note.preview }}</p>
    </div>
</template>

<style scoped>
.note-card { background: var(--pd-bg-card); border: 1px solid var(--pd-border); border-radius: var(--pd-radius-md); padding: var(--pd-space-md); box-shadow: var(--pd-shadow-sm); }
.note-card__header { display: flex; gap: var(--pd-space-sm); align-items: flex-start; }
.note-card__icon { width: 32px; height: 32px; border-radius: 8px; background: var(--pd-info-light); color: var(--pd-info); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.note-card__title { font-size: 14px; font-weight: 500; color: var(--pd-text-primary); display: flex; gap: var(--pd-space-xs); align-items: center; }
.note-card__id { color: var(--pd-text-muted); font-size: 11px; font-weight: 600; }
.note-card__tags { display: flex; gap: 4px; flex-wrap: wrap; margin-top: 4px; }
.note-card__preview { margin: var(--pd-space-sm) 0 0; font-size: 13px; color: var(--pd-text-secondary); line-height: 1.5; }

.pd-chip { display: inline-flex; padding: 2px 8px; border-radius: 999px; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; }
.pd-chip--muted { background: var(--pd-bg-muted); color: var(--pd-text-secondary); }
</style>
