# 配置反向代理

- 作用：解决跨域问题

## 步骤

- 1 在 Vue-cli 生成的项目根目录中创建一个 `vue.config.js`（与 package.json 同级）
- 2 在配置文件中添加以下代码：

```js
// https://cli.vuejs.org/zh/config/#devserver-proxy

module.exports = {
  // 选项...

  // devServer 实际上就是 webpack-dev-server 这个包
  devServer: {
    // proxy 设置代理的配置项
    // 配置文档：https://github.com/chimurai/http-proxy-middleware#proxycontext-config
    proxy: {
      // '/api' 表示 代理规则
      // 在 Vue 组件中使用 axios 发送请求的时候： axios.get('/api/xxx')
      // 也就是你的请求地址需要以当前规则（比如：/api）开头，那么，本次请求才会被代理
      // 如果某一个接口不需要被代理，就可以直接： axios.get('http://localhost:8080/api/xxx')
      // 这样配置后，最终的得到的接口地址为： http://localhost:8080/api/xxx
      '/api': {
        // 目标服务器地址，也就是接口服务器的真实地址
        target: 'http://localhost:8080/',
        // 跨域时一般都设置该值 为 true
        changeOrigin: true,
        // 重写接口路由
        pathRewrite: {
          '^/api': '' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
        }
      },

      // 其他代理~
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}
```
