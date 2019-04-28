# npm 相关参数

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

这种依赖只在项目开发时所需要，即其中的依赖项不应该属于线上代码的一部分。比如构建工具`webpack`、`gulp`，预处理器`babel-loader`、`scss-loader`，测试工具`e2e`、`chai`等，这些都是辅助开发的工具包，无须在生产环境使用。

通过命令`npm install/i -D/--save-dev`把包安装成开发依赖。如果想缩减安装包，可以使用命令`npm i --production`忽略开发依赖，只安装基本依赖，这通常在线上机器（或者`QA`环境）上使用。

>**千万别以为只有在`dependencies`中的模块才会被一起打包，而在`devDependencies`中的不会！模块能否被打包，取决于项目里是否被引入了该模块！**在业务项目中`dependencies`和`devDependencies`没有什么本质区别，只是单纯的一个规范作用，在执行`npm i`时两个依赖下的模块都会被下载；而在发布`npm`包的时候，包中的`dependencies`依赖项在安装该包的时候会被一起下载，`devDependencies`依赖项则不会。

**peerDependencies**

这种依赖的作用是提示宿主环境去安装插件在`peerDependencies`中所指定依赖的包，然后插件所依赖的包永远都是宿主环境统一安装的`npm`包，最终解决插件与所依赖包不一致的问题。

这句话听起来可能有点拗口，举个例子来给大家说明下。`element-ui@2.6.3`只是提供一套基于`vue`的`ui`组件库，但它要求宿主环境需要安装指定的`vue`版本，所以你可以看到`element`项目中的`package.json`中具有一项配置：

```
"peerDependencies": {
    "vue": "^2.5.16"
}
```

它要求宿主环境安装`3.0.0 > vue@ >= 2.5.16`的版本，也就是`element-ui`的运行依赖宿主环境提供的该版本范围的`vue`依赖包。

在安装插件的时候，`peerDependencies`在`npm 2.x`和`npm 3.x`中表现不一样：

在`npm 2.x`中，安装包中`peerDependencies`所指定的依赖会随着`npm install packageName`一起被强制安装，并且`peerDependencies`中指定的依赖会安装在宿主环境中，所以不需要在宿主环境的`package.json`文件中指定对所安装包中`peerDependencies`内容的依赖。

在`npm 3.x`中，不会再要求`peerDependencies`所指定的依赖包被强制安装，`npm 3.x`只会在安装结束后检查本次安装是否正确，如果不正确会给用户打印警告提示，比如提示用户有的包必须安装或者有的包版本不对等。

>大白话：如果你安装我，那么你最好也要按照我的要求安装`A`、`B`和`C`。

**bundledDependencies**

这种依赖跟`npm pack`打包命令有关。假设`package.json`中有如下配置：

```
{
  "name": "font-end",
  "version": "1.0.0",
  "dependencies": {
    "fe1": "^0.3.2",
    ...
  },
  "devDependencies": {
    ...
    "fe2": "^1.0.0"
  },
  "bundledDependencies": [
    "fe1",
    "fe2"
  ]
}
```

执行打包命令`npm pack`，会生成`front-end-1.0.0.tgz`压缩包，并且该压缩包中包含`fe1`和`fe2`两个安装包，这样使用者执行`npm install front-end-1.0.0.tgz`也会安装这两个依赖。

>在`bundledDependencies`中指定的依赖包，必须先在`dependencies`和`devDependencies`声明过，否则打包会报错。

**optionalDependencies**

这种依赖中的依赖项即使安装失败了，也不影响整个安装的过程。需要注意的是，如果一个依赖同时出现在`dependencies`和`optionalDependencies`中，那么`optionalDependencies`会获得更高的优先级，可能造成一些预期之外的效果，所以尽量要避免这种情况发生。

>在实际项目中，如果某个包已经失效，我们通常会寻找它的替代者，或者换一个实现方案。不确定的依赖会增加代码判断和测试难度，所以这个依赖项还是尽量不要使用。

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

表示精确版本号。任何其他版本号都不匹配。在一些比较重要的线上项目中，建议使用这种方式锁定版本。

- **“^1.2.3”**

表示兼容补丁和小版本更新的版本号。官方的定义是“能够兼容除了最左侧的非 0 版本号之外的其他变化”(Allows changes that do not modify the left-most non-zero digit in the [major, minor, patch] tuple)。这句话很拗口，举几个例子大家就明白了：

```
"^1.2.3" 等价于 ">= 1.2.3 < 2.0.0"。即只要最左侧的 "1" 不变，其他都可以改变。所以 "1.2.4", "1.3.0" 都可以兼容。

"^0.2.3" 等价于 ">= 0.2.3 < 0.3.0"。因为最左侧的是 "0"，那么只要第二位 "2" 不变，其他的都兼容，比如 "0.2.4" 和 "0.2.99"。

"^0.0.3" 等价于 ">= 0.0.3 < 0.0.4"。大版本号和小版本号都为 "0" ，所以也就等价于精确的 "0.0.3"。
```

从这几个例子可以看出，`^`是一个兼具更新和安全的写法，但是对于大版本号为 1 和 0 的版本还是会有不同的处理机制的。

- **“~1.2.3”**

表示只兼容补丁更新的版本号。关于`~`的定义分为两部分：如果列出了小版本号（第二位），则只兼容补丁（第三位）的修改；如果没有列出小版本号，则兼容第二和第三位的修改。我们分两种情况理解一下定义：

```
"~1.2.3" 列出了小版本号 "2"，因此只兼容第三位的修改，等价于 ">= 1.2.3 < 1.3.0"。

"~1.2" 也列出了小版本号 "2"，因此和上面一样兼容第三位的修改，等价于 ">= 1.2.0 < 1.3.0"。

"~1" 没有列出小版本号，可以兼容第二第三位的修改，因此等价于 ">= 1.0.0 < 2.0.0"
```

从这几个例子可以看出，`~`是一个比`^`更加谨慎安全的写法，而且`~`并不对大版本号0或者1区别对待，所以"~0.2.3" 与 "~1.2.3" 是相同的算法。当首位是 0 并且列出了第二位的时候，两者是等价的，例如 "~0.2.3" 和 "^0.2.3"。

- **"1.x" 、"1.X"、1.*"、"1"、"*"**

表示使用通配符的版本号，x、X、* 和 （空） 的含义相同，都表示可以匹配任何内容。具体来说：

```
"*" 、"x" 或者 （空） 表示可以匹配任何版本。

"1.x", "1.*" 和 "1" 表示匹配主版本号为 "1" 的所有版本，因此等价于 ">= 1.0.0 < 2.0.0"。

"1.2.x", "1.2.*" 和 "1.2" 表示匹配版本号以 "1.2" 开头的所有版本，因此等价于 ">= 1.2.0 < 1.3.0"。
```

- **"1.2.3-beta.1"**

带预发布关键词的版本号。先说说几个预发布关键词的定义：

```
alpha(α)：预览版，或者叫内部测试版；一般不向外部发布，会有很多bug；一般只有测试人员使用。

beta(β)：测试版，或者叫公开测试版；这个阶段的版本会一直加入新的功能；在alpha版之后推出。

rc(release candidate)：最终测试版本；可能成为最终产品的候选版本，如果未出现问题则可发布成为正式版本。
```

以包开发者的角度来考虑这个问题：假设当前线上版本是 "1.2.3"，如果我作了一些改动需要发布版本 "1.2.4"，但我不想直接上线（因为使用 "~1.2.3" 或者 "^1.2.3" 的用户都会直接静默更新），这就需要使用预发布功能。因此我可能会发布 "1.2.4-alpha.1" 或者 "1.2.4-beta.1" 等等。

```
">1.2.4-alpha.1"表示接受 "1.2.4-alpha" 版本下所有大于 1 的预发布版本。因此 "1.2.4-alpha.7" 是符合要求的，但 "1.2.4-beta.1" 和 "1.2.5-alpha.2" 都不符合。此外如果是正式版本（不带预发布关键词），只要版本号符合要求即可，不检查预发布版本号，例如 "1.2.5", "1.3.0" 都是认可的。

"~1.2.4-alpha.1" 表示 ">=1.2.4-alpha.1 < 1.3.0"。这样 "1.2.5", "1.2.4-alpha.2" 都符合条件，而 "1.2.5-alpha.1", "1.3.0" 不符合。

"^1.2.4-alpha.1" 表示 ">=1.2.4-alpha.1 < 2.0.0"。这样 "1.2.5", "1.2.4-alpha.2", "1.3.0" 都符合条件，而 "1.2.5-alpha.1", "2.0.0" 不符合。
```

版本号还有更多的写法，例如范围（a - b），大于等于号（>=），小于等于号（<=），或（||）等等，因为用的不多，这里不再展开。详细的文档可以参见[语义化版本(semver)](https://semver.org/lang/zh-CN/)。它同时也是一个 npm 包，可以用来比较两个版本号的大小，以及是否符合要求等。

#### 2.3 依赖包版本管理

`npm 2.x/3.x`已成为过去式，在`npm 5.x`以上环境下（版本最好在`5.6`以上，因为在`5.0 ~ 5.6`中间对`package-lock.json`的处理逻辑更新过几个版本，`5.6`以上才开始稳定），管理项目中的依赖包版本你应该知道（以`^`版本为例，其他类型版本参照即可）：

1. 在大版本相同的前提下，如果一个模块在`package.json`中的小版本要大于`package-lock.json`中的小版本，则在执行`npm install`时，会将该模块更新到大版本下的最新的版本，并将版本号更新至`package-lock.json`。如果小于，则被`package-lock.json`中的版本锁定。

```
// package-lock.json 中原版本
"clipboard": {
  "version": "1.5.10",
},
"vue": {
  "version": "2.6.10",
}
// package.json 中修改版本
"dependencies": {
  "clipboard": "^1.5.12",
  "vue": "^2.5.6"
  ...
}

// 执行完 npm install 后，package-lock.json 中
"clipboard": {
  "version": "1.7.1", // 更新到大版本下的最新版本
},
"vue": {
  "version": "2.6.10", // 版本没发生改变
}
```

2. 如果一个模块在`package.json`和`package-lock.json`中的大版本不相同，则在执行`npm install`时，都将根据`package.json`中大版本下的最新版本进行更新，并将版本号更新至`package-lock.json`。

```
// package-lock.json 中原版
"clipboard": {
  "version": "2.0.4",
}
// package.json 中修改版本
"dependencies": {
  "clipboard": "^1.6.1",
}

// 执行完npm install后，package-lock.json 中
// 
"clipboard": {
  "version": "1.7.1", // 更新到大版本下的最新版本
}
```

3. 如果一个模块在`package.json`中有记录，而在`package-lock.json`中无记录，执行`npm install`后，则会在`package-lock.json`生成该模块的详细记录。同理，一个模块在`package.json`中无记录，而在`package-lock.json`中有记录，执行`npm install`后，则会在`package-lock.json`删除该模块的详细记录。

4. 如果要更新某个模块大版本下的最新版本（升级小版本号），请执行如下命令：

```
npm install packageName
// 或者
npm update packageName
```

5. 如果要更新到指定版本号（升级大版本号），请执行如下命令：

```
npm install packageName@x.x.x
```

6. 卸载某个模块，请执行如下命令：

```
npm uninstall packageName
```

通过上述的命令来管理依赖包，`package.json`和`package-lock.json`中的版本号都将会随之更新。

>我们在升级/卸载依赖包的时候，尽量通过命令来实现，避免手动修改`package.json`中的版本号，尤其不要手动修改`package-lock.json`。

### 三、npm scripts 脚本

`package.json`中的[scripts](https://docs.npmjs.com/misc/scripts)字段可以用来自定义脚本命令，它的每一个属性，对应一段脚本。以`vue-cli3`为例：

```
"scripts": {
  "serve": "vue-cli-service serve",
  ...
}
```

这样就可以通过`npm run serve`脚本代替`vue-cli-service serve`脚本来启动项目，而无需每次敲一遍这么冗长的脚本。

- 工作原理
- PATH 环境变量

#### 3.1 工作原理


#### 3.2 PATH 环境变量

### 四、npm 配置

`npm`的配置操作可以帮助我们预先设定好`npm`对项目的行为动作，也可以让我们预先定义好一些配置项以供项目中使用。所以了解`npm`的配置机制也是很有必要。

#### 4.1 优先级

- 命令行
- env 环境变量
- npmrc 文件
- 默认配置

**命令行**

**env 环境变量**

**npmrc 文件**

**默认配置**

#### 4.2 npm config 指令

- set
- get
- delete
- list
- edit

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