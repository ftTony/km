(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{226:function(s,n,a){"use strict";a.r(n);var t=a(2),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"js精度丢失问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js精度丢失问题","aria-hidden":"true"}},[s._v("#")]),s._v(" js精度丢失问题")]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("众所周知，JavaScript浮点数运算时经常遇到会"),a("code",[s._v("0.000000001")]),s._v("和"),a("code",[s._v("0.999999999")]),s._v("这样奇怪的结果，如"),a("code",[s._v("0.1+0.2=0.30000000000000004")]),s._v("、"),a("code",[s._v("1-0.9=0.09999999999999998")]),s._v("，出现这种问题到底是为什么？")]),s._v(" "),a("h2",{attrs:{id:"内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%B8%80%E3%80%81javascript%E6%98%AF%E5%A6%82%E4%BD%95%E8%A1%A8%E7%A4%BA%E6%95%B0%E5%AD%97%E7%9A%84%EF%BC%9F"}},[s._v("JavaScript是如何表示数字的？")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E8%BF%90%E7%AE%97%E6%97%B6%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%EF%BC%9F"}},[s._v("运算时发生了什么？")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E6%80%8E%E4%B9%88%E8%A7%A3%E5%86%B3%E7%B2%BE%E5%BA%A6%E9%97%AE%E9%A2%98%EF%BC%9F"}},[s._v("怎么解决精度问题？")])])]),s._v(" "),a("h3",{attrs:{id:"一、javascript是如何表示数字的？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、javascript是如何表示数字的？","aria-hidden":"true"}},[s._v("#")]),s._v(" 一、JavaScript是如何表示数字的？")]),s._v(" "),a("p",[s._v("JavaScript使用Number类型表示数字（整数和浮点数），遵循"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/IEEE_754",target:"_blank",rel:"noopener noreferrer"}},[s._v("IEEE 754"),a("OutboundLink")],1),s._v("标准通过64位来表示一个数字，也就是标准的double双精度浮点数（相关的还有float 32位单精度）。")]),s._v(" "),a("p",[s._v("这样的存储结构优点是可以归一化处理整数和小数，节省存储空间。")]),s._v(" "),a("p",[s._v("64位比特双可以三个部分：")]),s._v(" "),a("ul",[a("li",[s._v("符号位S：第1位是正负数符号位(sign)，0代表正数，1代表负数")]),s._v(" "),a("li",[s._v("指数位E：中间的11位存储指数(exponent),用来表示次方数")]),s._v(" "),a("li",[s._v("尾数位M：最后的52位是尾数(mantissa)，储存小数部分，超出的部分自动进一舍零")])]),s._v(" "),a("p",[a("img",{attrs:{src:"precision.png",alt:""}})]),s._v(" "),a("p",[s._v("实际数字就可以用以下公式来计算：")]),s._v(" "),a("p",[a("img",{attrs:{src:"precision01.png",alt:""}})]),s._v(" "),a("p",[s._v("对于64位的双精度浮点数，最高的1位是符号位S，接着的11位是指数E，剩下的52位为有效数字M。")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("位数")]),s._v(" "),a("th",[s._v("阶数")]),s._v(" "),a("th",[s._v("有效数字/尾数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("单精度浮点数")]),s._v(" "),a("td",[s._v("32")]),s._v(" "),a("td",[s._v("8")])]),s._v(" "),a("tr",[a("td",[s._v("双精度浮点数")]),s._v(" "),a("td",[s._v("64")]),s._v(" "),a("td",[s._v("11")])])])]),s._v(" "),a("h3",{attrs:{id:"二、运算时发生了什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、运算时发生了什么？","aria-hidden":"true"}},[s._v("#")]),s._v(" 二、运算时发生了什么？")]),s._v(" "),a("p",[s._v("计算机无法直接对十进制的数字进行运算，这是硬件物理特性已经决定的。这样去运算分成了两个部分："),a("strong",[s._v("先按照IEEE754转成相应的二进制，然后对阶运算")])]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#_2-1-%E6%B5%AE%E7%82%B9%E6%95%B0%E8%BD%AC%E6%8D%A2%E4%B8%BA%E4%BA%8C%E8%BF%9B%E5%88%B6"}},[s._v("浮点数转换为二进制")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#_2-2-0-1%E7%9A%84%E4%BA%8C%E8%BF%9B%E5%88%B6"}},[s._v("0.1的二进制")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#_2-3-0-2%E7%9A%84%E4%BA%8C%E8%BF%9B%E5%88%B6"}},[s._v("0.2的二进制")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#_2-4-0-1-0-2%E7%9A%84%E4%BA%8C%E8%BF%9B%E5%88%B6"}},[s._v("0.1+0.2的二进制")])])]),s._v(" "),a("h4",{attrs:{id:"_2-1-浮点数转换为二进制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-浮点数转换为二进制","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.1 浮点数转换为二进制")]),s._v(" "),a("p",[s._v("浮点数转换成二进制，我们要将整数部分和小数部分分开，整数部分采用除2取余，小数部分采用乘2取整。")]),s._v(" "),a("p",[s._v("例如：13.125转换为二进制：")]),s._v(" "),a("p",[a("strong",[s._v("整数部分")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n        13\n    ÷   2\n--------------       ↑\n        6    1       |\n    ÷   2            |\n--------------       |\n        3    0       |\n    ÷   2            |\n--------------       |\n        1    1       |    \n    ÷   2            |\n--------------       |\n        0    1    ----\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("逆序将余数拼上得到13的二进制：1101")]),s._v(" "),a("p",[a("strong",[s._v("小数部分")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("        0.125\n    x       2        ----\n-----------------       |\n        0.25    0       |\n    x      2            |\n-----------------       |\n        0.5     0       |\n    x     2             |\n-----------------       |\n        1.0     1       ↓\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("得到小数部分的二进制：0.001")]),s._v(" "),a("p",[s._v("两部分相加，得到13.125的二进制："),a("code",[s._v("1101.001")])]),s._v(" "),a("p",[s._v("二进制 "),a("code",[s._v("1101.001")]),s._v("可以写成 "),a("code",[s._v("1.101001 * 2^3")]),s._v("，即这里 M 为 "),a("code",[s._v("1.101001")]),s._v(",E为3,s为0")]),s._v(" "),a("h4",{attrs:{id:"_2-2-0-1的二进制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-0-1的二进制","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.2 0.1的二进制")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    0.1\nx     2\n-------\n    0.2     0\nx     2\n-------\n    0.4     0\nx     2\n-------\n    0.8     0\nx     2\n-------\n    0.6     1\nx     2\n-------\n    0.2     1\n------- 又从0.2开始循环了\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("于是，我们得到了0.1的二进制表示，即为"),a("code",[s._v("0.0001100110011(0011循环)")]),s._v("，即"),a("code",[s._v("1.100110011(0011)*2^-4")]),s._v("，即，M 1.100110011(0011),E -4,那么，s=0,e=-4+1023=1019,那么，js中由于是双精度的，那么0.1的表示为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("0  01111111011  1001100110011001100110011001100110011001100110011001\n--------------------------------------------------------------------\ns  exp(11位)     frac(52位)\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"_2-3-0-2的二进制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-0-2的二进制","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.3 0.2的二进制")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    0.2\nx     2\n-------\n    0.4     0\nx     2\n-------\n    0.8     0\nx     2\n-------\n    0.6     1\nx     2\n-------\n    0.2     1\n------- 又从0.2开始循环了\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("0.2的二进制表示：0.001100110011(0011循环)，即1.100110011(0011)*2^-3\n那么，js双精度0.2的表示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("0  01111111100  1001100110011001100110011001100110011001100110011001\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"_2-4-0-1-0-2的二进制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-0-1-0-2的二进制","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.4 0.1+0.2的二进制")]),s._v(" "),a("p",[s._v("浮点数的加减运算一般由以下五个步骤完成：")]),s._v(" "),a("ul",[a("li",[s._v("对阶")]),s._v(" "),a("li",[s._v("尾数运算")]),s._v(" "),a("li",[s._v("结果处理")]),s._v(" "),a("li",[s._v("舍入处理")]),s._v(" "),a("li",[s._v("溢出判断")])]),s._v(" "),a("p",[a("strong",[s._v("对阶")])]),s._v(" "),a("p",[s._v("将两个进行运算的浮点数的阶码对齐的操作。对阶的目的是为使两个浮点数的尾数能够进行加减运算。因为，当进行Mx·2Ex与My·2Ey加减运算时，只有使两浮点数的指数值部分相同，才能将相同的指数值作为公因数提出来，然后进行尾数的加减运算。\n对阶的具体方法是：首先求出两浮点数阶码的差，即⊿E＝Ex-Ey，将小阶码加上⊿E，使之与大阶码相等，同时将小阶码对应的浮点数的尾数右移相应位数，以保证该浮点数的值不变。几点注意：")]),s._v(" "),a("ol",[a("li",[s._v("对阶的原则是小阶对大阶，之所以这样做是因为若大阶对小阶，则尾数的数值部分的高位需移出，而小阶对大阶移出的是尾数的数值部分的低位，这样损失的精度更小。")]),s._v(" "),a("li",[s._v("若⊿E＝0，说明两浮点数的阶码已经相同，无需再做对阶操作了。")]),s._v(" "),a("li",[s._v("采用补码表示的尾数右移时，符号位保持不变。")]),s._v(" "),a("li",[s._v("由于尾数右移时是将最低位移出，会损失一定的精度，为减少误差，可先保留若干移出的位，供以后舍入处理用。")])]),s._v(" "),a("p",[a("strong",[s._v("尾数运算")])]),s._v(" "),a("p",[s._v("尾数运算就是进行完成对阶后的尾数相加减。这里采用的就是我们前面讲过的纯小数的定点数加减运算。")]),s._v(" "),a("p",[a("strong",[s._v("结果规格化")])]),s._v(" "),a("p",[s._v("在机器中，为保证浮点数表示的唯一性，浮点数在机器中都是以规格化形式存储的。对于IEEE754标准的浮点数来说，就是尾数必须是1.M的形式。由于在进行上述两个定点小数的尾数相加减运算后，尾数有可能是非规格化形式，为此必须进行规格化操作。 规格化操作包括左规和右规两种情况。 左规操作：将尾数左移，同时阶码减值，直至尾数成为1.M的形式。例如，浮点数0.0011·25是非规格化的形式，需进行左规操作，将其尾数左移3位，同时阶码减3，就变成1.1100·22规格化形式了。 右规操作：将尾数右移1位，同时阶码增1，便成为规格化的形式了。要注意的是，右规操作只需将尾数右移一位即可，这种情况出现在尾数的最高位（小数点前一位）运算时出现了进位，使尾数成为10.xxxx或11.xxxx的形式。例如，10.0011·25右规一位后便成为\n1.00011·26的规格化形式了。")]),s._v(" "),a("p",[a("strong",[s._v("舍入处理")])]),s._v(" "),a("p",[s._v("浮点运算在对阶或右规时，尾数需要右移，被右移出去的位会被丢掉，从而造成运算结果精度的损失。为了减少这种精度损失，可以将一定位数的移出位先保留起来，称为保护位，在规格化后用于舍入处理。 IEEE754标准列出了四种可选的舍入处理方法：")]),s._v(" "),a("ol",[a("li",[s._v("就近舍入（round to nearest） 这是标准列出的默认舍入方式，其含义相当于我们日常所说的“四舍五入”。例如，对于32位单精度浮点数来说，若超出可保存的23位的多余位大于等于100…01，则多余位的值超过了最低可表示位值的一半，这种情况下，舍入的方法是在尾数的最低有效位上加1；若多余位小于等于011…11，则直接舍去；若多余位为100…00，此时再判断尾数的最低有效位的值，若为0则直接舍去，若为1则再加1。")]),s._v(" "),a("li",[s._v("朝+∞舍入（round toward +∞） 对正数来说，只要多余位不为全0，则向尾数最低有效位进1；对负数来说，则是简单地舍去。")]),s._v(" "),a("li",[s._v("朝-∞舍入（round toward -∞） 与朝+∞舍入方法正好相反，对正数来说，只是简单地舍去；对负数来说，只要多余位不为全0，则向尾数最低有效位进1。")]),s._v(" "),a("li",[s._v("朝0舍入（round toward 0） 即简单地截断舍去，而不管多余位是什么值。这种方法实现简单，但容易形成累积误差，且舍入处理后的值总是向下偏差。")])]),s._v(" "),a("p",[a("strong",[s._v("溢出判断")])]),s._v(" "),a("p",[s._v("与定点数运算不同的是，浮点数的溢出是以其运算结果的阶码的值是否产生溢出来判断的。若阶码的值超过了阶码所能表示的最大正数，则为上溢，进一步，若此时浮点数为正数，则为正上溢，记为+∞，若浮点数为负数，则为负上溢，记为-∞；若阶码的值超过了阶码所能表示的最小负数，则为下溢，进一步，若此时浮点数为正数，则为正下溢，若浮点数为负数，则为负下溢。正下溢和负下溢都作为0处理。")]),s._v(" "),a("p",[a("strong",[s._v("计算0.1+0.2")])]),s._v(" "),a("p",[s._v("0.1的阶码-4,0.2的阶码-3,对阶阶段，将0.1的阶码变为-3，然后0.1的尾数部分：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" 0.00011001100110011001100110011001100110011001100110011010\n+0.00110011001100110011001100110011001100110011001100110100\n------------------------------------------------------------\n=0.01001100110011001100110011001100110011001100110011001110\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("该数表示的即0.1+0.2的结果 "),a("code",[s._v("2^-2 * 1.0011001100110011001100110011001100110011001100110100")]),s._v("\n将其转换成十进制数为："),a("code",[s._v("0.3000000000000000444089209850062616169452667236328125")]),s._v("\n由于精度问题，只取到"),a("code",[s._v("0.30000000000000004")])]),s._v(" "),a("h3",{attrs:{id:"三、怎么解决精度问题？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、怎么解决精度问题？","aria-hidden":"true"}},[s._v("#")]),s._v(" 三、怎么解决精度问题？")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#_3-1-%E7%B1%BB%E5%BA%93"}},[s._v("类库")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#_3-2-%E8%A7%A3%E5%86%B3tofixed"}},[s._v("解决toFixed")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#_3-3-%E6%B5%AE%E7%82%B9%E6%95%B0%E8%BF%90%E7%AE%97%E7%B2%BE%E5%BA%A6"}},[s._v("浮点数运算精度")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#_3-4-es6"}},[s._v("ES6")])])]),s._v(" "),a("h4",{attrs:{id:"_3-1-类库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-类库","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.1 类库")]),s._v(" "),a("p",[s._v("NPM上有许多支持JavaScript和Node.js的数学库，比如"),a("code",[s._v("Math.js")]),s._v("，"),a("code",[s._v("decimal.js")]),s._v("，"),a("code",[s._v("D.js")]),s._v("等等。")]),s._v(" "),a("h4",{attrs:{id:"_3-2-解决tofixed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-解决tofixed","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.2 解决toFixed")]),s._v(" "),a("p",[s._v("针对toFixed的兼容性问题，我们可以把toFix重写一下来解决，代码如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Number.prototype.toFixed = function(len){\n    if(len>20 || len<0){\n        throw new RangeError('toFixed() digits argument must be between 0 and 20');\n    }\n    // .12转为.0.123\n    var number = Number(this);\n    if(isNaN(number) || number >= Math.pow(10,21)){\n        return number.toString();\n    }\n    if(typeof(len) == 'unefined' || len === 0){\n        return (Math.round(number)).toString();\n    }\n    var result = number.toString(),\n        numberArr = result.split('.');\n\n    if(numberArr.length<2){\n        // 需要截取的长度等于当前长度\n        return result;\n    }\n\n    if(deciNum.length < len){\n        //需要截取的长度大于当前长度 1.3.toFixed(2)\n        return padNum(result)\n    }\n    //需要截取的长度小于当前长度，需要判断最后一位数字\n    result = intNum + '.' + deciNum.substr(0, len);\n    if(parseInt(lastNum, 10)>=5){\n        //最后一位数字大于5，要进位\n        var times = Math.pow(10, len); //需要放大的倍数\n        var changedInt = Number(result.replace('.',''));//截取后转为整数\n        changedInt++;//整数进位\n        changedInt /= times;//整数转为小数，注：有可能还是整数\n        result = padNum(changedInt+'');\n    }\n    return result;\n    //对数字末尾加0\n    function padNum(num){\n        var dotPos = num.indexOf('.');\n        if(dotPos === -1){\n            //整数的情况\n            num += '.';\n            for(var i = 0;i<len;i++){\n                num += '0';\n            }\n            return num;\n        } else {\n            //小数的情况\n            var need = len - (num.length - dotPos - 1);\n            for(var j = 0;j<need;j++){\n                num += '0';\n            }\n            return num;\n        }\n    }\n}\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br")])]),a("p",[s._v("我们通过判断最后一位是否大于等于5来决定需不需要进位，如果需要进位先把小数乘以倍数变为整数，加1之后，再除以倍数变为小数，这样就不用一位一位的进行判断。")]),s._v(" "),a("h4",{attrs:{id:"_3-3-浮点数运算精度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-浮点数运算精度","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.3 浮点数运算精度")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function add(num1,num2){\n    const num1Digits = (num1.toString().split('.')[1] || '').length;\n    const num2Digits = (num2.toString().split('.')[1] || '').length;\n    const baseNum = Math.pow(10,Math.max(num1Digits,num2Digits));\n    return (num1 * baseNum + num2 * baseNum) / baseNum;\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h4",{attrs:{id:"_3-4-es6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-es6","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.4 ES6")]),s._v(" "),a("p",[s._v("ES6在Number对象上新增了一个极小的常量——Number.EPSILON，引入一个这么小的量，目的在于为浮点数计算设置一个误差范围，如果误差能够小于Number.EPSILON，我们就可以认为结果是可靠的。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function withinErrorMargin(left,right){\n    return Math.abs(left-right)< Number.EPSILON\n}\n\nwithinErrorMargin(0.1+0.2,0.3)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/5b90e00e6fb9a05cf9080dff",target:"_blank",rel:"noopener noreferrer"}},[s._v("0.1 + 0.2不等于0.3？为什么JavaScript有这种“骚”操作？"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.barretlee.com/blog/2016/09/28/ieee754-operation-in-js/",target:"_blank",rel:"noopener noreferrer"}},[s._v("揭秘 0.1 + 0.2 != 0.3"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://coolcao.com/2016/10/12/js%E4%B8%AD0-1-0-2%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E7%AD%89%E4%BA%8E0-3/",target:"_blank",rel:"noopener noreferrer"}},[s._v("js中0.1+0.2为什么不等于0.3"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/camsong/blog/issues/9",target:"_blank",rel:"noopener noreferrer"}},[s._v("JavaScript 浮点数陷阱及解法"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/fsjohnhuang/p/5115672.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("JS魔法堂：彻底理解0.1 + 0.2 === 0.30000000000000004的背后"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"联系作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);n.default=e.exports}}]);