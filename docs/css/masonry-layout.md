# CSS3——过滤

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 什么是瀑布流布局
- 瀑布流的实现原理
- 瀑布流的优缺点
- 瀑布流的适用场景
- 几种常用的瀑布流布局

### 一、什么是瀑布流布局

`瀑布流`又称瀑布流式布局，是一种比较流行的页面布局方式，专业的英文名称为`Masonry Layouts`。与传统的分页显示不同，视觉表现为`参差不齐`的多栏布局。

![images](column-layout-01.png)

### 二、瀑布流的实现原理

瀑布流本质上就是寻找之中高度最小的一列，并将新的元素添加到该列后面，只要有新的元素需要排列，就继续寻找所有列中的高度最小列，把后来的元素添加到高度最小列上。

#### 2.1 图解基础瀑布流

我们看下为什么要永远寻找最小列？

先看图 1 的排列顺序，第一排元素的顶部会处于同一个高度，依次排列在顶端，第一排排满之后，第二排从左往右排列。然而这种排列方式很容易出现其中一列过长或其中一列过短的情况。

​ 为了解决图 1 中列可能过长或者过短的问题，我们按照图 2 的方式将元素放在最短的一列进行排列。

![images](column-layout-03.png)

### 三、瀑布流的优缺点

#### 3.1 优点

- 节省空间，外表美观，更有艺术性。
- 对于触屏设备非常友好，通过向上滑动浏览
- 用户浏览时的观赏和思维不容易被打断，留存更容易。

#### 3.2 缺点

- 用户无法了解内容总长度，对内容没有宏观掌控。
- 用户无法了解现在所处的具体位置，不知道离终点还有多远。
- 回溯时不容易定位到之前看到的内容。
- 容易造成页面加载的负荷。
- 容易造成用户浏览的疲劳，没有短暂的休息时间。

### 三、瀑布流的适用场景

根据瀑布流的优缺点，我们不难得出在什么情况下选择瀑布是合理的选择：

- 内容以图片为主的时候，瀑布流是更好的选择。图片占用空间比较大，并且大脑理解的速度相比理解文字要快，短时间内可以扫过的内容很多，所以如果用分页显示的话用户务必会频繁的翻页，影响沉浸式的体验，而瀑布流可以解决这个问题
- 信息与信息之间相对独立时，瀑布流是更好的选择。如果信息关联性强，用户务必会进行大量的回溯操作去查看之前或者之后的信息，相反，如果信息相对独立的话，可以使用瀑布流，让用户同时接受来自不同地方的信息。
- 信息与搜索匹配比较模糊时，瀑布流是更好的选择，瀑布流给人的直观印象，就是同时显示的信息与用户搜索的匹配度大致一样，而分页显示的直观印象则是越靠上的信息被认为与用户的搜索越匹配。因此，当信息与搜索匹配度没有明显区分度时，可以采用瀑布流。
- 用户目的不强的时候，瀑布流是更好的选择。如果用户有特定需要查找的信息，分页查找定位更方便，而当目的性较弱的时候，瀑布流可以增加用户停留的时间和意想不到的收获。

### 四、几种常用的瀑布流布局

- multi-column
- grid 布局
- Flexbox 布局

#### 4.1 multi-column

`multi-column`实现瀑布流主要依赖以下几个属性：

- `column-count`：设置共有几列
- `column-width`：设置每列宽度，列数由`总宽度`与`每列宽度`计算得出
- `colunm-gap`：设置列与列之间的间距

`column-count`和`column-width`都可以用来定义分栏的数目，而且并没有明确的优先级之分。优先级的计算取决与具体的场景。

计算方式为：计算`column-count` 和 `column-width` 转换后具体的列数，哪个小就用哪个。

具体代码如下：

**CSS 代码**

```
.masonry {
    column-count: 3;
    column-gap: 10px;
    padding: 10px;
}

.masonry .item {
    border: 1px solid #999;
    margin-bottom: 10px;
}

.masonry .item img {
    width: 100%;
    vertical-align: middle;
}

.masonry .item .title {
    display: block;
    margin-left: 5px;
}
```

**HTML 代码**

```
<div class="masonry">
        <div class="item"><img src="https://i.pinimg.com/236x/7f/24/8c/7f248c9e18abe79de0d6c79617e03361.jpg"><span
                class="title">Consequatur in ipsa ab sapiente enim. Accusantium aut est voluptas sequi. Quibusdam neque
                aperiam dolor. Excepturi sunt a minus fuga autem excepturi cupiditate. Fuga aspernatur incidunt
                aliquid.</span></div>
        <div class="item"><img src="https://i.pinimg.com/236x/a6/cd/0a/a6cd0a15d5b2909539dd7944201127d2.jpg"><span
                class="title">Sit qui consequuntur vel quibusdam sit ea sint. Repellendus unde ducimus sed dolor sint
                iste. Expedita voluptas iste adipisci eos. Impedit dignissimos ratione animi dolorem est.</span></div>
        <div class="item"><img src="https://i.pinimg.com/236x/d7/fb/60/d7fb60b2321149a83ab5dbe94744ced6.jpg"><span
                class="title">Fugiat deserunt doloremque molestiae veritatis beatae aut. Eveniet voluptas sunt
                accusamus. Quis quos hic itaque. Eveniet est repellendus. Odit sed sint. Repellendus est et.</span>
        </div>
</div>
```

**效果**

![images](column-layout-02.png)

我们可以看到，虽然实现了`瀑布流`的效果，但奇怪的是例子中前两列的最后一个元素的`文本内容`被`自动断开`，一部分在当前列尾，一部分在下一列的列头。

这种展示方式是我们不希望看到的，我们希望的是每个元素都是独立的，前后不断开，此时我们需要使用`break-inside`来实现。

break-inside:auto | avoid

- auto：元素可以中断
- avoid：元素不能中断

效果实现了，但由于`multi-column`布局中子元素排列顺序是先`从上往下`再`从左至右`，所以这种方式仅适用于数据固定不变的情况，对于滚动加载更多等可动态添加数据的情况就并不适用了。

#### 4.2 grid 布局

`Grid布局`是最强大的 CSS 布局方案。

它将网页划分成一个个网格，可以做生意组合不同的网格，做出各种各样的布局。以前，只能通过复杂的 CSS 框架达到的效果，现在浏览器内置了。

#### 4.3 Flexbox 布局

### 参考资料

- [「前端进阶」深度解析瀑布流布局](https://juejin.im/post/5ddb7a7c51882573520fb185)
- [蘑菇街 PC 首页瀑布流实践](https://juejin.im/post/5e05acf0f265da33d158a1b1)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
