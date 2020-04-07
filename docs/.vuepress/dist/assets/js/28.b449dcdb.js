(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{249:function(s,n,a){"use strict";a.r(n);var t=a(13),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图"}},[s._v("#")]),s._v(" 图")]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),s._v(" "),a("h2",{attrs:{id:"内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),a("ul",[a("li",[s._v("图的概念")]),s._v(" "),a("li",[s._v("图的相关术语")]),s._v(" "),a("li",[s._v("图的表示")]),s._v(" "),a("li",[s._v("图的遍历")]),s._v(" "),a("li",[s._v("最短路径")])]),s._v(" "),a("h3",{attrs:{id:"一、图的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、图的概念"}},[s._v("#")]),s._v(" 一、图的概念")]),s._v(" "),a("p",[s._v("图是由点和线组成的，图中的点叫做顶点，点与点之间的连线叫做边")]),s._v(" "),a("h3",{attrs:{id:"二、图的相关术语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、图的相关术语"}},[s._v("#")]),s._v(" 二、图的相关术语")]),s._v(" "),a("p",[s._v("图是网络结构的抽象模型。图是一组由"),a("strong",[s._v("边")]),s._v("连接的"),a("strong",[s._v("节点")])]),s._v(" "),a("h4",{attrs:{id:"_2-1-有向图和无向图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-有向图和无向图"}},[s._v("#")]),s._v(" 2.1 有向图和无向图")]),s._v(" "),a("p",[s._v("图可以是无向的或是有向的。")]),s._v(" "),a("p",[s._v("图还可以是"),a("strong",[s._v("未加权的")]),s._v("或是"),a("strong",[s._v("加权的")])]),s._v(" "),a("h3",{attrs:{id:"三、图的表示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、图的表示"}},[s._v("#")]),s._v(" 三、图的表示")]),s._v(" "),a("p",[s._v("从数据结构的角度来说，我们有多种方式来表示图。图的正确表示法取决于待解决的问题和图的类型。")]),s._v(" "),a("p",[s._v("图的表示主要分为：邻接矩阵、邻接表、关联矩阵")]),s._v(" "),a("h4",{attrs:{id:"_3-1-邻接矩阵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-邻接矩阵"}},[s._v("#")]),s._v(" 3.1 邻接矩阵")]),s._v(" "),a("h4",{attrs:{id:"_3-2-邻接表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-邻接表"}},[s._v("#")]),s._v(" 3.2 邻接表")]),s._v(" "),a("h4",{attrs:{id:"_3-3-关联矩阵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-关联矩阵"}},[s._v("#")]),s._v(" 3.3 关联矩阵")]),s._v(" "),a("p",[a("strong",[s._v("ES5 代码实现")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function Graph(){\n    var vertices = [];\n    var adjList = new Dictionary();\n\n    this.addVertex = function(v){\n        vertices.push(v);\n        adjList.set(v,[]);\n    }\n\n    this.addEdge = function(v,w){\n        adjList.get(v).push(w);\n        adjList.get(w).push(v);\n    }\n\n    this.toString = function(){\n        var s = '';\n        for(var i=0; i<vertices.length;i++){\n            s +=vertices[i]+' -> ';\n            var neighbors = adjList.get(vertices[i]);\n            for(var j=0;j<neighbors.length;j++){\n                s+=neighbors[j]+ ' ';\n            }\n            s+='\\n';\n        }\n        return s;\n    };\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("p",[a("strong",[s._v("ES6 代码实现")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Graph {\n    constructor(isDirected = false) {\n        this.isDirected = isDirected\n        this.vertices = []\n        this.adjList = new Dictionary()\n    }\n    addVertex(v) {\n        if (!this.vertices.includes(v)) {\n            this.vertices.push(v)\n            this.adjList.set(v, [])\n        }\n    }\n    addEdge(a, b) {\n        if (!this.adjList.get(a)) {\n            this.addVertex(a)\n        }\n        if (!this.adjList.get(b)) {\n            this.addVertex(b)\n        }\n        this.adjList.get(a).push(b)\n        if (this.isDirected !== true) {\n            this.adjList.get(b).push(a)\n        }\n    }\n    getVertices() {\n        return this.vertices\n    }\n    getAdjList() {\n        return this.adjList\n    }\n    toString() {\n        let s = ''\n        for (let i = 0; i < this.vertices.length; i++) {\n            s += `${this.vertices[i]}->`\n            const neighbors = this.adjList.get(this.vertices[i])\n            for (let j = 0; j < neighbors.length; j++) {\n                s += `${neighbors[j]}`\n            }\n            s += '\\n';\n        }\n        return s\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br")])]),a("h3",{attrs:{id:"四、图的遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、图的遍历"}},[s._v("#")]),s._v(" 四、图的遍历")]),s._v(" "),a("p",[s._v("有两种算法可以对图进行遍历："),a("strong",[s._v("广度优先搜索")]),s._v(" 和 "),a("strong",[s._v("深度优先搜索")]),s._v("。图遍历可以用来寻找特定的顶点或寻找两个顶点之间的路径，检查图是否连通，检查图是否含有环。")]),s._v(" "),a("p",[a("strong",[s._v("图遍历算法")]),s._v("的思想是必须追踪每个第一次访问的节点，并且追踪有哪些节点还没有被完全探 索。对于两种图遍历算法，都需要明确指出第一个被访问的顶点。")]),s._v(" "),a("p",[s._v("广度优先搜索算法和深度优先搜索算法基本上是相同的，只有一点不同，那就是待访问顶点 列表的数据结构，如下表所示：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("算法")]),s._v(" "),a("th",[s._v("数据结构")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("深度优先搜索")]),s._v(" "),a("td",[s._v("栈")]),s._v(" "),a("td",[s._v("将顶点存入栈，顶点是沿着路径被探索的，存在新的相邻顶点就去访问")])]),s._v(" "),a("tr",[a("td",[s._v("广度优先搜索")]),s._v(" "),a("td",[s._v("队列")]),s._v(" "),a("td",[s._v("将顶点存入队列，最先入队列的顶点先被探索")])])])]),s._v(" "),a("h4",{attrs:{id:"_4-1-广度遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-广度遍历"}},[s._v("#")]),s._v(" 4.1 广度遍历")]),s._v(" "),a("p",[s._v("广度优先搜索算法会从指定的第一个顶点开始遍历图，先访问其所有的邻点（相邻顶点），就像一次访问图的一层。")]),s._v(" "),a("p",[a("strong",[s._v("ES5 代码")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var initializeCodor = function(){\n    var color = [];\n    for(var i =0;i<vertices.length;i++){\n        color[vertices[i]] = 'white';\n    }\n    return color;\n};\n\nthis.bfs = function(v,callback){\n    var bfs = function(v,callback){\n\n        var color = initializeColor(),\n            queue = new Queue();\n        queue.enqueue(v);\n\n        while(!queue.isEmpty()){\n            var u = queue.dequeue(),\n                neighbors = adjList.get(u);\n                color[u] = 'grey';\n                for(var i=0;i<neightbors.length;i++){\n                    var w = neighbors[i];\n                    if(color[w] === 'white'){\n                        color[w] = 'grey';\n                        queue.enqueue(w);\n                    }\n                }\n              color[u]='black';\n              if(callback){\n                  callback(u);\n              }\n        }\n    }\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])]),a("p",[a("strong",[s._v("ES6 代码实现")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var initializeCodor = function(){\n    var color = [];\n    for(var i =0;i<vertices.length;i++){\n        color[vertices[i]] = 'white';\n    }\n    return color;\n};\n\n\nthis.dfs = function(callback){\n    var color = initializeCodor();\n\n    for(var i=0;i<vertices.length;i++){\n        if(color[vertices[i]] ==='white'){\n            dfsVisit(vertices[i],color,callback);\n        }\n    }\n};\n\nvar dfsVisit = function(u,color,callback){\n    color[u] = 'grey';\n    if(callback){\n        callback(u);\n    }\n    var neighbors = dfsVisit.get(u);\n    for(var i=0;i<neighhors.length;i++){\n        var w = neighbors[i];\n        if(color[w]==='white'){\n            dfsVisit(w,color,callback);\n        }\n    }\n    color[u] = 'black';\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("h4",{attrs:{id:"_4-2-深度遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-深度遍历"}},[s._v("#")]),s._v(" 4.2 深度遍历")]),s._v(" "),a("p",[s._v("深度优先搜索算法将会从第一个指定的顶点开始遍历图，沿着路径走到这条路径最后一个顶点被访问了，接着原路回退并探索下一条路径。")]),s._v(" "),a("p",[a("strong",[s._v("ES5 代码实现")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("ES6 代码实现")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_4-3-性能分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-性能分析"}},[s._v("#")]),s._v(" 4.3 性能分析")]),s._v(" "),a("p",[s._v("对于广度优先搜索来说，最坏的情况下，我们要遍历所有的顶点（n）和点（k），时间复杂度 O（n+k）。如果是一全通图（顶点之间都有两条连线）的话，k 是大于 n 的，时间复杂度可以写为 O(k)。")]),s._v(" "),a("p",[s._v("其中搜索遍历的同时，我们需要借助几个数组空间用来存储顶点，空间复杂度为 O(n)。")]),s._v(" "),a("p",[s._v("深度优先遍历在最坏的情况下会重复遍历两次边，时间复杂度为 O(k)。")]),s._v(" "),a("p",[s._v("空间复杂度主要是递归调用需要额外的栈空间，栈空间的大小和顶点 n 成正比关系，所以空间复杂度为 O(n)。")]),s._v(" "),a("h3",{attrs:{id:"五、最短路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、最短路径"}},[s._v("#")]),s._v(" 五、最短路径")]),s._v(" "),a("h3",{attrs:{id:"六、最小生成树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、最小生成树"}},[s._v("#")]),s._v(" 六、最小生成树")]),s._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/5cd1ab3df265da03587c142a",target:"_blank",rel:"noopener noreferrer"}},[s._v("「中高级前端」窥探数据结构的世界- ES6 版"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5de7c053518825125d1497e2",target:"_blank",rel:"noopener noreferrer"}},[s._v("图形算法（邻接矩阵）"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/ln5xLC3mzFoNdu1tk9olLg",target:"_blank",rel:"noopener noreferrer"}},[s._v("动画：如何用广度和深度优先搜索找到女朋友？"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzAxNDYwODEzNw==&mid=2247486103&idx=1&sn=3a57404cb55c5ed7fce67fdd5569070d&chksm=9b91f8f1ace671e72dc139ddf249d6b0d435456fbfc86d3661847c15bfefc3cd85c939601b8d&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("图解：什么是图？"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("《学习 JavaScript 数据结构与算法》")])]),s._v(" "),a("h2",{attrs:{id:"联系作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系作者"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);n.default=e.exports}}]);