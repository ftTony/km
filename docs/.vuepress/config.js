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
        ],
        ['vuepress-plugin-comment', 
            {
                choosen: 'gitalk',
                options: {
                    clientID: '83ac3023b3f9cf5b5d0f',
                    clientSecret: '05f091f622fe9071f9cf7f2cca27b5573e61b82b',
                    repo: 'km',
                    owner: 'fttony',
                    admin: ['fttony'],
                    id: '<%- frontmatter.commentid || frontmatter.permalink %>',
                    distractionFreeMode: false,
                    labels: ['Gitalk', 'Comment'],
                    title: '「评论」<%- frontmatter.title %>',
                    body: '<%- frontmatter.title %>：<%- window.location.origin %><%- frontmatter.to.path || window.location.pathname %>'
                }
            }
        ]
    ]
}