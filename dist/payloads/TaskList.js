import { _ as i } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const p = { class: "task-list" }, r = { class: "task-list__header" }, c = { class: "task-list__count" }, w = {
  key: 0,
  class: "task-list__empty"
}, u = {
  key: 1,
  class: "task-list__items"
}, k = { class: "task-list__main" }, h = { class: "task-list__id" }, v = { class: "task-list__title" }, m = { class: "task-list__meta" }, y = {
  key: 2,
  class: "task-list__due"
}, g = {
  __name: "TaskList",
  props: {
    payload: { type: Object, default: () => ({}) }
  },
  setup(a) {
    const o = a, d = window.__plotdesk_shared.vue.computed(() => {
      var s, t;
      return ((t = (s = o.payload) == null ? void 0 : s.results) == null ? void 0 : t.tasks) || [];
    }), _ = window.__plotdesk_shared.vue.computed(() => {
      var s, t;
      return ((t = (s = o.payload) == null ? void 0 : s.results) == null ? void 0 : t.count) || d.value.length;
    }), l = (s) => ({
      low: "pd-chip--info",
      medium: "pd-chip--brand",
      high: "pd-chip--warning",
      urgent: "pd-chip--danger"
    })[s] || "pd-chip--muted", n = (s) => ({
      open: "pd-chip--muted",
      in_progress: "pd-chip--brand",
      blocked: "pd-chip--danger",
      done: "pd-chip--success"
    })[s] || "pd-chip--muted";
    return (s, t) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", p, [
      window.__plotdesk_shared.vue.createElementVNode("div", r, [
        t[0] || (t[0] = window.__plotdesk_shared.vue.createElementVNode("span", null, "Example Tasks", -1)),
        window.__plotdesk_shared.vue.createElementVNode("span", c, window.__plotdesk_shared.vue.toDisplayString(_.value) + " " + window.__plotdesk_shared.vue.toDisplayString(_.value === 1 ? "task" : "tasks"), 1)
      ]),
      d.value.length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", w, "No tasks found.")) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("ul", u, [
        (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(d.value, (e) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("li", {
          key: e.id,
          class: "task-list__item"
        }, [
          window.__plotdesk_shared.vue.createElementVNode("div", k, [
            window.__plotdesk_shared.vue.createElementVNode("span", h, "#" + window.__plotdesk_shared.vue.toDisplayString(e.id), 1),
            window.__plotdesk_shared.vue.createElementVNode("span", v, window.__plotdesk_shared.vue.toDisplayString(e.title), 1)
          ]),
          window.__plotdesk_shared.vue.createElementVNode("div", m, [
            e.priority ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", {
              key: 0,
              class: window.__plotdesk_shared.vue.normalizeClass(["pd-chip", l(e.priority)])
            }, window.__plotdesk_shared.vue.toDisplayString(e.priority), 3)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
            e.status ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", {
              key: 1,
              class: window.__plotdesk_shared.vue.normalizeClass(["pd-chip", n(e.status)])
            }, window.__plotdesk_shared.vue.toDisplayString(e.status), 3)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
            e.due_date ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", y, "Due " + window.__plotdesk_shared.vue.toDisplayString(e.due_date), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
          ])
        ]))), 128))
      ]))
    ]));
  }
}, E = /* @__PURE__ */ i(g, [["__scopeId", "data-v-ba9a8452"]]);
export {
  E as default
};
