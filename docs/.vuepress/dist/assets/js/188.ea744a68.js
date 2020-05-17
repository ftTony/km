(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{416:function(e,s,a){"use strict";a.r(s);var t=a(4),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"net-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#net-模块","aria-hidden":"true"}},[e._v("#")]),e._v(" net 模块")]),e._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),a("p",[e._v("Node 提供了"),a("code",[e._v("net")]),e._v("、"),a("code",[e._v("dgram")]),e._v("、"),a("code",[e._v("http")]),e._v("、"),a("code",[e._v("https")]),e._v("这 4 个模块分别处理"),a("code",[e._v("TCP")]),e._v("、"),a("code",[e._v("UDP")]),e._v("、"),a("code",[e._v("HTTP")]),e._v("、"),a("code",[e._v("HTTPS")]),e._v("，适用于服务器端和客户端。")]),e._v(" "),a("h2",{attrs:{id:"内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[e._v("#")]),e._v(" 内容")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%B8%80%E7%BD%91%E7%BB%9C%E6%A8%A1%E5%9E%8B"}},[e._v("网络模型")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%8C%E8%BE%93%E5%85%A5-url-%E5%88%B0%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E9%83%BD%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%E4%BA%8B%E6%83%85"}},[e._v("输入 url 到页面加载都发生了什么事情？")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E4%B8%89%E6%9E%84%E5%BB%BA-tcp-%E6%9C%8D%E5%8A%A1"}},[e._v("构建 TCP 服务")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E5%9B%9B%E6%9E%84%E5%BB%BA-udp-%E6%9C%8D%E5%8A%A1"}},[e._v("构建 UDP 服务")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%94%E6%9E%84%E5%BB%BA-http-%E6%9C%8D%E5%8A%A1"}},[e._v("构建 HTTP 服务")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E5%85%AD%E6%9E%84%E5%BB%BA-websocket-%E6%9C%8D%E5%8A%A1"}},[e._v("构建 WebSocket 服务")])])]),e._v(" "),a("h3",{attrs:{id:"一、网络模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、网络模型","aria-hidden":"true"}},[e._v("#")]),e._v(" 一、网络模型")]),e._v(" "),a("p",[e._v("七层网络分别是：应用层、表示层、会话层、传输层、网络层、数据链路层、物理层")]),e._v(" "),a("p",[a("img",{attrs:{src:"net01.png",alt:""}}),e._v(" "),a("img",{attrs:{src:"net02.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"二、输入-url-到页面加载都发生了什么事情？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、输入-url-到页面加载都发生了什么事情？","aria-hidden":"true"}},[e._v("#")]),e._v(" 二、输入 url 到页面加载都发生了什么事情？")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#21-3-%E6%AC%A1%E6%8F%A1%E6%89%8B"}},[e._v("3 次握手")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#22-4-%E6%AC%A1%E6%8C%A5%E6%89%8B"}},[e._v("4 次挥手")])])]),e._v(" "),a("h4",{attrs:{id:"_2-1-3-次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-次握手","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.1 3 次握手")]),e._v(" "),a("ul",[a("li",[e._v("客户端-发送带有 SYN 标志的数据包-一次握手-服务端")]),e._v(" "),a("li",[e._v("服务端-发送带有 SYN/ACK 标志的数据包-二次握手-客户端")]),e._v(" "),a("li",[e._v("客户端-发送带有 ACK 标志的数据包-三次握手-服务端")])]),e._v(" "),a("h4",{attrs:{id:"_2-2-4-次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-4-次挥手","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.2 4 次挥手")]),e._v(" "),a("ul",[a("li",[e._v("客户端-发送一个 FIN，用来关闭客户端到服务器的数据传送")]),e._v(" "),a("li",[e._v("服务器-收到这个 FIN，它发回一个 ACK，确认序号为收到的序号加 1.和 SYN 一样，一个 FIN 将占用一个序号")]),e._v(" "),a("li",[e._v("服务器-关闭与客户端的连接，发送一个 FIN 给客户端")]),e._v(" "),a("li",[e._v("客户端-发回 ACK 报文确认，并将确认序号设置为收到序号加 1")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("输入地址\n浏览器查找域名的 IP 地址\n这一步包括 DNS 具体的查找过程，包括：浏览器缓存->系统缓存->路由器缓存...\n浏览器向 web 服务器发送一个 HTTP 请求\n服务器的永久重定向响应（从 http://example.com 到 http://www.example.com）\n浏览器跟踪重定向地址\n服务器处理请求\n服务器返回一个 HTTP 响应\n浏览器显示 HTML\n浏览器发送请求获取嵌入在 HTML 中的资源（如图片、音频、视频、CSS、JS等等）\n浏览器发送异步请求\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("p",[e._v("参考资料："),a("a",{attrs:{href:"https://km.xiaowuzi.info/project/browser-url.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("从 URL 输入到页面展现到底发生什么？"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"三、构建-tcp-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、构建-tcp-服务","aria-hidden":"true"}},[e._v("#")]),e._v(" 三、构建 TCP 服务")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var net = require('net');\n\nvar server = net.createServer(function(socket){\n    // 新的连接\n    socket.on('data',function(data){\n        socket.write('你好');\n    });\n\n    socket.on('end',function(){\n        console.log('连接断开');\n    });\n    socket.write('欢迎光临《深入浅出Node.js》示例：\\n');\n});\n\nserver.listen(8124,function(){\n    console.log('server bound';)\n})\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br")])]),a("h4",{attrs:{id:"_3-1-tcp-服务的事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-tcp-服务的事件","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.1 TCP 服务的事件")]),e._v(" "),a("ul",[a("li",[e._v("服务器事件")]),e._v(" "),a("li",[e._v("连接事件")])]),e._v(" "),a("p",[a("strong",[e._v("服务器事件")])]),e._v(" "),a("p",[e._v("通过 net.createServer()创建的服务器而言，它是一个 EventEmitter 实例。")]),e._v(" "),a("ul",[a("li",[e._v("listening:在调用 server.listen()绑定端口或者 Domain Socket 后触发，简洁写法为 server.listen(port,listeningListener)，通过 listent()方法的第二个参数传入。")]),e._v(" "),a("li",[e._v("connection：每个客户端套接字连接到服务器端时触发。")]),e._v(" "),a("li",[e._v("close：当服务器关闭时触发。")]),e._v(" "),a("li",[e._v("error：当服务器发生异常时，将会触发该事件。比如侦听一个使用中的端口，将会触发一个异常，如果不侦听 error 事件，服务器将会抛出异常。")])]),e._v(" "),a("p",[a("strong",[e._v("连接事件")])]),e._v(" "),a("p",[e._v("服务器可以同时与多个客户端保持连接，对于每个连接而言是典型的可写可读 Stream 对象。")]),e._v(" "),a("ul",[a("li",[e._v("data:当一端调用 write()发送数据时，另一端会触发 data 事件，事件传递的数据即是 write()发送的数据")]),e._v(" "),a("li",[e._v("end:当连接中的任意一端发送了 FIN 数据时，将会触发该事件。")]),e._v(" "),a("li",[e._v("connet：该事件用于客户端，当套接字与服务器端连接成功时会被触发。")]),e._v(" "),a("li",[e._v("drain：当做任意一端调用 write()发送数据时，当前这端会触发该事件。")]),e._v(" "),a("li",[e._v("error：当异常发生时，触发该事件。")]),e._v(" "),a("li",[e._v("close：当套接字完全关闭时，触发该事件。")]),e._v(" "),a("li",[e._v("timeout：当一定时间后不再活跃时，该事件将会被触发，通知用户当前该连接已经被闲置了。")])]),e._v(" "),a("h3",{attrs:{id:"四、构建-udp-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、构建-udp-服务","aria-hidden":"true"}},[e._v("#")]),e._v(" 四、构建 UDP 服务")]),e._v(" "),a("p",[e._v("UDP 又称用户数据包协议，与 TCP 一样同属于网络传输层。UDP 与 TCP 最大的不同是 UDP 不是面向连接的。TCP 中连接一旦建立，所有的会话都基于连接完成，客户端如果要与另一个 TCP 服务通信，需要另创建一个套接字来完成连接。但在 UDP 中，一个套接字可以与多个 UDP 服务通信，它虽然提供面向事务的简单不可靠信息传输服务，在网络差的情况下存在午饭严重的问题，但是由于它无须连接，资源消耗低，处理快速且灵活，所以常常应用在那种偶尔丢一两个数据包也不会产生重大影响的场景，比如音频、视频等。UDP 目前应用很广泛，DNS 服务即是基于它实现的。")]),e._v(" "),a("h4",{attrs:{id:"_7-1-创建-udp-服务器端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-创建-udp-服务器端","aria-hidden":"true"}},[e._v("#")]),e._v(" 7.1 创建 UDP 服务器端")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var dgram = require('dgram');\n\nvar server = dgram.createSocket('udp4');\n\nserver.on('message',function(msg,rinfo){\n    console.log('server got:'+ msg + 'from '+ rinfo.address + ':'+rinfo.port);\n})\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("h4",{attrs:{id:"_7-2-创建-udp-客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-创建-udp-客户端","aria-hidden":"true"}},[e._v("#")]),e._v(" 7.2 创建 UDP 客户端")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var dgram = require('dgram');\nvar message = new Buffer('深入浅出Node.js');\nvar client = dgram.createSocket('udp4');\nclient.send(message,0,message.length,41234,'localhost',function(err,bytes){\n    client.close();\n})\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("send()方法的参数如下：")]),e._v(" "),a("p",[a("code",[e._v("socket.send(buf,offset,length,port,address,[callback])")])]),e._v(" "),a("p",[e._v("这些参数分别为要发送的 Buffer、Buffer 的偏移、Buffer 的长度、目标端口、目标地址、发送完成后的回调。")]),e._v(" "),a("h4",{attrs:{id:"_7-3-udp-套接字事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-udp-套接字事件","aria-hidden":"true"}},[e._v("#")]),e._v(" 7.3 UDP 套接字事件")]),e._v(" "),a("ul",[a("li",[e._v("message：当 UDP 套接字侦听网卡端口后，接收到消息时触发该事件，触发携带的数据为消息 Buffer 对象和一个远程地址信息。")]),e._v(" "),a("li",[e._v("listening：当 UDP 套接字开始侦听时触发该事件。")]),e._v(" "),a("li",[e._v("close：调用 close()方法时触发该事件，并不再触发 message 事件。如需再次触发 message 事件，重新绑定即可。")]),e._v(" "),a("li",[e._v("error：当异常发生时触发该事件，如果不侦听，异常将直接抛出，使进程退出。")])]),e._v(" "),a("h3",{attrs:{id:"五、构建-http-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、构建-http-服务","aria-hidden":"true"}},[e._v("#")]),e._v(" 五、构建 HTTP 服务")]),e._v(" "),a("p",[e._v("略，参考上一篇"),a("a",{attrs:{href:"https://github.com/cs-learning-record/javascript-series/blob/master/nodejs/http%E6%A8%A1%E5%9D%97.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("文章"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"六、构建-websocket-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、构建-websocket-服务","aria-hidden":"true"}},[e._v("#")]),e._v(" 六、构建 WebSocket 服务")]),e._v(" "),a("ul",[a("li",[e._v("WebSocket 客户端基于事件的编程模型与 Node 中自定义事件相差无几。")]),e._v(" "),a("li",[e._v("WebSocket 实现了客户端与服务器端之间的长连接，而 Node 事件驱动方式十分擅长与大量的客户端保持高并发连接。")])]),e._v(" "),a("p",[e._v("WebSocket 与传统 HTTP 有如下好处")]),e._v(" "),a("ul",[a("li",[e._v("客户端与服务器只建立一个 TCP 连接，可以使用更少的连接。")]),e._v(" "),a("li",[e._v("WebSocket 服务器端可以推送数据到客户端，这远比 HTTP 请求响应模式更灵活、更高效。")]),e._v(" "),a("li",[e._v("有更轻量级的协议头，减少数据传送量。")])]),e._v(" "),a("p",[e._v("Node 模拟浏览器")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var WebSocket = function(url){\n        // 伪代码，解析ws://127.0.0.1:12010/updates，用于请求\n        this.options = parseUrl(url);\n        this.connect();\n}\n\nWebSocket.prototype.onopen = function(){\n    // TODO\n};\n\nWebSocket.prototype.setSocket = function(socket){\n    this.socket = socket;\n};\n\nWebSocket.prototype.connect = function(){\n    var this = that;\n    var key = new Buffer(this.options.protocolVersion + '-' + Date.now()).toString('base64');\n    var shasum = crypto.crateHash('sha1');\n    var expected = shasum.update(key + '58EAFA5-E914-47DA-95CA-C5AB0DC85B11').digest('base64');\n\n    var options = {\n        port: this.options.port,\n        host: this.options.hostname,\n        headers:{\n            'Connection':'Upgrade',\n            'Upgrade':'websocket',\n            'Sec-WebSocket-Version':this.options.protocolVersion,\n            'Sec-WebSocket-Key':key\n        }\n    };\n    var req = http.request(options);\n    req.end();\n\n    req.on('upgrade',function(res,socket,upgradeHead){\n        //  连接成功\n        that.setSocket(socket);\n        //  触发open事件\n        that.onopen();\n    })\n};\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br")])]),a("p",[e._v("服务器端响应行为")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var server = http.createServer(function(req,res){\n    res.writeHead(200,{'Content-Type':'text/plain'});\n    res.end('Hello World\\n');\n});\nserver.listen(12010);\n\n// 在收到upgrade请求后，告之客户端鸡毛切换协议\nserver.on('upgrade',function(req,socket,upgradeHead){\n    var head = new Buffer(upgradeHead,length);\n    upgradeHead.copy(head);\n    var key = req.headers['sec-websocket-key'];\n    var shasum = crypto.createHash('sha1');\n    key = shasum.update(key+ '58EAFA5-E914-47DA-95CA-C5AB0DC85B11').digest('base64');\n    var headers =[\n        'HTTP/1.1 101 Switching Protocols',\n        'Upgrade: websocket',\n        'Connection: Upgrade',\n        'Sec-WebSocket-Accept: ' + key,\n        'Sec-WebSocket-Protocol: ' + protocol\n    ];\n    // 让数据提立即发送\n    socket.setNoDelay(true);\n    socket.write(headers.concat('','').join('\\r\\n'));\n    // 建立服务器端WebSocket连接\n    var websocket = new WebSocket();\n    websocket.setSocket(socket);\n})\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br")])]),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/wscats/node-tutorial/tree/master/tutorial/net",target:"_blank",rel:"noopener noreferrer"}},[e._v("net 模块"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/fJB3T6g3yFf4yn_HYEZGPg",target:"_blank",rel:"noopener noreferrer"}},[e._v("入门 Node.js Net 模块构建 TCP 网络服务"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/iPe1cVR2vsqkYCjDdITRZA",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何用 nodejs 编写 TCP 长连接应用"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("《深入浅出 nodejs》")])]),e._v(" "),a("h2",{attrs:{id:"联系作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[e._v("#")]),e._v(" 联系作者")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("p",[e._v("\n        平凡世界，贵在坚持。\n    ")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);s.default=n.exports}}]);