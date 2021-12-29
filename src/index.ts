import EleEasyTable from './components/EleEasyTable.vue'
import CustomColumn from './components/CustomColumn/index.vue'

export default {
  install: (app: any) => {
    app.component('EleEasyTable', EleEasyTable)
    app.component('CustomColumn', CustomColumn)
  }
}