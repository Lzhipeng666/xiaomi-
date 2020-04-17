let baseURL;
switch (process.env.NODE_ENV) {
    case 'dev':
        baseURL = 'http://dev-mall-pre.springboot.cn/api'
        break;
    case 'test':
        baseURL = 'http://dev-mall-pre.springboot.cn/api'
        break
    case 'prod':
        baseURL = 'http://dev-mall-pre.springboot.cn/api'
        break
    default:
        baseURL = 'http://dev-mall-pre.springboot.cn/api'
        break;
}
export default {
    baseURL
}
