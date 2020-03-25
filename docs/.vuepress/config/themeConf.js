module.exports = {
    navbar: true,
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "更新于",
    search: true,
    searchMaxSuggestions: 10,
    nav: [{
            text: "首页",
            link: "/"
        },
        {
            text: "javascript",
            link: "/js/"
        },
        {
            text: "css",
            link: "/css/"
        },
        {
            text: "HTML5",
            link: "/html5/"
        },
        {
            text: "工具",
            link: "/tool/"
        },
        {
            text: "软件工程",
            link: "/project/"
        },
        {
            text: "计算机基础",
            link: "/cs/"
        },
        {
            text: "面试题",
            link: "/interview/"
        },
        {
            text: "资料收集",
            link: "/materials/"
        },
        {
            text: "关于作者",
            link: "/about/"
        },
        {
            text: "GitHub",
            link: "https://www.github.com/fttony"
        }
    ],
    sidebar: {
        "/js/": [{
                title: "javascript基础",
                collapsable: false,
                children: [
                    "es5-expression",
                    "es5-type",
                    "es5-prototype",
                    "es5-this",
                    "es5-closure",
                    "es5-apply-call-bind",
                    "es5-dom",
                    "es5-event",
                    "es5-execution-context",
                    "es5-extends",
                    "es5-fn",
                    "es5-news",
                    "es5-array",
                    "es5-object",
                    "es5-reg",
                    "es5-scope"
                ]
            },
            {
                title: "javascript进阶",
                collapsable: false,
                children: [
                    "js-clone",
                    "js-curry",
                    "js-debounce",
                    "js-precision",
                    "js-memory",
                    "js-memory-1",
                    "js-async",
                    "js-bit",
                    "js-eventloop",
                    "js-module",
                    "js-run",
                    "js-ast",
                    "js-v8",
                    "js-principle"
                ]
            },
            {
                title: "es6",
                collapsable: false,
                children: [
                    "es6-array",
                    "es6-fn",
                    "es6-class-1",
                    "es6-class-2",
                    "es6-async",
                    "es6-generator-1",
                    "es6-generator-2",
                    "es6-iterator",
                    "es6-let-const",
                    "es6-module",
                    "es6-number",
                    "es6-object",
                    "es6-promise",
                    "es6-proxy-reflect",
                    "es6-set-map",
                    "es6-string",
                    "es6-symbol"
                ]
            },
            {
                title: "TypeScript",
                collapsable: false,
                children: ["ts-introduct"]
            },
            {
                title: "nodejs",
                collapsable: false,
                children: [
                    "node-introdect",
                    "node-eventloop",
                    "node-buffer",
                    "node-cheerio",
                    "node-cluster",
                    "node-egg",
                    "node-events",
                    "node-express",
                    "node-fs",
                    "node-http",
                    "node-rpc",
                    "node-koa",
                    "node-koa-code",
                    "node-net",
                    "node-process",
                    "node-querystring",
                    "node-stream",
                    "node-url"
                ]
            },
            {
                title: "vue框架",
                collapsable: false,
                children: [
                    "mvvm",
                    "jquery-code",
                    "undescore",
                    "vue-jsx",
                    "vue-lifecycle",
                    "vue-dom",
                    "vue-communication",
                    "vue-bind",
                    "vue-nexttick",
                    "vue-watch",
                    "vue-router",
                    "vue-router-code",
                    "vue-vuex",
                    "vue-vuex-code",
                    "vue-code"
                ]
            }
        ],
        "/css/": [{
                title: "css基础",
                collapsable: false,
                children: [
                    "basic",
                    "box-sizing",
                    "filter",
                    "gradients",
                    "select",
                    "inherit",
                    "px",
                    "pic",
                    "center",
                    "vertical-align",
                    "background",
                    "stack",
                    "flex",
                    "grid",
                    "bfc",
                    "column-layout",
                    "responsive",
                    "transform",
                    "font-size",
                    "scss",
                    "pit",
                    "mobile",
                    "fps"
                ]
            },
            {
                title: "css动画",
                collapsable: false,
                children: ["transition", "animation"]
            },
            {
                title: "css模块化",
                collapsable: false,
                children: ["module"]
            }
        ],
        "/html5/": [{
                title: "canvas",
                collapsable: false,
                children: [
                    "canvas-base",
                    "canvas-style",
                    "canvas-text",
                    "canvas-transform",
                    "canvas-pic",
                    "canvas-animation-1",
                    "canvas-animation-2",
                    "canvas-compositing",
                    "canvas-rect",
                    "canvas-image-data"
                ]
            },
            {
                title: "svg",
                collapsable: false,
                children: ["svg"]
            },
            {
                title: "HTML5相关API",
                collapsable: false,
                children: ["webwork", "webserver", "webrtc", "storage", "api"]
            },
            {
                title: "Native学习",
                collapsable: false,
                children: ["hybird", "flutter", "electron", "mini-program"]
            }
        ],
        "/project/": [{
                title: "网站架构设计",
                collapsable: false,
                children: [
                    "component-design",
                    "architecture-1",
                    "architecture-2",
                    "architecture-3"
                ]
            },
            {
                title: "工程测试",
                collapsable: false,
                children: ["test-1", "test-2", "test-3", "test-4"]
            },
            {
                title: "规范化",
                collapsable: false,
                children: ["standard", "restful", "codereview"]
            },
            {
                title: "浏览器",
                collapsable: false,
                children: ["browser-working", "browser-url", "cross-domain"]
            },
            {
                title: "新技术",
                collapsable: false,
                children: [
                    "live",
                    "pwa-0",
                    "webAssembly",
                    "dsl",
                    "ssr",
                    "skeleton",
                    "serverless"
                ]
            },
            {
                title: "性能",
                collapsable: false,
                children: [
                    "performance-1",
                    "performance-2",
                    "performance-3",
                    "performance-4",
                    "performance-5",
                    "performance-tool",
                    "performance-pic"
                ]
            },
            {
                title: "Web安全",
                collapsable: false,
                children: [
                    "login-1",
                    "login-2",
                    "login-3",
                    "token",
                    "osi-hijack",
                    "xss",
                    "csrf",
                    "sql"
                ]
            },
            {
                title: "web监控",
                collapsable: false,
                children: [
                    "monitoring-performance",
                    "monitoring-api",
                    "monitoring-behavior",
                    "monitoring-error",
                    "report"
                ]
            },
            {
                title: "WEB调试",
                collapsable: false,
                children: ["mobile-debug", "seo"]
            }
        ],
        "/tool/": [{
                title: "git版本工具",
                collapsable: false,
                children: ["git"]
            },
            {
                title: "WEB集成化",
                collapsable: false,
                children: ["ci-cd", "npm-2", "npm-1"]
            },
            {
                title: "webpack打包",
                collapsable: false,
                children: [
                    "webpack-basic",
                    "webpack-babel",
                    "webpack-plugin",
                    "webpack-loader",
                    "webpack-optimize",
                    "webpack-principle",
                    "webpack-hmr",
                    "webpack-coder"
                ]
            },
            {
                title: "其它打包工具",
                collapsable: false,
                children: ["gulp-basic", "rollup-basic", "gulp-plugin", "pm2"]
            },
            {
                title: "自定义脚手架",
                collapsable: false,
                children: ["cli"]
            },
            {
                title: "容器工具",
                collapsable: false,
                children: ["docker", "k8s"]
            },
            {
                title: "ngnix配置",
                collapsable: false,
                children: ["nginx"]
            }
        ],
        "/cs/": [{
                title: "数据结构",
                collapsable: false,
                children: [
                    "base-o",
                    "array",
                    "queue",
                    "stack",
                    "list",
                    "set",
                    "dictionary",
                    "hashtable",
                    "hash",
                    "trees-1",
                    "trees-2",
                    "trees-b",
                    "heap",
                    "trie",
                    "graphs"
                ]
            },
            {
                title: "算法",
                collapsable: false,
                children: [
                    "base-sort",
                    "high-sort",
                    "base-select",
                    "common-algorithm",
                    "recursion",
                    "greed",
                    "divide",
                    "backtracking",
                    "dp-1",
                    "dp-2",
                    "kmp"
                ]
            },
            {
                title: "设计模式",
                collapsable: false,
                children: [
                    "base-design-pattern",
                    "design-pattern-create",
                    "design-pattern-structure",
                    "design-pattern-skill",
                    "design-pattern-architecture",
                    "design-pattern-behavior",
                    "design-pattern-dependency"
                ]
            },
            {
                title: "函数式编程",
                collapsable: false,
                children: ["base-functional", "unicode"]
            },
            {
                title: "网络",
                collapsable: false,
                children: [
                    "net",
                    "http",
                    "https",
                    "http2",
                    "http3",
                    "http-cache",
                    "tcp",
                    "webstock"
                ]
            },
            {
                title: "操作系统",
                collapsable: false,
                children: ["os", "linux", "linux-1", "linux-2", "shell"]
            }
        ],
        "/materials/": [],
        "/interview/": [{
                title: "js相关",
                collapsable: false,
                children: [
                    "js-interview1",
                    "js-interview2",
                    "js-interview3",
                    "js-interview4",
                    "es6-interview"
                ]
            },
            {
                title: "css相关",
                collapsable: false,
                children: ["css-interview1", "css-interview2", "css-interview3"]
            },
            {
                title: "HTML相关",
                collapsable: false,
                children: ["html5-interview"]
            },
            {
                title: "框架相关",
                collapsable: false,
                children: ["vue-interview"]
            },
            {
                title: "node相关",
                collapsable: false,
                children: ["node-interview"]
            },
            {
                title: "计算机基础",
                collapsable: false,
                children: ["net-interview", "offer", "leetcode"]
            },
            {
                title: "工程化",
                collapsable: false,
                children: [
                    "browser-interview",
                    "performance-interview",
                    "webpack-interview",
                    "project-interview"
                ]
            },
            {
                title: "面试技巧",
                collapsable: false,
                children: ["interview-skill1", "interview-skill2", "interview-skill3"]
            },
            {
                title: "其它",
                collapsable: false,
                children: []
            }
        ]
    }
};