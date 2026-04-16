import { u as E } from "../chunks/translator-CzLc3Cda.js";
import { _ as g } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const N = { class: "analytics" }, V = { class: "analytics__header" }, B = { class: "analytics__grid" }, S = { class: "pd-card" }, f = { class: "bars" }, D = { class: "bars__bar-track" }, x = { class: "bars__label" }, L = { class: "bars__value" }, O = { class: "pd-card" }, M = { class: "bars" }, T = { class: "bars__bar-track" }, j = { class: "bars__label" }, z = { class: "bars__value" }, F = { class: "pd-card" }, A = {
  key: 0,
  class: "pd-empty"
}, W = {
  key: 1,
  class: "breakdown"
}, H = { class: "breakdown__header" }, I = { class: "breakdown__label" }, P = { class: "breakdown__value" }, U = { class: "breakdown__track" }, $ = { class: "pd-card" }, q = {
  key: 0,
  class: "pd-empty"
}, C = {
  key: 1,
  class: "breakdown"
}, G = { class: "breakdown__header" }, J = { class: "breakdown__label" }, K = { class: "breakdown__value" }, Q = { class: "breakdown__track" }, R = {
  __name: "Analytics",
  props: {
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) }
  },
  setup(c) {
    const l = c, s = E(window.__plotdesk_shared.vue.computed(() => l.translations)), t = window.__plotdesk_shared.vue.computed(() => {
      var d;
      return ((d = l.payload) == null ? void 0 : d.data) || {};
    }), n = window.__plotdesk_shared.vue.computed(() => t.value.task_series || []), r = window.__plotdesk_shared.vue.computed(() => t.value.webhook_series || []), _ = window.__plotdesk_shared.vue.computed(() => t.value.priority_breakdown || {}), a = window.__plotdesk_shared.vue.computed(() => t.value.webhook_status || {}), u = window.__plotdesk_shared.vue.computed(() => Math.max(1, ...n.value.map((d) => d.count))), p = window.__plotdesk_shared.vue.computed(() => Math.max(1, ...r.value.map((d) => d.count))), k = ["low", "medium", "high", "urgent"], h = ["success", "failed", "pending"], i = window.__plotdesk_shared.vue.computed(() => Object.values(_.value).reduce((d, o) => d + o, 0)), w = window.__plotdesk_shared.vue.computed(() => Object.values(a.value).reduce((d, o) => d + o, 0)), v = (d) => s({ low: "Low", medium: "Medium", high: "High", urgent: "Urgent" }[d] || d), m = (d) => s(d), b = {
      low: "var(--pd-info)",
      medium: "var(--pd-brand)",
      high: "var(--pd-warning)",
      urgent: "var(--pd-danger)"
    }, y = {
      success: "var(--pd-success)",
      failed: "var(--pd-danger)",
      pending: "var(--pd-warning)"
    };
    return (d, o) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", N, [
      window.__plotdesk_shared.vue.createElementVNode("header", V, [
        window.__plotdesk_shared.vue.createElementVNode("h1", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("Example Analytics")), 1),
        window.__plotdesk_shared.vue.createElementVNode("p", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("Plugin usage insights for the last 7 days.")), 1)
      ]),
      window.__plotdesk_shared.vue.createElementVNode("section", B, [
        window.__plotdesk_shared.vue.createElementVNode("div", S, [
          window.__plotdesk_shared.vue.createElementVNode("h2", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("Tasks created per day")), 1),
          window.__plotdesk_shared.vue.createElementVNode("div", f, [
            (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(n.value, (e) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", {
              key: "t-" + e.date,
              class: "bars__item"
            }, [
              window.__plotdesk_shared.vue.createElementVNode("div", D, [
                window.__plotdesk_shared.vue.createElementVNode("div", {
                  class: "bars__bar bars__bar--brand",
                  style: window.__plotdesk_shared.vue.normalizeStyle({ height: e.count / u.value * 100 + "%" })
                }, null, 4)
              ]),
              window.__plotdesk_shared.vue.createElementVNode("div", x, window.__plotdesk_shared.vue.toDisplayString(e.date.slice(5)), 1),
              window.__plotdesk_shared.vue.createElementVNode("div", L, window.__plotdesk_shared.vue.toDisplayString(e.count), 1)
            ]))), 128))
          ])
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", O, [
          window.__plotdesk_shared.vue.createElementVNode("h2", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("Webhook dispatches per day")), 1),
          window.__plotdesk_shared.vue.createElementVNode("div", M, [
            (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(r.value, (e) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", {
              key: "w-" + e.date,
              class: "bars__item"
            }, [
              window.__plotdesk_shared.vue.createElementVNode("div", T, [
                window.__plotdesk_shared.vue.createElementVNode("div", {
                  class: "bars__bar bars__bar--success",
                  style: window.__plotdesk_shared.vue.normalizeStyle({ height: e.count / p.value * 100 + "%" })
                }, null, 4)
              ]),
              window.__plotdesk_shared.vue.createElementVNode("div", j, window.__plotdesk_shared.vue.toDisplayString(e.date.slice(5)), 1),
              window.__plotdesk_shared.vue.createElementVNode("div", z, window.__plotdesk_shared.vue.toDisplayString(e.count), 1)
            ]))), 128))
          ])
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", F, [
          window.__plotdesk_shared.vue.createElementVNode("h2", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("Task priority breakdown")), 1),
          i.value === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", A, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("No tasks yet.")), 1)) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("ul", W, [
            (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(k, (e) => window.__plotdesk_shared.vue.createElementVNode("li", { key: e }, [
              window.__plotdesk_shared.vue.createElementVNode("div", H, [
                window.__plotdesk_shared.vue.createElementVNode("span", I, window.__plotdesk_shared.vue.toDisplayString(v(e)), 1),
                window.__plotdesk_shared.vue.createElementVNode("span", P, window.__plotdesk_shared.vue.toDisplayString(_.value[e] || 0), 1)
              ]),
              window.__plotdesk_shared.vue.createElementVNode("div", U, [
                window.__plotdesk_shared.vue.createElementVNode("div", {
                  class: "breakdown__bar",
                  style: window.__plotdesk_shared.vue.normalizeStyle({ width: (_.value[e] || 0) / i.value * 100 + "%", background: b[e] })
                }, null, 4)
              ])
            ])), 64))
          ]))
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", $, [
          window.__plotdesk_shared.vue.createElementVNode("h2", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("Webhook status")), 1),
          w.value === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", q, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("No webhook dispatches yet.")), 1)) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("ul", C, [
            (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(h, (e) => window.__plotdesk_shared.vue.createElementVNode("li", { key: e }, [
              window.__plotdesk_shared.vue.createElementVNode("div", G, [
                window.__plotdesk_shared.vue.createElementVNode("span", J, window.__plotdesk_shared.vue.toDisplayString(m(e)), 1),
                window.__plotdesk_shared.vue.createElementVNode("span", K, window.__plotdesk_shared.vue.toDisplayString(a.value[e] || 0), 1)
              ]),
              window.__plotdesk_shared.vue.createElementVNode("div", Q, [
                window.__plotdesk_shared.vue.createElementVNode("div", {
                  class: "breakdown__bar",
                  style: window.__plotdesk_shared.vue.normalizeStyle({ width: (a.value[e] || 0) / w.value * 100 + "%", background: y[e] })
                }, null, 4)
              ])
            ])), 64))
          ]))
        ])
      ])
    ]));
  }
}, Z = /* @__PURE__ */ g(R, [["__scopeId", "data-v-c9997b8c"]]);
export {
  Z as default
};
