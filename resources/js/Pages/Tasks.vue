<script setup>
import { computed, ref } from 'vue';
import { router } from '@inertiajs/vue3';
import { useTranslator } from '../translator.js';

const props = defineProps({
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) },
});

const $t = useTranslator(computed(() => props.translations));

const tasks = computed(() => props.payload?.data?.tasks || []);

const showForm = ref(false);
const form = ref({
    title: '',
    description: '',
    priority: 'medium',
    status: 'open',
    due_date: '',
});
const isSubmitting = ref(false);

const submit = () => {
    if (isSubmitting.value) {
        return;
    }
    isSubmitting.value = true;
    router.post(route('plugin.plotdesk-example-plugin.tasks.store'), form.value, {
        preserveScroll: true,
        onFinish: () => {
            isSubmitting.value = false;
            showForm.value = false;
            form.value = { title: '', description: '', priority: 'medium', status: 'open', due_date: '' };
        },
    });
};

const toggleStatus = task => {
    router.put(
        route('plugin.plotdesk-example-plugin.tasks.update', { task: task.id }),
        { status: task.status === 'done' ? 'open' : 'done' },
        { preserveScroll: true },
    );
};

const removeTask = task => {
    if (!confirm($t('Delete task "{title}"?', { title: task.title }))) {
        return;
    }
    router.delete(route('plugin.plotdesk-example-plugin.tasks.destroy', { task: task.id }), { preserveScroll: true });
};

const priorityOptions = computed(() => [
    { value: 'low', label: $t('Low') },
    { value: 'medium', label: $t('Medium') },
    { value: 'high', label: $t('High') },
    { value: 'urgent', label: $t('Urgent') },
]);

const statusOptions = computed(() => [
    { value: 'open', label: $t('Open') },
    { value: 'in_progress', label: $t('In Progress') },
    { value: 'blocked', label: $t('Blocked') },
    { value: 'done', label: $t('Done') },
]);

const priorityStyle = priority => ({
    low: 'pd-chip--info',
    medium: 'pd-chip--brand',
    high: 'pd-chip--warning',
    urgent: 'pd-chip--danger',
})[priority] || 'pd-chip--muted';

const statusStyle = status => ({
    open: 'pd-chip--muted',
    in_progress: 'pd-chip--brand',
    blocked: 'pd-chip--danger',
    done: 'pd-chip--success',
})[status] || 'pd-chip--muted';

const priorityLabel = priority => {
    const map = { low: 'Low', medium: 'Medium', high: 'High', urgent: 'Urgent' };
    return $t(map[priority] || priority);
};

const statusLabel = status => {
    const map = { open: 'Open', in_progress: 'In Progress', blocked: 'Blocked', done: 'Done' };
    return $t(map[status] || status);
};
</script>

<template>
    <div class="tasks">
        <header class="tasks__header">
            <div>
                <h1 class="tasks__title">{{ $t('Example Tasks') }}</h1>
                <p class="tasks__subtitle">{{ $t('Manage tasks managed by the plotdesk example plugin.') }}</p>
            </div>
            <button type="button" class="pd-btn pd-btn--primary" @click="showForm = !showForm">
                {{ showForm ? $t('Cancel') : $t('New Task') }}
            </button>
        </header>

        <form v-if="showForm" class="pd-card pd-form" @submit.prevent="submit">
            <div class="pd-form__row">
                <label class="pd-form__label">
                    <span>{{ $t('Title') }}</span>
                    <input v-model="form.title" type="text" required class="pd-input" :placeholder="$t('What needs to be done?')" />
                </label>
            </div>
            <div class="pd-form__row">
                <label class="pd-form__label">
                    <span>{{ $t('Description') }}</span>
                    <textarea v-model="form.description" class="pd-input" rows="2" :placeholder="$t('Optional details...')" />
                </label>
            </div>
            <div class="pd-form__row pd-form__row--split">
                <label class="pd-form__label">
                    <span>{{ $t('Priority') }}</span>
                    <select v-model="form.priority" class="pd-input">
                        <option v-for="opt in priorityOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
                    </select>
                </label>
                <label class="pd-form__label">
                    <span>{{ $t('Status') }}</span>
                    <select v-model="form.status" class="pd-input">
                        <option v-for="opt in statusOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
                    </select>
                </label>
                <label class="pd-form__label">
                    <span>{{ $t('Due Date') }}</span>
                    <input v-model="form.due_date" type="date" class="pd-input" />
                </label>
            </div>
            <div class="pd-form__actions">
                <button type="submit" class="pd-btn pd-btn--primary" :disabled="isSubmitting">
                    {{ isSubmitting ? $t('Saving...') : $t('Create Task') }}
                </button>
            </div>
        </form>

        <section class="pd-card">
            <div v-if="tasks.length === 0" class="pd-empty">{{ $t('No tasks yet. Create one to get started.') }}</div>
            <table v-else class="pd-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>{{ $t('Title') }}</th>
                        <th>{{ $t('Priority') }}</th>
                        <th>{{ $t('Status') }}</th>
                        <th>{{ $t('Due Date') }}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="task in tasks" :key="task.id">
                        <td>
                            <input type="checkbox" :checked="task.status === 'done'" @change="toggleStatus(task)" />
                        </td>
                        <td>
                            <div class="pd-table__title">{{ task.title }}</div>
                            <div v-if="task.description" class="pd-table__subtitle">{{ task.description }}</div>
                        </td>
                        <td><span class="pd-chip" :class="priorityStyle(task.priority)">{{ priorityLabel(task.priority) }}</span></td>
                        <td><span class="pd-chip" :class="statusStyle(task.status)">{{ statusLabel(task.status) }}</span></td>
                        <td>{{ task.due_date || '—' }}</td>
                        <td>
                            <button type="button" class="pd-btn pd-btn--ghost pd-btn--danger" @click="removeTask(task)">{{ $t('Delete') }}</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<style scoped>
.tasks { padding: var(--pd-space-xl); max-width: 1180px; margin: 0 auto; display: grid; gap: var(--pd-space-lg); }
.tasks__header { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: var(--pd-space-md); }
.tasks__title { margin: 0; font-size: 24px; font-weight: 600; color: var(--pd-text-primary); }
.tasks__subtitle { margin: 4px 0 0; color: var(--pd-text-secondary); font-size: 14px; }

.pd-card { background: var(--pd-bg-card); border: 1px solid var(--pd-border); border-radius: var(--pd-radius-lg); padding: var(--pd-space-lg); box-shadow: var(--pd-shadow-card); }
.pd-empty { color: var(--pd-text-muted); padding: var(--pd-space-md); text-align: center; }

.pd-form { display: grid; gap: var(--pd-space-md); }
.pd-form__row { display: grid; gap: var(--pd-space-xs); }
.pd-form__row--split { grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: var(--pd-space-md); }
.pd-form__label { display: grid; gap: 4px; font-size: 12px; color: var(--pd-text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; }
.pd-form__actions { display: flex; justify-content: flex-end; }
.pd-input {
    padding: 10px 12px;
    border: 1px solid var(--pd-border);
    border-radius: var(--pd-radius-md);
    background: var(--pd-bg-card);
    color: var(--pd-text-primary);
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;
    font-family: inherit;
}
.pd-input:focus { outline: none; border-color: var(--pd-brand); box-shadow: 0 0 0 3px var(--pd-brand-light); }
.pd-input::placeholder { color: var(--pd-text-muted); }

.pd-table { width: 100%; border-collapse: collapse; font-size: 14px; }
.pd-table th, .pd-table td { text-align: left; padding: 12px; border-bottom: 1px solid var(--pd-border-light); color: var(--pd-text-primary); }
.pd-table th { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--pd-text-secondary); }
.pd-table__title { font-weight: 500; color: var(--pd-text-primary); }
.pd-table__subtitle { color: var(--pd-text-secondary); font-size: 12px; margin-top: 2px; }

.pd-chip { display: inline-flex; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; }
.pd-chip--brand { background: var(--pd-brand-light); color: var(--pd-brand); }
.pd-chip--success { background: var(--pd-success-light); color: var(--pd-success); }
.pd-chip--info { background: var(--pd-info-light); color: var(--pd-info); }
.pd-chip--warning { background: var(--pd-warning-light); color: var(--pd-warning); }
.pd-chip--danger { background: var(--pd-danger-light); color: var(--pd-danger); }
.pd-chip--muted { background: var(--pd-bg-muted); color: var(--pd-text-secondary); }

.pd-btn {
    display: inline-flex; align-items: center; gap: var(--pd-space-xs);
    padding: 8px 14px; font-size: 13px; font-weight: 600;
    border-radius: var(--pd-radius-md); border: 1px solid transparent; cursor: pointer;
    text-decoration: none; font-family: inherit;
    transition: background 150ms, color 150ms, border-color 150ms, filter 150ms;
}
.pd-btn:disabled { opacity: 0.6; cursor: not-allowed; }
.pd-btn--primary { background: var(--pd-brand); color: var(--pd-text-inverse); }
.pd-btn--primary:hover:not(:disabled) { filter: brightness(0.92); }
.pd-btn--ghost { background: transparent; color: var(--pd-text-secondary); }
.pd-btn--ghost:hover { background: var(--pd-bg-subtle); color: var(--pd-text-primary); }
.pd-btn--danger { color: var(--pd-danger); }
.pd-btn--danger:hover { background: var(--pd-danger-light); color: var(--pd-danger); }
</style>
