import { ref as h, reactive as V, onMounted as $, computed as m, onUpdated as b, nextTick as H, openBlock as D, createElementBlock as v, createElementVNode as S, normalizeStyle as _, Fragment as R, renderList as F, renderSlot as U } from "vue";
import "./style/index.css";
const q = ["data-index"], K = {
  __name: "VisualScrollList",
  props: {
    //所有列表数据
    listData: {
      type: Array,
      default: () => []
    },
    //预估高度
    estimatedItemSize: {
      type: Number,
      default: 100
    },
    //缓冲数据的条数
    cacheCount: {
      type: Number,
      default: 5
    }
  },
  setup(L) {
    const c = L;
    h(null);
    const d = h(null), x = h(null);
    h(null);
    let g = !1, I = 0, y = !0;
    const a = V({
      screenHeight: 0,
      //可视区域高度
      start: 0,
      // 起始索引  默认:0  当前视口第一个数据在allData数组的索引位置
      allData: [],
      // 全部数据
      startOffset: 0,
      // 内容容器的y轴偏移量。当渲染区域第一个元素完全移到了可视区域之外时，重新计算startOffset，将第一个元素移回可视区域
      pillarDomHeight: 0,
      // 用于撑开滚动容器的高度,allData最后一个元素的endPos值
      contentListOffset: 0
      //内容容器的y轴偏移量。当渲染区域第一个元素完全移到了可视区域之外时，需要重新计算contentListOffset，将第一个元素移动回可视区
    });
    let l = [];
    const O = () => {
      c.listData.forEach((n, t) => {
        a.allData.push({
          // 数据
          ...n,
          // 当前数据处在allData数组的索引位置
          arrPos: t
        }), l.push({
          // 当前数据处在allData数组的索引位置
          arrPos: t,
          // 当前数据dom的top位置
          startPos: t * c.estimatedItemSize,
          // 当前数据dom的bottom位置
          endPos: (t + 1) * c.estimatedItemSize,
          // 当前数据dom的高度(初始值为猜测高度【预估高度】)
          height: c.estimatedItemSize
        });
      });
    };
    $(() => {
      O();
    });
    const T = m(() => d.value ? d.value.offsetHeight : 0), C = m(() => {
      if (!a.allData || a.allData.length <= 0)
        return 0;
      const n = l;
      let t = a.start, e = n[t].height;
      const s = T.value;
      for (; e < s; )
        t++, e += n[t].height;
      return t += 1, t + 1;
    }), k = m(() => `transform:translate(0,${a.contentListOffset}px)`), M = m(() => {
      const n = c.cacheCount, t = Math.max(0, a.start - n), e = Math.min(C.value + n, a.allData.length);
      return console.log(C.value, n, t, e), a.allData.slice(t, e);
    }), z = (n) => {
      if (g)
        return;
      const t = n.target;
      if (!t)
        return;
      const { scrollTop: e } = t;
      y = e - I >= 0, I = e, a.start = B(l, e), a.startOffset = l[a.start].endPos - e;
      const s = c.cacheCount, o = Math.max(0, a.start - s);
      a.contentListOffset = l[o].startPos;
    };
    function B(n, t) {
      let e = 0, s = n.length - 1, o;
      for (; e <= s; ) {
        const r = Math.trunc((e + s) / 2), i = n[r].endPos;
        if (i === t)
          return r + 1;
        i < t ? e = r + 1 : i > t && ((o === void 0 || o > r) && (o = r), s = r - 1);
      }
      return o;
    }
    const w = () => {
      const n = d.value;
      if (n && a.startOffset > 0 && !y) {
        const t = l[a.start].endPos - a.startOffset;
        g = !0, H(() => {
          n.scrollTo({ top: t }), g = !1;
        });
      }
    }, A = () => {
      const n = x.value;
      if (!n)
        return;
      const t = n.children, e = l;
      for (let s = 0; s < t.length; s++) {
        const o = t[s], r = o.dataset.index;
        if (!r)
          continue;
        const p = parseInt(r), i = e[p];
        if (!i)
          continue;
        const { height: j } = o.getBoundingClientRect(), E = i.height, P = E - j;
        if (P != 0) {
          i.height = E - P, i.endPos = i.endPos - P;
          for (let u = p + 1; u < e.length; u++) {
            const f = e[u], N = e[u - 1];
            f.startPos = N.endPos, f.endPos = f.startPos + f.height;
          }
        }
      }
      a.pillarDomHeight = l.length > 0 ? l[l.length - 1].endPos : 0, w();
    };
    return b(() => {
      H(() => {
        A();
      });
    }), (n, t) => (D(), v("div", null, [
      S("div", {
        ref_key: "listContainer",
        ref: d,
        class: "ea-list-container",
        onScroll: z
      }, [
        S("div", {
          class: "ea-pillarDom",
          style: _({ height: `${a.pillarDomHeight}px` })
        }, null, 4),
        S("div", {
          ref_key: "listContent",
          ref: x,
          class: "ea-list-content",
          style: _(k.value)
        }, [
          (D(!0), v(R, null, F(M.value, (e) => (D(), v("div", {
            key: e.id,
            "data-index": e.arrPos,
            class: "ea-list-item"
          }, [
            U(n.$slots, "default", { record: e })
          ], 8, q))), 128))
        ], 4)
      ], 544)
    ]));
  }
};
export {
  K as default
};
