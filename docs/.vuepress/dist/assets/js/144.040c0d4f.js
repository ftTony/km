(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{371:function(a,s,e){"use strict";e.r(s);var n=e(4),r=Object(n.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"数组扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数组扩展","aria-hidden":"true"}},[a._v("#")]),a._v(" 数组扩展")]),a._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),e("p",[a._v("ES6中数组增加了扩展运算符、"),e("code",[a._v("from()")]),a._v("、"),e("code",[a._v("of()")]),a._v("、"),e("code",[a._v("includes()")]),a._v("、"),e("code",[a._v("fill()")]),a._v("等方法。")]),a._v(" "),e("h2",{attrs:{id:"内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6"}},[a._v("扩展运算符")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6%E7%9A%84%E5%BA%94%E7%94%A8"}},[a._v("扩展运算符的应用")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E4%B8%89%E3%80%81arrayfrom"}},[a._v("Array.from()")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E5%9B%9B%E3%80%81arrayof"}},[a._v("Array.of()")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BA%94%E3%80%81%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84-copywithin"}},[a._v("数组实例的 copyWithin()")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E5%85%AD%E3%80%81%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84-find-%E5%92%8C-findindex"}},[a._v("数组实例的 find() 和 findIndex()")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E4%B8%83%E3%80%81%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84-fill"}},[a._v("数组实例的 fill()")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E5%85%AB%E3%80%81%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84-entrieskeys-%E5%92%8C-values"}},[a._v("数组实例的 entries()，keys() 和 values()")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E4%B9%9D%E3%80%81%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84-includes"}},[a._v("数组实例的 includes()")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E5%8D%81%E3%80%81%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84-flatflatmap"}},[a._v("数组实例的 flat()，flatMap()")])])]),a._v(" "),e("h3",{attrs:{id:"一、扩展运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、扩展运算符","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、扩展运算符")]),a._v(" "),e("p",[a._v("扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("console.log(...[1,2,3])\n// 1 2 3\n\n[...document.querySelectorAll('div')]\n\n// [<div>,<div>,<div>]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("h4",{attrs:{id:"替代数组的-apply-方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#替代数组的-apply-方法","aria-hidden":"true"}},[a._v("#")]),a._v(" 替代数组的 apply 方法")]),a._v(" "),e("p",[a._v("由于扩展运算符可以展开数组，所以不再需要"),e("code",[a._v("apply")]),a._v("方法，将数组转为函数的参数了。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// ES5的写法\nfunction f(x,y,z){\n    // ...\n}\nvar args = [0,1,2];\nf.apply(null,args);\n\n// ES6的写法\nfunction f(x,y,z){\n    // ...\n}\nvar args = [0,1,2];\nf(...args);\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br")])]),e("p",[a._v("下面是扩展运算符取代"),e("code",[a._v("apply")]),a._v("方法的一个实际的例子，应用Math.max方法，简化求出一个数组最大元素的写法。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// ES5 的写法\nMath.max.apply(null,[14,3,77]);\n\n// ES6 的写法\nMath.max(...[14,3,77]);\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("h3",{attrs:{id:"二、扩展运算符的应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、扩展运算符的应用","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、扩展运算符的应用")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#21-%E5%A4%8D%E5%88%B6%E6%95%B0%E7%BB%84"}},[a._v("复制数组")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#22-%E5%90%88%E5%B9%B6%E6%95%B0%E7%BB%84"}},[a._v("合并数组")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#23-%E4%B8%8E%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC%E7%BB%93%E5%90%88"}},[a._v("与解构赋值结合")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#24-%E5%AD%97%E7%AC%A6%E4%B8%B2"}},[a._v("字符串")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#25-%E5%AE%9E%E7%8E%B0%E4%BA%86-iterator-%E6%8E%A5%E5%8F%A3%E7%9A%84%E5%AF%B9%E8%B1%A1"}},[a._v("实现了 Iterator 接口的对象")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#26-map-%E5%92%8C-set-%E7%BB%93%E6%9E%84generator-%E5%87%BD%E6%95%B0"}},[a._v("Map 和 Set 结构，Generator 函数")])])]),a._v(" "),e("h4",{attrs:{id:"_2-1-复制数组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-复制数组","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.1 复制数组")]),a._v(" "),e("p",[a._v("数组是复合数据类型，直接复制的话，只是复制了指向底层数据结构的指针，而不是克隆一个全新的数组。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const a1 = [1, 2];\n// 写法一\nconst a2 = [...a1];\n// 写法二\nconst [...a2] = a1;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h4",{attrs:{id:"_2-2-合并数组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-合并数组","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.2 合并数组")]),a._v(" "),e("p",[a._v("扩展运算符提供了数组合并的新写法，")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// ES5\n[1, 2].concat(more)\n// ES6\n[1, 2, ...more]\n\nvar arr1 = ['a', 'b'];\nvar arr2 = ['c'];\nvar arr3 = ['d', 'e'];\n\n// ES5的合并数组\narr1.concat(arr2, arr3);\n// [ 'a', 'b', 'c', 'd', 'e' ]\n\n// ES6的合并数组\n[...arr1, ...arr2, ...arr3]\n// [ 'a', 'b', 'c', 'd', 'e' ]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br")])]),e("h4",{attrs:{id:"_2-3-与解构赋值结合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-与解构赋值结合","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.3 与解构赋值结合")]),a._v(" "),e("p",[a._v("扩展运算符可以与解构赋值结合起来，用于生成数组。如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const [first, ...rest] = [1, 2, 3, 4, 5];\nfirst // 1\nrest  // [2, 3, 4, 5]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h4",{attrs:{id:"_2-4-字符串"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-字符串","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.4 字符串")]),a._v(" "),e("p",[a._v("扩展运算符还可以将字符串转为真正的数组。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('[...\'hello\']\n// ["h","e","l","l","o"]\n\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h4",{attrs:{id:"_2-5-实现了-iterator-接口的对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-实现了-iterator-接口的对象","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.5 实现了 Iterator 接口的对象")]),a._v(" "),e("p",[a._v("任何 Iterator 接口的对象，都可以用扩展去处符转为真正的数组。对于那些没有部署 Iterator 接口的类似数组的对象，扩展运算符就无法将其转为真正的数组。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var nodeList = document.querySelectorAll('div');\nvar array = [...nodeList];\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h4",{attrs:{id:"_2-6-map-和-set-结构，generator-函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-map-和-set-结构，generator-函数","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.6 Map 和 Set 结构，Generator 函数")]),a._v(" "),e("p",[a._v("扩展运算符内部调用的是数据结构的 Iterator 接口，因此只要具有 Iterator 接口的对象，都可以使用扩展运算符，比如 Map 结构。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let map = new Map([\n  [1, 'one'],\n  [2, 'two'],\n  [3, 'three'],\n]);\n\nlet arr = [...map.keys()]; // [1, 2, 3]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("h3",{attrs:{id:"三、array-from"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、array-from","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、Array.from()")]),a._v(" "),e("p",[e("code",[a._v("Array.from")]),a._v("方法用于将两类对象转为真正的数组：类似数组的对象(array-like-object)和可遍历（iterable）的对象(包括ES6新增的数组结构Set和Map)。")]),a._v(" "),e("p",[a._v("下面是一个类似数组的对象，Array.from将它转为真正的数组。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"四、array-of"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、array-of","aria-hidden":"true"}},[a._v("#")]),a._v(" 四、Array.of()")]),a._v(" "),e("p",[e("code",[a._v("Array.of")]),a._v("方法用于将一组值，转换为数组。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Array.of(3,11,8)    // [3,11,8]\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h3",{attrs:{id:"五、数组实例的-copywithin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、数组实例的-copywithin","aria-hidden":"true"}},[a._v("#")]),a._v(" 五、数组实例的 copyWithin()")]),a._v(" "),e("p",[a._v("数组实例的"),e("code",[a._v("copyWithin")]),a._v("方法，在当前数组内部，将指定位置的成员复制到其他位置，然后返回当前数组。也就是说，使用这个方法，会修改当前数组。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Array.prototype.copyWithin(target, start = 0, end = this.length)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("它接受三个参数。")]),a._v(" "),e("ul",[e("li",[a._v("target(必需)：从该位置开始替换数据。")]),a._v(" "),e("li",[a._v("start(可选)：从该位置开始读取数据，默认为0.如果为负值，表示倒数。")]),a._v(" "),e("li",[a._v("end(可选)：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。")])]),a._v(" "),e("p",[a._v("例子")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[1, 2, 3, 4, 5].copyWithin(0, 3)\n// [4, 5, 3, 4, 5]\n\n// 将3号位复制到0号位\n[1, 2, 3, 4, 5].copyWithin(0, 3, 4)\n// [4, 2, 3, 4, 5]\n\n// -2相当于3号位，-1相当于4号位\n[1, 2, 3, 4, 5].copyWithin(0, -2, -1)\n// [4, 2, 3, 4, 5]\n\n// 将3号位复制到0号位\n[].copyWithin.call({length: 5, 3: 1}, 0, 3)\n// {0: 1, 3: 1, length: 5}\n\n// 将2号位到数组结束，复制到0号位\nvar i32a = new Int32Array([1, 2, 3, 4, 5]);\ni32a.copyWithin(0, 2);\n// Int32Array [3, 4, 5, 4, 5]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br")])]),e("h3",{attrs:{id:"六、数组实例的-find-和-findindex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、数组实例的-find-和-findindex","aria-hidden":"true"}},[a._v("#")]),a._v(" 六、数组实例的 find() 和 findIndex()")]),a._v(" "),e("p",[a._v("数组实例的"),e("code",[a._v("find")]),a._v("方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为"),e("code",[a._v("true")]),a._v("的成员，然后返回该成员。如果没有符合的条件的成员，则返回"),e("code",[a._v("undefined")]),a._v("。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[1, 4, -5, 10].find((n) => n < 0)\n// -5\n\n[1, 5, 10, 15].find(function(value, index, arr) {\n  return value > 9;\n}) // 10\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("h3",{attrs:{id:"七、数组实例的-fill"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七、数组实例的-fill","aria-hidden":"true"}},[a._v("#")]),a._v(" 七、数组实例的 fill()")]),a._v(" "),e("p",[e("code",[a._v("fill")]),a._v("方法使用给定值，填充一个数组。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("['a', 'b', 'c'].fill(7)\n// [7, 7, 7]\n\nnew Array(3).fill(7)\n// [7, 7, 7]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h3",{attrs:{id:"八、数组实例的-entries-，keys-和-values"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#八、数组实例的-entries-，keys-和-values","aria-hidden":"true"}},[a._v("#")]),a._v(" 八、数组实例的 entries()，keys() 和 values()")]),a._v(" "),e("p",[a._v("ES6提供三个新的方法——"),e("code",[a._v("entries()")]),a._v("，"),e("code",[a._v("keys()")]),a._v("和"),e("code",[a._v("values()")]),a._v("——用于遍历数组。它们都返回一个遍历器对象，可以用"),e("code",[a._v("for...of")]),a._v("循环进行遍历，唯一的区别是"),e("code",[a._v("keys()")]),a._v("是对键名的遍历、"),e("code",[a._v("values()")]),a._v("是对键值的遍历，"),e("code",[a._v("entries()")]),a._v("是对键值的遍历。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("for (let index of ['a', 'b'].keys()) {\n  console.log(index);\n}\n// 0\n// 1\n\nfor (let elem of ['a', 'b'].values()) {\n  console.log(elem);\n}\n// 'a'\n// 'b'\n\nfor (let [index, elem] of ['a', 'b'].entries()) {\n  console.log(index, elem);\n}\n// 0 \"a\"\n// 1 \"b\"\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br")])]),e("h3",{attrs:{id:"九、数组实例的-includes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#九、数组实例的-includes","aria-hidden":"true"}},[a._v("#")]),a._v(" 九、数组实例的 includes()")]),a._v(" "),e("p",[e("code",[a._v("Array.prototype.includes")]),a._v("方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的"),e("code",[a._v("includes")]),a._v("方法类似。ES2016引入了该方法")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[1, 2, 3].includes(2)     // true\n[1, 2, 3].includes(4)     // false\n[1, 2, NaN].includes(NaN) // true\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h3",{attrs:{id:"十、数组实例的-flat-，flatmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十、数组实例的-flat-，flatmap","aria-hidden":"true"}},[a._v("#")]),a._v(" 十、数组实例的 flat()，flatMap()")]),a._v(" "),e("p",[a._v("数组的成员有时还是数组，"),e("code",[a._v("Array.prototype.flat()")]),a._v("用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[1,2,[3,4]].flat()\n// [1,2,3,4]\n\n[1, 2, [3, [4, 5]]].flat()\n// [1, 2, 3, [4, 5]]\n\n[1, 2, [3, [4, 5]]].flat(2)\n// [1, 2, 3, 4, 5]\n\n[1, [2, [3]]].flat(Infinity)\n// [1, 2, 3]\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br")])]),e("h3",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://yjhenan.gitbooks.io/-ecmascript-6/content/docs/array.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("《ECMAScript 6 入门》 第三版"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/array#%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6",target:"_blank",rel:"noopener noreferrer"}},[a._v("ECMAScript 6 入门"),e("OutboundLink")],1)])]),a._v(" "),e("h2",{attrs:{id:"联系作者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),e("div",{attrs:{align:"center"}},[e("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),e("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);s.default=r.exports}}]);