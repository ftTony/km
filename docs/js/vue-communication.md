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

父组件A通过props的方式向子组件B传递，B to A通过在B组件中v-on的方式实现。

#### 1.1 父组件向子组件传值

接下来我们通过一个例子，说明父组件如何向子组件传递值：在子组件User.vue中如何获取父组件App.vue中的数据`users:["Henry","Bucky","Emily"]`

```
// App.vue组件
<template>
    <div id="app">
        <users v-bind:users="users"></users>    // 前者自定义名称便于子组件调用，后者要传递数据名
    </div>
</template>
<script>
import Users from './components/Users'
export default{
    name:'App',
    data(){
        return {
            users:['Henry','Bucky','Emily']
        }
    },
    components:{
        'users':Users
    }
}
</script>
```

```
// users子组件
<template>
    <div class="hello">
        <ul>
            <li v-for="user in users">{{user}}</li> // 遍历传递过来的值，然后呈现到页面
        </ul>
    </div>
</template>
<script>
export default{
    name:'HelloWorld',
    props:{
        users:{     // 这个就是父组件中子标签自定义名字
            type:Array,
            required:true
        }
    }
}
</script>
```

**总结：父组件通过props向下传递数据给子组件。注：组件中的数据共有三种形式：data、props、computed**

#### 1.2 子组件向父组件传值（通过事件形式）

接下来我们通过一个例子，说明子组件如何向父组件传递值：当我们点击“Vue.js Demo”后，子组件向父组件传递值，文字由原来的“传递的是一个值”变成“子向父组件传值”，实现子组件向父组件值的传递。

![images](vue04.png)

```
// 子组件
<template>
    <header>
        <h1 @click="changeTitle">{{title}}</h1>   //绑定一个点击事件
    </header>
</template>
<script>
export default{
    name:'app-header',
    data(){
        return{
            title:'Vue.js Demo'
        }
    },
    methods:{
        changeTitle(){
            this.$emit('titleChanged','子向父组件传值');    // 自定义事件  传递值“子向父组件传值”
        }
    }
}
</script>
```

```
// 父组件
<template>
    <div id="app">
        <app-header v-on:titleChanged="updateTitle">   // 与子组件titleChanged自定义事件保持一致，updateTitle($event)接受传递过来的文字
        </app-header>
        <h2>{{title}}</h2>
    </div>
</template>
<script>
import Header from './components/Header'
export default{
    name:'App',
    data(){
        return {
            title:"传递的是一个值"
        }
    },
    methods:{
        updateTitle(e){ //声明这个函数
            this.title = e;
        }
    },
    components:{
        'app-header':Header
    }
}
</script>
```

**总结：子组件通过events给父组件发送消息，实际上就是子组件把自己的数据发送到父组件。**

### 二、`$emit`/`$on`

**这种方法通过一个空的Vue实例作为中央事件总线（事件中心），用它来触发事件和监听，巧妙而轻量地实现了任何组件间的通信，包括父子、兄弟、跨级。**当我们的项目比较大的时，可以选择更好的状态管理解决方案vuex。

#### 2.1 具体实现方式

```
var Event = new Vue();
Event.$emit(事件名，数据);
Event.$on(事件名，data=>{});
```

### 2.2 举个例子

假设兄弟组件有三个，分别是A、B、C组件，C组件如何获取A或者B组件的数据

```
```

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
