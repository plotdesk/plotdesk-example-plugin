<script setup>
import { computed } from 'vue';

const props = defineProps({
    payload: { type: Object, default: () => ({}) },
});

const results = computed(() => props.payload?.results || {});
const sourceLang = computed(() => results.value.source_language || 'auto');
const targetLang = computed(() => results.value.target_language || 'en');
const original = computed(() => results.value.source_text || '');
const translated = computed(() => results.value.translation || '');
</script>

<template>
    <div class="translation">
        <div class="translation__header">
            <span>Translation</span>
            <span class="translation__langs">{{ sourceLang }} → {{ targetLang }}</span>
        </div>
        <div class="translation__body">
            <div class="translation__box">
                <div class="translation__label">Original</div>
                <p class="translation__text translation__text--muted">{{ original || '—' }}</p>
            </div>
            <div class="translation__divider"></div>
            <div class="translation__box">
                <div class="translation__label">Translation</div>
                <p class="translation__text">{{ translated || '—' }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.translation { background: var(--pd-bg-card); border: 1px solid var(--pd-border); border-radius: var(--pd-radius-md); overflow: hidden; }
.translation__header { padding: var(--pd-space-sm) var(--pd-space-md); background: var(--pd-bg-subtle); display: flex; justify-content: space-between; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--pd-text-secondary); border-bottom: 1px solid var(--pd-border-light); }
.translation__langs { font-weight: 500; color: var(--pd-text-muted); }
.translation__body { display: grid; grid-template-columns: 1fr 1px 1fr; }
@media (max-width: 640px) {
    .translation__body { grid-template-columns: 1fr; }
    .translation__divider { display: none; }
}
.translation__box { padding: var(--pd-space-md); }
.translation__divider { background: var(--pd-border-light); }
.translation__label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--pd-text-secondary); font-weight: 600; margin-bottom: 4px; }
.translation__text { margin: 0; color: var(--pd-text-primary); font-size: 14px; line-height: 1.5; white-space: pre-wrap; }
.translation__text--muted { color: var(--pd-text-secondary); }
</style>
