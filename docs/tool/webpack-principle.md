# webpack 原理

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [webpack 事件流](#一、webpack-事件流)
- [webpack 运行流程详解](#二、webpack-运行流程详解)
- [抽象语法树（AST）](#三、抽象语法树（ast）)

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

### 三、抽象语法树（AST）

> 在计算机科学中，抽象语法树（Abstract Syntax Tree，AST），或简称语法树（Syntax tree），是源代码语法结构的一种抽象表示。它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。之所以说语法是“抽象”的，是因为这里的语法并不会表示出真实语法中出现的每个细节。比如，嵌套括号被隐含在树的结构中，并没有以节点的形式呈现；而类似于 if-condition-then 这样的条件跳转语句，可以使用带有两个分支的节点来表示。

实际上一段代码经过编译器的词分析、语法分析等阶段之后，会生成一个树状结构的“抽象语法树（AST）”，该语法树的每一个节点都对应着代码当中不同含义片段。

解释器是将 AST 翻译成目标语言并运行的工具。

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
