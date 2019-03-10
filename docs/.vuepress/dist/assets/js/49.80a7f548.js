(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{281:function(n,s,e){"use strict";e.r(s);var a=e(4),r=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"树结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#树结构","aria-hidden":"true"}},[n._v("#")]),n._v(" 树结构")]),n._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[n._v("#")]),n._v(" 前言")]),n._v(" "),e("p",[n._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),n._v(" "),e("h2",{attrs:{id:"内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[n._v("#")]),n._v(" 内容")]),n._v(" "),e("ul",[e("li",[n._v("树的分类")]),n._v(" "),e("li",[n._v("创建 BinarySearchTree 类")])]),n._v(" "),e("h3",{attrs:{id:"一、树的分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、树的分类","aria-hidden":"true"}},[n._v("#")]),n._v(" 一、树的分类")]),n._v(" "),e("ul",[e("li",[n._v("二叉树："),e("code",[n._v("Binary Search Tree")])]),n._v(" "),e("li",[n._v("AVL 树："),e("code",[n._v("AVL Tree")])]),n._v(" "),e("li",[n._v("红黑树："),e("code",[n._v("Red-Black Tree")])]),n._v(" "),e("li",[n._v("线段树："),e("code",[n._v("Segment Tree")])]),n._v(" "),e("li",[n._v("芬威克树："),e("code",[n._v("Fenwick Tree")])])]),n._v(" "),e("h4",{attrs:{id:"_1-1-树的定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-树的定义","aria-hidden":"true"}},[n._v("#")]),n._v(" 1.1 树的定义")]),n._v(" "),e("p",[n._v("第一想到的就是路边的树，有树干、树根、树叶，数据结构中的树也是这样延伸过来的，只不过专用名词不一样，直接上图。")]),n._v(" "),e("p",[e("img",{attrs:{src:"tree01.jpg",alt:"images"}})]),n._v(" "),e("p",[n._v("树”这种数据结构真的很像我们现实生活中的“树”，这里面每个元素我们叫作“节点”；用来连线相邻节点之间的关系，我们叫作“父子关系”。")]),n._v(" "),e("p",[n._v("下面这幅图，A 节点就是 B 节点的"),e("strong",[n._v("父节点")]),n._v("，B 节点是 A 节点的"),e("strong",[n._v("子节点")]),n._v("。B、C、D 这三个节点的父节点是同一个节点，所以它们之间互称为"),e("strong",[n._v("兄弟节点")]),n._v("。我们把没有父节点的节点叫作"),e("strong",[n._v("根节点")]),n._v("，也就是图中的节点 E。我们把没有子节点的节点叫作"),e("strong",[n._v("叶子节点")]),n._v("或者"),e("strong",[n._v("叶节点")]),n._v("，比如图中的 G、H、I、J、K、L 都是叶子节点。")]),n._v(" "),e("p",[e("img",{attrs:{src:"tree01.jpg",alt:"images"}})]),n._v(" "),e("p",[n._v("除此之外，关于“树”，还有三个比较相似的概念："),e("strong",[n._v("高度")]),n._v("（Height）、"),e("strong",[n._v("深度")]),n._v("（Depth）、"),e("strong",[n._v("层")]),n._v("（Level）。")]),n._v(" "),e("p",[e("strong",[n._v("高度")])]),n._v(" "),e("blockquote",[e("p",[n._v("树的高度就是根节点到叶子节点的最长路径。节点的高度就是节点到叶子节点的高度。")])]),n._v(" "),e("p",[e("strong",[n._v("深度")])]),n._v(" "),e("blockquote",[e("p",[n._v("节点的深度就是该节点到根节点的路径，也就是边的数量")])]),n._v(" "),e("p",[e("strong",[n._v("层")])]),n._v(" "),e("blockquote",[e("p",[n._v("根节点为第一层，依次往下递增。")])]),n._v(" "),e("p",[e("img",{attrs:{src:"tree03.gif",alt:"images"}})]),n._v(" "),e("h4",{attrs:{id:"_1-1-二叉树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-二叉树","aria-hidden":"true"}},[n._v("#")]),n._v(" 1.1 二叉树")]),n._v(" "),e("p",[n._v("二叉树的概念，就是给树做了一个限制，除了叶子结点，其余每个节点仅且只有两个子节点（也就是只两个叉）。")]),n._v(" "),e("p",[e("img",{attrs:{src:"tree04.jpg",alt:"images"}})]),n._v(" "),e("p",[n._v("二叉树有两个很重要的形态就是满二叉树和完全二叉树。")]),n._v(" "),e("blockquote",[e("p",[e("strong",[n._v("满二叉树：")]),n._v(" 叶子节点全都在最底层，除了叶子节点之外，每个节点都有左右两个子节点，这种二叉树就叫作满二叉树。")])]),n._v(" "),e("p",[e("img",{attrs:{src:"tree05.jpg",alt:"images"}})]),n._v(" "),e("blockquote",[e("p",[e("strong",[n._v("完全二叉树：")]),n._v(" 叶子节点都在最底下两层 ，最后一层的叶子节点都靠左排列，并且除了最后一层，其他层的节点个数都要达到最大。")])]),n._v(" "),e("p",[e("img",{attrs:{src:"tree06.jpg",alt:"images"}})]),n._v(" "),e("h4",{attrs:{id:"_1-2-二叉树的存储方式有几种？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-二叉树的存储方式有几种？","aria-hidden":"true"}},[n._v("#")]),n._v(" 1.2 二叉树的存储方式有几种？")]),n._v(" "),e("p",[n._v("既然我们都基本了解了二叉树的概念和基本常识，那我们要用，就要进行存储，如何存储一颗二叉树呢？")]),n._v(" "),e("p",[n._v("所有基本常见的数据结构都是由数组和链表演变而来，栈有顺序栈和链式栈、队列有顺序队列和链式队列，那么树可以用数组存储也可以用链表存储呀。")]),n._v(" "),e("p",[e("strong",[n._v("链式存储法")])]),n._v(" "),e("p",[n._v("基于指针的链式存储，每个树的节点都是由数据域和两个指针域组成的。数据域用来存储数据，指针域用来存储左右两个子节点。")]),n._v(" "),e("p",[e("img",{attrs:{src:"tree07.png",alt:"images"}})]),n._v(" "),e("p",[e("strong",[n._v("顺序存储法")])]),n._v(" "),e("p",[n._v("顺序存储就是用数组来存储的，虽然不如指针域那么直观，但是存储的方法挺好理解的。根节点存储在下标"),e("code",[n._v("i=1")]),n._v("的位置；左子节点存储在下标"),e("code",[n._v("i*2=2")]),n._v("的位置，右子节点存储在"),e("code",[n._v("i*2+1=3")]),n._v("的位置。")]),n._v(" "),e("p",[e("img",{attrs:{src:"tree08.png",alt:"images"}})]),n._v(" "),e("p",[n._v("数组的方式存储不需要开辟额外的指针空间，但是数组需要的内存空间是连续的，如果连续的内存空间不足，就无法进行存储。")]),n._v(" "),e("h3",{attrs:{id:"二、创建树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、创建树","aria-hidden":"true"}},[n._v("#")]),n._v(" 二、创建树")]),n._v(" "),e("h4",{attrs:{id:"_2-1-树的相关方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-树的相关方法","aria-hidden":"true"}},[n._v("#")]),n._v(" 2.1 树的相关方法")]),n._v(" "),e("ul",[e("li",[e("code",[n._v("insert(key)")]),n._v("：向树中插入一个新的键。")]),n._v(" "),e("li",[e("code",[n._v("search(key)")]),n._v("：在树中查找一个键，如果节点存在，则返回 true；如果不存在，则返回 false。")]),n._v(" "),e("li",[e("code",[n._v("remove(key)")]),n._v("：从树中移除某个键")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function BinarySearchTree(){\n    var Node = function(key){\n        this.key = key;\n        this.left = null;\n        this.right = null;\n    }\n\n    var root = null;\n\n    this.insert = function(key){\n        var newNode = new Node(key);\n\n        if(root === null){\n            root = newNode;\n        }else{\n            insertNode(root.newNode);\n        }\n    };\n\n    // 搜索一个特定的值\n    this.search = function(key){\n        return searchNode(root,key);\n    }\n\n    // 删除一个节点\n    this.remove = function(key){\n        root = removeNode(root,key);\n    }\n}\n\nvar removeNode = function(node,key){\n\n    if(node === null){\n        return null;\n    }\n    if(key<node.key){\n        node.left = removeNode(node.left,key);\n        return node;\n    }else if(key>node.key){\n        node.right = removeNode(node.right,key);\n        return node;\n    }else{ // 健等于node.key\n        // 第一种情况——一种叶节点\n        if(node.left === null && node.right === null){\n            node = null;\n            return node;\n        }\n\n        // 第二种情况——一个只有一个子节点的节点\n        if(node.left === null){\n            node= node.right;\n            return node;\n        }else if(node.right===null){\n            node= node.left;\n            return node;\n        }\n\n        // 第三种情况——一个有两个节点的节点\n        var aux = findMinxNode(node.right);\n        node.key = aux.key8;\n        node.right = removeNode(node.right,aux.key);\n        return node;\n    }\n}\n\nvar searchNode = function(node,key){\n    if(node === null){\n        return false;\n    }\n    if(key<node.key){\n        return searchNode(node.left,key);\n    }else if(key>node.key){\n        return searchNode(node.right,key);\n    }else{\n        return true;\n    }\n}\n\nfunction printNode(value){\n    console.log(value);\n}\n\nvar insertNode = function(node,newNode){\n    if(newNode.key < node.key){\n        if(node.left === null){\n            node.left = newNode;\n        }else{\n            insertNode(node.left,newNode);\n        }\n    }else{\n        if(node.right === null){\n            node.right = newNode;\n        }else{\n            insertNode(node.right,newNode);\n        }\n    }\n}\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br"),e("span",{staticClass:"line-number"},[n._v("59")]),e("br"),e("span",{staticClass:"line-number"},[n._v("60")]),e("br"),e("span",{staticClass:"line-number"},[n._v("61")]),e("br"),e("span",{staticClass:"line-number"},[n._v("62")]),e("br"),e("span",{staticClass:"line-number"},[n._v("63")]),e("br"),e("span",{staticClass:"line-number"},[n._v("64")]),e("br"),e("span",{staticClass:"line-number"},[n._v("65")]),e("br"),e("span",{staticClass:"line-number"},[n._v("66")]),e("br"),e("span",{staticClass:"line-number"},[n._v("67")]),e("br"),e("span",{staticClass:"line-number"},[n._v("68")]),e("br"),e("span",{staticClass:"line-number"},[n._v("69")]),e("br"),e("span",{staticClass:"line-number"},[n._v("70")]),e("br"),e("span",{staticClass:"line-number"},[n._v("71")]),e("br"),e("span",{staticClass:"line-number"},[n._v("72")]),e("br"),e("span",{staticClass:"line-number"},[n._v("73")]),e("br"),e("span",{staticClass:"line-number"},[n._v("74")]),e("br"),e("span",{staticClass:"line-number"},[n._v("75")]),e("br"),e("span",{staticClass:"line-number"},[n._v("76")]),e("br"),e("span",{staticClass:"line-number"},[n._v("77")]),e("br"),e("span",{staticClass:"line-number"},[n._v("78")]),e("br"),e("span",{staticClass:"line-number"},[n._v("79")]),e("br"),e("span",{staticClass:"line-number"},[n._v("80")]),e("br"),e("span",{staticClass:"line-number"},[n._v("81")]),e("br"),e("span",{staticClass:"line-number"},[n._v("82")]),e("br"),e("span",{staticClass:"line-number"},[n._v("83")]),e("br"),e("span",{staticClass:"line-number"},[n._v("84")]),e("br"),e("span",{staticClass:"line-number"},[n._v("85")]),e("br"),e("span",{staticClass:"line-number"},[n._v("86")]),e("br"),e("span",{staticClass:"line-number"},[n._v("87")]),e("br"),e("span",{staticClass:"line-number"},[n._v("88")]),e("br"),e("span",{staticClass:"line-number"},[n._v("89")]),e("br"),e("span",{staticClass:"line-number"},[n._v("90")]),e("br"),e("span",{staticClass:"line-number"},[n._v("91")]),e("br"),e("span",{staticClass:"line-number"},[n._v("92")]),e("br"),e("span",{staticClass:"line-number"},[n._v("93")]),e("br"),e("span",{staticClass:"line-number"},[n._v("94")]),e("br"),e("span",{staticClass:"line-number"},[n._v("95")]),e("br"),e("span",{staticClass:"line-number"},[n._v("96")]),e("br"),e("span",{staticClass:"line-number"},[n._v("97")]),e("br"),e("span",{staticClass:"line-number"},[n._v("98")]),e("br")])]),e("h3",{attrs:{id:"三、二叉树的遍历"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、二叉树的遍历","aria-hidden":"true"}},[n._v("#")]),n._v(" 三、二叉树的遍历")]),n._v(" "),e("p",[n._v("共有四种遍历的方式，分别为"),e("strong",[n._v("前序遍历")]),n._v("、"),e("strong",[n._v("中序遍历")]),n._v("、"),e("strong",[n._v("后序遍历")]),n._v("、"),e("strong",[n._v("按层遍历")]),n._v("。")]),n._v(" "),e("ul",[e("li",[e("code",[n._v("inOrderTraverse")]),n._v("：通过中序遍历方式遍历所有节点。")]),n._v(" "),e("li",[e("code",[n._v("preOrderTraverse")]),n._v("：通过先序遍历方式遍历所有节点。")]),n._v(" "),e("li",[e("code",[n._v("postOrderTraverse")]),n._v("：通过后序遍历方式遍历所有节点。")]),n._v(" "),e("li",[e("code",[n._v("min")]),n._v("：返回树中最小的值/键。")]),n._v(" "),e("li",[e("code",[n._v("max")]),n._v("：返回树中最大的值/键。")])]),n._v(" "),e("h4",{attrs:{id:"_3-1-前序遍历相关代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-前序遍历相关代码","aria-hidden":"true"}},[n._v("#")]),n._v(" 3.1 前序遍历相关代码")]),n._v(" "),e("p",[e("strong",[n._v("前序遍历是指，对于树中的任意节点来说，先打印这个节点，然后再打印它的左子树，最后打印它的右子树。")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 前序遍历\nthis.preOrderTraverse = function(callback){\n    preOrderTraverseNode(root,callback);\n}\n\nvar preOrderTraverseNode = function(node,callback){\n    if(node!==null){\n        callback(node.key);\n        preOrderTraverseNode(node.left,callback);\n        preOrderTraverseNode(node.right,callback);\n    }\n};\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br")])]),e("p",[e("img",{attrs:{src:"tree09.gif",alt:"images"}})]),n._v(" "),e("h4",{attrs:{id:"_3-2-中序遍历相关代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-中序遍历相关代码","aria-hidden":"true"}},[n._v("#")]),n._v(" 3.2 中序遍历相关代码")]),n._v(" "),e("p",[e("strong",[n._v("中序遍历是指，对于树中的任意节点来说，先打印左子树，然后再打印它本身，最后打印它的右子树。")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 中序遍历\nthis.inOrderTraverse = function(callback){\n    inOrderTraverseNode(root,callback);\n}\n\nvar inOrderTraverseNode = function(node,callback){\n    if(node !== null){\n        inOrderTraverseNode(node.left,callback);\n        callback(node.key);\n        inOrderTraverseNode(node.right,callback);\n    }\n};\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br")])]),e("p",[e("img",{attrs:{src:"tree10.gif",alt:"images"}})]),n._v(" "),e("h4",{attrs:{id:"_3-3-后序遍历相关代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-后序遍历相关代码","aria-hidden":"true"}},[n._v("#")]),n._v(" 3.3 后序遍历相关代码")]),n._v(" "),e("p",[e("strong",[n._v("后序遍历是指，对于树中的任意节点来说，先打印它的左子树，然后再打印它的右子树，最后打印它节点本身。")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 后序遍历\nthis.postOrderTraverse = function(callback){\n    postOrderTraverseNode(root,callback);\n}\nvar postOrderTraverseNode = function(node,callback){\n    if(node!==null){\n        postOrderTraverseNode(node.left,callback);\n        postOrderTraverseNode(node.right,callback);\n        callback(node.key);\n    }\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br")])]),e("p",[e("img",{attrs:{src:"tree11.gif",alt:"images"}})]),n._v(" "),e("h4",{attrs:{id:"_3-4-最小的值-键"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-最小的值-键","aria-hidden":"true"}},[n._v("#")]),n._v(" 3.4 最小的值/键")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("  this.min = function(){\n     return minNode(root);\n  }\n\n// 最小值\nvar minNode = function(node){\n    if(node){\n        while(node && node.left !== null){\n            node = node.left;\n        }\n        return node.key;\n    }\n    return null;\n};\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br")])]),e("h4",{attrs:{id:"_3-5-最大的值-键"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-最大的值-键","aria-hidden":"true"}},[n._v("#")]),n._v(" 3.5 最大的值/键")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("this.max = function(){\n    return maxNode(root);\n}\n// 最大值\nvar maxNode = function(node){\n    if(node){\n        while(node && node.right !==null){\n            node = node.right;\n        }\n        return node.key;\n    }\n    return null;\n};\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br")])]),e("h3",{attrs:{id:"四、二叉查找树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、二叉查找树","aria-hidden":"true"}},[n._v("#")]),n._v(" 四、二叉查找树")]),n._v(" "),e("h3",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[n._v("#")]),n._v(" 参考资料")]),n._v(" "),e("ul",[e("li",[n._v("《学习 JavaScript 数据结构与算法》")]),n._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/h_mO28pmE_uNbHA5GVmWPA",target:"_blank",rel:"noopener noreferrer"}},[n._v("二叉树有几种存储方式？(上)"),e("OutboundLink")],1)]),n._v(" "),e("li",[e("a",{attrs:{href:"https://time.geekbang.org/column/article/67856",target:"_blank",rel:"noopener noreferrer"}},[n._v("二叉树基础（上）：什么样的二叉树适合用数组来存储？"),e("OutboundLink")],1)])]),n._v(" "),e("h2",{attrs:{id:"联系作者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[n._v("#")]),n._v(" 联系作者")]),n._v(" "),e("div",{attrs:{align:"center"}},[e("p",[n._v("\n        平凡世界，贵在坚持。\n    ")]),n._v(" "),e("img",{attrs:{src:n.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);s.default=r.exports}}]);