import { _ as m } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const b = { class: "notebook" }, y = { class: "notebook__sidebar" }, E = { class: "notebook__sidebar-header" }, B = {
  key: 0,
  class: "notebook__new"
}, N = { class: "notebook__list" }, V = ["onClick"], g = { class: "notebook__list-title" }, f = { class: "notebook__list-meta" }, x = {
  key: 0,
  class: "pd-chip pd-chip--success"
}, S = {
  key: 1,
  class: "notebook__empty"
}, C = { class: "notebook__main" }, D = {
  key: 0,
  class: "notebook__placeholder"
}, T = {
  key: 1,
  class: "notebook__detail"
}, M = { class: "notebook__detail-header" }, U = {
  key: 0,
  class: "notebook__detail-title"
}, I = { class: "notebook__detail-actions" }, $ = {
  key: 0,
  class: "notebook__summary"
}, j = { class: "notebook__content" }, F = {
  key: 0,
  class: "notebook__text"
}, L = {
  __name: "Notes",
  props: {
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) }
  },
  setup(p) {
    var u;
    const w = p, a = window.__plotdesk_shared.vue.computed(() => {
      var s, e;
      return ((e = (s = w.payload) == null ? void 0 : s.data) == null ? void 0 : e.notes) || [];
    }), i = window.__plotdesk_shared.vue.ref(((u = a.value[0]) == null ? void 0 : u.id) || null), o = window.__plotdesk_shared.vue.computed(() => a.value.find((s) => s.id === i.value) || null), _ = window.__plotdesk_shared.vue.ref(!1), d = window.__plotdesk_shared.vue.ref({ title: "", content: "", tags: "" }), l = window.__plotdesk_shared.vue.ref(!1), n = window.__plotdesk_shared.vue.ref({ title: "", content: "" }), c = () => {
      d.value.title.trim() && window.__plotdesk_shared.inertia.router.post(route("plugin.plotdesk-example-plugin.notes.store"), {
        title: d.value.title,
        content: d.value.content,
        tags: d.value.tags.split(",").map((s) => s.trim()).filter(Boolean)
      }, {
        preserveScroll: !0,
        onSuccess: () => {
          d.value = { title: "", content: "", tags: "" }, _.value = !1;
        }
      });
    }, k = () => {
      o.value && (l.value = !0, n.value = { title: o.value.title, content: o.value.content });
    }, v = () => {
      o.value && window.__plotdesk_shared.inertia.router.put(route("plugin.plotdesk-example-plugin.notes.update", { note: o.value.id }), n.value, {
        preserveScroll: !0,
        onSuccess: () => {
          l.value = !1;
        }
      });
    }, h = () => {
      o.value && confirm(`Delete note "${o.value.title}"?`) && window.__plotdesk_shared.inertia.router.delete(route("plugin.plotdesk-example-plugin.notes.destroy", { note: o.value.id }), {
        preserveScroll: !0,
        onSuccess: () => {
          i.value = null;
        }
      });
    };
    return (s, e) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", b, [
      window.__plotdesk_shared.vue.createElementVNode("aside", y, [
        window.__plotdesk_shared.vue.createElementVNode("div", E, [
          e[6] || (e[6] = window.__plotdesk_shared.vue.createElementVNode("h2", { class: "notebook__title" }, "Notes", -1)),
          window.__plotdesk_shared.vue.createElementVNode("button", {
            type: "button",
            class: "pd-btn pd-btn--primary",
            onClick: e[0] || (e[0] = (t) => _.value = !_.value)
          }, window.__plotdesk_shared.vue.toDisplayString(_.value ? "Cancel" : "+ New"), 1)
        ]),
        _.value ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", B, [
          window.__plotdesk_shared.vue.withDirectives(window.__plotdesk_shared.vue.createElementVNode("input", {
            "onUpdate:modelValue": e[1] || (e[1] = (t) => d.value.title = t),
            type: "text",
            placeholder: "Title",
            class: "pd-input"
          }, null, 512), [
            [window.__plotdesk_shared.vue.vModelText, d.value.title]
          ]),
          window.__plotdesk_shared.vue.withDirectives(window.__plotdesk_shared.vue.createElementVNode("textarea", {
            "onUpdate:modelValue": e[2] || (e[2] = (t) => d.value.content = t),
            placeholder: "Write your note...",
            rows: "3",
            class: "pd-input"
          }, null, 512), [
            [window.__plotdesk_shared.vue.vModelText, d.value.content]
          ]),
          window.__plotdesk_shared.vue.withDirectives(window.__plotdesk_shared.vue.createElementVNode("input", {
            "onUpdate:modelValue": e[3] || (e[3] = (t) => d.value.tags = t),
            type: "text",
            placeholder: "tags, comma, separated",
            class: "pd-input"
          }, null, 512), [
            [window.__plotdesk_shared.vue.vModelText, d.value.tags]
          ]),
          window.__plotdesk_shared.vue.createElementVNode("button", {
            type: "button",
            class: "pd-btn pd-btn--primary",
            onClick: c
          }, "Create")
        ])) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
        window.__plotdesk_shared.vue.createElementVNode("ul", N, [
          (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(a.value, (t) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("li", {
            key: t.id,
            class: window.__plotdesk_shared.vue.normalizeClass(["notebook__list-item", { "notebook__list-item--active": i.value === t.id }]),
            onClick: (r) => {
              i.value = t.id, l.value = !1;
            }
          }, [
            window.__plotdesk_shared.vue.createElementVNode("div", g, window.__plotdesk_shared.vue.toDisplayString(t.title), 1),
            window.__plotdesk_shared.vue.createElementVNode("div", f, [
              t.summary ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", x, "summary")) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
              (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(t.tags, (r) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", {
                key: r,
                class: "pd-chip pd-chip--muted"
              }, window.__plotdesk_shared.vue.toDisplayString(r), 1))), 128))
            ])
          ], 10, V))), 128))
        ]),
        a.value.length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", S, "No notes yet.")) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
      ]),
      window.__plotdesk_shared.vue.createElementVNode("main", C, [
        o.value ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", T, [
          window.__plotdesk_shared.vue.createElementVNode("div", M, [
            l.value ? window.__plotdesk_shared.vue.withDirectives((window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("input", {
              key: 1,
              "onUpdate:modelValue": e[4] || (e[4] = (t) => n.value.title = t),
              type: "text",
              class: "pd-input pd-input--lg"
            }, null, 512)), [
              [window.__plotdesk_shared.vue.vModelText, n.value.title]
            ]) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("h1", U, window.__plotdesk_shared.vue.toDisplayString(o.value.title), 1)),
            window.__plotdesk_shared.vue.createElementVNode("div", I, [
              l.value ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("button", {
                key: 1,
                type: "button",
                class: "pd-btn pd-btn--primary",
                onClick: v
              }, "Save")) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("button", {
                key: 0,
                type: "button",
                class: "pd-btn pd-btn--secondary",
                onClick: k
              }, "Edit")),
              window.__plotdesk_shared.vue.createElementVNode("button", {
                type: "button",
                class: "pd-btn pd-btn--ghost pd-btn--danger",
                onClick: h
              }, "Delete")
            ])
          ]),
          o.value.summary ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", $, [
            e[7] || (e[7] = window.__plotdesk_shared.vue.createElementVNode("h3", null, "AI Summary", -1)),
            window.__plotdesk_shared.vue.createElementVNode("p", null, window.__plotdesk_shared.vue.toDisplayString(o.value.summary), 1)
          ])) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
          window.__plotdesk_shared.vue.createElementVNode("div", j, [
            l.value ? window.__plotdesk_shared.vue.withDirectives((window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("textarea", {
              key: 1,
              "onUpdate:modelValue": e[5] || (e[5] = (t) => n.value.content = t),
              rows: "14",
              class: "pd-input notebook__editor"
            }, null, 512)), [
              [window.__plotdesk_shared.vue.vModelText, n.value.content]
            ]) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("pre", F, window.__plotdesk_shared.vue.toDisplayString(o.value.content), 1))
          ])
        ])) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", D, " Select a note to view or edit. "))
      ])
    ]));
  }
}, z = /* @__PURE__ */ m(L, [["__scopeId", "data-v-d133a010"]]);
export {
  z as default
};
