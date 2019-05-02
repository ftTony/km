(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{416:function(n,s,e){"use strict";e.r(s);var a=e(4),r=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"树结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#树结构","aria-hidden":"true"}},[n._v("#")]),n._v(" 树结构")]),n._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[n._v("#")]),n._v(" 前言")]),n._v(" "),e("p",[n._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),n._v(" "),e("h2",{attrs:{id:"内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[n._v("#")]),n._v(" 内容")]),n._v(" "),e("ul",[e("li",[n._v("树的分类")]),n._v(" "),e("li",[n._v("创建BinarySearchTree类")])]),n._v(" "),e("h3",{attrs:{id:"一、树的分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、树的分类","aria-hidden":"true"}},[n._v("#")]),n._v(" 一、树的分类")]),n._v(" "),e("ul",[e("li",[n._v("二叉树："),e("code",[n._v("Binary Search Tree")])]),n._v(" "),e("li",[n._v("AVL树："),e("code",[n._v("AVL Tree")])]),n._v(" "),e("li",[n._v("红黑树："),e("code",[n._v("Red-Black Tree")])]),n._v(" "),e("li",[n._v("线段树："),e("code",[n._v("Segment Tree")])]),n._v(" "),e("li",[n._v("芬威克树："),e("code",[n._v("Fenwick Tree")])])]),n._v(" "),e("h3",{attrs:{id:"二、创建树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、创建树","aria-hidden":"true"}},[n._v("#")]),n._v(" 二、创建树")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function BinarySearchTree(){\n    var Node = function(key){\n        this.key = key;\n        this.left = null;\n        this.right = null;\n    }\n\n    var root = null;\n\n    this.insert = function(key){\n        var newNode = new Node(key);\n\n        if(root === null){\n            root = newNode;\n        }else{\n            insertNode(root.newNode);\n        }\n    };\n\n    this.min = function(){\n        return minNode(root);\n    }\n\n    this.max = function(){\n        return maxNode(root);\n    }\n\n    // 中序遍历\n    this.inOrderTraverse = function(callback){\n        inOrderTraverseNode(root,callback);\n    }\n\n    // 前序遍历\n    this.preOrderTraverse = function(callback){\n        preOrderTraverseNode(root,callback);\n    }\n\n    // 后序遍历\n    this.postOrderTraverse = function(callback){\n        postOrderTraverseNode(root,callback);\n    }\n\n    // 搜索一个特定的值\n    this.search = function(key){\n        return searchNode(root,key);\n    }\n\n    // 删除一个节点\n    this.remove = function(key){\n        root = removeNode(root,key);\n    }\n}\n\nvar removeNode = function(node,key){\n\n    if(node === null){\n        return null;\n    }\n    if(key<node.key){\n        node.left = removeNode(node.left,key);\n        return node;\n    }else if(key>node.key){\n        node.right = removeNode(node.right,key);\n        return node;\n    }else{ // 健等于node.key\n        // 第一种情况——一种叶节点\n        if(node.left === null && node.right === null){\n            node = null;\n            return node;\n        }\n\n        // 第二种情况——一个只有一个子节点的节点\n        if(node.left === null){\n            node= node.right;\n            return node;\n        }else if(node.right===null){\n            node= node.left;\n            return node;\n        }\n\n        // 第三种情况——一个有两个节点的节点\n        var aux = findMinxNode(node.right);\n        node.key = aux.key8;\n        node.right = removeNode(node.right,aux.key);\n        return node;\n    }\n}\n\nvar searchNode = function(node,key){\n    if(node === null){\n        return false;\n    }\n    if(key<node.key){\n        return searchNode(node.left,key);\n    }else if(key>node.key){\n        return searchNode(node.right,key);\n    }else{\n        return true;\n    }\n}\n\nvar inOrderTraverseNode = function(node,callback){\n    if(node !== null){\n        inOrderTraverseNode(node.left,callback);\n        callback(node.key);\n        inOrderTraverseNode(node.right,callback);\n    }\n};\n\nvar preOrderTraverseNode = function(node,callback){\n    if(node!==null){\n        callback(node.key);\n        preOrderTraverseNode(node.left,callback);\n        preOrderTraverseNode(node.right,callback);\n    }\n};\n\nvar postOrderTraverseNode = function(node,callback){\n    if(node!==null){\n        postOrderTraverseNode(node.left,callback);\n        postOrderTraverseNode(node.right,callback);\n        callback(node.key);\n    }\n}\n\nfunction printNode(value){\n    console.log(value);\n}\n\nvar insertNode = function(node,newNode){\n    if(newNode.key < node.key){\n        if(node.left === null){\n            node.left = newNode;\n        }else{\n            insertNode(node.left,newNode);\n        }\n    }else{\n        if(node.right === null){\n            node.right = newNode;\n        }else{\n            insertNode(node.right,newNode);\n        }\n    }\n}\n\n// 最小值\nvar minNode = function(node){\n    if(node){\n        while(node && node.left !== null){\n            node = node.left;\n        }\n        return node.key;\n    }\n    return null;\n};\n\n\n// 最大值\nvar maxNode = function(node){\n    if(node){\n        while(node && node.right !==null){\n            node = node.right;\n        }\n        return node.key;\n    }\n    return null;\n};\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br"),e("span",{staticClass:"line-number"},[n._v("59")]),e("br"),e("span",{staticClass:"line-number"},[n._v("60")]),e("br"),e("span",{staticClass:"line-number"},[n._v("61")]),e("br"),e("span",{staticClass:"line-number"},[n._v("62")]),e("br"),e("span",{staticClass:"line-number"},[n._v("63")]),e("br"),e("span",{staticClass:"line-number"},[n._v("64")]),e("br"),e("span",{staticClass:"line-number"},[n._v("65")]),e("br"),e("span",{staticClass:"line-number"},[n._v("66")]),e("br"),e("span",{staticClass:"line-number"},[n._v("67")]),e("br"),e("span",{staticClass:"line-number"},[n._v("68")]),e("br"),e("span",{staticClass:"line-number"},[n._v("69")]),e("br"),e("span",{staticClass:"line-number"},[n._v("70")]),e("br"),e("span",{staticClass:"line-number"},[n._v("71")]),e("br"),e("span",{staticClass:"line-number"},[n._v("72")]),e("br"),e("span",{staticClass:"line-number"},[n._v("73")]),e("br"),e("span",{staticClass:"line-number"},[n._v("74")]),e("br"),e("span",{staticClass:"line-number"},[n._v("75")]),e("br"),e("span",{staticClass:"line-number"},[n._v("76")]),e("br"),e("span",{staticClass:"line-number"},[n._v("77")]),e("br"),e("span",{staticClass:"line-number"},[n._v("78")]),e("br"),e("span",{staticClass:"line-number"},[n._v("79")]),e("br"),e("span",{staticClass:"line-number"},[n._v("80")]),e("br"),e("span",{staticClass:"line-number"},[n._v("81")]),e("br"),e("span",{staticClass:"line-number"},[n._v("82")]),e("br"),e("span",{staticClass:"line-number"},[n._v("83")]),e("br"),e("span",{staticClass:"line-number"},[n._v("84")]),e("br"),e("span",{staticClass:"line-number"},[n._v("85")]),e("br"),e("span",{staticClass:"line-number"},[n._v("86")]),e("br"),e("span",{staticClass:"line-number"},[n._v("87")]),e("br"),e("span",{staticClass:"line-number"},[n._v("88")]),e("br"),e("span",{staticClass:"line-number"},[n._v("89")]),e("br"),e("span",{staticClass:"line-number"},[n._v("90")]),e("br"),e("span",{staticClass:"line-number"},[n._v("91")]),e("br"),e("span",{staticClass:"line-number"},[n._v("92")]),e("br"),e("span",{staticClass:"line-number"},[n._v("93")]),e("br"),e("span",{staticClass:"line-number"},[n._v("94")]),e("br"),e("span",{staticClass:"line-number"},[n._v("95")]),e("br"),e("span",{staticClass:"line-number"},[n._v("96")]),e("br"),e("span",{staticClass:"line-number"},[n._v("97")]),e("br"),e("span",{staticClass:"line-number"},[n._v("98")]),e("br"),e("span",{staticClass:"line-number"},[n._v("99")]),e("br"),e("span",{staticClass:"line-number"},[n._v("100")]),e("br"),e("span",{staticClass:"line-number"},[n._v("101")]),e("br"),e("span",{staticClass:"line-number"},[n._v("102")]),e("br"),e("span",{staticClass:"line-number"},[n._v("103")]),e("br"),e("span",{staticClass:"line-number"},[n._v("104")]),e("br"),e("span",{staticClass:"line-number"},[n._v("105")]),e("br"),e("span",{staticClass:"line-number"},[n._v("106")]),e("br"),e("span",{staticClass:"line-number"},[n._v("107")]),e("br"),e("span",{staticClass:"line-number"},[n._v("108")]),e("br"),e("span",{staticClass:"line-number"},[n._v("109")]),e("br"),e("span",{staticClass:"line-number"},[n._v("110")]),e("br"),e("span",{staticClass:"line-number"},[n._v("111")]),e("br"),e("span",{staticClass:"line-number"},[n._v("112")]),e("br"),e("span",{staticClass:"line-number"},[n._v("113")]),e("br"),e("span",{staticClass:"line-number"},[n._v("114")]),e("br"),e("span",{staticClass:"line-number"},[n._v("115")]),e("br"),e("span",{staticClass:"line-number"},[n._v("116")]),e("br"),e("span",{staticClass:"line-number"},[n._v("117")]),e("br"),e("span",{staticClass:"line-number"},[n._v("118")]),e("br"),e("span",{staticClass:"line-number"},[n._v("119")]),e("br"),e("span",{staticClass:"line-number"},[n._v("120")]),e("br"),e("span",{staticClass:"line-number"},[n._v("121")]),e("br"),e("span",{staticClass:"line-number"},[n._v("122")]),e("br"),e("span",{staticClass:"line-number"},[n._v("123")]),e("br"),e("span",{staticClass:"line-number"},[n._v("124")]),e("br"),e("span",{staticClass:"line-number"},[n._v("125")]),e("br"),e("span",{staticClass:"line-number"},[n._v("126")]),e("br"),e("span",{staticClass:"line-number"},[n._v("127")]),e("br"),e("span",{staticClass:"line-number"},[n._v("128")]),e("br"),e("span",{staticClass:"line-number"},[n._v("129")]),e("br"),e("span",{staticClass:"line-number"},[n._v("130")]),e("br"),e("span",{staticClass:"line-number"},[n._v("131")]),e("br"),e("span",{staticClass:"line-number"},[n._v("132")]),e("br"),e("span",{staticClass:"line-number"},[n._v("133")]),e("br"),e("span",{staticClass:"line-number"},[n._v("134")]),e("br"),e("span",{staticClass:"line-number"},[n._v("135")]),e("br"),e("span",{staticClass:"line-number"},[n._v("136")]),e("br"),e("span",{staticClass:"line-number"},[n._v("137")]),e("br"),e("span",{staticClass:"line-number"},[n._v("138")]),e("br"),e("span",{staticClass:"line-number"},[n._v("139")]),e("br"),e("span",{staticClass:"line-number"},[n._v("140")]),e("br"),e("span",{staticClass:"line-number"},[n._v("141")]),e("br"),e("span",{staticClass:"line-number"},[n._v("142")]),e("br"),e("span",{staticClass:"line-number"},[n._v("143")]),e("br"),e("span",{staticClass:"line-number"},[n._v("144")]),e("br"),e("span",{staticClass:"line-number"},[n._v("145")]),e("br"),e("span",{staticClass:"line-number"},[n._v("146")]),e("br"),e("span",{staticClass:"line-number"},[n._v("147")]),e("br"),e("span",{staticClass:"line-number"},[n._v("148")]),e("br"),e("span",{staticClass:"line-number"},[n._v("149")]),e("br"),e("span",{staticClass:"line-number"},[n._v("150")]),e("br"),e("span",{staticClass:"line-number"},[n._v("151")]),e("br"),e("span",{staticClass:"line-number"},[n._v("152")]),e("br"),e("span",{staticClass:"line-number"},[n._v("153")]),e("br"),e("span",{staticClass:"line-number"},[n._v("154")]),e("br"),e("span",{staticClass:"line-number"},[n._v("155")]),e("br"),e("span",{staticClass:"line-number"},[n._v("156")]),e("br"),e("span",{staticClass:"line-number"},[n._v("157")]),e("br"),e("span",{staticClass:"line-number"},[n._v("158")]),e("br"),e("span",{staticClass:"line-number"},[n._v("159")]),e("br"),e("span",{staticClass:"line-number"},[n._v("160")]),e("br"),e("span",{staticClass:"line-number"},[n._v("161")]),e("br"),e("span",{staticClass:"line-number"},[n._v("162")]),e("br"),e("span",{staticClass:"line-number"},[n._v("163")]),e("br"),e("span",{staticClass:"line-number"},[n._v("164")]),e("br"),e("span",{staticClass:"line-number"},[n._v("165")]),e("br"),e("span",{staticClass:"line-number"},[n._v("166")]),e("br"),e("span",{staticClass:"line-number"},[n._v("167")]),e("br"),e("span",{staticClass:"line-number"},[n._v("168")]),e("br")])]),e("h3",{attrs:{id:"三、树的相关方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、树的相关方法","aria-hidden":"true"}},[n._v("#")]),n._v(" 三、树的相关方法")]),n._v(" "),e("ul",[e("li",[e("code",[n._v("insert(key)")]),n._v("：向树中插入一个新的键。")]),n._v(" "),e("li",[e("code",[n._v("search(key)")]),n._v("：在树中查找一个键，如果节点存在，则返回true；如果不存在，则返回false。")]),n._v(" "),e("li",[e("code",[n._v("inOrderTraverse")]),n._v("：通过中序遍历方式遍历所有节点。")]),n._v(" "),e("li",[e("code",[n._v("preOrderTraverse")]),n._v("：通过先序遍历方式遍历所有节点。")]),n._v(" "),e("li",[e("code",[n._v("postOrderTraverse")]),n._v("：通过后序遍历方式遍历所有节点。")]),n._v(" "),e("li",[e("code",[n._v("min")]),n._v("：返回树中最小的值/键。")]),n._v(" "),e("li",[e("code",[n._v("max")]),n._v("：返回树中最大的值/键。")]),n._v(" "),e("li",[e("code",[n._v("remove(key)")]),n._v("：从树中移除某个键")])]),n._v(" "),e("h3",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[n._v("#")]),n._v(" 参考资料")]),n._v(" "),e("ul",[e("li",[n._v("《学习JavaScript数据结构与算法》")])]),n._v(" "),e("h2",{attrs:{id:"联系作者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[n._v("#")]),n._v(" 联系作者")]),n._v(" "),e("div",{attrs:{align:"center"}},[e("p",[n._v("\n        平凡世界，贵在坚持。\n    ")]),n._v(" "),e("img",{attrs:{src:n.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);s.default=r.exports}}]);