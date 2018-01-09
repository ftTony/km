# OAuth 授权工作原理

## 前言

[OAuth](http://en.wikipedia.org/wiki/OAuth) 是一个关于授权的开放网络标准，在全世界得到广泛应用，目前的版本是 2.0 版。

## 内容

- 应用场景
- OAuth2 机制实现流程
- 针对 OAuth2 的 CSRF 攻击

### 一、应用场景

在互联网中，主要应用于第三方登录，比如微信登录、QQ 登录、FaceBook 登录。

**OAuth 就是一种授权机制。数据的所有者告诉系统，同意授权第三方应用进入系统，获取这些数据。系统从而产生一个短期的进入令牌（token），用来代替密码，供第三方应用使用。**

### 二、OAuth2 机制实现流程

OAuth 认证的整个运行流程：

- 客户端在自己站点实现 163 的第三方认证之前，需要到 163 服务提供商申请帐号，其中的账号有两张门票，一张门票叫 App Id，另一张门票叫做 Secret。
- 登录网站`a.com`。
- 重定向到网易授权登录，带上回调地址`www.163.com?appid=xxx&return_uri=a.com/callback`。
- 在网易中会带上具体授权的类型（可自定义选择权限），然后输入网易账号和密码，提交登录。
- 登陆后被重定向会`a.com?code=123`带上一个授权码`code`。
- 接下来`a.com`会根据`code`和另一张门票`Secret`，去请求网易服务器（该请求是 POST 的），获取网易颁发的`token`。
- 接下来`a.com`直接使用`token`去网易服务器获取数据。
- 登录成功。

![images](login01.jpg)

### 三、针对 OAuth2 的 CSRF 攻击

- 攻击流程
- 受害者张三(Resource Owner)视角
- Tonr 网站(Client)视角
- Sparklr 网站(OAuth2 服务提供者)视角
- 攻击者李四视角
- 上帝视角
- 漏洞的本质
- 前提条件
- 防御办法

#### 3.1 攻击流程

让我们来看一个针对 OAuth2 的 CSRF 攻击的例子。假设有用户张三，和攻击者李四，还有一个第三方 Web 应用 Tonr，它集成了第三方社交账号登录，并且允许用户将社交账号和 Tonr 中的账号进行绑定。此外还有一个 OAuth2 服务提供者 Sparkir。

![images](login12.png)

1. 攻击者李四登录 Tonr 网站，并且选择绑定自己的 Sparkir 账号
2. Tonr 网站将李四重定向到 fSparkir，由于他之前已经登录过 Sparkir，所以 Sparkir 直接向他显示“是否授权 Tonr 访问”的页面。
3. 李四在点击“同意授权”之后，截获 Sparkir 服务器返回的含有 Authorization Code 参数的 HTTP 响应。
4. 李四精心构造一个 Web 页面，它会触发 Tonr 网站

#### 3.2 受害者张三(Resource Owner)视角

#### 3.3 Tonr 网站(Client)视角

#### 3.4 Sparklr 网站(OAuth2 服务提供者)视角

#### 3.5 攻击者李四视角

#### 3.6 上帝视角

#### 3.7 漏洞的本质

这个总是的关键点在于，OAuth2 的认证流程是分为好几步来完成的，在图 1 的第 4 步

#### 3.8 前提条件

尽管这个攻击

#### 3.9 防御办法

要防止这样的攻击其实很容易，作为第三方应用的开发者，只需在 OAuth 认证过程中加入 state 参数，并验证它的参数值即可。具体细节如下：

- 在将用户重定向到 OAuth2 的 Authorization Endpoint 去的时候，为用户生成一个随机的字符串，并作为 state 参数加入到 URL 中。
- 在收到 OAuth2 服务提供者返回的 Authorization Code 请求的时候，难接收到的 state 参数值。如果是正确合法的请求，那么此时接受到参数值应该和上一步提到的为该用户生成的 state 参数值完全一致，否则就是异常请求。
- state 参数值需要具备下面几个特性：
  - 不可预测性：足够的随机，舍不得攻击难以猜到正确的参数值
  - 关联性：state 参数值和当前用户会话（user session）是相互关联的
  - 唯一性：每个用户，甚至每次请求生成的 state 参数值都是唯一的
  - 时效性：state 参数一旦被使用则立即失效

### 参考资料

- [简述 OAuth 2.0 的运作流程](https://www.barretlee.com/blog/2016/01/10/oauth2-introduce/)
- [移花接木：针对 OAuth2 的攻击](http://insights.thoughtworkers.org/attack-aim-at-oauth2/)
- [OAuth 授权的工作原理是怎样的？足够安全吗？](https://www.zhihu.com/question/19781476/answer/81020455)
- [理解 OAuth 2.0](http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html)
- [第三方登录 OAuth](https://lmjben.github.io/blog/osi-web-login.html#%E7%AC%AC%E4%B8%89%E6%96%B9%E7%99%BB%E5%BD%95-oauth)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
