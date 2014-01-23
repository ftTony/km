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
/* 饭店方法 */
class Restaurant {
    static getMenu(menu) {
        switch (menu) {
            case '鱼香肉丝':
                return new YuXiangRouSi()
            case '宫保鸡丁':
                return new GongBaoJiDin()
            default:
                throw new Error('这个菜本店没有 -。-')
        }
    }
}
/* 鱼香肉丝类 */
class YuXiangRouSi {
    constructor() { this.type = '鱼香肉丝' }

    eat() { console.log(this.type + ' 真香~') }
}
/* 宫保鸡丁类 */
class GongBaoJiDin {
    constructor() { this.type = '宫保鸡丁' }

    eat() { console.log(this.type + ' 让我想起了外婆做的菜~') }
}
const dish1 = Restaurant.getMenu('鱼香肉丝')
dish1.eat()                                  // 输出: 鱼香肉丝 真香~
const dish2 = Restaurant.getMenu('红烧排骨')  // 输出: Error 这个菜本店没有 -
```

### 二、工厂方法模式

#### 2.1 介绍

工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。该模式使用一个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型。

#### 2.2 代码

```
/* 工厂类 */
class Factory {
    static getInstance(type) {
        switch (type) {
            case 'Product1':
                return new Product1()
            case 'Product2':
                return new Product2()
            default:
                throw new Error('当前没有这个产品')
        }
    }
}
/* 产品类1 */
class Product1 {
    constructor() { this.type = 'Product1' }

    operate() { console.log(this.type) }
}
/* 产品类2 */
class Product2 {
    constructor() { this.type = 'Product2' }

    operate() { console.log(this.type) }
}
const prod1 = Factory.getInstance('Product1')
prod1.operate()                                 // 输出: Product1
const prod2 = Factory.getInstance('Product3')   // 输出: Error 当前没有这个产品
```

#### 2.3 优点

- 良好的封装，代码结构清晰，访问者无需知道对象的创建流程，特别是创建比较复杂的情况下；
- 扩展性优良，通过工厂方法隔离了用户和创建流程隔离，符合开放封闭原则；
- 解耦了高层逻辑和底层产品类，符合最少知识原则，不需要的就不要去交流；

#### 2.4 缺点

- 带来了额外的系统复杂度，增加了抽象性；

#### 2.3 适用场景

- 对象的创建比较复杂，而访问者无需知道创建的具体流程；
- 处理大量具有相同属性的小对象；
- 源码 Vue-router

### 三、抽象工厂模式

#### 3.1 介绍

提供一个创建一系列相关或相互依赖对象的接口，而无需制定它们具体的类。

#### 3.2 代码

```
/* 工厂 抽象类 */
class AbstractFactory {
    constructor() {
        if (new.target === AbstractFactory)
            throw new Error('抽象类不能直接实例化!')
    }

    /* 抽象方法 */
    createProduct1() { throw new Error('抽象方法不能调用!') }
}
/* 具体饭店类 */
class Factory extends AbstractFactory {
    constructor() { super() }

    createProduct1(type) {
        switch (type) {
            case 'Product1':
                return new Product1()
            case 'Product2':
                return new Product2()
            default:
                throw new Error('当前没有这个产品 -。-')
        }
    }
}
/* 抽象产品类 */
class AbstractProduct {
    constructor() {
        if (new.target === AbstractProduct)
            throw new Error('抽象类不能直接实例化!')
        this.kind = '抽象产品类1'
    }

    /* 抽象方法 */
    operate() { throw new Error('抽象方法不能调用!') }
}
/* 具体产品类1 */
class Product1 extends AbstractProduct {
    constructor() {
        super()
        this.type = 'Product1'
    }

    operate() { console.log(this.kind + ' - ' + this.type) }
}
/* 具体产品类2 */
class Product2 extends AbstractProduct {
    constructor() {
        super()
        this.type = 'Product2'
    }

    operate() { console.log(this.kind + ' - ' + this.type) }
}
const factory = new Factory()
const prod1 = factory.createProduct1('Product1')
prod1.operate()                                   // 输出: 抽象产品类1 - Product1
const prod2 = factory.createProduct1('Product3')  // 输出: Error 当前没有这个产品 -。-
```

#### 3.3 优点

- 抽象产品类将产品的结构抽象出来，访问者不需要知道产品的具体实现，只需要面向产品的结构编程即可，从产品的具体实现中解耦；

#### 3.4 缺点

- 扩展新类簇的产品类比较困难，因为需要创建新的抽象产品类，并且还要修改工厂类，违反开闭原则；
- 带来了系统复杂度，增加了新的类，和新的继承关系；

#### 3.5 场景

- 如果一组实例都有相同的结构，那么就可以使用抽象工厂模式。

#### 参考资料

- [抽象工厂模式](https://www.yuque.com/wubinhp/uxiv5i/wgk0bg)

### 四、建造者模式

#### 4.1 介绍

建造者模式：将一个复杂的逻辑或者功能通过有条理的分工来一步步实现

#### 4.2 代码

```
// 建造者，部件生产
class ProductBuilder {
    constructor(param) {
        this.param = param
    }

    /* 生产部件，part1 */
    buildPart1() {
        // ... Part1 生产过程
        this.part1 = 'part1'

    }

    /* 生产部件，part2 */
    buildPart2() {
        // ... Part2 生产过程
        this.part2 = 'part2'
    }
}
/* 指挥者，负责最终产品的装配 */
class Director {
    constructor(param) {
        const _product = new ProductBuilder(param)
        _product.buildPart1()
        _product.buildPart2()
        return _product
    }
}
// 获得产品实例
const product = new Director('param')
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
