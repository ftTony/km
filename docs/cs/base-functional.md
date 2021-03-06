# 函数式编程

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [函数式编程定义](一、函数式编程定义)
- [函数式编程特性](#二、函数式编程特性)
- [函数式编程原理](#三、函数式编程原理)
- [函数式编程库](#四、函数式编程库)

### 一、函数式编程定义

函数式编程（functional programming）是一种编程范式，它将计算机视为函数运算，并且避免使用程序状态以及易变对象。其中λ 演算（lambda calculus）为该语言最重要的基础。而且，λ 演算的函数可以接受函数当作输入（引数）和输出（传出值）。

比起指令式编程，函数式编程关心数据的映射，命令式编程关心解决问题的步骤。函数式编程更加强调程序执行的结果而非执行的过程，倡导利用若干简单的执行单元让计算结果不断渐进，逐层推导复杂的运算，而不是设计一个复杂的执行过程。

函数式编程特点：

- 函数是一等公民
- 只用表达式，不用语句
- 没有副作用
- 不修改状态
- 引用透明

### 二、函数式编程特性

- [纯函数](#_1-1-纯函数)
- [柯里化](#_1-2-柯里化)
- [函数组合](#_1-3-函数组合)
- [惰性函数](#_1-4-惰性函数)
- [高阶函数](#_1-5-高阶函数)
- [闭包](#_1-6-闭包)

#### 1.1 纯函数

**纯函数**是指对于相同的输入，永远得到相同的输出，而且没有任何可观察的副作用，也不依赖外部环境的状态。

```
const array = [1, 2, 3, 4, 5];
const a1 = array.slice(0, 2);
// array = [1,2,3,4,5]
// a1 = [1,2]
const a2 = array.slice(0, 2);
// array = [1,2,3,4,5]
// a2 = [1,2]
const b1 = array.splice(0, 2);
// array = [3,4,5]
// b1 = [1,2]
const b2 = array.splice(0, 2);
// array = [5]
// b2 = [3,4]
```

可以看到，Array.slice是纯函数，因为同样的输入，永远得到相同的输出，并且不会影响外部变量（没有副作用）。而Array.splice不是纯函数，因为同样的输入，输出并不相同，而且修改了原数组（有副作用）。

#### 1.2 柯里化

**柯里化** 是指传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

```
var checkage = min => age => age > min;
var checkage20 = checkage(20);
checkage20(100);
// true
```

第一步，根据参数20，返回一个检查年龄是否大于20的新函数，第二步，传递参数，检查年龄是否大于20。

#### 1.3 函数组合

**函数组合** 定义一个组合函数来讲多个函数调用组合成一个，国了解决类似的函数嵌套问题`f(h(j(h())))`。

```
var compose = (f,g) => x => f(g(x));

function add(a){
    return a+a;
}

function multi(a){
    return a*a;
}

const c = compose(add,multi);
c(3);   //18
```

#### 1.4 惰性函数

**惰性函数** 是“比较懒的函数”，只执行一次就不执行了，是因为缓存了上一次的结果，直接拿来用。

```
var t;
function f(a){
    if(t) return t;
    var e = parseInt(a,10);
    alert('测试有没有重复！');
    e = e * e;
    t = e;
    return t;
}
alert(f('3'));
alert(f('3'));
alert(f('4')); // 不会弹出16的，因为这是“隋性”，只计算一次
```

#### 1.5 高阶函数

将函数当参数，把传入的函数做一个封装，然后返回这个封装函数，达到更高程序的抽象。

```
function hoc(fn){
    console.log('begin');
    const result = fn();
    console.log('end');
    return result;
}
```

#### 1.6 闭包

闭包的概念来源于 19 世纪 60 年代，在 1975 年被作为一个语言的编程特征实现，用作支持词法范围的函数是一等公民的函数式编程。

```
function a(x){
    return function(y){
        return x+y;
    }
}
var a1 = a(1);
a1(3);  //4
```

虽然外部 a 执行完毕，栈上的帧被释放，但是堆上的作用域并不能被释放，因此 x 依旧可以被外部函数访问，这样就形成的闭包。

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

范畴论使用函数，表达范畴之间的关系。

伴随着范畴论的发展，就发展出一整套函数的运算方法。这套方法起初只用于数字运算，后来有人将它在计算机上实现了，就变成了今天的**函数式编程**。

本质上，函数式编程只是范畴论的运算方法，跟数理逻辑、微积分、行列式是同一类东西，都是数学方法，只是碰巧它能用来写程序。

所以，为什么函数式编程要求函数必须是纯的，不能有副作用？因为它是一种数学运算，原始目的就是求值，不做其他事情，否则就无法满足函数运算法则了。

总之，在函数式编程中，函数就是一个管道（pipe）。这头进去一个值，那头就会出来一个新的值，没有其他作用。

#### 函子

函数不仅可以用于同一个范畴中值的转换，还可以用于将一个范畴转换成另一个范畴。这就涉及到了函子(Functor)。

函子是函数式编程里面最重要的数据类型，也是基本的运算单位和功能单位。

它首先是一种范畴，也就是说，是一个容器，包含了值和变形关系。比较特殊的是，它的变形关系可以依次作用于每一个值，将当前容器变形成另一个容器。

函子的代码实现：

```
// 任何具有map方法的数据结构，都可以当作函子的实现。
class Functor{
    constructor(val){
        this.val = val;
    }

    map(f){
        return Functor.of(f(this.val));
    }
}

Functor.of = function(value){
    return new this(value);
}
```

上面代码中，Functor是一个函子，它的map方法接受函数f作为参数，然后返回一个新的函子，里面包含的值是被f处理过的f(this.val)。

一般约定，函子的标志就是容器具有map方法。该方法将容器里面的每一个值，映射到另一个容器。

```
new Functor(2).map(function(two){
    return two + 2;
});
// Functor(4)

new Functor('flamethrowers').map(function(s){
    return s.toUpperCase();
});
// Functor('FLAMETHROWERS')

new Functor('bombs').map(_.concat('away')).map(_.prop('length'));
// Functor(10)
```

上面的例子说明，函数式编程里面的运算，都是通过函子完成，即运算不直接针对值，而是针对这个值的容器---函子。函子本身具有对外接口（map方法），各种函数就是去处符，通过接口接入容器，引发容器里面的值的变形。

因此，学习函数式编程，实际上就是学习函子的各种运算。由于可以把运算方法封装在函子里面，所以又衍生出各种不同类型的函子，有多少种运算，就有多少种函子。函数式编程就变成了运用不同的函子，解决实际问题。

#### Of 方法

你可能注意到了，上面生成新的函子的时候，用了 new 命令。这实在太不像函数式编程了，因为 new 命令是面向对象编程的标志。

函数式编程一般约定，函子有一个 of 方法，用来生成新的容器。

下面就用 of 方法替换掉 new。

```
Functor.of = function(val){
    return new Functor(val);
};
```

然后，前面的例子就可以改成下面这样。

```
Functor.of(2).map(function(two){
    return two +2;
});
// Functor(2)
```

这就更像函数式编程了。

#### Maybe 函子

函子接受各种函数，处理容器内部的值。这里就有一个问题，容器内部的值可能是一个空值（比如null），而外部函数未必有处理空值的机制，如果传入空值，很可能就会出错。

Maybe函子就是为了解决这一类问题而设计的。简单说，它的map方法里面设置了空值检查。

```
class Maybe extends Functor{
    constructor(value){
        super();
        this.val = value;
    }
    isnothing(){
        return !!!this.val;
    }

    map(f){
        if(this.isnothing()){
            // 如果没有值，不执行变形函数，直接返回一个新函子null。
            return Maybe.of(null);
        }else{
            return Maybe.of(f(this.val));
        }
    }
}
```

#### Either 函子

条件运算 if...else 是最常见的运算之一，函数式编程里面，使用 Either 函子表达。

Either 函子内部有两个值：左值（Left）和右值（Right）。右值是正常情况下使用的值，左值是右值不存在时使用的默认值。

```
class Either extends Functor{
    constructor(value){
        super();
        this.val = value;
    }
    isnothing(){
        return !!!this.val;
    }
    map(left,right){
        if(this.isnothing()){
            return Either.of(left(null));
        }else{
            return Either.of(right(this.val));
        }
    }
}
```

#### AP 函子

```
function addTwo(x){
    return x+2;
}

const A = Functor.of(2);
const B = Functor.of(addTwo);
```

上面代码中，函子A内部的值是2，函子B内部的值是函数addTwo。

有时，我们想让函子B内部的函数，可以使用函子A内部的值进行运算。这时就需要用到ap函子。

ap 是 applicative（应用）的缩写。凡是部署了 ap 方法的函子，就是 ap 函子。

```
class Ap extends Functor {
  constructor(value) {
    super();
    this.val = value;
  }
  ap(F) {
    return Ap.of(this.val(F.val));
  }
}
```

注意，ap 方法的参数不是函数，而是另一个函子。

因此，前面例子可以写成下面的形式。

```
Ap.of(addTwo).ap(Functor.of(2));
// Ap(4)
```

ap函子的意义在于，对于那些多参数的函数，就可以从多个容器之中取值，**实现函子的链式操作**。

```
function add(x){
    return function(y){
        return x+y;
    }
}

Ap.of(add).ap(Maybe.of(2)).ap(Maybe.of(3));
```

上面代码中，函数 add 是柯里化以后的形式，一共需要两个参数。通过 ap 函子，我们就可以实现从两个容器之中取值。它还有另外一种写法。

```
Ap.of(add(2)).ap(Maybe.of(3));
```

#### Monad 函子

函子是一个容器，可以包含任何值。函子之中再包含一个函子，也是完全合法的。但是，这样就会出现多层嵌套的函子。

```
Maybe.of(Maybe.of(Maybe.of({ name: 'Mulburry', number: 8402 })));
```

上面这个函子，一共有三个Maybe嵌套。如果要取出内部的值，就要连续取三次this.val。这当然很不方便，因此就出现了Monad函子。

Monad 函子的作用是，总是返回一个单层的函子。它有一个 flatMap 方法，与 map 方法作用相同，唯一的区别是如果生成了一个嵌套函子，它会取出后者内部的值，保证返回的永远是一个单层的容器，不会出现嵌套的情况。

```
class Monad extends Functor {
  join() {
    return this.val;
  }
  flatMap(f) {
    return this.map(f).join();
  }
}
```

上面代码中，如果函数 f 返回的是一个函子，那么 this.map(f)就会生成一个嵌套的函子。所以，join 方法保证了 flatMap 方法总是返回一个单层的函子。这意味着嵌套的函子会被铺平（flatten）。

#### IO 函子

Monad函子的重要应用，就是实现I/O（输入输出）操作。

I/O是不纯的操作，普通的函数式编程没法做，这时就需要把I/O操作写成Monad函子，通过它来完成。

```
var fs = require('fs');

var readFile = function(filename){
    return new IO(function(){
        return fs.readFileSync(filename,'utf-8');
    })
}

var print = function(x){
    return new IO(function(){
        console.log(x);
        return x;
    });
};
```

上面代码中，读取文件和打印本身都是不纯的操作，但readFile和print却是纯函数，因为它们总是返回IO函子。

如果IO函子是一个Monad，具有flatMap方法，那么我们就可以像下面这样调用这两个函数。

```
readFile('./user.txt').flatMap(print);
```

这就是神奇的地方，上面的代码完成了不纯的操作，但是因为flatMap返回的还是一个IO函子，所以这个表达式是纯的。我们通过一个纯的表达式，完成带有副作用的操作，这就是Monad的作用。

由于返回还是IO函子，所以可以实现链式操作。因此，在大多数库里面，flatMap方法被改名成chain。

```
var tail = function(x){
    return new IO(function(){
        return x[x.length-1];
    });
};

readFile('./user.txt').flatMap(tail).flatMap(print);

// 等同于
readFile('./user.txt')
  .chain(tail)
  .chain(print);
```

上面代码读取了文件user.txt，然后选取最后一行输出。

### 四、函数式编程库

- RxJS
- CycleJS
- LoadshJS
- UnderscoreJS
- RamdaJS

### 总结

函数式编程是一个非常大的话题，这里只是简单的列举出了一些案例，希望读者看完之后能有个整体的了解。

- 面向过程编程：想到哪写到哪。
- 函数式编程：提纯无关业务的纯函数，函数套函数产生神奇的效果。
  - 函数式编程里，同样的输入一定会有同样的输出，永远不依赖外部的状态。
  - 纯函数可以记忆（同样的输入一定会有同样的输出），不跟外界有任何关系，抽象代码方便。
  - 函数式编程可以解决多纯种死锁问题，在每一个函数式编程里面，根本不设计到外部的那个被几个线程争执的变量。
  - 函数式编程可以用来抽象业务逻辑，当系统里面有很多可复用，组合起来有更强大的功能的时候，可以考虑抽库，增加代码健壮性，方便单元测试。
  - 函数式编程会充盈着大量的闭包，闭包是js中觉的核心知识。
  - 函数柯里化：函数接收一堆参数，返回一个新函数，用来继续接收参数，处理业务逻辑。它可以记住参数，相当于是对参数的一种缓存。
  - 函数组合：是为了解决多个函数嵌套调用产生的洋葱式的代码。
  - 惰性函数：比较懒的函数，下一次就不想再求值了（将上一次的运行结果缓存起来了）。
  - 高阶函数：将函数传给函数，让函数具有更复杂的能力和功能。

## 参考资料

- [函数式编程](https://lmjben.github.io/blog/base-functional.html)
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