function j(e) {
  return function(o, u = {}) {
    const c = (e == null ? void 0 : e.value) ?? e ?? {};
    let t = (c == null ? void 0 : c[o]) ?? o;
    if (u && typeof u == "object")
      for (const [v, f] of Object.entries(u))
        t = t.split(`{${v}}`).join(String(f));
    return t;
  };
}
function n(e) {
  const d = window.__plotdesk_shared.vue.computed(() => (e == null ? void 0 : e.value) ?? e ?? {});
  return j(d);
}
export {
  n as u
};
