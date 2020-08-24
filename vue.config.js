const path = require('path')
const projectRoot = path.resolve(__dirname)

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': `${projectRoot}/src`,
        'assets': `${projectRoot}/src/assets`
      }
    }
  }
}
