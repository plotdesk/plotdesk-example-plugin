import { computed } from 'vue';

export function createTranslator(translationsRef) {
    return function $t(key, params = {}) {
        const map = translationsRef?.value ?? translationsRef ?? {};
        let translation = map?.[key] ?? key;

        if (params && typeof params === 'object') {
            for (const [name, value] of Object.entries(params)) {
                translation = translation.split(`{${name}}`).join(String(value));
            }
        }

        return translation;
    };
}

export function useTranslator(translationsProp) {
    const translationsRef = computed(() => translationsProp?.value ?? translationsProp ?? {});
    return createTranslator(translationsRef);
}
