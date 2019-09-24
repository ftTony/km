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
        '/js/': [{
            title: 'javascript基础',
            collapsable: false,
            children: [
                'es5-type',
                'es5-prototype',
                'es5-this',
                'es5-closure',
                'es5-apply-call-bind',
                'es5-curry',
                'es5-dom',
                'es5-event',
                'es5-execution-context',
                'es5-extends',
                'es5-fn',
                'es5-news',
                'es5-object',
                'es5-run',
                'es5-eventloop',
                'es5-scope'
            ]
        },
        {
            title: 'es6',
            collapsable: false,
            children: [
                'es6-array',
                'es6-fn',
                'es6-class',
                'es6-async',
                'es6-generator',
                'es6-iterator',
                'es6-let-const',
                'es6-module',
                'es6-number',
                'es6-object',
                'es6-promise',
                'es6-proxy-reflect',
                'es6-string',
                'es6-symbol'
            ]
        },
        {
            title: 'nodejs',
            collapsable: false,
            children: [
                'node-buffer',
                'node-cheerio',
                'node-cluster',
                'node-egg',
                'node-events',
                'node-express',
                'node-fs',
                'node-http',
                'node-introdect',
                'node-koa',
                'node-net',
                'node-process',
                'node-querystring',
                'node-stream',
                'node-url'
            ]
        },
        {
            title: 'vue框架',
            collapsable: false,
            children: [
                'mvvm'
            ]
        }
        ],
        '/css/': [{
            title: 'css基础',
            collapsable: false,
            children: [
                'background',
                'stack',
                'layout',
                'px',
                'select'
            ]
        },
        {
            title: 'css动画',
            collapsable: false,
            children: [
                'animation'
            ]
        },
        {
            title: 'css模块化',
            collapsable: false,
            children: [
                'module'
            ]
        }
        ],
        '/html5/': [{
            title: 'canvas',
            collapsable: false,
            children: [
                'canvas'
            ]
        },
        {
            title: 'svg',
            collapsable: false,
            children: [
                'svg'
            ]
        },
        {
            title: 'web work',
            collapsable: false,
            children: [
                'webwork'
            ]
        },
        {
            title: 'web service',
            collapsable: false,
            children: [
                'webserver'
            ]
        }
        ],
        '/project/': [{
            title: '工程测试',
            collapsable: false,
            children: [
                'test'
            ]
        },
        {
            title: '规范化',
            collapsable: false,
            children: [
                'standard'
            ]
        },
        {
            title: '浏览器',
            collapsable: false,
            children: [
                'working',
                'cross-domain'
            ]
        },
        {
            title: '性能',
            collapsable: false,
            children: [
                'performance-1',
                'performance-2',
            ]
        },
        {
            title: 'Web安全',
            collapsable: false,
            children: [
                'xss',
                'csrf',
                'sql'
            ]
        },
        {
            title: 'web监控',
            collapsable: false,
            children: [
                'monitoring-performance',
                'monitoring-api',
                'monitoring-behavior',
                'monitoring-error',
                'report',
            ]
        },
        {
            title: 'WEB集成化',
            collapsable: false,
            children: [
                'ci-cd',
                'webhook',
            ]
        },
        {
            title: 'WEB调试',
            collapsable: false,
            children: [
                'mobile-debug'
            ]
        }
        ],
        '/tool/': [{
            title: 'git版本工具',
            collapsable: false,
            children: [
                'git'
            ]
        },
        {
            title: 'webpack打包',
            collapsable: false,
            children: [
                'webpack'
            ]
        },
        {
            title: 'docker配置',
            collapsable: false,
            children: [
                'docker'
            ]
        },
        {
            title: 'ngnix配置',
            collapsable: false,
            children: [
                'nginx'
            ]
        }
        ],
        '/cs/': [{
            title: '数据结构',
            collapsable: false,
            children: [
                'array',
                'list',
                'stack',
                'queue'
            ]
        },
        {
            title: '算法',
            collapsable: false,
            children: [
                ''
            ]
        },
        {
            title: '设计模式',
            collapsable: false,
            children: []
        },
        {
            title: '网络',
            collapsable: false,
            children: [
                'http',
                'https',
                'http2',
                'tcp',
                'webstock'
            ]
        },
        {
            title: 'linux',
            collapsable: false,
            children: [
                'linux'
            ]
        }
        ],
        '/interview-question/': [{
            title: 'js',
            collapsable: false,
            children: [
                'js-eventloop'
            ]
        },
        {
            title: 'css',
            collapsable: false,
            children: [
                'css-center'
            ]
        },
        {
            title: '框架',
            collapsable: false,
            children: []
        }
        ],
        '/materials/': [{
            title: 'js基础',
            collapsable: false,
            children: [
                ''
            ]
        },
        {
            title: 'es6',
            collapsable: false,
            children: [
                ''
            ]
        },
        {
            title: 'nodejs',
            collapsable: false,
            children: []
        },
        {
            title: 'vue框架',
            collapsable: false,
            children: []
        },
        {
            title: '工具',
            collapsable: false,
            children: []
        },
        {
            title: '面试题',
            collapsable: false,
            children: []
        }
        ]
    }
};