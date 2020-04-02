# 创建型设计模式

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [简单工厂模式](#一、简单工厂模式)
- [工厂方法模式](#二、工厂方法模式)
- [抽象工厂模式](#三、抽象工厂模式)
- [建造者模式](#四、建造者模式)
- [原型模式](#五、原型模式)
- [单例模式](#六、单例模式)

### 一、简单工厂模式

#### 1.1 介绍

类都封装到一个函数里面，这样在模块调用的时候只需要记住这个函数，通过这个函数创建用户需要的对象就可以了，这个函数就是被称为工厂函数，这种设计模式就被称为简单工厂设计模式。

#### 1.2 代码

```
//篮球基类
class BasketBall {
    constructor() {
        this.intro = '篮球盛行于美国'
    }

    getMember() {
        console.log('每一个队伍需要五个球员');
    }

    getBallSize() {
        console.log('篮球很大')
    }
}

// 足球基类
class FootBall {
    constructor() {
        this.intro = '足球在全世界范围都很流行'
    }

    getMember() {
        console.log('每一个队伍需要11个球员');
    }

    getBallSize() {
        console.log('足球很大')
    }
}

let SportsFactory = function(name) {
    switch (name) {
        case 'NBA':
            return new BasketBall();
        case 'wordCup':
            return new FootBall();
    }
};

// 为直接被创建一个足球，只需要记住工厂，并且调用就可以了
let footNall  = SportsFactory('wordCup');
console.log(footNall);
console.log(footNall.intro);
footNall.getMember();
```

#### 1.3 优点

#### 1.4 缺点

#### 1.5 场景

### 二、工厂方法模式

#### 2.1 介绍

工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。该模式使用一个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型。

#### 2.2 代码

```
let Factory = function (type, content) {
    if (this instanceof Factory) {
        return new this[type](content);
    } else {
        return new Factory(type, content)
    }
};

Factory.prototype = {
    Java(content) {
        this.content = content;
        (function (content) {
            console.log(content)
        })(content);
    },
    Php(content) {
        this.content = content;
        (function (content) {
            console.log(content)
        })(content);
    },
    JavaScript(content) {
        this.content = content;
        (function (content) {
            console.log(content)
        })(content);
    }
};
```

#### 2.3 优点

#### 2.4 缺点

#### 2.3 适用场景

- 动态实现：
- 节省设置开销：

### 三、抽象工厂模式

#### 3.1 介绍

提供一个创建一系列相关或相互依赖对象的接口，而无需制定它们具体的类。

#### 3.2 代码

```
// 抽象工厂
let VehicleFactory = function(subType,superType){

};

// 小汽车抽象类
VehicleFactory.Car = function(){
    this.type = 'car'
};
VehicleFactory.Car.prototype = {
    getPrice(){
        return new Error('抽象方法不能被调用')
    },
    getSpeed(){
        return new Error('抽象方法不能被调用')
    }
}


/*具体实现*/
// 宝马汽车子类
let BMW = function(price,speed){
    this.price = price;
    this.speed = speed;
};
VehicleFactory(BMW,'Car')
BMW.prototype.getPrice = function(){
    return this.price
}
BMW.prototype.getSpeed = function(){

}
```

#### 3.3 优点

- 分离接口和实现
- 舍不得切换产品簇变得容易

#### 3.4 缺点

- 不太容易扩展新产品
- 容易造成雷层次复杂

#### 3.5 缺点

### 四、建造者模式

#### 4.1 介绍

建造者模式：将一个复杂的逻辑或者功能通过有条理的分工来一步步实现

#### 4.2 代码

```

```

#### 4.3 优点

- 分布创建一个复杂的对象或者实现一个复杂的功能
- 解耦封装过程，无需关注具体创建的细节

#### 4.4 缺点

- 需要有可靠算法和逻辑的支持
- 按需暴露一定的接口

#### 4.5 场景

- jquery 的 ajax 的封装
- jquery 插件封装
- react/vue 某一具体组件的设计

#### 五、原型模式

#### 5.1 介绍

原型模式（prototype）是 rxet 原型实例指向创建对象的种类，并且通过拷贝这些原型创建新的对象。

#### 5.2 代码

```
class Person{
    constructor(name){
        this.name = name
    }
    getName(){
        return this.name
    }
}
class Student extends Person{
    constructor(name){
        super(name)
    }
    sayHello(){
        console.log(`Hello,My name is ${this.name}`)
    }
}

let student = new Student('xiaoming')
student.sayHello()
```

### 六、单例模式

#### 6.1 介绍

一个类只有一个实例，并提供一个访问它的全局访问点。

#### 6.2 代码

```
class LoginForm{
    constructor(){
        this.state = 'hide'
    }
    show(){
        if(this.state === 'show'){
            console.log('已经显示')
            return
        }
        this.state = 'show'
        console.log('登录框显示成功')
    }
    hide(){
        if(this.state === 'hide'){
            console.log('已经隐藏')
            return
        }
        this.state = 'hide'
        console.log('合建框隐藏成功')
    }
}
LoginForm.getInstance = (function(){
    let instance
    return function(){
        if(!instance){
            instance = new LoginForm()
        }
        return instance
    }
})()

let obj1 = LoginForm.getInstance()
obj1.show()

let obj2 = LoginForm.getInstance()
obj2.hide()

console.log(obj1 === obj2)
```

#### 6.3 优点

- 划分命名空间，减少全局变量
- 增强模块性，把自己的代码组织在一个全局变量名下，放在单一位置，便于维护
- 且只会实例化一次。简化了代码的调试和维护

#### 6.4 缺点

- 由于单例模式提供的是一种单点访问，所以它有可能导致模块童年强耦合从而不得单元测试。无法单独测试一个调用了来自单例的方法的类，而只能把它与那个单例作为一个单元一起测试。

#### 6.5 场景例子

- 定义命名空间和实现分支型方法
- 登录框
- vuex 和 redux 中的 store

### 参考资料

- 《JavaScript 设计模式》
- 《JavaScript 设计模式与开发实践》
- [第二篇、创建型设计模式](https://github.com/yanlele/node-index/blob/master/book/04%E3%80%81js%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/02%E7%AF%87%E3%80%81%E5%88%9B%E5%BB%BA%E5%9E%8B%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/README.md#class02-08)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
