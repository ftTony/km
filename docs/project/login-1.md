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

#### 3.1 攻击流程

#### 3.2 受害者张三(Resource Owner)视角

#### 3.3 Tonr 网站(Client)视角

#### 3.4 Sparklr 网站(OAuth2 服务提供者)视角

#### 3.5 攻击者李四视角

#### 3.6 上帝视角

#### 3.7 漏洞的本质

#### 3.8 前提条件

#### 3.9 防御办法

要防止这样的攻击其实很容易，作为第三方应用的开发者，只需在 OAuth 认证过程中加入 state 参数，并验证它的参数值即可。具体细节如下：

- 在将用户重定向到 OAuth2 的 Authorization Endpoint 去的时候，为用户生成一个随机的字符串，并作为 state 参数加入到 URL 中。

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
