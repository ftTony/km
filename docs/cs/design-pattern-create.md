# 创建型设计模式

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [简单工厂模式](#一、简单工厂模式)
- [工厂方法模式](#二、工厂方法模式)
- [抽象工厂模式](#三、抽象工厂模式)
- [建造者模式](#四、建造者模式)
- [单例模式](#五、单例模式)

### 一、简单工厂模式

```
// 篮球基类
class BasketBall{
    constructor(){
        this.intro = '篮球盛行于美国'
    }
}
```

### 二、工厂方法模式

#### 2.1 介绍

工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。该模式使用一个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型。

#### 2.2 代码

```
class Produce{
    constructor(name){
        this.name = name
    }
    init(){
        console.log('init')
    }
    fun(){
        console.log('fun')
    }
}

class Factory{
    create(name){
        return new Product(name)
    }
}

// use
let factory = new Factory()
let p = factory.create('p1')
p.init()
p.fun()
```

#### 2.3 优点

#### 2.4 缺点

#### 2.3 适用场景

### 三、抽象工厂模式

```

```

### 四、建造者模式

```

```

### 五、单例模式

#### 5.1 介绍

一个类只有一个实例，并提供一个访问它的全局访问点。

#### 5.2 代码

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

#### 5.3 优点

- 划分命名空间，减少全局变量
- 增强模块性，把自己的代码组织在一个全局变量名下，放在单一位置，便于维护
- 且只会实例化一次。简化了代码的调试和维护

#### 5.4 缺点

- 由于单例模式提供的是一种单点访问，所以它有可能导致模块童年强耦合从而不得单元测试。无法单独测试一个调用了来自单例的方法的类，而只能把它与那个单例作为一个单元一起测试。

#### 5.5 场景例子

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
