import { _ as w } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const u = { class: "dashboard" }, h = { class: "dashboard__header" }, k = { class: "dashboard__header-actions" }, v = ["href"], m = ["href"], E = { class: "dashboard__stats" }, y = { class: "stat-card__label" }, N = { class: "stat-card__value" }, V = { class: "dashboard__grid" }, B = { class: "pd-card" }, b = {
  key: 0,
  class: "pd-empty"
}, g = {
  key: 1,
  class: "pd-list"
}, f = { class: "pd-list__main" }, D = { class: "pd-list__title" }, S = { class: "pd-list__meta" }, x = {
  key: 0,
  class: "pd-list__date"
}, C = { class: "pd-card" }, L = {
  key: 0,
  class: "pd-empty"
}, O = {
  key: 1,
  class: "pd-list"
}, F = { class: "pd-list__main" }, T = { class: "pd-list__title" }, z = { class: "pd-list__meta" }, R = {
  key: 0,
  class: "pd-chip pd-chip--success"
}, j = { class: "pd-list__date" }, A = { class: "pd-card pd-card--wide" }, I = {
  key: 0,
  class: "pd-empty"
}, M = {
  key: 1,
  class: "pd-timeline"
}, W = { class: "pd-timeline__content" }, $ = { class: "pd-timeline__event" }, q = { class: "pd-timeline__date" }, G = {
  __name: "Dashboard",
  props: {
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) }
  },
  setup(n) {
    const r = n, s = window.__plotdesk_shared.vue.computed(() => {
      var d;
      return ((d = r.payload) == null ? void 0 : d.data) || {};
    }), i = window.__plotdesk_shared.vue.computed(() => {
      const d = s.value.stats || {};
      return [
        { key: "open_tasks", label: "Open Tasks", value: d.open_tasks ?? 0, tone: "brand" },
        { key: "completed_tasks", label: "Completed", value: d.completed_tasks ?? 0, tone: "success" },
        { key: "notes", label: "Notes", value: d.notes ?? 0, tone: "info" },
        { key: "webhooks", label: "Webhooks 24h", value: d.webhook_events_24h ?? 0, tone: "warning" }
      ];
    }), o = window.__plotdesk_shared.vue.computed(() => s.value.recent_tasks || []), _ = window.__plotdesk_shared.vue.computed(() => s.value.recent_notes || []), a = window.__plotdesk_shared.vue.computed(() => s.value.recent_activity || []), p = (d) => ({
      low: "pd-chip--info",
      medium: "pd-chip--brand",
      high: "pd-chip--warning",
      urgent: "pd-chip--danger"
    })[d] || "pd-chip--muted", c = (d) => ({
      open: "pd-chip--muted",
      in_progress: "pd-chip--brand",
      blocked: "pd-chip--danger",
      done: "pd-chip--success"
    })[d] || "pd-chip--muted", l = (d) => {
      if (!d) return "";
      try {
        return new Date(d).toLocaleString();
      } catch {
        return d;
      }
    };
    return (d, t) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", u, [
      window.__plotdesk_shared.vue.createElementVNode("header", h, [
        t[0] || (t[0] = window.__plotdesk_shared.vue.createElementVNode("div", null, [
          window.__plotdesk_shared.vue.createElementVNode("h1", { class: "dashboard__title" }, "Example Dashboard"),
          window.__plotdesk_shared.vue.createElementVNode("p", { class: "dashboard__subtitle" }, "Overview of tasks, notes and activity from the plotdesk example plugin.")
        ], -1)),
        window.__plotdesk_shared.vue.createElementVNode("div", k, [
          window.__plotdesk_shared.vue.createElementVNode("a", {
            href: d.route("plugin.plotdesk-example-plugin.tasks.index"),
            class: "pd-btn pd-btn--primary"
          }, "Manage Tasks", 8, v),
          window.__plotdesk_shared.vue.createElementVNode("a", {
            href: d.route("plugin.plotdesk-example-plugin.notes.index"),
            class: "pd-btn pd-btn--secondary"
          }, "Open Notebook", 8, m)
        ])
      ]),
      window.__plotdesk_shared.vue.createElementVNode("section", E, [
        (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(i.value, (e) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", {
          key: e.key,
          class: window.__plotdesk_shared.vue.normalizeClass(["stat-card", `stat-card--${e.tone}`])
        }, [
          window.__plotdesk_shared.vue.createElementVNode("div", y, window.__plotdesk_shared.vue.toDisplayString(e.label), 1),
          window.__plotdesk_shared.vue.createElementVNode("div", N, window.__plotdesk_shared.vue.toDisplayString(e.value), 1)
        ], 2))), 128))
      ]),
      window.__plotdesk_shared.vue.createElementVNode("section", V, [
        window.__plotdesk_shared.vue.createElementVNode("div", B, [
          t[1] || (t[1] = window.__plotdesk_shared.vue.createElementVNode("div", { class: "pd-card__header" }, [
            window.__plotdesk_shared.vue.createElementVNode("h2", { class: "pd-card__title" }, "Recent Tasks")
          ], -1)),
          o.value.length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", b, "No tasks yet.")) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("ul", g, [
            (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(o.value, (e) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("li", {
              key: e.id,
              class: "pd-list__item"
            }, [
              window.__plotdesk_shared.vue.createElementVNode("div", f, [
                window.__plotdesk_shared.vue.createElementVNode("div", D, window.__plotdesk_shared.vue.toDisplayString(e.title), 1),
                window.__plotdesk_shared.vue.createElementVNode("div", S, [
                  window.__plotdesk_shared.vue.createElementVNode("span", {
                    class: window.__plotdesk_shared.vue.normalizeClass(["pd-chip", p(e.priority)])
                  }, window.__plotdesk_shared.vue.toDisplayString(e.priority), 3),
                  window.__plotdesk_shared.vue.createElementVNode("span", {
                    class: window.__plotdesk_shared.vue.normalizeClass(["pd-chip", c(e.status)])
                  }, window.__plotdesk_shared.vue.toDisplayString(e.status), 3),
                  e.due_date ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", x, "Due " + window.__plotdesk_shared.vue.toDisplayString(e.due_date), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
                ])
              ])
            ]))), 128))
          ]))
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", C, [
          t[2] || (t[2] = window.__plotdesk_shared.vue.createElementVNode("div", { class: "pd-card__header" }, [
            window.__plotdesk_shared.vue.createElementVNode("h2", { class: "pd-card__title" }, "Recent Notes")
          ], -1)),
          _.value.length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", L, "No notes yet.")) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("ul", O, [
            (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(_.value, (e) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("li", {
              key: e.id,
              class: "pd-list__item"
            }, [
              window.__plotdesk_shared.vue.createElementVNode("div", F, [
                window.__plotdesk_shared.vue.createElementVNode("div", T, window.__plotdesk_shared.vue.toDisplayString(e.title), 1),
                window.__plotdesk_shared.vue.createElementVNode("div", z, [
                  e.has_summary ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", R, "summary")) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
                  window.__plotdesk_shared.vue.createElementVNode("span", j, window.__plotdesk_shared.vue.toDisplayString(l(e.updated_at)), 1)
                ])
              ])
            ]))), 128))
          ]))
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", A, [
          t[4] || (t[4] = window.__plotdesk_shared.vue.createElementVNode("div", { class: "pd-card__header" }, [
            window.__plotdesk_shared.vue.createElementVNode("h2", { class: "pd-card__title" }, "Recent Activity")
          ], -1)),
          a.value.length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", I, "No activity recorded yet.")) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("ul", M, [
            (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(a.value, (e) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("li", {
              key: e.id,
              class: "pd-timeline__item"
            }, [
              t[3] || (t[3] = window.__plotdesk_shared.vue.createElementVNode("span", { class: "pd-timeline__dot" }, null, -1)),
              window.__plotdesk_shared.vue.createElementVNode("div", W, [
                window.__plotdesk_shared.vue.createElementVNode("div", $, window.__plotdesk_shared.vue.toDisplayString(e.event_name), 1),
                window.__plotdesk_shared.vue.createElementVNode("div", q, window.__plotdesk_shared.vue.toDisplayString(l(e.created_at)), 1)
              ])
            ]))), 128))
          ]))
        ])
      ])
    ]));
  }
}, J = /* @__PURE__ */ w(G, [["__scopeId", "data-v-ecb94ee4"]]);
export {
  J as default
};
