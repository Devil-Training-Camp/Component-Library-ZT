import * as o from "./src/index.mjs";
import { Button as i } from "./src/Button/index.mjs";
import { Icon as l } from "./src/Icon/index.mjs";
import { VisualScrollList as a } from "./src/VisualScrollList/index.mjs";
const e = {
  install: (t) => {
    for (const r in o)
      t.use(o[r]);
  }
};
export {
  i as Button,
  l as Icon,
  a as VisualScrollList,
  e as default
};
