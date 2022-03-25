<template>
  <div class="ele-easy-table" style="overflow: hidden;">
    <el-form
      :class="form.class"
      :inline="true"
      :model="formData"
      :style="{ position: 'relative', ...form.style }"
      v-bind="form.config"
      v-if="Object.keys(form).length > 0"
    >
      <span :key="key" v-for="(item, key) in form.list" v-show="showFormItem(item, key)">
        <el-form-item :label="item.label ? item.label + '：' : ''" v-bind="item.formConfig" v-if="item.type !== 'slot'">
          <el-date-picker
            :style="item.style || form.formItemStyle"
            @change="getDate(item)"
            end-placeholder="结束日期"
            start-placeholder="开始日期"
            type="daterange"
            v-bind="item.config"
            v-if="item.type === 'datePicker'"
            v-model="formData[item.key]"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
          <el-input
            :placeholder="item.placeholder ? item.placeholder : '请输入' + item.label"
            :style="item.style || form.formItemStyle"
            @keyup.enter.native="$emit('get-list')"
            v-bind="item.config"
            v-if="item.type === 'input'"
            v-model="formData[item.key]"
          ></el-input>
          <el-select
            :placeholder="item.placeholder ? item.placeholder : '请选择' + item.label"
            :style="item.style || form.formItemStyle"
            v-bind="item.config"
            v-if="item.type === 'select'"
            v-model="formData[item.key]"
          >
            <el-option
              :key="typeof (option.value) !== 'undefined' ? option.value : option"
              :label="typeof (option.label) !== 'undefined' ? option.label : option"
              :value="typeof (option.value) !== 'undefined' ? option.value : option"
              v-for="option in item.options"
            ></el-option>
          </el-select>
          <el-button
            :disabled="item.disabled ? item.disabled() : false"
            :style="item.style"
            @click="item.handleClick(item, key)"
            type="primary"
            v-bind="item.config"
            v-if="item.type === 'button'"
          >{{ typeof item.text === 'function' ? item.text() : item.text }}</el-button>
        </el-form-item>
        <slot :name="item.slot" v-else></slot>
      </span>
      <div style="text-align: center;" v-if="showFold">
        <el-button @click="handleExpand()" type="text">
          {{ isExpand ? '收起' : '展开' }}
          <svg
            :style="svgStyle"
            fill="#409EFF"
            height="12px"
            viewBox="0 0 48 48"
            width="12px"
          >
            <g fill-rule="evenodd">
              <path
                d="M24 21.91l10.586-10.586a2 2 0 0 1 2.828 2.828l-12 12a2 2 0 0 1-2.828 0l-12-12a2 2 0 0 1 2.828-2.828L24 21.91zm-10.586 1.414L24 33.91l10.586-10.586a2 2 0 0 1 2.828 2.828l-12 12a2 2 0 0 1-2.828 0l-12-12a2 2 0 0 1 2.828-2.828z"
                fill-rule="nonzero"
              />
            </g>
          </svg>
        </el-button>
      </div>
    </el-form>
    <el-table
      :data="table.list"
      border
      element-loading-text="拼命加载中"
      stripe
      style="overflow: visible;margin-top:20px;"
      tooltip-effect="light"
      v-bind="$attrs"
      v-if="Object.keys(table).length > 0"
      v-loading="table.isLoading"
    >
      <el-table-column
        align="center"
        type="selection"
        v-bind="table.selection.config"
        v-if="table.selection && table.selection.show && table.list.length > 0"
      ></el-table-column>
      <el-table-column
        :fixed="table.indexFixed || false"
        :label="table.indexLabel || '序号'"
        align="center"
        type="index"
        :index="tableIndex"
        v-if="table.showIndex !== false"
        width="55"
      ></el-table-column>
      <el-table-column
        :key="column.key + column.label"
        :label="column.label"
        :prop="column.key"
        align="center"
        v-bind="column.config"
        v-for="column in table.columns"
      >
        <template #header="scope">
          <slot :name="column.header" :row="scope.row" v-if="column.header"></slot>
          <span v-else>{{ column.label }}</span>
        </template>

        <template #default="scope">
          <span v-if="!column.hasOwnProperty('type')">{{ scope.row[column.key] }}</span>
          <span v-if="column.type === 'format'">
            <span v-html="column.format(scope.row, scope)"></span>
          </span>
          <span v-if="column.type === 'textBtn'">
            <span :key="key" v-for="(btn, key) in column.textBtn">
              <el-button
                @click="btn.handleClick(scope.row, scope)"
                style="margin-right:10px"
                type="text"
                v-bind="btn.config || btn.funcConfig ? btn.funcConfig(scope.row, scope) : {}"
                v-html="btn.text || btn.funcText(scope.row, scope)"
                v-if="btn.text || btn.funcText(scope.row, scope)"
              ></el-button>
            </span>
          </span>
          <span v-if="column.type === 'slot'">
            <slot :name="column.slot" :row="scope.row"></slot>
          </span>
        </template>
      </el-table-column>
    </el-table>

    <div
      style="float: right;margin: 20px 0;"
      v-if="Object.keys(table).length > 0 && pagination && Array.isArray(table.list) && table.list.length > 0"
    >
      <el-pagination
        :current-page="formData.pageIndex || 1"
        :layout="typeof (pagination) === 'object' ? pagination.layout : 'total, sizes, prev, pager, next, jumper'"
        :page-size="formData.pageSize || 10"
        :page-sizes="typeof (pagination) === 'object' ? pagination.pageSizes : [10, 20, 50, 100]"
        :total="11"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        v-bind="typeof (pagination) === 'object' ? pagination : {}"
      ></el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: "EleEasyTable"
})
</script>

<script lang="ts" setup>
import { ElForm, ElFormItem, ElDatePicker, ElInput, ElSelect, ElOption, ElTable, ElTableColumn, ElButton, ElPagination } from "element-plus";

const props = defineProps({
  formData: {
    type: Object,
    default() {
      return {}
    }
  },
  form: {
    type: Object,
    default() {
      return {}
    }
  },
  table: {
    type: Object,
    default() {
      return {
        list: []
      }
    }
  },
  pagination: {
    type: [Boolean, Object],
    default: true
  }
})

const emit = defineEmits(['update:formData', 'get-list', 'handle-expand'])

const isExpand = ref(false)
const tableIndex = ref(0)

watch(() => props.table.list, () => {
  if (props.formData.totalCount > 0) {
    let maxPageIndex = Math.ceil(props.formData.totalCount / props.formData.pageSize);
    if (props.formData.pageIndex > maxPageIndex) props.formData.pageIndex = maxPageIndex;
  }
  if (props.formData.pageSize > 0 && props.formData.pageIndex > 0) {
    tableIndex.value = props.formData.pageSize * (props.formData.pageIndex - 1) + 1;
  } else {
    tableIndex.value = 1; //没有翻页功能
  }
}, { immediate: true })

const showFold = computed(() => {
  if (typeof props.form.foldNum !== 'number' || props.form.foldNum <= 0) return false
  let num = props.form.list.filter((v: Record<string, any>) => !(v.type === 'button' || v.fold === false)).length
  return num > props.form.foldNum - 1
})

const svgStyle = computed(() => {
  const baseStyle = { 'transition': '0.5s', '-webkit-transition': '0.5s' }
  const rotateStyle = { 'transform': 'rotate(180deg)', '-webkit-transform': 'rotate(180deg)' }
  return isExpand.value ? { ...baseStyle, ...rotateStyle } : baseStyle
})

function handleExpand() {
  isExpand.value = !isExpand.value;
  emit('handle-expand', isExpand.value);
}
function showFormItem(item: Record<string, any>, key: number) {
  if (typeof props.form.foldNum !== 'number' || props.form.foldNum <= 0 || item.type === 'button' || item.fold === false || isExpand.value) return true
  return key <= props.form.foldNum - 1
}
function getDate(item: Record<string, any>) {
  props.formData[item.startKey] = props.formData[item.key] ? props.formData[item.key][0] : "";
  props.formData[item.endKey] = props.formData[item.key] ? props.formData[item.key][1] : "";
}
function handleSizeChange(val: number) {
  props.formData.pageIndex = 1
  props.formData.pageSize = val
  emit('update:formData', props.formData)
  emit('get-list');
}
async function handleCurrentChange(val: number) {
  props.formData.pageIndex = val
  emit('update:formData', props.formData)
  emit('get-list');
}
</script>

