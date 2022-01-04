import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import EleEasyTable from '../dist/ele-easy-table-next.es.js'

const app = createApp(App)

app.use(ElementPlus)
app.use(EleEasyTable)

app.mount('#app')