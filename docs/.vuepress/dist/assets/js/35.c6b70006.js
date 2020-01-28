(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{305:function(s,t,n){"use strict";n.r(t);var a=n(4),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"http2-详情"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http2-详情","aria-hidden":"true"}},[s._v("#")]),s._v(" http2 详情")]),s._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),s._v(" "),n("h2",{attrs:{id:"内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E4%B8%80%E3%80%81http%E5%8F%91%E5%B1%95%E5%8F%B2"}},[s._v("http 发展史")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%8C%E3%80%81http1.x%E5%AD%98%E5%9C%A8%E7%9A%84%E9%97%AE%E9%A2%98"}},[s._v("http1.x 存在的问题")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%B8%89%E3%80%81HTTP2%E6%96%B0%E5%A2%9E%E5%8A%A0%E5%8A%9F%E8%83%BD"}},[s._v("HTTP2 新增加功能")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E6%80%BB%E7%BB%93"}},[s._v("总结")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%94%E3%80%81Nginx%E9%85%8D%E7%BD%AEhttp2"}},[s._v("nginx 配置 HTTP2")])])]),s._v(" "),n("h3",{attrs:{id:"一、http-发展史"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、http-发展史","aria-hidden":"true"}},[s._v("#")]),s._v(" 一、http 发展史")]),s._v(" "),n("p",[n("img",{attrs:{src:"http2-01.jpeg",alt:""}})]),s._v(" "),n("h3",{attrs:{id:"二、http1-x-存在的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、http1-x-存在的问题","aria-hidden":"true"}},[s._v("#")]),s._v(" 二、http1.x 存在的问题")]),s._v(" "),n("ul",[n("li",[s._v("协议规定客户端对同一域的迸发连接最多只能 2 个（浏览器实现一般 2~8 个），但是现代网页平均一个页面需要加载 40 个资源。")]),s._v(" "),n("li",[s._v("线头阻塞问题：同一个连接中的请求，需要一个接一个串行发送和接收")]),s._v(" "),n("li",[s._v("基于文本协议，请求和响应的头信息非常大，并且无法压缩。")]),s._v(" "),n("li",[s._v("不能控制响应优先级，必须按照请求顺序响应。")]),s._v(" "),n("li",[s._v("只能单向请求，也就是客户端请求什么，服务器只能返回什么。")])]),s._v(" "),n("h3",{attrs:{id:"三、http2-新增加功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、http2-新增加功能","aria-hidden":"true"}},[s._v("#")]),s._v(" 三、HTTP2 新增加功能")]),s._v(" "),n("ul",[n("li",[s._v("二进制分帧")]),s._v(" "),n("li",[s._v("首部压缩")]),s._v(" "),n("li",[s._v("http2 支持服务器推送")]),s._v(" "),n("li",[s._v("多路复用（Multiplexing）和流")]),s._v(" "),n("li",[s._v("优先级与依赖性")])]),s._v(" "),n("h4",{attrs:{id:"_3-1-二进制分帧"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-二进制分帧","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.1 二进制分帧")]),s._v(" "),n("p",[s._v("HTTP2 在维持原有 HTTP 范式的前提下，实现突破性能限制，改进传输性能，实现低延迟和高吞吐量的其中一个关键是：**在应用层（HTTP2）和传输层（TCP or UDP）**之间增加了二进分帧层。\n"),n("img",{attrs:{src:"http2-02.png",alt:"images"}})]),s._v(" "),n("p",[s._v("帧（Frame）是 HTTP2 通讯中的最小传输单位，所有帧以固定的 9 个八位字节头部开头，随后是一个可变长度的有效载荷")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("帧结构图\n +-----------------------------------------------+\n |                 长度Length (24)                |\n +---------------+---------------+---------------+\n |   类型Type (8)    |   标志Flags (8)   |\n +-+-------------+---------------+-------------------------------+\n |R|                 流标识符Stream Identifier (31)               |\n +=+=============================================================+\n |                   帧载荷Frame Payload (0...)                 ...\n +---------------------------------------------------------------+\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("规范中一共定义了 10 个不同的帧，其中最基础的两种分别对应于 HTTP1.x 的 DATA 和 HEADERS。")]),s._v(" "),n("p",[s._v("一个真正的 HTTP2 请求类似下图：")]),s._v(" "),n("p",[n("img",{attrs:{src:"http2-03.png",alt:"images"}})]),s._v(" "),n("h4",{attrs:{id:"_3-2-首部压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-首部压缩","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.2 首部压缩")]),s._v(" "),n("p",[s._v("我们都知道"),n("strong",[s._v("HTTP 协议本身是无状态")]),s._v("的：每个请求之间"),n("strong",[s._v("互不关联")]),s._v("，每个请求都需要携带服务器所需要的所有细节信息。比如说请求 1 发送服务器信息“我是用户 A”，然后请求二发送信息“修改我的用户名为 XX”，这时如果请求二没有携带“我是用户 A”的信息，那么服务器是不知道要修改用户的用户名的。")]),s._v(" "),n("p",[s._v("这显然是不符合当前 web 应用系统架构的，因为一般系统都需要进行鉴权，日志记录，安全校验等限制，所以需要获取当前操作用户的信息，出于安全和性能考虑我们不能在消息体中明文包含这些信息，\bHTTP2 之前的解决方案一般是使用 Cookies 头、服务器 session 等方式模拟出“状态”。而 \b 使用 Cookies 头的缺点就是每个请求都需要携带庞大的重复的信息并且无法压缩，假设一个请求的 header 是 2kb，那么一百个请求就是重复的 200Kb 信息，这是一个巨大的带宽浪费。")]),s._v(" "),n("p",[s._v("HTTP2 增加了两个特性解决上述问题：")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://link.juejin.im/?target=http%3A%2F%2Fhttp2.github.io%2Fhttp2-spec%2Fcompression.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("HPACK"),n("OutboundLink")],1),s._v("，专门为头部压缩设计的算法，还被指定成单独的草案中。")])]),s._v(" "),n("p",[n("img",{attrs:{src:"http2-04.png",alt:"images"}})]),s._v(" "),n("ul",[n("li",[s._v("首部表，HTTP2 在户端和服务器端使用“首部表”来跟踪和存储之前发送的键-值对，对于相同的数据，不再通过每次请求和响应发送；通信期间几乎不会改变的通用键-值对（用户代理、可接受的媒体类型，等等）只需发送一次。")])]),s._v(" "),n("p",[n("img",{attrs:{src:"http2-05.png",alt:"images"}})]),s._v(" "),n("h4",{attrs:{id:"_3-3-http2-支持服务器推送"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-http2-支持服务器推送","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.3 http2 支持服务器推送")]),s._v(" "),n("p",[s._v("这个功能通常被称作“缓存推送（cache push）”。主要的思想是：当一个客户端请求资源 X，而服务器知道它很可能也需要资源 Z 的情况下，服务器可以在客户端发送请求 Z 前，主动将资源 Z 推送给客户端。这个功能帮助客户端将 Z 放进缓存以备将来之需。\n服务器推送需要客户端显式的允许服务器提供该功能。但即使如此，客户端依然能自主选择是否需要中断该推送的流。如果不需要的话，客户端可以通过发送一个 RST_STREAM 帧来中止推送。\n\b 我们来看一下实际场景：现在我们访问一个网站，第一个请求一般是获取 Document 页面，然后浏览器解析这个页面，在遇到需要资源获取的时候（css、js、图片等），再去发起资源获取请求，如下图：")]),s._v(" "),n("p",[n("img",{attrs:{src:"http2-06.png",alt:"162b00acdd76dd1f"}})]),s._v(" "),n("p",[s._v("为了加速这个过程，减少白屏时间，传统的做法是把首页需要的资源都内联到 Document 中，还有合并资源比如 CSS sprites，js 压缩合并等。如下图：")]),s._v(" "),n("p",[n("img",{attrs:{src:"http2-07.png",alt:"162b00ad267dee2d"}})]),s._v(" "),n("p",[s._v("在 HTTP2 的场景下，客户端 \b 在请求 Document 的时候，服务器如果知道页面需要的资源有哪些，就可以把那些资源也一同返回了：")]),s._v(" "),n("p",[n("img",{attrs:{src:"http2-08.png",alt:"162b00ad297f1b6d"}})]),s._v(" "),n("p",[s._v("使用 HTTP2 的多路复用和服务器推送功能，并不意味着可以减少甚至抛弃使用 CDN，因为 CDN 带来的现实地理位置上延迟减少是 \b HTTP2 所不能解决的，反而我们应该思考的是如何把 HTTP2 和 CDN 结合起来，进一步提升网络服务的效率和稳定性，减少延迟。")]),s._v(" "),n("h4",{attrs:{id:"_3-4-多路复用（multiplexing）和流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-多路复用（multiplexing）和流","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.4 多路复用（Multiplexing）和流")]),s._v(" "),n("blockquote",[n("p",[s._v("上一节提到的 Stream Identifier 将 HTTP2 连接上传输的每个帧都关联到一个“流”。流是一个独立的，双向的帧序列，可以通过一个 HTTP2 的连接在服务端与客户端之间不断的交换数据。\n每个单独的 \bHTTP2 连接都可以包含多个并发的流，这些流中交错的包含着来自两端的帧。流既可以被客户端/服务器端单方面的建立和使用，也可以被双方共享，或者被任意一边关闭。在流里面，每一帧发送的顺序非常关键。接收方会按照收到帧的顺序来进行处理。")])]),s._v(" "),n("p",[s._v("“流”是一个逻辑上的概念（没有真正传输流这么个东西），是 HTTP2 连接中在客户端和服务器之间交换的独立双向帧序列，这就是为什么在规范中的 \bstream 也是用双引号括起来的原因。从上一节我们可以知道，HTTP2 的传输单位是帧，流其实就是一个帧的分组集合的概念，为什么需要这个逻辑集合呢？答案就在多路复用。")]),s._v(" "),n("p",[s._v("多路复用是解决 HTTP1.x 缺陷第一点（并发问题）和第二点（HOLB 线头问题）的核心技术点。")]),s._v(" "),n("h4",{attrs:{id:"_3-5-优先级与依赖性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-优先级与依赖性","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.5 优先级与依赖性")]),s._v(" "),n("p",[s._v("每个流都包含一个优先级（也就是“权重”），它被用来告诉对端哪个流更重要。当资源有限的时候，服务器会根据优先级来选择应该先发送哪些流。")]),s._v(" "),n("p",[s._v("借助于 PRIORITY 帧，客户端同样可以告知服务器当前的流依赖于其他哪个流。该功能让客户端能建立一个优先级“树”，所有“子流”会依赖于“父流”的传输完成情况。\n优先级和依赖关系可以在传输过程中被动态的改变。这样当用户滚动一个全是图片的页面的时候，浏览器就能够指定哪个图片拥有更高的优先级。或者是在你切换标签页的时候，浏览器可以提升新切换到页面所包含流的优先级。")]),s._v(" "),n("h4",{attrs:{id:"_3-6-浏览器与服务器已经对-http2-协议提供了支持"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-浏览器与服务器已经对-http2-协议提供了支持","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.6 浏览器与服务器已经对 http2 协议提供了支持")]),s._v(" "),n("p",[n("img",{attrs:{src:"http2-09.png",alt:"162b00ac006aa53c"}})]),s._v(" "),n("h3",{attrs:{id:"四、总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、总结","aria-hidden":"true"}},[s._v("#")]),s._v(" 四、总结")]),s._v(" "),n("p",[s._v("HTTP2 能带来的好处：")]),s._v(" "),n("ol",[n("li",[s._v("更小的传输体积，更小或者省略重复的头消息")]),s._v(" "),n("li",[s._v("突破原有的 TCP 连接并发限制，使用一个 TCP 连接即可实现多请求并发，单链接也能减轻服务端的压力（更少的内存和 CPU 使用）")]),s._v(" "),n("li",[s._v("解决 HOLB 线头问题，慢的请求或者先发送的请求不会阻塞其他请求的返回")]),s._v(" "),n("li",[s._v("结合 CDN 提供实时性更高，延迟更低的内容分发代理服务，大大减少白屏时间")]),s._v(" "),n("li",[s._v("数据传输优先级可控，使网站可以实现更灵活和强大的页面控制")]),s._v(" "),n("li",[s._v("能在不中断 TCP 连接的情况下停止（重置）数据的发送")])]),s._v(" "),n("h3",{attrs:{id:"五、nginx-配置-http2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、nginx-配置-http2","aria-hidden":"true"}},[s._v("#")]),s._v(" 五、Nginx 配置 http2")]),s._v(" "),n("h4",{attrs:{id:"_5-1-安装-openssl-1-1-0c"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-安装-openssl-1-1-0c","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.1 安装 openssl-1.1.0c")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cd /root\n\nwget https://www.openssl.org/source/openssl-1.1.0c.tar.gz\n\ntar -zxf openssl-1.1.0c.tar.gz\n\ncd openssl-1.1.0c\n\n./config\n\nmake\n\nmake install\n\n\n#把旧版本的openssl重命名\nmv /usr/bin/openssl /usr/bin/openssl.bak\nmv /usr/include/openssl /usr/include/openssl.bak\n\n#设置软连接指向刚编译好的新版本的openssl-1.1.0c\nln -s /usr/local/bin/openssl /usr/bin/openssl\nln -s /usr/local/include/openssl /usr/include/openssl\n#如果是1.0.2h版本 生成的文件的位置在/usr/local/ssl\n\n#添加libssl.so.1.1的软链接\nln -s /usr/local/lib64/libssl.so.1.1 /usr/lib64/libssl.so.1.1\nln -s /usr/local/lib64/libcrypto.so.1.1 /usr/lib64/libcrypto.so.1.1\n\n#查看openssl版本\nopenssl version\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("h4",{attrs:{id:"_5-2-平滑升级-nginx-到最新的稳定版"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-平滑升级-nginx-到最新的稳定版","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.2 平滑升级 nginx 到最新的稳定版")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#下载nginx最新版\ncd /root\nwget http://nginx.org/download/nginx-1.10.2.tar.gz\n#解压源码\ntar zxvf nginx-1.10.2.tar.gz\n#进入源码目录\ncd nginx-1.10.2\n\n#加上所需参数开始编译\n./configure --user=www --group=www --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module --with-http_v2_module --with-http_gzip_static_module --with-ipv6 --with-http_sub_module --with-openssl=/root/openssl-1.1.0c #对应openssl源码解压后的路径\n\n#执行make编译，但是不要执行make install\n\nmake\n\n#重命名nginx旧版本二进制文件，即sbin目录下的nginx（期间nginx并不会停止服务）\nmv /usr/local/nginx/sbin/nginx /usr/local/nginx/sbin/nginx.old\n\n#然后拷贝一份新编译的二进制文件\ncp objs/nginx /usr/local/nginx/sbin/\n#在源码目录执行make upgrade开始升级\nmake upgrade\n\n#完成后查看下版本\nnginx -V\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("h4",{attrs:{id:"_5-3-配置-http2-0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-配置-http2-0","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.3 配置 http2.0")]),s._v(" "),n("p",[s._v("配置 Nginx 开启 http 2.0 特别简单，只要在 Nginx 配置文件中找到你要开启 http2.0 的域名 server 模块，然后将 listen 443 ssl;改成 listen 443 ssl http2; 即可。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("server {\n\n\tlisten 443 ssl http2;\n\tserver_name domain.com;\n\n\tssl_certificate /path/to/public.crt;\n\tssl_certificate_key /path/to/private.key;\n\n\tssl_protocols TLSv1 TLSv1.1 TLSv1.2; #允许的协议\n\tssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5; #加密算法(CloudFlare 推荐的加密套件组)\n\tssl_prefer_server_ciphers on; #优化 SSL 加密套件\n\tssl_session_timeout 10m; #客户端会话缓存时间\n\tssl_session_cache builtin:1000 shared:SSL:10m; #SSL 会话缓存类型和大小\n\tssl_buffer_size 1400; # 1400 bytes to fit in one MTU\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h3",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://juejin.im/post/5acccf966fb9a028d043c6ec",target:"_blank",rel:"noopener noreferrer"}},[s._v("HTTP2 基本概念学习笔记"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/aFGMPhL3PpjGS4ZKtypeSQ",target:"_blank",rel:"noopener noreferrer"}},[s._v("【第 505 期】谈谈 HTTP/2 对前端的影响"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/entry/57fa127d816dfa0056b7d710",target:"_blank",rel:"noopener noreferrer"}},[s._v("HTTP 2.0 的那些事"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1027523",target:"_blank",rel:"noopener noreferrer"}},[s._v("openssl 版本升级操作记录"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/29609078",target:"_blank",rel:"noopener noreferrer"}},[s._v("怎样把网站升级到 http/2"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/entry/5b5ae460e51d45195423ecca",target:"_blank",rel:"noopener noreferrer"}},[s._v("升级 Nginx 开启 HTTP/2"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/5jR7MrWQ9v3w_E8BhNWrpA",target:"_blank",rel:"noopener noreferrer"}},[s._v("解密 HTTP/2 与 HTTP/3 的新特性"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/qBD90RdofvYDNX2sSJWgNA",target:"_blank",rel:"noopener noreferrer"}},[s._v("HTTP/3 要点"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/XCmUsAAY4uoXKLV7H6v0KQ",target:"_blank",rel:"noopener noreferrer"}},[s._v("【第 515 期】HTTPS, SPDY 和 HTTP/2 性能的简单对比"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"联系作者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),n("div",{attrs:{align:"center"}},[n("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),n("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);t.default=e.exports}}]);