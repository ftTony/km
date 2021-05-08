(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{422:function(a,t,e){"use strict";e.r(t);var s=e(4),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"rpc-调用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rpc-调用","aria-hidden":"true"}},[a._v("#")]),a._v(" RPC 调用")]),a._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),e("p",[a._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),a._v(" "),e("h2",{attrs:{id:"内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E4%B8%80%E3%80%81-rpc-%E4%BB%8B%E7%BB%8D"}},[a._v("RPC 介绍")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BA%8C%E3%80%81-rpc-%E4%B8%8E-ajax-%E5%8F%8A-http-%E7%9A%84%E5%8C%BA%E5%88%AB"}},[a._v("RPC 与 AJAX 及 HTTP 的区别")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E4%B8%89%E3%80%81rpc-%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86"}},[a._v("RPC 基本原理")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E7%AE%80%E5%8D%95-rpc-%E9%80%9A%E4%BF%A1%E5%8D%8F%E8%AE%AE%E8%AE%BE%E8%AE%A1"}},[a._v("简单 RPC 通信协议设计")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BA%94%E3%80%81nodejs-%E5%AE%9E%E7%8E%B0-rpc-%E9%80%9A%E8%AE%AF%E5%8D%8F%E8%AE%AE"}},[a._v("Nodejs 实现 RPC 通讯协议")])])]),a._v(" "),e("h3",{attrs:{id:"一、-rpc-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、-rpc-介绍","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、 RPC 介绍")]),a._v(" "),e("p",[a._v("RPC 中文名"),e("strong",[a._v("远程过程调用")]),a._v("，拆开理解，"),e("strong",[a._v("过程")]),a._v("也叫方法或函数，"),e("strong",[a._v("远程")]),a._v("就是说方法不当前进程里，而是在其他进程或机器上面，合起来 RPC 就是调用其他进程或机器上面的函数。简单讲，就是本地调用的逻辑处理的过程放在的远程的机器上，而不是本地服务代理来处理。一个完整的 RPC 框架主要有三部分组成：通信框架、通信协议、序列化和反序列化格式。")]),a._v(" "),e("h3",{attrs:{id:"二、-rpc-与-ajax-及-http-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、-rpc-与-ajax-及-http-的区别","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、 RPC 与 AJAX 及 HTTP 的区别")]),a._v(" "),e("h4",{attrs:{id:"_2-1-与-ajax-对比相同点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-与-ajax-对比相同点","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.1 与 Ajax 对比相同点")]),a._v(" "),e("ul",[e("li",[a._v("都是两个计算机之间的网络通信，Ajax 是浏览器和服务器通信，RPC 是服务器和服务器通信")]),a._v(" "),e("li",[a._v("都需要双方约定一个数据格式")])]),a._v(" "),e("h4",{attrs:{id:"_2-2-与-ajax-对比不同点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-与-ajax-对比不同点","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.2 与 Ajax 对比不同点")]),a._v(" "),e("ul",[e("li",[a._v("RPC 调用不一定使用 DNS 作为寻址服务，Ajax 一般是浏览器向服务器请求，请求地址一般是"),e("code",[a._v("https://域名/xxx")]),a._v("，服务器需要根据域名区寻找对应的 IP 地址，这就是 DNS 寻址过程，而 RPC 一般用在内网之间互相请求，一般使用特有服务进行寻址。")]),a._v(" "),e("li",[a._v("RPC 应用层协议一般不使用 HTTP，一般使用一些二进制协议，其优点是数据包体积更小、编解码速率更快。")]),a._v(" "),e("li",[a._v("RPC 基于 TCP 或 UDP 协议，其中 TCP 通信又存在多种通信方式单工通信(两个服务器之间，只允许单向发送消息，如只能 A 给 B 发消息)、半双工通信(两个服务器之间，同一时间只允许单向发送消息，如时间段一 A 发给 B，时间段二 B 发给 A，又称为轮番单工通信)、全双工通信(可以自由互相发送消息)。")])]),a._v(" "),e("h4",{attrs:{id:"_2-3-rpc-与-http-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-rpc-与-http-区别","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.3 RPC 与 HTTP 区别")]),a._v(" "),e("ul",[e("li",[a._v("RPC 通常所讲是一个框架，而 HTTP 是基于 TCP 的实现的超文本传输协议，HTTP 是无状态协议；最初用于浏览器与服务器的通信，后来广泛用于各个服务间的通信。")]),a._v(" "),e("li",[a._v("RPC 是远程过程调用，RPC 框架的通信过程可以使用各种通信协议（如 HTTP，TCP 以及各种自定义协议）实现。良好的 rpc 调用是面向服务的封装，针对服务的可用性和效率等都做了优化。单纯使用 http 调用则缺少了这些特性。")])]),a._v(" "),e("h3",{attrs:{id:"三、rpc-基本原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、rpc-基本原理","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、RPC 基本原理")]),a._v(" "),e("p",[a._v("首先来看看一个基于 TCP 的 RPC 调用的基本流程，以便对它有个宏观的认识。")]),a._v(" "),e("ol",[e("li",[a._v("调用方（Client）通过本地的 RPC 代理（Proxy）调用相应的接口")]),a._v(" "),e("li",[a._v("本地代理将 RPC 的服务名，方法名和参数等等信息转换成一个标准的 RPC Request 对象，即组装成能够进行网络传输的消息体")]),a._v(" "),e("li",[a._v("RPC 框架采用 RPC 协议（RPC Protocol）将 RPC Request 对象序列化成二进制形式，然后通过 TCP 通道传递给服务提供方（Server）")]),a._v(" "),e("li",[a._v("服务端（Server）收到二进制数据后，将它反序列化成 RPC Request 对象（解码）")]),a._v(" "),e("li",[a._v("服务端（Server）根据 RPC Request 中的解码信息找到本地对应的方法，传入参数执行，得到结果，并将结果封装成 RPC Response 交给 RPC 框架")]),a._v(" "),e("li",[a._v("RPC 框架将 RPC Response 对象序列化成二进制形式，然后通过 TCP 通道传递给服务调用方（Client）")]),a._v(" "),e("li",[a._v("调用方（Clinet）收到二进制数据后，将它反序列化成 RPC Response 对象，并且将结果通过本地代理（Proxy）返回给业务代码")]),a._v(" "),e("li",[a._v("调用方（Client）得到最终结果。")])]),a._v(" "),e("p",[a._v("RPC 的目标就是要将 2~8 这些步骤都封装起来，让用户对这些细节透明。")]),a._v(" "),e("h3",{attrs:{id:"四、简单-rpc-通信协议设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、简单-rpc-通信协议设计","aria-hidden":"true"}},[a._v("#")]),a._v(" 四、简单 RPC 通信协议设计")]),a._v(" "),e("p",[a._v("通常它由一个 Header 和一个 Payload（类似于 HTTP 的 Boby）组成，合起来叫一个包（Packet）。之所以要有包，是因为二进制只完成 Stream 的传输，并不知道一次数据请求和响应的起始和结束，我们需要预先定义好包结构才能做解析。")]),a._v(" "),e("p",[a._v("协议设计就像把一个数据包按顺序切分成若干个单位长度的「小格子」，然后约定每个「小格子」里存储什么样的信息，一个「小格子」就是一个 Byte，它是协议设计的最小单位，1Byte 是 8Bit，可以描述 0 ~ 2^8 个字节数，具体使用多少个字节要看实际存储的信息。")]),a._v(" "),e("p",[a._v("简单包结构设计：")]),a._v(" "),e("ul",[e("li",[a._v("标记包的类型，比如：0 表示请求，1 表示响应，需要一个 Byte")]),a._v(" "),e("li",[a._v("关联 ID，将请求和它对应的响应关联起来，这个 ID 我们选择用一个 Int32 类型（4 Bytes）自增的数字表示")]),a._v(" "),e("li",[a._v("Payload 长度记录，要能实现包的准确切割，我们需要明确包的长度，用 4 个 Byte")]),a._v(" "),e("li",[a._v("应用层协议类型标记，一个 Byte")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("0      1      2      3      4      5      6      7      8      9     10\n+------+------+------+------+------+------+------+------+------+------+\n| type |          requestId        | codec|         bodyLength        |\n+------+---------------------------+------+---------------------------+\n|                  ...          payload                               |\n|                                                     ...             |\n+---------------------------------------------------------------------+\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("p",[a._v("这已经是可以工作的 RPC 通讯协议了，但随着 RPC 功能的增加我们可能需要记录更多的信息，这里就不说了。可以自行再了解。")]),a._v(" "),e("h3",{attrs:{id:"五、nodejs-实现-rpc-通讯协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、nodejs-实现-rpc-通讯协议","aria-hidden":"true"}},[a._v("#")]),a._v(" 五、Nodejs 实现 RPC 通讯协议")]),a._v(" "),e("p",[a._v("Nodejs 中有个 Buffer 模块，可以提供对二进制数据的操作。所以我们可以用来进行二进制的编码和解码，结合上面的通信协议，可以写出编码和解码部分代码。")]),a._v(" "),e("h4",{attrs:{id:"_5-1-简单编码部分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-简单编码部分","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.1 简单编码部分")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 编码\nconst payload = {\n  service: 'com.test',\n  methodName: 'plus',\n  args: [ 1, 2 ],\n};\nconst body = new Buffer(JSON.stringify(payload));\n\nconst header = new Buffer(10);\nheader[0] = 0;\nheader.writeInt32BE(1000, 1);\nheader[5] = 1; // codec => 1 代表是 JSON 序列化\nheader.writeInt32BE(body.length, 6);\n\nconst packet = Buffer.concat([ header, body ], 10 + body.length);\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br")])]),e("h4",{attrs:{id:"_5-2-简单解码部分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-简单解码部分","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.2 简单解码部分")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 解码\nconst type = buf[0]; // => 0 (request)\nconst requestId = buf.readInt32BE(1); // => 1000\nconst codec = buf[5];\nconst bodyLength = buf.readInt32BE(6);\n\nconst body = buf.slice(10, 10 + bodyLength);\nconst payload = JSON.parse(body);\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br")])]),e("h3",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://shopee-sc.github.io/blog/2019/11/22/rpc",target:"_blank",rel:"noopener noreferrer"}},[a._v("Nodejs 之 RPC 调研"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/38012481",target:"_blank",rel:"noopener noreferrer"}},[a._v("聊聊 Node.js RPC（一）— 协议"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/40606909",target:"_blank",rel:"noopener noreferrer"}},[a._v("聊聊 Node.js RPC（二）— 服务发现"),e("OutboundLink")],1)])]),a._v(" "),e("h2",{attrs:{id:"联系作者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),e("div",{attrs:{align:"center"}},[e("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),e("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);t.default=r.exports}}]);