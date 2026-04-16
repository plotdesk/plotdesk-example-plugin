<script setup>
import { computed } from 'vue';
import { useTranslator } from '../translator.js';

const props = defineProps({
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) },
});

const $t = useTranslator(computed(() => props.translations));

const data = computed(() => props.payload?.data || {});

const stats = computed(() => {
    const s = data.value.stats || {};
    return [
        { key: 'open_tasks', label: $t('Open Tasks'), value: s.open_tasks ?? 0, tone: 'brand' },
        { key: 'completed_tasks', label: $t('Completed'), value: s.completed_tasks ?? 0, tone: 'success' },
        { key: 'notes', label: $t('Notes'), value: s.notes ?? 0, tone: 'info' },
        { key: 'webhooks', label: $t('Webhooks 24h'), value: s.webhook_events_24h ?? 0, tone: 'warning' },
    ];
});

const recentTasks = computed(() => data.value.recent_tasks || []);
const recentNotes = computed(() => data.value.recent_notes || []);
const recentActivity = computed(() => data.value.recent_activity || []);

const priorityStyle = priority => {
    const map = {
        low: 'pd-chip--info',
        medium: 'pd-chip--brand',
        high: 'pd-chip--warning',
        urgent: 'pd-chip--danger',
    };
    return map[priority] || 'pd-chip--muted';
};

const statusStyle = status => {
    const map = {
        open: 'pd-chip--muted',
        in_progress: 'pd-chip--brand',
        blocked: 'pd-chip--danger',
        done: 'pd-chip--success',
    };
    return map[status] || 'pd-chip--muted';
};

const priorityLabel = priority => {
    const map = { low: 'Low', medium: 'Medium', high: 'High', urgent: 'Urgent' };
    return $t(map[priority] || priority);
};

const statusLabel = status => {
    const map = { open: 'Open', in_progress: 'In Progress', blocked: 'Blocked', done: 'Done' };
    return $t(map[status] || status);
};

const formatDate = iso => {
    if (!iso) {
        return '';
    }
    try {
        return new Date(iso).toLocaleString();
    } catch {
        return iso;
    }
};
</script>

<template>
    <div class="dashboard">
        <header class="dashboard__header">
            <div>
                <h1 class="dashboard__title">{{ $t('Example Dashboard') }}</h1>
                <p class="dashboard__subtitle">{{ $t('Overview of tasks, notes and activity from the plotdesk example plugin.') }}</p>
            </div>
            <div class="dashboard__header-actions">
                <a :href="route('plugin.plotdesk-example-plugin.tasks.index')" class="pd-btn pd-btn--primary">{{ $t('Manage Tasks') }}</a>
                <a :href="route('plugin.plotdesk-example-plugin.notes.index')" class="pd-btn pd-btn--secondary">{{ $t('Open Notebook') }}</a>
            </div>
        </header>

        <section class="dashboard__stats">
            <div
                v-for="stat in stats"
                :key="stat.key"
                class="stat-card"
                :class="`stat-card--${stat.tone}`"
            >
                <div class="stat-card__label">{{ stat.label }}</div>
                <div class="stat-card__value">{{ stat.value }}</div>
            </div>
        </section>

        <section class="dashboard__grid">
            <div class="pd-card">
                <div class="pd-card__header">
                    <h2 class="pd-card__title">{{ $t('Recent Tasks') }}</h2>
                </div>
                <div v-if="recentTasks.length === 0" class="pd-empty">{{ $t('No tasks yet.') }}</div>
                <ul v-else class="pd-list">
                    <li v-for="task in recentTasks" :key="task.id" class="pd-list__item">
                        <div class="pd-list__main">
                            <div class="pd-list__title">{{ task.title }}</div>
                            <div class="pd-list__meta">
                                <span class="pd-chip" :class="priorityStyle(task.priority)">{{ priorityLabel(task.priority) }}</span>
                                <span class="pd-chip" :class="statusStyle(task.status)">{{ statusLabel(task.status) }}</span>
                                <span v-if="task.due_date" class="pd-list__date">{{ $t('Due {date}', { date: task.due_date }) }}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="pd-card">
                <div class="pd-card__header">
                    <h2 class="pd-card__title">{{ $t('Recent Notes') }}</h2>
                </div>
                <div v-if="recentNotes.length === 0" class="pd-empty">{{ $t('No notes yet.') }}</div>
                <ul v-else class="pd-list">
                    <li v-for="note in recentNotes" :key="note.id" class="pd-list__item">
                        <div class="pd-list__main">
                            <div class="pd-list__title">{{ note.title }}</div>
                            <div class="pd-list__meta">
                                <span v-if="note.has_summary" class="pd-chip pd-chip--success">{{ $t('summary') }}</span>
                                <span class="pd-list__date">{{ formatDate(note.updated_at) }}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="pd-card pd-card--wide">
                <div class="pd-card__header">
                    <h2 class="pd-card__title">{{ $t('Recent Activity') }}</h2>
                </div>
                <div v-if="recentActivity.length === 0" class="pd-empty">{{ $t('No activity recorded yet.') }}</div>
                <ul v-else class="pd-timeline">
                    <li v-for="entry in recentActivity" :key="entry.id" class="pd-timeline__item">
                        <span class="pd-timeline__dot"></span>
                        <div class="pd-timeline__content">
                            <div class="pd-timeline__event">{{ $t(entry.event_name) }}</div>
                            <div class="pd-timeline__date">{{ formatDate(entry.created_at) }}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<style scoped>
.dashboard {
    padding: var(--pd-space-xl);
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    gap: var(--pd-space-xl);
}

.dashboard__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--pd-space-md);
}

.dashboard__title {
    font-size: 26px;
    font-weight: 600;
    color: var(--pd-text-primary);
    margin: 0;
}

.dashboard__subtitle {
    margin: 4px 0 0;
    color: var(--pd-text-secondary);
    font-size: 14px;
}

.dashboard__header-actions {
    display: flex;
    gap: var(--pd-space-sm);
}

.dashboard__stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--pd-space-md);
}

.stat-card {
    background: var(--pd-bg-card);
    border: 1px solid var(--pd-border);
    border-radius: var(--pd-radius-lg);
    padding: var(--pd-space-lg);
    box-shadow: var(--pd-shadow-card);
}

.stat-card__label {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--pd-text-secondary);
}

.stat-card__value {
    margin-top: var(--pd-space-sm);
    font-size: 28px;
    font-weight: 700;
    color: var(--pd-text-primary);
}

.stat-card--brand .stat-card__value { color: var(--pd-brand); }
.stat-card--success .stat-card__value { color: var(--pd-success); }
.stat-card--info .stat-card__value { color: var(--pd-info); }
.stat-card--warning .stat-card__value { color: var(--pd-warning); }

.dashboard__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--pd-space-lg);
}

.dashboard__grid .pd-card--wide {
    grid-column: 1 / -1;
}

@media (max-width: 900px) {
    .dashboard__grid {
        grid-template-columns: 1fr;
    }
}

.pd-card {
    background: var(--pd-bg-card);
    border: 1px solid var(--pd-border);
    border-radius: var(--pd-radius-lg);
    padding: var(--pd-space-lg);
    box-shadow: var(--pd-shadow-card);
}

.pd-card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--pd-space-md);
}

.pd-card__title {
    font-size: 16px;
    font-weight: 600;
    color: var(--pd-text-primary);
    margin: 0;
}

.pd-empty {
    color: var(--pd-text-muted);
    font-size: 14px;
    padding: var(--pd-space-md) 0;
}

.pd-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: var(--pd-space-sm);
}

.pd-list__item {
    background: var(--pd-bg-subtle);
    border: 1px solid var(--pd-border-light);
    border-radius: var(--pd-radius-md);
    padding: var(--pd-space-md);
}

.pd-list__title {
    font-weight: 500;
    color: var(--pd-text-primary);
    font-size: 14px;
}

.pd-list__meta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--pd-space-xs);
    align-items: center;
    margin-top: var(--pd-space-xs);
    font-size: 12px;
    color: var(--pd-text-secondary);
}

.pd-list__date {
    color: var(--pd-text-muted);
}

.pd-chip {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    background: var(--pd-bg-muted);
    color: var(--pd-text-secondary);
}

.pd-chip--brand { background: var(--pd-brand-light); color: var(--pd-brand); }
.pd-chip--success { background: var(--pd-success-light); color: var(--pd-success); }
.pd-chip--info { background: var(--pd-info-light); color: var(--pd-info); }
.pd-chip--warning { background: var(--pd-warning-light); color: var(--pd-warning); }
.pd-chip--danger { background: var(--pd-danger-light); color: var(--pd-danger); }
.pd-chip--muted { background: var(--pd-bg-muted); color: var(--pd-text-secondary); }

.pd-timeline {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: var(--pd-space-sm);
}

.pd-timeline__item {
    display: flex;
    gap: var(--pd-space-md);
    align-items: flex-start;
}

.pd-timeline__dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--pd-brand);
    margin-top: 6px;
    flex-shrink: 0;
}

.pd-timeline__event {
    color: var(--pd-text-primary);
    font-size: 13px;
    font-weight: 500;
}

.pd-timeline__date {
    color: var(--pd-text-muted);
    font-size: 12px;
    margin-top: 2px;
}

.pd-btn {
    display: inline-flex;
    align-items: center;
    gap: var(--pd-space-xs);
    padding: 8px 14px;
    font-size: 13px;
    font-weight: 600;
    border-radius: var(--pd-radius-md);
    border: 1px solid transparent;
    cursor: pointer;
    text-decoration: none;
    transition: background 150ms, color 150ms, border-color 150ms, filter 150ms;
}

.pd-btn--primary {
    background: var(--pd-brand);
    color: var(--pd-text-inverse);
}

.pd-btn--primary:hover {
    filter: brightness(0.92);
}

.pd-btn--secondary {
    background: var(--pd-bg-subtle);
    color: var(--pd-text-primary);
    border-color: var(--pd-border);
}

.pd-btn--secondary:hover {
    background: var(--pd-bg-muted);
}
</style>
