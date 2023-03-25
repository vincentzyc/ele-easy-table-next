import { defineComponent as J, ref as E, watch as K, computed as W, resolveComponent as _, resolveDirective as Z, openBlock as u, createElementBlock as m, createBlock as h, mergeProps as k, withCtx as y, Fragment as L, renderList as O, withDirectives as U, createCommentVNode as c, withKeys as ee, createTextVNode as N, toDisplayString as T, renderSlot as P, vShow as j, createVNode as S, normalizeStyle as le, createElementVNode as C, unref as F, nextTick as q } from "vue";
import { ElForm as ae, ElFormItem as te, ElDatePicker as ne, ElInput as R, ElSelect as oe, ElOption as ue, ElTable as se, ElTableColumn as re, ElButton as H, ElPagination as de, ElDialog as ie, ElCheckbox as Q, ElCheckboxGroup as fe } from "element-plus";
import me from "vuedraggable";
const ye = J({
  name: "EleEasyTable",
  components: {
    ElForm: ae,
    ElFormItem: te,
    ElDatePicker: ne,
    ElInput: R,
    ElSelect: oe,
    ElOption: ue,
    ElTable: se,
    ElTableColumn: re,
    ElButton: H,
    ElPagination: de
  },
  props: {
    formData: {
      type: Object,
      default: () => ({})
    },
    form: {
      type: Object,
      default: () => ({})
    },
    table: {
      type: Object,
      default: () => ({ list: [] })
    },
    pagination: {
      type: [Boolean, Object],
      default: !0
    }
  },
  // const emit = defineEmits(['update:formData', 'get-list', 'handle-expand'])
  setup(e, { emit: i }) {
    const r = E(!1), v = E(0);
    K(() => e.table.list, () => {
      if (e.formData.totalCount > 0) {
        let s = Math.ceil(e.formData.totalCount / e.formData.pageSize);
        e.formData.pageIndex > s && (e.formData.pageIndex = s);
      }
      e.formData.pageSize > 0 && e.formData.pageIndex > 0 ? v.value = e.formData.pageSize * (e.formData.pageIndex - 1) + 1 : v.value = 1;
    }, { immediate: !0 });
    const b = W(() => typeof e.form.foldNum != "number" || e.form.foldNum <= 0 ? !1 : e.form.list.filter((w) => !(w.type === "button" || w.fold === !1)).length > e.form.foldNum - 1), $ = W(() => {
      const s = { transition: "0.5s", "-webkit-transition": "0.5s" }, w = { transform: "rotate(180deg)", "-webkit-transform": "rotate(180deg)" };
      return r.value ? { ...s, ...w } : s;
    });
    function f() {
      r.value = !r.value, i("handle-expand", r.value);
    }
    function p(s, w) {
      return typeof e.form.foldNum != "number" || e.form.foldNum <= 0 || s.type === "button" || s.fold === !1 || r.value ? !0 : w <= e.form.foldNum - 1;
    }
    function g(s) {
      e.formData[s.startKey] = e.formData[s.key] ? e.formData[s.key][0] : "", e.formData[s.endKey] = e.formData[s.key] ? e.formData[s.key][1] : "";
    }
    function I(s) {
      e.formData.pageIndex = 1, e.formData.pageSize = s, i("update:formData", e.formData), i("get-list");
    }
    async function V(s) {
      e.formData.pageIndex = s, i("update:formData", e.formData), i("get-list");
    }
    return {
      tableIndex: v,
      isExpand: r,
      showFold: b,
      svgStyle: $,
      handleExpand: f,
      showFormItem: p,
      getDate: g,
      handleSizeChange: I,
      handleCurrentChange: V
    };
  }
}), ce = (e, i) => {
  const r = e.__vccOpts || e;
  for (const [v, b] of i)
    r[v] = b;
  return r;
}, pe = {
  class: "ele-easy-table",
  style: { overflow: "hidden" }
}, ge = {
  key: 0,
  style: { "text-align": "center" }
}, he = /* @__PURE__ */ C("g", { "fill-rule": "evenodd" }, [
  /* @__PURE__ */ C("path", {
    d: "M24 21.91l10.586-10.586a2 2 0 0 1 2.828 2.828l-12 12a2 2 0 0 1-2.828 0l-12-12a2 2 0 0 1 2.828-2.828L24 21.91zm-10.586 1.414L24 33.91l10.586-10.586a2 2 0 0 1 2.828 2.828l-12 12a2 2 0 0 1-2.828 0l-12-12a2 2 0 0 1 2.828-2.828z",
    "fill-rule": "nonzero"
  })
], -1), ve = [
  he
], be = { key: 1 }, ke = { key: 0 }, Ce = { key: 1 }, we = ["innerHTML"], De = { key: 2 }, _e = { key: 3 }, Ee = {
  key: 2,
  style: { float: "right", margin: "20px 0" }
};
function Se(e, i, r, v, b, $) {
  const f = _("el-date-picker"), p = _("el-input"), g = _("el-option"), I = _("el-select"), V = _("el-button"), s = _("el-form-item"), w = _("el-form"), z = _("el-table-column"), x = _("el-table"), A = _("el-pagination"), M = Z("loading");
  return u(), m("div", pe, [
    Object.keys(e.form).length > 0 ? (u(), h(w, k({
      key: 0,
      class: e.form.class,
      inline: !0,
      model: e.formData,
      style: { position: "relative", ...e.form.style }
    }, e.form.config), {
      default: y(() => [
        (u(!0), m(L, null, O(e.form.list, (l, d) => U((u(), m("span", { key: d }, [
          l.type !== "slot" ? (u(), h(s, k({
            key: 0,
            label: l.label ? l.label + "：" : ""
          }, l.formConfig), {
            default: y(() => [
              l.type === "datePicker" ? (u(), h(f, k({
                key: 0,
                style: l.style || e.form.formItemStyle,
                onChange: (o) => e.getDate(l),
                "end-placeholder": "结束日期",
                "start-placeholder": "开始日期",
                type: "daterange"
              }, l.config, {
                modelValue: e.formData[l.key],
                "onUpdate:modelValue": (o) => e.formData[l.key] = o,
                "value-format": "yyyy-MM-dd"
              }), null, 16, ["style", "onChange", "modelValue", "onUpdate:modelValue"])) : c("", !0),
              l.type === "input" ? (u(), h(p, k({
                key: 1,
                placeholder: l.placeholder ? l.placeholder : "请输入" + l.label,
                style: l.style || e.form.formItemStyle,
                onKeyup: i[0] || (i[0] = ee((o) => e.$emit("get-list"), ["enter", "native"]))
              }, l.config, {
                modelValue: e.formData[l.key],
                "onUpdate:modelValue": (o) => e.formData[l.key] = o
              }), null, 16, ["placeholder", "style", "modelValue", "onUpdate:modelValue"])) : c("", !0),
              l.type === "select" ? (u(), h(I, k({
                key: 2,
                placeholder: l.placeholder ? l.placeholder : "请选择" + l.label,
                style: l.style || e.form.formItemStyle
              }, l.config, {
                modelValue: e.formData[l.key],
                "onUpdate:modelValue": (o) => e.formData[l.key] = o
              }), {
                default: y(() => [
                  (u(!0), m(L, null, O(l.options, (o) => (u(), h(g, {
                    key: typeof o.value < "u" ? o.value : o,
                    label: typeof o.label < "u" ? o.label : o,
                    value: typeof o.value < "u" ? o.value : o
                  }, null, 8, ["label", "value"]))), 128))
                ]),
                _: 2
              }, 1040, ["placeholder", "style", "modelValue", "onUpdate:modelValue"])) : c("", !0),
              l.type === "button" ? (u(), h(V, k({
                key: 3,
                disabled: l.disabled ? l.disabled() : !1,
                style: l.style,
                onClick: (o) => l.handleClick(l, d),
                type: "primary"
              }, l.config), {
                default: y(() => [
                  N(T(typeof l.text == "function" ? l.text() : l.text), 1)
                ]),
                _: 2
              }, 1040, ["disabled", "style", "onClick"])) : c("", !0)
            ]),
            _: 2
          }, 1040, ["label"])) : P(e.$slots, l.slot, { key: 1 })
        ])), [
          [j, e.showFormItem(l, d)]
        ])), 128)),
        e.showFold ? (u(), m("div", ge, [
          S(V, {
            onClick: i[1] || (i[1] = (l) => e.handleExpand()),
            type: "primary",
            link: ""
          }, {
            default: y(() => [
              N(T(e.isExpand ? "收起" : "展开") + " ", 1),
              (u(), m("svg", {
                style: le(e.svgStyle),
                fill: "#409EFF",
                height: "12px",
                viewBox: "0 0 48 48",
                width: "12px"
              }, ve, 4))
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      _: 3
    }, 16, ["class", "model", "style"])) : c("", !0),
    Object.keys(e.table).length > 0 ? U((u(), h(x, k({
      key: 1,
      data: e.table.list,
      border: "",
      "element-loading-text": "拼命加载中",
      stripe: "",
      style: { overflow: "visible", "margin-top": "20px" },
      "tooltip-effect": "light"
    }, e.$attrs), {
      default: y(() => [
        e.table.selection && e.table.selection.show && e.table.list.length > 0 ? (u(), h(z, k({
          key: 0,
          align: "center",
          type: "selection"
        }, e.table.selection.config), null, 16)) : c("", !0),
        e.table.showIndex !== !1 ? (u(), h(z, {
          key: 1,
          fixed: e.table.indexFixed || !1,
          label: e.table.indexLabel || "序号",
          align: "center",
          type: "index",
          index: e.tableIndex,
          width: "55"
        }, null, 8, ["fixed", "label", "index"])) : c("", !0),
        (u(!0), m(L, null, O(e.table.columns, (l) => (u(), h(z, k({
          key: l.key + l.label,
          label: l.label,
          prop: l.key,
          align: "center"
        }, l.config), {
          header: y((d) => [
            l.header ? P(e.$slots, l.header, {
              key: 0,
              row: d.row
            }) : (u(), m("span", be, T(l.label), 1))
          ]),
          default: y((d) => [
            l.hasOwnProperty("type") ? c("", !0) : (u(), m("span", ke, T(d.row[l.key]), 1)),
            l.type === "format" ? (u(), m("span", Ce, [
              C("span", {
                innerHTML: l.format(d.row, d)
              }, null, 8, we)
            ])) : c("", !0),
            l.type === "textBtn" ? (u(), m("span", De, [
              (u(!0), m(L, null, O(l.textBtn, (o, t) => (u(), m("span", { key: t }, [
                o.text || o.funcText(d.row, d) ? (u(), h(V, k({
                  key: 0,
                  onClick: (n) => o.handleClick(d.row, d),
                  style: { "margin-right": "10px" },
                  type: "primary",
                  link: ""
                }, o.config || o.funcConfig ? o.funcConfig(d.row, d) : {}, {
                  innerHTML: o.text || o.funcText(d.row, d)
                }), null, 16, ["onClick", "innerHTML"])) : c("", !0)
              ]))), 128))
            ])) : c("", !0),
            l.type === "slot" ? (u(), m("span", _e, [
              P(e.$slots, l.slot, {
                row: d.row
              })
            ])) : c("", !0)
          ]),
          _: 2
        }, 1040, ["label", "prop"]))), 128))
      ]),
      _: 3
    }, 16, ["data"])), [
      [M, e.table.isLoading]
    ]) : c("", !0),
    Object.keys(e.table).length > 0 && e.pagination && Array.isArray(e.table.list) && e.table.list.length > 0 ? (u(), m("div", Ee, [
      S(A, k({
        "current-page": e.formData.pageIndex || 1,
        layout: typeof e.pagination == "object" ? e.pagination.layout : "total, sizes, prev, pager, next, jumper",
        "page-size": e.formData.pageSize || 10,
        "page-sizes": typeof e.pagination == "object" ? e.pagination.pageSizes : [10, 20, 50, 100],
        total: 11,
        onCurrentChange: e.handleCurrentChange,
        onSizeChange: e.handleSizeChange
      }, typeof e.pagination == "object" ? e.pagination : {}), null, 16, ["current-page", "layout", "page-size", "page-sizes", "onCurrentChange", "onSizeChange"])
    ])) : c("", !0)
  ]);
}
const Ve = /* @__PURE__ */ ce(ye, [["render", Se]]), Fe = { class: "custom-column-wrapper" }, $e = { class: "custom-column-title-wrapper" }, Ie = /* @__PURE__ */ C("div", { class: "custom-column-title" }, "自定义列", -1), ze = /* @__PURE__ */ C("span", { class: "custom-column-search" }, "搜索列：", -1), Ne = {
  class: "text-center",
  slot: "footer"
}, Te = /* @__PURE__ */ C("p", { class: "text-center custom-column-search" }, "暂无列数据", -1), Ue = [
  Te
], Be = J({
  name: "CustomColumn"
}), Le = /* @__PURE__ */ J({
  ...Be,
  props: {
    localName: null,
    show: { type: Boolean, default: !1 },
    baseColumns: null,
    columns: null,
    defaultColumns: null
  },
  emits: ["update:show", "update:columns"],
  setup(e, { emit: i }) {
    const r = e, v = E(""), b = E(!1), $ = E(!0), f = E([]), p = E([]), g = E([]), I = E([]), V = E(!1);
    K(
      () => r.show,
      (t) => {
        t && A(), b.value = t;
      },
      { immediate: !0 }
    ), K(b, (t) => {
      i("update:show", t);
    });
    function s(t, n) {
      const a = window.JSON.stringify(n);
      window.localStorage.setItem(t, a);
    }
    function w(t) {
      const n = window.localStorage.getItem(t);
      if (!n)
        return "";
      try {
        return window.JSON.parse(n);
      } catch {
        window.localStorage.removeItem(t), window.location.reload();
      }
    }
    function z(t = "") {
      p.value = f.value.filter((n) => n.label.toUpperCase().includes(t.toUpperCase())).map((n) => n.key), o();
    }
    async function x() {
      var n;
      let t = w(r.localName) || r.defaultColumns || [];
      if (Array.isArray(t) && t.length > 0) {
        let a = [], B;
        return t.forEach((D, X) => {
          var G;
          B = (G = r.baseColumns) == null ? void 0 : G.find((Y) => Y.key === D), B && B.key ? a.push(B) : t.splice(X, 1);
        }), (n = r.baseColumns) == null || n.forEach((D) => {
          t.includes(D.key) || f.value.push(D);
        }), f.value = a.concat(f.value), I.value = f.value.filter((D) => D.disabledCustom).map((D) => D.key), p.value = f.value.map((D) => D.key), await q(), i("update:columns", a), s(r.localName, t);
      }
      r.baseColumns && (f.value = r.baseColumns), I.value = f.value.filter((a) => a.disabledCustom).map((a) => a.key), p.value = f.value.map((a) => a.key), i("update:columns", r.baseColumns);
    }
    function A() {
      v.value = "", z(v.value), r.columns && (g.value = r.columns.map((t) => t.key)), o();
    }
    function M() {
      b.value = !1;
    }
    async function l() {
      let t = [], n = [];
      f.value.forEach((a) => {
        g.value.includes(a.key) && (t.push(a), n.push(a.key));
      }), s(r.localName, n), i("update:columns", []), await q(), i("update:columns", t), b.value = !1;
    }
    function d(t) {
      const n = t ? p.value : p.value.filter((a) => !I.value.includes(a));
      g.value = t ? g.value = [.../* @__PURE__ */ new Set([...g.value, ...n])] : g.value.filter((a) => !n.includes(a)), o();
    }
    function o() {
      $.value = p.value.every((t) => g.value.includes(t)), V.value = !$.value && p.value.some((t) => g.value.includes(t));
    }
    return x(), (t, n) => (u(), m("div", Fe, [
      S(F(ie), {
        modelValue: b.value,
        "onUpdate:modelValue": n[6] || (n[6] = (a) => b.value = a),
        "show-close": !1,
        width: "880px"
      }, {
        header: y(() => [
          C("div", $e, [
            Ie,
            ze,
            S(F(R), {
              onInput: z,
              placeholder: "请输入列名称",
              style: { width: "200px" },
              modelValue: v.value,
              "onUpdate:modelValue": n[0] || (n[0] = (a) => v.value = a)
            }, null, 8, ["modelValue"])
          ])
        ]),
        default: y(() => [
          U(C("div", null, [
            S(F(Q), {
              indeterminate: V.value,
              onChange: d,
              modelValue: $.value,
              "onUpdate:modelValue": n[1] || (n[1] = (a) => $.value = a)
            }, {
              default: y(() => [
                N("全选")
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue"]),
            S(F(fe), {
              onChange: o,
              modelValue: g.value,
              "onUpdate:modelValue": n[3] || (n[3] = (a) => g.value = a)
            }, {
              default: y(() => [
                S(F(me), {
                  animation: 166,
                  group: { name: "customColumn" },
                  class: "el-checkbox-wrapper",
                  ghostClass: "ghost",
                  handle: ".el-checkbox__label",
                  "item-key": "key",
                  tag: "ul",
                  modelValue: f.value,
                  "onUpdate:modelValue": n[2] || (n[2] = (a) => f.value = a)
                }, {
                  item: y(({ element: a }) => [
                    C("li", null, [
                      U((u(), h(F(Q), {
                        disabled: a.disabledCustom,
                        key: a.key,
                        label: a.key
                      }, {
                        default: y(() => [
                          N(T(a.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "label"])), [
                        [j, p.value.includes(a.key)]
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue"]),
            C("div", Ne, [
              S(F(H), {
                onClick: n[4] || (n[4] = (a) => M())
              }, {
                default: y(() => [
                  N("取 消")
                ]),
                _: 1
              }),
              S(F(H), {
                onClick: n[5] || (n[5] = (a) => l()),
                type: "primary"
              }, {
                default: y(() => [
                  N("确 定")
                ]),
                _: 1
              })
            ])
          ], 512), [
            [j, p.value.length > 0]
          ]),
          U(C("div", null, Ue, 512), [
            [j, p.value.length === 0]
          ])
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const Ae = {
  install: (e) => {
    e.component("EleEasyTable", Ve), e.component("CustomColumn", Le);
  }
};
export {
  Ae as default
};
