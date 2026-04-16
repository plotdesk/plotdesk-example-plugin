import { _ as p } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const c = { class: "webhook__header" }, k = { class: "webhook__icon" }, v = {
  key: 0,
  viewBox: "0 0 24 24",
  width: "18",
  height: "18",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, h = {
  key: 1,
  viewBox: "0 0 24 24",
  width: "18",
  height: "18",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, m = { class: "webhook__meta" }, b = { class: "webhook__event" }, y = { class: "webhook__status" }, B = { key: 0 }, g = {
  key: 0,
  class: "webhook__time"
}, E = {
  key: 0,
  class: "webhook__body"
}, N = {
  __name: "WebhookResult",
  props: {
    payload: { type: Object, default: () => ({}) }
  },
  setup(a) {
    const r = a, e = window.__plotdesk_shared.vue.computed(() => {
      var d;
      return ((d = r.payload) == null ? void 0 : d.results) || {};
    }), u = window.__plotdesk_shared.vue.computed(() => e.value.event || "—"), t = window.__plotdesk_shared.vue.computed(() => e.value.status || "unknown"), _ = window.__plotdesk_shared.vue.computed(() => e.value.response_status), n = window.__plotdesk_shared.vue.computed(() => e.value.response_preview || ""), s = window.__plotdesk_shared.vue.computed(() => e.value.dispatched_at), i = window.__plotdesk_shared.vue.computed(() => t.value === "success"), w = window.__plotdesk_shared.vue.computed(() => ({
      success: "webhook--success",
      failed: "webhook--failed",
      pending: "webhook--pending"
    })[t.value] || "webhook--pending"), l = window.__plotdesk_shared.vue.computed(() => {
      if (!s.value) return "";
      try {
        return new Date(s.value).toLocaleString();
      } catch {
        return s.value;
      }
    });
    return (d, o) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", {
      class: window.__plotdesk_shared.vue.normalizeClass(["webhook", w.value])
    }, [
      window.__plotdesk_shared.vue.createElementVNode("div", c, [
        window.__plotdesk_shared.vue.createElementVNode("div", k, [
          i.value ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("svg", v, [...o[0] || (o[0] = [
            window.__plotdesk_shared.vue.createElementVNode("path", { d: "M20 6L9 17l-5-5" }, null, -1)
          ])])) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("svg", h, [...o[1] || (o[1] = [
            window.__plotdesk_shared.vue.createElementVNode("path", { d: "M18 6L6 18M6 6l12 12" }, null, -1)
          ])]))
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", m, [
          window.__plotdesk_shared.vue.createElementVNode("div", b, window.__plotdesk_shared.vue.toDisplayString(u.value), 1),
          window.__plotdesk_shared.vue.createElementVNode("div", y, [
            window.__plotdesk_shared.vue.createTextVNode(window.__plotdesk_shared.vue.toDisplayString(t.value) + " ", 1),
            _.value ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", B, " · HTTP " + window.__plotdesk_shared.vue.toDisplayString(_.value), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
          ])
        ]),
        l.value ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", g, window.__plotdesk_shared.vue.toDisplayString(l.value), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
      ]),
      n.value ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("pre", E, window.__plotdesk_shared.vue.toDisplayString(n.value), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
    ], 2));
  }
}, f = /* @__PURE__ */ p(N, [["__scopeId", "data-v-3566577b"]]);
export {
  f as default
};
