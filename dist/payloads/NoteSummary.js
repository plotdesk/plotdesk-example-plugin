import { _ as l } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const n = { class: "summary-card" }, u = { class: "summary-card__header" }, i = {
  key: 0,
  class: "summary-card__title"
}, c = {
  key: 0,
  class: "summary-card__note-id"
}, p = { class: "summary-card__text" }, w = {
  __name: "NoteSummary",
  props: {
    payload: { type: Object, default: () => ({}) }
  },
  setup(_) {
    const a = _, o = window.__plotdesk_shared.vue.computed(() => {
      var d;
      return ((d = a.payload) == null ? void 0 : d.results) || {};
    }), r = window.__plotdesk_shared.vue.computed(() => o.value.summary || ""), t = window.__plotdesk_shared.vue.computed(() => o.value.note_id), s = window.__plotdesk_shared.vue.computed(() => o.value.title || "");
    return (d, e) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", n, [
      window.__plotdesk_shared.vue.createElementVNode("div", u, [
        e[1] || (e[1] = window.__plotdesk_shared.vue.createElementVNode("div", { class: "summary-card__icon" }, [
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
          e[0] || (e[0] = window.__plotdesk_shared.vue.createElementVNode("div", { class: "summary-card__label" }, "AI Summary", -1)),
          s.value ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", i, [
            t.value ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", c, "Note #" + window.__plotdesk_shared.vue.toDisplayString(t.value), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
            window.__plotdesk_shared.vue.createTextVNode(" " + window.__plotdesk_shared.vue.toDisplayString(s.value), 1)
          ])) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
        ])
      ]),
      window.__plotdesk_shared.vue.createElementVNode("p", p, window.__plotdesk_shared.vue.toDisplayString(r.value || "No summary available."), 1)
    ]));
  }
}, v = /* @__PURE__ */ l(w, [["__scopeId", "data-v-4ec83602"]]);
export {
  v as default
};
