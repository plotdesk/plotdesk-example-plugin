<script setup>
import { computed, onMounted, ref } from 'vue';

const props = defineProps({
    group: { type: Object, default: () => ({}) },
    chat: { type: Object, default: () => ({}) },
    interfaceSettings: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) },
    payload: { type: Object, default: () => ({}) },
});

const tasks = ref([]);
const loading = ref(true);
const error = ref(null);

const showCompleted = computed(() => {
    const raw = props.interfaceSettings?.show_completed_tasks;
    return raw === true || raw === 'true' || raw === 1 || raw === '1';
});

const maxItems = computed(() => {
    const raw = props.interfaceSettings?.max_items;
    const parsed = parseInt(raw, 10);
    if (Number.isNaN(parsed)) return 10;
    return Math.max(1, Math.min(50, parsed));
});

const loadTasks = async () => {
    loading.value = true;
    error.value = null;
    try {
        const response = await fetch(route('api.plugin.plotdesk-example-plugin.tasks.index'), {
            credentials: 'same-origin',
            headers: { Accept: 'application/json' },
        });
        if (!response.ok) throw new Error(`Request failed (${response.status})`);
        const body = await response.json();
        tasks.value = Array.isArray(body?.data) ? body.data : [];
    } catch (e) {
        error.value = e?.message || 'Failed to load tasks.';
    } finally {
        loading.value = false;
    }
};

onMounted(loadTasks);

const filteredTasks = computed(() => {
    const filtered = showCompleted.value
        ? tasks.value
        : tasks.value.filter(t => t.status !== 'done');
    return filtered.slice(0, maxItems.value);
});

const openCount = computed(() => tasks.value.filter(t => t.status !== 'done').length);
const inProgressCount = computed(() => tasks.value.filter(t => t.status === 'in_progress').length);
const doneCount = computed(() => tasks.value.filter(t => t.status === 'done').length);

const priorityStyle = p => ({
    low: 'pd-chip--info',
    medium: 'pd-chip--brand',
    high: 'pd-chip--warning',
    urgent: 'pd-chip--danger',
})[p] || 'pd-chip--muted';
</script>

<template>
    <div class="interface">
        <header class="interface__header">
            <div>
                <h2>Tasks Overview</h2>
                <p>Live view of tasks tracked by this plugin for group “{{ group?.name }}”.</p>
            </div>
            <button type="button" class="pd-btn pd-btn--secondary" :disabled="loading" @click="loadTasks">
                {{ loading ? 'Refreshing...' : 'Refresh' }}
            </button>
        </header>

        <section class="interface__stats">
            <div class="stat">
                <span class="stat__label">Open</span>
                <span class="stat__value">{{ openCount }}</span>
            </div>
            <div class="stat">
                <span class="stat__label">In Progress</span>
                <span class="stat__value">{{ inProgressCount }}</span>
            </div>
            <div class="stat">
                <span class="stat__label">Completed</span>
                <span class="stat__value">{{ doneCount }}</span>
            </div>
        </section>

        <section class="interface__list">
            <div v-if="error" class="interface__error">{{ error }}</div>
            <div v-else-if="loading && filteredTasks.length === 0" class="interface__empty">Loading tasks...</div>
            <div v-else-if="filteredTasks.length === 0" class="interface__empty">
                No tasks to show. Ask the AI to create one with the Example Tasks app!
            </div>
            <ul v-else class="task-list">
                <li v-for="task in filteredTasks" :key="task.id" class="task-list__item">
                    <div class="task-list__main">
                        <span class="task-list__title">{{ task.title }}</span>
                        <div class="task-list__meta">
                            <span class="pd-chip" :class="priorityStyle(task.priority)">{{ task.priority }}</span>
                            <span class="pd-chip pd-chip--muted">{{ task.status }}</span>
                            <span v-if="task.due_date" class="task-list__due">Due {{ task.due_date }}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>

<style scoped>
.interface { padding: var(--pd-space-xl); max-width: 920px; margin: 0 auto; display: grid; gap: var(--pd-space-lg); }
.interface__header { display: flex; justify-content: space-between; align-items: flex-start; gap: var(--pd-space-md); flex-wrap: wrap; }
.interface__header h2 { margin: 0; color: var(--pd-text-primary); font-size: 20px; font-weight: 600; }
.interface__header p { margin: 4px 0 0; color: var(--pd-text-secondary); font-size: 13px; }

.interface__stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--pd-space-md); }
.stat { background: var(--pd-bg-card); border: 1px solid var(--pd-border); border-radius: var(--pd-radius-lg); padding: var(--pd-space-md); box-shadow: var(--pd-shadow-card); }
.stat__label { display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--pd-text-secondary); font-weight: 600; }
.stat__value { display: block; margin-top: 4px; font-size: 24px; font-weight: 700; color: var(--pd-text-primary); }

.interface__error { background: var(--pd-danger-light); color: var(--pd-danger); padding: var(--pd-space-md); border-radius: var(--pd-radius-md); }
.interface__empty { color: var(--pd-text-muted); padding: var(--pd-space-xl); text-align: center; background: var(--pd-bg-card); border: 1px dashed var(--pd-border); border-radius: var(--pd-radius-md); }

.task-list { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--pd-space-sm); }
.task-list__item { background: var(--pd-bg-card); border: 1px solid var(--pd-border); border-radius: var(--pd-radius-md); padding: var(--pd-space-md); box-shadow: var(--pd-shadow-sm); }
.task-list__title { font-weight: 500; color: var(--pd-text-primary); font-size: 14px; }
.task-list__meta { display: flex; gap: var(--pd-space-xs); flex-wrap: wrap; margin-top: var(--pd-space-xs); }
.task-list__due { color: var(--pd-text-muted); font-size: 12px; }

.pd-chip { display: inline-flex; padding: 2px 8px; border-radius: 999px; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; }
.pd-chip--brand { background: var(--pd-brand-light); color: var(--pd-brand); }
.pd-chip--success { background: var(--pd-success-light); color: var(--pd-success); }
.pd-chip--info { background: var(--pd-info-light); color: var(--pd-info); }
.pd-chip--warning { background: var(--pd-warning-light); color: var(--pd-warning); }
.pd-chip--danger { background: var(--pd-danger-light); color: var(--pd-danger); }
.pd-chip--muted { background: var(--pd-bg-muted); color: var(--pd-text-secondary); }

.pd-btn {
    display: inline-flex; align-items: center; gap: var(--pd-space-xs);
    padding: 8px 14px; font-size: 13px; font-weight: 600;
    border-radius: var(--pd-radius-md); border: 1px solid transparent;
    cursor: pointer; font-family: inherit;
    transition: background 150ms, color 150ms;
}
.pd-btn:disabled { opacity: 0.6; cursor: not-allowed; }
.pd-btn--secondary { background: var(--pd-bg-subtle); color: var(--pd-text-primary); border-color: var(--pd-border); }
.pd-btn--secondary:hover:not(:disabled) { background: var(--pd-bg-muted); }
</style>
