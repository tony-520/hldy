// module.exports = {
//     //runtimeCompiler: true,
//     //publicPath: '/', // 设置打包文件相对路径
//     devServer: {
//       // open: process.platform === 'darwin',
//       // host: 'localhost',
//       port: 3001,
//       // open: true, //配置自动启动浏览器 
//       proxy: {
//         '/api': {
//           target: 'http://api.douban.com/v2/', //对应自己的接口
//           changeOrigin: true,
//           ws: true,
//           pathRewrite: {
//             '^/api': ''
//           }
//         }
//       }
//      }, 
//   }