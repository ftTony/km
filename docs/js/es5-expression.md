# 表达式与运算符

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [原始表达式](#一、原始表达式)
- [对象和数组的初始化表达式](#二、对象和数组的初始化表达式)
- [函数定义表达式](#三、函数定义表达式)
- [属性访问表达式](#四、属性访问表达式)
- [调用表达式](#五、调用表达式)
- [对象创建表达式](#六、对象创建表达式)
- [一元操作符](#七、一元操作符)
- [算术运算符](#八、算术运算符)
- [关系操作符](#九、关系操作符)
- [逻辑运算符](#十、逻辑运算符)
- [赋值运算符](#十一、赋值运算符)
- [三元运算符](#十二、三元运算符)
- [位运算符](#十三、位运算符)
- [运算优先级](#十四、运算优先级)

### 一、原始表达式

javascript中的原始表达式包含*常量*或*直接量*、*关键字*和*变量*。

*直接量*

```
1.23  // 数字直接量
"hello" // 字符串直接量
/pattern/   // 正则表达式直接量

```

*关键字*

```
true    //  返回一个布尔值：真
false   // 返回一个布尔值：假
null    // 返回一个值：空
this    // 返回“当前”对象

```

*变量*

```
i   // 返回变量i的值
sum // 返回sum的值
undefined   // undefined是全局变量，和null不同，它不是一个关键字

```

### 二、对象和数组的初始化表达式

*数组*

```

[]  //一个空数组：[]内留空即表示该数组没有任何元素
[1+2,3+4]   // 拥有两个元素的数组，第一个是3，第二个是7

```

*对象*

```
var p={x:2.3,y:-2.3};
```

### 三、函数定义表达式

关于函数，后续有更详细的文章介绍

```
var square=function(x){return x*x;}
```

### 四、属性访问表达式

属性访问表达式运算得到一个对象属性或一个数组元素的值。

```
var o={x:1,y:{z:3}};     // 一个示例对象
var o={x:1,y:{z:3}};    // 一个包含这个对象的示例数组
o.x     // =>1:表达式o的x属性
o.y.z   // =>3:表达式o.y的z属性
o['x']  // =>1:对象o的x属性
a[1]    // =>4:表达式a中索引为1的元素
a[2]['1']  // =>6:表达式a[2]中索引为1的元素
a[0].x      // =>1:表达式a[0]的x属性

```

### 五、调用表达式

javascript中的调用表达式是一种调用函数或方法的语法表示。函数表达式后跟随一对圆括号，括号内是一个以逗号隔开的参数列表。

```
f(0)       // f是一个函数表达式，0是一个参数表达式
math.max(x,y,z)     //math.max是一个函数；x,y和z是参数
a.sort()    // a.sort是一个函数，它没有参数
```

### 六、对象创建表达式

对象创建表达式创建不念旧恶对象并调用一个函数初始化新对象的属性。

```
new Object()
new Object(2,3)

```

### 七、一元操作符

只能操作一个值的操作叫做一元操作符。

#### 7.1 递增和递减操作符

递增和递减，各有两个版本：前置型和后置型。

```
    var n = 123;
    n++  //把变量累加1，相当于n = n + 1
    ++n  //把变量累加1，相当于n = n + 1
    n--  //把变量累减1，相当于n = n - 1
    --n  //把变量累减1，相当于n = n - 1

```

递增和递减操作符遵循下列规则：

1. 在应用于一个包含有效数字字符的字符串时，先将其为数字值，再执行加减1的操作。字符串变量变成数值变量。
2. 在应用一个不包含有效数字字符的符串时，将变量的值设置为NaN。字符串变量变成数值变量。
3. 在应用于布尔值false时，先将其转换为0再执行加减1的操作。布尔值变量变成数值变量。
4. 在应用于布尔值true时，先将其转换为1再执行加减1的操作。布尔值变量变成数值变量。
5. 在应用于浮点数值时，执行加减1的操作。
6. 在应用于对象时，先调用对象的valueof()方法以取得一个可供操作的值。对象变量变成数值变量。

#### 7.2 一元加和减操作符

主要用于类型转换

```
var s1="01";
var s2="1.1";
var s3="z";
var b=false;
var f=1.1;
var o={
    valueOf:function(){
        return -1;
    }
}

s1=+s1;     // 值变成数值1
s2=+s2;     // 值变成数值1.1
s3=+s3;     // 值变成NaN
b=+b;       // 值变成数值0
f=+f;       // 值未变，仍然是1.1
o=+o;       // 值变成数值-1

```

### 八、算术运算符

#### 8.1 乘法

乘法操作符由一个星号（*）表示，用于计算两个数值的乘积。

```
    var result=34*56;
```
乘法操作符遵循下列特殊的规则：

1. 如果操作数都是数值，执行常规乘法计算，即两个正数或两个负数相乘的结果还是正数，而如果只有一个操作数有符号，那么结果就是负数。如果乘积超过了ECMAScript数值的表示范围，则返回Infinity或-Infinity;
2. 如果有一个操作数是NaN，则结果是NaN;
3. 如果是Infinity与0相乘，则结果是NaN;
4. 如果是Infinity与非0数值相乘，则结果是Infinity或-Infinity，取决于有符号操作的符号
5. 如果Infinity与Infinity相乘，则结果是Infinity；
6. 如果有一个操作数不是数值，则在后台调用Number()将其转换为数值，然后再应用上面的规则。

#### 8.2 加法操作符

加法操作符的用法如下所示：

```
var result=1+2;

```

如果两个操作符都是数值，执行常规的加法计算，然后根据下列规则返回结果：

1. 如果有一个操作数是NaN,则结果是NaN;
2. 如果是Infinity加Infinity，则结果是Infinity;
3. 如果是-Infinity加-Infinity，则结果是-Infinity;
4. 如果是Infinity加-Infinity，则结果是NaN;
5. 如果是+0加+0，则结果是+0;
6. 如果是-0加-0，则结果是-0;
7. 如果是+0加-0，则结果是+0;
8. 如果两个操作数是字符串，则将第二个操作数与第一个操作数拼接起来；
9. 如果只有一个操作数是字符串，则将另一个操作数转换为字符串，然后再将两个字符串拼接起来

#### 8.3 减法操作符

减法操作符的用法如下所示：

```
var result=2-1;

```

减法操作符遵循下列特殊的规则：

1. 如果两个操作符都是数值，则执行常规的自述减法操作并返回结果；
2. 如果有一个操作数是NaN,则结果是NaN;
3. 如果是Infinity减Infinity，则结果是NaN;
4. 如果是-Infinity减-Infinity，则结果是NaN;
5. 如果是Infinity减-Infinity，则结果是Infinity;
6. 如果是+0减+0，则结果是+0;
7. 如果是-0减-0，则结果是+0;
8. 如果是+0加-0，则结果是-0;
9. 如果有一个操作数是字符串，布尔值、null或undefined，则先在后台调用Number()函数将其换为数值，然后再根据前面的规则执行减法计算。如果转换的结果是NaN，则减法的结果就是NaN;
10. 如果有一个操作数是对象，则调用对象的valueOf()方法以取得表示该对象的数值。如果得到的值是NaN，则减法的结果就是NaN。如果对象没有valueOf()方法，则调用其toString()方法并将得到的字符串转换为数值。

#### 8.4 除法操作符

除法操作符由一个斜线符号（/）表示，执行第二个操作数除第一个操作数的计算。

```

var result=66/11;

```

除法操作符遵循下列特殊的规则：

1. 如果操作数都是数值，执行常规除法计算，即两个正数或两个负数相除的结果还是正数，而如果只有一个操作数有符号，那么结果就是负数。如果乘积超过了ECMAScript数值的表示范围，则返回Infinity或-Infinity;
2. 如果有一个操作数是NaN，则结果是NaN;
3. 如果是Infinity被Infinity除，则结果是NaN;
4. 如果是0被0除，则结果是NaN;
5. 如果是非0的有限数被0除，则结果是Infinity或-Infinity，取决于有符号操作数的符号；
6. 如果是Infinity被任何非0数值除，则结果是Infinity或-Infinity，取决于有符号操作数的符号；
7. 如果有一个操作数不是数值，则在后台调用Number()将其转换为数值，然后再应用上面的规则

#### 8.5 求模操作符

求模操作符由一个百分号（%）表示

```

var result=26%5;    // 等于1

```

求模操作符遵循下列特殊的规则：

1. 如果操作数都是数值，执行常规的除法计算，返回除得的余数；
2. 如果被除数是无穷大值而除数是有限大的数值，则结果是NaN;
3. 如果被除数是有限大的数值而除数是0，则结果NaN;
4. 如果是Infinity被Infinity除，则结果是NaN;
5. 如果被除数是有限大的数值，而除数是无穷大的数值，则结果是被除数；
6. 如果被除数是0，则结果是0；
7. 如果有一个操作数不是数值，则在后台调用Number()将期转换为数值，然后再应用上面的规则；

### 九、关系操作符

用于比较的运算符称作为关系运算符：小于 `<`、大于 `>`、小于等于 `<=`、大于等于 `>=`、相等 `==`、不等 `!=`、全等(恒等) `===`、不全等(不恒等) `!==`

关系操作符遵循下列特殊的规则：

1. 如果两个操作数都是数值，则执行数值比较。
2. 如果两个操作数都是字符串，则比较两个字符串对应的字符编码值。
3. 如果一个操作数是数值，则将另一个操作数转换为一个数值，然后执行数值比较。
4. 如果一个操作数是对象，则调用这个对象的valueOf()方法，用得到的结果按照前面的规则执行比较。如果没有valueOf()方法，则调用toString()方法，并用得到的结果根据前面的规则执行比较。
5. 如果一个操作数是布尔值，则先将其转换为数值，然后再执行比较。

在相等和不等的比较上，如果操作数是非数值，则遵循一下规则：

1. 一个操作数是布尔值，则比较之前将其转换为数值，false 转成 0，true 转成 1；
2. 一个操作数是字符串，则比较之前将其转成为数值再比较；
3. 一个操作数是对象，则先调用 valueOf() 或 toString() 方法后再和返回值比较；
不需要任何转换的情况下，null 和 undefined 是相等的；
4. 一个操作数是 NaN，则 == 返回 false，!= 返回 true；并且 NaN 和自身不等；
两个操作数都是对象，则比较他们是否是同一个对象，如果都指向同一个对象，则返回 true，否则返回 false；
5. 在全等和全不等的判断上，只有值和类型都相等，才返回 true，否则返回 false。
6. 如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都是指向同一个对象，则相等操作符返回true；否则，返回false


### 十、逻辑运算符

逻辑运算符通常用于布尔值的操作，一般和关系运算符配合使用，有三个逻辑运算符：

1. 逻辑与(AND):&&
2. 逻辑或(AND):||
3. 逻辑非(NOT):!

*逻辑非操作符*遵循下列规则：

- 如果操作数是一个对象，返回false;
- 如果操作数是一空子字符串，返回true;
- 如果操作数是一个非空字符串，返回false;
- 如果操作数是数值0，返回true;
- 如果操作数是任意非0数值（包括Infinity），返回false;
- 如果操作数是null，返回true;
- 如果操作数是NaN，返回true;
- 如果操作数是undefined，返回true;

```
var tony = !(123 > 12); //false
var tony = !{}; //false
var tony = !''; //true
var tony = !'xzavier'; //false
var tony = !0; //true
var tony = !123; //false
var tony = !null; //true
var tony = !NaN; //true
var tony = !undefined; //true

```

*逻辑与操作符*有一个操作数不是布尔值的情况下，遵循下列规则：

- 如果第一个操作数是对象，则返回第二个操作数；
- 如果第二个操作数是对象，则只有在第一个操作数返回 true的情况下才会返回该对象；
- 如果两个操作数都对象，则返回第二个操作数；
- 如果有一个操作数是NaN，则返回NaN;
- 如果有一个操作数是 null，则返回 null；
- 如果有一个操作数是 undefined，则返回 undefined。

*逻辑与*真值表如下：

| 第一操作数 | 第二操作数 | 结果  |
| ---------- | ---------- | ----- |
| true       | true       | true  |
| true       | false      | false |
| false      | true       | false |
| false      | false      | false |

*逻辑或操作符*遵循下列规则：

- 如果第一个操作数是对象，则返回第一个操作数；
- 如果第一个操作数的求值为false，则返回第二个操作数；
- 如果两个操作数都对象，则返回第一个操作数；
- 如果有两个操作数是NaN，则返回NaN;
- 有两个操作数是 null，则返回 null；
- 有两个操作数是 undefined，则返回 undefined。

*逻辑或*真值表如下：

| 第一操作数 | 第二操作数 | 结果  |
| ---------- | ---------- | ----- |
| true       | true       | true  |
| true       | false      | true  |
| false      | true       | true  |
| false      | false      | false |

### 十一、赋值运算符

简单的赋值操作符由等于号（=）表示，其作用就是把右侧的值赋给右侧的变量，例子如下：

```
var num=10;

```

如果在等于号（=）前面再添加乘性操作符、加性操作符或位操作符，就可以完成复合赋值操作。例子如下：

```

var num=10;
num+=10;

```

更多赋值操作符如下：

1. 乘/赋值（*=）；
2. 除/赋值（/=）；
3. 模/赋值（%=）；
4. 加/赋值（+=）；
5. 减/赋值（-=）；
6. 左移/赋值（<<=）；
7. 有符号右移/赋值（>>=）；

### 十二、三元运算符

例子如下：

```
var iable = boolean_expression ? true_value : false_value
```
这行代码的含义就是基于对boolean_expression求值的结果，决定给变量iable赋什么值。如果求值结果为true,则给变量iable赋true_value值；如果求值结果为false，则给变量iable赋false_value值

### 十三、位运算符

位运算符一共七个，分别如下：

1. 按位非NOT（~）
2. 按位与AND（&）
3. 按位异或XOR（^）
4. 左移（<<）
5. 有符号右移（>>）
6. 无符号右移（>>>）

*按位非NOT*
*按位与AND*
*按位异或XOR*
*左移*
*有符号右移*
*无符号右移*

### 十四、运算优先级

<table class="fullwidth-table">
 <tbody>
  <tr>
   <th>优先级</th>
   <th>运算类型</th>
   <th>关联性</th>
   <th>运算符</th>
  </tr>
  <tr>
   <td>20</td>
   <td><code>圆括号</code></td>
   <td>n/a</td>
   <td><code>( … )</code></td>
  </tr>
  <tr>
   <td rowspan="4">19</td>
   <td><code>成员访问</code></td>
   <td>从左到右</td>
   <td><code>… . …</code></td>
  </tr>
  <tr>
   <td><code>需计算的成员访问</code></td>
   <td>从左到右</td>
   <td><code>… [ … ]</code></td>
  </tr>
  <tr>
   <td><code>new</code> (带参数列表)</td>
   <td>n/a</td>
   <td><code>new … ( … )</code></td>
  </tr>
  <tr>
   <td>函数调用</td>
   <td>从左到右</td>
   <td><code>… (&nbsp;<var>…&nbsp;</var>)</code></td>
  </tr>
  <tr>
   <td rowspan="1">18</td>
   <td>new&nbsp;(无参数列表)</td>
   <td>从右到左</td>
   <td><code>new …</code></td>
  </tr>
  <tr>
   <td rowspan="2">17</td>
   <td>后置递增(运算符在后)</td>
   <td colspan="1" rowspan="2">n/a<br>
    &nbsp;</td>
   <td><code>… ++</code></td>
  </tr>
  <tr>
   <td>后置递减(运算符在后)</td>
   <td><code>… --</code></td>
  </tr>
  <tr>
   <td colspan="1" rowspan="10">16</td>
   <td>逻辑非</td>
   <td colspan="1" rowspan="10">从右到左</td>
   <td><code>! …</code></td>
  </tr>
  <tr>
   <td>按位非</td>
   <td><code>~ …</code></td>
  </tr>
  <tr>
   <td>一元加法</td>
   <td><code>+ …</code></td>
  </tr>
  <tr>
   <td>一元减法</td>
   <td><code>- …</code></td>
  </tr>
  <tr>
   <td>前置递增</td>
   <td><code>++ …</code></td>
  </tr>
  <tr>
   <td>前置递减</td>
   <td><code>-- …</code></td>
  </tr>
  <tr>
   <td>typeof</td>
   <td><code>typeof …</code></td>
  </tr>
  <tr>
   <td>void</td>
   <td><code>void …</code></td>
  </tr>
  <tr>
   <td>delete</td>
   <td><code>delete …</code></td>
  </tr>
  <tr>
   <td>await</td>
   <td><code>await …</code></td>
  </tr>
  <tr>
   <td>15</td>
   <td>幂</td>
   <td>从右到左</td>
   <td><code>…&nbsp;**&nbsp;…</code></td>
  </tr>
  <tr>
   <td rowspan="3">14</td>
   <td>乘法</td>
   <td colspan="1" rowspan="3">从左到右<br>
    &nbsp;</td>
   <td><code>… *&nbsp;…</code></td>
  </tr>
  <tr>
   <td>除法</td>
   <td><code>… /&nbsp;…</code></td>
  </tr>
  <tr>
   <td>取模</td>
   <td><code>… %&nbsp;…</code></td>
  </tr>
  <tr>
   <td rowspan="2">13</td>
   <td>加法</td>
   <td colspan="1" rowspan="2">从左到右<br>
    &nbsp;</td>
   <td><code>… +&nbsp;…</code></td>
  </tr>
  <tr>
   <td>减法</td>
   <td><code>… -&nbsp;…</code></td>
  </tr>
  <tr>
   <td rowspan="3">12</td>
   <td>按位左移</td>
   <td colspan="1" rowspan="3">从左到右</td>
   <td><code>… &lt;&lt;&nbsp;…</code></td>
  </tr>
  <tr>
   <td>按位右移</td>
   <td><code>… &gt;&gt;&nbsp;…</code></td>
  </tr>
  <tr>
   <td>无符号右移</td>
   <td><code>… &gt;&gt;&gt;&nbsp;…</code></td>
  </tr>
  <tr>
   <td rowspan="6">11</td>
   <td>小于</td>
   <td colspan="1" rowspan="6">从左到右</td>
   <td><code>… &lt;&nbsp;…</code></td>
  </tr>
  <tr>
   <td>小于等于</td>
   <td><code>… &lt;=&nbsp;…</code></td>
  </tr>
  <tr>
   <td>大于</td>
   <td><code>… &gt;&nbsp;…</code></td>
  </tr>
  <tr>
   <td>大于等于</td>
   <td><code>… &gt;=&nbsp;…</code></td>
  </tr>
  <tr>
   <td>in</td>
   <td><code>… in&nbsp;…</code></td>
  </tr>
  <tr>
   <td>instanceof</td>
   <td><code>… instanceof&nbsp;…</code></td>
  </tr>
  <tr>
   <td rowspan="4">10</td>
   <td>等号</td>
   <td colspan="1" rowspan="4">从左到右<br>
    &nbsp;</td>
   <td><code>… ==&nbsp;…</code></td>
  </tr>
  <tr>
   <td>非等号</td>
   <td><code>… !=&nbsp;…</code></td>
  </tr>
  <tr>
   <td>全等号</td>
   <td><code>… ===&nbsp;…</code></td>
  </tr>
  <tr>
   <td>非全等号</td>
   <td><code>… !==&nbsp;…</code></td>
  </tr>
  <tr>
   <td>9</td>
   <td>按位与</td>
   <td>从左到右</td>
   <td><code>… &amp;&nbsp;…</code></td>
  </tr>
  <tr>
   <td>8</td>
   <td>按位异或</td>
   <td>从左到右</td>
   <td><code>… ^&nbsp;…</code></td>
  </tr>
  <tr>
   <td>7</td>
   <td>按位或</td>
   <td>从左到右</td>
   <td><code>… |&nbsp;…</code></td>
  </tr>
  <tr>
   <td>6</td>
   <td>逻辑与</td>
   <td>从左到右</td>
   <td><code>… &amp;&amp;&nbsp;…</code></td>
  </tr>
  <tr>
   <td>5</td>
   <td>逻辑或</td>
   <td>从左到右</td>
   <td><code>… ||&nbsp;…</code></td>
  </tr>
  <tr>
   <td>4</td>
   <td>条件运算符</td>
   <td>从右到左</td>
   <td><code>… ? … : …</code></td>
  </tr>
  <tr>
   <td rowspan="12">3</td>
   <td rowspan="12">赋值</td>
   <td rowspan="12">从右到左</td>
   <td><code>… =&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… +=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… -=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… *=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… /=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… %=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… &lt;&lt;=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… &gt;&gt;=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… &gt;&gt;&gt;=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… &amp;=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… ^=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… |=&nbsp;…</code></td>
  </tr>
  <tr>
   <td colspan="1" rowspan="2">2</td>
   <td>yield</td>
   <td colspan="1" rowspan="2">从右到左</td>
   <td><code>yield&nbsp;…</code></td>
  </tr>
  <tr>
   <td>yield*</td>
   <td><code>yield*&nbsp;…</code></td>
  </tr>
  <tr>
   <td>1</td>
   <td>展开运算符</td>
   <td>n/a</td>
   <td><code>...</code>&nbsp;…</td>
  </tr>
  <tr>
   <td>0</td>
   <td>逗号</td>
   <td>从左到右</td>
   <td><code>… ,&nbsp;…</code></td>
  </tr>
 </tbody>
</table>

### 参考资料

- 《权威指南第六版》
- 《高级编程第三版》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>