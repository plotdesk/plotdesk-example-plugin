<script setup>
import { computed } from 'vue';

const props = defineProps({
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) },
});

const data = computed(() => props.payload?.data || {});
const taskSeries = computed(() => data.value.task_series || []);
const webhookSeries = computed(() => data.value.webhook_series || []);
const priorityBreakdown = computed(() => data.value.priority_breakdown || {});
const webhookStatus = computed(() => data.value.webhook_status || {});

const taskMax = computed(() => Math.max(1, ...taskSeries.value.map(d => d.count)));
const webhookMax = computed(() => Math.max(1, ...webhookSeries.value.map(d => d.count)));

const priorityOrder = ['low', 'medium', 'high', 'urgent'];
const statusOrder = ['success', 'failed', 'pending'];

const priorityTotal = computed(() => Object.values(priorityBreakdown.value).reduce((a, b) => a + b, 0));
const webhookTotal = computed(() => Object.values(webhookStatus.value).reduce((a, b) => a + b, 0));

const priorityColor = {
    low: '#3b82f6',
    medium: '#0C359E',
    high: '#d97706',
    urgent: '#dc2626',
};

const statusColor = {
    success: '#059669',
    failed: '#dc2626',
    pending: '#f59e0b',
};
</script>

<template>
    <div class="analytics">
        <header class="analytics__header">
            <h1>Example Analytics</h1>
            <p>Plugin usage insights for the last 7 days.</p>
        </header>

        <section class="analytics__grid">
            <div class="pd-card">
                <h2>Tasks created per day</h2>
                <div class="bars">
                    <div v-for="day in taskSeries" :key="'t-' + day.date" class="bars__item">
                        <div class="bars__bar-track">
                            <div class="bars__bar" :style="{ height: ((day.count / taskMax) * 100) + '%', background: '#0C359E' }" />
                        </div>
                        <div class="bars__label">{{ day.date.slice(5) }}</div>
                        <div class="bars__value">{{ day.count }}</div>
                    </div>
                </div>
            </div>

            <div class="pd-card">
                <h2>Webhook dispatches per day</h2>
                <div class="bars">
                    <div v-for="day in webhookSeries" :key="'w-' + day.date" class="bars__item">
                        <div class="bars__bar-track">
                            <div class="bars__bar" :style="{ height: ((day.count / webhookMax) * 100) + '%', background: '#059669' }" />
                        </div>
                        <div class="bars__label">{{ day.date.slice(5) }}</div>
                        <div class="bars__value">{{ day.count }}</div>
                    </div>
                </div>
            </div>

            <div class="pd-card">
                <h2>Task priority breakdown</h2>
                <div v-if="priorityTotal === 0" class="pd-empty">No tasks yet.</div>
                <ul v-else class="breakdown">
                    <li v-for="p in priorityOrder" :key="p">
                        <div class="breakdown__header">
                            <span class="breakdown__label">{{ p }}</span>
                            <span class="breakdown__value">{{ priorityBreakdown[p] || 0 }}</span>
                        </div>
                        <div class="breakdown__track">
                            <div
                                class="breakdown__bar"
                                :style="{ width: (((priorityBreakdown[p] || 0) / priorityTotal) * 100) + '%', background: priorityColor[p] }"
                            />
                        </div>
                    </li>
                </ul>
            </div>

            <div class="pd-card">
                <h2>Webhook status</h2>
                <div v-if="webhookTotal === 0" class="pd-empty">No webhook dispatches yet.</div>
                <ul v-else class="breakdown">
                    <li v-for="s in statusOrder" :key="s">
                        <div class="breakdown__header">
                            <span class="breakdown__label">{{ s }}</span>
                            <span class="breakdown__value">{{ webhookStatus[s] || 0 }}</span>
                        </div>
                        <div class="breakdown__track">
                            <div
                                class="breakdown__bar"
                                :style="{ width: (((webhookStatus[s] || 0) / webhookTotal) * 100) + '%', background: statusColor[s] }"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<style scoped>
.analytics { padding: var(--pd-space-xl); max-width: 1200px; margin: 0 auto; }
.analytics__header { margin-bottom: var(--pd-space-xl); }
.analytics__header h1 { margin: 0; font-size: 24px; color: var(--pd-text-primary); }
.analytics__header p { margin: 4px 0 0; color: var(--pd-text-secondary); font-size: 14px; }

.analytics__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: var(--pd-space-lg); }

.pd-card {
    background: var(--pd-bg-card);
    border: 1px solid var(--pd-border);
    border-radius: var(--pd-radius-lg);
    padding: var(--pd-space-lg);
    box-shadow: var(--pd-shadow-card);
}
.pd-card h2 { margin: 0 0 var(--pd-space-md); font-size: 14px; font-weight: 600; color: var(--pd-text-primary); text-transform: uppercase; letter-spacing: 0.04em; }
.pd-empty { color: var(--pd-text-muted); text-align: center; padding: var(--pd-space-lg); }

.bars { display: flex; align-items: flex-end; gap: var(--pd-space-sm); height: 180px; }
.bars__item { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px; }
.bars__bar-track { flex: 1; width: 100%; display: flex; align-items: flex-end; }
.bars__bar { width: 100%; border-radius: 6px 6px 0 0; min-height: 4px; transition: height 200ms; }
.bars__label { font-size: 11px; color: var(--pd-text-secondary); }
.bars__value { font-size: 11px; color: var(--pd-text-muted); font-weight: 600; }

.breakdown { list-style: none; padding: 0; margin: 0; display: grid; gap: var(--pd-space-md); }
.breakdown__header { display: flex; justify-content: space-between; font-size: 13px; color: var(--pd-text-primary); }
.breakdown__label { text-transform: capitalize; font-weight: 500; }
.breakdown__value { font-weight: 600; color: var(--pd-text-secondary); }
.breakdown__track { height: 8px; background: var(--pd-bg-subtle); border-radius: 999px; overflow: hidden; margin-top: 4px; }
.breakdown__bar { height: 100%; border-radius: 999px; transition: width 200ms; }
</style>
