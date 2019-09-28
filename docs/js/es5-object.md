# 对象

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [创建对象](#一创建对象)
- [对象相关方法](#二对象相关方法)

### 一、创建对象

#### 1.1 工厂模式

```
function createPerson(name) {
    var o = new Object();
    o.name = name;
    o.getName = function () {
        console.log(this.name);
    };

    return o;
}

var person1 = createPerson('kevin');

```

缺点：对象无法识别，因为所有的实例都指向一个原型

#### 1.2 构造函数模式

```
function Person(name){
    this.name=name;
    this.getName=function(){
        console.log(this.name);
    };
}

var person1=new Person('tony');

```

优点：实例可以识别为一个特定的类型

缺点：每次创建实例时，每个方法都要被创建一次

#### 1.2.1 构造函数模式优化

```

function Person(name) {
    this.name = name;
    this.getName = getName;
}

function getName() {
    console.log(this.name);
}

var person1 = new Person('kevin');

```

优点：解决了每个方法都要被重新创建的问题

缺点：在全局作用域中定义的函数实际上只能被某个对象调用，这让全局作用有点名不副实。

#### 1.3 原型模式

```
function Person(name) {

}

Person.prototype.name = 'keivn';
Person.prototype.getName = function () {
    console.log(this.name);
};

var person1 = new Person();
```

优点：方法不会重新创建

缺点：1. 所有的属性和方法都共享 2. 不能初始化参数

#### 1.3.1

```
function Person(name) {

}

Person.prototype = {
    name: 'kevin',
    getName: function () {
        console.log(this.name);
    }
};

var person1 = new Person();

```

优点：封装性好了一点

缺点：重写了原型，丢失了constructor属性

#### 1.3.2 原型模式优化

```
function Person(name) {

}

Person.prototype = {
    constructor: Person,
    name: 'kevin',
    getName: function () {
        console.log(this.name);
    }
};

var person1 = new Person();

```

优点：实例可以通过constructor属性找到所属构造函数

缺点：原型模式该有的缺点还是有

#### 1.4 组合构造函数模式和原型模式

```

function Person(name){
    this.name=name;
}

Person.prototype={
    constructor:Person,
    getName:function(){
        console.log(this.name);
    }
};

var person1 = new Person();
```
优点：该共享的共享，该私有的私有，使用最广泛的方式

缺点：有的人就是希望全部都写在一起，即更好的封装性

#### 1.5 动态原型模式

```
function Person(name){
    this.name=name;
    if(typeof this.getName!="function"){
        Person.prototype.getName=function(){
            console.log(this.name);
        };
    }
}

var person1=new Person();
```

注意：使用动态原型模式时，不能用对象字面量重写原型，因为在已经创建了实例的情况下重写原型，那么就会切断现有实例与新原型之间的联系。

#### 1.6 寄生构造函数模式

```
function Person(name){

    var o=new Object();
    o.name=name;
    o.getName=function(){
        console.log(this.name);
    };
    return o;
}

```

注意：返回的对象与构造函数或者与构造函数的原型属性之间没有关系；也就是说，构造函数返回的对象与在构造函数外部创建的对象没有什么不同。为此不能依赖instanceof操作为确定对象类型。

#### 1.7 稳妥构造函数模式

```
function person(name){

}

var person1=person('kevin');
person1.sayName();  // kevin
person1.name='tony';
person1.sayName();  // kevin
console.log(person1.name);  //daisy

```
所谓稳妥对象，指的是没有公共属性，而且其方法也不引用 this 的对象。

与寄生构造函数模式有两点不同：

1. 新创建的实例方法不引用 this
2. 不使用 new 操作符调用构造函数
3. 稳妥对象最适合在一些安全的环境中。

稳妥构造函数模式也跟工厂模式一样，无法识别对象所属类型。

### 二、对象相关方法

### 参考资料

- 《高程第三版》
- [JavaScript深入之创建对象的多种方式以及优缺点](https://github.com/mqyqingfeng/Blog/issues/15)
  
## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>