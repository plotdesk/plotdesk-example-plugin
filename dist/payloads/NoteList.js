import { u as i } from "../chunks/translator-CzLc3Cda.js";
import { _ as p } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const w = { class: "note-list" }, u = { class: "note-list__header" }, c = { class: "note-list__count" }, k = {
  key: 0,
  class: "note-list__empty"
}, h = {
  key: 1,
  class: "note-list__items"
}, v = { class: "note-list__title" }, m = { class: "note-list__id" }, y = {
  key: 0,
  class: "note-list__preview"
}, B = {
  key: 1,
  class: "note-list__tags"
}, E = {
  __name: "NoteList",
  props: {
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) }
  },
  setup(a) {
    const _ = a, s = i(window.__plotdesk_shared.vue.computed(() => _.translations)), d = window.__plotdesk_shared.vue.computed(() => {
      var t, o;
      return ((o = (t = _.payload) == null ? void 0 : t.results) == null ? void 0 : o.notes) || [];
    }), l = window.__plotdesk_shared.vue.computed(() => {
      var t, o;
      return ((o = (t = _.payload) == null ? void 0 : t.results) == null ? void 0 : o.count) || d.value.length;
    }), r = window.__plotdesk_shared.vue.computed(() => `${l.value} ${l.value === 1 ? s("note") : s("notes")}`);
    return (t, o) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", w, [
      window.__plotdesk_shared.vue.createElementVNode("div", u, [
        window.__plotdesk_shared.vue.createElementVNode("span", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("Example Notes")), 1),
        window.__plotdesk_shared.vue.createElementVNode("span", c, window.__plotdesk_shared.vue.toDisplayString(r.value), 1)
      ]),
      d.value.length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", k, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(s)("No notes found.")), 1)) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("ul", h, [
        (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(d.value, (e) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("li", {
          key: e.id,
          class: "note-list__item"
        }, [
          window.__plotdesk_shared.vue.createElementVNode("div", v, [
            window.__plotdesk_shared.vue.createElementVNode("span", m, "#" + window.__plotdesk_shared.vue.toDisplayString(e.id), 1),
            window.__plotdesk_shared.vue.createTextVNode(" " + window.__plotdesk_shared.vue.toDisplayString(e.title), 1)
          ]),
          e.preview ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("p", y, window.__plotdesk_shared.vue.toDisplayString(e.preview), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
          (e.tags || []).length ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", B, [
            (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(e.tags, (n) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", {
              key: n,
              class: "pd-chip pd-chip--muted"
            }, window.__plotdesk_shared.vue.toDisplayString(n), 1))), 128))
          ])) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
        ]))), 128))
      ]))
    ]));
  }
}, f = /* @__PURE__ */ p(E, [["__scopeId", "data-v-a54a677a"]]);
export {
  f as default
};
