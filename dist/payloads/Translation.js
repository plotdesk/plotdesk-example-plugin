import { u as r } from "../chunks/translator-CzLc3Cda.js";
import { _ as i } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const u = { class: "translation" }, p = { class: "translation__header" }, c = { class: "translation__route" }, w = { class: "translation__grid" }, v = { class: "translation__pane" }, h = { class: "translation__label" }, k = { class: "translation__text" }, m = { class: "translation__pane translation__pane--target" }, g = { class: "translation__label" }, y = { class: "translation__text" }, E = {
  __name: "Translation",
  props: {
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) }
  },
  setup(a) {
    const o = a, t = r(window.__plotdesk_shared.vue.computed(() => o.translations)), e = window.__plotdesk_shared.vue.computed(() => {
      var s;
      return ((s = o.payload) == null ? void 0 : s.results) || {};
    }), _ = window.__plotdesk_shared.vue.computed(() => e.value.source_text || ""), d = window.__plotdesk_shared.vue.computed(() => e.value.translated_text || ""), n = window.__plotdesk_shared.vue.computed(() => e.value.source_language || "—"), l = window.__plotdesk_shared.vue.computed(() => e.value.target_language || "—");
    return (s, f) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", u, [
      window.__plotdesk_shared.vue.createElementVNode("div", p, [
        window.__plotdesk_shared.vue.createElementVNode("span", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(t)("Translation")), 1),
        window.__plotdesk_shared.vue.createElementVNode("span", c, window.__plotdesk_shared.vue.toDisplayString(n.value) + " → " + window.__plotdesk_shared.vue.toDisplayString(l.value), 1)
      ]),
      window.__plotdesk_shared.vue.createElementVNode("div", w, [
        window.__plotdesk_shared.vue.createElementVNode("div", v, [
          window.__plotdesk_shared.vue.createElementVNode("div", h, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(t)("Original")), 1),
          window.__plotdesk_shared.vue.createElementVNode("p", k, window.__plotdesk_shared.vue.toDisplayString(_.value || "—"), 1)
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", m, [
          window.__plotdesk_shared.vue.createElementVNode("div", g, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(t)("Translation")), 1),
          window.__plotdesk_shared.vue.createElementVNode("p", y, window.__plotdesk_shared.vue.toDisplayString(d.value || "—"), 1)
        ])
      ])
    ]));
  }
}, x = /* @__PURE__ */ i(E, [["__scopeId", "data-v-b6c6e88c"]]);
export {
  x as default
};
