# Vue 中使用 JSX

## 前言

关于 JSX 的使用，具体查看官方文档[渲染函数 & JSX](https://cn.vuejs.org/v2/guide/render-function.html)

## 内容

- [为什么要使用 JSX？](#一、为什么要使用-jsx？)
- [render()方法](#二、render-方法)
- [JSX 是什么](#三、jsx-是什么)
- [配置 Vue 以使用 JSX](#四、配置-vue-以使用-jsx)
- [在 Vue 中使用 JSX 需要注意的地方](#五、在-vue-中使用-jsx-需要注意的地方)

### 一、为什么要使用 JSX？

- JSX 更易读，`<div></div>`的写法一看就是比`$this.$createElement('div',{},[...])`简洁很多。
- JSX 也是 JavaScript。
- Vue 支持 JSX。
- JSX 使自定义 Vue 组件更容易导入和管理

举一个例子来说明为什么 JSX 是好的。

我们要构建一个`<TextField/>`组件，该组件可以是普通的单行文本输入或多行输入（文本区域）。我们的模板声明可能看起来像这样。

```
 <div>
   <textarea v-if="multiline" v-model="content" :name="name" :placeholder="placeholder" :aria-invalid="false">
   <input v-else v-model="content" :name="name" :placeholder="placeholder" :aria-invalid="false">
 </div>
```

从上面的代码片段中可以看到，我们很快就会遇到一些问题，比如重复代码等等。想象一下，必须支持`input`上面所列的各种属性。上面的这个小片段将会增长并成为一个难以维护的噩梦。

要解决这个问题，我们需要使用 Vue 进行降级处理，因此需要使用理接近 Vue 的内部 API 来解决这个问题。

### 二、render()方法

> 注意：这里并不是说没有 JSX 就没有一种简单的方法来处理上面的问题，只是说将这个逻辑移动到带有 JSX 的`render()`方法可以使用组件更直观。

我们在 Vue 中创建的每个组件都有一个`render`方法。这个就是 Vue 选择渲染组件的地方。即使我们不定义这个方法，Vue 也会为我们做这件事。

这意味着当我们在 Vue 中定义 HTML 模板时，Vue 的模板编译器将其编译为一个`createElement`函数，该函数带有几个参数并从`render`函数返回结果。

为了修复上一节中的代码，我们删除了`template`属性或`template`标签，并在组件上定义了`render()`方法。如果在组件上定义了`render`方法，则 Vue 将忽略`template`定义。

```
export default{
    name:'TextField',
    render (createElement){
        const tag = this.multiline ? 'textarea' : 'input'

        return createElement(tag,{
            class:{
                'text-input': true,
                'is-disabled': false
            },
            attrs:{
                name: this.name,
                placeholder:this.placeholder,
                'aria-invalid':false
            }
        })
    }
}
```

上面的代码做了几件事：

1. `render`方法从 Vue 获取一个`createElement`助手。
2. 我们以编程方式定义我们的标签。
3. 然后，我们创建标签并将其属性，类等作为对象传递。我们可以传递给`createElement`的选项很多。
4. 我们返回新创建的元素进行渲染。

我们为 Vue 组件定义的每个模板都将转换为可返回`createElement`函数的`render`方法。因为这个原因，`render`方法将优先于模板定义。

```
// HTML
<div>
    <p>Only you can stop forest fires</p>
</div>
```

模板编译器将把上面的 HTML 转换成:

```
render(createElement){
    return createElement(
        'div',
        {},
        createElement(
            'p',
            {},
            'Only you can stop forest fires'
        )
    )
}
```

现在你可能会问这个问题：“对可读性来说这不好吗？” 答案是肯定的。 一旦定义了具有许多元素嵌套级别或具有多个同级元素的组件，我们就会遇到这个新问题。

这就是 JSX 出现的原因，它可以很好的解决此类问题。

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

将 HTML 字符串设置为元素的内容，使用`domPropsInnerHTML`而不是使用`v-html`

```
render(createElement){
    return (
        <button></button>
    )
}
```

### 参考资料

- [如何在 Vue 中使用 JSX 以及使用它的原因](https://juejin.im/post/5e409f02e51d4526f16e3bce)
- [Vue Render 介绍和一些基本的实例](https://juejin.im/post/5b4eb11a5188251af91a6eaf)
- [学会使用Vue JSX，一车老干妈都是你的](https://juejin.im/post/5f01e9fff265da22ab2d532e)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
