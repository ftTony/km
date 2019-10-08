(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{368:function(e,a,s){"use strict";s.r(a);var t=s(2),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"set和map数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set和map数据结构","aria-hidden":"true"}},[e._v("#")]),e._v(" Set和Map数据结构")]),e._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),s("p",[e._v("ES6 中新几种数组结构分别是 Set、WeakSet、Map、WeakMap 数组结构。")]),e._v(" "),s("h2",{attrs:{id:"内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[e._v("#")]),e._v(" 内容")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%B8%80%E3%80%81set"}},[e._v("Set")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%8C%E3%80%81weakset"}},[e._v("WeakSet")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B8%89%E3%80%81map"}},[e._v("Map")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E5%9B%9B%E3%80%81weakmap"}},[e._v("WeakMap")])])]),e._v(" "),s("h3",{attrs:{id:"一、set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、set","aria-hidden":"true"}},[e._v("#")]),e._v(" 一、Set")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#11-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95"}},[e._v("基本用法")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#12-set-%E5%AE%9E%E4%BE%8B%E7%9A%84%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95"}},[e._v("Set 实例的属性和方法")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#13-%E9%81%8D%E5%8E%86%E6%93%8D%E4%BD%9C"}},[e._v("遍历操作")])])]),e._v(" "),s("h4",{attrs:{id:"_1-1-基本用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-基本用法","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.1 基本用法")]),e._v(" "),s("p",[e._v("ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。Set 本身是一个构造函数，用来生成 Set 数据结构。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// 例一\nconst set = new Set([1,2,3,4]);\n[...set]\n// [1,2,3,4]\n\n// 例二\nconst items = new Set([1,2,3,4,5,5,5]);\nitems.size      //5\n\n// 例三\nfunction divs(){\n    return [...document.querySelectorAll('div')]\n}\n\nconst set = new Set(divs());\nset.size // 56\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br")])]),s("h4",{attrs:{id:"_1-2-set-实例的属性和方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-set-实例的属性和方法","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.2 Set 实例的属性和方法")]),e._v(" "),s("p",[e._v("Set 结构的实例有以下属性。")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Set.prototype.constructor")]),e._v("：构造函数，默认就是"),s("code",[e._v("Set")]),e._v("函数。")]),e._v(" "),s("li",[s("code",[e._v("Set.prototype.size")]),e._v("：返回"),s("code",[e._v("Set")]),e._v("实例的成员总数。")])]),e._v(" "),s("p",[e._v("Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("add(value)")]),e._v("：添加某个值，返回 Set 结构本身。")]),e._v(" "),s("li",[s("code",[e._v("delete(value)")]),e._v("：删除某个值，返回一个布尔值，表示删除是否成功。")]),e._v(" "),s("li",[s("code",[e._v("has(value)")]),e._v("：返回一个布尔值，表示该值是否为"),s("code",[e._v("Set")]),e._v("的成员。")]),e._v(" "),s("li",[s("code",[e._v("clear()")]),e._v("：清除所有成员，没有返回值。")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("s.add(1).add(2).add(2);\n\ns.has(1);       // true\n\ns.delete(2);\ns.has(2) // false\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h4",{attrs:{id:"_1-3-遍历操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-遍历操作","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.3 遍历操作")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("keys()")]),e._v("：返回键名的遍历器")]),e._v(" "),s("li",[s("code",[e._v("values()")]),e._v("：返回键名的遍历器")]),e._v(" "),s("li",[s("code",[e._v("entries()")]),e._v("：返回键名的遍历器")]),e._v(" "),s("li",[s("code",[e._v("forEach()")]),e._v("：返回键名的遍历器")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('let set = new Set([\'red\',\'green\',\'blue\']);\n\nfor(let item of set.keys()){\n    console.log(item);\n}\n// red\n// green\n// blue\n\nfor (let item of set.values()) {\n  console.log(item);\n}\n// red\n// green\n// blue\n\nfor (let item of set.entries()) {\n  console.log(item);\n}\n// ["red", "red"]\n// ["green", "green"]\n// ["blue", "blue"]\n\nlet set = new Set([1, 2, 3]);\nset.forEach((value, key) => console.log(value * 2) )\n\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br")])]),s("p",[s("strong",[e._v("遍历的应用")])]),e._v(" "),s("p",[e._v("扩展运算符（"),s("code",[e._v("...")]),e._v("）内部使用"),s("code",[e._v("for...of")]),e._v("循环，所以也可以用于 Set 结构。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("let set = new Set(['red', 'green', 'blue']);\nlet arr = [...set];\n// ['red', 'green', 'blue']\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("扩展运算符和 Set 结构相结合，就可以去除数组的重复成员。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("let arr = [3, 5, 2, 2, 5, 5];\nlet unique = [...new Set(arr)];\n// [3, 5, 2]\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("let a = new Set([1,2,3]);\nlet b = new Set([4,3,2]);\n\n// 并集\nlet union = new Set([...a,...b]);\n// Set {1, 2, 3, 4}\n\n// 交集\nlet intersect = new Set([...a].filter(x=>b.has(x)));\n// set {2, 3}\n\n// 差集\nlet difference = new Set([...a].filter(x=>!b.has(x)));\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])]),s("h3",{attrs:{id:"二、weakset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、weakset","aria-hidden":"true"}},[e._v("#")]),e._v(" 二、WeakSet")]),e._v(" "),s("ul",[s("li",[e._v("含义")]),e._v(" "),s("li",[e._v("语法")])]),e._v(" "),s("h4",{attrs:{id:"_2-1-含义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-含义","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.1 含义")]),e._v(" "),s("p",[e._v("WeakSet 结构与 Set 类似，也是重复的值的集合。但是，它与 Set 有两个区别。")]),e._v(" "),s("ul",[s("li",[e._v("WeakSet 的成员只能是对象，而不能是其他类型的值。")]),e._v(" "),s("li",[e._v("WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存。")])]),e._v(" "),s("h4",{attrs:{id:"_2-2-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-语法","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.2 语法")]),e._v(" "),s("p",[e._v("WeakSet 是一个构造函数，可以使用"),s("code",[e._v("new")]),e._v("命令，创建 WeakSet 数据结构。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const ws = new WeakSet();\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"三、map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、map","aria-hidden":"true"}},[e._v("#")]),e._v(" 三、Map")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#31-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95"}},[e._v("基本用法")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#32-%E5%AE%9E%E4%BE%8B%E7%9A%84%E5%B1%9E%E6%80%A7%E5%92%8C%E6%93%8D%E4%BD%9C%E6%96%B9%E6%B3%95"}},[e._v("实例的属性和操作方法")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#33-%E9%81%8D%E5%8E%86%E6%96%B9%E6%B3%95"}},[e._v("遍历方法")])])]),e._v(" "),s("h3",{attrs:{id:"_3-1-基本用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-基本用法","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.1 基本用法")]),e._v(" "),s("p",[e._v("ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const m = new Map();\nconst o = {p:'Hello World'};\n\nm.set(o,'content');\nm.get(o)    // \"content\"\n\nm.has(o)    // true\nm.delete(o) // true\nm.has(o)       // false\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("h3",{attrs:{id:"_3-2-实例的属性和操作方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-实例的属性和操作方法","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.2 实例的属性和操作方法")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#321-size-%E5%B1%9E%E6%80%A7"}},[e._v("size 属性")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#322-setkeyvalue"}},[e._v("set(key,value)")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#323-getkey"}},[e._v("get(key)")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#324-haskey"}},[e._v("has(key)")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#325-deletekey"}},[e._v("delete(key)")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#326-clear"}},[e._v("clear()")])])]),e._v(" "),s("h4",{attrs:{id:"_3-2-1-size-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-size-属性","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.2.1 size 属性")]),e._v(" "),s("p",[s("code",[e._v("size")]),e._v("属性返回 Map 结构的成员总数。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const map = new Map();\nmap.set('foo', true);\nmap.set('bar', false);\n\nmap.size // 2\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h4",{attrs:{id:"_3-2-2-set-key-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-set-key-value","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.2.2 set(key,value)")]),e._v(" "),s("p",[s("code",[e._v("set")]),e._v(" 方法设置键名 "),s("code",[e._v("key")]),e._v(" 对应的键值为 "),s("code",[e._v("value")]),e._v("，然后返回整个 "),s("code",[e._v("Map")]),e._v(" 结构。如果 "),s("code",[e._v("key")]),e._v(" 已经有值，则键值会被更新，否则就新生成该键。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const m = new Map();\n\nm.set('edition', 6)        // 键是字符串\nm.set(262, 'standard')     // 键是数值\nm.set(undefined, 'nah')    // 键是 undefined\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h4",{attrs:{id:"_3-2-3-get-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-get-key","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.2.3 get(key)")]),e._v(" "),s("p",[s("code",[e._v("get")]),e._v("方法读取"),s("code",[e._v("key")]),e._v("对应的键值，如果找不到"),s("code",[e._v("key")]),e._v("，返回"),s("code",[e._v("undefined")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const m = new Map();\n\nconst hello = function() {console.log('hello');};\nm.set(hello, 'Hello ES6!') // 键是函数\n\nm.get(hello)  // Hello ES6!\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h4",{attrs:{id:"_3-2-4-has-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-has-key","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.2.4 has(key)")]),e._v(" "),s("p",[s("code",[e._v("has")]),e._v("方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const m = new Map();\n\nm.set('edition', 6);\nm.set(262, 'standard');\nm.set(undefined, 'nah');\n\nm.has('edition')     // true\nm.has('years')       // false\nm.has(262)           // true\nm.has(undefined)     // true\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("h4",{attrs:{id:"_3-2-5-delete-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-5-delete-key","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.2.5 delete(key)")]),e._v(" "),s("p",[s("code",[e._v("delete")]),e._v("方法删除某个键，返回"),s("code",[e._v("true")]),e._v("。如果删除失败，返回"),s("code",[e._v("false")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const m = new Map();\nm.set(undefined,'nah');\nm.has(undefined)\n\nm.delete(undefined)\nm.has(undefined)       // false\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("h4",{attrs:{id:"_3-2-6-clear"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-6-clear","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.2.6 clear()")]),e._v(" "),s("p",[s("code",[e._v("clear")]),e._v("方法清除所有成员，没有返回值。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("let map = new Map();\nmap.set('foo', true);\nmap.set('bar', false);\n\nmap.size // 2\nmap.clear()\nmap.size // 0\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("h3",{attrs:{id:"_3-3-遍历方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-遍历方法","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.3 遍历方法")]),e._v(" "),s("p",[e._v("Map 结构原生提供三个遍历器生成函数和一个遍历方法。")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("keys()")]),e._v("：返回键名的遍历器。")]),e._v(" "),s("li",[s("code",[e._v("values()")]),e._v("：返回键值的遍历器。")]),e._v(" "),s("li",[s("code",[e._v("entries()")]),e._v("：返回所有成员的遍历器。")]),e._v(" "),s("li",[s("code",[e._v("forEach()")]),e._v("：遍历 Map 的所有成员。")])]),e._v(" "),s("h3",{attrs:{id:"四、weakmap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、weakmap","aria-hidden":"true"}},[e._v("#")]),e._v(" 四、WeakMap")]),e._v(" "),s("ul",[s("li",[e._v("含义")]),e._v(" "),s("li",[e._v("语法")])]),e._v(" "),s("h4",{attrs:{id:"_4-1-含义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-含义","aria-hidden":"true"}},[e._v("#")]),e._v(" 4.1 含义")]),e._v(" "),s("p",[s("code",[e._v("WeakMap")]),e._v("结构与"),s("code",[e._v("Map")]),e._v("结构类似，也是用于生成键值对的集合。"),s("code",[e._v("WeakMap")]),e._v("与"),s("code",[e._v("Map")]),e._v("的区别有两点。")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("WeakMap")]),e._v("只接受对象作为键名（"),s("code",[e._v("null")]),e._v("除外），不接受其他类型的值作为键名。")]),e._v(" "),s("li",[s("code",[e._v("WeakMap")]),e._v("的键名所指向的对象，不诗篇垃圾回收机制。")])]),e._v(" "),s("h4",{attrs:{id:"_4-2-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-语法","aria-hidden":"true"}},[e._v("#")]),e._v(" 4.2 语法")]),e._v(" "),s("p",[e._v("WeakMap 与 Map 在 API 上的区别主要是两个，一是没有遍历操作（即没有"),s("code",[e._v("keys()")]),e._v("、"),s("code",[e._v("values()")]),e._v("和"),s("code",[e._v("entries()")]),e._v("方法），也没有"),s("code",[e._v("size")]),e._v("属性。因为没有办法列出所有键名，某个键名是否存在完全不可预测，跟垃圾回收机制是否运行相关。二是无法清空，即不支持"),s("code",[e._v("clear")]),e._v("方法。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const wm = new WeakMap();\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://yjhenan.gitbooks.io/-ecmascript-6/content/docs/set-map.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("《ECMAScript 6 入门》 第三版"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/set-map",target:"_blank",rel:"noopener noreferrer"}},[e._v("ECMAScript 6 入门"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/sisterAn/blog/issues/24",target:"_blank",rel:"noopener noreferrer"}},[e._v("Set、Map、WeakSet 和 WeakMap"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"联系作者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[e._v("#")]),e._v(" 联系作者")]),e._v(" "),s("div",{attrs:{align:"center"}},[s("p",[e._v("\n        平凡世界，贵在坚持。\n    ")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);a.default=n.exports}}]);