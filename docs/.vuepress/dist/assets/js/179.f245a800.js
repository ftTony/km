(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{407:function(r,e,s){"use strict";s.r(e);var t=s(4),a=Object(t.a)({},(function(){var r=this,e=r.$createElement,s=r._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[s("h1",{attrs:{id:"cluster-集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cluster-集群","aria-hidden":"true"}},[r._v("#")]),r._v(" cluster 集群")]),r._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[r._v("#")]),r._v(" 前言")]),r._v(" "),s("p",[r._v("单个"),s("code",[r._v("Node.js")]),r._v("实例运行在单个线程中。 为了充分利用多核系统，有时需要启用一组 Node.js 进程去处理负载任务。")]),r._v(" "),s("h2",{attrs:{id:"内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[r._v("#")]),r._v(" 内容")]),r._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E5%A4%9A%E4%B8%AAnode%E5%AE%9E%E4%BE%8B+%E5%A4%9A%E4%B8%AA%E7%AB%AF%E5%8F%A3"}},[r._v("多个 node 实例+多个端口")])]),r._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E4%B8%BB%E8%BF%9B%E7%A8%8B%E5%90%91%E5%AD%90%E8%BF%9B%E7%A8%8B%E8%BD%AC%E5%8F%91%E8%AF%B7%E6%B1%82"}},[r._v("主进程向子进程转发请求")])]),r._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E5%AE%9E%E4%BE%8B%E4%BB%A3%E7%A0%81"}},[r._v("实例代码")])]),r._v(" "),s("li",[s("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86"}},[r._v("实现原理")])])]),r._v(" "),s("h3",{attrs:{id:"一、多个-node-实例-多个端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、多个-node-实例-多个端口","aria-hidden":"true"}},[r._v("#")]),r._v(" 一、多个 node 实例+多个端口")]),r._v(" "),s("p",[r._v("集群内的 node 实例，各自监听不同的端口，再由反向代理实现请求到多个端口的分发。")]),r._v(" "),s("ul",[s("li",[r._v("优点：实现简单，各实例相对独立，这对服务稳定性有好处。")]),r._v(" "),s("li",[r._v("缺点：增加端口战胜，进程之间通信比较麻烦。")])]),r._v(" "),s("h3",{attrs:{id:"二、主进程向子进程转发请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、主进程向子进程转发请求","aria-hidden":"true"}},[r._v("#")]),r._v(" 二、主进程向子进程转发请求")]),r._v(" "),s("p",[r._v("集群内，创建一个主进程（master），以及若干个子进程。由 master 监听客户连接请求，并根据特定的策略，转发 worker。")]),r._v(" "),s("ul",[s("li",[r._v("优点：通常只占用一个端口，通信相对简单，转发策略更灵活。")]),r._v(" "),s("li",[r._v("缺点：实现相对复杂，对主进程的稳定性要求较高。")])]),r._v(" "),s("h3",{attrs:{id:"三、实例代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、实例代码","aria-hidden":"true"}},[r._v("#")]),r._v(" 三、实例代码")]),r._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[r._v("const cluster = require('cluster');\n\nif(cluster.isMaster){\n    const cpuNum = require('os').cpus().length;\n    for(let i=0;i<cpuNum;++i){\n        cluster.fork();\n    }\n\n    // 创建进程完成后输出信息\n    cluster.on('online',(worker)=>{\n        console.log('Create worker-' + worker.process.pid);\n    });\n\n    // 监听子进程退出后重启事件\n    cluster.on('exit',(worker,code,signal)=>{\n        console.log('[Master] worker ' + worker.process.pid + ' died with code:' + code + ', and' + signal);\n        cluster.fork();     // 重启子进程\n    });\n}else{\n    const net = require('net');\n    net.createServer().on('connection',(socket)=>{\n        setTimeout(()=>{\n            socket.end('Request handled by worker-'+process.pid);\n        },10);\n    }).listen(8989);\n}\n")])]),r._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[r._v("1")]),s("br"),s("span",{staticClass:"line-number"},[r._v("2")]),s("br"),s("span",{staticClass:"line-number"},[r._v("3")]),s("br"),s("span",{staticClass:"line-number"},[r._v("4")]),s("br"),s("span",{staticClass:"line-number"},[r._v("5")]),s("br"),s("span",{staticClass:"line-number"},[r._v("6")]),s("br"),s("span",{staticClass:"line-number"},[r._v("7")]),s("br"),s("span",{staticClass:"line-number"},[r._v("8")]),s("br"),s("span",{staticClass:"line-number"},[r._v("9")]),s("br"),s("span",{staticClass:"line-number"},[r._v("10")]),s("br"),s("span",{staticClass:"line-number"},[r._v("11")]),s("br"),s("span",{staticClass:"line-number"},[r._v("12")]),s("br"),s("span",{staticClass:"line-number"},[r._v("13")]),s("br"),s("span",{staticClass:"line-number"},[r._v("14")]),s("br"),s("span",{staticClass:"line-number"},[r._v("15")]),s("br"),s("span",{staticClass:"line-number"},[r._v("16")]),s("br"),s("span",{staticClass:"line-number"},[r._v("17")]),s("br"),s("span",{staticClass:"line-number"},[r._v("18")]),s("br"),s("span",{staticClass:"line-number"},[r._v("19")]),s("br"),s("span",{staticClass:"line-number"},[r._v("20")]),s("br"),s("span",{staticClass:"line-number"},[r._v("21")]),s("br"),s("span",{staticClass:"line-number"},[r._v("22")]),s("br"),s("span",{staticClass:"line-number"},[r._v("23")]),s("br"),s("span",{staticClass:"line-number"},[r._v("24")]),s("br"),s("span",{staticClass:"line-number"},[r._v("25")]),s("br"),s("span",{staticClass:"line-number"},[r._v("26")]),s("br")])]),s("p",[r._v("输出结果")]),r._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[r._v("Create worker- 23735\nCreate worker- 23731\nCreate worker- 23729\nCreate worker- 23730\n")])]),r._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[r._v("1")]),s("br"),s("span",{staticClass:"line-number"},[r._v("2")]),s("br"),s("span",{staticClass:"line-number"},[r._v("3")]),s("br"),s("span",{staticClass:"line-number"},[r._v("4")]),s("br")])]),s("h3",{attrs:{id:"四、实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、实现原理","aria-hidden":"true"}},[r._v("#")]),r._v(" 四、实现原理")]),r._v(" "),s("h4",{attrs:{id:"_4-1-master、worker-如何通信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-master、worker-如何通信","aria-hidden":"true"}},[r._v("#")]),r._v(" 4.1 master、worker 如何通信")]),r._v(" "),s("blockquote",[s("p",[r._v("master 进程通过 cluster.fork()来创建 worker 进程。cluster.fork()内部是通过 child_process.fork()来创建子进程。")])]),r._v(" "),s("h4",{attrs:{id:"_4-2-如何实现端口共享"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-如何实现端口共享","aria-hidden":"true"}},[r._v("#")]),r._v(" 4.2 如何实现端口共享")]),r._v(" "),s("p",[r._v("net 模块中，对 listen() 方法进行了特殊处理。根据当前进程是 master 进程，还是 worker 进程：")]),r._v(" "),s("ol",[s("li",[r._v("master 进程：在该端口上正常监听请求。（没做特殊处理）")]),r._v(" "),s("li",[r._v("worker 进程：创建 server 实例。然后通过 IPC 通道，向 master 进程发送消息，让 master 进程也创建 server 实例，并在该端口上监听请求。当请求进来时，master 进程将请求转发给 worker 进程的 server 实例。")])]),r._v(" "),s("h4",{attrs:{id:"_4-3-如何将请求分发到多个-worker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-如何将请求分发到多个-worker","aria-hidden":"true"}},[r._v("#")]),r._v(" 4.3 如何将请求分发到多个 worker")]),r._v(" "),s("p",[r._v("每当 worker 进程创建 server 实例来监听请求，都会通过 IPC 通道，在 master 上进行注册。当客户端请求到达，master 会负责将请求转发给对应的 worker。")]),r._v(" "),s("p",[r._v("具体转发给哪个 worker？这是由转发策略决定的。可以通过环境变量 NODE_CLUSTER_SCHED_POLICY 设置，也可以在 cluster.setupMaster(options)时传入。")]),r._v(" "),s("p",[r._v("当有客户请求到达，master 会轮询一遍 worker 列表，找到第一个空闲的 worker，然后将该请求转发给该 worker。")]),r._v(" "),s("h3",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[r._v("#")]),r._v(" 参考资料")]),r._v(" "),s("ul",[s("li",[r._v("《深入浅出 Nodejs》")]),r._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/cluster.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("cluster 模块"),s("OutboundLink")],1)]),r._v(" "),s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/668R5YheK0GGd8kUGtRFVA",target:"_blank",rel:"noopener noreferrer"}},[r._v("通过 Node.js 的 Cluster 模块源码，深入 PM2 原理"),s("OutboundLink")],1)]),r._v(" "),s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/rdbVHJs1z1SSOjmUZEXKEA",target:"_blank",rel:"noopener noreferrer"}},[r._v("【第 1003 期】Nodejs cluster 模块深入探究"),s("OutboundLink")],1)]),r._v(" "),s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/uRCfvzLlkXVwQ4FTmGArrg",target:"_blank",rel:"noopener noreferrer"}},[r._v("Nodejs 进阶：解答 Cluster 模块的几个疑问"),s("OutboundLink")],1)]),r._v(" "),s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/vKHG1mznQL3_iJ4XEbWaqg",target:"_blank",rel:"noopener noreferrer"}},[r._v("源码分析 Node 的 Cluster 模块"),s("OutboundLink")],1)])]),r._v(" "),s("h2",{attrs:{id:"联系作者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[r._v("#")]),r._v(" 联系作者")]),r._v(" "),s("div",{attrs:{align:"center"}},[s("p",[r._v("\n        平凡世界，贵在坚持。\n    ")]),r._v(" "),s("img",{attrs:{src:r.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);e.default=a.exports}}]);