import { u as p } from "../chunks/translator-CzLc3Cda.js";
import { _ as u } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const w = { class: "analysis" }, c = { class: "analysis__header" }, v = { class: "analysis__grid" }, h = { class: "analysis__box" }, k = { class: "analysis__label" }, m = { class: "analysis__box" }, y = { class: "analysis__label" }, g = { class: "analysis__value" }, E = { class: "analysis__box analysis__box--wide" }, f = { class: "analysis__label" }, x = {
  key: 0,
  class: "analysis__value"
}, b = {
  key: 1,
  class: "analysis__topics"
}, N = {
  __name: "TextAnalysis",
  props: {
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) }
  },
  setup(n) {
    const o = n, e = p(window.__plotdesk_shared.vue.computed(() => o.translations)), t = window.__plotdesk_shared.vue.computed(() => {
      var s;
      return ((s = o.payload) == null ? void 0 : s.results) || {};
    }), _ = window.__plotdesk_shared.vue.computed(() => (t.value.sentiment || "").toLowerCase()), l = window.__plotdesk_shared.vue.computed(() => _.value ? e(_.value) : "—"), i = window.__plotdesk_shared.vue.computed(() => t.value.language || "—"), d = window.__plotdesk_shared.vue.computed(() => t.value.topics || []), r = window.__plotdesk_shared.vue.computed(() => ({
      positive: "sent--positive",
      negative: "sent--negative",
      neutral: "sent--neutral",
      mixed: "sent--mixed"
    })[_.value] || "sent--neutral");
    return (s, V) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", w, [
      window.__plotdesk_shared.vue.createElementVNode("div", c, [
        window.__plotdesk_shared.vue.createElementVNode("span", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(e)("Text Analysis")), 1)
      ]),
      window.__plotdesk_shared.vue.createElementVNode("div", v, [
        window.__plotdesk_shared.vue.createElementVNode("div", h, [
          window.__plotdesk_shared.vue.createElementVNode("div", k, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(e)("Sentiment")), 1),
          window.__plotdesk_shared.vue.createElementVNode("div", {
            class: window.__plotdesk_shared.vue.normalizeClass(["analysis__value", r.value])
          }, window.__plotdesk_shared.vue.toDisplayString(l.value), 3)
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", m, [
          window.__plotdesk_shared.vue.createElementVNode("div", y, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(e)("Language")), 1),
          window.__plotdesk_shared.vue.createElementVNode("div", g, window.__plotdesk_shared.vue.toDisplayString(i.value), 1)
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", E, [
          window.__plotdesk_shared.vue.createElementVNode("div", f, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(e)("Topics")), 1),
          d.value.length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", x, "—")) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", b, [
            (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(d.value, (a) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", {
              key: a,
              class: "pd-chip pd-chip--info"
            }, window.__plotdesk_shared.vue.toDisplayString(a), 1))), 128))
          ]))
        ])
      ])
    ]));
  }
}, D = /* @__PURE__ */ u(N, [["__scopeId", "data-v-b96968c3"]]);
export {
  D as default
};
