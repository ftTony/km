# 数据结构集合

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 集合介绍
- 创建集合
- 集合应用

### 一、集合介绍

**es5 写法**

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

### 参考资料

- 《学习 JavaScript 数据结构与算法》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
