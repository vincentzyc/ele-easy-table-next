## 基于 Vue3、Element Plus 开发的一款表格组件，对Element Plus的el-table进行二次封装

[vite 版本](https://github.com/vincentzyc/ele-easy-table-next/tree/vite)

## 需要依赖的库
  "@element-plus/icons-vue": "^2.1.0",
  "element-plus": "^2.3.1",
  "vue": "^3.2.47",
  "vuedraggable": "^4.1.0"

## 安装
```
npm install ele-easy-table-next -S
```

## 使用
```
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import EleEasyTableNext from "ele-easy-table-next"

const app = createApp(App);

app.use(ElementPlus)
app.use(EleEasyTableNext)

app.mount('#app')
```