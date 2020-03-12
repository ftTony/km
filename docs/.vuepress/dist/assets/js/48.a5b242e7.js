(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{268:function(s,n,a){"use strict";a.r(n);var e=a(13),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"集合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集合"}},[s._v("#")]),s._v(" 集合")]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),s._v(" "),a("h2",{attrs:{id:"内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E9%9B%86%E5%90%88%E4%BB%8B%E7%BB%8D"}},[s._v("集合介绍")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E5%88%9B%E5%BB%BA%E9%9B%86%E5%90%88"}},[s._v("创建集合")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E9%9B%86%E5%90%88%E5%BA%94%E7%94%A8"}},[s._v("集合应用")])])]),s._v(" "),a("h3",{attrs:{id:"一、集合介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、集合介绍"}},[s._v("#")]),s._v(" 一、集合介绍")]),s._v(" "),a("p",[a("strong",[s._v("集合")]),s._v(" 是由一组无序且唯一（即不能重复）的项组成的。该数据结构使用了与有限集合相同的数据概念，但应用在计算机科学的数据结构中。")]),s._v(" "),a("p",[s._v("集合有并集、交集、差集等基本运算。")]),s._v(" "),a("h3",{attrs:{id:"二、创建集合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、创建集合"}},[s._v("#")]),s._v(" 二、创建集合")]),s._v(" "),a("h4",{attrs:{id:"_2-1-集合相关方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-集合相关方法"}},[s._v("#")]),s._v(" 2.1 集合相关方法")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("add(element)")]),s._v("：向集合添加一个新元素。")]),s._v(" "),a("li",[a("code",[s._v("delete(element)")]),s._v("：从集合移除一个元素。")]),s._v(" "),a("li",[a("code",[s._v("has(element)")]),s._v("：如果元素在集合中，返回 true，否返回 false。")]),s._v(" "),a("li",[a("code",[s._v("clear()")]),s._v("：移除集合中的所有元素。")]),s._v(" "),a("li",[a("code",[s._v("size()")]),s._v("：返回集合所包含元素的数量。它与数组的 length 属性类似。")]),s._v(" "),a("li",[a("code",[s._v("values()")]),s._v("：返回一个包含集合中所有值（元素）的数组。")])]),s._v(" "),a("h4",{attrs:{id:"_2-2-代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-代码实现"}},[s._v("#")]),s._v(" 2.2 代码实现")]),s._v(" "),a("p",[a("strong",[s._v("es5 实现")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function Set() {\n\n    var items = {};\n\n    this.add = function (value) {\n        if (!this.has(value)) {\n            items[value] = value;\n            return true;\n        }\n        return false;\n    };\n\n    this.remove = function (value) {\n        if (this.has(value)) {\n            delete items[value];\n            return true;\n        }\n        return false;\n    };\n\n    this.has = function (value) {\n        return items.hasOwnProperty(value);\n        //return value in items;\n    };\n\n    this.clear = function () {\n        items = {};\n    };\n\n    /**\n     * Modern browsers function\n     * IE9+, FF4+, Chrome5+, Opera12+, Safari5+\n     * @returns {Number}\n     */\n    this.size = function () {\n        return Object.keys(items).length;\n    };\n\n    /**\n     * cross browser compatibility - legacy browsers\n     * for modern browsers use size function\n     * @returns {number}\n     */\n    this.sizeLegacy = function () {\n        var count = 0;\n        for (var prop in items) {\n            if (items.hasOwnProperty(prop))\n                ++count;\n        }\n        return count;\n    };\n\n    /**\n     * Modern browsers function\n     * IE9+, FF4+, Chrome5+, Opera12+, Safari5+\n     * @returns {Array}\n     */\n    this.values = function () {\n        return Object.keys(items);\n    };\n\n    this.valuesLegacy = function () {\n        var keys = [];\n        for (var key in items) {\n            keys.push(key);\n        }\n        return keys;\n    };\n\n    this.getItems = function () {\n        return items;\n    };\n\n    this.union = function (otherSet) {\n        var unionSet = new Set(); //{1}\n\n        var values = this.values(); //{2}\n        for (var i = 0; i < values.length; i++) {\n            unionSet.add(values[i]);\n        }\n\n        values = otherSet.values(); //{3}\n        for (var i = 0; i < values.length; i++) {\n            unionSet.add(values[i]);\n        }\n\n        return unionSet;\n    };\n\n    this.intersection = function (otherSet) {\n        var intersectionSet = new Set(); //{1}\n\n        var values = this.values();\n        for (var i = 0; i < values.length; i++) { //{2}\n            if (otherSet.has(values[i])) { //{3}\n                intersectionSet.add(values[i]); //{4}\n            }\n        }\n\n        return intersectionSet;\n    };\n\n    this.difference = function (otherSet) {\n        var differenceSet = new Set(); //{1}\n\n        var values = this.values();\n        for (var i = 0; i < values.length; i++) { //{2}\n            if (!otherSet.has(values[i])) { //{3}\n                differenceSet.add(values[i]); //{4}\n            }\n        }\n\n        return differenceSet;\n    };\n\n    this.subset = function (otherSet) {\n\n        if (this.size() > otherSet.size()) { //{1}\n            return false;\n        } else {\n            var values = this.values();\n            for (var i = 0; i < values.length; i++) { //{2}\n                if (!otherSet.has(values[i])) { //{3}\n                    return false; //{4}\n                }\n            }\n            return true;\n        }\n    };\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br"),a("span",{staticClass:"line-number"},[s._v("127")]),a("br"),a("span",{staticClass:"line-number"},[s._v("128")]),a("br"),a("span",{staticClass:"line-number"},[s._v("129")]),a("br"),a("span",{staticClass:"line-number"},[s._v("130")]),a("br")])]),a("p",[a("strong",[s._v("es6 实现")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Set {\n  constructor() {\n    this.items = {}\n  }\n  add(element) {\n    if (!this.has(element)) {\n      this.items[element] = element\n      return true\n    }\n    return false\n  }\n  delete(element) {\n    if (this.has(element)) {\n      delete this.items[element]\n      return true\n    }\n    return false\n  }\n  has(element) {\n    return Object.prototype.hasOwnProperty.call(this.items, element)\n  }\n  values() {\n    return Object.values(this.items)\n  }\n  // 并集操作\n  union(otherSet) {\n    const unionSet = new Set()\n    this.values().forEach(value => unionSet.add(value))\n    otherSet.values().forEach(value => unionSet.add(value))\n    return unionSet\n  }\n  // 交集操作\n  intersection(otherSet) {\n    const intersectionSet = new Set()\n    const values = this.values()\n    const otherValues = otherSet.values()\n    let biggerSet = values\n    let smallerSet = otherValues\n    if (otherValues.length - values.length > 0) {\n    }\n    smallerSet.forEach(value => {\n      if (biggerSet.includes(value)) {\n        intersectionSet.add(value)\n      }\n    })\n    return intersectionSet\n  }\n  // 差集操作\n  difference(otherSet) {\n    const differenceSet = new Set()\n    this.values().forEach(value => {\n      if (!otherSet.has(value)) {\n        differenceSet.add(value)\n      }\n    })\n    return differenceSet\n  }\n  // 子集操作\n  isSubsetOf(otherSet) {\n    if (this.size() > otherSet.size()) {\n      return false\n    }\n    let isSubset = true\n    this.values().every(value => {\n      if (!otherSet.has(value)) {\n        isSubset = false\n        return false\n      }\n      return true\n    })\n    return isSubsetOf\n  }\n  isEmpty() {\n    return this.size() === 0\n  }\n  size() {\n    return Object.keys(this.items).length\n  }\n  clear() {\n    this.items = {}\n  }\n  toString() {\n    if (this.isEmpty()) {\n      return ''\n    }\n    const values = this.values()\n    let objString = `${values[0]}`\n    for (let i = 1; i < values.length; i++) {\n      objString = `${objString},${values[i].toString()}`\n    }\n    return objString\n  }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br")])]),a("h3",{attrs:{id:"三、集合应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、集合应用"}},[s._v("#")]),s._v(" 三、集合应用")]),s._v(" "),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[s._v("《学习 JavaScript 数据结构与算法》")])]),s._v(" "),a("h2",{attrs:{id:"联系作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系作者"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);n.default=t.exports}}]);