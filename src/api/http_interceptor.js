/**
 * author: keywin
 * created: 2019-10-14
 * description: 拦截器 
 */

import axios from 'axios'
import { development_IP } from '@/api/http_baseUrl'

import router from '../router/index.js' // 按需引入
import { Notification } from 'element-ui'; // 按需引入, 警告提示什么的

import sVue from '@/main.js'
import {stateManagement_response, stateManagement_error} from './http_status.js'

// 请求超时
axios.defaults.timeout = 1000 * 60 * 2 // 2分钟
// 后台接口地址
axios.defaults.baseURL = developmentIP.baseURL

// 加载等待
let options = {},Loading;
options = {
  lock: true,
  text: '正在加载...',
  spinner: 'el-icon-loading',
  background: 'rgba(0, 0, 0, 0.7)'
}

// request 拦截器
axios.interceptors.request.use(config => {
    // 开启加载等待
    Loading = sVue.$loading(options);
    // 获取并验证token, 最好将获取token封装成方法, 也可以单写, 以下一行或选其一即可
    const token = getToken() || window.sessionStorage.token;
    // const token = window.sessionStorage.token // 手动获取, 不建议
    // 设置请求头
    if (token !== null && token !== undefined) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers['x-auth-token'] = token
    }
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    config.headers['Accept'] = 'application/json,text/javascript,*/*;q=0.01'
    return config;
}, err => {
    return Promise.reject(err);
});

// response
axios.interceptors.response.use(response => {
    // 请求到数据, 关闭加载等待
    Loading.close();
    // 对数据做统一的处理 ---> 状态码统一管理, 状态码需要与后台协商
    stateManagement_response(response)
}, error => {
    if (error.response) {
        stateManagement_error(error)
        return Promise.reject(error.response.data) // 返回接口返回的错误信息
    }
})

export default axios
