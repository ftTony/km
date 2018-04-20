# babel学习

## 前言

Babel是JavaScript编译器，更确切地说是源码到源码的编译器，通常也叫做“转换编译器”。意思是说你为Babel提供一些JavaScript代码，Babel更改这些代码，然后返回给你新生成的代码。

## 内容

- 抽象语法树
- Babel 的处理步骤
- 其他配套工具
- Babel 7.x

### 一、抽象语法树

这个处理过程中的每一步都涉及到创建或是操作抽象语法树，亦称 AST。

>Babel 使用一个基于 ESTree 并修改过的 AST，它的内核说明文档可以在[这里](https://github.com/babel/babel/blob/master/doc/ast/spec.md)找到。

```
function square(n) {
  return n * n;
}
```

>[AST Explorer](http://astexplorer.net/)可以让你对 AST 节点有一个更好的感性认识。 [这里](http://astexplorer.net/#/Z1exs6BWMq)是上述代码的一个示例链接。

这个程序可以被表示成如下的一棵树：

```
- FunctionDeclaration:
  - id:
    - Identifier:
      - name: square
  - params [1]
    - Identifier
      - name: n
  - body:
    - BlockStatement
      - body [1]
        - ReturnStatement
          - argument
            - BinaryExpression
              - operator: *
              - left
                - Identifier
                  - name: n
              - right
                - Identifier
                  - name: n
```

或是如下所示的 JavaScript Object（对象）：

```
{
  type: "FunctionDeclaration",
  id: {
    type: "Identifier",
    name: "square"
  },
  params: [{
    type: "Identifier",
    name: "n"
  }],
  body: {
    type: "BlockStatement",
    body: [{
      type: "ReturnStatement",
      argument: {
        type: "BinaryExpression",
        operator: "*",
        left: {
          type: "Identifier",
          name: "n"
        },
        right: {
          type: "Identifier",
          name: "n"
        }
      }
    }]
  }
}
```

你会留意到 AST 的每一层都拥有相同的结构：

```
{
  type: "FunctionDeclaration",
  id: {...},
  params: [...],
  body: {...}
}
```

```
{
  type: "Identifier",
  name: ...
}
```

```
{
  type: "BinaryExpression",
  operator: ...,
  left: {...},
  right: {...}
}
```

>注意：出于简化的目的移除了某些属性

这样的每一层结构也被叫做**节点（Node）**。一个AST可以由单一的节点或是成百上千个节点构成。它们组合在一些可以描述用于静态分析的程序语法。

每一个节点都有如下所示的接口（Interface）：

```
interface Node {
  type: string;
}
```

字符串形式的`type`字段表示节点的类型（如：`"FunctionDeclaration"`，`"Identifier"`，`"BinaryExpression"`）。每一种类型的节点定义了一些附加属性用来进一步描述该节点类型。

Babel还为每个节点额外生成了一些属性，用于描述该节点在原始代码中的位置。

```
{
  type: ...,
  start: 0,
  end: 38,
  loc: {
    start: {
      line: 1,
      column: 0
    },
    end: {
      line: 3,
      column: 1
    }
  },
  ...
}
```

每一个节点都会有`start`，`end`，`loc`这几个属性。

### 二、Babel 的处理步骤

Babel的三个主要处理步骤分别是：**解析(parse)**，**转换(transform)**，**生成(generate)**。

#### 2.1 解析

**解析**步骤接收代码并输出AST。这个步骤分为两个阶段：**词法分析**和**语法分析**。

**词法分析**

词法分析阶段把字符串形式的代码转换为**令牌**流。

你可以把令牌看作是一个扁平的语法片段数组：

```
n * n;
```

```
[
  { type: { ... }, value: "n", start: 0, end: 1, loc: { ... } },
  { type: { ... }, value: "*", start: 2, end: 3, loc: { ... } },
  { type: { ... }, value: "n", start: 4, end: 5, loc: { ... } },
  ...
]
```

每一个`type`有一组属性来描述该令牌：

```
{
  type: {
    label: 'name',
    keyword: undefined,
    beforeExpr: false,
    startsExpr: true,
    rightAssociative: false,
    isLoop: false,
    isAssign: false,
    prefix: false,
    postfix: false,
    binop: null,
    updateContext: null
  },
  ...
}
```

和AST节点一样它们也有`start`、`end`、`loc`属性。

**语法分析**

语法分析阶段会把一个令牌流转换成AST的形式。这个阶段会使用令牌中的信息把它们转换成一个AST的表述结构，这样更易于后续的操作。

#### 2.2 转换

转换步骤接收AST并对其进行遍历，在此过程中对节点进行添加、更新及移除等操作。这是Babel或是其他编译器中最复杂的过程同时也是插件将要介入工作的部分。

#### 2.3 生成

代码生成步骤把最终（经过一系列转换之后）的AST转换成字符串形式的代码，同时还会创建源码映射。

代码生成其实很简单：深度优先遍历整个 AST，然后构建可以表示转换后代码的字符串。

### 三、Babel使用方法

- 使用方法
- 插件
- 配置文件
- preset
- 执行顺序
- 插件和 preset 的配置项
- env (重点)

#### 3.1 使用方法

总共存在三种方法：

- 使用单体文件(standalone script)
- 命令行(cli)
- 构建工具的插件(webpack的babel-loader,rollup的rollup-plugin-babel)。

其中后面两种比较常见。第二种多见于package.json中的`scripts`段落中的某条命令；第三种就直接集成到构建工具中。

这三种方式只有入口不同而已，调用的 babel 内核，处理方式都是一样的，所以我们先不纠结入口的问题。

#### 3.2 插件

babel本身不具有任何转化功能，它把转化的功能都分解到一个个plugin里面。因此当我们不配置任何插件时，经过babel的代码和输入是相同的。

插件总共分为两种：

- 当我们添加**语法插件**之后，在解析这一步就使得babel能够解析更多的语法。（顺带一提，babel内部使用的解析类库叫做babylon，并非babel自行开发）

举个简单的例子，当我们定义或者调用方法时，最后一个参数之后是不允许增加逗号的，如`callFoo(param1, param2,)`就是非法的。如果源码是这种写法，经过 babel 之后就会提示语法错误。

但最近的 JS 提案中已经允许了这种新的写法(让代码 diff 更加清晰)。为了避免 babel 报错，就需要增加语法插件`babel-plugin-syntax-trailing-function-commas`

- 当我们添加**转译插件**之后，在转换这一步把源码转换并输出。这也是我们使用babel最本质的需求。

比起语法插件，转译插件其实更好理解，比如箭头函数`(a) => a`就会转化为`function (a) {return a}`。完成这个工作的插件叫做`babel-plugin-transform-es2015-arrow-functions`。

同一类语法可能同时存在语法插件版本和转译插件版本。如果我们使用了转译插件，就不用再使用语法插件了。

#### 3.3 配置文件

既然插件是babel的根本，那如何使用呢？总共分为2个步骤：

1. 将插件的名字增加到配置文件中(根目录下创建 .babelrc 或者 package.json 的`babel`里面，格式相同)
2. 使用`npm install babel-plugin-xxx`进行安装

#### 3.4 preset

preset 分为以下几种：

1. 官方内容，目前包括env,react, flow, minify 等。这里最重要的是 env，后面会详细介绍。
2. stage-x，这里面包含的都是当年最新规范的草案，每年更新。
   - Stage 0 - 稻草人：只是一个想法，经过TC39成员提出即可。
   - Stage 1 - 提案：初步尝试。
   - Stage 2 - 初稿：完成初步规范。
   - Stage 3 - 候选：完成规范和浏览器初步实现。
   - Stage 4 - 完成：将被添加到下一年度发布。
例如`syntax-dynamic-import`就是stage-2的内容，`transform-object-rest-spread`就是stage-3的内容。

此外，低一级的stage会包含所有高级stage的内容，例如 stage-1 会包含 stage-2, stage-3 的所有内容。

stage-4 在下一年更新会直接放到 env 中，所以没有单独的 stage-4 可供使用。

3. es201x,latest

这些是已经纳入到标准规范的语法。例如 es2015 包含 `arrow-functions`，es2017 包含 `syntax-trailing-function-commas`。但因为 env 的出现，使得 es2016 和 es2017 都已经废弃。所以我们经常可以看到 es2015 被单独列出来，但极少看到其他两个。

latest 是 env 的雏形，它是一个每年更新的 preset，目的是包含所有 es201x。但也是因为更加灵活的 env 的出现，已经废弃。

#### 3.5 执行顺序

很简单的几条原则：

- Plugin 会运行在 Preset 之前。
- Plugin 会从前到后顺序执行。
- Preset 的顺序则**刚好相反**(从后向前)。

preset的逆向顺序主要是为了保证向后兼容，因为大多数用户的编写顺序是`['es2015', 'stage-0']`。这样必须先执行`stage-0`才能确保babel不报错。因此我们编排preset的时候，也要注意顺序，**其实只要按照规范的时间顺序列出即可**。

#### 3.6 插件和 preset 的配置项

简略情况下，插件和 preset 只要列出字符串格式的名字即可。但如果某个 preset 或者插件需要一些配置项(或者说参数)，就需要把自己先变成数组。第一个元素依然是字符串，表示自己的名字；第二个元素是一个对象，即配置对象。

最需要配置的当属 env，如下：

```
"presets": [
    // 带了配置项，自己变成数组
    [
        // 第一个元素依然是名字
        "env",
        // 第二个元素是对象，列出配置项
        {
          "module": false
        }
    ],

    // 不带配置项，直接列出名字
    "stage-2"
]

```

#### 3.7 env (重点)

因为env最为常用也最重要，所以我们必须重点关注。

env的核心目的是通过配置得知目标环境的特点，然后只做必要的转换。例如目标浏览器支持es2015，那么es2015这个preset其实是不需要的，于是代码就可以小一点(一般转化后的代码总是更长)，构建时间也可以缩短一些。

如果不写任何任何配置项，env等价于latest，也等价于 es2015 + es2016 + es2017 三个相加(不包含 stage-x 中的插件)。env 包含的插件列表维护在[这里](https://github.com/babel/babel-preset-env/blob/master/data/plugin-features.js)

下面列出几种比较常用的配置方法：

```
{
    "presets":[
        {
            "env":{
                "targets":["last 2 versions", "safari >= 7"]
            }
        }
    ]
}
```

如上配置将考虑所有浏览器的最新2个版本(safari大于等于7.0的版本)的特性，将必要的代码进行转换。而这些版本已有的功能就不进行转化了。这里的语法可以参考[browserslist](https://github.com/browserslist/browserslist)

```
{
  "presets": [
    ["env", {
      "targets": {
        "node": "6.10"
      }
    }]
  ]
}
```

如上配置将目标设置为nodejs，并且支持6.10及鸡皮疙瘩版本。也可以使用`node: 'current'`来支持最新稳定版本。例如箭头函数在nodejs6及以上将不被转化，但如果nodejs 0.12就会被转化了。

另外一个有用的配置项是`modules`。它的取值可以是`amd`, `umd`, `systemjs`, `commonjs` 和 `false`。这可以让 babel 以特定的模块化格式来输出代码。如果选择`false` 就不进行模块化处理。

### 四、其他配套工具

- babel-cli
- babel-node
- babel-register
- babel-polyfill
- babel-runtime 和 babel-plugin-transform-runtime
- babel-loader

#### 4.1 babel-cli

顾名思义，cli就是命令行工具。安装了`babel-cli`就能够在命令行中使用`babel`命令来编译文件。

在开发npm package时经常会使用如下模式：

- 把`babel-cli`安装为`devDependencies`
- 在package.json中添加`scripts`(比如`prepublish`)，使用`babel`命令编译文件
- `npm puhlish`

这样既可以使用较新规范的JS语法编写源码，同时又能支持旧版环境。因为项目可能不太大，用不到构建工具(webpack或者rollup)，于是在发布之前用`babel-cli`进行处理。

#### 4.2 babel-node

`babel-node`是`babel-cli`的一部分，它不需要单独安装。

它的作用是在node环境中，直接运行es2015的代码，而不需要额外进行转码。例如我们有一个js文件以es2015的语法进行编写进行编写(如使用了箭头函数)。我们可以直接使用`babel-node es2015.js`进行执行，而不用再进行转码了。

可以说：`babel-node` = `babel-polyfill` + `babel-register`。

#### 4.3 babel-register

babel-register模块必写`require`命令，为它加上一个钩子。此后，每当使用`require`加载`.js`、`.jsx`、`.es`和`.es6`后缀名的文件，就会先用babel进行转码。

使用时，必须首先加载`require('babel-register')`。

需要注意的是，babel-register只会对`require`命令加载的文件转码，而**不会对当前文件转码**。

另外，由于它是实时转码，所以**只适合在开发环境使用**。

#### 4.4 babel-polyfill

babel 默认只转换 js 语法，而不转换新的 API，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法(比如`Object.assign`)都不会转码。

举例来说，es2015在Array对象上新增了`Array.from`方法。babel就不会转码这个方法。如果想让这个方法运行，必须使用`babel-polyfill`。(内部集成了`core-js`和`regenerator`)

使用时，在所有代码运行之前增加`require('babel-polyfill')`。或者更常规的操作是在`webpack.config.js`中将`babel-polyfill`作为第一个entry。因此必须把`babel-polyfill`作为`dependencies`而不是`devDependencies`

`babel-polyfill`主要有两个缺点：

- 使用`babel-polyfill`会导致打出来的包非常大，因为`babel-polyfill`是一个整体，把所有方法都加到原型链上。比如我们只使用了`Array.from`，但它把`Object.defineProperty`也给加上了，这就是一种浪费了。这个问题可以通过单独`core-js`的某个类库来解决，`core-js`都是分开的。
- ``

因此在实际使用中，如果我们无法忍受这两个缺点(尤其是第二个)，通常我们会倾向于使用`babel-plugin-transform-runtime`。

但如果代码中包含高版本 js 中类型的实例方法 (例如`[1,2,3].includes(1)`)，这还是要使用 polyfill。

#### 4.5 babel-runtime 和 babel-plugin-transform-runtime

我们时常在项目中看到.babelrc中使用`babel-plugin-transform-runtime`，而`package.json`中的`dependencies`(注意不是`devDependencies`)又包含了`babel-runtime`，那这两个是不是成套使用的呢？他们又起什么作用呢？

先说`babel-plugin-transform-runtime`。

babel会转换js语法，之前已经提过了。以`async/await`举例，如果不使用这个plugin(即默认情况)，转换后的代码大概是：

```
// babel 添加一个方法，把 async 转化为 generator
function _asyncToGenerator(fn) { return function () {....}} // 很长很长一段

// 具体使用处
var _ref = _asyncToGenerator(function* (arg1, arg2) {
  yield (0, something)(arg1, arg2);
});

```

#### 4.6 babel-loader

前面提过 babel 的三种使用方法，并且已经介绍过了 babel-cli。但一些大型的项目都会有构建工具 (如 webpack 或 rollup) 来进行代码构建和压缩 (uglify)。理论上来说，我们也可以对压缩后的代码进行 babel 处理，但那会非常慢。因此如果在 uglify 之前就加入 babel 处理，岂不完美？

所以就有了 babel 插入到构建工具内部这样的需求。以(我还算熟悉的) webpack 为例，webpack 有 loader 的概念，因此就出现了 babel-loader。

和`babel-cli`一样，`babel-loader`也会读取 .babelrc 或者 package.json 中的`babel`段作为自己的配置，之后的内核处理也是相同。唯一比`babel-cli`复杂的是，它需要和 webpack 交互，因此需要在 webpack 这边进行配置。比较常见的如下：

```
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }
  ]
}

```

如果想在这里传入 babel 的配置项，也可以把改成：

```
// loader: 'babel-loader' 改成如下：
use: {
  loader: 'babel-loader',
  options: {
    // 配置项在这里
  }
}
```

这里的配置项优先级是最高的。但我认为放到单独的配置文件中更加清晰合理，可读性强一些。

#### 小结

| 名称                                           | 作用                                                        | 备注                                                                 |
| ---------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------- |
| babel-cli                                      | 允许命令行使用babel命令转译文件                             |
| babel-node                                     | 允许命令行使用babel-node直接转译+执行node文件               | 随`babel-cli`一同安装 `babel-node`=`babel-polyfill`+`babel-register` |
| babel-register                                 | 改写`require`命令，为其加载的文件进行转码，不对当前文件转码 | 只适用于开发环境                                                     |
| babel-polyfill                                 | 为所有 API 增加兼容方法                                     | 需要在所有代码之前`require`，且体积比较大                            |
| babel-plugin-transform-runtime & babel-runtime | 把帮助类方法从每次使用前定义改为统一 `require`，精简代码    | `babel-runtime`需要安装为依赖，而不是开发依赖                        |
| babel-loader                                   | 使用 webpack 时作为一个 loader 在代码混淆之前进行代码转换   |

### 五、Babel 7.x

## 参考资料

- [一口(很长的)气了解 babel](https://juejin.im/post/5c19c5e0e51d4502a232c1c6)
- [深入Babel，这一篇就够了](https://juejin.im/post/5c21b584e51d4548ac6f6c99)
- [前端中的编译原理 - 从零打造一个实用的 Babel 插件](https://mp.weixin.qq.com/s/XSzQ5nkLI369CDhMZtF-MQ)
- [前端工程师需要了解的 Babel 知识](https://mp.weixin.qq.com/s/HdIvS75nJ0JFStoNPIl7Iw)
- [深入浅出 Babel 上篇：架构和原理 + 实战](https://juejin.im/post/5d94bfbf5188256db95589be)
- [深入浅出 Babel 下篇：既生 Plugin 何生 Macros](https://juejin.im/post/5da12397e51d4578364f6ffa)
- [Babel 插件手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>