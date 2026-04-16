import { _ as a } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const n = { class: "note-card" }, r = { class: "note-card__header" }, l = { class: "note-card__title" }, i = {
  key: 0,
  class: "note-card__id"
}, p = {
  key: 0,
  class: "note-card__tags"
}, w = {
  key: 0,
  class: "note-card__preview"
}, c = {
  __name: "NoteCard",
  props: {
    payload: { type: Object, default: () => ({}) }
  },
  setup(_) {
    const s = _, e = window.__plotdesk_shared.vue.computed(() => {
      var d, o;
      return ((o = (d = s.payload) == null ? void 0 : d.results) == null ? void 0 : o.note) || {};
    });
    return (d, o) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", n, [
      window.__plotdesk_shared.vue.createElementVNode("div", r, [
        o[0] || (o[0] = window.__plotdesk_shared.vue.createElementVNode("div", { class: "note-card__icon" }, [
          window.__plotdesk_shared.vue.createElementVNode("svg", {
            viewBox: "0 0 24 24",
            width: "18",
            height: "18",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            window.__plotdesk_shared.vue.createElementVNode("path", { d: "M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5" }),
            window.__plotdesk_shared.vue.createElementVNode("path", { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" })
          ])
        ], -1)),
        window.__plotdesk_shared.vue.createElementVNode("div", null, [
          window.__plotdesk_shared.vue.createElementVNode("div", l, [
            e.value.id ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", i, "#" + window.__plotdesk_shared.vue.toDisplayString(e.value.id), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0),
            window.__plotdesk_shared.vue.createTextVNode(" " + window.__plotdesk_shared.vue.toDisplayString(e.value.title), 1)
          ]),
          (e.value.tags || []).length ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", p, [
            (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(e.value.tags, (t) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", {
              key: t,
              class: "pd-chip pd-chip--muted"
            }, window.__plotdesk_shared.vue.toDisplayString(t), 1))), 128))
          ])) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
        ])
      ]),
      e.value.preview ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("p", w, window.__plotdesk_shared.vue.toDisplayString(e.value.preview), 1)) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
    ]));
  }
}, v = /* @__PURE__ */ a(c, [["__scopeId", "data-v-9663da30"]]);
export {
  v as default
};
