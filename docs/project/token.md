# 彻底理解 cookie、session、token

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 什么是认证
- 什么是授权
- 什么是凭证
- 什么是Cookie
- 什么是Session
- Cookie和Session的区别
- 什么是Token（令牌）
- Token和Session的区别
- 什么是JWT
- Token和JWT的区别
- 常见的前后端端鉴权方式
- 常见的加密算法
- 常见问题

### 一、什么是认证

- 通俗地讲就是**验证当前用户的身份**，证明“你是你自己”（比如：你每天上下班打卡，都需要通过指纹打卡，当你的指纹和系统里录入的指纹相匹配时，就打卡成功）
- 互联网中的认证：
    - 用户名密码登录
    - 邮箱发送登录链接
    - 手机号接收难码
    - 手机号接收验证码
    - 只要你能收到邮箱/验证码，就默认你是账号的主人

### 二、什么是授权

- 用户授予第三方应用访问该用户某些资源的权限
    - 你在安装手机应用的时候，
    - 你在访问微信小程序时，当登录时，
- 实现授权的方式有：cookie、session、token、OAuth

### 三、什么是凭证

### 四、什么是Cookie

### 五、什么是Session

- session 是另一种记录服务器和客户端会话状态的机制
- session 是基于 cookie 实现的，session 存储在服务器端，sessionId 会被存储到客户端的cookie 中

### 六、Cookie和Session的区别

### 七、什么是Token（令牌）

### 八、Token和Session的区别

### 九、什么是JWT

### 十、Token和JWT的区别

### 十一、常见的前后端端鉴权方式

### 十二、常见的加密算法

### 十三、常见问题

### 参考资料

- [彻底理解 cookie、session、token](https://mp.weixin.qq.com/s/1Kh18uyEJzM21mc2l5MMCg)
- [傻傻分不清之 Cookie、Session、Token、JWT](https://juejin.im/post/5e055d9ef265da33997a42cc)
- [jwt 实践应用以及特殊案例思考](https://mp.weixin.qq.com/s/uxeOKy6flWXJIn4D0iqGzw)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>