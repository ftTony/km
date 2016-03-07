# diff 算法

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [分析 diff](#一、分析-diff)
- [pach 方法](#二、pach-方法)
- [算法实现](#三、算法实现)

### 一、虚拟 DOM 的优缺点

- 优点
- 缺点

#### 优点

- **保证性能下限**：框架的虚拟 DOM 需要甜酸任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；
- **无需手动操作 DOM**：我们不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；
- **跨平台**：虚拟 DOM 本质上是 JavaScript 对象，而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。

#### 缺点

- **无法进行极致优化**：虽然虽然虚拟 DOM+合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。

### 一、虚拟 DOM 的实现原理

虚拟 DOM 的实现原理主要包括以下 3 部分：

- 用 JavaScript 对象模拟真实 DOM 树，对真实 DOM 进行抽象；
- diff 算法 — 比较两棵虚拟 DOM 树的差异；
- pach 算法 — 将两个虚拟 DOM 对象的差异应用到真正的 DOM 树。

#### 1.1 模拟真实 DOM

用 JavaScript 来表示一个 DOM 节点是很简单的事情，你只需要记录它的节点类型、属性，还有子节点：

element.js

```
function Element(tagName,props,children){
    if(!(this instanceof Element)){
        if(!_.isArray(children) && children !=null){
            children = _.slice(arguments,2).filter(_.truthy)
        }
        return new Element(tagName,props,children)
    }

    if(_.isArray(props)){
        children = props
        props = {}
    }

    this.tagName = tagName
    this.props = props || {}
    this.chilren = children || []
    this.key = props ? props.key: 666

    var count = 0

    _.each(this.children,function(child,i){
        if(child instanceof Element){
            count += child.count
        }else{
            children[i] = '' +child
        }
        count++
    })

    this.count = count
}

Element.prototype.render = function(){
    var el = document.createElement(this.tagName)
    var props = this.props

    for(var propName in props){
        var propValue = props[propName]
        _.setAttr(el,propName,propValue)
    }

    _.each(this.children,function(child){
        var childEl = (child instanceof Element)?child.render():document.createTextNode(child)
        el.appendChild(childEl)
    })

    return el
}
```

### 一、分析 diff

一篇相当经典的文章[React’s diff algorithm](https://calendar.perfplanet.com/2013/diff/)中的图，react 的 diff 其实和 vue 的 diff 大同小异。所以这张图能很好解释过程。**比较只会在同层级进行，不会跨层级比较。**

![images](vue09.png)

举个形象的例子。

```
<!-- 之前 -->
<div>           <!-- 层级1 -->
  <p>            <!-- 层级2 -->
    <b> aoy </b>   <!-- 层级3 -->
    <span>diff</Span>
  </P>
</div>

<!-- 之后 -->
<div>            <!-- 层级1 -->
  <p>             <!-- 层级2 -->
      <b> aoy </b>        <!-- 层级3 -->
  </p>
  <span>diff</Span>
</div>
```

我们可能期望将`<span>`直接移动到`<p>`的后边，这是最优的操作。但是实际的 diff 操作是移除`<p>`里的`<span>`再创建一个新的`<span>`插到`<p>`的后边。因为新加的`<span>`在层级 2，旧的在层级 3，属于不同层级的比较。

### 二、pach 方法实现

所构建的`JavaScript`对象树和`render`出来真正的`DOM`树的信息、结构是一样的。

```
function patch(node,patches){
    var walker = {index: 0}
    dfsWalk(node,walker,patches)
}

function dfsWalk(node,walker,patches){
    // 从patches拿出当前节点的差异
    var currentPatches = patches[walker.index]

    var len = node.childNodes ? node.childNodes.length:0

    // 深度遍历子节点
    for(var i = 0; i< len;i++){
        var child = node.childNodes[i]
        walker.index++
        dfsWalk(child,walker,patches)
    }
    // 对当前节点进行DOM操作
    if(currentPatches){
        applyPatches(node,currentPatches)
    }
}
```

applyPathes,根据不同类型的差异对当前节点进行 DOM 操作：

```
function applyPatches (node, currentPatches) {
  currentPatches.forEach(function (currentPatch) {
    switch (currentPatch.type) {
      case REPLACE:
        node.parentNode.replaceChild(currentPatch.node.render(), node)
        break
      case REORDER:
        reorderChildren(node, currentPatch.moves)
        break
      case PROPS:
        setProps(node, currentPatch.props)
        break
      case TEXT:
        node.textContent = currentPatch.content
        break
      default:
        throw new Error('Unknown patch type ' + currentPatch.type)
    }
  })
}
```

### 三、diff 方法实现

- 用 JS 对象模拟 DOM 树
- 比较两棵虚拟 DOM 树的差异
- 把差异应用到真正的 DOM 树上

#### 3.1 用 JS 对象模拟 DOM 树

用 JavaScript 来表示一个 DOM 节点是很简单的事情，你只需要记录它的节点类型、属性，还有子节点：

element.js

```
function Element(tagName,props,children){
    this.tagName = tagName
    this.props = props
    this.children = children
}

module.exports = function(tagName,props,children){
  return new Element(tagName,props,children)
}
```

例如上面的 DOM 结构就可以简单的表示：

```
var el = require('./element')

var ul = el('ul',{id:'list'},[
  el('li',{class:'item'},['Item 1']),
  el('li',{class:'item'},['Item 2']),
  el('li',{class:'item'},['Item 3']),
])
```

现在`ul`只是一个 JavaScript 对象表示的 DOM 结构，页面上并没有这个结构。我们可以根据这个`ul`构建真正的`<ul>`:

```
Element.prototype.render = function(){
  var el = document.createElement(this.tagName) // 根据tagName构建
  var props = this.props

  for(var propName in props){ // 设置节点的DOM属性
    var propValue = props[propName]
    el.setAttribute(propName,propValue)
  }

  var children = this.children || []
  children.forEach(function(child){
      var childEl = (child instancedof Element) ? child.render():document.createTextNode(child)
    el.appendChild(childEl)
  })
  return el
}
```

#### 3.2 比较两棵虚拟 DOM 树的差异——diff 算法

`diff`算法用来比较两棵`Virtual DOM`树的差异，如果需要两棵树的完全比较，那么`diff`算法的时间复杂为`O(n^3)`。但是前端当中，你很少会跨越层级地移动`DOM`元素，所以`Virtual DOM`只会对同一个层级的元素进行对比，如下图所示，

```
function diff(oldTree,newTree){
    var index= 0
    var patches = {}
    dfsWalk(oldTree,newTree,index,patches)
    return patches
}

function dfsWalk(){
    var currentPatch = []
    if(typeof (oldNode) === 'string' && typeof (newNode) === 'string'){

    }
}
```

**差异类型**

`DOM` 操作导致的差异类型包括以下几种：

- 节点替换：节点改变了，例如将上面的`div`换成`h1`；
- 顺序互换：移动、删除、新增子节点，例如上面`div`的子节点，把`p`和`ul`顺序互换；
- 属性更改：修改了节点的属性，例如把上面`li`的`class`样式类删除；
- 文本改变：改变文本节点的文本内容，例如将上面`p`节点的文本内容理性为`Real DOM`；

以上描述的几种差异类型在代码中定义如下所示：

```
var REPLACE = 0 // 替换原先的节点
var REORDER = 1 // 重新排序
var PROPS = 2 // 修改了节点的属性
var TEXT = 3 // 文本内容改变
```

#### 3.3 把差异应用到真正的 DOM 树上

因为步骤一所构建的构建的 JavaScript 对象树和`render`出来真正的 DOM 树的信息、结构是一样的。所以我们可以对那棵 DOM 树也进行尝试优先的遍历，遍历的时候从步骤二生成的`patches`对象中找出当前遍历的节点差异，然后进 DOM 操作。

### 源码分析

### 参考资料

- [Diff 算法](https://github.com/aooy/blog/issues/2)
- [simple-virtual-dom](https://github.com/livoras/simple-virtual-dom)
- [Virtual Dom 和 Diff 算法](https://mp.weixin.qq.com/s/9nB2bfDczNFRpUTiBwup8Q)
- [【Vue 原理】Diff - 白话版](https://zhuanlan.zhihu.com/p/81752104)
- [VirtualDOM 与 diff(Vue 实现)](https://zhuanlan.zhihu.com/p/29450092)
- [让虚拟 DOM 和 DOM-diff 不再成为你的绊脚石](https://juejin.im/post/5c8e5e4951882545c109ae9c)
- [虚拟 Dom+Diff--Vue 源码动手写系列](https://juejin.im/post/5e53c9c051882549150ea5d3)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
