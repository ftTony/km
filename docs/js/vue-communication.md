# vue 组件通信

## 前言

组件是vue.js最强大的功能之一，而组件实例的作用域是相互独立的，这就意味着不同组件之间的数据无法相互引用。一般来说，组件可以有以下几种关系：

![images](vue03.png)

如上图所示，A和B、B和C、B和D都是父子关系，C和D是兄弟关系，A和C是隔代关系（可能隔多代）。

针对不同的使用场景，如何选择行之有效的通信方式？这是我们所要探讨的主题。本文总结了vue组件间通信的几种方式，如`props`、`$emit`/`$on`、`vuex`、`$parent` / `$children`、`$attrs`/`$listeners`和`provide`/`inject`，以通俗易懂的实例讲述这其中的差别及使用场景，希望对小伙伴有些许帮助。

## 内容

- props/$emit
- $emit/$on
- vuex
- $attrs/$listeners
- provide/inject
- $parent/$chilren与ref

### 一、`props`/`$emit`

#### 1.1 父组件向子组件传值

```
```

#### 1.2 子组件向父组件传值（通过事件形式）

```
```

### 二、`$emit`/`$on`

### 三、vuex

### 四、`$attrs`/`$listeners`

### 五、`provide`/`inject`

### 六、`$parent`/`$chilren`与ref

### 参考资料

- [vue 组件通信全揭秘(共 7 章)](https://juejin.im/post/5bd97e7c6fb9a022852a71cf)
- [vue 组件间通信六种方式（完整版）](https://juejin.im/post/5cde0b43f265da03867e78d3)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
