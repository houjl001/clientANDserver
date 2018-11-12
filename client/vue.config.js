module.exports = {
  baseUrl: '/website/',
  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
  outputDir: '../server/static',
  devServer: {
    //proxy: 'http://localhost:3000',
    proxy: {
      '/api': {
        target: 'http://192.168.93.75:3000/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}