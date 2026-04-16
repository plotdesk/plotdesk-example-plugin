import { u as i } from "../chunks/translator-CzLc3Cda.js";
import { _ as p } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const v = { class: "webhook" }, c = { class: "webhook__header" }, h = { class: "webhook__label" }, k = {
  key: 0,
  class: "webhook__event"
}, m = { class: "webhook__details" }, E = { class: "webhook__url" }, N = { class: "webhook__row" }, V = {
  __name: "WebhookResult",
  props: {
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) }
  },
  setup(a) {
    const s = a, e = i(window.__plotdesk_shared.vue.computed(() => s.translations)), d = window.__plotdesk_shared.vue.computed(() => {
      var t;
      return ((t = s.payload) == null ? void 0 : t.results) || {};
    }), o = window.__plotdesk_shared.vue.computed(() => (d.value.status || "").toString().toLowerCase()), n = window.__plotdesk_shared.vue.computed(() => d.value.url || ""), u = window.__plotdesk_shared.vue.computed(() => d.value.http_code ?? null), _ = window.__plotdesk_shared.vue.computed(() => d.value.duration_ms ?? null), l = window.__plotdesk_shared.vue.computed(() => d.value.event_name || ""), r = window.__plotdesk_shared.vue.computed(() => o.value ? e(o.value) : "—"), w = window.__plotdesk_shared.vue.computed(() => o.value === "delivered" ? "status--success" : o.value === "failed" ? "status--danger" : o.value === "pending" ? "status--warning" : "status--muted");
    return (t, b) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", v, [
      window.__plotdesk_shared.vue.createElementVNode("div", c, [
        window.__plotdesk_shared.vue.createElementVNode("div", null, [
          window.__plotdesk_shared.vue.createElementVNode("div", h, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(e)("Webhook Result")), 1),
          l.value ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", k, window.__plotdesk_shared.vue.toDisplayString(l.value), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
        ]),
        window.__plotdesk_shared.vue.createElementVNode("span", {
          class: window.__plotdesk_shared.vue.normalizeClass(["webhook__status", w.value])
        }, window.__plotdesk_shared.vue.toDisplayString(r.value), 3)
      ]),
      window.__plotdesk_shared.vue.createElementVNode("dl", m, [
        window.__plotdesk_shared.vue.createElementVNode("div", null, [
          window.__plotdesk_shared.vue.createElementVNode("dt", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(e)("Endpoint")), 1),
          window.__plotdesk_shared.vue.createElementVNode("dd", E, window.__plotdesk_shared.vue.toDisplayString(n.value || "—"), 1)
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", N, [
          window.__plotdesk_shared.vue.createElementVNode("div", null, [
            window.__plotdesk_shared.vue.createElementVNode("dt", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(e)("HTTP Code")), 1),
            window.__plotdesk_shared.vue.createElementVNode("dd", null, window.__plotdesk_shared.vue.toDisplayString(u.value ?? "—"), 1)
          ]),
          window.__plotdesk_shared.vue.createElementVNode("div", null, [
            window.__plotdesk_shared.vue.createElementVNode("dt", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(e)("Duration")), 1),
            window.__plotdesk_shared.vue.createElementVNode("dd", null, window.__plotdesk_shared.vue.toDisplayString(_.value !== null ? `${_.value} ms` : "—"), 1)
          ])
        ])
      ])
    ]));
  }
}, g = /* @__PURE__ */ p(V, [["__scopeId", "data-v-437e0a64"]]);
export {
  g as default
};
