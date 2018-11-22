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
    // {
    //     text: '面试',
    //     link: '/interview-question/'
    // },
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
                'es5-expression',
                'es5-type',
                'es5-prototype',
                'es5-this',
                'es5-closure',
                'es5-apply-call-bind',
                'es5-dom',
                'es5-event',
                'es5-execution-context',
                'es5-extends',
                'es5-fn',
                'es5-news',
                'es5-object',
                'es5-scope'
            ]
        },
        {
            title: 'javascript进阶',
            collapsable: false,
            children: [
                'js-curry',
                'js-debounce',
                'js-run',
                'js-memory',
                'js-async',
                'js-ast',
                'js-bit',
                'js-eventloop',
                'js-precision',
                'js-module',
                'js-v8',
                'js-principle'
            ]
        },
        {
            title: 'es6',
            collapsable: false,
            children: [
                'es6-array',
                'es6-fn',
                'es6-class-1',
                'es6-class-2',
                'es6-async',
                'es6-generator-1',
                'es6-generator-2',
                'es6-iterator',
                'es6-let-const',
                'es6-module',
                'es6-number',
                'es6-object',
                'es6-promise',
                'es6-proxy-reflect',
                'es6-set-map',
                'es6-string',
                'es6-symbol'
            ]
        },
        // {
        //     title: 'TypeScript',
        //     collapsable: false,
        //     children: [
        //         'ts-types',
        //         'ts-deciarations',
        //         'ts-interfaces',
        //         'ts-classes',
        //         'ts-functions',
        //         'ts-generics',
        //         'ts-enums',
        //         'ts-type-inference',
        //         'ts-type-compatibility',
        //         'ts-advanced-types',
        //         'ts-symbols',
        //         'ts-iterators-and-generators',
        //         'ts-modules',
        //         'ts-namespaces',
        //         'ts-namespaces-and-modules',
        //         'ts-module-resolution',
        //         'ts-declaration-merging',
        //         'ts-decorators',
        //         'ts-mixins',
        //     ]
        // },
        {
            title: 'nodejs',
            collapsable: false,
            children: [
                'node-introdect',
                'node-buffer',
                'node-cheerio',
                'node-cluster',
                'node-egg',
                'node-events',
                'node-express',
                'node-fs',
                'node-http',
                'node-koa',
                'node-net',
                'node-process',
                'node-querystring',
                'node-stream',
                'node-session-cookie',
                'node-url'
            ]
        },
        {
            title: 'vue框架',
            collapsable: false,
            children: [
                'mvvm',
                'jquery-code',
                'undescore',
                'vue-bind',
                'vue-code',
                'vue-diff',
                'vue-router-code',
                'vue-router',
                'vue-vuex',
                'vue-vuex-code'
            ]
        }
        ],
        '/css/': [{
            title: 'css基础',
            collapsable: false,
            children: [
                'center',
                'background',
                'stack',
                'layout',
                'px',
                'flex',
                'bfc',
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
                'canvas-base',
                'canvas-style',
                'canvas-text',
                'canvas-transform',
                'canvas-pic',
                'canvas-animation-1',
                'canvas-animation-2',
                'canvas-compositing',
                'canvas-rect',
                'canvas-image-data'
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
            title: 'WEB集成化',
            collapsable: false,
            children: [
                'ci-cd',
                'npm',
                'webhook',
            ]
        },
        {
            title: 'webpack打包',
            collapsable: false,
            children: [
                'webpack-basic',
                'webpack-babel',
                'webpack-plugin',
                'webpack-loador',
                'webpack-coder',
            ]
        },
        {
            title: 'gulp打包',
            collapsable: false,
            children: [
                'gulp-basic',
                'gulp-plugin'
            ]
        },
        {
            title: 'rollup打包',
            collapsable: false,
            children: [
                'rollup-basic'
            ]
        },
        {
            title: '自定义脚手架',
            collapsable: false,
            children: [
                'cli'
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
                'hash',
                'trees',
                'trie',
                'queue'
            ]
        },
        {
            title: '算法',
            collapsable: false,
            children: [
                'base-sort',
                'base-select',
                'high-algorithm',
                'high-sort'
            ]
        },
        {
            title: '设计模式',
            collapsable: false,
            children: [
                'base-design-pattern',
                'design-pattern-create',
                'design-pattern-structure',
                'design-pattern-skill',
                'design-pattern-architecture',
                'design-pattern-dependency',
                'design-pattern-behavior'
            ]
        },
        {
            title: '函数数据编程',
            collapsable: false,
            children: [
                'base-functional'
            ]
        },
        {
            title: '计算机组成原理',
            collapsable: false,
            children: [
                'base-computer'
            ]
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
            title: '操作系统',
            collapsable: false,
            children: [
                'os',
                'linux'
            ]
        }
        ],
        // '/interview-question/': [{
        //     title: 'js',
        //     collapsable: false,
        //     children: [
        //         'js-eventloop'
        //     ]
        // },
        // {
        //     title: 'css',
        //     collapsable: false,
        //     children: [
        //         'css-center'
        //     ]
        // },
        // {
        //     title: '框架',
        //     collapsable: false,
        //     children: []
        // }
        // ],
        '/materials/': [
            //     {
            //     title: 'js基础',
            //     collapsable: false,
            //     children: [
            //         ''
            //     ]
            // },
            // {
            //     title: 'es6',
            //     collapsable: false,
            //     children: [
            //         ''
            //     ]
            // },
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