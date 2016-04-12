# 图

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 图的概念
- 图的相关术语
- 图的表示
- 图的遍历
- 最短路径

### 一、图的概念

图是网络结构的抽象模型。图是一组由边连接的节点。

### 二、图的相关术语

图是网络结构的抽象模型。图是一组由**边**连接的**节点**

#### 2.1 有向图和无向图

图可以是无向的或是有向的。

图还可以是**未加权的**或是**加权的**

### 三、图的表示

从数据结构的角度来说，我们有多种方式来表示图。图的正确表示法取决于待解决的问题和图的类型。

图的表示主要分为：邻接矩阵、邻接表、关联矩阵

**ES5 代码实现**

```
function Graph(){
    var vertices = [];
    var adjList = new Dictionary();

    this.addVertex = function(v){
        vertices.push(v);
        adjList.set(v,[]);
    }

    this.addEdge = function(v,w){
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    }

    this.toString = function(){
        var s = '';
        for(var i=0; i<vertices.length;i++){
            s +=vertices[i]+' -> ';
            var neighbors = adjList.get(vertices[i]);
            for(var j=0;j<neighbors.length;j++){
                s+=neighbors[j]+ ' ';
            }
            s+='\n';
        }
        return s;
    };
}
```

**ES6 代码实现**

```
class Graph {
    constructor(isDirected = false) {
        this.isDirected = isDirected
        this.vertices = []
        this.adjList = new Dictionary()
    }
    addVertex(v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v)
            this.adjList.set(v, [])
        }
    }
    addEdge(a, b) {
        if (!this.adjList.get(a)) {
            this.addVertex(a)
        }
        if (!this.adjList.get(b)) {
            this.addVertex(b)
        }
        this.adjList.get(a).push(b)
        if (this.isDirected !== true) {
            this.adjList.get(b).push(a)
        }
    }
    getVertices() {
        return this.vertices
    }
    getAdjList() {
        return this.adjList
    }
    toString() {
        let s = ''
        for (let i = 0; i < this.vertices.length; i++) {
            s += `${this.vertices[i]}->`
            const neighbors = this.adjList.get(this.vertices[i])
            for (let j = 0; j < neighbors.length; j++) {
                s += `${neighbors[j]}`
            }
            s += '\n';
        }
        return s
    }
}
```

### 四、图的遍历

**广度遍历代码实现**

```
var initializeCodor = function(){
    var color = [];
    for(var i =0;i<vertices.length;i++){
        color[vertices[i]] = 'white';
    }
    return color;
};

this.bfs = function(v,callback){
    var bfs = function(v,callback){

        var color = initializeColor(),
            queue = new Queue();
        queue.enqueue(v);

        while(!queue.isEmpty()){
            var u = queue.dequeue(),
                neighbors = adjList.get(u);
                color[u] = 'grey';
                for(var i=0;i<neightbors.length;i++){
                    var w = neighbors[i];
                    if(color[w] === 'white'){
                        color[w] = 'grey';
                        queue.enqueue(w);
                    }
                }
              color[u]='black';
              if(callback){
                  callback(u);
              }
        }
    }
}

```

**ES6 代码实现**

```
var initializeCodor = function(){
    var color = [];
    for(var i =0;i<vertices.length;i++){
        color[vertices[i]] = 'white';
    }
    return color;
};


this.dfs = function(callback){
    var color = initializeCodor();

    for(var i=0;i<vertices.length;i++){
        if(color[vertices[i]] ==='white'){
            dfsVisit(vertices[i],color,callback);
        }
    }
};

var dfsVisit = function(u,color,callback){
    color[u] = 'grey';
    if(callback){
        callback(u);
    }
    var neighbors = dfsVisit.get(u);
    for(var i=0;i<neighhors.length;i++){
        var w = neighbors[i];
        if(color[w]==='white'){
            dfsVisit(w,color,callback);
        }
    }
    color[u] = 'black';
}
```

### 五、最短路径

### 六、最小生成树

## 参考资料

- [「中高级前端」窥探数据结构的世界- ES6 版](https://juejin.im/post/5cd1ab3df265da03587c142a)
- [图形算法（邻接矩阵）](https://juejin.im/post/5de7c053518825125d1497e2)
- 《学习 JavaScript 数据结构与算法》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
