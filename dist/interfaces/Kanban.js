import { _ as m } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const y = { class: "kanban" }, g = { class: "kanban__header" }, b = ["disabled"], f = {
  key: 0,
  class: "kanban__error"
}, B = { class: "kanban__board" }, E = { class: "kanban__count" }, N = {
  key: 0,
  class: "kanban__empty"
}, S = {
  key: 1,
  class: "kanban__cards"
}, V = { key: 0 }, C = { class: "kanban__card-meta" }, D = { class: "pd-chip pd-chip--muted" }, j = {
  key: 0,
  class: "kanban__due"
}, x = { class: "kanban__card-actions" }, O = ["value", "onChange"], F = ["value"], L = {
  __name: "Kanban",
  props: {
    group: { type: Object, default: () => ({}) },
    chat: { type: Object, default: () => ({}) },
    interfaceSettings: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) },
    payload: { type: Object, default: () => ({}) }
  },
  setup(u) {
    const w = u, p = window.__plotdesk_shared.vue.ref([]), _ = window.__plotdesk_shared.vue.ref(!0), a = window.__plotdesk_shared.vue.ref(null), l = window.__plotdesk_shared.vue.computed(() => {
      var e;
      return ((e = w.interfaceSettings) == null ? void 0 : e.group_by) === "priority" ? "priority" : "status";
    }), r = async () => {
      _.value = !0, a.value = null;
      try {
        const e = await fetch(route("api.plugin.plotdesk-example-plugin.tasks.index"), {
          credentials: "same-origin",
          headers: { Accept: "application/json" }
        });
        if (!e.ok) throw new Error(`Request failed (${e.status})`);
        const t = await e.json();
        p.value = Array.isArray(t == null ? void 0 : t.data) ? t.data : [];
      } catch (e) {
        a.value = (e == null ? void 0 : e.message) || "Failed to load tasks.";
      } finally {
        _.value = !1;
      }
    };
    window.__plotdesk_shared.vue.onMounted(r);
    const k = [
      { id: "open", title: "Open", accent: "var(--pd-text-secondary)" },
      { id: "in_progress", title: "In Progress", accent: "var(--pd-brand)" },
      { id: "blocked", title: "Blocked", accent: "var(--pd-danger)" },
      { id: "done", title: "Done", accent: "var(--pd-success)" }
    ], v = [
      { id: "urgent", title: "Urgent", accent: "var(--pd-danger)" },
      { id: "high", title: "High", accent: "var(--pd-warning)" },
      { id: "medium", title: "Medium", accent: "var(--pd-brand)" },
      { id: "low", title: "Low", accent: "var(--pd-info)" }
    ], i = window.__plotdesk_shared.vue.computed(() => l.value === "priority" ? v : k), c = window.__plotdesk_shared.vue.computed(() => {
      const e = {};
      for (const t of i.value)
        e[t.id] = p.value.filter((d) => d[l.value] === t.id);
      return e;
    }), h = async (e, t) => {
      var d;
      try {
        if (!(await fetch(route("api.plugin.plotdesk-example-plugin.tasks.update", { task: e.id }), {
          method: "PUT",
          credentials: "same-origin",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": ((d = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : d.content) || ""
          },
          body: JSON.stringify({ [l.value]: t })
        })).ok) return;
        await r();
      } catch (s) {
        a.value = (s == null ? void 0 : s.message) || "Update failed";
      }
    };
    return (e, t) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", y, [
      window.__plotdesk_shared.vue.createElementVNode("header", g, [
        t[0] || (t[0] = window.__plotdesk_shared.vue.createElementVNode("h2", null, "Example Kanban", -1)),
        window.__plotdesk_shared.vue.createElementVNode("button", {
          type: "button",
          class: "pd-btn pd-btn--secondary",
          disabled: _.value,
          onClick: r
        }, window.__plotdesk_shared.vue.toDisplayString(_.value ? "Loading..." : "Refresh"), 9, b)
      ]),
      a.value ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", f, window.__plotdesk_shared.vue.toDisplayString(a.value), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
      window.__plotdesk_shared.vue.createElementVNode("div", B, [
        (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(i.value, (d) => {
          var s;
          return window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("section", {
            key: d.id,
            class: "kanban__column"
          }, [
            window.__plotdesk_shared.vue.createElementVNode("header", {
              class: "kanban__column-header",
              style: window.__plotdesk_shared.vue.normalizeStyle({ borderColor: d.accent })
            }, [
              window.__plotdesk_shared.vue.createElementVNode("span", null, window.__plotdesk_shared.vue.toDisplayString(d.title), 1),
              window.__plotdesk_shared.vue.createElementVNode("span", E, window.__plotdesk_shared.vue.toDisplayString(((s = c.value[d.id]) == null ? void 0 : s.length) || 0), 1)
            ], 4),
            (c.value[d.id] || []).length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", N, "No tasks")) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", S, [
              (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(c.value[d.id], (o) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("article", {
                key: o.id,
                class: "kanban__card"
              }, [
                window.__plotdesk_shared.vue.createElementVNode("h4", null, window.__plotdesk_shared.vue.toDisplayString(o.title), 1),
                o.description ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("p", V, window.__plotdesk_shared.vue.toDisplayString(o.description), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
                window.__plotdesk_shared.vue.createElementVNode("div", C, [
                  window.__plotdesk_shared.vue.createElementVNode("span", D, window.__plotdesk_shared.vue.toDisplayString(o.priority), 1),
                  o.due_date ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", j, "Due " + window.__plotdesk_shared.vue.toDisplayString(o.due_date), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
                ]),
                window.__plotdesk_shared.vue.createElementVNode("div", x, [
                  window.__plotdesk_shared.vue.createElementVNode("select", {
                    class: "pd-input pd-input--sm",
                    value: o[l.value],
                    onChange: (n) => h(o, n.target.value)
                  }, [
                    (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(i.value, (n) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("option", {
                      key: n.id,
                      value: n.id
                    }, window.__plotdesk_shared.vue.toDisplayString(n.title), 9, F))), 128))
                  ], 40, O)
                ])
              ]))), 128))
            ]))
          ]);
        }), 128))
      ])
    ]));
  }
}, A = /* @__PURE__ */ m(L, [["__scopeId", "data-v-67eb447e"]]);
export {
  A as default
};
