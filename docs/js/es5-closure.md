# 闭包

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [闭包定义](#一闭包定义)
- [闭包特点](#二闭包特点)
- [闭包优点及缺点](#三闭包优点及缺点)
- [闭包的应用](#四闭包的应用)

### 一、闭包定义

**闭包**是指有权访问另一个函数作用域中的变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量（高程第3版）

MDN 对闭包的定义为：**闭包是指那些能够访问自由变量的函数。**

其中**自由变量**，指在函数中使用的，但既不是函数参数arguments也不是函数的局部变量的变量，其实就是另外一个函数作用域中的变量。

### 二、闭包特点

2.1 定义在一个函数内部的函数。
2.2 函数内部可以引用函数外部的参数和变量。
2.3 作为一个函数变量的一个引用，当函数返回时，其处于激活状态。
3.4 当一个函数返回时，一个闭包就是一个没有释放资源的栈区。函数的参数和变量不会被垃圾回收机制回收。

### 三、闭包优点及缺点

**优点**

3.1 希望一个变量长期驻扎在内存中
3.2 避免全局变量的污染
3.3 私有成员的存在

**缺点**

闭包的缺点就是常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。

### 四、闭包的应用

#### 4.1 维护函数内的变量安全,避免全局变量的污染。

函数a中i只有函数b才能访问，而无法通过其他途径访问到。

```
function xzavier(){
    var i = 1;
    i++;
    console.log(i);
}
xzavier();   //2 
console.log(x);   // x is not defined                 
xzavier();   //2
```

#### 4.2 维持一个变量不被回收。

由于闭包，函数a中i的一直存在于内存中，因此每次执行c()，都会给i自加1，且i不被垃圾回收机制回收。

```
    function a() {  
        var i = 1;  
        function b() { 
            console.log(i++); 
        }  
        return b; 
    }
    var c = a(); 
    c();  //1
    c();  //2
    c();  //3
```

#### 4.3 通过第1点的特性设计私有的方法和属性

```
var xzavier = (function(){
    var i = 1;
    var s = 'xzavier';
    function f(){
        i++;
        console.log(i);
    }
    return {
        i:i,
        s:s,             
        f:f
    }
})();
xzavier.s;     //'xzavier'
xzavier.s;     //1
xzavier.f()    //2
```

#### 4.4 操作DOM获取目标元素

方法2即使用了闭包的方法，当然操作DOM还是有别的方法的，比如事件委托就比较好用。

```
ul id="test">
    <li>first</li>
    <li>second</li>
    <li>third</li>
</ul>
// 方法一：this方法
var lis = document.getElementById('test').getElementsByTagName('li');
for(var i = 0;i < 3;i++){
    lis[i].index = i;
    lis[i].onclick = function(){
        console.log(this.index);
    };
} 
// 方法二：闭包方法
var lis = document.getElementById('test').getElementsByTagName('li');
for(var i = 0;i < 3;i++){
    lis[i].index = i;
    lis[i].onclick = (function(val){
        return function() {
            console.log(val);
        }
    })(i);
}
// 方法三 事件委托方法
var oUl = document.getElementById('test');
oUl.addEventListener('click',function(e){
    var lis = e.target;
    console.log(lis); 
});
```
#### 4.5 封装模块

```
var Xzavier = function(){       
    var name = "xzavier";       
    return {    
       getName : function(){    
           return name;    
       },    
       setName : function(newName){    
           name = newName;    
       }    
    }    
}();    

console.log(person.name); //undefined，变量作用域为函数内部，外部无法访问    
console.log(person.getName()); // "xzavier" 
person.setName("xz");    
console.log(person.getName());  //"xz"
```

#### 4.6 实现类和继承

```
function Xzavier(){       
    var name = "xzavier";       
    return {    
       getName : function(){    
           return name;    
       },    
       setName : function(newName){    
           name = newName;    
       }    
    }    
}

var xz = new Xzavier();  //Xzavier就是一个类，可以实例化
console.log(xz.getName());  // "xzavier"  

```

### 参考资料

- [详解js闭包](https://segmentfault.com/a/1190000006855822)
- [动画：什么是闭包？](https://mp.weixin.qq.com/s/Un057KVwWgJxEcUHSVZKbw)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>