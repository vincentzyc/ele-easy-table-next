<template>
  <div>
    <el-button @click="test1()" size="small" type="primary">测试测试</el-button>
    <EleEasyTable
      :table="table"
      v-model:formData="formData"
      @get-list="handleSearch"
      @selection-change="handleSelectionChange"
      class="ele-easy-table-demo"
    >
      <template #slot2="{ row }">
        <el-dropdown :hide-on-click="false" @command="handleView">
          <span class="el-dropdown-link">
            <el-button type="text">操作</el-button>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :command="{ item: row, handle: 'RecordDetail' }">查看详情</el-dropdown-item>
            <el-dropdown-item :command="{ item: row, handle: 'RecordLog' }">查看日志</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
      <template #header1>
        <span style="margin-right:8px">自定义标题</span>
        <el-tooltip content="Top Center 提示文字" effect="dark" placement="top">
          <i class="el-icon-info"></i>
        </el-tooltip>
      </template>
    </EleEasyTable>
    <CustomColumn
      localName="ELEEASYTABLE_CUSTOM_COLUMNS"
      v-model:columns="table.columns"
      v-model:show="showCustomColumn"
      :baseColumns="baseColumns"
      :defaultColumns="defaultColumns"
    />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import EleEasyTable from './EleEasyTable.vue'
import CustomColumn from './CustomColumn.vue'


const allList = [{
  data1: '000',
  data2: '第000000',
  data5: 'aaa'
}, {
  data1: '111',
  data2: '第111111',
  data5: 'bbb'
}, {
  data1: '222',
  data2: '第222222',
  data5: 'ccc'
}, {
  data1: '333',
  data2: '第333333',
  data5: 'ddd'
}, {
  data1: '444',
  data2: '第444444',
  data5: 'eee'
}, {
  data1: '555',
  data2: '第555555',
  data5: 'fff'
}, {
  data1: '666',
  data2: '第666666',
  data5: 'ggg'
}, {
  data1: '777',
  data2: '第777777',
  data5: 'hhh'
}, {
  data1: '888',
  data2: '第888888',
  data5: 'iii'
}, {
  data1: '999',
  data2: '第999999',
  data5: 'jjj'
}, {
  data1: '101010',
  data2: '第10101010',
  data5: 'kkk'
}]

const showCustomColumn = ref(false)
const formData = reactive({
  filterStartTime: "2019-01-01",  //设置默认值
  filterEndTime: "2019-01-07",  //设置默认值
  filterStartAndEndTime: ["2019-01-01", "2019-01-07"], //设置默认值
  pageIndex: 1,
  pageSize: 10,
  totalCount: 11,
})
const defaultColumns = ref(['data1', 'data3'])
const baseColumns = ref([{
  key: 'data1',
  label: '标题1',
  config: {
    sortable: true
  }
}, {
  key: 'data2',
  label: '标题2',
  header: "header1",
  type: 'format',
  format: (row: any) => {
    return row.data2 + '%';
  }
}, {
  key: 'data3',
  label: '操作',
  type: 'textBtn',
  disabledCustom: true,
  textBtn: [{
    text: "操作一",
    funcConfig: (row: any) => {
      if (row.data1 === '333') return { disabled: true }
    },
    handleClick: (row: any, scope: any) => { console.log(row, scope) }
  }, {
    text: "操作二",
    handleClick: (row: any, scope: any) => { console.log(row, scope) }
  }, {
    text: "操作三",
    handleClick: (row: any, scope: any) => { console.log(row, scope) }
  }]
}, {
  key: 'data4',
  label: '编辑',
  type: 'slot',
  slot: 'slot2'
}, {
  key: 'data5',
  label: 'APK'
}])

const table = reactive({
  selection: {
    show: true,
    config: {
      selectable: (row: any) => row.data1 !== '222'
    }
  },
  list: [],
  columns: []
})

function getList(): any {
  return allList.filter((item, key) =>
    key < formData.pageSize * formData.pageIndex && key >= formData.pageSize * (formData.pageIndex - 1)
  );
}
async function handleSearch() {
  console.log(formData);
  table.list = getList()
}
function handleSelectionChange(multipleSelection: any) {
  console.log(multipleSelection);
}
function test1() {
  console.log('test1test1test1test1')
  showCustomColumn.value = true
}
function handleView(command: any) {
  console.log(command);
}

table.list = getList()


</script>