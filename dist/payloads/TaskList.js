import { u } from "../chunks/translator-CzLc3Cda.js";
import { _ as w } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const k = { class: "task-list" }, h = { class: "task-list__header" }, v = { class: "task-list__count" }, m = {
  key: 0,
  class: "task-list__empty"
}, y = {
  key: 1,
  class: "task-list__items"
}, g = { class: "task-list__main" }, B = { class: "task-list__id" }, E = { class: "task-list__title" }, f = { class: "task-list__meta" }, N = {
  key: 2,
  class: "task-list__due"
}, D = {
  __name: "TaskList",
  props: {
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) }
  },
  setup(n) {
    const d = n, o = u(window.__plotdesk_shared.vue.computed(() => d.translations)), _ = window.__plotdesk_shared.vue.computed(() => {
      var e, t;
      return ((t = (e = d.payload) == null ? void 0 : e.results) == null ? void 0 : t.tasks) || [];
    }), a = window.__plotdesk_shared.vue.computed(() => {
      var e, t;
      return ((t = (e = d.payload) == null ? void 0 : e.results) == null ? void 0 : t.count) || _.value.length;
    }), l = window.__plotdesk_shared.vue.computed(() => `${a.value} ${a.value === 1 ? o("task") : o("tasks")}`), i = (e) => ({
      low: "pd-chip--info",
      medium: "pd-chip--brand",
      high: "pd-chip--warning",
      urgent: "pd-chip--danger"
    })[e] || "pd-chip--muted", r = (e) => ({
      open: "pd-chip--muted",
      in_progress: "pd-chip--brand",
      blocked: "pd-chip--danger",
      done: "pd-chip--success"
    })[e] || "pd-chip--muted", p = (e) => o({ low: "Low", medium: "Medium", high: "High", urgent: "Urgent" }[e] || e), c = (e) => o({ open: "Open", in_progress: "In Progress", blocked: "Blocked", done: "Done" }[e] || e);
    return (e, t) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", k, [
      window.__plotdesk_shared.vue.createElementVNode("div", h, [
        window.__plotdesk_shared.vue.createElementVNode("span", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(o)("Example Tasks")), 1),
        window.__plotdesk_shared.vue.createElementVNode("span", v, window.__plotdesk_shared.vue.toDisplayString(l.value), 1)
      ]),
      _.value.length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", m, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(o)("No tasks found.")), 1)) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("ul", y, [
        (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(_.value, (s) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("li", {
          key: s.id,
          class: "task-list__item"
        }, [
          window.__plotdesk_shared.vue.createElementVNode("div", g, [
            window.__plotdesk_shared.vue.createElementVNode("span", B, "#" + window.__plotdesk_shared.vue.toDisplayString(s.id), 1),
            window.__plotdesk_shared.vue.createElementVNode("span", E, window.__plotdesk_shared.vue.toDisplayString(s.title), 1)
          ]),
          window.__plotdesk_shared.vue.createElementVNode("div", f, [
            s.priority ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", {
              key: 0,
              class: window.__plotdesk_shared.vue.normalizeClass(["pd-chip", i(s.priority)])
            }, window.__plotdesk_shared.vue.toDisplayString(p(s.priority)), 3)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
            s.status ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", {
              key: 1,
              class: window.__plotdesk_shared.vue.normalizeClass(["pd-chip", r(s.status)])
            }, window.__plotdesk_shared.vue.toDisplayString(c(s.status)), 3)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
            s.due_date ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", N, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(o)("Due {date}", { date: s.due_date })), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
          ])
        ]))), 128))
      ]))
    ]));
  }
}, b = /* @__PURE__ */ w(D, [["__scopeId", "data-v-73d4e690"]]);
export {
  b as default
};
