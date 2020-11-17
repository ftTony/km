# new 理解

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [new 几个特点](l#一、new几个特点)
- [代码实现](#二、代码实现)

> new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。 ——（来自于 MDN）

### 一、new 几个特点

- 创建（或者说构造）一个全新的对象
- 这个新对象会被执行`[[原型]]`连接。
- 这个新对象会绑定到函数调用的 `this`。
- 如果函数没有返回其他对象，那么 `this` 指向这个新对象，否则 `this` 指向构造函数中返回的对象。

### 二、代码实现

```
    function objectFactory(){
        var obj = new Object(),
        Constructor = [].shift.call(arguments);
        obj.__proto__ = Constructor.prototype;
        var ret = Constructor.apply(obj,arguments);
        return typeof ret==='object' ? ret : obj;
    }

```

### 三、注意事项

#### 3.1 返回一个对象

```
function Car(color, name) {
    this.color = color;
    return {
        name: name
    }
}

var car = new Car("black", "BMW");
car.color;
// undefined

car.name;
// "BMW"
```

实例`car`中只能访问到**返回对象中的属性**。

#### 3.2 没有`return`，即返回`undefined`

```
function Car(color, name) {
    this.color = color;
}

var car = new Car("black", "BMW");
car.color;
// black

car.name;
// undefined
```

实例 car 中只能访问到**构造函数中的属性**，和情况1完全相反。

#### 3.3 返回一个对象

```
function Car(color, name) {
    this.color = color;
    return "new car";
}

var car = new Car("black", "BMW");
car.color;
// black

car.name;
// undefined
```

实例 car 中只能访问到**构造函数中的属性**，和情况1完全相反，结果相当于没有返回值。

### 参考资料

- [JavaScript 深入之 new 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/13)
- [深度解析 new 原理及模拟实现](https://github.com/yygmind/blog/issues/24)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
