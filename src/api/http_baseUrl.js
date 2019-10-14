
/**
 * author: keywin
 * created: 2019-10-14
 * description: 自动切换环境
 */
var development_IP = {};
if (process.env.NODE_ENV == 'development'){
    development_IP = {
        //  baseURL: "http://11.12.15.131:8080/wahaha"
         baseURL: 'https://py.datahoop.cn/'
        //  baseURL: "http://87.95.26.358:8010", //曲工线上
    };
}
if (process.env.NODE_ENV == 'production'){
    // development_IP.baseURL = "http://192.16.23.817"; //旧预览服
    development_IP.baseURL = "http://baidu.wahaha.com";//测试服
}
export { development_IP }