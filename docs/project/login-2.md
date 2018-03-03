# 单点登录原则

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 单系统登录机制
- 多系统的复杂性
- 单点登录

### 一、单系统登录机制

- http 无状态协议
- 会话机制
- 登录状态

#### 1.1 http 无状态协议

web 应用采用 browser/server 架构，http 作为通信协议。http 是无状协议，浏览器的每一次请求，服务器会独立处理，不与之前或之后的请求产生关联，这个过程用下图说明，三次请求/响应对之间没有任何联系。

![images](login02.png)

但这也同时意味着，任何用户都能通过浏览器访问服务器资源，如果想保护服务器的某些资源，必须限制浏览器请求；要限制浏览器请求，响应合法请求；要鉴别浏览器请求，必须清楚浏览器请求状态。既然 http 协议无状态，那就让服务器和浏览器共同维护一个状态吧！这就是会话机制

#### 1.2 会话机制

浏览器第一次请求服务器，服务器创建一个会话，并将会话的 Id 作为响应的一部分发送给浏览器，浏览器存储会话 id，并在后续第二次和第三次请求中带上会话 id，服务器取得请求中的会话 id 就知道是不是同一个用户了，这个过程用下图说明，后续请求与第一次请求产生了关联

![images](login03.png)

服务器在内存中保存会话对象，浏览器怎么保存会话 id 呢？你可能会想到两种方式

- 请求参数
- cookie

将会话 id 作为每一个请求的参数，服务器接收请求自然能解析参数获得会话 id，并借此判断是否来自同一会话，很明显，这种方式不靠谱。那就浏览器自己维护这个会话 id 吧，每次发送 http 请求时浏览器自动发送会话 id，cookie 机制正好用来做这件事。cookie 是浏览器用来存储少量数据的一种机制，数据以“key/value”形式存储，浏览器发送 http 请求时自动附带 cookie 信息

tomcat 会话机制当然也实现了 cookie，访问 tomcat 服务器时，浏览器中可以看到一个名为“JSESSIONID”的 cookie，这就是 tomcat 会话机制维护的会话 id，使用了 cookie 的请求响应过程如下图

![images](login04.png)

#### 1.3 登录状态

有了会话机制，登录状态就好明白了，我们假设浏览器第一次请求服务器需要输入用户名与密码验证身份，服务器拿到用户密码去数据库比对，正确的话说明当前持有这个会话的用户是合法用户，应该将这个会话票房为“已授权”或者“已登录”等等之类的状态，既然是会话的状态，自然要保存在会话对象中，tomcat 在会话对象中设置登录状态如下：

```
HttpSession session = request.getSession();
session.setAttribute("isLogin", true);
```

用户再次访问时，tomcat 在会话对象中查看登录状态

```
HttpSession session = request.getSession();
session.getAttribute("isLogin");
```

实现了登录状态的浏览器请求服务器模型如下图描述

![images](login05.png)

每次请求受保护资源时都会检查会话对象中的登录状态，只有 isLogin=true 的会话才能访问，登录机制因此而实现。

### 二、多系统的复杂性

web 系统早已从久远的单系统发展成为如今由多系统组成的应用群，面对如此众多的系统，用户难道要一个一个登录、然后一个一个注销吗？就像下面描述的这样

![images](login06.png)

web 系统由单系统发展成多系统组成的应用群，复杂性应该由系统内部承担，而不是用户。无论 web 系统内部多么复杂，对应用而言，都是一个统一的整体，也就是说，用户访问 web 系统的整个应用群与访问单个系统一样，登录/注册只要一次就够了

![images](login07.png)

虽然单系统的登录解决方案很完美，但对于多系统应用群已经不再适用了，为什么呢？

单系统登录解决方案的核心是 cookie，cookie 携带会话 id 在浏览器与服务器之间维护会话状态。但 cookie 是有限制的，这个限制就是 cookie 的域（通常对应网站的域名），浏览器发送 http 请求时会自动拾与该域匹配的 cookie，而不是所有 cookie

![images](login08.png)

### 三、单点登录

### 参考资料

- [Web 登录鉴权](https://lmjben.github.io/blog/osi-web-login.html#session-cookie)
- [单点登录原理与简单实现](https://www.cnblogs.com/ywlaker/p/6113927.html)
- [单点登录（SSO），从原理到实现](https://www.cnblogs.com/ywlaker/p/6113927.html)
- [单点登录（SSO）看这一篇就够了](https://yq.aliyun.com/articles/636281)
- [彻底理解 cookie、session、token](https://mp.weixin.qq.com/s/1Kh18uyEJzM21mc2l5MMCg)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
