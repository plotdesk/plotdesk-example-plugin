import { u as i } from "../chunks/translator-CzLc3Cda.js";
import { _ as p } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const c = { class: "task-card" }, u = { class: "task-card__body" }, w = { class: "task-card__title" }, k = {
  key: 0,
  class: "task-card__id"
}, h = {
  key: 0,
  class: "task-card__description"
}, v = { class: "task-card__meta" }, m = {
  key: 2,
  class: "task-card__due"
}, y = {
  key: 3,
  class: "task-card__assignee"
}, g = {
  __name: "TaskCreated",
  props: {
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) }
  },
  setup(a) {
    const s = a, o = i(window.__plotdesk_shared.vue.computed(() => s.translations)), e = window.__plotdesk_shared.vue.computed(() => {
      var d, t;
      return ((t = (d = s.payload) == null ? void 0 : d.results) == null ? void 0 : t.task) || {};
    }), _ = window.__plotdesk_shared.vue.computed(() => ({
      low: "pd-chip--info",
      medium: "pd-chip--brand",
      high: "pd-chip--warning",
      urgent: "pd-chip--danger"
    })[e.value.priority] || "pd-chip--muted"), r = window.__plotdesk_shared.vue.computed(() => ({
      open: "pd-chip--muted",
      in_progress: "pd-chip--brand",
      blocked: "pd-chip--danger",
      done: "pd-chip--success"
    })[e.value.status] || "pd-chip--muted"), n = window.__plotdesk_shared.vue.computed(() => o({ low: "Low", medium: "Medium", high: "High", urgent: "Urgent" }[e.value.priority] || e.value.priority || "")), l = window.__plotdesk_shared.vue.computed(() => o({ open: "Open", in_progress: "In Progress", blocked: "Blocked", done: "Done" }[e.value.status] || e.value.status || ""));
    return (d, t) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", c, [
      t[0] || (t[0] = window.__plotdesk_shared.vue.createElementVNode("div", { class: "task-card__icon" }, [
        window.__plotdesk_shared.vue.createElementVNode("svg", {
          viewBox: "0 0 24 24",
          width: "20",
          height: "20",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }, [
          window.__plotdesk_shared.vue.createElementVNode("path", { d: "M9 12l2 2 4-4" }),
          window.__plotdesk_shared.vue.createElementVNode("circle", {
            cx: "12",
            cy: "12",
            r: "10"
          })
        ])
      ], -1)),
      window.__plotdesk_shared.vue.createElementVNode("div", u, [
        window.__plotdesk_shared.vue.createElementVNode("div", w, [
          e.value.id ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", k, "#" + window.__plotdesk_shared.vue.toDisplayString(e.value.id), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
          window.__plotdesk_shared.vue.createTextVNode(" " + window.__plotdesk_shared.vue.toDisplayString(e.value.title), 1)
        ]),
        e.value.description ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("p", h, window.__plotdesk_shared.vue.toDisplayString(e.value.description), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
        window.__plotdesk_shared.vue.createElementVNode("div", v, [
          e.value.priority ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", {
            key: 0,
            class: window.__plotdesk_shared.vue.normalizeClass(["pd-chip", _.value])
          }, window.__plotdesk_shared.vue.toDisplayString(n.value), 3)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
          e.value.status ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", {
            key: 1,
            class: window.__plotdesk_shared.vue.normalizeClass(["pd-chip", r.value])
          }, window.__plotdesk_shared.vue.toDisplayString(l.value), 3)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
          e.value.due_date ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", m, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(o)("Due {date}", { date: e.value.due_date })), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
          e.value.assignee ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", y, "@" + window.__plotdesk_shared.vue.toDisplayString(e.value.assignee), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
        ])
      ])
    ]));
  }
}, N = /* @__PURE__ */ p(g, [["__scopeId", "data-v-3cf38d4b"]]);
export {
  N as default
};
