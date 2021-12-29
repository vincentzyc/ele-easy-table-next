# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.


## 需要依赖的库
"element-plus": "1.2.0-beta.6",
"vue": "3.2.24",
"vuedraggable": "4.1.0"

## 使用
```
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import EleEasyTable from 'xxx.js';

const app = createApp(App);

app.use(ElementPlus)
app.use(EleEasyTable)

app.mount('#app')
```