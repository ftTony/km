(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{218:function(a,n,s){"use strict";s.r(n);var t=s(2),e=Object(t.a)({},(function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"apply-bind-call"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apply-bind-call","aria-hidden":"true"}},[a._v("#")]),a._v(" apply&bind&call")]),a._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),s("p",[a._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),a._v(" "),s("h2",{attrs:{id:"内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%B8%80%E3%80%81call%E6%96%B9%E6%B3%95"}},[a._v("call方法")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%8C%E3%80%81apply%E6%96%B9%E6%B3%95"}},[a._v("apply方法")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B8%89%E3%80%81bind%E6%96%B9%E6%B3%95"}},[a._v("bind方法")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E5%9B%9B%E3%80%81callapplybind%E6%96%B9%E6%B3%95%E7%9A%84%E5%85%B1%E5%90%8C%E7%82%B9%E5%92%8C%E5%8C%BA%E5%88%AB"}},[a._v("call、apply、bind方法的共同点和区别")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%94%E3%80%81call%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0"}},[a._v("call 模拟实现")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E5%85%AD%E3%80%81apply%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0"}},[a._v("apply 模拟实现")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B8%83%E3%80%81bind%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0"}},[a._v("bind 模拟实现")])])]),a._v(" "),s("h3",{attrs:{id:"一、call方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、call方法","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、call方法")]),a._v(" "),s("p",[s("code",[a._v("call()")]),a._v(" 方法使用一个指定的 "),s("code",[a._v("this")]),a._v(" 值和单独给出的一个或多个参数来调用一个函数。")]),a._v(" "),s("p",[a._v("**语法：**call([thisObj[,arg1[, arg2[, [,.argN]]]]])")]),a._v(" "),s("p",[a._v("**定义：**调用一个对象的一个方法，以另一个对象替换当前对象。")]),a._v(" "),s("p",[a._v("**说明：**call 方法可以用来代替另一个对象调用一个方法。")]),a._v(" "),s("p",[a._v("thisObj的取值有以下4种情况：")]),a._v(" "),s("ol",[s("li",[a._v("不传，或者传null,undefined， 函数中的this指向window对象")]),a._v(" "),s("li",[a._v("传递另一个函数的函数名，函数中的this指向这个函数的引用")]),a._v(" "),s("li",[a._v("传递字符串、数值或布尔类型等基础类型，函数中的this指向其对应的包装对象，如 String、Number、Boolean")]),a._v(" "),s("li",[a._v("传递一个对象，函数中的this指向这个对象")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("function a(){   \n  console.log(this);   //输出函数a中的this对象\n}      \nfunction b(){}       \nvar c={name:\"call\"};    //定义对象c  \na.call();   //window\na.call(null);   //window\na.call(undefined);   //window\na.call(1);   //Number\na.call('');   //String\na.call(true);   //Boolean\na.call(b);   //function b(){}\na.call(c);   //Object\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("p",[a._v("如果你不理解上面的，没关系，我们再来看一个例子：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('function class1(){   \n  this.name=function(){   \n    console.log("我是class1内的方法");   \n  }   \n}   \nfunction class2(){ \n  class1.call(this); //此行代码执行后，当前的this指向了class1（也可以说class2继承了class1）   \n}   \nvar f=new class2();   \nf.name();   //调用的是class1内的方法，将class1的name方法交给class2使用\n\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("p",[a._v("常用例子：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("\nfunction eat(x,y){   \n  console.log(x+y);   \n}   \nfunction drink(x,y){   \n  console.log(x-y);   \n}   \neat.call(drink,3,2);\n输出：5\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("p",[a._v("这个例子中的意思就是用 eat 来替换 drink，eat.call(drink,3,2) == eat(3,2) ，所以运行结果为：console.log(5);")]),a._v(" "),s("p",[a._v("注意：js 中的函数其实是对象，函数名是对 Function 对象的引用。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('\nfunction Animal(){   \n  this.name="animal";   \n  this.showName=function(){   \n    console.log(this.name);   \n  }   \n}   \nfunction Dog(){   \n  this.name="dog";   \n}   \nvar animal=new Animal();   \nvar dog=new Dog();       \nanimal.showName.call(dog);\n输出：dog\n\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br")])]),s("p",[a._v("在上面的代码中，我们可以看到Dog里并没有showName方法，那为什么（this.name）的值是dog呢？")]),a._v(" "),s("p",[a._v("关键就在于最后一段代码（animal.showName.call(dog)），意思是把animal的方法放到dog上执行，也可以说，把animal 的showName()方法放到 dog上来执行，所以this.name 应该是 dog。")]),a._v(" "),s("p",[s("strong",[a._v("继承")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('function Animal(name){   \n  this.name=name;   \n  this.showName=function(){   \n    console.log(this.name);   \n  }   \n}   \nfunction Dog(name){   \n  Animal.call(this,name);   \n}   \nvar dog=new Dog("Crazy dog");   \ndog.showName();\n输出：Crazy dog\n\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("p",[a._v("Animal.call(this) 的意思就是使用 Animal对象代替this对象，那么Dog就能直接调用Animal的所有属性和方法。")]),a._v(" "),s("h3",{attrs:{id:"二、apply方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、apply方法","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、apply方法")]),a._v(" "),s("p",[s("code",[a._v("apply()")]),a._v("方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。")]),a._v(" "),s("p",[a._v("**语法：**apply([thisObj[,argArray]])")]),a._v(" "),s("p",[a._v("**定义：**应用某一对象的一个方法，用另一个对象替换当前对象。")]),a._v(" "),s("p",[a._v("**说明：**如果 argArray 不是一个有效的数组或者不是 arguments 对象，那么将导致一个 TypeError。\n如果没有提供 argArray 和 thisObj 任何一个参数，那么 Global 对象将被用作 thisObj， 并且无法被传递任何参数。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('function class1(args1,args2){       \n  this.name=function(){      \n   console.log(args,args);      \n  }     \n}     \nfunction class2(){    \n  var args1="1";\n  var args2="2";\n  class1.call(this,args1,args2);  \n  /*或*/\n  class1.apply(this,[args1,args2]);\n}\nvar c=new class2();   \nc.name();\n输出：1 2\n\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br")])]),s("p",[a._v("call 需要把参数按顺序传递进去，而 apply 则是把参数放在数组里。")]),a._v(" "),s("p",[a._v("既然两者功能一样，那该用哪个呢？")]),a._v(" "),s("p",[a._v("在JavaScript 中，某个函数的参数数量是不固定的，因此要说适用条件的话，当你的参数是明确知道数量时用"),s("code",[a._v("call()")]),a._v("而不确定的时候用"),s("code",[a._v("apply()")]),a._v("，然后把参数 push 进数组传递进去。当参数数量不确定时，函数内部也可以通过 arguments 这个数组来遍历所有的参数。")]),a._v(" "),s("h3",{attrs:{id:"三、bind方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、bind方法","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、bind方法")]),a._v(" "),s("p",[s("code",[a._v("bind()")]),a._v("是在EcmaScript5中扩展的方法（IE6,7,8不支持）,"),s("code",[a._v("bind()")]),a._v("方法与 "),s("code",[a._v("apply")]),a._v(" 和 "),s("code",[a._v("call")]),a._v(" 很相似，也是可以改变函数体内 this 的指向。")]),a._v(" "),s("p",[s("strong",[a._v("MDN的解释是：")]),a._v(" "),s("code",[a._v("bind()")]),a._v("方法会创建一个新函数，称为绑定函数，当调用这个绑定函数时，绑定函数会以创建它时传入 "),s("code",[a._v("bind()")]),a._v("方法的第一个参数作为 this，传入 "),s("code",[a._v("bind()")]),a._v(" 方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。")]),a._v(" "),s("p",[a._v("注意：bind方法的返回值是函数")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("var bar=function(){   \n  console.log(this.x);   \n}\nvar foo={ \n     x:3   \n}   \nbar();  \nbar.bind(foo)();\n /*或*/\nvar func=bar.bind(foo);   \nfunc();\n输出：\nundefined\n3\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br")])]),s("h3",{attrs:{id:"四、call、apply、bind方法的共同点和区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、call、apply、bind方法的共同点和区别","aria-hidden":"true"}},[a._v("#")]),a._v(" 四、call、apply、bind方法的共同点和区别")]),a._v(" "),s("ol",[s("li",[s("code",[a._v("apply、call、bind")]),a._v("三都是用来改变函数的this对象的指向的；")]),a._v(" "),s("li",[s("code",[a._v("apply、call、bind")]),a._v("三者第一个参数都是this要指向的对象，也就是想指定的上下文（函数的每次调用都会拥有一个特殊值——本次调用的上下文(context)——这就是this关键字的值。）；")]),a._v(" "),s("li",[s("code",[a._v("apply 、 call 、bind")]),a._v(" 三者都可以利用后续参数传参；")]),a._v(" "),s("li",[a._v("bind 是返回对应函数，便于稍后调用，apply 、call 则是立即调用 。")])]),a._v(" "),s("h3",{attrs:{id:"一、call-模拟实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、call-模拟实现","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、call 模拟实现")]),a._v(" "),s("blockquote",[s("p",[a._v("call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。")])]),a._v(" "),s("p",[a._v("从定义上看 call 有以下两个作用：")]),a._v(" "),s("ol",[s("li",[a._v("call 改变了 this 的指向，指向到 foo")]),a._v(" "),s("li",[a._v("bar 函数执行了")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("\nFunction.prototype.call2=function(context){\n    var context= context || window;\n    context.fn=this;\n\n    var args=[];\n    for(var i=1,len=arguments.length;i<len;i++){\n        args.push('arguments['+i+']');\n    }\n\n    var result=eval('context.fn('+args+')');\n\n    delete context.fn;\n    return result;\n}\n\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("h3",{attrs:{id:"二、apply-模拟实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、apply-模拟实现","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、apply 模拟实现")]),a._v(" "),s("p",[a._v("apply 功能跟 call 类似，代码实现如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    Function.prototype.apply=function(context,arr){\n        var context=Object(context) || window;\n\n        var result;\n        if(!arr){\n            result=context.fn();\n        }else{\n            var args=[];\n            for(var i=0,len=arr.length;i<len;i++){\n                args.push('arr['+i+')');\n            }\n            result=eval('context.fn('+args+')')\n        }\n\n        delete context.fn\n        return result;\n    }\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("h3",{attrs:{id:"三、bind-模拟实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、bind-模拟实现","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、bind 模拟实现")]),a._v(" "),s("blockquote",[s("p",[a._v("bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )")])]),a._v(" "),s("p",[a._v("bind 函数的三个特点：")]),a._v(" "),s("ol",[s("li",[a._v("返回一个函数")]),a._v(" "),s("li",[a._v("可以传入参数")]),a._v(" "),s("li",[a._v("一个绑定函数也能使用 new 操作符创建对象，这种行为就像把原函数当成构造器，提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。")])]),a._v(" "),s("p",[a._v("模拟实现如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Function.prototype._bind=function(context){\n    var func=this;\n    var params=[].slice.call(arguments,1);\n    var Fnop=function(){};\n    var fbound=function(){\n        params=params.concat([].slice.call(arguments));\n        return  func.apply(this instanceof Fnop? this:context,params);\n    };\n    Fnop.prototype=this.prototype;\n    fbound.prototype=new Fnop();\n    return fbound;\n};\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("h3",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://ghmagical.com/article/page/id/UPLfoGI9vJ91",target:"_blank",rel:"noopener noreferrer"}},[a._v("JS中的call、apply、bind方法"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://qianlongo.github.io/2016/04/26/js%E4%B8%ADcall%E3%80%81apply%E3%80%81bind%E9%82%A3%E4%BA%9B%E4%BA%8B/#more",target:"_blank",rel:"noopener noreferrer"}},[a._v("js中call、apply、bind那些事"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/59019f9fa22b9d0065c51ef8",target:"_blank",rel:"noopener noreferrer"}},[a._v("巧妙理解 call 和 apply"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/12",target:"_blank",rel:"noopener noreferrer"}},[a._v("JavaScript 深入之 bind 的模拟实现"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/11",target:"_blank",rel:"noopener noreferrer"}},[a._v("JavaScript 深入之 call 和 apply 的模拟实现"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"联系作者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),s("div",{attrs:{align:"center"}},[s("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),s("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);n.default=e.exports}}]);