const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: false
  },
  outputDir: "docs",
  productionSourceMap: false,
  configureWebpack: {
    // 以下库使用外部资源，不会被打包
    externals: process.env.NODE_ENV === 'production' ? {
      "vue": "Vue",
      "vuedraggable": "vuedraggable",
      "element-plus": "ElementPlus"
    } : {}
  },
})
