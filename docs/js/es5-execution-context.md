# 执行上下文与执行上下文栈

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [执行上下文的类型](#一、执行上下文的类型)
- [执行栈](#二、执行栈)
- [执行上下文的创建](#三、执行上下文的创建)
- [执行过程](#四、执行过程)
- [执行上下文三个重要属性](#五、执行上下文三个重要属性)

### 一、执行上下文的类型

#### 1.1 执行上下文总共有三种类型

- **全局执行上下文**：只有一个，浏览器中的全局对象就是 window 对象，`this`指向这个全局对象
- **函数执行上下文**：存在无数个，只有在函数被调用的时候才会被创建，每次调用函数都会创建一个新的执行上下文。
- **Eval 函数执行上下文**：指的是运行在 eval 函数中的代码，很少用而且不建议使用。

### 二、执行栈

执行栈，也叫调用栈，具有 LIFO（后进先出）结构，用于存储在代码执行期间创建的所有执行上下文。

首次运行 JS 代码时，会创建一个**全局**执行上下文并 Push 到当前的执行栈中。每当发生函数调用，引擎都会为该函数创建一个**新的函数**执行上下文并 Push 到当前执行栈的栈顶。

根据执行栈 LIFO 规则，当栈顶**函数**运行完成后，其对应的函数执行上下文将会从执行栈中 Pop 出，上下文控制权将移到当前执行栈的下一个执行上下文。

```
var a = 'Hello World!';

function first() {
  console.log('Inside first function');
  second();
  console.log('Again inside first function');
}

function second() {
  console.log('Inside second function');
}

first();
console.log('Inside Global Execution Context');

// Inside first function
// Inside second function
// Again inside first function
// Inside Global Execution Context
```

![image](execution.png)

#### 对比

有如下两段代码，执行的结果是一样的，但是两段代码究竟有什么不同？

```
var scope="global scope";
function checkscope(){
  var scope="local scope";
  function fn(){
    return scope;
  }
  return fn();
}
checkscope();

```

```
var scope="global scope";
function checkscope(){
  var scope="local scope";
  function f(){
    return scope;
  }
  return f;
}
checkscope()();

```

两段代码执行的结果一样，但是两段代码究竟有哪些不同呢？

答案就是执行上下文栈的变化不一样。

让我们模拟第一段代码：

```
ECStack.push(<checkscope> functionContext);
ECStack.push(<f> functionContext);
ECStack.pop();
ECStack.pop();

```

让我们模拟第二段代码：

```
ECStack.push(<checkscope> functionContext);
ECStack.pop();
ECStack.push(<f> functionContext);
ECStack.pop();

```

### 三、执行上下文的创建

执行上下文分两个阶段创建：**1）创建阶段； 2）执行阶段**

#### 3.1 创建阶段

- 确定 this 的值，也被称为**This Binding**
- **LexicalEnvironment（词法环境）** 组件被创建。
- **VariableEnvironment（变量环境）** 组件被创建。

直接看伪代码可能更加直观

```
ExecutionContext = {
  ThisBinding = <this value>,     // 确定this
  LexicalEnvironment = { ... },   // 词法环境
  VariableEnvironment = { ... },  // 变量环境
}
```

##### 3.1.1 This Binding

1. **全局**执行上下文中，this 的值指向全局对象，在浏览器中 this 的值指向 window 对象，而在 nodejs 中指向这个文件的 module 对象。
2. **函数**执行上下文中，this 的值取决于函数的调用方式。具体有：默认绑定、隐式绑定、显式绑定（硬绑定）、new 绑定、箭头函数，具体内容在【[this 解析](https://github.com/ftTony/blog/issues/6)】部分详解。

##### 3.1.2 词法环境（Lexical Environment）

词法环境有两个**组成部分**

- **环境记录**：存储变量和函数声明的实际位置
- **对外部环境的引用**：可以访问其外部词法环境

词法环境有两种**类型**

1. **全局环境**：是一个没有外部环境的词法环境，其外部环境引用为 null。拥有一个全局对象（window 对象）及其关联的方法和属性（例如数组方法）以及任何用户自定义的全局变量，this 的值指向这个全局对象。

2. **函数环境**：用户在函数中字义的变量被存储在**环境记录**中，包含了`arguments`对象。对外部环境的引用可以是全局环境，也可以是包含内部的外部函数环境。
3. **直接看伪代码可能更加直观**

```
GlobalExectionContext = {  // 全局执行上下文
  LexicalEnvironment: {    	  // 词法环境
    EnvironmentRecord: {   		// 环境记录
      Type: "Object",      		   // 全局环境
      // 标识符绑定在这里
      outer: <null>  	   		   // 对外部环境的引用
  }
}

FunctionExectionContext = { // 函数执行上下文
  LexicalEnvironment: {  	  // 词法环境
    EnvironmentRecord: {  		// 环境记录
      Type: "Declarative",  	   // 函数环境
      // 标识符绑定在这里 			  // 对外部环境的引用
      outer: <Global or outer function environment reference>
  }
}

```

##### 3.1.3 变量环境（Variable Environment）

变量环境也是一个词法环境，因此它具有上面定义的词法环境的所有属性。

在 ES6 中，**词法环境**和**变量环境**的区别在于前者用于存储函数声明和变量（ let 和 const ）绑定，而后者仅用于存储变量（ var ）绑定。

使用例子进行介绍

```
let a = 20;
const b = 30;
var c;

function multiply(e, f) {
 var g = 20;
 return e * f * g;
}

c = multiply(20, 30);
```

执行上下文如下所示

```
GlobalExectionContext = {

  ThisBinding: <Global Object>,

  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      // 标识符绑定在这里
      a: < uninitialized >,
      b: < uninitialized >,
      multiply: < func >
    }
    outer: <null>
  },

  VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      // 标识符绑定在这里
      c: undefined,
    }
    outer: <null>
  }
}

FunctionExectionContext = {

  ThisBinding: <Global Object>,

  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // 标识符绑定在这里
      Arguments: {0: 20, 1: 30, length: 2},
    },
    outer: <GlobalLexicalEnvironment>
  },

  VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // 标识符绑定在这里
      g: undefined
    },
    outer: <GlobalLexicalEnvironment>
  }
}
```

**变量提升**的原因：在创建阶段，函数声明存储在环境中，而变量会被设置为 undefined（在 var 的情况下）或保持未初始化（在 let 和 const 的情况下）。所以这就是为什么可以在声明之前访问 var 定义的变量（尽管是 undefined ），但如果在声明之前访问 let 和 const 定义的变量就会提示引用错误的原因。这就是所谓的变量提升。

#### 3.2 执行阶段

此阶段，完成对所有变量的分配，最后执行代码。

如果 Javascript 引擎在源代码中声明的实际位置找不到 let 变量的值，那么将为其分配 undefined 值。

### 四、函数上下文

在函数上下文中，用活动对象(activation object, AO)来表示变量对象。

活动对象和变量对象的区别在于

1. 变量对象（VO）是规范上或者是 JS 引擎上实现的，并不能在 JS 环境中直接访问。
2. 当进入到一个执行上下文后，这个变量对象才会被**激活**，所以叫活动对象（AO），这时候活动对象上的各种属性才能被访问。

调用函数时，会为其创建一个**Arguments 对象**，并自动初始化局部变量 arguments，指代该 Arguments 对象。所有作为参数传入的值都会成为 Arguments 对象的数组元素。

### 四、执行过程

执行上下文的代码会分成两个阶段进行处理：分析和执行，我们也可以叫做：

- 进入执行上下文
- 代码执行

#### 4.1 进入执行上下文

当进入执行上下文时，这时候还没有执行代码，

变量对象会包括：

1. 函数的所有形参（如果是函数上下文）

- 由名称和对应值组成的一个变量对象的属性被创建
- 没有实参，属性值设为 undefined

2. 函数声明

- 由名称和对应值（函数对象（function-object））组成一个变量对象的属性被创建
- 如果变量对象已经存在相同名称的属性，则完全替换这个属性

3. 变量声明

- 由名称和对应值（undefined）组成一个变量对象的属性被创建；
- 如果变量名称跟已经声明的形参或函数相同，则变量声明不会干扰已经存在的这类属性

举个例子

```

function foo(a) {
  var b = 2;
  function c() {}
  var d = function() {};

  b = 3;

}

foo(1);

```

在进入执行上下文后，这时候的 AO 是：

```
AO={
  arguments:{
    0:1,
    length:1
  },
  a:1,
  b:undefined,
  c:reference to function c(){},
  d:undefined
}

```

#### 4.2 代码执行

在代码执行阶段，会顺序执行代码，根据代码，修改变量对象的值

还是上面的例子，当代码执行完后，这时候的 AO 是：

```
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: 3,
    c: reference to function c(){},
    d: reference to FunctionExpression "d"
}

```

总结我们上述所说：

1. 全局上下文的变量对象初始化是全局对象
2. 函数上下文的变量对象初始化只包括 Arguments 对象
3. 在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值
4. 在代码执行阶段，会再次修改变量对象的属性值

### 五、执行上下文三个重要属性

- **变量对象**，包含变量、函数声明和函数的形参，该属性只能在全局上下文中访问，详情可参考[javascript 变量对象](https://github.com/mqyqingfeng/Blog/issues/5)
- **作用域链**（JS 采用词法作用域，也就是说变量的作用域是在定义时就决定了），详情可参考[javaScript 作用域](https://juejin.im/post/5c3b7133e51d45520a76862c)
- **this**

### 参考资料

- [理解 JavaScript 中的执行上下文和执行栈](https://github.com/yygmind/blog/issues/12)
- [深入理解 javascript 原型和闭包（8）——简述【执行上下文】上](http://www.cnblogs.com/wangfupeng1988/p/3986420.html)
- [深入理解 JavaScript 系列（11）：执行上下文（Execution Contexts）](http://www.cnblogs.com/TomXu/archive/2012/01/13/2308101.html)
- [JavaScript 深入之变量对象](https://github.com/mqyqingfeng/Blog/issues/5)
- [JavaScript 深入之执行上下文栈](https://github.com/mqyqingfeng/Blog/issues/4)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
