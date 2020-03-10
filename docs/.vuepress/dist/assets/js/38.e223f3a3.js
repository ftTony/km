(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{261:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"https-详情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https-详情"}},[s._v("#")]),s._v(" https 详情")]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),s._v(" "),a("h2",{attrs:{id:"内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E4%BB%80%E4%B9%88%E6%98%AF-https"}},[s._v("什么是 HTTPS")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81-https"}},[s._v("为什么需要 https")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E5%8A%A0%E5%AF%86%E6%96%B9%E5%BC%8F"}},[s._v("HTTPS 如何加密数据的")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E5%9B%9B%E3%80%81https-%E8%BF%87%E7%A8%8B"}},[s._v("HTTPS 过程")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%94%E3%80%81%E8%AF%81%E4%B9%A6"}},[s._v("证书")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E5%85%AD%E3%80%81https-%E6%80%A7%E8%83%BD%E6%8D%9F%E8%80%97"}},[s._v("HTTPS 性能损耗")])])]),s._v(" "),a("h3",{attrs:{id:"一、什么是-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是-https"}},[s._v("#")]),s._v(" 一、什么是 HTTPS")]),s._v(" "),a("p",[s._v("HTTPS 并非是应用层的一种新协议。只是 HTTP 通信接口部分用 SSL(Secure Socket Layer)和 TLS 协议代替而已。")]),s._v(" "),a("p",[s._v("简单理解就是 https=http+加密+认证+完整性保护")]),s._v(" "),a("p",[s._v("如下图所示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https.png",alt:""}})]),s._v(" "),a("h4",{attrs:{id:"ssl-与-tls-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssl-与-tls-介绍"}},[s._v("#")]),s._v(" SSL 与 TLS 介绍")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("SSL（Secure Socket Layer，安全套接字层）：1994 年为 Netscape 所研发，SSL 协议位于 TCP/IP 协议与各种应用层协议之间，为数据通讯提供安全支持。")])]),s._v(" "),a("li",[a("p",[s._v("TLS（Transport Layer Security，传输层安全）：其前身是 SSL，它最初的几个版本（SSL 1.0、SSL 2.0、SSL 3.0）由网景公司开发，1999 年从 3.1 开始被 IETF 标准化并改名，发展至今已经有 TLS 1.0、TLS 1.1、TLS 1.2 三个版本。SSL3.0 和 TLS1.0 由于存在安全漏洞，已经很少被使用到。TLS 1.3 改动会比较大，目前还在草案阶段，目前使用最广泛的是 TLS 1.1、TLS 1.2。")])])]),s._v(" "),a("h3",{attrs:{id:"二、为什么需要-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、为什么需要-https"}},[s._v("#")]),s._v(" 二、为什么需要 https")]),s._v(" "),a("p",[s._v("HTTP 是明文传输的，也就意味着，介于发送端、接收端中间的任意节点都可以知道你们传输的内容是什么。这些节点可能是路由器、代理等。")]),s._v(" "),a("p",[s._v("HTTP 传输面临的风险有：")]),s._v(" "),a("ul",[a("li",[s._v("窃听风险：黑客可以获知通信内容。")]),s._v(" "),a("li",[s._v("篡改风险：黑客可以修改通信内容。")]),s._v(" "),a("li",[s._v("冒充风险：黑客可以冒充他人身份参与通信。")])]),s._v(" "),a("h3",{attrs:{id:"三、加密方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、加密方式"}},[s._v("#")]),s._v(" 三、加密方式")]),s._v(" "),a("ul",[a("li",[s._v("对称加密")]),s._v(" "),a("li",[s._v("非对称加密")])]),s._v(" "),a("h4",{attrs:{id:"_3-1-对称加密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-对称加密"}},[s._v("#")]),s._v(" 3.1 对称加密")]),s._v(" "),a("p",[s._v("对称加密的意思就是，加密数据用的密钥，跟解密数据用的密钥是一样的。")]),s._v(" "),a("p",[s._v("对称加密的优点在于加密、解密效率通常比较高。缺点在于，数据发送方、数据接收方需要协商、共享同一把密钥，并确保密钥不泄露给其他人。此外，对于多个有数据交换需求的个体，两两之间需要分配并维护一把密钥，这个带来的成本基本是不可接受的。")]),s._v(" "),a("h4",{attrs:{id:"_3-2-非对称加密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-非对称加密"}},[s._v("#")]),s._v(" 3.2 非对称加密")]),s._v(" "),a("p",[s._v("非对称加密的意思就是，加密数据用的密钥（公钥），跟解密数据用的密钥（私钥）是不一样的。其实就是字面上的意思——公开的密钥，谁都可以查到。因此非对称加密也叫做公开密钥加密。相对应的，私钥就是非公开的密钥，一般是由网站的管理员持有。简单的说就是，通过公钥加密的数据，只能通过私钥解开。通过私钥加密的数据，只能通过公钥解开。")]),s._v(" "),a("h3",{attrs:{id:"四、https-过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、https-过程"}},[s._v("#")]),s._v(" 四、HTTPS 过程")]),s._v(" "),a("p",[a("img",{attrs:{src:"https01.png",alt:""}})]),s._v(" "),a("ol",[a("li",[s._v("客户端发送 HTTPS 请求给服务器端；")]),s._v(" "),a("li",[s._v("服务器端发送 CA 证书和公钥 PublicKey 给客户端,注意这个公钥用的是非对称密钥,只有服务器端才有 PublicKey 对应的 PrivateKey；")]),s._v(" "),a("li",[s._v("客户端生成一个会话的密钥 SessionKey,注意这个 SessionKey 是对称密钥,加密解密都是同一个秘钥；")]),s._v(" "),a("li",[s._v("客户端用公钥 PublicKey 来对会话秘钥 SessionKey 进行加密生成 EncryptKey 传递给服务器；")]),s._v(" "),a("li",[s._v("服务器端收到这个加密后的 EncryptKey 后用 PrivateKey 解密就可以得到这个 SessionKey 了；")]),s._v(" "),a("li",[s._v("服务器端收到这个加密后的 EncryptKey 需要回复一个确认消息给客户端；")]),s._v(" "),a("li",[s._v("客户端用这个 SessionKey 来对后续需要发送的 Message 来进行加密，就是 EncryptMessage，然后发送给服务器端；")]),s._v(" "),a("li",[s._v("服务器端收到这个 EncryptMessage 后就需要拿刚才解密的 SessionKey 来进行解密；就可以得到 Message 了；")]),s._v(" "),a("li",[s._v("服务器端根据客户端的请求来进行返回一系列的 Response 响应；")])]),s._v(" "),a("h3",{attrs:{id:"五、证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、证书"}},[s._v("#")]),s._v(" 五、证书")]),s._v(" "),a("ul",[a("li",[s._v("数字签名")]),s._v(" "),a("li",[s._v("CA")]),s._v(" "),a("li",[s._v("证书的种类")]),s._v(" "),a("li",[s._v("ssl 证书的格式")]),s._v(" "),a("li",[s._v("ssl 证书内容")]),s._v(" "),a("li",[s._v("如何辨别非法证书")])]),s._v(" "),a("h4",{attrs:{id:"_5-1-数字签名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-数字签名"}},[s._v("#")]),s._v(" 5.1 数字签名")]),s._v(" "),a("p",[s._v("简单的来说，“摘要”就是对传输的内容，通过 hash 算法计算出一段固定长度的串。然后，在通过 CA 的私钥对这段摘要进行加密，加密后得到的结果就是“数字签名”。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("明文 --\x3e hash运算 --\x3e 摘要 --\x3e 私钥加密 --\x3e 数字签名\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_5-2-ca"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-ca"}},[s._v("#")]),s._v(" 5.2 CA")]),s._v(" "),a("p",[s._v("CA(Certificate Authority)，即证书认证机构，它的作用就是提供证书（即服务器证书，由域名、公司信息、序列号和签名信息组成）加强服务端和客户端之间信息交互的安全性，以及证书运维相关服务。任何个体/组织都可以扮演 CA 的角色，难的是你要能得到全世界各大操作系统、浏览器等的默认信任，能得到他们的默认信任，你也可以自己开一家 CA 公司了，这类证书通常叫做根证书。浏览器默认信任的 CA 大厂商有很多，比如 Symantec 赛门铁克、Comodo、Godaddy、GolbalSign(百度微博等都是它签发的) 和 Digicert。")]),s._v(" "),a("ol",[a("li",[s._v("证书的颁发：接收、验证用户(包括下级认证中心和最终用户)的数字证书的申请。可以受理或拒绝")]),s._v(" "),a("li",[s._v("证书的更新：认证中心可以定期更新所有用户的证书，或者根据用户的请求来更新用户的证书")]),s._v(" "),a("li",[s._v("证书的查询：查询当前用户证书申请处理过程；查询用户证书的颁发信息，这类查询由目录服务器 ldap 来完成")]),s._v(" "),a("li",[s._v("证书的作废：由于用户私钥泄密等原因，需要向认证中心提出证书作废的请求；证书已经过了有效期，认证中心自动将该证书作废。认证中心通过维护证书作废列表 (Certificate Revocation List,CRL) 来完成上述功能。")]),s._v(" "),a("li",[s._v("证书的归档：证书具有一定的有效期，证书过了有效期之后就将作废，但是我们不能将作废的证书简单地丢弃，因为有时我们可能需要验证以前的某个交易过程中产生的数字签名，这时我们就需要查询作废的证书。")])]),s._v(" "),a("h4",{attrs:{id:"_5-3-证书的种类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-证书的种类"}},[s._v("#")]),s._v(" 5.3 证书的种类")]),s._v(" "),a("p",[s._v("SSL 证书按大类一般可分为"),a("code",[s._v("DV SSL")]),s._v("、"),a("code",[s._v("OV SSL")]),s._v("、"),a("code",[s._v("EV SSL")]),s._v("证书，又叫域名型、企业型、增强型证书：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https02.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("DV SSL(Domain Validation)，域名型 SSL 证书，证书颁布机构只对域名的所有者进行在线检查，只要你能证明你是这个域名的所有者就可以给你颁发证书，不会校验网站的资质，哪怕你是黄赌毒网站也可以，个人网站、非盈利项目、开源项目等域名型证书足矣；")]),s._v(" "),a("li",[s._v("OV SSL("),a("code",[s._v("Organization Validation")]),s._v(")，企业型 SSL 证书，需要购买者提交组织机构资料和单位制空权信等在官方注册的凭证，证书颁发机构在签发 SSL 证书前不仅仅要检验域名所有权，还必须对这些资料的真实合法性进行多方查验，只能通过验证的才能颁发 SSL 证书；")]),s._v(" "),a("li",[s._v("EV SSL(Extended Validations)，增强型 SSL 证书(EV SSL)，验证流程加具体详细，验证步骤更多，这样一来证书所绑定的网站就更加的可靠、可信。它跟普通"),a("code",[s._v("SSL")]),s._v("证书的区别是浏览器的地址栏变绿，如果是不受信的 SSL 证书则拒绝显示，如果是钓鱼网站，地址栏则会变成红色，以警示用户。")])]),s._v(" "),a("h4",{attrs:{id:"_5-4-ssl-证书的格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-ssl-证书的格式"}},[s._v("#")]),s._v(" 5.4 ssl 证书的格式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('1. 证书版本号(Version)\n版本号指明X.509证书的格式版本，现在的值可以为:\n    1) 0: v1\n    2) 1: v2\n    3) 2: v3\n也为将来的版本进行了预定义\n\n2. 证书序列号(Serial Number)\n序列号指定由CA分配给证书的唯一的"数字型标识符"。当证书被取消时，实际上是将此证书的序列号放入由CA签发的CRL中，\n这也是序列号唯一的原因。\n\n3. 签名算法标识符(Signature Algorithm)\n签名算法标识用来指定由CA签发证书时所使用的"签名算法"。算法标识符用来指定CA签发证书时所使用的:\n    1) 公开密钥算法\n    2) hash算法\nexample: sha256WithRSAEncryption\n须向国际知名标准组织(如ISO)注册\n\n4. 签发机构名(Issuer)\n此域用来标识签发证书的CA的X.500 DN(DN-Distinguished Name)名字。包括:\n    1) 国家(C)\n    2) 省市(ST)\n    3) 地区(L)\n    4) 组织机构(O)\n    5) 单位部门(OU)\n    6) 通用名(CN)\n    7) 邮箱地址\n\n5. 有效期(Validity)\n指定证书的有效期，包括:\n    1) 证书开始生效的日期时间\n    2) 证书失效的日期和时间\n每次使用证书时，需要检查证书是否在有效期内。\n\n6. 证书用户名(Subject)\n指定证书持有者的X.500唯一名字。包括:\n    1) 国家(C)\n    2) 省市(ST)\n    3) 地区(L)\n    4) 组织机构(O)\n    5) 单位部门(OU)\n    6) 通用名(CN)\n    7) 邮箱地址\n\n7. 证书持有者公开密钥信息(Subject Public Key Info)\n证书持有者公开密钥信息域包含两个重要信息:\n    1) 证书持有者的公开密钥的值\n    2) 公开密钥使用的算法标识符。此标识符包含公开密钥算法和hash算法。\n8. 扩展项(extension)\nX.509 V3证书是在v2的基础上一标准形式或普通形式增加了扩展项，以使证书能够附带额外信息。标准扩展是指\n由X.509 V3版本定义的对V2版本增加的具有广泛应用前景的扩展项，任何人都可以向一些权威机构，如ISO，来\n注册一些其他扩展，如果这些扩展项应用广泛，也许以后会成为标准扩展项。\n\n9. 签发者唯一标识符(Issuer Unique Identifier)\n签发者唯一标识符在第2版加入证书定义中。此域用在当同一个X.500名字用于多个认证机构时，用一比特字符串\n来唯一标识签发者的X.500名字。可选。\n\n10. 证书持有者唯一标识符(Subject Unique Identifier)\n持有证书者唯一标识符在第2版的标准中加入X.509证书定义。此域用在当同一个X.500名字用于多个证书持有者时，\n用一比特字符串来唯一标识证书持有者的X.500名字。可选。\n\n11. 签名算法(Signature Algorithm)\n证书签发机构对证书上述内容的签名算法\nexample: sha256WithRSAEncryption\n\n12. 签名值(Issuer\'s Signature)\n证书签发机构对证书上述内容的签名值\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br")])]),a("h4",{attrs:{id:"_5-5-ssl-证书内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-ssl-证书内容"}},[s._v("#")]),s._v(" 5.5 ssl 证书内容")]),s._v(" "),a("ol",[a("li",[s._v("颁发证书的机构的名字--CA")]),s._v(" "),a("li",[s._v("证书内容本身的数字签名（用 CA 私钥加密）")]),s._v(" "),a("li",[s._v("证书持有者的公钥")]),s._v(" "),a("li",[s._v("证书签名用到的 hash 算法")])]),s._v(" "),a("h4",{attrs:{id:"_5-6-如何辨别非法证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-如何辨别非法证书"}},[s._v("#")]),s._v(" 5.6 如何辨别非法证书")]),s._v(" "),a("p",[a("strong",[s._v("完全伪造的证书")])]),s._v(" "),a("ol",[a("li",[s._v("证书颁发的机构是伪造的：浏览器不认识，直接认为是危险证书")]),s._v(" "),a("li",[s._v("证书颁发的机构是确实存在的，于是根据 CA 名，找到对应内置的 CA 根证书、CA 的公钥。")]),s._v(" "),a("li",[s._v("用 CA 的公钥，对伪造的证书的摘要进行解密，发现解不了。认为是危险证书")])]),s._v(" "),a("p",[a("strong",[s._v("篡改过的证书")])]),s._v(" "),a("ol",[a("li",[s._v("检查证书，根据 CA 名，找到对应的 CA 根证书，以及 CA 的公钥。")]),s._v(" "),a("li",[s._v("用 CA 的公钥，对证书的数字签名进行解密，得到对应的证书摘要 AA")]),s._v(" "),a("li",[s._v("根据证书签名使用的 hash 算法，计算出当前证书的摘要 BB")]),s._v(" "),a("li",[s._v("对比 AA 跟 BB，发现不一致--\x3e 判定是危险证书")])]),s._v(" "),a("p",[s._v("验证过程如图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https.jpg",alt:""}})]),s._v(" "),a("h4",{attrs:{id:"_5-7-自发签名证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-自发签名证书"}},[s._v("#")]),s._v(" 5.7 自发签名证书")]),s._v(" "),a("p",[s._v("这里不具体讲了，可以参考："),a("a",{attrs:{href:"https://www.cnblogs.com/liuxianan/p/https.html#%E8%87%AA%E5%88%B6%E8%AF%81%E4%B9%A6",target:"_blank",rel:"noopener noreferrer"}},[s._v("HTTPS 从认识到线上实战全记录"),a("OutboundLink")],1),s._v("、"),a("a",{attrs:{href:"https://futu.im/posts/2017-08-03-https-certificate/",target:"_blank",rel:"noopener noreferrer"}},[s._v("HTTPS 自建 CA 及自签名证书不完全指南（实战篇）"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"六、https-性能损耗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、https-性能损耗"}},[s._v("#")]),s._v(" 六、HTTPS 性能损耗")]),s._v(" "),a("p",[s._v("HTTPS 原理与优势：身份验证、信息加密与完整性校验等，且未对 TCP 和 HTTP 协议做任何修改。但通过增加新协议以实现更安全的通信必然需要付出代价，HTTPS 协议的性能损耗主要体现如下：")]),s._v(" "),a("ul",[a("li",[s._v("增加延时")]),s._v(" "),a("li",[s._v("消耗较多的"),a("code",[s._v("CPU")]),s._v("资源")])]),s._v(" "),a("h4",{attrs:{id:"_6-1-增加延时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-增加延时"}},[s._v("#")]),s._v(" 6.1 增加延时")]),s._v(" "),a("p",[s._v("分析前面的握手过程，一次完整的握手至少需要两端依次来回两次通信，至少增加延时 2 RTT，利用会话缓存从而复用连接，延时也至少 1 RTT*。")]),s._v(" "),a("h4",{attrs:{id:"_6-2-消耗较多的cpu资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-消耗较多的cpu资源"}},[s._v("#")]),s._v(" 6.2 消耗较多的"),a("code",[s._v("CPU")]),s._v("资源")]),s._v(" "),a("p",[s._v("除数据传输之外，HTTPS 通信主要包括对对称加解密、非对称加解密(服务器主要采用私钥解密数据)；压测 TS8 机型的单核 CPU：对称加密算法 AES-CBC-256 吞吐量 600Mbps，非对称 RSA 私钥解密 200 次/s。不考虑其它软件层面的开销，10G 网卡为对称加密需要消耗 CPU 约 17 核，24 核 CPU 最多接入 HTTPS 连接 4800；")]),s._v(" "),a("p",[s._v("静态节点当前 10G 网卡的 TS8 机型的 HTTP 单机接入能力约为 10w/s，如果将所有的 HTTP 连接变为 HTTPS 连接，则明显 RSA 的解密最先成为瓶颈。因此，RSA 的解密能力是当前困扰 HTTPS 接入的主要难题。")]),s._v(" "),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://time.geekbang.org/column/article/180213",target:"_blank",rel:"noopener noreferrer"}},[s._v("加餐六｜ HTTPS：浏览器如何验证数字证书？"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"http://www.cnblogs.com/Jote/articles/4854958.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("HTTPS 过程"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000004199917",target:"_blank",rel:"noopener noreferrer"}},[s._v("全站"),a("code",[s._v("HTTPS")]),s._v("来了"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"http://www.cnblogs.com/heart-runner/archive/2012/01/30/2332020.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("数字签名和数字证书"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"http://www.cnblogs.com/chyingp/p/https-introduction.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("HTTPS 科普扫盲帖"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"http://www.cnblogs.com/zhangshitong/p/6478721.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https 原理通俗了解"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/liuxianan/p/https.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("HTTPS 从认识到线上实战全记录"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/lyq863987322/p/8424253.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("HTTPS 原理及实践"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/sujing/p/10927569.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("看完这篇文章，我奶奶都懂了 https 的原理"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("《https 权威指南》")])]),s._v(" "),a("h2",{attrs:{id:"联系作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系作者"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);t.default=e.exports}}]);