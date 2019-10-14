/**
 * author: keywin
 * created: 2019-10-14
 * description: axios二次封装 
 */

import axios from 'axios'
import { development_IP } from './http_baseUrl.js'

// 封装方法一
// export default {
//     http_axios(url, method, data = {}, type = 0) {
//         let options = {
//             url,
//             baseURL: development_IP.baseURL,
//             method,
//         };
//         if (type) {
//             options.responseType = 'blob' //接收类型设置，否者返回字符型
//         }
//         // post 使用data接收
//         if (method !== 'get' && method != 'delete') {
//             options.data = data;
//         }
//         if (method === 'get' || method == 'delete') {
//             options.params = data;
//         }
//         return axios(options).then(res => {
//             return res
//         }).catch(function (err) {
//             console.log(err)
//         });
//     },

// }

// 封装方法二
const get = (url, params = {}) => {
    url = development_IP.baseURL + url
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}
const post = (url, parmas) => {
    return new Promise((resolve, reject) => {
        axios.post(url, parmas).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}

export {get, post}
