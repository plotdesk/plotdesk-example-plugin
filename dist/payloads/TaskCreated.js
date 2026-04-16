import { _ as r } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const l = { class: "task-card" }, n = { class: "task-card__body" }, i = { class: "task-card__title" }, p = {
  key: 0,
  class: "task-card__id"
}, c = {
  key: 0,
  class: "task-card__description"
}, u = { class: "task-card__meta" }, w = {
  key: 2,
  class: "task-card__due"
}, k = {
  key: 3,
  class: "task-card__assignee"
}, h = {
  __name: "TaskCreated",
  props: {
    payload: { type: Object, default: () => ({}) }
  },
  setup(s) {
    const t = s, e = window.__plotdesk_shared.vue.computed(() => {
      var o, d;
      return ((d = (o = t.payload) == null ? void 0 : o.results) == null ? void 0 : d.task) || {};
    }), _ = window.__plotdesk_shared.vue.computed(() => ({
      low: "pd-chip--info",
      medium: "pd-chip--brand",
      high: "pd-chip--warning",
      urgent: "pd-chip--danger"
    })[e.value.priority] || "pd-chip--muted"), a = window.__plotdesk_shared.vue.computed(() => ({
      open: "pd-chip--muted",
      in_progress: "pd-chip--brand",
      blocked: "pd-chip--danger",
      done: "pd-chip--success"
    })[e.value.status] || "pd-chip--muted");
    return (o, d) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", l, [
      d[0] || (d[0] = window.__plotdesk_shared.vue.createElementVNode("div", { class: "task-card__icon" }, [
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
      window.__plotdesk_shared.vue.createElementVNode("div", n, [
        window.__plotdesk_shared.vue.createElementVNode("div", i, [
          e.value.id ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", p, "#" + window.__plotdesk_shared.vue.toDisplayString(e.value.id), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
          window.__plotdesk_shared.vue.createTextVNode(" " + window.__plotdesk_shared.vue.toDisplayString(e.value.title), 1)
        ]),
        e.value.description ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("p", c, window.__plotdesk_shared.vue.toDisplayString(e.value.description), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
        window.__plotdesk_shared.vue.createElementVNode("div", u, [
          e.value.priority ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", {
            key: 0,
            class: window.__plotdesk_shared.vue.normalizeClass(["pd-chip", _.value])
          }, window.__plotdesk_shared.vue.toDisplayString(e.value.priority), 3)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
          e.value.status ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", {
            key: 1,
            class: window.__plotdesk_shared.vue.normalizeClass(["pd-chip", a.value])
          }, window.__plotdesk_shared.vue.toDisplayString(e.value.status), 3)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
          e.value.due_date ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", w, "Due " + window.__plotdesk_shared.vue.toDisplayString(e.value.due_date), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
          e.value.assignee ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", k, "@" + window.__plotdesk_shared.vue.toDisplayString(e.value.assignee), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
        ])
      ])
    ]));
  }
}, m = /* @__PURE__ */ r(h, [["__scopeId", "data-v-d9df15b2"]]);
export {
  m as default
};
