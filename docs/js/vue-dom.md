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

DOM 引擎、JS 引擎相互独立，但又工作在同一线程（主线程）JS 代码调用 DOM API 必须挂起 JS 引擎、转换传入参数数据、激活 DOM 引擎，DOM 重绘后南转换可能有的返回值，最后激活 JS 引擎并继续执行频繁的 DOM API 调用，且浏览器厂商不做“批量处理”优化，引擎间切换的单位代价将那事积累若其中有强制重绘的 DOM API 调用，重新计算布局、重新绘制图像引起更大的性能消耗。

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
- 实例输出

`diff`算法用来比较两棵`Virtual DOM`树的差异，如果需要两棵树的完全比较，那么`diff`算法的时间复杂为`O(n^3)`。但是前端当中，你很少会跨越层级地移动`DOM`元素，所以`Virtual DOM`只会对同一个层级的元素进行对比，如下图所示，`div`只会和同一层级的`div`对比，第二层级会跟第二层级对比，这样算法复杂度就可以达到`O(n)`。

![images](vue-diff-12.png)

#### 4.1 深度优先遍历，记录差异

在实际的代码中，会对新旧两棵树进行一个深度优先的遍历，这样每个节点都会有一个唯一的标记：

[images](vue-diff-13.png)

在深度优先遍历的时候，每遍历到一个节点就把该节点和新的树进行对比。如果有差异的话就记录到一个对象里面。

```
function diff(oldTree,newTree){
    var index= 0
    var patches = {}
    dfsWalk(oldTree,newTree,index,patches)
    return patches
}

// 对两棵树进行深度优先遍历
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

从以上可以得出，`patchs[1]`表示`p`，`patches[3]`表示`ul`，以此类推。

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

子节点的对比算法，例如`p，ul，div`的顺序换成了`div，p，ul`。这个该怎么对比？如果按照同层级进行顺序对比的话，它们都会被替换掉。如`p`和`div`的`tagName`不同，`p`会被`div`所替代。最终，三个节点都会被替换，这样`DOM`开销就非常大。而实际上是不需要替换节点，而只需要经过节点移动就可以达到，我们只需知道怎么进行移动。

将这个总是抽象出来其实就是字符串的最小编辑距离问题（`Edition Distance`），最常见的解决方法是`Levenshtein Distance`，`Levenshtein Distance`是一个度量两个字符序列之间差异的字符串度量标准，两个单词之间的`Levenshtein Distance`是将一个单词转换为另一个单词所需的单字符编辑（插入、删除或替换）的最小数量。`Levenshtein Distance`是 1965 年由苏联数学家 Vladimir Levenshtein 发明的。`Levenshtein Distance`也被称为编辑距离，通过**动态规则**求解，时间复杂度为 `O(M*N)`。

定义：对两个字符串`a、b`，则他们的`Levenshtein Distance`为：

[images](vue-diff-14.png)

示例：字符串`a`和`b`，`a="abcde"，b="cabef"`，根据上面给出的计算公式，则他们的`Levenshtein Distance`的计算过程如下：

[images](vue-diff-15.png)

本文的`demo`使用插件`list-diff2`算法进行比较，该算法的时间复杂`O(n*m)`，虽然该算法并非最优的算法，但是用于对于`dom`元素的常规操作是足够的。

#### 4.4 实例输出

两个虚拟`DOM`对象如下图所示，其中`ul1`表示原有的虚拟`DOM`树，`ul2`表示改变后的虚拟`DOM`树

```
var ul1 = el('div',{id: 'virtual-dom'},[
    el('p',{},['Virtual DOM']),
    el('ul',{id:'list'},[
        el('li',{class:'item'},['Item 1']),
        el('li',{class:'item'},['Item 2']),
        el('li',{class:'item'},['Item 3'])
    ]),
    el('div',{},['Hello World'])
])
```

我们查看输出的两个虚拟`DOM`对象之间的差异对象如下图所示，我们能通过差异对象得到，两个虚拟`DOM`对象之间进行了哪些变化，从而根据这个差异对象（`patches`）更改原先的真实`DOM`结构，从而将页面的`DOM`结构进行更改。

![images](vue-diff-16.png)

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

![images](vue-diff-17.png)

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
Vue.prototype.$mount = function(el,hydrating){
    el = el && inBrowser ? query(el) : undefined
    return mountCompon(this,el,hydrating)
}
```

我们发现`$mount`方法实际上会去调用`mountComponent`方法，这个方法定义在`src/core/instance/lifecycle.js`文件中

```
export function mountComponent(vm,el,hydrating){
    vm.$el = el
     // 省略一系列其它代码
  let updateComponent
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = () => {
      // 生成虚拟 vnode
      const vnode = vm._render()
      // 更新 DOM
      vm._update(vnode, hydrating)

    }
  } else {
    updateComponent = () => {
      vm._update(vm._render(), hydrating)
    }
  }

  // 实例化一个渲染Watcher，在它的回调函数中会调用 updateComponent 方法
  new Watcher(vm, updateComponent, noop, {
    before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate')
      }
    }
  }, true /* isRenderWatcher */)
  hydrating = false

  return vm
}
```

从上面的代码可以看到，`mountComponent`核心就是先实例化一个渲染`Watcher`，在它的回调函数中会调用`updateComponent`方法，在此方法

**创建虚拟 Node**

`Vue`的`_render`方法是实例的一个私有方法，它用来把实例渲染成一个虚拟`Node`。它的定义在`src/core/instance/render.js`文件中：

```
Vue.prototype._render = function(){
     const vm = this
     const {render,_parentVnode} = vm.$options
     let vnode
     try{
         // 省略一系列代码
         currentRenderingInstance = vm
         // 调用createElement 方法来返回vnode
         vnode = render.call(vm._renderProxy,vm.$createElement)
     }catch(e){
         handleError(e,vm,`render`){}
     }
     vnode.parent = _parentVnode
     console.log("vnode...:",vnode)
     return vnode
}
```

`Vue.js`利用`_createElement`方法创建`VNode`，它定义在`src/core/vdom/create-elemenet.js`中：

```
export function _createElement (
  context: Component,
  tag?: string | Class<Component> | Function | Object,
  data?: VNodeData,
  children?: any,
  normalizationType?: number
): VNode | Array<VNode> {

  // 省略一系列非主线代码

  if (normalizationType === ALWAYS_NORMALIZE) {
    // 场景是 render 函数不是编译生成的
    children = normalizeChildren(children)
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    // 场景是 render 函数是编译生成的
    children = simpleNormalizeChildren(children)
  }
  let vnode, ns
  if (typeof tag === 'string') {
    let Ctor
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag)
    if (config.isReservedTag(tag)) {
      // 创建虚拟 vnode
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      )
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag)
    } else {
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      )
    }
  } else {
    vnode = createComponent(tag, data, context, children)
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) applyNS(vnode, ns)
    if (isDef(data)) registerDeepBindings(data)
    return vnode
  } else {
    return createEmptyVNode()
  }
}
```

`_createElement`方法有 5 个参数，`context`表示 VNode 的上下文环境，它是`Component`类型；`tag`表示标签，它可以是一个字符串，也可以是一个`Component`;`data`表示 VNode 的数据，它是一个`VNodeData`类型，可以在`flow/vnode.js`中找到它的定义；`children`表示当前 VNode 的子节点，它是任意类型的，需要被规范为标准的`VNode`数组；

#### 6.2 diff 过程

`Vue.js`源码实例化了一个`watcher`，这个~被添加到了在模板当中所绑定变量的依赖当中，一旦`model`中的响应式的数据发生了变化，这些响应式的数据所的`dep`数组便会调用`dep.notify()`方法完成所有依赖遍历执行的工作，这包括视图的更新，即`updateComponent`方法的调用。`watcher`和`updateComponent`方法定义在`src/core/instance/lifecycle.js`文件中。

```
export function mountComponent(vm,el,hydrating){
    vm.$el = el
    // 省略一系列其它代码
    let updateComponent

    if (process.env.NODE_ENV !== 'production' && config.performance && mark){
        updateComponent = () => {
            // 生成虚拟 vnode
            const vnode = vm._render()
            // 更新DOM
            vm._update(vnode,hydrating)
        }
    }else{
        updateComponent = () => {
            vm._update(vm._render(),hydrating)
        }
    }

    // 实例化一个渲染Watcher，在它的回调函数中会调用 updateComponent方法
    new Watcher(vm,updateComponent,noop,{
        before (){
            if(vm._isMounted && !vm._isDestroyed){
                callHook(vm,'beforeUpdate')
            }
        }
    },true)
    hydrating = false

    return vm
}
```

完成视图的更新工作事实上就是调用了`vm._update`方法，这个方法的`Vnode`，调用的`vm._update`方法定义在`src/core/instance/lifecycle.js`中。

```
Vue.prototype._update = function(vnode,hydrating){
    const vm = this
    const prevEl = vm.$el
    const prevVnode = vm._vnode
    const restoreActiveInstance = setActiveInstance(vm)
    vm._vnode = vnode
    if (!prevVnode) {
      // 第一个参数为真实的node节点，则为初始化
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */)
    } else {
      // 如果需要diff的prevVnode存在，那么对prevVnode和vnode进行diff
      vm.$el = vm.__patch__(prevVnode, vnode)
    }
    restoreActiveInstance()
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el
    }
}
```

在这个方法当中最为关键的就是`vm.__patch__`方法，这也是整个`virtual-dom`当中最为核心的方法，主要完成了`prevVnode`和`vnode`的`diff`过程并根据需要操作的`vdom`节点打`patch`，最后生成新的真实`dom`节点并完成视图的更新工作。

接下来，让我们看下`vm.__patch__`的逻辑过程，`vm.__patch__`方法定义在`src/core/vdom/patch.js`中。

```
function patch(oldVnode,vnode,hydrating,removeOnly){
    .....
    if(isUndef(oldVnode)){
        // 当oldVnode不存在时，创建新的节点
        isInitialPatch = true
        createElm(vnode,insertedVnodeQueue)
    }else{
        // 对oldVnode和vnode进行diff，并对oldVnode打patch
      const isRealElement = isDef(oldVnode.nodeType)
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly)
      }
    ......
    }
}
```

在`patch`方法中，我们看到会分为两种情况，一种是当`oldVnode`不存在时，会创建新的节点；另一种则是已经存在`oldVnode`，那么会对`oldVnode`和`vnode`进行`diff`及`patch`的过程。其中`patch`过程中会调用`sameVnode`方法来对传入的 2 个`vnode`进行基本属性的比较，只有当基本属性相同的情况下才认为这 2 个`vnode`只是局部发生了更新，然后才会对这 2 个`vnode`进行`diff`，如果 2 个`vnode`的基本属性存在不一致的情况，那么就会直接跳过`diff`的过程，进而依据`vnode`新建一个真实的`dom`，同时删除老的`dom`节点。

```
function sameVnode(a,b){
    return (a.key === b.key && a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a,b))
}
```

`diff`过程中主要是通过调用`patchVnode`方法进行的：

```
function patchVnode(oldVnode,vnode,insertedVnodeQueue,ownerArray,index,removeOnly){
......
    const elm = vnode.elm = oldVnode.elm
    const oldCh = oldVnode.children
    const ch = vnode.children
    // 如果vnode没有文本节点
    if (isUndef(vnode.text)) {
      // 如果oldVnode的children属性存在且vnode的children属性也存在
      if (isDef(oldCh) && isDef(ch)) {
        // updateChildren，对子节点进行diff
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)
      } else if (isDef(ch)) {
        if (process.env.NODE_ENV !== 'production') {
          checkDuplicateKeys(ch)
        }
        // 如果oldVnode的text存在，那么首先清空text的内容,然后将vnode的children添加进去
        if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, '')
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
      } else if (isDef(oldCh)) {
        // 删除elm下的oldchildren
        removeVnodes(elm, oldCh, 0, oldCh.length - 1)
      } else if (isDef(oldVnode.text)) {
        // oldVnode有子节点，而vnode没有，那么就清空这个节点
        nodeOps.setTextContent(elm, '')
      }
    } else if (oldVnode.text !== vnode.text) {
      // 如果oldVnode和vnode文本属性不同，那么直接更新真是dom节点的文本元素
      nodeOps.setTextContent(elm, vnode.text)
    }
    ......
}
```

从以上代码得知。

`diff`过程中分了好几种情况，`oldCh`为`oldVnode`的子节点，`ch`为`Vnode`的子节点：

- 首先进行文本节点的判断，若`oldVnode.text !== vnode.text`，那么就会直接进行文本节点的替换；
- 在`vnode`没有文本节点的情况下，进入子节点的`diff`；
- 当`oldCh`和`ch`都在存在且不相同的情况下，调用`updateChildren`对子节点进行`diff`;
- 若`oldCh`不存在，`ch`存在，首先清空`oldVnode`的文本节点，同时调用`addVnodes`方法将`ch`添加到`elm`真实`dom`节点当中；
- 若`oldCh`存在，`ch`不存在，则删除`elm`真实节点下的`oldCh`子节点；
- 若`oldVnode`有文本节点，而`vnode`没有，那么就清空这个文本节点。

**子节点`diff`流程分析**

分析一下`updateChildren`方法，它也是整个`diff`过程中最重要的环节，以下为`Vue.js`的源码过程，为了更形象理解`diff`过程，我们给出相关的示意图来讲解。

```
// 循环更新子节点
function updateChildren(parentElm,oldCh,newCh,insertedVnodeQueue,removeOnly){
    // 为oldCh和newCh分别建立索引，为之后遍历的依据
    let oldStartIdx = 0     // oldChildren开始索引
    let newStartIdx = 0     // newChildren开始索引
    let oldEndIdx = oldCh.length - 1    // oldChilren结束索引
    let oldStartVnode = oldCh[0]    // oldChildren中所有示处理节点中的第一个
    let oldEndVnode = oldCh[oldEndIdx] // oldChildren中所有未处理节点中的最后一个
    let newEndIdx = newCh.length - 1    // newChildren结束索引
    let newStartVnode = newCh[0]    // newChildren中所有未处理节点中的第一个
    let newEndVnode = newCh[newEndIdx]  // newChildren中所有未处理节点的最后一个
    let oldKeyToIdx, idxInOld, vnodeToMove, refElm

    // 以"新前"、"新后"、"旧前"、"旧后"的方式开始比对节点
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx] // 如果oldStartVnode不存在，则直接路过，比对下一个
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx]
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
          // 如果新前与旧前节点相同，就把两个节点进行patch更新
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
        oldStartVnode = oldCh[++oldStartIdx]
        newStartVnode = newCh[++newStartIdx]
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        // 如果新后与旧后节点相同，就把两个节点进行patch更新
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
        oldEndVnode = oldCh[--oldEndIdx]
        newEndVnode = newCh[--newEndIdx]
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
          // 如果新后与旧前节点相同，先把两个节点进行patch更新，然后把旧前节点移动到oldChildren中所有未处理节点之后
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
        oldStartVnode = oldCh[++oldStartIdx]
        newEndVnode = newCh[--newEndIdx]
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // 如果新前与旧后节点相同，先把两个节点进行patch更新，然后把旧后节点移动到oldChilren中所有未处理节点之前
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
        oldEndVnode = oldCh[--oldEndIdx]
        newStartVnode = newCh[++newStartIdx]
      } else {
        // 如果不属于以上四种情况，就进行常规的循环比对patch
        if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)
        // 如果在oldChildren里找不到当前循环的newChildren里的子节点
        if (isUndef(idxInOld)) {
        // 新增节点并插入到合适位置
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
        } else {
            //  如果在oldChildren里找到了当前循环的newChildren里的子节点
          vnodeToMove = oldCh[idxInOld]
          // 如果两个节点相同
          if (sameVnode(vnodeToMove, newStartVnode)) {
              // 调用patchVnode更新节点
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
            oldCh[idxInOld] = undefined
            // canmove表示是否需要移动节点，如果为true表示需要移动，则移动节点，如果为false则不用移动
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
          }
        }
        newStartVnode = newCh[++newStartIdx]
      }
    }
    if (oldStartIdx > oldEndIdx) {
        /**
         *  如果oldChildrend比newChildrend先循环完毕，
         *  那么newChildren里面剩余的节点都是需要新增的节点，
         *  把[newStartIdx,newEndIdx]之间的所有节点都插入到DOM中
         */
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
    } else if (newStartIdx > newEndIdx) {
      /**
       *  如果newChildren比oldChildren先循环完毕，
       *  那么oldChildren里面剩余的节点都是需要删除的节点
       *  把[oldStartIdx,oldEndIdx]之间的所有节点都删除
       */
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
    }
}
```

在开始遍历`diff`前，首先给`oldCh`和`newCh`分别分配一个`startIndex`和`endIndex`来作为遍历的索引，当`oldCh`或者`newCh`遍历完后（`startIndex >= endIndex`），就停止`oldCh`和`newCh`的`diff`过程。接下来通过实例来看下整个`diff`的过程。

**无`key`的`diff`过程**

我们通过以下示意图对以上代码过程进行讲解：

1. 首先从第一个节点开始比较，不管是`oldCh`还是`newCh`的起始或者终止节点都不存在`sameVnode`，同时节点属性中是不带`key`标记的，因此第一轮的`diff`完后，`newCh`的`startVnode`被添加到`oldStartVnode`的前面，同时`newStartIndex`前移一位；

![images](vue-diff-01.png)

2. 第二轮的`diff`中，满足`sameVnode(oldStartVnode,newStartVnode)`，因此对这 2 个`vnode`进行`diff`，最后将`patch`打到`oldStartVnode`上，同时`oldStartVnode`和`newStartIndex`都向前移动一位；

![images](vue-diff-02.png)

3. 第三轮的`diff`中，满足`sameVnode(oldEndVnode,newStartVnode)`，那么首先对`oldEndVnode`和`newStartVnode`进行`diff`，并对`oldEndVnode`进行`patch`，并完成`oldEndVnode`移位的操作，最后`newStartIndex`前移一位，`oldStartVnode`后移一位；

![images](vue-diff-03.png)

4. 第四轮的`diff`中，过程同步骤 3；

![images](vue-diff-04.png)

5. 第五轮的`diff`中，同过程 1；

![images](vue-diff-05.png)

6. 遍历的过程结束后，`newStartIdx > newEndIdx`，说明此时`oldCh`存在多余的节点，那么最后就需要将这些多余的节点删除。

![images](vue-diff-06.png)

**有`key`的`diff`过程**

在`vnode`不带`key`的情况下，每一轮的`diff`过程当中都是`起始`和`结束`节点进行比较，直到`oldCh`或者`newCh`被遍历完。而当为`vnode`引入`key`属性后，在每一轮的`diff`过程中，当`起始`和`结束`节点都没有找到`sameVnode`时，然后再判断在`newStartVnode`的属性中是否有`key`，且是否在`oldKeyToIndex`中找到对应的节点：

- 如果不存在这个`key`，那么就将这个`newStartVnode`作为新的节点创建且插入到原有的`root`的子节点中；
- 如果存在这个`key`，那么就取出`oldCh`中的存在这个`key`的`vnode`，然后再进行`diff`的过程；

通过以上分析，给`vdom`上添加`key`属性后，遍历`diff`的过程中，当**起始点，结束点**的**搜寻**及`diff`出现还是无法切尔西的情况下时，就会用`key`来作为唯一标识，来进行`diff`，这样就可以提高`diff`效率。

带有`key`属性的`vnode`的`diff`过程可见下图：

1. 首先从第一个节点开始比较，不管是`oldCh`还是`newCh`的起始或者终止节点都不存在`sameVnode`，但节点属性中是带`key`标记的，然后在`oldKeyToIndx`中找到对应的节点，这样第一轮`diff`过后`oldCh`上的`B节点`被删除了，但是`newCh`上的`B节点`上`elm`属性保持对`oldCh`上`B节点`的`elm`引用。

![images](vue-diff-07.png)

2. 第二轮的`diff`中，满足`sameVnode(oldStartVnode,newStartVnode)`，因此对这 2 个`vnode`进行`diff`，最后将`patch`打到`oldStartVnode`上，同时`oldStartVnode`和`newStartIndex`都向前移动一位；

![images](vue-diff-08.png)

3. 第三轮的`diff`中，满足`sameVnode(oldEndVnode,newStartVnode)`，那么首先对`oldEndVnode`和`newStartVnode`进行`diff`，并对`oldEndVnode`进行`patch`，并完成`oldEndVnode`移位的操作，最后`newStartIndex`前移一位，`oldStartVnode`后移一位；

![images](vue-diff-09.png)

4. 第四轮的`diff`中，过程同步骤 2；

![images](vue-diff-10.png)

5. 第五轮的`diff`中，因为此时`oldStartIndex`已经大于`oldEndIndex`，所以将剩余的`Vnode`队列插入队列最后。

![images](vue-diff-11.png)

#### 6.3 patch 过程

介绍`diff`过程中，我们会看到`nodeOps`相关的方法对真实`DOM`结构进行操作，`nodeOps`定义在`src/platforms/web/runtime/node-ops.js`中，其为基本`DOM`操作，这里就不在详细介绍。

```
export function createElementNS (namespace: string, tagName: string): Element {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

export function createTextNode (text: string): Text {
  return document.createTextNode(text)
}

export function createComment (text: string): Comment {
  return document.createComment(text)
}

export function insertBefore (parentNode: Node, newNode: Node, referenceNode: Node) {
  parentNode.insertBefore(newNode, referenceNode)
}

export function removeChild (node: Node, child: Node) {
  node.removeChild(child)
}
```

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
