# diff 算法

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [分析 diff](#一、分析-diff)
- [pach 方法](#二、pach-方法)
- [算法实现](#三、算法实现)

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

#### 源码分析

### 二、pach 方法

### 三、算法实现

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
```

**差异类型**

`DOM` 操作导致的差异类型包括以下几种：

- 节点替换：节点改变了，例如将上面的`div`换成`h1`；
- 顺序互换：移动、删除、新增子节点
- 属性更改：
- 文本改变：

#### 3.3 把差异应用到真正的 DOM 树上

因为步骤一所构建的构建的 JavaScript 对象树和`render`出来真正的 DOM 树的信息、结构是一样的。所以我们可以对那棵 DOM 树也进行尝试优先的遍历，遍历的时候从步骤二生成的`patches`对象中找出当前遍历的节点差异，然后进 DOM 操作。

```
function patch(node,patches){
  var walker = {index:0}
  dfsWalk(node,walker,patches)
}

function dfsWalk(node,walker,patches){
  var currentPatches = patches[walker.index]  // 从patches拿出当前节点的差异

  var len = node.childNodes ? node.childNodes.length:0
  for(var i=0;i<len;i++){
    var child = node.childNodes[i]
    walker.index++
    dfsWalk(child, walker, patches)
  }

  if(currentPatches){
    applyPatches(node, currentPatches) // 对当前节点进行DOM操作
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
