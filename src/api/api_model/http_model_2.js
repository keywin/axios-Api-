/**
 * author: keywin
 * created: 2019-10-14
 * description: 模块二 Api管理
 */

//  按照http_axios方法一, 不做详细描述
// import  http  from '@/api/http_axios.js'
// export const API_MODEL1_article = parmas => http.http_axios()...

// http_axios方法二
import { get, post } from "../http_axios.js"

// 示例
export const API_MODEL2_article = parmas => get('/list/article', parmas)

export const API_MODEL2_listdata = parmas => post('/list/listdata', parmas)

export const API_MODEL2_listdetail = parmas => post('/list/listdetail', parmas)
