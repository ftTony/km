(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{355:function(a,s,r){"use strict";r.r(s);var e=r(13),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,r=a._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"数组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[a._v("#")]),a._v(" 数组")]),a._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),r("p",[a._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),a._v(" "),r("h2",{attrs:{id:"内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E5%88%9B%E5%BB%BA%E6%95%B0%E7%BB%84"}},[a._v("创建数组")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E6%95%B0%E7%BB%84%E5%B1%9E%E6%80%A7"}},[a._v("数组属性")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E6%95%B0%E7%BB%84%E5%88%A4%E6%96%AD"}},[a._v("数组判断")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E6%95%B0%E7%BB%84%E9%81%8D%E5%8E%86"}},[a._v("数组遍历")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#%E4%BA%94%E3%80%81%E6%95%B0%E7%BB%84%E6%96%B9%E6%B3%95"}},[a._v("数组方法")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#%E5%85%AD%E3%80%81%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE"}},[a._v("思维导图")])])]),a._v(" "),r("h3",{attrs:{id:"一、创建数组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、创建数组"}},[a._v("#")]),a._v(" 一、创建数组")]),a._v(" "),r("p",[a._v("创建数组一共两种方式，分别如下：")]),a._v(" "),r("ul",[r("li",[a._v("数组字面量")]),a._v(" "),r("li",[a._v("数组构造函数")])]),a._v(" "),r("h4",{attrs:{id:"_1-1-数组字面量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-数组字面量"}},[a._v("#")]),a._v(" 1.1 数组字面量")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var arr = [];\nvar arr = [1, 2, 3];\nvar arr = [[1],2,[2,[123]]];\n\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br")])]),r("h4",{attrs:{id:"_1-2-数组构造函数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-数组构造函数"}},[a._v("#")]),a._v(" 1.2 数组构造函数")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var arr = new Array();  //[]\nvar arr = new Array(1,2,3); //[1, 2, 3]\nvar arr = new Array(3);  //每种浏览器结果不一样，IE[undefined,undefined,undefined] 参数3为数组length，chrome返回结果：[undefined,x,3]\nvar arr = new Array([1],2,[2,[123]]); //[[1],2,[2,[123]]]\n\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br")])]),r("h3",{attrs:{id:"二、数组属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、数组属性"}},[a._v("#")]),a._v(" 二、数组属性")]),a._v(" "),r("ul",[r("li",[a._v("length 属性")]),a._v(" "),r("li",[a._v("prototype 属性")]),a._v(" "),r("li",[a._v("constructor 属性")])]),a._v(" "),r("h4",{attrs:{id:"_2-1-length-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-length-属性"}},[a._v("#")]),a._v(" 2.1 length 属性")]),a._v(" "),r("p",[a._v("length 属性返回数组的长度，是一个可变属性，表示一个数组中的元素个数。")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var arr = [1,2,3];\narr.length // 3\narr.length = 2; //改变数组length，从后往前截取\narr // [1,2],此时arr.length为2。所以平时我们可以用length来操作数组（删除，添加）\narr.length = 4;\narr // // [1,2,undefined,undefined],此时arr.length为2,后面填充undefined\n\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br")])]),r("h4",{attrs:{id:"_2-2-prototype-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-prototype-属性"}},[a._v("#")]),a._v(" 2.2 prototype 属性")]),a._v(" "),r("p",[r("code",[a._v("prototype")]),a._v("属性返回对象类型原型的引用，所有的数组实例都继承了这个属性，所有的数组方法都定义在 Array.prototype 身上。")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("//给数组添加个方法，返回数组中的最大值\nArray.prototype.max = function() {\n    return Math.max.apply(null,this);\n}\n[1,2,3,4].max(); //4\n\n//给数组添加个方法，给数组去重\nArray.prototype.unique = function() {\n    return this.filter((item, index, arr) => arr.indexOf(item) === index);\n}\n[11,2,1,1,2,3,1,2,4,5,23,2].unique(); //[11, 2, 1, 3, 4, 5, 23]\n\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br")])]),r("h4",{attrs:{id:"_2-3-constructor-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-constructor-属性"}},[a._v("#")]),a._v(" 2.3 constructor 属性")]),a._v(" "),r("p",[a._v("constructor 属性返回创建对象的函数，即构造函数。")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var arr = [1,2,3];\narr.constructor  //function Array() { [native code] }\narr.constructor === Array  //true  即 new Array\nvar a = new Array();\na.constructor === Array  //true\n\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br")])]),r("h3",{attrs:{id:"三、数组判断"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、数组判断"}},[a._v("#")]),a._v(" 三、数组判断")]),a._v(" "),r("ul",[r("li",[a._v("Array.isArray()")]),a._v(" "),r("li",[a._v("Object.prototype.toString.call()")]),a._v(" "),r("li",[a._v("instanceof")])]),a._v(" "),r("h3",{attrs:{id:"_3-1-array-isarray"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-array-isarray"}},[a._v("#")]),a._v(" 3.1 Array.isArray()")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("    Array.isArray([]);  //true\n    Array.isArray([1,2,3]);  //true\n    Array.isArray(new Array());  //true\n    Array.isArray();  //false\n    Array.isArray({});  //false\n    Array.isArray(123);  //false\n    Array.isArray('xzavier');  //false\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br")])]),r("h3",{attrs:{id:"_3-2-object-prototype-tostring-call"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-object-prototype-tostring-call"}},[a._v("#")]),a._v(" 3.2 Object.prototype.toString.call()")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('Array.prototype.isArray = Array.prototype.isArray || function() {\n    return Object.prototype.toString.call(this) === "[object Array]";\n}\n[1,2,3].isArray(); //true\n\n')])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br")])]),r("h3",{attrs:{id:"_3-3-instanceof"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-instanceof"}},[a._v("#")]),a._v(" 3.3 instanceof")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("[1] instanceof Array\n\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br")])]),r("h3",{attrs:{id:"四、数组遍历"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、数组遍历"}},[a._v("#")]),a._v(" 四、数组遍历")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#4.1-for"}},[a._v("for")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#4.2-forEach"}},[a._v("forEach")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#4.3-forin"}},[a._v("for-in")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#4.4-forof"}},[a._v("for-of")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#4.5-map"}},[a._v("map")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#4.6-every"}},[a._v("every")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#4.7-filter"}},[a._v("filter")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#4.8-some"}},[a._v("some")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#4.9-%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0%E5%8C%BA%E5%88%AB"}},[a._v("高阶函数区别")])])]),a._v(" "),r("h4",{attrs:{id:"_4-1-for"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-for"}},[a._v("#")]),a._v(" 4.1 for")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("for (var index = 0; index < arr.length; index++) {\n    console.log(arr[index]);\n}\n\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br")])]),r("h4",{attrs:{id:"_4-2-foreach"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-foreach"}},[a._v("#")]),a._v(" 4.2 forEach")]),a._v(" "),r("p",[r("code",[a._v("forEach")]),a._v(" 方法按升序为数组中含有效值的每一项执行一次"),r("code",[a._v("callback")]),a._v(" 函数，那些已删除或者未初始化的项将被跳过（例如在稀疏数组上）。")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("arr.forEach(function (value) {\n    console.log(value);\n});\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br")])]),r("h4",{attrs:{id:"_4-3-for-in-不推荐使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-for-in-不推荐使用"}},[a._v("#")]),a._v(" 4.3 for-in(不推荐使用)")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("for (var i in arr) {\n    console.log(arr[i]);\n}\n\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br")])]),r("h4",{attrs:{id:"_4-4-es6-的-for-of"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-es6-的-for-of"}},[a._v("#")]),a._v(" 4.4 Es6 的 for-of")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("for (var value of arr) {\n    console.log(value); // 1 2 3\n}\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br")])]),r("h4",{attrs:{id:"_4-5-map"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-map"}},[a._v("#")]),a._v(" 4.5 map")]),a._v(" "),r("p",[r("code",[a._v("map()")]),a._v("方法创建一个新数组，其结果是该数组中的每个元素都调用一个"),r("strong",[a._v("提供的函数")]),a._v("后返回的结果，"),r("strong",[a._v("原始数组不会改变")]),a._v("。传递给 map 的回调函数（callback）接受三个参数，分别是 currentValue、index（可选）、array（可选），除了 callback 之外还可以接受 this 值（可选），用于执行 callback 函数时使用的 this 值。")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const arr1=[1,2,3,4];\nconst arr2=arr1.map(item=>item*2);\n\nconsole.log(arr2);\n// [2, 4, 6, 8]\nconsole.log( arr1 );\n// [1, 2, 3, 4]\n\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br")])]),r("h4",{attrs:{id:"_4-6-every"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-every"}},[a._v("#")]),a._v(" 4.6 every")]),a._v(" "),r("p",[r("code",[a._v("every()")]),a._v("方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("function isBelowThreshold(currentValue) {\n  return currentValue < 40;\n}\n\nvar array1 = [1, 30, 39, 29, 10, 13];\n\nconsole.log(array1.every(isBelowThreshold));\n// expected output: true\n\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br")])]),r("h4",{attrs:{id:"_4-7-filter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-filter"}},[a._v("#")]),a._v(" 4.7 filter")]),a._v(" "),r("p",[r("code",[a._v("filter()")]),a._v(" 方法创建一个新数组, 其包含通过提供函数实现的测试的所有元素，"),r("strong",[a._v("原始数组不会改变")]),a._v("。接收的参数和 map 是一样的，其返回值是一个新数组、由通过测试的所有元素组成，如果没有任何数组元素通过测试，则返回空数组。")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("\nconst arr1 = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];\nconst arr2 = arr1.filter( (element, index, self) => {\n    return self.indexOf( element ) === index;\n});\n\nconsole.log( arr2 );\n// [1, 2, 3, 5, 4]\nconsole.log( arr1 );\n// [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]\n\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br")])]),r("h4",{attrs:{id:"_4-8-some"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-some"}},[a._v("#")]),a._v(" 4.8 some")]),a._v(" "),r("p",[r("code",[a._v("some()")]),a._v(" 方法测试是否至少有一个元素可以通过被提供的函数方法。该方法返回一个 Boolean 类型的值。")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var array = [1, 2, 3, 4, 5];\n\nvar even = function(element) {\n  // checks whether an element is even\n  return element % 2 === 0;\n};\n\nconsole.log(array.some(even));\n// expected output: true\n\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br")])]),r("h4",{attrs:{id:"_4-9-高阶函数区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-9-高阶函数区别"}},[a._v("#")]),a._v(" 4.9 高阶函数区别")]),a._v(" "),r("p",[r("img",{attrs:{src:"array01.jpg",alt:"images"}})]),a._v(" "),r("h3",{attrs:{id:"五、数组方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五、数组方法"}},[a._v("#")]),a._v(" 五、数组方法")]),a._v(" "),r("ul",[r("li",[a._v("splice")]),a._v(" "),r("li",[a._v("sort")]),a._v(" "),r("li",[a._v("reverse")]),a._v(" "),r("li",[a._v("join")]),a._v(" "),r("li",[a._v("slice")]),a._v(" "),r("li",[a._v("filter")]),a._v(" "),r("li",[a._v("concat")]),a._v(" "),r("li",[a._v("shift")]),a._v(" "),r("li",[a._v("unshift")]),a._v(" "),r("li",[a._v("push")]),a._v(" "),r("li",[a._v("pop")])]),a._v(" "),r("h4",{attrs:{id:"_5-1-splice"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-splice"}},[a._v("#")]),a._v(" 5.1 splice")]),a._v(" "),r("p",[r("code",[a._v("splice()")]),a._v(" 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。该方法接受三个参数，分别是：start|指定修改的开始位置（从 0 计数）、deleteCount（可选项）|要移除的数组元素的个数、item1, item2（可选）|要添加进数组的元素,从 start 位置开始")]),a._v(" "),r("ol",[r("li",[a._v("删除-删除元素，传两个参数，要删除第一项的位置和第二个要删除的项数")]),a._v(" "),r("li",[a._v("插入-向数组指定位置插入任意项元素。三个参数，第一个参数（位置），第二个参数（0），第三个参数（插入的项）")]),a._v(" "),r("li",[a._v("替换-向数组指定位置插入任意项元素，同时删除任意数量的项，三个参数。第一个参数（起始位置），第二个参数（删除的项数），第三个参数（插入任意数量的项）")])]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('\nvar arr = ["q","w","e"];\n//删除\nvar removed = arr.splice(1,1);\nconsole.log(arr); //q,e  已被改变\nconsole.log(removed); //w ,返回删除的项\n//插入\nvar insert = arr.splice(0,0,"r"); //从第0个位置开始插入\nconsole.log(insert); //返回空数组\nconsole.log(arr); //r,q,e\n//替换\nvar replace = arr.splice(1,1,"t"); //删除一项，插入一项\nconsole.log(arr); //r,t,e\nconsole.log(replace); //q,返回删除的项\n\n')])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br"),r("span",{staticClass:"line-number"},[a._v("13")]),r("br"),r("span",{staticClass:"line-number"},[a._v("14")]),r("br"),r("span",{staticClass:"line-number"},[a._v("15")]),r("br")])]),r("h4",{attrs:{id:"_5-2-sort"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-sort"}},[a._v("#")]),a._v(" 5.2 sort")]),a._v(" "),r("p",[r("code",[a._v("sort()")]),a._v("方法用原地算法对数组的元素进行排序，并返回数组。排序算法现在是稳定的。默认排序顺序是根据字符串 Unicode 码点。接受一个参数 compareFunction | 可选，用来指定按某种顺序进行排列的函数。该函数接受两个参数，分别是 firstEl|第一个用于比较的元素，secondEl|第二个用于比较的元素。")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var arr = [1,2,4,3,1,1,2];\nconsole.log(arr.sort());//[1, 1, 1, 2, 2, 3, 4]\n\nvar arr = [1,2,10,4,3,1,1,2];\nconsole.log(arr.sort(function(a,b){\n    return a-b;\n})); // [1, 1, 1, 2, 2, 3, 4, 10]\n\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br")])]),r("h4",{attrs:{id:"_5-3-reverse"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-reverse"}},[a._v("#")]),a._v(" 5.3 reverse")]),a._v(" "),r("p",[a._v("reverse() 方法将数组中元素的位置颠倒,并返回该数组。该方法会改变原数组。")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var array1 = ['one', 'two', 'three'];\nconsole.log('array1: ', array1);\n// expected output: Array ['one', 'two', 'three']\n\nvar reversed = array1.reverse();\nconsole.log('reversed: ', reversed);\n\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br")])]),r("h4",{attrs:{id:"_5-4-join"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-join"}},[a._v("#")]),a._v(" 5.4 join")]),a._v(" "),r("p",[r("code",[a._v("join()")]),a._v(' 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。该方法接受一个 separator 参数，指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。如果省略()，数组元素用逗号分隔。默认为 ","。如果 separator 是空字符串("")，则所有元素之间都没有任何字符。')]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var elements = ['Fire', 'Air', 'Water'];\n\nconsole.log(elements.join());\n// expected output: \"Fire,Air,Water\"\n\nconsole.log(elements.join(''));\n// expected output: \"FireAirWater\"\n\nconsole.log(elements.join('-'));\n\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br")])]),r("h4",{attrs:{id:"_5-5-slice"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-slice"}},[a._v("#")]),a._v(" 5.5 slice")]),a._v(" "),r("p",[r("code",[a._v("slice()")]),a._v(" 方法返回一个新的数组对象，这一对象是一个由 "),r("code",[a._v("begin")]),a._v(" 和 "),r("code",[a._v("end")]),a._v(" 决定的原数组的浅拷贝（包括 begin，不包括 end）。原始数组不会被改变。参数"),r("code",[a._v("begin")]),a._v("提取起始处的索引，从该索引开始提取原数组元素，默认为 0。参数"),r("code",[a._v("end")]),a._v("提取终止处的索引，在该索引处结束提取原数组元素，默认为 0。")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var arr = [1,2,3,4,5];\narr.slice(0,3);    //  [1,2,3]\narr.slice(3);      //  [4,5]\narr.slice(1,-1);   //  [2,3,4]\narr.slice(-3,-2);  //  [3]\nvar arr1 = arr.slice(0); //返回数组的拷贝数组，是一个新的数组，不是赋值指向\n\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br")])]),r("h4",{attrs:{id:"_5-6-concat"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-concat"}},[a._v("#")]),a._v(" 5.6 concat")]),a._v(" "),r("p",[r("code",[a._v("concat()")]),a._v(" 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var alpha = ['a', 'b', 'c'];\nvar numeric = [1, 2, 3];\n\nalpha.concat(numeric);\n// result in ['a', 'b', 'c', 1, 2, 3]\n\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br")])]),r("h4",{attrs:{id:"_5-7-shift"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-shift"}},[a._v("#")]),a._v(" 5.7 shift")]),a._v(" "),r("p",[r("code",[a._v("shift()")]),a._v("方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var array1 = [1, 2, 3];\n\nvar firstElement = array1.shift();\n\nconsole.log(array1);\n// expected output: Array [2, 3]\n\nconsole.log(firstElement);\n// expected output: 1\n\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br")])]),r("h4",{attrs:{id:"_5-8-unshift"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-8-unshift"}},[a._v("#")]),a._v(" 5.8 unshift")]),a._v(" "),r("p",[r("code",[a._v("unshift()")]),a._v(" 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。参数列表 elementN，要添加到数组开头的元素或多个元素。")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var array1 = [1, 2, 3];\n\nconsole.log(array1.unshift(4, 5));\n// expected output: 5\n\nconsole.log(array1);\n// expected output: Array [4, 5, 1, 2, 3]\n\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br")])]),r("h4",{attrs:{id:"_5-9-push"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-9-push"}},[a._v("#")]),a._v(" 5.9 push")]),a._v(" "),r("p",[r("code",[a._v("push()")]),a._v(" 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('var animals = [\'pigs\', \'goats\', \'sheep\'];\n\nconsole.log(animals.push(\'cows\'));\n// expected output: 4\n\nconsole.log(animals);\n// expected output: Array ["pigs", "goats", "sheep", "cows"]\n\nanimals.push(\'chickens\');\n\nconsole.log(animals);\n// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens"]\n\n')])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br"),r("span",{staticClass:"line-number"},[a._v("13")]),r("br")])]),r("h4",{attrs:{id:"_5-10-pop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-10-pop"}},[a._v("#")]),a._v(" 5.10 pop")]),a._v(" "),r("p",[r("code",[a._v("pop()")]),a._v("方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];\n\nconsole.log(plants.pop());\n// expected output: \"tomato\"\n\nconsole.log(plants);\n// expected output: Array [\"broccoli\", \"cauliflower\", \"cabbage\", \"kale\"]\n\nplants.pop();\n\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br")])]),r("h3",{attrs:{id:"六、思维导图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#六、思维导图"}},[a._v("#")]),a._v(" 六、思维导图")]),a._v(" "),r("p",[r("img",{attrs:{src:"array.gif",alt:"images"}})]),a._v(" "),r("h3",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),r("ul",[r("li",[a._v("《高程第 3 版》")]),a._v(" "),r("li",[a._v("《权威第 6 版》")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://segmentfault.com/a/1190000007058765",target:"_blank",rel:"noopener noreferrer"}},[a._v("温故 js 系列（16）-数组&数组方法使用详解"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"}},[a._v("MDN"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/jfMEkngHNyo-uW_izoP48w",target:"_blank",rel:"noopener noreferrer"}},[a._v("JavaScript 数组的特别之处"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://juejin.im/post/5e44002c6fb9a07c9f3fd135",target:"_blank",rel:"noopener noreferrer"}},[a._v("25 个你不得不知道的数组 reduce 高级用法(必备硬核骚技能)"),r("OutboundLink")],1)])]),a._v(" "),r("h2",{attrs:{id:"联系作者"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#联系作者"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),r("div",{attrs:{align:"center"}},[r("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),r("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);s.default=n.exports}}]);