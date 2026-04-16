<script setup>
import { computed } from 'vue';

const props = defineProps({
    payload: { type: Object, default: () => ({}) },
});

const tasks = computed(() => props.payload?.results?.tasks || []);
const count = computed(() => props.payload?.results?.count || tasks.value.length);

const priorityStyle = p => ({
    low: 'pd-chip--info',
    medium: 'pd-chip--brand',
    high: 'pd-chip--warning',
    urgent: 'pd-chip--danger',
})[p] || 'pd-chip--muted';

const statusStyle = s => ({
    open: 'pd-chip--muted',
    in_progress: 'pd-chip--brand',
    blocked: 'pd-chip--danger',
    done: 'pd-chip--success',
})[s] || 'pd-chip--muted';
</script>

<template>
    <div class="task-list">
        <div class="task-list__header">
            <span>Example Tasks</span>
            <span class="task-list__count">{{ count }} {{ count === 1 ? 'task' : 'tasks' }}</span>
        </div>

        <div v-if="tasks.length === 0" class="task-list__empty">No tasks found.</div>
        <ul v-else class="task-list__items">
            <li v-for="task in tasks" :key="task.id" class="task-list__item">
                <div class="task-list__main">
                    <span class="task-list__id">#{{ task.id }}</span>
                    <span class="task-list__title">{{ task.title }}</span>
                </div>
                <div class="task-list__meta">
                    <span v-if="task.priority" class="pd-chip" :class="priorityStyle(task.priority)">{{ task.priority }}</span>
                    <span v-if="task.status" class="pd-chip" :class="statusStyle(task.status)">{{ task.status }}</span>
                    <span v-if="task.due_date" class="task-list__due">Due {{ task.due_date }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.task-list {
    background: var(--pd-bg-card);
    border: 1px solid var(--pd-border);
    border-radius: var(--pd-radius-md);
    overflow: hidden;
}
.task-list__header {
    padding: var(--pd-space-sm) var(--pd-space-md);
    background: var(--pd-bg-subtle);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--pd-text-secondary);
    border-bottom: 1px solid var(--pd-border-light);
}
.task-list__count { font-weight: 500; text-transform: none; letter-spacing: normal; font-size: 12px; color: var(--pd-text-muted); }
.task-list__empty { padding: var(--pd-space-lg); text-align: center; color: var(--pd-text-muted); font-size: 13px; }
.task-list__items { list-style: none; margin: 0; padding: 0; }
.task-list__item {
    padding: var(--pd-space-sm) var(--pd-space-md);
    display: flex; justify-content: space-between; align-items: center;
    gap: var(--pd-space-md);
    border-bottom: 1px solid var(--pd-border-light);
}
.task-list__item:last-child { border-bottom: none; }
.task-list__main { display: flex; gap: var(--pd-space-xs); align-items: center; min-width: 0; }
.task-list__id { color: var(--pd-text-muted); font-size: 11px; font-weight: 600; }
.task-list__title { color: var(--pd-text-primary); font-size: 14px; }
.task-list__meta { display: flex; gap: var(--pd-space-xs); align-items: center; flex-wrap: wrap; flex-shrink: 0; }
.task-list__due { color: var(--pd-text-muted); font-size: 12px; }

.pd-chip { display: inline-flex; padding: 2px 8px; border-radius: 999px; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; }
.pd-chip--brand { background: var(--pd-brand-light); color: var(--pd-brand); }
.pd-chip--success { background: var(--pd-success-light); color: var(--pd-success); }
.pd-chip--info { background: var(--pd-info-light); color: var(--pd-info); }
.pd-chip--warning { background: var(--pd-warning-light); color: var(--pd-warning); }
.pd-chip--danger { background: var(--pd-danger-light); color: var(--pd-danger); }
.pd-chip--muted { background: var(--pd-bg-muted); color: var(--pd-text-secondary); }
</style>
