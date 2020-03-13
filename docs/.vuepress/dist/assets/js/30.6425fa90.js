(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{255:function(s,n,e){"use strict";e.r(n);var a=e(13),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"散列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#散列表"}},[s._v("#")]),s._v(" 散列表")]),s._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("p",[s._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),s._v(" "),e("h2",{attrs:{id:"内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E6%95%A3%E5%88%97%E8%A1%A8%E4%BB%8B%E7%BB%8D"}},[s._v("散列表介绍")])]),s._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E5%88%9B%E5%BB%BA%E6%95%A3%E5%88%97%E8%A1%A8"}},[s._v("创建散列表")])]),s._v(" "),e("li",[e("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E6%95%A3%E5%88%97%E8%A1%A8%E5%86%B2%E7%AA%81"}},[s._v("散列表冲突")])])]),s._v(" "),e("h3",{attrs:{id:"一、散列表介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、散列表介绍"}},[s._v("#")]),s._v(" 一、散列表介绍")]),s._v(" "),e("p",[s._v("散列表的英文叫“Hash Talbe”，也叫 HashMap 类，它是 Dictionary 类的一种散列表实现方式。")]),s._v(" "),e("p",[e("strong",[s._v("散列")]),s._v(" 算法的作用是尽可能快地在数据结构中找到一个值。")]),s._v(" "),e("h3",{attrs:{id:"二、创建散列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、创建散列表"}},[s._v("#")]),s._v(" 二、创建散列表")]),s._v(" "),e("h4",{attrs:{id:"_2-1-散列表相关方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-散列表相关方法"}},[s._v("#")]),s._v(" 2.1 散列表相关方法")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("put(key,value)")]),s._v("：向散列表增加一个新的项（也能更新散列表）。")]),s._v(" "),e("li",[e("code",[s._v("remove(key)")]),s._v("：根据键值从散列表中移除值。")]),s._v(" "),e("li",[e("code",[s._v("get(key)")]),s._v("：返回根据键值检索到的特定的值。")])]),s._v(" "),e("h4",{attrs:{id:"_2-2-代码实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-代码实现"}},[s._v("#")]),s._v(" 2.2 代码实现")]),s._v(" "),e("p",[e("strong",[s._v("ES5 代码实现")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function HashTable(){\n    var table = [];\n\n    this.put = function(key,value){\n        var position = loseloseHashCode(key);\n        console.log(position + ' - ' + key);\n        table[position] = value;\n    }\n\n    this.get = function(key){\n        return table[loseloseHashCode(key)];\n    }\n\n    this.remove = function(key){\n        table[loseloseHashCode(key)] = undefined;\n    }\n}\n\nvar loseloseHashCode = function(key){\n    var hash = 0;\n    for(var i = 0;i<key.length;i++){\n        hash += key.charCodeAt(i);\n    }\n    return hash % 37;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br")])]),e("p",[e("strong",[s._v("ES6 代码实现")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function defaultToString(item) {\n  if (item === null) {\n    return 'NULL'\n  } else if (item === undefined) {\n    return 'UNDEFINED'\n  } else if (typeof item === 'string' || item instanceof String) {\n    return `${item}`\n  }\n  return item.toString()\n}\n\nclass ValuePair {\n  constructor(key, value) {\n    this.key = key\n    this.value = value\n  }\n  toString() {\n    return `[#${this.key}:${this.value}]`\n  }\n}\nclass HashTable {\n  constructor(toStrFn = defaultToString) {\n    this.toStrFn = toStrFn\n    this.table = {}\n  }\n  loseloseHashCode(key) {\n    if (typeof key === 'number') {\n      return key\n    }\n    const tableKey = this.toStrFn(key)\n    let hash = 0\n    for (let i = 0; i < tableKey.length; i++) {\n      hash += tableKey.charCodeAt(i)\n    }\n    return hash % 37\n  }\n  hashCode(key) {\n    return this.loseloseHashCode(key)\n  }\n  put(key, value) {\n    if (key != null && value != null) {\n      const position = this.hashCode(key)\n      this.table[position] = new ValuePair(key, value)\n      return true\n    }\n    return false\n  }\n  get(key) {\n    const valuePair = this.table[this.hashCode(key)]\n    return valuePair == null ? undefined : valuePair.value\n  }\n  remove(key) {\n    const hash = this.hashCode(key)\n    const valuePair = this.table[hash]\n    if (valuePair != null) {\n      delete this.table[hash]\n      return true\n    }\n    return false\n  }\n  getTable() {\n    return this.table\n  }\n  isEmpty() {\n    return this.size() === 0\n  }\n  size() {\n    return Object.keys(this.table).length\n  }\n  clear() {\n    this.table = {}\n  }\n  toString() {\n    if (this.isEmpty()) {\n      return ''\n    }\n    const keys = Object.keys(this.table)\n    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`\n    for (let i = 1; i < keys.length; i++) {\n      objString = `${objString},{${keys[i]} => ${this.table[\n        keys[i]\n      ].toString()}}`\n    }\n    return objString\n  }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br"),e("span",{staticClass:"line-number"},[s._v("84")]),e("br"),e("span",{staticClass:"line-number"},[s._v("85")]),e("br"),e("span",{staticClass:"line-number"},[s._v("86")]),e("br")])]),e("h3",{attrs:{id:"三、散列表冲突"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、散列表冲突"}},[s._v("#")]),s._v(" 三、散列表冲突")]),s._v(" "),e("p",[s._v("处理散列表冲突主要有以下几种方法：链表法、线性探查、双散列法")]),s._v(" "),e("h4",{attrs:{id:"_3-1-链表法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-链表法"}},[s._v("#")]),s._v(" 3.1 链表法")]),s._v(" "),e("p",[e("strong",[s._v("链表法")]),s._v(" 包括为散列表的每一个位置创建一个链表并将元素存储在里面。")]),s._v(" "),e("p",[s._v("代码如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("class HashTableSeparateChaining {\n  constructor(toStrFn = defaultToString) {\n    this.toStrFn = toStrFn\n    this.table = {}\n  }\n  put(key, value) {\n    if (key != null && value != null) {\n      const position = this.hashCode(key)\n      if (this.table[position] == null) {\n        this.table[position] = new linkedList()\n      }\n      this.table[position].push(new ValuePair(key, value))\n      return true\n    }\n    return false\n  }\n  get(key) {\n    const position = this.hashCode(key)\n    const linkedList = this.table[position]\n    if (linkedList != null && !linkedList.isEmpty()) {\n      let current = linkedList.getHead()\n      while (current != null) {\n        if (current.element.key === key) {\n          return current.element.value\n        }\n        current = current.next\n      }\n    }\n    return undefined\n  }\n  remove(key) {\n    const position = this.hashCode(key)\n    const linkedList = this.table[position]\n    if (linkedList != null && !linkedList.isEmpty()) {\n      let current = linkedList.getHead()\n      while (current != null) {\n        if (current.element.key === key) {\n          linkedList.remove(current.element)\n          if (linkedList.isEmpty()) {\n            delete this.table[position]\n          }\n          return true\n        }\n        current = current.next\n      }\n    }\n    return false\n  }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br")])]),e("h4",{attrs:{id:"_3-2-线性探查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-线性探查"}},[s._v("#")]),s._v(" 3.2 线性探查")]),s._v(" "),e("p",[s._v("之所以称作线性，是因为它处理冲突是将元素直接存储到表中，而不是在单独的数据结构中。")]),s._v(" "),e("p",[s._v("当想向表中某个位置添加一个新元素的时候，如果索引为 position 的位置已经被占据了，就尝试 position+1 的位置。如果 postion+1 位置也被占据了，就尝试 position+1 的位置，以此类推。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("class HashTableLinearProbing {\n    constructor(toStrFn = defaultToString) {\n        this.toStrFn = toStrFn\n        this.table = {}\n    }\n    loseloseHashCode(key) {\n        if (typeof key === 'number') {\n            return key\n        }\n        const tableKey = this.toStrFn(key)\n        let hash = 0\n        for (let i = 0; i < this.tableKey.length; i++) {\n            hash += tableKey.charCodeAt(i)\n        }\n        return hash % 37\n    }\n    hashCode(key) {\n        return this.loseloseHashCode(key)\n    }\n    put(key, value) {\n        if (key != null && value != null) {\n            const position = this.hashCode(key)\n            if (this.table[position] == null) {\n                this.table[position] = new ValuePair(key, value)\n            } else {\n                let index = position + 1\n                while (this.table[index] != null) {\n                    index++\n                }\n                this.table[index] = new ValuePair(key, value)\n            }\n            return true\n        }\n        return false\n    }\n    get(key) {\n        const position = this.hashCode(key)\n        if (this.table[position] != null) {\n            if (this.table[position].key === key) {\n                return this.table[position].value\n            }\n            let index = position + 1\n            while (this.table[index] != null && this.table[index].key !== key) {\n                index++\n            }\n            if (this.table[index] != null && this.table[index].key !== key) {\n                return this.table[position].value\n            }\n        }\n        return undefined\n    }\n    remove(key) {\n        const position = this.hashCode(key)\n        if (this.table[position] != null) {\n            if (this.table[position].key === key) {\n                delete this.table[position]\n                this.verifyRemoveSideEffect(key, position)\n                return true\n            }\n            let index = position + 1\n            while (this.table[index] != null && this.table[index].key !== key) {\n                index++\n            }\n            if (this.table[index] != null && this.table[index].key === key) {\n                delete this.table[index]\n                this.verifyRemoveSideEffect(key, index)\n                return true\n            }\n        }\n        return false\n    }\n    verifyRemoveSideEffect(key, removedPosition) {\n        const hash = this.hashCode(key)\n        let index = removedPosition + 1\n        while (this.table[index] != null) {\n            const posHash = this.hashCode(this.table[index].key)\n            if (posHash <= hash || posHash <= removedPosition) {\n                delete  this.table[index]\n                removePosition = index\n            }\n            index++;\n        }\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br"),e("span",{staticClass:"line-number"},[s._v("84")]),e("br")])]),e("h3",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),e("ul",[e("li",[s._v("《学习 JavaScript 数据结构与算法》")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/EJt0wvsVujKy040Juq28Qw",target:"_blank",rel:"noopener noreferrer"}},[s._v("动画：什么是散列表？"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/5ABSQrCuexhoKWHouL-YIA",target:"_blank",rel:"noopener noreferrer"}},[s._v("散列表 | 文本编辑器是如何检查英文单词出错的？"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"联系作者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联系作者"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),e("div",{attrs:{align:"center"}},[e("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),e("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);n.default=t.exports}}]);