# 散列表

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 散列表介绍
- 创建散列表
- 散表应用

### 一、散列表介绍

### 二、创建散列表

#### 2.1 散列表相关方法

- `put(key,value)`：向散列表增加一个新的项（也能更新散列表）。
- `remove(key)`：根据键值从散列表中移除值。
- `get(key)`：返回根据键值检索到的特定的值。

#### 2.2 代码实现

**ES5 代码实现**

```
function HashTable(){
    var table = [];

    this.put = function(key,value){
        var position = loseloseHashCode(key);
        console.log(position + ' - ' + key);
        table[position] = value;
    }

    this.get = function(key){
        return table[loseloseHashCode(key)];
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

**ES6 代码实现**

```

```

### 三、散列表应用

### 参考资料

- 《学习 JavaScript 数据结构与算法》
- [动画：什么是散列表？](https://mp.weixin.qq.com/s/EJt0wvsVujKy040Juq28Qw)
- [动画：什么是散列表？](https://mp.weixin.qq.com/s/EJt0wvsVujKy040Juq28Qw)
- [散列表 | 文本编辑器是如何检查英文单词出错的？](https://mp.weixin.qq.com/s/5ABSQrCuexhoKWHouL-YIA)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
