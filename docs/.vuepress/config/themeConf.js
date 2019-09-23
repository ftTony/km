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
        link: '/js/'
    },
    {
        text: 'css',
        link: '/css/'
    },
    {
        text: 'HTML5',
        link: '/html5/'
    },
    {
        text: '工具',
        link: '/tool/'
    },
    {
        text: '软件工程',
        link: '/project/',
    },
    {
        text: '计算机基础',
        link: '/cs/'
    },
    {
        text: '面试',
        link: '/interview-question/'
    },
    {
        text: '资料收集',
        link: '/materials/'
    },
    {
        text: '关于作者',
        link: '/about/'
    }
    ],
    sidebar: {
        '/js/': [
            {
                title: 'javascript基础',
                collapsable: false,
                children: [
                    'es5-type',
                    'es5-prototype',
                    'es5-this',
                ]
            },
            {
                title: 'es6',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'nodejs',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'vue框架',
                collapsable: false,
                children: [
                ]
            }
        ],
        '/css/': [
            {
                title: 'css基础',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'css动画',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'css模块化',
                collapsable: false,
                children: [
                ]
            }
        ],
        '/html5/': [
            {
                title: 'canvas',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'svg',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'webwork',
                collapsable: false,
                children: [
                ]
            }
        ],
        '/project/': [
            {
                title: '工程测试',
                collapsable: false,
                children: [
                ]
            },
            {
                title: '规则化',
                collapsable: false,
                children: [
                ]
            },
            {
                title: '浏览器',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'CI/CD',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'Web安全',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'CI/CD',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'WEB Hook',
                collapsable: false,
                children: [
                ]
            }
        ],
        '/tool/': [
            {
                title: 'git版本工具',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'webpack打包',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'docker配置',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'ngnix配置',
                collapsable: false,
                children: [
                ]
            }
        ],
        '/cs/': [
            {
                title: '数据结构',
                collapsable: false,
                children: [
                ]
            },
            {
                title: '算法',
                collapsable: false,
                children: [
                ]
            },
            {
                title: '设计模式',
                collapsable: false,
                children: [
                ]
            },
            {
                title: '网络',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'linux',
                collapsable: false,
                children: [
                ]
            }
        ],
        '/interview-question/': [
            {
                title: 'js',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'css',
                collapsable: false,
                children: [
                ]
            },
            {
                title: '算法',
                collapsable: false,
                children: [
                ]
            },
            {
                title: '框架',
                collapsable: false,
                children: [
                ]
            }
        ],
        '/materials/': [
            {
                title: 'js基础',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'es6',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'nodejs',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'vue框架',
                collapsable: false,
                children: [
                ]
            },
            {
                title: '工具',
                collapsable: false,
                children: [
                ]
            },
            {
                title: '面试题',
                collapsable: false,
                children: [
                ]
            }
        ]
    }
};