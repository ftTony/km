# CI 与 CD 介绍

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 概念
- Jenkins 使用
- gitlab-ci 使用

### 一、概念

- CI 持续集成
- CD 持续交付
- CD 持续部署

#### 1.1 CI 持续集成

开发者尽量时时刻刻合并开发分支至主干分支。避免走到发布日才开始合并，掉入集成地狱。无论何时新分支集成至项目，持续集成可以自动化测试持续难应用是否正常。

#### 1.2 CD 持续交付

持续将会是持续集成的扩展，可以保证稳定的发布产品新特性。这意味着基于自动化测试，你可以也可以一键自动化发布。理论上，持续将会可以决定是按天，按周，按双周发布产品。如果确实希望能够享受特拉维夫交付的好处，那么应该尽快发布到新产品中。一旦出现问题时能尽早早排除。

#### 1.3 CD 持续部署

持续部署是持续交付的下一步。通过这一步，每个新特性都自动的部署到产品中。但是如果出现未通过的测试用例将会终止自动部署。持续部署可以加速用户反馈新特性，避免发布日带来的压力。开发可以着力于开发系统，开发结束后几分钟就可以触达到用户。

### 二、Jenkins 使用

- 安装
- 配置

#### 2.1 安装

#### 2.2 配置

### 三、Gitlab-CI 使用

**参考资料**

- [持续集成是什么？](http://www.ruanyifeng.com/blog/2015/09/continuous-integration.html)
- [持续集成 vs 持续交付 vs 持续部署](https://mp.weixin.qq.com/s/Y09_FYS2IWae24geE7tK-Q)

### 参考资料

- [前端部署发展史](https://juejin.im/post/5dc4ae67f265da4cfa7bbb9a)
- [基于 GitLab CI/CD 的自动化构建、发布实践](https://mp.weixin.qq.com/s/z2f1i2FgrVGofQR6nKTd1A)
- [基于 GitLab CI 的前端工程 CI/CD 实践](https://github.com/giscafer/front-end-manual/issues/27)
- [GitLab CI/CD 在 Node.js 项目中的实践](https://mp.weixin.qq.com/s/AY1nJA0T7YS2YnW-GNMPFQ)
- [Node+GitLab 实现小程序 CI 系统](https://mp.weixin.qq.com/s/5NsY5cj0n1AuU0-zT1VrEQ)
- [花椒前端基于 GitLab CI/CD 的自动化构建、发布实践](https://mp.weixin.qq.com/s/0VtDFv5bxJp2OyJGufBV0w)
- [微信小程序工程化之持续集成方案](https://mp.weixin.qq.com/s/k16SjTN7__iRB_7q78hldg)
- [让自动化工作流解放你的双手](https://mp.weixin.qq.com/s/MJX5pVwugKsRO__fjhPVmg)
- [要进大厂？前端灰度发布必须要知道](https://mp.weixin.qq.com/s/54GgUM1saYvZCRP1sJ0Kug)
- [【第 1805 期】一种前端灰度发布方案](https://mp.weixin.qq.com/s/IT65m3VwlAhXusipB6wa2g)
- [Jenkins 打造强大的前端自动化工作流](https://juejin.im/post/5ad1980e6fb9a028c42ea1be)
- [一文搞定前端 Jenkins 自动化部署](https://mp.weixin.qq.com/s/DLXnbY3AcZHMgrPw0T28mQ)
- [使用阿里云 OSS 与 github actions 自动托管个人网站](https://mp.weixin.qq.com/s/DPPOeWHShkasvKAxwH30JA)
- [Jenkins 实现前端自动打包,自动部署代码及邮件提醒功能](https://www.cnblogs.com/tugenhua0707/p/11949644.html)
- [【第 1139 期】基于 Gitlab CI 搭建持续集成环境](https://mp.weixin.qq.com/s/0hss-qGPjsvYOGkprGjW9g)
- [【第 923 期】基于 Git、Svn 的 Commit 实现可增量构建的前端持续集成解决方案](https://mp.weixin.qq.com/s/E31b-hF9yNWLOt3bNBIXCA)
- [网易云音乐前端模块动态下发系统](https://zhuanlan.zhihu.com/p/91386560)
- [用 travis 和 git hook 搞个一键部署](https://segmentfault.com/a/1190000005804780)
- [Travis-CI 自动化测试并部署至自己的 CentOS 服务器](https://juejin.im/post/5a9e1a5751882555712bd8e1)
- [用 Travis CI 打造大前端持续集成和自动化部署](https://juejin.im/post/5c9b3934f265da60d429046d)
- [Github + Jenkins + Docker 实现自动化部署](https://github.com/mcuking/blog/issues/61)
- [抛弃 jenkins，使用 node 从零搭建自动化部署管理平台](https://mp.weixin.qq.com/s/UVcZh0QE8g52Iv5UB_61tQ)
- [《大前端进阶 Node.js》系列 P6 必备脚手架/CI 构建能力（上）](https://juejin.im/post/5e7a22a8e51d4526d87c99ed)
- [《大前端进阶 Node.js》系列 P6 必备脚手架/CI 构建能力（下）](https://juejin.im/post/5e835ef6f265da47a7411b06)
- [记录一次 docker+jenkins+gitlab 搭建内网开发环境](https://mp.weixin.qq.com/s/c648RasQ6yg4NtOpAE55LA)
- [docker + webhook 从零实现前端自动化部署](https://juejin.im/post/5ef4c7eff265da230b52dfc5)
- [知乎部署系统演进](https://zhuanlan.zhihu.com/p/60627311)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
