(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{277:function(a,s,e){"use strict";e.r(s);var t=e(4),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"js-位运算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js-位运算","aria-hidden":"true"}},[a._v("#")]),a._v(" js 位运算")]),a._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),e("p",[a._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),a._v(" "),e("h2",{attrs:{id:"内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E4%BA%8C%E8%BF%9B%E5%88%B6%E8%A1%A8%E7%A4%BA%E6%95%B4%E6%95%B0"}},[a._v("二进制表示整数")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BA%8C%E3%80%81js%E7%9A%84%E6%8C%89%E4%BD%8D%E6%93%8D%E4%BD%9C%E7%AC%A6"}},[a._v("js 的按位操作符")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E4%BD%8D%E8%BF%90%E7%AE%97%E5%AE%9E%E9%99%85%E5%BA%94%E7%94%A8"}},[a._v("位运算实际应用")])])]),a._v(" "),e("h3",{attrs:{id:"一、二进制表示整数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、二进制表示整数","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、二进制表示整数")]),a._v(" "),e("p",[a._v("ECMAScript 整数有两种类型，即有符号整数（允许用整数和负数）和无符号整数（只允许用正数）.有 ECMcript 中，所有整数字面量默认都是有符号整数。")]),a._v(" "),e("p",[a._v("有符号整数使用 31 位表示整数的数值，用第 32 位表示整数的符号，0 表示正数，1 表示负数。数值范围从 -2147483648 到 2147483647。")]),a._v(" "),e("p",[a._v("正数是以真二进制形式存储的，前 31 位中的每一位都表示 2 的幂，从第 1 位（位 0）开始，表示 20，第 2 位（位 1）表示 21。没用到的位用 0 填充，即忽略不计。例如，下图展示的是数 18 的表示法。")]),a._v(" "),e("p",[e("img",{attrs:{src:"ct_js_integer_binary_signed_32bits.gif",alt:""}})]),a._v(" "),e("p",[a._v("18 的二进制版本只用了前 5 位，它们是这个数字的有效位。把数字转换成二进制字符串，就能看到有效位：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var iNum = 18;\nconsole.log(iNum.toString(2));      // 输出'10010'\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("这段代码只输出“10010”，而不是 18 的 32 位表示。其他的数位并不重要，因为仅使用前 5 位即可确定这个十进制数值。如下图所示：")]),a._v(" "),e("p",[e("img",{attrs:{src:"ct_js_integer_binary_number18.gif",alt:""}})]),a._v(" "),e("p",[a._v("负数也存储为二进制代码，不过采用的形式是二进制补码。计算数字二进制补码的步骤有三步：")]),a._v(" "),e("ol",[e("li",[a._v("确定该数字的非负版本的二进制表示（例如，要计算 -18 的二进制补码，首先要确定 18 的二进制表示）")]),a._v(" "),e("li",[a._v("求得二进制反码，即要把 0 替换为 1，把 1 替换为 0")]),a._v(" "),e("li",[a._v("在二进制反码上加 1")])]),a._v(" "),e("p",[a._v("要确定 -18 的二进制表示，首先必须得到 18 的二进制表示，如下所示：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("0000 0000 0000 0000 0000 0000 0001 0010\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("接下来，计算二进制反码，如下所示：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("1111 1111 1111 1111 1111 1111 1110 1101\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("最后，在二进制反码上加 1，如下所示：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("1111 1111 1111 1111 1111 1111 1110 1101\n                                      1\n---------------------------------------\n1111 1111 1111 1111 1111 1111 1110 1110\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("因此，-18 的二进制表示即 "),e("code",[a._v("1111 1111 1111 1111 1111 1111 1110 1110")]),a._v("。")]),a._v(" "),e("p",[a._v("有趣的是，把负整数转换成二进制字符串后，ECMAScript 并不以二进制补码的形式显示，而是用数字绝对值的标准二进制代码前面加负号的形式输出。例如：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('var iNum = -18;\nalert(iNum.toString(2));\t//输出 "-10010"\n\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("所有的按位操作符的操作数都会被转成补码形式的有符号 32 位整数。")]),a._v(" "),e("p",[a._v("总结：")]),a._v(" "),e("ol",[e("li",[a._v("二进制的最高位是符号位：0 表示正数，1 表示负数")]),a._v(" "),e("li",[a._v("正数的原码、反码、补码都一样；")]),a._v(" "),e("li",[a._v("负数的反码 = 它的原码符号位不变，其他位取反(0->1;1->0);")]),a._v(" "),e("li",[a._v("负数的补码 = 它的反码+1;")]),a._v(" "),e("li",[a._v("0 的反码、补码都是 0；")]),a._v(" "),e("li",[a._v("在计算机运算的时候，都是以补码的方式来运算的；")]),a._v(" "),e("li",[a._v("对补码再求一次补码则得到原码；")])]),a._v(" "),e("h3",{attrs:{id:"二、js-的按位操作符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、js-的按位操作符","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、js 的按位操作符")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#21-%E6%8C%89%E4%BD%8D%E9%9D%9E"}},[e("code",[a._v("~")]),a._v("（按位非）")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#22-%E6%8C%89%E4%BD%8D%E4%B8%8E"}},[e("code",[a._v("&")]),a._v("（按位与）")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#23-%E6%8C%89%E4%BD%8D%E6%88%96"}},[e("code",[a._v("|")]),a._v("（按位或）")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#24-%E6%8C%89%E4%BD%8D%E5%BC%82%E6%88%96"}},[e("code",[a._v("^")]),a._v("（按位异或）")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#25-%E5%B7%A6%E7%A7%BB"}},[e("code",[a._v("<<")]),a._v("（左移）")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#26-%E5%8F%B3%E7%A7%BB"}},[e("code",[a._v(">>")]),a._v("（右移）")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#27-%E6%97%A0%E7%AC%A6%E5%8F%B7%E5%8F%B3%E7%A7%BB"}},[e("code",[a._v(">>>")]),a._v("（无符号右移）")])])]),a._v(" "),e("h4",{attrs:{id:"_2-1-（按位非）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-（按位非）","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.1 "),e("code",[a._v("~")]),a._v("（按位非）")]),a._v(" "),e("p",[a._v("对每一个比特位执行"),e("strong",[a._v("非（NOT）操作")]),a._v("。NOT "),e("code",[a._v("a")]),a._v(" 结果为 "),e("code",[a._v("a")]),a._v(" 的反转（即反码）。")]),a._v(" "),e("p",[a._v("位运算 NOT 是三步的处理过程：")]),a._v(" "),e("ol",[e("li",[a._v("把运算数转换成 32 位数字")]),a._v(" "),e("li",[a._v("把二进制数转换成它的二进制反码")]),a._v(" "),e("li",[a._v("把二进制数转换成浮点数")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var iNum1 = 25;     // 25 等于00000000000000000000000000011001\nvar iNum2 = ~iNum1;   //转换为 11111111111111111111111111100110\nconsole.log(iNum2);     // 输出“-26”\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("得出结论，对任一数值 x 进行按位非操作的结果为-(x+1)。")]),a._v(" "),e("h4",{attrs:{id:"_2-2-（按位与）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-（按位与）","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.2 "),e("code",[a._v("&")]),a._v("（按位与）")]),a._v(" "),e("p",[a._v("对每对比特位执行"),e("strong",[a._v("与（AND）操作")]),a._v("。只有 a 和 b 都是 1 时，a AND b 才是 1."),e("strong",[a._v("与操作")]),a._v("的真值表如下：")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("a")]),a._v(" "),e("th",[a._v("b")]),a._v(" "),e("th",[a._v("a AND b")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("0")]),a._v(" "),e("td",[a._v("0")]),a._v(" "),e("td",[a._v("0")])]),a._v(" "),e("tr",[e("td",[a._v("0")]),a._v(" "),e("td",[a._v("1")]),a._v(" "),e("td",[a._v("0")])]),a._v(" "),e("tr",[e("td",[a._v("1")]),a._v(" "),e("td",[a._v("0")]),a._v(" "),e("td",[a._v("0")])]),a._v(" "),e("tr",[e("td",[a._v("1")]),a._v(" "),e("td",[a._v("1")]),a._v(" "),e("td",[a._v("1")])])])]),a._v(" "),e("p",[a._v("要对数字 25 和 3 进行 AND 运算，代码如下所示：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var iResult = 25 & 3;      // 输出1\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("分析如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("25 = 0000 0000 0000 0000 0000 0000 0001 1001\n 3 = 0000 0000 0000 0000 0000 0000 0000 0011\n--------------------------------------------\nAND = 0000 0000 0000 0000 0000 0000 0000 0001\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("可以看出，在 25 和 3 中，只有一个数位（位 0）存放的都是 1，因此，其他数位生成的都是 0，所以结果为 1。")]),a._v(" "),e("p",[a._v("**结论：**将任一值 x 与 0 执行按位与操作，其结果都是为 0.将任一数值 x 与-1 执行按位与操作，其结果都为 x。")]),a._v(" "),e("h4",{attrs:{id:"_2-3-（按位或）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-（按位或）","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.3 "),e("code",[a._v("|")]),a._v("（按位或）")]),a._v(" "),e("p",[a._v("对每一对比特位执行"),e("strong",[a._v("或（OR）操作")]),a._v("。如果 a 或 b 为 1，则"),e("code",[a._v("a")]),a._v("OR"),e("code",[a._v("b")]),a._v("结果为 1。"),e("strong",[a._v("或操作")]),a._v("的真值表：")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("a")]),a._v(" "),e("th",[a._v("b")]),a._v(" "),e("th",[a._v("a AND b")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("0")]),a._v(" "),e("td",[a._v("0")]),a._v(" "),e("td",[a._v("0")])]),a._v(" "),e("tr",[e("td",[a._v("0")]),a._v(" "),e("td",[a._v("1")]),a._v(" "),e("td",[a._v("1")])]),a._v(" "),e("tr",[e("td",[a._v("1")]),a._v(" "),e("td",[a._v("0")]),a._v(" "),e("td",[a._v("1")])]),a._v(" "),e("tr",[e("td",[a._v("1")]),a._v(" "),e("td",[a._v("1")]),a._v(" "),e("td",[a._v("1")])])])]),a._v(" "),e("p",[a._v("对 25 和 3 进行 OR 运算，代码如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var iResult = 25 | 3;       // 输出“27”\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("分析如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("25 = 0000 0000 0000 0000 0000 0000 0001 1001\n 3 = 0000 0000 0000 0000 0000 0000 0000 0011\n--------------------------------------------\nOR = 0000 0000 0000 0000 0000 0000 0001 1011\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("**结论：**将任一数值 x 与 0 进行按或操作，其结果都是 x。将任一数值 x 与-1 进行按位或操作，其结果都是为-1。")]),a._v(" "),e("h4",{attrs:{id:"_2-4-（按位异或）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-（按位异或）","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.4 "),e("code",[a._v("^")]),a._v("（按位异或）")]),a._v(" "),e("p",[a._v("对每一对比特位执行"),e("strong",[a._v("异或（XOR）操作")]),a._v("。当 a 和 b 不相同时，"),e("code",[a._v("a")]),a._v("XOR"),e("code",[a._v("b")]),a._v("的结果为"),e("code",[a._v("1")]),a._v("。"),e("strong",[a._v("异或操作")]),a._v("真值表：")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("a")]),a._v(" "),e("th",[a._v("b")]),a._v(" "),e("th",[a._v("a AND b")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("0")]),a._v(" "),e("td",[a._v("0")]),a._v(" "),e("td",[a._v("0")])]),a._v(" "),e("tr",[e("td",[a._v("0")]),a._v(" "),e("td",[a._v("1")]),a._v(" "),e("td",[a._v("1")])]),a._v(" "),e("tr",[e("td",[a._v("1")]),a._v(" "),e("td",[a._v("0")]),a._v(" "),e("td",[a._v("1")])]),a._v(" "),e("tr",[e("td",[a._v("1")]),a._v(" "),e("td",[a._v("1")]),a._v(" "),e("td",[a._v("0")])])])]),a._v(" "),e("p",[a._v("对 25 和 3 进行 XOR 运算，代码如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var iResult = 25 ^ 3;  // 26\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("分析如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" 25 = 0000 0000 0000 0000 0000 0000 0001 1001\n  3 = 0000 0000 0000 0000 0000 0000 0000 0011\n---------------------------------------------\nXOR = 0000 0000 0000 0000 0000 0000 0001 1010\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("**结论：**将任一数值 x 与 0 进行异或操作，其结果为 x。将任一数值 x 与-1 进行异或操作，其结果为~x。")]),a._v(" "),e("h4",{attrs:{id:"_2-5-（左移）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-（左移）","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.5 "),e("code",[a._v("<<")]),a._v("（左移）")]),a._v(" "),e("p",[a._v("该操作符会将第一个操作向左移动指定的位数。向左被移出的位被丢弃，右侧用 0 补充。")]),a._v(" "),e("p",[a._v("对"),e("code",[a._v("9<<2")]),a._v("进行左移，代码如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("9<<2 // 结果 36\n\n9 (base 10): 00000000000000000000000000001001 (base 2)\n\n9 << 2 (base 10): 00000000000000000000000000100100 (base 2) = 36 (base 10)\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("p",[a._v("在数字"),e("code",[a._v("x")]),a._v("上左移"),e("code",[a._v("y")]),a._v("比特得到"),e("code",[a._v("x*2y")])]),a._v(" "),e("h4",{attrs:{id:"_2-6-（右移）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-（右移）","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.6 "),e("code",[a._v(">>")]),a._v("（右移）")]),a._v(" "),e("p",[a._v("该操作符会将第一个操作数向右移动指定的位数。向右被移出的位被丢弃，拷贝最左侧的位以填充左侧。由于新的最左侧的位总是和以前相同，符号位没有被改变。所以被称作“符号传播”。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("\n9 (base 10): 00000000000000000000000000001001 (base 2)\n                  --------------------------------\n9 >> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)\n\n------------------------------------------------------------------\n-9 (base 10): 11111111111111111111111111110111 (base 2)\n                   --------------------------------\n-9 >> 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("h4",{attrs:{id:"_2-7-（无符号右移）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-（无符号右移）","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.7 "),e("code",[a._v(">>>")]),a._v("（无符号右移）")]),a._v(" "),e("p",[a._v("该操作符会将第一个操作数向右移动指定的位数。向右被移出的位被丢弃，左侧用 0 填充。因为符号位变成了 0，所以结果总是非负的。")]),a._v(" "),e("p",[a._v("对于非负数，有符号右移和无符号右移总是返回相同的结果。例如 "),e("code",[a._v("9 >>> 2")]),a._v(" 和 "),e("code",[a._v("9 >> 2")]),a._v(" 一样返回 2：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("9 (base 10): 00000000000000000000000000001001 (base 2)\n                   --------------------------------\n9 >>> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("但是对于负数却不尽相同。 "),e("code",[a._v("-9 >>> 2")]),a._v(" 产生 "),e("code",[a._v("1073741821")]),a._v(" 这和 "),e("code",[a._v("-9 >> 2")]),a._v(" 不同：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("-9 (base 10): 11111111111111111111111111110111 (base 2)\n                    --------------------------------\n-9 >>> 2 (base 10): 00111111111111111111111111111101 (base 2) = 1073741821 (base 10)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h3",{attrs:{id:"三、位运算实际应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、位运算实际应用","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、位运算实际应用")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#31-%E6%89%BE%E5%88%B0%E7%B4%A2%E5%BC%95"}},[a._v("找到索引")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#32-%E5%A5%87%E6%95%B0%E6%88%96%E5%81%B6%E6%95%B0"}},[a._v("奇数或偶数")])])]),a._v(" "),e("h4",{attrs:{id:"_3-1-找到索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-找到索引","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.1 找到索引")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var str = 'rawr';\nvar searchFor = 'a';\n\n// 这是 if (-1*str.indexOf('a') <= 0) 条件判断的另一种方法\nif (~str.indexOf(searchFor)) {\n  // searchFor 包含在字符串中\n} else {\n  // searchFor 不包含在字符串中\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("h4",{attrs:{id:"_3-2-奇数或偶数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-奇数或偶数","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.2 奇数或偶数")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("function isOdd (int) {\n  return (int & 1) === 1;\n}\nfunction isEven (int) {\n\n  return (int & 1) === 0;\n}\n\n\nconsole.log(isOdd(34)); // false\nconsole.log(isOdd(-63)); // true\nconsole.log(isEven(-12)); // true\nconsole.log(isEven(199)); // false\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br")])]),e("h3",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/fsjohnhuang/p/5060242.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("基础野：细说原码、反码和补码"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/_0bprYb2akIR3CqKVSwE4w",target:"_blank",rel:"noopener noreferrer"}},[a._v("JavaScript 中按位操作符的有趣应用"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://www.w3school.com.cn/js/pro_js_operators_bitwise.asp",target:"_blank",rel:"noopener noreferrer"}},[a._v("ECMAScript 位运算符"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators",target:"_blank",rel:"noopener noreferrer"}},[a._v("按位操作符"),e("OutboundLink")],1)])]),a._v(" "),e("h2",{attrs:{id:"联系作者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),e("div",{attrs:{align:"center"}},[e("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),e("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);s.default=r.exports}}]);