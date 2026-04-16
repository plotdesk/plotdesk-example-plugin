import { u as y } from "../chunks/translator-CzLc3Cda.js";
import { _ as b } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const f = { class: "notebook" }, E = { class: "notebook__sidebar" }, g = { class: "notebook__sidebar-header" }, B = { class: "notebook__title" }, N = {
  key: 0,
  class: "notebook__new"
}, V = ["placeholder"], S = ["placeholder"], D = ["placeholder"], x = { class: "notebook__list" }, C = ["onClick"], T = { class: "notebook__list-title" }, M = { class: "notebook__list-meta" }, U = {
  key: 0,
  class: "pd-chip pd-chip--success"
}, I = {
  key: 1,
  class: "notebook__empty"
}, $ = { class: "notebook__main" }, j = {
  key: 0,
  class: "notebook__placeholder"
}, F = {
  key: 1,
  class: "notebook__detail"
}, L = { class: "notebook__detail-header" }, O = {
  key: 0,
  class: "notebook__detail-title"
}, z = { class: "notebook__detail-actions" }, A = {
  key: 0,
  class: "notebook__summary"
}, W = { class: "notebook__content" }, q = {
  key: 0,
  class: "notebook__text"
}, G = {
  __name: "Notes",
  props: {
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) }
  },
  setup(k) {
    var w;
    const p = k, t = y(window.__plotdesk_shared.vue.computed(() => p.translations)), i = window.__plotdesk_shared.vue.computed(() => {
      var _, o;
      return ((o = (_ = p.payload) == null ? void 0 : _.data) == null ? void 0 : o.notes) || [];
    }), r = window.__plotdesk_shared.vue.ref(((w = i.value[0]) == null ? void 0 : w.id) || null), d = window.__plotdesk_shared.vue.computed(() => i.value.find((_) => _.id === r.value) || null), a = window.__plotdesk_shared.vue.ref(!1), s = window.__plotdesk_shared.vue.ref({ title: "", content: "", tags: "" }), l = window.__plotdesk_shared.vue.ref(!1), n = window.__plotdesk_shared.vue.ref({ title: "", content: "" }), v = () => {
      s.value.title.trim() && window.__plotdesk_shared.inertia.router.post(route("plugin.plotdesk-example-plugin.notes.store"), {
        title: s.value.title,
        content: s.value.content,
        tags: s.value.tags.split(",").map((_) => _.trim()).filter(Boolean)
      }, {
        preserveScroll: !0,
        onSuccess: () => {
          s.value = { title: "", content: "", tags: "" }, a.value = !1;
        }
      });
    }, c = () => {
      d.value && (l.value = !0, n.value = { title: d.value.title, content: d.value.content });
    }, h = () => {
      d.value && window.__plotdesk_shared.inertia.router.put(route("plugin.plotdesk-example-plugin.notes.update", { note: d.value.id }), n.value, {
        preserveScroll: !0,
        onSuccess: () => {
          l.value = !1;
        }
      });
    }, m = () => {
      d.value && confirm(t('Delete note "{title}"?', { title: d.value.title })) && window.__plotdesk_shared.inertia.router.delete(route("plugin.plotdesk-example-plugin.notes.destroy", { note: d.value.id }), {
        preserveScroll: !0,
        onSuccess: () => {
          r.value = null;
        }
      });
    };
    return (_, o) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", f, [
      window.__plotdesk_shared.vue.createElementVNode("aside", E, [
        window.__plotdesk_shared.vue.createElementVNode("div", g, [
          window.__plotdesk_shared.vue.createElementVNode("h2", B, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(t)("Notes")), 1),
          window.__plotdesk_shared.vue.createElementVNode("button", {
            type: "button",
            class: "pd-btn pd-btn--primary",
            onClick: o[0] || (o[0] = (e) => a.value = !a.value)
          }, window.__plotdesk_shared.vue.toDisplayString(a.value ? window.__plotdesk_shared.vue.unref(t)("Cancel") : window.__plotdesk_shared.vue.unref(t)("+ New")), 1)
        ]),
        a.value ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", N, [
          window.__plotdesk_shared.vue.withDirectives(window.__plotdesk_shared.vue.createElementVNode("input", {
            "onUpdate:modelValue": o[1] || (o[1] = (e) => s.value.title = e),
            type: "text",
            placeholder: window.__plotdesk_shared.vue.unref(t)("Title"),
            class: "pd-input"
          }, null, 8, V), [
            [window.__plotdesk_shared.vue.vModelText, s.value.title]
          ]),
          window.__plotdesk_shared.vue.withDirectives(window.__plotdesk_shared.vue.createElementVNode("textarea", {
            "onUpdate:modelValue": o[2] || (o[2] = (e) => s.value.content = e),
            placeholder: window.__plotdesk_shared.vue.unref(t)("Write your note..."),
            rows: "3",
            class: "pd-input"
          }, null, 8, S), [
            [window.__plotdesk_shared.vue.vModelText, s.value.content]
          ]),
          window.__plotdesk_shared.vue.withDirectives(window.__plotdesk_shared.vue.createElementVNode("input", {
            "onUpdate:modelValue": o[3] || (o[3] = (e) => s.value.tags = e),
            type: "text",
            placeholder: window.__plotdesk_shared.vue.unref(t)("tags, comma, separated"),
            class: "pd-input"
          }, null, 8, D), [
            [window.__plotdesk_shared.vue.vModelText, s.value.tags]
          ]),
          window.__plotdesk_shared.vue.createElementVNode("button", {
            type: "button",
            class: "pd-btn pd-btn--primary",
            onClick: v
          }, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(t)("Create")), 1)
        ])) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
        window.__plotdesk_shared.vue.createElementVNode("ul", x, [
          (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(i.value, (e) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("li", {
            key: e.id,
            class: window.__plotdesk_shared.vue.normalizeClass(["notebook__list-item", { "notebook__list-item--active": r.value === e.id }]),
            onClick: (u) => {
              r.value = e.id, l.value = !1;
            }
          }, [
            window.__plotdesk_shared.vue.createElementVNode("div", T, window.__plotdesk_shared.vue.toDisplayString(e.title), 1),
            window.__plotdesk_shared.vue.createElementVNode("div", M, [
              e.summary ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", U, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(t)("summary")), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
              (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(e.tags, (u) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", {
                key: u,
                class: "pd-chip pd-chip--muted"
              }, window.__plotdesk_shared.vue.toDisplayString(u), 1))), 128))
            ])
          ], 10, C))), 128))
        ]),
        i.value.length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", I, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(t)("No notes yet.")), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
      ]),
      window.__plotdesk_shared.vue.createElementVNode("main", $, [
        d.value ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", F, [
          window.__plotdesk_shared.vue.createElementVNode("div", L, [
            l.value ? window.__plotdesk_shared.vue.withDirectives((window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("input", {
              key: 1,
              "onUpdate:modelValue": o[4] || (o[4] = (e) => n.value.title = e),
              type: "text",
              class: "pd-input pd-input--lg"
            }, null, 512)), [
              [window.__plotdesk_shared.vue.vModelText, n.value.title]
            ]) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("h1", O, window.__plotdesk_shared.vue.toDisplayString(d.value.title), 1)),
            window.__plotdesk_shared.vue.createElementVNode("div", z, [
              l.value ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("button", {
                key: 1,
                type: "button",
                class: "pd-btn pd-btn--primary",
                onClick: h
              }, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(t)("Save")), 1)) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("button", {
                key: 0,
                type: "button",
                class: "pd-btn pd-btn--secondary",
                onClick: c
              }, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(t)("Edit")), 1)),
              window.__plotdesk_shared.vue.createElementVNode("button", {
                type: "button",
                class: "pd-btn pd-btn--ghost pd-btn--danger",
                onClick: m
              }, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(t)("Delete")), 1)
            ])
          ]),
          d.value.summary ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", A, [
            window.__plotdesk_shared.vue.createElementVNode("h3", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(t)("AI Summary")), 1),
            window.__plotdesk_shared.vue.createElementVNode("p", null, window.__plotdesk_shared.vue.toDisplayString(d.value.summary), 1)
          ])) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
          window.__plotdesk_shared.vue.createElementVNode("div", W, [
            l.value ? window.__plotdesk_shared.vue.withDirectives((window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("textarea", {
              key: 1,
              "onUpdate:modelValue": o[5] || (o[5] = (e) => n.value.content = e),
              rows: "14",
              class: "pd-input notebook__editor"
            }, null, 512)), [
              [window.__plotdesk_shared.vue.vModelText, n.value.content]
            ]) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("pre", q, window.__plotdesk_shared.vue.toDisplayString(d.value.content), 1))
          ])
        ])) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", j, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(t)("Select a note to view or edit.")), 1))
      ])
    ]));
  }
}, K = /* @__PURE__ */ b(G, [["__scopeId", "data-v-e40eb8c5"]]);
export {
  K as default
};
