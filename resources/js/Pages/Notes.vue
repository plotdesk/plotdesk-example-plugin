<script setup>
import { computed, ref } from 'vue';
import { router } from '@inertiajs/vue3';
import { useTranslator } from '../translator.js';

const props = defineProps({
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) },
});

const $t = useTranslator(computed(() => props.translations));

const notes = computed(() => props.payload?.data?.notes || []);

const selectedId = ref(notes.value[0]?.id || null);
const selectedNote = computed(() => notes.value.find(n => n.id === selectedId.value) || null);

const showNew = ref(false);
const newNote = ref({ title: '', content: '', tags: '' });
const editing = ref(false);
const edited = ref({ title: '', content: '' });

const createNote = () => {
    if (!newNote.value.title.trim()) {
        return;
    }
    router.post(route('plugin.plotdesk-example-plugin.notes.store'), {
        title: newNote.value.title,
        content: newNote.value.content,
        tags: newNote.value.tags.split(',').map(t => t.trim()).filter(Boolean),
    }, {
        preserveScroll: true,
        onSuccess: () => {
            newNote.value = { title: '', content: '', tags: '' };
            showNew.value = false;
        },
    });
};

const startEdit = () => {
    if (!selectedNote.value) {
        return;
    }
    editing.value = true;
    edited.value = { title: selectedNote.value.title, content: selectedNote.value.content };
};

const saveEdit = () => {
    if (!selectedNote.value) {
        return;
    }
    router.put(route('plugin.plotdesk-example-plugin.notes.update', { note: selectedNote.value.id }), edited.value, {
        preserveScroll: true,
        onSuccess: () => { editing.value = false; },
    });
};

const removeNote = () => {
    if (!selectedNote.value) {
        return;
    }
    if (!confirm($t('Delete note "{title}"?', { title: selectedNote.value.title }))) {
        return;
    }
    router.delete(route('plugin.plotdesk-example-plugin.notes.destroy', { note: selectedNote.value.id }), {
        preserveScroll: true,
        onSuccess: () => { selectedId.value = null; },
    });
};
</script>

<template>
    <div class="notebook">
        <aside class="notebook__sidebar">
            <div class="notebook__sidebar-header">
                <h2 class="notebook__title">{{ $t('Notes') }}</h2>
                <button type="button" class="pd-btn pd-btn--primary" @click="showNew = !showNew">
                    {{ showNew ? $t('Cancel') : $t('+ New') }}
                </button>
            </div>

            <div v-if="showNew" class="notebook__new">
                <input v-model="newNote.title" type="text" :placeholder="$t('Title')" class="pd-input" />
                <textarea v-model="newNote.content" :placeholder="$t('Write your note...')" rows="3" class="pd-input"></textarea>
                <input v-model="newNote.tags" type="text" :placeholder="$t('tags, comma, separated')" class="pd-input" />
                <button type="button" class="pd-btn pd-btn--primary" @click="createNote">{{ $t('Create') }}</button>
            </div>

            <ul class="notebook__list">
                <li
                    v-for="note in notes"
                    :key="note.id"
                    class="notebook__list-item"
                    :class="{ 'notebook__list-item--active': selectedId === note.id }"
                    @click="selectedId = note.id; editing = false"
                >
                    <div class="notebook__list-title">{{ note.title }}</div>
                    <div class="notebook__list-meta">
                        <span v-if="note.summary" class="pd-chip pd-chip--success">{{ $t('summary') }}</span>
                        <span v-for="tag in note.tags" :key="tag" class="pd-chip pd-chip--muted">{{ tag }}</span>
                    </div>
                </li>
            </ul>
            <div v-if="notes.length === 0" class="notebook__empty">{{ $t('No notes yet.') }}</div>
        </aside>

        <main class="notebook__main">
            <div v-if="!selectedNote" class="notebook__placeholder">
                {{ $t('Select a note to view or edit.') }}
            </div>
            <div v-else class="notebook__detail">
                <div class="notebook__detail-header">
                    <h1 v-if="!editing" class="notebook__detail-title">{{ selectedNote.title }}</h1>
                    <input v-else v-model="edited.title" type="text" class="pd-input pd-input--lg" />
                    <div class="notebook__detail-actions">
                        <button v-if="!editing" type="button" class="pd-btn pd-btn--secondary" @click="startEdit">{{ $t('Edit') }}</button>
                        <button v-else type="button" class="pd-btn pd-btn--primary" @click="saveEdit">{{ $t('Save') }}</button>
                        <button type="button" class="pd-btn pd-btn--ghost pd-btn--danger" @click="removeNote">{{ $t('Delete') }}</button>
                    </div>
                </div>

                <div v-if="selectedNote.summary" class="notebook__summary">
                    <h3>{{ $t('AI Summary') }}</h3>
                    <p>{{ selectedNote.summary }}</p>
                </div>

                <div class="notebook__content">
                    <pre v-if="!editing" class="notebook__text">{{ selectedNote.content }}</pre>
                    <textarea v-else v-model="edited.content" rows="14" class="pd-input notebook__editor"></textarea>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
.notebook {
    display: grid;
    grid-template-columns: 320px 1fr;
    height: calc(100vh - 64px);
}

@media (max-width: 800px) {
    .notebook { grid-template-columns: 1fr; }
}

.notebook__sidebar {
    background: var(--pd-bg-card);
    border-right: 1px solid var(--pd-border);
    padding: var(--pd-space-lg);
    display: flex;
    flex-direction: column;
    gap: var(--pd-space-md);
    overflow-y: auto;
}

.notebook__sidebar-header { display: flex; align-items: center; justify-content: space-between; }
.notebook__title { margin: 0; font-size: 18px; font-weight: 600; color: var(--pd-text-primary); }

.notebook__new { display: grid; gap: var(--pd-space-xs); padding: var(--pd-space-sm); background: var(--pd-bg-subtle); border-radius: var(--pd-radius-md); }

.notebook__list { list-style: none; padding: 0; margin: 0; display: grid; gap: var(--pd-space-xs); }
.notebook__list-item {
    padding: var(--pd-space-sm) var(--pd-space-md);
    border-radius: var(--pd-radius-md);
    cursor: pointer;
    border: 1px solid transparent;
    transition: background 150ms, border-color 150ms;
}
.notebook__list-item:hover { background: var(--pd-bg-subtle); }
.notebook__list-item--active { background: var(--pd-brand-light); border-color: var(--pd-brand); }
.notebook__list-title { font-size: 14px; font-weight: 500; color: var(--pd-text-primary); }
.notebook__list-meta { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 4px; }

.notebook__empty { color: var(--pd-text-muted); padding: var(--pd-space-md); text-align: center; }

.notebook__main { padding: var(--pd-space-xl); overflow-y: auto; background: var(--pd-bg-page); }
.notebook__placeholder { color: var(--pd-text-muted); text-align: center; padding: var(--pd-space-2xl); }
.notebook__detail { display: grid; gap: var(--pd-space-lg); max-width: 920px; }
.notebook__detail-header { display: flex; align-items: center; justify-content: space-between; gap: var(--pd-space-md); }
.notebook__detail-title { margin: 0; font-size: 22px; font-weight: 600; color: var(--pd-text-primary); }
.notebook__detail-actions { display: flex; gap: var(--pd-space-sm); }

.notebook__summary {
    background: var(--pd-success-light);
    border-left: 3px solid var(--pd-success);
    border-radius: var(--pd-radius-md);
    padding: var(--pd-space-md);
}
.notebook__summary h3 { margin: 0 0 var(--pd-space-xs); font-size: 13px; color: var(--pd-success); text-transform: uppercase; letter-spacing: 0.04em; }
.notebook__summary p { margin: 0; color: var(--pd-text-primary); font-size: 14px; line-height: 1.5; }

.notebook__text {
    white-space: pre-wrap; background: var(--pd-bg-card);
    border: 1px solid var(--pd-border); border-radius: var(--pd-radius-md);
    padding: var(--pd-space-lg); margin: 0;
    font-family: inherit; font-size: 14px; color: var(--pd-text-primary);
    line-height: 1.6;
}

.notebook__editor {
    min-height: 280px;
    font-family: inherit;
    line-height: 1.6;
}

.pd-input {
    padding: 10px 12px; border: 1px solid var(--pd-border); border-radius: var(--pd-radius-md);
    background: var(--pd-bg-card); color: var(--pd-text-primary); font-size: 14px;
    width: 100%; box-sizing: border-box; font-family: inherit;
}
.pd-input--lg { font-size: 20px; font-weight: 600; padding: 12px 14px; }
.pd-input:focus { outline: none; border-color: var(--pd-brand); box-shadow: 0 0 0 3px var(--pd-brand-light); }
.pd-input::placeholder { color: var(--pd-text-muted); }

.pd-chip { display: inline-flex; padding: 2px 8px; border-radius: 999px; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; }
.pd-chip--success { background: var(--pd-success-light); color: var(--pd-success); }
.pd-chip--muted { background: var(--pd-bg-muted); color: var(--pd-text-secondary); }

.pd-btn {
    display: inline-flex; align-items: center; gap: var(--pd-space-xs);
    padding: 8px 14px; font-size: 13px; font-weight: 600;
    border-radius: var(--pd-radius-md); border: 1px solid transparent; cursor: pointer;
    text-decoration: none; font-family: inherit;
    transition: background 150ms, color 150ms, filter 150ms;
}
.pd-btn--primary { background: var(--pd-brand); color: var(--pd-text-inverse); }
.pd-btn--primary:hover { filter: brightness(0.92); }
.pd-btn--secondary { background: var(--pd-bg-subtle); color: var(--pd-text-primary); border-color: var(--pd-border); }
.pd-btn--secondary:hover { background: var(--pd-bg-muted); }
.pd-btn--ghost { background: transparent; color: var(--pd-text-secondary); }
.pd-btn--ghost:hover { background: var(--pd-bg-subtle); }
.pd-btn--danger { color: var(--pd-danger); }
.pd-btn--danger:hover { background: var(--pd-danger-light); }
</style>
