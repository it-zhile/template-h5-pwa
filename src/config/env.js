/**
 * Funciton: 配置编译环境和线上环境之间的切换文件
 * Desc:
 */
// baseUrl: 域名地址
let baseUrl = null
// websocket 连接域名
let socketUrl = null

// 环境
if (process.env.NODE_ENV == 'development') {                // 开发环境
    baseUrl= 'http://192.168.1.49:8089'                     // 后端lucas
} else if (process.env.NODE_ENV == "production") {          // 正式环境(待配置)
    baseUrl= '/admin';                                     // 正式环境接口域名
}

export { baseUrl, socketUrl }