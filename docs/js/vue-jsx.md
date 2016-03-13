# Vue 中使用 JSX

## 前言

关于 JSX 的使用，具体查看官方文档[渲染函数 & JSX](https://cn.vuejs.org/v2/guide/render-function.html)

## 内容

- 为什么要使用 JSX？
- render()方法
- JSX 是什么
- 配置 Vue 以使用 JSX
- 在 Vue 中使用 JSX 需要注意的地方
- 在 render 中使用 JSX

### 一、为什么要使用 JSX？

- JSX 更易读，`<div></div>`的写法一看就是比`$this.$createElement('div',{},[...])`简洁很多。
- JSX 也是 JavaScript。
- Vue 支持 JSX。
- JSX 使自定义 Vue 组件更容易导入和管理

### 二、render()方法

> 注意：这里并不是说没有 JSX 就没有一种简单的方法来处理上面的问题，只是说将这个逻辑移动到带有 JSX 的`render()`方法可以使用组件更直观。

我们在 Vue 中创建的每个组件都有一个`render`方法。这个就是 Vue 选择渲染组件的地方。即使我们不定义这个方法，Vue 也会为我们做这件事。

这意味着当我们在 Vue 中定义 HTML 模板时，Vue

### 三、JSX 是什么

JSX 是 Facebook 工程团队创造的一个术语。

> JSX 是 JavaScript 的类似 XML 的语法扩展，没有任何定义的语义

JSX 不打算由引擎或浏览器实现，相反，我们将使用 Babel 之类的转置器将 JSX 转换成常规的 JS。

```
// 此行是JSX的示例
const heading = <h1>Welcome to Scotch</h1>;
```

基本上，JSX 允许我们在 JS 中使用类似 html 的语法。

### 四、配置 Vue 以使用 JSX

如果使用的 Vue-cli 大于或等于 3.0 版本，那么就直接可以使用 JSX 的语法了。

如果您使用的是不支持 JSX 的 Vue-cli 较版本，则可以通过安装`babel-preset-vue-app`来添加它，并将其添加到您的`.babelrc`文件中。

```
 # Using npm
 npm install --save-dev babel-preset-vue-app

# Using yarn
 yarn add --dev babel-preset-vue-app
```

在`.babelrc`文件中，添加：

```
{
 "presets": ["vue-app"]
}
```

我们现在可以在组件的 `render` 函数中使用 JSX。

### 五、在 Vue 中使用 JSX 需要注意的地方

在 Vue 中使用 JSX 需要注意几点。

要监听 JSX 中的事件，我们需要`"on"`前缀。例如，将`onClick`用于单击事件。

```
render(createElement){
    return (
        <button onClick={this.handleClick}></button>
    )
}
```

要修改事件，请使用

```
render(createElement){
    return (
        <button onClick:prevent={this.handlClick}></button>
    )
}
```

绑定变量，注意这里不是使用：

```
render(createElement){
    return (
        <button content={this.generatedText}></button>
    )
}
```

### 六、在 render 中使用 JSX

### 参考资料

- [如何在 Vue 中使用 JSX 以及使用它的原因](https://juejin.im/post/5e409f02e51d4526f16e3bce)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
