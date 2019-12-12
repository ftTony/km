(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{260:function(n,a,s){"use strict";s.r(a);var t=s(4),e=Object(t.a)({},(function(){var n=this,a=n.$createElement,s=n._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"性能监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能监控","aria-hidden":"true"}},[n._v("#")]),n._v(" 性能监控")]),n._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[n._v("#")]),n._v(" 前言")]),n._v(" "),s("p",[n._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),n._v(" "),s("h2",{attrs:{id:"内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[n._v("#")]),n._v(" 内容")]),n._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E6%80%A7%E8%83%BD%E6%A6%82%E5%BF%B5"}},[n._v("性能概念")])]),n._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%8C%E3%80%81performance%E6%95%B0%E6%8D%AE"}},[n._v("performance 数据")])]),n._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B8%89%E3%80%81performance-timing%E4%BF%A1%E6%81%AF%E8%AE%A1%E7%AE%97%E5%87%BA%E7%BD%91%E9%A1%B5%E6%80%A7%E8%83%BD%E6%95%B0%E6%8D%AE"}},[n._v("performance.timing 信息计算出网页性能数据")])])]),n._v(" "),s("h3",{attrs:{id:"一、性能概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、性能概念","aria-hidden":"true"}},[n._v("#")]),n._v(" 一、性能概念")]),n._v(" "),s("ul",[s("li",[s("strong",[n._v("白屏时间：")]),n._v(" 用户从打开页面开始到页面开始有东西呈现为止，这过程占用时间就是白屏时间")]),n._v(" "),s("li",[s("strong",[n._v("首屏时间：")]),n._v(" 用户浏览器首屏内所有内容都呈现出来所花费的时间")]),n._v(" "),s("li",[s("strong",[n._v("用户可操作时间：")]),n._v(" 用户可以进行正常的点击、输入等操作")]),n._v(" "),s("li",[s("strong",[n._v("页面总下载时间：")]),n._v(" 页面所有资源都加载完成并呈现出来所花的时间，即页面 onload 的时间")]),n._v(" "),s("li",[s("strong",[n._v("自定义的时间点：")]),n._v(" 对于开发人员来说，完全可以自定义一些时间点，例如：某个组件"),s("code",[n._v("init")]),n._v("完成的时间、某个重要模块加载的时间等等。")])]),n._v(" "),s("h3",{attrs:{id:"二、performance-数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、performance-数据","aria-hidden":"true"}},[n._v("#")]),n._v(" 二、performance 数据")]),n._v(" "),s("p",[s("img",{attrs:{src:"performance07.png",alt:"images"}})]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("var performance = {\n    // memory 是非标准属性，只在 Chrome 有\n    // 财富问题：我有多少内存\n    memory: {\n        usedJSHeapSize:  16100000, // JS 对象（包括V8引擎内部对象）占用的内存，一定小于 totalJSHeapSize\n        totalJSHeapSize: 35100000, // 可使用的内存\n        jsHeapSizeLimit: 793000000 // 内存大小限制\n    },\n\n    //  哲学问题：我从哪里来？\n    navigation: {\n        redirectCount: 0, // 如果有重定向的话，页面通过几次重定向跳转而来\n        type: 0           // 0   即 TYPE_NAVIGATENEXT 正常进入的页面（非刷新、非重定向等）\n                          // 1   即 TYPE_RELOAD       通过 window.location.reload() 刷新的页面\n                          // 2   即 TYPE_BACK_FORWARD 通过浏览器的前进后退按钮进入的页面（历史记录）\n                          // 255 即 TYPE_UNDEFINED    非以上方式进入的页面\n    },\n\n    timing: {\n        // 在同一个浏览器上下文中，前一个网页（与当前页面不一定同域）unload 的时间戳，如果无前一个网页 unload ，则与 fetchStart 值相等\n        navigationStart: 1441112691935,\n\n        // 前一个网页（与当前页面同域）unload 的时间戳，如果无前一个网页 unload 或者前一个网页与当前页面不同域，则值为 0\n        unloadEventStart: 0,\n\n        // 和 unloadEventStart 相对应，返回前一个网页 unload 事件绑定的回调函数执行完毕的时间戳\n        unloadEventEnd: 0,\n\n        // 第一个 HTTP 重定向发生时的时间。有跳转且是同域名内的重定向才算，否则值为 0\n        redirectStart: 0,\n\n        // 最后一个 HTTP 重定向完成时的时间。有跳转且是同域名内部的重定向才算，否则值为 0\n        redirectEnd: 0,\n\n        // 浏览器准备好使用 HTTP 请求抓取文档的时间，这发生在检查本地缓存之前\n        fetchStart: 1441112692155,\n\n        // DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等\n        domainLookupStart: 1441112692155,\n\n        // DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等\n        domainLookupEnd: 1441112692155,\n\n        // HTTP（TCP） 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等\n        // 注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间\n        connectStart: 1441112692155,\n\n        // HTTP（TCP） 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等\n        // 注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间\n        // 注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过\n        connectEnd: 1441112692155,\n\n        // HTTPS 连接开始的时间，如果不是安全连接，则值为 0\n        secureConnectionStart: 0,\n\n        // HTTP 请求读取真实文档开始的时间（完成建立连接），包括从本地读取缓存\n        // 连接错误重连时，这里显示的也是新建立连接的时间\n        requestStart: 1441112692158,\n\n        // HTTP 开始接收响应的时间（获取到第一个字节），包括从本地读取缓存\n        responseStart: 1441112692686,\n\n        // HTTP 响应全部接收完成的时间（获取到最后一个字节），包括从本地读取缓存\n        responseEnd: 1441112692687,\n\n        // 开始解析渲染 DOM 树的时间，此时 Document.readyState 变为 loading，并将抛出 readystatechange 相关事件\n        domLoading: 1441112692690,\n\n        // 完成解析 DOM 树的时间，Document.readyState 变为 interactive，并将抛出 readystatechange 相关事件\n        // 注意只是 DOM 树解析完成，这时候并没有开始加载网页内的资源\n        domInteractive: 1441112693093,\n\n        // DOM 解析完成后，网页内资源加载开始的时间\n        // 在 DOMContentLoaded 事件抛出前发生\n        domContentLoadedEventStart: 1441112693093,\n\n        // DOM 解析完成后，网页内资源加载完成的时间（如 JS 脚本加载执行完毕）\n        domContentLoadedEventEnd: 1441112693101,\n\n        // DOM 树解析完成，且资源也准备就绪的时间，Document.readyState 变为 complete，并将抛出 readystatechange 相关事件\n        domComplete: 1441112693214,\n\n        // load 事件发送给文档，也即 load 回调函数开始执行的时间\n        // 注意如果没有绑定 load 事件，值为 0\n        loadEventStart: 1441112693214,\n\n        // load 事件的回调函数执行完毕的时间\n        loadEventEnd: 1441112693215\n\n        // 字母顺序\n        // connectEnd: 1441112692155,\n        // connectStart: 1441112692155,\n        // domComplete: 1441112693214,\n        // domContentLoadedEventEnd: 1441112693101,\n        // domContentLoadedEventStart: 1441112693093,\n        // domInteractive: 1441112693093,\n        // domLoading: 1441112692690,\n        // domainLookupEnd: 1441112692155,\n        // domainLookupStart: 1441112692155,\n        // fetchStart: 1441112692155,\n        // loadEventEnd: 1441112693215,\n        // loadEventStart: 1441112693214,\n        // navigationStart: 1441112691935,\n        // redirectEnd: 0,\n        // redirectStart: 0,\n        // requestStart: 1441112692158,\n        // responseEnd: 1441112692687,\n        // responseStart: 1441112692686,\n        // secureConnectionStart: 0,\n        // unloadEventEnd: 0,\n        // unloadEventStart: 0\n    }\n};\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br"),s("span",{staticClass:"line-number"},[n._v("56")]),s("br"),s("span",{staticClass:"line-number"},[n._v("57")]),s("br"),s("span",{staticClass:"line-number"},[n._v("58")]),s("br"),s("span",{staticClass:"line-number"},[n._v("59")]),s("br"),s("span",{staticClass:"line-number"},[n._v("60")]),s("br"),s("span",{staticClass:"line-number"},[n._v("61")]),s("br"),s("span",{staticClass:"line-number"},[n._v("62")]),s("br"),s("span",{staticClass:"line-number"},[n._v("63")]),s("br"),s("span",{staticClass:"line-number"},[n._v("64")]),s("br"),s("span",{staticClass:"line-number"},[n._v("65")]),s("br"),s("span",{staticClass:"line-number"},[n._v("66")]),s("br"),s("span",{staticClass:"line-number"},[n._v("67")]),s("br"),s("span",{staticClass:"line-number"},[n._v("68")]),s("br"),s("span",{staticClass:"line-number"},[n._v("69")]),s("br"),s("span",{staticClass:"line-number"},[n._v("70")]),s("br"),s("span",{staticClass:"line-number"},[n._v("71")]),s("br"),s("span",{staticClass:"line-number"},[n._v("72")]),s("br"),s("span",{staticClass:"line-number"},[n._v("73")]),s("br"),s("span",{staticClass:"line-number"},[n._v("74")]),s("br"),s("span",{staticClass:"line-number"},[n._v("75")]),s("br"),s("span",{staticClass:"line-number"},[n._v("76")]),s("br"),s("span",{staticClass:"line-number"},[n._v("77")]),s("br"),s("span",{staticClass:"line-number"},[n._v("78")]),s("br"),s("span",{staticClass:"line-number"},[n._v("79")]),s("br"),s("span",{staticClass:"line-number"},[n._v("80")]),s("br"),s("span",{staticClass:"line-number"},[n._v("81")]),s("br"),s("span",{staticClass:"line-number"},[n._v("82")]),s("br"),s("span",{staticClass:"line-number"},[n._v("83")]),s("br"),s("span",{staticClass:"line-number"},[n._v("84")]),s("br"),s("span",{staticClass:"line-number"},[n._v("85")]),s("br"),s("span",{staticClass:"line-number"},[n._v("86")]),s("br"),s("span",{staticClass:"line-number"},[n._v("87")]),s("br"),s("span",{staticClass:"line-number"},[n._v("88")]),s("br"),s("span",{staticClass:"line-number"},[n._v("89")]),s("br"),s("span",{staticClass:"line-number"},[n._v("90")]),s("br"),s("span",{staticClass:"line-number"},[n._v("91")]),s("br"),s("span",{staticClass:"line-number"},[n._v("92")]),s("br"),s("span",{staticClass:"line-number"},[n._v("93")]),s("br"),s("span",{staticClass:"line-number"},[n._v("94")]),s("br"),s("span",{staticClass:"line-number"},[n._v("95")]),s("br"),s("span",{staticClass:"line-number"},[n._v("96")]),s("br"),s("span",{staticClass:"line-number"},[n._v("97")]),s("br"),s("span",{staticClass:"line-number"},[n._v("98")]),s("br"),s("span",{staticClass:"line-number"},[n._v("99")]),s("br"),s("span",{staticClass:"line-number"},[n._v("100")]),s("br"),s("span",{staticClass:"line-number"},[n._v("101")]),s("br"),s("span",{staticClass:"line-number"},[n._v("102")]),s("br"),s("span",{staticClass:"line-number"},[n._v("103")]),s("br"),s("span",{staticClass:"line-number"},[n._v("104")]),s("br"),s("span",{staticClass:"line-number"},[n._v("105")]),s("br"),s("span",{staticClass:"line-number"},[n._v("106")]),s("br"),s("span",{staticClass:"line-number"},[n._v("107")]),s("br"),s("span",{staticClass:"line-number"},[n._v("108")]),s("br"),s("span",{staticClass:"line-number"},[n._v("109")]),s("br"),s("span",{staticClass:"line-number"},[n._v("110")]),s("br"),s("span",{staticClass:"line-number"},[n._v("111")]),s("br"),s("span",{staticClass:"line-number"},[n._v("112")]),s("br"),s("span",{staticClass:"line-number"},[n._v("113")]),s("br")])]),s("h3",{attrs:{id:"三、performance-timing-信息计算出网页性能数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、performance-timing-信息计算出网页性能数据","aria-hidden":"true"}},[n._v("#")]),n._v(" 三、performance.timing 信息计算出网页性能数据")]),n._v(" "),s("p",[n._v("可以使用"),s("code",[n._v("Navigation.timing")]),n._v("统计到的时间数据来计算一些页面性能指标，比如 DNS 查询耗时、白屏时间、"),s("code",[n._v("domready")]),n._v("等等。如下：")]),n._v(" "),s("ul",[s("li",[n._v("DNS 查询耗时 = "),s("code",[n._v("domainLookupEnd")]),n._v(" - "),s("code",[n._v("domainLookupStart")])]),n._v(" "),s("li",[n._v("TCP 链接耗时 = "),s("code",[n._v("connectEnd")]),n._v(" - "),s("code",[n._v("connectStart")])]),n._v(" "),s("li",[n._v("request 请求耗时 = "),s("code",[n._v("responseEnd")]),n._v(" - "),s("code",[n._v("responseStart")])]),n._v(" "),s("li",[n._v("解析 dom 树耗时 = "),s("code",[n._v("domComplete")]),n._v(" - "),s("code",[n._v("domInteractive")])]),n._v(" "),s("li",[n._v("白屏时间 = "),s("code",[n._v("domloadng")]),n._v(" - "),s("code",[n._v("fetchStart")])]),n._v(" "),s("li",[n._v("domready 时间 = "),s("code",[n._v("domContentLoadedEventEnd")]),n._v(" - "),s("code",[n._v("fetchStart")])]),n._v(" "),s("li",[n._v("onload 时间 = "),s("code",[n._v("loadEventEnd")]),n._v(" - "),s("code",[n._v("fetchStart")])])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("// 计算加载时间\nfunction getPerformanceTiming () {\n    var performance = window.performance;\n\n    if (!performance) {\n        // 当前浏览器不支持\n        console.log('你的浏览器不支持 performance 接口');\n        return;\n    }\n\n    var t = performance.timing;\n    var times = {};\n\n    //【重要】页面加载完成的时间\n    //【原因】这几乎代表了用户等待页面可用的时间\n    times.loadPage = t.loadEventEnd - t.navigationStart;\n\n    //【重要】解析 DOM 树结构的时间\n    //【原因】反省下你的 DOM 树嵌套是不是太多了！\n    times.domReady = t.domComplete - t.responseEnd;\n\n    //【重要】重定向的时间\n    //【原因】拒绝重定向！比如，http://example.com/ 就不该写成 http://example.com\n    times.redirect = t.redirectEnd - t.redirectStart;\n\n    //【重要】DNS 查询时间\n    //【原因】DNS 预加载做了么？页面内是不是使用了太多不同的域名导致域名查询的时间太长？\n    // 可使用 HTML5 Prefetch 预查询 DNS ，见：[HTML5 prefetch](http://segmentfault.com/a/1190000000633364)\n    times.lookupDomain = t.domainLookupEnd - t.domainLookupStart;\n\n    //【重要】读取页面第一个字节的时间\n    //【原因】这可以理解为用户拿到你的资源占用的时间，加异地机房了么，加CDN 处理了么？加带宽了么？加 CPU 运算速度了么？\n    // TTFB 即 Time To First Byte 的意思\n    // 维基百科：https://en.wikipedia.org/wiki/Time_To_First_Byte\n    times.ttfb = t.responseStart - t.navigationStart;\n\n    //【重要】内容加载完成的时间\n    //【原因】页面内容经过 gzip 压缩了么，静态资源 css/js 等压缩了么？\n    times.request = t.responseEnd - t.requestStart;\n\n    //【重要】执行 onload 回调函数的时间\n    //【原因】是否太多不必要的操作都放到 onload 回调函数里执行了，考虑过延迟加载、按需加载的策略么？\n    times.loadEvent = t.loadEventEnd - t.loadEventStart;\n\n    // DNS 缓存时间\n    times.appcache = t.domainLookupStart - t.fetchStart;\n\n    // 卸载页面的时间\n    times.unloadEvent = t.unloadEventEnd - t.unloadEventStart;\n\n    // TCP 建立连接完成握手的时间\n    times.connect = t.connectEnd - t.connectStart;\n\n    return times;\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br")])]),s("h3",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[n._v("#")]),n._v(" 参考资料")]),n._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://tech.meituan.com/Optimization_of_front_end_sensory_properties.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("前端感官性能的衡量和优化实践"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"http://www.alloyteam.com/2015/09/explore-performance/",target:"_blank",rel:"noopener noreferrer"}},[n._v("初探 performance – 监控网页与程序性能"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/chuaWeb/p/PerformanceMonitoring.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("前端性能——监控起步"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/entry/58ba9cb5128fe100643da2cc",target:"_blank",rel:"noopener noreferrer"}},[n._v("前端性能监控"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"http://fex.baidu.com/blog/2014/05/front_end-data/",target:"_blank",rel:"noopener noreferrer"}},[n._v("前端数据之美 -- 基础篇"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/GIpmZIY6yxGRBpkTDHuJuw",target:"_blank",rel:"noopener noreferrer"}},[n._v("Web 性能领域常见的专业术语"),s("OutboundLink")],1)])]),n._v(" "),s("h2",{attrs:{id:"联系作者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[n._v("#")]),n._v(" 联系作者")]),n._v(" "),s("div",{attrs:{align:"center"}},[s("p",[n._v("\n        平凡世界，贵在坚持。\n    ")]),n._v(" "),s("img",{attrs:{src:n.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);a.default=e.exports}}]);