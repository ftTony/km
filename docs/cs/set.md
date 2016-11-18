# 数据结构集合

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 集合介绍
- 创建集合
- 集合应用

### 一、集合介绍

**集合** 是由一组无序且唯一（即不能重复）的项组成的。该数据结构使用了与有限集合相同的数据概念，但应用在计算机科学的数据结构中。

集合有并集、交集、差集等基本运算。

### 二、创建集合

#### 2.1 集合相关方法

- `add(element)`：向集合添加一个新元素。
- `delete(element)`：从集合移除一个元素。
- `has(element)`：如果元素在集合中，返回 true，否返回 false。
- `clear()`：移除集合中的所有元素。
- `size()`：返回集合所包含元素的数量。它与数组的 length 属性类似。
- `values()`：返回一个包含集合中所有值（元素）的数组。

#### 2.2 代码实现

**es5 实现**

```
function Set() {

    var items = {};

    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    };

    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    };

    this.has = function (value) {
        return items.hasOwnProperty(value);
        //return value in items;
    };

    this.clear = function () {
        items = {};
    };

    /**
     * Modern browsers function
     * IE9+, FF4+, Chrome5+, Opera12+, Safari5+
     * @returns {Number}
     */
    this.size = function () {
        return Object.keys(items).length;
    };

    /**
     * cross browser compatibility - legacy browsers
     * for modern browsers use size function
     * @returns {number}
     */
    this.sizeLegacy = function () {
        var count = 0;
        for (var prop in items) {
            if (items.hasOwnProperty(prop))
                ++count;
        }
        return count;
    };

    /**
     * Modern browsers function
     * IE9+, FF4+, Chrome5+, Opera12+, Safari5+
     * @returns {Array}
     */
    this.values = function () {
        return Object.keys(items);
    };

    this.valuesLegacy = function () {
        var keys = [];
        for (var key in items) {
            keys.push(key);
        }
        return keys;
    };

    this.getItems = function () {
        return items;
    };

    this.union = function (otherSet) {
        var unionSet = new Set(); //{1}

        var values = this.values(); //{2}
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        values = otherSet.values(); //{3}
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        return unionSet;
    };

    this.intersection = function (otherSet) {
        var intersectionSet = new Set(); //{1}

        var values = this.values();
        for (var i = 0; i < values.length; i++) { //{2}
            if (otherSet.has(values[i])) { //{3}
                intersectionSet.add(values[i]); //{4}
            }
        }

        return intersectionSet;
    };

    this.difference = function (otherSet) {
        var differenceSet = new Set(); //{1}

        var values = this.values();
        for (var i = 0; i < values.length; i++) { //{2}
            if (!otherSet.has(values[i])) { //{3}
                differenceSet.add(values[i]); //{4}
            }
        }

        return differenceSet;
    };

    this.subset = function (otherSet) {

        if (this.size() > otherSet.size()) { //{1}
            return false;
        } else {
            var values = this.values();
            for (var i = 0; i < values.length; i++) { //{2}
                if (!otherSet.has(values[i])) { //{3}
                    return false; //{4}
                }
            }
            return true;
        }
    };
}
```

**es6 实现**

```

```

### 三、集合应用

### 参考资料

- 《学习 JavaScript 数据结构与算法》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
