<script setup>
import { computed } from 'vue';
import { useTranslator } from '../translator.js';

const props = defineProps({
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) },
});

const $t = useTranslator(computed(() => props.translations));

const notes = computed(() => props.payload?.results?.notes || []);
const count = computed(() => props.payload?.results?.count || notes.value.length);
const countLabel = computed(() => `${count.value} ${count.value === 1 ? $t('note') : $t('notes')}`);
</script>

<template>
    <div class="note-list">
        <div class="note-list__header">
            <span>{{ $t('Example Notes') }}</span>
            <span class="note-list__count">{{ countLabel }}</span>
        </div>
        <div v-if="notes.length === 0" class="note-list__empty">{{ $t('No notes found.') }}</div>
        <ul v-else class="note-list__items">
            <li v-for="note in notes" :key="note.id" class="note-list__item">
                <div class="note-list__title"><span class="note-list__id">#{{ note.id }}</span> {{ note.title }}</div>
                <p v-if="note.preview" class="note-list__preview">{{ note.preview }}</p>
                <div v-if="(note.tags || []).length" class="note-list__tags">
                    <span v-for="tag in note.tags" :key="tag" class="pd-chip pd-chip--muted">{{ tag }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.note-list { background: var(--pd-bg-card); border: 1px solid var(--pd-border); border-radius: var(--pd-radius-md); overflow: hidden; }
.note-list__header {
    padding: var(--pd-space-sm) var(--pd-space-md);
    background: var(--pd-bg-subtle);
    display: flex; justify-content: space-between; align-items: center;
    font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;
    color: var(--pd-text-secondary);
    border-bottom: 1px solid var(--pd-border-light);
}
.note-list__count { font-weight: 500; text-transform: none; letter-spacing: normal; color: var(--pd-text-muted); }
.note-list__empty { padding: var(--pd-space-lg); text-align: center; color: var(--pd-text-muted); font-size: 13px; }
.note-list__items { list-style: none; margin: 0; padding: 0; }
.note-list__item {
    padding: var(--pd-space-sm) var(--pd-space-md);
    border-bottom: 1px solid var(--pd-border-light);
}
.note-list__item:last-child { border-bottom: none; }
.note-list__title { font-size: 14px; color: var(--pd-text-primary); font-weight: 500; }
.note-list__id { color: var(--pd-text-muted); font-size: 11px; font-weight: 600; margin-right: 4px; }
.note-list__preview { margin: 4px 0 0; color: var(--pd-text-secondary); font-size: 13px; line-height: 1.4; }
.note-list__tags { display: flex; gap: 4px; flex-wrap: wrap; margin-top: 4px; }

.pd-chip { display: inline-flex; padding: 2px 8px; border-radius: 999px; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; }
.pd-chip--muted { background: var(--pd-bg-muted); color: var(--pd-text-secondary); }
</style>
