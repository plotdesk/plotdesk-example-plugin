<script setup>
import { computed } from 'vue';

const props = defineProps({
    payload: { type: Object, default: () => ({}) },
});

const task = computed(() => props.payload?.results?.task || {});

const priorityStyle = computed(() => ({
    low: 'pd-chip--info',
    medium: 'pd-chip--brand',
    high: 'pd-chip--warning',
    urgent: 'pd-chip--danger',
})[task.value.priority] || 'pd-chip--muted');

const statusStyle = computed(() => ({
    open: 'pd-chip--muted',
    in_progress: 'pd-chip--brand',
    blocked: 'pd-chip--danger',
    done: 'pd-chip--success',
})[task.value.status] || 'pd-chip--muted');
</script>

<template>
    <div class="task-card">
        <div class="task-card__icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
        <div class="task-card__body">
            <div class="task-card__title">
                <span v-if="task.id" class="task-card__id">#{{ task.id }}</span>
                {{ task.title }}
            </div>
            <p v-if="task.description" class="task-card__description">{{ task.description }}</p>
            <div class="task-card__meta">
                <span v-if="task.priority" class="pd-chip" :class="priorityStyle">{{ task.priority }}</span>
                <span v-if="task.status" class="pd-chip" :class="statusStyle">{{ task.status }}</span>
                <span v-if="task.due_date" class="task-card__due">Due {{ task.due_date }}</span>
                <span v-if="task.assignee" class="task-card__assignee">@{{ task.assignee }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.task-card {
    display: flex;
    gap: var(--pd-space-md);
    padding: var(--pd-space-md);
    background: var(--pd-bg-card);
    border: 1px solid var(--pd-border);
    border-radius: var(--pd-radius-md);
    box-shadow: var(--pd-shadow-sm);
}
.task-card__icon {
    width: 32px; height: 32px;
    border-radius: 8px;
    background: var(--pd-brand-light);
    color: var(--pd-brand);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
}
.task-card__body { flex: 1; min-width: 0; }
.task-card__title {
    font-size: 14px;
    font-weight: 500;
    color: var(--pd-text-primary);
    display: flex; align-items: center; gap: var(--pd-space-xs);
}
.task-card__id {
    font-size: 11px;
    color: var(--pd-text-muted);
    font-weight: 600;
}
.task-card__description {
    margin: 4px 0 0;
    font-size: 13px;
    color: var(--pd-text-secondary);
    line-height: 1.4;
}
.task-card__meta {
    margin-top: var(--pd-space-sm);
    display: flex;
    gap: var(--pd-space-xs);
    flex-wrap: wrap;
    align-items: center;
}
.task-card__due, .task-card__assignee {
    font-size: 12px;
    color: var(--pd-text-muted);
}

.pd-chip { display: inline-flex; padding: 2px 8px; border-radius: 999px; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; }
.pd-chip--brand { background: var(--pd-brand-light); color: var(--pd-brand); }
.pd-chip--success { background: var(--pd-success-light); color: var(--pd-success); }
.pd-chip--info { background: var(--pd-info-light); color: var(--pd-info); }
.pd-chip--warning { background: var(--pd-warning-light); color: var(--pd-warning); }
.pd-chip--danger { background: var(--pd-danger-light); color: var(--pd-danger); }
.pd-chip--muted { background: var(--pd-bg-muted); color: var(--pd-text-secondary); }
</style>
