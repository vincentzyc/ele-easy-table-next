<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import EleEasyTableDemo from './components/EleEasyTableDemo.vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

<template>
  <el-config-provider :locale="zhCn">
    <EleEasyTableDemo />
  </el-config-provider>
</template>