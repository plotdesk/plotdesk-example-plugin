<script setup>
import { computed } from 'vue';

const props = defineProps({
    payload: { type: Object, default: () => ({}) },
});

const results = computed(() => props.payload?.results || {});
const event = computed(() => results.value.event || '—');
const status = computed(() => results.value.status || 'unknown');
const responseStatus = computed(() => results.value.response_status);
const responsePreview = computed(() => results.value.response_preview || '');
const dispatchedAt = computed(() => results.value.dispatched_at);

const isSuccess = computed(() => status.value === 'success');

const statusStyle = computed(() => ({
    success: 'webhook--success',
    failed: 'webhook--failed',
    pending: 'webhook--pending',
})[status.value] || 'webhook--pending');

const prettyDate = computed(() => {
    if (!dispatchedAt.value) return '';
    try {
        return new Date(dispatchedAt.value).toLocaleString();
    } catch {
        return dispatchedAt.value;
    }
});
</script>

<template>
    <div class="webhook" :class="statusStyle">
        <div class="webhook__header">
            <div class="webhook__icon">
                <svg v-if="isSuccess" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                <svg v-else viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </div>
            <div class="webhook__meta">
                <div class="webhook__event">{{ event }}</div>
                <div class="webhook__status">
                    {{ status }}
                    <span v-if="responseStatus"> · HTTP {{ responseStatus }}</span>
                </div>
            </div>
            <div v-if="prettyDate" class="webhook__time">{{ prettyDate }}</div>
        </div>
        <pre v-if="responsePreview" class="webhook__body">{{ responsePreview }}</pre>
    </div>
</template>

<style scoped>
.webhook { border-radius: var(--pd-radius-md); border: 1px solid var(--pd-border); background: var(--pd-bg-card); overflow: hidden; }
.webhook__header { padding: var(--pd-space-md); display: flex; gap: var(--pd-space-sm); align-items: center; }
.webhook__icon { width: 28px; height: 28px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.webhook__meta { flex: 1; min-width: 0; }
.webhook__event { font-weight: 500; color: var(--pd-text-primary); font-size: 14px; font-family: 'SF Mono', 'Fira Code', Menlo, monospace; }
.webhook__status { margin-top: 2px; font-size: 12px; color: var(--pd-text-secondary); text-transform: capitalize; }
.webhook__time { font-size: 11px; color: var(--pd-text-muted); }

.webhook__body {
    margin: 0; padding: var(--pd-space-md);
    background: var(--pd-bg-subtle);
    border-top: 1px solid var(--pd-border-light);
    font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
    font-size: 12px; color: var(--pd-text-secondary);
    overflow-x: auto; white-space: pre-wrap; word-break: break-word;
    max-height: 180px;
}

.webhook--success .webhook__icon { background: var(--pd-success-light); color: var(--pd-success); }
.webhook--failed .webhook__icon { background: var(--pd-danger-light); color: var(--pd-danger); }
.webhook--pending .webhook__icon { background: var(--pd-warning-light); color: var(--pd-warning); }
</style>
