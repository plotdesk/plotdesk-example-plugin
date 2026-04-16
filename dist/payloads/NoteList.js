import { _ as a } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const i = { class: "note-list" }, r = { class: "note-list__header" }, p = { class: "note-list__count" }, w = {
  key: 0,
  class: "note-list__empty"
}, c = {
  key: 1,
  class: "note-list__items"
}, u = { class: "note-list__title" }, k = { class: "note-list__id" }, h = {
  key: 0,
  class: "note-list__preview"
}, v = {
  key: 1,
  class: "note-list__tags"
}, m = {
  __name: "NoteList",
  props: {
    payload: { type: Object, default: () => ({}) }
  },
  setup(n) {
    const _ = n, s = window.__plotdesk_shared.vue.computed(() => {
      var o, e;
      return ((e = (o = _.payload) == null ? void 0 : o.results) == null ? void 0 : e.notes) || [];
    }), d = window.__plotdesk_shared.vue.computed(() => {
      var o, e;
      return ((e = (o = _.payload) == null ? void 0 : o.results) == null ? void 0 : e.count) || s.value.length;
    });
    return (o, e) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", i, [
      window.__plotdesk_shared.vue.createElementVNode("div", r, [
        e[0] || (e[0] = window.__plotdesk_shared.vue.createElementVNode("span", null, "Example Notes", -1)),
        window.__plotdesk_shared.vue.createElementVNode("span", p, window.__plotdesk_shared.vue.toDisplayString(d.value) + " " + window.__plotdesk_shared.vue.toDisplayString(d.value === 1 ? "note" : "notes"), 1)
      ]),
      s.value.length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", w, "No notes found.")) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("ul", c, [
        (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(s.value, (t) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("li", {
          key: t.id,
          class: "note-list__item"
        }, [
          window.__plotdesk_shared.vue.createElementVNode("div", u, [
            window.__plotdesk_shared.vue.createElementVNode("span", k, "#" + window.__plotdesk_shared.vue.toDisplayString(t.id), 1),
            window.__plotdesk_shared.vue.createTextVNode(" " + window.__plotdesk_shared.vue.toDisplayString(t.title), 1)
          ]),
          t.preview ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("p", h, window.__plotdesk_shared.vue.toDisplayString(t.preview), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
          (t.tags || []).length ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", v, [
            (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(t.tags, (l) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", {
              key: l,
              class: "pd-chip pd-chip--muted"
            }, window.__plotdesk_shared.vue.toDisplayString(l), 1))), 128))
          ])) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
        ]))), 128))
      ]))
    ]));
  }
}, y = /* @__PURE__ */ a(m, [["__scopeId", "data-v-30b5de1d"]]);
export {
  y as default
};
