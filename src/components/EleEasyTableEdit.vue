<template>
  <span v-bind="config" v-if="!isEdit" v-on="$attrs">{{ column[prop] }}</span>
  <el-select
    filterable
    placeholder="请选择"
    size="small"
    v-bind="config"
    v-else-if="options"
    v-model="column[prop]"
    v-on="$attrs"
  >
    <el-option :key="item.code" :label="item.label" :value="item.label" v-for="item in options"></el-option>
  </el-select>
  <el-input
    :class="prop + column.id"
    placeholder="请输入内容"
    size="small"
    v-bind="config"
    v-else
    v-model.trim="column[prop]"
    v-on="$attrs"
  ></el-input>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EleEasyTableEdit',
});
</script>

<script lang="ts" setup>
interface TypeProps {
  column: Record<string, any>;
  prop: string;
  isEdit?: boolean;
  options?: any[];
  config?: Record<string, any>;
}

withDefaults(defineProps<TypeProps>(), {
  isEdit: false,
  config: () => ({}),
});
</script>
