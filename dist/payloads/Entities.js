import { _ as r } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const p = { class: "entities" }, c = { class: "entities__header" }, w = { class: "entities__count" }, u = {
  key: 0,
  class: "entities__empty"
}, k = {
  key: 1,
  class: "entities__groups"
}, h = { class: "entities__group-label" }, v = { class: "entities__list" }, m = {
  key: 0,
  class: "entities__empty-inline"
}, y = {
  __name: "Entities",
  props: {
    payload: { type: Object, default: () => ({}) }
  },
  setup(l) {
    const n = l, i = window.__plotdesk_shared.vue.computed(() => {
      var t;
      return ((t = n.payload) == null ? void 0 : t.results) || {};
    }), d = window.__plotdesk_shared.vue.computed(() => i.value.entities || {}), a = window.__plotdesk_shared.vue.computed(() => [
      { id: "people", label: "People", style: "pd-chip--brand" },
      { id: "organizations", label: "Organizations", style: "pd-chip--info" },
      { id: "places", label: "Places", style: "pd-chip--warning" },
      { id: "dates", label: "Dates", style: "pd-chip--success" }
    ]), o = window.__plotdesk_shared.vue.computed(
      () => Object.values(d.value).reduce((t, s) => t + (Array.isArray(s) ? s.length : 0), 0)
    );
    return (t, s) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", p, [
      window.__plotdesk_shared.vue.createElementVNode("div", c, [
        s[0] || (s[0] = window.__plotdesk_shared.vue.createElementVNode("span", null, "Entities", -1)),
        window.__plotdesk_shared.vue.createElementVNode("span", w, window.__plotdesk_shared.vue.toDisplayString(o.value) + " found", 1)
      ]),
      o.value === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", u, "No entities detected.")) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", k, [
        (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(a.value, (e) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", {
          key: e.id,
          class: "entities__group"
        }, [
          window.__plotdesk_shared.vue.createElementVNode("div", h, window.__plotdesk_shared.vue.toDisplayString(e.label), 1),
          window.__plotdesk_shared.vue.createElementVNode("div", v, [
            (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(d.value[e.id] || [], (_) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", {
              key: `${e.id}-${_}`,
              class: window.__plotdesk_shared.vue.normalizeClass(["pd-chip", e.style])
            }, window.__plotdesk_shared.vue.toDisplayString(_), 3))), 128)),
            (d.value[e.id] || []).length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", m, "—")) : window.__plotdesk_shared.vue.createCommentVNode("", !0)
          ])
        ]))), 128))
      ]))
    ]));
  }
}, E = /* @__PURE__ */ r(y, [["__scopeId", "data-v-1dc42423"]]);
export {
  E as default
};
