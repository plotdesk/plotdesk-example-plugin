import { _ as h } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const m = { class: "tasks" }, E = { class: "tasks__header" }, V = { class: "pd-form__row" }, b = { class: "pd-form__label" }, N = { class: "pd-form__row" }, y = { class: "pd-form__label" }, g = { class: "pd-form__row pd-form__row--split" }, f = { class: "pd-form__label" }, S = ["value"], D = { class: "pd-form__label" }, B = ["value"], x = { class: "pd-form__label" }, C = { class: "pd-form__actions" }, T = ["disabled"], M = { class: "pd-card" }, O = {
  key: 0,
  class: "pd-empty"
}, U = {
  key: 1,
  class: "pd-table"
}, F = ["checked", "onChange"], L = { class: "pd-table__title" }, $ = {
  key: 0,
  class: "pd-table__subtitle"
}, P = ["onClick"], j = {
  __name: "Tasks",
  props: {
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) }
  },
  setup(n) {
    const a = n, _ = window.__plotdesk_shared.vue.computed(() => {
      var d, t;
      return ((t = (d = a.payload) == null ? void 0 : d.data) == null ? void 0 : t.tasks) || [];
    }), s = window.__plotdesk_shared.vue.ref(!1), o = window.__plotdesk_shared.vue.ref({
      title: "",
      description: "",
      priority: "medium",
      status: "open",
      due_date: ""
    }), l = window.__plotdesk_shared.vue.ref(!1), r = () => {
      l.value || (l.value = !0, window.__plotdesk_shared.inertia.router.post(route("plugin.plotdesk-example-plugin.tasks.store"), o.value, {
        preserveScroll: !0,
        onFinish: () => {
          l.value = !1, s.value = !1, o.value = { title: "", description: "", priority: "medium", status: "open", due_date: "" };
        }
      }));
    }, i = (d) => {
      window.__plotdesk_shared.inertia.router.put(
        route("plugin.plotdesk-example-plugin.tasks.update", { task: d.id }),
        { status: d.status === "done" ? "open" : "done" },
        { preserveScroll: !0 }
      );
    }, p = (d) => {
      confirm(`Delete task "${d.title}"?`) && window.__plotdesk_shared.inertia.router.delete(route("plugin.plotdesk-example-plugin.tasks.destroy", { task: d.id }), { preserveScroll: !0 });
    }, u = [
      { value: "low", label: "Low" },
      { value: "medium", label: "Medium" },
      { value: "high", label: "High" },
      { value: "urgent", label: "Urgent" }
    ], w = [
      { value: "open", label: "Open" },
      { value: "in_progress", label: "In Progress" },
      { value: "blocked", label: "Blocked" },
      { value: "done", label: "Done" }
    ], v = (d) => ({
      low: "pd-chip--info",
      medium: "pd-chip--brand",
      high: "pd-chip--warning",
      urgent: "pd-chip--danger"
    })[d] || "pd-chip--muted", c = (d) => ({
      open: "pd-chip--muted",
      in_progress: "pd-chip--brand",
      blocked: "pd-chip--danger",
      done: "pd-chip--success"
    })[d] || "pd-chip--muted";
    return (d, t) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", m, [
      window.__plotdesk_shared.vue.createElementVNode("header", E, [
        t[6] || (t[6] = window.__plotdesk_shared.vue.createElementVNode("div", null, [
          window.__plotdesk_shared.vue.createElementVNode("h1", { class: "tasks__title" }, "Example Tasks"),
          window.__plotdesk_shared.vue.createElementVNode("p", { class: "tasks__subtitle" }, "Manage tasks managed by the plotdesk example plugin.")
        ], -1)),
        window.__plotdesk_shared.vue.createElementVNode("button", {
          type: "button",
          class: "pd-btn pd-btn--primary",
          onClick: t[0] || (t[0] = (e) => s.value = !s.value)
        }, window.__plotdesk_shared.vue.toDisplayString(s.value ? "Cancel" : "New Task"), 1)
      ]),
      s.value ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("form", {
        key: 0,
        class: "pd-card pd-form",
        onSubmit: window.__plotdesk_shared.vue.withModifiers(r, ["prevent"])
      }, [
        window.__plotdesk_shared.vue.createElementVNode("div", V, [
          window.__plotdesk_shared.vue.createElementVNode("label", b, [
            t[7] || (t[7] = window.__plotdesk_shared.vue.createElementVNode("span", null, "Title", -1)),
            window.__plotdesk_shared.vue.withDirectives(window.__plotdesk_shared.vue.createElementVNode("input", {
              "onUpdate:modelValue": t[1] || (t[1] = (e) => o.value.title = e),
              type: "text",
              required: "",
              class: "pd-input",
              placeholder: "What needs to be done?"
            }, null, 512), [
              [window.__plotdesk_shared.vue.vModelText, o.value.title]
            ])
          ])
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", N, [
          window.__plotdesk_shared.vue.createElementVNode("label", y, [
            t[8] || (t[8] = window.__plotdesk_shared.vue.createElementVNode("span", null, "Description", -1)),
            window.__plotdesk_shared.vue.withDirectives(window.__plotdesk_shared.vue.createElementVNode("textarea", {
              "onUpdate:modelValue": t[2] || (t[2] = (e) => o.value.description = e),
              class: "pd-input",
              rows: "2",
              placeholder: "Optional details..."
            }, null, 512), [
              [window.__plotdesk_shared.vue.vModelText, o.value.description]
            ])
          ])
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", g, [
          window.__plotdesk_shared.vue.createElementVNode("label", f, [
            t[9] || (t[9] = window.__plotdesk_shared.vue.createElementVNode("span", null, "Priority", -1)),
            window.__plotdesk_shared.vue.withDirectives(window.__plotdesk_shared.vue.createElementVNode("select", {
              "onUpdate:modelValue": t[3] || (t[3] = (e) => o.value.priority = e),
              class: "pd-input"
            }, [
              (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(u, (e) => window.__plotdesk_shared.vue.createElementVNode("option", {
                key: e.value,
                value: e.value
              }, window.__plotdesk_shared.vue.toDisplayString(e.label), 9, S)), 64))
            ], 512), [
              [window.__plotdesk_shared.vue.vModelSelect, o.value.priority]
            ])
          ]),
          window.__plotdesk_shared.vue.createElementVNode("label", D, [
            t[10] || (t[10] = window.__plotdesk_shared.vue.createElementVNode("span", null, "Status", -1)),
            window.__plotdesk_shared.vue.withDirectives(window.__plotdesk_shared.vue.createElementVNode("select", {
              "onUpdate:modelValue": t[4] || (t[4] = (e) => o.value.status = e),
              class: "pd-input"
            }, [
              (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(w, (e) => window.__plotdesk_shared.vue.createElementVNode("option", {
                key: e.value,
                value: e.value
              }, window.__plotdesk_shared.vue.toDisplayString(e.label), 9, B)), 64))
            ], 512), [
              [window.__plotdesk_shared.vue.vModelSelect, o.value.status]
            ])
          ]),
          window.__plotdesk_shared.vue.createElementVNode("label", x, [
            t[11] || (t[11] = window.__plotdesk_shared.vue.createElementVNode("span", null, "Due Date", -1)),
            window.__plotdesk_shared.vue.withDirectives(window.__plotdesk_shared.vue.createElementVNode("input", {
              "onUpdate:modelValue": t[5] || (t[5] = (e) => o.value.due_date = e),
              type: "date",
              class: "pd-input"
            }, null, 512), [
              [window.__plotdesk_shared.vue.vModelText, o.value.due_date]
            ])
          ])
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", C, [
          window.__plotdesk_shared.vue.createElementVNode("button", {
            type: "submit",
            class: "pd-btn pd-btn--primary",
            disabled: l.value
          }, window.__plotdesk_shared.vue.toDisplayString(l.value ? "Saving..." : "Create Task"), 9, T)
        ])
      ], 32)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
      window.__plotdesk_shared.vue.createElementVNode("section", M, [
        _.value.length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", O, "No tasks yet. Create one to get started.")) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("table", U, [
          t[12] || (t[12] = window.__plotdesk_shared.vue.createElementVNode("thead", null, [
            window.__plotdesk_shared.vue.createElementVNode("tr", null, [
              window.__plotdesk_shared.vue.createElementVNode("th"),
              window.__plotdesk_shared.vue.createElementVNode("th", null, "Title"),
              window.__plotdesk_shared.vue.createElementVNode("th", null, "Priority"),
              window.__plotdesk_shared.vue.createElementVNode("th", null, "Status"),
              window.__plotdesk_shared.vue.createElementVNode("th", null, "Due"),
              window.__plotdesk_shared.vue.createElementVNode("th")
            ])
          ], -1)),
          window.__plotdesk_shared.vue.createElementVNode("tbody", null, [
            (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(_.value, (e) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("tr", {
              key: e.id
            }, [
              window.__plotdesk_shared.vue.createElementVNode("td", null, [
                window.__plotdesk_shared.vue.createElementVNode("input", {
                  type: "checkbox",
                  checked: e.status === "done",
                  onChange: (k) => i(e)
                }, null, 40, F)
              ]),
              window.__plotdesk_shared.vue.createElementVNode("td", null, [
                window.__plotdesk_shared.vue.createElementVNode("div", L, window.__plotdesk_shared.vue.toDisplayString(e.title), 1),
                e.description ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", $, window.__plotdesk_shared.vue.toDisplayString(e.description), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
              ]),
              window.__plotdesk_shared.vue.createElementVNode("td", null, [
                window.__plotdesk_shared.vue.createElementVNode("span", {
                  class: window.__plotdesk_shared.vue.normalizeClass(["pd-chip", v(e.priority)])
                }, window.__plotdesk_shared.vue.toDisplayString(e.priority), 3)
              ]),
              window.__plotdesk_shared.vue.createElementVNode("td", null, [
                window.__plotdesk_shared.vue.createElementVNode("span", {
                  class: window.__plotdesk_shared.vue.normalizeClass(["pd-chip", c(e.status)])
                }, window.__plotdesk_shared.vue.toDisplayString(e.status), 3)
              ]),
              window.__plotdesk_shared.vue.createElementVNode("td", null, window.__plotdesk_shared.vue.toDisplayString(e.due_date || "—"), 1),
              window.__plotdesk_shared.vue.createElementVNode("td", null, [
                window.__plotdesk_shared.vue.createElementVNode("button", {
                  type: "button",
                  class: "pd-btn pd-btn--ghost pd-btn--danger",
                  onClick: (k) => p(e)
                }, "Delete", 8, P)
              ])
            ]))), 128))
          ])
        ]))
      ])
    ]));
  }
}, I = /* @__PURE__ */ h(j, [["__scopeId", "data-v-e70f5a44"]]);
export {
  I as default
};
