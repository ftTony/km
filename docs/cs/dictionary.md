# 字典

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

### 创建字典类

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

### 字典类相关方法

- `set(key,value)`：向字典中添加新元素
- `remove(key)`：通过使用键值来从字典中移除键值对应的数据值。
- `has(key)`：如果某个键值存在于这个字典中，则返回 true，反之则返回 false。
- `get(key)`：通过键值查找特定的数值并返回。
- `clear()`：将这个字典中的所有元素全部删除。
- `size()`：返回字典所包含元素的数量。与数组的 length 属性类似。
- `keys()`：将字典所包含的所有键名以数组形式返回。
- `values()`：将字典所包含的所有数值以数组形式返回。

### 参考资料

- 《学习 JavaScript 数据结构与算法》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
