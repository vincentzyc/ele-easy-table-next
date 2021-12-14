<template>
  <div class="clearfix">
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
            <span :key="key" v-for="(btn,key) in column.textBtn">
              <el-button
                @click="btn.handleClick(scope.row, scope)"
                class="mg-r10"
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
      class="pagination"
      v-if="Object.keys(table).length > 0 && pagination && Array.isArray(table.list) && table.list.length > 0"
    >
      <el-pagination
        :current-page="formData.pageIndex || 1"
        :layout="typeof (pagination) === 'object' ? pagination.layout || 'total, sizes, prev, pager, next, jumper'"
        :page-size="formData.pageSize || 10"
        :page-sizes="typeof (pagination) === 'object' ? pagination.pageSizes || [10, 20, 50, 100]"
        :total="formData.totalCount || 0"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        v-bind="typeof (pagination) === 'object' ? pagination : {}"
      ></el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "EleEasyTable"
}
</script>

<script lang="ts" setup>

const props = defineProps({
  formData: {
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

const emit = defineEmits(['update:formData', 'update:formData', 'get-list'])

function handleSizeChange(val: number) {
  emit('update:formData', {
    ...props.formData,
    pageIndex: 1,
    pageSize: val
  })
  emit('get-list');
}
function handleCurrentChange(val: number) {
  emit('update:formData', {
    ...props.formData,
    pageIndex: val
  })
  emit('get-list');
}

</script>


<style scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: " ";
}
.clearfix:after {
  clear: both;
}
.mg-r10 {
  margin-right: 10px;
}
.relative {
  position: relative;
}
.pagination {
  float: right;
  margin: 20px 0;
}
.text-center {
  text-align: center;
}
.arrow-icon {
  transition: 0.5s;
}
.arrow-expand {
  transform: rotate(180deg);
}
</style>
