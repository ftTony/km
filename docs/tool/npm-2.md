# npm 常见配置

## 前言

`npm`在前端开发流程中提供了非常完善的自动化工具链，已成为每个前端开发者必备的工具，但是同样由于其强大性导致很多前端开发者只会简单的使用它。本文将总结在日常开发中所需要的`npm`知识点，以便开发者们更好的将`npm`运用在实际开发中。

## 内容

- npm 处理 node_modules 目录结构
- npm 中的依赖包
- npm scripts 脚本
- npm 配置
- npm 工程管理
- npm 的几个实用技巧

### 一、npm 处理 node_modules 目录结构

一个项目开发、上线所依赖的插件包都存放在`node_modules`中。虽然在实际开发中无需关注这个目录里面的文件结构细节，但了解`node_modules`中的内容可以帮助我们更好的理解`npm`组织这些文件的机制。

假设项目`App`中有如下三个依赖：

```
"dependencies": {
    A: "1.0.0",
    B: "1.0.0",
    C: "1.0.0"
}
```

`A`、`B`、`C`三个模块又有如下依赖：

```
A@1.0.0 -> D@1.0.0

B@1.0.0 -> D@2.0.0

C@1.0.0 -> D@1.0.0
```

#### 1.1 npm 2.x - 嵌套结构

`npm 2.x`安装依赖方式比较简单直接，以递归的方式，按照包依赖的树形结构下载填充本地目录结构，也就是说每个包都会将该包依赖安装到当前包所在的`node_modules`目录中。

执行`npm install`后，项目`App`的`node_modules`会变成如下目录结构：

```
├── node_modules
│   ├── A@1.0.0
│   │   └── node_modules
│   │   │   └── D@1.0.0
│   ├── B@1.0.0
│   │   └── node_modules
│   │   │   └── D@2.0.0
│   └── C@1.0.0
│   │   └── node_modules
│   │   │   └── D@1.0.0
```

很显然这样的依赖组织结构，有如下优点：

- 层级结构明显
- 简单的实现多版本兼容
- 保证了对依赖包无论是安装还是删除都会有统一的行为和结构

但是缺点也一样明显：

- 可能造成相同模块大量冗余问题
- 可能造成目录结构嵌套比较深的问题

#### 1.2 npm 3.x - 扁平结构

`npm 3.x`则采用了扁平化的结构来安装组织`node_modules`。也就是在执行`npm install`的时候，按照`package.json`里依赖的顺序依次解析，**遇到新的包就把它安装在第一级目录，后续安装如果遇到一级目录已经存在的包，会先按照约定版本判断版本，如果符合版本约定则忽略，否则会按照`npm 2.x`的方式依次挂在依赖包目录下。**

还以项目`App`为例，在`npm 3.x`环境下，执行`npm install`后，`node_modules`会变成如下目录结构：

```
├── node_modules
│   ├── A@1.0.0
│   ├── D@1.0.0
│   ├── B@1.0.0
│   │   └── node_modules
│   │   │   └── D@2.0.0
│   └── C@1.0.0
```

>模块的安装次序决定了`node_modules`中的目录结构，`npm`会优先将模块安装在根目录下的`node_modules`中。

再在项目中安装模块`E@1.0.0`（依赖于模块`D@2.0.0`），目录结构变为：

```
├── node_modules
│   ├── A@1.0.0
│   ├── D@1.0.0
│   ├── B@1.0.0
│   │   └── node_modules
│   │   │   └── D@2.0.0
│   └── C@1.0.0
│   ├── E@1.0.0
│   │   └── node_modules
│   │   │   └── D@2.0.0
```

`B`、`E`模块下都包含了依赖的模块`D@2.0.0`，存在代码冗余的情况。

再在项目中安装模块`F@1.0.0`（依赖于模块`D@1.0.0`）。由于`D@1.0.0`已经存在于项目根目录下的`node_modules`下，所以在安装F模块的时候，无需再在其依赖包中安装`D@1.0.0`模块，目录结构变为：

```
├── node_modules
│   ├── A@1.0.0
│   ├── D@1.0.0
│   ├── B@1.0.0
│   │   └── node_modules
│   │   │   └── D@2.0.0
│   └── C@1.0.0
│   ├── E@1.0.0
│   │   └── node_modules
│   │   │   └── D@2.0.0
│   └── F@1.0.0
```

从以上结构可以看出，`npm 3.x`并没有完美的解决`npm 2.x`中的问题，甚至还会退化到`npm 2.x`的行为。

为了解决目录中存在很多副本的情况，（在`A`、`C`模块的依赖模块`D`升级到`2.0.0`前提下）可以通过`npm dedupe`指令把所有二级的依赖模块D@2.0.0重定向到一级目录下：

```
├── node_modules
│   ├── A@1.0.0
│   ├── D@2.0.0
│   ├── B@1.0.0
│   └── C@1.0.0
│   ├── E@1.0.0
│   └── F@1.0.0
```

>`node_modules`路径查找机制：模块再找对应的依赖包时，nodejs会尝试从当前模块所在目录开始，尝试在它的`node_modules`文件夹里加载相应模块，如果没有找到，那么就再向上一级目录移动，直到全局安装路径中的`node_modules`为止。

#### 1.3 npm 5.x - package-lock.json

从`npm 5.x`开始，安装组织`node_modules`和`npm 3.x`一样采用了扁平的方式，最大的变化是增加了[package-lock.json](https://docs.npmjs.com/files/package-lock.json)文件。

`npm`为了让开发者在安全的前提下使用最新的依赖包，在`package.json`中通常做了锁定大版本的操作，这样在每次`npm install`的时候都会拉取依赖包大版本下的最新的版本。这种机制最大的一个缺点就是当有依赖包有小版本更新时，可能会出现协同开发者的依赖包不一致的问题。

`package-lock.json`文件精确描述了`node_modules`目录下所有的包的树状依赖结构，每个包的版本号都是完全精确的。以`sass-loader`在`package-lock.json`中为例：

```
"dependencies": {
  "sass-loader": {
    "version": "7.1.0",
    "resolved": "http://registry.npm.taobao.org/sass-loader/download/sass-loader-7.1.0.tgz",
    "integrity": "sha1-Fv1ROMuLQkv4p1lSihly1yqtBp0=",
    "dev": true,
    "requires": {
      "clone-deep": "^2.0.1",
      "loader-utils": "^1.0.1",
      "lodash.tail": "^4.1.1",
      "neo-async": "^2.5.0",
      "pify": "^3.0.0",
      "semver": "^5.5.0"
    },
    "dependencies": {
      "pify": {
        "version": "3.0.0",
        "resolved": "http://registry.npm.taobao.org/pify/download/pify-3.0.0.tgz",
        "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY=",
        "dev": true
      }
    }
  }
}
```

`package-lock.json`的详细描述主要由`version`、`resolved`、`integrity`、`dev`、`requires`、`dependencies`这几个字段构成：

- `version`：包唯一的版本号
- `resolved`：安装源
- `integrity`：表明包完整性的hash值（验证包是否已失效）
- `dev`：如果为true，则此依赖关系仅是顶级模块的开发依赖关系或者是一个的传递依赖关系
- `requires`：依赖包所需要的所有依赖项，对应依赖包`package.json`里`dependencies`中的依赖项
- `dependencies`：依赖包`node_modules`中依赖的包，与顶层的`dependencies`一样的结构

在上面的`package-lock.json`文件中可以发现，在`requires`和`dependencies`中都存在`pify`依赖项。那我们顺便去`node_modules`里面探下究竟：

1. 打开根目录的`node_modules`会发现安装了`sass-loader`所需要的所有依赖包，这些依赖包中除了`pify`以外，所有依赖包的大版本号都与`sass-loader`所需要的一致。
2. 到根目录的`node_modules`找到`pify`依赖包，发现版本为`4.0.1`。
3. 找到`sass-loader`项目依赖包，打开其`node_modules`发现其中也存在个`pify`依赖包，但版本为`3.0.0`。这个版本的`sass-loader`真正依赖的是这个版本的`pify`。

通过以上几个步骤，也验证了之前阐述过的`npm 5.x`是扁平化处理依赖的方式。

在开发一个应用时，建议把`package-lock.json`文件提交到代码版本仓库，从而让你的团队成员、运维部署人员或`CI`系统可以在执行`npm install`时安装的依赖版本都是一致的。

但是在开发一个库时，则不应把`package-lock.json`文件发布到仓库中。实际上，`npm`也默认不会把`package-lock.json`文件发布出去。之所以这么做，是因为库项目一般是被其他项目依赖的，在不写死的情况下，就可以复用主项目已经加载过的包，而一旦库依赖的是精确的版本号那么可能会造成包的冗余。

### 二、npm 中的依赖包

#### 2.1 依赖包分类

在`node`中其实总共5种依赖：

- **dependencies - 业务依赖**
- **devDependencies - 开发依赖**
- **peerDependencies - 同伴依赖**
- **bundledDependencies / bundleDependencies - 打包依赖**
- **optionalDependencies - 可选依赖**

作为`npm`的使用者，我们常用的依赖是`dependencies`和`devDependencies`，剩下三种依赖则是作为包的发布才会使用到的字段。

**dependencies**

这种依赖在项目最终上线或者发布`npm`包时所需要，即其中的依赖项应该属于线上代码的一部分。比如框架`vue`，第三方的组件库`element-ui`等，这些依赖包都是必须装在这个选项里供生产环境使用。

通过命令`npm install/i packageName -S/--save`把包装在此依赖项里。如果没有指定版本，直接写一个包的名字，则安装当前`npm`仓库中这个包的最新版本。如果要指定版本的，可以把版本号写在包名后面，比如`npm i vue@3.0.1 -S`。

>从`npm 5.x`开始，可以不用手动添加`-S/--save`指令，直接执行`npm i packageName`把依赖包添加到`dependencies`中去。

**devDependencies**

这种依赖只在项目开发时所需要，即其中的依赖项不应该属于线上代码的一部分。比如构建工具webpack、gulp，预处理器babel-loader、scss-loader，测试工具e2e、chai等，这些都是辅助开发的工具包，无须在生产环境使用。

通过命令npm install/i -D/--save-dev把包安装成开发依赖。如果想缩减安装包，可以使用命令npm i --production忽略开发依赖，只安装基本依赖，这通常在线上机器（或者QA环境）上使用。

>千万别以为只有在dependencies中的模块才会被一起打包，而在devDependencies中的不会！模块能否被打包，取决于项目里是否被引入了该模块！在业务项目中dependencies和devDependencies没有什么本质区别，只是单纯的一个规范作用，在执行npm i时两个依赖下的模块都会被下载；而在发布npm包的时候，包中的dependencies依赖项在安装该包的时候会被一起下载，devDependencies依赖项则不会。

**peerDependencies**

**bundledDependencies**

**optionalDependencies**

#### 2.2 依赖包版本号

`npm`采用了`semver`规范作为依赖版本管理方案。

按照`semver`的约定，一个`npm`依赖包的版本格式一般：**主版本号.次版本号.修订号(`x.y.z`)**，每个号的含义是：

- **主版本号**(也叫大版本，`major version`)

    大版本的发动很可能是一次颠覆性的发动，也就意味着可能存在与低版本不兼容的`API`或者用法，（比如`vue 2->3`）。

- **次版本号**(也叫小版本，`minor version`)

    小版本的发动应当兼容同一个大版本内的`API`和用法，因此应该让开发者无感。所以我们通常只说大版本号，很少会精确到小版本号。

    >如果大版本是0的话，表示软件处于初始阶段，一切都可能随时被改变，可能每个小版本之间也会存在不兼容性。所以在选择依赖时，尽量避开大版本号是0的包。

- **修订号**(也叫补丁版本，`patch`)

    一般用于修改`bug`或者很细微的变更，也需要保持向前兼容。

常见的几个版本格式如下：

- **“1.2.3”**
- **“^1.2.3”**
- **“~1.2.3”**
- **"1.x" 、"1.X"、1.*"、"1"、"*"**
- **"1.2.3-beta.1"**

#### 2.3 依赖包版本管理

`npm 2.x/3.x`已成为过去式，在`npm 5.x`以上环境下（版本最好在`5.6`以上，因为在`5.0 ~ 5.6`中间对`package-lock.json`的处理逻辑更新过几个版本，`5.6`以上才开始稳定），管理项目中的依赖包版本你应该知道（以`^`版本为例，其他类型版本参照即可）：

```
```

### 三、npm scripts 脚本

### 四、npm 配置

### 五、npm 工程管理

### 六、npm 的几个实用技巧

### 参考资料

- [13 个 npm 快速开发技巧](https://juejin.im/post/5d1d40ea6fb9a07eb94fa7df)
- [你所需要的 npm 知识储备都在这了](https://juejin.im/post/5d08d3d3f265da1b7e103a4d)
- [npm依赖：构建编译](https://juejin.im/post/5c44a2fbf265da610f63ff39)
- [npm依赖：框架平台](https://juejin.im/post/5c457d656fb9a04a0730af07)
- [npm依赖：类库工具](https://juejin.im/post/5c457e516fb9a049ec6b6341)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>