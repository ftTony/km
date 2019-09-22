const {
    mdConf,
    themeConf,
    localesConf,
} = require('./config/');

module.exports = {
    locales: localesConf,
    markdown: mdConf,
    themeConfig: themeConf,
    plugins: [
        '@vuepress/back-to-top',
        // [
        //     '@vuepress/google-analytics', {
        //         'ga': ''
        //     }
        // ],
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: {
                    message: "发现页面有新内容",
                    buttonText: "刷新"
                }
            }
        ]
    ]
}