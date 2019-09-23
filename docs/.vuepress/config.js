const {
    mdConf,
    themeConf,
    localesConf,
} = require('./config/');

module.exports = {
    locales: localesConf,
    markdown: mdConf,
    themeConfig: themeConf,
    head: [
        ['link', { rel: 'icon', href: '/hero.jpeg' }]
    ],
    plugins: [
        '@vuepress/back-to-top',
        ['@vuepress/medium-zoom', true],
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