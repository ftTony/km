# webpack 原理

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [webpack 事件流](#一、webpack-事件流)
- [webpack 运行流程详解](#二、webpack-运行流程详解)
- Webpack 之 Tapable
- Compiler 和 Compilation
- [抽象语法树（AST）](#五、抽象语法树（ast）)

### 一、webpack 事件流

Webpack 就像一条生产线，要经过一系列处理流程后才能将源文件转换成输出结果。 这条生产线上的每个处理流程的职责都是单一的，多个流程之间有存在依赖关系，只有完成当前处理后才能交给下一个流程去处理。 插件就像是一个插入到生产线中的一个功能，在特定的时机对生产线上的资源做处理。 Webpack 通过 [Tapable](https://juejin.im/post/5abf33f16fb9a028e46ec352) 来组织这条复杂的生产线。 Webpack 在运行过程中会广播事件，插件只需要监听它所关心的事件，就能加入到这条生产线中，去改变生产线的运作。 Webpack 的事件流机制保证了插件的有序性，使得整个系统扩展性很好。

### 二、webpack 运行流程详解

Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程。

- 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数。
- 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，通过执行对象的 run 方法开始执行编译。
- 确定入口：根据配置中的 entry 找出所有入口文件。
- 编译模块：从入口文件出发，调用所有配置的 loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤走到所有入口依赖的文件都经过了本步骤的处理。
- 完成模块编译：在经过第 4 步使用 loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容及它们之间的依赖关系。
- 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再将每个 Chunk 转换成一个单独的文件加入输出列表中，这是可以修改输出内容的最后机会。
- 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，将文件的内容写入文件系统中。

流程图：

![images](webpack02.jpg)

### 三、Webpack 之 Tapable

- Webpack 本质上是一种事件流的机制，它的工作流程就是将各个插件串联起来，而实现这一切的核心就是 Tapable，Webpack 中最核心的负责编译的 Compiler 和负责创建 Bundle 的 Compilation 都是 Tapable 的实例
- Webpack 内部有各种各样的钩子，插件将自己的方法注册到对应的钩子上，这样 Webpack 编译的时候，会触发这些钩子，因此也就触发了插件的方法

#### 3.1 Tabpable 分类

- Tabpable 提供了很多类型的 Hook，分为同步（Sync）和异步（Async）两大类（异步中又区分异步并行和异步串行），而根据事件执行的终止条件的不同，又衍生出 `Basic/Bail/Waterfall/Loop` 类型

#### 3.2 所有 Hook 的注意事项

- 所有的 Hook 实例化时，都接收一个可选参数，参数是一个参数名的字符串数组

### 四、Compiler 和 Compilation

- Compiler 和 Compilation 都继承自 Tapable，这样就可以订阅和发射事件。
- Compiler：Webpack 执行构建的时候，都会先读取 Webpack 配置文件实例化一个 Compiler 对象，然后调用它的 run 方法来开启一次完整的编译，Compiler 对象代表了完整的 Webpack 环境配置。这个对象在启动 Webpack 时被一次性建立，并配置好所有可操作的设置，包括 options，loader 和 plugin。当在 Webpack 环境中应用一个插件时，插件将收到些 Compiler 对象的引用。可以使用它来访问 Webpack 的主环境。
- Compilation：对象代表一次资源版本的构建。当运行 Webpack 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 Compilation，从而生成一组新的编译资源。一个 Compilation 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。Compilation 对象也提供了很多关键时机的回调，以供插件做自定义处理时选择使用。

### 五、抽象语法树（AST）

#### 5.1 AST 是什么

- JavaScript Parser 会把代码转化为一颗抽象语法树（AST），这颗树定义了代码的结构，通过操纵这颗树，我们可以精准的定位到声明语句、赋值语句、运算语句等等，实现对代码的分析、优化、变更等操作。

#### 5.2 AST 用途

- 代码语法的检查、代码风格的检查、代码的格式化、代码的高亮、代码错误提示、代码自动补全等等
- 如 JSLint、JSHint 对代码错误或风格的检查，发现一些潜在的错误
- IDE 的错误提示、格式化、高亮、自动补全等等
- 代码混淆压缩
- UglifyJS2 等

#### 5.3 AST 执行流程

- 解析源代码
- 词法解析：词法解析器(Tokenizer)在这个阶段将代码字符串转换为语法单元数组——Tokens(令牌)。

Javascript 代码中的语法单元主要包括以下这么几种：

- 关键字：`const`、`let`、`var`等
- 标识符：可能是一个变量，也可能是 if、else 这些关键字，又或者是 true、false 这些常量
- 运算符
- 数字
- 空格
- 注释
- **语法解析**：这个阶段语法解析器（Parser）会把 Tokens 转换为抽象语法树
- **深度优先遍历语法树，修改语法树**
- 将语法树转换回源代码

#### 5.4 JavaScript Parser

- JavaScript Parser，把 js 源码转化为抽象语法树的解析器。
- 浏览器会把 js 源码通过解析器转为抽象语法树，再进一步转化为字节码或直接生成机器码。

#### 5.5 项目中需要用到的工具

- [astexplorer](https://astexplorer.net/)
- [@babel/core](https://www.npmjs.com/package/@babel/core)里面内置了 babylon/parser，也可以用它来转换 AST

### 参考资料

- [源码分析](https://tsejx.github.io/webpack-guidebook/principle-analysis/implementation-principle/source-code-analysis)
- [Webpack 运行机制](https://github.com/jerryOnlyZRJ/webpack-loader/blob/master/docs/webpack-principle.md)
- [【第 1617 期】Webpack 是怎样运行的?](https://mp.weixin.qq.com/s/uc4fVViv4u86TTX2XsMgFA)
- [理解 webpack 原理，手写一个 100 行的 webpack](https://zhuanlan.zhihu.com/p/58151131)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
