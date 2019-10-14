/**
 * author: keywin
 * created: 2019-10-14
 * description: 状态管理 
 */
const stateManagement_response = (response) => {
    switch (response.data.code) {
        // 数据没问题, 直接返回
        case 2000:
            return response.data
        // 数据有问题, 统一处理, 不需要每掉一次接口都要判断一大堆
        case 1001:
            Notification.error({
                message: "登录超时,请重新登录!",
                position: 'bottom-left',
                onClose: () => {
                    // 清除用户信息, 这里使用方法, 需要你自己定义, 也可单写
                    // removeUserInfo()
                    router.push({
                        name: 'login'
                    })
                }
            })
            break;
        case 1011:
            Notification.error({
                message: "授权无效,请重新登录!",
                position: 'bottom-left',
                onClose: () => {
                    // 清除用户信息
                    // removeUserInfo()
                    router.push({
                        name: 'login'
                    })
                }
            })
            break;
        default:
            Notification.error({
                duration: 2000,
                position: 'bottom-left',
                message: "服务器错误!"
            })
            break;
    }
}

const stateManagement_error = (error) => {
    switch (error.response.status) {
        case 403:
            Notification.error({
                duration: 2000,
                position: 'bottom-left',
                message: "拒绝访问!"
            })
            break;
        case 404:
            Notification.error({
                duration: 2000,
                position: 'bottom-left',
                message: "请求错误,未找到该资源!"
            })
            break;
        case 408:
            Notification.error({
                duration: 2000,
                position: 'bottom-left',
                message: "请求超时!"
            })
            break;
        default:
            Notification.error({
                duration: 2000,
                position: 'bottom-left',
                message: "服务器错误!"
            })
            break;
    }
}


export {stateManagement_response, stateManagement_error}