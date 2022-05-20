<template>
  <el-config-provider :locale="zhCn">
    <EleEasyTableDemo />
  </el-config-provider>
</template>

<script setup lang="ts">
import EleEasyTableDemo from './components/EleEasyTableDemo.vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>