# 结构型设计模式

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [外观模式](#一、外观模式)
- [适配器模式](#二、适配器模式)
- [代理模式](#三、代理模式)
- [装饰者模式](#四、装饰者模式)
- [桥接模式](#五、桥接模式)
- [组合模式](#六、组合模式)
- [享元模式](#七、享元模式)

### 一、外观模式

#### 1.1 介绍

为子系统的一组接口提供一个一致的界面，定义了一个高层接口，这个接口使子系统更加容易使用

#### 1.2 代码

兼容浏览器事件绑定

```
let addMyEvent = function(el,ev,fn){
    if(el.addEventListener){
        el.addEventListener(ev,fn,false)
    }else if(el.attachEvent){
        el.attachEvent('on' + ev,fn)
    }else{
        el['on' + ev] = fn
    }
}
```

封装接口

```
let myEvent = {
    // ...
    stop: e = >{
        e.stopPropagation()
        e.preventDefault()
    }
}
```

#### 1.3 优点

- 减少系统相互依赖
- 提高灵活性
- 提高了安全性

#### 1.4 缺点

- 不符合开闭原则，如果要改东西很麻烦，继承重写都不合适

#### 1.5 场景

- 设计初期，应该要有意识将不同的两个层分离，比如经典的三层结构，在数据访问层和业务逻辑层、业务逻辑层和表示层之间建立外观 Facade
- 在开发阶段，子系统往往因为不断的重构演化而变得越来越复杂，增加外观 Facade 可以提供一个简单的接口，减少他们之间的依赖。
- 在维护一个遗留的大型系统时，可能这个系统已经很难维护了，这时候使用外观 Facade 也是非常合适的，为系统开发一个外观 Facade 类，为设计粗糙和高度复杂的遗留代码提供比较清晰的接口，让新系统和 Facade 对象交互，Facade 与遗留代码交互所有的复杂工作。

### 二、适配器模式

#### 2.1 介绍

将一个类的接口转化为了另外一接口，以满足用户需求，使类之间接口不兼容问题通过适配器得以解决

#### 2.2 代码

```
class Plug{
    getName(){
        return 'iphone充电头'
    }
}

class Target{
    constructor(){
        this.plug = new Plug();
    }
    getName(){
        return this.plug.getName() + ' 适配器Type-c充电头';
    }
}

let target = new Target();
target.getName();       // iphone充电头 适配器转Type-c充电头
```

#### 2.3 优点

- 可以让任何两个没有关联的类一起运行
- 提高了类的复用
- 适配对象，适配库，适配数据

#### 2.4 缺点

- 额外对象的创建，非直接调用，存在一定的开销（且不像代理模式在某些功能点上可以实现性能优化）
- 如果没必要使用适配器模式的放，可以考虑重构，如果使用的话，尽量把文档完善

#### 2.5 场景

- 整合第三方 SDK
- 封装旧接口

```
// 自己封装的ajax，使用方式如下
ajax({
    url: '/getData',
    type: 'post',
    dataType: 'json',
    data:{
        test:111
    }
}).done(function(){})

// 做一层适配器
var $ = {
    ajax: function(options){
        return ajax(options)
    }
}
```

- vue 的 computed

```
<template>
    <div id="example">
    </div>
</template>
<script type="text/javascript">
export default{
    name: 'demo',
    data(){
        return {
            message: 'Hello'
        }
    },
    computed:{
        reversedMessage:function(){
            return this.message.split('').reverse().join('')
        }
    }
}
</script>
```

原有 data 中的数据不满足当前的要求，通过计算属性的规则来适配成我们需要的格式，对原有数据并没有改变，只改变了原有数据的表现形式

#### 适配器与代码模式相似

- 适配器模式：提供一个不同的接口（如不同版本的插头）
- 代码模式：提供一模一样的接口

### 三、代理模式

#### 3.1 介绍

是为了一个对象提供一个借用品或占位符，以便控制对它的访问

#### 3.2 代码

```
let Flower = function() {}
let xiaoming = {
    sendFlower: function(target){
        let flower = new Flower()
        target.receiveFlower(flower)
    }
}
let B = {
    receiveFlower:function(flower){
        A.listenGoodMood(function(){
            A.receiveFlower(flower)
        })
    }
}
let A = {
    receiveFlower:function(flower){
        console.log('收到花'+flower)
    },
    listenGoodMood:function(fn){
        setTimeout(function(){
            fn()
        },1000)
    }
}
xiaoming.sendFlower(B)
```

#### 3.3 优点

- 代理模式能将代理对象与被调用对象分离，降低了系统的耦合度。代理模式在客户端和目标对象之间起到一个中介作用，这样可以走到保护目标对象的作用、
- 代理对象可以扩展目标对象的功能；通过修改代理对象就可以了，符合开闭原则；

#### 3.4 缺点

- 处理请求速度可能有差别，非直接访问存在开销

#### 3.5 场景

- HTML 元素事件代理

```
<ul id="ul">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
<script>
    let ul = document.querySelector('#ul');
    ul.addEventListener('click',event=>{
        console.log(event.target);
    })
</script>
```

- ES6 的 proxy
- jQuery.proxy()方法

### 四、装饰者模式

#### 4.1 介绍

- 动态地给某个对象添加一些额外的职责，是一种实现的替代方案
- 在不改变原对象的基础上，通过对其进行包装扩展，使原有对象可以满足用户的更复杂需求，而不会影响从这个类中派生的其他对象

#### 4.2 代码

```
class Cellphone{
    create(){
        console.log('生成一个手机')
    }
}
class Decorator{
    constructor(cellphone){
        this.cellphone = cellphone
    }
    create(){
        this.cellphone.create()
        this.createShell(cellphone)
    }
    createShell(){
        console.log('生成手机壳')
    }
}
// 测试代码
let cellphone = new Cellphone()
cellphone.create()

console.log('----------')
let dec = new Decorator(cellphone)
dec.create()
```

#### 4.3 优点

- 装饰类和被装饰类都只关心自身的核心业务，实现了解耦
- 方便动态的扩展功能，且提供了比继承更多的灵活性

#### 4.4 缺点

- 多层装饰比较复杂
- 常常会引入许多小对象，看起来比较相似，实际功能大相径庭，从而使得我们的应用程序架构变得复杂起来

#### 4.5 场景

- 比如现在有 4 种型号的自行车，我们为每种自行车定义了一个单独的类。现在要给每种自行车都装上前灯、尾灯和铃铛这 3 种配件。如果使用继承的方式来给每种自行车创建子类，则需要 `4*3=12`个子类。但是如果把前灯、尾灯、铃铛这些对象动态组合到自行车上面，则只需要额外增加 3 个类
- ES7 Decorator
- core-decorators

### 五、桥接模式

#### 5.1 介绍

桥接模式将抽象部分与它的实现部分分离，使它们都可以独立地变化。

#### 5.2 代码

```
class Color{
    constructor(name){
        this.name = name
    }
}
class Shape{
    constructor(name,color){
        this.name = name
        this.color = color
    }
    draw(){
        console.log(`${this.color.name} ${this.name}`)
    }
}
```

#### 5.3 优点

- 有助于独立地管理各组成部分，把抽象化与实现化解耦
- 提高可扩充性

#### 5.4 缺点

- 大量的类将导致开发成本增加，同时在性能方面可能也会有所减少。

#### 5.5 场景

### 六、组合模式

#### 6.1 介绍

- 将对象组合成树形结构，以表示“整体-部分”的层次结构。
- 通过对象的多态表现，使得用户对单个对象和组合对象的使用具有一致性。

#### 6.2 代码

```
class TrainOrder(){
    create(){
        console.log('创建火车票订单')
    }
}
class HoteOrder(){
    create(){
        console.log('创建酒店订单')
    }
}
class TotalOrder(){
    constructor(){
        this.orderList = []
    }
    addOrder(order){
        this.orderList.push(order)
        return this
    }
    create(){
        this.orderList.forEach(item=>{
            item.create(0)
        })
        return this
    }
}

// 可以在购票网站买车同时也订房间
let train = new TrainOrder()
let hotel = new HotelOrder()
let total = new TotalOrder()
total.addOrder(train).addOrder(hotal).create()
```

#### 6.3 优点

#### 6.4 缺点

- 如果通过组合模式创建了太多的对象，那么这些对象可能会让系统负担不起。

#### 6.5 场景

- 表示对象-整体层次结构
- 希望用户忽略组合对象和单个对象的不同，用户将统一地使用组合结构中的所有对象（方法）

### 七、享元模式

#### 7.1 介绍

运用共享技术有效地支持大量粒度对象的复用。系统只使用少量的对象，而这些对象都很相似，状态变化很小，可以实现对象的多次复用。由于享元模式要求能够共享的对象必须是细粒度对象，因此它又称轻量级模式，它是一种对象结构型模式

#### 7.2 代码

```
let examCarNum = 0
/* 驾考车对象 */
class ExamCar{
    constructor(carType){
        examCarNum++
        this.carId = examCarNum
        this.carType = carType ? '手动档' : '自动档'
        this.usingState = false // 是否存在使用
    }

    /* 在本车上考试 */
    examine(candidateId){
        return new Promise((resolve)=>{
            this.usingState = true
            console.log(``)
            setTimeout(()=>{
                this.usingState = false
                console.log(`%c考生- ${candidateId}`)
                resolve()
            },Math.random() * 2000)
        })
    }
}

/* 手动档汽车对象池  */
ManualExamCarPool = {
    _pool: [],          // 驾考车对象
    _candidateQueue: [],    // 考生队列

    /* 注册考生ID列表 */
    registCandidates(candidateList){

    },

    /* 注册手动档考生 */
    registCandidate(candidateId){

    }
}
```

#### 7.3 优点

- 大大减少对象的创建，降低系统的内存，使效率提高。

#### 7.4 缺点

- 提高了系统的复杂度，需要分离出外部状态和内部状态，而且外部状态具有固有化的性质，不应该随着内部状态的变化而变化，否则会千万系统的混乱。

#### 7.5 场景

- 文件上传需要创建多个文件实例的时候
- 如果一个应用程序使用了大量的对象，而这些大量的对象千万了很大存储开销时应该考虑使用享元模式

## 参考资料

- 《JavaScript 设计模式》
- [一文读懂 JS 装饰器，这是一个会打扮的装饰器](https://mp.weixin.qq.com/s/ns8jwFlLtSh4PNObWjSMrA)

### 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
