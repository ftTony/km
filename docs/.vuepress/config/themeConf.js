module.exports = {
    navbar: true,
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "更新于",
    search: true,
    searchMaxSuggestions: 10,
    nav: [{
            text: '首页',
            link: '/'
        },
        {
            text: 'javascript',
            items: [{
                    text: 'javascript基础',
                    link: '/js/es5/'
                },
                {
                    text: 'es6',
                    link: '/js/es6/'
                },
                {
                    text: 'nodejs',
                    link: '/js/nodejs/'
                }
            ]
        },
        {
            text: 'css',
            items: [{
                    text: 'css基础',
                    link: '/css/basic/'
                },
                {
                    text: 'css动画',
                    link: '/css/animation/'
                },
                {
                    text: 'css模块化',
                    link: '/css/module/'
                }
            ]
        },
        {
            text: 'HTML5',
            items: [{
                    text: 'canvas ',
                    link: '/html5/canvas'
                },
                {
                    text: 'svg',
                    link: '/html5/svg'
                }
            ]
        },
        {
            text: '工具',
            items: [{
                    text: 'git管理工具 ',
                    link: '/tool/git'
                },
                {
                    text: 'webpack打包工具',
                    link: '/tool/webpack'
                }
            ]
        },
        {
            text: '软件工程',
            items: [{
                    text: '测试',
                    link: '/project/test'
                },
                {
                    text: '规则化',
                    link: '/project/regularization'
                }
            ]
        },
        {
            text: '计算机基础',
            items: [{
                    text: '设计模式',
                    link: '/cs/patterns'
                },
                {
                    text: '计算机网络',
                    link: '/cs/net'
                }
            ]
        },
        {
            text: '算法',
            items: [{
                    text: '数据结构',
                    link: '/algorithm/structure'
                },
                {
                    text: '算法',
                    link: '/algorithm/algorithm'
                }
            ]
        },
    ],
    sidebar: {
        '/js/es5/': [
            '',
            '1',
            '2'
        ]
    }
};