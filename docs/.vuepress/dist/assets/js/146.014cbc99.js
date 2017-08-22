(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{427:function(e,r,t){"use strict";t.r(r);var a=t(4),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"buffer-模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#buffer-模块","aria-hidden":"true"}},[e._v("#")]),e._v(" buffer 模块")]),e._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),t("p",[e._v("Buffer是"),t("code",[e._v("node")]),e._v("的核心模块，开发者可以利用它 来处理二进制数据，比如文件流的读写、网络请求数据的处理等。")]),e._v(" "),t("p",[e._v("Buffer 的"),t("code",[e._v("API")]),e._v("非常多，本文仅挑选 比较常用/容易理解的"),t("code",[e._v("API")]),e._v("进行讲解，包括"),t("code",[e._v("Buffer")]),e._v("实例的创建、比较、连接、拷贝、查找、遍历、类型转换、截取、编码转换等。")]),e._v(" "),t("h2",{attrs:{id:"内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[e._v("#")]),e._v(" 内容")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E4%B8%80%E3%80%81buffer-%E7%BB%93%E6%9E%84"}},[e._v("Buffer 结构")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%8C%E3%80%81buffer-%E7%9A%84%E8%BD%AC%E6%8D%A2"}},[e._v("Buffer 的转换")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B8%89%E3%80%81buffer-%E7%9A%84%E6%8B%BC%E6%8E%A5"}},[e._v("Buffer 的拼接")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E5%9B%9B%E3%80%81buffer-%E7%9B%B8%E5%85%B3%E6%96%B9%E6%B3%95"}},[e._v("Buffer 相关方法")])])]),e._v(" "),t("h3",{attrs:{id:"一、buffer-结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、buffer-结构","aria-hidden":"true"}},[e._v("#")]),e._v(" 一、Buffer 结构")]),e._v(" "),t("p",[e._v("Buffer 是一个像 Array 的对象，但它主要用于操作字节。")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#11-%E6%A8%A1%E5%9D%97%E7%BB%93%E6%9E%84"}},[e._v("模块结构")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#12-buffer-%E5%AF%B9%E8%B1%A1"}},[e._v("Buffer 对象")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#13-buffer-%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D"}},[e._v("Buffer 内存分配")])])]),e._v(" "),t("h4",{attrs:{id:"_1-1-模块结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-模块结构","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.1 模块结构")]),e._v(" "),t("p",[e._v("Buffer 是一个典型的 JavaScript 与 C++结合的模块，它将性能相关部分用 C++实现，将非性能相关的部分用 JavaScript 实现。")]),e._v(" "),t("h4",{attrs:{id:"_1-2-buffer-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-buffer-对象","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.2 Buffer 对象")]),e._v(" "),t("p",[e._v("Buffer 对象类似于数组，它的元素为 16 进制的两位数，即 0 到 255 的数值。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var str = '深入浅出node.js';\nvar buf = new Buffer(str,'utf-8');\nconsole.log(buf);\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h4",{attrs:{id:"_1-3-buffer-内存分配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-buffer-内存分配","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.3 Buffer 内存分配")]),e._v(" "),t("p",[e._v("Buffer 对象的内存分配不是在 V8 的堆内存中，而是在 Node 的 C++层面实现内存的申请的。因为处理大量的字节数据不能采用需要一点内存就向操作系统申请一点内存的方式，这可能千万大量内存申请的系统调用。Node 采用了 slab 分配机制，slab 具有 3 种状态")]),e._v(" "),t("ul",[t("li",[e._v("full：完全分配状态")]),e._v(" "),t("li",[e._v("partial：部分分配状态")]),e._v(" "),t("li",[e._v("empty：没有被分配状态")])]),e._v(" "),t("h3",{attrs:{id:"二、buffer-的转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、buffer-的转换","aria-hidden":"true"}},[e._v("#")]),e._v(" 二、Buffer 的转换")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#21-%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BD%AC-buffer"}},[e._v("字符串转 Buffer")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#22-buffer-%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2"}},[e._v("Buffer 转字符串")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#23-buffer-%E4%B8%8D%E6%94%AF%E6%8C%81%E7%9A%84%E7%BC%96%E7%A0%81%E7%B1%BB%E5%9E%8B"}},[e._v("Buffer 不支持的编码类型")])])]),e._v(" "),t("h4",{attrs:{id:"_2-1-字符串转-buffer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-字符串转-buffer","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.1 字符串转 Buffer")]),e._v(" "),t("p",[e._v("字符串转 Buffer 对象主要是通过构造函数完成的：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("new Buffer(str,[encoding]);\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h4",{attrs:{id:"_2-2-buffer-转字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-buffer-转字符串","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.2 Buffer 转字符串")]),e._v(" "),t("p",[e._v("实现 Buffer 向字符串转换，主要是通过 Buffer 对象的 toString()可以将 Buffer 对象转换为字符串。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("buf.toString([encoding],[start],[end])\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h4",{attrs:{id:"_2-3-buffer-不支持的编码类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-buffer-不支持的编码类型","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.3 Buffer 不支持的编码类型")]),e._v(" "),t("p",[e._v("Node 的 Buffer 对象支持的编码类型有限，可以使用 isEncoding()函数来判断编码是否支持转换，iconv 和 iconv-lite 两个模块可以支持更多的编码类型转换。")]),e._v(" "),t("h3",{attrs:{id:"三、buffer-的拼接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、buffer-的拼接","aria-hidden":"true"}},[e._v("#")]),e._v(" 三、Buffer 的拼接")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#31-%E4%B9%B1%E7%A0%81%E6%98%AF%E5%A6%82%E4%BD%95%E4%BA%A7%E7%94%9F%E7%9A%84"}},[e._v("乱码是如何产生的")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#32-setencoding%E4%B8%8E-string_decoder"}},[e._v("setEncoding()与 string_decoder()")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#33-%E6%AD%A3%E7%A1%AE%E6%8B%BC%E6%8E%A5-buffer"}},[e._v("正确拼接 Buffer")])])]),e._v(" "),t("h4",{attrs:{id:"_3-1-乱码是如何产生的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-乱码是如何产生的","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.1 乱码是如何产生的")]),e._v(" "),t("p",[e._v("原因在于文件可读流在读取时会逐个读取 Buffer。中文字在 UTF-8 下占 3 个字节。")]),e._v(" "),t("h4",{attrs:{id:"_3-2-setencoding-与-string-decoder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-setencoding-与-string-decoder","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.2 setEncoding()与 string_decoder()")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("setEncoding()")]),e._v("：设置编码")]),e._v(" "),t("li",[t("code",[e._v("string_decoder()")]),e._v("：设置解码")])]),e._v(" "),t("h4",{attrs:{id:"_3-3-正确拼接-buffer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-正确拼接-buffer","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.3 正确拼接 Buffer")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Buffer.concat = function(list,length){\n    if(!Array.isArray(list)){\n        throw new Error('Usage:Buffer.concat(list,[length])');\n    }\n\n    if(list.length ===0){\n        return new Buffer(0);\n    }else if(list.length ===1){\n        return list[0];\n    }\n\n    if(typeof length !== 'number'){\n        length =0;\n        for(var i=0;i<list.length;i++){\n            var buf = list[i];\n            length+=buf.length;\n        }\n    }\n\n    var buffer = new Buffer(length);\n    var pos=0;\n    for(var i=0;i<list.length;i++){\n        var buf = list[i];\n        buf.copy(buffer.pos);\n        pos+= buf.length;\n    }\n    return buffer;\n};\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br")])]),t("h3",{attrs:{id:"四、buffer-相关方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、buffer-相关方法","aria-hidden":"true"}},[e._v("#")]),e._v(" 四、Buffer 相关方法")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("buf.equals(otherBuffer)：")]),e._v(" 判断两个 buffer 实例存储的数据是否相同，如果是，返回 true，否则返回 false。")]),e._v(" "),t("li",[t("strong",[e._v("buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])：")]),e._v(" 也判断两个 buffer 实例进行比较，不同的是：可以指定比较的范围；返回值为整数，达标 buf、target 的大小关系")]),e._v(" "),t("li",[t("strong",[e._v("Buffer.from([62])：")]),e._v(" 每个 array 的元素对应 1 个字节（8 位），取值从 0 到 255。")]),e._v(" "),t("li",[t("strong",[e._v("Buffer.concat(list[, totalLength])：")]),e._v(" 返回一个合并了"),t("code",[e._v("list")]),e._v("中所有"),t("code",[e._v("Buffer")]),e._v("实例的新"),t("code",[e._v("Buffer")]),e._v("。")]),e._v(" "),t("li",[t("strong",[e._v("buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])：")]),e._v(" 拷贝"),t("code",[e._v("buf")]),e._v("中某个区域的数据到"),t("code",[e._v("target")]),e._v("中的某个区域，即使"),t("code",[e._v("target")]),e._v("的内存区域与"),t("code",[e._v("buf")]),e._v("的重叠。")]),e._v(" "),t("li",[t("strong",[e._v("buf.indexOf(value[, byteOffset][, encoding])：")]),e._v(" 跟数组的查找差不多，需要注意的是，value 可能是 String、Buffer、Integer 中的任意类型。")]),e._v(" "),t("li",[t("strong",[e._v("buf.write(string[, offset[, length]][, encoding])：")]),e._v(" 将 string 写入 buf 实例，同时返回写入的字节数。")]),e._v(" "),t("li",[t("strong",[e._v("buf.fill(value[, offset[, end]][, encoding])：")]),e._v(" 用"),t("code",[e._v("value")]),e._v("填充 buf，常用于寝化 buf。")]),e._v(" "),t("li",[t("strong",[e._v("buf.toString([encoding[, start[, end]]])：")]),e._v(" 把 buf 解码成字符串")]),e._v(" "),t("li",[t("strong",[e._v("buf.toJSON()：")]),e._v(" 转成 JSON 字符串")]),e._v(" "),t("li",[t("strong",[e._v("buf.values()、buf.keys()、buf.entries()：")]),e._v(" 用于对 "),t("code",[e._v("buf")]),e._v("进行 "),t("code",[e._v("for...of")]),e._v("遍历")]),e._v(" "),t("li",[t("strong",[e._v("buf.slice([start[, end]])：")]),e._v(" 用于截取 buf，并返回一个新的 Buffer 实例。")])]),e._v(" "),t("h3",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("ul",[t("li",[e._v("《深入浅出 Nodejs》")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/buffer.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("buffer 模块"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"联系作者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[e._v("#")]),e._v(" 联系作者")]),e._v(" "),t("div",{attrs:{align:"center"}},[t("p",[e._v("\n        平凡世界，贵在坚持。\n    ")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);r.default=s.exports}}]);