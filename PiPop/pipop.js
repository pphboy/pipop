import { defineComponent as t, openBlock as s, createElementBlock as c, createElementVNode as p } from "vue";
const a = { style: { padding: "10px", border: "1px solid" } }, _ = /* @__PURE__ */ p("h1", null, "POP ABC", -1), l = [
  _
], e = /* @__PURE__ */ t({
  name: "Pop",
  __name: "Pop",
  setup(o) {
    return (n, i) => (s(), c("div", a, l));
  }
});
e.install = (o) => {
  o.component(e.name, e);
};
const r = [e], d = {
  install(o) {
    r.forEach((n) => o.component(n.name, n));
  }
};
export {
  e as PiPop,
  d as default
};
