/**
 * author: keywin
 * created: 2019-10-14
 * description: 模块一 Api管理
 */

//  按照http_axios方法一, 不做详细描述
// import  http  from '@/api/http_axios.js'
// export const API_MODEL1_article = parmas => http.http_axios()...

// http_axios方法二
import { get, post } from "../http_axios.js"

// 示例
export const API_MODEL1_article = parmas => get('/news/infobanner/', parmas)

export const API_MODEL1_listdata = parmas => post('/users/listdata', parmas)

export const API_MODEL1_listdetail = parmas => post('/users/listdetail', parmas)

export const API_MODEL1_modest = parmas => post('/users/modest', parmas).then((response) => {
    if(response.code == 2000) {
        return response.result
    }
})
