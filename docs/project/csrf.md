# CSRF 攻击

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [什么是 CRSF](#一、什么是-crsf)
- [CRSF 原理是什么](#二、crsf-原理是什么)
- [CRSF 防御手段](#三、crsf-防御手段)

### 一、什么是 CRSF

CSRF（Cross Site Request Forgery），中文是跨站点请求伪造。CSRF 攻击者在用户已经登录目标网站之后，诱使用户访问一个攻击页面，利用目标网站对用户的信任，以用户身份在攻击页面对目标网站发起伪造用户操作的请求，达到攻击目的。

### 二、CRSF 原理是什么

![](csrf.jpg)

从上图可以看出，要完成一次 CSRF 攻击，受害者必须依次完成两个步骤：

1. 登录受信任网站 A，并在本地生成 Cookie。
1. 在不登出 A 的情况下，访问危险网站 B。

示例一、使用 get 请求

银行网站 A，它以 GET 请求来完成银行转账的操作，如：`http://www.mybank.com/Transfer.php?toBankId=11&money=1000`

危险网站 B，它里面有一段 HTML 的代码如下：

`<img src=http://www.mybank.com/Transfer.php?toBankId=11&money=1000>`

银行网站 A 违反了 HTTP 规范，使用 GET 请求更新资源。在访问危险网站 B 的之前，你已经登录了银行网站 A，而 B 中的<img>以 GET 的方式请求第三方资源（这里的第三方就是指银行网站了，原本这是一个合法的请求，但这里被不法分子利用了），所以你的浏览器会带上你的银行网站 A 的 Cookie 发出 Get 请求，去获取资源`http://www.mybank.com/Transfer.php?toBankId=11&money=1000`，结果银行网站服务器收到请求后，认为这是一个更新资源操作（转账操作），所以就立刻进行转账操作......

示例二、使用 POST 请求完成转账操作

```
<html>
　　<head>
　　　　<script type="text/javascript">
　　　　　　function steal()
　　　　　　{
          　　　　 iframe = document.frames["steal"];
　　     　　      iframe.document.Submit("transfer");
　　　　　　}
　　　　</script>
　　</head>

　　<body onload="steal()">
　　　　<iframe name="steal" display="none">
　　　　　　<form method="POST" name="transfer"　action="http://www.myBank.com/Transfer.php">
　　　　　　　　<input type="hidden" name="toBankId" value="11">
　　　　　　　　<input type="hidden" name="money" value="1000">
　　　　　　</form>
　　　　</iframe>
　　</body>
</html>
```

总结：CSRF 攻击是源于 WEB 的隐式身份验证机制！WEB 的身份验证机制虽然可以保证一个请求是来自于某个用户的浏览器，但却无法保证该请求是用户批准发送的！

### 三、CRSF 防御手段

目前防御 CSRF 攻击主要有三种策略

- 验证 HTTP Referer 字段；
- 在请求地址中添加 token 并验证；
- 在 HTTP 头中自定义属性并验证;
- 充分利用好 Cookie 的 SameSite 属性;

#### 3.1 验证 http referer 字段

根据 HTTP 协议，在 HTTP 头中有一个字段叫 Referer，它记录了该 HTTP 请求的来源地址。在通常情况下，访问一个安全受限页面的请求来自于同一个网站，比如需要访问`http://bank.example/withdraw?account=bob&amount=1000000&for=Mallory`，用户必须先登陆 bank.example，然后通过点页面上的按钮来触发转帐事件。这时，该转帐请求的 Referer 值就是转账按钮所在页面的 URL，通常是以 bank.example 域名开头的地址。而如果黑客要对银行网站实话 CSRF 攻击，他只能在他自己的网站构造请求，当用户通过黑客的网站发送请求到银行时，该请求的 Referer 是指向黑客自己的网站。因此，要防御 CSRF 攻击，银行网站只需要对于每一个转账请求验证期 Referer 值，如果是以 bank.example 域名开头，则说明该请求是来自银行网站自己的请求，是合法的。如果 Referer 是其他网站的话，则有可能是黑客的 CSRF 攻击，拒绝该请求。

这种方法的显而见的好处就是简单易行，网站的普通人员不需要操心 CSRF 的漏洞，只需要在最后给所有安全敏感的请求统一个拦截器来检查 Referer 的值就可以。特别是对于当前现有的系统，不需要改变当前系统任何已有代码和逻辑，没有风险，非常便捷。

然而，这种方法并非万无一失。Referer 的值是由浏览器提供的，虽然 HTTP 协议上有明确的要求，但是每个浏览器对于 Referer 的具体实现可能有差别，并不能保证浏览器自身没有安全漏洞。使用验证 Referer 值的方法，就是把安全性都依赖于第三方（即浏览器）来保障，从理论上来讲，这样并不安全。事实上，对于某些浏览器，比如 IE6 或 FF2，目前一些方法可以篡改 Referer 值。如果 bank.example 网站支持 IE6 浏览器，黑客完全可以把用户浏览器的 Referer 值设为以 bank.example 域名开头的地址，这样就可以通过验证，从而进行 CSRF 攻击。

即使是使用最新浏览器，黑客无法篡改 Referer 值，这种方法仍然有问题。因为 Referer 值会记录下用户的访问来源，有些用户认为这样会侵犯到他们自己的隐私权，特别是有些组织担心 Referer 值会把组织内网中某信息泄露到外网中。因此，用户自己可以设置浏览器使其在发送请求时不再提供 Referer。当他们正常访问银行网站时，网站会因为请求没有 Referer 值而认为是 CSRF 攻击，拒绝合法用户的访问。

#### 3.2 在请求地址中添加 token 并验证

CSRF 攻击之所能够成功，是为黑客可以完全伪造用户的请求，该请求中用户验证信息都是存在于 cookie 中，因此黑客可以不知道这此验证的情况下直接利用用户自己的 cookie 来通过安全验证。要抵御 CSRF，关键在于在请求中放入黑客所不能伪造的信息，并且该信息不存在于 cookie 之中。可以在 HTTP 请求中以参数的形式加入一个随机产生的 token，并在服务器端建立一个拦截器来验证这个 token，如果请求中没有 token 或者内容不正确，则认为可能是 csrf 攻击而拒绝该请求。

这种方法要比检查 referer 要安全一些，token 可以在用户登陆报到产生并放于 session 之中，然后在每次请求时把 token 从 session 中拿出，与请求中的 token 进行比对，但这种方法的难点在于如何把 token 以参数的形式加入请求。对于 GET 请求，token 将附在请求地址之后，这样 URL 就变成 `http://url?csrftoken=tokenvalue`。而对于 POST 请求来说，要在 form 的最后加上`<input type=”hidden” name=”csrftoken” value=”tokenvalue”/>`，这样就把 token 以参数的形式加入请求了。但是，在一个网站中，可以接受请求的地方非常多，要对于每一个请求都加上 token 是很麻烦的，并且很容易漏掉，通常使用的方法就是在每次页面加载时，使用 javasript 遍历整个 dom 树，对于 dom 中所有的 a 和 form 标签后加入 token。这样可以解决大部分的请求，但是对于在页面加载之后动态的 htmtl 代码，这种方法就没有作用，还需要程序员手动添加 token。

该方法还有一个缺点是难以保证 token 本身的安全。特别是在一些论坛之类支持用户自己发表内容的网站，黑客可以在上面发布自己个人网站的地址。由于系统也会在这个地址后面加上 token，黑客可以在自己的网站上得到这个 token，并马上就可以发动 CSRF 攻击。为了避免这一点，系统可以在添加 token 的时候增加一个判断，如果这个链接是链到自己本站的，就在后面添加 token，如果是通向外网则不加。不过，即使这个 csrftoken 不以参数的形式附加在请求之中，黑客的网站也同样可以通过 Referer 来得到这个 token 值以发动 CSRF 攻击。这也是一些用户喜欢手动关闭浏览器 Referer 功能的原因。

#### 3.3 在 HTTP 头中自定义属性并验证

这种方法也是使用 token 并进行验证，和上一种方法不同的是，这里并不是把 token 以参数的形式置于 HTTP 请求之中，而是把它放到 HTTP 头中自定义的属性里。通过 XMLHttpRequest 这个类，可以一次性给所有该类请求加上 csrftoken 这个 HTTP 头属性，并把 token 值放入其中。这样解决了上种方法在请求中加入 token 的不便，同时，通过 XMLHttpRequest 请求的地址不会被记录到浏览器的地址栏，也不用担心 token 会透过 Referer 泄露到其他网站中去。 然而这种方法的局限性非常大。XMLHttpRequest 请求通常用于 Ajax 方法中对于页面局部的异步刷新，并非所有的请求都适合用这个类来发起，而且通过该类请求得到的页面不能被浏览器所记录下，从而进行前进，后退，刷新，收藏等操作，给用户带来不便。另外，对于没有进行 CSRF 防护的遗留系统来说，要采用这种方法来进行防护，要把所有请求都改为 XMLHttpRequest 请求，这样几乎是要重写整个网站，这代价无疑是不能接受的。

#### 3.4 充分利用好 Cookie 的 SameSite 属性

通常 CSRF 攻击都是从第三方站点发起的，要防止 CSRF 攻击，我们最好能实现从第三方站点发送请求时禁止 Cookie 的发送，因此在浏览器通过不同来源发送 HTTP 请求时，有如下区别：

- 如果是从第三方站发起的请求，那么需要浏览器禁止发送某些关键 Cookie 数据到服务器；
- 如果是同一个站点发起的请求，那么就需要保证 Cookie 数据正常发送。

Cookie 中的 SameStie 属性是为了解决这个问题的，通过使用 SameSite 可以有效地降低 SCRF 攻击的风险。

在 HTTP 响应头中，通过 set-cookie 字段设置 Cookie 时，可以带上 SameSite 选项，如下：

```
set-cookie: 1P_JAR=2019-10-20-06; expires=Tue, 19-Nov-2019 06:36:21 GMT; path=/; domain=.google.com; SameSite=none
```

**SameSite 选项通常有 Strict、Lax 和 None 三个值。**

### 参考资料

- [CSRF 攻击的应对之道](https://www.ibm.com/developerworks/cn/web/1102_niugang_csrf/)
- [浅谈 CSRF 攻击方式](http://www.cnblogs.com/hyddd/archive/2009/04/09/1432744.html)
- [34 | CSRF 攻击：陌生链接不要随便点](https://time.geekbang.org/column/article/154110)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
