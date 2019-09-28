# 函数

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [函数定义](#一函数定义)
- [函数调用](#二函数调用)
- [返回函数的函数](#三返回函数的函数)
- [创建匿名函数](#四创建匿名函数)
- [函数的作用](#五函数的作用)
- [高阶函数](#六高阶函数)
- [思维导图](#七思维导图)

### 一、函数定义

>函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块，它可以用在函数定义表达式或函数声明语句里。

函数定义都从function关键字开始，其后跟随这些部分：

- 函数名称标识符。
- 一对圆括号，其中包含由0个或者多个用逗号隔开的标识符组成的列表。
- 一对花括号，其中包含0条或多条JavaScript语句。

### 二、函数调用

有四种调用`js`函数的方式：

- 作为函数
- 作为方法
- 作为构造函数
- 通过call()和apply()

### 三、返回函数的函数

在使用 return 语句时，函数会停止执行，并返回指定的值。当函数无明确返回值时，返回的值就是`undefined`。

```
<script type="text/javascript">
    var box = function(){
        var a=1;
        return function(){
            alert(++a)
        }
    }
    var newFunc = box();
    newFunc();//2
</script>

```

### 四、创建匿名函数

在`javascript`语言里任何匿名函数都是属于`window`对象。在定义匿名函数时候它会返回自己的内存地址，如果此时有个变量接收了这个内存地址，那么匿名函数就能在程序里被使用了，因为匿名函数也是在全局执行环境构造时候定义和赋值，所以匿名函数的`this`指向也是`window`对象

#### 4.1 通过自我执行来执行匿名函数

```

//通过自我执行来执行匿名函数

<script type="text/javascript">
  (function (){         // (匿名函数)()；第一圆括号放匿名函数，第二个圆括号执行
       alert('Lee');
  })();
</script>

```

#### 4.2 把匿名函数自我执行的返回值赋给变量

```

var box= (function () {
    return 'hi';
})();
console.log(box);//hi
```

#### 4.3 自我执行匿名函数的传参

```

//自我执行匿名函数的传参

<script type="text/javascript">
    (function (age){
         alert(age);
    })(100);          //弹出100
</script>

```

### 五、函数的作用

### 5.1 作为一个类构造器使用

```

function Class(){}
Class.prototype={};
var item=new Class(); 

```

### 5.2 作为闭包使用

```

(function(){
    //独立作用域
})(); 

```

### 5.3 作为构造函数调用

```
    function Test(){//大写，以区分普通函数
        this.x = 10;
    }

    var obj = new Test();
    alert(obj.x); //弹出 10；

```

### 六、高阶函数

高阶函数英文叫 Higher-order function，它的定义很简单，就是至少满足下列一个条件的函数：

- 接受一个或多个函数作为输入
- 输出一个函数

javascript语言中内置了一些高阶函数，比如Array.prototype.map，Array.prototype.filter 和 Array.prototype.reduce，它们接受一个函数作为参数，并应用这个函数到列表的每个元素。

#### 4.1 Array.prototype.map

`map()`方法创建一个新数组，其结果是该数组中的每个元素都调用一个**提供的函数**后返回的结果，**原始数组不会改变**。传递给 map 的回调函数（callback）接受三个参数，分别是 currentValue、index（可选）、array（可选），除了 callback 之外还可以接受 this 值（可选），用于执行 callback 函数时使用的this 值。

```

const arr1=[1,2,3,4];
const arr2=arr1.map(item=>item*2);

console.log(arr2);
// [2, 4, 6, 8]
console.log( arr1 );
// [1, 2, 3, 4]

```

#### 4.2 Array.prototype.filter

`filter()` 方法创建一个新数组, 其包含通过提供函数实现的测试的所有元素，**原始数组不会改变**。接收的参数和 map 是一样的，其返回值是一个新数组、由通过测试的所有元素组成，如果没有任何数组元素通过测试，则返回空数组。

```

const arr1 = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
const arr2 = arr1.filter( (element, index, self) => {
    return self.indexOf( element ) === index;
});

console.log( arr2 );
// [1, 2, 3, 5, 4]
console.log( arr1 );
// [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]

```

#### 4.3 Array.prototype.reduce

`reduce()`方法对数组中的每个元素执行一个由您提供的**reducer**函数（升序执行），将其结果汇总为单个返回值。传递给 reduce 的回调函数（callback）接受四个参数，分别是累加器 accumulator、currentValue、currentIndex（可选）、array（可选），除了 callback 之外还可以接受初始值 initialValue 值（可选）。

- 如果没有提供initialValue，那么第一次调用`callback`函数时，accumulator 使用原数组中的第一个元素，currentValue 即是数组中的第二个元素。 在没有初始值的空数组上调用 reduce 将报错。
- 如果提供了 initialValue，那么将作为第一次调用 callback 函数时的第一个参数的值，即 accumulator，currentValue 使用原数组中的第一个元素。

具体可以参考[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

```

const arr = [0, 1, 2, 3, 4];
let sum = arr.reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue;
});

console.log( sum );
// 10
console.log( arr );
// [0, 1, 2, 3, 4]

```

### 七、思维导图

![](fn.gif)

### 参考资料

- [JavaScript学习总结（四）function函数部分](https://segmentfault.com/a/1190000000660786#articleHeader13)
- 《高程第3版》
- 《权威第6版》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>