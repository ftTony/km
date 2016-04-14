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
```

如何将`ul`渲染页面上真实的`DOM`结构，相关渲染函数如下：

```
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

module.exports = Element
```

### 四、diff 算法实现

- 深度优先遍历，记录差异
- 差异类型
- 列表对比算法

`diff`算法用来比较两棵`Virtual DOM`树的差异，如果需要两棵树的完全比较，那么`diff`算法的时间复杂为`O(n^3)`。但是前端当中，你很少会跨越层级地移动`DOM`元素，所以`Virtual DOM`只会对同一个层级的元素进行对比，如下图所示，

#### 4.1 深度优先遍历，记录差异

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
        // 文本内容改变
        if(newNode !== oldNode){
            currentPath.push({type:patch.TEXT,content:newNode})
        }
    }else if(newNode!==null && oldNode.tagName === newNode.tagName && oldNode.key === newNode.key){
        // 节点相同，比较属性
        var propsPatches = diffProps(oldNode,newNode)
        if(propsPatches){
            currentPatch.push({type:patch.PROPS,props:propsPatches})
        }

        // 比较子节点，如果子节点有'ignore'属性，则不需要比较
        if(!isIgnoreChild(newNode)){
            diffChildren(oldNode.children,newNode.children,index,patches,currentPatch)
        }
    }else if(newNode!==null){
        // 新节点和旧节点不同，用replace替换
        currentPatch.push({type:patch.REPLACE,node:newNode})
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

#### 4.3 列表对比算法

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

我们根据不同类型的差异对当前节点进行不同的`DOM`操作 ，例如如果进行了节点替换，就进行节点替换`DOM`操作 ；如果节点文本发生了改变，则进行文本替换的`DOM`操作 ；以及子节点重排属性改变等`DOM`操作，相关代码如`applyPathes`所示：

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
export default class VNode {
  tag: string | void;
  data: VNodeData | void;
  children: ?Array<VNode>;
  text: string | void;
  elm: Node | void;
  ns: string | void;
  context: Component | void; // rendered in this component's scope
  key: string | number | void;
  componentOptions: VNodeComponentOptions | void;
  componentInstance: Component | void; // component instance
  parent: VNode | void; // component placeholder node

  // strictly internal
  raw: boolean; // contains raw HTML? (server only)
  isStatic: boolean; // hoisted static node
  isRootInsert: boolean; // necessary for enter transition check
  isComment: boolean; // empty comment placeholder?
  isCloned: boolean; // is a cloned node?
  isOnce: boolean; // is a v-once node?
  asyncFactory: Function | void; // async component factory function
  asyncMeta: Object | void;
  isAsyncPlaceholder: boolean;
  ssrContext: Object | void;
  fnContext: Component | void; // real context vm for functional nodes
  fnOptions: ?ComponentOptions; // for SSR caching
  devtoolsMeta: ?Object; // used to store functional render context for devtools
  fnScopeId: ?string; // functional scope id support

  constructor (
    tag?: string,
    data?: VNodeData,
    children?: ?Array<VNode>,
    text?: string,
    elm?: Node,
    context?: Component,
    componentOptions?: VNodeComponentOptions,
    asyncFactory?: Function
  ) {
    this.tag = tag
    this.data = data
    this.children = children
    this.text = text
    this.elm = elm
    this.ns = undefined
    this.context = context
    this.fnContext = undefined
    this.fnOptions = undefined
    this.fnScopeId = undefined
    this.key = data && data.key
    this.componentOptions = componentOptions
    this.componentInstance = undefined
    this.parent = undefined
    this.raw = false
    this.isStatic = false
    this.isRootInsert = true
    this.isComment = false
    this.isCloned = false
    this.isOnce = false
    this.asyncFactory = asyncFactory
    this.asyncMeta = undefined
    this.isAsyncPlaceholder = false
  }

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  get child (): Component | void {
    return this.componentInstance
  }
}
```

这里有几个核心的属性

- `tag`属性即这个`vnode`的标签属性
- `data`属性包含了最后渲染成真实`dom`节点后，节点上的`class`，`attribute`，`style`以及绑定的事件
- `children`属性是`vnode`的子节点
- `text`属性是文本属性
- `elm`属性为这个`vnode`对应的真实`dom`节点
- `key`属性`vnode`的标记，在`diff`过程中可以提高`diff`的效率

**源码创建 VNode 过程**

我们在实例化一个`vue`实例，也即`new Vue()`时，实际上是执行`src/core/instance/index.js`中定义的`Function`函数。

```
function Vue(options){
    if(process.env.NODE_ENV !=='production' && !(this instanceof Vue)){
         warn('Vue is a constructor and should be called with the `new` keyword')
    }
    this._init(options)
}
```

通过查看`Vue`的`function`，我们知道`Vue`只能通过`new`关键字初始化，然后调用`this._init`方法，该方法在`src/core/instance/init.js`中定义。

```
Vue.prototype._init = function(options){
    const vm = this

    // 省略一系列其它初始化的代码

    if(vm.$options.el){
        console.log('');
        vm.$mount(vm.$options.el)
    }
}
```

**Vue 实例挂载**

`Vue`中是通过`$mount`实例方法去挂载`dom`的，下面我们通过分析`compiler`版本的`mount`实现，相关源码在目录``文件中定义：

```
const mount = Vue.prototype.$mount
Vue.prototype.$mount = function(el,hydrating){
    el = el && query(el)
    // 省略一系列初始化以及逻辑判断代码
    return mount.call(this, el, hydrating)
}
```

我们发现最终还是调用用原先原型上的`$mount`方法挂载，原先原型上的`$mount`方法在`src/platforms/web/runtime/index.js`中定义。

```
Vue.prototype.$mount = function(){

}
```

我们发现`$mount`方法实际上会去调用`mountComponent`方法，这个方法定义在`src/core/instance/lifecycle.js`文件中

```

```

从上面的代码可以看到，`mountComponent`核心就是先实例化一个渲染`Watcher`，在它的回调函数中会调用`updateComponent`方法，在此方法

**创建虚拟 Node**

`Vue`的`_render`方法是实例的一个私有方法，它用来把实例渲染成一个虚拟`Node`。它的定义在`src/core/instance/render.js`文件中：

```
Vue.prototype.\_render = function(){
     const vm = this
     const {render,_parentVnode} = vm.$options
     let vnode
     try{

     }catch(e){

     }
     vnode.parent = _parentVnode
}

```

#### 6.2 diff 过程

`Vue.js`源码实例化了一个`watcher`，这个~被添加到了在模板当中所绑定变量的依赖当中，一旦`model`中的响应式的数据发生了变化，这些响应式的数据所的`dep`数组便会调用`dep.notify()`方法完成所有依赖遍历执行的工作，这包括视图的更新，即`updateComponent`方法的调用。`watcher`和`updateComponent`方法定义在`src/core/instance/lifecycle.js`文件中。

```

```

完成视图的更新工作事实上就是调用了`vm._update`方法，这个方法的`Vnode`，调用的`vm._update`方法定义在`src/core/instance/lifecycle.js`中。

```

```

从以上代码得知。

`diff`过程中分了好几种情况，`oldCh`为`oldVnode`的子节点，`ch`为`Vnode`的子节点：

- 首先进行文本节点的判断，若`oldVnode.text !== vnode.text`，那么就会直接进行文本节点的替换；
- 在`vnode`没有文本节点的情况下，进入子节点的`diff`；
- 当`oldCh`和`ch`都在存在且不相同的情况下，调用`updateChildren`对子节点进行`diff`;
- 若`oldCh`不存在，`ch`存在，首先清空`oldVnode`的文本节点，同时调用`addVnodes`方法将`ch`添加到`elm`真实`dom`节点当中；

**子节点`diff`流程分析**

分析一下`updateChildren`方法，它也是整个`diff`过程中最重要的环节，

```

```

#### 6.3 patch 过程

#### 6.4 总结

通过前三小节解析，我们从主线上把模板和数据如何渲染成最终的`DOM`的过程分析完毕了，我们可以通过下图更直观看到从初始化`Vue`到最终渲染的整个过程。

![images](vue-diff.png)

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
```
