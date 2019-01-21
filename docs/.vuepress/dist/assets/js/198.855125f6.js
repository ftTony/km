(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{252:function(t,a,e){"use strict";e.r(a);var s=e(4),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"xss-攻击"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xss-攻击","aria-hidden":"true"}},[t._v("#")]),t._v(" XSS 攻击")]),t._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),t._v(" "),e("h2",{attrs:{id:"内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 内容")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E4%BB%80%E4%B9%88%E6%98%AF-xss-%E6%94%BB%E5%87%BB"}},[t._v("什么是 XSS 攻击")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BA%8C%E3%80%81xss-%E6%94%BB%E5%87%BB%E6%96%B9%E5%BC%8F"}},[t._v("XSS 攻击方式")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E4%B8%89%E3%80%81xss-%E7%9A%84%E5%8D%B1%E5%AE%B3"}},[t._v("XSS 的危害")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E5%9B%9B-%E3%80%81xss-%E9%98%B2%E5%BE%A1%E6%8E%AA%E6%96%BD"}},[t._v("XSS 防御措施")])])]),t._v(" "),e("h3",{attrs:{id:"一、什么是-xss-攻击"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是-xss-攻击","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、什么是 XSS 攻击")]),t._v(" "),e("p",[t._v("跨站点脚本（Cross-site scripting，XSS）是一种允许攻击者在另一个用户的浏览器中执行恶意脚本的脚本注入式攻击。")]),t._v(" "),e("h3",{attrs:{id:"二、xss-攻击方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、xss-攻击方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、XSS 攻击方式")]),t._v(" "),e("ol",[e("li",[t._v("反射型")])]),t._v(" "),e("p",[e("code",[t._v("将用户输入的存在XSS攻击的数据，发送给后台，后台并未对数据进行存储，也未经过任何过滤，直接返回给客户端。被浏览器渲染。就可能导致XSS攻击；")])]),t._v(" "),e("p",[t._v("例一：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("http://www.xss.com?x=<script>alert('xss')<\/script>\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("示例图")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/xss/eb141420f5d5638711537444b863eb76_r.jpg",alt:""}})]),t._v(" "),e("p",[t._v("攻击者构造了一个包含恶意文本的 URL 发送给受害者")]),t._v(" "),e("p",[t._v("受害者被攻击者欺骗，通过访问这个 URL 向网站发出请求")]),t._v(" "),e("p",[t._v("网站给受害者的返回中包含了来自 URL 的的恶意文本")]),t._v(" "),e("p",[t._v("受害者的浏览器执行了来自返回中的恶意脚本，把受害者的 cookie 发送给攻击者的服务器")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("存储型")])]),t._v(" "),e("p",[e("code",[t._v("数据库中存有的存在XSS攻击的数据，返回给客户端。若数据未经过任何转义。被浏览器渲染。就可能导致XSS攻击；")])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("基于 DOM 的 XSS 攻击")])]),t._v(" "),e("p",[e("code",[t._v("与前面两种不一样的地方是不需要提交到服务器中，可直接在浏览器中执行")])]),t._v(" "),e("p",[t._v("常见的输入输出点可利用下面这些：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//常见的输入点：\ndocument.URL\ndocument.URLUnencoded\ndocument.location(and many of its properties)\ndocument.referrer\nwindow.location(and many of its properties)\n//常见的输出点：\ndocument.write(…)\ndocument.writeln(…)\ndocument.body.innerHtml = …\n//直接修改DOM树：\ndocument.forms[0].action = … (and various other collections)\ndocument.attachEvent(…)\ndocument.create…(…)\ndocument.execCommand(…)\ndocument.body.…(accessing the DOM through the body object)\nwindow.attachEvent(…)\n//替换document URL：\ndocument.location = … (and assigning to location’ s href, host and hostname)\ndocument.location.hostname = …\ndocument.location.replace(…)\ndocument.location.assign(…)\ndocument.URL = …\nwindow.navigate(…)\n//打开或修改新窗口：\ndocument.open(…)\nwindow.open(…)\nwindow.location.href = … (and assigning to location’ s href, host and hostname)\n//直接执行脚本：\neval(…)\nwindow.execScript(…)\nwindow.setInterval(…)\nwindow.setTimeout(…)\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br")])]),t._v(" "),e("h3",{attrs:{id:"三、xss-的危害"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、xss-的危害","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、XSS 的危害")]),t._v(" "),e("ol",[e("li",[t._v("挂马")])]),t._v(" "),e("p",[t._v("所谓挂马就是通过各种方法获得网站管理员账号，然后登陆网站后台，网页挂马可通过嵌入 iframe 实现")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("盗取用户 COOKIE")])]),t._v(" "),e("p",[t._v("骑过“document.cookie”读取 cookie 信息，发起劫持，可直接通过加密的 cookie 登录凭证登录登陆用户的账户。")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("DDOS（Distributed Denial of Service）分布式拒绝攻击")])]),t._v(" "),e("p",[t._v("在目标流星器中注入 Ajax 请求的代码，Ajax 请求的响应有同源策略的限制，但请求不会，所以可以同时发起请求攻击。")]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("钓鱼攻击")])]),t._v(" "),e("p",[t._v("在网页中，伪造真实的登录框，欺骗用户登录时，账号密码就会被盗取。")]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("劫持用户 web 行为")])]),t._v(" "),e("p",[t._v("网站的很多操作是可以 http 的 get 或 post 请求完成的，攻击者可通过代码发起这两种请求，例如构造 form、ajax 等。")]),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[t._v("XSS Worm（蠕虫）")])]),t._v(" "),e("p",[t._v("当被攻击用户查看存在 XSS 蠕虫代码的内容时，蠕虫触发并开始感染传播。")]),t._v(" "),e("p",[t._v("用户之间发生交互行为的页面，存在存储型 XSS，比较容易发起 XSS Worm 攻击。")]),t._v(" "),e("h3",{attrs:{id:"四-、xss-防御措施"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-、xss-防御措施","aria-hidden":"true"}},[t._v("#")]),t._v(" 四 、XSS 防御措施")]),t._v(" "),e("h4",{attrs:{id:"_4-1-httponly"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-httponly","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.1 HttpOnly")]),t._v(" "),e("p",[t._v("浏览器将禁止页面的 JS 访问带有 HttpOnly 属性的 Cookie。此属性解决的是 XSS 后的 Cookie 劫持攻击。")]),t._v(" "),e("p",[t._v("Cookie 的使用过程大致如下：")]),t._v(" "),e("ol",[e("li",[t._v("浏览器向服务器发起请求")]),t._v(" "),e("li",[t._v("服务器响应后发送 Set-Cookie 头（此时可设置 HttpOnly），向客户端浏览器写入 Cookie")]),t._v(" "),e("li",[t._v("浏览器访问该域下的所有页面都将发送该 Cookie（只要 Cookie 还没过期）")])]),t._v(" "),e("p",[t._v("PHP 代码：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<?php\nheader("Set-Cookie: hidden=value; httpOnly");\n\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h4",{attrs:{id:"_4-2-输入检查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-输入检查","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.2 输入检查")]),t._v(" "),e("p",[t._v("在服务器与客户端添加验证规则，在特定的地方使用特定的规则，例如不匹配“script 标签或<、>特殊符号”等。")]),t._v(" "),e("p",[t._v("启用“白名单原则”，可用于标签、属性或事件，只让正常的“a、div”等标签通过。")]),t._v(" "),e("p",[t._v("下面是"),e("a",{attrs:{href:"https://code.google.com/archive/p/domxsswiki/wikis/FindingDOMXSS.wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("FindingDOMXSS"),e("OutboundLink")],1),t._v("中对输入点（sources）的匹配规则：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n/(location\\s*[\\[.])|([.\\[]\\s*[\"']?\\s*(arguments|dialogArguments|innerHTML|write(ln)?\n|open(Dialog)?|showModalDialog|cookie|URL|documentURI|baseURI|referrer|\nname|opener|parent|top|content|self|frames)\\W)|(localStorage|sessionStorage|Database)/\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("字符串类型的数据，需要针对<、>、/、’、”、&五个字符进行实体化转义。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/xss/640.webp",alt:""}})]),t._v(" "),e("h4",{attrs:{id:"_4-3-转出检查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-转出检查","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.3 转出检查")]),t._v(" "),e("p",[t._v("变量输出到 HTML 页面时，可以使用编码或转义的方式防御 XSS 攻击。")]),t._v(" "),e("p",[t._v("针对 HTML 与 JavaScript 的编码可通过 HtmlEncode 和 JavaScriptEncode 实现，具体的函数内容可"),e("a",{attrs:{href:"http://www.cnblogs.com/lovesong/p/5211667.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考此处"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("在"),e("a",{attrs:{href:"https://code.google.com/archive/p/domxsswiki/wikis/FindingDOMXSS.wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("FindingDOMXSS"),e("OutboundLink")],1),t._v("中同样给出了输出点（sinks）的匹配规则")]),t._v(" "),e("h5",{attrs:{id:"情况一"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#情况一","aria-hidden":"true"}},[t._v("#")]),t._v(" 情况一")]),t._v(" "),e("ul",[e("li",[t._v("数据类型：String")]),t._v(" "),e("li",[t._v("上下文：HTML Body")]),t._v(" "),e("li",[t._v("示例代码："),e("code",[t._v("<span>UNTRUSTED DATA</span>")])]),t._v(" "),e("li",[t._v("防御措施：HTML Entity 编码")])]),t._v(" "),e("h5",{attrs:{id:"情况二"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#情况二","aria-hidden":"true"}},[t._v("#")]),t._v(" 情况二")]),t._v(" "),e("ul",[e("li",[t._v("数据类型：String")]),t._v(" "),e("li",[t._v("上下文：安全 HTML 变量")]),t._v(" "),e("li",[t._v("示例代码："),e("code",[t._v('<input type="text" name="fname" value="UNTRUSTED DATA">')])]),t._v(" "),e("li",[t._v("防御措施\n"),e("ul",[e("li",[t._v("HTML Attribute 编码")]),t._v(" "),e("li",[t._v("只把不可信数据放在安全白名单内的变量上（白名单在下文列出）")]),t._v(" "),e("li",[t._v("严格地校验不安全变量，如 background、id 和 name")])])])]),t._v(" "),e("h5",{attrs:{id:"情况三"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#情况三","aria-hidden":"true"}},[t._v("#")]),t._v(" 情况三")]),t._v(" "),e("ul",[e("li",[t._v("数据类型：String")]),t._v(" "),e("li",[t._v("上下文：GET 参数")]),t._v(" "),e("li",[t._v("示例代码："),e("code",[t._v('<a href="/site/search?value=UNTRUSTED DATA">clickme</a>')])]),t._v(" "),e("li",[t._v("防御措施：URL 编码")])]),t._v(" "),e("h5",{attrs:{id:"情况四"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#情况四","aria-hidden":"true"}},[t._v("#")]),t._v(" 情况四")]),t._v(" "),e("ul",[e("li",[t._v("数据类型：String")]),t._v(" "),e("li",[t._v("上下文：使用在 src 或 href 变量上的不可信 URLs")]),t._v(" "),e("li",[t._v("示例代码：")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<a href="UNTRUSTED URL">clickme</a>\n<iframe src="UNTRUSTED URL" />\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("ul",[e("li",[t._v("防御措施：")])]),t._v(" "),e("ol",[e("li",[t._v("对输入进行规范化")]),t._v(" "),e("li",[t._v("URL 校验")]),t._v(" "),e("li",[t._v("URL 安全性认证")]),t._v(" "),e("li",[t._v("只允许使用 http 和 https 协议（避免使用 JavaScript 协议去打开一个新窗口）")]),t._v(" "),e("li",[t._v("HTML Attribute 编码")])]),t._v(" "),e("h4",{attrs:{id:"情况五"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#情况五","aria-hidden":"true"}},[t._v("#")]),t._v(" 情况五")]),t._v(" "),e("ul",[e("li",[t._v("数据类型：String")]),t._v(" "),e("li",[t._v("上下文：CSS 值")]),t._v(" "),e("li",[t._v("示例代码：")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<div style="width: UNTRUSTED DATA;">Selection</div>\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("防御措施：")])]),t._v(" "),e("ol",[e("li",[t._v("使用 CSS 编码")]),t._v(" "),e("li",[t._v("使用 CSS Hex 编码")]),t._v(" "),e("li",[t._v("良好的 CSS 设计")])]),t._v(" "),e("h5",{attrs:{id:"情况六"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#情况六","aria-hidden":"true"}},[t._v("#")]),t._v(" 情况六")]),t._v(" "),e("ul",[e("li",[t._v("数据类型：String")]),t._v(" "),e("li",[t._v("上下文：JavaScript 变量")]),t._v(" "),e("li",[t._v("示例代码：")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n<script>var currentValue='UNTRUSTED DATA';<\/script>\n<script>someFunction('UNTRUSTED DATA');<\/script>\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("ul",[e("li",[t._v("防御措施：")])]),t._v(" "),e("ol",[e("li",[t._v("确保所有变量值都被引号括起来")]),t._v(" "),e("li",[t._v("使用 JavaScript Hex 编码")]),t._v(" "),e("li",[t._v("使用 JavaScript Unicode 编码")]),t._v(" "),e("li",[t._v("避免使用“反斜杠转译”（\"、'或者\\）")])]),t._v(" "),e("h5",{attrs:{id:"情况七"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#情况七","aria-hidden":"true"}},[t._v("#")]),t._v(" 情况七")]),t._v(" "),e("ul",[e("li",[t._v("数据类型：HTML")]),t._v(" "),e("li",[t._v("上下文：HTML Body")]),t._v(" "),e("li",[t._v("示例代码："),e("code",[t._v("<div>UNTRUSTED HTML</div>")])]),t._v(" "),e("li",[t._v("防御措施：\n"),e("ul",[e("li",[t._v("[HTML 校验 (JSoup, AntiSamy, HTML Sanitizer)]")])])])]),t._v(" "),e("p",[e("code",[t._v("(https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet#RULE_.236_-_Use_an_HTML_Policy_engine_to_validate_or_clean_user-driven_HTML_in_an_outbound_way)")])]),t._v(" "),e("h5",{attrs:{id:"情况八"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#情况八","aria-hidden":"true"}},[t._v("#")]),t._v(" 情况八")]),t._v(" "),e("ul",[e("li",[t._v("数据类型：String")]),t._v(" "),e("li",[t._v("上下文：DOM XSS")]),t._v(" "),e("li",[t._v("示例代码："),e("code",[t._v('<script>document.write("UNTRUSTED INPUT: " + document.location.hash);<script/>')])])]),t._v(" "),e("h3",{attrs:{id:"dom-based-xss-防御"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dom-based-xss-防御","aria-hidden":"true"}},[t._v("#")]),t._v(" DOM Based XSS 防御")]),t._v(" "),e("p",[t._v("DOM Based XSS 是直接从“JavaScript”中输出数据到 HTML 页面里，前面提到的都是从“服务器”中输出。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('\n//x 是从服务器中输出的，并且做了 JavaScriptEncode 操作\nvar x="\\x20\\x27onclick\\x3dalert\\x281\\x29\\x3b";\n//在输出后会变成<a href=" " onclick="alert(1);">test</a>还是能执行点击\ndocument.write("<a href=\'"+x+">test</a>");\n\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("所以要在合适的地方再做一次编码操作，下面是分情况说明：")]),t._v(" "),e("p",[t._v("如果输出到事件或脚本中，则再做一次 JavaScriptEncode；如果输出到 HTML 内容或属性中，就再做一次 HtmlEncode。")]),t._v(" "),e("p",[t._v("在 OWASP 中有一篇《"),e("a",{attrs:{href:"https://www.owasp.org/index.php/DOM_based_XSS_Prevention_Cheat_Sheet",target:"_blank",rel:"noopener noreferrer"}},[t._v("DOM based XSS Prevention Cheat Sheet"),e("OutboundLink")],1),t._v("》，详细记录了发生场景和解决指南。")]),t._v(" "),e("h3",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.cnblogs.com/strick/p/6349911.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("谨慎能捕千秋蝉（一）——XSS"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/GMA2OpBLtRTEU2E2DoE_iQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何让前端更安全？——XSS 攻击和防御详解"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/21308080",target:"_blank",rel:"noopener noreferrer"}},[t._v("了解 XSS 攻击"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.cnblogs.com/lovesong/p/5199623.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端安全之 XSS 攻击"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://insights.thoughtworks.cn/eight-security-problems-in-front-end/",target:"_blank",rel:"noopener noreferrer"}},[t._v("8大前端安全问题（上）"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://insights.thoughtworks.cn/eight-security-problems-in-front-end-2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("8大前端安全问题（下）"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://zoumiaojiang.com/article/common-web-security/",target:"_blank",rel:"noopener noreferrer"}},[t._v("常见 Web 安全攻防总结"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://tech.meituan.com/2018/09/27/fe-security.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端安全系列（一）：如何防止XSS攻击？"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"联系作者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[t._v("#")]),t._v(" 联系作者")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("p",[t._v("\n        平凡世界，贵在坚持。\n    ")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);a.default=n.exports}}]);