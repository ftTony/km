(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{378:function(a,e,s){"use strict";s.r(e);var r=s(4),t=Object(r.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"iterator-和-for-of-循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iterator-和-for-of-循环","aria-hidden":"true"}},[a._v("#")]),a._v(" Iterator 和 for...of 循环")]),a._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),s("p",[a._v("遍历器是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据只要部署 Iterator 接口，就可以完成遍历操作。")]),a._v(" "),s("p",[a._v("Iterator 的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构成员能够按某种次序排列；三是 ES6 创造了一种新的遍历命令"),s("code",[a._v("for...of")]),a._v("循环，Iterator 接口主要供"),s("code",[a._v("for...of")]),a._v("消费。")]),a._v(" "),s("p",[a._v("Iterator 的遍历过程是这样的。")]),a._v(" "),s("ol",[s("li",[a._v("创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。")]),a._v(" "),s("li",[a._v("第一次调用指针对象的"),s("code",[a._v("next")]),a._v("方法，可以将指针指向数据结构的第一个成员。")]),a._v(" "),s("li",[a._v("第二次调用指针对象的"),s("code",[a._v("next")]),a._v("方法，指针就指向数据结构的第二个成员。")]),a._v(" "),s("li",[a._v("不断调用指针对象的"),s("code",[a._v("next")]),a._v("方法，走到它指向数据结构的结束位置。")])]),a._v(" "),s("h2",{attrs:{id:"内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%B8%80%E9%BB%98%E8%AE%A4-iterator-%E6%8E%A5%E5%8F%A3"}},[a._v("默认 Iterator 接口")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%8C%E8%B0%83%E7%94%A8-iterator-%E6%8E%A5%E5%8F%A3%E7%9A%84%E5%9C%BA%E5%90%88"}},[a._v("调用 Iterator 接口的场合")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B8%89iterator-%E6%8E%A5%E5%8F%A3%E4%B8%8E-generator-%E5%87%BD%E6%95%B0"}},[a._v("Iterator 接口与 Generator 函数")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E5%9B%9B%E9%81%8D%E5%8E%86%E5%99%A8%E5%AF%B9%E8%B1%A1%E7%9A%84-returnthrow"}},[a._v("遍历器对象的 return()，throw()")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%94forof-%E5%BE%AA%E7%8E%AF"}},[a._v("for...of 循环")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E5%85%AD%E4%B8%8E%E5%85%B6%E4%BB%96%E9%81%8D%E5%8E%86%E8%AF%AD%E6%B3%95%E7%9A%84%E6%AF%94%E8%BE%83"}},[a._v("与其他遍历语法的比较")])])]),a._v(" "),s("h3",{attrs:{id:"一、默认-iterator-接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、默认-iterator-接口","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、默认 Iterator 接口")]),a._v(" "),s("p",[a._v("原生具备 Iterator 接口的数据结构如下：")]),a._v(" "),s("ul",[s("li",[a._v("Array")]),a._v(" "),s("li",[a._v("Map")]),a._v(" "),s("li",[a._v("Set")]),a._v(" "),s("li",[a._v("String")]),a._v(" "),s("li",[a._v("TypedArray")]),a._v(" "),s("li",[a._v("函数的 arguments 对象")]),a._v(" "),s("li",[a._v("NodeList 对象")])]),a._v(" "),s("h3",{attrs:{id:"二、调用-iterator-接口的场合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、调用-iterator-接口的场合","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、调用 Iterator 接口的场合")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#21-%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC"}},[a._v("解构赋值")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#22-%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6"}},[a._v("扩展运算符")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#23-yield"}},[a._v("yield*")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#24-%E5%85%B6%E4%BB%96%E5%9C%BA%E5%90%88"}},[a._v("其他场合")])])]),a._v(" "),s("h4",{attrs:{id:"_2-1-解构赋值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-解构赋值","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.1 解构赋值")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("let set = new Set().add('a').add('b').add('c');\n\nlet [x,y] = set;\n// x='a'; y='b'\n\nlet [first,...rest] = set;\n// first='a';rest=['b','c'];\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h4",{attrs:{id:"_2-2-扩展运算符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-扩展运算符","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.2 扩展运算符")]),a._v(" "),s("p",[a._v("扩展运算符(...)也会调用默认的 Iterator 接口。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 例一\nvar str = 'hello';\n[...str]    // ['h','e','l','l','o']\n\n// 例二\nlet arr = ['b','c'];\n\n['a',...arr','d']\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h4",{attrs:{id:"_2-3-yield"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-yield","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.3 yield*")]),a._v(" "),s("p",[s("code",[a._v("yield*")]),a._v("后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("let generator = function*(){\n    yield 1;\n    yield* [2,3,4];\n    yield 5;\n}\n\nvar iterator = generator();\n\niterator.next();    // {value:1,done:false}\niterator.next();    // {value:2,done:false}\niterator.next();    // {value:3,done:false}\niterator.next();    // {value:4,done:false}\niterator.next();    // {value:5,done:false}\niterator.next();    // {value:undefined,done:true}\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br")])]),s("h4",{attrs:{id:"_2-4-其他场合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-其他场合","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.4 其他场合")]),a._v(" "),s("p",[a._v("由于数组的遍历会调用遍历器接口，所以任何接受数组作为参数的参数的场合。其实都调用了遍历器接口。下面是一些例子。")]),a._v(" "),s("ul",[s("li",[a._v("for...of")]),a._v(" "),s("li",[a._v("Array.from()")]),a._v(" "),s("li",[a._v("Map(),Set(),WeakMap(),WeakSet()（比如"),s("code",[a._v("new Map([['a',1],['b',2]])")]),a._v("）")]),a._v(" "),s("li",[a._v("Promise.all()")]),a._v(" "),s("li",[a._v("Promise.race()")])]),a._v(" "),s("h3",{attrs:{id:"三、iterator-接口与-generator-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、iterator-接口与-generator-函数","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、Iterator 接口与 Generator 函数")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("var myIterable = {}\n\nmyIterable[Symbol.iterator] = function* (){\n    yield 1;\n    yield 2;\n    yield 3;\n};\n[...myIterable]     // [1,2,3]\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("h3",{attrs:{id:"四、遍历器对象的-return-，throw"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、遍历器对象的-return-，throw","aria-hidden":"true"}},[a._v("#")]),a._v(" 四、遍历器对象的 return()，throw()")]),a._v(" "),s("p",[a._v("遍历器对象除了具有"),s("code",[a._v("next")]),a._v("方法，还可以具有"),s("code",[a._v("return")]),a._v("方法和"),s("code",[a._v("throw")]),a._v("方法。"),s("code",[a._v("return")]),a._v("方法的使用场合是，如果"),s("code",[a._v("for...of")]),a._v("循环提前退出，就会调用"),s("code",[a._v("return")]),a._v("方法。如果一个对象在完成遍历前，需要清理或释放资源，就可以部署"),s("code",[a._v("return")]),a._v("方法")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("function readLineSync(file){\n    return {\n        next(){\n            return {done:false};\n        },\n        return(){\n            file.close();\n            return {done:true};\n        }\n    }\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("h3",{attrs:{id:"五、for-of-循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、for-of-循环","aria-hidden":"true"}},[a._v("#")]),a._v(" 五、for...of 循环")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#51-%E6%95%B0%E7%BB%84"}},[a._v("数组")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#52-set-%E5%92%8C-map-%E7%BB%93%E6%9E%84"}},[a._v("Set 和 Map 结构")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#53-%E8%AE%A1%E7%AE%97%E7%94%9F%E6%88%90%E7%9A%84%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84"}},[a._v("计算生成的数据结构")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#54-%E7%B1%BB%E4%BC%BC%E6%95%B0%E7%BB%84%E7%9A%84%E5%AF%B9%E8%B1%A1"}},[a._v("类似数组的对象")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#55-%E5%AF%B9%E8%B1%A1"}},[a._v("对象")])])]),a._v(" "),s("h4",{attrs:{id:"_5-1-数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-数组","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.1 数组")]),a._v(" "),s("p",[a._v("数组原生具备"),s("code",[a._v("iterator")]),a._v("接口，"),s("code",[a._v("for...of")]),a._v("循环本质上就是调用这个接口产生的遍历器。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const str = ['red','green','blue'];\n\nfor(let v of arr){\n    console.log(v);     // red green blue\n}\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h4",{attrs:{id:"_5-2-set-和-map-结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-set-和-map-结构","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.2 Set 和 Map 结构")]),a._v(" "),s("p",[a._v("Set 和 Map 结构也原生具有 Iterator 接口，可以直接使用"),s("code",[a._v("for...of")]),a._v("循环。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('var engines = new Set([\'Gecko\',\'Trident\',\'Webkit\']);\n\nfor(var e of engines){\n    console.log(e);\n}\n//  Gecko\n//  Trident\n//  Webkit\n\nvar es6 = new Map();\nes6.set("edition", 6);\nes6.set("committee", "TC39");\nes6.set("standard", "ECMA-262");\nfor (var [name, value] of es6) {\n  console.log(name + ": " + value);\n}\n// edition: 6\n// committee: TC39\n// standard: ECMA-262\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br")])]),s("h4",{attrs:{id:"_5-3-计算生成的数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-计算生成的数据结构","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.3 计算生成的数据结构")]),a._v(" "),s("p",[a._v("ES6 的数组、Set、Map 都部署了以下三个方法，调用后都返回遍历器对象。")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("entries()")]),a._v("返回一个遍历对象，用来遍历"),s("code",[a._v("[键名，键值]")]),a._v("组成的数组。对于数组，键名就是索引值；对于 Set，键名与键值相同。Map 结构的 Iterator 接口，默认就是调用"),s("code",[a._v("entries")]),a._v("方法。")]),a._v(" "),s("li",[s("code",[a._v("keys()")]),a._v("返回一个遍历器对象，用来遍历所有的键名。")]),a._v(" "),s("li",[s("code",[a._v("values()")]),a._v("返回一个遍历器对象，用来遍历所有的键值。")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("let arr = ['a','b','c'];\nfor(let pair of arr.entries()){\n    console.log(pair);\n}\n// [0, 'a']\n// [1, 'b']\n// [2, 'c']\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h4",{attrs:{id:"_5-4-类似数组的对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-类似数组的对象","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.4 类似数组的对象")]),a._v(" "),s("p",[a._v("类似数组的对象包括好几类，分别为字符串、DOM NodeList 对象、"),s("code",[a._v("arguments")]),a._v("对象")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('// 字符串\nlet str = "hello";\n\nfor (let s of str) {\n  console.log(s); // h e l l o\n}\n\n// DOM NodeList对象\nlet paras = document.querySelectorAll("p");\n\nfor (let p of paras) {\n  p.classList.add("test");\n}\n\n// arguments对象\nfunction printArgs() {\n  for (let x of arguments) {\n    console.log(x);\n  }\n}\nprintArgs(\'a\', \'b\');\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br")])]),s("h4",{attrs:{id:"_5-5-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-对象","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.5 对象")]),a._v(" "),s("p",[a._v("对于普通的对象，"),s("code",[a._v("for...of")]),a._v("结构不能直接使用，会报错，必须部署了 Iterator 接口后才能使用。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("function* entries(obj){\n    for(let key of Object.keys(obj)){\n        yield [key,obj[key]];\n    }\n}\n\nfor(let [key,value] of entries(obj)){\n    console.log(key,'->',value);\n}\n// a->1\n// b->2\n// c->3\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("h3",{attrs:{id:"六、与其他遍历语法的比较"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、与其他遍历语法的比较","aria-hidden":"true"}},[a._v("#")]),a._v(" 六、与其他遍历语法的比较")]),a._v(" "),s("p",[s("code",[a._v("for...in")]),a._v("循环有几个缺点")]),a._v(" "),s("ul",[s("li",[a._v("数组的键名是数字，但是"),s("code",[a._v("for...in")]),a._v("循环是以字符串作为键名“0”、“1”、“2”等等。")]),a._v(" "),s("li",[s("code",[a._v("for...in")]),a._v("循环不仅遍历数字键名，还会遍历手动添加的其他健，甚至包括原型链上的键。")]),a._v(" "),s("li",[a._v("某些情况下，"),s("code",[a._v("for...in")]),a._v("循环会以做生意顺序遍历键名。")])]),a._v(" "),s("p",[s("code",[a._v("for...of")]),a._v("循环相比上面几种做法，有以下几个优点")]),a._v(" "),s("ul",[s("li",[a._v("有着同"),s("code",[a._v("for...in")]),a._v("一样的简洁语法，但是没有"),s("code",[a._v("for...in")]),a._v("那些缺点。")]),a._v(" "),s("li",[a._v("不同于"),s("code",[a._v("forEach")]),a._v("方法，它可以与"),s("code",[a._v("break")]),a._v("、"),s("code",[a._v("continue")]),a._v("和"),s("code",[a._v("return")]),a._v("配合使用。")]),a._v(" "),s("li",[a._v("提供了遍历所有数据结构的统一操作接口。")])]),a._v(" "),s("h3",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/90",target:"_blank",rel:"noopener noreferrer"}},[a._v("ES6 系列之迭代器与 for of"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/iterator",target:"_blank",rel:"noopener noreferrer"}},[a._v("ECMAScript 6 入门"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://yjhenan.gitbooks.io/-ecmascript-6/content/docs/iterator.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("ECMAScript 6 入门 第三版"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"联系作者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),s("div",{attrs:{align:"center"}},[s("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),s("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);e.default=t.exports}}]);