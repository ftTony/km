# 散列表

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 散列表介绍
- 创建散列表
- 散列表冲突

### 一、散列表介绍

散列表的英文叫“Hash Talbe”，也叫 HashMap 类，它是 Dictionary 类的一种散列表实现方式。

**散列** 算法的作用是尽可能快地在数据结构中找到一个值。

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
function defaultToString(item) {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}

class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
  toString() {
    return `[#${this.key}:${this.value}]`
  }
}
class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key
    }
    const tableKey = this.toStrFn(key)
    let hash = 0
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }
    return hash % 37
  }
  hashCode(key) {
    return this.loseloseHashCode(key)
  }
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      this.table[position] = new ValuePair(key, value)
      return true
    }
    return false
  }
  get(key) {
    const valuePair = this.table[this.hashCode(key)]
    return valuePair == null ? undefined : valuePair.value
  }
  remove(key) {
    const hash = this.hashCode(key)
    const valuePair = this.table[hash]
    if (valuePair != null) {
      delete this.table[hash]
      return true
    }
    return false
  }
  getTable() {
    return this.table
  }
  isEmpty() {
    return this.size() === 0
  }
  size() {
    return Object.keys(this.table).length
  }
  clear() {
    this.table = {}
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const keys = Object.keys(this.table)
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString},{${keys[i]} => ${this.table[
        keys[i]
      ].toString()}}`
    }
    return objString
  }
}
```

### 三、散列表冲突

处理散列表冲突主要有以下几种方法：链表法、线性探查、双散列法

#### 3.1 链表法

**链表法** 包括为散列表的每一个位置创建一个链表并将元素存储在里面。

代码如下：

```
class HashTableSeparateChaining {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      if (this.table[position] == null) {
        this.table[position] = new linkedList()
      }
      this.table[position].push(new ValuePair(key, value))
      return true
    }
    return false
  }
  get(key) {
    const position = this.hashCode(key)
    const linkedList = this.table[position]
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead()
      while (current != null) {
        if (current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
    }
    return undefined
  }
  remove(key) {
    const position = this.hashCode(key)
    const linkedList = this.table[position]
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead()
      while (current != null) {
        if (current.element.key === key) {
          linkedList.remove(current.element)
          if (linkedList.isEmpty()) {
            delete this.table[position]
          }
          return true
        }
        current = current.next
      }
    }
    return false
  }
}
```

#### 3.2 线性探查

```

```

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
