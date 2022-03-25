var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, ref, watch, computed, resolveDirective, openBlock, createElementBlock, createBlock, unref, mergeProps, withCtx, Fragment, renderList, withDirectives, createCommentVNode, withKeys, createTextVNode, toDisplayString, renderSlot, vShow, createVNode, normalizeStyle, createElementVNode, nextTick } from "vue";
import { ElForm, ElFormItem, ElDatePicker, ElInput, ElSelect, ElOption, ElButton, ElTable, ElTableColumn, ElPagination, ElDialog, ElCheckbox, ElCheckboxGroup } from "element-plus";
import Draggable from "vuedraggable";
const _hoisted_1$1 = {
  class: "ele-easy-table",
  style: { "overflow": "hidden" }
};
const _hoisted_2$1 = {
  key: 0,
  style: { "text-align": "center" }
};
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("g", { "fill-rule": "evenodd" }, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M24 21.91l10.586-10.586a2 2 0 0 1 2.828 2.828l-12 12a2 2 0 0 1-2.828 0l-12-12a2 2 0 0 1 2.828-2.828L24 21.91zm-10.586 1.414L24 33.91l10.586-10.586a2 2 0 0 1 2.828 2.828l-12 12a2 2 0 0 1-2.828 0l-12-12a2 2 0 0 1 2.828-2.828z",
    "fill-rule": "nonzero"
  })
], -1);
const _hoisted_4$1 = [
  _hoisted_3$1
];
const _hoisted_5$1 = { key: 1 };
const _hoisted_6$1 = { key: 0 };
const _hoisted_7$1 = { key: 1 };
const _hoisted_8$1 = ["innerHTML"];
const _hoisted_9$1 = { key: 2 };
const _hoisted_10$1 = { key: 3 };
const _hoisted_11 = {
  key: 2,
  style: { "float": "right", "margin": "20px 0" }
};
const __default__$1 = defineComponent({
  name: "EleEasyTable"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  props: {
    formData: {
      type: Object,
      default() {
        return {};
      }
    },
    form: {
      type: Object,
      default() {
        return {};
      }
    },
    table: {
      type: Object,
      default() {
        return {
          list: []
        };
      }
    },
    pagination: {
      type: [Boolean, Object],
      default: true
    }
  },
  emits: ["update:formData", "get-list", "handle-expand"],
  setup(__props, { emit }) {
    const props = __props;
    const isExpand = ref(false);
    const tableIndex = ref(0);
    watch(() => props.table.list, () => {
      if (props.formData.totalCount > 0) {
        let maxPageIndex = Math.ceil(props.formData.totalCount / props.formData.pageSize);
        if (props.formData.pageIndex > maxPageIndex)
          props.formData.pageIndex = maxPageIndex;
      }
      if (props.formData.pageSize > 0 && props.formData.pageIndex > 0) {
        tableIndex.value = props.formData.pageSize * (props.formData.pageIndex - 1) + 1;
      } else {
        tableIndex.value = 1;
      }
    }, { immediate: true });
    const showFold = computed(() => {
      if (typeof props.form.foldNum !== "number" || props.form.foldNum <= 0)
        return false;
      let num = props.form.list.filter((v) => !(v.type === "button" || v.fold === false)).length;
      return num > props.form.foldNum - 1;
    });
    const svgStyle = computed(() => {
      const baseStyle = { "transition": "0.5s", "-webkit-transition": "0.5s" };
      const rotateStyle = { "transform": "rotate(180deg)", "-webkit-transform": "rotate(180deg)" };
      return isExpand.value ? __spreadValues(__spreadValues({}, baseStyle), rotateStyle) : baseStyle;
    });
    function handleExpand() {
      isExpand.value = !isExpand.value;
      emit("handle-expand", isExpand.value);
    }
    function showFormItem(item, key) {
      if (typeof props.form.foldNum !== "number" || props.form.foldNum <= 0 || item.type === "button" || item.fold === false || isExpand.value)
        return true;
      return key <= props.form.foldNum - 1;
    }
    function getDate(item) {
      props.formData[item.startKey] = props.formData[item.key] ? props.formData[item.key][0] : "";
      props.formData[item.endKey] = props.formData[item.key] ? props.formData[item.key][1] : "";
    }
    function handleSizeChange(val) {
      props.formData.pageIndex = 1;
      props.formData.pageSize = val;
      emit("update:formData", props.formData);
      emit("get-list");
    }
    async function handleCurrentChange(val) {
      props.formData.pageIndex = val;
      emit("update:formData", props.formData);
      emit("get-list");
    }
    return (_ctx, _cache) => {
      const _directive_loading = resolveDirective("loading");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        Object.keys(__props.form).length > 0 ? (openBlock(), createBlock(unref(ElForm), mergeProps({
          key: 0,
          class: __props.form.class,
          inline: true,
          model: __props.formData,
          style: __spreadValues({ position: "relative" }, __props.form.style)
        }, __props.form.config), {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.form.list, (item, key) => {
              return withDirectives((openBlock(), createElementBlock("span", { key }, [
                item.type !== "slot" ? (openBlock(), createBlock(unref(ElFormItem), mergeProps({
                  key: 0,
                  label: item.label ? item.label + "\uFF1A" : ""
                }, item.formConfig), {
                  default: withCtx(() => [
                    item.type === "datePicker" ? (openBlock(), createBlock(unref(ElDatePicker), mergeProps({
                      key: 0,
                      style: item.style || __props.form.formItemStyle,
                      onChange: ($event) => getDate(item),
                      "end-placeholder": "\u7ED3\u675F\u65E5\u671F",
                      "start-placeholder": "\u5F00\u59CB\u65E5\u671F",
                      type: "daterange"
                    }, item.config, {
                      modelValue: __props.formData[item.key],
                      "onUpdate:modelValue": ($event) => __props.formData[item.key] = $event,
                      "value-format": "yyyy-MM-dd"
                    }), null, 16, ["style", "onChange", "modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                    item.type === "input" ? (openBlock(), createBlock(unref(ElInput), mergeProps({
                      key: 1,
                      placeholder: item.placeholder ? item.placeholder : "\u8BF7\u8F93\u5165" + item.label,
                      style: item.style || __props.form.formItemStyle,
                      onKeyup: _cache[0] || (_cache[0] = withKeys(($event) => _ctx.$emit("get-list"), ["enter", "native"]))
                    }, item.config, {
                      modelValue: __props.formData[item.key],
                      "onUpdate:modelValue": ($event) => __props.formData[item.key] = $event
                    }), null, 16, ["placeholder", "style", "modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                    item.type === "select" ? (openBlock(), createBlock(unref(ElSelect), mergeProps({
                      key: 2,
                      placeholder: item.placeholder ? item.placeholder : "\u8BF7\u9009\u62E9" + item.label,
                      style: item.style || __props.form.formItemStyle
                    }, item.config, {
                      modelValue: __props.formData[item.key],
                      "onUpdate:modelValue": ($event) => __props.formData[item.key] = $event
                    }), {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(item.options, (option) => {
                          return openBlock(), createBlock(unref(ElOption), {
                            key: typeof option.value !== "undefined" ? option.value : option,
                            label: typeof option.label !== "undefined" ? option.label : option,
                            value: typeof option.value !== "undefined" ? option.value : option
                          }, null, 8, ["label", "value"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1040, ["placeholder", "style", "modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                    item.type === "button" ? (openBlock(), createBlock(unref(ElButton), mergeProps({
                      key: 3,
                      disabled: item.disabled ? item.disabled() : false,
                      style: item.style,
                      onClick: ($event) => item.handleClick(item, key),
                      type: "primary"
                    }, item.config), {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(typeof item.text === "function" ? item.text() : item.text), 1)
                      ]),
                      _: 2
                    }, 1040, ["disabled", "style", "onClick"])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1040, ["label"])) : renderSlot(_ctx.$slots, item.slot, { key: 1 })
              ])), [
                [vShow, showFormItem(item, key)]
              ]);
            }), 128)),
            unref(showFold) ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
              createVNode(unref(ElButton), {
                onClick: _cache[1] || (_cache[1] = ($event) => handleExpand()),
                type: "text"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(isExpand.value ? "\u6536\u8D77" : "\u5C55\u5F00") + " ", 1),
                  (openBlock(), createElementBlock("svg", {
                    style: normalizeStyle(unref(svgStyle)),
                    fill: "#409EFF",
                    height: "12px",
                    viewBox: "0 0 48 48",
                    width: "12px"
                  }, _hoisted_4$1, 4))
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true)
          ]),
          _: 3
        }, 16, ["class", "model", "style"])) : createCommentVNode("", true),
        Object.keys(__props.table).length > 0 ? withDirectives((openBlock(), createBlock(unref(ElTable), mergeProps({
          key: 1,
          data: __props.table.list,
          border: "",
          "element-loading-text": "\u62FC\u547D\u52A0\u8F7D\u4E2D",
          stripe: "",
          style: { "overflow": "visible", "margin-top": "20px" },
          "tooltip-effect": "light"
        }, _ctx.$attrs), {
          default: withCtx(() => [
            __props.table.selection && __props.table.selection.show && __props.table.list.length > 0 ? (openBlock(), createBlock(unref(ElTableColumn), mergeProps({
              key: 0,
              align: "center",
              type: "selection"
            }, __props.table.selection.config), null, 16)) : createCommentVNode("", true),
            __props.table.showIndex !== false ? (openBlock(), createBlock(unref(ElTableColumn), {
              key: 1,
              fixed: __props.table.indexFixed || false,
              label: __props.table.indexLabel || "\u5E8F\u53F7",
              align: "center",
              type: "index",
              index: tableIndex.value,
              width: "55"
            }, null, 8, ["fixed", "label", "index"])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.table.columns, (column) => {
              return openBlock(), createBlock(unref(ElTableColumn), mergeProps({
                key: column.key + column.label,
                label: column.label,
                prop: column.key,
                align: "center"
              }, column.config), {
                header: withCtx((scope) => [
                  column.header ? renderSlot(_ctx.$slots, column.header, {
                    key: 0,
                    row: scope.row
                  }) : (openBlock(), createElementBlock("span", _hoisted_5$1, toDisplayString(column.label), 1))
                ]),
                default: withCtx((scope) => [
                  !column.hasOwnProperty("type") ? (openBlock(), createElementBlock("span", _hoisted_6$1, toDisplayString(scope.row[column.key]), 1)) : createCommentVNode("", true),
                  column.type === "format" ? (openBlock(), createElementBlock("span", _hoisted_7$1, [
                    createElementVNode("span", {
                      innerHTML: column.format(scope.row, scope)
                    }, null, 8, _hoisted_8$1)
                  ])) : createCommentVNode("", true),
                  column.type === "textBtn" ? (openBlock(), createElementBlock("span", _hoisted_9$1, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(column.textBtn, (btn, key) => {
                      return openBlock(), createElementBlock("span", { key }, [
                        btn.text || btn.funcText(scope.row, scope) ? (openBlock(), createBlock(unref(ElButton), mergeProps({
                          key: 0,
                          onClick: ($event) => btn.handleClick(scope.row, scope),
                          style: { "margin-right": "10px" },
                          type: "text"
                        }, btn.config || btn.funcConfig ? btn.funcConfig(scope.row, scope) : {}, {
                          innerHTML: btn.text || btn.funcText(scope.row, scope)
                        }), null, 16, ["onClick", "innerHTML"])) : createCommentVNode("", true)
                      ]);
                    }), 128))
                  ])) : createCommentVNode("", true),
                  column.type === "slot" ? (openBlock(), createElementBlock("span", _hoisted_10$1, [
                    renderSlot(_ctx.$slots, column.slot, {
                      row: scope.row
                    })
                  ])) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1040, ["label", "prop"]);
            }), 128))
          ]),
          _: 3
        }, 16, ["data"])), [
          [_directive_loading, __props.table.isLoading]
        ]) : createCommentVNode("", true),
        Object.keys(__props.table).length > 0 && __props.pagination && Array.isArray(__props.table.list) && __props.table.list.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_11, [
          createVNode(unref(ElPagination), mergeProps({
            "current-page": __props.formData.pageIndex || 1,
            layout: typeof __props.pagination === "object" ? __props.pagination.layout : "total, sizes, prev, pager, next, jumper",
            "page-size": __props.formData.pageSize || 10,
            "page-sizes": typeof __props.pagination === "object" ? __props.pagination.pageSizes : [10, 20, 50, 100],
            total: 11,
            onCurrentChange: handleCurrentChange,
            onSizeChange: handleSizeChange
          }, typeof __props.pagination === "object" ? __props.pagination : {}), null, 16, ["current-page", "layout", "page-size", "page-sizes"])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
}));
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "custom-column-wrapper" };
const _hoisted_2 = { class: "custom-column-title-wrapper" };
const _hoisted_3 = /* @__PURE__ */ createElementVNode("div", { class: "custom-column-title" }, "\u81EA\u5B9A\u4E49\u5217", -1);
const _hoisted_4 = /* @__PURE__ */ createElementVNode("span", { class: "custom-column-search" }, "\u641C\u7D22\u5217\uFF1A", -1);
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u5168\u9009");
const _hoisted_6 = {
  class: "text-center",
  slot: "footer"
};
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u53D6 \u6D88");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u786E \u5B9A");
const _hoisted_9 = /* @__PURE__ */ createElementVNode("p", { class: "text-center custom-column-search" }, "\u6682\u65E0\u5217\u6570\u636E", -1);
const _hoisted_10 = [
  _hoisted_9
];
const __default__ = defineComponent({
  name: "CustomColumn"
});
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    localName: null,
    show: { type: Boolean, default: false },
    baseColumns: null,
    columns: null,
    defaultColumns: null
  },
  emits: ["update:show", "update:columns"],
  setup(__props, { emit }) {
    const props = __props;
    const keyWord = ref("");
    const visible = ref(false);
    const checkAll = ref(true);
    const allColumns = ref([]);
    const showColumns = ref([]);
    const checkedColumns = ref([]);
    const disabledCustoms = ref([]);
    const isIndeterminate = ref(false);
    watch(() => props.show, (val) => {
      if (val)
        initShow();
      visible.value = val;
    }, { immediate: true });
    watch(visible, (val) => {
      emit("update:show", val);
    });
    function setLStorage(key, value) {
      const str = window.JSON.stringify(value);
      window.localStorage.setItem(key, str);
    }
    function getLStorage(key) {
      const str = window.localStorage.getItem(key);
      if (!str)
        return "";
      try {
        return window.JSON.parse(str);
      } catch (error) {
        window.localStorage.removeItem(key);
        window.location.reload();
      }
    }
    function searchColumns(word = "") {
      showColumns.value = allColumns.value.filter((val) => val.label.toUpperCase().includes(word.toUpperCase())).map((v) => v.key);
      handleCheckedColumnsChange();
    }
    async function initLocalStorage() {
      var _a;
      let checkedColumns2 = getLStorage(props.localName) || props.defaultColumns || [];
      if (Array.isArray(checkedColumns2) && checkedColumns2.length > 0) {
        let hadCheckedColumns = [], checkedColumn;
        checkedColumns2.forEach((v, i) => {
          var _a2;
          checkedColumn = (_a2 = props.baseColumns) == null ? void 0 : _a2.find((item) => item.key === v);
          checkedColumn && checkedColumn.key ? hadCheckedColumns.push(checkedColumn) : checkedColumns2.splice(i, 1);
        });
        (_a = props.baseColumns) == null ? void 0 : _a.forEach((item) => {
          if (!checkedColumns2.includes(item.key))
            allColumns.value.push(item);
        });
        allColumns.value = hadCheckedColumns.concat(allColumns.value);
        disabledCustoms.value = allColumns.value.filter((item) => item.disabledCustom).map((v) => v.key);
        showColumns.value = allColumns.value.map((v) => v.key);
        await nextTick();
        emit("update:columns", hadCheckedColumns);
        return setLStorage(props.localName, checkedColumns2);
      }
      if (props.baseColumns)
        allColumns.value = props.baseColumns;
      disabledCustoms.value = allColumns.value.filter((item) => item.disabledCustom).map((v) => v.key);
      showColumns.value = allColumns.value.map((v) => v.key);
      emit("update:columns", props.baseColumns);
    }
    function initShow() {
      keyWord.value = "";
      searchColumns(keyWord.value);
      if (props.columns)
        checkedColumns.value = props.columns.map((v) => v.key);
      handleCheckedColumnsChange();
    }
    function cancel() {
      visible.value = false;
    }
    async function confirm() {
      let hadCheckedColumns = [], newCheckedColumns = [];
      allColumns.value.forEach((item) => {
        if (checkedColumns.value.includes(item.key)) {
          hadCheckedColumns.push(item);
          newCheckedColumns.push(item.key);
        }
      });
      setLStorage(props.localName, newCheckedColumns);
      emit("update:columns", []);
      await nextTick();
      emit("update:columns", hadCheckedColumns);
      visible.value = false;
    }
    function handleCheckAllChange(bool) {
      const showColumnsKeys = bool ? showColumns.value : showColumns.value.filter((v) => !disabledCustoms.value.includes(v));
      checkedColumns.value = bool ? checkedColumns.value = [.../* @__PURE__ */ new Set([...checkedColumns.value, ...showColumnsKeys])] : checkedColumns.value.filter((key) => !showColumnsKeys.includes(key));
      handleCheckedColumnsChange();
    }
    function handleCheckedColumnsChange() {
      checkAll.value = showColumns.value.every((v) => checkedColumns.value.includes(v));
      isIndeterminate.value = !checkAll.value && showColumns.value.some((v) => checkedColumns.value.includes(v));
    }
    initLocalStorage();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(ElDialog), {
          modelValue: visible.value,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => visible.value = $event),
          "show-close": false,
          width: "880px"
        }, {
          title: withCtx(() => [
            createElementVNode("div", _hoisted_2, [
              _hoisted_3,
              _hoisted_4,
              createVNode(unref(ElInput), {
                onInput: searchColumns,
                placeholder: "\u8BF7\u8F93\u5165\u5217\u540D\u79F0",
                size: "small",
                style: { "width": "200px" },
                modelValue: keyWord.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => keyWord.value = $event)
              }, null, 8, ["modelValue"])
            ])
          ]),
          default: withCtx(() => [
            withDirectives(createElementVNode("div", null, [
              createVNode(unref(ElCheckbox), {
                indeterminate: isIndeterminate.value,
                onChange: handleCheckAllChange,
                modelValue: checkAll.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => checkAll.value = $event)
              }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              }, 8, ["indeterminate", "modelValue"]),
              createVNode(unref(ElCheckboxGroup), {
                onChange: handleCheckedColumnsChange,
                modelValue: checkedColumns.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => checkedColumns.value = $event)
              }, {
                default: withCtx(() => [
                  createVNode(unref(Draggable), {
                    animation: 166,
                    group: { name: "customColumn" },
                    class: "el-checkbox-wrapper",
                    ghostClass: "ghost",
                    handle: ".el-checkbox__label",
                    "item-key": "key",
                    tag: "ul",
                    modelValue: allColumns.value,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => allColumns.value = $event)
                  }, {
                    item: withCtx(({ element }) => [
                      createElementVNode("li", null, [
                        withDirectives((openBlock(), createBlock(unref(ElCheckbox), {
                          disabled: element.disabledCustom,
                          key: element.key,
                          label: element.key
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(element.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["disabled", "label"])), [
                          [vShow, showColumns.value.includes(element.key)]
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["modelValue"]),
              createElementVNode("div", _hoisted_6, [
                createVNode(unref(ElButton), {
                  onClick: _cache[4] || (_cache[4] = ($event) => cancel())
                }, {
                  default: withCtx(() => [
                    _hoisted_7
                  ]),
                  _: 1
                }),
                createVNode(unref(ElButton), {
                  onClick: _cache[5] || (_cache[5] = ($event) => confirm()),
                  type: "primary"
                }, {
                  default: withCtx(() => [
                    _hoisted_8
                  ]),
                  _: 1
                })
              ])
            ], 512), [
              [vShow, showColumns.value.length > 0]
            ]),
            withDirectives(createElementVNode("div", null, _hoisted_10, 512), [
              [vShow, showColumns.value.length === 0]
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}));
var index = {
  install: (app) => {
    app.component("EleEasyTable", _sfc_main$1);
    app.component("CustomColumn", _sfc_main);
  }
};
export { index as default };
