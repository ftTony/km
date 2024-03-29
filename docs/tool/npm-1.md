# 私有 npm 仓库搭建

## 前言

随着公司的业务越来越复杂，项目迭代速度也越来越快，那么项目间的常用的业务代码共享变得非常之有必要。但是对于公司的业务代码是不能对外开放的，因此有必要搭建一个类似于 `http://npmjs.org`这个的一个私有平台来管理公司业务相关的组件及代码。

更简单的描述就是我们需要在公司内部搭建一个 npm 仓库，管理包的同时，也可以借助 npm 的命令行工具快速用代码模块或业务组件。

但是在没有 npm 私有仓库之前，我们都是手动复制某个项目的某个模块到相关的项目中，这样操作比较繁琐，因此我们需要一个 npm 私有仓库存放相关公用的组件及模块。

## 内容

- [npm 及私有 npm 的工作原理？](#一、npm-及私有-npm-的工作原理？)
- [如何搭建一个私有的 npm 仓库呢？](#二、如何搭建一个私有的-npm-仓库呢？)
- [cnpm 搭建](#三、cnpm-搭建-我没试过，大家可以尝试一下)
- [通过 verdaccio 搭建](#四、通过-verdaccio-搭建)

### 一、npm 及私有 npm 的工作原理？

我们使用 npm 安装，共享和分发代码，npm 帮助我们管理项目中的依赖关系，当我们使用 npm install 去安装一个模块时，会先检查 node_modules 目录是否已经存在这个模块，如果没有便会向远程仓库查询。

那现在如果我们搭建了私有的 npm，当我们使用 npm install 后会向私有的 npm 发起请求，服务器会先查询所请求的这个模块是否是我们自己的私有模块或已经缓存过的公共模块，如果是则直接返回给用户，如果不是的话，那么则会继续向上查找(也就是开源的 npm 仓库)去查找该模块并返回给用户。

### 二、如何搭建一个私有的 npm 仓库呢？

搭建 npm 仓库一般有如下基本方法：

1. 使用 Sinopia
2. 使用 cnpmjs.org

### 三、cnpm 搭建(我没试过，大家可以尝试一下)

[官方网站](https://github.com/cnpm/cnpmjs.org)

- [安装 cnpm](#31-安装cnpm)
- [启动并配置服务](#32-启动并配置服务)
- [设置注册地址](#33-设置注册地址)
- [登录 cnpm](#34-登录cnpm)
- [包上传到私有仓库](#35-包上传到私有仓库)
- [查看预览包](#36-查看预览包)
- [安装私有包](#37-安装私有包)

#### 3.1 安装 cnpm

```
npm install -g --build-from-source cnpmjs.org cnpm sqlite3
# 如果报错或者警告通过下面方式安装
npm install -g --unsafe-perm --verbose --build-from-source cnpmjs.org cnpm sqlite3

```

如果安装不流畅通过下面形式安装：

```
npm install -g --build-from-source \
  --registry=https://registry.npm.taobao.org \
  --disturl=https://npm.taobao.org/mirrors/node \
  cnpmjs.org cnpm sqlite3

```

如果报警告或者安装错误，请添加参数`--unsafe-perm --verbose`

#### 3.2 启动并配置服务

> 管理员：myname,othername
> 范围：my-company-name,other-name
> 默认端口：7001-registry, 7002-web

启动服务

```
$ nohup cnpmjs.org start --admins='myname,othername' \
  --scopes='@my-company-name,@other-name' &
```

#### 3.3 设置注册地址

将 cnpm 默认注册地址更改为私有注册地址

```
cnpm set registry http://localhost:7001
```

#### 3.4 登录 cnpm

```
$ cnpm login
Username: myname
Password: ***
Email: (this IS public) test@test.com
```

#### 3.5 包上传到私有仓库

新建项目

```
$ cd /tmp
$ mkdir helloworld && cd helloworld
$ cnpm init
name: (helloworld) @my-company-name/helloworld
version: (1.0.0)

{
  "name": "@my-company-name/helloworld",
  "version": "1.0.0",
  "description": "my first scoped package",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

```

上传到私有仓库

```
$ cnpm publish
+ @my-company-name/helloworld@1.0.0
```

#### 3.6 查看预览包

浏览器中预览

```
open http://localhost:7002/@my-company-name/helloworld
```

使用`cnpm`预览

```
cnpm info
```

#### 3.7 安装私有包

所有公共包都可直接使用`cnpm`安装

```
cnpm install hotkeys-js
```

### 四、通过 verdaccio 搭建

[verdaccio](https://github.com/verdaccio/verdaccio)是一个轻量级的私有 npm 代理注册。

- [安装](#41-安装)
- [启动服务](#42-启动服务)
- [添加用户/登录](#43-verdaccio的使用)

#### 4.1 安装

```
# 使用 npm 安装
npm install -g verdaccio

```

#### 4.2 启动服务

安装完成后，我们就可以在命令行中 输入`verdaccio`命令运行，如下所示：

![](verdaccio05.png)

然后在浏览器中 运行`http://localhost:4873`就可以看到 如下图所示：

![](verdaccio04.png)

说明服务启动成功了；

当然还可以通过 pm2 启动，这里不重复说明，有兴趣可以参考相关资料。

#### 4.3 verdaccio 的使用

在使用 verdaccio 之前，我们可以先安装 nrm 来管理自己的 npm 代理，nrm 可以快速修改，切换，增加 npm 镜像地址。

先安装 nrm，命令如下：

```
npm install -g nrm
```

想要了解更多有关的 nrm 命令，可以使用 nrm --help, 会列出所有的命令行的。

- [添加别名](#431-添加别名)
- [发布私有包](#432-发布私有包)
- [npm 下载包](#433-npm下载包)

##### 4.3.1 添加别名

我这边为了演示下，搭建的地址为`http://localhost:4873`，你们自己可以修改自己的服务器 ip 地址了；如下命令：

```
nrm add verdaccio http://localhost:4873
```

![](verdaccio.png)

现在我们可以使用 nrm ls 命令查看 使用的所有镜像源地址，verdaccio 就是我们刚刚新增的，如下图所示：

![](verdaccio01.png)

如果我们现在不想从私有 npm 上下载包的话，我们可以使用 nrm use xx 命令，use 下地址。

```
npm adduser --registry  http://localhost:4873
```

##### 4.3.2 发布私有包

首先建立一个私有模块

```
# 假设你建立了一个Git仓库，先克隆下来
git clone git@km-git1.kemai.cn:xiaonengwu/hello.git

# 生成 `package.json` 配置, 注意限定 `@scope` 范围
npm init --scope=xdd
# 提交到仓库
git push origin master

```

如果我们还没有账号的话，通过输入命令 npm adduser, 然后依次输入用户名，密码即可创建完毕。如果已有账号，通过输入命令 npm login，然后依次输入用户名，密码即可登录。命令分别如下：

```
// 添加用户
npm adduser 记得回车

// 登录
npm login

```

然后发布我们的代码：我们可以使用 npm publish 命令来发布包；如下所示：

```
npm publish --registry http://localhost:4873
```

发布完成后，在刷新下 http://localhost:4873/#/ 就可以看到我们刚刚发布的包了，如图

![](verdaccio02.png)

##### 4.3.3 npm 下载包

最后我们再验证下，我们新建一个文件夹为 npmtest2，进入到该项目的根目录下，使用命令 npm install @xdd/hello 下载我们刚刚发布到私有的 npm 包；

如下图所示：

![](verdaccio03.png)

### 参考资料

- [使用 verdaccio 搭建 npm 私有仓库](https://www.cnblogs.com/tugenhua0707/p/9163167.html)
- [在 5 分钟内搭建企业内部私有 npm 仓库](https://github.com/jaywcjlove/handbook/blob/master/CentOS/%E5%9C%A85%E5%88%86%E9%92%9F%E5%86%85%E6%90%AD%E5%BB%BA%E4%BC%81%E4%B8%9A%E5%86%85%E9%83%A8%E7%A7%81%E6%9C%89npm%E4%BB%93%E5%BA%93.md)
- [前端高级进阶：在生产环境中使你的 npm i 速度提升 50%](https://mp.weixin.qq.com/s/2_0kGRXC2xNcaTf_SC8wSQ)
- [node_modules 困境](https://mp.weixin.qq.com/s/TU6rvx6vWQWROaxqO3qDsA)
- [2018 年了，你还是只会 npm install 吗？](https://juejin.im/post/5ab3f77df265da2392364341)
- [从零开始搭建企业级私有鉴权 NPM 仓库](https://mp.weixin.qq.com/s/mmG0rILkwqglBAcpb3LsCQ)
- [分分钟教会你搭建企业级的 npm 私有仓库](https://juejin.im/post/5eef64de518825658c1ad1f6)
- [使用 verdaccio 搭建 npm 私有源](https://juejin.im/post/5e4b5cd6f265da57503cbed2)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
