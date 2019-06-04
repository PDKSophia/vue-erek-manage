const path = require('path')

module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8442,
    host: 'localhost'
  },
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        ekconfig: path.resolve(__dirname, 'src/conf/'),
        js: path.resolve(__dirname, 'src/js/'),
        components: path.resolve(__dirname, 'src/components/'),
        service: path.resolve(__dirname, 'src/service/'),
        store: path.resolve(__dirname, 'src/store/'),
        utils: path.resolve(__dirname, 'src/utils/')
      }
    }
  }
}
