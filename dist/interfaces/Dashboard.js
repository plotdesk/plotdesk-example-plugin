import { u as g } from "../chunks/translator-CzLc3Cda.js";
import { _ as y } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const E = { class: "interface" }, N = { class: "interface__header" }, b = ["disabled"], V = { class: "interface__stats" }, D = { class: "stat" }, S = { class: "stat__label" }, B = { class: "stat__value" }, x = { class: "stat" }, C = { class: "stat__label" }, O = { class: "stat__value" }, j = { class: "stat" }, I = { class: "stat__label" }, L = { class: "stat__value" }, A = { class: "interface__list" }, T = {
  key: 0,
  class: "interface__error"
}, M = {
  key: 1,
  class: "interface__empty"
}, P = {
  key: 2,
  class: "interface__empty"
}, R = {
  key: 3,
  class: "task-list"
}, F = { class: "task-list__main" }, $ = { class: "task-list__title" }, q = { class: "task-list__meta" }, z = { class: "pd-chip pd-chip--muted" }, H = {
  key: 0,
  class: "task-list__due"
}, U = {
  __name: "Dashboard",
  props: {
    group: { type: Object, default: () => ({}) },
    chat: { type: Object, default: () => ({}) },
    interfaceSettings: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) },
    payload: { type: Object, default: () => ({}) }
  },
  setup(i) {
    const l = i, s = g(window.__plotdesk_shared.vue.computed(() => l.translations)), d = window.__plotdesk_shared.vue.ref([]), _ = window.__plotdesk_shared.vue.ref(!0), n = window.__plotdesk_shared.vue.ref(null), u = window.__plotdesk_shared.vue.computed(() => {
      var t;
      const e = (t = l.interfaceSettings) == null ? void 0 : t.show_completed_tasks;
      return e === !0 || e === "true" || e === 1 || e === "1";
    }), c = window.__plotdesk_shared.vue.computed(() => {
      var a;
      const e = (a = l.interfaceSettings) == null ? void 0 : a.max_items, t = parseInt(e, 10);
      return Number.isNaN(t) ? 10 : Math.max(1, Math.min(50, t));
    }), p = async () => {
      _.value = !0, n.value = null;
      try {
        const e = await fetch(route("api.plugin.plotdesk-example-plugin.tasks.index"), {
          credentials: "same-origin",
          headers: { Accept: "application/json" }
        });
        if (!e.ok)
          throw new Error(`Request failed (${e.status})`);
        const t = await e.json();
        d.value = Array.isArray(t == null ? void 0 : t.data) ? t.data : [];
      } catch (e) {
        n.value = (e == null ? void 0 : e.message) || s("Failed to load tasks.");
      } finally {
        _.value = !1;
      }
    };
    window.__plotdesk_shared.vue.onMounted(p);
    const r = window.__plotdesk_shared.vue.computed(() => (u.value ? d.value : d.value.filter((t) => t.status !== "done")).slice(0, c.value)), w = window.__plotdesk_shared.vue.computed(() => d.value.filter((e) => e.status !== "done").length), h = window.__plotdesk_shared.vue.computed(() => d.value.filter((e) => e.status === "in_progress").length), v = window.__plotdesk_shared.vue.computed(() => d.value.filter((e) => e.status === "done").length), k = (e) => ({
      low: "pd-chip--info",
      medium: "pd-chip--brand",
      high: "pd-chip--warning",
      urgent: "pd-chip--danger"
    })[e] || "pd-chip--muted", m = (e) => s({ low: "Low", medium: "Medium", high: "High", urgent: "Urgent" }[e] || e), f = (e) => s({ open: "Open", in_progress: "In Progress", blocked: "Blocked", done: "Done" }[e] || e);
    return (e, t) => {
      var a;
      return window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", E, [
        window.__plotdesk_shared.vue.createElementVNode("header", N, [
          window.__plotdesk_shared.vue.createElementVNode("div", null, [
            window.__plotdesk_shared.vue.createElementVNode("h2", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("Tasks Overview")), 1),
            window.__plotdesk_shared.vue.createElementVNode("p", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)('Live view of tasks tracked by this plugin for group "{name}".', { name: ((a = i.group) == null ? void 0 : a.name) || "" })), 1)
          ]),
          window.__plotdesk_shared.vue.createElementVNode("button", {
            type: "button",
            class: "pd-btn pd-btn--secondary",
            disabled: _.value,
            onClick: p
          }, window.__plotdesk_shared.vue.toDisplayString(_.value ? window.__plotdesk_shared.vue.unref(s)("Refreshing...") : window.__plotdesk_shared.vue.unref(s)("Refresh")), 9, b)
        ]),
        window.__plotdesk_shared.vue.createElementVNode("section", V, [
          window.__plotdesk_shared.vue.createElementVNode("div", D, [
            window.__plotdesk_shared.vue.createElementVNode("span", S, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("Open")), 1),
            window.__plotdesk_shared.vue.createElementVNode("span", B, window.__plotdesk_shared.vue.toDisplayString(w.value), 1)
          ]),
          window.__plotdesk_shared.vue.createElementVNode("div", x, [
            window.__plotdesk_shared.vue.createElementVNode("span", C, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("In Progress")), 1),
            window.__plotdesk_shared.vue.createElementVNode("span", O, window.__plotdesk_shared.vue.toDisplayString(h.value), 1)
          ]),
          window.__plotdesk_shared.vue.createElementVNode("div", j, [
            window.__plotdesk_shared.vue.createElementVNode("span", I, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("Completed")), 1),
            window.__plotdesk_shared.vue.createElementVNode("span", L, window.__plotdesk_shared.vue.toDisplayString(v.value), 1)
          ])
        ]),
        window.__plotdesk_shared.vue.createElementVNode("section", A, [
          n.value ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", T, window.__plotdesk_shared.vue.toDisplayString(n.value), 1)) : _.value && r.value.length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", M, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("Loading tasks...")), 1)) : r.value.length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", P, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("No tasks to show. Ask the AI to create one with the Example Tasks app!")), 1)) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("ul", R, [
            (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(r.value, (o) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("li", {
              key: o.id,
              class: "task-list__item"
            }, [
              window.__plotdesk_shared.vue.createElementVNode("div", F, [
                window.__plotdesk_shared.vue.createElementVNode("span", $, window.__plotdesk_shared.vue.toDisplayString(o.title), 1),
                window.__plotdesk_shared.vue.createElementVNode("div", q, [
                  window.__plotdesk_shared.vue.createElementVNode("span", {
                    class: window.__plotdesk_shared.vue.normalizeClass(["pd-chip", k(o.priority)])
                  }, window.__plotdesk_shared.vue.toDisplayString(m(o.priority)), 3),
                  window.__plotdesk_shared.vue.createElementVNode("span", z, window.__plotdesk_shared.vue.toDisplayString(f(o.status)), 1),
                  o.due_date ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", H, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("Due {date}", { date: o.due_date })), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
                ])
              ])
            ]))), 128))
          ]))
        ])
      ]);
    };
  }
}, K = /* @__PURE__ */ y(U, [["__scopeId", "data-v-c1f2c7be"]]);
export {
  K as default
};
