<script setup>
import { computed } from 'vue';
import { useTranslator } from '../translator.js';

const props = defineProps({
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) },
});

const $t = useTranslator(computed(() => props.translations));

const results = computed(() => props.payload?.results || {});
const status = computed(() => (results.value.status || '').toString().toLowerCase());
const url = computed(() => results.value.url || '');
const httpCode = computed(() => results.value.http_code ?? null);
const duration = computed(() => results.value.duration_ms ?? null);
const eventName = computed(() => results.value.event_name || '');

const statusLabel = computed(() => status.value ? $t(status.value) : '—');
const statusClass = computed(() => {
    if (status.value === 'delivered') return 'status--success';
    if (status.value === 'failed') return 'status--danger';
    if (status.value === 'pending') return 'status--warning';
    return 'status--muted';
});
</script>

<template>
    <div class="webhook">
        <div class="webhook__header">
            <div>
                <div class="webhook__label">{{ $t('Webhook Result') }}</div>
                <div v-if="eventName" class="webhook__event">{{ eventName }}</div>
            </div>
            <span class="webhook__status" :class="statusClass">{{ statusLabel }}</span>
        </div>
        <dl class="webhook__details">
            <div>
                <dt>{{ $t('Endpoint') }}</dt>
                <dd class="webhook__url">{{ url || '—' }}</dd>
            </div>
            <div class="webhook__row">
                <div>
                    <dt>{{ $t('HTTP Code') }}</dt>
                    <dd>{{ httpCode ?? '—' }}</dd>
                </div>
                <div>
                    <dt>{{ $t('Duration') }}</dt>
                    <dd>{{ duration !== null ? `${duration} ms` : '—' }}</dd>
                </div>
            </div>
        </dl>
    </div>
</template>

<style scoped>
.webhook { background: var(--pd-bg-card); border: 1px solid var(--pd-border); border-radius: var(--pd-radius-md); overflow: hidden; }
.webhook__header { display: flex; justify-content: space-between; align-items: flex-start; padding: var(--pd-space-md); background: var(--pd-bg-subtle); border-bottom: 1px solid var(--pd-border-light); }
.webhook__label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--pd-text-secondary); }
.webhook__event { margin-top: 2px; font-size: 14px; font-weight: 500; color: var(--pd-text-primary); font-family: 'SFMono-Regular', ui-monospace, monospace; }
.webhook__status { display: inline-flex; align-items: center; padding: 2px 10px; border-radius: 999px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; }
.status--success { background: var(--pd-success-light); color: var(--pd-success); }
.status--danger { background: var(--pd-danger-light); color: var(--pd-danger); }
.status--warning { background: var(--pd-warning-light); color: var(--pd-warning); }
.status--muted { background: var(--pd-bg-muted); color: var(--pd-text-secondary); }

.webhook__details { margin: 0; padding: var(--pd-space-md); display: grid; gap: var(--pd-space-sm); }
.webhook__details dt { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--pd-text-secondary); }
.webhook__details dd { margin: 2px 0 0; color: var(--pd-text-primary); font-size: 13px; }
.webhook__url { font-family: 'SFMono-Regular', ui-monospace, monospace; font-size: 12px; word-break: break-all; }
.webhook__row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--pd-space-md); }
</style>
