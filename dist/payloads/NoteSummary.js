import { u as n } from "../chunks/translator-CzLc3Cda.js";
import { _ as u } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const i = { class: "summary-card" }, c = { class: "summary-card__header" }, w = { class: "summary-card__label" }, p = {
  key: 0,
  class: "summary-card__title"
}, m = {
  key: 0,
  class: "summary-card__note-id"
}, v = { class: "summary-card__text" }, h = {
  __name: "NoteSummary",
  props: {
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) }
  },
  setup(r) {
    const t = r, e = n(window.__plotdesk_shared.vue.computed(() => t.translations)), o = window.__plotdesk_shared.vue.computed(() => {
      var d;
      return ((d = t.payload) == null ? void 0 : d.results) || {};
    }), l = window.__plotdesk_shared.vue.computed(() => o.value.summary || ""), s = window.__plotdesk_shared.vue.computed(() => o.value.note_id), _ = window.__plotdesk_shared.vue.computed(() => o.value.title || "");
    return (d, a) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", i, [
      window.__plotdesk_shared.vue.createElementVNode("div", c, [
        a[0] || (a[0] = window.__plotdesk_shared.vue.createElementVNode("div", { class: "summary-card__icon" }, [
          window.__plotdesk_shared.vue.createElementVNode("svg", {
            viewBox: "0 0 24 24",
            width: "18",
            height: "18",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            window.__plotdesk_shared.vue.createElementVNode("path", { d: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" })
          ])
        ], -1)),
        window.__plotdesk_shared.vue.createElementVNode("div", null, [
          window.__plotdesk_shared.vue.createElementVNode("div", w, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(e)("AI Summary")), 1),
          _.value ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", p, [
            s.value ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", m, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(e)("Note #{id}", { id: s.value })), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
            window.__plotdesk_shared.vue.createTextVNode(" " + window.__plotdesk_shared.vue.toDisplayString(_.value), 1)
          ])) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
        ])
      ]),
      window.__plotdesk_shared.vue.createElementVNode("p", v, window.__plotdesk_shared.vue.toDisplayString(l.value || window.__plotdesk_shared.vue.unref(e)("No summary available.")), 1)
    ]));
  }
}, N = /* @__PURE__ */ u(h, [["__scopeId", "data-v-437ddfb0"]]);
export {
  N as default
};
