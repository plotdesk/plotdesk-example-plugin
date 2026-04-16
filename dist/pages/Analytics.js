import { _ as m } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const b = { class: "analytics" }, E = { class: "analytics__grid" }, y = { class: "pd-card" }, N = { class: "bars" }, V = { class: "bars__bar-track" }, g = { class: "bars__label" }, B = { class: "bars__value" }, S = { class: "pd-card" }, f = { class: "bars" }, x = { class: "bars__bar-track" }, D = { class: "bars__label" }, O = { class: "bars__value" }, j = { class: "pd-card" }, z = {
  key: 0,
  class: "pd-empty"
}, C = {
  key: 1,
  class: "breakdown"
}, F = { class: "breakdown__header" }, L = { class: "breakdown__label" }, M = { class: "breakdown__value" }, T = { class: "breakdown__track" }, A = { class: "pd-card" }, W = {
  key: 0,
  class: "pd-empty"
}, I = {
  key: 1,
  class: "breakdown"
}, P = { class: "breakdown__header" }, q = { class: "breakdown__label" }, G = { class: "breakdown__value" }, H = { class: "breakdown__track" }, J = {
  __name: "Analytics",
  props: {
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) }
  },
  setup(i) {
    const w = i, s = window.__plotdesk_shared.vue.computed(() => {
      var o;
      return ((o = w.payload) == null ? void 0 : o.data) || {};
    }), a = window.__plotdesk_shared.vue.computed(() => s.value.task_series || []), l = window.__plotdesk_shared.vue.computed(() => s.value.webhook_series || []), t = window.__plotdesk_shared.vue.computed(() => s.value.priority_breakdown || {}), _ = window.__plotdesk_shared.vue.computed(() => s.value.webhook_status || {}), c = window.__plotdesk_shared.vue.computed(() => Math.max(1, ...a.value.map((o) => o.count))), u = window.__plotdesk_shared.vue.computed(() => Math.max(1, ...l.value.map((o) => o.count))), k = ["low", "medium", "high", "urgent"], p = ["success", "failed", "pending"], n = window.__plotdesk_shared.vue.computed(() => Object.values(t.value).reduce((o, d) => o + d, 0)), r = window.__plotdesk_shared.vue.computed(() => Object.values(_.value).reduce((o, d) => o + d, 0)), v = {
      low: "#3b82f6",
      medium: "#0C359E",
      high: "#d97706",
      urgent: "#dc2626"
    }, h = {
      success: "#059669",
      failed: "#dc2626",
      pending: "#f59e0b"
    };
    return (o, d) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", b, [
      d[4] || (d[4] = window.__plotdesk_shared.vue.createElementVNode("header", { class: "analytics__header" }, [
        window.__plotdesk_shared.vue.createElementVNode("h1", null, "Example Analytics"),
        window.__plotdesk_shared.vue.createElementVNode("p", null, "Plugin usage insights for the last 7 days.")
      ], -1)),
      window.__plotdesk_shared.vue.createElementVNode("section", E, [
        window.__plotdesk_shared.vue.createElementVNode("div", y, [
          d[0] || (d[0] = window.__plotdesk_shared.vue.createElementVNode("h2", null, "Tasks created per day", -1)),
          window.__plotdesk_shared.vue.createElementVNode("div", N, [
            (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(a.value, (e) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", {
              key: "t-" + e.date,
              class: "bars__item"
            }, [
              window.__plotdesk_shared.vue.createElementVNode("div", V, [
                window.__plotdesk_shared.vue.createElementVNode("div", {
                  class: "bars__bar",
                  style: window.__plotdesk_shared.vue.normalizeStyle({ height: e.count / c.value * 100 + "%", background: "#0C359E" })
                }, null, 4)
              ]),
              window.__plotdesk_shared.vue.createElementVNode("div", g, window.__plotdesk_shared.vue.toDisplayString(e.date.slice(5)), 1),
              window.__plotdesk_shared.vue.createElementVNode("div", B, window.__plotdesk_shared.vue.toDisplayString(e.count), 1)
            ]))), 128))
          ])
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", S, [
          d[1] || (d[1] = window.__plotdesk_shared.vue.createElementVNode("h2", null, "Webhook dispatches per day", -1)),
          window.__plotdesk_shared.vue.createElementVNode("div", f, [
            (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(l.value, (e) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", {
              key: "w-" + e.date,
              class: "bars__item"
            }, [
              window.__plotdesk_shared.vue.createElementVNode("div", x, [
                window.__plotdesk_shared.vue.createElementVNode("div", {
                  class: "bars__bar",
                  style: window.__plotdesk_shared.vue.normalizeStyle({ height: e.count / u.value * 100 + "%", background: "#059669" })
                }, null, 4)
              ]),
              window.__plotdesk_shared.vue.createElementVNode("div", D, window.__plotdesk_shared.vue.toDisplayString(e.date.slice(5)), 1),
              window.__plotdesk_shared.vue.createElementVNode("div", O, window.__plotdesk_shared.vue.toDisplayString(e.count), 1)
            ]))), 128))
          ])
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", j, [
          d[2] || (d[2] = window.__plotdesk_shared.vue.createElementVNode("h2", null, "Task priority breakdown", -1)),
          n.value === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", z, "No tasks yet.")) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("ul", C, [
            (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(k, (e) => window.__plotdesk_shared.vue.createElementVNode("li", { key: e }, [
              window.__plotdesk_shared.vue.createElementVNode("div", F, [
                window.__plotdesk_shared.vue.createElementVNode("span", L, window.__plotdesk_shared.vue.toDisplayString(e), 1),
                window.__plotdesk_shared.vue.createElementVNode("span", M, window.__plotdesk_shared.vue.toDisplayString(t.value[e] || 0), 1)
              ]),
              window.__plotdesk_shared.vue.createElementVNode("div", T, [
                window.__plotdesk_shared.vue.createElementVNode("div", {
                  class: "breakdown__bar",
                  style: window.__plotdesk_shared.vue.normalizeStyle({ width: (t.value[e] || 0) / n.value * 100 + "%", background: v[e] })
                }, null, 4)
              ])
            ])), 64))
          ]))
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", A, [
          d[3] || (d[3] = window.__plotdesk_shared.vue.createElementVNode("h2", null, "Webhook status", -1)),
          r.value === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", W, "No webhook dispatches yet.")) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("ul", I, [
            (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(p, (e) => window.__plotdesk_shared.vue.createElementVNode("li", { key: e }, [
              window.__plotdesk_shared.vue.createElementVNode("div", P, [
                window.__plotdesk_shared.vue.createElementVNode("span", q, window.__plotdesk_shared.vue.toDisplayString(e), 1),
                window.__plotdesk_shared.vue.createElementVNode("span", G, window.__plotdesk_shared.vue.toDisplayString(_.value[e] || 0), 1)
              ]),
              window.__plotdesk_shared.vue.createElementVNode("div", H, [
                window.__plotdesk_shared.vue.createElementVNode("div", {
                  class: "breakdown__bar",
                  style: window.__plotdesk_shared.vue.normalizeStyle({ width: (_.value[e] || 0) / r.value * 100 + "%", background: h[e] })
                }, null, 4)
              ])
            ])), 64))
          ]))
        ])
      ])
    ]));
  }
}, Q = /* @__PURE__ */ m(J, [["__scopeId", "data-v-bd2920ad"]]);
export {
  Q as default
};
