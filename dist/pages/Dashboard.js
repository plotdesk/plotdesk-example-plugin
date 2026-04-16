import { u as k } from "../chunks/translator-CzLc3Cda.js";
import { _ as v } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const m = { class: "dashboard" }, y = { class: "dashboard__header" }, E = { class: "dashboard__title" }, g = { class: "dashboard__subtitle" }, N = { class: "dashboard__header-actions" }, B = ["href"], V = ["href"], b = { class: "dashboard__stats" }, f = { class: "stat-card__label" }, D = { class: "stat-card__value" }, S = { class: "dashboard__grid" }, L = { class: "pd-card" }, x = { class: "pd-card__header" }, C = { class: "pd-card__title" }, O = {
  key: 0,
  class: "pd-empty"
}, T = {
  key: 1,
  class: "pd-list"
}, F = { class: "pd-list__main" }, z = { class: "pd-list__title" }, R = { class: "pd-list__meta" }, j = {
  key: 0,
  class: "pd-list__date"
}, A = { class: "pd-card" }, I = { class: "pd-card__header" }, M = { class: "pd-card__title" }, $ = {
  key: 0,
  class: "pd-empty"
}, H = {
  key: 1,
  class: "pd-list"
}, P = { class: "pd-list__main" }, U = { class: "pd-list__title" }, W = { class: "pd-list__meta" }, q = {
  key: 0,
  class: "pd-chip pd-chip--success"
}, G = { class: "pd-list__date" }, J = { class: "pd-card pd-card--wide" }, K = { class: "pd-card__header" }, Q = { class: "pd-card__title" }, X = {
  key: 0,
  class: "pd-empty"
}, Y = {
  key: 1,
  class: "pd-timeline"
}, Z = { class: "pd-timeline__content" }, ee = { class: "pd-timeline__event" }, de = { class: "pd-timeline__date" }, se = {
  __name: "Dashboard",
  props: {
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) }
  },
  setup(i) {
    const _ = i, s = k(window.__plotdesk_shared.vue.computed(() => _.translations)), o = window.__plotdesk_shared.vue.computed(() => {
      var e;
      return ((e = _.payload) == null ? void 0 : e.data) || {};
    }), p = window.__plotdesk_shared.vue.computed(() => {
      const e = o.value.stats || {};
      return [
        { key: "open_tasks", label: s("Open Tasks"), value: e.open_tasks ?? 0, tone: "brand" },
        { key: "completed_tasks", label: s("Completed"), value: e.completed_tasks ?? 0, tone: "success" },
        { key: "notes", label: s("Notes"), value: e.notes ?? 0, tone: "info" },
        { key: "webhooks", label: s("Webhooks 24h"), value: e.webhook_events_24h ?? 0, tone: "warning" }
      ];
    }), a = window.__plotdesk_shared.vue.computed(() => o.value.recent_tasks || []), n = window.__plotdesk_shared.vue.computed(() => o.value.recent_notes || []), l = window.__plotdesk_shared.vue.computed(() => o.value.recent_activity || []), c = (e) => ({
      low: "pd-chip--info",
      medium: "pd-chip--brand",
      high: "pd-chip--warning",
      urgent: "pd-chip--danger"
    })[e] || "pd-chip--muted", w = (e) => ({
      open: "pd-chip--muted",
      in_progress: "pd-chip--brand",
      blocked: "pd-chip--danger",
      done: "pd-chip--success"
    })[e] || "pd-chip--muted", u = (e) => s({ low: "Low", medium: "Medium", high: "High", urgent: "Urgent" }[e] || e), h = (e) => s({ open: "Open", in_progress: "In Progress", blocked: "Blocked", done: "Done" }[e] || e), r = (e) => {
      if (!e)
        return "";
      try {
        return new Date(e).toLocaleString();
      } catch {
        return e;
      }
    };
    return (e, t) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", m, [
      window.__plotdesk_shared.vue.createElementVNode("header", y, [
        window.__plotdesk_shared.vue.createElementVNode("div", null, [
          window.__plotdesk_shared.vue.createElementVNode("h1", E, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("Example Dashboard")), 1),
          window.__plotdesk_shared.vue.createElementVNode("p", g, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("Overview of tasks, notes and activity from the plotdesk example plugin.")), 1)
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", N, [
          window.__plotdesk_shared.vue.createElementVNode("a", {
            href: e.route("plugin.plotdesk-example-plugin.tasks.index"),
            class: "pd-btn pd-btn--primary"
          }, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("Manage Tasks")), 9, B),
          window.__plotdesk_shared.vue.createElementVNode("a", {
            href: e.route("plugin.plotdesk-example-plugin.notes.index"),
            class: "pd-btn pd-btn--secondary"
          }, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("Open Notebook")), 9, V)
        ])
      ]),
      window.__plotdesk_shared.vue.createElementVNode("section", b, [
        (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(p.value, (d) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", {
          key: d.key,
          class: window.__plotdesk_shared.vue.normalizeClass(["stat-card", `stat-card--${d.tone}`])
        }, [
          window.__plotdesk_shared.vue.createElementVNode("div", f, window.__plotdesk_shared.vue.toDisplayString(d.label), 1),
          window.__plotdesk_shared.vue.createElementVNode("div", D, window.__plotdesk_shared.vue.toDisplayString(d.value), 1)
        ], 2))), 128))
      ]),
      window.__plotdesk_shared.vue.createElementVNode("section", S, [
        window.__plotdesk_shared.vue.createElementVNode("div", L, [
          window.__plotdesk_shared.vue.createElementVNode("div", x, [
            window.__plotdesk_shared.vue.createElementVNode("h2", C, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("Recent Tasks")), 1)
          ]),
          a.value.length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", O, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("No tasks yet.")), 1)) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("ul", T, [
            (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(a.value, (d) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("li", {
              key: d.id,
              class: "pd-list__item"
            }, [
              window.__plotdesk_shared.vue.createElementVNode("div", F, [
                window.__plotdesk_shared.vue.createElementVNode("div", z, window.__plotdesk_shared.vue.toDisplayString(d.title), 1),
                window.__plotdesk_shared.vue.createElementVNode("div", R, [
                  window.__plotdesk_shared.vue.createElementVNode("span", {
                    class: window.__plotdesk_shared.vue.normalizeClass(["pd-chip", c(d.priority)])
                  }, window.__plotdesk_shared.vue.toDisplayString(u(d.priority)), 3),
                  window.__plotdesk_shared.vue.createElementVNode("span", {
                    class: window.__plotdesk_shared.vue.normalizeClass(["pd-chip", w(d.status)])
                  }, window.__plotdesk_shared.vue.toDisplayString(h(d.status)), 3),
                  d.due_date ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", j, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("Due {date}", { date: d.due_date })), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
                ])
              ])
            ]))), 128))
          ]))
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", A, [
          window.__plotdesk_shared.vue.createElementVNode("div", I, [
            window.__plotdesk_shared.vue.createElementVNode("h2", M, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("Recent Notes")), 1)
          ]),
          n.value.length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", $, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("No notes yet.")), 1)) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("ul", H, [
            (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(n.value, (d) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("li", {
              key: d.id,
              class: "pd-list__item"
            }, [
              window.__plotdesk_shared.vue.createElementVNode("div", P, [
                window.__plotdesk_shared.vue.createElementVNode("div", U, window.__plotdesk_shared.vue.toDisplayString(d.title), 1),
                window.__plotdesk_shared.vue.createElementVNode("div", W, [
                  d.has_summary ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", q, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("summary")), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
                  window.__plotdesk_shared.vue.createElementVNode("span", G, window.__plotdesk_shared.vue.toDisplayString(r(d.updated_at)), 1)
                ])
              ])
            ]))), 128))
          ]))
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", J, [
          window.__plotdesk_shared.vue.createElementVNode("div", K, [
            window.__plotdesk_shared.vue.createElementVNode("h2", Q, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("Recent Activity")), 1)
          ]),
          l.value.length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", X, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("No activity recorded yet.")), 1)) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("ul", Y, [
            (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(l.value, (d) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("li", {
              key: d.id,
              class: "pd-timeline__item"
            }, [
              t[0] || (t[0] = window.__plotdesk_shared.vue.createElementVNode("span", { class: "pd-timeline__dot" }, null, -1)),
              window.__plotdesk_shared.vue.createElementVNode("div", Z, [
                window.__plotdesk_shared.vue.createElementVNode("div", ee, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)(d.event_name)), 1),
                window.__plotdesk_shared.vue.createElementVNode("div", de, window.__plotdesk_shared.vue.toDisplayString(r(d.created_at)), 1)
              ])
            ]))), 128))
          ]))
        ])
      ])
    ]));
  }
}, _e = /* @__PURE__ */ v(se, [["__scopeId", "data-v-055157d9"]]);
export {
  _e as default
};
