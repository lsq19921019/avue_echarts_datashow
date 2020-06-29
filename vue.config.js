module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ?'/admin/'
    :'/',
    devServer: {
      host: '127.0.0.1',
      disableHostCheck: true,
      proxy: {
        '/avue': {
          target: 'http://127.0.0.1:3000',
          changeOrigin: true,
          pathRewrite: {
            // '^/avue': ''
          },
          
        }
      }
    }
}