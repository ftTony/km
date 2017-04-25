(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{440:function(t,a,_){"use strict";_.r(a);var r=_(4),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"tcp-与-udp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-与-udp","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP 与 UDP")]),t._v(" "),_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),_("p",[t._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),t._v(" "),_("h2",{attrs:{id:"内容"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 内容")]),t._v(" "),_("ul",[_("li",[t._v("TCP")]),t._v(" "),_("li",[t._v("UDP")]),t._v(" "),_("li",[t._v("TCP 与 UDP 区别")])]),t._v(" "),_("h3",{attrs:{id:"一、tcp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、tcp","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、TCP")]),t._v(" "),_("h4",{attrs:{id:"_1-1-tcp-首部格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-tcp-首部格式","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1 TCP 首部格式")]),t._v(" "),_("p",[_("img",{attrs:{src:"tcp-head.png",alt:"images"}})]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("序号 seq")]),t._v("：用于对字节流进行编号，例如序号为 301，表示第一个字节的编号为 301，如果携带的数据长度为 100 字节，那么下一个报文段的序号应为 401。[301,400]为序号 301 的数据长度，下一个则为 401")]),t._v(" "),_("li",[_("strong",[t._v("确认号 ack")]),t._v("：")]),t._v(" "),_("li",[_("strong",[t._v("数据偏移")]),t._v("：")]),t._v(" "),_("li",[_("strong",[t._v("确认 ACK")]),t._v("：")]),t._v(" "),_("li",[_("strong",[t._v("同步 SYN")]),t._v("：")]),t._v(" "),_("li",[_("strong",[t._v("终止 FIN")]),t._v("：用来释放一个连接，当 FIN=1 时，表示此报文段的发送方的数据已发送完毕，并要求释放连接。")]),t._v(" "),_("li",[_("strong",[t._v("窗口")]),t._v("：窗口值作为接收方让发送方设置其发送窗口的依据。")])]),t._v(" "),_("h4",{attrs:{id:"_1-2-三次握手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-三次握手","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2 三次握手")]),t._v(" "),_("p",[_("img",{attrs:{src:"tcp-3.png",alt:"images"}})]),t._v(" "),_("p",[_("strong",[t._v("假设 A 为客户端，B 为服务器端。")])]),t._v(" "),_("ul",[_("li",[t._v("首先 B 处于 LISTEN（监听）状态，等待客户的连接请求。")]),t._v(" "),_("li",[t._v("A 向 B 发送连接请求报文段，SYN=1，ACK=0，选择一个初始的序号 seq=x。")]),t._v(" "),_("li",[t._v("B 收到连接请求报文段，如果同意建立连接，则向 A 发送连接确认报文段，SYN=1，ACK=1，确认号为 x+1，同时也选择一个初始的序号 seq=y。")])]),t._v(" "),_("h4",{attrs:{id:"_1-3-为什么-tcp-连接需要三次握手，两次不可以吗，为什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-为什么-tcp-连接需要三次握手，两次不可以吗，为什么","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.3 为什么 TCP 连接需要三次握手，两次不可以吗，为什么")]),t._v(" "),_("p",[_("strong",[t._v("为了防止已失效的连接请求报文段突然又传送到了服务端，占用服务器资源。（假设主机 A 为客户端，主机 B 为服务器端）")])]),t._v(" "),_("h4",{attrs:{id:"_1-4-四次挥手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-四次挥手","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.4 四次挥手")]),t._v(" "),_("p",[_("img",{attrs:{src:"tcp-4.png",alt:"images"}})]),t._v(" "),_("h4",{attrs:{id:"_1-5-四次挥手的原因"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-四次挥手的原因","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.5 四次挥手的原因")]),t._v(" "),_("p",[t._v("客户端发送了 FIN 连接释放报文之后，服务器收到了这个报文，就进入了 CLOSE-WAIT 状态。这个状态是为了让服务器端发送还未传送完毕的数据，传送完毕之后，服务器会发送 FIN 连接释放报文。")]),t._v(" "),_("h4",{attrs:{id:"_1-6-如何保证可靠传输"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-如何保证可靠传输","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.6 如何保证可靠传输")]),t._v(" "),_("ul",[_("li",[t._v("应用数据被分割成 TCP 认为最适合发送的数据块。")]),t._v(" "),_("li",[_("strong",[t._v("超时重传")]),t._v("：当 TCP 发出一个段后，它启动一个定时器，等待目的端确认收到这个报文段。如果不能及时收到一个确认，将重发这个报文段。")]),t._v(" "),_("li",[t._v("TCP 给发送的每个包进行编号，接收方对数据包进行排序，把有序数据传送给应用层。")]),t._v(" "),_("li",[_("strong",[t._v("检验和")]),t._v("：TCP 将保持它首部和数据的检验和。这是一个端到端的检验和，目的是检测数据在传输过程中的任何变化。如果收到段的检验和有差错，TCP 将丢弃这个报文段和不确认收到此报文段。")]),t._v(" "),_("li",[t._v("TCP 的接收端会丢弃重复的数据。")]),t._v(" "),_("li",[_("strong",[t._v("流量控制")]),t._v("：")]),t._v(" "),_("li",[_("strong",[t._v("拥塞控制")]),t._v("：")])]),t._v(" "),_("h4",{attrs:{id:"_1-7-tcp-连接状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-tcp-连接状态","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.7 TCP 连接状态")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("CLOSED")]),t._v("：初始状态。")]),t._v(" "),_("li",[_("code",[t._v("LISTEN")]),t._v("：服务器处于监听状态。")]),t._v(" "),_("li",[_("code",[t._v("SYN_SEND")]),t._v("：")]),t._v(" "),_("li",[_("code",[t._v("SYN_RECV")]),t._v("：")]),t._v(" "),_("li",[_("code",[t._v("ESTABLISH")]),t._v("：")]),t._v(" "),_("li",[_("code",[t._v("FIN_WAIT_1")]),t._v("：")]),t._v(" "),_("li",[_("code",[t._v("CLOSE_WAIT")]),t._v("：")]),t._v(" "),_("li",[_("code",[t._v("FIN_WAIT_2")]),t._v("：")]),t._v(" "),_("li",[_("code",[t._v("LAST_ACK")]),t._v("：")]),t._v(" "),_("li",[_("code",[t._v("TIME_WAIT")]),t._v("：")])]),t._v(" "),_("h4",{attrs:{id:"_1-8-tcp-滑动窗口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-tcp-滑动窗口","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.8 TCP 滑动窗口")]),t._v(" "),_("h4",{attrs:{id:"_1-9-tcp-流量控制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-9-tcp-流量控制","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.9 TCP 流量控制")]),t._v(" "),_("h4",{attrs:{id:"_1-10-tcp-拥塞处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-10-tcp-拥塞处理","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.10 TCP 拥塞处理")]),t._v(" "),_("h4",{attrs:{id:"_1-11-如何区分流量控制和拥塞控制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-11-如何区分流量控制和拥塞控制","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.11 如何区分流量控制和拥塞控制")]),t._v(" "),_("h3",{attrs:{id:"二、udp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、udp","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、UDP")]),t._v(" "),_("p",[t._v("用户数据报协议 UDP，是面向无连接的通讯协议，是无连接的，尽最大可能交付，没有拥塞控制，面向报文（对于应用程序传下来的报文不合并也不拆分，只是添加 UDP 首部），支持一对一、一对多、多对一和多对多的交互通信。UDP 通讯时不需要接收方确认，属于不可靠的传输，可能会出现丢包现象，实际应用中要求程序员编程验证。例如：视频传输、实时通信。")]),t._v(" "),_("h4",{attrs:{id:"_2-1-udp-首部格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-udp-首部格式","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1 UDP 首部格式")]),t._v(" "),_("p",[_("img",{attrs:{src:"net-udp.png",alt:"images"}})]),t._v(" "),_("p",[t._v("首部字段只有 8 个字节，包括源端口、目的端口、长度、检验和。12 字节的伪首部是为了计算检验和临时添加的。")]),t._v(" "),_("h3",{attrs:{id:"三、tcp-与-udp-区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、tcp-与-udp-区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、TCP 与 UDP 区别")]),t._v(" "),_("ul",[_("li",[t._v("UDP 是无连接的，即发送数据之前不需要建立连接。")]),t._v(" "),_("li",[t._v("UDP 使用尽最大努力将会，即不保证可靠将会，同时也不使用拥塞控制。")]),t._v(" "),_("li",[t._v("UDP 是面向报文的。UDP 没有拥塞控制，很适合多媒体通信的要求。")]),t._v(" "),_("li",[t._v("UDP 支持一对一、一对多、多对一和多对多的交互通信。")]),t._v(" "),_("li",[t._v("UDP 的首部开销小，只有 8 个字节。")]),t._v(" "),_("li",[t._v("TCP 是面向连接的传输层协议。")]),t._v(" "),_("li",[t._v("每一条 TCP 连接只能有两个端点，每一条 TCP 连接只能是点对点的（一对一）。")]),t._v(" "),_("li",[t._v("TCP 提供可靠交付的服务。")]),t._v(" "),_("li",[t._v("TCP 提供全双工通信。")]),t._v(" "),_("li",[t._v("TCP 是面向字节流。")]),t._v(" "),_("li",[t._v("首部最低 20 个字节。")])]),t._v(" "),_("h3",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://www.cnblogs.com/zhehan54/p/6204767.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP/IP 详解学习笔记"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s/WI9045Sd7gRsE-WZ5x8tcA",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官，不要再问我三次握手和四次挥手"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s/rWkD5ktlJDxcNFJ-5NH1eQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP 三次握手和四次挥手"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s/KCEgz5FqQ44Vt3iUREJmaA",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官问:TCP 为啥要 3 次握手和 4 次挥手？握两次手不行吗？"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/93586950",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官问我：一个 TCP 连接可以发多少个 HTTP 请求？竟答不上来"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s/HNrY1sMk14_ogqCZ8s_2sw",target:"_blank",rel:"noopener noreferrer"}},[t._v("动画：用动画给面试官解释 TCP 三次握手过程"),_("OutboundLink")],1)])]),t._v(" "),_("h2",{attrs:{id:"联系作者"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[t._v("#")]),t._v(" 联系作者")]),t._v(" "),_("div",{attrs:{align:"center"}},[_("p",[t._v("\n        平凡世界，贵在坚持。\n    ")]),t._v(" "),_("img",{attrs:{src:t.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);a.default=v.exports}}]);