# 行为型设计模式

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [模板方法模式](#一、模板方法模式)
- [观察者模式](#二、观察者模式)
- [状态模式](#三、状态模式)
- [策略模式](#四、策略模式)
- [职责链模式](#五、职责链模式)
- [命令模式](#六、命令模式)
- [访问者模式](#七、访问者模式)
- [中介者模式](#八、中介者模式)
- [备忘录模式](#九、备忘录模式)
- [解释器模式](#十、解释器模式)

### 一、模板方法模式

#### 1.1 介绍

模板方法模式由两部分结构组成，第一部分是抽象父类，第二部分是具体的实现子类。通常在抽象父类中封装了子类的算法框架，包括实现一些公共方法和封装子类中所有方法的执行顺序。子类通过继承这个抽象类，也继承了整个算法结构，并且可以选择重写父类的方法。

#### 1.2 代码

```
class Beverage{
    constructor({brewDrink,addCondiment}){
        this.brewDrink = brewDrink
        this.addCondiment = addCondiment
    }
    /* 烧开水，共用方法 */
    boilWater(){
        console.log('水已经煮沸===共用')
    }
    /* 倒杯子里，共用方法 */
    pourCup(){
        console.log('倒进杯子里===共用')
    }
    /* 模板方法 */
    init(){
        this.boilWater()
        this.brewDrink()
        this.pourCup()
        this.addCondiment()
    }
}
/* 咖啡 */
const coffee = new Beverage({
    /* 冲泡咖啡，覆盖抽象方法 */
    brewDrink:function(){
        console.log('冲泡咖啡')
    },
    /* 加调味品，覆盖抽象方法 */
    addCondiment:function(){
        console.log('加点奶和糖')
    }
})
coffee.init()
```

#### 1.3 优点

- 提取了公共代码部分，易于维护

#### 1.4 缺点

- 拉回了系统复杂度，主要是增加了的抽象类和类间联系

#### 1.5 场景

- 一次性实现一个算法的就变的部分，并将可变的行为留给子类来实现
- 子类中公共的行为应被提取出来并集中到一个公共类中避免代码重复

### 二、观察者模式

参考[观察者模式和发布订阅模式的区别](./design-pattern-subscription.html)

### 三、状态模式

#### 3.1 介绍

允许一个对象在其内部状态改变的时候改变它的行为，对象看起来似乎修改了它的类

#### 3.2 代码

```

```

#### 3.3 优点

#### 3.4 缺点

#### 3.5 场景

- 一个对象的行为取决于它的状态，并且它必须在运行时刻根据状态改变它的行为
- 一个操作中含有大量的分支语句，而且这些分支语句依赖于该对象的状态

### 四、策略模式

#### 4.1 介绍

定义一系列的算法，把它们一个个封装起来，并且使它们可以互相替换

#### 4.2 代码

```
<html>
<head>
    <title>策略模式-校验表单</title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
</head>
<body>
    <form id = "registerForm" method="post" action="http://xxxx.com/api/register">
        用户名：<input type="text" name="userName">
        密码：<input type="text" name="password">
        手机号码：<input type="text" name="phoneNumber">
        <button type="submit">提交</button>
    </form>
    <script type="text/javascript">

    </script>
</body>
</html>
```

#### 4.3 优点

- 利用组合、委托、多态等技术和思想，可以有效的避免多重条件选择语句
- 提供了对开放-封闭原则的完美支持，将算法封装在独立的 strategy 中，使得它们易于切换，理解，易于扩展
- 利用组合和委托来让 Context 拥有执行算法的能力，这也是继承的一种更轻便的代替方案

#### 4.4 缺点

- 会在程序中增加许多策略类或者策略对象
- 要使用策略模式，必须了解所有的 strategy，必须了解各个 strategy 之间的不同点，这样才选择一个合适的 strategy

#### 4.5 场景

- 如果在一个系统里面有许多类，它们之间的区别仅在于它们的行为，那么使用策略模式可以动态地让一个对象在许多行为中选择一种行为。
- 一个系统需要动态地在几种算法中选择一种。
- 表单验证

### 五、职责链模式

#### 5.1 介绍

使多个对象都有机会处理请求，从而避免请求的发送者和接受者之间的耦合关系，将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止

#### 5.2 代码

```
//  请假审批，需要组长审批、经理审批、总监审批
class Action{
    constructor(name){
        this.name = name
        this.nextAction = null
    }
    setNextAction(action){
        this.nextAction = action
    }
    handle(){
        console.log(`${this.name} 审批`)
        if(this.nextAction != null){
            this.nextAction.handle()
        }
    }
}

let a1 = new Action('组长')
let a2 = new Action('经理')
let a3 = new Action('总监')
a1.setNextAction(a2)
a2.setNextAction(a3)
a1.handle()
```

#### 5.3 优点

- 降低耦合度。它将请求的发送者和接收者解耦。
- 简化了对象。使得对象不需要知道链的结构
- 增强给对象指派职责的灵活性。通过改变链内的成员或者调动它们的次序，允许动态地新增或者删除责任
- 增加新的请求处理类很方便。

#### 5.4 缺点

- 不能保证某个请求一定会被链中的节点处理，
- 使程序中多了很多节点对象，可能再一次请求的过程中，大部分的节点并没有起到实质性的作用。他们的作用仅仅是让请求传递下去，从性能方面考虑，要避免过长的职责链到来的性能损耗。

#### 5.5 场景

- JS 中的事件冒泡
- 作用域链
- 原型链

### 六、命令模式

#### 6.1 介绍

#### 6.2 代码

```

```

#### 6.3 优点

#### 6.4 缺点

### 七、访问者模式

```

```

### 八、中介者模式

```

```

### 九、备忘录模式

#### 9.1 介绍

#### 9.2 代码

```

```

#### 9.3 优点

#### 9.4 缺点

### 十、解释器模式

```

```

### 参考资料

- 《JavaScript 设计模式》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
