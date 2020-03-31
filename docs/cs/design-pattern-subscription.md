# 观察者模式和发布订阅模式的区别

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 观察者模式
- 订阅-发布模式
- 观察者模式与订阅-发布模式的区别
- 观察者模式与订阅-发布模式代码实现

### 一、观察者模式

观察者模式定义了对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知，并自动更新。观察者模式属于行为型模式，行为型模式关注的是对象之间的通讯；观察者模式就是观察都和被观察者之间的通讯。

观察者模式有一个别名叫“发布-订阅模式”，或者说是“订阅-发布模式”，订阅者和订阅目标是联系在一起的，当订阅目标发生改变时，逐个通知订阅者。我们可以用报纸期刊的订阅来形象的说明，当你订阅了一份报纸，每天都会有一份最新的报纸送到你手上，有多少人订阅报纸，报社就会发多少份报纸，报社和订报纸的客户就是上面文章开头所说的“一对多”的依赖关系。

### 二、订阅-发布模式

其实 24 种基本的设计模式中并没有发布订阅模式，他是只观察者模式的一个别称。

但是经过时间的沉淀，似乎他已经强大了起来，已经独立观察者模式，成为另外一种不同的设计模式。

在现在的发布订阅模式中，称为发布者的消息发送者不会将消息直接发送给订阅者，这意味着发布者和订阅者不知道彼此的存在。在发布者和订阅者之间存在第三个组件，称为高度中心或事件通道，它维持着发布者和订阅者之间的联系，过滤所有发布者传入的消息并相应地分发它们给订阅者。

举一个例子，你在微博上关注了 A，同时其他很多人也关注了 A，那么当 A 发布动态的时候，微博就会为你们推送这条动态。A 就是发布者，你是订阅者，微博就是调度中心，你和 A 是没有直接的消息往来的，全是通过微博来协调的。

### 三、观察者模式与订阅-发布模式的区别

![images](design-pattern-subscription.png)

两种模式之间的差异

- Observer 模式要求观察者必须订阅内容改变的事件，定义了一个一对多的依赖关系；
- Publish/Subscribe 模式使用了一个`调度中心/事件通道`，这个通道介于订阅者与发布者之间；
- 观察者模式里面观察者「被迫」执行内容改变事件（subject 内容事件）；发布/订阅模式中，订阅者可以自定义事件处理程序；
- 观察者模式两个对象之间有很强的依赖关系；发布/订阅模式两个对象之间的耦合读底。

### 四、观察者模式与订阅-发布模式代码实现

#### 4.1 实现观察者模式

```
class Subject {
    constructor(){

    }
    add(){

    }
    remove(){

    }

}

class Observer {
    constructor(){
        this.lists = []
    }
    // 添加观察者对象
    add(obj){

    }

    // 清空观察者对象
    empty(){
        this.lists = [];
    }

    // 计算当前的观察者数量
    count() {
        return this.list.length;
    }
}
```

#### 4.2 实现订阅-发布模式

```
// 定义发布/订阅类
class Pubsub{
    constructor(){
        this.topics = {};
        this.subUid = -1;
    }

    // 发布事件
    publish(topic,args){
        if(!this.topics[topic]) return false;

        let subscribers = this.topics[topic]
        let len = subscribers ? subscribers.length : 0;
    }

    // 订阅事件
    subscribe(topic,func){

    }

    // 取消订阅
    unsubscribe(token){
        for(let m in topics){

        }
    }
}

export defaultPubsub;
```

### 参考资料

- [观察者模式 vs 发布-订阅模式，说说区别](https://github.com/LuckyWinty/fe-weekly-questions/issues/49)
- [不好意思，观察者模式跟发布订阅模式就是不一样](https://juejin.im/post/5af05d406fb9a07a9e4d2799)
- [谈谈观察者模式和发布订阅模式](https://juejin.im/post/5bb1bb616fb9a05d2b6dccfa)
- [观察者模式与订阅发布模式的区别](https://www.cnblogs.com/onepixel/p/10806891.html)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
