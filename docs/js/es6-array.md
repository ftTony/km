# 数组扩展

## 前言

ES6中数组增加了扩展运算符、`from()`、`of()`、`includes()`、`fill()`等方法。

## 内容

- [扩展运算符](#一、扩展运算符)
- [扩展运算符的应用](#二、扩展运算符的应用)
- [Array.from()](#三、arrayfrom)
- [Array.of()](#四、arrayof)
- [数组实例的 copyWithin()](#五、数组实例的-copywithin)
- [数组实例的 find() 和 findIndex()](#六、数组实例的-find-和-findindex)
- [数组实例的 fill()](#七、数组实例的-fill)
- [数组实例的 entries()，keys() 和 values()](#八、数组实例的-entrieskeys-和-values)
- [数组实例的 includes()](#九、数组实例的-includes)
- [数组实例的 flat()，flatMap()](#十、数组实例的-flatflatmap)

### 一、扩展运算符

扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。

```
console.log(...[1,2,3])
// 1 2 3

[...document.querySelectorAll('div')]

// [<div>,<div>,<div>]
```

#### 替代数组的 apply 方法

由于扩展运算符可以展开数组，所以不再需要`apply`方法，将数组转为函数的参数了。

```
// ES5的写法
function f(x,y,z){
    // ...
}
var args = [0,1,2];
f.apply(null,args);

// ES6的写法
function f(x,y,z){
    // ...
}
var args = [0,1,2];
f(...args);
```

下面是扩展运算符取代`apply`方法的一个实际的例子，应用Math.max方法，简化求出一个数组最大元素的写法。

```
// ES5 的写法
Math.max.apply(null,[14,3,77]);

// ES6 的写法
Math.max(...[14,3,77]);

```

### 二、扩展运算符的应用

- [复制数组](#21-复制数组)
- [合并数组](#22-合并数组)
- [与解构赋值结合](#23-与解构赋值结合)
- [字符串](#24-字符串)
- [实现了 Iterator 接口的对象](#25-实现了-iterator-接口的对象)
- [Map 和 Set 结构，Generator 函数](#26-map-和-set-结构generator-函数)

#### 2.1 复制数组

数组是复合数据类型，直接复制的话，只是复制了指向底层数据结构的指针，而不是克隆一个全新的数组。

```
const a1 = [1, 2];
// 写法一
const a2 = [...a1];
// 写法二
const [...a2] = a1;
```

#### 2.2 合并数组

扩展运算符提供了数组合并的新写法，

```
// ES5
[1, 2].concat(more)
// ES6
[1, 2, ...more]

var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];

// ES5的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6的合并数组
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]
```

#### 2.3 与解构赋值结合

扩展运算符可以与解构赋值结合起来，用于生成数组。如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。

```
const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest  // [2, 3, 4, 5]
```

#### 2.4 字符串

扩展运算符还可以将字符串转为真正的数组。

```
[...'hello']
// ["h","e","l","l","o"]

```

#### 2.5 实现了 Iterator 接口的对象

任何 Iterator 接口的对象，都可以用扩展去处符转为真正的数组。对于那些没有部署 Iterator 接口的类似数组的对象，扩展运算符就无法将其转为真正的数组。

```
var nodeList = document.querySelectorAll('div');
var array = [...nodeList];
```

#### 2.6 Map 和 Set 结构，Generator 函数

扩展运算符内部调用的是数据结构的 Iterator 接口，因此只要具有 Iterator 接口的对象，都可以使用扩展运算符，比如 Map 结构。

```
let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

let arr = [...map.keys()]; // [1, 2, 3]
```

### 三、Array.from()

`Array.from`方法用于将两类对象转为真正的数组：类似数组的对象(array-like-object)和可遍历（iterable）的对象(包括ES6新增的数组结构Set和Map)。

下面是一个类似数组的对象，Array.from将它转为真正的数组。

```

```

### 四、Array.of()

`Array.of`方法用于将一组值，转换为数组。

```
Array.of(3,11,8)    // [3,11,8]

```

### 五、数组实例的 copyWithin()

数组实例的`copyWithin`方法，在当前数组内部，将指定位置的成员复制到其他位置，然后返回当前数组。也就是说，使用这个方法，会修改当前数组。

```
Array.prototype.copyWithin(target, start = 0, end = this.length)
```
它接受三个参数。

- target(必需)：从该位置开始替换数据。
- start(可选)：从该位置开始读取数据，默认为0.如果为负值，表示倒数。
- end(可选)：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。


例子

```
[1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]

// 将3号位复制到0号位
[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

// -2相当于3号位，-1相当于4号位
[1, 2, 3, 4, 5].copyWithin(0, -2, -1)
// [4, 2, 3, 4, 5]

// 将3号位复制到0号位
[].copyWithin.call({length: 5, 3: 1}, 0, 3)
// {0: 1, 3: 1, length: 5}

// 将2号位到数组结束，复制到0号位
var i32a = new Int32Array([1, 2, 3, 4, 5]);
i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]
```

### 六、数组实例的 find() 和 findIndex()

数组实例的`find`方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为`true`的成员，然后返回该成员。如果没有符合的条件的成员，则返回`undefined`。

```
[1, 4, -5, 10].find((n) => n < 0)
// -5

[1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
}) // 10
```

### 七、数组实例的 fill()

`fill`方法使用给定值，填充一个数组。

```
['a', 'b', 'c'].fill(7)
// [7, 7, 7]

new Array(3).fill(7)
// [7, 7, 7]
```

### 八、数组实例的 entries()，keys() 和 values()

ES6提供三个新的方法——`entries()`，`keys()`和`values()`——用于遍历数组。它们都返回一个遍历器对象，可以用`for...of`循环进行遍历，唯一的区别是`keys()`是对键名的遍历、`values()`是对键值的遍历，`entries()`是对键值的遍历。

```
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```


### 九、数组实例的 includes()

`Array.prototype.includes`方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的`includes`方法类似。ES2016引入了该方法

```
[1, 2, 3].includes(2)     // true
[1, 2, 3].includes(4)     // false
[1, 2, NaN].includes(NaN) // true
```

### 十、数组实例的 flat()，flatMap()

数组的成员有时还是数组，`Array.prototype.flat()`用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。

```
[1,2,[3,4]].flat()
// [1,2,3,4]

[1, 2, [3, [4, 5]]].flat()
// [1, 2, 3, [4, 5]]

[1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]

[1, [2, [3]]].flat(Infinity)
// [1, 2, 3]

```

### 参考资料

- [《ECMAScript 6 入门》 第三版](https://yjhenan.gitbooks.io/-ecmascript-6/content/docs/array.html)
- [ECMAScript 6 入门](http://es6.ruanyifeng.com/#docs/array#%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>