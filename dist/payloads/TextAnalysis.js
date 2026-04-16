import { _ as r } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const p = { class: "analysis" }, u = { class: "analysis__grid" }, w = { class: "analysis__box" }, v = { class: "analysis__box" }, c = { class: "analysis__value" }, k = { class: "analysis__box analysis__box--wide" }, h = {
  key: 0,
  class: "analysis__value"
}, m = {
  key: 1,
  class: "analysis__topics"
}, y = {
  __name: "TextAnalysis",
  props: {
    payload: { type: Object, default: () => ({}) }
  },
  setup(a) {
    const l = a, d = window.__plotdesk_shared.vue.computed(() => {
      var s;
      return ((s = l.payload) == null ? void 0 : s.results) || {};
    }), t = window.__plotdesk_shared.vue.computed(() => d.value.sentiment || "—"), n = window.__plotdesk_shared.vue.computed(() => d.value.language || "—"), o = window.__plotdesk_shared.vue.computed(() => d.value.topics || []), i = window.__plotdesk_shared.vue.computed(() => ({
      positive: "sent--positive",
      negative: "sent--negative",
      neutral: "sent--neutral",
      mixed: "sent--mixed"
    })[(t.value || "").toLowerCase()] || "sent--neutral");
    return (s, e) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", p, [
      e[3] || (e[3] = window.__plotdesk_shared.vue.createElementVNode("div", { class: "analysis__header" }, [
        window.__plotdesk_shared.vue.createElementVNode("span", null, "Text Analysis")
      ], -1)),
      window.__plotdesk_shared.vue.createElementVNode("div", u, [
        window.__plotdesk_shared.vue.createElementVNode("div", w, [
          e[0] || (e[0] = window.__plotdesk_shared.vue.createElementVNode("div", { class: "analysis__label" }, "Sentiment", -1)),
          window.__plotdesk_shared.vue.createElementVNode("div", {
            class: window.__plotdesk_shared.vue.normalizeClass(["analysis__value", i.value])
          }, window.__plotdesk_shared.vue.toDisplayString(t.value), 3)
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", v, [
          e[1] || (e[1] = window.__plotdesk_shared.vue.createElementVNode("div", { class: "analysis__label" }, "Language", -1)),
          window.__plotdesk_shared.vue.createElementVNode("div", c, window.__plotdesk_shared.vue.toDisplayString(n.value), 1)
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", k, [
          e[2] || (e[2] = window.__plotdesk_shared.vue.createElementVNode("div", { class: "analysis__label" }, "Topics", -1)),
          o.value.length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", h, "—")) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", m, [
            (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(o.value, (_) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", {
              key: _,
              class: "pd-chip pd-chip--info"
            }, window.__plotdesk_shared.vue.toDisplayString(_), 1))), 128))
          ]))
        ])
      ])
    ]));
  }
}, g = /* @__PURE__ */ r(y, [["__scopeId", "data-v-cb442b74"]]);
export {
  g as default
};
