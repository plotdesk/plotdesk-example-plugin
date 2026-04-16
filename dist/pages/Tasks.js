import { u as y } from "../chunks/translator-CzLc3Cda.js";
import { _ as E } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const b = { class: "tasks" }, V = { class: "tasks__header" }, f = { class: "tasks__title" }, N = { class: "tasks__subtitle" }, D = { class: "pd-form__row" }, S = { class: "pd-form__label" }, B = ["placeholder"], x = { class: "pd-form__row" }, C = { class: "pd-form__label" }, T = ["placeholder"], M = { class: "pd-form__row pd-form__row--split" }, L = { class: "pd-form__label" }, O = ["value"], U = { class: "pd-form__label" }, F = ["value"], P = { class: "pd-form__label" }, $ = { class: "pd-form__actions" }, I = ["disabled"], j = { class: "pd-card" }, z = {
  key: 0,
  class: "pd-empty"
}, H = {
  key: 1,
  class: "pd-table"
}, q = ["checked", "onChange"], W = { class: "pd-table__title" }, A = {
  key: 0,
  class: "pd-table__subtitle"
}, G = ["onClick"], J = {
  __name: "Tasks",
  props: {
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) }
  },
  setup(r) {
    const n = r, d = y(window.__plotdesk_shared.vue.computed(() => n.translations)), a = window.__plotdesk_shared.vue.computed(() => {
      var o, t;
      return ((t = (o = n.payload) == null ? void 0 : o.data) == null ? void 0 : t.tasks) || [];
    }), l = window.__plotdesk_shared.vue.ref(!1), s = window.__plotdesk_shared.vue.ref({
      title: "",
      description: "",
      priority: "medium",
      status: "open",
      due_date: ""
    }), _ = window.__plotdesk_shared.vue.ref(!1), i = () => {
      _.value || (_.value = !0, window.__plotdesk_shared.inertia.router.post(route("plugin.plotdesk-example-plugin.tasks.store"), s.value, {
        preserveScroll: !0,
        onFinish: () => {
          _.value = !1, l.value = !1, s.value = { title: "", description: "", priority: "medium", status: "open", due_date: "" };
        }
      }));
    }, p = (o) => {
      window.__plotdesk_shared.inertia.router.put(
        route("plugin.plotdesk-example-plugin.tasks.update", { task: o.id }),
        { status: o.status === "done" ? "open" : "done" },
        { preserveScroll: !0 }
      );
    }, u = (o) => {
      confirm(d('Delete task "{title}"?', { title: o.title })) && window.__plotdesk_shared.inertia.router.delete(route("plugin.plotdesk-example-plugin.tasks.destroy", { task: o.id }), { preserveScroll: !0 });
    }, w = window.__plotdesk_shared.vue.computed(() => [
      { value: "low", label: d("Low") },
      { value: "medium", label: d("Medium") },
      { value: "high", label: d("High") },
      { value: "urgent", label: d("Urgent") }
    ]), v = window.__plotdesk_shared.vue.computed(() => [
      { value: "open", label: d("Open") },
      { value: "in_progress", label: d("In Progress") },
      { value: "blocked", label: d("Blocked") },
      { value: "done", label: d("Done") }
    ]), h = (o) => ({
      low: "pd-chip--info",
      medium: "pd-chip--brand",
      high: "pd-chip--warning",
      urgent: "pd-chip--danger"
    })[o] || "pd-chip--muted", c = (o) => ({
      open: "pd-chip--muted",
      in_progress: "pd-chip--brand",
      blocked: "pd-chip--danger",
      done: "pd-chip--success"
    })[o] || "pd-chip--muted", k = (o) => d({ low: "Low", medium: "Medium", high: "High", urgent: "Urgent" }[o] || o), m = (o) => d({ open: "Open", in_progress: "In Progress", blocked: "Blocked", done: "Done" }[o] || o);
    return (o, t) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", b, [
      window.__plotdesk_shared.vue.createElementVNode("header", V, [
        window.__plotdesk_shared.vue.createElementVNode("div", null, [
          window.__plotdesk_shared.vue.createElementVNode("h1", f, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(d)("Example Tasks")), 1),
          window.__plotdesk_shared.vue.createElementVNode("p", N, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(d)("Manage tasks managed by the plotdesk example plugin.")), 1)
        ]),
        window.__plotdesk_shared.vue.createElementVNode("button", {
          type: "button",
          class: "pd-btn pd-btn--primary",
          onClick: t[0] || (t[0] = (e) => l.value = !l.value)
        }, window.__plotdesk_shared.vue.toDisplayString(l.value ? window.__plotdesk_shared.vue.unref(d)("Cancel") : window.__plotdesk_shared.vue.unref(d)("New Task")), 1)
      ]),
      l.value ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("form", {
        key: 0,
        class: "pd-card pd-form",
        onSubmit: window.__plotdesk_shared.vue.withModifiers(i, ["prevent"])
      }, [
        window.__plotdesk_shared.vue.createElementVNode("div", D, [
          window.__plotdesk_shared.vue.createElementVNode("label", S, [
            window.__plotdesk_shared.vue.createElementVNode("span", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(d)("Title")), 1),
            window.__plotdesk_shared.vue.withDirectives(window.__plotdesk_shared.vue.createElementVNode("input", {
              "onUpdate:modelValue": t[1] || (t[1] = (e) => s.value.title = e),
              type: "text",
              required: "",
              class: "pd-input",
              placeholder: window.__plotdesk_shared.vue.unref(d)("What needs to be done?")
            }, null, 8, B), [
              [window.__plotdesk_shared.vue.vModelText, s.value.title]
            ])
          ])
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", x, [
          window.__plotdesk_shared.vue.createElementVNode("label", C, [
            window.__plotdesk_shared.vue.createElementVNode("span", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(d)("Description")), 1),
            window.__plotdesk_shared.vue.withDirectives(window.__plotdesk_shared.vue.createElementVNode("textarea", {
              "onUpdate:modelValue": t[2] || (t[2] = (e) => s.value.description = e),
              class: "pd-input",
              rows: "2",
              placeholder: window.__plotdesk_shared.vue.unref(d)("Optional details...")
            }, null, 8, T), [
              [window.__plotdesk_shared.vue.vModelText, s.value.description]
            ])
          ])
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", M, [
          window.__plotdesk_shared.vue.createElementVNode("label", L, [
            window.__plotdesk_shared.vue.createElementVNode("span", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(d)("Priority")), 1),
            window.__plotdesk_shared.vue.withDirectives(window.__plotdesk_shared.vue.createElementVNode("select", {
              "onUpdate:modelValue": t[3] || (t[3] = (e) => s.value.priority = e),
              class: "pd-input"
            }, [
              (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(w.value, (e) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("option", {
                key: e.value,
                value: e.value
              }, window.__plotdesk_shared.vue.toDisplayString(e.label), 9, O))), 128))
            ], 512), [
              [window.__plotdesk_shared.vue.vModelSelect, s.value.priority]
            ])
          ]),
          window.__plotdesk_shared.vue.createElementVNode("label", U, [
            window.__plotdesk_shared.vue.createElementVNode("span", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(d)("Status")), 1),
            window.__plotdesk_shared.vue.withDirectives(window.__plotdesk_shared.vue.createElementVNode("select", {
              "onUpdate:modelValue": t[4] || (t[4] = (e) => s.value.status = e),
              class: "pd-input"
            }, [
              (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(v.value, (e) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("option", {
                key: e.value,
                value: e.value
              }, window.__plotdesk_shared.vue.toDisplayString(e.label), 9, F))), 128))
            ], 512), [
              [window.__plotdesk_shared.vue.vModelSelect, s.value.status]
            ])
          ]),
          window.__plotdesk_shared.vue.createElementVNode("label", P, [
            window.__plotdesk_shared.vue.createElementVNode("span", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(d)("Due Date")), 1),
            window.__plotdesk_shared.vue.withDirectives(window.__plotdesk_shared.vue.createElementVNode("input", {
              "onUpdate:modelValue": t[5] || (t[5] = (e) => s.value.due_date = e),
              type: "date",
              class: "pd-input"
            }, null, 512), [
              [window.__plotdesk_shared.vue.vModelText, s.value.due_date]
            ])
          ])
        ]),
        window.__plotdesk_shared.vue.createElementVNode("div", $, [
          window.__plotdesk_shared.vue.createElementVNode("button", {
            type: "submit",
            class: "pd-btn pd-btn--primary",
            disabled: _.value
          }, window.__plotdesk_shared.vue.toDisplayString(_.value ? window.__plotdesk_shared.vue.unref(d)("Saving...") : window.__plotdesk_shared.vue.unref(d)("Create Task")), 9, I)
        ])
      ], 32)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
      window.__plotdesk_shared.vue.createElementVNode("section", j, [
        a.value.length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", z, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(d)("No tasks yet. Create one to get started.")), 1)) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("table", H, [
          window.__plotdesk_shared.vue.createElementVNode("thead", null, [
            window.__plotdesk_shared.vue.createElementVNode("tr", null, [
              t[6] || (t[6] = window.__plotdesk_shared.vue.createElementVNode("th", null, null, -1)),
              window.__plotdesk_shared.vue.createElementVNode("th", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(d)("Title")), 1),
              window.__plotdesk_shared.vue.createElementVNode("th", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(d)("Priority")), 1),
              window.__plotdesk_shared.vue.createElementVNode("th", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(d)("Status")), 1),
              window.__plotdesk_shared.vue.createElementVNode("th", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(d)("Due Date")), 1),
              t[7] || (t[7] = window.__plotdesk_shared.vue.createElementVNode("th", null, null, -1))
            ])
          ]),
          window.__plotdesk_shared.vue.createElementVNode("tbody", null, [
            (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(a.value, (e) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("tr", {
              key: e.id
            }, [
              window.__plotdesk_shared.vue.createElementVNode("td", null, [
                window.__plotdesk_shared.vue.createElementVNode("input", {
                  type: "checkbox",
                  checked: e.status === "done",
                  onChange: (g) => p(e)
                }, null, 40, q)
              ]),
              window.__plotdesk_shared.vue.createElementVNode("td", null, [
                window.__plotdesk_shared.vue.createElementVNode("div", W, window.__plotdesk_shared.vue.toDisplayString(e.title), 1),
                e.description ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", A, window.__plotdesk_shared.vue.toDisplayString(e.description), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
              ]),
              window.__plotdesk_shared.vue.createElementVNode("td", null, [
                window.__plotdesk_shared.vue.createElementVNode("span", {
                  class: window.__plotdesk_shared.vue.normalizeClass(["pd-chip", h(e.priority)])
                }, window.__plotdesk_shared.vue.toDisplayString(k(e.priority)), 3)
              ]),
              window.__plotdesk_shared.vue.createElementVNode("td", null, [
                window.__plotdesk_shared.vue.createElementVNode("span", {
                  class: window.__plotdesk_shared.vue.normalizeClass(["pd-chip", c(e.status)])
                }, window.__plotdesk_shared.vue.toDisplayString(m(e.status)), 3)
              ]),
              window.__plotdesk_shared.vue.createElementVNode("td", null, window.__plotdesk_shared.vue.toDisplayString(e.due_date || "—"), 1),
              window.__plotdesk_shared.vue.createElementVNode("td", null, [
                window.__plotdesk_shared.vue.createElementVNode("button", {
                  type: "button",
                  class: "pd-btn pd-btn--ghost pd-btn--danger",
                  onClick: (g) => u(e)
                }, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(d)("Delete")), 9, G)
              ])
            ]))), 128))
          ])
        ]))
      ])
    ]));
  }
}, R = /* @__PURE__ */ E(J, [["__scopeId", "data-v-e506a397"]]);
export {
  R as default
};
