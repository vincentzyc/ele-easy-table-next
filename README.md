## 基于 Vue3、Element Plus 开发的一款表格组件，对Element Plus的el-table进行二次封装

## 需要依赖的库
"element-plus": "1.2.0-beta.6",
"vue": "3.2.24",
"vuedraggable": "4.1.0"

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
import 'ele-easy-table-next/dist/style.css'

const app = createApp(App);

app.use(ElementPlus)
app.use(EleEasyTableNext)

app.mount('#app')
```