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

const groupBy = computed(() => (props.interfaceSettings?.group_by === 'priority' ? 'priority' : 'status'));

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

const statusColumns = [
    { id: 'open', title: 'Open', accent: 'var(--pd-text-secondary)' },
    { id: 'in_progress', title: 'In Progress', accent: 'var(--pd-brand)' },
    { id: 'blocked', title: 'Blocked', accent: 'var(--pd-danger)' },
    { id: 'done', title: 'Done', accent: 'var(--pd-success)' },
];

const priorityColumns = [
    { id: 'urgent', title: 'Urgent', accent: 'var(--pd-danger)' },
    { id: 'high', title: 'High', accent: 'var(--pd-warning)' },
    { id: 'medium', title: 'Medium', accent: 'var(--pd-brand)' },
    { id: 'low', title: 'Low', accent: 'var(--pd-info)' },
];

const columns = computed(() => (groupBy.value === 'priority' ? priorityColumns : statusColumns));

const tasksByColumn = computed(() => {
    const result = {};
    for (const col of columns.value) {
        result[col.id] = tasks.value.filter(t => t[groupBy.value] === col.id);
    }
    return result;
});

const updateTask = async (task, newValue) => {
    try {
        const response = await fetch(route('api.plugin.plotdesk-example-plugin.tasks.update', { task: task.id }), {
            method: 'PUT',
            credentials: 'same-origin',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content || '',
            },
            body: JSON.stringify({ [groupBy.value]: newValue }),
        });
        if (!response.ok) return;
        await loadTasks();
    } catch (e) {
        error.value = e?.message || 'Update failed';
    }
};
</script>

<template>
    <div class="kanban">
        <header class="kanban__header">
            <h2>Example Kanban</h2>
            <button type="button" class="pd-btn pd-btn--secondary" :disabled="loading" @click="loadTasks">
                {{ loading ? 'Loading...' : 'Refresh' }}
            </button>
        </header>

        <div v-if="error" class="kanban__error">{{ error }}</div>

        <div class="kanban__board">
            <section v-for="col in columns" :key="col.id" class="kanban__column">
                <header class="kanban__column-header" :style="{ borderColor: col.accent }">
                    <span>{{ col.title }}</span>
                    <span class="kanban__count">{{ tasksByColumn[col.id]?.length || 0 }}</span>
                </header>

                <div v-if="(tasksByColumn[col.id] || []).length === 0" class="kanban__empty">No tasks</div>
                <div v-else class="kanban__cards">
                    <article v-for="task in tasksByColumn[col.id]" :key="task.id" class="kanban__card">
                        <h4>{{ task.title }}</h4>
                        <p v-if="task.description">{{ task.description }}</p>
                        <div class="kanban__card-meta">
                            <span class="pd-chip pd-chip--muted">{{ task.priority }}</span>
                            <span v-if="task.due_date" class="kanban__due">Due {{ task.due_date }}</span>
                        </div>
                        <div class="kanban__card-actions">
                            <select
                                class="pd-input pd-input--sm"
                                :value="task[groupBy]"
                                @change="e => updateTask(task, e.target.value)"
                            >
                                <option v-for="col2 in columns" :key="col2.id" :value="col2.id">{{ col2.title }}</option>
                            </select>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>
.kanban { padding: var(--pd-space-lg); height: 100%; display: flex; flex-direction: column; gap: var(--pd-space-md); }
.kanban__header { display: flex; justify-content: space-between; align-items: center; }
.kanban__header h2 { margin: 0; color: var(--pd-text-primary); font-size: 18px; font-weight: 600; }
.kanban__error { background: var(--pd-danger-light); color: var(--pd-danger); padding: var(--pd-space-sm); border-radius: var(--pd-radius-md); }
.kanban__board { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--pd-space-md); flex: 1; min-height: 0; }
.kanban__column { display: flex; flex-direction: column; background: var(--pd-bg-subtle); border-radius: var(--pd-radius-lg); padding: var(--pd-space-md); min-width: 0; }
.kanban__column-header { display: flex; justify-content: space-between; align-items: center; padding-bottom: var(--pd-space-sm); margin-bottom: var(--pd-space-sm); border-bottom: 2px solid var(--pd-border); font-size: 13px; font-weight: 600; color: var(--pd-text-primary); text-transform: uppercase; letter-spacing: 0.04em; }
.kanban__count { background: var(--pd-bg-card); border-radius: 999px; padding: 2px 8px; font-size: 11px; color: var(--pd-text-secondary); font-weight: 600; }
.kanban__empty { color: var(--pd-text-muted); font-size: 13px; text-align: center; padding: var(--pd-space-md); }
.kanban__cards { display: grid; gap: var(--pd-space-sm); }

.kanban__card { background: var(--pd-bg-card); border-radius: var(--pd-radius-md); padding: var(--pd-space-md); box-shadow: var(--pd-shadow-sm); border: 1px solid var(--pd-border-light); display: grid; gap: var(--pd-space-xs); }
.kanban__card h4 { margin: 0; font-size: 14px; color: var(--pd-text-primary); font-weight: 500; }
.kanban__card p { margin: 0; font-size: 12px; color: var(--pd-text-secondary); line-height: 1.4; }
.kanban__card-meta { display: flex; gap: var(--pd-space-xs); align-items: center; flex-wrap: wrap; }
.kanban__due { color: var(--pd-text-muted); font-size: 11px; }
.kanban__card-actions { margin-top: 4px; }

.pd-chip { display: inline-flex; padding: 2px 8px; border-radius: 999px; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; }
.pd-chip--muted { background: var(--pd-bg-muted); color: var(--pd-text-secondary); }

.pd-input {
    padding: 6px 10px; border: 1px solid var(--pd-border); border-radius: var(--pd-radius-sm);
    background: var(--pd-bg-card); color: var(--pd-text-primary); font-size: 12px;
    width: 100%; font-family: inherit;
}
.pd-input--sm { padding: 4px 8px; font-size: 11px; }

.pd-btn {
    display: inline-flex; align-items: center; gap: var(--pd-space-xs);
    padding: 6px 12px; font-size: 12px; font-weight: 600;
    border-radius: var(--pd-radius-md); border: 1px solid transparent;
    cursor: pointer; font-family: inherit;
}
.pd-btn:disabled { opacity: 0.6; cursor: not-allowed; }
.pd-btn--secondary { background: var(--pd-bg-subtle); color: var(--pd-text-primary); border-color: var(--pd-border); }
.pd-btn--secondary:hover:not(:disabled) { background: var(--pd-bg-muted); }
</style>
