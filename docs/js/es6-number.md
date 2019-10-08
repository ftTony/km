# 数值扩展

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [数值扩展](#%e6%95%b0%e5%80%bc%e6%89%a9%e5%b1%95)
  - [前言](#%e5%89%8d%e8%a8%80)
  - [内容](#%e5%86%85%e5%ae%b9)
    - [一、Number.isFinite(),Number.isNaN()](#%e4%b8%80numberisfinitenumberisnan)
    - [二、Number.parseInt(),Number.parseFloat()](#%e4%ba%8cnumberparseintnumberparsefloat)
    - [三、Number.isInteger()](#%e4%b8%89numberisinteger)
    - [四、Number.EPSILON](#%e5%9b%9bnumberepsilon)
    - [五、安全整数和 Number.isSafeInteger()](#%e4%ba%94%e5%ae%89%e5%85%a8%e6%95%b4%e6%95%b0%e5%92%8c-numberissafeinteger)
    - [六、Math 对象的扩展](#%e5%85%admath-%e5%af%b9%e8%b1%a1%e7%9a%84%e6%89%a9%e5%b1%95)
    - [七、指数运算符](#%e4%b8%83%e6%8c%87%e6%95%b0%e8%bf%90%e7%ae%97%e7%ac%a6)
    - [参考资料](#%e5%8f%82%e8%80%83%e8%b5%84%e6%96%99)
  - [联系作者](#%e8%81%94%e7%b3%bb%e4%bd%9c%e8%80%85)

### 一、Number.isFinite(),Number.isNaN()

`Number.isFinite()`用来检查一个数值是否为有限的(finite)，即不是`Infinity`。

```
Number.isFinite(15);        // true
Number.isFinite(0.8);        // true
Number.isFinite(NaN);        // false
Number.isFinite(Infinity);        // false
Number.isFinite(-Infinity);        // false
Number.isFinite('foo');        // false
Number.isFinite('15');        // false
Number.isFinite(true);        // false
```

如果参数类型不是数值，`Number.isFinite`一律返回`false`。

`Nubmer.isNaN()`用来检查一个值是否为`NaN`。

```
Number.isNaN(NaN)   // true
Number.isNaN(15)   // false
Number.isNaN('15')   // false
Number.isNaN(true)   // false
Number.isNaN(9/NaN)   // true
Number.isNaN('true'/0)   // true
Number.isNaN('true'/'true')   // true
```

如果参数类型不是`NaN`，`Number.isNaN`一律返回`false`。

### 二、Number.parseInt(),Number.parseFloat()

ES6 将全局方法`parseInt()`和`parseFloat()`，移植到`Number`对象上面，行为完全保持不变。

```
// ES5的写法
parseInt('12.34')       // 12
parseFloat('123.45#')   // 123.45

// ES6的写法
Number.parseInt('123.34')   // 12
Number.parseFloat('123.45# ')   //123.45
```

### 三、Number.isInteger()

`Number.isInteger()`用来判断一个数值是否为整数。

```
Number.isInteger(25)    // true
Number.isInteger(25.1)  // false
```

如果参数不是数值，`Number.isInteger`返回`false`。

```
Number.isInteger() // false
Number.isInteger(null) // false
Number.isInteger('15') // false
Number.isInteger(true) // false
```

### 四、Number.EPSILON

`Number.EPSILON`实际上是 JavaScript 能够表示的最小精度。误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了。

```
function withinErrorMargin(left,right){
    return Math.abs(left-right)<Number.EPSILON * Math.pow(2,2);
}

withinErrorMargin(0.1 + 0.2, 0.3) // true
```

### 五、安全整数和 Number.isSafeInteger()

`Number.MAX_SAFE_INTEGER`和`Number.MIN_SAFE_INTEGER`这两个常量，用来表示这个范围的上下限。

```
Number.isSafeInteger(9007199254740993)
// false
Number.isSafeInteger(990)
// true
```

### 六、Math 对象的扩展

- `Math.trunc`：方法用于去除一个数的小数部分，返回整数部分。
- `Math.sign`：方法用于判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。它会返回五种值。
  - 参数为正数，返回`+1`;
  - 参数为负数，返回`-1`;
  - 参数为 0，返回`0`;
  - 参数为-0，返回`-0`;
  - 其他值，返回`NaN`;
- `Math.cbrt`：方法用于计算一个数的立方根。
- `Math.clz32`：方法将参数转为 32 位无符号整数的形式，然后返回这个 32 位值里面有多少个前导 0.

### 七、指数运算符

ES2016 新增了一个指数运算符（\*\*）。

```
2 ** 2 // 4
2 ** 3 // 8
```

### 参考资料

- [ECMAScript 6 入门](http://es6.ruanyifeng.com/#docs/number)
- [《ECMAScript 6 入门》 第三版](https://yjhenan.gitbooks.io/-ecmascript-6/content/docs/number.html)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>