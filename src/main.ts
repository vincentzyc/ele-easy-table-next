import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import App from './App.vue'
import EleEasyTable from './index'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})
app.use(EleEasyTable)

app.mount('#app')