import { u as g } from "../chunks/translator-CzLc3Cda.js";
import { _ as f } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const b = { class: "kanban" }, B = { class: "kanban__header" }, E = ["disabled"], N = {
  key: 0,
  class: "kanban__error"
}, S = { class: "kanban__board" }, V = { class: "kanban__count" }, D = {
  key: 0,
  class: "kanban__empty"
}, C = {
  key: 1,
  class: "kanban__cards"
}, j = { key: 0 }, x = { class: "kanban__card-meta" }, O = { class: "pd-chip pd-chip--muted" }, L = {
  key: 0,
  class: "kanban__due"
}, T = { class: "kanban__card-actions" }, F = ["value", "onChange"], A = ["value"], K = {
  __name: "Kanban",
  props: {
    group: { type: Object, default: () => ({}) },
    chat: { type: Object, default: () => ({}) },
    interfaceSettings: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) },
    payload: { type: Object, default: () => ({}) }
  },
  setup(k) {
    const c = k, t = g(window.__plotdesk_shared.vue.computed(() => c.translations)), w = window.__plotdesk_shared.vue.ref([]), l = window.__plotdesk_shared.vue.ref(!0), n = window.__plotdesk_shared.vue.ref(null), r = window.__plotdesk_shared.vue.computed(() => {
      var e;
      return ((e = c.interfaceSettings) == null ? void 0 : e.group_by) === "priority" ? "priority" : "status";
    }), i = async () => {
      l.value = !0, n.value = null;
      try {
        const e = await fetch(route("api.plugin.plotdesk-example-plugin.tasks.index"), {
          credentials: "same-origin",
          headers: { Accept: "application/json" }
        });
        if (!e.ok)
          throw new Error(`Request failed (${e.status})`);
        const d = await e.json();
        w.value = Array.isArray(d == null ? void 0 : d.data) ? d.data : [];
      } catch (e) {
        n.value = (e == null ? void 0 : e.message) || t("Failed to load tasks.");
      } finally {
        l.value = !1;
      }
    };
    window.__plotdesk_shared.vue.onMounted(i);
    const h = window.__plotdesk_shared.vue.computed(() => [
      { id: "open", title: t("Open"), accent: "var(--pd-text-secondary)" },
      { id: "in_progress", title: t("In Progress"), accent: "var(--pd-brand)" },
      { id: "blocked", title: t("Blocked"), accent: "var(--pd-danger)" },
      { id: "done", title: t("Done"), accent: "var(--pd-success)" }
    ]), v = window.__plotdesk_shared.vue.computed(() => [
      { id: "urgent", title: t("Urgent"), accent: "var(--pd-danger)" },
      { id: "high", title: t("High"), accent: "var(--pd-warning)" },
      { id: "medium", title: t("Medium"), accent: "var(--pd-brand)" },
      { id: "low", title: t("Low"), accent: "var(--pd-info)" }
    ]), u = window.__plotdesk_shared.vue.computed(() => r.value === "priority" ? v.value : h.value), p = window.__plotdesk_shared.vue.computed(() => {
      const e = {};
      for (const d of u.value)
        e[d.id] = w.value.filter((o) => o[r.value] === d.id);
      return e;
    }), m = (e) => t({ low: "Low", medium: "Medium", high: "High", urgent: "Urgent" }[e] || e), y = async (e, d) => {
      var o;
      try {
        if (!(await fetch(route("api.plugin.plotdesk-example-plugin.tasks.update", { task: e.id }), {
          method: "PUT",
          credentials: "same-origin",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": ((o = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : o.content) || ""
          },
          body: JSON.stringify({ [r.value]: d })
        })).ok)
          return;
        await i();
      } catch (a) {
        n.value = (a == null ? void 0 : a.message) || t("Update failed");
      }
    };
    return (e, d) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", b, [
      window.__plotdesk_shared.vue.createElementVNode("header", B, [
        window.__plotdesk_shared.vue.createElementVNode("h2", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(t)("Example Kanban")), 1),
        window.__plotdesk_shared.vue.createElementVNode("button", {
          type: "button",
          class: "pd-btn pd-btn--secondary",
          disabled: l.value,
          onClick: i
        }, window.__plotdesk_shared.vue.toDisplayString(l.value ? window.__plotdesk_shared.vue.unref(t)("Loading...") : window.__plotdesk_shared.vue.unref(t)("Refresh")), 9, E)
      ]),
      n.value ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", N, window.__plotdesk_shared.vue.toDisplayString(n.value), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
      window.__plotdesk_shared.vue.createElementVNode("div", S, [
        (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(u.value, (o) => {
          var a;
          return window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("section", {
            key: o.id,
            class: "kanban__column"
          }, [
            window.__plotdesk_shared.vue.createElementVNode("header", {
              class: "kanban__column-header",
              style: window.__plotdesk_shared.vue.normalizeStyle({ borderColor: o.accent })
            }, [
              window.__plotdesk_shared.vue.createElementVNode("span", null, window.__plotdesk_shared.vue.toDisplayString(o.title), 1),
              window.__plotdesk_shared.vue.createElementVNode("span", V, window.__plotdesk_shared.vue.toDisplayString(((a = p.value[o.id]) == null ? void 0 : a.length) || 0), 1)
            ], 4),
            (p.value[o.id] || []).length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", D, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(t)("No tasks")), 1)) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", C, [
              (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(p.value[o.id], (s) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("article", {
                key: s.id,
                class: "kanban__card"
              }, [
                window.__plotdesk_shared.vue.createElementVNode("h4", null, window.__plotdesk_shared.vue.toDisplayString(s.title), 1),
                s.description ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("p", j, window.__plotdesk_shared.vue.toDisplayString(s.description), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
                window.__plotdesk_shared.vue.createElementVNode("div", x, [
                  window.__plotdesk_shared.vue.createElementVNode("span", O, window.__plotdesk_shared.vue.toDisplayString(m(s.priority)), 1),
                  s.due_date ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", L, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(t)("Due {date}", { date: s.due_date })), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
                ]),
                window.__plotdesk_shared.vue.createElementVNode("div", T, [
                  window.__plotdesk_shared.vue.createElementVNode("select", {
                    class: "pd-input pd-input--sm",
                    value: s[r.value],
                    onChange: (_) => y(s, _.target.value)
                  }, [
                    (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(u.value, (_) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("option", {
                      key: _.id,
                      value: _.id
                    }, window.__plotdesk_shared.vue.toDisplayString(_.title), 9, A))), 128))
                  ], 40, F)
                ])
              ]))), 128))
            ]))
          ]);
        }), 128))
      ])
    ]));
  }
}, R = /* @__PURE__ */ f(K, [["__scopeId", "data-v-35f92d87"]]);
export {
  R as default
};
