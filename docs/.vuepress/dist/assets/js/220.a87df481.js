(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{443:function(t,r,_){"use strict";_.r(r);var a=_(13),v=Object(a.a)({},(function(){var t=this,r=t.$createElement,_=t._self._c||r;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"从-url-输入到页面展现到底发生什么？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从-url-输入到页面展现到底发生什么？"}},[t._v("#")]),t._v(" 从 URL 输入到页面展现到底发生什么？")]),t._v(" "),_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),_("p",[t._v("打开浏览器从输入网址到网页呈现在大家面前，背后到底发生了什么？经历怎么样的一个过程？先给大家来张总体流程图，具体步骤请看下文分解！")]),t._v(" "),_("p",[_("img",{attrs:{src:"browser11.png",alt:"images"}})]),t._v(" "),_("p",[t._v("总体来说分为以下几个过程:")]),t._v(" "),_("ul",[_("li",[t._v("DNS 解析:将域名解析成 IP 地址")]),t._v(" "),_("li",[t._v("TCP 连接：TCP 三次握手")]),t._v(" "),_("li",[t._v("发送 HTTP 请求")]),t._v(" "),_("li",[t._v("服务器处理请求并返回 HTTP 报文")]),t._v(" "),_("li",[t._v("浏览器解析渲染页面")]),t._v(" "),_("li",[t._v("断开连接：TCP 四次挥手")])]),t._v(" "),_("h2",{attrs:{id:"内容"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[t._v("#")]),t._v(" 内容")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E4%B8%80%E3%80%81url-%E5%88%B0%E5%BA%95%E6%98%AF%E5%95%A5"}},[t._v("URL 到底是啥")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90%EF%BC%88dns%EF%BC%89"}},[t._v("域名解析（DNS）")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E4%B8%89%E3%80%81tcp-%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B"}},[t._v("TCP 三次握手")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E5%8F%91%E9%80%81-http-%E8%AF%B7%E6%B1%82"}},[t._v("发送 HTTP 请求")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E4%BA%94%E3%80%81%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%A4%84%E7%90%86%E8%AF%B7%E6%B1%82%E5%B9%B6%E8%BF%94%E5%9B%9E-http-%E6%8A%A5%E6%96%87"}},[t._v("服务器处理请求并返回 HTTP 报文")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E5%85%AD%E3%80%81%E6%B5%8F%E8%A7%88%E5%99%A8%E8%A7%A3%E6%9E%90%E6%B8%B2%E6%9F%93%E9%A1%B5%E9%9D%A2"}},[t._v("浏览器解析渲染页面")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E4%B8%83%E3%80%81%E6%96%AD%E5%BC%80%E8%BF%9E%E6%8E%A5"}},[t._v("断开连接")])])]),t._v(" "),_("h3",{attrs:{id:"一、url-到底是啥"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、url-到底是啥"}},[t._v("#")]),t._v(" 一、URL 到底是啥")]),t._v(" "),_("p",[t._v("URL（Uniform Resource Locator），统一资源定位符，用于定位互联网上资源，俗称网址。")]),t._v(" "),_("p",[t._v("比如 "),_("a",{attrs:{href:"http://www.w3school.com.cn/html/index.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.w3school.com.cn/html/index.asp"),_("OutboundLink")],1),t._v("，遵守以下的语法规则：")]),t._v(" "),_("p",[_("strong",[t._v("scheme://host.domain:port/path/filename")])]),t._v(" "),_("p",[t._v("各部分解释如下：")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("scheme")]),t._v(" - 定义因特网服务的类型。常见的协议有 http、https、ftp、file，其中最常见的类型是 http，而 https 则是进行加密的网络传输。")]),t._v(" "),_("li",[_("code",[t._v("host")]),t._v(" - 定义域主机（http 的默认主机是 www）")]),t._v(" "),_("li",[_("code",[t._v("domain")]),t._v(" - 定义因特网域名，比如 w3school.com.cn")]),t._v(" "),_("li",[_("code",[t._v("port")]),t._v(" - 定义主机上的端口号（http 的默认端口号是 80）")]),t._v(" "),_("li",[_("code",[t._v("path")]),t._v(" - 定义服务器上的路径（如果省略，则文档必须位于网站的根目录中）。")]),t._v(" "),_("li",[_("code",[t._v("filename")]),t._v(" - 定义文档/资源的名称")])]),t._v(" "),_("h3",{attrs:{id:"二、域名解析（dns）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、域名解析（dns）"}},[t._v("#")]),t._v(" 二、域名解析（DNS）")]),t._v(" "),_("p",[t._v("在浏览器输入网址后，首先要经过域名解析，因为浏览器并不能直接通过域名找到对应的服务器，而是要通过 IP 地址。")]),t._v(" "),_("h4",{attrs:{id:"_2-1-ip-地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-ip-地址"}},[t._v("#")]),t._v(" 2.1 IP 地址")]),t._v(" "),_("p",[t._v("IP 地址是指互联网协议地址，是 IP Address 的缩写，IP 地址是 IP 协议提供的一种统一的地址格式，它为互联网上的每一个网络和每一台主机分配一个逻辑地址，以此来屏蔽物理地址的差异。IP 地址是一个 32 位的二进制数，比如"),_("code",[t._v("127.0.0.1")]),t._v("为本机 IP。")]),t._v(" "),_("p",[t._v("**域名就相当于 IP 地址乔装打扮的伪装者，带着一副面具。它的作用就是便于记忆沟通的一组服务器的地址。**用户通常使用主机名或域名来访问对方的计算机，而不是直接通过 IP 地址访问。"),_("strong",[t._v("因为与 IP 地址的一组纯数字相比")])]),t._v(" "),_("h4",{attrs:{id:"_2-2-什么是域名解析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-什么是域名解析"}},[t._v("#")]),t._v(" 2.2 什么是域名解析")]),t._v(" "),_("p",[t._v("DNS 协议提供通过域名查找 IP 地址，域逆向从 IP 地址反查域名的服务。"),_("strong",[t._v("DNS 是一个网络服务器，我们的域名解析简单来说就是在 DNS 上记录一条信息记录。")])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("例如 baidu.com  220.114.23.56（服务器外网IP地址）80（服务器端口号）\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("h4",{attrs:{id:"_2-3-浏览器如何通过域名去查询-url-对应的-ip-呢"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-浏览器如何通过域名去查询-url-对应的-ip-呢"}},[t._v("#")]),t._v(" 2.3 浏览器如何通过域名去查询 URL 对应的 IP 呢")]),t._v(" "),_("ul",[_("li",[t._v("浏览器缓存：浏览器会按照一定的频率缓存 DNS 记录。")]),t._v(" "),_("li",[t._v("操作系统缓存：如果浏览器缓存中找不到需要的 DNS 记录，那就去操作系统中找。")]),t._v(" "),_("li",[t._v("路由缓存：路由器也有 DNS 缓存。")]),t._v(" "),_("li",[t._v("ISP 的 DNS 服务器：ISP 是互联网服务提供商(Internet Service Provider)的简称，ISP 有专门的 DNS 服务器应对 DNS 查询请求。")]),t._v(" "),_("li",[t._v("根服务器：ISP 的 DNS 服务器还找不到的话，它就会向根服务器发出请求，进行递归查询（DNS 服务器先问根域名服务器.com 域名服务器的 IP 地址，然后再问.baidu 域名服务器，依次类推）")])]),t._v(" "),_("p",[_("img",{attrs:{src:"browser14.png",alt:"images"}})]),t._v(" "),_("h4",{attrs:{id:"_2-4-小结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-小结"}},[t._v("#")]),t._v(" 2.4 小结")]),t._v(" "),_("p",[_("strong",[t._v("浏览器通过向 DNS 服务器发送域名，DNS 服务器查询到与域名相对应的 IP 地址，然后返回给浏览器，浏览器再将 IP 地址打在协议上，同时请求参数也会在协议搭载，然后一并发送给对应的服务器。接下来介绍向服务器发送 HTTP 请求阶段，HTTP 请求分为三个部分：TCP 三次握手、http 请求响应信息、关闭 TCP 连接。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"browser15.png",alt:"images"}})]),t._v(" "),_("h3",{attrs:{id:"三、tcp-三次握手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、tcp-三次握手"}},[t._v("#")]),t._v(" 三、TCP 三次握手")]),t._v(" "),_("p",[t._v("参考"),_("a",{attrs:{href:"https://km.xiaowuzi.info/cs/tcp.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP 与 UDP"),_("OutboundLink")],1)]),t._v(" "),_("h3",{attrs:{id:"四、发送-http-请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、发送-http-请求"}},[t._v("#")]),t._v(" 四、发送 HTTP 请求")]),t._v(" "),_("p",[_("strong",[t._v("TCP 三次结束后，开始发送 HTTP 请求报文。")])]),t._v(" "),_("p",[t._v("请求报文由请求行（request line）、请求头（header）、请求休息三个部分组成，如下图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"browser13.png",alt:"images"}})]),t._v(" "),_("p",[t._v("参考"),_("a",{attrs:{href:"https://km.xiaowuzi.info/cs/http.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http 详情"),_("OutboundLink")],1)]),t._v(" "),_("h3",{attrs:{id:"五、服务器处理请求并返回-http-报文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、服务器处理请求并返回-http-报文"}},[t._v("#")]),t._v(" 五、服务器处理请求并返回 HTTP 报文")]),t._v(" "),_("h4",{attrs:{id:"_5-1-服务器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-服务器"}},[t._v("#")]),t._v(" 5.1 服务器")]),t._v(" "),_("p",[t._v("服务器是网络环境中的高性能计算机，它侦听网络上的其他计算机（客户机）提交的服务请求，并提供相应的服务，比如网页服务、文件下载服务、邮件服务、视频服务。而客户端主要的功能是浏览网页、看视频、听音乐等等，两者截然不同。每台服务器上都会安装处理请求的应用——web server。常见的 web server 产品有 apache、nginx、IIS 或 Lighttpd 等。")]),t._v(" "),_("p",[t._v("**web server 担任管控的角色，**对于不同用户发送的请求，会结合配置文件，把不同请求委托给服务器上处理相应请求的程序进行处理（例如 CG 脚本、JSP 脚本，servlets，ASP 脚本，服务端 JavaScript，或者一些其它的服务器端技术等），然后返回程序处理产生的结果作为响应。")]),t._v(" "),_("p",[_("img",{attrs:{src:"browser16.png",alt:"images"}})]),t._v(" "),_("h4",{attrs:{id:"_5-2-mvc-后台处理阶段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-mvc-后台处理阶段"}},[t._v("#")]),t._v(" 5.2 MVC 后台处理阶段")]),t._v(" "),_("p",[t._v("后台开发现在有很多框架，但大部分")]),t._v(" "),_("p",[_("img",{attrs:{src:"browser17.png",alt:"images"}})]),t._v(" "),_("p",[_("strong",[t._v("视图")])]),t._v(" "),_("p",[t._v("它是提供给用户的操作界面，是程序的外壳。")]),t._v(" "),_("p",[_("strong",[t._v("模型")])]),t._v(" "),_("p",[_("strong",[t._v("模型主要负责数据交互。")]),t._v(" 在 MVC 的三个部件中，模型拥有最多的处理任务。一个模型能为多个视图提供数据。")]),t._v(" "),_("p",[_("strong",[t._v("控制器")])]),t._v(" "),_("p",[t._v("**它负责根据用户从“视图层”输入的指令，选取“模型层”中的数据，然后对其进行相应的操作，产生最终结果。**控制器属于管理者角色，从视图接收请求并决定调用哪个模型构件去处理请求，然后再确定用哪个视图来显示模型处理返回的数据。")]),t._v(" "),_("p",[t._v("这三层是紧密联系在一起的，但又是互相独立的，每一层内部的变化不影响其他层。每一层都对外提供接口（Interface），供上面一层调用。")]),t._v(" "),_("p",[t._v("至于这一阶段发生什么？简而言之，"),_("strong",[t._v("首先浏览器发送过来的请求先经过控制器，控制器进行逻辑处理和请求分发，接着会调用模型，这一阶段模型会获取 redis db 以及 MySQL 的数据，获取数据后将渲染好的页面，响应信息会以响应报文的形式返回给客户端，最后浏览器通过渲染引擎将网页呈现在用户面前")]),t._v("。")]),t._v(" "),_("h4",{attrs:{id:"_5-3-http-响应报文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-http-响应报文"}},[t._v("#")]),t._v(" 5.3 http 响应报文")]),t._v(" "),_("p",[t._v("响应报文由响应行（request line）、响应头部（header）、响应主体三个部分组成。如下图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"browser18.png",alt:"images"}})]),t._v(" "),_("p",[t._v("(1)响应行包含：协议版本，状态码，状态码描述")]),t._v(" "),_("p",[t._v("状态码规则如下：")]),t._v(" "),_("p",[t._v("1xx：指示信息--表示请求已接收，继续处理。\n2xx：成功--表示请求已被成功接收、理解、接受。\n3xx：重定向--要完成请求必须进行更进一步的操作。\n4xx：客户端错误--请求有语法错误或请求无法实现。\n5xx：服务器端错误--服务器未能实现合法的请求。")]),t._v(" "),_("p",[t._v("(2) 响应头部包含响应报文的附加信息，由 名/值 对组成")]),t._v(" "),_("p",[t._v("(3) 响应主体包含回车符、换行符和响应返回数据，并不是所有响应报文都有响应数据")]),t._v(" "),_("h3",{attrs:{id:"六、浏览器解析渲染页面"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#六、浏览器解析渲染页面"}},[t._v("#")]),t._v(" 六、浏览器解析渲染页面")]),t._v(" "),_("p",[t._v("浏览器拿到响应文本 HTML 后，接下来介绍下浏览器渲染机制")]),t._v(" "),_("p",[_("img",{attrs:{src:"browser12.png",alt:"images"}})]),t._v(" "),_("p",[t._v("浏览器解析渲染页面分为以下五个步骤：")]),t._v(" "),_("ul",[_("li",[t._v("根据 HTML 解析出 DOM 树")]),t._v(" "),_("li",[t._v("根据 CSS 解析生成 CSS 规则树")]),t._v(" "),_("li",[t._v("结合 DOM 树和 CSS 规则树、生成渲染树")]),t._v(" "),_("li",[t._v("根据渲染树计算每一个节点的信息")]),t._v(" "),_("li",[t._v("根据计算好的信息绘制页面")])]),t._v(" "),_("h4",{attrs:{id:"_6-1-根据-html-解析-dom-树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-根据-html-解析-dom-树"}},[t._v("#")]),t._v(" 6.1 根据 HTML 解析 DOM 树")]),t._v(" "),_("ul",[_("li",[t._v("根据 HTML 的内容，将标签按照结构解析成为 DOM 树，DOM 树解析的过程是一个深度优先遍历。即赞构建当前节点的所有子节点，再构建下一个兄弟节点。")]),t._v(" "),_("li",[t._v("在读取 HTML 文档，构建 DOM 树的过程中，若遇到 script 标签，则 DOM 树的构建会暂停，直至脚本执行完毕。")])]),t._v(" "),_("h4",{attrs:{id:"_6-2-根据-css-解析生成-css-规则树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-根据-css-解析生成-css-规则树"}},[t._v("#")]),t._v(" 6.2 根据 CSS 解析生成 CSS 规则树")]),t._v(" "),_("ul",[_("li",[t._v("解析 CSS 规则树时 js 执行将暂停，直至 CSS 规则树就绪。")]),t._v(" "),_("li",[t._v("浏览器在 CSS 规则树生成之前不会进行渲染。")])]),t._v(" "),_("h4",{attrs:{id:"_6-3-结合-dom-树和-css-规则树、生成渲染树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-结合-dom-树和-css-规则树、生成渲染树"}},[t._v("#")]),t._v(" 6.3 结合 DOM 树和 CSS 规则树、生成渲染树")]),t._v(" "),_("ul",[_("li",[t._v("DOM 树和 CSS 规则树全部准备好了以后，浏览器才会开始构建渲染树。")]),t._v(" "),_("li",[t._v("精简 CSS 并可以加快 CSS 规则树的构建，从而加快页面相应速度。")])]),t._v(" "),_("h4",{attrs:{id:"_6-4-根据渲染树计算每一个节点的信息（布局）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-根据渲染树计算每一个节点的信息（布局）"}},[t._v("#")]),t._v(" 6.4 根据渲染树计算每一个节点的信息（布局）")]),t._v(" "),_("ul",[_("li",[t._v("布局：通过渲染树中渲染的信息，计算出每一个渲染对象的做位置和尺寸。")]),t._v(" "),_("li",[t._v("回流：在布局完成后，发现了某个部分发生了变化影响了布局，那就需要倒回去重新渲染。")])]),t._v(" "),_("h4",{attrs:{id:"_6-5-根据计算好的信息绘制页面"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-根据计算好的信息绘制页面"}},[t._v("#")]),t._v(" 6.5 根据计算好的信息绘制页面")]),t._v(" "),_("ul",[_("li",[t._v("绘制阶段，系统会遍历呈现树，并调用呈现器的“paint”方法，奖呈现器")]),t._v(" "),_("li",[t._v("重绘：某个元素的背影颜色，文字颜色等，不影响元素周围或内部布局的属性，将只会引起浏览器的重绘。")]),t._v(" "),_("li",[t._v("回流：某个元素的尺寸发生了变化，则需重计算渲染树，重新渲染。")])]),t._v(" "),_("h3",{attrs:{id:"七、断开连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#七、断开连接"}},[t._v("#")]),t._v(" 七、断开连接")]),t._v(" "),_("p",[t._v("参考"),_("a",{attrs:{href:"https://km.xiaowuzi.info/cs/tcp.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP 与 UDP"),_("OutboundLink")],1)]),t._v(" "),_("h3",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://github.com/ljianshu/Blog/issues/24",target:"_blank",rel:"noopener noreferrer"}},[t._v("从 URL 输入到页面展现到底发生什么？"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://juejin.im/post/5df5bcea6fb9a016091def69#heading-24",target:"_blank",rel:"noopener noreferrer"}},[t._v("说一说从输入 URL 到页面呈现发生了什么？"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://time.geekbang.org/column/article/117637",target:"_blank",rel:"noopener noreferrer"}},[t._v("04 | 导航流程：从输入 URL 到页面展示，这中间发生了什么？"),_("OutboundLink")],1)]),t._v(" "),_("li",[t._v("《网络是怎么连接的》")]),t._v(" "),_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s/DLq_GIkdnuOayThfi3jI0A",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官：浏览器输入 URL 后发生了什么？"),_("OutboundLink")],1)])]),t._v(" "),_("h2",{attrs:{id:"联系作者"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#联系作者"}},[t._v("#")]),t._v(" 联系作者")]),t._v(" "),_("div",{attrs:{align:"center"}},[_("p",[t._v("\n        平凡世界，贵在坚持。\n    ")]),t._v(" "),_("img",{attrs:{src:t.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);r.default=v.exports}}]);