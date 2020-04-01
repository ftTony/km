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

- 增加了系统复杂度，主要是增加了的抽象类和类间联系

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
class State{
    constructor(state){
        this.state = state
    }
    handle(context){
        console.log(`this is ${this.state} light`)
        context.setState(this)
    }
}
class Context{
    constructor(){
        this.state = null
    }
    getState(){
        return this.state
    }
    setState(state){
        this.state = state
    }
}
// test
let context = new Context()
let weak = new State('weak')
let strong = new State('strong')
let off = new State('off')

// 弱光
weak.handle(context)
console.log(context.getState())

// 强光
strong.handle(context)
console.log(context.getState())

// 关闭
off.handle(context)
console.log(context.getState())
```

#### 3.3 优点

- 定义了状态与行为之间关系，封装在一个类里，更直观清晰，增改方便
- 状态与状态间，行为与行为间彼此独立互不干扰
- 用对象代替字符串来记录当前状态，使得状态的切换更加一目了然

#### 3.4 缺点

- 会在系统中定义许多状态类
- 逻辑分散

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
        // 策略对象
        const strategies = {
            isNoEmpty: function(value,errorMsg){
                if(value === ''){
                    return errorMsg;
                }
            },
            isNoSpace: function(value,errorMsg){
                if(value.trim() === ''){
                    return errorMsg;
                }
            },
            minLength: function(value,length,errorMsg){
                if(value.trim().length < length){
                    return errorMsg;
                }
            },
            maxLength: function(value,length,errorMsg){
                if(value.length>length){
                    return errorMsg;
                }
            },
            isMobile:function(value,errorMsg){
                if (!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[7]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(value)) {
                    return errorMsg;
                }
            }
        }

        // 验证类
        class Validator{
            constructor(){
                this.cache = []
            }
            add(dom,rules){
                for(let i = 0,rule;rule = rules[i++];){
                    let strategyAry = rule.errorMsg
                    this.cache.push(()=>{
                        let strategy = strategyAry.shift()
                        strategyAry.unshift(dom.value)
                        strategyAry.push(errorMsg)
                        return strategies[strategy].apply(dom,strategyAry)
                    })
                }
            }
            start(){
                for(let i=0,validatorFunc;validatorFunc = this.cache[i++];){
                    let errorMsg = validatorFunc()
                    if(errorMsg){
                        return errorMsg
                    }
                }
            }
        }

        // 调用代码
        let registerFomr = document.getElementById('registerForm')

        let validataFunc = function(){
            let validator = new Validator()
            validator.add(registerForm.userName,[{
                strategy: 'isNoEmpty',
                errorMsg: '用户名不可为空'
            },{
                strategy: 'isNoSpace',
                errorMsg: '不允许以空白字符命名'
            },{
                strategy: 'minLength:2',
                errorMsg:'用户名长度不能小于2位'
            }])
            validator.add(registerForm.password,[{
                strategy: 'minLength:6',
                errorMsg: '密码长度不能小于6位'
            }])
            validator.add(registerForm.phoneNumber,[{
                strategy: 'isMobile',
                errorMsg: '请输入正确的手机号码格式'
            }])
            return validator.start(0)
        }

        registerForm.onsubmit = function(){
            let errorMsg = validataFunc()
            if(errorMsg){
                console.log(errorMsg)
                return false
            }
        }
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

将一个请求封装成一个对象，从而让你使用不同的请求把客户端参数化，对请求排队或者记录请求日志，可以提供命令的撤销和恢复功能。

#### 6.2 代码

```
// 接收者类
class Receiver{
    execute(){
        console.log('接收者执行请求')
    }
}

//  命令者
class Command{
    constructor(receiver){
        this.receiver = receiver
    }
    execute(){
        console.log('命令')
        this.receiver.execute()
    }
}

// 触发者
class Invoke{
    constructor(command){
        this.command = command
    }
    invoke(){
        console.log('开始')
        this.command.execute()
    }
}

// 仓库
const warehouse = new Receiver()
// 订单
const order - new Command(warehouse)
// 客户
const client = new Invoker(order);
client.invoke()
```

#### 6.3 优点

- 对命令进行封装，使命令易于扩展和修改
- 命令发出者和接受解耦，使发出者不需要知道命令的具体执行过程即可执行

#### 6.4 缺点

- 使用命令模式可能会导致某此系统有过多的具体命令类。

### 七、访问者模式

#### 7.1 介绍

表示一个作用于某对象结构中各元素操作。它使你可以在不改变各元素的类的前提下定义作用

#### 7.2 代码

```
// 访问者
class Visitor{
    constructor(){}
    visitConcreteElement(ConcreteElement){
        ConcreteElement.operation()
    }
}

// 元素类
class ConcreteElement{
    construnctor(){
    }
    operation(){
        console.log('ConcreteElement.operation invoked');
    }
    accept(visitor){
        visitor.visitConcreteElement(this)
    }
}
// client
let visitor = new Visitor()
let element = new ConcreteElement()
element.appcept(visitor)
```

#### 7.3 优点

- 符合单一职责原则
- 优秀的扩展性
- 灵活性

#### 7.4 缺点

- 具体元素对访问者公布细节，违反了迪米特原则
- 违反了依赖倒置原则，依赖了具体类，没有依赖抽象。
- 具体元素变更比较困难

#### 7.5 场景

- 对象结构中对象对应的类很少改变，但经常需要在此对象结构上定义新的操作
- 需要对一个对象结构中的对象进行很多不同的并且不相关的操作，而需要避免让这些操作“污染”这些对象的类，也不希望在增加新操作时修改这些类。

### 八、中介者模式

#### 8.1 介绍

解除对象与对象之间的紧耦合关系。增加一个中介者对象后，所有的相关对象都通过中介者对象来通信，而不是互相引用，所以当一个对象发生改变时，只需要通知中介者对象即可。中介者使各对象之间耦合松散，而且可以独立地改变它们之间的交互。中介者模式使网状的多对多关系变成了相对简单的一对多关系（类似于观察者模式，但是单向的，由中介者统一管理。）

#### 8.2 代码

```
class A{
    constructor(){
        this.number = 0
    }
    setNumber(num,m){
        this.number = num
        if(m){
            m.setB()
        }
    }
}
class B{
    constructor(){
        this.number = 0
    }
    setNumber(num,m){

    }
}
class Mediator{
    constructor(a,b){
        this.a = a
        this.b = b
    }
    setA(){
        let number = this.b.number
        this.a.setNumber(number*10)
    }
    setB(){
        let number = this.a.number
        this.b.setNumber(number/10)
    }
}

let a = new A()
let b = new B()
let m = new Mediator(a,b)
a.setNumber(10,m)
console.log(a.number,b.number)
b.setNumber(10,m)
console.log(a.number,b.number)
```

#### 8.3 优化

- 使各对象之间耦合松散，而且可以独立地改变它们之间的交互
- 中介者和对象一对多的关系取代了对象之间的网状多对多的关系
- 如果对象之间的复杂耦合度度导致维护很困难，而且耦合度随项目变化增速很快，就需要中介者重构代码

#### 8.4 缺点

- 系统中会新增一个中介者对象，因为对象之间交互的复杂性，转移成了中介者对象的复杂性，使得中介者对象经常是巨大的。中介者对象自身往往就是一个难以维护的对象。

#### 8.5 场景

- 系统中对象之间在比较复杂的引用关系，导致它们之间的依赖关系结构混乱而且难以复用该对象
- 想通过一个中间类来封装多个类中的行为，而又不想生成太多的子类。

### 九、备忘录模式

#### 9.1 介绍

在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。这样以后就可将该对象恢复到保存的状态。

#### 9.2 代码

```
// 备忘类
class Memento{
    constructor(content){
        this.content = content
    }
    getContent(){
        return this.content
    }
}
// 备忘列表
class CareTaker{
    constructor(){
        this.list = []
    }
    add(memento){
        this.list.push(memento)
    }
    get(index){
        return this.list[index]
    }
}
// 编辑器
class Editor{
    constructor(){
        this.content = null
    }
    setContent(content){
        this.content = content
    }
    getContent(){
        return this.content
    }
    saveContentToMemento(){
        return new Memento(this.content)
    }
    getContentFromMemento(memento){
        this.content = memento.getContent()
    }
}

// 测试代码

let editor = new Editor()
let careTaker = new CareTaker()

editor.setContent('111')
editor.setContent('222')
careTaker.add(editor.saveContentToMemento())
editor.setContent('333')
careTaker.add(editor.saveContentToMemento())
editor.setContent('444')

console.log(editor.getContent()) //444
editor.getContentFromMemento(careTaker.get(1))
console.log(editor.getContent()) //333

editor.getContentFromMemento(careTaker.get(0))
console.log(editor.getContent()) //222
```

#### 9.3 优点

- 给用户提供了一种可以恢复状态的机制，可以使用户能够比较方便地回到某个历史的状态

#### 9.4 缺点

- 消耗资源。如果类的成员变量过多，势必会占用比较大的资源，而且每一次保存都会消耗一定的内存。

#### 9.5 场景

- 分页控件
- 撤销组件

### 十、解释器模式

#### 10.1 介绍

给定一个语言，定义它的方法的一种表示，并定义一个解释器，该解释器使用该表示来解释语言中的句子。

#### 10.2 代码

```
class Context{
    constructor(){
        this._list = [];        // 存放 终结符表达式
        this._sum = 0;      // 存放 非终结符表达式
    }

    get sum(){
        return this._sum;
    }

    set sum(newValue){
        this._sum = newValue;
    }

    add(expression){
        this._list.push(expression)
    }
    get List(){
        return [...this._list]
    }
}

class PlusExpression{
    interpret(context){
        if(!(context instanceof Context)){
            throw new Error('TypeError')
        }
        context.sum = ++context.sum
    }
}

class MinusExpression{
    interpret(context){
        if(!(context instanceof Context)){
            throw new Error('TypeError')
        }
        context.sum = --context.sum;
    }
}

const context = new Context();
context.add(new PlusExpression());
context.add(new PlusExpression());
context.add(new MinusExpression());
```

#### 10.3 优点

- 易于改变和扩展方法
- 由于在解释器模式中使用类来表示语言的文法规则，因此可以通过继承等机制来改变或扩展方法

#### 10.4 缺点

- 执行效率较低，在解释器模式中使用了大量的循环和递归调用，因此在解释较为复杂的句子时其速度慢
- 对于复杂的文法比较难维护

#### 10.5 场景

### 参考资料

- [JavaScript 设计模式 es6（23 种)](https://juejin.im/post/5e021eb96fb9a01628014095)
- 《JavaScript 设计模式》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
