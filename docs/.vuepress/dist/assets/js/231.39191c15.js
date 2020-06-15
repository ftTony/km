(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{462:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"扫码登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扫码登录","aria-hidden":"true"}},[s._v("#")]),s._v(" 扫码登录")]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("本文将简要的介绍扫码登录功能的技术实现逻辑，并实际结合淘宝、微信的扫码登录功能，学习和研究大厂主流应用的技术实现思路。")]),s._v(" "),a("h2",{attrs:{id:"内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E5%9F%BA%E6%9C%AC%E6%8A%80%E6%9C%AF%E5%8E%9F%E7%90%86"}},[s._v("基本技术原理")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E6%B7%98%E5%AE%9D%E7%9A%84%E6%89%AB%E7%A0%81%E7%99%BB%E5%BD%95%E6%8A%80%E6%9C%AF%E5%AE%9E%E7%8E%B0"}},[s._v("淘宝的扫码登录技术实现")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E5%BE%AE%E4%BF%A1%E7%9A%84%E6%89%AB%E7%A0%81%E7%99%BB%E5%BD%95%E6%8A%80%E6%9C%AF%E5%AE%9E%E7%8E%B0"}},[s._v("微信的扫码登录技术实现")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E5%B0%8F%E7%BB%93"}},[s._v("小结")])])]),s._v(" "),a("h3",{attrs:{id:"一、基本技术原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、基本技术原理","aria-hidden":"true"}},[s._v("#")]),s._v(" 一、基本技术原理")]),s._v(" "),a("h4",{attrs:{id:"_1-1-扫码登录功能到底是什么样的？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-扫码登录功能到底是什么样的？","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.1 扫码登录功能到底是什么样的？")]),s._v(" "),a("p",[s._v("首先介绍下什么是扫码登录。现在大部分同学手机上都装有微信、qq 和淘宝这一类的软件。而这些 app 都有他们相对应的网页端。为了让用户在使用他们的网页时登录更加方便和安全，使用手机扫一扫就可以登录的服务，就显的自然而然了。")]),s._v(" "),a("p",[a("strong",[s._v("几个主流大厂应用扫码登录时的界面效果如下：")])]),s._v(" "),a("p",[a("img",{attrs:{src:"login14.jpg",alt:"images"}})]),s._v(" "),a("p",[s._v("有很多小伙伴可能会感到很神奇，网页上只是显示了个二维码，它怎么就知道是哪个手机扫到了二维码，并且进行登录的呢？而且，登录完成以后，还能直接把用户信息显示给用户，真的是很神奇啊。")]),s._v(" "),a("h4",{attrs:{id:"_1-2-扫码登录功能的完整技术逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-扫码登录功能的完整技术逻辑","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.2 扫码登录功能的完整技术逻辑")]),s._v(" "),a("p",[a("strong",[s._v("网页端与服务器的配合逻辑：")])]),s._v(" "),a("p",[s._v("接下来就是对于这个服务的详细实现。")]),s._v(" "),a("p",[s._v("首先用户打开网站的登录页面的时候，向浏览器的服务器发送获取登录二维码的请求。服务器收到请求后，随机生成一个 uuid，将这个 id 作为 key 值存入 redis 服务器，同时设置一个过期时间，再过期后，用户登录二维码需要进行刷新重新获取。")]),s._v(" "),a("p",[s._v("同时，将这个 key 值和本公司的验证字符串合在一起，通过二维码生成接口，生成一个二维码的图片（二维码生成，网上有很多现成的接口和源码，这里不再介绍）。然后，将二维码图片和 uuid 一起返回给用户浏览器。")]),s._v(" "),a("p",[s._v("浏览器拿到二维码和 uuid 后，会每隔一秒向浏览器发送一次，登录是否成功的请求。请求中携带有 uuid 作为当前页面的标识符。这里有的同学就会奇怪了，服务器只存了个 uuid 在 redis 中作为 key 值，怎么会有用户的 id 信息呢？")]),s._v(" "),a("p",[s._v("这里确实会有用户的 id 信息，这个 id 信息是由手机服务器存入 redis 中的。具体请继续阅读“手机端与服务器的配合逻辑”。")]),s._v(" "),a("p",[a("strong",[s._v("手机端与服务器的配合逻辑：")])]),s._v(" "),a("p",[s._v("话说，浏览器拿到二维码后，将二维码展示到网页上，并给用户一个提示：请掏出您的手机，打开扫一扫进行登录。")]),s._v(" "),a("p",[s._v("用户拿出手机扫描二维码，就可以得到一个验证信息和一个 uuid（扫描二维码获取字符串的功能在网上同样有很多 demo，这里就不详细介绍了）。")]),s._v(" "),a("p",[s._v("由于手机端已经进行过了登录，在访问手机端的服务器的时候，参数中都回携带一个用户的 token，手机端服务器可以从中解析到用户的 userId（这里从 token 中取值而不是手机端直接传 userid 是为了安全，直接传 userid 可能会被截获和修改，token 是加密的，被修改的风险会小很多）。手机端将解析到的数据和用户 token 一起作为参数，向服务器发送验证登录请求（这里的服务器是手机服务器，手机端的服务器跟网页端服务器不是同一台服务器）。")]),s._v(" "),a("p",[s._v("服务器收到请求后，首先对比参数中的验证信息，确定是否为用户登录请求接口。如果是，返回一个确认信息给手机端。")]),s._v(" "),a("p",[s._v("手机端收到返回后，将登录确认框显示给用户（防止用户误操作，同时使登录更加人性化）。用户确认是进行的登录操作后，手机再次发送请求。服务器拿到 uuId 和 userId 后，将用户的 userid 作为 value 值存入 redis 中以 uuid 作为 key 的键值对中。")]),s._v(" "),a("p",[a("strong",[s._v("登录成功时的逻辑：")])]),s._v(" "),a("p",[s._v("然后，浏览器再次发送请求的时候，浏览器端的服务器就可以得到一个用户 Id，并调用登录的方法，生成一个浏览器端的 token，再浏览器再次发送请求的时候，将用户信息返回给浏览器，登录成功。这里存储用户 id 而不是直接存储用户信息是因为，手机端的用户信息，不一定是和浏览器端的用户信息完全一致。")]),s._v(" "),a("p",[a("strong",[s._v("详细的技术原理总结如下图所示：")])]),s._v(" "),a("p",[a("img",{attrs:{src:"login15.png",alt:"images"}})]),s._v(" "),a("h3",{attrs:{id:"二、淘宝的扫码登录技术实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、淘宝的扫码登录技术实现","aria-hidden":"true"}},[s._v("#")]),s._v(" 二、淘宝的扫码登录技术实现")]),s._v(" "),a("p",[s._v("本节我们以淘宝的扫码登录为例，来实际研究分析一下淘宝的扫码登录实现逻辑。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://login.taobao.com/member/login.jhtml",target:"_blank",rel:"noopener noreferrer"}},[s._v("登录界面"),a("OutboundLink")],1),s._v("传回来的参数为：")]),s._v(" "),a("p",[a("strong",[s._v("然后请求(GET)报文是这样的:")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("https://qrlogin.taobao.com/qrcodelogin/qrcodeLoginCheck.do?lgToken=2c3b4d53ef0513787bf4ce711ea5ba53&defaulturl=&_ksTS=1540106757739_2804&callback=jsonp2805\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("关键的就是 lgToken，是网页的唯一 ID，当打开了二维码登录的时候，网页在轮询(应该是长轮询 long polling)调用接口去请求服务器。")]),s._v(" "),a("p",[a("strong",[s._v("如果没有扫码，返回的为：")])]),s._v(" "),a("p",[a("img",{attrs:{src:"login17.png",alt:"images"}})]),s._v(" "),a("p",[a("strong",[s._v("如果扫了的话则会返回：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n\n    "code": "10001",\n\n    "message": "mobile scan QRCode success",\n\n    "success": true\n\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("长时间没有扫码的话，网页端会停止轮询，二维码失效！")]),s._v(" "),a("p",[a("strong",[s._v("当手机端确认登录后，接口返回的是：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{ "code": "10006", "success": true, "url": "https://login.taobao.com/member/loginByIm.do?uid=cntaobaoxxx&token=ff82fc0d1d395a33d3b38ec5a4981336&time=1530179143250&asker=qrcodelogin&ask_version=1.0.0&defaulturl=https://www.taobao.com&webpas=0b7aed2d43f01825183e4a49c6cae47d1479929926"}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v('表示登录成功，当然手机端与服务端在点击"确认登录"之间的交互可能就是这样：网页端生成的 lgToken 去请求服务端，服务端记住了这个 lgToken 并认为登录了，当网页端再次轮询请求接口时，就返回真正的登录态 Token，网页端此时就可以凭着这个 Token 来登录了。')]),s._v(" "),a("p",[a("strong",[s._v("详细的技术逻辑如下图所示：")])]),s._v(" "),a("p",[a("img",{attrs:{src:"login18.png",alt:"images"}})]),s._v(" "),a("h3",{attrs:{id:"三、微信的扫码登录技术实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、微信的扫码登录技术实现","aria-hidden":"true"}},[s._v("#")]),s._v(" 三、微信的扫码登录技术实现")]),s._v(" "),a("h4",{attrs:{id:"_3-1-技术原理流程图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-技术原理流程图","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.1 技术原理流程图")]),s._v(" "),a("p",[a("img",{attrs:{src:"login19.png",alt:"images"}})]),s._v(" "),a("p",[s._v("微信的网页版访问地址是："),a("a",{attrs:{href:"https://wx.qq.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://wx.qq.com/"),a("OutboundLink")],1),s._v("，有兴趣也可以自行深入研究。")]),s._v(" "),a("h4",{attrs:{id:"_3-2-实际的技术实现逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-实际的技术实现逻辑","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.2 实际的技术实现逻辑")]),s._v(" "),a("p",[a("strong",[s._v("获取唯一的 uuid, 以及包含 uid 信息的二维码：")])]),s._v(" "),a("p",[a("img",{attrs:{src:"login20.png",alt:"images"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 获取uuid\n\ngetUUID: function() {\n\n    vare = t.defer();\n\n    returnwindow.QRLogin = {},\n\n    $.ajax({\n\n        url: i.API_jsLogin,\n\n        dataType: "script"\n\n    }).done(function() {\n\n        200 == window.QRLogin.code ? e.resolve(window.QRLogin.uuid) : e.reject(window.QRLogin.code)\n\n    }).fail(function() {\n\n        e.reject()\n\n    }),\n\n    e.promise\n\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("p",[a("strong",[s._v("浏览器轮询服务器，获取扫码状态：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 查看扫码状态\n\ncheckLogin: function(e, a) {\n\n    varn = t.defer()\n\n        , a = a || 0;\n\n    returnwindow.code = 0,\n\n    window.checkLoginPromise = $.ajax({\n\n        url: i.API_login + "?loginicon=true&uuid="+ e + "&tip="+ a + "&r="+ ~newDate,\n\n        dataType: "script",\n\n        timeout: 35e3\n\n    }).done(function() {\n\n        newRegExp("/"+ location.host + "/");\n\n        if(window.redirect_uri && window.redirect_uri.indexOf("/"+ location.host + "/") < 0)\n\n            returnvoid (location.href = window.redirect_uri);\n\n        vare = {\n\n            code: window.code,\n\n            redirect_uri: window.redirect_uri,\n\n            userAvatar: window.userAvatar\n\n        };\n\n        n.resolve(e)\n\n    }).fail(function() {\n\n        n.reject()\n\n    }),\n\n    n.promise\n\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br")])]),a("p",[a("strong",[s._v("根据服务器返回的扫码状态，进行相应的操作：")])]),s._v(" "),a("p",[a("strong",[s._v("408 扫码超时：")]),s._v(" 如果手机没有扫码或没有授权登录，服务器会阻塞约 25s，然后返回状态码 408 -> 前端继续轮询")]),s._v(" "),a("p",[a("img",{attrs:{src:"login21.png",alt:"images"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"login22.png",alt:"images"}})]),s._v(" "),a("p",[a("strong",[s._v("400 二维码失效：")]),s._v(" 大约 5 分钟的时间内不扫码，二维码失效")]),s._v(" "),a("p",[a("img",{attrs:{src:"login23.png",alt:"images"}})]),s._v(" "),a("p",[a("strong",[s._v("201 已扫码：")]),s._v(" 如果手机已经扫码，服务器立即返回状态码和用户的基本信息"),a("code",[s._v('（window.code=201,window.code.userAvator="..."）')]),s._v("，-> 前端继续轮询")]),s._v(" "),a("p",[a("img",{attrs:{src:"login24.png",alt:"images"}})]),s._v(" "),a("p",[a("strong",[s._v("200 已授权：")]),s._v(" 如果手机点击了确认登录，服务器返回 200 及 token -> 前端停止轮询, 获取到 token，重定向到目标页")]),s._v(" "),a("p",[a("img",{attrs:{src:"login25.png",alt:"images"}})]),s._v(" "),a("p",[a("strong",[s._v("具体的代码示例如下：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 根据服务器返回的扫码状态，进行相应的操作\n\nfunctiono(c) {\n\n    switch(c.code) {\n\n    case200:\n\n        t.newLoginPage(c.redirect_uri).then(function(t) {\n\n            varo = t.match(/<ret>(.*)<\\/ret>/)\n\n                , r = t.match(/<script>(.*)<\\/script>/)\n\n                , c = t.match(/<skey>(.*)<\\/skey>/)\n\n                , s = t.match(/<wxsid>(.*)<\\/wxsid>/)\n\n                , l = t.match(/<wxuin>(.*)<\\/wxuin>/)\n\n                , d = t.match(/<pass_ticket>(.*)<\\/pass_ticket>/)\n\n                , f = t.match(/<message>(.*)<\\/message>/)\n\n                , u = t.match(/<redirecturl>(.*)<\\/redirecturl>/);\n\n            returnu ? void (window.location.href = u[1]) : o && "0"!= o[1] ? (alert(f && f[1] || "登录失败"),\n\n            i.report(i.AUTH_FAIL_COUNT, 1),\n\n            void location.reload()) : (e.$emit("newLoginPage", {\n\n                Ret: o && o[1],\n\n                SKey: c && c[1],\n\n                Sid: s && s[1],\n\n                Uin: l && l[1],\n\n                Passticket: d && d[1],\n\n                Code: r\n\n            }),\n\n            void (a.getCookie("webwx_data_ticket") || n.report(n.ReportType.cookieError, {\n\n                text: "webwx_data_ticket 票据丢失",\n\n                cookie: document.cookie\n\n            })))\n\n        });\n\n        break;\n\n    case201:\n\n        e.isScan = !0,\n\n        n.report(n.ReportType.timing, {\n\n            timing: {\n\n                scan: Date.now()\n\n            }\n\n        }),\n\n        t.checkLogin(e.uuid).then(o, function(t) {\n\n            !t && window.checkLoginPromise && (e.isBrokenNetwork = !0)\n\n        });\n\n        break;\n\n    case408:\n\n        t.checkLogin(e.uuid).then(o, function(t) {\n\n            !t && window.checkLoginPromise && (e.isBrokenNetwork = !0)\n\n        });\n\n        break;\n\n    case400:\n\n    case500:\n\n    case0:\n\n        vars = a.getCookie("refreshTimes") || 0;\n\n        s < 5 ? (s++,\n\n        a.setCookie("refreshTimes", s, .5),\n\n        document.location.reload()) : e.isNeedRefresh = !0;\n\n        break;\n\n    case202:\n\n        e.isScan = !1,\n\n        e.isAssociationLogin = !1,\n\n        a.setCookie("login_frequency", 0, 2),\n\n        window.checkLoginPromise && (window.checkLoginPromise.abort(),\n\n        window.checkLoginPromise = null),\n\n        r()\n\n    }\n\n    e.code = c.code,\n\n    e.userAvatar = c.userAvatar,\n\n    a.log("get code", c.code)\n\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br"),a("span",{staticClass:"line-number"},[s._v("127")]),a("br"),a("span",{staticClass:"line-number"},[s._v("128")]),a("br"),a("span",{staticClass:"line-number"},[s._v("129")]),a("br")])]),a("h3",{attrs:{id:"四、小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、小结","aria-hidden":"true"}},[s._v("#")]),s._v(" 四、小结")]),s._v(" "),a("p",[s._v("扫码登录这个功能，现在已经不只出现有 IM 应用里，各种带有移动端的线上网站也都有了这个功能，所以本文中介绍的技术原理并不局限于只用于实现 IM 应用中的扫码登录。")]),s._v(" "),a("p",[s._v("另外，为了方便抓取真实的数据进行分析研究，本文中的 PC 端案例分析是针对的是网页端，但实际上如果你的 PC 端是富客户端（也就是.exe、.dmg 这样的安装版），原理也是一样的，而且还不需要考虑浏览器里的跨域问题等。")]),s._v(" "),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://my.oschina.net/u/4231722/blog/3154805",target:"_blank",rel:"noopener noreferrer"}},[s._v("一文搞懂主流的扫码登录技术原理"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"联系作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);n.default=t.exports}}]);