<template>
  <div class="custom-column-wrapper">
    <el-dialog v-model="visible" :show-close="false" width="880px">
      <template #title>
        <div class="custom-column-title-wrapper">
          <div class="custom-column-title">自定义列</div>
          <span class="custom-column-search">搜索列：</span>
          <el-input @input="searchColumns" placeholder="请输入列名称" style="width:200px" v-model="keyWord"></el-input>
        </div>
      </template>
      <div v-show="showColumns.length > 0">
        <el-checkbox :indeterminate="isIndeterminate" @change="handleCheckAllChange" v-model="checkAll">全选</el-checkbox>
        <el-checkbox-group @change="handleCheckedColumnsChange" v-model="checkedColumns">
          <Draggable
            :animation="166"
            :group="{ name: 'customColumn' }"
            class="el-checkbox-wrapper"
            ghostClass="ghost"
            handle=".el-checkbox__label"
            item-key="key"
            tag="ul"
            v-model="allColumns"
          >
            <template #item="{ element }">
              <li>
                <el-checkbox
                  :disabled="element.disabledCustom"
                  :key="element.key"
                  :label="element.key"
                  v-show="showColumns.includes(element.key)"
                >{{ element.label }}</el-checkbox>
              </li>
            </template>
          </Draggable>
        </el-checkbox-group>
        <div class="text-center">
          <el-button @click="cancel()">取 消</el-button>
          <el-button @click="confirm()" type="primary">确 定</el-button>
        </div>
      </div>
      <div v-show="showColumns.length === 0">
        <p class="text-center custom-column-search">暂无列数据</p>
      </div>
    </el-dialog>
  </div>
</template>


<script lang="ts">
import { defineComponent, nextTick, ref, watch } from 'vue'
import { ElInput, ElCheckbox, ElCheckboxGroup, ElDialog, ElButton } from "element-plus";

export default defineComponent({
  name: "CustomColumn"
})
</script>

<script lang="ts" setup>
//  自定义表格列 && 自定义排序  
//  <CustomColumn 
//   :show.sync="showCustomColumn" //打开弹框
//   :localName="localName"  //存本地name
//   :baseColumns="baseColumns"  //全部列
//   :props.defaultColumns="defaultColumns" //首次默认显示的列(不传则显示全部)
//   :columns.sync="table.columns" //展示的列
//  />
import Draggable from 'vuedraggable'
import { TypeColumnsItem } from './type'

interface TypeProps {
  localName: string,
  show?: boolean,
  baseColumns?: TypeColumnsItem[],
  columns?: TypeColumnsItem[],
  defaultColumns?: string[]
}

const props = withDefaults(defineProps<TypeProps>(), {
  show: false
})

const emit = defineEmits(['update:show', 'update:columns'])

const keyWord = ref('')
const visible = ref(false)
const checkAll = ref(true)
const allColumns = ref<TypeColumnsItem[]>([])
const showColumns = ref<string[]>([])
const checkedColumns = ref<string[]>([])
const disabledCustoms = ref<string[]>([])
const isIndeterminate = ref(false)

watch(() => props.show, (val: boolean) => {
  if (val) initShow()
  visible.value = val;
}, { immediate: true })

watch(visible, (val: boolean) => {
  emit('update:show', val)
})

function setLStorage(key: string, value: unknown) {
  const str = window.JSON.stringify(value);
  window.localStorage.setItem(key, str);
}
function getLStorage(key: string) {
  const str = window.localStorage.getItem(key);
  if (!str) return "";
  try {
    return window.JSON.parse(str);
  } catch (error) {
    window.localStorage.removeItem(key);
    window.location.reload();
  }
}
function searchColumns(word = '') {
  showColumns.value = allColumns.value.filter(val => val.label.toUpperCase().includes(word.toUpperCase())).map(v => v.key)
  handleCheckedColumnsChange()
}
async function initLocalStorage() {
  let checkedColumns: string[] = getLStorage(props.localName) || props.defaultColumns || [];
  if (Array.isArray(checkedColumns) && checkedColumns.length > 0) {
    let hadCheckedColumns: TypeColumnsItem[] = [], checkedColumn: TypeColumnsItem | undefined;
    checkedColumns.forEach((v, i) => {
      checkedColumn = props.baseColumns?.find(item => item.key === v);
      checkedColumn && checkedColumn.key ? hadCheckedColumns.push(checkedColumn) : checkedColumns.splice(i, 1)
    })
    props.baseColumns?.forEach(item => {
      if (!checkedColumns.includes(item.key)) allColumns.value.push(item);
    })
    allColumns.value = hadCheckedColumns.concat(allColumns.value);
    disabledCustoms.value = allColumns.value.filter(item => item.disabledCustom).map(v => v.key)
    showColumns.value = allColumns.value.map(v => v.key);
    await nextTick()
    emit('update:columns', hadCheckedColumns);
    return setLStorage(props.localName, checkedColumns);
  }
  if (props.baseColumns) allColumns.value = props.baseColumns;
  disabledCustoms.value = allColumns.value.filter(item => item.disabledCustom).map(v => v.key)
  showColumns.value = allColumns.value.map(v => v.key);
  emit('update:columns', props.baseColumns);
}
function initShow() {
  keyWord.value = ''
  searchColumns(keyWord.value)
  if (props.columns) checkedColumns.value = props.columns.map(v => v.key);
  handleCheckedColumnsChange()
}
function cancel() {
  visible.value = false
}
async function confirm() {
  let hadCheckedColumns: TypeColumnsItem[] = [], newCheckedColumns: string[] = [];
  allColumns.value.forEach(item => {
    if (checkedColumns.value.includes(item.key)) {
      hadCheckedColumns.push(item);
      newCheckedColumns.push(item.key);
    }
  })
  setLStorage(props.localName, newCheckedColumns);
  emit('update:columns', []);
  await nextTick()
  emit('update:columns', hadCheckedColumns);
  visible.value = false
}
function handleCheckAllChange(bool: boolean) {
  const showColumnsKeys = bool ? showColumns.value : showColumns.value.filter(v => !disabledCustoms.value.includes(v))
  checkedColumns.value = bool
    ? checkedColumns.value = [...new Set([...checkedColumns.value, ...showColumnsKeys])]
    : checkedColumns.value.filter(key => !showColumnsKeys.includes(key))
  handleCheckedColumnsChange()
}
function handleCheckedColumnsChange() {
  checkAll.value = showColumns.value.every(v => checkedColumns.value.includes(v))
  isIndeterminate.value = !checkAll.value && showColumns.value.some(v => checkedColumns.value.includes(v))
}

initLocalStorage()

</script>

<style>
.custom-column-wrapper .custom-column-title-wrapper {
  display: flex;
  align-content: center;
}
.custom-column-wrapper .custom-column-title {
  flex: auto;
  font-size: 18px;
}
.custom-column-wrapper .custom-column-search {
  font-size: 14px;
  color: #666;
}
.custom-column-wrapper .el-dialog__header {
  line-height: 30px;
  color: #303133;
  font-size: 16px;
  padding: 20px 24px 15px 24px;
  background: #f5f5f5;
}

.custom-column-wrapper .el-checkbox-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}

.custom-column-wrapper .el-checkbox {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-right: 15px;
  height: auto;
}

.custom-column-wrapper .el-checkbox__label {
  width: 170px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.custom-column-wrapper .el-checkbox__label:hover {
  cursor: move;
}
.custom-column-wrapper .text-center {
  text-align: center;
}
</style>