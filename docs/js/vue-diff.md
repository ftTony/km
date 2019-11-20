# diff 算法

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- virtual dom
- 分析diff
- 算法实现

### 一、virtual dom

```

```

### 二、分析diff

一篇相当经典的文章[React’s diff algorithm](https://calendar.perfplanet.com/2013/diff/)中的图，react的diff其实和vue的diff大同小异。所以这张图能很好解释过程。**比较只会在同层级进行，不会跨层级比较。**

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

我们可能期望将`<span>`直接移动到`<p>`的后边，这是最优的操作。但是实际的diff操作是移除`<p>`里的`<span>`再创建一个新的`<span>`插到`<p>`的后边。因为新加的`<span>`在层级2，旧的在层级3，属于不同层级的比较。

#### 源码分析



### 三、算法实现

- 用JS对象模拟DOM树
- 比较两棵虚拟DOM树的差异
- 把差异应用到真正的DOM树上

#### 3.1 用JS对象模拟DOM树

用JavaScript来表示一个DOM节点是很简单的事情，你只需要记录它的节点类型、属性，还有子节点：

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

例如上面的DOM结构就可以简单的表示：

```
var el = require('./element')

var ul = el('ul',{id:'list'},[
  el('li',{class:'item'},['Item 1']),
  el('li',{class:'item'},['Item 2']),
  el('li',{class:'item'},['Item 3']),
])
```

现在`ul`只是一个JavaScript对象表示的DOM结构，页面上并没有这个结构。我们可以根据这个`ul`构建真正的`<ul>`:

```
Element.prototype.render = function(){
  var el = document.createElement(this.tagName) // 根据tagName构建
  var props = this.props

  for(var propName in props){ // 设置节点的DOM属性
    var propValue = props[propName]
    el.setAttribute(propName,propValue)
  }
}
```

#### 3.2 比较两棵虚拟DOM树的差异

```
```

#### 3.3 把差异应用到真正的DOM树上

因为步骤一所构建的构建的JavaScript对象树和`render`出来真正的DOM树的信息、结构是一样的。所以我们可以对那棵DOM树也进行尝试优先的遍历，遍历的时候从步骤二生成的`patches`对象中找出当前遍历的节点差异，然后进DOM操作。

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

applyPathes,根据不同类型的差异对当前节点进行DOM操作：

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

- [如何实现一个 Virtual DOM 算法](https://github.com/livoras/blog/issues/13)
- [Diff 算法](https://github.com/aooy/blog/issues/2)
- [simple-virtual-dom](https://github.com/livoras/simple-virtual-dom)
- [揭秘 Vue 中的 Virtual Dom](https://mp.weixin.qq.com/s/EeN7E8uQS4R_JJloPX8fCQ)
- [Virtual Dom 和 Diff 算法](https://mp.weixin.qq.com/s/9nB2bfDczNFRpUTiBwup8Q)
- [【Vue原理】Diff - 白话版](https://zhuanlan.zhihu.com/p/81752104)
- [VirtualDOM与diff(Vue实现)](https://zhuanlan.zhihu.com/p/29450092)
- [虚拟 DOM 到底是什么？](https://mp.weixin.qq.com/s/oAlVmZ4Hbt2VhOwFEkNEhw)
- [现代前端科技解析 —— Virtual DOM](https://www.404forest.com/2019/03/07/modern-web-development-tech-analysis-virtual-dom/)
- [深入剖析：Vue核心之虚拟DOM](https://juejin.im/post/5d36cc575188257aea108a74)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
