# 虚拟 DOM 解析

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [虚拟 DOM 的优缺点](#一、虚拟-DOM-的优缺点)
- [虚拟 DOM 的实现原理](#二、虚拟-DOM-的实现原理)
- [`JS`对象模拟`DOM`树](#三、`JS`对象模拟`DOM`树)
- [diff 算法实现](#四、diff-算法实现)
- [pach 方法实现](#五、pach-方法实现)
- [源码分析](#六、源码分析)

### 一、虚拟 DOM 的优缺点

- 优点
- 缺点

#### 优点

- **保证性能下限**：框架的虚拟 DOM 需要甜酸任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；
- **无需手动操作 DOM**：我们不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；
- **跨平台**：虚拟 DOM 本质上是 JavaScript 对象，而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。

#### 缺点

- **无法进行极致优化**：虽然虽然虚拟 DOM+合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。

### 二、虚拟 DOM 的实现原理

虚拟 DOM 的实现原理主要包括以下 3 部分：

- 用 JavaScript 对象模拟真实 DOM 树，对真实 DOM 进行抽象；
- diff 算法 — 比较两棵虚拟 DOM 树的差异；
- pach 算法 — 将两个虚拟 DOM 对象的差异应用到真正的 DOM 树。

### 三、`JS`对象模拟`DOM`树

用 JavaScript 来表示一个 DOM 节点是很简单的事情，你只需要记录它的节点类型、属性，还有子节点：

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

### 四、diff 算法实现

- 深度优先遍历，记录差异
- 差异类型
- 列表对比算法

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

    }else if(newNode!==null && oldNode.tagName === newNode.tagName){

    }else if(newNode!==null){

    }

    if(currentPatch.length){
        patches[index] = currentPatch
    }
}
```

### 4.2 差异类型

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

#### 4.3 差异类型

### 五、pach 方法实现

- 深度优先遍历`DOM`树
- 对原有`DOM`树进行`DOM`操作
- DOM 结构改变

#### 5.1 深度优先遍历 DOM 树

所构建的`JavaScript`对象树和`render`出来真正的`DOM`树的信息、结构是一样的。所以我们可以对那棵`DOM`树也进行深度优先的遍历，遍历的时候从上一个步骤生成的`patches`对象中找出当前遍历的节点差异

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

#### 5.2 对原有 DOM 树进行 DOM 操作

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

#### 5.3 DOM 结构改变

通过将上一步骤得到的两个`DOM`对象之间的差异，应用到第一个（原先）`DOM`结构中，我们看到`DOM`结构进行了预期的变化，如下图所示：

### 六、源码分析

#### 6.1 `VMode`模拟`DOM`树

在`Vue.js`中，`Virtual DOM`是用`VNode`这个`Class`去描述，它定义在`src/core/vdom/vnode.js`中，从以下代码块中可以看到`Vue.js`中的`Virtual DOM`的定义较为复杂一些，因为它这里包含了很多`Vue.js`的特性。实际上`Vue.js`中`Virtual DOM`是借鉴了一个开源库[snabbdom](https://github.com/snabbdom/snabbdom)的实现，然后加入了一些`Vue.js`的一些特性。

```

```

这里有几个核心的属性

- `tag`属性即这个`vnode`的标签属性
- `data`属性包含了最后渲染成真实`dom`节点后，节点上的`class`，`attribute`，`style`以及绑定的事件

**源码创建 VNode 过程**

```

```

通过查看`Vue`的`function`，我们知道`Vue`只能通过`new`关键字初始化，然后调用`this._init`方法，该方法在`src/core/instance/init.js`中定义。

```

```

#### 6.2 diff 过程

`Vue.js`源码实例化了一个`watcher`，这个~被添加到了在模板当中所绑定变量的依赖当中，一旦`model`中的响应式的数据发生了变化，这些响应式的数据所的`dep`数组便会调用`dep.notify()`方法完成所有依赖遍历执行的工作，

`diff`过程中分了好几种情况，`oldCh`为`oldVnode`的子节点，`ch`为`Vnode`的子节点：

- 首先进行文本节点的判断，若
- 在`vnode`没有文本节点的情况下，进入子节点的`diff`；

**子节点`diff`流程分析**

#### 6.3 patch 过程

### 参考资料

- [如何实现一个 Virtual DOM 算法](https://github.com/livoras/blog/issues/13)
- [揭秘 Vue 中的 Virtual Dom](https://mp.weixin.qq.com/s/EeN7E8uQS4R_JJloPX8fCQ)
- [虚拟 DOM 到底是什么？](https://mp.weixin.qq.com/s/oAlVmZ4Hbt2VhOwFEkNEhw)
- [深入剖析：Vue 核心之虚拟 DOM](https://juejin.im/post/5d36cc575188257aea108a74)
- [现代前端科技解析 —— Virtual DOM #](https://www.404forest.com/2019/03/07/modern-web-development-tech-analysis-virtual-dom/)
- [Diff 算法](https://github.com/aooy/blog/issues/2)
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
