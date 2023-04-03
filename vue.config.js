const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: false
  },
  outputDir: "docs",
  productionSourceMap: false,
  configureWebpack: {
    externals: process.env.NODE_ENV === 'production' ? {
      "vuedraggable": "vuedraggable",
    } : {}
  },
})
