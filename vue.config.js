const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  chainWebpack: config => {
    config.module.rules.delete('eslint')
  },
  pwa: {
    name: 'STOCK BOOSTER',
    workboxOptions: {
      exclude: ['_redirects'],
    }
  }
})
