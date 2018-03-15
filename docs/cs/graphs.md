# 图

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

### 图的实现

**ES5代码实现**

```
function Graph(){
    var vertices = [];
    var adjList = new Dictionary();
}
```

**ES6代码实现**

```
class Graph{
    var vertices = [];
    var adjList = new Dictionary();
}
```

### 广度遍历

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

### 深度遍历

```
```

## 参考资料

- [「中高级前端」窥探数据结构的世界- ES6版](https://juejin.im/post/5cd1ab3df265da03587c142a)
- 《学习JavaScript数据结构与算法》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>