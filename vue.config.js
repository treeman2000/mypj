
        // target: "https://api.bi.tuputech.com/v1/auth/token/a1nv2hmjvku875da5vu5t75bb53q8erkhr1j95ic",

module.exports = {
    devServer: {
        proxy: {
            //名字可以自定义，这里我用的是api
            '/api': {
                target: 'http://m.maoyan.com',//设置你调用的接口域名和端口号 别忘了加http
                changeOrigin: true,//这里设置是否跨域
                pathRewrite: {
                '^/api': ''
                }
            }
        }
    }
}