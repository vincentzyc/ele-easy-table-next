import EleEasyTable from './components/EleEasyTable.vue';
import CustomColumn from './components/CustomColumn/index.vue';
import EleEasyTableEdit from './components/CustomColumn/index.vue';
import { App } from 'vue';

export default {
  install: (app: App) => {
    app.component('EleEasyTable', EleEasyTable);
    app.component('CustomColumn', CustomColumn);
    app.component('EleEasyTableEdit', EleEasyTableEdit);
  },
};
