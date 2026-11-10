const Qo = () => Promise.resolve().then(() => Xo), ts = globalThis.__GLOBALS__.ReactJSXRuntime, { Fragment: as, jsx: t, jsxs: o } = ts;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
function ta(a) {
  const s = a?.props?._fgT, r = typeof s == "function" || typeof s == "string" || typeof s == "object" && s !== null && "$$typeof" in s;
  return globalThis.__GLOBALS__.React.isValidElement(a) && r;
}
function Ce(a) {
  return globalThis.__GLOBALS__.React.isValidElement(a) && a.type === "fg-txt";
}
function aa(a) {
  const { _fgT: s, _fgS: r, _fgB: n, _fgD: i, ...g } = a.props;
  return globalThis.__GLOBALS__.React.createElement(s, {
    ...g,
    key: a.key
  }, g.children);
}
function ze(a) {
  return ta(a) ? aa(a) : Ce(a) ? a.props.children : a;
}
const Se = globalThis.__GLOBALS__.React.Children, ie = {
  map(a, s, r) {
    return Se.map(a, (n, i) => {
      const g = ze(n);
      return Ce(n) ? null : s.call(r, g, i);
    });
  },
  forEach(a, s, r) {
    Se.forEach(a, (n, i) => {
      if (Ce(n))
        return;
      const g = ze(n);
      s.call(r, g, i);
    });
  },
  count(a) {
    let s = 0;
    return Se.forEach(a, (r) => {
      Ce(r) || s++;
    }), s;
  },
  toArray(a) {
    const s = [];
    return Se.forEach(a, (r) => {
      Ce(r) || s.push(ze(r));
    }), s;
  },
  only(a) {
    const s = Se.only(a);
    return ze(s);
  }
}, nt = [
  "_fgT",
  "_fgS",
  "_fgB",
  "_fgD"
];
function ss(a) {
  if (a == null || typeof a != "object") return a;
  const s = Object.keys(a);
  let r = !1;
  for (let i = 0; i < nt.length; i++)
    if (nt[i] in a) {
      r = !0;
      break;
    }
  if (!r) return a;
  const n = {};
  for (let i = 0; i < s.length; i++) {
    const g = s[i];
    nt.indexOf(g) === -1 && (n[g] = a[g]);
  }
  return n;
}
const Jt = globalThis.__GLOBALS__.React.cloneElement, Ae = (a, ...s) => {
  if (ta(a)) {
    const r = aa(a), n = s[0];
    return n != null && typeof n == "object" && (s = [
      ss(n),
      ...s.slice(1)
    ]), Jt(r, ...s);
  }
  return Jt(a, ...s);
}, E = {
  ...globalThis.__GLOBALS__.React,
  Children: ie,
  cloneElement: Ae
}, { Component: rs, createContext: We, createElement: Ze, createFactory: os, createRef: ns, forwardRef: L, Fragment: sa, isValidElement: ke, lazy: cs, memo: is, Profiler: gs, PureComponent: ds, startTransition: fs, StrictMode: ls, Suspense: ps, use: _s, useCallback: te, useContext: vt, useDebugValue: ms, useDeferredValue: us, useEffect: ge, useId: hs, useImperativeHandle: bs, useInsertionEffect: xs, useLayoutEffect: ra, useMemo: Ee, useReducer: oa, useRef: U, useState: pe, useSyncExternalStore: vs, useTransition: ws, version: Ss, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ys } = globalThis.__GLOBALS__.React, Ts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: ie,
  Component: rs,
  Fragment: sa,
  Profiler: gs,
  PureComponent: ds,
  StrictMode: ls,
  Suspense: ps,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ys,
  cloneElement: Ae,
  createContext: We,
  createElement: Ze,
  createFactory: os,
  createRef: ns,
  default: E,
  forwardRef: L,
  isValidElement: ke,
  lazy: cs,
  memo: is,
  startTransition: fs,
  use: _s,
  useCallback: te,
  useContext: vt,
  useDebugValue: ms,
  useDeferredValue: us,
  useEffect: ge,
  useId: hs,
  useImperativeHandle: bs,
  useInsertionEffect: xs,
  useLayoutEffect: ra,
  useMemo: Ee,
  useReducer: oa,
  useRef: U,
  useState: pe,
  useSyncExternalStore: vs,
  useTransition: ws,
  version: Ss
}, Symbol.toStringTag, { value: "Module" })), e = E.forwardRef(function({ _fgT: s, _fgS: r, _fgB: n, ...i }, g) {
  const d = g ? { ...i, ref: g } : i;
  return typeof window < "u" && window.__FGInspectorCmp ? E.createElement(window.__FGInspectorCmp, { _fgT: s, _fgS: r, _fgB: n, ...d }) : E.createElement(s, d);
});
function H(a, s, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(i) {
    if (a?.(i), r === !1 || !i.defaultPrevented)
      return s?.(i);
  };
}
function Fe(a, s = []) {
  let r = [];
  function n(g, d) {
    const l = We(d), f = r.length;
    r = [...r, d];
    const p = (b) => {
      const { scope: B, children: T, ...x } = b, S = B?.[a]?.[f] || l, N = Ee(() => x, Object.values(x));
      return /* @__PURE__ */ t(S.Provider, { value: N, children: T });
    };
    p.displayName = g + "Provider";
    function u(b, B) {
      const T = B?.[a]?.[f] || l, x = vt(T);
      if (x) return x;
      if (d !== void 0) return d;
      throw new Error(`\`${b}\` must be used within \`${g}\``);
    }
    return [p, u];
  }
  const i = () => {
    const g = r.map((d) => We(d));
    return function(l) {
      const f = l?.[a] || g;
      return Ee(
        () => ({ [`__scope${a}`]: { ...l, [a]: f } }),
        [l, f]
      );
    };
  };
  return i.scopeName = a, [n, Bs(i, ...s)];
}
function Bs(...a) {
  const s = a[0];
  if (a.length === 1) return s;
  const r = () => {
    const n = a.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(g) {
      const d = n.reduce((l, { useScope: f, scopeName: p }) => {
        const b = f(g)[`__scope${p}`];
        return { ...l, ...b };
      }, {});
      return Ee(() => ({ [`__scope${s.scopeName}`]: d }), [d]);
    };
  };
  return r.scopeName = s.scopeName, r;
}
function $t(a, s) {
  if (typeof a == "function")
    return a(s);
  a != null && (a.current = s);
}
function na(...a) {
  return (s) => {
    let r = !1;
    const n = a.map((i) => {
      const g = $t(i, s);
      return !r && typeof g == "function" && (r = !0), g;
    });
    if (r)
      return () => {
        for (let i = 0; i < n.length; i++) {
          const g = n[i];
          typeof g == "function" ? g() : $t(a[i], null);
        }
      };
  };
}
function be(...a) {
  return te(na(...a), a);
}
var Xe = L((a, s) => {
  const { children: r, ...n } = a, i = ie.toArray(r), g = i.find(Ns);
  if (g) {
    const d = g.props.children, l = i.map((f) => f === g ? ie.count(d) > 1 ? ie.only(null) : ke(d) ? d.props.children : null : f);
    return /* @__PURE__ */ t(_t, { ...n, ref: s, children: ke(d) ? Ae(d, void 0, l) : null });
  }
  return /* @__PURE__ */ t(_t, { ...n, ref: s, children: r });
});
Xe.displayName = "Slot";
var _t = L((a, s) => {
  const { children: r, ...n } = a;
  if (ke(r)) {
    const i = ks(r), g = Cs(n, r.props);
    return r.type !== sa && (g.ref = s ? na(s, i) : i), Ae(r, g);
  }
  return ie.count(r) > 1 ? ie.only(null) : null;
});
_t.displayName = "SlotClone";
var Ds = ({ children: a }) => /* @__PURE__ */ t(as, { children: a });
function Ns(a) {
  return ke(a) && a.type === Ds;
}
function Cs(a, s) {
  const r = { ...s };
  for (const n in s) {
    const i = a[n], g = s[n];
    /^on[A-Z]/.test(n) ? i && g ? r[n] = (...l) => {
      g(...l), i(...l);
    } : i && (r[n] = i) : n === "style" ? r[n] = { ...i, ...g } : n === "className" && (r[n] = [i, g].filter(Boolean).join(" "));
  }
  return { ...a, ...r };
}
function ks(a) {
  let s = Object.getOwnPropertyDescriptor(a.props, "ref")?.get, r = s && "isReactWarning" in s && s.isReactWarning;
  return r ? a.ref : (s = Object.getOwnPropertyDescriptor(a, "ref")?.get, r = s && "isReactWarning" in s && s.isReactWarning, r ? a.props.ref : a.props.ref || a.ref);
}
function ca(a) {
  const s = a + "CollectionProvider", [r, n] = Fe(s), [i, g] = r(
    s,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), d = (T) => {
    const { scope: x, children: S } = T, N = E.useRef(null), D = E.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ t(i, { scope: x, itemMap: D, collectionRef: N, children: S });
  };
  d.displayName = s;
  const l = a + "CollectionSlot", f = E.forwardRef(
    (T, x) => {
      const { scope: S, children: N } = T, D = g(l, S), w = be(x, D.collectionRef);
      return /* @__PURE__ */ t(Xe, { ref: w, children: N });
    }
  );
  f.displayName = l;
  const p = a + "CollectionItemSlot", u = "data-radix-collection-item", b = E.forwardRef(
    (T, x) => {
      const { scope: S, children: N, ...D } = T, w = E.useRef(null), F = be(x, w), I = g(p, S);
      return E.useEffect(() => (I.itemMap.set(w, { ref: w, ...D }), () => void I.itemMap.delete(w))), /* @__PURE__ */ t(Xe, { [u]: "", ref: F, children: N });
    }
  );
  b.displayName = p;
  function B(T) {
    const x = g(a + "CollectionConsumer", T);
    return E.useCallback(() => {
      const N = x.collectionRef.current;
      if (!N) return [];
      const D = Array.from(N.querySelectorAll(`[${u}]`));
      return Array.from(x.itemMap.values()).sort(
        (I, O) => D.indexOf(I.ref.current) - D.indexOf(O.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [
    { Provider: d, Slot: f, ItemSlot: b },
    B,
    n
  ];
}
var Qe = globalThis?.document ? ra : () => {
}, Es = Ts.useId || (() => {
}), As = 0;
function et(a) {
  const [s, r] = pe(Es());
  return Qe(() => {
    r((n) => n ?? String(As++));
  }, [a]), a || (s ? `radix-${s}` : "");
}
globalThis.__GLOBALS__.ReactDOM;
const { createPortal: Yo, findDOMNode: en, flushSync: tn, hydrate: an, render: sn, unmountComponentAtNode: rn, unstable_batchedUpdates: on, unstable_renderSubtreeIntoContainer: nn, version: cn } = globalThis.__GLOBALS__.ReactDOM;
var Fs = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], K = Fs.reduce((a, s) => {
  const r = L((n, i) => {
    const { asChild: g, ...d } = n, l = g ? Xe : s;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ t(l, { ...d, ref: i });
  });
  return r.displayName = `Primitive.${s}`, { ...a, [s]: r };
}, {});
function wt(a) {
  const s = U(a);
  return ge(() => {
    s.current = a;
  }), Ee(() => (...r) => s.current?.(...r), []);
}
function je({
  prop: a,
  defaultProp: s,
  onChange: r = () => {
  }
}) {
  const [n, i] = js({ defaultProp: s, onChange: r }), g = a !== void 0, d = g ? a : n, l = wt(r), f = te(
    (p) => {
      if (g) {
        const b = typeof p == "function" ? p(a) : p;
        b !== a && l(b);
      } else
        i(p);
    },
    [g, a, i, l]
  );
  return [d, f];
}
function js({
  defaultProp: a,
  onChange: s
}) {
  const r = pe(a), [n] = r, i = U(n), g = wt(s);
  return ge(() => {
    i.current !== n && (g(n), i.current = n);
  }, [n, i, g]), r;
}
var Ps = We(void 0);
function St(a) {
  const s = vt(Ps);
  return a || s || "ltr";
}
var ct = "rovingFocusGroup.onEntryFocus", Is = { bubbles: !1, cancelable: !0 }, tt = "RovingFocusGroup", [mt, ia, Rs] = ca(tt), [Ls, ga] = Fe(
  tt,
  [Rs]
), [Os, Ms] = Ls(tt), da = L(
  (a, s) => /* @__PURE__ */ t(mt.Provider, { scope: a.__scopeRovingFocusGroup, children: /* @__PURE__ */ t(mt.Slot, { scope: a.__scopeRovingFocusGroup, children: /* @__PURE__ */ t(zs, { ...a, ref: s }) }) })
);
da.displayName = tt;
var zs = L((a, s) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: i = !1,
    dir: g,
    currentTabStopId: d,
    defaultCurrentTabStopId: l,
    onCurrentTabStopIdChange: f,
    onEntryFocus: p,
    preventScrollOnEntryFocus: u = !1,
    ...b
  } = a, B = U(null), T = be(s, B), x = St(g), [S = null, N] = je({
    prop: d,
    defaultProp: l,
    onChange: f
  }), [D, w] = pe(!1), F = wt(p), I = ia(r), O = U(!1), [G, W] = pe(0);
  return ge(() => {
    const h = B.current;
    if (h)
      return h.addEventListener(ct, F), () => h.removeEventListener(ct, F);
  }, [F]), /* @__PURE__ */ t(
    Os,
    {
      scope: r,
      orientation: n,
      dir: x,
      loop: i,
      currentTabStopId: S,
      onItemFocus: te(
        (h) => N(h),
        [N]
      ),
      onItemShiftTab: te(() => w(!0), []),
      onFocusableItemAdd: te(
        () => W((h) => h + 1),
        []
      ),
      onFocusableItemRemove: te(
        () => W((h) => h - 1),
        []
      ),
      children: /* @__PURE__ */ t(
        K.div,
        {
          tabIndex: D || G === 0 ? -1 : 0,
          "data-orientation": n,
          ...b,
          ref: T,
          style: { outline: "none", ...a.style },
          onMouseDown: H(a.onMouseDown, () => {
            O.current = !0;
          }),
          onFocus: H(a.onFocus, (h) => {
            const q = !O.current;
            if (h.target === h.currentTarget && q && !D) {
              const we = new CustomEvent(ct, Is);
              if (h.currentTarget.dispatchEvent(we), !we.defaultPrevented) {
                const _e = I().filter((R) => R.focusable), me = _e.find((R) => R.active), Pe = _e.find((R) => R.id === S), se = [me, Pe, ..._e].filter(
                  Boolean
                ).map((R) => R.ref.current);
                pa(se, u);
              }
            }
            O.current = !1;
          }),
          onBlur: H(a.onBlur, () => w(!1))
        }
      )
    }
  );
}), fa = "RovingFocusGroupItem", la = L(
  (a, s) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: i = !1,
      tabStopId: g,
      ...d
    } = a, l = et(), f = g || l, p = Ms(fa, r), u = p.currentTabStopId === f, b = ia(r), { onFocusableItemAdd: B, onFocusableItemRemove: T } = p;
    return ge(() => {
      if (n)
        return B(), () => T();
    }, [n, B, T]), /* @__PURE__ */ t(
      mt.ItemSlot,
      {
        scope: r,
        id: f,
        focusable: n,
        active: i,
        children: /* @__PURE__ */ t(
          K.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": p.orientation,
            ...d,
            ref: s,
            onMouseDown: H(a.onMouseDown, (x) => {
              n ? p.onItemFocus(f) : x.preventDefault();
            }),
            onFocus: H(a.onFocus, () => p.onItemFocus(f)),
            onKeyDown: H(a.onKeyDown, (x) => {
              if (x.key === "Tab" && x.shiftKey) {
                p.onItemShiftTab();
                return;
              }
              if (x.target !== x.currentTarget) return;
              const S = Js(x, p.orientation, p.dir);
              if (S !== void 0) {
                if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
                x.preventDefault();
                let D = b().filter((w) => w.focusable).map((w) => w.ref.current);
                if (S === "last") D.reverse();
                else if (S === "prev" || S === "next") {
                  S === "prev" && D.reverse();
                  const w = D.indexOf(x.currentTarget);
                  D = p.loop ? $s(D, w + 1) : D.slice(w + 1);
                }
                setTimeout(() => pa(D));
              }
            })
          }
        )
      }
    );
  }
);
la.displayName = fa;
var Us = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Gs(a, s) {
  return s !== "rtl" ? a : a === "ArrowLeft" ? "ArrowRight" : a === "ArrowRight" ? "ArrowLeft" : a;
}
function Js(a, s, r) {
  const n = Gs(a.key, r);
  if (!(s === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(s === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Us[n];
}
function pa(a, s = !1) {
  const r = document.activeElement;
  for (const n of a)
    if (n === r || (n.focus({ preventScroll: s }), document.activeElement !== r)) return;
}
function $s(a, s) {
  return a.map((r, n) => a[(s + n) % a.length]);
}
var Vs = da, qs = la;
function Hs(a, s) {
  return oa((r, n) => s[r][n] ?? r, a);
}
var yt = (a) => {
  const { present: s, children: r } = a, n = Ks(s), i = typeof r == "function" ? r({ present: n.isPresent }) : ie.only(r), g = be(n.ref, Ws(i));
  return typeof r == "function" || n.isPresent ? Ae(i, { ref: g }) : null;
};
yt.displayName = "Presence";
function Ks(a) {
  const [s, r] = pe(), n = U({}), i = U(a), g = U("none"), d = a ? "mounted" : "unmounted", [l, f] = Hs(d, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return ge(() => {
    const p = Ue(n.current);
    g.current = l === "mounted" ? p : "none";
  }, [l]), Qe(() => {
    const p = n.current, u = i.current;
    if (u !== a) {
      const B = g.current, T = Ue(p);
      a ? f("MOUNT") : T === "none" || p?.display === "none" ? f("UNMOUNT") : f(u && B !== T ? "ANIMATION_OUT" : "UNMOUNT"), i.current = a;
    }
  }, [a, f]), Qe(() => {
    if (s) {
      let p;
      const u = s.ownerDocument.defaultView ?? window, b = (T) => {
        const S = Ue(n.current).includes(T.animationName);
        if (T.target === s && S && (f("ANIMATION_END"), !i.current)) {
          const N = s.style.animationFillMode;
          s.style.animationFillMode = "forwards", p = u.setTimeout(() => {
            s.style.animationFillMode === "forwards" && (s.style.animationFillMode = N);
          });
        }
      }, B = (T) => {
        T.target === s && (g.current = Ue(n.current));
      };
      return s.addEventListener("animationstart", B), s.addEventListener("animationcancel", b), s.addEventListener("animationend", b), () => {
        u.clearTimeout(p), s.removeEventListener("animationstart", B), s.removeEventListener("animationcancel", b), s.removeEventListener("animationend", b);
      };
    } else
      f("ANIMATION_END");
  }, [s, f]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: te((p) => {
      p && (n.current = getComputedStyle(p)), r(p);
    }, [])
  };
}
function Ue(a) {
  return a?.animationName || "none";
}
function Ws(a) {
  let s = Object.getOwnPropertyDescriptor(a.props, "ref")?.get, r = s && "isReactWarning" in s && s.isReactWarning;
  return r ? a.ref : (s = Object.getOwnPropertyDescriptor(a, "ref")?.get, r = s && "isReactWarning" in s && s.isReactWarning, r ? a.props.ref : a.props.ref || a.ref);
}
var Tt = "Tabs", [Zs] = Fe(Tt, [
  ga
]), _a = ga(), [Xs, Bt] = Zs(Tt), ma = L(
  (a, s) => {
    const {
      __scopeTabs: r,
      value: n,
      onValueChange: i,
      defaultValue: g,
      orientation: d = "horizontal",
      dir: l,
      activationMode: f = "automatic",
      ...p
    } = a, u = St(l), [b, B] = je({
      prop: n,
      onChange: i,
      defaultProp: g
    });
    return /* @__PURE__ */ t(
      Xs,
      {
        scope: r,
        baseId: et(),
        value: b,
        onValueChange: B,
        orientation: d,
        dir: u,
        activationMode: f,
        children: /* @__PURE__ */ t(
          K.div,
          {
            dir: u,
            "data-orientation": d,
            ...p,
            ref: s
          }
        )
      }
    );
  }
);
ma.displayName = Tt;
var ua = "TabsList", ha = L(
  (a, s) => {
    const { __scopeTabs: r, loop: n = !0, ...i } = a, g = Bt(ua, r), d = _a(r);
    return /* @__PURE__ */ t(
      Vs,
      {
        asChild: !0,
        ...d,
        orientation: g.orientation,
        dir: g.dir,
        loop: n,
        children: /* @__PURE__ */ t(
          K.div,
          {
            role: "tablist",
            "aria-orientation": g.orientation,
            ...i,
            ref: s
          }
        )
      }
    );
  }
);
ha.displayName = ua;
var ba = "TabsTrigger", xa = L(
  (a, s) => {
    const { __scopeTabs: r, value: n, disabled: i = !1, ...g } = a, d = Bt(ba, r), l = _a(r), f = Sa(d.baseId, n), p = ya(d.baseId, n), u = n === d.value;
    return /* @__PURE__ */ t(
      qs,
      {
        asChild: !0,
        ...l,
        focusable: !i,
        active: u,
        children: /* @__PURE__ */ t(
          K.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": u,
            "aria-controls": p,
            "data-state": u ? "active" : "inactive",
            "data-disabled": i ? "" : void 0,
            disabled: i,
            id: f,
            ...g,
            ref: s,
            onMouseDown: H(a.onMouseDown, (b) => {
              !i && b.button === 0 && b.ctrlKey === !1 ? d.onValueChange(n) : b.preventDefault();
            }),
            onKeyDown: H(a.onKeyDown, (b) => {
              [" ", "Enter"].includes(b.key) && d.onValueChange(n);
            }),
            onFocus: H(a.onFocus, () => {
              const b = d.activationMode !== "manual";
              !u && !i && b && d.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
xa.displayName = ba;
var va = "TabsContent", wa = L(
  (a, s) => {
    const { __scopeTabs: r, value: n, forceMount: i, children: g, ...d } = a, l = Bt(va, r), f = Sa(l.baseId, n), p = ya(l.baseId, n), u = n === l.value, b = U(u);
    return ge(() => {
      const B = requestAnimationFrame(() => b.current = !1);
      return () => cancelAnimationFrame(B);
    }, []), /* @__PURE__ */ t(yt, { present: i || u, children: ({ present: B }) => /* @__PURE__ */ t(
      K.div,
      {
        "data-state": u ? "active" : "inactive",
        "data-orientation": l.orientation,
        role: "tabpanel",
        "aria-labelledby": f,
        hidden: !B,
        id: p,
        tabIndex: 0,
        ...d,
        ref: s,
        style: {
          ...a.style,
          animationDuration: b.current ? "0s" : void 0
        },
        children: B && g
      }
    ) });
  }
);
wa.displayName = va;
function Sa(a, s) {
  return `${a}-trigger-${s}`;
}
function ya(a, s) {
  return `${a}-content-${s}`;
}
var Qs = ma, Ys = ha, er = xa, tr = wa;
function Ta(a) {
  var s, r, n = "";
  if (typeof a == "string" || typeof a == "number") n += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var i = a.length;
    for (s = 0; s < i; s++) a[s] && (r = Ta(a[s])) && (n && (n += " "), n += r);
  } else for (r in a) a[r] && (n && (n += " "), n += r);
  return n;
}
function ar() {
  for (var a, s, r = 0, n = "", i = arguments.length; r < i; r++) (a = arguments[r]) && (s = Ta(a)) && (n && (n += " "), n += s);
  return n;
}
const Dt = "-", sr = (a) => {
  const s = or(a), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = a;
  return {
    getClassGroupId: (d) => {
      const l = d.split(Dt);
      return l[0] === "" && l.length !== 1 && l.shift(), Ba(l, s) || rr(d);
    },
    getConflictingClassGroupIds: (d, l) => {
      const f = r[d] || [];
      return l && n[d] ? [...f, ...n[d]] : f;
    }
  };
}, Ba = (a, s) => {
  if (a.length === 0)
    return s.classGroupId;
  const r = a[0], n = s.nextPart.get(r), i = n ? Ba(a.slice(1), n) : void 0;
  if (i)
    return i;
  if (s.validators.length === 0)
    return;
  const g = a.join(Dt);
  return s.validators.find(({
    validator: d
  }) => d(g))?.classGroupId;
}, Vt = /^\[(.+)\]$/, rr = (a) => {
  if (Vt.test(a)) {
    const s = Vt.exec(a)[1], r = s?.substring(0, s.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, or = (a) => {
  const {
    theme: s,
    classGroups: r
  } = a, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const i in r)
    ut(r[i], n, i, s);
  return n;
}, ut = (a, s, r, n) => {
  a.forEach((i) => {
    if (typeof i == "string") {
      const g = i === "" ? s : qt(s, i);
      g.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (nr(i)) {
        ut(i(n), s, r, n);
        return;
      }
      s.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([g, d]) => {
      ut(d, qt(s, g), r, n);
    });
  });
}, qt = (a, s) => {
  let r = a;
  return s.split(Dt).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, nr = (a) => a.isThemeGetter, cr = (a) => {
  if (a < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let s = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const i = (g, d) => {
    r.set(g, d), s++, s > a && (s = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(g) {
      let d = r.get(g);
      if (d !== void 0)
        return d;
      if ((d = n.get(g)) !== void 0)
        return i(g, d), d;
    },
    set(g, d) {
      r.has(g) ? r.set(g, d) : i(g, d);
    }
  };
}, ht = "!", bt = ":", ir = bt.length, gr = (a) => {
  const {
    prefix: s,
    experimentalParseClassName: r
  } = a;
  let n = (i) => {
    const g = [];
    let d = 0, l = 0, f = 0, p;
    for (let x = 0; x < i.length; x++) {
      let S = i[x];
      if (d === 0 && l === 0) {
        if (S === bt) {
          g.push(i.slice(f, x)), f = x + ir;
          continue;
        }
        if (S === "/") {
          p = x;
          continue;
        }
      }
      S === "[" ? d++ : S === "]" ? d-- : S === "(" ? l++ : S === ")" && l--;
    }
    const u = g.length === 0 ? i : i.substring(f), b = dr(u), B = b !== u, T = p && p > f ? p - f : void 0;
    return {
      modifiers: g,
      hasImportantModifier: B,
      baseClassName: b,
      maybePostfixModifierPosition: T
    };
  };
  if (s) {
    const i = s + bt, g = n;
    n = (d) => d.startsWith(i) ? g(d.substring(i.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: d,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const i = n;
    n = (g) => r({
      className: g,
      parseClassName: i
    });
  }
  return n;
}, dr = (a) => a.endsWith(ht) ? a.substring(0, a.length - 1) : a.startsWith(ht) ? a.substring(1) : a, fr = (a) => {
  const s = Object.fromEntries(a.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const i = [];
    let g = [];
    return n.forEach((d) => {
      d[0] === "[" || s[d] ? (i.push(...g.sort(), d), g = []) : g.push(d);
    }), i.push(...g.sort()), i;
  };
}, lr = (a) => ({
  cache: cr(a.cacheSize),
  parseClassName: gr(a),
  sortModifiers: fr(a),
  ...sr(a)
}), pr = /\s+/, _r = (a, s) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i,
    sortModifiers: g
  } = s, d = [], l = a.trim().split(pr);
  let f = "";
  for (let p = l.length - 1; p >= 0; p -= 1) {
    const u = l[p], {
      isExternal: b,
      modifiers: B,
      hasImportantModifier: T,
      baseClassName: x,
      maybePostfixModifierPosition: S
    } = r(u);
    if (b) {
      f = u + (f.length > 0 ? " " + f : f);
      continue;
    }
    let N = !!S, D = n(N ? x.substring(0, S) : x);
    if (!D) {
      if (!N) {
        f = u + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (D = n(x), !D) {
        f = u + (f.length > 0 ? " " + f : f);
        continue;
      }
      N = !1;
    }
    const w = g(B).join(":"), F = T ? w + ht : w, I = F + D;
    if (d.includes(I))
      continue;
    d.push(I);
    const O = i(D, N);
    for (let G = 0; G < O.length; ++G) {
      const W = O[G];
      d.push(F + W);
    }
    f = u + (f.length > 0 ? " " + f : f);
  }
  return f;
};
function mr() {
  let a = 0, s, r, n = "";
  for (; a < arguments.length; )
    (s = arguments[a++]) && (r = Da(s)) && (n && (n += " "), n += r);
  return n;
}
const Da = (a) => {
  if (typeof a == "string")
    return a;
  let s, r = "";
  for (let n = 0; n < a.length; n++)
    a[n] && (s = Da(a[n])) && (r && (r += " "), r += s);
  return r;
};
function ur(a, ...s) {
  let r, n, i, g = d;
  function d(f) {
    const p = s.reduce((u, b) => b(u), a());
    return r = lr(p), n = r.cache.get, i = r.cache.set, g = l, l(f);
  }
  function l(f) {
    const p = n(f);
    if (p)
      return p;
    const u = _r(f, r);
    return i(f, u), u;
  }
  return function() {
    return g(mr.apply(null, arguments));
  };
}
const j = (a) => {
  const s = (r) => r[a] || [];
  return s.isThemeGetter = !0, s;
}, Na = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ca = /^\((?:(\w[\w-]*):)?(.+)\)$/i, hr = /^\d+\/\d+$/, br = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, xr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, vr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, wr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Sr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ue = (a) => hr.test(a), y = (a) => !!a && !Number.isNaN(Number(a)), re = (a) => !!a && Number.isInteger(Number(a)), it = (a) => a.endsWith("%") && y(a.slice(0, -1)), Y = (a) => br.test(a), yr = () => !0, Tr = (a) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  xr.test(a) && !vr.test(a)
), ka = () => !1, Br = (a) => wr.test(a), Dr = (a) => Sr.test(a), Nr = (a) => !_(a) && !m(a), Cr = (a) => xe(a, Fa, ka), _ = (a) => Na.test(a), le = (a) => xe(a, ja, Tr), gt = (a) => xe(a, jr, y), Ht = (a) => xe(a, Ea, ka), kr = (a) => xe(a, Aa, Dr), Ge = (a) => xe(a, Pa, Br), m = (a) => Ca.test(a), ye = (a) => ve(a, ja), Er = (a) => ve(a, Pr), Kt = (a) => ve(a, Ea), Ar = (a) => ve(a, Fa), Fr = (a) => ve(a, Aa), Je = (a) => ve(a, Pa, !0), xe = (a, s, r) => {
  const n = Na.exec(a);
  return n ? n[1] ? s(n[1]) : r(n[2]) : !1;
}, ve = (a, s, r = !1) => {
  const n = Ca.exec(a);
  return n ? n[1] ? s(n[1]) : r : !1;
}, Ea = (a) => a === "position" || a === "percentage", Aa = (a) => a === "image" || a === "url", Fa = (a) => a === "length" || a === "size" || a === "bg-size", ja = (a) => a === "length", jr = (a) => a === "number", Pr = (a) => a === "family-name", Pa = (a) => a === "shadow", Ir = () => {
  const a = j("color"), s = j("font"), r = j("text"), n = j("font-weight"), i = j("tracking"), g = j("leading"), d = j("breakpoint"), l = j("container"), f = j("spacing"), p = j("radius"), u = j("shadow"), b = j("inset-shadow"), B = j("text-shadow"), T = j("drop-shadow"), x = j("blur"), S = j("perspective"), N = j("aspect"), D = j("ease"), w = j("animate"), F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], I = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], O = () => [...I(), m, _], G = () => ["auto", "hidden", "clip", "visible", "scroll"], W = () => ["auto", "contain", "none"], h = () => [m, _, f], q = () => [ue, "full", "auto", ...h()], we = () => [re, "none", "subgrid", m, _], _e = () => ["auto", {
    span: ["full", re, m, _]
  }, re, m, _], me = () => [re, "auto", m, _], Pe = () => ["auto", "min", "max", "fr", m, _], Ie = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], se = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], R = () => ["auto", ...h()], fe = () => [ue, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...h()], v = () => [a, m, _], Ot = () => [...I(), Kt, Ht, {
    position: [m, _]
  }], Mt = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], zt = () => ["auto", "cover", "contain", Ar, Cr, {
    size: [m, _]
  }], rt = () => [it, ye, le], M = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    m,
    _
  ], J = () => ["", y, ye, le], Re = () => ["solid", "dashed", "dotted", "double"], Ut = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], P = () => [y, it, Kt, Ht], Gt = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    m,
    _
  ], Le = () => ["none", y, m, _], Oe = () => ["none", y, m, _], ot = () => [y, m, _], Me = () => [ue, "full", ...h()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Y],
      breakpoint: [Y],
      color: [yr],
      container: [Y],
      "drop-shadow": [Y],
      ease: ["in", "out", "in-out"],
      font: [Nr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Y],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Y],
      shadow: [Y],
      spacing: ["px", y],
      text: [Y],
      "text-shadow": [Y],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", ue, _, m, N]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [y, _, m, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": F()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": F()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: O()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: G()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": G()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": G()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: W()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": W()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": W()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: q()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": q()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": q()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: q()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: q()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: q()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: q()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: q()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: q()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [re, "auto", m, _]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ue, "full", "auto", l, ...h()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [y, ue, "auto", "initial", "none", _]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", y, m, _]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", y, m, _]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [re, "first", "last", "none", m, _]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": we()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: _e()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": me()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": me()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": we()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: _e()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": me()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": me()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": Pe()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Pe()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: h()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": h()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": h()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...Ie(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...se(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...se()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Ie()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...se(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...se(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Ie()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...se(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...se()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: h()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: h()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: h()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: h()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: h()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: h()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: h()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: h()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: h()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: R()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: R()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: R()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: R()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: R()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: R()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: R()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: R()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: R()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": h()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": h()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: fe()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...fe()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          l,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...fe()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          l,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [d]
          },
          ...fe()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...fe()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...fe()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...fe()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, ye, le]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, m, gt]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", it, _]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Er, _, s]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [i, m, _]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [y, "none", m, gt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          g,
          ...h()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", m, _]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", m, _]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: v()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: v()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Re(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [y, "from-font", "auto", m, le]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: v()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [y, "auto", m, _]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: h()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", m, _]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", m, _]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: Ot()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Mt()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: zt()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, re, m, _],
          radial: ["", m, _],
          conic: [re, m, _]
        }, Fr, kr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: v()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: rt()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: rt()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: rt()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: v()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: v()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: v()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: M()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": M()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": M()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": M()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": M()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": M()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": M()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": M()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": M()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": M()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": M()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": M()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": M()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": M()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": M()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: J()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": J()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": J()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": J()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": J()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": J()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": J()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": J()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": J()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": J()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": J()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Re(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Re(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: v()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": v()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": v()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": v()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": v()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": v()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": v()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": v()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": v()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: v()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Re(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [y, m, _]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", y, ye, le]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: v()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          u,
          Je,
          Ge
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: v()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", b, Je, Ge]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": v()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: J()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: v()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [y, le]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": v()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": J()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": v()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", B, Je, Ge]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": v()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y, m, _]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Ut(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Ut()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [y]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": P()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": P()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": v()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": v()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": P()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": P()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": v()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": v()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": P()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": P()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": v()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": v()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": P()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": P()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": v()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": v()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": P()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": P()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": v()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": v()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": P()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": P()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": v()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": v()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": P()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": P()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": v()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": v()
      }],
      "mask-image-radial": [{
        "mask-radial": [m, _]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": P()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": P()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": v()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": v()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": I()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [y]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": P()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": P()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": v()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": v()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: Ot()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Mt()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: zt()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", m, _]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          m,
          _
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Gt()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [y, m, _]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [y, m, _]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          T,
          Je,
          Ge
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": v()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", y, m, _]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [y, m, _]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", y, m, _]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [y, m, _]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", y, m, _]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          m,
          _
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Gt()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [y, m, _]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [y, m, _]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", y, m, _]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [y, m, _]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", y, m, _]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y, m, _]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [y, m, _]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", y, m, _]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": h()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": h()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": h()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", m, _]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [y, "initial", m, _]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", D, m, _]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [y, m, _]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", w, m, _]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [S, m, _]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": O()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Le()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Le()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Le()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Le()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Oe()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Oe()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Oe()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Oe()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: ot()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ot()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ot()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [m, _, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: O()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Me()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Me()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Me()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Me()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: v()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: v()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", m, _]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": h()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": h()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": h()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": h()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": h()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": h()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": h()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": h()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": h()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": h()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": h()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": h()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": h()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": h()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": h()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": h()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": h()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": h()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", m, _]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...v()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [y, ye, le, gt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...v()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Rr = /* @__PURE__ */ ur(Ir);
function de(...a) {
  return Rr(ar(a));
}
function Nt({
  className: a,
  ...s
}) {
  return /* @__PURE__ */ t(
    e,
    {
      _fgT: Qs,
      _fgS: "cg840",
      _fgB: 1793649787330,
      _fgD: !0,
      "data-slot": "tabs",
      className: de("flex flex-col gap-2", a),
      ...s,
      "data-fg-cg840": ":0:/src/app/components/ui/tabs.tsx:13:5:249:121:e:TabsPrimitive.Root::1"
    }
  );
}
function Ct({
  className: a,
  ...s
}) {
  return /* @__PURE__ */ t(
    e,
    {
      _fgT: Ys,
      _fgS: "cg841",
      _fgB: 1793649787330,
      _fgD: !0,
      "data-slot": "tabs-list",
      className: de(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",
        a
      ),
      ...s,
      "data-fg-cg841": ":0:/src/app/components/ui/tabs.tsx:26:5:492:236:e:TabsPrimitive.List::1"
    }
  );
}
function Z({
  className: a,
  ...s
}) {
  return /* @__PURE__ */ t(
    e,
    {
      _fgT: er,
      _fgS: "cg842",
      _fgB: 1793649787330,
      _fgD: !0,
      "data-slot": "tabs-trigger",
      className: de(
        "data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a
      ),
      ...s,
      "data-fg-cg842": ":0:/src/app/components/ui/tabs.tsx:42:5:856:773:e:TabsPrimitive.Trigger::1"
    }
  );
}
function X({
  className: a,
  ...s
}) {
  return /* @__PURE__ */ t(
    e,
    {
      _fgT: tr,
      _fgS: "cg843",
      _fgB: 1793649787330,
      _fgD: !0,
      "data-slot": "tabs-content",
      className: de("flex-1 outline-none", a),
      ...s,
      "data-fg-cg843": ":0:/src/app/components/ui/tabs.tsx:58:5:1757:132:e:TabsPrimitive.Content::1"
    }
  );
}
function C({ className: a, ...s }) {
  return /* @__PURE__ */ t(
    e,
    {
      _fgT: "div",
      _fgS: "elfm0",
      _fgB: 1793649787447,
      _fgD: !0,
      "data-slot": "card",
      className: de(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
        a
      ),
      ...s,
      "data-fg-elfm0": ":0:/src/app/components/ui/card.tsx:7:5:149:178:e:div::1"
    }
  );
}
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Or = (a) => a.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (s, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), Wt = (a) => {
  const s = Or(a);
  return s.charAt(0).toUpperCase() + s.slice(1);
}, Ia = (...a) => a.filter((s, r, n) => !!s && s.trim() !== "" && n.indexOf(s) === r).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Mr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = L(
  ({
    color: a = "currentColor",
    size: s = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: i = "",
    children: g,
    iconNode: d,
    ...l
  }, f) => Ze(
    "svg",
    {
      ref: f,
      ...Mr,
      width: s,
      height: s,
      stroke: a,
      strokeWidth: n ? Number(r) * 24 / Number(s) : r,
      className: Ia("lucide", i),
      ...l
    },
    [
      ...d.map(([p, u]) => Ze(p, u)),
      ...Array.isArray(g) ? g : [g]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A = (a, s) => {
  const r = L(
    ({ className: n, ...i }, g) => Ze(zr, {
      ref: g,
      iconNode: s,
      className: Ia(
        `lucide-${Lr(Wt(a))}`,
        `lucide-${a}`,
        n
      ),
      ...i
    })
  );
  return r.displayName = Wt(a), r;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], dt = A("arrow-down", Ur);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gr = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Jr = A("arrow-right", Gr);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $r = [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r"
    }
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }]
], Ra = A("brain", $r);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
], Zt = A("camera", Vr);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Hr = A("chevron-down", qr);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Q = A("circle-check", Kr);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wr = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], Te = A("circle-x", Wr);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
], Xr = A("code", Zr);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], Yr = A("compass", Qr);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eo = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
], kt = A("database", eo);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const to = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  [
    "path",
    { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" }
  ],
  [
    "path",
    { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" }
  ]
], ao = A("file-json", to);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = [
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  [
    "path",
    { d: "M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3", key: "ms7g94" }
  ],
  ["path", { d: "m9 18-1.5-1.5", key: "1j6qii" }],
  ["circle", { cx: "5", cy: "14", r: "3", key: "ufru5t" }]
], La = A("file-search", so);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ro = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Xt = A("file-text", ro);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oo = [
  ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]
], Qt = A("key", oo);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const no = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
], co = A("lightbulb", no);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const io = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], go = A("lock", io);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
], lo = A("message-circle", fo);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const po = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
], Yt = A("tag", po);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], mo = A("target", _o);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uo = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
], ho = A("user-plus", uo);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], Oa = A("zap", bo);
function xo() {
  return /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte10", _fgB: 1793649787356, _fgD: !0, className: "space-y-6", "data-fg-bte10": ":0:/src/app/components/ArchitectureOverview.tsx:6:5:185:9004:e:div:xtetxtetxte:1", children: [
    /* @__PURE__ */ t(e, { _fgT: C, _fgS: "bte12", _fgB: 1793649787356, className: "p-8", "data-fg-bte12": ":0:/src/app/components/ArchitectureOverview.tsx:8:7:259:6166:e:Card:e::::s:CuJ6:1", children: /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte13", _fgB: 1793649787356, className: "space-y-8", "data-fg-bte13": ":0:/src/app/components/ArchitectureOverview.tsx:9:9:290:6121:e:div:xtetetxtetxtetxte", children: [
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte15", _fgB: 1793649787356, className: "text-center mb-6", "data-fg-bte15": ":0:/src/app/components/ArchitectureOverview.tsx:11:11:363:396:e:div:ete", children: [
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte16", _fgB: 1793649787356, className: "text-slate-500 mb-4", "data-fg-bte16": ":0:/src/app/components/ArchitectureOverview.tsx:12:13:410:59:e:div:t", children: "External Systems" }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte18", _fgB: 1793649787356, className: "flex justify-center gap-6", "data-fg-bte18": ":0:/src/app/components/ArchitectureOverview.tsx:13:13:482:260:e:div:etete", children: [
          /* @__PURE__ */ t(e, { _fgT: ft, _fgS: "bte19", _fgB: 1793649787356, title: "Journey Engine", color: "purple", "data-fg-bte19": ":0:/src/app/components/ArchitectureOverview.tsx:14:15:540:52:e:SystemNode::::::C2Ng" }),
          /* @__PURE__ */ t(e, { _fgT: ft, _fgS: "bte110", _fgB: 1793649787356, title: "Personal Chat", color: "purple", "data-fg-bte110": ":0:/src/app/components/ArchitectureOverview.tsx:15:15:607:51:e:SystemNode::::::C2Ng" }),
          /* @__PURE__ */ t(e, { _fgT: ft, _fgS: "bte111", _fgB: 1793649787356, title: "Sign-up Flow", color: "purple", "data-fg-bte111": ":0:/src/app/components/ArchitectureOverview.tsx:16:15:673:50:e:SystemNode::::::C2Ng" })
        ] })
      ] }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte112", _fgB: 1793649787356, className: "flex justify-center", "data-fg-bte112": ":0:/src/app/components/ArchitectureOverview.tsx:20:11:771:115:e:div:e", children: /* @__PURE__ */ t(e, { _fgT: dt, _fgS: "bte113", _fgB: 1793649787356, className: "w-8 h-8 text-slate-400", "data-fg-bte113": ":0:node_modules/lucide-react:21:13:821:48:e:ArrowDown::::::DKqX" }) }),
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte115", _fgB: 1793649787356, className: "grid grid-cols-2 gap-8", "data-fg-bte115": ":0:/src/app/components/ArchitectureOverview.tsx:25:11:930:3770:e:div:xtetxte", children: [
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte117", _fgB: 1793649787356, className: "relative", "data-fg-bte117": ":0:/src/app/components/ArchitectureOverview.tsx:27:13:1021:1923:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte118", _fgB: 1793649787356, className: "absolute -top-3 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm z-10", "data-fg-bte118": ":0:/src/app/components/ArchitectureOverview.tsx:28:15:1062:148:e:div:t", children: "WRITE + LLM" }),
          /* @__PURE__ */ o(e, { _fgT: C, _fgS: "bte120", _fgB: 1793649787356, className: "bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 p-6", "data-fg-bte120": ":0:/src/app/components/ArchitectureOverview.tsx:31:15:1225:1700:e:Card:etxtetxte::::s:CuJ6:1", children: [
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte121", _fgB: 1793649787356, className: "flex items-start gap-3 mb-4", "data-fg-bte121": ":0:/src/app/components/ArchitectureOverview.tsx:32:17:1332:384:e:div:ete", children: [
              /* @__PURE__ */ t(e, { _fgT: Oa, _fgS: "bte122", _fgB: 1793649787356, className: "w-6 h-6 text-blue-600 mt-1", "data-fg-bte122": ":0:node_modules/lucide-react:33:19:1396:46:e:Zap::::::Cp7" }),
              /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte123", _fgB: 1793649787356, "data-fg-bte123": ":0:/src/app/components/ArchitectureOverview.tsx:34:19:1461:232:e:div:ete", children: [
                /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte124", _fgB: 1793649787356, className: "text-blue-900 mb-1", "data-fg-bte124": ":0:/src/app/components/ArchitectureOverview.tsx:35:21:1487:72:e:div:t", children: "Digital Twin Ingestion Library" }),
                /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte126", _fgB: 1793649787356, className: "text-blue-600 text-sm", "data-fg-bte126": ":0:/src/app/components/ArchitectureOverview.tsx:36:21:1580:88:e:div:t", children: "Functions for writing and updating the twin" })
              ] })
            ] }),
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte129", _fgB: 1793649787356, className: "bg-white/60 rounded-lg p-4 mb-4", "data-fg-bte129": ":0:/src/app/components/ArchitectureOverview.tsx:41:17:1768:581:e:div:ete", children: [
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte130", _fgB: 1793649787356, className: "text-blue-900 mb-2", "data-fg-bte130": ":0:/src/app/components/ArchitectureOverview.tsx:42:19:1836:59:e:div:t", children: "Library Functions" }),
              /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte132", _fgB: 1793649787356, className: "space-y-1 text-sm", "data-fg-bte132": ":0:/src/app/components/ArchitectureOverview.tsx:43:19:1914:412:e:div:etetetete", children: [
                /* @__PURE__ */ t(e, { _fgT: oe, _fgS: "bte133", _fgB: 1793649787356, name: "ingest_day0_tags()", "data-fg-bte133": ":0:/src/app/components/ArchitectureOverview.tsx:44:21:1970:45:e:LibraryFunction::::::D1t0" }),
                /* @__PURE__ */ t(e, { _fgT: oe, _fgS: "bte134", _fgB: 1793649787356, name: "ingest_day0_intro_answers()", "data-fg-bte134": ":0:/src/app/components/ArchitectureOverview.tsx:45:21:2036:54:e:LibraryFunction::::::D1t0" }),
                /* @__PURE__ */ t(e, { _fgT: oe, _fgS: "bte135", _fgB: 1793649787356, name: "ingest_mood_checkin()", "data-fg-bte135": ":0:/src/app/components/ArchitectureOverview.tsx:46:21:2111:48:e:LibraryFunction::::::D1t0" }),
                /* @__PURE__ */ t(e, { _fgT: oe, _fgS: "bte136", _fgB: 1793649787356, name: "ingest_journey_reflections()", "data-fg-bte136": ":0:/src/app/components/ArchitectureOverview.tsx:47:21:2180:55:e:LibraryFunction::::::D1t0" }),
                /* @__PURE__ */ t(e, { _fgT: oe, _fgS: "bte137", _fgB: 1793649787356, name: "ingest_chat_turn()", "data-fg-bte137": ":0:/src/app/components/ArchitectureOverview.tsx:48:21:2256:45:e:LibraryFunction::::::D1t0" })
              ] })
            ] }),
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte139", _fgB: 1793649787356, className: "bg-purple-100 border-2 border-purple-300 rounded-lg p-4", "data-fg-bte139": ":0:/src/app/components/ArchitectureOverview.tsx:53:17:2417:486:e:div:ete", children: [
              /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte140", _fgB: 1793649787356, className: "flex items-center gap-2 mb-2", "data-fg-bte140": ":0:/src/app/components/ArchitectureOverview.tsx:54:19:2509:222:e:div:ete", children: [
                /* @__PURE__ */ t(e, { _fgT: Ra, _fgS: "bte141", _fgB: 1793649787356, className: "w-5 h-5 text-purple-700", "data-fg-bte141": ":0:node_modules/lucide-react:55:21:2576:45:e:Brain::::::42K" }),
                /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte142", _fgB: 1793649787356, className: "text-purple-900", "data-fg-bte142": ":0:/src/app/components/ArchitectureOverview.tsx:56:21:2642:64:e:div:t", children: "Twin Summarization Helper" })
              ] }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte144", _fgB: 1793649787356, className: "text-sm text-purple-700", "data-fg-bte144": ":0:/src/app/components/ArchitectureOverview.tsx:58:19:2750:130:e:div:t", children: "Internal module - only place that calls LLM" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte147", _fgB: 1793649787356, className: "relative", "data-fg-bte147": ":0:/src/app/components/ArchitectureOverview.tsx:66:13:2994:1689:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte148", _fgB: 1793649787356, className: "absolute -top-3 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm z-10", "data-fg-bte148": ":0:/src/app/components/ArchitectureOverview.tsx:67:15:3035:147:e:div:t", children: "READ ONLY" }),
          /* @__PURE__ */ o(e, { _fgT: C, _fgS: "bte150", _fgB: 1793649787356, className: "bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 p-6", "data-fg-bte150": ":0:/src/app/components/ArchitectureOverview.tsx:70:15:3197:1467:e:Card:etxtetxte::::s:CuJ6:1", children: [
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte151", _fgB: 1793649787356, className: "flex items-start gap-3 mb-4", "data-fg-bte151": ":0:/src/app/components/ArchitectureOverview.tsx:71:17:3307:393:e:div:ete", children: [
              /* @__PURE__ */ t(e, { _fgT: La, _fgS: "bte152", _fgB: 1793649787356, className: "w-6 h-6 text-green-600 mt-1", "data-fg-bte152": ":0:node_modules/lucide-react:72:19:3371:54:e:FileSearch::::::Cct2" }),
              /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte153", _fgB: 1793649787356, "data-fg-bte153": ":0:/src/app/components/ArchitectureOverview.tsx:73:19:3444:233:e:div:ete", children: [
                /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte154", _fgB: 1793649787356, className: "text-green-900 mb-1", "data-fg-bte154": ":0:/src/app/components/ArchitectureOverview.tsx:74:21:3470:71:e:div:t", children: "Digital Twin Context Library" }),
                /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte156", _fgB: 1793649787356, className: "text-green-600 text-sm", "data-fg-bte156": ":0:/src/app/components/ArchitectureOverview.tsx:75:21:3562:90:e:div:t", children: "Functions for reading and assembling context" })
              ] })
            ] }),
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte159", _fgB: 1793649787356, className: "bg-white/60 rounded-lg p-4 mb-4", "data-fg-bte159": ":0:/src/app/components/ArchitectureOverview.tsx:80:17:3752:432:e:div:ete", children: [
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte160", _fgB: 1793649787356, className: "text-green-900 mb-2", "data-fg-bte160": ":0:/src/app/components/ArchitectureOverview.tsx:81:19:3820:60:e:div:t", children: "Library Functions" }),
              /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte162", _fgB: 1793649787356, className: "space-y-1 text-sm", "data-fg-bte162": ":0:/src/app/components/ArchitectureOverview.tsx:82:19:3899:262:e:div:etete", children: [
                /* @__PURE__ */ t(e, { _fgT: oe, _fgS: "bte163", _fgB: 1793649787356, name: "build_journey_context()", "data-fg-bte163": ":0:/src/app/components/ArchitectureOverview.tsx:83:21:3955:50:e:LibraryFunction::::::D1t0" }),
                /* @__PURE__ */ t(e, { _fgT: oe, _fgS: "bte164", _fgB: 1793649787356, name: "build_chat_context()", "data-fg-bte164": ":0:/src/app/components/ArchitectureOverview.tsx:84:21:4026:47:e:LibraryFunction::::::D1t0" }),
                /* @__PURE__ */ t(e, { _fgT: oe, _fgS: "bte165", _fgB: 1793649787356, name: "get_user_tags()", "data-fg-bte165": ":0:/src/app/components/ArchitectureOverview.tsx:85:21:4094:42:e:LibraryFunction::::::D1t0" })
              ] })
            ] }),
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte167", _fgB: 1793649787356, className: "bg-red-50 border-2 border-red-200 rounded-lg p-4", "data-fg-bte167": ":0:/src/app/components/ArchitectureOverview.tsx:90:17:4246:396:e:div:ete", children: [
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte168", _fgB: 1793649787356, className: "text-red-900 mb-2", "data-fg-bte168": ":0:/src/app/components/ArchitectureOverview.tsx:91:19:4331:50:e:div:t", children: "Does NOT:" }),
              /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte170", _fgB: 1793649787356, className: "space-y-1 text-sm text-red-700", "data-fg-bte170": ":0:/src/app/components/ArchitectureOverview.tsx:92:19:4400:219:e:div:etete", children: [
                /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte171", _fgB: 1793649787356, "data-fg-bte171": ":0:/src/app/components/ArchitectureOverview.tsx:93:21:4469:21:e:div:t", children: "• Call LLM" }),
                /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte173", _fgB: 1793649787356, "data-fg-bte173": ":0:/src/app/components/ArchitectureOverview.tsx:94:21:4511:29:e:div:t", children: "• Update twin data" }),
                /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte175", _fgB: 1793649787356, "data-fg-bte175": ":0:/src/app/components/ArchitectureOverview.tsx:95:21:4561:33:e:div:t", children: "• Create new summaries" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte178", _fgB: 1793649787356, className: "flex justify-center gap-32", "data-fg-bte178": ":0:/src/app/components/ArchitectureOverview.tsx:103:11:4743:559:e:div:ete", children: [
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte179", _fgB: 1793649787356, className: "flex flex-col items-center gap-2", "data-fg-bte179": ":0:/src/app/components/ArchitectureOverview.tsx:104:13:4800:195:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: dt, _fgS: "bte180", _fgB: 1793649787356, className: "w-8 h-8 text-blue-400", "data-fg-bte180": ":0:node_modules/lucide-react:105:15:4865:47:e:ArrowDown::::::DKqX" }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte181", _fgB: 1793649787356, className: "text-blue-600", "data-fg-bte181": ":0:/src/app/components/ArchitectureOverview.tsx:106:15:4927:49:e:div:t", children: "Read + Write" })
        ] }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte183", _fgB: 1793649787356, className: "flex flex-col items-center gap-2", "data-fg-bte183": ":0:/src/app/components/ArchitectureOverview.tsx:108:13:5008:277:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: dt, _fgS: "bte184", _fgB: 1793649787356, className: "w-8 h-8 text-green-400", "data-fg-bte184": ":0:node_modules/lucide-react:109:15:5073:48:e:ArrowDown::::::DKqX" }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte185", _fgB: 1793649787356, className: "text-green-600 text-center", "data-fg-bte185": ":0:/src/app/components/ArchitectureOverview.tsx:110:15:5136:130:e:div:tee", children: [
            "Read + Audit Writes",
            /* @__PURE__ */ t(e, { _fgT: "br", _fgS: "bte187", _fgB: 1793649787356, "data-fg-bte187": ":0:/src/app/components/ArchitectureOverview.tsx:110:78:5199:5:e:br" }),
            /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "bte188", _fgB: 1793649787356, className: "text-xs", "data-fg-bte188": ":0:/src/app/components/ArchitectureOverview.tsx:110:83:5204:56:e:span:t", children: "(context_snapshot only)" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte191", _fgB: 1793649787356, className: "flex justify-center", "data-fg-bte191": ":0:/src/app/components/ArchitectureOverview.tsx:115:11:5341:1055:e:div:e", children: /* @__PURE__ */ o(e, { _fgT: C, _fgS: "bte192", _fgB: 1793649787356, className: "w-full max-w-3xl bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-400 p-6", "data-fg-bte192": ":0:/src/app/components/ArchitectureOverview.tsx:116:13:5391:988:e:Card:ete::::s:CuJ6:1", children: [
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte193", _fgB: 1793649787356, className: "flex items-center gap-3 mb-6", "data-fg-bte193": ":0:/src/app/components/ArchitectureOverview.tsx:117:15:5517:348:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: kt, _fgS: "bte194", _fgB: 1793649787356, className: "w-6 h-6 text-slate-700", "data-fg-bte194": ":0:node_modules/lucide-react:118:17:5580:47:e:Database::::::D6M7" }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte195", _fgB: 1793649787356, "data-fg-bte195": ":0:/src/app/components/ArchitectureOverview.tsx:119:17:5644:200:e:div:ete", children: [
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte196", _fgB: 1793649787356, className: "text-slate-900", "data-fg-bte196": ":0:/src/app/components/ArchitectureOverview.tsx:120:19:5668:66:e:div:t", children: "Postgres + pgvector Database" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte198", _fgB: 1793649787356, className: "text-slate-600 text-sm", "data-fg-bte198": ":0:/src/app/components/ArchitectureOverview.tsx:121:19:5753:68:e:div:t", children: "Single source of truth" })
          ] })
        ] }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte1100", _fgB: 1793649787356, className: "grid grid-cols-2 gap-4", "data-fg-bte1100": ":0:/src/app/components/ArchitectureOverview.tsx:125:15:5881:478:e:div:etetete", children: [
          /* @__PURE__ */ t(e, { _fgT: $e, _fgS: "bte1101", _fgB: 1793649787356, name: "digital_twin_user", description: "Core twin: identity, persona, belief, summaries", "data-fg-bte1101": ":0:/src/app/components/ArchitectureOverview.tsx:126:17:5938:100:e:TableCard::::::bVf" }),
          /* @__PURE__ */ t(e, { _fgT: $e, _fgS: "bte1102", _fgB: 1793649787356, name: "user_tag", description: "Tag selections (8 categories, 168 options)", "data-fg-bte1102": ":0:/src/app/components/ArchitectureOverview.tsx:127:17:6055:86:e:TableCard::::::bVf" }),
          /* @__PURE__ */ t(e, { _fgT: $e, _fgS: "bte1103", _fgB: 1793649787356, name: "memory_entry", description: "Episodic memories with vector embeddings", "data-fg-bte1103": ":0:/src/app/components/ArchitectureOverview.tsx:128:17:6158:88:e:TableCard::::::bVf" }),
          /* @__PURE__ */ t(e, { _fgT: $e, _fgS: "bte1104", _fgB: 1793649787356, name: "context_snapshot", description: "LLM context audit trail", "data-fg-bte1104": ":0:/src/app/components/ArchitectureOverview.tsx:129:17:6263:75:e:TableCard::::::bVf" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ o(e, { _fgT: C, _fgS: "bte1106", _fgB: 1793649787356, className: "bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 p-6", "data-fg-bte1106": ":0:/src/app/components/ArchitectureOverview.tsx:137:7:6467:1169:e:Card:ete::::s:CuJ6:1", children: [
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte1107", _fgB: 1793649787356, className: "flex items-center gap-3 mb-4", "data-fg-bte1107": ":0:/src/app/components/ArchitectureOverview.tsx:138:9:6569:191:e:div:ete", children: [
        /* @__PURE__ */ t(e, { _fgT: go, _fgS: "bte1108", _fgB: 1793649787356, className: "w-6 h-6 text-amber-700", "data-fg-bte1108": ":0:node_modules/lucide-react:139:11:6626:43:e:Lock::::::D0Cv" }),
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte1109", _fgB: 1793649787356, className: "text-amber-900", "data-fg-bte1109": ":0:/src/app/components/ArchitectureOverview.tsx:140:11:6680:65:e:div:t", children: "🔒 Core Architectural Rules" })
      ] }),
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte1111", _fgB: 1793649787356, className: "grid grid-cols-3 gap-6", "data-fg-bte1111": ":0:/src/app/components/ArchitectureOverview.tsx:142:9:6769:853:e:div:etete", children: [
        /* @__PURE__ */ t(
          e,
          {
            _fgT: lt,
            _fgS: "bte1112",
            _fgB: 1793649787356,
            title: "Database Access",
            rules: [
              "Only Twin Library Functions access database",
              "No other services access DB directly",
              "Journey/Chat engines call library functions"
            ],
            "data-fg-bte1112": ":0:/src/app/components/ArchitectureOverview.tsx:143:11:6820:270:e:RuleCard::::::BRVX"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: lt,
            _fgS: "bte1113",
            _fgB: 1793649787356,
            title: "LLM Calls",
            rules: [
              "Only Ingestion Library calls LLM",
              "Only via Twin Summarization Helper",
              'Context Library does zero "thinking"'
            ],
            "data-fg-bte1113": ":0:/src/app/components/ArchitectureOverview.tsx:151:11:7101:244:e:RuleCard::::::BRVX"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: lt,
            _fgS: "bte1114",
            _fgB: 1793649787356,
            title: "Write Operations",
            rules: [
              "Ingestion Library owns ALL writes",
              "Context Library is read-only",
              "Only writes to context_snapshot for audit"
            ],
            "data-fg-bte1114": ":0:/src/app/components/ArchitectureOverview.tsx:159:11:7356:251:e:RuleCard::::::BRVX"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o(e, { _fgT: C, _fgS: "bte1116", _fgB: 1793649787356, className: "p-6", "data-fg-bte1116": ":0:/src/app/components/ArchitectureOverview.tsx:171:7:7673:1505:e:Card:ete::::s:CuJ6:1", children: [
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte1117", _fgB: 1793649787356, className: "text-slate-900 mb-6", "data-fg-bte1117": ":0:/src/app/components/ArchitectureOverview.tsx:172:9:7704:67:e:div:t", children: "Library Function Callers" }),
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte1119", _fgB: 1793649787356, className: "grid grid-cols-2 gap-6", "data-fg-bte1119": ":0:/src/app/components/ArchitectureOverview.tsx:173:9:7780:1384:e:div:xtetxte", children: [
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte1121", _fgB: 1793649787356, className: "bg-blue-50 rounded-lg border-2 border-blue-200 p-4", "data-fg-bte1121": ":0:/src/app/components/ArchitectureOverview.tsx:175:11:7875:582:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte1122", _fgB: 1793649787356, className: "text-blue-900 mb-4", "data-fg-bte1122": ":0:/src/app/components/ArchitectureOverview.tsx:176:13:7956:79:e:div:t", children: "Who Calls Ingestion Library Functions" }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte1124", _fgB: 1793649787356, className: "space-y-3", "data-fg-bte1124": ":0:/src/app/components/ArchitectureOverview.tsx:177:13:8048:392:e:div:ete", children: [
            /* @__PURE__ */ t(
              e,
              {
                _fgT: Be,
                _fgS: "bte1125",
                _fgB: 1793649787356,
                caller: "UI Backend",
                functions: ["ingest_day0_tags()", "ingest_day0_intro_answers()", "ingest_mood_checkin()"],
                "data-fg-bte1125": ":0:/src/app/components/ArchitectureOverview.tsx:178:15:8090:171:e:CallerCard::::::qvu"
              }
            ),
            /* @__PURE__ */ t(
              e,
              {
                _fgT: Be,
                _fgS: "bte1126",
                _fgB: 1793649787356,
                caller: "Temporal",
                functions: ["ingest_journey_reflections()", "ingest_chat_turn()"],
                "data-fg-bte1126": ":0:/src/app/components/ArchitectureOverview.tsx:182:15:8276:145:e:CallerCard::::::qvu"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte1128", _fgB: 1793649787356, className: "bg-green-50 rounded-lg border-2 border-green-200 p-4", "data-fg-bte1128": ":0:/src/app/components/ArchitectureOverview.tsx:190:11:8511:638:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte1129", _fgB: 1793649787356, className: "text-green-900 mb-4", "data-fg-bte1129": ":0:/src/app/components/ArchitectureOverview.tsx:191:13:8594:78:e:div:t", children: "Who Calls Context Library Functions" }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte1131", _fgB: 1793649787356, className: "space-y-3", "data-fg-bte1131": ":0:/src/app/components/ArchitectureOverview.tsx:192:13:8685:447:e:div:etete", children: [
            /* @__PURE__ */ t(
              e,
              {
                _fgT: Be,
                _fgS: "bte1132",
                _fgB: 1793649787356,
                caller: "UI Backend",
                functions: ["get_user_tags()"],
                "data-fg-bte1132": ":0:/src/app/components/ArchitectureOverview.tsx:193:15:8727:112:e:CallerCard::::::qvu"
              }
            ),
            /* @__PURE__ */ t(
              e,
              {
                _fgT: Be,
                _fgS: "bte1133",
                _fgB: 1793649787356,
                caller: "Journey Engine",
                functions: ["build_journey_context()"],
                "data-fg-bte1133": ":0:/src/app/components/ArchitectureOverview.tsx:197:15:8854:124:e:CallerCard::::::qvu"
              }
            ),
            /* @__PURE__ */ t(
              e,
              {
                _fgT: Be,
                _fgS: "bte1134",
                _fgB: 1793649787356,
                caller: "Personal Chat",
                functions: ["build_chat_context()"],
                "data-fg-bte1134": ":0:/src/app/components/ArchitectureOverview.tsx:201:15:8993:120:e:CallerCard::::::qvu"
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}
function ft({ title: a, color: s }) {
  return /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte1135", _fgB: 1793649787356, _fgD: !0, className: `px-6 py-3 rounded-lg border-2 ${{
    purple: "bg-purple-100 border-purple-300 text-purple-700"
  }[s]}`, "data-fg-bte1135": ":0:/src/app/components/ArchitectureOverview.tsx:218:5:9374:114:e:div:x:1", children: a });
}
function oe({ name: a }) {
  return /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte1137", _fgB: 1793649787356, _fgD: !0, className: "flex items-center gap-2", "data-fg-bte1137": ":0:/src/app/components/ArchitectureOverview.tsx:226:5:9567:167:e:div:e:1", children: /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "bte1138", _fgB: 1793649787356, className: "bg-blue-500 text-white px-2 py-0.5 rounded text-xs font-mono", "data-fg-bte1138": ":0:/src/app/components/ArchitectureOverview.tsx:227:7:9615:108:e:span:x", children: a }) });
}
function $e({ name: a, description: s }) {
  return /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte1140", _fgB: 1793649787356, _fgD: !0, className: "bg-white rounded-lg border border-slate-300 p-4", "data-fg-bte1140": ":0:/src/app/components/ArchitectureOverview.tsx:236:5:9841:198:e:div:ete:1", children: [
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte1141", _fgB: 1793649787356, className: "text-slate-900 mb-1", "data-fg-bte1141": ":0:/src/app/components/ArchitectureOverview.tsx:237:7:9913:49:e:div:x", children: a }),
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte1143", _fgB: 1793649787356, className: "text-slate-600 text-sm", "data-fg-bte1143": ":0:/src/app/components/ArchitectureOverview.tsx:238:7:9969:59:e:div:x", children: s })
  ] });
}
function lt({ title: a, rules: s }) {
  return /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte1145", _fgB: 1793649787356, _fgD: !0, className: "bg-white rounded-lg border border-amber-300 p-4", "data-fg-bte1145": ":0:/src/app/components/ArchitectureOverview.tsx:245:5:10137:422:e:div:ete:1", children: [
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte1146", _fgB: 1793649787356, className: "text-amber-900 mb-3", "data-fg-bte1146": ":0:/src/app/components/ArchitectureOverview.tsx:246:7:10209:50:e:div:x", children: a }),
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte1148", _fgB: 1793649787356, className: "space-y-2", "data-fg-bte1148": ":0:/src/app/components/ArchitectureOverview.tsx:247:7:10266:282:e:div:x", children: s.map((r, n) => /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte1150", _fgB: 1793649787356, className: "text-amber-700 text-sm flex items-start gap-2", "data-fg-bte1150": ":0:/src/app/components/ArchitectureOverview.tsx:249:11:10340:183:e:div:ete", children: [
      /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "bte1151", _fgB: 1793649787356, className: "text-amber-500 mt-0.5", "data-fg-bte1151": ":0:/src/app/components/ArchitectureOverview.tsx:250:13:10426:48:e:span:t", children: "✓" }),
      /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "bte1153", _fgB: 1793649787356, "data-fg-bte1153": ":0:/src/app/components/ArchitectureOverview.tsx:251:13:10487:19:e:span:x", children: r })
    ] }, n)) })
  ] });
}
function Be({ caller: a, functions: s }) {
  return /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte1168", _fgB: 1793649787356, _fgD: !0, className: "bg-slate-50 rounded-lg border border-slate-300 p-4", "data-fg-bte1168": ":0:/src/app/components/ArchitectureOverview.tsx:279:5:11349:430:e:div:ete:1", children: [
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte1169", _fgB: 1793649787356, className: "text-slate-900 mb-4", "data-fg-bte1169": ":0:/src/app/components/ArchitectureOverview.tsx:280:7:11424:51:e:div:x", children: a }),
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "bte1171", _fgB: 1793649787356, className: "space-y-2", "data-fg-bte1171": ":0:/src/app/components/ArchitectureOverview.tsx:281:7:11482:286:e:div:x", children: s.map((r, n) => /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "bte1173", _fgB: 1793649787356, className: "text-slate-600 text-sm flex items-start gap-2", "data-fg-bte1173": ":0:/src/app/components/ArchitectureOverview.tsx:283:11:11560:183:e:div:ete", children: [
      /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "bte1174", _fgB: 1793649787356, className: "text-slate-500 mt-0.5", "data-fg-bte1174": ":0:/src/app/components/ArchitectureOverview.tsx:284:13:11646:48:e:span:t", children: "✓" }),
      /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "bte1176", _fgB: 1793649787356, "data-fg-bte1176": ":0:/src/app/components/ArchitectureOverview.tsx:285:13:11707:19:e:span:x", children: r })
    ] }, n)) })
  ] });
}
var Et = "Collapsible", [vo, Ma] = Fe(Et), [wo, At] = vo(Et), za = L(
  (a, s) => {
    const {
      __scopeCollapsible: r,
      open: n,
      defaultOpen: i,
      disabled: g,
      onOpenChange: d,
      ...l
    } = a, [f = !1, p] = je({
      prop: n,
      defaultProp: i,
      onChange: d
    });
    return /* @__PURE__ */ t(
      wo,
      {
        scope: r,
        disabled: g,
        contentId: et(),
        open: f,
        onOpenToggle: te(() => p((u) => !u), [p]),
        children: /* @__PURE__ */ t(
          K.div,
          {
            "data-state": jt(f),
            "data-disabled": g ? "" : void 0,
            ...l,
            ref: s
          }
        )
      }
    );
  }
);
za.displayName = Et;
var Ua = "CollapsibleTrigger", Ga = L(
  (a, s) => {
    const { __scopeCollapsible: r, ...n } = a, i = At(Ua, r);
    return /* @__PURE__ */ t(
      K.button,
      {
        type: "button",
        "aria-controls": i.contentId,
        "aria-expanded": i.open || !1,
        "data-state": jt(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        disabled: i.disabled,
        ...n,
        ref: s,
        onClick: H(a.onClick, i.onOpenToggle)
      }
    );
  }
);
Ga.displayName = Ua;
var Ft = "CollapsibleContent", Ja = L(
  (a, s) => {
    const { forceMount: r, ...n } = a, i = At(Ft, a.__scopeCollapsible);
    return /* @__PURE__ */ t(yt, { present: r || i.open, children: ({ present: g }) => /* @__PURE__ */ t(So, { ...n, ref: s, present: g }) });
  }
);
Ja.displayName = Ft;
var So = L((a, s) => {
  const { __scopeCollapsible: r, present: n, children: i, ...g } = a, d = At(Ft, r), [l, f] = pe(n), p = U(null), u = be(s, p), b = U(0), B = b.current, T = U(0), x = T.current, S = d.open || l, N = U(S), D = U(void 0);
  return ge(() => {
    const w = requestAnimationFrame(() => N.current = !1);
    return () => cancelAnimationFrame(w);
  }, []), Qe(() => {
    const w = p.current;
    if (w) {
      D.current = D.current || {
        transitionDuration: w.style.transitionDuration,
        animationName: w.style.animationName
      }, w.style.transitionDuration = "0s", w.style.animationName = "none";
      const F = w.getBoundingClientRect();
      b.current = F.height, T.current = F.width, N.current || (w.style.transitionDuration = D.current.transitionDuration, w.style.animationName = D.current.animationName), f(n);
    }
  }, [d.open, n]), /* @__PURE__ */ t(
    K.div,
    {
      "data-state": jt(d.open),
      "data-disabled": d.disabled ? "" : void 0,
      id: d.contentId,
      hidden: !S,
      ...g,
      ref: u,
      style: {
        "--radix-collapsible-content-height": B ? `${B}px` : void 0,
        "--radix-collapsible-content-width": x ? `${x}px` : void 0,
        ...a.style
      },
      children: S && i
    }
  );
});
function jt(a) {
  return a ? "open" : "closed";
}
var yo = za, To = Ga, Bo = Ja, ae = "Accordion", Do = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Pt, No, Co] = ca(ae), [at] = Fe(ae, [
  Co,
  Ma
]), It = Ma(), $a = E.forwardRef(
  (a, s) => {
    const { type: r, ...n } = a, i = n, g = n;
    return /* @__PURE__ */ t(Pt.Provider, { scope: a.__scopeAccordion, children: r === "multiple" ? /* @__PURE__ */ t(Fo, { ...g, ref: s }) : /* @__PURE__ */ t(Ao, { ...i, ref: s }) });
  }
);
$a.displayName = ae;
var [Va, ko] = at(ae), [qa, Eo] = at(
  ae,
  { collapsible: !1 }
), Ao = E.forwardRef(
  (a, s) => {
    const {
      value: r,
      defaultValue: n,
      onValueChange: i = () => {
      },
      collapsible: g = !1,
      ...d
    } = a, [l, f] = je({
      prop: r,
      defaultProp: n,
      onChange: i
    });
    return /* @__PURE__ */ t(
      Va,
      {
        scope: a.__scopeAccordion,
        value: l ? [l] : [],
        onItemOpen: f,
        onItemClose: E.useCallback(() => g && f(""), [g, f]),
        children: /* @__PURE__ */ t(qa, { scope: a.__scopeAccordion, collapsible: g, children: /* @__PURE__ */ t(Ha, { ...d, ref: s }) })
      }
    );
  }
), Fo = E.forwardRef((a, s) => {
  const {
    value: r,
    defaultValue: n,
    onValueChange: i = () => {
    },
    ...g
  } = a, [d = [], l] = je({
    prop: r,
    defaultProp: n,
    onChange: i
  }), f = E.useCallback(
    (u) => l((b = []) => [...b, u]),
    [l]
  ), p = E.useCallback(
    (u) => l((b = []) => b.filter((B) => B !== u)),
    [l]
  );
  return /* @__PURE__ */ t(
    Va,
    {
      scope: a.__scopeAccordion,
      value: d,
      onItemOpen: f,
      onItemClose: p,
      children: /* @__PURE__ */ t(qa, { scope: a.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ t(Ha, { ...g, ref: s }) })
    }
  );
}), [jo, st] = at(ae), Ha = E.forwardRef(
  (a, s) => {
    const { __scopeAccordion: r, disabled: n, dir: i, orientation: g = "vertical", ...d } = a, l = E.useRef(null), f = be(l, s), p = No(r), b = St(i) === "ltr", B = H(a.onKeyDown, (T) => {
      if (!Do.includes(T.key)) return;
      const x = T.target, S = p().filter((h) => !h.ref.current?.disabled), N = S.findIndex((h) => h.ref.current === x), D = S.length;
      if (N === -1) return;
      T.preventDefault();
      let w = N;
      const F = 0, I = D - 1, O = () => {
        w = N + 1, w > I && (w = F);
      }, G = () => {
        w = N - 1, w < F && (w = I);
      };
      switch (T.key) {
        case "Home":
          w = F;
          break;
        case "End":
          w = I;
          break;
        case "ArrowRight":
          g === "horizontal" && (b ? O() : G());
          break;
        case "ArrowDown":
          g === "vertical" && O();
          break;
        case "ArrowLeft":
          g === "horizontal" && (b ? G() : O());
          break;
        case "ArrowUp":
          g === "vertical" && G();
          break;
      }
      const W = w % D;
      S[W].ref.current?.focus();
    });
    return /* @__PURE__ */ t(
      jo,
      {
        scope: r,
        disabled: n,
        direction: i,
        orientation: g,
        children: /* @__PURE__ */ t(Pt.Slot, { scope: r, children: /* @__PURE__ */ t(
          K.div,
          {
            ...d,
            "data-orientation": g,
            ref: f,
            onKeyDown: n ? void 0 : B
          }
        ) })
      }
    );
  }
), Ye = "AccordionItem", [Po, Rt] = at(Ye), Ka = E.forwardRef(
  (a, s) => {
    const { __scopeAccordion: r, value: n, ...i } = a, g = st(Ye, r), d = ko(Ye, r), l = It(r), f = et(), p = n && d.value.includes(n) || !1, u = g.disabled || a.disabled;
    return /* @__PURE__ */ t(
      Po,
      {
        scope: r,
        open: p,
        disabled: u,
        triggerId: f,
        children: /* @__PURE__ */ t(
          yo,
          {
            "data-orientation": g.orientation,
            "data-state": es(p),
            ...l,
            ...i,
            ref: s,
            disabled: u,
            open: p,
            onOpenChange: (b) => {
              b ? d.onItemOpen(n) : d.onItemClose(n);
            }
          }
        )
      }
    );
  }
);
Ka.displayName = Ye;
var Wa = "AccordionHeader", Za = E.forwardRef(
  (a, s) => {
    const { __scopeAccordion: r, ...n } = a, i = st(ae, r), g = Rt(Wa, r);
    return /* @__PURE__ */ t(
      K.h3,
      {
        "data-orientation": i.orientation,
        "data-state": es(g.open),
        "data-disabled": g.disabled ? "" : void 0,
        ...n,
        ref: s
      }
    );
  }
);
Za.displayName = Wa;
var xt = "AccordionTrigger", Xa = E.forwardRef(
  (a, s) => {
    const { __scopeAccordion: r, ...n } = a, i = st(ae, r), g = Rt(xt, r), d = Eo(xt, r), l = It(r);
    return /* @__PURE__ */ t(Pt.ItemSlot, { scope: r, children: /* @__PURE__ */ t(
      To,
      {
        "aria-disabled": g.open && !d.collapsible || void 0,
        "data-orientation": i.orientation,
        id: g.triggerId,
        ...l,
        ...n,
        ref: s
      }
    ) });
  }
);
Xa.displayName = xt;
var Qa = "AccordionContent", Ya = E.forwardRef(
  (a, s) => {
    const { __scopeAccordion: r, ...n } = a, i = st(ae, r), g = Rt(Qa, r), d = It(r);
    return /* @__PURE__ */ t(
      Bo,
      {
        role: "region",
        "aria-labelledby": g.triggerId,
        "data-orientation": i.orientation,
        ...d,
        ...n,
        ref: s,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...a.style
        }
      }
    );
  }
);
Ya.displayName = Qa;
function es(a) {
  return a ? "open" : "closed";
}
var Io = $a, Ro = Ka, Lo = Za, Oo = Xa, Mo = Ya;
function zo({
  ...a
}) {
  return /* @__PURE__ */ t(e, { _fgT: Io, _fgS: "drh40", _fgB: 1793649789408, _fgD: !0, "data-slot": "accordion", ...a, "data-fg-drh40": ":0:/src/app/components/ui/accordion.tsx:12:10:306:60:e:AccordionPrimitive.Root::1" });
}
function Ve({
  className: a,
  ...s
}) {
  return /* @__PURE__ */ t(
    e,
    {
      _fgT: Ro,
      _fgS: "drh41",
      _fgB: 1793649789408,
      _fgD: !0,
      "data-slot": "accordion-item",
      className: de("border-b last:border-b-0", a),
      ...s,
      "data-fg-drh41": ":0:/src/app/components/ui/accordion.tsx:20:5:494:141:e:AccordionPrimitive.Item::1"
    }
  );
}
function qe({
  className: a,
  children: s,
  ...r
}) {
  return /* @__PURE__ */ t(e, { _fgT: Lo, _fgS: "drh42", _fgB: 1793649789408, _fgD: !0, className: "flex", "data-fg-drh42": ":0:/src/app/components/ui/accordion.tsx:34:5:785:746:e:AccordionPrimitive.Header:e:1", children: /* @__PURE__ */ o(
    e,
    {
      _fgT: Oo,
      _fgS: "drh43",
      _fgB: 1793649789408,
      "data-slot": "accordion-trigger",
      className: de(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        a
      ),
      ...r,
      "data-fg-drh43": ":0:/src/app/components/ui/accordion.tsx:35:7:836:662:e:AccordionPrimitive.Trigger:cte",
      children: [
        s,
        /* @__PURE__ */ t(e, { _fgT: Hr, _fgS: "drh45", _fgB: 1793649789408, className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200", "data-fg-drh45": ":0:node_modules/lucide-react@0.487.0:44:9:1323:139:e:ChevronDownIcon::::::EEbZ" })
      ]
    }
  ) });
}
function He({
  className: a,
  children: s,
  ...r
}) {
  return /* @__PURE__ */ t(
    e,
    {
      _fgT: Mo,
      _fgS: "drh46",
      _fgB: 1793649789408,
      _fgD: !0,
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...r,
      "data-fg-drh46": ":0:/src/app/components/ui/accordion.tsx:56:5:1681:311:e:AccordionPrimitive.Content:e:1",
      children: /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "drh47", _fgB: 1793649789408, className: de("pt-0 pb-4", a), "data-fg-drh47": ":0:/src/app/components/ui/accordion.tsx:61:7:1898:60:e:div:c", children: s })
    }
  );
}
function Uo() {
  return /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof0", _fgB: 1793649787391, _fgD: !0, className: "space-y-6", "data-fg-wof0": ":0:/src/app/components/DatabaseSchema.tsx:8:5:289:34750:e:div:xtetxtetxtetxte:1", children: [
    /* @__PURE__ */ o(e, { _fgT: C, _fgS: "wof2", _fgB: 1793649787391, className: "p-6 bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-300", "data-fg-wof2": ":0:/src/app/components/DatabaseSchema.tsx:10:7:346:813:e:Card:ete::::s:CuJ6:1", children: [
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof3", _fgB: 1793649787391, className: "flex items-center gap-3 mb-4", "data-fg-wof3": ":0:/src/app/components/DatabaseSchema.tsx:11:9:448:192:e:div:ete", children: [
        /* @__PURE__ */ t(e, { _fgT: kt, _fgS: "wof4", _fgB: 1793649787391, className: "w-6 h-6 text-slate-700", "data-fg-wof4": ":0:node_modules/lucide-react:12:11:505:47:e:Database::::::D6M7" }),
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof5", _fgB: 1793649787391, className: "text-slate-900", "data-fg-wof5": ":0:/src/app/components/DatabaseSchema.tsx:13:11:563:62:e:div:t", children: "Database Schema Overview" })
      ] }),
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof7", _fgB: 1793649787391, className: "grid grid-cols-4 gap-4", "data-fg-wof7": ":0:/src/app/components/DatabaseSchema.tsx:15:9:649:496:e:div:etetete", children: [
        /* @__PURE__ */ t(e, { _fgT: Ke, _fgS: "wof8", _fgB: 1793649787391, icon: /* @__PURE__ */ t(e, { _fgT: Qt, _fgS: "wof9", _fgB: 1793649787391, "data-fg-wof9": ":0:node_modules/lucide-react:16:37:726:7:e:Key::::::ELGn" }), table: "digital_twin_user", records: "1 per user", color: "blue", "data-fg-wof8": ":0:/src/app/components/DatabaseSchema.tsx:16:11:700:97:e:SchemaOverviewCard::::::BopR" }),
        /* @__PURE__ */ t(e, { _fgT: Ke, _fgS: "wof10", _fgB: 1793649787391, icon: /* @__PURE__ */ t(e, { _fgT: Yt, _fgS: "wof11", _fgB: 1793649787391, "data-fg-wof11": ":0:node_modules/lucide-react:17:37:834:7:e:Tag::::::BKy" }), table: "user_tag", records: "~10-20 per user", color: "green", "data-fg-wof10": ":0:/src/app/components/DatabaseSchema.tsx:17:11:808:94:e:SchemaOverviewCard::::::BopR" }),
        /* @__PURE__ */ t(e, { _fgT: Ke, _fgS: "wof12", _fgB: 1793649787391, icon: /* @__PURE__ */ t(e, { _fgT: Xt, _fgS: "wof13", _fgB: 1793649787391, "data-fg-wof13": ":0:node_modules/lucide-react:18:37:939:12:e:FileText::::::B1i5" }), table: "memory_entry", records: "100s per user", color: "purple", "data-fg-wof12": ":0:/src/app/components/DatabaseSchema.tsx:18:11:913:102:e:SchemaOverviewCard::::::BopR" }),
        /* @__PURE__ */ t(e, { _fgT: Ke, _fgS: "wof14", _fgB: 1793649787391, icon: /* @__PURE__ */ t(e, { _fgT: Zt, _fgS: "wof15", _fgB: 1793649787391, "data-fg-wof15": ":0:node_modules/lucide-react:19:37:1052:10:e:Camera::::::Ps5" }), table: "context_snapshot", records: "Every LLM call", color: "amber", "data-fg-wof14": ":0:/src/app/components/DatabaseSchema.tsx:19:11:1026:104:e:SchemaOverviewCard::::::BopR" })
      ] })
    ] }),
    /* @__PURE__ */ o(e, { _fgT: zo, _fgS: "wof17", _fgB: 1793649787391, type: "single", collapsible: !0, defaultValue: "digital_twin_user", className: "space-y-4", "data-fg-wof17": ":0:/src/app/components/DatabaseSchema.tsx:24:7:1198:17694:e:Accordion:xtetxtetxtetxte::::s:DTEA:1", children: [
      /* @__PURE__ */ o(e, { _fgT: Ve, _fgS: "wof19", _fgB: 1793649787391, value: "digital_twin_user", className: "border-2 border-blue-300 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100", "data-fg-wof19": ":0:/src/app/components/DatabaseSchema.tsx:26:9:1333:6268:e:AccordionItem:ete::::s:BatZ:1", children: [
        /* @__PURE__ */ t(e, { _fgT: qe, _fgS: "wof20", _fgB: 1793649787391, className: "px-6 hover:no-underline", "data-fg-wof20": ":0:/src/app/components/DatabaseSchema.tsx:27:11:1476:382:e:AccordionTrigger:e::::s:532:1", children: /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof21", _fgB: 1793649787391, className: "flex items-center gap-3", "data-fg-wof21": ":0:/src/app/components/DatabaseSchema.tsx:28:13:1543:285:e:div:etete", children: [
          /* @__PURE__ */ t(e, { _fgT: Qt, _fgS: "wof22", _fgB: 1793649787391, className: "w-5 h-5 text-blue-600", "data-fg-wof22": ":0:node_modules/lucide-react:29:15:1599:41:e:Key::::::ELGn" }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof23", _fgB: 1793649787391, className: "text-blue-900", "data-fg-wof23": ":0:/src/app/components/DatabaseSchema.tsx:30:15:1655:54:e:div:t", children: "digital_twin_user" }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof25", _fgB: 1793649787391, className: "text-blue-600 text-sm ml-4", "data-fg-wof25": ":0:/src/app/components/DatabaseSchema.tsx:31:15:1724:85:e:div:t", children: "The core twin record - one per user" })
        ] }) }),
        /* @__PURE__ */ t(e, { _fgT: He, _fgS: "wof27", _fgB: 1793649787391, className: "px-6 pb-6", "data-fg-wof27": ":0:/src/app/components/DatabaseSchema.tsx:34:11:1869:5707:e:AccordionContent:e::::s:DPyt:1", children: /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof28", _fgB: 1793649787391, className: "space-y-6", "data-fg-wof28": ":0:/src/app/components/DatabaseSchema.tsx:35:13:1922:5624:e:div:etetetetetetetetetetete", children: [
          /* @__PURE__ */ t(
            e,
            {
              _fgT: $,
              _fgS: "wof29",
              _fgB: 1793649787391,
              title: "Primary Key",
              fields: [
                { name: "user_id", type: "uuid", notes: "Primary key" }
              ],
              "data-fg-wof29": ":0:/src/app/components/DatabaseSchema.tsx:36:15:1964:184:e:FieldGroup::::::8ZU"
            }
          ),
          /* @__PURE__ */ t(
            e,
            {
              _fgT: $,
              _fgS: "wof30",
              _fgB: 1793649787391,
              title: "Identity Fields",
              fields: [
                { name: "age_range", type: "text", notes: 'e.g., "25-34"' },
                { name: "relationship_status", type: "text", notes: 'e.g., "single", "married"' },
                { name: "living_situation", type: "text", notes: 'e.g., "alone", "with_family"' },
                { name: "family_description_text", type: "text", notes: "LLM-generated narrative" },
                { name: "work_context_text", type: "text", notes: "LLM-generated work summary" }
              ],
              "data-fg-wof30": ":0:/src/app/components/DatabaseSchema.tsx:43:15:2178:597:e:FieldGroup::::::8ZU"
            }
          ),
          /* @__PURE__ */ t(
            e,
            {
              _fgT: $,
              _fgS: "wof31",
              _fgB: 1793649787391,
              title: "Persona & Learning",
              fields: [
                { name: "persona_profile", type: "jsonb", notes: "Classification: explorer, achiever, etc." },
                { name: "learning_style_probabilities", type: "jsonb", notes: "Probability distribution across styles" }
              ],
              "data-fg-wof31": ":0:/src/app/components/DatabaseSchema.tsx:54:15:2791:353:e:FieldGroup::::::8ZU"
            }
          ),
          /* @__PURE__ */ t(
            e,
            {
              _fgT: $,
              _fgS: "wof32",
              _fgB: 1793649787391,
              title: "Belief & Values",
              fields: [
                { name: "belief_profile", type: "jsonb", notes: "Core beliefs and values structure" }
              ],
              "data-fg-wof32": ":0:/src/app/components/DatabaseSchema.tsx:62:15:3160:218:e:FieldGroup::::::8ZU"
            }
          ),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof33", _fgB: 1793649787391, className: "bg-purple-100 border border-purple-200 rounded-lg p-3 ml-4", "data-fg-wof33": ":0:/src/app/components/DatabaseSchema.tsx:69:15:3394:521:e:div:ete", children: [
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof34", _fgB: 1793649787391, className: "text-purple-900 text-sm mb-2", "data-fg-wof34": ":0:/src/app/components/DatabaseSchema.tsx:70:17:3487:75:e:div:t", children: "Example belief_profile:" }),
            /* @__PURE__ */ t(e, { _fgT: "pre", _fgS: "wof36", _fgB: 1793649787391, className: "text-xs text-purple-800 font-mono overflow-x-auto", "data-fg-wof36": ":0:/src/app/components/DatabaseSchema.tsx:71:17:3579:315:e:pre:s", children: `{
  "orientation": "spiritual_not_religious",
  "religion": "hindu",
  "religion_detail": "vedanta",
  "openness_to_other_religions": 4,
  "practice_frequency": "weekly",
  "notes": "comfortable exploring other faiths"
}` })
          ] }),
          /* @__PURE__ */ t(
            e,
            {
              _fgT: $,
              _fgS: "wof38",
              _fgB: 1793649787391,
              title: "Tag System",
              fields: [
                { name: "tags_by_type_snapshot", type: "jsonb", notes: "Current tag state grouped by category" },
                { name: "tag_profile_summary_text", type: "text", notes: "LLM narrative of tag profile" },
                { name: "main_challenge_primary_tag", type: "text", notes: "Key challenge tag" },
                { name: "motivation_primary_tag", type: "text", notes: "Primary motivation tag" },
                { name: "growth_focus_primary_tag", type: "text", notes: "Growth area tag" }
              ],
              "data-fg-wof38": ":0:/src/app/components/DatabaseSchema.tsx:83:15:3931:630:e:FieldGroup::::::8ZU"
            }
          ),
          /* @__PURE__ */ t(
            e,
            {
              _fgT: $,
              _fgS: "wof39",
              _fgB: 1793649787391,
              title: "Journey State",
              fields: [
                { name: "current_journey_key", type: "text", notes: 'e.g., "foundation", "relationships"' },
                { name: "current_day_number", type: "int", notes: "1-based day in journey" },
                { name: "journey_day_streak_days", type: "int", notes: "Consecutive days completed" }
              ],
              "data-fg-wof39": ":0:/src/app/components/DatabaseSchema.tsx:94:15:4577:423:e:FieldGroup::::::8ZU"
            }
          ),
          /* @__PURE__ */ t(
            e,
            {
              _fgT: $,
              _fgS: "wof40",
              _fgB: 1793649787391,
              title: "Pillar Levels",
              fields: [
                { name: "p1_level", type: "text", notes: "Pillar 1: beginner/intermediate/advanced" },
                { name: "p2_level", type: "text", notes: "Pillar 2: beginner/intermediate/advanced" },
                { name: "p3_level", type: "text", notes: "Pillar 3: beginner/intermediate/advanced" },
                { name: "p4_level", type: "text", notes: "Pillar 4: beginner/intermediate/advanced" }
              ],
              "data-fg-wof40": ":0:/src/app/components/DatabaseSchema.tsx:103:15:5016:531:e:FieldGroup::::::8ZU"
            }
          ),
          /* @__PURE__ */ t(
            e,
            {
              _fgT: $,
              _fgS: "wof41",
              _fgB: 1793649787391,
              title: "Day 0 Narratives",
              fields: [
                { name: "intake_story_text", type: "text", notes: "Summary of intake answers" },
                { name: "motivation_reason_text", type: "text", notes: "Why they joined" },
                { name: "daily_rhythm_summary", type: "text", notes: "Daily routine summary" },
                { name: "main_challenge_text", type: "text", notes: "Main challenge description" }
              ],
              "data-fg-wof41": ":0:/src/app/components/DatabaseSchema.tsx:113:15:5563:507:e:FieldGroup::::::8ZU"
            }
          ),
          /* @__PURE__ */ t(
            e,
            {
              _fgT: $,
              _fgS: "wof42",
              _fgB: 1793649787391,
              title: "Dynamic Summaries (Refreshed)",
              fields: [
                { name: "digital_twin_summary_text", type: "text", notes: "Overall twin summary" },
                { name: "recent_events_summary_text", type: "text", notes: "Recent activity summary" },
                { name: "emotional_state_summary_text", type: "text", notes: "Current emotional state" },
                { name: "pillar_progress_summary_text", type: "text", notes: "Progress across pillars" }
              ],
              "data-fg-wof42": ":0:/src/app/components/DatabaseSchema.tsx:123:15:6086:551:e:FieldGroup::::::8ZU"
            }
          ),
          /* @__PURE__ */ t(
            e,
            {
              _fgT: $,
              _fgS: "wof43",
              _fgB: 1793649787391,
              title: "Current State",
              fields: [
                { name: "mood_today_code", type: "text", notes: "Today's mood: happy, sad, anxious, etc." }
              ],
              "data-fg-wof43": ":0:/src/app/components/DatabaseSchema.tsx:133:15:6653:223:e:FieldGroup::::::8ZU"
            }
          ),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof44", _fgB: 1793649787391, className: "bg-blue-100 border border-blue-300 rounded-lg p-4 mt-6", "data-fg-wof44": ":0:/src/app/components/DatabaseSchema.tsx:140:15:6892:635:e:div:ete", children: [
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof45", _fgB: 1793649787391, className: "text-blue-900 mb-2", "data-fg-wof45": ":0:/src/app/components/DatabaseSchema.tsx:141:17:6981:65:e:div:t", children: "💡 Implementation Notes" }),
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof47", _fgB: 1793649787391, className: "space-y-2 text-sm text-blue-800", "data-fg-wof47": ":0:/src/app/components/DatabaseSchema.tsx:142:17:7063:443:e:div:etetete", children: [
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof48", _fgB: 1793649787391, "data-fg-wof48": ":0:/src/app/components/DatabaseSchema.tsx:143:19:7131:77:e:div:t", children: "• Single record per user - always UPDATE, never INSERT after Day 0" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof50", _fgB: 1793649787391, "data-fg-wof50": ":0:/src/app/components/DatabaseSchema.tsx:144:19:7227:77:e:div:t", children: "• All _text fields are LLM-generated via Twin Summarization Helper" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof52", _fgB: 1793649787391, "data-fg-wof52": ":0:/src/app/components/DatabaseSchema.tsx:145:19:7323:65:e:div:t", children: "• tags_by_type_snapshot is rebuilt on every tag change" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof54", _fgB: 1793649787391, "data-fg-wof54": ":0:/src/app/components/DatabaseSchema.tsx:146:19:7407:76:e:div:t", children: "• Dynamic summaries refresh on journey completion and chat events" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ o(e, { _fgT: Ve, _fgS: "wof57", _fgB: 1793649787391, value: "user_tag", className: "border-2 border-green-300 rounded-lg bg-gradient-to-br from-green-50 to-green-100", "data-fg-wof57": ":0:/src/app/components/DatabaseSchema.tsx:154:9:7636:3762:e:AccordionItem:ete::::s:BatZ:1", children: [
        /* @__PURE__ */ t(e, { _fgT: qe, _fgS: "wof58", _fgB: 1793649787391, className: "px-6 hover:no-underline", "data-fg-wof58": ":0:/src/app/components/DatabaseSchema.tsx:155:11:7773:389:e:AccordionTrigger:e::::s:532:1", children: /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof59", _fgB: 1793649787391, className: "flex items-center gap-3", "data-fg-wof59": ":0:/src/app/components/DatabaseSchema.tsx:156:13:7840:292:e:div:etete", children: [
          /* @__PURE__ */ t(e, { _fgT: Yt, _fgS: "wof60", _fgB: 1793649787391, className: "w-5 h-5 text-green-600", "data-fg-wof60": ":0:node_modules/lucide-react:157:15:7896:42:e:Tag::::::BKy" }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof61", _fgB: 1793649787391, className: "text-green-900", "data-fg-wof61": ":0:/src/app/components/DatabaseSchema.tsx:158:15:7953:46:e:div:t", children: "user_tag" }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof63", _fgB: 1793649787391, className: "text-green-600 text-sm ml-4", "data-fg-wof63": ":0:/src/app/components/DatabaseSchema.tsx:159:15:8014:99:e:div:t", children: "Tag selections - 8 categories, 168 total options" })
        ] }) }),
        /* @__PURE__ */ t(e, { _fgT: He, _fgS: "wof65", _fgB: 1793649787391, className: "px-6 pb-6", "data-fg-wof65": ":0:/src/app/components/DatabaseSchema.tsx:162:11:8173:3200:e:AccordionContent:e::::s:DPyt:1", children: /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof66", _fgB: 1793649787391, className: "space-y-6", "data-fg-wof66": ":0:/src/app/components/DatabaseSchema.tsx:163:13:8226:3117:e:div:etete", children: [
          /* @__PURE__ */ t(
            e,
            {
              _fgT: $,
              _fgS: "wof67",
              _fgB: 1793649787391,
              title: "Schema",
              fields: [
                { name: "user_id", type: "uuid", notes: "FK to digital_twin_user" },
                { name: "tag_key", type: "text", notes: "Unique tag identifier" },
                { name: "tag_type", type: "text", notes: "Category: main_challenge, motivation, etc." },
                { name: "tag_label", type: "text", notes: "Human-readable label" },
                { name: "selected_at", type: "timestamp", notes: "When tag was selected" }
              ],
              "data-fg-wof67": ":0:/src/app/components/DatabaseSchema.tsx:164:15:8268:563:e:FieldGroup::::::8ZU"
            }
          ),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof68", _fgB: 1793649787391, className: "bg-green-100 border border-green-300 rounded-lg p-4", "data-fg-wof68": ":0:/src/app/components/DatabaseSchema.tsx:175:15:8847:1856:e:div:ete", children: [
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof69", _fgB: 1793649787391, className: "text-green-900 mb-3", "data-fg-wof69": ":0:/src/app/components/DatabaseSchema.tsx:176:17:8933:67:e:div:t", children: "Tag Categories (8 types)" }),
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof71", _fgB: 1793649787391, className: "grid grid-cols-2 gap-3", "data-fg-wof71": ":0:/src/app/components/DatabaseSchema.tsx:177:17:9017:1665:e:div:etetetetetetete", children: [
              /* @__PURE__ */ t(
                e,
                {
                  _fgT: ne,
                  _fgS: "wof72",
                  _fgB: 1793649787391,
                  name: "Main Challenge",
                  count: 21,
                  examples: ["anxiety", "depression", "relationship_conflict"],
                  "data-fg-wof72": ":0:/src/app/components/DatabaseSchema.tsx:178:19:9076:188:e:TagCategory::::::X15"
                }
              ),
              /* @__PURE__ */ t(
                e,
                {
                  _fgT: ne,
                  _fgS: "wof73",
                  _fgB: 1793649787391,
                  name: "Motivation",
                  count: 21,
                  examples: ["self_improvement", "better_relationships", "career_growth"],
                  "data-fg-wof73": ":0:/src/app/components/DatabaseSchema.tsx:183:19:9283:195:e:TagCategory::::::X15"
                }
              ),
              /* @__PURE__ */ t(
                e,
                {
                  _fgT: ne,
                  _fgS: "wof74",
                  _fgB: 1793649787391,
                  name: "Growth Focus",
                  count: 21,
                  examples: ["emotional_intelligence", "communication", "resilience"],
                  "data-fg-wof74": ":0:/src/app/components/DatabaseSchema.tsx:188:19:9497:193:e:TagCategory::::::X15"
                }
              ),
              /* @__PURE__ */ t(
                e,
                {
                  _fgT: ne,
                  _fgS: "wof75",
                  _fgB: 1793649787391,
                  name: "Life Stage",
                  count: 21,
                  examples: ["early_career", "midlife", "retirement"],
                  "data-fg-wof75": ":0:/src/app/components/DatabaseSchema.tsx:193:19:9709:175:e:TagCategory::::::X15"
                }
              ),
              /* @__PURE__ */ t(
                e,
                {
                  _fgT: ne,
                  _fgS: "wof76",
                  _fgB: 1793649787391,
                  name: "Values",
                  count: 21,
                  examples: ["family", "career", "health", "spirituality"],
                  "data-fg-wof76": ":0:/src/app/components/DatabaseSchema.tsx:198:19:9903:176:e:TagCategory::::::X15"
                }
              ),
              /* @__PURE__ */ t(
                e,
                {
                  _fgT: ne,
                  _fgS: "wof77",
                  _fgB: 1793649787391,
                  name: "Interests",
                  count: 21,
                  examples: ["mindfulness", "fitness", "creativity"],
                  "data-fg-wof77": ":0:/src/app/components/DatabaseSchema.tsx:203:19:10098:173:e:TagCategory::::::X15"
                }
              ),
              /* @__PURE__ */ t(
                e,
                {
                  _fgT: ne,
                  _fgS: "wof78",
                  _fgB: 1793649787391,
                  name: "Personality",
                  count: 21,
                  examples: ["introvert", "extrovert", "analytical"],
                  "data-fg-wof78": ":0:/src/app/components/DatabaseSchema.tsx:208:19:10290:175:e:TagCategory::::::X15"
                }
              ),
              /* @__PURE__ */ t(
                e,
                {
                  _fgT: ne,
                  _fgS: "wof79",
                  _fgB: 1793649787391,
                  name: "Context",
                  count: 21,
                  examples: ["remote_work", "new_parent", "recent_loss"],
                  "data-fg-wof79": ":0:/src/app/components/DatabaseSchema.tsx:213:19:10484:175:e:TagCategory::::::X15"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof80", _fgB: 1793649787391, className: "bg-green-100 border border-green-300 rounded-lg p-4", "data-fg-wof80": ":0:/src/app/components/DatabaseSchema.tsx:221:15:10719:605:e:div:ete", children: [
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof81", _fgB: 1793649787391, className: "text-green-900 mb-2", "data-fg-wof81": ":0:/src/app/components/DatabaseSchema.tsx:222:17:10805:66:e:div:t", children: "💡 Implementation Notes" }),
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof83", _fgB: 1793649787391, className: "space-y-2 text-sm text-green-800", "data-fg-wof83": ":0:/src/app/components/DatabaseSchema.tsx:223:17:10888:415:e:div:etetete", children: [
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof84", _fgB: 1793649787391, "data-fg-wof84": ":0:/src/app/components/DatabaseSchema.tsx:224:19:10957:83:e:div:t", children: "• POST /digital-twin/tags REPLACES all tags for a user (DELETE + INSERT)" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof86", _fgB: 1793649787391, "data-fg-wof86": ":0:/src/app/components/DatabaseSchema.tsx:225:19:11059:79:e:div:t", children: "• After tag change, Ingestion Service rebuilds tags_by_type_snapshot" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof88", _fgB: 1793649787391, "data-fg-wof88": ":0:/src/app/components/DatabaseSchema.tsx:226:19:11157:58:e:div:t", children: "• Helper generates new tag_profile_summary_text" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof90", _fgB: 1793649787391, "data-fg-wof90": ":0:/src/app/components/DatabaseSchema.tsx:227:19:11234:46:e:div:t", children: "• Composite key: (user_id, tag_key)" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ o(e, { _fgT: Ve, _fgS: "wof93", _fgB: 1793649787391, value: "memory_entry", className: "border-2 border-purple-300 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100", "data-fg-wof93": ":0:/src/app/components/DatabaseSchema.tsx:235:9:11437:4446:e:AccordionItem:ete::::s:BatZ:1", children: [
        /* @__PURE__ */ t(e, { _fgT: qe, _fgS: "wof94", _fgB: 1793649787391, className: "px-6 hover:no-underline", "data-fg-wof94": ":0:/src/app/components/DatabaseSchema.tsx:236:11:11581:393:e:AccordionTrigger:e::::s:532:1", children: /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof95", _fgB: 1793649787391, className: "flex items-center gap-3", "data-fg-wof95": ":0:/src/app/components/DatabaseSchema.tsx:237:13:11648:296:e:div:etete", children: [
          /* @__PURE__ */ t(e, { _fgT: Xt, _fgS: "wof96", _fgB: 1793649787391, className: "w-5 h-5 text-purple-600", "data-fg-wof96": ":0:node_modules/lucide-react:238:15:11704:48:e:FileText::::::B1i5" }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof97", _fgB: 1793649787391, className: "text-purple-900", "data-fg-wof97": ":0:/src/app/components/DatabaseSchema.tsx:239:15:11767:51:e:div:t", children: "memory_entry" }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof99", _fgB: 1793649787391, className: "text-purple-600 text-sm ml-4", "data-fg-wof99": ":0:/src/app/components/DatabaseSchema.tsx:240:15:11833:92:e:div:t", children: "Episodic memories with vector embeddings" })
        ] }) }),
        /* @__PURE__ */ t(e, { _fgT: He, _fgS: "wof101", _fgB: 1793649787391, className: "px-6 pb-6", "data-fg-wof101": ":0:/src/app/components/DatabaseSchema.tsx:243:11:11985:3873:e:AccordionContent:e::::s:DPyt:1", children: /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof102", _fgB: 1793649787391, className: "space-y-6", "data-fg-wof102": ":0:/src/app/components/DatabaseSchema.tsx:244:13:12038:3790:e:div:etetete", children: [
          /* @__PURE__ */ t(
            e,
            {
              _fgT: $,
              _fgS: "wof103",
              _fgB: 1793649787391,
              title: "Schema",
              fields: [
                { name: "memory_id", type: "uuid", notes: "Primary key" },
                { name: "user_id", type: "uuid", notes: "FK to digital_twin_user" },
                { name: "source", type: "text", notes: "intake, journal, chat, system_summary" },
                { name: "text_raw", type: "text", notes: "Original text content" },
                { name: "embedding", type: "vector(1536)", notes: "OpenAI embedding for semantic search" },
                { name: "created_at", type: "timestamp", notes: "When memory was created" },
                { name: "metadata", type: "jsonb", notes: "Optional: pillar_hint, emotion_markers" }
              ],
              "data-fg-wof103": ":0:/src/app/components/DatabaseSchema.tsx:245:15:12080:763:e:FieldGroup::::::8ZU"
            }
          ),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof104", _fgB: 1793649787391, className: "bg-purple-100 border border-purple-300 rounded-lg p-4", "data-fg-wof104": ":0:/src/app/components/DatabaseSchema.tsx:258:15:12859:1000:e:div:ete", children: [
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof105", _fgB: 1793649787391, className: "text-purple-900 mb-3", "data-fg-wof105": ":0:/src/app/components/DatabaseSchema.tsx:259:17:12947:56:e:div:t", children: "Source Types" }),
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof107", _fgB: 1793649787391, className: "grid grid-cols-2 gap-3", "data-fg-wof107": ":0:/src/app/components/DatabaseSchema.tsx:260:17:13020:818:e:div:etetetete", children: [
              /* @__PURE__ */ t(
                e,
                {
                  _fgT: De,
                  _fgS: "wof108",
                  _fgB: 1793649787391,
                  name: "intake",
                  description: "Day 0 introductory answers",
                  "data-fg-wof108": ":0:/src/app/components/DatabaseSchema.tsx:261:19:13079:127:e:SourceType::::::CcVs"
                }
              ),
              /* @__PURE__ */ t(
                e,
                {
                  _fgT: De,
                  _fgS: "wof109",
                  _fgB: 1793649787391,
                  name: "journal",
                  description: "Daily journey reflections",
                  "data-fg-wof109": ":0:/src/app/components/DatabaseSchema.tsx:265:19:13225:127:e:SourceType::::::CcVs"
                }
              ),
              /* @__PURE__ */ t(
                e,
                {
                  _fgT: De,
                  _fgS: "wof110",
                  _fgB: 1793649787391,
                  name: "practice",
                  description: "Practice activity reflections",
                  "data-fg-wof110": ":0:/src/app/components/DatabaseSchema.tsx:269:19:13371:132:e:SourceType::::::CcVs"
                }
              ),
              /* @__PURE__ */ t(
                e,
                {
                  _fgT: De,
                  _fgS: "wof111",
                  _fgB: 1793649787391,
                  name: "chat",
                  description: "Personal chat messages",
                  "data-fg-wof111": ":0:/src/app/components/DatabaseSchema.tsx:273:19:13522:121:e:SourceType::::::CcVs"
                }
              ),
              /* @__PURE__ */ t(
                e,
                {
                  _fgT: De,
                  _fgS: "wof112",
                  _fgB: 1793649787391,
                  name: "system_summary",
                  description: "LLM-generated summaries mirrored as memories",
                  "data-fg-wof112": ":0:/src/app/components/DatabaseSchema.tsx:277:19:13662:153:e:SourceType::::::CcVs"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof113", _fgB: 1793649787391, className: "bg-purple-100 border border-purple-300 rounded-lg p-4", "data-fg-wof113": ":0:/src/app/components/DatabaseSchema.tsx:284:15:13875:1256:e:div:ete", children: [
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof114", _fgB: 1793649787391, className: "text-purple-900 mb-3", "data-fg-wof114": ":0:/src/app/components/DatabaseSchema.tsx:285:17:13963:70:e:div:t", children: "Vector Search Capabilities" }),
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof116", _fgB: 1793649787391, className: "space-y-3", "data-fg-wof116": ":0:/src/app/components/DatabaseSchema.tsx:286:17:14050:1060:e:div:ete", children: [
              /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof117", _fgB: 1793649787391, className: "bg-white rounded-lg p-3 border border-purple-200", "data-fg-wof117": ":0:/src/app/components/DatabaseSchema.tsx:287:19:14096:367:e:div:ete", children: [
                /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof118", _fgB: 1793649787391, className: "text-purple-800 mb-2", "data-fg-wof118": ":0:/src/app/components/DatabaseSchema.tsx:288:21:14183:63:e:div:t", children: "Index Configuration" }),
                /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof120", _fgB: 1793649787391, className: "text-sm text-purple-700 font-mono", "data-fg-wof120": ":0:/src/app/components/DatabaseSchema.tsx:289:21:14267:171:e:div:t", children: "CREATE INDEX ON memory_entry USING hnsw (embedding vector_cosine_ops);" })
              ] }),
              /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof122", _fgB: 1793649787391, className: "bg-white rounded-lg p-3 border border-purple-200", "data-fg-wof122": ":0:/src/app/components/DatabaseSchema.tsx:293:19:14482:605:e:div:ete", children: [
                /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof123", _fgB: 1793649787391, className: "text-purple-800 mb-2", "data-fg-wof123": ":0:/src/app/components/DatabaseSchema.tsx:294:21:14569:65:e:div:t", children: "Typical Query Pattern" }),
                /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof125", _fgB: 1793649787391, className: "space-y-1 text-sm text-purple-700", "data-fg-wof125": ":0:/src/app/components/DatabaseSchema.tsx:295:21:14655:407:e:div:etetete", children: [
                  /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof126", _fgB: 1793649787391, "data-fg-wof126": ":0:/src/app/components/DatabaseSchema.tsx:296:23:14729:71:e:div:t", children: "1. Filter by user_id and recency window (e.g., last 14 days)" }),
                  /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof128", _fgB: 1793649787391, "data-fg-wof128": ":0:/src/app/components/DatabaseSchema.tsx:297:23:14823:54:e:div:t", children: "2. Optional: filter by metadata.pillar_hint" }),
                  /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof130", _fgB: 1793649787391, "data-fg-wof130": ":0:/src/app/components/DatabaseSchema.tsx:298:23:14900:59:e:div:t", children: "3. Order by cosine similarity to query embedding" }),
                  /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof132", _fgB: 1793649787391, "data-fg-wof132": ":0:/src/app/components/DatabaseSchema.tsx:299:23:14982:53:e:div:t", children: "4. LIMIT to top K results (typically 5-10)" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof134", _fgB: 1793649787391, className: "bg-purple-100 border border-purple-300 rounded-lg p-4", "data-fg-wof134": ":0:/src/app/components/DatabaseSchema.tsx:305:15:15147:662:e:div:ete", children: [
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof135", _fgB: 1793649787391, className: "text-purple-900 mb-2", "data-fg-wof135": ":0:/src/app/components/DatabaseSchema.tsx:306:17:15235:67:e:div:t", children: "💡 Implementation Notes" }),
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof137", _fgB: 1793649787391, className: "space-y-2 text-sm text-purple-800", "data-fg-wof137": ":0:/src/app/components/DatabaseSchema.tsx:307:17:15319:469:e:div:etetetete", children: [
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof138", _fgB: 1793649787391, "data-fg-wof138": ":0:/src/app/components/DatabaseSchema.tsx:308:19:15389:61:e:div:t", children: "• Every significant user input gets a memory_entry" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof140", _fgB: 1793649787391, "data-fg-wof140": ":0:/src/app/components/DatabaseSchema.tsx:309:19:15469:58:e:div:t", children: "• Embeddings generated on INSERT via OpenAI API" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof142", _fgB: 1793649787391, "data-fg-wof142": ":0:/src/app/components/DatabaseSchema.tsx:310:3:15530:73:e:div:t", children: "• Context Service uses vector search to find relevant memories" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof144", _fgB: 1793649787391, "data-fg-wof144": ":0:/src/app/components/DatabaseSchema.tsx:311:19:15622:76:e:div:t", children: "• System summaries also stored here so they participate in search" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof146", _fgB: 1793649787391, "data-fg-wof146": ":0:/src/app/components/DatabaseSchema.tsx:312:19:15717:48:e:div:t", children: "• Hundreds of entries per active user" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ o(e, { _fgT: Ve, _fgS: "wof149", _fgB: 1793649787391, value: "context_snapshot", className: "border-2 border-amber-300 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100", "data-fg-wof149": ":0:/src/app/components/DatabaseSchema.tsx:320:9:15926:2947:e:AccordionItem:ete::::s:BatZ:1", children: [
        /* @__PURE__ */ t(e, { _fgT: qe, _fgS: "wof150", _fgB: 1793649787391, className: "px-6 hover:no-underline", "data-fg-wof150": ":0:/src/app/components/DatabaseSchema.tsx:321:11:16071:375:e:AccordionTrigger:e::::s:532:1", children: /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof151", _fgB: 1793649787391, className: "flex items-center gap-3", "data-fg-wof151": ":0:/src/app/components/DatabaseSchema.tsx:322:13:16138:278:e:div:etete", children: [
          /* @__PURE__ */ t(e, { _fgT: Zt, _fgS: "wof152", _fgB: 1793649787391, className: "w-5 h-5 text-amber-600", "data-fg-wof152": ":0:node_modules/lucide-react:323:15:16194:45:e:Camera::::::Ps5" }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof153", _fgB: 1793649787391, className: "text-amber-900", "data-fg-wof153": ":0:/src/app/components/DatabaseSchema.tsx:324:15:16254:54:e:div:t", children: "context_snapshot" }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof155", _fgB: 1793649787391, className: "text-amber-600 text-sm ml-4", "data-fg-wof155": ":0:/src/app/components/DatabaseSchema.tsx:325:15:16323:74:e:div:t", children: "LLM context audit trail" })
        ] }) }),
        /* @__PURE__ */ t(e, { _fgT: He, _fgS: "wof157", _fgB: 1793649787391, className: "px-6 pb-6", "data-fg-wof157": ":0:/src/app/components/DatabaseSchema.tsx:328:11:16457:2391:e:AccordionContent:e::::s:DPyt:1", children: /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof158", _fgB: 1793649787391, className: "space-y-6", "data-fg-wof158": ":0:/src/app/components/DatabaseSchema.tsx:329:13:16510:2308:e:div:etete", children: [
          /* @__PURE__ */ t(
            e,
            {
              _fgT: $,
              _fgS: "wof159",
              _fgB: 1793649787391,
              title: "Schema",
              fields: [
                { name: "snapshot_id", type: "uuid", notes: "Primary key" },
                { name: "user_id", type: "uuid", notes: "FK to digital_twin_user" },
                { name: "source", type: "text", notes: "journey_day_start, chat_turn" },
                { name: "context_payload", type: "jsonb", notes: "Complete context sent to LLM" },
                { name: "created_at", type: "timestamp", notes: "When context was built" },
                { name: "metadata", type: "jsonb", notes: "Optional: journey_key, day_number" }
              ],
              "data-fg-wof159": ":0:/src/app/components/DatabaseSchema.tsx:330:15:16552:655:e:FieldGroup::::::8ZU"
            }
          ),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof160", _fgB: 1793649787391, className: "bg-amber-100 border border-amber-300 rounded-lg p-4", "data-fg-wof160": ":0:/src/app/components/DatabaseSchema.tsx:342:15:17223:959:e:div:ete", children: [
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof161", _fgB: 1793649787391, className: "text-amber-900 mb-3", "data-fg-wof161": ":0:/src/app/components/DatabaseSchema.tsx:343:17:17309:57:e:div:t", children: "Snapshot Types" }),
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof163", _fgB: 1793649787391, className: "space-y-3", "data-fg-wof163": ":0:/src/app/components/DatabaseSchema.tsx:344:17:17383:778:e:div:ete", children: [
              /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof164", _fgB: 1793649787391, className: "bg-white rounded-lg p-3 border border-amber-200", "data-fg-wof164": ":0:/src/app/components/DatabaseSchema.tsx:345:19:17429:359:e:div:ete", children: [
                /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof165", _fgB: 1793649787391, className: "text-amber-800 mb-1", "data-fg-wof165": ":0:/src/app/components/DatabaseSchema.tsx:346:21:17515:60:e:div:t", children: "journey_day_start" }),
                /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof167", _fgB: 1793649787391, className: "text-sm text-amber-700", "data-fg-wof167": ":0:/src/app/components/DatabaseSchema.tsx:347:21:17596:167:e:div:t", children: "Context built when Journey Engine requests context for a specific journey day" })
              ] }),
              /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof169", _fgB: 1793649787391, className: "bg-white rounded-lg p-3 border border-amber-200", "data-fg-wof169": ":0:/src/app/components/DatabaseSchema.tsx:351:19:17807:331:e:div:ete", children: [
                /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof170", _fgB: 1793649787391, className: "text-amber-800 mb-1", "data-fg-wof170": ":0:/src/app/components/DatabaseSchema.tsx:352:21:17893:52:e:div:t", children: "chat_turn" }),
                /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof172", _fgB: 1793649787391, className: "text-sm text-amber-700", "data-fg-wof172": ":0:/src/app/components/DatabaseSchema.tsx:353:21:17966:147:e:div:t", children: "Context built for each turn in Personal Chat conversation" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof174", _fgB: 1793649787391, className: "bg-amber-100 border border-amber-300 rounded-lg p-4", "data-fg-wof174": ":0:/src/app/components/DatabaseSchema.tsx:360:15:18198:601:e:div:ete", children: [
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof175", _fgB: 1793649787391, className: "text-amber-900 mb-2", "data-fg-wof175": ":0:/src/app/components/DatabaseSchema.tsx:361:17:18284:66:e:div:t", children: "💡 Implementation Notes" }),
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof177", _fgB: 1793649787391, className: "space-y-2 text-sm text-amber-800", "data-fg-wof177": ":0:/src/app/components/DatabaseSchema.tsx:362:17:18367:411:e:div:etetete", children: [
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof178", _fgB: 1793649787391, "data-fg-wof178": ":0:/src/app/components/DatabaseSchema.tsx:363:19:18436:65:e:div:t", children: "• Written by Context Service (only table it writes to)" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof180", _fgB: 1793649787391, "data-fg-wof180": ":0:/src/app/components/DatabaseSchema.tsx:364:19:18520:74:e:div:t", children: "• Provides complete audit trail of what context was sent to LLM" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof182", _fgB: 1793649787391, "data-fg-wof182": ":0:/src/app/components/DatabaseSchema.tsx:365:19:18613:63:e:div:t", children: "• Useful for debugging and improving context quality" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof184", _fgB: 1793649787391, "data-fg-wof184": ":0:/src/app/components/DatabaseSchema.tsx:366:19:18695:60:e:div:t", children: "• Can replay exact context from any point in time" })
            ] })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ o(e, { _fgT: C, _fgS: "wof187", _fgB: 1793649787391, className: "p-6 mt-6", "data-fg-wof187": ":0:/src/app/components/DatabaseSchema.tsx:375:7:18937:11865:e:Card:etete::::s:CuJ6:1", children: [
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof188", _fgB: 1793649787391, className: "mb-6", "data-fg-wof188": ":0:/src/app/components/DatabaseSchema.tsx:376:9:18973:298:e:div:ete", children: [
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof189", _fgB: 1793649787391, className: "text-slate-900 mb-2", "data-fg-wof189": ":0:/src/app/components/DatabaseSchema.tsx:377:11:19006:77:e:div:t", children: "Complete Tag Reference (265+ Tags)" }),
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof191", _fgB: 1793649787391, className: "text-slate-600", "data-fg-wof191": ":0:/src/app/components/DatabaseSchema.tsx:378:11:19094:162:e:div:t", children: "All available tags organized by category. Engineers must display these in the UI for user selection." })
      ] }),
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof193", _fgB: 1793649787391, className: "space-y-6", "data-fg-wof193": ":0:/src/app/components/DatabaseSchema.tsx:383:9:19281:10670:e:div:xtetxtetxtetxtetxtetxtetxtetxte", children: [
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof195", _fgB: 1793649787391, className: "border-2 border-emerald-200 rounded-lg p-4 bg-emerald-50", "data-fg-wof195": ":0:/src/app/components/DatabaseSchema.tsx:385:11:19350:1063:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof196", _fgB: 1793649787391, className: "text-emerald-900 mb-3", "data-fg-wof196": ":0:/src/app/components/DatabaseSchema.tsx:386:13:19437:70:e:div:t", children: "🌿 Current Mood (20 tags)" }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof198", _fgB: 1793649787391, className: "grid grid-cols-4 gap-2 text-sm", "data-fg-wof198": ":0:/src/app/components/DatabaseSchema.tsx:387:13:19520:876:e:div:etetetetetetetetetetetetetetetetetetete", children: [
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof199", _fgB: 1793649787391, tag: "Calm", "data-fg-wof199": ":0:/src/app/components/DatabaseSchema.tsx:388:15:19583:22:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof200", _fgB: 1793649787391, tag: "overwhelmed", "data-fg-wof200": ":0:/src/app/components/DatabaseSchema.tsx:389:15:19620:29:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof201", _fgB: 1793649787391, tag: "anxious", "data-fg-wof201": ":0:/src/app/components/DatabaseSchema.tsx:390:15:19664:25:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof202", _fgB: 1793649787391, tag: "hopeful", "data-fg-wof202": ":0:/src/app/components/DatabaseSchema.tsx:391:15:19704:25:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof203", _fgB: 1793649787391, tag: "grateful", "data-fg-wof203": ":0:/src/app/components/DatabaseSchema.tsx:392:15:19744:26:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof204", _fgB: 1793649787391, tag: "tired", "data-fg-wof204": ":0:/src/app/components/DatabaseSchema.tsx:393:15:19785:23:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof205", _fgB: 1793649787391, tag: "inspired", "data-fg-wof205": ":0:/src/app/components/DatabaseSchema.tsx:394:15:19823:26:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof206", _fgB: 1793649787391, tag: "overthinking", "data-fg-wof206": ":0:/src/app/components/DatabaseSchema.tsx:395:15:19864:30:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof207", _fgB: 1793649787391, tag: "peaceful", "data-fg-wof207": ":0:/src/app/components/DatabaseSchema.tsx:396:15:19909:26:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof208", _fgB: 1793649787391, tag: "restless", "data-fg-wof208": ":0:/src/app/components/DatabaseSchema.tsx:397:15:19950:26:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof209", _fgB: 1793649787391, tag: "sad", "data-fg-wof209": ":0:/src/app/components/DatabaseSchema.tsx:398:15:19991:21:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof210", _fgB: 1793649787391, tag: "joyful", "data-fg-wof210": ":0:/src/app/components/DatabaseSchema.tsx:399:15:20027:24:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof211", _fgB: 1793649787391, tag: "content", "data-fg-wof211": ":0:/src/app/components/DatabaseSchema.tsx:400:15:20066:25:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof212", _fgB: 1793649787391, tag: "irritable", "data-fg-wof212": ":0:/src/app/components/DatabaseSchema.tsx:401:15:20106:27:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof213", _fgB: 1793649787391, tag: "lonely", "data-fg-wof213": ":0:/src/app/components/DatabaseSchema.tsx:402:15:20148:24:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof214", _fgB: 1793649787391, tag: "confused", "data-fg-wof214": ":0:/src/app/components/DatabaseSchema.tsx:403:15:20187:26:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof215", _fgB: 1793649787391, tag: "motivated", "data-fg-wof215": ":0:/src/app/components/DatabaseSchema.tsx:404:15:20228:27:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof216", _fgB: 1793649787391, tag: "stressed", "data-fg-wof216": ":0:/src/app/components/DatabaseSchema.tsx:405:15:20270:26:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof217", _fgB: 1793649787391, tag: "balanced", "data-fg-wof217": ":0:/src/app/components/DatabaseSchema.tsx:406:15:20311:26:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof218", _fgB: 1793649787391, tag: "drained", "data-fg-wof218": ":0:/src/app/components/DatabaseSchema.tsx:407:15:20352:25:e:TagPill::::::D0hw" })
          ] })
        ] }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof220", _fgB: 1793649787391, className: "border-2 border-red-200 rounded-lg p-4 bg-red-50", "data-fg-wof220": ":0:/src/app/components/DatabaseSchema.tsx:412:11:20454:1205:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof221", _fgB: 1793649787391, className: "text-red-900 mb-3", "data-fg-wof221": ":0:/src/app/components/DatabaseSchema.tsx:413:13:20533:64:e:div:t", children: "⚖️ Challenges (20 tags)" }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof223", _fgB: 1793649787391, className: "grid grid-cols-4 gap-2 text-sm", "data-fg-wof223": ":0:/src/app/components/DatabaseSchema.tsx:414:13:20610:1032:e:div:etetetetetetetetetetetetetetetetetetete", children: [
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof224", _fgB: 1793649787391, tag: "Stress_burnout", "data-fg-wof224": ":0:/src/app/components/DatabaseSchema.tsx:415:15:20673:32:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof225", _fgB: 1793649787391, tag: "work_family_balance", "data-fg-wof225": ":0:/src/app/components/DatabaseSchema.tsx:416:15:20720:37:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof226", _fgB: 1793649787391, tag: "gentle_parenting", "data-fg-wof226": ":0:/src/app/components/DatabaseSchema.tsx:417:15:20772:34:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof227", _fgB: 1793649787391, tag: "setting_boundaries", "data-fg-wof227": ":0:/src/app/components/DatabaseSchema.tsx:418:15:20821:36:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof228", _fgB: 1793649787391, tag: "purpose_confusion", "data-fg-wof228": ":0:/src/app/components/DatabaseSchema.tsx:419:15:20872:35:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof229", _fgB: 1793649787391, tag: "selfcare_guilt", "data-fg-wof229": ":0:/src/app/components/DatabaseSchema.tsx:420:15:20922:32:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof230", _fgB: 1793649787391, tag: "relationship_conflict", "data-fg-wof230": ":0:/src/app/components/DatabaseSchema.tsx:421:15:20969:39:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof231", _fgB: 1793649787391, tag: "life_transition", "data-fg-wof231": ":0:/src/app/components/DatabaseSchema.tsx:422:15:21023:33:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof232", _fgB: 1793649787391, tag: "habit_consistency", "data-fg-wof232": ":0:/src/app/components/DatabaseSchema.tsx:423:15:21071:35:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof233", _fgB: 1793649787391, tag: "perfectionism", "data-fg-wof233": ":0:/src/app/components/DatabaseSchema.tsx:424:15:21121:31:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof234", _fgB: 1793649787391, tag: "time_pressure", "data-fg-wof234": ":0:/src/app/components/DatabaseSchema.tsx:425:15:21167:31:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof235", _fgB: 1793649787391, tag: "financial_stress", "data-fg-wof235": ":0:/src/app/components/DatabaseSchema.tsx:426:15:21213:34:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof236", _fgB: 1793649787391, tag: "career_uncertainty", "data-fg-wof236": ":0:/src/app/components/DatabaseSchema.tsx:427:15:21262:36:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof237", _fgB: 1793649787391, tag: "lack_focus", "data-fg-wof237": ":0:/src/app/components/DatabaseSchema.tsx:428:15:21313:28:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof238", _fgB: 1793649787391, tag: "low_motivation", "data-fg-wof238": ":0:/src/app/components/DatabaseSchema.tsx:429:15:21356:32:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof239", _fgB: 1793649787391, tag: "anger_control", "data-fg-wof239": ":0:/src/app/components/DatabaseSchema.tsx:430:15:21403:31:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof240", _fgB: 1793649787391, tag: "sleep_issues", "data-fg-wof240": ":0:/src/app/components/DatabaseSchema.tsx:431:15:21449:30:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof241", _fgB: 1793649787391, tag: "social_anxiety", "data-fg-wof241": ":0:/src/app/components/DatabaseSchema.tsx:432:15:21494:32:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof242", _fgB: 1793649787391, tag: "decision_fatigue", "data-fg-wof242": ":0:/src/app/components/DatabaseSchema.tsx:433:15:21541:34:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof243", _fgB: 1793649787391, tag: "comparison_trap", "data-fg-wof243": ":0:/src/app/components/DatabaseSchema.tsx:434:15:21590:33:e:TagPill::::::D0hw" })
          ] })
        ] }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof245", _fgB: 1793649787391, className: "border-2 border-teal-200 rounded-lg p-4 bg-teal-50", "data-fg-wof245": ":0:/src/app/components/DatabaseSchema.tsx:439:11:21699:1964:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof246", _fgB: 1793649787391, className: "text-teal-900 mb-3", "data-fg-wof246": ":0:/src/app/components/DatabaseSchema.tsx:440:13:21780:65:e:div:t", children: "🌸 Interests (50+ tags)" }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof248", _fgB: 1793649787391, className: "grid grid-cols-5 gap-2 text-sm", "data-fg-wof248": ":0:/src/app/components/DatabaseSchema.tsx:441:13:21858:1788:e:div:etetetetetetetetetetetetetetetetetetetetetetetetetetetetetetetetetetetetetetetetete", children: [
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof249", _fgB: 1793649787391, tag: "Parenting", "data-fg-wof249": ":0:/src/app/components/DatabaseSchema.tsx:442:15:21921:27:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof250", _fgB: 1793649787391, tag: "mindfulness", "data-fg-wof250": ":0:/src/app/components/DatabaseSchema.tsx:443:15:21963:29:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof251", _fgB: 1793649787391, tag: "fitness", "data-fg-wof251": ":0:/src/app/components/DatabaseSchema.tsx:444:15:22007:25:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof252", _fgB: 1793649787391, tag: "nutrition", "data-fg-wof252": ":0:/src/app/components/DatabaseSchema.tsx:445:15:22047:27:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof253", _fgB: 1793649787391, tag: "leadership", "data-fg-wof253": ":0:/src/app/components/DatabaseSchema.tsx:446:15:22089:28:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof254", _fgB: 1793649787391, tag: "spirituality", "data-fg-wof254": ":0:/src/app/components/DatabaseSchema.tsx:447:15:22132:30:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof255", _fgB: 1793649787391, tag: "reading", "data-fg-wof255": ":0:/src/app/components/DatabaseSchema.tsx:448:15:22177:25:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof256", _fgB: 1793649787391, tag: "technology", "data-fg-wof256": ":0:/src/app/components/DatabaseSchema.tsx:449:15:22217:28:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof257", _fgB: 1793649787391, tag: "teaching", "data-fg-wof257": ":0:/src/app/components/DatabaseSchema.tsx:450:15:22260:26:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof258", _fgB: 1793649787391, tag: "creativity", "data-fg-wof258": ":0:/src/app/components/DatabaseSchema.tsx:451:15:22301:28:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof259", _fgB: 1793649787391, tag: "travel", "data-fg-wof259": ":0:/src/app/components/DatabaseSchema.tsx:452:15:22344:24:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof260", _fgB: 1793649787391, tag: "fashion", "data-fg-wof260": ":0:/src/app/components/DatabaseSchema.tsx:453:15:22383:25:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof261", _fgB: 1793649787391, tag: "makeup", "data-fg-wof261": ":0:/src/app/components/DatabaseSchema.tsx:454:15:22423:24:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof262", _fgB: 1793649787391, tag: "sports", "data-fg-wof262": ":0:/src/app/components/DatabaseSchema.tsx:455:15:22462:24:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof263", _fgB: 1793649787391, tag: "basketball", "data-fg-wof263": ":0:/src/app/components/DatabaseSchema.tsx:456:15:22501:28:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof264", _fgB: 1793649787391, tag: "soccer", "data-fg-wof264": ":0:/src/app/components/DatabaseSchema.tsx:457:15:22544:24:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof265", _fgB: 1793649787391, tag: "cricket", "data-fg-wof265": ":0:/src/app/components/DatabaseSchema.tsx:458:15:22583:25:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof266", _fgB: 1793649787391, tag: "movies", "data-fg-wof266": ":0:/src/app/components/DatabaseSchema.tsx:459:15:22623:24:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof267", _fgB: 1793649787391, tag: "fiction", "data-fg-wof267": ":0:/src/app/components/DatabaseSchema.tsx:460:15:22662:25:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof268", _fgB: 1793649787391, tag: "nonfiction", "data-fg-wof268": ":0:/src/app/components/DatabaseSchema.tsx:461:15:22702:28:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof269", _fgB: 1793649787391, tag: "music", "data-fg-wof269": ":0:/src/app/components/DatabaseSchema.tsx:462:15:22745:23:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof270", _fgB: 1793649787391, tag: "photography", "data-fg-wof270": ":0:/src/app/components/DatabaseSchema.tsx:463:15:22783:29:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof271", _fgB: 1793649787391, tag: "gardening", "data-fg-wof271": ":0:/src/app/components/DatabaseSchema.tsx:464:15:22827:27:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof272", _fgB: 1793649787391, tag: "writing", "data-fg-wof272": ":0:/src/app/components/DatabaseSchema.tsx:465:15:22869:25:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof273", _fgB: 1793649787391, tag: "podcasts", "data-fg-wof273": ":0:/src/app/components/DatabaseSchema.tsx:466:15:22909:26:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof274", _fgB: 1793649787391, tag: "cooking", "data-fg-wof274": ":0:/src/app/components/DatabaseSchema.tsx:467:15:22950:25:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof275", _fgB: 1793649787391, tag: "baking", "data-fg-wof275": ":0:/src/app/components/DatabaseSchema.tsx:468:15:22990:24:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof276", _fgB: 1793649787391, tag: "yoga", "data-fg-wof276": ":0:/src/app/components/DatabaseSchema.tsx:469:15:23029:22:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof277", _fgB: 1793649787391, tag: "hiking", "data-fg-wof277": ":0:/src/app/components/DatabaseSchema.tsx:470:15:23066:24:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof278", _fgB: 1793649787391, tag: "nature", "data-fg-wof278": ":0:/src/app/components/DatabaseSchema.tsx:471:15:23105:24:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof279", _fgB: 1793649787391, tag: "animals", "data-fg-wof279": ":0:/src/app/components/DatabaseSchema.tsx:472:15:23144:25:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof280", _fgB: 1793649787391, tag: "art", "data-fg-wof280": ":0:/src/app/components/DatabaseSchema.tsx:473:15:23184:21:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof281", _fgB: 1793649787391, tag: "interior_design", "data-fg-wof281": ":0:/src/app/components/DatabaseSchema.tsx:474:15:23220:33:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof282", _fgB: 1793649787391, tag: "finance", "data-fg-wof282": ":0:/src/app/components/DatabaseSchema.tsx:475:15:23268:25:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof283", _fgB: 1793649787391, tag: "psychology", "data-fg-wof283": ":0:/src/app/components/DatabaseSchema.tsx:476:15:23308:28:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof284", _fgB: 1793649787391, tag: "philosophy", "data-fg-wof284": ":0:/src/app/components/DatabaseSchema.tsx:477:15:23351:28:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof285", _fgB: 1793649787391, tag: "science", "data-fg-wof285": ":0:/src/app/components/DatabaseSchema.tsx:478:15:23394:25:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof286", _fgB: 1793649787391, tag: "history", "data-fg-wof286": ":0:/src/app/components/DatabaseSchema.tsx:479:15:23434:25:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof287", _fgB: 1793649787391, tag: "gaming", "data-fg-wof287": ":0:/src/app/components/DatabaseSchema.tsx:480:15:23474:24:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof288", _fgB: 1793649787391, tag: "volunteering", "data-fg-wof288": ":0:/src/app/components/DatabaseSchema.tsx:481:15:23513:30:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof289", _fgB: 1793649787391, tag: "politics", "data-fg-wof289": ":0:/src/app/components/DatabaseSchema.tsx:482:15:23558:26:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof290", _fgB: 1793649787391, tag: "literature", "data-fg-wof290": ":0:/src/app/components/DatabaseSchema.tsx:483:15:23599:28:e:TagPill::::::D0hw" })
          ] })
        ] }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof292", _fgB: 1793649787391, className: "border-2 border-blue-200 rounded-lg p-4 bg-blue-50", "data-fg-wof292": ":0:/src/app/components/DatabaseSchema.tsx:488:11:23699:1161:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof293", _fgB: 1793649787391, className: "text-blue-900 mb-3", "data-fg-wof293": ":0:/src/app/components/DatabaseSchema.tsx:489:13:23780:60:e:div:t", children: "💫 Goals (20 tags)" }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof295", _fgB: 1793649787391, className: "grid grid-cols-4 gap-2 text-sm", "data-fg-wof295": ":0:/src/app/components/DatabaseSchema.tsx:490:13:23853:990:e:div:etetetetetetetetetetetetetetetetetetete", children: [
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof296", _fgB: 1793649787391, tag: "Calm_clarity", "data-fg-wof296": ":0:/src/app/components/DatabaseSchema.tsx:491:15:23916:30:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof297", _fgB: 1793649787391, tag: "emotional_balance", "data-fg-wof297": ":0:/src/app/components/DatabaseSchema.tsx:492:15:23961:35:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof298", _fgB: 1793649787391, tag: "better_relationships", "data-fg-wof298": ":0:/src/app/components/DatabaseSchema.tsx:493:15:24011:38:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof299", _fgB: 1793649787391, tag: "find_purpose", "data-fg-wof299": ":0:/src/app/components/DatabaseSchema.tsx:494:15:24064:30:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof300", _fgB: 1793649787391, tag: "balance_flow", "data-fg-wof300": ":0:/src/app/components/DatabaseSchema.tsx:495:15:24109:30:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof301", _fgB: 1793649787391, tag: "patient_parenting", "data-fg-wof301": ":0:/src/app/components/DatabaseSchema.tsx:496:15:24154:35:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof302", _fgB: 1793649787391, tag: "detachment", "data-fg-wof302": ":0:/src/app/components/DatabaseSchema.tsx:497:15:24204:28:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof303", _fgB: 1793649787391, tag: "gratitude", "data-fg-wof303": ":0:/src/app/components/DatabaseSchema.tsx:498:15:24247:27:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof304", _fgB: 1793649787391, tag: "confidence", "data-fg-wof304": ":0:/src/app/components/DatabaseSchema.tsx:499:15:24289:28:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof305", _fgB: 1793649787391, tag: "spiritual_growth", "data-fg-wof305": ":0:/src/app/components/DatabaseSchema.tsx:500:15:24332:34:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof306", _fgB: 1793649787391, tag: "discipline", "data-fg-wof306": ":0:/src/app/components/DatabaseSchema.tsx:501:15:24381:28:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof307", _fgB: 1793649787391, tag: "self_acceptance", "data-fg-wof307": ":0:/src/app/components/DatabaseSchema.tsx:502:15:24424:33:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof308", _fgB: 1793649787391, tag: "inner_peace", "data-fg-wof308": ":0:/src/app/components/DatabaseSchema.tsx:503:15:24472:29:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof309", _fgB: 1793649787391, tag: "positive_thinking", "data-fg-wof309": ":0:/src/app/components/DatabaseSchema.tsx:504:15:24516:35:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof310", _fgB: 1793649787391, tag: "time_freedom", "data-fg-wof310": ":0:/src/app/components/DatabaseSchema.tsx:505:15:24566:30:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof311", _fgB: 1793649787391, tag: "resilience", "data-fg-wof311": ":0:/src/app/components/DatabaseSchema.tsx:506:15:24611:28:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof312", _fgB: 1793649787391, tag: "authentic_living", "data-fg-wof312": ":0:/src/app/components/DatabaseSchema.tsx:507:15:24654:34:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof313", _fgB: 1793649787391, tag: "focus_growth", "data-fg-wof313": ":0:/src/app/components/DatabaseSchema.tsx:508:15:24703:30:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof314", _fgB: 1793649787391, tag: "habit_mastery", "data-fg-wof314": ":0:/src/app/components/DatabaseSchema.tsx:509:15:24748:31:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof315", _fgB: 1793649787391, tag: "joy_presence", "data-fg-wof315": ":0:/src/app/components/DatabaseSchema.tsx:510:15:24794:30:e:TagPill::::::D0hw" })
          ] })
        ] }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof317", _fgB: 1793649787391, className: "border-2 border-indigo-200 rounded-lg p-4 bg-indigo-50", "data-fg-wof317": ":0:/src/app/components/DatabaseSchema.tsx:515:11:24911:1267:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof318", _fgB: 1793649787391, className: "text-indigo-900 mb-3", "data-fg-wof318": ":0:/src/app/components/DatabaseSchema.tsx:516:13:24996:77:e:div:t", children: "🪞 Personality & Traits (25 tags)" }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof320", _fgB: 1793649787391, className: "grid grid-cols-4 gap-2 text-sm", "data-fg-wof320": ":0:/src/app/components/DatabaseSchema.tsx:517:13:25086:1075:e:div:etetetetetetetetetetetetetetetetetetetetetetete", children: [
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof321", _fgB: 1793649787391, tag: "Empathetic", "data-fg-wof321": ":0:/src/app/components/DatabaseSchema.tsx:518:15:25149:28:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof322", _fgB: 1793649787391, tag: "analytical", "data-fg-wof322": ":0:/src/app/components/DatabaseSchema.tsx:519:15:25192:28:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof323", _fgB: 1793649787391, tag: "disciplined", "data-fg-wof323": ":0:/src/app/components/DatabaseSchema.tsx:520:15:25235:29:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof324", _fgB: 1793649787391, tag: "creative", "data-fg-wof324": ":0:/src/app/components/DatabaseSchema.tsx:521:15:25279:26:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof325", _fgB: 1793649787391, tag: "reflective", "data-fg-wof325": ":0:/src/app/components/DatabaseSchema.tsx:522:15:25320:28:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof326", _fgB: 1793649787391, tag: "driven", "data-fg-wof326": ":0:/src/app/components/DatabaseSchema.tsx:523:15:25363:24:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof327", _fgB: 1793649787391, tag: "curious", "data-fg-wof327": ":0:/src/app/components/DatabaseSchema.tsx:524:15:25402:25:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof328", _fgB: 1793649787391, tag: "sensitive", "data-fg-wof328": ":0:/src/app/components/DatabaseSchema.tsx:525:15:25442:27:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof329", _fgB: 1793649787391, tag: "authentic", "data-fg-wof329": ":0:/src/app/components/DatabaseSchema.tsx:526:15:25484:27:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof330", _fgB: 1793649787391, tag: "logical", "data-fg-wof330": ":0:/src/app/components/DatabaseSchema.tsx:527:15:25526:25:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof331", _fgB: 1793649787391, tag: "kind", "data-fg-wof331": ":0:/src/app/components/DatabaseSchema.tsx:528:15:25566:22:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof332", _fgB: 1793649787391, tag: "playful", "data-fg-wof332": ":0:/src/app/components/DatabaseSchema.tsx:529:15:25603:25:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof333", _fgB: 1793649787391, tag: "perfectionist", "data-fg-wof333": ":0:/src/app/components/DatabaseSchema.tsx:530:15:25643:31:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof334", _fgB: 1793649787391, tag: "organized", "data-fg-wof334": ":0:/src/app/components/DatabaseSchema.tsx:531:15:25689:27:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof335", _fgB: 1793649787391, tag: "open_minded", "data-fg-wof335": ":0:/src/app/components/DatabaseSchema.tsx:532:15:25731:29:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof336", _fgB: 1793649787391, tag: "independent", "data-fg-wof336": ":0:/src/app/components/DatabaseSchema.tsx:533:15:25775:29:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof337", _fgB: 1793649787391, tag: "calm", "data-fg-wof337": ":0:/src/app/components/DatabaseSchema.tsx:534:15:25819:22:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof338", _fgB: 1793649787391, tag: "humble", "data-fg-wof338": ":0:/src/app/components/DatabaseSchema.tsx:535:15:25856:24:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof339", _fgB: 1793649787391, tag: "philosophical", "data-fg-wof339": ":0:/src/app/components/DatabaseSchema.tsx:536:15:25895:31:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof340", _fgB: 1793649787391, tag: "humorous", "data-fg-wof340": ":0:/src/app/components/DatabaseSchema.tsx:537:15:25941:26:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof341", _fgB: 1793649787391, tag: "optimistic", "data-fg-wof341": ":0:/src/app/components/DatabaseSchema.tsx:538:15:25982:28:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof342", _fgB: 1793649787391, tag: "pessimistic", "data-fg-wof342": ":0:/src/app/components/DatabaseSchema.tsx:539:15:26025:29:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof343", _fgB: 1793649787391, tag: "extroverted", "data-fg-wof343": ":0:/src/app/components/DatabaseSchema.tsx:540:15:26069:29:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof344", _fgB: 1793649787391, tag: "introverted", "data-fg-wof344": ":0:/src/app/components/DatabaseSchema.tsx:541:15:26113:29:e:TagPill::::::D0hw" })
          ] })
        ] }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof346", _fgB: 1793649787391, className: "border-2 border-purple-200 rounded-lg p-4 bg-purple-50", "data-fg-wof346": ":0:/src/app/components/DatabaseSchema.tsx:546:11:26221:1146:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof347", _fgB: 1793649787391, className: "text-purple-900 mb-3", "data-fg-wof347": ":0:/src/app/components/DatabaseSchema.tsx:547:13:26306:69:e:div:t", children: "🕊 Life Context (20 tags)" }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof349", _fgB: 1793649787391, className: "grid grid-cols-4 gap-2 text-sm", "data-fg-wof349": ":0:/src/app/components/DatabaseSchema.tsx:548:13:26388:962:e:div:etetetetetetetetetetetetetetetetetetete", children: [
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof350", _fgB: 1793649787391, tag: "Tech_professional", "data-fg-wof350": ":0:/src/app/components/DatabaseSchema.tsx:549:15:26451:35:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof351", _fgB: 1793649787391, tag: "parenting_toddler", "data-fg-wof351": ":0:/src/app/components/DatabaseSchema.tsx:550:15:26501:35:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof352", _fgB: 1793649787391, tag: "career_change", "data-fg-wof352": ":0:/src/app/components/DatabaseSchema.tsx:551:15:26551:31:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof353", _fgB: 1793649787391, tag: "caregiver", "data-fg-wof353": ":0:/src/app/components/DatabaseSchema.tsx:552:15:26597:27:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof354", _fgB: 1793649787391, tag: "stressed_phase", "data-fg-wof354": ":0:/src/app/components/DatabaseSchema.tsx:553:15:26639:32:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof355", _fgB: 1793649787391, tag: "spiritual_search", "data-fg-wof355": ":0:/src/app/components/DatabaseSchema.tsx:554:15:26686:34:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof356", _fgB: 1793649787391, tag: "health_focus", "data-fg-wof356": ":0:/src/app/components/DatabaseSchema.tsx:555:15:26735:30:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof357", _fgB: 1793649787391, tag: "goal_planning", "data-fg-wof357": ":0:/src/app/components/DatabaseSchema.tsx:556:15:26780:31:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof358", _fgB: 1793649787391, tag: "burnout_recovery", "data-fg-wof358": ":0:/src/app/components/DatabaseSchema.tsx:557:15:26826:34:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof359", _fgB: 1793649787391, tag: "self_transformation", "data-fg-wof359": ":0:/src/app/components/DatabaseSchema.tsx:558:15:26875:37:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof360", _fgB: 1793649787391, tag: "new_parent", "data-fg-wof360": ":0:/src/app/components/DatabaseSchema.tsx:559:15:26927:28:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof361", _fgB: 1793649787391, tag: "empty_nester", "data-fg-wof361": ":0:/src/app/components/DatabaseSchema.tsx:560:15:26970:30:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof362", _fgB: 1793649787391, tag: "student", "data-fg-wof362": ":0:/src/app/components/DatabaseSchema.tsx:561:15:27015:25:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof363", _fgB: 1793649787391, tag: "freelancer", "data-fg-wof363": ":0:/src/app/components/DatabaseSchema.tsx:562:15:27055:28:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof364", _fgB: 1793649787391, tag: "entrepreneur", "data-fg-wof364": ":0:/src/app/components/DatabaseSchema.tsx:563:15:27098:30:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof365", _fgB: 1793649787391, tag: "single", "data-fg-wof365": ":0:/src/app/components/DatabaseSchema.tsx:564:15:27143:24:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof366", _fgB: 1793649787391, tag: "married", "data-fg-wof366": ":0:/src/app/components/DatabaseSchema.tsx:565:15:27182:25:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof367", _fgB: 1793649787391, tag: "divorced", "data-fg-wof367": ":0:/src/app/components/DatabaseSchema.tsx:566:15:27222:26:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof368", _fgB: 1793649787391, tag: "expat_life", "data-fg-wof368": ":0:/src/app/components/DatabaseSchema.tsx:567:15:27263:28:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof369", _fgB: 1793649787391, tag: "retired", "data-fg-wof369": ":0:/src/app/components/DatabaseSchema.tsx:568:15:27306:25:e:TagPill::::::D0hw" })
          ] })
        ] }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof371", _fgB: 1793649787391, className: "border-2 border-green-200 rounded-lg p-4 bg-green-50", "data-fg-wof371": ":0:/src/app/components/DatabaseSchema.tsx:573:11:27410:1193:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof372", _fgB: 1793649787391, className: "text-green-900 mb-3", "data-fg-wof372": ":0:/src/app/components/DatabaseSchema.tsx:574:13:27493:67:e:div:t", children: "✨ Growth Areas (20 tags)" }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof374", _fgB: 1793649787391, className: "grid grid-cols-4 gap-2 text-sm", "data-fg-wof374": ":0:/src/app/components/DatabaseSchema.tsx:575:13:27573:1013:e:div:etetetetetetetetetetetetetetetetetetete", children: [
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof375", _fgB: 1793649787391, tag: "Mindfulness_growth", "data-fg-wof375": ":0:/src/app/components/DatabaseSchema.tsx:576:15:27636:36:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof376", _fgB: 1793649787391, tag: "habit_building", "data-fg-wof376": ":0:/src/app/components/DatabaseSchema.tsx:577:15:27687:32:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof377", _fgB: 1793649787391, tag: "emotional_intelligence", "data-fg-wof377": ":0:/src/app/components/DatabaseSchema.tsx:578:15:27734:40:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof378", _fgB: 1793649787391, tag: "communication", "data-fg-wof378": ":0:/src/app/components/DatabaseSchema.tsx:579:15:27789:31:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof379", _fgB: 1793649787391, tag: "compassion", "data-fg-wof379": ":0:/src/app/components/DatabaseSchema.tsx:580:15:27835:28:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof380", _fgB: 1793649787391, tag: "time_management", "data-fg-wof380": ":0:/src/app/components/DatabaseSchema.tsx:581:15:27878:33:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof381", _fgB: 1793649787391, tag: "surrender", "data-fg-wof381": ":0:/src/app/components/DatabaseSchema.tsx:582:15:27926:27:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof382", _fgB: 1793649787391, tag: "spiritual_success", "data-fg-wof382": ":0:/src/app/components/DatabaseSchema.tsx:583:15:27968:35:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof383", _fgB: 1793649787391, tag: "joy_presence", "data-fg-wof383": ":0:/src/app/components/DatabaseSchema.tsx:584:15:28018:30:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof384", _fgB: 1793649787391, tag: "dharma_alignment", "data-fg-wof384": ":0:/src/app/components/DatabaseSchema.tsx:585:15:28063:34:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof385", _fgB: 1793649787391, tag: "purpose_finding", "data-fg-wof385": ":0:/src/app/components/DatabaseSchema.tsx:586:15:28112:33:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof386", _fgB: 1793649787391, tag: "forgiveness", "data-fg-wof386": ":0:/src/app/components/DatabaseSchema.tsx:587:15:28160:29:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof387", _fgB: 1793649787391, tag: "gratitude_practice", "data-fg-wof387": ":0:/src/app/components/DatabaseSchema.tsx:588:15:28204:36:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof388", _fgB: 1793649787391, tag: "self_love", "data-fg-wof388": ":0:/src/app/components/DatabaseSchema.tsx:589:15:28255:27:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof389", _fgB: 1793649787391, tag: "stress_reduction", "data-fg-wof389": ":0:/src/app/components/DatabaseSchema.tsx:590:15:28297:34:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof390", _fgB: 1793649787391, tag: "relationship_healing", "data-fg-wof390": ":0:/src/app/components/DatabaseSchema.tsx:591:15:28346:38:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof391", _fgB: 1793649787391, tag: "focus_improvement", "data-fg-wof391": ":0:/src/app/components/DatabaseSchema.tsx:592:15:28399:35:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof392", _fgB: 1793649787391, tag: "confidence_boost", "data-fg-wof392": ":0:/src/app/components/DatabaseSchema.tsx:593:15:28449:34:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof393", _fgB: 1793649787391, tag: "patience", "data-fg-wof393": ":0:/src/app/components/DatabaseSchema.tsx:594:15:28498:26:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof394", _fgB: 1793649787391, tag: "acceptance", "data-fg-wof394": ":0:/src/app/components/DatabaseSchema.tsx:595:15:28539:28:e:TagPill::::::D0hw" })
          ] })
        ] }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof396", _fgB: 1793649787391, className: "border-2 border-pink-200 rounded-lg p-4 bg-pink-50", "data-fg-wof396": ":0:/src/app/components/DatabaseSchema.tsx:600:11:28663:1273:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof397", _fgB: 1793649787391, className: "text-pink-900 mb-3", "data-fg-wof397": ":0:/src/app/components/DatabaseSchema.tsx:601:13:28744:84:e:div:t", children: "📱 Social Media & Digital Habits (20 tags)" }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof399", _fgB: 1793649787391, className: "grid grid-cols-4 gap-2 text-sm", "data-fg-wof399": ":0:/src/app/components/DatabaseSchema.tsx:602:13:28841:1078:e:div:etetetetetetetetetetetetetetetetetetete", children: [
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof400", _fgB: 1793649787391, tag: "Social_media_addiction", "data-fg-wof400": ":0:/src/app/components/DatabaseSchema.tsx:603:15:28904:40:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof401", _fgB: 1793649787391, tag: "doomscrolling", "data-fg-wof401": ":0:/src/app/components/DatabaseSchema.tsx:604:15:28959:31:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof402", _fgB: 1793649787391, tag: "content_creation", "data-fg-wof402": ":0:/src/app/components/DatabaseSchema.tsx:605:15:29005:34:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof403", _fgB: 1793649787391, tag: "comparison_anxiety", "data-fg-wof403": ":0:/src/app/components/DatabaseSchema.tsx:606:15:29054:36:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof404", _fgB: 1793649787391, tag: "validation_seeking", "data-fg-wof404": ":0:/src/app/components/DatabaseSchema.tsx:607:15:29105:36:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof405", _fgB: 1793649787391, tag: "influencer_following", "data-fg-wof405": ":0:/src/app/components/DatabaseSchema.tsx:608:15:29156:38:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof406", _fgB: 1793649787391, tag: "mindless_scrolling", "data-fg-wof406": ":0:/src/app/components/DatabaseSchema.tsx:609:15:29209:36:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof407", _fgB: 1793649787391, tag: "digital_detox", "data-fg-wof407": ":0:/src/app/components/DatabaseSchema.tsx:610:15:29260:31:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof408", _fgB: 1793649787391, tag: "online_boundaries", "data-fg-wof408": ":0:/src/app/components/DatabaseSchema.tsx:611:15:29306:35:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof409", _fgB: 1793649787391, tag: "screen_time_balance", "data-fg-wof409": ":0:/src/app/components/DatabaseSchema.tsx:612:15:29356:37:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof410", _fgB: 1793649787391, tag: "news_overload", "data-fg-wof410": ":0:/src/app/components/DatabaseSchema.tsx:613:15:29408:31:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof411", _fgB: 1793649787391, tag: "self_image_pressure", "data-fg-wof411": ":0:/src/app/components/DatabaseSchema.tsx:614:15:29454:37:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof412", _fgB: 1793649787391, tag: "fear_of_missing_out", "data-fg-wof412": ":0:/src/app/components/DatabaseSchema.tsx:615:15:29506:37:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof413", _fgB: 1793649787391, tag: "sharing_personal_life", "data-fg-wof413": ":0:/src/app/components/DatabaseSchema.tsx:616:15:29558:39:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof414", _fgB: 1793649787391, tag: "social_media_pause", "data-fg-wof414": ":0:/src/app/components/DatabaseSchema.tsx:617:15:29612:36:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof415", _fgB: 1793649787391, tag: "positive_inspiration", "data-fg-wof415": ":0:/src/app/components/DatabaseSchema.tsx:618:15:29663:38:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof416", _fgB: 1793649787391, tag: "curated_perfection", "data-fg-wof416": ":0:/src/app/components/DatabaseSchema.tsx:619:15:29716:36:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof417", _fgB: 1793649787391, tag: "authentic_posting", "data-fg-wof417": ":0:/src/app/components/DatabaseSchema.tsx:620:15:29767:35:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof418", _fgB: 1793649787391, tag: "privacy_concerns", "data-fg-wof418": ":0:/src/app/components/DatabaseSchema.tsx:621:15:29817:34:e:TagPill::::::D0hw" }),
            /* @__PURE__ */ t(e, { _fgT: c, _fgS: "wof419", _fgB: 1793649787391, tag: "tech_mindfulness", "data-fg-wof419": ":0:/src/app/components/DatabaseSchema.tsx:622:15:29866:34:e:TagPill::::::D0hw" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof420", _fgB: 1793649787391, className: "bg-slate-100 border border-slate-300 rounded-lg p-4 mt-6", "data-fg-wof420": ":0:/src/app/components/DatabaseSchema.tsx:627:9:29961:827:e:div:ete", children: [
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof421", _fgB: 1793649787391, className: "text-slate-900 mb-2", "data-fg-wof421": ":0:/src/app/components/DatabaseSchema.tsx:628:11:30046:71:e:div:t", children: "💡 Usage Notes for Engineers" }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof423", _fgB: 1793649787391, className: "space-y-2 text-sm text-slate-700", "data-fg-wof423": ":0:/src/app/components/DatabaseSchema.tsx:629:11:30128:645:e:div:etetetetete", children: [
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof424", _fgB: 1793649787391, "data-fg-wof424": ":0:/src/app/components/DatabaseSchema.tsx:630:13:30191:63:e:div:t", children: "• Display tags grouped by category in the sign-up UI" }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof426", _fgB: 1793649787391, "data-fg-wof426": ":0:/src/app/components/DatabaseSchema.tsx:631:13:30267:67:e:div:t", children: "• Allow users to select multiple tags from each category" }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof428", _fgB: 1793649787391, "data-fg-wof428": ":0:/src/app/components/DatabaseSchema.tsx:632:13:30347:57:e:div:t", children: "• Tag keys use snake_case for database storage" }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof430", _fgB: 1793649787391, "data-fg-wof430": ":0:/src/app/components/DatabaseSchema.tsx:633:13:30417:127:e:div:t", children: '• Tag labels should be converted to Title Case for display (e.g., "relationship_conflict" → "Relationship Conflict")' }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof432", _fgB: 1793649787391, "data-fg-wof432": ":0:/src/app/components/DatabaseSchema.tsx:634:13:30557:111:e:div:ts", children: [
            "• POST /digital-twin/tags with array of selected tag objects: ",
            "[{ tag_key, tag_type, tag_label }]"
          ] }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof435", _fgB: 1793649787391, "data-fg-wof435": ":0:/src/app/components/DatabaseSchema.tsx:635:13:30681:75:e:div:t", children: "• Consider allowing 2-5 tags per category for best twin accuracy" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ o(e, { _fgT: C, _fgS: "wof438", _fgB: 1793649787391, className: "p-6 mt-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-300", "data-fg-wof438": ":0:/src/app/components/DatabaseSchema.tsx:641:7:30853:4175:e:Card:etete::::s:CuJ6:1", children: [
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof439", _fgB: 1793649787391, className: "mb-6", "data-fg-wof439": ":0:/src/app/components/DatabaseSchema.tsx:642:9:30962:382:e:div:ete", children: [
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof440", _fgB: 1793649787391, className: "text-indigo-900 mb-2", "data-fg-wof440": ":0:/src/app/components/DatabaseSchema.tsx:643:11:30995:88:e:div:t", children: "Day 0 Introductory Call - Nine Key Questions" }),
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof442", _fgB: 1793649787391, className: "text-indigo-700", "data-fg-wof442": ":0:/src/app/components/DatabaseSchema.tsx:644:11:31094:235:e:div:t", children: "The AI Coach conducts a structured, empathetic conversation to understand the user deeply. Each question maps to specific digital twin fields and helps build initial trust." })
      ] }),
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof444", _fgB: 1793649787391, className: "space-y-4", "data-fg-wof444": ":0:/src/app/components/DatabaseSchema.tsx:649:9:31354:2859:e:div:etetetetetetetete", children: [
        /* @__PURE__ */ t(
          e,
          {
            _fgT: ee,
            _fgS: "wof445",
            _fgB: 1793649787391,
            number: 1,
            question: "Tell me a little about yourself — what does life look like these days?",
            purpose: "Reveals family, living situation, and work naturally.",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
            "data-fg-wof445": ":0:/src/app/components/DatabaseSchema.tsx:650:11:31392:295:e:IntroQuestion::::::BHW9"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: ee,
            _fgS: "wof446",
            _fgB: 1793649787391,
            number: 2,
            question: "What does a typical day feel like for you, from morning to evening?",
            purpose: "Captures rhythm, energy, time pressures, and balance.",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
            "data-fg-wof446": ":0:/src/app/components/DatabaseSchema.tsx:658:11:31699:292:e:IntroQuestion::::::BHW9"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: ee,
            _fgS: "wof447",
            _fgB: 1793649787391,
            number: 3,
            question: "How have you been feeling lately — emotionally or mentally?",
            purpose: "(Calm, stressed, anxious, peaceful, inspired, tired, etc.)",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
            "data-fg-wof447": ":0:/src/app/components/DatabaseSchema.tsx:666:11:32003:289:e:IntroQuestion::::::BHW9"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: ee,
            _fgS: "wof448",
            _fgB: 1793649787391,
            number: 4,
            question: "What's one thing in your life that currently feels most challenging?",
            purpose: "(Work, relationships, balance, purpose, etc.)",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
            "data-fg-wof448": ":0:/src/app/components/DatabaseSchema.tsx:674:11:32304:285:e:IntroQuestion::::::BHW9"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: ee,
            _fgS: "wof449",
            _fgB: 1793649787391,
            number: 5,
            question: "What brought you to ZenAI?",
            purpose: "Identifies motivation and readiness for change.",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
            "data-fg-wof449": ":0:/src/app/components/DatabaseSchema.tsx:682:11:32601:245:e:IntroQuestion::::::BHW9"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: ee,
            _fgS: "wof450",
            _fgB: 1793649787391,
            number: 6,
            question: "Which type of growth matters most to you right now — emotional, physical, relational, or spiritual? What would you most like to improve or transform through ZenAI?",
            purpose: "",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
            "data-fg-wof450": ":0:/src/app/components/DatabaseSchema.tsx:690:11:32858:335:e:IntroQuestion::::::BHW9"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: ee,
            _fgS: "wof451",
            _fgB: 1793649787391,
            number: 7,
            question: "How do you usually like to learn or reflect — by listening, watching, reading, journaling, practicing, or discussing?",
            purpose: "",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
            "data-fg-wof451": ":0:/src/app/components/DatabaseSchema.tsx:698:11:33205:289:e:IntroQuestion::::::BHW9"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: ee,
            _fgS: "wof452",
            _fgB: 1793649787391,
            number: 8,
            question: "Would you say you're more spiritual, religious, both, or neither — and how open are you to exploring ideas from different religions or paths?",
            purpose: "",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
            "data-fg-wof452": ":0:/src/app/components/DatabaseSchema.tsx:706:11:33506:313:e:IntroQuestion::::::BHW9"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: ee,
            _fgS: "wof453",
            _fgB: 1793649787391,
            number: 9,
            question: "If you're comfortable sharing, how do you identify in terms of gender and sexual orientation, and what pronouns would you like me to use?",
            purpose: "Optional, ensures the coach can address them respectfully.",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
            "data-fg-wof453": ":0:/src/app/components/DatabaseSchema.tsx:714:11:33831:367:e:IntroQuestion::::::BHW9"
          }
        )
      ] }),
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof454", _fgB: 1793649787391, className: "bg-indigo-100 border border-indigo-300 rounded-lg p-4 mt-6", "data-fg-wof454": ":0:/src/app/components/DatabaseSchema.tsx:723:9:34223:791:e:div:ete", children: [
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof455", _fgB: 1793649787391, className: "text-indigo-900 mb-2", "data-fg-wof455": ":0:/src/app/components/DatabaseSchema.tsx:724:11:34310:67:e:div:t", children: "💡 Implementation Notes" }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof457", _fgB: 1793649787391, className: "space-y-2 text-sm text-indigo-800", "data-fg-wof457": ":0:/src/app/components/DatabaseSchema.tsx:725:11:34388:611:e:div:etetetete", children: [
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof458", _fgB: 1793649787391, "data-fg-wof458": ":0:/src/app/components/DatabaseSchema.tsx:726:13:34452:88:e:div:t", children: "• These questions are presented conversationally by the AI Coach during Day 0" }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof460", _fgB: 1793649787391, "data-fg-wof460": ":0:/src/app/components/DatabaseSchema.tsx:727:13:34553:98:e:div:t", children: "• Responses are processed by the Ingestion Service to populate digital_twin_user fields" }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof462", _fgB: 1793649787391, "data-fg-wof462": ":0:/src/app/components/DatabaseSchema.tsx:728:13:34664:70:e:div:t", children: '• Each response becomes a memory_entry with source="intake"' }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof464", _fgB: 1793649787391, "data-fg-wof464": ":0:/src/app/components/DatabaseSchema.tsx:729:13:34747:137:e:div:t", children: "• Twin Summarization Helper generates intake_story_text, motivation_reason_text, daily_rhythm_summary, and main_challenge_text" }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof466", _fgB: 1793649787391, "data-fg-wof466": ":0:/src/app/components/DatabaseSchema.tsx:730:13:34897:85:e:div:t", children: "• This conversation establishes the foundation for the user's digital twin" })
        ] })
      ] })
    ] })
  ] });
}
function Ke({ icon: a, table: s, records: r, color: n }) {
  return /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof468", _fgB: 1793649787391, _fgD: !0, className: `${{
    blue: "bg-blue-50 border-blue-300 text-blue-700",
    green: "bg-green-50 border-green-300 text-green-700",
    purple: "bg-purple-50 border-purple-300 text-purple-700",
    amber: "bg-amber-50 border-amber-300 text-amber-700"
  }[n]} border-2 rounded-lg p-4`, "data-fg-wof468": ":0:/src/app/components/DatabaseSchema.tsx:746:5:35450:235:e:div:etete:1", children: [
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof469", _fgB: 1793649787391, className: "mb-2", "data-fg-wof469": ":0:/src/app/components/DatabaseSchema.tsx:747:7:35540:34:e:div:x", children: a }),
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof471", _fgB: 1793649787391, className: "mb-1", "data-fg-wof471": ":0:/src/app/components/DatabaseSchema.tsx:748:7:35581:35:e:div:x", children: s }),
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof473", _fgB: 1793649787391, className: "text-sm opacity-75", "data-fg-wof473": ":0:/src/app/components/DatabaseSchema.tsx:749:7:35623:51:e:div:x", children: r })
  ] });
}
function $({ title: a, fields: s }) {
  return /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof475", _fgB: 1793649787391, _fgD: !0, "data-fg-wof475": ":0:/src/app/components/DatabaseSchema.tsx:756:5:35826:504:e:div:ete:1", children: [
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof476", _fgB: 1793649787391, className: "text-slate-900 mb-3 pb-2 border-b border-slate-300", "data-fg-wof476": ":0:/src/app/components/DatabaseSchema.tsx:757:7:35838:81:e:div:x", children: a }),
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof478", _fgB: 1793649787391, className: "space-y-2", "data-fg-wof478": ":0:/src/app/components/DatabaseSchema.tsx:758:7:35926:393:e:div:x", children: s.map((r, n) => /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof480", _fgB: 1793649787391, className: "flex items-start gap-4 text-sm", "data-fg-wof480": ":0:/src/app/components/DatabaseSchema.tsx:760:11:36002:292:e:div:etete", children: [
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof481", _fgB: 1793649787391, className: "font-mono text-slate-900 w-64", "data-fg-wof481": ":0:/src/app/components/DatabaseSchema.tsx:761:13:36073:65:e:div:x", children: r.name }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof483", _fgB: 1793649787391, className: "text-slate-600 w-32", "data-fg-wof483": ":0:/src/app/components/DatabaseSchema.tsx:762:13:36151:55:e:div:x", children: r.type }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof485", _fgB: 1793649787391, className: "text-slate-700 flex-1", "data-fg-wof485": ":0:/src/app/components/DatabaseSchema.tsx:763:13:36219:58:e:div:x", children: r.notes })
    ] }, n)) })
  ] });
}
function ne({ name: a, count: s, examples: r }) {
  return /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof487", _fgB: 1793649787391, _fgD: !0, className: "bg-white rounded-lg p-3 border border-green-200", "data-fg-wof487": ":0:/src/app/components/DatabaseSchema.tsx:773:5:36457:364:e:div:etete:1", children: [
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof488", _fgB: 1793649787391, className: "text-green-900 mb-1", "data-fg-wof488": ":0:/src/app/components/DatabaseSchema.tsx:774:7:36529:49:e:div:x", children: a }),
    /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof490", _fgB: 1793649787391, className: "text-green-600 text-sm mb-2", "data-fg-wof490": ":0:/src/app/components/DatabaseSchema.tsx:775:7:36585:66:e:div:xt", children: [
      s,
      " options"
    ] }),
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof493", _fgB: 1793649787391, className: "text-xs text-green-700 space-y-0.5", "data-fg-wof493": ":0:/src/app/components/DatabaseSchema.tsx:776:7:36658:152:e:div:x", children: r.map((n, i) => /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof495", _fgB: 1793649787391, "data-fg-wof495": ":0:/src/app/components/DatabaseSchema.tsx:778:11:36758:27:e:div:tx", children: [
      "• ",
      n
    ] }, i)) })
  ] });
}
function De({ name: a, description: s }) {
  return /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof498", _fgB: 1793649787391, _fgD: !0, className: "bg-white rounded-lg p-3 border border-purple-200", "data-fg-wof498": ":0:/src/app/components/DatabaseSchema.tsx:787:5:36929:219:e:div:ete:1", children: [
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof499", _fgB: 1793649787391, className: "text-purple-900 mb-1 font-mono text-sm", "data-fg-wof499": ":0:/src/app/components/DatabaseSchema.tsx:788:7:37002:68:e:div:x", children: a }),
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof501", _fgB: 1793649787391, className: "text-purple-700 text-xs", "data-fg-wof501": ":0:/src/app/components/DatabaseSchema.tsx:789:7:37077:60:e:div:x", children: s })
  ] });
}
function c({ tag: a }) {
  return /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof503", _fgB: 1793649787391, _fgD: !0, className: "bg-slate-100 border border-slate-300 rounded-full px-2 py-1 text-sm text-slate-700", "data-fg-wof503": ":0:/src/app/components/DatabaseSchema.tsx:796:5:37217:123:e:div:x:1", children: a });
}
function ee({ number: a, question: s, purpose: r, bgColor: n, borderColor: i }) {
  return /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof505", _fgB: 1793649787391, _fgD: !0, className: `border ${i} rounded-lg p-4 ${n}`, "data-fg-wof505": ":0:/src/app/components/DatabaseSchema.tsx:804:5:37535:213:e:div:ete:1", children: [
    /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "wof506", _fgB: 1793649787391, className: "text-indigo-900 mb-2", "data-fg-wof506": ":0:/src/app/components/DatabaseSchema.tsx:805:7:37609:65:e:div:txtx", children: [
      "Q",
      a,
      ": ",
      s
    ] }),
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "wof511", _fgB: 1793649787391, className: "text-sm text-indigo-700", "data-fg-wof511": ":0:/src/app/components/DatabaseSchema.tsx:806:7:37681:56:e:div:x", children: r })
  ] });
}
function Go() {
  return /* @__PURE__ */ o(e, { _fgT: Nt, _fgS: "cjuy0", _fgB: 1793649787415, _fgD: !0, defaultValue: "ingestion", className: "w-full", "data-fg-cjuy0": ":0:/src/app/components/ServiceDetails.tsx:8:5:273:488:e:Tabs:etete:1:::s:tfa:1", children: [
    /* @__PURE__ */ o(e, { _fgT: Ct, _fgS: "cjuy1", _fgB: 1793649787415, className: "grid w-full grid-cols-2 mb-6", "data-fg-cjuy1": ":0:/src/app/components/ServiceDetails.tsx:9:7:330:233:e:TabsList:ete::::s:NDg:1", children: [
      /* @__PURE__ */ t(e, { _fgT: Z, _fgS: "cjuy2", _fgB: 1793649787415, value: "ingestion", "data-fg-cjuy2": ":0:/src/app/components/ServiceDetails.tsx:10:9:390:76:e:TabsTrigger:t::::s:BlUk:1", children: "Ingestion Library (Write + LLM)" }),
      /* @__PURE__ */ t(e, { _fgT: Z, _fgS: "cjuy4", _fgB: 1793649787415, value: "context", "data-fg-cjuy4": ":0:/src/app/components/ServiceDetails.tsx:11:9:475:70:e:TabsTrigger:t::::s:BlUk:1", children: "Context Library (Read Only)" })
    ] }),
    /* @__PURE__ */ t(e, { _fgT: X, _fgS: "cjuy6", _fgB: 1793649787415, value: "ingestion", "data-fg-cjuy6": ":0:/src/app/components/ServiceDetails.tsx:14:7:571:87:e:TabsContent:e::::s:D5Pb:1", children: /* @__PURE__ */ t(e, { _fgT: Jo, _fgS: "cjuy7", _fgB: 1793649787415, "data-fg-cjuy7": ":0:/src/app/components/ServiceDetails.tsx:15:9:611:26:e:IngestionServiceDetail::::::DC8m" }) }),
    /* @__PURE__ */ t(e, { _fgT: X, _fgS: "cjuy8", _fgB: 1793649787415, value: "context", "data-fg-cjuy8": ":0:/src/app/components/ServiceDetails.tsx:18:7:666:83:e:TabsContent:e::::s:D5Pb:1", children: /* @__PURE__ */ t(e, { _fgT: $o, _fgS: "cjuy9", _fgB: 1793649787415, "data-fg-cjuy9": ":0:/src/app/components/ServiceDetails.tsx:19:9:704:24:e:ContextServiceDetail::::::Capt" }) })
  ] });
}
function Jo() {
  return /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy10", _fgB: 1793649787415, _fgD: !0, className: "space-y-6", "data-fg-cjuy10": ":0:/src/app/components/ServiceDetails.tsx:27:5:821:6583:e:div:xtetxtetxtetxte:1", children: [
    /* @__PURE__ */ o(e, { _fgT: C, _fgS: "cjuy12", _fgB: 1793649787415, className: "bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 p-6", "data-fg-cjuy12": ":0:/src/app/components/ServiceDetails.tsx:29:7:878:807:e:Card:etete::::s:CuJ6:1", children: [
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy13", _fgB: 1793649787415, className: "flex items-center gap-3 mb-4", "data-fg-cjuy13": ":0:/src/app/components/ServiceDetails.tsx:30:9:977:191:e:div:ete", children: [
        /* @__PURE__ */ t(e, { _fgT: Oa, _fgS: "cjuy14", _fgB: 1793649787415, className: "w-6 h-6 text-blue-600", "data-fg-cjuy14": ":0:node_modules/lucide-react:31:11:1034:41:e:Zap::::::Cp7" }),
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy15", _fgB: 1793649787415, className: "text-blue-900", "data-fg-cjuy15": ":0:/src/app/components/ServiceDetails.tsx:32:11:1086:67:e:div:t", children: "Digital Twin Ingestion Library" })
      ] }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy17", _fgB: 1793649787415, className: "text-blue-700 mb-4", "data-fg-cjuy17": ":0:/src/app/components/ServiceDetails.tsx:34:9:1177:230:e:div:t", children: "Library functions for writing and updating the twin. Called by UI backend, Journey Engine, Personal Chat, and Temporal workflows. Only these functions can call the LLM." }),
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy19", _fgB: 1793649787415, className: "grid grid-cols-3 gap-4", "data-fg-cjuy19": ":0:/src/app/components/ServiceDetails.tsx:37:9:1416:255:e:div:etete", children: [
        /* @__PURE__ */ t(e, { _fgT: he, _fgS: "cjuy20", _fgB: 1793649787415, label: "Type", value: "Library Functions", "data-fg-cjuy20": ":0:/src/app/components/ServiceDetails.tsx:38:11:1467:52:e:QuickStat::::::CCOJ" }),
        /* @__PURE__ */ t(e, { _fgT: he, _fgS: "cjuy21", _fgB: 1793649787415, label: "Database Access", value: "Read + Write", "data-fg-cjuy21": ":0:/src/app/components/ServiceDetails.tsx:39:11:1530:58:e:QuickStat::::::CCOJ" }),
        /* @__PURE__ */ t(e, { _fgT: he, _fgS: "cjuy22", _fgB: 1793649787415, label: "LLM Access", value: "Yes (via Helper)", "data-fg-cjuy22": ":0:/src/app/components/ServiceDetails.tsx:40:11:1599:57:e:QuickStat::::::CCOJ" })
      ] })
    ] }),
    /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy24", _fgB: 1793649787415, className: "grid grid-cols-2 gap-6", "data-fg-cjuy24": ":0:/src/app/components/ServiceDetails.tsx:45:7:1728:2327:e:div:etetetete", children: [
      /* @__PURE__ */ t(
        e,
        {
          _fgT: Ne,
          _fgS: "cjuy25",
          _fgB: 1793649787415,
          title: "Ingest Day 0 Data",
          color: "green",
          trigger: "ingest_day0_intro_answers()",
          steps: [
            "Store raw Day 0 answers as memory_entry",
            "Call helper.build_day_zero_summaries()",
            "Get: persona_profile, learning_style_probabilities, belief_profile",
            "Get: main_challenge/motivation/growth_focus primary tags",
            "Get: intake_story, family_description, work_context, etc.",
            "Update digital_twin_user with all generated fields",
            "Insert system_summary memory entries"
          ],
          "data-fg-cjuy25": ":0:/src/app/components/ServiceDetails.tsx:46:9:1777:619:e:OperationCard::::::Dk5V"
        }
      ),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: Ne,
          _fgS: "cjuy26",
          _fgB: 1793649787415,
          title: "Ingest Day 0 Tags",
          color: "green",
          trigger: "ingest_day0_tags()",
          steps: [
            "Store tag selections in user_tag table",
            "Call helper.summarize_tags()",
            "Update tags_by_type_snapshot and tag_profile_summary_text"
          ],
          "data-fg-cjuy26": ":0:/src/app/components/ServiceDetails.tsx:61:9:2406:327:e:OperationCard::::::Dk5V"
        }
      ),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: Ne,
          _fgS: "cjuy27",
          _fgB: 1793649787415,
          title: "Ingest Daily Mood",
          color: "yellow",
          trigger: "ingest_mood_checkin()",
          steps: [
            "Update mood_today_code in digital_twin_user",
            "Optionally create a small memory_entry",
            "Simple, fast operation"
          ],
          "data-fg-cjuy27": ":0:/src/app/components/ServiceDetails.tsx:72:9:2743:311:e:OperationCard::::::Dk5V"
        }
      ),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: Ne,
          _fgS: "cjuy28",
          _fgB: 1793649787415,
          title: "Ingest Journey Reflections",
          color: "blue",
          trigger: "ingest_journey_reflections()",
          steps: [
            "Insert journaling reflection as memory_entry",
            "Insert practice reflection as memory_entry",
            "Update current_day_number, journey_day_streak_days",
            "Optionally call helper.update_dynamic_summaries()",
            "Refresh: recent_events_summary, emotional_state_summary",
            "Refresh: pillar_progress_summary"
          ],
          "data-fg-cjuy28": ":0:/src/app/components/ServiceDetails.tsx:83:9:3064:542:e:OperationCard::::::Dk5V"
        }
      ),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: Ne,
          _fgS: "cjuy29",
          _fgB: 1793649787415,
          title: "Ingest Personal Chat",
          color: "purple",
          trigger: "ingest_chat_turn()",
          steps: [
            "Store user chat message as memory_entry",
            "Optionally call helper.update_dynamic_summaries()",
            "Refine recent_events_summary",
            "Refine emotional_state_summary",
            "No coaching - just updating internal map"
          ],
          "data-fg-cjuy29": ":0:/src/app/components/ServiceDetails.tsx:97:9:3616:426:e:OperationCard::::::Dk5V"
        }
      )
    ] }),
    /* @__PURE__ */ o(e, { _fgT: C, _fgS: "cjuy31", _fgB: 1793649787415, className: "bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 p-6", "data-fg-cjuy31": ":0:/src/app/components/ServiceDetails.tsx:112:7:4103:2371:e:Card:etetete::::s:CuJ6:1", children: [
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy32", _fgB: 1793649787415, className: "flex items-center gap-3 mb-4", "data-fg-cjuy32": ":0:/src/app/components/ServiceDetails.tsx:113:9:4208:210:e:div:ete", children: [
        /* @__PURE__ */ t(e, { _fgT: Ra, _fgS: "cjuy33", _fgB: 1793649787415, className: "w-6 h-6 text-purple-700", "data-fg-cjuy33": ":0:node_modules/lucide-react:114:11:4265:45:e:Brain::::::42K" }),
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy34", _fgB: 1793649787415, className: "text-purple-900", "data-fg-cjuy34": ":0:/src/app/components/ServiceDetails.tsx:115:11:4321:82:e:div:t", children: "Twin Summarization Helper (Internal Module)" })
      ] }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy36", _fgB: 1793649787415, className: "text-purple-700 mb-6", "data-fg-cjuy36": ":0:/src/app/components/ServiceDetails.tsx:117:9:4427:165:e:div:t", children: "Pure helper class/module within the Ingestion Service. This is the ONLY component that calls the LLM." }),
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy38", _fgB: 1793649787415, className: "space-y-4", "data-fg-cjuy38": ":0:/src/app/components/ServiceDetails.tsx:121:9:4602:1361:e:div:etete", children: [
        /* @__PURE__ */ t(
          e,
          {
            _fgT: pt,
            _fgS: "cjuy39",
            _fgB: 1793649787415,
            name: "build_day_zero_summaries",
            params: ["user_id", "day_zero_answers", "selected_tags"],
            returns: [
              "persona_profile (jsonb)",
              "learning_style_probabilities (jsonb)",
              "belief_profile (jsonb)",
              "main_challenge_primary_tag, motivation_primary_tag, growth_focus_primary_tag",
              "intake_story_text",
              "family_description_text",
              "work_context_text",
              "motivation_reason_text",
              "daily_rhythm_summary",
              "main_challenge_text",
              "digital_twin_summary_text"
            ],
            "data-fg-cjuy39": ":0:/src/app/components/ServiceDetails.tsx:122:11:4640:676:e:HelperMethod::::::Kvh"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: pt,
            _fgS: "cjuy40",
            _fgB: 1793649787415,
            name: "summarize_tags",
            params: ["user_id", "all_user_tags"],
            returns: [
              "tags_by_type_snapshot (jsonb) - grouped by tag_type",
              "tag_profile_summary_text - narrative description"
            ],
            "data-fg-cjuy40": ":0:/src/app/components/ServiceDetails.tsx:140:11:5328:283:e:HelperMethod::::::Kvh"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: pt,
            _fgS: "cjuy41",
            _fgB: 1793649787415,
            name: "update_dynamic_summaries",
            params: ["user_id", "recent_memory_entries", "current_twin_fields"],
            returns: [
              "recent_events_summary_text",
              "emotional_state_summary_text",
              "pillar_progress_summary_text"
            ],
            "data-fg-cjuy41": ":0:/src/app/components/ServiceDetails.tsx:149:11:5623:325:e:HelperMethod::::::Kvh"
          }
        )
      ] }),
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy42", _fgB: 1793649787415, className: "bg-purple-100 border border-purple-300 rounded-lg p-4 mt-6", "data-fg-cjuy42": ":0:/src/app/components/ServiceDetails.tsx:160:9:5973:487:e:div:ete", children: [
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy43", _fgB: 1793649787415, className: "text-purple-900 mb-2", "data-fg-cjuy43": ":0:/src/app/components/ServiceDetails.tsx:161:11:6060:70:e:div:t", children: "After Generating Summaries" }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy45", _fgB: 1793649787415, className: "space-y-2 text-sm text-purple-800", "data-fg-cjuy45": ":0:/src/app/components/ServiceDetails.tsx:162:11:6141:304:e:div:etete", children: [
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy46", _fgB: 1793649787415, "data-fg-cjuy46": ":0:/src/app/components/ServiceDetails.tsx:163:13:6205:66:e:div:t", children: "1. Update the corresponding fields in digital_twin_user" }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy48", _fgB: 1793649787415, "data-fg-cjuy48": ":0:/src/app/components/ServiceDetails.tsx:164:13:6284:66:e:div:t", children: '2. Insert a memory_entry with source = "system_summary"' }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy50", _fgB: 1793649787415, "data-fg-cjuy50": ":0:/src/app/components/ServiceDetails.tsx:165:13:6363:65:e:div:t", children: "3. This makes the summary searchable via vector search" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ o(e, { _fgT: C, _fgS: "cjuy53", _fgB: 1793649787415, className: "bg-amber-50 border-2 border-amber-300 p-6", "data-fg-cjuy53": ":0:/src/app/components/ServiceDetails.tsx:171:7:6511:882:e:Card:ete::::s:CuJ6:1", children: [
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy54", _fgB: 1793649787415, className: "text-amber-900 mb-4", "data-fg-cjuy54": ":0:/src/app/components/ServiceDetails.tsx:172:9:6580:60:e:div:t", children: "🔑 Key Principles" }),
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy56", _fgB: 1793649787415, className: "space-y-3", "data-fg-cjuy56": ":0:/src/app/components/ServiceDetails.tsx:173:9:6649:730:e:div:etetete", children: [
        /* @__PURE__ */ t(
          e,
          {
            _fgT: V,
            _fgS: "cjuy57",
            _fgB: 1793649787415,
            icon: /* @__PURE__ */ t(e, { _fgT: Q, _fgS: "cjuy58", _fgB: 1793649787415, className: "w-5 h-5 text-green-600", "data-fg-cjuy58": ":0:node_modules/lucide-react:175:19:6716:51:e:CheckCircle2::::::CELI" }),
            text: "Only place where twin data changes",
            "data-fg-cjuy57": ":0:/src/app/components/ServiceDetails.tsx:174:11:6687:148:e:Principle::::::DTdG"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: V,
            _fgS: "cjuy59",
            _fgB: 1793649787415,
            icon: /* @__PURE__ */ t(e, { _fgT: Q, _fgS: "cjuy60", _fgB: 1793649787415, className: "w-5 h-5 text-green-600", "data-fg-cjuy60": ":0:node_modules/lucide-react:179:19:6875:51:e:CheckCircle2::::::CELI" }),
            text: "Only place that calls LLM (via Twin Summarization Helper)",
            "data-fg-cjuy59": ":0:/src/app/components/ServiceDetails.tsx:178:11:6846:171:e:Principle::::::DTdG"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: V,
            _fgS: "cjuy61",
            _fgB: 1793649787415,
            icon: /* @__PURE__ */ t(e, { _fgT: Q, _fgS: "cjuy62", _fgB: 1793649787415, className: "w-5 h-5 text-green-600", "data-fg-cjuy62": ":0:node_modules/lucide-react:183:19:7057:51:e:CheckCircle2::::::CELI" }),
            text: "All writes go through this service",
            "data-fg-cjuy61": ":0:/src/app/components/ServiceDetails.tsx:182:11:7028:148:e:Principle::::::DTdG"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: V,
            _fgS: "cjuy63",
            _fgB: 1793649787415,
            icon: /* @__PURE__ */ t(e, { _fgT: Q, _fgS: "cjuy64", _fgB: 1793649787415, className: "w-5 h-5 text-green-600", "data-fg-cjuy64": ":0:node_modules/lucide-react:187:19:7216:51:e:CheckCircle2::::::CELI" }),
            text: "Mirrors important summaries as memory entries for searchability",
            "data-fg-cjuy63": ":0:/src/app/components/ServiceDetails.tsx:186:11:7187:177:e:Principle::::::DTdG"
          }
        )
      ] })
    ] })
  ] });
}
function $o() {
  return /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy65", _fgB: 1793649787415, _fgD: !0, className: "space-y-6", "data-fg-cjuy65": ":0:/src/app/components/ServiceDetails.tsx:198:5:7462:5946:e:div:xtetxtetxtetxtetxtetxte:1", children: [
    /* @__PURE__ */ o(e, { _fgT: C, _fgS: "cjuy67", _fgB: 1793649787415, className: "bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 p-6", "data-fg-cjuy67": ":0:/src/app/components/ServiceDetails.tsx:200:7:7519:942:e:Card:etetete::::s:CuJ6:1", children: [
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy68", _fgB: 1793649787415, className: "flex items-center gap-3 mb-4", "data-fg-cjuy68": ":0:/src/app/components/ServiceDetails.tsx:201:9:7621:198:e:div:ete", children: [
        /* @__PURE__ */ t(e, { _fgT: La, _fgS: "cjuy69", _fgB: 1793649787415, className: "w-6 h-6 text-green-600", "data-fg-cjuy69": ":0:node_modules/lucide-react:202:11:7678:49:e:FileSearch::::::Cct2" }),
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy70", _fgB: 1793649787415, className: "text-green-900", "data-fg-cjuy70": ":0:/src/app/components/ServiceDetails.tsx:203:11:7738:66:e:div:t", children: "Digital Twin Context Library" })
      ] }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy72", _fgB: 1793649787415, className: "text-green-700 mb-4", "data-fg-cjuy72": ":0:/src/app/components/ServiceDetails.tsx:205:9:7828:239:e:div:t", children: "Library functions for reading and assembling context blocks. Called by Journey Engine, Personal Chat, and UI backend. Assembles pre-computed summaries and runs vector searches." }),
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy74", _fgB: 1793649787415, className: "grid grid-cols-3 gap-4", "data-fg-cjuy74": ":0:/src/app/components/ServiceDetails.tsx:208:9:8076:242:e:div:etete", children: [
        /* @__PURE__ */ t(e, { _fgT: he, _fgS: "cjuy75", _fgB: 1793649787415, label: "Type", value: "Library Functions", "data-fg-cjuy75": ":0:/src/app/components/ServiceDetails.tsx:209:11:8127:52:e:QuickStat::::::CCOJ" }),
        /* @__PURE__ */ t(e, { _fgT: he, _fgS: "cjuy76", _fgB: 1793649787415, label: "Database Access", value: "Read Only*", "data-fg-cjuy76": ":0:/src/app/components/ServiceDetails.tsx:210:11:8190:56:e:QuickStat::::::CCOJ" }),
        /* @__PURE__ */ t(e, { _fgT: he, _fgS: "cjuy77", _fgB: 1793649787415, label: "LLM Access", value: "Never", "data-fg-cjuy77": ":0:/src/app/components/ServiceDetails.tsx:211:11:8257:46:e:QuickStat::::::CCOJ" })
      ] }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy78", _fgB: 1793649787415, className: "text-green-600 text-sm mt-3", "data-fg-cjuy78": ":0:/src/app/components/ServiceDetails.tsx:213:9:8327:120:e:div:t", children: "* Only writes to context_snapshot for audit trail" })
    ] }),
    /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy81", _fgB: 1793649787415, className: "grid grid-cols-2 gap-6", "data-fg-cjuy81": ":0:/src/app/components/ServiceDetails.tsx:219:7:8503:1310:e:div:ete", children: [
      /* @__PURE__ */ t(
        e,
        {
          _fgT: ea,
          _fgS: "cjuy82",
          _fgB: 1793649787415,
          title: "Build Journey Context",
          endpoint: "build_journey_context()",
          params: ["user_id", "journey_key", "day_number"],
          steps: [
            "Load digital_twin_user row",
            "Load tags_by_type_snapshot and tag summaries",
            "Run vector search on memory_entry:",
            "  - Filter: last 14 days",
            "  - Optional: filter by pillar_hint",
            "  - Order by similarity, LIMIT 10",
            "Build memory_snippets array",
            "Assemble journey_context JSON",
            "Insert context_snapshot (source=journey_day_start)",
            "Return context to Journey Engine"
          ],
          "data-fg-cjuy82": ":0:/src/app/components/ServiceDetails.tsx:220:9:8552:699:e:ContextOperation::::::CqBe"
        }
      ),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: ea,
          _fgS: "cjuy83",
          _fgB: 1793649787415,
          title: "Build Chat Context",
          endpoint: "build_chat_context()",
          params: ["user_id"],
          steps: [
            "Load digital_twin_user row",
            "Run vector search on memory_entry:",
            "  - Filter: last 30 days",
            "  - Order by similarity, LIMIT 10",
            "Build memory_snippets array",
            "Assemble chat_context JSON",
            "Insert context_snapshot (source=chat_turn)",
            "Return context to Chat Engine"
          ],
          "data-fg-cjuy83": ":0:/src/app/components/ServiceDetails.tsx:238:9:9261:539:e:ContextOperation::::::CqBe"
        }
      )
    ] }),
    /* @__PURE__ */ o(e, { _fgT: C, _fgS: "cjuy85", _fgB: 1793649787415, className: "p-6 border-2 border-green-300", "data-fg-cjuy85": ":0:/src/app/components/ServiceDetails.tsx:256:7:9849:508:e:Card:ete::::s:CuJ6:1", children: [
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy86", _fgB: 1793649787415, className: "text-green-900 mb-4", "data-fg-cjuy86": ":0:/src/app/components/ServiceDetails.tsx:257:9:9906:56:e:div:t", children: "Tag Retrieval" }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy88", _fgB: 1793649787415, className: "space-y-4", "data-fg-cjuy88": ":0:/src/app/components/ServiceDetails.tsx:258:9:9971:372:e:div:e", children: /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy89", _fgB: 1793649787415, className: "bg-green-50 rounded-lg p-4 border border-green-200", "data-fg-cjuy89": ":0:/src/app/components/ServiceDetails.tsx:259:11:10009:319:e:div:ete", children: [
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy90", _fgB: 1793649787415, className: "text-green-800 mb-2", "data-fg-cjuy90": ":0:/src/app/components/ServiceDetails.tsx:260:13:10090:58:e:div:t", children: "get_user_tags()" }),
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy92", _fgB: 1793649787415, className: "text-sm text-green-700", "data-fg-cjuy92": ":0:/src/app/components/ServiceDetails.tsx:261:13:10161:150:e:div:t", children: "Returns current tag selections for a user by reading from the user_tag table" })
      ] }) })
    ] }),
    /* @__PURE__ */ o(e, { _fgT: C, _fgS: "cjuy95", _fgB: 1793649787415, className: "p-6 border-2 border-green-300", "data-fg-cjuy95": ":0:/src/app/components/ServiceDetails.tsx:269:7:10400:1080:e:Card:ete::::s:CuJ6:1", children: [
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy96", _fgB: 1793649787415, className: "text-green-900 mb-4", "data-fg-cjuy96": ":0:/src/app/components/ServiceDetails.tsx:270:9:10457:73:e:div:t", children: "Journey Context JSON Structure" }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy98", _fgB: 1793649787415, className: "bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto", "data-fg-cjuy98": ":0:/src/app/components/ServiceDetails.tsx:271:9:10539:927:e:div:e", children: /* @__PURE__ */ t(e, { _fgT: "pre", _fgS: "cjuy99", _fgB: 1793649787415, className: "text-sm", "data-fg-cjuy99": ":0:/src/app/components/ServiceDetails.tsx:272:11:10626:825:e:pre:s", children: `{
  user_id: "...",
  identity: {
    display_name, age_range, relationship_status,
    living_situation, family_description
  },
  persona: {
    persona_profile,
    learning_style_probabilities
  },
  belief_profile: { ... },
  tags: {
    by_type: tags_by_type_snapshot,
    main_challenge_primary_tag,
    motivation_primary_tag,
    growth_focus_primary_tag,
    tag_profile_summary
  },
  journey_state: {
    current_journey_key,
    current_day_number,
    journey_day_streak_days
  },
  pillar_state: {
    p1_level, p2_level, p3_level, p4_level
  },
  mood_today_code: "...",
  summaries: {
    digital_twin_summary,
    recent_events_summary,
    emotional_state_summary,
    pillar_progress_summary
  },
  episodic_snippets: [
    { text_raw, timestamp, source },
    ...
  ]
}` }) })
    ] }),
    /* @__PURE__ */ o(e, { _fgT: C, _fgS: "cjuy102", _fgB: 1793649787415, className: "bg-red-50 border-2 border-red-300 p-6", "data-fg-cjuy102": ":0:/src/app/components/ServiceDetails.tsx:314:7:11522:991:e:Card:ete::::s:CuJ6:1", children: [
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy103", _fgB: 1793649787415, className: "text-red-900 mb-4", "data-fg-cjuy103": ":0:/src/app/components/ServiceDetails.tsx:315:9:11587:75:e:div:t", children: "❌ What Context Service Does NOT Do" }),
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy105", _fgB: 1793649787415, className: "space-y-3", "data-fg-cjuy105": ":0:/src/app/components/ServiceDetails.tsx:316:9:11671:828:e:div:etetetete", children: [
        /* @__PURE__ */ t(
          e,
          {
            _fgT: V,
            _fgS: "cjuy106",
            _fgB: 1793649787415,
            icon: /* @__PURE__ */ t(e, { _fgT: Te, _fgS: "cjuy107", _fgB: 1793649787415, className: "w-5 h-5 text-red-600", "data-fg-cjuy107": ":0:node_modules/lucide-react:318:19:11738:44:e:XCircle::::::BEhq" }),
            text: "Does NOT call the LLM",
            "data-fg-cjuy106": ":0:/src/app/components/ServiceDetails.tsx:317:11:11709:128:e:Principle::::::DTdG"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: V,
            _fgS: "cjuy108",
            _fgB: 1793649787415,
            icon: /* @__PURE__ */ t(e, { _fgT: Te, _fgS: "cjuy109", _fgB: 1793649787415, className: "w-5 h-5 text-red-600", "data-fg-cjuy109": ":0:node_modules/lucide-react:322:19:11877:44:e:XCircle::::::BEhq" }),
            text: "Does NOT write to digital_twin_user or user_tag",
            "data-fg-cjuy108": ":0:/src/app/components/ServiceDetails.tsx:321:11:11848:154:e:Principle::::::DTdG"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: V,
            _fgS: "cjuy110",
            _fgB: 1793649787415,
            icon: /* @__PURE__ */ t(e, { _fgT: Te, _fgS: "cjuy111", _fgB: 1793649787415, className: "w-5 h-5 text-red-600", "data-fg-cjuy111": ":0:node_modules/lucide-react:326:19:12042:44:e:XCircle::::::BEhq" }),
            text: "Does NOT create or update summaries",
            "data-fg-cjuy110": ":0:/src/app/components/ServiceDetails.tsx:325:11:12013:142:e:Principle::::::DTdG"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: V,
            _fgS: "cjuy112",
            _fgB: 1793649787415,
            icon: /* @__PURE__ */ t(e, { _fgT: Te, _fgS: "cjuy113", _fgB: 1793649787415, className: "w-5 h-5 text-red-600", "data-fg-cjuy113": ":0:node_modules/lucide-react:330:19:12195:44:e:XCircle::::::BEhq" }),
            text: "Does NOT do any 'thinking' or interpretation",
            "data-fg-cjuy112": ":0:/src/app/components/ServiceDetails.tsx:329:11:12166:151:e:Principle::::::DTdG"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: V,
            _fgS: "cjuy114",
            _fgB: 1793649787415,
            icon: /* @__PURE__ */ t(e, { _fgT: Te, _fgS: "cjuy115", _fgB: 1793649787415, className: "w-5 h-5 text-red-600", "data-fg-cjuy115": ":0:node_modules/lucide-react:334:19:12357:44:e:XCircle::::::BEhq" }),
            text: "Only writes to context_snapshot (for audit trail)",
            "data-fg-cjuy114": ":0:/src/app/components/ServiceDetails.tsx:333:11:12328:156:e:Principle::::::DTdG"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o(e, { _fgT: C, _fgS: "cjuy117", _fgB: 1793649787415, className: "bg-amber-50 border-2 border-amber-300 p-6", "data-fg-cjuy117": ":0:/src/app/components/ServiceDetails.tsx:341:7:12550:847:e:Card:ete::::s:CuJ6:1", children: [
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy118", _fgB: 1793649787415, className: "text-amber-900 mb-4", "data-fg-cjuy118": ":0:/src/app/components/ServiceDetails.tsx:342:9:12619:60:e:div:t", children: "🔑 Key Principles" }),
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy120", _fgB: 1793649787415, className: "space-y-3", "data-fg-cjuy120": ":0:/src/app/components/ServiceDetails.tsx:343:9:12688:695:e:div:etetete", children: [
        /* @__PURE__ */ t(
          e,
          {
            _fgT: V,
            _fgS: "cjuy121",
            _fgB: 1793649787415,
            icon: /* @__PURE__ */ t(e, { _fgT: Q, _fgS: "cjuy122", _fgB: 1793649787415, className: "w-5 h-5 text-green-600", "data-fg-cjuy122": ":0:node_modules/lucide-react:345:19:12755:51:e:CheckCircle2::::::CELI" }),
            text: "Pure read-only context assembly",
            "data-fg-cjuy121": ":0:/src/app/components/ServiceDetails.tsx:344:11:12726:145:e:Principle::::::DTdG"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: V,
            _fgS: "cjuy123",
            _fgB: 1793649787415,
            icon: /* @__PURE__ */ t(e, { _fgT: Q, _fgS: "cjuy124", _fgB: 1793649787415, className: "w-5 h-5 text-green-600", "data-fg-cjuy124": ":0:node_modules/lucide-react:349:19:12911:51:e:CheckCircle2::::::CELI" }),
            text: "Relies entirely on pre-computed summaries",
            "data-fg-cjuy123": ":0:/src/app/components/ServiceDetails.tsx:348:11:12882:155:e:Principle::::::DTdG"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: V,
            _fgS: "cjuy125",
            _fgB: 1793649787415,
            icon: /* @__PURE__ */ t(e, { _fgT: Q, _fgS: "cjuy126", _fgB: 1793649787415, className: "w-5 h-5 text-green-600", "data-fg-cjuy126": ":0:node_modules/lucide-react:353:19:13077:51:e:CheckCircle2::::::CELI" }),
            text: "Uses vector search to find relevant memories",
            "data-fg-cjuy125": ":0:/src/app/components/ServiceDetails.tsx:352:11:13048:158:e:Principle::::::DTdG"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: V,
            _fgS: "cjuy127",
            _fgB: 1793649787415,
            icon: /* @__PURE__ */ t(e, { _fgT: Q, _fgS: "cjuy128", _fgB: 1793649787415, className: "w-5 h-5 text-green-600", "data-fg-cjuy128": ":0:node_modules/lucide-react:357:19:13246:51:e:CheckCircle2::::::CELI" }),
            text: "Fast and predictable - no LLM latency",
            "data-fg-cjuy127": ":0:/src/app/components/ServiceDetails.tsx:356:11:13217:151:e:Principle::::::DTdG"
          }
        )
      ] })
    ] })
  ] });
}
function he({ label: a, value: s }) {
  return /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy129", _fgB: 1793649787415, _fgD: !0, className: "bg-white/60 rounded-lg p-3 border border-slate-300", "data-fg-cjuy129": ":0:/src/app/components/ServiceDetails.tsx:368:5:13505:196:e:div:ete:1", children: [
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy130", _fgB: 1793649787415, className: "text-slate-600 text-sm mb-1", "data-fg-cjuy130": ":0:/src/app/components/ServiceDetails.tsx:369:7:13580:58:e:div:x", children: a }),
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy132", _fgB: 1793649787415, className: "text-slate-900", "data-fg-cjuy132": ":0:/src/app/components/ServiceDetails.tsx:370:7:13645:45:e:div:x", children: s })
  ] });
}
function Ne({ title: a, color: s, trigger: r, steps: n }) {
  return /* @__PURE__ */ o(e, { _fgT: C, _fgS: "cjuy134", _fgB: 1793649787415, _fgD: !0, className: `bg-gradient-to-br ${{
    green: "from-green-50 to-green-100 border-green-300",
    yellow: "from-yellow-50 to-yellow-100 border-yellow-300",
    blue: "from-blue-50 to-blue-100 border-blue-300",
    purple: "from-purple-50 to-purple-100 border-purple-300"
  }[s]} border-2 p-5`, "data-fg-cjuy134": ":0:/src/app/components/ServiceDetails.tsx:384:5:14113:574:e:Card:etete:1:::s:CuJ6:1", children: [
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy135", _fgB: 1793649787415, className: "text-slate-900 mb-3", "data-fg-cjuy135": ":0:/src/app/components/ServiceDetails.tsx:385:7:14211:50:e:div:x", children: a }),
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy137", _fgB: 1793649787415, className: "bg-white/60 rounded px-3 py-2 mb-4 font-mono text-sm text-slate-700", "data-fg-cjuy137": ":0:/src/app/components/ServiceDetails.tsx:386:7:14268:116:e:div:x", children: r }),
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy139", _fgB: 1793649787415, className: "space-y-1.5", "data-fg-cjuy139": ":0:/src/app/components/ServiceDetails.tsx:389:7:14391:284:e:div:x", children: n.map((g, d) => /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy141", _fgB: 1793649787415, className: "text-sm text-slate-700 flex items-start gap-2", "data-fg-cjuy141": ":0:/src/app/components/ServiceDetails.tsx:391:11:14467:183:e:div:ete", children: [
      /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "cjuy142", _fgB: 1793649787415, className: "text-slate-400 mt-0.5", "data-fg-cjuy142": ":0:/src/app/components/ServiceDetails.tsx:392:13:14553:48:e:span:t", children: "•" }),
      /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "cjuy144", _fgB: 1793649787415, "data-fg-cjuy144": ":0:/src/app/components/ServiceDetails.tsx:393:13:14614:19:e:span:x", children: g })
    ] }, d)) })
  ] });
}
function pt({ name: a, params: s, returns: r }) {
  return /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy146", _fgB: 1793649787415, _fgD: !0, className: "bg-white border border-purple-300 rounded-lg p-4", "data-fg-cjuy146": ":0:/src/app/components/ServiceDetails.tsx:403:5:14817:733:e:div:etete:1", children: [
    /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy147", _fgB: 1793649787415, className: "text-purple-900 mb-2 font-mono", "data-fg-cjuy147": ":0:/src/app/components/ServiceDetails.tsx:404:7:14890:62:e:div:xt", children: [
      a,
      "()"
    ] }),
    /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy150", _fgB: 1793649787415, className: "mb-3", "data-fg-cjuy150": ":0:/src/app/components/ServiceDetails.tsx:405:7:14959:298:e:div:ete", children: [
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy151", _fgB: 1793649787415, className: "text-purple-700 text-sm mb-1", "data-fg-cjuy151": ":0:/src/app/components/ServiceDetails.tsx:406:9:14990:63:e:div:t", children: "Parameters:" }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy153", _fgB: 1793649787415, className: "space-y-0.5 ml-4", "data-fg-cjuy153": ":0:/src/app/components/ServiceDetails.tsx:407:9:15062:182:e:div:x", children: s.map((n, i) => /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy155", _fgB: 1793649787415, className: "text-purple-600 text-sm", "data-fg-cjuy155": ":0:/src/app/components/ServiceDetails.tsx:409:13:15149:66:e:div:tx", children: [
        "• ",
        n
      ] }, i)) })
    ] }),
    /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy158", _fgB: 1793649787415, "data-fg-cjuy158": ":0:/src/app/components/ServiceDetails.tsx:413:7:15264:275:e:div:ete", children: [
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy159", _fgB: 1793649787415, className: "text-purple-700 text-sm mb-1", "data-fg-cjuy159": ":0:/src/app/components/ServiceDetails.tsx:414:9:15278:60:e:div:t", children: "Returns:" }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy161", _fgB: 1793649787415, className: "space-y-0.5 ml-4", "data-fg-cjuy161": ":0:/src/app/components/ServiceDetails.tsx:415:9:15347:179:e:div:x", children: r.map((n, i) => /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy163", _fgB: 1793649787415, className: "text-purple-600 text-sm", "data-fg-cjuy163": ":0:/src/app/components/ServiceDetails.tsx:417:13:15433:64:e:div:tx", children: [
        "• ",
        n
      ] }, i)) })
    ] })
  ] });
}
function ea({ title: a, endpoint: s, params: r, steps: n }) {
  return /* @__PURE__ */ o(e, { _fgT: C, _fgS: "cjuy166", _fgB: 1793649787415, _fgD: !0, className: "bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 p-5", "data-fg-cjuy166": ":0:/src/app/components/ServiceDetails.tsx:427:5:15710:789:e:Card:etetete:1:::s:CuJ6:1", children: [
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy167", _fgB: 1793649787415, className: "text-green-900 mb-3", "data-fg-cjuy167": ":0:/src/app/components/ServiceDetails.tsx:428:7:15810:50:e:div:x", children: a }),
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy169", _fgB: 1793649787415, className: "bg-white/60 rounded px-3 py-2 mb-3 font-mono text-sm text-green-700", "data-fg-cjuy169": ":0:/src/app/components/ServiceDetails.tsx:429:7:15867:117:e:div:x", children: s }),
    /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy171", _fgB: 1793649787415, className: "mb-4", "data-fg-cjuy171": ":0:/src/app/components/ServiceDetails.tsx:432:7:15991:205:e:div:ete", children: [
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy172", _fgB: 1793649787415, className: "text-green-800 text-sm mb-1", "data-fg-cjuy172": ":0:/src/app/components/ServiceDetails.tsx:433:9:16022:62:e:div:t", children: "Parameters:" }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy174", _fgB: 1793649787415, className: "text-green-600 text-sm ml-4", "data-fg-cjuy174": ":0:/src/app/components/ServiceDetails.tsx:434:9:16093:90:e:div:x", children: r.join(", ") })
    ] }),
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy176", _fgB: 1793649787415, className: "space-y-1.5", "data-fg-cjuy176": ":0:/src/app/components/ServiceDetails.tsx:438:7:16203:284:e:div:x", children: n.map((i, g) => /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy178", _fgB: 1793649787415, className: "text-sm text-green-700 flex items-start gap-2", "data-fg-cjuy178": ":0:/src/app/components/ServiceDetails.tsx:440:11:16279:183:e:div:ete", children: [
      /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "cjuy179", _fgB: 1793649787415, className: "text-green-400 mt-0.5", "data-fg-cjuy179": ":0:/src/app/components/ServiceDetails.tsx:441:13:16365:48:e:span:t", children: "•" }),
      /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "cjuy181", _fgB: 1793649787415, "data-fg-cjuy181": ":0:/src/app/components/ServiceDetails.tsx:442:13:16426:19:e:span:x", children: i })
    ] }, g)) })
  ] });
}
function V({ icon: a, text: s }) {
  return /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "cjuy183", _fgB: 1793649787415, _fgD: !0, className: "flex items-center gap-3", "data-fg-cjuy183": ":0:/src/app/components/ServiceDetails.tsx:452:5:16595:116:e:div:xte:1", children: [
    a,
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "cjuy185", _fgB: 1793649787415, className: "text-slate-700", "data-fg-cjuy185": ":0:/src/app/components/ServiceDetails.tsx:454:7:16656:44:e:div:x", children: s })
  ] });
}
function Vo() {
  return /* @__PURE__ */ o(e, { _fgT: Nt, _fgS: "d4sr0", _fgB: 1793649787427, _fgD: !0, defaultValue: "signup", className: "w-full", "data-fg-d4sr0": ":0:/src/app/components/EndToEndFlows.tsx:8:5:285:563:e:Tabs:etetete:1:::s:tfa:1", children: [
    /* @__PURE__ */ o(e, { _fgT: Ct, _fgS: "d4sr1", _fgB: 1793649787427, className: "grid w-full grid-cols-3 mb-6", "data-fg-d4sr1": ":0:/src/app/components/EndToEndFlows.tsx:9:7:339:259:e:TabsList:etete::::s:NDg:1", children: [
      /* @__PURE__ */ t(e, { _fgT: Z, _fgS: "d4sr2", _fgB: 1793649787427, value: "signup", "data-fg-d4sr2": ":0:/src/app/components/EndToEndFlows.tsx:10:9:399:56:e:TabsTrigger:t::::s:BlUk:1", children: "Day 0: Sign-up" }),
      /* @__PURE__ */ t(e, { _fgT: Z, _fgS: "d4sr4", _fgB: 1793649787427, value: "journey", "data-fg-d4sr4": ":0:/src/app/components/EndToEndFlows.tsx:11:9:464:54:e:TabsTrigger:t::::s:BlUk:1", children: "Journey Day" }),
      /* @__PURE__ */ t(e, { _fgT: Z, _fgS: "d4sr6", _fgB: 1793649787427, value: "chat", "data-fg-d4sr6": ":0:/src/app/components/EndToEndFlows.tsx:12:9:527:53:e:TabsTrigger:t::::s:BlUk:1", children: "Personal Chat" })
    ] }),
    /* @__PURE__ */ t(e, { _fgT: X, _fgS: "d4sr8", _fgB: 1793649787427, value: "signup", "data-fg-d4sr8": ":0:/src/app/components/EndToEndFlows.tsx:15:7:606:72:e:TabsContent:e::::s:D5Pb:1", children: /* @__PURE__ */ t(e, { _fgT: qo, _fgS: "d4sr9", _fgB: 1793649787427, "data-fg-d4sr9": ":0:/src/app/components/EndToEndFlows.tsx:16:9:643:14:e:SignupFlow::::::CABj" }) }),
    /* @__PURE__ */ t(e, { _fgT: X, _fgS: "d4sr10", _fgB: 1793649787427, value: "journey", "data-fg-d4sr10": ":0:/src/app/components/EndToEndFlows.tsx:19:7:686:74:e:TabsContent:e::::s:D5Pb:1", children: /* @__PURE__ */ t(e, { _fgT: Ho, _fgS: "d4sr11", _fgB: 1793649787427, "data-fg-d4sr11": ":0:/src/app/components/EndToEndFlows.tsx:20:9:724:15:e:JourneyFlow::::::Bt5J" }) }),
    /* @__PURE__ */ t(e, { _fgT: X, _fgS: "d4sr12", _fgB: 1793649787427, value: "chat", "data-fg-d4sr12": ":0:/src/app/components/EndToEndFlows.tsx:23:7:768:68:e:TabsContent:e::::s:D5Pb:1", children: /* @__PURE__ */ t(e, { _fgT: Ko, _fgS: "d4sr13", _fgB: 1793649787427, "data-fg-d4sr13": ":0:/src/app/components/EndToEndFlows.tsx:24:9:803:12:e:ChatFlow::::::lIN" }) })
  ] });
}
function qo() {
  return /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr14", _fgB: 1793649787427, _fgD: !0, className: "space-y-6", "data-fg-d4sr14": ":0:/src/app/components/EndToEndFlows.tsx:32:5:896:4168:e:div:etete:1", children: [
    /* @__PURE__ */ o(e, { _fgT: C, _fgS: "d4sr15", _fgB: 1793649787427, className: "p-6 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300", "data-fg-d4sr15": ":0:/src/app/components/EndToEndFlows.tsx:33:7:930:491:e:Card:ete::::s:CuJ6:1", children: [
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr16", _fgB: 1793649787427, className: "flex items-center gap-3 mb-4", "data-fg-d4sr16": ":0:/src/app/components/EndToEndFlows.tsx:34:9:1032:196:e:div:ete", children: [
        /* @__PURE__ */ t(e, { _fgT: ho, _fgS: "d4sr17", _fgB: 1793649787427, className: "w-6 h-6 text-green-600", "data-fg-d4sr17": ":0:node_modules/lucide-react:35:11:1089:47:e:UserPlus::::::vTn" }),
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr18", _fgB: 1793649787427, className: "text-green-900", "data-fg-d4sr18": ":0:/src/app/components/EndToEndFlows.tsx:36:11:1147:66:e:div:t", children: "Day 0: Sign-up & Intake Flow" })
      ] }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr20", _fgB: 1793649787427, className: "text-green-700", "data-fg-d4sr20": ":0:/src/app/components/EndToEndFlows.tsx:38:9:1237:170:e:div:t", children: "User completes onboarding, selects tags, answers intake questions. The system builds their initial digital twin." })
    ] }),
    /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr22", _fgB: 1793649787427, className: "space-y-4", "data-fg-d4sr22": ":0:/src/app/components/EndToEndFlows.tsx:43:7:1429:3303:e:div:etetetetetetetetetete", children: [
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr23",
          _fgB: 1793649787427,
          number: 1,
          actor: "User",
          action: "Completes sign-up and selects tags",
          detail: "Chooses from 8 tag categories (main challenge, motivation, growth focus, etc.)",
          "data-fg-d4sr23": ":0:/src/app/components/EndToEndFlows.tsx:44:9:1465:216:e:FlowStep::::::EFJj"
        }
      ),
      /* @__PURE__ */ t(e, { _fgT: z, _fgS: "d4sr24", _fgB: 1793649787427, "data-fg-d4sr24": ":0:/src/app/components/EndToEndFlows.tsx:51:9:1691:13:e:FlowArrow::::::CFKA" }),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr25",
          _fgB: 1793649787427,
          number: 2,
          actor: "Temporal",
          action: "ingest_day0_tags()",
          detail: "Calls Ingestion Library to store selected tags",
          system: "Ingestion Library",
          "data-fg-d4sr25": ":0:/src/app/components/EndToEndFlows.tsx:53:9:1714:209:e:FlowStep::::::EFJj"
        }
      ),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr26",
          _fgB: 1793649787427,
          number: 3,
          actor: "Ingestion Library",
          action: "Store tags and generate tag summary",
          detail: /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr27", _fgB: 1793649787427, className: "space-y-1 text-sm", "data-fg-d4sr27": ":0:/src/app/components/EndToEndFlows.tsx:66:13:2086:318:e:div:etetete", children: [
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr28", _fgB: 1793649787427, "data-fg-d4sr28": ":0:/src/app/components/EndToEndFlows.tsx:67:15:2136:42:e:div:t", children: "• Delete existing tags (if any)" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr30", _fgB: 1793649787427, "data-fg-d4sr30": ":0:/src/app/components/EndToEndFlows.tsx:68:15:2193:51:e:div:t", children: "• Insert new tag set into user_tag table" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr32", _fgB: 1793649787427, "data-fg-d4sr32": ":0:/src/app/components/EndToEndFlows.tsx:69:15:2259:41:e:div:t", children: "• Call helper.summarize_tags()" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr34", _fgB: 1793649787427, "data-fg-d4sr34": ":0:/src/app/components/EndToEndFlows.tsx:70:15:2315:70:e:div:t", children: "• Update tags_by_type_snapshot and tag_profile_summary_text" })
          ] }),
          "data-fg-d4sr26": ":0:/src/app/components/EndToEndFlows.tsx:61:9:1933:494:e:FlowStep::::::EFJj"
        }
      ),
      /* @__PURE__ */ t(e, { _fgT: z, _fgS: "d4sr36", _fgB: 1793649787427, "data-fg-d4sr36": ":0:/src/app/components/EndToEndFlows.tsx:75:9:2437:13:e:FlowArrow::::::CFKA" }),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr37",
          _fgB: 1793649787427,
          number: 4,
          actor: "User",
          action: "Answers Day 0 intake questions",
          detail: "Questions about background, family, work, challenges, motivations, daily routine",
          "data-fg-d4sr37": ":0:/src/app/components/EndToEndFlows.tsx:77:9:2460:214:e:FlowStep::::::EFJj"
        }
      ),
      /* @__PURE__ */ t(e, { _fgT: z, _fgS: "d4sr38", _fgB: 1793649787427, "data-fg-d4sr38": ":0:/src/app/components/EndToEndFlows.tsx:84:9:2684:13:e:FlowArrow::::::CFKA" }),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr39",
          _fgB: 1793649787427,
          number: 5,
          actor: "Temporal",
          action: "ingest_day0_intro_answers()",
          detail: "Calls Ingestion Library to process Day 0 answers",
          system: "Ingestion Library",
          "data-fg-d4sr39": ":0:/src/app/components/EndToEndFlows.tsx:86:9:2707:220:e:FlowStep::::::EFJj"
        }
      ),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr40",
          _fgB: 1793649787427,
          number: 6,
          actor: "Ingestion Library",
          action: "Build Day 0 twin profile",
          detail: /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr41", _fgB: 1793649787427, className: "space-y-2 text-sm", "data-fg-d4sr41": ":0:/src/app/components/EndToEndFlows.tsx:99:13:3079:1401:e:div:etetetetetetetete", children: [
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr42", _fgB: 1793649787427, className: "text-slate-900", "data-fg-d4sr42": ":0:/src/app/components/EndToEndFlows.tsx:100:15:3129:56:e:div:t", children: "Store raw answers:" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr44", _fgB: 1793649787427, "data-fg-d4sr44": ":0:/src/app/components/EndToEndFlows.tsx:101:15:3200:63:e:div:t", children: "• Insert each answer as memory_entry (source=intake)" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr46", _fgB: 1793649787427, className: "text-slate-900 mt-3", "data-fg-d4sr46": ":0:/src/app/components/EndToEndFlows.tsx:103:15:3293:74:e:div:t", children: "Call Twin Summarization Helper:" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr48", _fgB: 1793649787427, "data-fg-d4sr48": ":0:/src/app/components/EndToEndFlows.tsx:104:15:3382:46:e:div:t", children: "• helper.build_day_zero_summaries()" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr50", _fgB: 1793649787427, className: "text-slate-900 mt-3", "data-fg-d4sr50": ":0:/src/app/components/EndToEndFlows.tsx:106:15:3458:89:e:div:t", children: "Helper returns classifications and narratives:" }),
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr52", _fgB: 1793649787427, className: "ml-4 space-y-0.5", "data-fg-d4sr52": ":0:/src/app/components/EndToEndFlows.tsx:107:15:3562:636:e:div:etetetetetetetetetete", children: [
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr53", _fgB: 1793649787427, "data-fg-d4sr53": ":0:/src/app/components/EndToEndFlows.tsx:108:17:3613:28:e:div:t", children: "- persona_profile" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr55", _fgB: 1793649787427, "data-fg-d4sr55": ":0:/src/app/components/EndToEndFlows.tsx:109:17:3658:41:e:div:t", children: "- learning_style_probabilities" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr57", _fgB: 1793649787427, "data-fg-d4sr57": ":0:/src/app/components/EndToEndFlows.tsx:110:17:3716:27:e:div:t", children: "- belief_profile" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr59", _fgB: 1793649787427, "data-fg-d4sr59": ":0:/src/app/components/EndToEndFlows.tsx:111:17:3760:64:e:div:t", children: "- main_challenge/motivation/growth_focus primary tags" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr61", _fgB: 1793649787427, "data-fg-d4sr61": ":0:/src/app/components/EndToEndFlows.tsx:112:17:3841:30:e:div:t", children: "- intake_story_text" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr63", _fgB: 1793649787427, "data-fg-d4sr63": ":0:/src/app/components/EndToEndFlows.tsx:113:17:3888:36:e:div:t", children: "- family_description_text" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr65", _fgB: 1793649787427, "data-fg-d4sr65": ":0:/src/app/components/EndToEndFlows.tsx:114:17:3941:30:e:div:t", children: "- work_context_text" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr67", _fgB: 1793649787427, "data-fg-d4sr67": ":0:/src/app/components/EndToEndFlows.tsx:115:17:3988:35:e:div:t", children: "- motivation_reason_text" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr69", _fgB: 1793649787427, "data-fg-d4sr69": ":0:/src/app/components/EndToEndFlows.tsx:116:17:4040:33:e:div:t", children: "- daily_rhythm_summary" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr71", _fgB: 1793649787427, "data-fg-d4sr71": ":0:/src/app/components/EndToEndFlows.tsx:117:17:4090:32:e:div:t", children: "- main_challenge_text" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr73", _fgB: 1793649787427, "data-fg-d4sr73": ":0:/src/app/components/EndToEndFlows.tsx:118:17:4139:38:e:div:t", children: "- digital_twin_summary_text" })
            ] }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr75", _fgB: 1793649787427, className: "text-slate-900 mt-3", "data-fg-d4sr75": ":0:/src/app/components/EndToEndFlows.tsx:121:15:4228:59:e:div:t", children: "Update database:" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr77", _fgB: 1793649787427, "data-fg-d4sr77": ":0:/src/app/components/EndToEndFlows.tsx:122:15:4302:63:e:div:t", children: "• INSERT or UPDATE digital_twin_user with all fields" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr79", _fgB: 1793649787427, "data-fg-d4sr79": ":0:/src/app/components/EndToEndFlows.tsx:123:15:4380:81:e:div:t", children: "• INSERT memory_entry for digital_twin_summary (source=system_summary)" })
          ] }),
          "data-fg-d4sr40": ":0:/src/app/components/EndToEndFlows.tsx:94:9:2937:1566:e:FlowStep::::::EFJj"
        }
      ),
      /* @__PURE__ */ t(e, { _fgT: z, _fgS: "d4sr81", _fgB: 1793649787427, "data-fg-d4sr81": ":0:/src/app/components/EndToEndFlows.tsx:128:9:4513:13:e:FlowArrow::::::CFKA" }),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr82",
          _fgB: 1793649787427,
          number: 7,
          actor: "System",
          action: "Digital twin is ready",
          detail: "User can now start their first journey",
          success: !0,
          "data-fg-d4sr82": ":0:/src/app/components/EndToEndFlows.tsx:130:9:4536:183:e:FlowStep::::::EFJj"
        }
      )
    ] }),
    /* @__PURE__ */ t(
      e,
      {
        _fgT: Lt,
        _fgS: "d4sr83",
        _fgB: 1793649787427,
        title: "Database State After Day 0",
        items: [
          "digital_twin_user: 1 row with complete profile",
          "user_tag: 10-20 tag selections",
          "memory_entry: ~5-10 intake answers + 1 system summary",
          "context_snapshot: 0 (no coaching yet)"
        ],
        "data-fg-d4sr83": ":0:/src/app/components/EndToEndFlows.tsx:139:7:4740:313:e:ResultCard::::::EKYg"
      }
    )
  ] });
}
function Ho() {
  return /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr84", _fgB: 1793649787427, _fgD: !0, className: "space-y-6", "data-fg-d4sr84": ":0:/src/app/components/EndToEndFlows.tsx:154:5:5113:4884:e:div:etete:1", children: [
    /* @__PURE__ */ o(e, { _fgT: C, _fgS: "d4sr85", _fgB: 1793649787427, className: "p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300", "data-fg-d4sr85": ":0:/src/app/components/EndToEndFlows.tsx:155:7:5147:460:e:Card:ete::::s:CuJ6:1", children: [
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr86", _fgB: 1793649787427, className: "flex items-center gap-3 mb-4", "data-fg-d4sr86": ":0:/src/app/components/EndToEndFlows.tsx:156:9:5246:188:e:div:ete", children: [
        /* @__PURE__ */ t(e, { _fgT: Yr, _fgS: "d4sr87", _fgB: 1793649787427, className: "w-6 h-6 text-blue-600", "data-fg-d4sr87": ":0:node_modules/lucide-react:157:11:5303:45:e:Compass::::::EKjY" }),
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr88", _fgB: 1793649787427, className: "text-blue-900", "data-fg-d4sr88": ":0:/src/app/components/EndToEndFlows.tsx:158:11:5359:60:e:div:t", children: "Journey Day Interaction" })
      ] }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr90", _fgB: 1793649787427, className: "text-blue-700", "data-fg-d4sr90": ":0:/src/app/components/EndToEndFlows.tsx:160:9:5443:150:e:div:t", children: "User starts a journey day. System provides personalized coaching based on their digital twin." })
    ] }),
    /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr92", _fgB: 1793649787427, className: "space-y-4", "data-fg-d4sr92": ":0:/src/app/components/EndToEndFlows.tsx:165:7:5615:4007:e:div:etetetetetetetetetetetetetetete", children: [
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr93",
          _fgB: 1793649787427,
          number: 1,
          actor: "User",
          action: "Logs morning mood",
          detail: "Selects mood: happy, anxious, sad, energized, etc.",
          "data-fg-d4sr93": ":0:/src/app/components/EndToEndFlows.tsx:166:9:5651:171:e:FlowStep::::::EFJj"
        }
      ),
      /* @__PURE__ */ t(e, { _fgT: z, _fgS: "d4sr94", _fgB: 1793649787427, "data-fg-d4sr94": ":0:/src/app/components/EndToEndFlows.tsx:173:9:5832:13:e:FlowArrow::::::CFKA" }),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr95",
          _fgB: 1793649787427,
          number: 2,
          actor: "Temporal",
          action: "ingest_mood_checkin()",
          detail: "Calls Ingestion Library to update today's mood",
          system: "Ingestion Library",
          "data-fg-d4sr95": ":0:/src/app/components/EndToEndFlows.tsx:175:9:5855:212:e:FlowStep::::::EFJj"
        }
      ),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr96",
          _fgB: 1793649787427,
          number: 3,
          actor: "Ingestion Library",
          action: "Update mood",
          detail: /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr97", _fgB: 1793649787427, className: "space-y-1 text-sm", "data-fg-d4sr97": ":0:/src/app/components/EndToEndFlows.tsx:188:13:6206:209:e:div:ete", children: [
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr98", _fgB: 1793649787427, "data-fg-d4sr98": ":0:/src/app/components/EndToEndFlows.tsx:189:15:6256:69:e:div:t", children: "• UPDATE digital_twin_user SET mood_today_code = 'anxious'" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr100", _fgB: 1793649787427, "data-fg-d4sr100": ":0:/src/app/components/EndToEndFlows.tsx:190:15:6340:56:e:div:t", children: "• Optionally INSERT memory_entry for mood log" })
          ] }),
          "data-fg-d4sr96": ":0:/src/app/components/EndToEndFlows.tsx:183:9:6077:361:e:FlowStep::::::EFJj"
        }
      ),
      /* @__PURE__ */ t(e, { _fgT: z, _fgS: "d4sr102", _fgB: 1793649787427, "data-fg-d4sr102": ":0:/src/app/components/EndToEndFlows.tsx:195:9:6448:13:e:FlowArrow::::::CFKA" }),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr103",
          _fgB: 1793649787427,
          number: 4,
          actor: "Temporal",
          action: "build_journey_context()",
          detail: "Calls Context Library to get personalized context",
          system: "Context Library",
          "data-fg-d4sr103": ":0:/src/app/components/EndToEndFlows.tsx:197:9:6471:215:e:FlowStep::::::EFJj"
        }
      ),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr104",
          _fgB: 1793649787427,
          number: 5,
          actor: "Context Library",
          action: "Build journey context",
          detail: /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr105", _fgB: 1793649787427, className: "space-y-2 text-sm", "data-fg-d4sr105": ":0:/src/app/components/EndToEndFlows.tsx:210:13:6833:796:e:div:etetetetetete", children: [
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr106", _fgB: 1793649787427, "data-fg-d4sr106": ":0:/src/app/components/EndToEndFlows.tsx:211:15:6883:39:e:div:t", children: "• Load digital_twin_user row" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr108", _fgB: 1793649787427, "data-fg-d4sr108": ":0:/src/app/components/EndToEndFlows.tsx:212:15:6937:38:e:div:t", children: "• Load tags and tag summary" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr110", _fgB: 1793649787427, "data-fg-d4sr110": ":0:/src/app/components/EndToEndFlows.tsx:213:15:6990:69:e:div:t", children: "• Run vector search on memory_entry (last 14 days, top 10)" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr112", _fgB: 1793649787427, "data-fg-d4sr112": ":0:/src/app/components/EndToEndFlows.tsx:214:15:7074:48:e:div:t", children: "• Assemble journey_context JSON with:" }),
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr114", _fgB: 1793649787427, className: "ml-4 space-y-0.5", "data-fg-d4sr114": ":0:/src/app/components/EndToEndFlows.tsx:215:15:7137:338:e:div:etetetete", children: [
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr115", _fgB: 1793649787427, "data-fg-d4sr115": ":0:/src/app/components/EndToEndFlows.tsx:216:17:7188:46:e:div:t", children: "- Identity, persona, belief profile" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr117", _fgB: 1793649787427, "data-fg-d4sr117": ":0:/src/app/components/EndToEndFlows.tsx:217:17:7251:33:e:div:t", children: "- Tags and tag summary" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr119", _fgB: 1793649787427, "data-fg-d4sr119": ":0:/src/app/components/EndToEndFlows.tsx:218:17:7301:47:e:div:t", children: "- Journey state, pillar levels, mood" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr121", _fgB: 1793649787427, "data-fg-d4sr121": ":0:/src/app/components/EndToEndFlows.tsx:219:17:7365:35:e:div:t", children: "- Pre-computed summaries" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr123", _fgB: 1793649787427, "data-fg-d4sr123": ":0:/src/app/components/EndToEndFlows.tsx:220:17:7417:37:e:div:t", children: "- Relevant memory snippets" })
            ] }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr125", _fgB: 1793649787427, "data-fg-d4sr125": ":0:/src/app/components/EndToEndFlows.tsx:222:15:7490:63:e:div:t", children: "• INSERT context_snapshot (source=journey_day_start)" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr127", _fgB: 1793649787427, "data-fg-d4sr127": ":0:/src/app/components/EndToEndFlows.tsx:223:15:7568:42:e:div:t", children: "• Return JSON to Journey Engine" })
          ] }),
          "data-fg-d4sr104": ":0:/src/app/components/EndToEndFlows.tsx:205:9:6696:956:e:FlowStep::::::EFJj"
        }
      ),
      /* @__PURE__ */ t(e, { _fgT: z, _fgS: "d4sr129", _fgB: 1793649787427, "data-fg-d4sr129": ":0:/src/app/components/EndToEndFlows.tsx:228:9:7662:13:e:FlowArrow::::::CFKA" }),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr130",
          _fgB: 1793649787427,
          number: 6,
          actor: "Journey Engine",
          action: "Generate personalized coaching",
          detail: "Uses context to create tailored content, practices, and prompts",
          "data-fg-d4sr130": ":0:/src/app/components/EndToEndFlows.tsx:230:9:7685:207:e:FlowStep::::::EFJj"
        }
      ),
      /* @__PURE__ */ t(e, { _fgT: z, _fgS: "d4sr131", _fgB: 1793649787427, "data-fg-d4sr131": ":0:/src/app/components/EndToEndFlows.tsx:237:9:7902:13:e:FlowArrow::::::CFKA" }),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr132",
          _fgB: 1793649787427,
          number: 7,
          actor: "User",
          action: "Completes journey activities",
          detail: "Journaling, practice exercises, reflections",
          "data-fg-d4sr132": ":0:/src/app/components/EndToEndFlows.tsx:239:9:7925:175:e:FlowStep::::::EFJj"
        }
      ),
      /* @__PURE__ */ t(e, { _fgT: z, _fgS: "d4sr133", _fgB: 1793649787427, "data-fg-d4sr133": ":0:/src/app/components/EndToEndFlows.tsx:246:9:8110:13:e:FlowArrow::::::CFKA" }),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr134",
          _fgB: 1793649787427,
          number: 8,
          actor: "Temporal",
          action: "ingest_journey_reflections()",
          detail: "Calls Ingestion Library with journal and practice reflections",
          system: "Ingestion Library",
          "data-fg-d4sr134": ":0:/src/app/components/EndToEndFlows.tsx:248:9:8133:234:e:FlowStep::::::EFJj"
        }
      ),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr135",
          _fgB: 1793649787427,
          number: 9,
          actor: "Ingestion Library",
          action: "Update twin with journey completion",
          detail: /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr136", _fgB: 1793649787427, className: "space-y-2 text-sm", "data-fg-d4sr136": ":0:/src/app/components/EndToEndFlows.tsx:261:13:8530:832:e:div:etetetetete", children: [
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr137", _fgB: 1793649787427, "data-fg-d4sr137": ":0:/src/app/components/EndToEndFlows.tsx:262:15:8580:72:e:div:t", children: "• INSERT memory_entry for journal reflection (source=journal)" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr139", _fgB: 1793649787427, "data-fg-d4sr139": ":0:/src/app/components/EndToEndFlows.tsx:263:15:8667:74:e:div:t", children: "• INSERT memory_entry for practice reflection (source=practice)" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr141", _fgB: 1793649787427, "data-fg-d4sr141": ":0:/src/app/components/EndToEndFlows.tsx:264:15:8756:38:e:div:t", children: "• UPDATE digital_twin_user:" }),
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr143", _fgB: 1793649787427, className: "ml-4 space-y-0.5", "data-fg-d4sr143": ":0:/src/app/components/EndToEndFlows.tsx:265:15:8809:166:e:div:ete", children: [
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr144", _fgB: 1793649787427, "data-fg-d4sr144": ":0:/src/app/components/EndToEndFlows.tsx:266:17:8860:36:e:div:t", children: "- current_day_number += 1" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr146", _fgB: 1793649787427, "data-fg-d4sr146": ":0:/src/app/components/EndToEndFlows.tsx:267:17:8913:41:e:div:t", children: "- journey_day_streak_days += 1" })
            ] }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr148", _fgB: 1793649787427, "data-fg-d4sr148": ":0:/src/app/components/EndToEndFlows.tsx:269:15:8990:62:e:div:t", children: "• Optionally call helper.update_dynamic_summaries()" }),
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr150", _fgB: 1793649787427, className: "ml-4 space-y-0.5", "data-fg-d4sr150": ":0:/src/app/components/EndToEndFlows.tsx:270:15:9067:276:e:div:etete", children: [
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr151", _fgB: 1793649787427, "data-fg-d4sr151": ":0:/src/app/components/EndToEndFlows.tsx:271:17:9118:47:e:div:t", children: "- Refresh recent_events_summary_text" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr153", _fgB: 1793649787427, "data-fg-d4sr153": ":0:/src/app/components/EndToEndFlows.tsx:272:17:9182:49:e:div:t", children: "- Refresh emotional_state_summary_text" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr155", _fgB: 1793649787427, "data-fg-d4sr155": ":0:/src/app/components/EndToEndFlows.tsx:273:17:9248:74:e:div:t", children: "- INSERT memory_entry for new summaries (source=system_summary)" })
            ] })
          ] }),
          "data-fg-d4sr135": ":0:/src/app/components/EndToEndFlows.tsx:256:9:8377:1008:e:FlowStep::::::EFJj"
        }
      ),
      /* @__PURE__ */ t(e, { _fgT: z, _fgS: "d4sr157", _fgB: 1793649787427, "data-fg-d4sr157": ":0:/src/app/components/EndToEndFlows.tsx:279:9:9395:13:e:FlowArrow::::::CFKA" }),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr158",
          _fgB: 1793649787427,
          number: 10,
          actor: "System",
          action: "Journey day complete",
          detail: "Twin is updated with new insights and progress",
          success: !0,
          "data-fg-d4sr158": ":0:/src/app/components/EndToEndFlows.tsx:281:9:9418:191:e:FlowStep::::::EFJj"
        }
      )
    ] }),
    /* @__PURE__ */ t(
      e,
      {
        _fgT: Lt,
        _fgS: "d4sr159",
        _fgB: 1793649787427,
        title: "Database Changes",
        items: [
          "digital_twin_user: mood, journey progress, and summaries updated",
          "memory_entry: +2 entries (journal + practice)",
          "memory_entry: +2 entries if summaries refreshed (system_summary)",
          "context_snapshot: +1 entry (journey_day_start)"
        ],
        "data-fg-d4sr159": ":0:/src/app/components/EndToEndFlows.tsx:290:7:9630:356:e:ResultCard::::::EKYg"
      }
    )
  ] });
}
function Ko() {
  return /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr160", _fgB: 1793649787427, _fgD: !0, className: "space-y-6", "data-fg-d4sr160": ":0:/src/app/components/EndToEndFlows.tsx:305:5:10043:4476:e:div:etetete:1", children: [
    /* @__PURE__ */ o(e, { _fgT: C, _fgS: "d4sr161", _fgB: 1793649787427, className: "p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300", "data-fg-d4sr161": ":0:/src/app/components/EndToEndFlows.tsx:306:7:10077:493:e:Card:ete::::s:CuJ6:1", children: [
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr162", _fgB: 1793649787427, className: "flex items-center gap-3 mb-4", "data-fg-d4sr162": ":0:/src/app/components/EndToEndFlows.tsx:307:9:10182:200:e:div:ete", children: [
        /* @__PURE__ */ t(e, { _fgT: lo, _fgS: "d4sr163", _fgB: 1793649787427, className: "w-6 h-6 text-purple-600", "data-fg-d4sr163": ":0:node_modules/lucide-react:308:11:10239:53:e:MessageCircle::::::DDY7" }),
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr164", _fgB: 1793649787427, className: "text-purple-900", "data-fg-d4sr164": ":0:/src/app/components/EndToEndFlows.tsx:309:11:10303:64:e:div:t", children: "Personal Chat Interaction" })
      ] }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr166", _fgB: 1793649787427, className: "text-purple-700", "data-fg-d4sr166": ":0:/src/app/components/EndToEndFlows.tsx:311:9:10391:165:e:div:t", children: "User has a free-form conversation with their coach. System provides personalized, context-aware responses." })
    ] }),
    /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr168", _fgB: 1793649787427, className: "space-y-4", "data-fg-d4sr168": ":0:/src/app/components/EndToEndFlows.tsx:316:7:10578:3017:e:div:etetetetetetetetetete", children: [
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr169",
          _fgB: 1793649787427,
          number: 1,
          actor: "User",
          action: "Sends message to coach",
          detail: "Example: A difficult conversation with a partner",
          "data-fg-d4sr169": ":0:/src/app/components/EndToEndFlows.tsx:317:9:10614:174:e:FlowStep::::::EFJj"
        }
      ),
      /* @__PURE__ */ t(e, { _fgT: z, _fgS: "d4sr170", _fgB: 1793649787427, "data-fg-d4sr170": ":0:/src/app/components/EndToEndFlows.tsx:324:9:10798:13:e:FlowArrow::::::CFKA" }),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr171",
          _fgB: 1793649787427,
          number: 2,
          actor: "Temporal",
          action: "build_chat_context()",
          detail: "Calls Context Library to get personalized context",
          system: "Context Library",
          "data-fg-d4sr171": ":0:/src/app/components/EndToEndFlows.tsx:326:9:10821:212:e:FlowStep::::::EFJj"
        }
      ),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr172",
          _fgB: 1793649787427,
          number: 3,
          actor: "Context Library",
          action: "Build chat context",
          detail: /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr173", _fgB: 1793649787427, className: "space-y-2 text-sm", "data-fg-d4sr173": ":0:/src/app/components/EndToEndFlows.tsx:339:13:11177:807:e:div:etetetetetete", children: [
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr174", _fgB: 1793649787427, "data-fg-d4sr174": ":0:/src/app/components/EndToEndFlows.tsx:340:15:11227:39:e:div:t", children: "• Load digital_twin_user row" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr176", _fgB: 1793649787427, "data-fg-d4sr176": ":0:/src/app/components/EndToEndFlows.tsx:341:15:11281:69:e:div:t", children: "• Run vector search on memory_entry (last 30 days, top 10)" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr178", _fgB: 1793649787427, "data-fg-d4sr178": ":0:/src/app/components/EndToEndFlows.tsx:342:15:11365:63:e:div:t", children: "• Prioritize emotional/relationship-related memories" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr180", _fgB: 1793649787427, "data-fg-d4sr180": ":0:/src/app/components/EndToEndFlows.tsx:343:15:11443:45:e:div:t", children: "• Assemble chat_context JSON with:" }),
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr182", _fgB: 1793649787427, className: "ml-4 space-y-0.5", "data-fg-d4sr182": ":0:/src/app/components/EndToEndFlows.tsx:344:15:11503:338:e:div:etetetete", children: [
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr183", _fgB: 1793649787427, "data-fg-d4sr183": ":0:/src/app/components/EndToEndFlows.tsx:345:17:11554:28:e:div:t", children: "- Identity basics" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr185", _fgB: 1793649787427, "data-fg-d4sr185": ":0:/src/app/components/EndToEndFlows.tsx:346:17:11599:52:e:div:t", children: "- Tag profile, main challenge, motivation" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr187", _fgB: 1793649787427, "data-fg-d4sr187": ":0:/src/app/components/EndToEndFlows.tsx:347:17:11668:25:e:div:t", children: "- Current mood" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr189", _fgB: 1793649787427, "data-fg-d4sr189": ":0:/src/app/components/EndToEndFlows.tsx:348:17:11710:56:e:div:t", children: "- Recent events and emotional state summaries" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr191", _fgB: 1793649787427, "data-fg-d4sr191": ":0:/src/app/components/EndToEndFlows.tsx:349:17:11783:37:e:div:t", children: "- Relevant memory snippets" })
            ] }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr193", _fgB: 1793649787427, "data-fg-d4sr193": ":0:/src/app/components/EndToEndFlows.tsx:351:15:11856:55:e:div:t", children: "• INSERT context_snapshot (source=chat_turn)" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr195", _fgB: 1793649787427, "data-fg-d4sr195": ":0:/src/app/components/EndToEndFlows.tsx:352:15:11926:39:e:div:t", children: "• Return JSON to Chat Engine" })
          ] }),
          "data-fg-d4sr172": ":0:/src/app/components/EndToEndFlows.tsx:334:9:11043:964:e:FlowStep::::::EFJj"
        }
      ),
      /* @__PURE__ */ t(e, { _fgT: z, _fgS: "d4sr197", _fgB: 1793649787427, "data-fg-d4sr197": ":0:/src/app/components/EndToEndFlows.tsx:357:9:12017:13:e:FlowArrow::::::CFKA" }),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr198",
          _fgB: 1793649787427,
          number: 4,
          actor: "Personal Chat Engine",
          action: "Generate empathetic response",
          detail: "Uses context to provide personalized, relationship-aware coaching",
          "data-fg-d4sr198": ":0:/src/app/components/EndToEndFlows.tsx:359:9:12040:213:e:FlowStep::::::EFJj"
        }
      ),
      /* @__PURE__ */ t(e, { _fgT: z, _fgS: "d4sr199", _fgB: 1793649787427, "data-fg-d4sr199": ":0:/src/app/components/EndToEndFlows.tsx:366:9:12263:13:e:FlowArrow::::::CFKA" }),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr200",
          _fgB: 1793649787427,
          number: 5,
          actor: "Temporal",
          action: "ingest_chat_turn()",
          detail: "Calls Ingestion Library to store user's message",
          system: "Ingestion Library",
          "data-fg-d4sr200": ":0:/src/app/components/EndToEndFlows.tsx:368:9:12286:210:e:FlowStep::::::EFJj"
        }
      ),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr201",
          _fgB: 1793649787427,
          number: 6,
          actor: "Ingestion Library",
          action: "Update twin with chat insight",
          detail: /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr202", _fgB: 1793649787427, className: "space-y-2 text-sm", "data-fg-d4sr202": ":0:/src/app/components/EndToEndFlows.tsx:381:13:12653:645:e:div:etetete", children: [
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr203", _fgB: 1793649787427, "data-fg-d4sr203": ":0:/src/app/components/EndToEndFlows.tsx:382:15:12703:63:e:div:t", children: "• INSERT memory_entry for user message (source=chat)" }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr205", _fgB: 1793649787427, "data-fg-d4sr205": ":0:/src/app/components/EndToEndFlows.tsx:383:15:12781:62:e:div:t", children: "• Optionally call helper.update_dynamic_summaries()" }),
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr207", _fgB: 1793649787427, className: "ml-4 space-y-0.5", "data-fg-d4sr207": ":0:/src/app/components/EndToEndFlows.tsx:384:15:12858:347:e:div:etetete", children: [
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr208", _fgB: 1793649787427, "data-fg-d4sr208": ":0:/src/app/components/EndToEndFlows.tsx:385:17:12909:54:e:div:t", children: "- Analyze for significant emotional content" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr210", _fgB: 1793649787427, "data-fg-d4sr210": ":0:/src/app/components/EndToEndFlows.tsx:386:17:12980:59:e:div:t", children: "- Refresh emotional_state_summary_text if needed" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr212", _fgB: 1793649787427, "data-fg-d4sr212": ":0:/src/app/components/EndToEndFlows.tsx:387:17:13056:57:e:div:t", children: "- Refresh recent_events_summary_text if needed" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr214", _fgB: 1793649787427, "data-fg-d4sr214": ":0:/src/app/components/EndToEndFlows.tsx:388:17:13130:54:e:div:t", children: "- INSERT memory_entry for updated summaries" })
            ] }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr216", _fgB: 1793649787427, "data-fg-d4sr216": ":0:/src/app/components/EndToEndFlows.tsx:390:15:13220:59:e:div:t", children: "• No coaching happens here - just memory storage" })
          ] }),
          "data-fg-d4sr201": ":0:/src/app/components/EndToEndFlows.tsx:376:9:12506:815:e:FlowStep::::::EFJj"
        }
      ),
      /* @__PURE__ */ t(e, { _fgT: z, _fgS: "d4sr218", _fgB: 1793649787427, "data-fg-d4sr218": ":0:/src/app/components/EndToEndFlows.tsx:395:9:13331:13:e:FlowArrow::::::CFKA" }),
      /* @__PURE__ */ t(
        e,
        {
          _fgT: k,
          _fgS: "d4sr219",
          _fgB: 1793649787427,
          number: 7,
          actor: "User",
          action: "Receives personalized response",
          detail: "Coach acknowledges their relationship challenges and current emotional state",
          success: !0,
          "data-fg-d4sr219": ":0:/src/app/components/EndToEndFlows.tsx:397:9:13354:228:e:FlowStep::::::EFJj"
        }
      )
    ] }),
    /* @__PURE__ */ t(
      e,
      {
        _fgT: Lt,
        _fgS: "d4sr220",
        _fgB: 1793649787427,
        title: "Database Changes",
        items: [
          "digital_twin_user: emotional_state_summary may be updated",
          "memory_entry: +1 entry (chat message)",
          "memory_entry: +1-2 entries if summaries refreshed",
          "context_snapshot: +1 entry (chat_turn)"
        ],
        "data-fg-d4sr220": ":0:/src/app/components/EndToEndFlows.tsx:406:7:13603:318:e:ResultCard::::::EKYg"
      }
    ),
    /* @__PURE__ */ o(e, { _fgT: C, _fgS: "d4sr221", _fgB: 1793649787427, className: "bg-amber-50 border-2 border-amber-300 p-6 mt-6", "data-fg-d4sr221": ":0:/src/app/components/EndToEndFlows.tsx:416:7:13929:579:e:Card:ete::::s:CuJ6:1", children: [
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr222", _fgB: 1793649787427, className: "text-amber-900 mb-3", "data-fg-d4sr222": ":0:/src/app/components/EndToEndFlows.tsx:417:9:14003:57:e:div:t", children: "💡 Key Insight" }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr224", _fgB: 1793649787427, className: "text-amber-800", "data-fg-d4sr224": ":0:/src/app/components/EndToEndFlows.tsx:418:9:14069:425:e:div:t", children: `The Chat Engine gets a rich context that includes the user's relationship status (from identity), their tag profile (which might include "relationship_conflict" as a main challenge), and relevant past memories. This allows for deeply personalized coaching without the Chat Engine needing to know anything about the database structure.` })
    ] })
  ] });
}
function k({
  number: a,
  actor: s,
  action: r,
  detail: n,
  system: i,
  success: g
}) {
  return /* @__PURE__ */ t(e, { _fgT: C, _fgS: "d4sr226", _fgB: 1793649787427, _fgD: !0, className: `bg-gradient-to-br ${g ? "from-green-100 to-green-50 border-green-400" : i === "Ingestion Library" ? "from-blue-100 to-blue-50 border-blue-300" : i === "Context Library" ? "from-green-100 to-green-50 border-green-300" : "from-slate-100 to-slate-50 border-slate-300"} border-2 p-5`, "data-fg-d4sr226": ":0:/src/app/components/EndToEndFlows.tsx:452:5:15102:1000:e:Card:e:1:::s:CuJ6:1", children: /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr227", _fgB: 1793649787427, className: "flex items-start gap-4", "data-fg-d4sr227": ":0:/src/app/components/EndToEndFlows.tsx:453:7:15174:916:e:div:ete", children: [
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr228", _fgB: 1793649787427, className: `flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${g ? "bg-green-500" : "bg-slate-700"} text-white`, "data-fg-d4sr228": ":0:/src/app/components/EndToEndFlows.tsx:454:9:15223:246:e:div:x", children: g ? /* @__PURE__ */ t(e, { _fgT: Q, _fgS: "d4sr230", _fgB: 1793649787427, className: "w-5 h-5", "data-fg-d4sr230": ":0:node_modules/lucide-react:457:22:15408:36:e:CheckCircle2::::::CELI" }) : a }),
    /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr231", _fgB: 1793649787427, className: "flex-1", "data-fg-d4sr231": ":0:/src/app/components/EndToEndFlows.tsx:459:9:15478:599:e:div:etete", children: [
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr232", _fgB: 1793649787427, className: "flex items-center gap-3 mb-2", "data-fg-d4sr232": ":0:/src/app/components/EndToEndFlows.tsx:460:11:15513:430:e:div:etx", children: [
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr233", _fgB: 1793649787427, className: "text-slate-900", "data-fg-d4sr233": ":0:/src/app/components/EndToEndFlows.tsx:461:13:15572:45:e:div:x", children: s }),
        i && /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr236", _fgB: 1793649787427, className: `px-2 py-0.5 rounded text-xs ${i === "Ingestion Library" ? "bg-blue-500 text-white" : "bg-green-500 text-white"}`, "data-fg-d4sr236": ":0:/src/app/components/EndToEndFlows.tsx:463:15:15657:254:e:div:tx", children: [
          "→ ",
          i
        ] })
      ] }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr239", _fgB: 1793649787427, className: "text-slate-700 mb-2", "data-fg-d4sr239": ":0:/src/app/components/EndToEndFlows.tsx:472:11:15954:51:e:div:x", children: r }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr241", _fgB: 1793649787427, className: "text-slate-600", "data-fg-d4sr241": ":0:/src/app/components/EndToEndFlows.tsx:473:11:16016:46:e:div:x", children: n })
    ] })
  ] }) });
}
function z() {
  return /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr243", _fgB: 1793649787427, _fgD: !0, className: "flex justify-center", "data-fg-d4sr243": ":0:/src/app/components/EndToEndFlows.tsx:482:5:16149:114:e:div:e:1", children: /* @__PURE__ */ t(e, { _fgT: Jr, _fgS: "d4sr244", _fgB: 1793649787427, className: "w-6 h-6 text-slate-400 rotate-90", "data-fg-d4sr244": ":0:node_modules/lucide-react:483:7:16193:59:e:ArrowRight::::::s5N" }) });
}
function Lt({ title: a, items: s }) {
  return /* @__PURE__ */ o(e, { _fgT: C, _fgS: "d4sr245", _fgB: 1793649787427, _fgD: !0, className: "bg-slate-100 border-2 border-slate-300 p-5", "data-fg-d4sr245": ":0:/src/app/components/EndToEndFlows.tsx:490:5:16363:443:e:Card:ete:1:::s:CuJ6:1", children: [
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr246", _fgB: 1793649787427, className: "text-slate-900 mb-3", "data-fg-d4sr246": ":0:/src/app/components/EndToEndFlows.tsx:491:7:16431:50:e:div:x", children: a }),
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d4sr248", _fgB: 1793649787427, className: "space-y-2", "data-fg-d4sr248": ":0:/src/app/components/EndToEndFlows.tsx:492:7:16488:306:e:div:x", children: s.map((r, n) => /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d4sr250", _fgB: 1793649787427, className: "flex items-start gap-2 text-sm text-slate-700", "data-fg-d4sr250": ":0:/src/app/components/EndToEndFlows.tsx:494:11:16562:207:e:div:ete", children: [
      /* @__PURE__ */ t(e, { _fgT: Q, _fgS: "d4sr251", _fgB: 1793649787427, className: "w-4 h-4 text-green-600 mt-0.5 flex-shrink-0", "data-fg-d4sr251": ":0:node_modules/lucide-react:495:13:16648:72:e:CheckCircle2::::::CELI" }),
      /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "d4sr252", _fgB: 1793649787427, "data-fg-d4sr252": ":0:/src/app/components/EndToEndFlows.tsx:496:13:16733:19:e:span:x", children: r })
    ] }, n)) })
  ] });
}
function Wo() {
  return /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp0", _fgB: 1793649787440, _fgD: !0, className: "space-y-6", "data-fg-vkp0": ":0:/src/app/components/LibraryFunctionReference.tsx:6:5:152:18040:e:div:xtetxtetxtetxte:1", children: [
    /* @__PURE__ */ o(e, { _fgT: C, _fgS: "vkp2", _fgB: 1793649787440, className: "p-6 bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-300", "data-fg-vkp2": ":0:/src/app/components/LibraryFunctionReference.tsx:8:7:207:563:e:Card:ete::::s:CuJ6:1", children: [
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp3", _fgB: 1793649787440, className: "flex items-center gap-3 mb-4", "data-fg-vkp3": ":0:/src/app/components/LibraryFunctionReference.tsx:9:9:309:190:e:div:ete", children: [
        /* @__PURE__ */ t(e, { _fgT: Xr, _fgS: "vkp4", _fgB: 1793649787440, className: "w-6 h-6 text-slate-700", "data-fg-vkp4": ":0:node_modules/lucide-react:10:11:366:43:e:Code::::::CsSp" }),
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "vkp5", _fgB: 1793649787440, className: "text-slate-900", "data-fg-vkp5": ":0:/src/app/components/LibraryFunctionReference.tsx:11:11:420:64:e:div:t", children: "Library Function Reference" })
      ] }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "vkp7", _fgB: 1793649787440, className: "text-slate-700", "data-fg-vkp7": ":0:/src/app/components/LibraryFunctionReference.tsx:13:9:508:248:e:div:t", children: "Complete function signatures for all Ingestion and Context Library functions. These are Python functions called by Temporal workflows, UI Backend, Journey Engine, and Personal Chat services." })
    ] }),
    /* @__PURE__ */ o(e, { _fgT: C, _fgS: "vkp10", _fgB: 1793649787440, className: "p-6 border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-blue-100", "data-fg-vkp10": ":0:/src/app/components/LibraryFunctionReference.tsx:19:7:820:7423:e:Card:ete::::s:CuJ6:1", children: [
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp11", _fgB: 1793649787440, className: "flex items-center gap-3 mb-6", "data-fg-vkp11": ":0:/src/app/components/LibraryFunctionReference.tsx:20:9:919:193:e:div:ete", children: [
        /* @__PURE__ */ t(e, { _fgT: kt, _fgS: "vkp12", _fgB: 1793649787440, className: "w-6 h-6 text-blue-700", "data-fg-vkp12": ":0:node_modules/lucide-react:21:11:976:46:e:Database::::::D6M7" }),
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "vkp13", _fgB: 1793649787440, className: "text-blue-900", "data-fg-vkp13": ":0:/src/app/components/LibraryFunctionReference.tsx:22:11:1033:64:e:div:t", children: "Ingestion Library Functions" })
      ] }),
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp15", _fgB: 1793649787440, className: "space-y-6", "data-fg-vkp15": ":0:/src/app/components/LibraryFunctionReference.tsx:25:9:1122:7107:e:div:xtetxtetxtetxtetxte", children: [
        /* @__PURE__ */ t(
          e,
          {
            _fgT: ce,
            _fgS: "vkp17",
            _fgB: 1793649787440,
            name: "ingest_day0_tags",
            description: "Stores user-selected tags from Day 0 onboarding grouped by category. Replaces all existing tags for the user.",
            color: "blue",
            params: [
              { name: "user_id", type: "string", description: "UUID of the user" },
              {
                name: "selections",
                type: "TagCategorySelection[]",
                description: "Array of tag category selections",
                subfields: [
                  { name: "tag_category", type: "TagCategoryId", description: '"mood" | "challenges" | "interests" | "goals" | "personality_traits" | "life_context" | "growth_areas" | "digital_habits"' },
                  { name: "tags", type: "string[]", description: 'Array of tag values for this category (e.g., ["overwhelmed", "anxious"] for mood)' }
                ]
              }
            ],
            example: `ingest_day0_tags(
  user_id="550e8400-e29b-41d4-a716-446655440000",
  selections=[
    {"tag_category": "mood", "tags": ["overwhelmed", "tired"]},
    {"tag_category": "challenges", "tags": ["stress_burnout", "work_family_balance"]},
    {"tag_category": "goals", "tags": ["emotional_balance", "inner_peace"]},
    {"tag_category": "life_context", "tags": ["parenting_toddler", "tech_professional"]}
  ]
)

# Internally, ingestion will:
# • Expand this into user_tag rows
# • Keep tag_category column populated
# • Rebuild tags_by_type_snapshot and tag_profile_summary_text`,
            "data-fg-vkp17": ":0:/src/app/components/LibraryFunctionReference.tsx:27:11:1195:1531:e:FunctionCard::::::BHRn"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: ce,
            _fgS: "vkp19",
            _fgB: 1793649787440,
            name: "ingest_day0_intro_answers",
            description: "Processes answers from the Day 0 introductory call. Triggers LLM summarization to populate core twin fields.",
            color: "blue",
            params: [
              { name: "user_id", type: "string", description: "UUID of the user" },
              {
                name: "answers",
                type: "object",
                description: "Day 0 answers structure",
                subfields: [
                  { name: "about_you_text", type: "string", description: "Free text narrative about the user" },
                  { name: "typical_day_text", type: "string", description: "Description of a typical day" },
                  { name: "emotional_state_text", type: "string", description: "Current emotional state" },
                  { name: "main_challenge_text", type: "string", description: "Main challenge facing the user" },
                  { name: "motivation_reason_text", type: "string", description: "Why they joined ZenAI" },
                  { name: "growth_preference_text", type: "string", description: "emotional/physical/relational/spiritual" },
                  { name: "learning_preference_text", type: "string", description: "read/listen/watch/etc" },
                  { name: "belief_and_openness_text", type: "string", description: "Religious/spiritual orientation" },
                  { name: "gender_and_orientation_text", type: "string", description: "Gender identity and pronouns" }
                ]
              }
            ],
            example: `ingest_day0_intro_answers(
  user_id="550e8400-e29b-41d4-a716-446655440000",
  answers={
    "about_you_text": "I'm a software engineer...",
    "typical_day_text": "I wake up at 7am...",
    "emotional_state_text": "Feeling stressed and anxious...",
    "main_challenge_text": "Work-life balance...",
    "motivation_reason_text": "I want to improve my mental health...",
    "growth_preference_text": "emotional and relational",
    "learning_preference_text": "reading and journaling",
    "belief_and_openness_text": "spiritual but not religious, very open",
    "gender_and_orientation_text": "she/her, straight"
  }
)`,
            "data-fg-vkp19": ":0:/src/app/components/LibraryFunctionReference.tsx:60:11:2782:2232:e:FunctionCard::::::BHRn"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: ce,
            _fgS: "vkp21",
            _fgB: 1793649787440,
            name: "ingest_mood_checkin",
            description: "Updates the user's current mood. Simple, fast operation.",
            color: "blue",
            params: [
              { name: "user_id", type: "string", description: "UUID of the user" },
              { name: "mood_today_code", type: "string", description: 'e.g. "calm", "anxious", "grateful", "stressed"' }
            ],
            example: `ingest_mood_checkin(
  user_id="550e8400-e29b-41d4-a716-446655440000",
  mood_today_code="calm"
)`,
            "data-fg-vkp21": ":0:/src/app/components/LibraryFunctionReference.tsx:100:11:5064:538:e:FunctionCard::::::BHRn"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: ce,
            _fgS: "vkp23",
            _fgB: 1793649787440,
            name: "ingest_journey_reflections",
            description: "Stores journey day reflections including journaling text and practice conversation. May trigger dynamic summary refresh.",
            color: "blue",
            params: [
              { name: "user_id", type: "string", description: "UUID of the user" },
              { name: "journaling_text", type: "string", description: "User's written reflection on the journey day" },
              {
                name: "transcript",
                type: "array",
                description: "Practice conversation transcript",
                subfields: [
                  { name: "role", type: '"user" | "coach"', description: "Who said this message" },
                  { name: "text", type: "string", description: "Message content" },
                  { name: "timestamp", type: "string", description: "ISO 8601 timestamp" }
                ]
              }
            ],
            example: `ingest_journey_reflections(
  user_id="550e8400-e29b-41d4-a716-446655440000",
  journaling_text="Today I learned about mindfulness...",
  transcript=[
    {"role": "user", "text": "I struggled with the breathing exercise", "timestamp": "2025-12-05T10:30:00Z"},
    {"role": "coach", "text": "That's completely normal...", "timestamp": "2025-12-05T10:30:05Z"}
  ]
)`,
            "data-fg-vkp23": ":0:/src/app/components/LibraryFunctionReference.tsx:115:11:5659:1366:e:FunctionCard::::::BHRn"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: ce,
            _fgS: "vkp25",
            _fgB: 1793649787440,
            name: "ingest_chat_turn",
            description: "Stores a personal chat conversation turn. May trigger dynamic summary refresh.",
            color: "blue",
            params: [
              { name: "user_id", type: "string", description: "UUID of the user" },
              {
                name: "transcript",
                type: "array",
                description: "Chat conversation transcript",
                subfields: [
                  { name: "role", type: '"user" | "coach"', description: "Who said this message" },
                  { name: "text", type: "string", description: "Message content" },
                  { name: "timestamp", type: "string", description: "ISO 8601 timestamp (optional)" }
                ]
              }
            ],
            example: `ingest_chat_turn(
  user_id="550e8400-e29b-41d4-a716-446655440000",
  transcript=[
    {"role": "user", "text": "I'm feeling overwhelmed today", "timestamp": "2025-12-05T14:30:00Z"},
    {"role": "coach", "text": "I hear you. Let's talk about what's going on...", "timestamp": "2025-12-05T14:30:05Z"}
  ]
)`,
            "data-fg-vkp25": ":0:/src/app/components/LibraryFunctionReference.tsx:144:11:7072:1142:e:FunctionCard::::::BHRn"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o(e, { _fgT: C, _fgS: "vkp27", _fgB: 1793649787440, className: "p-6 border-2 border-green-300 bg-gradient-to-br from-green-50 to-green-100", "data-fg-vkp27": ":0:/src/app/components/LibraryFunctionReference.tsx:173:7:8291:7992:e:Card:ete::::s:CuJ6:1", children: [
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp28", _fgB: 1793649787440, className: "flex items-center gap-3 mb-6", "data-fg-vkp28": ":0:/src/app/components/LibraryFunctionReference.tsx:174:9:8393:193:e:div:ete", children: [
        /* @__PURE__ */ t(e, { _fgT: ao, _fgS: "vkp29", _fgB: 1793649787440, className: "w-6 h-6 text-green-700", "data-fg-vkp29": ":0:node_modules/lucide-react:175:11:8450:47:e:FileJson::::::peU" }),
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "vkp30", _fgB: 1793649787440, className: "text-green-900", "data-fg-vkp30": ":0:/src/app/components/LibraryFunctionReference.tsx:176:11:8508:63:e:div:t", children: "Context Library Functions" })
      ] }),
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp32", _fgB: 1793649787440, className: "space-y-6", "data-fg-vkp32": ":0:/src/app/components/LibraryFunctionReference.tsx:179:9:8596:7673:e:div:xtetxtetxte", children: [
        /* @__PURE__ */ t(
          e,
          {
            _fgT: ce,
            _fgS: "vkp34",
            _fgB: 1793649787440,
            name: "build_journey_context",
            description: "Assembles personalized context for a journey day LLM call. Read-only operation that queries database and returns structured JSON.",
            color: "green",
            params: [
              { name: "user_id", type: "string", description: "UUID of the user" },
              { name: "request_id", type: "string", description: "Optional trace ID for observability that can be added to context_snapshot" }
            ],
            returnType: "JourneyContextJson",
            example: `context = build_journey_context(
  user_id="550e8400-e29b-41d4-a716-446655440000",
  request_id="trace-abc123"
)

# Returns:
{
  "user_id": "550e8400-...",
  "identity": {
    "display_name": "Sarah",
    "age_range": "30-35",
    "relationship_status": "married",
    "living_situation": "with_family",
    "family_description": "Lives with husband and 2-year-old daughter..."
  },
  "persona": {
    "persona_profile": {
      "persona_most_similar": "jane_villanueva",
      "persona_probabilities": {
        "jane_villanueva": 0.62,
        "dinesh_nair": 0.28,
        "will_freeman": 0.10
      }
    },
    "learning_style_probabilities": {
      "audio": 0.4,
      "visual": 0.3,
      "reading": 0.3
    }
  },
  "belief_profile": {
    "orientation": "spiritual_not_religious",
    "religion": "hindu",
    "religion_detail": "vedanta",
    "openness_to_other_religions": 4,
    "practice_frequency": "weekly",
    "notes": "comfortable exploring other faiths"
  },
  "tags": {
    "by_type": {
      "mood": ["overwhelmed", "tired"],
      "challenges": ["stress_burnout", "work_family_balance"],
      "goals": ["emotional_balance", "inner_peace"],
      "life_context": ["parenting_toddler", "tech_professional"]
    },
    "main_challenge_primary_tag": "stress_burnout",
    "motivation_primary_tag": "emotional_balance",
    "growth_focus_primary_tag": "mindfulness_growth",
    "tag_profile_summary": "A tech professional balancing career and toddler parenting..."
  },
  "journey_state": {
    "current_journey_key": "foundational_wisdom",
    "current_day_number": 5,
    "journey_day_streak_days": 5
  },
  "pillar_state": {
    "p1_level": 2,
    "p2_level": 1,
    "p3_level": 1,
    "p4_level": 1
  },
  "mood_today_code": "overwhelmed",
  "summaries": {
    "digital_twin_summary": "Sarah is a software engineer in her early 30s...",
    "recent_events_summary": "Completed breathing exercise yesterday, struggled with focus...",
    "emotional_state_summary": "Feeling overwhelmed but hopeful, seeking balance...",
    "pillar_progress_summary": "Making progress in mindfulness pillar, early in journey..."
  },
  "episodic_snippets": [
    {
      "text_raw": "I struggled with the breathing exercise today...",
      "timestamp": "2025-12-04T10:30:00Z",
      "source": "journey_reflection"
    },
    {
      "text_raw": "Feeling really stressed about work deadlines and toddler tantrums...",
      "timestamp": "2025-12-03T14:15:00Z",
      "source": "personal_chat"
    }
  ]
}`,
            "data-fg-vkp34": ":0:/src/app/components/LibraryFunctionReference.tsx:181:11:8674:3091:e:FunctionCard::::::BHRn"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: ce,
            _fgS: "vkp36",
            _fgB: 1793649787440,
            name: "build_chat_context",
            description: "Assembles personalized context for a personal chat LLM call. Read-only operation that queries database and returns structured JSON.",
            color: "green",
            params: [
              { name: "user_id", type: "string", description: "UUID of the user" },
              { name: "request_id", type: "string", description: "Optional trace ID for observability that can be added to context_snapshot" }
            ],
            returnType: "ChatContextJson",
            example: `context = build_chat_context(
  user_id="550e8400-e29b-41d4-a716-446655440000",
  request_id="trace-xyz789"
)

# Returns:
{
  "user_id": "550e8400-e29b-41d4-a716-446655440000",

  "identity": {
    "display_name": "Sarah",
    "relationship_status": "married",
    "living_situation": "with_family",
    "family_description": "Lives with husband and 2-year-old daughter...",
    "age_range": "30-35"
  },

  "persona": {
    "persona_profile": {
      "persona_most_similar": "jane_villanueva",
      "persona_probabilities": {
        "jane_villanueva": 0.62,
        "dinesh_nair": 0.28,
        "will_freeman": 0.10
      }
    },
    "learning_style_probabilities": {
      "audio": 0.4,
      "visual": 0.3,
      "reading": 0.3
    }
  },

  "belief_profile": {
    "orientation": "spiritual_not_religious",
    "religion": "hindu",
    "religion_detail": "vedanta",
    "openness_to_other_religions": 4,
    "practice_frequency": "weekly",
    "notes": "comfortable exploring other faiths"
  },

  "tags": {
    "by_type": {
      "mood": ["overwhelmed", "tired"],
      "challenges": ["stress_burnout", "work_family_balance"],
      "goals": ["emotional_balance", "inner_peace"],
      "life_context": ["parenting_toddler", "tech_professional"]
    },
    "main_challenge_primary_tag": "stress_burnout",
    "motivation_primary_tag": "emotional_balance",
    "growth_focus_primary_tag": "mindfulness_growth",
    "tag_profile_summary": "A tech professional balancing career and toddler parenting..."
  },

  "mood_today_code": "overwhelmed",

  "safety_and_tone": {
    "crisis_sensitivity_flag": false,
    "tone_guidance": "soft, validating, practical",
    "notes": "User is overwhelmed by work and parenting, but motivated and open to coaching."
  },

  "pillar_state": {
    "p1_level": 2,
    "p2_level": 1,
    "p3_level": 1,
    "p4_level": 1
  },

  "summaries": {
    "digital_twin_summary": "Sarah is a software engineer in her early 30s...",
    "recent_events_summary": "Completed breathing exercise yesterday, struggled with focus...",
    "emotional_state_summary": "Feeling overwhelmed but hopeful, seeking balance...",
    "pillar_progress_summary": "Making progress in mindfulness pillar, early in journey..."
  },

  "last_user_message": {
    "text": "I snapped at my daughter again tonight and now I feel so guilty.",
    "timestamp": "2025-12-04T18:45:00Z"
  },

  "recent_chat_history": [
    {
      "role": "user",
      "text": "I snapped at my daughter again tonight and now I feel so guilty.",
      "timestamp": "2025-12-04T18:45:00Z"
    },
    {
      "role": "coach",
      "text": "Thank you for sharing that so honestly. Before we unpack it, can you tell me what was happening just before you snapped?",
      "timestamp": "2025-12-04T18:44:30Z"
    },
    {
      "role": "user",
      "text": "Bedtime was chaotic, she kept resisting sleep and I was already stressed from work.",
      "timestamp": "2025-12-04T18:43:10Z"
    }
  ]
}`,
            "data-fg-vkp36": ":0:/src/app/components/LibraryFunctionReference.tsx:274:11:11814:3556:e:FunctionCard::::::BHRn"
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            _fgT: ce,
            _fgS: "vkp38",
            _fgB: 1793649787440,
            name: "get_user_tags",
            description: "Retrieves the user's current tag selections grouped by category. Read-only operation.",
            color: "green",
            params: [
              { name: "user_id", type: "string", description: "UUID of the user" }
            ],
            returnType: "TagCategoryWithSelection[]",
            example: `tags = get_user_tags(
  user_id="550e8400-e29b-41d4-a716-446655440000"
)

# Returns:
[
  {
    "tag_category": "mood",
    "tags": ["overwhelmed", "tired"]
  },
  {
    "tag_category": "challenges",
    "tags": ["stress_burnout", "work_family_balance"]
  },
  {
    "tag_category": "goals",
    "tags": ["emotional_balance", "inner_peace"]
  },
  {
    "tag_category": "life_context",
    "tags": ["parenting_toddler", "tech_professional"]
  }
]`,
            "data-fg-vkp38": ":0:/src/app/components/LibraryFunctionReference.tsx:386:11:15414:840:e:FunctionCard::::::BHRn"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o(e, { _fgT: C, _fgS: "vkp40", _fgB: 1793649787440, className: "p-6 bg-amber-50 border-2 border-amber-300", "data-fg-vkp40": ":0:/src/app/components/LibraryFunctionReference.tsx:422:7:16326:1855:e:Card:ete::::s:CuJ6:1", children: [
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "vkp41", _fgB: 1793649787440, className: "text-amber-900 mb-4", "data-fg-vkp41": ":0:/src/app/components/LibraryFunctionReference.tsx:423:9:16395:66:e:div:t", children: "💡 Implementation Notes" }),
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp43", _fgB: 1793649787440, className: "space-y-3 text-sm text-amber-800", "data-fg-vkp43": ":0:/src/app/components/LibraryFunctionReference.tsx:424:9:16470:1697:e:div:etetetetetete", children: [
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp44", _fgB: 1793649787440, className: "flex items-start gap-2", "data-fg-vkp44": ":0:/src/app/components/LibraryFunctionReference.tsx:425:11:16531:206:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "vkp45", _fgB: 1793649787440, className: "text-amber-600 mt-0.5", "data-fg-vkp45": ":0:/src/app/components/LibraryFunctionReference.tsx:426:13:16584:48:e:span:t", children: "•" }),
          /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "vkp47", _fgB: 1793649787440, "data-fg-vkp47": ":0:/src/app/components/LibraryFunctionReference.tsx:427:13:16645:75:e:span:t", children: "All functions are Python library functions, not REST endpoints" })
        ] }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp49", _fgB: 1793649787440, className: "flex items-start gap-2", "data-fg-vkp49": ":0:/src/app/components/LibraryFunctionReference.tsx:429:11:16748:221:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "vkp50", _fgB: 1793649787440, className: "text-amber-600 mt-0.5", "data-fg-vkp50": ":0:/src/app/components/LibraryFunctionReference.tsx:430:13:16801:48:e:span:t", children: "•" }),
          /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "vkp52", _fgB: 1793649787440, "data-fg-vkp52": ":0:/src/app/components/LibraryFunctionReference.tsx:431:13:16862:90:e:span:t", children: "Ingestion functions may call the Twin Summarization Helper which uses the LLM" })
        ] }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp54", _fgB: 1793649787440, className: "flex items-start gap-2", "data-fg-vkp54": ":0:/src/app/components/LibraryFunctionReference.tsx:433:11:16980:267:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "vkp55", _fgB: 1793649787440, className: "text-amber-600 mt-0.5", "data-fg-vkp55": ":0:/src/app/components/LibraryFunctionReference.tsx:434:13:17033:48:e:span:t", children: "•" }),
          /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "vkp57", _fgB: 1793649787440, "data-fg-vkp57": ":0:/src/app/components/LibraryFunctionReference.tsx:435:13:17094:136:e:span:t", children: "Context functions are pure read-only - they never call the LLM or write to the database (except context_snapshot for audit)" })
        ] }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp59", _fgB: 1793649787440, className: "flex items-start gap-2", "data-fg-vkp59": ":0:/src/app/components/LibraryFunctionReference.tsx:437:11:17258:239:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "vkp60", _fgB: 1793649787440, className: "text-amber-600 mt-0.5", "data-fg-vkp60": ":0:/src/app/components/LibraryFunctionReference.tsx:438:13:17311:48:e:span:t", children: "•" }),
          /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "vkp62", _fgB: 1793649787440, "data-fg-vkp62": ":0:/src/app/components/LibraryFunctionReference.tsx:439:13:17372:108:e:span:t", children: "Only Ingestion Library has write access to digital_twin_user, user_tag, and memory_entry tables" })
        ] }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp64", _fgB: 1793649787440, className: "flex items-start gap-2", "data-fg-vkp64": ":0:/src/app/components/LibraryFunctionReference.tsx:441:11:17508:209:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "vkp65", _fgB: 1793649787440, className: "text-amber-600 mt-0.5", "data-fg-vkp65": ":0:/src/app/components/LibraryFunctionReference.tsx:442:13:17561:48:e:span:t", children: "•" }),
          /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "vkp67", _fgB: 1793649787440, "data-fg-vkp67": ":0:/src/app/components/LibraryFunctionReference.tsx:443:13:17622:78:e:span:t", children: "Only Context Library writes to context_snapshot (for audit trail)" })
        ] }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp69", _fgB: 1793649787440, className: "flex items-start gap-2", "data-fg-vkp69": ":0:/src/app/components/LibraryFunctionReference.tsx:445:11:17728:202:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "vkp70", _fgB: 1793649787440, className: "text-amber-600 mt-0.5", "data-fg-vkp70": ":0:/src/app/components/LibraryFunctionReference.tsx:446:13:17781:48:e:span:t", children: "•" }),
          /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "vkp72", _fgB: 1793649787440, "data-fg-vkp72": ":0:/src/app/components/LibraryFunctionReference.tsx:447:13:17842:71:e:span:t", children: "All user_id parameters are UUID strings in standard format" })
        ] }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp74", _fgB: 1793649787440, className: "flex items-start gap-2", "data-fg-vkp74": ":0:/src/app/components/LibraryFunctionReference.tsx:449:11:17941:211:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "vkp75", _fgB: 1793649787440, className: "text-amber-600 mt-0.5", "data-fg-vkp75": ":0:/src/app/components/LibraryFunctionReference.tsx:450:13:17994:48:e:span:t", children: "•" }),
          /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "vkp77", _fgB: 1793649787440, "data-fg-vkp77": ":0:/src/app/components/LibraryFunctionReference.tsx:451:13:18055:80:e:span:t", children: 'Timestamps should be ISO 8601 format (e.g., "2025-12-05T14:30:00Z")' })
        ] })
      ] })
    ] })
  ] });
}
function ce({
  name: a,
  description: s,
  color: r,
  params: n,
  returnType: i,
  example: g
}) {
  return /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp79", _fgB: 1793649787440, _fgD: !0, className: `border-2 rounded-lg p-4 ${{
    blue: "bg-blue-100 border-blue-200",
    green: "bg-green-100 border-green-200"
  }[r]}`, "data-fg-vkp79": ":0:/src/app/components/LibraryFunctionReference.tsx:487:5:18672:1902:e:div:etxtetxtxtxte:1", children: [
    /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp80", _fgB: 1793649787440, className: "mb-3", "data-fg-vkp80": ":0:/src/app/components/LibraryFunctionReference.tsx:488:7:18774:181:e:div:ete", children: [
      /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp81", _fgB: 1793649787440, className: "text-lg mb-1 font-mono text-slate-900", "data-fg-vkp81": ":0:/src/app/components/LibraryFunctionReference.tsx:489:9:18805:69:e:div:xt", children: [
        a,
        "()"
      ] }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "vkp84", _fgB: 1793649787440, className: "text-sm text-slate-700", "data-fg-vkp84": ":0:/src/app/components/LibraryFunctionReference.tsx:490:9:18883:59:e:div:x", children: s })
    ] }),
    /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp87", _fgB: 1793649787440, className: "mb-4", "data-fg-vkp87": ":0:/src/app/components/LibraryFunctionReference.tsx:494:7:18988:1098:e:div:ete", children: [
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "vkp88", _fgB: 1793649787440, className: "text-sm mb-2 text-slate-800", "data-fg-vkp88": ":0:/src/app/components/LibraryFunctionReference.tsx:495:9:19019:62:e:div:t", children: "Parameters:" }),
      /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "vkp90", _fgB: 1793649787440, className: "space-y-2 ml-4", "data-fg-vkp90": ":0:/src/app/components/LibraryFunctionReference.tsx:496:9:19090:983:e:div:x", children: n.map((l, f) => /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp92", _fgB: 1793649787440, "data-fg-vkp92": ":0:/src/app/components/LibraryFunctionReference.tsx:498:13:19175:869:e:div:etx", children: [
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp93", _fgB: 1793649787440, className: "flex items-start gap-2 text-sm", "data-fg-vkp93": ":0:/src/app/components/LibraryFunctionReference.tsx:499:15:19205:296:e:div:etete", children: [
          /* @__PURE__ */ o(e, { _fgT: "span", _fgS: "vkp94", _fgB: 1793649787440, className: "font-mono text-slate-900", "data-fg-vkp94": ":0:/src/app/components/LibraryFunctionReference.tsx:500:17:19270:63:e:span:xt", children: [
            l.name,
            ":"
          ] }),
          /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "vkp97", _fgB: 1793649787440, className: "text-slate-600", "data-fg-vkp97": ":0:/src/app/components/LibraryFunctionReference.tsx:501:17:19350:52:e:span:x", children: l.type }),
          /* @__PURE__ */ o(e, { _fgT: "span", _fgS: "vkp99", _fgB: 1793649787440, className: "text-slate-700", "data-fg-vkp99": ":0:/src/app/components/LibraryFunctionReference.tsx:502:17:19419:61:e:span:tx", children: [
            "- ",
            l.description
          ] })
        ] }),
        l.subfields && /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "vkp103", _fgB: 1793649787440, className: "ml-6 mt-1 space-y-1", "data-fg-vkp103": ":0:/src/app/components/LibraryFunctionReference.tsx:505:17:19554:454:e:div:x", children: l.subfields.map((p, u) => /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp105", _fgB: 1793649787440, className: "flex items-start gap-2 text-xs text-slate-600", "data-fg-vkp105": ":0:/src/app/components/LibraryFunctionReference.tsx:507:21:19675:288:e:div:etete", children: [
          /* @__PURE__ */ o(e, { _fgT: "span", _fgS: "vkp106", _fgB: 1793649787440, className: "font-mono", "data-fg-vkp106": ":0:/src/app/components/LibraryFunctionReference.tsx:508:23:19774:51:e:span:xt", children: [
            p.name,
            ":"
          ] }),
          /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "vkp109", _fgB: 1793649787440, "data-fg-vkp109": ":0:/src/app/components/LibraryFunctionReference.tsx:509:23:19848:28:e:span:x", children: p.type }),
          /* @__PURE__ */ o(e, { _fgT: "span", _fgS: "vkp111", _fgB: 1793649787440, "data-fg-vkp111": ":0:/src/app/components/LibraryFunctionReference.tsx:510:23:19899:37:e:span:tx", children: [
            "- ",
            p.description
          ] })
        ] }, u)) })
      ] }, f)) })
    ] }),
    i && /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "vkp116", _fgB: 1793649787440, className: "mb-4", "data-fg-vkp116": ":0:/src/app/components/LibraryFunctionReference.tsx:522:9:20145:231:e:div:e", children: /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "vkp117", _fgB: 1793649787440, className: "text-sm text-slate-800", "data-fg-vkp117": ":0:/src/app/components/LibraryFunctionReference.tsx:523:11:20178:183:e:div:ete", children: [
      /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "vkp118", _fgB: 1793649787440, className: "mr-2", "data-fg-vkp118": ":0:/src/app/components/LibraryFunctionReference.tsx:524:13:20231:38:e:span:t", children: "Returns:" }),
      /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "vkp120", _fgB: 1793649787440, className: "font-mono text-slate-900", "data-fg-vkp120": ":0:/src/app/components/LibraryFunctionReference.tsx:525:13:20282:62:e:span:x", children: i })
    ] }) }),
    /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "vkp123", _fgB: 1793649787440, className: "bg-slate-900 rounded-lg p-3 overflow-x-auto", "data-fg-vkp123": ":0:/src/app/components/LibraryFunctionReference.tsx:531:7:20415:148:e:div:e", children: /* @__PURE__ */ t(e, { _fgT: "pre", _fgS: "vkp124", _fgB: 1793649787440, className: "text-xs text-slate-100 font-mono", "data-fg-vkp124": ":0:/src/app/components/LibraryFunctionReference.tsx:532:9:20485:65:e:pre:x", children: g }) })
  ] });
}
function Zo() {
  return /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d3bl0", _fgB: 1793649787075, _fgD: !0, className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8", "data-fg-d3bl0": ":0:/src/app/App.tsx:12:5:564:6057:e:div:e:1", children: /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d3bl1", _fgB: 1793649787075, className: "max-w-[1600px] mx-auto", "data-fg-d3bl1": ":0:/src/app/App.tsx:13:7:650:5960:e:div:etxtete", children: [
    /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d3bl2", _fgB: 1793649787075, className: "mb-8", "data-fg-d3bl2": ":0:/src/app/App.tsx:14:9:699:261:e:div:ete", children: [
      /* @__PURE__ */ t(e, { _fgT: "h1", _fgS: "d3bl3", _fgB: 1793649787075, className: "text-slate-900 mb-2", "data-fg-d3bl3": ":0:/src/app/App.tsx:15:11:732:73:e:h1:t", children: "Digital Twin System Architecture" }),
      /* @__PURE__ */ t(e, { _fgT: "p", _fgS: "d3bl5", _fgB: 1793649787075, className: "text-slate-600", "data-fg-d3bl5": ":0:/src/app/App.tsx:16:11:816:129:e:p:t", children: "Interactive documentation for Digital Twin Ingestion & Context Services" })
    ] }),
    /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d3bl8", _fgB: 1793649787075, className: "grid grid-cols-2 gap-6 mb-8", "data-fg-d3bl8": ":0:/src/app/App.tsx:22:9:1002:4570:e:div:xtetxte", children: [
      /* @__PURE__ */ o(e, { _fgT: C, _fgS: "d3bl10", _fgB: 1793649787075, className: "bg-gradient-to-br from-indigo-50 to-indigo-100 border-2 border-indigo-300 p-6", "data-fg-d3bl10": ":0:/src/app/App.tsx:24:11:1084:1963:e:Card:etetete::::s:CuJ6:1", children: [
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d3bl11", _fgB: 1793649787075, className: "flex items-center gap-3 mb-4", "data-fg-d3bl11": ":0:/src/app/App.tsx:25:13:1193:187:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: mo, _fgS: "d3bl12", _fgB: 1793649787075, className: "w-6 h-6 text-indigo-600", "data-fg-d3bl12": ":0:node_modules/lucide-react:26:15:1254:46:e:Target::::::DxzD" }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d3bl13", _fgB: 1793649787075, className: "text-indigo-900", "data-fg-d3bl13": ":0:/src/app/App.tsx:27:15:1315:46:e:div:t", children: "Purpose" })
        ] }),
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d3bl15", _fgB: 1793649787075, className: "text-indigo-800 mb-4", "data-fg-d3bl15": ":0:/src/app/App.tsx:29:13:1393:175:e:div:t", children: "A persistent, evolving understanding of each user that enables personalized spiritual coaching through:" }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d3bl17", _fgB: 1793649787075, className: "space-y-2 mb-6", "data-fg-d3bl17": ":0:/src/app/App.tsx:32:13:1581:1042:e:div:etetete", children: [
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d3bl18", _fgB: 1793649787075, className: "text-indigo-700 text-sm flex items-start gap-2", "data-fg-d3bl18": ":0:/src/app/App.tsx:33:15:1628:245:e:div:ete", children: [
            /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "d3bl19", _fgB: 1793649787075, className: "text-indigo-400 mt-0.5", "data-fg-d3bl19": ":0:/src/app/App.tsx:34:17:1709:49:e:span:t", children: "•" }),
            /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "d3bl21", _fgB: 1793649787075, "data-fg-d3bl21": ":0:/src/app/App.tsx:35:17:1775:77:e:span:t", children: "Emotional, cognitive, behavioral, and spiritual pattern tracking" })
          ] }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d3bl23", _fgB: 1793649787075, className: "text-indigo-700 text-sm flex items-start gap-2", "data-fg-d3bl23": ":0:/src/app/App.tsx:37:15:1888:235:e:div:ete", children: [
            /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "d3bl24", _fgB: 1793649787075, className: "text-indigo-400 mt-0.5", "data-fg-d3bl24": ":0:/src/app/App.tsx:38:17:1969:49:e:span:t", children: "•" }),
            /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "d3bl26", _fgB: 1793649787075, "data-fg-d3bl26": ":0:/src/app/App.tsx:39:17:2035:67:e:span:t", children: "Continuity across daily journeys and spontaneous chats" })
          ] }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d3bl28", _fgB: 1793649787075, className: "text-indigo-700 text-sm flex items-start gap-2", "data-fg-d3bl28": ":0:/src/app/App.tsx:41:15:2138:220:e:div:ete", children: [
            /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "d3bl29", _fgB: 1793649787075, className: "text-indigo-400 mt-0.5", "data-fg-d3bl29": ":0:/src/app/App.tsx:42:17:2219:49:e:span:t", children: "•" }),
            /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "d3bl31", _fgB: 1793649787075, "data-fg-d3bl31": ":0:/src/app/App.tsx:43:17:2285:52:e:span:t", children: "Adaptive coaching based on growth stage" })
          ] }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d3bl33", _fgB: 1793649787075, className: "text-indigo-700 text-sm flex items-start gap-2", "data-fg-d3bl33": ":0:/src/app/App.tsx:45:15:2373:231:e:div:ete", children: [
            /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "d3bl34", _fgB: 1793649787075, className: "text-indigo-400 mt-0.5", "data-fg-d3bl34": ":0:/src/app/App.tsx:46:17:2454:49:e:span:t", children: "•" }),
            /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "d3bl36", _fgB: 1793649787075, "data-fg-d3bl36": ":0:/src/app/App.tsx:47:17:2520:63:e:span:t", children: "Personalized examples grounded in user's real life" })
          ] })
        ] }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d3bl38", _fgB: 1793649787075, className: "bg-indigo-200 border border-indigo-300 rounded-lg p-4", "data-fg-d3bl38": ":0:/src/app/App.tsx:50:13:2636:393:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d3bl39", _fgB: 1793649787075, className: "text-indigo-900 mb-1", "data-fg-d3bl39": ":0:/src/app/App.tsx:51:15:2722:58:e:div:t", children: "Core Principle" }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d3bl41", _fgB: 1793649787075, className: "text-indigo-800 text-sm", "data-fg-d3bl41": ":0:/src/app/App.tsx:52:15:2795:215:e:div:t", children: "Static stories and definitions + Dynamic personalization through the Digital Twin = Coaching that feels like a wise mentor who knows you" })
        ] })
      ] }),
      /* @__PURE__ */ o(e, { _fgT: C, _fgS: "d3bl44", _fgB: 1793649787075, className: "bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-300 p-6", "data-fg-d3bl44": ":0:/src/app/App.tsx:59:11:3094:2463:e:Card:etetete::::s:CuJ6:1", children: [
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d3bl45", _fgB: 1793649787075, className: "flex items-center gap-3 mb-4", "data-fg-d3bl45": ":0:/src/app/App.tsx:60:13:3206:201:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: co, _fgS: "d3bl46", _fgB: 1793649787075, className: "w-6 h-6 text-emerald-600", "data-fg-d3bl46": ":0:node_modules/lucide-react:61:15:3267:50:e:Lightbulb::::::DclZ" }),
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d3bl47", _fgB: 1793649787075, className: "text-emerald-900", "data-fg-d3bl47": ":0:/src/app/App.tsx:62:15:3332:56:e:div:t", children: "Goal of this MVP" })
        ] }),
        /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d3bl49", _fgB: 1793649787075, className: "text-emerald-800 mb-4", "data-fg-d3bl49": ":0:/src/app/App.tsx:64:13:3420:107:e:div:t", children: "Build a Digital Twin library that:" }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d3bl51", _fgB: 1793649787075, className: "space-y-2 mb-6", "data-fg-d3bl51": ":0:/src/app/App.tsx:67:13:3540:1131:e:div:etetete", children: [
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d3bl52", _fgB: 1793649787075, className: "text-emerald-700 text-sm flex items-start gap-2", "data-fg-d3bl52": ":0:/src/app/App.tsx:68:15:3587:240:e:div:ete", children: [
            /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "d3bl53", _fgB: 1793649787075, className: "text-emerald-400 mt-0.5", "data-fg-d3bl53": ":0:/src/app/App.tsx:69:17:3669:50:e:span:t", children: "•" }),
            /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "d3bl55", _fgB: 1793649787075, "data-fg-d3bl55": ":0:/src/app/App.tsx:70:17:3736:70:e:span:t", children: "Stores a persistent, evolving representation of each user" })
          ] }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d3bl57", _fgB: 1793649787075, className: "text-emerald-700 text-sm flex items-start gap-2", "data-fg-d3bl57": ":0:/src/app/App.tsx:72:15:3842:247:e:div:ete", children: [
            /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "d3bl58", _fgB: 1793649787075, className: "text-emerald-400 mt-0.5", "data-fg-d3bl58": ":0:/src/app/App.tsx:73:17:3924:50:e:span:t", children: "•" }),
            /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "d3bl60", _fgB: 1793649787075, "data-fg-d3bl60": ":0:/src/app/App.tsx:74:17:3991:77:e:span:t", children: "Ingests Day 0 intake, tags, daily check-ins, journaling and chat" })
          ] }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d3bl62", _fgB: 1793649787075, className: "text-emerald-700 text-sm flex items-start gap-2", "data-fg-d3bl62": ":0:/src/app/App.tsx:76:15:4104:290:e:div:ete", children: [
            /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "d3bl63", _fgB: 1793649787075, className: "text-emerald-400 mt-0.5", "data-fg-d3bl63": ":0:/src/app/App.tsx:77:17:4186:50:e:span:t", children: "•" }),
            /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "d3bl65", _fgB: 1793649787075, "data-fg-d3bl65": ":0:/src/app/App.tsx:78:17:4253:120:e:span:t", children: "Exposes a simple context API that returns a compact journey_context or chat_context block for the coach LLM" })
          ] }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d3bl67", _fgB: 1793649787075, className: "text-emerald-700 text-sm flex items-start gap-2", "data-fg-d3bl67": ":0:/src/app/App.tsx:80:15:4409:243:e:div:ete", children: [
            /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "d3bl68", _fgB: 1793649787075, className: "text-emerald-400 mt-0.5", "data-fg-d3bl68": ":0:/src/app/App.tsx:81:17:4491:50:e:span:t", children: "•" }),
            /* @__PURE__ */ t(e, { _fgT: "span", _fgS: "d3bl70", _fgB: 1793649787075, "data-fg-d3bl70": ":0:/src/app/App.tsx:82:17:4558:73:e:span:t", children: "Never loses raw data (all text is stored as episodic memory)" })
          ] })
        ] }),
        /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d3bl72", _fgB: 1793649787075, className: "bg-emerald-200 border border-emerald-300 rounded-lg p-4", "data-fg-d3bl72": ":0:/src/app/App.tsx:85:13:4684:855:e:div:ete", children: [
          /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d3bl73", _fgB: 1793649787075, className: "text-emerald-900 mb-2", "data-fg-d3bl73": ":0:/src/app/App.tsx:86:15:4772:54:e:div:t", children: "MVP Scope" }),
          /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d3bl75", _fgB: 1793649787075, className: "text-emerald-800 text-sm space-y-1", "data-fg-d3bl75": ":0:/src/app/App.tsx:87:15:4841:679:e:div:etete", children: [
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d3bl76", _fgB: 1793649787075, "data-fg-d3bl76": ":0:/src/app/App.tsx:88:17:4910:99:e:div:tet", children: [
              "We are ",
              /* @__PURE__ */ t(e, { _fgT: "strong", _fgS: "d3bl78", _fgB: 1793649787075, "data-fg-d3bl78": ":0:/src/app/App.tsx:88:29:4922:20:e:strong:t", children: "not" }),
              " doing trends, weekly jobs, or complex analytics in this MVP."
            ] }),
            /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d3bl81", _fgB: 1793649787075, className: "mt-2", "data-fg-d3bl81": ":0:/src/app/App.tsx:89:17:5026:41:e:div:t", children: "We only need:" }),
            /* @__PURE__ */ o(e, { _fgT: "div", _fgS: "d3bl83", _fgB: 1793649787075, className: "ml-4 mt-1", "data-fg-d3bl83": ":0:/src/app/App.tsx:90:17:5084:415:e:div:etetetete", children: [
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d3bl84", _fgB: 1793649787075, "data-fg-d3bl84": ":0:/src/app/App.tsx:91:19:5130:52:e:div:t", children: "• 1 table for user data and all summaries" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d3bl86", _fgB: 1793649787075, "data-fg-d3bl86": ":0:/src/app/App.tsx:92:19:5201:34:e:div:t", children: "• 1 table for user tags" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d3bl88", _fgB: 1793649787075, "data-fg-d3bl88": ":0:/src/app/App.tsx:93:19:5254:42:e:div:t", children: "• 1 table for episodic memories" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d3bl90", _fgB: 1793649787075, "data-fg-d3bl90": ":0:/src/app/App.tsx:94:19:5315:81:e:div:t", children: "• 1 table for context snapshots (for debugging and prompt improvement)" }),
              /* @__PURE__ */ t(e, { _fgT: "div", _fgS: "d3bl92", _fgB: 1793649787075, "data-fg-d3bl92": ":0:/src/app/App.tsx:95:19:5415:61:e:div:t", children: "• A set of ingestion and context library functions" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ o(e, { _fgT: Nt, _fgS: "d3bl94", _fgB: 1793649787075, defaultValue: "overview", className: "w-full", "data-fg-d3bl94": ":0:/src/app/App.tsx:102:9:5582:1015:e:Tabs:etetetetete::::s:tfa:1", children: [
      /* @__PURE__ */ o(e, { _fgT: Ct, _fgS: "d3bl95", _fgB: 1793649787075, className: "grid w-full grid-cols-5", "data-fg-d3bl95": ":0:/src/app/App.tsx:103:11:5642:436:e:TabsList:etetetete::::s:NDg:1", children: [
        /* @__PURE__ */ t(e, { _fgT: Z, _fgS: "d3bl96", _fgB: 1793649787075, value: "overview", "data-fg-d3bl96": ":0:/src/app/App.tsx:104:13:5701:65:e:TabsTrigger:t::::s:BlUk:1", children: "Architecture Overview" }),
        /* @__PURE__ */ t(e, { _fgT: Z, _fgS: "d3bl98", _fgB: 1793649787075, value: "database", "data-fg-d3bl98": ":0:/src/app/App.tsx:105:13:5779:59:e:TabsTrigger:t::::s:BlUk:1", children: "Database Schema" }),
        /* @__PURE__ */ t(e, { _fgT: Z, _fgS: "d3bl100", _fgB: 1793649787075, value: "functions", "data-fg-d3bl100": ":0:/src/app/App.tsx:106:13:5851:63:e:TabsTrigger:t::::s:BlUk:1", children: "Function Reference" }),
        /* @__PURE__ */ t(e, { _fgT: Z, _fgS: "d3bl102", _fgB: 1793649787075, value: "services", "data-fg-d3bl102": ":0:/src/app/App.tsx:107:13:5927:59:e:TabsTrigger:t::::s:BlUk:1", children: "Library Details" }),
        /* @__PURE__ */ t(e, { _fgT: Z, _fgS: "d3bl104", _fgB: 1793649787075, value: "flows", "data-fg-d3bl104": ":0:/src/app/App.tsx:108:13:5999:57:e:TabsTrigger:t::::s:BlUk:1", children: "End-to-End Flows" })
      ] }),
      /* @__PURE__ */ t(e, { _fgT: X, _fgS: "d3bl106", _fgB: 1793649787075, value: "overview", "data-fg-d3bl106": ":0:/src/app/App.tsx:111:11:6090:92:e:TabsContent:e::::s:D5Pb:1", children: /* @__PURE__ */ t(e, { _fgT: xo, _fgS: "d3bl107", _fgB: 1793649787075, "data-fg-d3bl107": ":0:/src/app/App.tsx:112:13:6133:24:e:ArchitectureOverview::::::BOVj" }) }),
      /* @__PURE__ */ t(e, { _fgT: X, _fgS: "d3bl108", _fgB: 1793649787075, value: "database", "data-fg-d3bl108": ":0:/src/app/App.tsx:115:11:6194:86:e:TabsContent:e::::s:D5Pb:1", children: /* @__PURE__ */ t(e, { _fgT: Uo, _fgS: "d3bl109", _fgB: 1793649787075, "data-fg-d3bl109": ":0:/src/app/App.tsx:116:13:6237:18:e:DatabaseSchema::::::CrSx" }) }),
      /* @__PURE__ */ t(e, { _fgT: X, _fgS: "d3bl110", _fgB: 1793649787075, value: "functions", "data-fg-d3bl110": ":0:/src/app/App.tsx:119:11:6292:97:e:TabsContent:e::::s:D5Pb:1", children: /* @__PURE__ */ t(e, { _fgT: Wo, _fgS: "d3bl111", _fgB: 1793649787075, "data-fg-d3bl111": ":0:/src/app/App.tsx:120:13:6336:28:e:LibraryFunctionReference::::::DoAh" }) }),
      /* @__PURE__ */ t(e, { _fgT: X, _fgS: "d3bl112", _fgB: 1793649787075, value: "services", "data-fg-d3bl112": ":0:/src/app/App.tsx:123:11:6401:86:e:TabsContent:e::::s:D5Pb:1", children: /* @__PURE__ */ t(e, { _fgT: Go, _fgS: "d3bl113", _fgB: 1793649787075, "data-fg-d3bl113": ":0:/src/app/App.tsx:124:13:6444:18:e:ServiceDetails::::::EJb7" }) }),
      /* @__PURE__ */ t(e, { _fgT: X, _fgS: "d3bl114", _fgB: 1793649787075, value: "flows", "data-fg-d3bl114": ":0:/src/app/App.tsx:127:11:6499:82:e:TabsContent:e::::s:D5Pb:1", children: /* @__PURE__ */ t(e, { _fgT: Vo, _fgS: "d3bl115", _fgB: 1793649787075, "data-fg-d3bl115": ":0:/src/app/App.tsx:128:13:6539:17:e:EndToEndFlows::::::CU8t" }) })
    ] })
  ] }) });
}
const Xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zo
}, Symbol.toStringTag, { value: "Module" }));
export {
  Qo as Code0_8
};
