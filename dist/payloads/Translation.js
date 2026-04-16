import { _ as r } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const i = { class: "translation" }, u = { class: "translation__header" }, p = { class: "translation__langs" }, w = { class: "translation__body" }, c = { class: "translation__box" }, v = { class: "translation__text translation__text--muted" }, h = { class: "translation__box" }, k = { class: "translation__text" }, m = {
  __name: "Translation",
  props: {
    payload: { type: Object, default: () => ({}) }
  },
  setup(o) {
    const a = o, t = window.__plotdesk_shared.vue.computed(() => {
      var s;
      return ((s = a.payload) == null ? void 0 : s.results) || {};
    }), d = window.__plotdesk_shared.vue.computed(() => t.value.source_language || "auto"), _ = window.__plotdesk_shared.vue.computed(() => t.value.target_language || "en"), n = window.__plotdesk_shared.vue.computed(() => t.value.source_text || ""), l = window.__plotdesk_shared.vue.computed(() => t.value.translation || "");
    return (s, e) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", i, [
      window.__plotdesk_shared.vue.createElementVNode("div", u, [
        e[0] || (e[0] = window.__plotdesk_shared.vue.createElementVNode("span", null, "Translation", -1)),
        window.__plotdesk_shared.vue.createElementVNode("span", p, window.__plotdesk_shared.vue.toDisplayString(d.value) + " → " + window.__plotdesk_shared.vue.toDisplayString(_.value), 1)
      ]),
      window.__plotdesk_shared.vue.createElementVNode("div", w, [
        window.__plotdesk_shared.vue.createElementVNode("div", c, [
          e[1] || (e[1] = window.__plotdesk_shared.vue.createElementVNode("div", { class: "translation__label" }, "Original", -1)),
          window.__plotdesk_shared.vue.createElementVNode("p", v, window.__plotdesk_shared.vue.toDisplayString(n.value || "—"), 1)
        ]),
        e[3] || (e[3] = window.__plotdesk_shared.vue.createElementVNode("div", { class: "translation__divider" }, null, -1)),
        window.__plotdesk_shared.vue.createElementVNode("div", h, [
          e[2] || (e[2] = window.__plotdesk_shared.vue.createElementVNode("div", { class: "translation__label" }, "Translation", -1)),
          window.__plotdesk_shared.vue.createElementVNode("p", k, window.__plotdesk_shared.vue.toDisplayString(l.value || "—"), 1)
        ])
      ])
    ]));
  }
}, E = /* @__PURE__ */ r(m, [["__scopeId", "data-v-fd5c5a8e"]]);
export {
  E as default
};
