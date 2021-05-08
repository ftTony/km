(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{378:function(s,a,n){"use strict";n.r(a);var t=n(4),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"class-基本用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#class-基本用法","aria-hidden":"true"}},[s._v("#")]),s._v(" Class 基本用法")]),s._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("ES6 的类，完全可以看作构造函数的另一种写法。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Ponit{\n   constructor(){\n       // ...\n   }\n\n   toString(){\n       // ...\n   }\n\n   toValue(){\n\n   }\n}\n\n// 等同于\nPoint.prototype = {\n  constructor() {},\n  toString() {},\n  toValue() {},\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h2",{attrs:{id:"内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E7%AE%80%E4%BB%8B"}},[s._v("简介")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95"}},[s._v("静态方法")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E5%AE%9E%E4%BE%8B%E5%B1%9E%E6%80%A7%E7%9A%84%E6%96%B0%E5%86%99%E6%B3%95"}},[s._v("实例属性的新写法")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E9%9D%99%E6%80%81%E5%B1%9E%E6%80%A7"}},[s._v("静态属性")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%94%E3%80%81%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95%E5%92%8C%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7"}},[s._v("私有方法和私有属性")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E5%85%AD%E3%80%81newtarget%E5%B1%9E%E6%80%A7"}},[s._v("new.target属性")])])]),s._v(" "),n("h3",{attrs:{id:"一、简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、简介","aria-hidden":"true"}},[s._v("#")]),s._v(" 一、简介")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#11-constructor%E6%96%B9%E6%B3%95"}},[s._v("constructor方法")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#12-%E7%B1%BB%E7%9A%84%E5%AE%9E%E4%BE%8B"}},[s._v("类的实例")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#13-%E5%8F%96%E5%80%BC%E5%87%BD%E6%95%B0%E5%92%8C%E5%AD%98%E5%80%BC%E5%87%BD%E6%95%B0"}},[s._v("取值函数和存值函数")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#14-%E5%B1%9E%E6%80%A7%E8%A1%A8%E8%BE%BE%E5%BC%8F"}},[s._v("属性表达式")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#15-class%E8%A1%A8%E8%BE%BE%E5%BC%8F"}},[s._v("Class表达式")])])]),s._v(" "),n("h4",{attrs:{id:"_1-1-constructor方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-constructor方法","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.1 constructor方法")]),s._v(" "),n("p",[n("code",[s._v("constructor")]),s._v("方法是类的默认方法，通过"),n("code",[s._v("new")]),s._v("命令生成对象实例时，自动调用该方法。一个类必须有"),n("code",[s._v("constructor")]),s._v("方法，如果没有显式定义，一个空的"),n("code",[s._v("constructor")]),s._v("方法会被默认添加。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Point{\n\n}\n\n// 等同于\nclass Point[\n    construct(){}\n]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("类必须使用"),n("code",[s._v("new")]),s._v("调用，否则会报错。")]),s._v(" "),n("h4",{attrs:{id:"_1-2-类的实例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-类的实例","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.2 类的实例")]),s._v(" "),n("p",[s._v("生成类的实例的写法，与 ES5 完全一样，也是使用"),n("code",[s._v("new")]),s._v("命令。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Point{\n    // ...\n}\n\nvar point = new Point(2,3);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h4",{attrs:{id:"_1-3-取值函数和存值函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-取值函数和存值函数","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.3 取值函数和存值函数")]),s._v(" "),n("p",[s._v("与ES5一样，在“类”的内部可以使用"),n("code",[s._v("get")]),s._v("和"),n("code",[s._v("set")]),s._v("关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class MyClass{\n    constructor(){\n        // ...\n    }\n    get prop(){\n        return 'getter';\n    }\n    set prop(value){\n        console.log('setter'+value);\n    }\n}\n\nlet inst = new MyClass();\n\ninst.prop = 123;\n// setter:123\n\ninst.prop\n// 'getter'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h4",{attrs:{id:"_1-4-属性表达式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-属性表达式","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.4 属性表达式")]),s._v(" "),n("p",[s._v("类的属性名，可以采用表达式。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let methodName = 'getArea';\n\nclass Square{\n    constructor(length){\n        //  ...\n    }\n    [methodName](){\n        // ...\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h4",{attrs:{id:"_1-5-class表达式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-class表达式","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.5 Class表达式")]),s._v(" "),n("p",[s._v("与函数一样，类也可以使用表达式的形式定义。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const MyClass = class Me{\n    getClassName(){\n        return Me.name;\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("需要注意的是，这个类的名字是"),n("code",[s._v("MyClass")]),s._v("而不是"),n("code",[s._v("Me")]),s._v("，"),n("code",[s._v("Me")]),s._v("只在Class的内部代码可用，指代当前类。")]),s._v(" "),n("p",[n("strong",[s._v("注意点")])]),s._v(" "),n("ul",[n("li",[s._v("严格模式")]),s._v(" "),n("li",[s._v("不存在提升")]),s._v(" "),n("li",[s._v("name属性")]),s._v(" "),n("li",[s._v("Generator方法")]),s._v(" "),n("li",[s._v("this的指向")])]),s._v(" "),n("h3",{attrs:{id:"二、静态方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、静态方法","aria-hidden":"true"}},[s._v("#")]),s._v(" 二、静态方法")]),s._v(" "),n("p",[s._v("类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Foo{\n    static classMethod(){\n        return 'hello';\n    }\n}\n\nFoo.classMethod()   // hello\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"三、实例属性的新写法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、实例属性的新写法","aria-hidden":"true"}},[s._v("#")]),s._v(" 三、实例属性的新写法")]),s._v(" "),n("p",[s._v("实例属性除了定义在"),n("code",[s._v("constructor()")]),s._v("方法里面的"),n("code",[s._v("this")]),s._v("上面，也可以定义在类的最顶层。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class IncreasingCounter {\n  constructor() {\n    this._count = 0;\n  }\n  get value() {\n    console.log('Getting the current value!');\n    return this._count;\n  }\n  increment() {\n    this._count++;\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("另一种写法是，这个属性也可以定义在类的最顶层，其他都不变。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class IncreasingCounter{\n    _count = 0;\n    get value(){\n        console.log('Getting the current value!');\n        return this._count;\n    }\n    increment(){\n        this._count++;\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"四、静态属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、静态属性","aria-hidden":"true"}},[s._v("#")]),s._v(" 四、静态属性")]),s._v(" "),n("p",[s._v("静态属性指的是Class本身的属性，即"),n("code",[s._v("Class.propName")]),s._v("，而不是定义在实例对象（"),n("code",[s._v("this")]),s._v("）上的属性。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Foo {\n}\n\nFoo.prop = 1;\nFoo.prop // 1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"五、私有方法和私有属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、私有方法和私有属性","aria-hidden":"true"}},[s._v("#")]),s._v(" 五、私有方法和私有属性")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#51-%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95"}},[s._v("私有方法")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#511-%E5%91%BD%E5%90%8D%E4%B8%8A%E5%8A%A0%E4%BB%A5%E5%8C%BA%E5%88%AB"}},[s._v("私有属性")])])]),s._v(" "),n("h4",{attrs:{id:"_5-1-私有方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-私有方法","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.1 私有方法")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#511-%E5%91%BD%E5%90%8D%E4%B8%8A%E5%8A%A0%E4%BB%A5%E5%8C%BA%E5%88%AB"}},[s._v("命名上加以区别")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#512-%E5%B0%86%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95%E7%A7%BB%E5%87%BA%E6%A8%A1%E5%9D%97"}},[s._v("将私有方法移出模块")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#513-%E5%88%A9%E7%94%A8symbol"}},[s._v("利用"),n("code",[s._v("Symbol")])])])]),s._v(" "),n("h4",{attrs:{id:"_5-1-1-命名上加以区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-1-命名上加以区别","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.1.1 命名上加以区别")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Widget{\n\n    // 公有方法\n    foo(baz){\n        this._bar(baz);\n    }\n\n    // 私有方法\n    _bar(baz){\n        return this.snaf = baz;\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h4",{attrs:{id:"_5-1-2-将私有方法移出模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-2-将私有方法移出模块","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.1.2 将私有方法移出模块")]),s._v(" "),n("p",[s._v("模块内部的所有方法都是对外可见的")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Widget{\n    foo (baz){\n        bar.call(this,baz);\n    }\n}\n\nfunction bar(baz){\n    return this.snaf = baz;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h4",{attrs:{id:"_5-1-3-利用symbol"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-3-利用symbol","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.1.3 利用"),n("code",[s._v("Symbol")])]),s._v(" "),n("p",[s._v("利用"),n("code",[s._v("Symbol")]),s._v("值的唯一性，将私有方法的名字命名为一个"),n("code",[s._v("Symbol")]),s._v("值。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const bar = Symbol('bar');\nconst snaf = Symbol('snaf');\n\nexport default class myClass{\n\n  // 公有方法\n  foo(baz) {\n    this[bar](baz);\n  }\n\n  // 私有方法\n  [bar](baz) {\n    return this[snaf] = baz;\n  }\n\n  // ...\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h4",{attrs:{id:"_5-2-私有属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-私有属性","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.2 私有属性")]),s._v(" "),n("p",[s._v("方法是在属性名之前，使用"),n("code",[s._v("#")]),s._v("表示。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class IncreasingCounter{\n    #count = 0;\n    get value(){\n        console.log('Getting the current value!');\n        return this.#count;\n    }\n    increment(){\n        this.#count++;\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"六、new-target属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六、new-target属性","aria-hidden":"true"}},[s._v("#")]),s._v(" 六、new.target属性")]),s._v(" "),n("p",[n("code",[s._v("new")]),s._v("是从构造函数生成实例对象的命令，ES6为"),n("code",[s._v("new")]),s._v("命令引入了一个"),n("code",[s._v("new.target")]),s._v("属性，该属性一般用在构造函数之中，返回"),n("code",[s._v("new")]),s._v("命令作用于的那个构造函数。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function Person(name){\n    if(new.target !== undefined){\n        this.name = name;\n    }else{\n        throw new Error('必须使用new命令生成实例');\n    }\n}\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/class",target:"_blank",rel:"noopener noreferrer"}},[s._v("ECMAScript 6 入门"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://yjhenan.gitbooks.io/-ecmascript-6/content/docs/class.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("《ECMAScript 6 入门》 第三版"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"联系作者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),n("div",{attrs:{align:"center"}},[n("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),n("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);a.default=e.exports}}]);