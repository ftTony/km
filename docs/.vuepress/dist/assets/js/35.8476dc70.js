(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{261:function(t,e,a){"use strict";a.r(e);var v=a(4),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http-详情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-详情","aria-hidden":"true"}},[t._v("#")]),t._v(" http 详情")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),t._v(" "),a("h2",{attrs:{id:"内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 内容")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%B8%80%E3%80%81http%E7%9A%84%E5%AE%9A%E4%B9%89%E5%92%8C%E5%8E%86%E5%8F%B2"}},[t._v("http 的定义和历史")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%8C%E3%80%81http%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B"}},[t._v("http 三次握手")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E4%B8%89%E3%80%81http%E7%9A%84%E4%B8%BB%E8%A6%81%E7%89%B9%E7%82%B9"}},[t._v("http 的主要特点")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%9B%9B%E3%80%81http%E8%AF%B7%E6%B1%82%E8%AF%A6%E8%A7%A3"}},[t._v("http 请求详解")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%94%E3%80%81http%E5%93%8D%E5%BA%94%E8%AF%A6%E8%A7%A3"}},[t._v("http 响应详解")])])]),t._v(" "),a("h3",{attrs:{id:"一、http-的定义和历史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、http-的定义和历史","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、http 的定义和历史")]),t._v(" "),a("p",[t._v("HTTP 是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用于分布式超媒体信息系统。它于 1990 年提出，经过几年的使用与发展，得到不断地完善和扩展。目前已经经历了四个版本，分别是 http0.9，http1.0,http1.1 及去年刚发布的 http2.0。")]),t._v(" "),a("h3",{attrs:{id:"二、http-三次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、http-三次握手","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、http 三次握手")]),t._v(" "),a("p",[t._v("HTTP 是基于传输层的 TCP 协议，而 TCP 是一个端到端的面向连接的协议。所谓的端到端可以理解为进程到进程之间的通信.")]),t._v(" "),a("p",[a("img",{attrs:{src:"http01.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"三、http-的主要特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、http-的主要特点","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、http 的主要特点")]),t._v(" "),a("ol",[a("li",[t._v("支持客户/服务器模式")]),t._v(" "),a("li",[a("strong",[t._v("简单快速：")]),t._v(" 客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有 GET、HEAD、POST。每种方法规定了客户与服务器联系的类型不同。由于 HTTP 协议简单，使得 HTTP 服务器的程序规模小，因而通信速度很快。")]),t._v(" "),a("li",[a("strong",[t._v("灵活：")]),t._v(" http 允许传轮任意类型的数据对象。正在传输的类型由 Content-Type 加以标记。")]),t._v(" "),a("li",[a("strong",[t._v("无连接：")]),t._v(" HTTP 协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。")])]),t._v(" "),a("h3",{attrs:{id:"四、http-请求详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、http-请求详解","aria-hidden":"true"}},[t._v("#")]),t._v(" 四、http 请求详解")]),t._v(" "),a("p",[t._v("http 请求由三部分组成，分别是：请求行、消息报头、请求正文\n"),a("img",{attrs:{src:"http02.png",alt:"http-resource-3"}})]),t._v(" "),a("p",[a("strong",[t._v("http 的请求方法：")]),t._v(" "),a("code",[t._v("GET")]),t._v("、"),a("code",[t._v("POST")]),t._v("、"),a("code",[t._v("HEAD")]),t._v("、"),a("code",[t._v("PUT")]),t._v("、"),a("code",[t._v("DELETE")]),t._v("、"),a("code",[t._v("TRACE")]),t._v("、"),a("code",[t._v("CONNECT")]),t._v("、"),a("code",[t._v("OPTIONS")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("GET")]),t._v("：请求获取 Request-URI 所标识的资源")]),t._v(" "),a("li",[a("code",[t._v("POST")]),t._v("：在 Request-URI 所标识的资源后附加新的数据")]),t._v(" "),a("li",[a("code",[t._v("HEAD")]),t._v("：请求获取由 Request-URI 所标识的资源的响应消息报头")]),t._v(" "),a("li",[a("code",[t._v("PUT")]),t._v("：请求服务器存储一个资源，并用 Request-URI 作为其标识")]),t._v(" "),a("li",[a("code",[t._v("DELETE")]),t._v("：请求服务器删除 Request-URI 所标识的资源")]),t._v(" "),a("li",[a("code",[t._v("TRACE")]),t._v("：请求服务器回送收到的请求信息，主要用于测试或诊断")]),t._v(" "),a("li",[a("code",[t._v("CONNECT")]),t._v("：保留将来使用")]),t._v(" "),a("li",[a("code",[t._v("OPTIONS")]),t._v("：请求查询服务器的性能，或者查询与资源相关的选项和需求")])]),t._v(" "),a("p",[a("strong",[t._v("HTTP 请求由三部分组成：")]),t._v(" 请求行、http 头、内容")]),t._v(" "),a("ul",[a("li",[t._v("请求行内容如下："),a("code",[t._v("GET www.cnblogs.com HTTP/1.1")]),t._v("请求行写法是固定的，由三部分组成，第一部分是请求方法，第二部分是请求网址，第三部分是 HTTP 版本。")]),t._v(" "),a("li",[t._v("第二部分 HTTP 头在 HTTP 请求可以是 3 种 HTTP 头：1.请求头(request header) 2.普通头(general header) 3.实体头(entity header) 通常来说，由于 Get 请求往往不包含内容实体，因此也不会有实体头。")]),t._v(" "),a("li",[t._v("第三部分内容只在 POST 请求中存在，因为 GET 请求并不包含任何实体。")])]),t._v(" "),a("p",[t._v("完整的 http 请求图如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http03.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"请求报文示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求报文示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求报文示例")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("GET / HTTP/1.1\nHost: www.baidu.com\nConnection: keep-alive\nCache-Control: max-age=0\nUpgrade-Insecure-Requests: 1\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.110 Safari/537.36\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8\nAccept-Encoding: gzip, deflate, sdch, br\nAccept-Language: zh-CN,zh;q=0.8,en;q=0.6,id;q=0.4\nCookie: PSTM=1490844191; BIDUPSID=2145FF54639208435F60E1E165379255; BAIDUID=CFA344942EE2E0EE081D8B13B5C847F9:FG=1;\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h4",{attrs:{id:"请求行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求行","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求行")]),t._v(" "),a("p",[t._v("请求行由请求方法、URL 和 HTTP 协议版本组成，它们之间用空格分开。")]),t._v(" "),a("p",[a("code",[t._v("GET / HTTP/1.1")])]),t._v(" "),a("h4",{attrs:{id:"请求头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求头","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求头")]),t._v(" "),a("p",[t._v("请求头由 key-value 对组成，每行一对，key (键) 和 value (值)用英文冒号 : 分隔。请求头通知服务器有关于客户端请求的信息，典型的请求头有：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("User-Agent")]),t._v("：用户代理信息 - "),a("code",[t._v("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36")]),t._v(" ...")]),t._v(" "),a("li",[a("code",[t._v("Accept")]),t._v("：客户端可识别的内容类型列表 - text/html,application/xhtml+xml,application/xml")]),t._v(" "),a("li",[a("code",[t._v("Accept-Language")]),t._v("：客户端可接受的自然语言 - zh-CN,zh;q=0.8,en;q=0.6,id;q=0.4")]),t._v(" "),a("li",[a("code",[t._v("Accept-Encoding")]),t._v("：客户端可接受的编码压缩格式 - gzip, deflate, sdch, br")]),t._v(" "),a("li",[a("code",[t._v("Host")]),t._v("：请求的主机名，允许多个域名同处一个 IP 地址，即虚拟主机 - www.baidu.com")]),t._v(" "),a("li",[a("code",[t._v("connection")]),t._v("：连接方式")]),t._v(" "),a("li",[a("code",[t._v("close")]),t._v("：告诉 WEB 服务器或代理服务器，在完成本次请求的响应后，断开连接")]),t._v(" "),a("li",[a("code",[t._v("keep-alive")]),t._v("：告诉 WEB 服务器或代理服务器。在完成本次请求的响应后，保持连接，以等待后续请求")]),t._v(" "),a("li",[a("code",[t._v("Cookie")]),t._v("：存储于客户端扩展字段，向同一域名的服务端发送属于该域的 cookie - PSTM=1490844191; BIDUPSID=2145FF54639208435F60E1E165379255;")])]),t._v(" "),a("h4",{attrs:{id:"空行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空行","aria-hidden":"true"}},[t._v("#")]),t._v(" 空行")]),t._v(" "),a("p",[t._v("最后一个请求头之后是一个空行，发送回车符和换行符，通知服务器以下不再有请求头。")]),t._v(" "),a("h4",{attrs:{id:"请求体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求体","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求体")]),t._v(" "),a("p",[t._v("请求数据不在 GET 方法中使用，而是在 POST 方法中使用。与请求数据相关的最常使用的请求头是 Content-Type 和 Content-Length。")]),t._v(" "),a("h3",{attrs:{id:"五、http-响应详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、http-响应详解","aria-hidden":"true"}},[t._v("#")]),t._v(" 五、http 响应详解")]),t._v(" "),a("p",[t._v("当 Web 服务器收到 HTTP 请求后，会根据请求的信息做某些处理(这些处理可能仅仅是静态的返回页，或是包含 Asp.net,PHP,Jsp 等语言进行处理后返回)，相应的返回一个 HTTP 响应。HTTP 响应在结构上很类似于 HTTP 请求,也是由三部分组成，分别为:状态行 HTTP 头 返回内容")]),t._v(" "),a("p",[a("img",{attrs:{src:"http04.png",alt:""}})]),t._v(" "),a("p",[t._v("响应报文示例")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("HTTP/1.1 200 OK\nServer: bfe/1.0.8.18\nDate: Thu, 30 Mar 2017 12:28:00 GMT\nContent-Type: text/html; charset=utf-8\nConnection: keep-alive\nCache-Control: private\nExpires: Thu, 30 Mar 2017 12:27:43 GMT\nSet-Cookie: BDSVRTM=0; path=/\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h4",{attrs:{id:"状态行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态行","aria-hidden":"true"}},[t._v("#")]),t._v(" 状态行")]),t._v(" "),a("p",[t._v("状态行格式： "),a("code",[t._v("HTTP-Version")]),t._v("、"),a("code",[t._v("Status-Code")]),t._v("、"),a("code",[t._v("Reason-Phrase")]),t._v("、"),a("code",[t._v("CRLF")])]),t._v(" "),a("ol",[a("li",[a("code",[t._v("HTTP-Version")]),t._v(" - HTTP 协议版本")]),t._v(" "),a("li",[a("code",[t._v("Status-Code")]),t._v(" - 状态码")]),t._v(" "),a("li",[a("code",[t._v("Reason-Phrase")]),t._v(" - 状态码描述")]),t._v(" "),a("li",[a("code",[t._v("CRLF")]),t._v(" - 回车/换行符")])]),t._v(" "),a("h4",{attrs:{id:"响应头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应头","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应头")]),t._v(" "),a("p",[t._v("响应头由 key-value 对组成，每行一对，key (键) 和 value (值)用英文冒号 : 分隔。响应头域允许服务器传递不能放在状态行的附加信息，这些域主要描述服务器的信息和 Request-URI 进一步的信息，典型的响应头有：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Server")]),t._v("：包含处理请求的原始服务器的软件信息")]),t._v(" "),a("li",[a("code",[t._v("Date")]),t._v("：服务器日期")]),t._v(" "),a("li",[a("code",[t._v("Content-Type")]),t._v("：返回的资源类型 (MIME)")]),t._v(" "),a("li",[a("code",[t._v("Connection")]),t._v("：连接方式")]),t._v(" "),a("li",[a("code",[t._v("close")]),t._v("：连接已经关闭")]),t._v(" "),a("li",[a("code",[t._v("keep-alive")]),t._v("：连接已保持，在等待本次连接的后续请求")]),t._v(" "),a("li",[a("code",[t._v("Cache-Control")]),t._v("：缓存控制")]),t._v(" "),a("li",[a("code",[t._v("Expires")]),t._v("：设置过期时间")]),t._v(" "),a("li",[a("code",[t._v("Set-Cookie")]),t._v("：设置 Cookie 信息")])]),t._v(" "),a("h4",{attrs:{id:"空行-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空行-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 空行")]),t._v(" "),a("p",[t._v("最后一个响应头之后是一个空行，发送回车符和换行符，通知浏览器以下不再有响应头。")]),t._v(" "),a("h4",{attrs:{id:"响应体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应体","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应体")]),t._v(" "),a("p",[t._v("服务器返回给浏览器的响应信息，下面是百度首页的响应体片段：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<!DOCTYPE html>\n\x3c!--STATUS OK--\x3e\n<html>\n<head>\n    <meta http-equiv="content-type" content="text/html;charset=utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=Edge">\n    <link rel="icon" sizes="any" mask href="//www.baidu.com/img/baidu.svg">\n    <title>百度一下，你就知道</title>\n</head>\n<body>\n  ...\n</body>\n</html>\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("h4",{attrs:{id:"状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态码","aria-hidden":"true"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),a("p",[t._v("状态代码由三位数字组成，第一个数字定义了响应的类别，且有五种可能取值：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("1xx")]),t._v("：指示信息 – 表示请求已接收，继续处理")]),t._v(" "),a("li",[a("code",[t._v("2xx")]),t._v("：成功 – 表示请求已被成功接收")]),t._v(" "),a("li",[a("code",[t._v("3xx")]),t._v("：重定向 – 要完成请求必须进行更进一步的操作")]),t._v(" "),a("li",[a("code",[t._v("4xx")]),t._v("：客户端错误 – 请求有语法错误或请求无法实现")]),t._v(" "),a("li",[a("code",[t._v("5xx")]),t._v("：服务器错误 – 服务器未能实现合法的请求")])]),t._v(" "),a("p",[t._v("常见状态代码、状态描述的说明如下：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("200 OK")]),t._v("：客户端请求成功")]),t._v(" "),a("li",[a("code",[t._v("204 No Content")]),t._v("：没有新文档，浏览器应该继续显示原来的文档")]),t._v(" "),a("li",[a("code",[t._v("206 Partial Content")]),t._v("：客户发送了一个带有 Range 头的 GET 请求，服务器完成了它")]),t._v(" "),a("li",[a("code",[t._v("301 Moved Permanently")]),t._v("：所请求的页面已经转移至新的 url")]),t._v(" "),a("li",[a("code",[t._v("302 Found")]),t._v("：所请求的页面已经临时转移至新的 url")]),t._v(" "),a("li",[a("code",[t._v("304 Not Modified")]),t._v("：客户端有缓冲的文档并发出了一个条件性的请求，服务器告诉客户，原来缓冲的文档还可以继续使用。")]),t._v(" "),a("li",[a("code",[t._v("400 Bad Request")]),t._v("：客户端请求有语法错误，不能被服务器所理解")]),t._v(" "),a("li",[a("code",[t._v("401 Unauthorized")]),t._v("：请求未经授权，这个状态代码必须和 WWW-Authenticate 报头域一起使用")]),t._v(" "),a("li",[a("code",[t._v("403 Forbidden")]),t._v("：对被请求页面的访问被禁止")]),t._v(" "),a("li",[a("code",[t._v("404 Not Found")]),t._v("：请求资源不存在")]),t._v(" "),a("li",[a("code",[t._v("500 Internal Server Error")]),t._v("：服务器发生不可预期的错误")]),t._v(" "),a("li",[a("code",[t._v("503 Server Unavailable")]),t._v("：请求未完成，服务器临时过载或当机，一段时间后可能恢复正常")])]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.cnblogs.com/CareySon/archive/2012/04/27/HTTP-Protocol.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 协议漫淡"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.cnblogs.com/li0803/archive/2008/11/03/1324746.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http 协议详解"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/semlinker/awesome-http#http-%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("http 协议"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5e76bd516fb9a07cce750746",target:"_blank",rel:"noopener noreferrer"}},[t._v("（建议精读）HTTP 灵魂之问，巩固你的 HTTP 知识体系"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("《图解 http》")])]),t._v(" "),a("h2",{attrs:{id:"联系作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[t._v("#")]),t._v(" 联系作者")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("p",[t._v("\n        平凡世界，贵在坚持。\n    ")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);e.default=_.exports}}]);