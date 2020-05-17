(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{283:function(e,s,n){"use strict";n.r(s);var a=n(4),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"webstock-学习"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webstock-学习","aria-hidden":"true"}},[e._v("#")]),e._v(" webstock 学习")]),e._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),n("p",[e._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),e._v(" "),n("h2",{attrs:{id:"内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[e._v("#")]),e._v(" 内容")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E4%BB%80%E4%B9%88%E6%98%AFwebsocket%E5%8D%8F%E8%AE%AE"}},[e._v("什么是 WebSocket 协议")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E7%94%A8websocket"}},[e._v("为什么要用 WebSocket")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E4%BA%86%E8%A7%A3websocket"}},[e._v("了解 WebSocket")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#%E5%9B%9B%E3%80%81webksocket%E7%9B%B8%E5%85%B3api"}},[e._v("WebkSocket 相关 API")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%94%E3%80%81%E5%AE%8C%E6%95%B4%E4%BE%8B%E5%AD%90"}},[e._v("完整例子")])])]),e._v(" "),n("h3",{attrs:{id:"一、什么是-websocket-协议"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是-websocket-协议","aria-hidden":"true"}},[e._v("#")]),e._v(" 一、什么是 WebSocket 协议")]),e._v(" "),n("p",[n("code",[e._v("websocket")]),e._v("是"),n("code",[e._v("HTML5")]),e._v("规范中的一部分，它借鉴了"),n("code",[e._v("socket")]),e._v("这种思想，为"),n("code",[e._v("web")]),e._v("应用程序客户端和服务端之间提供了一种全双工通信机制。同时，它又是一种新的应用层协议，"),n("code",[e._v("websocket")]),e._v("协议是为了提供 web 应用程序和服务端全双工通信而专门制定的一种应用层协议，通常它表示"),n("code",[e._v("ws://echo.websocket.org/?encoding=text HTTP/1.1")]),e._v("，可以看到除了前面的协议名和"),n("code",[e._v("http")]),e._v("不同之外，它的表示地址就是传统的"),n("code",[e._v("url")]),e._v("地址。")]),e._v(" "),n("h3",{attrs:{id:"二、为什么要用-websocket"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、为什么要用-websocket","aria-hidden":"true"}},[e._v("#")]),e._v(" 二、为什么要用 WebSocket")]),e._v(" "),n("ul",[n("li",[e._v("现有的 HTTP 的架构模式")]),e._v(" "),n("li",[e._v("HTTP 的特点")]),e._v(" "),n("li",[e._v("了解 HTTP 轮询，长轮询及存在的问题")])]),e._v(" "),n("h4",{attrs:{id:"_2-1-现有的-http-的架构模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-现有的-http-的架构模式","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.1 现有的 HTTP 的架构模式")]),e._v(" "),n("p",[n("code",[e._v("HTTP")]),e._v("是客户端/服务器模式中请求-响应所用的协议，在这种模式中，客户端(一般是 web 浏览器)向服务器提交"),n("code",[e._v("HTTP")]),e._v("请求，服务器响应请求的资源。")]),e._v(" "),n("h4",{attrs:{id:"_2-2-http-的特点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-http-的特点","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.2 HTTP 的特点")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("HTTP")]),e._v("是半双工协议，也就是说，在同一时刻浏览只能单向流动，客户端向服务器发送请求，然后服务器响应请求。服务器不能主动推送数据给浏览器。当然这个"),n("code",[e._v("HTTP2")]),e._v("已经实现。")]),e._v(" "),n("li",[e._v("当初这么设计也是有原因的，假如服务器能主动推送数据给浏览器的话，那么浏览器很容易受到攻击，比如一些广告商会主动把一些广告信息强行的传输给客户端。")]),e._v(" "),n("li",[e._v("半双工的缺点是：效率非常低。")])]),e._v(" "),n("h4",{attrs:{id:"_2-3-了解-http-轮询，长轮询及存在的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-了解-http-轮询，长轮询及存在的问题","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.3 了解 HTTP 轮询，长轮询及存在的问题")]),e._v(" "),n("ol",[n("li",[e._v("一般情况下，浏览器访问网页时，会向页面所在的服务器发送一个 HTTP 请求，Web 服务器确认请求并向浏览器返回响应。但是像股价，实时新闻等到达浏览器")]),e._v(" "),n("li",[e._v("显示页面时已经过时了，如果用户想要得到最新的实时信息，他们就要不断的刷新页面，这种显然是不切实际的。")]),e._v(" "),n("li",[n("strong",[e._v("轮询：")]),e._v(" 轮询是通过浏览器定时的向"),n("code",[e._v("web")]),e._v("服务器发送"),n("code",[e._v("http")]),e._v("的"),n("code",[e._v("get")]),e._v("请求，服务器收到请求后，就把最新的数据发回给客户端，客户端得到数据后，将其显示出来，然后再定期的重复这一过程，虽然可以满足需求，但是存在一些缺点，比如某一段时间内"),n("code",[e._v("web")]),e._v("服务器没有更新的数据，但是浏览器仍然需要定时的发送 Get 请求过来询问，那么即浪费了带宽，又浪费了"),n("code",[e._v("cpu")]),e._v("的利用率。如图：\n"),n("img",{attrs:{src:"stocket.png",alt:"images"}})]),e._v(" "),n("li",[n("strong",[e._v("长轮询：")]),e._v(" 客户端向服务器请求信息，并在设定的时间段内打开一个连接，服务器如果没有任何信息，会保持请求打开，直到有客户端可用的信息，或者直到指定的超时用完为止。这个时候，客户端会重新向服务器请求信息。长轮询也可以叫做"),n("code",[e._v("comet")]),e._v("或反向"),n("code",[e._v("ajax")]),e._v("。它会延长"),n("code",[e._v("HTTP")]),e._v("响应的完成，直到服务器有需要发送给客户端的内容，这种技术通常可以叫“挂起 GET”或“搁置 POST”\n"),n("ul",[n("li",[e._v("缺点是：当信息量非常大的时候，长轮询相对于"),n("code",[e._v("http")]),e._v("轮询并没有明显的性能优势，因为客户端必须频繁地重连到服务器以读取新信息。造成网络的表现和常规轮询相同。")])])])]),e._v(" "),n("p",[n("img",{attrs:{src:"stocket01.png",alt:"images"}})]),e._v(" "),n("p",[e._v("参考资料:"),n("a",{attrs:{href:"%5BWeb%E7%AB%AF%E5%8D%B3%E6%97%B6%E9%80%9A%E8%AE%AF%E6%8A%80%E6%9C%AF%E7%9B%98%E7%82%B9%EF%BC%9A%E7%9F%AD%E8%BD%AE%E8%AF%A2%E3%80%81Comet%E3%80%81Websocket%E3%80%81SSE%5D(http://www.52im.net/thread-336-1-1.html)"}},[e._v("Web 端即时通讯技术盘点：短轮询、Comet、Websocket、SSE")])]),e._v(" "),n("h3",{attrs:{id:"三、了解-websocket"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、了解-websocket","aria-hidden":"true"}},[e._v("#")]),e._v(" 三、了解 WebSocket")]),e._v(" "),n("p",[e._v("WebSocket 是一种全双工，双向，单套接字连接，使用 WebSocket，HTTP 请求变成打开 Websocket 的链接的单一请求，并且重用从客户端到服务器以及服务到客户的同一连接。")]),e._v(" "),n("p",[e._v("WebSocket 减少了延迟，因为一旦建立起 WebSocket 连接，服务器可以在消息可用时发送他们。和轮询不同的是：WebSocket 只发出一个请求，服务器不需要等待来自客户端的请求，且客户端可以在任何时候向服务器端发送消息，和轮询相比的话，不管是否有可用消息，每隔一段时间都发送一个请求，单一请求大大减少了延迟。如图：\n"),n("img",{attrs:{src:"stocket02.png",alt:"images"}})]),e._v(" "),n("h4",{attrs:{id:"_3-1-特点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-特点","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.1 特点")]),e._v(" "),n("ul",[n("li",[e._v("握手阶段采用 HTTP 协议，默认端口是 80 和 443")]),e._v(" "),n("li",[e._v("建立在 TCP 协议基础之上，和 HTTP 协议属于应用层")]),e._v(" "),n("li",[e._v("可以发送文本，也可以发送二进制数据")]),e._v(" "),n("li",[e._v("没有同源限制，客户端可以与任意服务器通信")]),e._v(" "),n("li",[e._v("协议标识符是 ws(如果加密，为 wss)，如"),n("code",[e._v("ws://localhost:8023")])])]),e._v(" "),n("h4",{attrs:{id:"_3-2-优点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-优点","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.2 优点")]),e._v(" "),n("ul",[n("li",[e._v("WebSocket 使实时通信更加有效。能节约带宽，CPU 资源并减少延迟。")]),e._v(" "),n("li",[e._v("WebSocket 使 Web 上客户端和服务器之间的通信变得更加的简单。")]),e._v(" "),n("li",[e._v("Websocket 是一个底层网络协议，我们可以在它的基础之上构建其他的标准协议。")]),e._v(" "),n("li",[e._v("较少的控制开销。连接创建后，ws 客户端、服务端进行数据交换时，协议控制的数据包头部较小。在不包含头部的情况下，服务端到客户端的包头只有 2~10 字节（取决于数据包长度），客户端到服务端的的话，需要加上额外的 4 字节的掩码。而 HTTP 协议每次通信都需要携带完整的头部。")])]),e._v(" "),n("h4",{attrs:{id:"_3-3-应用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-应用场景","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.3 应用场景")]),e._v(" "),n("p",[e._v("聊天，大型多人在线游戏，股票交易应用或实时新闻等。")]),e._v(" "),n("h3",{attrs:{id:"四、webksocket-相关-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、webksocket-相关-api","aria-hidden":"true"}},[e._v("#")]),e._v(" 四、WebkSocket 相关 API")]),e._v(" "),n("h4",{attrs:{id:"_4-1-客户端的-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-客户端的-api","aria-hidden":"true"}},[e._v("#")]),e._v(" 4.1 客户端的 API")]),e._v(" "),n("ul",[n("li",[e._v("WebSocket 构造函数")]),e._v(" "),n("li",[e._v("webSocket.readyState")]),e._v(" "),n("li",[e._v("webSocket.onopen")]),e._v(" "),n("li",[e._v("webSocket.onclose")]),e._v(" "),n("li",[e._v("webSocket.onmessage")]),e._v(" "),n("li",[e._v("webSocket.send")]),e._v(" "),n("li",[e._v("webSocket.bufferedAmount")]),e._v(" "),n("li",[e._v("webSocket.onerror")])]),e._v(" "),n("p",[n("strong",[e._v("WebSocket 构造函数")])]),e._v(" "),n("p",[n("code",[e._v("WebSocket")]),e._v("对象作为一个构造函数，用于新建"),n("code",[e._v("WebSocket")]),e._v("实例。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var ws = new WebSocket('ws://localhost:8080');\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("执行上面语句之后，客户端就会与服务器进行连接。实例对象的所有属性和方法清单，参见"),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),n("OutboundLink")],1),e._v("。")]),e._v(" "),n("p",[n("strong",[e._v("webSocket.readyState")])]),e._v(" "),n("p",[n("code",[e._v("readyState")]),e._v("属性返回实例对象的当前状态，共有四种。")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("CONNECTING")]),e._v("：值为 0，表示正在连接。")]),e._v(" "),n("li",[n("code",[e._v("OPEN")]),e._v("：值为 1，表示连接成功，可以通信了。")]),e._v(" "),n("li",[n("code",[e._v("CLOSING")]),e._v("：值为 2，表示连接正在关闭。")]),e._v(" "),n("li",[n("code",[e._v("CLOSED")]),e._v("：值为 3，表示连接已经关闭，或者打开连接失败。")])]),e._v(" "),n("p",[e._v("下面是一个示例。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("switch (ws.readyState) {\n  case WebSocket.CONNECTING:\n    // do something\n    break;\n  case WebSocket.OPEN:\n    // do something\n    break;\n  case WebSocket.CLOSING:\n    // do something\n    break;\n  case WebSocket.CLOSED:\n    // do something\n    break;\n  default:\n    // this never happens\n    break;\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br")])]),n("p",[n("strong",[e._v("webSocket.onopen")])]),e._v(" "),n("p",[e._v("实例对象的"),n("code",[e._v("onopen")]),e._v("属性，用于指定连接成功后的回调函数。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("ws.onopen = function () {\n  ws.send('Hello Server!');\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[e._v("如果要指定多个回调函数，可以使用"),n("code",[e._v("addEventListener")]),e._v("方法。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("ws.addEventListener('open', function (event) {\n  ws.send('Hello Server!');\n});\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[n("strong",[e._v("webSocket.onclose")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('ws.onclose = function(event) {\n  var code = event.code;\n  var reason = event.reason;\n  var wasClean = event.wasClean;\n  // handle close event\n};\n\nws.addEventListener("close", function(event) {\n  var code = event.code;\n  var reason = event.reason;\n  var wasClean = event.wasClean;\n  // handle close event\n});\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br")])]),n("p",[n("strong",[e._v("webSocket.onmessage")])]),e._v(" "),n("p",[e._v("实例对象的"),n("code",[e._v("onmessage")]),e._v("属性，用于指定收到服务器数据后的回调函数。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('ws.onmessage = function(event) {\n  var data = event.data;\n  // 处理数据\n};\n\nws.addEventListener("message", function(event) {\n  var data = event.data;\n  // 处理数据\n});\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br")])]),n("p",[e._v("注意，服务器数据可能是文本，也可能是二进制数据("),n("code",[e._v("blob")]),e._v("对象或"),n("code",[e._v("Arraybuffer")]),e._v("对象)。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("ws.onmessage = function(event){\n    if(typeof event.data === String){\n        console.log(\"Received data string\");\n    }\n\n    if(event.data instanceof ArrayBuffer){\n        var buffer = event.data;\n        console.log('Received arraybuffer');\n    }\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br")])]),n("p",[e._v("除了动态判断收到的数据类型，也可以使用"),n("code",[e._v("binaryType")]),e._v("属性，显示指定收到的二进制数据类型。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 收到的是blob数据\nws.binaryType = 'blob';\nws.onmessage = function(e){\n    console.log(e.data.size);\n}\n\n// 收到的是ArrayBuffer数据\nws.binaryType = 'arraybuffer';\nws.onmessage = function(e){\n    console.log(e.data.byteLength);\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br")])]),n("p",[n("strong",[e._v("webSocket.send()")])]),e._v(" "),n("p",[e._v("实例对象的"),n("code",[e._v("send()")]),e._v("方法用于向服务器发送数据。")]),e._v(" "),n("p",[e._v("发送文本的例子。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("ws.send('你大爷');\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("发送"),n("code",[e._v("Blob")]),e._v("对象的例子。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var file = document.querySelector('input[type=\"file\"]').files[0];\nws.send(file);\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("发送"),n("code",[e._v("ArrayBuffer")]),e._v("对象的例子。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Sending canvas ImageData as ArrayBuffer\nvar img = canvas_context.getImageData(0, 0, 400, 320);\nvar binary = new Uint8Array(img.data.length);\nfor (var i = 0; i < img.data.length; i++) {\n  binary[i] = img.data[i];\n}\nws.send(binary.buffer);\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br")])]),n("p",[n("strong",[e._v("webSocket.bufferedAmount")])]),e._v(" "),n("p",[e._v("实例对象的"),n("code",[e._v("bufferedAmount")]),e._v("属性，表示还有多少字节的二进制数据没有发送出去。它可以用来判断发送是否结束。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var data = new ArrayBuffer(100000);\nsocket.send(data);\n\nif(socket.bufferedAmount ===0){\n    // 发送完毕\n}else{\n    // 发送还没结束\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("p",[n("strong",[e._v("webSocket.onerror")])]),e._v(" "),n("p",[e._v("实例对象的"),n("code",[e._v("onerror")]),e._v("属性，用于指定报错时的回调函数。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("socket.onerror = function(event){\n    // handle error event\n}\n\nsocket.addEventListener('error',function(event){\n    // handle error event\n})\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br")])]),n("h4",{attrs:{id:"_4-2-服务端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-服务端","aria-hidden":"true"}},[e._v("#")]),e._v(" 4.2 服务端")]),e._v(" "),n("p",[e._v("常用的 Node 实现有以下三种")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/uWebSockets/uWebSockets",target:"_blank",rel:"noopener noreferrer"}},[e._v("µWebSockets"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"http://socket.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Socket.IO"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/theturtle32/WebSocket-Node",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebSocket-Node"),n("OutboundLink")],1)])]),e._v(" "),n("h3",{attrs:{id:"五、完整例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、完整例子","aria-hidden":"true"}},[e._v("#")]),e._v(" 五、完整例子")]),e._v(" "),n("h4",{attrs:{id:"_5-1-客户端代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-客户端代码","aria-hidden":"true"}},[e._v("#")]),e._v(" 5.1 客户端代码")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<!DOCTYPE html>\n<html>\n<head lang="en">\n    <meta charset="UTF-8">\n    <title></title>\n    <style>\n        *{\n            margin: 0;\n            padding: 0;\n        }\n        .message{\n            width: 60%;\n            margin: 0 10px;\n            display: inline-block;\n            text-align: center;\n            height: 40px;\n            line-height: 40px;\n            font-size: 20px;\n            border-radius: 5px;\n            border: 1px solid #B3D33F;\n        }\n        .form{\n            width:100%;\n            position: fixed;\n            bottom: 300px;\n            left: 0;\n        }\n        .connect{\n            height: 40px;\n            vertical-align: top;\n            /* padding: 0; */\n            width: 80px;\n            font-size: 20px;\n            border-radius: 5px;\n            border: none;\n            background: #B3D33F;\n            color: #fff;\n        }\n    </style>\n</head>\n<body>\n<ul id="content"></ul>\n<form class="form">\n<input type="text" placeholder="请输入发送的消息" class="message" id="message"/>\n<input type="button" value="发送" id="send" class="connect"/>\n<input type="button" value="连接" id="connect" class="connect"/>\n</form>\n<script>\nvar oUl=document.getElementById(\'content\');\n    var oConnect=document.getElementById(\'connect\');\n    var oSend=document.getElementById(\'send\');\n    var oInput=document.getElementById(\'message\');\n    var ws=null;\n    oConnect.onclick=function(){\n        ws=new WebSocket(\'ws://localhost:5000\');\n         ws.onopen=function(){\n             oUl.innerHTML+="<li>客户端已连接</li>";\n         }\n        ws.onmessage=function(evt){\n            oUl.innerHTML+="<li>"+evt.data+"</li>";\n        }\n        ws.onclose=function(){\n            oUl.innerHTML+="<li>客户端已断开连接</li>";\n        };\n        ws.onerror=function(evt){\n            oUl.innerHTML+="<li>"+evt.data+"</li>";\n\n        };\n    };\n    oSend.onclick=function(){\n        if(ws){\n            ws.send(oInput.value);\n        }\n    }\n<\/script>\n</body>\n</html>\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br"),n("span",{staticClass:"line-number"},[e._v("32")]),n("br"),n("span",{staticClass:"line-number"},[e._v("33")]),n("br"),n("span",{staticClass:"line-number"},[e._v("34")]),n("br"),n("span",{staticClass:"line-number"},[e._v("35")]),n("br"),n("span",{staticClass:"line-number"},[e._v("36")]),n("br"),n("span",{staticClass:"line-number"},[e._v("37")]),n("br"),n("span",{staticClass:"line-number"},[e._v("38")]),n("br"),n("span",{staticClass:"line-number"},[e._v("39")]),n("br"),n("span",{staticClass:"line-number"},[e._v("40")]),n("br"),n("span",{staticClass:"line-number"},[e._v("41")]),n("br"),n("span",{staticClass:"line-number"},[e._v("42")]),n("br"),n("span",{staticClass:"line-number"},[e._v("43")]),n("br"),n("span",{staticClass:"line-number"},[e._v("44")]),n("br"),n("span",{staticClass:"line-number"},[e._v("45")]),n("br"),n("span",{staticClass:"line-number"},[e._v("46")]),n("br"),n("span",{staticClass:"line-number"},[e._v("47")]),n("br"),n("span",{staticClass:"line-number"},[e._v("48")]),n("br"),n("span",{staticClass:"line-number"},[e._v("49")]),n("br"),n("span",{staticClass:"line-number"},[e._v("50")]),n("br"),n("span",{staticClass:"line-number"},[e._v("51")]),n("br"),n("span",{staticClass:"line-number"},[e._v("52")]),n("br"),n("span",{staticClass:"line-number"},[e._v("53")]),n("br"),n("span",{staticClass:"line-number"},[e._v("54")]),n("br"),n("span",{staticClass:"line-number"},[e._v("55")]),n("br"),n("span",{staticClass:"line-number"},[e._v("56")]),n("br"),n("span",{staticClass:"line-number"},[e._v("57")]),n("br"),n("span",{staticClass:"line-number"},[e._v("58")]),n("br"),n("span",{staticClass:"line-number"},[e._v("59")]),n("br"),n("span",{staticClass:"line-number"},[e._v("60")]),n("br"),n("span",{staticClass:"line-number"},[e._v("61")]),n("br"),n("span",{staticClass:"line-number"},[e._v("62")]),n("br"),n("span",{staticClass:"line-number"},[e._v("63")]),n("br"),n("span",{staticClass:"line-number"},[e._v("64")]),n("br"),n("span",{staticClass:"line-number"},[e._v("65")]),n("br"),n("span",{staticClass:"line-number"},[e._v("66")]),n("br"),n("span",{staticClass:"line-number"},[e._v("67")]),n("br"),n("span",{staticClass:"line-number"},[e._v("68")]),n("br"),n("span",{staticClass:"line-number"},[e._v("69")]),n("br"),n("span",{staticClass:"line-number"},[e._v("70")]),n("br"),n("span",{staticClass:"line-number"},[e._v("71")]),n("br"),n("span",{staticClass:"line-number"},[e._v("72")]),n("br"),n("span",{staticClass:"line-number"},[e._v("73")]),n("br"),n("span",{staticClass:"line-number"},[e._v("74")]),n("br"),n("span",{staticClass:"line-number"},[e._v("75")]),n("br"),n("span",{staticClass:"line-number"},[e._v("76")]),n("br"),n("span",{staticClass:"line-number"},[e._v("77")]),n("br")])]),n("h4",{attrs:{id:"_5-2-服务端代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-服务端代码","aria-hidden":"true"}},[e._v("#")]),e._v(" 5.2 服务端代码")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var app=require('http').createServer(handler);\nvar ws=require('nodejs-websocket');\nvar fs=require('fs');\napp.listen(80);\nfunction handler(req,res){\n    fs.readFile(__dirname+'/client.html',function(err,data){\n        if(err){\n            res.writeHead(500);\n            return res.end('error ');\n        }\n        res.writeHead(200);\n        res.end(data);\n    });\n}\nvar server=ws.createServer(function(conn){\n    console.log('new conneciton');\n    conn.on(\"text\",function(str){\n        broadcast(server,str);\n    });\n    conn.on(\"close\",function(code,reason){\n        console.log('connection closed');\n    })\n}).listen(5000);\n\nfunction broadcast(server, msg) {\n    server.connections.forEach(function (conn) {\n        conn.sendText(msg);\n    })\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br")])]),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://juejin.im/post/5dd4b991e51d450818244c30",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebSocket 原理浅析与实现简单聊天"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2017/05/websocket.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebSocket 教程"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"http://www.cnblogs.com/tugenhua0707/p/8504297.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebSocket 原理与实践(一)---基本原理"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://www.cnblogs.com/chyingp/p/websocket-deep-in.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebSocket 协议：5 分钟从入门到精通"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{id:"联系作者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[e._v("#")]),e._v(" 联系作者")]),e._v(" "),n("div",{attrs:{align:"center"}},[n("p",[e._v("\n        平凡世界，贵在坚持。\n    ")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);s.default=t.exports}}]);