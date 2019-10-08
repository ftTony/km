# 函数扩展

## 前言

ES6函数扩展，主要箭头函数

## 内容

- 函数参数默认值
- rest参数
- 箭头函数
- 尾调用优化

### 一、函数参数默认值

- 基本用法
- 与解构赋值默认值结合使用
- 参数默认值的位置
- 函数的 length 属性
- 作用域

#### 1.1 基本用法

ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。

```
function log(x,y = 'World'){
    console.log(x,y);
}

```

#### 1.2 与解构赋值默认值结合使用

参数默认值可以与解构赋值的默认值，结合起来使用。

```
function foo({x,y = 5}){
    console.log(x,y);
}

foo({}) // undefined 5
foo({x:1})  // 1 5
foo({x:1,y:2})  // 1 2

function foo({x,y = 5} = {}){
    console.log(x,y);
}

foo()

```

#### 1.3 参数默认值的位置

通常情况下，定义了默认值的参数，应该是函数的尾参数。因为这样比较容易看出来，到底省略了哪些参数。如果非尾部的参数设置默认值，实际上这个参数是没省略的。

```
// 例一
function f(x = 1, y) {
  return [x, y];
}

f() // [1, undefined]
f(2) // [2, undefined])
f(, 1) // 报错
f(undefined, 1) // [1, 1]
```

#### 1.4 函数的 length 属性

指定了默认值以后，函数的`length`属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，`length`属性将失真。

```
(function (a){}).length // 1
(function (a = 5) {}).length    // 0
(function(a,b,c=5){}).length    // 2

```

#### 1.5 作用域

一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。

```
var x = 1;

function f(x,y=x){
    console.log(y);
}

f(2)    //2
```

### 二、rest参数

ES6引入rest参数（形式为`...变量名`），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

```
function add(...values){
    let sum = 0;

    for(var val of values){
        sum +=val;
    }

    return sum;
}

add(2, 5, 3) // 10

```

### 三、箭头函数

- 基本用法
- 使用注意点
- 适用使用=>函数
- 嵌套的箭头函数
- 绑定 this

#### 3.1 基本用法

ES6允许使用“箭头”(`=>`)定义函数。

```
var f = v => v;

var sum = (num1, num2) => { return num1 + num2; }

let getTempItem = id => ({id:id,name:"Temp"});

const full = ({first,last})=>first + ' ' + last;

const numbers = (...nums) => nums;

[1,2,3].map(x => x * x);

var result = values.sort((a, b) => a - b);

```

#### 3.2 使用注意点

箭头函数有几个使用注意点。

- 函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象。
- 不可以当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误。
- 不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用rest参数代替。
- 不可以使用`yield`命令，因此箭头函数不能用作Generator函数。

#### 3.3 适用使用=>函数

- 如果你有一个简短句在线函数表达式，其中唯一的语句是return某个计算出的值，且这个函数内部没有this引用，且没有自身引用（递归、事件绑定/解绑定），且不会要求函数执行这些，那么可以安全地把它重构为=>箭头函数。
- 如果你有一个内层函数表达式，依赖于在包含它的函数中调用var self = this hack或者.bind(this)来确保适当的this绑定，那么这个内层函数表达式应该可以安全换为=>箭头函数。
- 如果你的内层函数表达式依赖于封装函数中某种像var args = Array.prototype.slice.call(arguments)来保证arguments的词法复制，那么这个内层函数应该可以安全转换为=>箭头函数。
- 所有的其他情况——函数声明、较长的多语句函数表达式】需要词法名称标识符（递归等）的函数，以及任何不符合以上几点特征的函数——一般应该避免=>函数语法。

#### 3.4 嵌套的箭头函数

```
let insert = (value) =>({into:(array)=>({after:(afterValue)=>{
    array.splice(array.indexOf(afterValue)+1,0,value);
    return array;
}})});

insert(2).into([1,3]).after(1); //[1,2,3]
```

#### 3.5 绑定 this

函数绑定运算符是并排的两个冒号（::），双冒号左边是一个对象，右边是一个函数。该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面。

```
foo::bar;
// 等同于
bar.bind(foo);

foo::bar(...arguments);
// 等同于
bar.apply(foo,arguments)

```

### 四、尾调用优化

- 什么是尾调用
- 尾调用优化
- 尾递归

#### 4.1 什么是尾调用

尾调用是函数式编程的一个重要概念，本身非常简单，就是指某个函数的最后一步是调用另一个函数。

```
function f(x){
  return g(x);
}
```

#### 4.2 尾调用优化

尾调用之所以与其他调用不同，就在于它的特殊的调用位置。

#### 4.3 尾递归

函数调用自身，称为递归。如果尾调用自身，就称为尾递归。

```
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

factorial(5, 1) // 120
```

### 参考资料

- [《ECMAScript 6 入门》 第三版](https://yjhenan.gitbooks.io/-ecmascript-6/content/docs/function.html)
- [ECMAScript 6 入门](http://es6.ruanyifeng.com/#docs/function)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>