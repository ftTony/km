(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{260:function(a,r,t){"use strict";t.r(r);var e=t(4),i=Object(e.a)({},(function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"理解盒模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#理解盒模型","aria-hidden":"true"}},[a._v("#")]),a._v(" 理解盒模型")]),a._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括：边距 margin，边框 border，填充 padding，和实际内容 content。盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。")]),a._v(" "),t("p",[t("img",{attrs:{src:"box03.png",alt:"images"}})]),a._v(" "),t("h2",{attrs:{id:"内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),t("ul",[t("li",[a._v("块容器盒")]),a._v(" "),t("li",[a._v("块盒")]),a._v(" "),t("li",[a._v("行盒")]),a._v(" "),t("li",[a._v("盒子四大家族")]),a._v(" "),t("li",[a._v("理解 box-sizing")])]),a._v(" "),t("h3",{attrs:{id:"一、块容器盒"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、块容器盒","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、块容器盒")]),a._v(" "),t("p",[a._v("只包含其它块级盒，或生成一个行内格式化上下文(inline formatting context)，只包含行内盒的叫做"),t("strong",[a._v("块容器盒子")]),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"二、块盒"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、块盒","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、块盒")]),a._v(" "),t("p",[a._v("同时是块容器盒的块级盒称为块盒。")]),a._v(" "),t("h3",{attrs:{id:"三、行盒"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、行盒","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、行盒")]),a._v(" "),t("p",[a._v("行盒由行内格式化上下文产生的盒，用于表示一行。在块盒里面，行盒从块盒一边排版到另一边。当有浮动时，行盒从左浮动的最右边排版到右浮动的最左边。")]),a._v(" "),t("h3",{attrs:{id:"四、盒子四大家族"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、盒子四大家族","aria-hidden":"true"}},[a._v("#")]),a._v(" 四、盒子四大家族")]),a._v(" "),t("ul",[t("li",[a._v("border")]),a._v(" "),t("li",[a._v("padding")]),a._v(" "),t("li",[a._v("content")]),a._v(" "),t("li",[a._v("margin")])]),a._v(" "),t("h4",{attrs:{id:"_4-1-border"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-border","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.1 border")]),a._v(" "),t("h4",{attrs:{id:"_4-2-padding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-padding","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.2 padding")]),a._v(" "),t("h4",{attrs:{id:"_4-3-content"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-content","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.3 content")]),a._v(" "),t("h4",{attrs:{id:"_4-4-margin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-margin","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.4 margin")]),a._v(" "),t("h3",{attrs:{id:"五、理解-box-sizing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、理解-box-sizing","aria-hidden":"true"}},[a._v("#")]),a._v(" 五、理解 box-sizing")]),a._v(" "),t("p",[t("img",{attrs:{src:"box02.png",alt:"images"}})]),a._v(" "),t("p",[a._v("box-sizing，顾名思义，其作用与设置 CSS box 的尺寸大小有关，而 CSS box 又可细分为:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("content-box")]),a._v("(W3C 盒模型，又名标准盒模型)：content area")]),a._v(" "),t("li",[t("code",[a._v("padding-box")]),a._v("(IE 盒模型，又名怪异盒模型)：content area + padding area")]),a._v(" "),t("li",[a._v("border-box(=content area + padding area + border area)")]),a._v(" "),t("li",[a._v("margin-box(=content area + padding area + border area + margin area)")])]),a._v(" "),t("h4",{attrs:{id:"_5-1-box-sizing-应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-box-sizing-应用场景","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.1 box-sizing 应用场景")]),a._v(" "),t("ul",[t("li",[a._v("border-box 属性在 form 上的使用")])]),a._v(" "),t("p",[a._v("当我们在要做一个登陆页面的时候，这时候就需要表单和按钮这些元素\n首先我们在 div 中设置两个表单，一个用来输入用户名，一个用来输入密码，同时还有一个登录按钮，\n当我们想让这两个表单和一个登录按钮的长度相同时，我们试着把她们三个的 width 的值设置为 100%\n但她们的长度并不一致，表单和按钮的 padding，border 值不统一，这时我们给表单的属性中添加一个 box-sizing：border-box，此时表单和按钮的长度保持一致\n当不给表单添加 box-sizing：border-box 时，而是添加一个 padding 值会发现表单的长度都有所增加\n当给按钮添加 padding 时，她的长度并不会改变，由此可以看出表单默认为 content-box，按钮 submit 默认为 border-box，button 的默认值也为 border-box")]),a._v(" "),t("ul",[t("li",[a._v("border-box 属性在盒子中的使用")])]),a._v(" "),t("p",[a._v("当我们设置一个宽度为 500px 的盒子，在里面放入四个盒子，分别为上(width:100%)，中左(width:60%)，中右(width:40%)，下(width: 100%)，此时在大盒子里面四个盒子排列的很整齐\n这是我们给上盒子设置一个 padding 或者 border 为 5px，这时上盒子的长度就会超出大盒子的宽度，此时我们给上盒子添加 box-sizing：border-box，就可以使他的宽度不超出")]),a._v(" "),t("h3",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("ul",[t("li",[a._v("《CSS 世界》")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/X9i_7BX-32EZlxsYP6MxEg",target:"_blank",rel:"noopener noreferrer"}},[a._v("【第 1234 期】前端布局基础概述"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/chokcoco/iCSS/issues/56",target:"_blank",rel:"noopener noreferrer"}},[a._v("谈谈一些有趣的 CSS 题目（11）-- IFC、BFC、GFC 与 FFC 知多少 "),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"联系作者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);r.default=i.exports}}]);