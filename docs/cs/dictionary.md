# 字典

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 字典类介绍
- 创建字典类
- 字典类应用

### 一、字典类介绍

字典是一种以键-值对形式存储的数据结构，就像电话号码簿里的名字和电话号码一样。要找一个电话时，先找名字，名字找到了，紧挨着它的电话号码也就找到了。

在字典中，存储的是[键,值]对，其中键名是用来查询特定元素的。字典和集合很类似，集合以[值,值]的形式存储元素，字典则是以[键,值]的形式来存储元素。字典也称作**映射**、**符号表**或**关联数组**。

JavaScript 的 Map 就是以字典的形式设计的。

### 二、创建字典类

#### 2.1 字典类相关方法

- `set(key,value)`：向字典中添加新元素
- `remove(key)`：通过使用键值来从字典中移除键值对应的数据值。
- `has(key)`：如果某个键值存在于这个字典中，则返回 true，反之则返回 false。
- `get(key)`：通过键值查找特定的数值并返回。
- `clear()`：将这个字典中的所有元素全部删除。
- `size()`：返回字典所包含元素的数量。与数组的 length 属性类似。
- `keys()`：将字典所包含的所有键名以数组形式返回。
- `values()`：将字典所包含的所有数值以数组形式返回。
- `isEmpty()`：在 size 等于零的时候返回 true，否则返回 false。

**ES5 写法**

```
function Dictionary(){
    var items = {};

    this.has = function(key){
        return key in items;
    }

    this.set = function(key,value){
        items[key] = value;
    }

    this.remove = function(key){
        if(this.has(key)){
            delete items[key];

            return true;
        }
        return false;
    }

    this.get = function(key){
        return this.has(key) ? items[key] : undefined;
    }

    this.values = function(key){
        var values = {};
        for(var k in items){
            if(this.has(k)){
                values.push(items[k]);
            }
        }
        return values;
    }

    this.getItems = function(){
        return items;
    }
}
```

**ES6 写法**

```

```

### 三、字典类应用

### 参考资料

- 《学习 JavaScript 数据结构与算法》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
