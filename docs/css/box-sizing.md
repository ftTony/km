# 理解盒模型

## 前言

CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括：边距 margin，边框 border，填充 padding，和实际内容 content。盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。

![images](box03.png)

## 内容

- 块容器盒
- 块盒
- 行盒
- 盒子四大家族
- 理解 box-sizing

### 一、块容器盒

只包含其它块级盒，或生成一个行内格式化上下文(inline formatting context)，只包含行内盒的叫做**块容器盒子**。

### 二、块盒

同时是块容器盒的块级盒称为块盒。

### 三、行盒

行盒由行内格式化上下文产生的盒，用于表示一行。在块盒里面，行盒从块盒一边排版到另一边。当有浮动时，行盒从左浮动的最右边排版到右浮动的最左边。

### 四、盒子四大家族

- border
- padding
- content
- margin

#### 4.1 border

#### 4.2 padding

#### 4.3 content

#### 4.4 margin

### 五、理解 box-sizing

![images](box02.png)

box-sizing，顾名思义，其作用与设置 CSS box 的尺寸大小有关，而 CSS box 又可细分为:

- `content-box`(W3C 盒模型，又名标准盒模型)：content area
- `padding-box`(IE 盒模型，又名怪异盒模型)：content area + padding area
- border-box(=content area + padding area + border area)
- margin-box(=content area + padding area + border area + margin area)

#### 5.1 box-sizing 应用场景

- border-box 属性在 form 上的使用

当我们在要做一个登陆页面的时候，这时候就需要表单和按钮这些元素
首先我们在 div 中设置两个表单，一个用来输入用户名，一个用来输入密码，同时还有一个登录按钮，
当我们想让这两个表单和一个登录按钮的长度相同时，我们试着把她们三个的 width 的值设置为 100%
但她们的长度并不一致，表单和按钮的 padding，border 值不统一，这时我们给表单的属性中添加一个 box-sizing：border-box，此时表单和按钮的长度保持一致
当不给表单添加 box-sizing：border-box 时，而是添加一个 padding 值会发现表单的长度都有所增加
当给按钮添加 padding 时，她的长度并不会改变，由此可以看出表单默认为 content-box，按钮 submit 默认为 border-box，button 的默认值也为 border-box

- border-box 属性在盒子中的使用

当我们设置一个宽度为 500px 的盒子，在里面放入四个盒子，分别为上(width:100%)，中左(width:60%)，中右(width:40%)，下(width: 100%)，此时在大盒子里面四个盒子排列的很整齐
这是我们给上盒子设置一个 padding 或者 border 为 5px，这时上盒子的长度就会超出大盒子的宽度，此时我们给上盒子添加 box-sizing：border-box，就可以使他的宽度不超出

### 参考资料

- 《CSS 世界》
- [【第 1234 期】前端布局基础概述](https://mp.weixin.qq.com/s/X9i_7BX-32EZlxsYP6MxEg)
- [谈谈一些有趣的 CSS 题目（11）-- IFC、BFC、GFC 与 FFC 知多少 ](https://github.com/chokcoco/iCSS/issues/56)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
