import { u as r } from "../chunks/translator-CzLc3Cda.js";
import { _ as p } from "../chunks/_plugin-vue_export-helper-CHgC5LLL.js";
const w = { class: "entities" }, c = { class: "entities__header" }, u = {
  key: 0,
  class: "entities__empty"
}, k = {
  key: 1,
  class: "entities__groups"
}, h = { class: "entities__label" }, v = { class: "entities__chips" }, m = {
  __name: "Entities",
  props: {
    payload: { type: Object, default: () => ({}) },
    translations: { type: Object, default: () => ({}) }
  },
  setup(i) {
    const _ = i, o = r(window.__plotdesk_shared.vue.computed(() => _.translations)), l = window.__plotdesk_shared.vue.computed(() => {
      var e, t;
      return ((t = (e = _.payload) == null ? void 0 : e.results) == null ? void 0 : t.entities) || {};
    }), d = window.__plotdesk_shared.vue.computed(
      () => Object.entries(l.value).filter(([, e]) => Array.isArray(e) && e.length).map(([e, t]) => ({ key: e, values: t }))
    ), a = (e) => o(`entity.${e}`);
    return (e, t) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", w, [
      window.__plotdesk_shared.vue.createElementVNode("div", c, [
        window.__plotdesk_shared.vue.createElementVNode("span", null, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(o)("Entities")), 1)
      ]),
      d.value.length === 0 ? (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", u, window.__plotdesk_shared.vue.toDisplayString(window.__plotdesk_shared.vue.unref(o)("No entities found.")), 1)) : (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", k, [
        (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(d.value, (s) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("div", {
          key: s.key,
          class: "entities__group"
        }, [
          window.__plotdesk_shared.vue.createElementVNode("div", h, window.__plotdesk_shared.vue.toDisplayString(a(s.key)), 1),
          window.__plotdesk_shared.vue.createElementVNode("div", v, [
            (window.__plotdesk_shared.vue.openBlock(!0), window.__plotdesk_shared.vue.createElementBlock(window.__plotdesk_shared.vue.Fragment, null, window.__plotdesk_shared.vue.renderList(s.values, (n) => (window.__plotdesk_shared.vue.openBlock(), window.__plotdesk_shared.vue.createElementBlock("span", {
              key: `${s.key}-${n}`,
              class: "pd-chip pd-chip--info"
            }, window.__plotdesk_shared.vue.toDisplayString(n), 1))), 128))
          ])
        ]))), 128))
      ]))
    ]));
  }
}, E = /* @__PURE__ */ p(m, [["__scopeId", "data-v-6de6e500"]]);
export {
  E as default
};
