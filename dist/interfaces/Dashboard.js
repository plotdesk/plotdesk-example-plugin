import { _ as k } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const m = { class: "interface" }, f = { class: "interface__header" }, g = ["disabled"], y = { class: "interface__stats" }, E = { class: "stat" }, N = { class: "stat__value" }, V = { class: "stat" }, b = { class: "stat__value" }, B = { class: "stat" }, S = { class: "stat__value" }, D = { class: "interface__list" }, x = {
  key: 0,
  class: "interface__error"
}, C = {
  key: 1,
  class: "interface__empty"
}, j = {
  key: 2,
  class: "interface__empty"
}, O = {
  key: 3,
  class: "task-list"
}, A = { class: "task-list__main" }, I = { class: "task-list__title" }, T = { class: "task-list__meta" }, L = { class: "pd-chip pd-chip--muted" }, M = {
  key: 0,
  class: "task-list__due"
}, R = {
  __name: "Dashboard",
  props: {
    group: { type: Object, default: () => ({}) },
    chat: { type: Object, default: () => ({}) },
    interfaceSettings: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) },
    payload: { type: Object, default: () => ({}) }
  },
  setup(l) {
    const r = l, o = window.__plotdesk_shared.vue.ref([]), d = window.__plotdesk_shared.vue.ref(!0), _ = window.__plotdesk_shared.vue.ref(null), p = window.__plotdesk_shared.vue.computed(() => {
      var t;
      const e = (t = r.interfaceSettings) == null ? void 0 : t.show_completed_tasks;
      return e === !0 || e === "true" || e === 1 || e === "1";
    }), u = window.__plotdesk_shared.vue.computed(() => {
      var a;
      const e = (a = r.interfaceSettings) == null ? void 0 : a.max_items, t = parseInt(e, 10);
      return Number.isNaN(t) ? 10 : Math.max(1, Math.min(50, t));
    }), i = async () => {
      d.value = !0, _.value = null;
      try {
        const e = await fetch(route("api.plugin.plotdesk-example-plugin.tasks.index"), {
          credentials: "same-origin",
          headers: { Accept: "application/json" }
        });
        if (!e.ok) throw new Error(`Request failed (${e.status})`);
        const t = await e.json();
        o.value = Array.isArray(t == null ? void 0 : t.data) ? t.data : [];
      } catch (e) {
        _.value = (e == null ? void 0 : e.message) || "Failed to load tasks.";
      } finally {
        d.value = !1;
      }
    };
    window.__plotdesk_shared.vue.onMounted(i);
    const n = window.__plotdesk_shared.vue.computed(() => (p.value ? o.value : o.value.filter((t) => t.status !== "done")).slice(0, u.value)), c = window.__plotdesk_shared.vue.computed(() => o.value.filter((e) => e.status !== "done").length), w = window.__plotdesk_shared.vue.computed(() => o.value.filter((e) => e.status === "in_progress").length), h = window.__plotdesk_shared.vue.computed(() => o.value.filter((e) => e.status === "done").length), v = (e) => ({
      low: "pd-chip--info",
      medium: "pd-chip--brand",
      high: "pd-chip--warning",
      urgent: "pd-chip--danger"
    })[e] || "pd-chip--muted";
    return (e, t) => {
      var a;
      return window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", m, [
        window.__plotdesk_shared.vue.createElementVNode("header", f, [
          window.__plotdesk_shared.vue.createElementVNode("div", null, [
            t[0] || (t[0] = window.__plotdesk_shared.vue.createElementVNode("h2", null, "Tasks Overview", -1)),
            window.__plotdesk_shared.vue.createElementVNode("p", null, "Live view of tasks tracked by this plugin for group “" + window.__plotdesk_shared.vue.toDisplayString((a = l.group) == null ? void 0 : a.name) + "”.", 1)
          ]),
          window.__plotdesk_shared.vue.createElementVNode("button", {
            type: "button",
            class: "pd-btn pd-btn--secondary",
            disabled: d.value,
            onClick: i
          }, window.__plotdesk_shared.vue.toDisplayString(d.value ? "Refreshing..." : "Refresh"), 9, g)
        ]),
        window.__plotdesk_shared.vue.createElementVNode("section", y, [
          window.__plotdesk_shared.vue.createElementVNode("div", E, [
            t[1] || (t[1] = window.__plotdesk_shared.vue.createElementVNode("span", { class: "stat__label" }, "Open", -1)),
            window.__plotdesk_shared.vue.createElementVNode("span", N, window.__plotdesk_shared.vue.toDisplayString(c.value), 1)
          ]),
          window.__plotdesk_shared.vue.createElementVNode("div", V, [
            t[2] || (t[2] = window.__plotdesk_shared.vue.createElementVNode("span", { class: "stat__label" }, "In Progress", -1)),
            window.__plotdesk_shared.vue.createElementVNode("span", b, window.__plotdesk_shared.vue.toDisplayString(w.value), 1)
          ]),
          window.__plotdesk_shared.vue.createElementVNode("div", B, [
            t[3] || (t[3] = window.__plotdesk_shared.vue.createElementVNode("span", { class: "stat__label" }, "Completed", -1)),
            window.__plotdesk_shared.vue.createElementVNode("span", S, window.__plotdesk_shared.vue.toDisplayString(h.value), 1)
          ])
        ]),
        window.__plotdesk_shared.vue.createElementVNode("section", D, [
          _.value ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", x, window.__plotdesk_shared.vue.toDisplayString(_.value), 1)) : d.value && n.value.length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", C, "Loading tasks...")) : n.value.length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", j, " No tasks to show. Ask the AI to create one with the Example Tasks app! ")) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("ul", O, [
            (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(n.value, (s) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("li", {
              key: s.id,
              class: "task-list__item"
            }, [
              window.__plotdesk_shared.vue.createElementVNode("div", A, [
                window.__plotdesk_shared.vue.createElementVNode("span", I, window.__plotdesk_shared.vue.toDisplayString(s.title), 1),
                window.__plotdesk_shared.vue.createElementVNode("div", T, [
                  window.__plotdesk_shared.vue.createElementVNode("span", {
                    class: window.__plotdesk_shared.vue.normalizeClass(["pd-chip", v(s.priority)])
                  }, window.__plotdesk_shared.vue.toDisplayString(s.priority), 3),
                  window.__plotdesk_shared.vue.createElementVNode("span", L, window.__plotdesk_shared.vue.toDisplayString(s.status), 1),
                  s.due_date ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", M, "Due " + window.__plotdesk_shared.vue.toDisplayString(s.due_date), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
                ])
              ])
            ]))), 128))
          ]))
        ])
      ]);
    };
  }
}, P = /* @__PURE__ */ k(R, [["__scopeId", "data-v-67e2dcfa"]]);
export {
  P as default
};
