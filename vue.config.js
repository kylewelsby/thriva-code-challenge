const path = require('path')
const projectRoot = path.resolve(__dirname)

module.exports = {
  lintOnSave: true,
  baseUrl: process.env.NODE_ENV === 'production' ? '/thriva-code-challenge/' : '/',
  // publicPath: '/thriva-code-challenge/',
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': `${projectRoot}/src`,
        'assets': `${projectRoot}/src/assets`
      }
    }
  },
  chainWebpack: config =>  {
    config.plugins.delete('optimize-css')
  }
}
