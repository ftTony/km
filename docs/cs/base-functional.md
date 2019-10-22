# 函数式编程

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 函数式编程定义
- 函数式编程特性
- 函数式编程原理
- 函数式编程库

### 一、函数式编程定义

### 二、函数式编程特性

- 纯函数
- 柯里化
- 函数组合
- 惰性函数
- 高阶函数
- 闭包

#### 1.1 纯函数

#### 1.2 柯里化

#### 1.3 函数组合

#### 1.4 惰性函数

#### 1.5 高阶函数

#### 1.6 闭包

### 三、函数式编程原理

函数式编程的起源，是一门叫做范畴论（Category Theory）的数学分支。

彼此之间存在某种关系的概念、事物、对象等等，都构成“范畴”。随便什么东西，只要能找出它们之间的关系就能定义一个“范畴”。

我们可以把“范畴”想象成是一个容器，里面包含两样东西。

- 值（value）
- 值的变形关系，也就是函数。

```
class Category{
    constructor(val){
        this.val = val;
    }

    addOne(x){
        return x+1;
    }
}
```

上面代码中，Category是一个类，也是一个容器，里面包含一个值(this.val)和一种变形关系(addOne)。你可能已经看出来了，这里的范畴，就是所有彼此之间相差1的数字。

#### 范畴论与函数式编程的关系

#### 函子

#### Of 方法

```
```

#### Maybe 函子

```
```

#### Either 函子

```
```

#### AP 函子

```
```

#### Monad 函子

```
```

#### IO 函子

```
```

### 四、函数式编程库

- RxJS
- CycleJS
- LoadshJS
- UnderscoreJS
- RamdaJS

## 参考资料

- [函数式编程](https://yhlben.github.io/blog/base-functional.html)
- [JavaScript 轻量级函数式编程](https://wizardforcel.gitbooks.io/functional-light-js/content/)
- [函数式编程](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/)
- [函数式编程入门教程](http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>