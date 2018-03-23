# 散列表

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

### 创建散列表

**ES5代码实现**

```
function HashTable(){
    var table = [];

    this.put = function(key,value){

    }

    this.get = function(key){

    }

    this.remove = function(key){
        table[loseloseHashCode(key)] = undefined;
    }
}

var loseloseHashCode = function(key){
    var hash = 0;
    for(var i = 0;i<key.length;i++){
        hash += key.charCodeAt(i);
    }
    return hash % 37;
}
```

**ES6代码实现**

```
```

### 散列表相关方法

- `put(key,value)`：向散列表增加一个新的项（也能更新散列表）。
- `remove(key)`：根据键值从散列表中移除值。
- `get(key)`：返回根据键值检索到的特定的值。

### 参考资料

- 《学习JavaScript数据结构与算法》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>