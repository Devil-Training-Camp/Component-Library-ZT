import { defineComponent as e, computed as a, openBlock as s, createElementBlock as u, normalizeClass as l, renderSlot as p } from "vue";
import "./style/index.css";
const c = e({ name: "ea-button" }), d = /* @__PURE__ */ e({
  ...c,
  props: {
    type: {}
  },
  setup(o) {
    const t = o, n = a(() => ({ [`ea-button--${t.type}`]: t.type }));
    return (r, m) => (s(), u("button", {
      class: l(["ea-button", n.value])
    }, [
      p(r.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
