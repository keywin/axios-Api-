拉取代码

npm i

npm run dev

#### 与此相关文件说明

```
├── src
    ├── api
    │   ├── api_model // 模块分区文件夹
    │   │   ├── http_model1.js // a模块api管理
    │   │   ├── http_model2.js // b模块api管理
    │   ├── http_axios.js // 仅对axios二次封装
    │   ├── http_baseUrl.js // 地址-IP
    │   ├── http_interceptor.js // 拦截器-加载等待
    │   └── http_status.js // 状态码
    ├── components
    │   ├── HelloWorld.vue // 方法引入及使用demo
    └── main.js // 输出sVue
```

作者：keywin  
掘金主页: https://juejin.im/user/5c81e1c56fb9a049fd10a2f6

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
