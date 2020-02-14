(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{407:function(s,e,n){"use strict";n.r(e);var t=n(4),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"vue-nettick-理解与分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-nettick-理解与分析","aria-hidden":"true"}},[s._v("#")]),s._v(" Vue.netTick 理解与分析")]),s._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),s._v(" "),n("h2",{attrs:{id:"内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E4%BB%80%E4%B9%88%E6%98%AF-vue-nexttick-%EF%BC%9F"}},[s._v("什么是 Vue.nextTick()？")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%8C%E3%80%81vue-nexttick-%E7%9A%84%E8%B0%83%E7%94%A8%E6%96%B9%E5%BC%8F"}},[s._v("Vue.nextTick 的调用方式")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%B8%89%E3%80%81vm-nexttick-%E4%B8%8E-settimeout-%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F"}},[n("code",[s._v("vm.$nextTick")]),s._v(" 与 "),n("code",[s._v("setTimeout")]),s._v(" 的区别是什么？")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E7%90%86%E8%A7%A3-mutationobserver"}},[s._v("理解 MutationObserver")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%94%E3%80%81nexttick-%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90"}},[s._v("nextTick 源码分析")])])]),s._v(" "),n("h3",{attrs:{id:"一、什么是-vue-nexttick-？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是-vue-nexttick-？","aria-hidden":"true"}},[s._v("#")]),s._v(" 一、什么是 Vue.nextTick()？")]),s._v(" "),n("blockquote",[n("p",[s._v("官方解释：在下次 DOM 更新循环结束之后执行的延迟回调。在修改数据之后立即使用该方法，获取更新后的 DOM。")])]),s._v(" "),n("p",[s._v("简单理解为：当页面中的数据发生改变了，就会把该任务放到一个异步队列中，只有在当前任务空闲时才会进行 DOM 渲染，当 DOM 渲染完成以后，该函数就会自动执行。")]),s._v(" "),n("h4",{attrs:{id:"_1-1-更改数据后，进行节点dom操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-更改数据后，进行节点dom操作","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.1 更改数据后，进行节点DOM操作")]),s._v(" "),n("p",[s._v("比如修改数据、修改节点样式等操作。比如说修改data中的一个属性数据后，如果我这个时候直接获取该html内容的话，它还是老数据的，那么此刻，我们可以使用Vue.nextTick()，在该函数内部获取数据即可：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<!DOCTYPE html>\n<html>\n<head>\n  <title>vue.nextTick()方法的使用</title>\n  <meta charset="utf-8">\n  <script type="text/javascript" src="https://cn.vuejs.org/js/vue.js"><\/script>\n</head>\n<body>\n  <div id="app">\n    <template>\n      <div ref="list">{{name}}</div>\n    </template>\n  </div>\n  <script type="text/javascript">\n    new Vue({\n      el: \'#app\',\n      data: {\n        name: \'tony\'\n      },\n      mounted() {\n        this.updateData();\n      },\n      methods: {\n        updateData() {\n          this.name = \'小武子\';\n          console.log(this.$refs.list.textContent); // 打印 tony\n          this.$nextTick(() => {\n            console.log(\'-------\');\n            console.log(this.$refs.list.textContent); // 打印 小武子\n          });\n        }\n      }\n    })\n  <\/script>\n</body>\n</html>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br")])]),n("p",[s._v("如上代码，页面初始化时候，页面显示的是“tony”；当页面中的所有的DOM更新完成后，我估mounted()生命周期中调用updateData()方法，然后在该方法内部修改this.name这个数据，再打印this.")]),s._v(" "),n("p",[s._v("refs.list.textContent，可以看到打印的数据还是“tony”；为什么会是这样呢？那是因为修改name数据后，我们的DOM还没有被渲染完成，所以我们这个时候获取的值还是之前的值，但是我们放在nextTick函数里面的时候，代码会在DOM更新完成后会自动nextTick()函数，因此这个时候我们再去使用this.refs.list.textContent获取该值的时候，就可以获取到最新值了。")]),s._v(" "),n("p",[n("strong",[s._v("理解DOM更新：")]),s._v(" 在VUE中，当我们修改了data中的某一个值后，并不会立刻去渲染html页面，而是将vue更改的数据放到watcher的一个异步队列中，只有当前任务空闲的才会执行watcher中的队列任务，因此这就会有一个延迟时间，因此我们把代码放到nextTick函数后就可以获取到html页面的最新值了。")]),s._v(" "),n("h4",{attrs:{id:"_1-2-在created生命周期中进行dom操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-在created生命周期中进行dom操作","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.2 在created生命周期中进行DOM操作")]),s._v(" "),n("p",[s._v("在Vue生命周期中，只有在mounted生命周期中我们的HTML才渲染完成，因此在该生命周期中，我们就可以获取到页面中的html DOM节点，但如果我们在created生命周期中是访问不到DOM节点的。在该生命周期中我们想要获取DOM节点的话，我们需要使用"),n("code",[s._v("this.$nextTick()")]),s._v("函数。")]),s._v(" "),n("p",[s._v("代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<!DOCTYPE html>\n<html>\n<head>\n  <title>vue.nextTick()方法的使用</title>\n  <meta charset="utf-8">\n  <script type="text/javascript" src="https://cn.vuejs.org/js/vue.js"><\/script>\n</head>\n<body>\n  <div id="app">\n    <template>\n      <div ref="list">{{name}}</div>\n    </template>\n  </div>\n  <script type="text/javascript">\n    new Vue({\n      el: \'#app\',\n      data: {\n        name: \'tony\'\n      },\n      created() {\n        console.log(this.$refs.list); // 打印undefined\n        this.$nextTick(() => {\n          console.log(this.$refs.list); // 打印出 "<div>tony</div>"\n        });\n      },\n      methods: {\n        \n      }\n    })\n  <\/script>\n</body>\n</html>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("p",[s._v("如上代码，在created生命周期内，我们打印 this.")]),s._v(" "),n("p",[s._v("refs.list值为undefined，那是因为在created生命周期内页面的html没有被渲染完成，因此打印出为undefined；但是我们把它放入this.nextTick函数内即可打印出值出来，这也印证了nextTick是在下次DOM更新循环线束之后执行的延迟回调。因此只有DOM渲染完成后才会自动执行的延迟回调函数。")]),s._v(" "),n("p",[s._v("Vue的特点之一就是能实现响应式，但数据更新时，DOM不会立即更新，而是放入一个异步队列中，因此如果在我们的业务场景中，需要在DOM更新之后执行一段代码时，这个时候我们可以使用this.$nextTick()函数来实现")]),s._v(" "),n("h3",{attrs:{id:"二、vue-nexttick-的调用方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、vue-nexttick-的调用方式","aria-hidden":"true"}},[s._v("#")]),s._v(" 二、Vue.nextTick 的调用方式")]),s._v(" "),n("p",[s._v("调用方式主要有以下两种：Vue.nextTick([callback,context])和 "),n("code",[s._v("vm.$nextTick([callback])")]),s._v(";")]),s._v(" "),n("ol",[n("li",[n("code",[s._v("Vue.nextTick([callback,context])")]),s._v(";该方法是全局方法，该方法可能接收 2 个参数，分别为回调函数和执行回调函数的上下文环境。")]),s._v(" "),n("li",[n("code",[s._v("vm.$nextTick([callback])")]),s._v(": 该方法是实列方法，执行时自动绑定 this 到当前的实列上。")])]),s._v(" "),n("h3",{attrs:{id:"三、vm-nexttick-与-settimeout-的区别是什么？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、vm-nexttick-与-settimeout-的区别是什么？","aria-hidden":"true"}},[s._v("#")]),s._v(" 三、"),n("code",[s._v("vm.$nextTick")]),s._v(" 与 "),n("code",[s._v("setTimeout")]),s._v(" 的区别是什么？")]),s._v(" "),n("p",[s._v("在区别他们两之前，我们先来看一个简单的demo如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>nextTick学习3</title>\n    <script type="text/javascript" src="https://cn.vuejs.org/js/vue.js"><\/script>\n</head>\n<body>\n    <div id="app">\n        <template>\n          <div ref="list">{{name}}</div>\n        </template>\n      </div>\n      <script type="text/javascript">\n        new Vue({\n          el: \'#app\',\n          data: {\n            name: \'tony\'\n          },\n          created() {\n            console.log(this.$refs.list); // 打印undefined\n            setTimeout(() => {\n              console.log(this.$refs.list); // 打印出 "<div>tony</div>"\n            }, 0);\n          }\n        })\n      <\/script>\n</body>\n</html>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("p",[s._v("如上代码，我们不使用 nextTick， 我们使用setTimeout延迟也一样可以获取页面中的HTML元素的，那么他们俩之间到底有什么区别呢？")]),s._v(" "),n("p",[s._v("通过看vue源码我们知道，nextTick源码在"),n("code",[s._v("src/core/util/next-tick.js")]),s._v("里面。在vue中使用三种情况来延迟调用该函数，首先我们会判断我们的设备是否支持Promise对象，如果支持的话，会使用Promise.then来做延迟调用函数。如果设备不支持Promise对象，再判断是否支持MutationObserver对象，如果支持该对象，就使用MutationObserver来做延迟，最后如果上面两种都不支持的话，我们会使用"),n("code",[s._v("setTimeout(()=>{},0)")]),s._v(";setTimeout来做延迟操作。")]),s._v(" "),n("p",[s._v("在比较 nextTick 与 setTimeout 的区别，其实我们可以比较 promise 或 MutationObserver 对象与 setTimeout 的区别的了，因为 nextTick 会先判断设备是否支持 promise 及 MutationObserver 对象的，只要我们弄懂 promise 和 setTimeout 的区别，也就是弄明白 nextTick 与 setTimeout 的区别了。")]),s._v(" "),n("p",[s._v("比较promise与setTimeout之前，需要先了解浏览器的eventloop，请参考文章"),n("a",{attrs:{href:"https://km.xiaowuzi.info/js/js-eventloop.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("理解 EventLoop"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("strong",[s._v("总结")]),s._v("：microtasks(微任务)包括Promise和MutaionObserver，因此我们可以知道在Vue中的nextTick的执行速度上是快于setTimeout的。")]),s._v(" "),n("h3",{attrs:{id:"四、理解-mutationobserver"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、理解-mutationobserver","aria-hidden":"true"}},[s._v("#")]),s._v(" 四、理解 MutationObserver")]),s._v(" "),n("p",[s._v("在 Vue 中的 nextTick 的源码中，使用了 3 种情况来做延迟操作，首先会判断我们的设备是否支持 Promise 对象，如果支持 Promise 对象，就使用 Promise.then()异步函数来延迟，如果不支持，我们会继续判断我们的设备是否支持 MutationObserver，如果支持，我们就使用 MutationObserver 来监听，最后如果上面两种都不支持的话，我们会使用 setTimeout 来处理，那么我们现在要理解的是 MutationObserver 是什么？")]),s._v(" "),n("h4",{attrs:{id:"_4-1-mutationobserver是什么？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-mutationobserver是什么？","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.1 MutationObserver是什么？")]),s._v(" "),n("p",[s._v("MutationObserver中文含义可以理解为“变动观察器”。它是监听DOM变动接口，DOM发生任何变动，DOM发生任何变动，MutationObserver会得到通知。在Vue中是通过该属性来监听DOM更新完毕的。")]),s._v(" "),n("p",[s._v("它和事件类似，但有所不同，事件是同步的，当DOM发生变动时，事件会立刻处理，但是MutationObserver则是异步的，它不会立即处理，而是等页面上所有的DOM完成后，会执行一次，如果页面上要操作100次DOM的话，如果是事件的话会监听100次DOM，但是我们的MutationObserver只会执行一次，它是等待所有DOM操作完成后，再执行。")]),s._v(" "),n("p",[n("strong",[s._v("它的特点是：")])]),s._v(" "),n("ol",[n("li",[s._v("等待所有脚本任务完成后，才会执行，即采用异步方式。")]),s._v(" "),n("li",[s._v("DOM的变动记录会封装成一个数组进行处理。")]),s._v(" "),n("li",[s._v("还可以观测发生在DOM的所有类型变动，也可以观测某一类变动。")])]),s._v(" "),n("p",[s._v("当然 MutationObserver 也是有浏览器兼容的，我们可以使用如下代码来检测浏览器是否支持该属性，如下代码:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var MuationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver;\n\n// 监测浏览器是否支持\nvar observeMutationSupport = !!MutationObserver;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h4",{attrs:{id:"_4-2-mutationobserver构造函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-mutationobserver构造函数","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.2 MutationObserver构造函数")]),s._v(" "),n("p",[s._v("首先我们要使用MutationObserver构造函数的话，我们先要实例化MutationObserver构造函数，同时我们要指定该实例的回调函数，如下代码：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var observer = new MutationObserver(callback);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("观察器callback回调函数会在每次DOM发生变动后调用，它接收2个参数，第一个是变动的数组，第二个是观察器的实例。")]),s._v(" "),n("h4",{attrs:{id:"_4-3-mutationobserver实例的方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-mutationobserver实例的方法","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.3 MutationObserver实例的方法")]),s._v(" "),n("p",[s._v("observe()该方法是要观察DOM节点的变动的。")]),s._v(" "),n("p",[s._v("调用方式为："),n("strong",[s._v("observer.observe(dom,option);")])]),s._v(" "),n("p",[s._v("options 类型有如下：")]),s._v(" "),n("ul",[n("li",[s._v("childList：子节点的变动。")]),s._v(" "),n("li",[s._v("attributes：属性的变动。")]),s._v(" "),n("li",[s._v("charatcterData：节点内容或节点文本的变动。")]),s._v(" "),n("li",[s._v("subtree：所有后代节点的变动。")])]),s._v(" "),n("p",[s._v("需要观察哪一种变动类型，需要在options对象中指定为true即可；但是如果设置subtree的变动，必须同时指定childList，attributes和characterData中的一种或多种。")]),s._v(" "),n("p",[s._v("示例代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>MutationObserver实例的方法</title>\n</head>\n<body>\n    <div id=\"app\">\n        <ul>\n            <li>tony</li>\n        </ul>\n    </div>\n    <script type=\"text/javascript\">\n    var MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver;\n    var list = document.querySelector('ul');\n    var Observer = new MutationObserver(function(mutations,instance){\n        console.log(mutations);         // 打印mutations\n        console.log(instance);      // 打印 instance\n        mutations.forEach(function(mutation){\n            console.log(mutation);     // 打印mutation\n        });\n    });\n    Observer.observe(list,{\n        childList:true,     //  子节点的变动\n        characterData: true, // 节点内容或节点文本变动\n        attributes: true,       // 属性变化时\n        subtree:true        // 所有后代节点的变动\n    });\n    list.childNodes[0].data = \"小武子\";\n    var li = document.createElement('li');\n    var textNode = document.createTextNode('肖能武');\n    li.appendChild(textNode);\n    list.appendChild(li);\n    // 设置节点的属性，会触发回调函数\n    list.setAttribute('data-value', 'tugenhua111');\n\n    // 重新设置属性，会触发回调函数\n    list.setAttribute('data-value', 'tugenhua222');\n\n    // 删除属性，也会触发回调函数\n    list.removeAttribute('data-value');\n    <\/script>\n</body>\n</html>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br")])]),n("p",[s._v("打印相应属性如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:"mutationObserver.png",alt:"images"}})]),s._v(" "),n("p",[s._v("如上就是MutationObserver的基本使用，它能监听子节点的变动、属性的变动、节点内容或节点文本的变动及所有后代节点的变动。")]),s._v(" "),n("h3",{attrs:{id:"五、nexttick-源码分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、nexttick-源码分析","aria-hidden":"true"}},[s._v("#")]),s._v(" 五、nextTick 源码分析")]),s._v(" "),n("p",[s._v("vue源码在 "),n("code",[s._v("vue/src/core/util/next-tick.js")]),s._v(" 中。源码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/* @flow */\n/* globals MutationObserver */\n\nimport { noop } from 'shared/util'\nimport { handleError } from './error'\nimport { isIE, isIOS, isNative } from './env'\n\nexport let isUsingMicroTask = false\n\nconst callbacks = []\nlet pending = false\n\nfunction flushCallbacks () {\n  pending = false\n  const copies = callbacks.slice(0)\n  callbacks.length = 0\n  for (let i = 0; i < copies.length; i++) {\n    copies[i]()\n  }\n}\n\n// Here we have async deferring wrappers using microtasks.\n// In 2.5 we used (macro) tasks (in combination with microtasks).\n// However, it has subtle problems when state is changed right before repaint\n// (e.g. #6813, out-in transitions).\n// Also, using (macro) tasks in event handler would cause some weird behaviors\n// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).\n// So we now use microtasks everywhere, again.\n// A major drawback of this tradeoff is that there are some scenarios\n// where microtasks have too high a priority and fire in between supposedly\n// sequential events (e.g. #4521, #6690, which have workarounds)\n// or even between bubbling of the same event (#6566).\nlet timerFunc\n\n// The nextTick behavior leverages the microtask queue, which can be accessed\n// via either native Promise.then or MutationObserver.\n// MutationObserver has wider support, however it is seriously bugged in\n// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It\n// completely stops working after triggering a few times... so, if native\n// Promise is available, we will use it:\n/* istanbul ignore next, $flow-disable-line */\nif (typeof Promise !== 'undefined' && isNative(Promise)) {\n  const p = Promise.resolve()\n  timerFunc = () => {\n    p.then(flushCallbacks)\n    if (isIOS) setTimeout(noop)\n  }\n  isUsingMicroTask = true\n} else if (!isIE && typeof MutationObserver !== 'undefined' && (\n  isNative(MutationObserver) ||\n  // PhantomJS and iOS 7.x\n  MutationObserver.toString() === '[object MutationObserverConstructor]'\n)) {\n  // Use MutationObserver where native Promise is not available,\n  // e.g. PhantomJS, iOS7, Android 4.4\n  // (#6466 MutationObserver is unreliable in IE11)\n  let counter = 1\n  const observer = new MutationObserver(flushCallbacks)\n  const textNode = document.createTextNode(String(counter))\n  observer.observe(textNode, {\n    characterData: true\n  })\n  timerFunc = () => {\n    counter = (counter + 1) % 2\n    textNode.data = String(counter)\n  }\n  isUsingMicroTask = true\n} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {\n  timerFunc = () => {\n    setImmediate(flushCallbacks)\n  }\n} else {\n  // Fallback to setTimeout.\n  timerFunc = () => {\n    setTimeout(flushCallbacks, 0)\n  }\n}\n\nexport function nextTick (cb?: Function, ctx?: Object) {\n  let _resolve\n  callbacks.push(() => {\n    if (cb) {\n      try {\n        cb.call(ctx)\n      } catch (e) {\n        handleError(e, ctx, 'nextTick')\n      }\n    } else if (_resolve) {\n      _resolve(ctx)\n    }\n  })\n  if (!pending) {\n    pending = true\n    timerFunc()\n  }\n  // $flow-disable-line\n  if (!cb && typeof Promise !== 'undefined') {\n    return new Promise(resolve => {\n      _resolve = resolve\n    })\n  }\n}\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br")])]),n("p",[s._v("如上代码，我们从上往下看，")]),s._v(" "),n("h4",{attrs:{id:"_5-1-promise-then-延迟调用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-promise-then-延迟调用","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.1 promise.then 延迟调用")]),s._v(" "),n("p",[s._v("基本代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("if (typeof Promise !== 'undefined' && isNative(Promise)) {\n  const p = Promise.resolve()\n  timerFunc = () => {\n    p.then(flushCallbacks)\n    if (isIOS) setTimeout(noop)\n  }\n  isUsingMicroTask = true\n} \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("上面代码的含义是：如果我们的设备（或叫浏览器）支持Promise，那么我们就使用Promise.then的方式来延迟函数的调用。Promise.then会将函数延迟到调用栈的最末端，从而会做到延迟。")]),s._v(" "),n("h4",{attrs:{id:"_5-2-mutationobserver-监听"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-mutationobserver-监听","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.2 MutationObserver 监听")]),s._v(" "),n("p",[s._v("基本代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("else if (!isIE && typeof MutationObserver !== 'undefined' && (\n  isNative(MutationObserver) ||\n  // PhantomJS and iOS 7.x\n  MutationObserver.toString() === '[object MutationObserverConstructor]'\n)) {\n  // Use MutationObserver where native Promise is not available,\n  // e.g. PhantomJS, iOS7, Android 4.4\n  // (#6466 MutationObserver is unreliable in IE11)\n  let counter = 1\n  const observer = new MutationObserver(flushCallbacks)\n  const textNode = document.createTextNode(String(counter))\n  observer.observe(textNode, {\n    characterData: true\n  })\n  timerFunc = () => {\n    counter = (counter + 1) % 2\n    textNode.data = String(counter)\n  }\n  isUsingMicroTask = true\n} \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("如上代码，首先也是判断我们的设备是否支持MutationObserver对象，如果支持的话，我们就会创建一个MutationObserver构造函数，并且把flushCallbacks函数当做callback的回调，然后我们会创建一个文本节点，之后会使用MutationObserver对象的observe来监听该文本节点，如果广西节点的内容有任何变动的话，它就会触发flushCallbacks回调函数。那么要怎么样触发呢？在该代码内有一个timerFunc函数，如果我们触发该函数，会导致文本节点的数据发生改变，进而触发MutationObserver构造函数。")]),s._v(" "),n("h4",{attrs:{id:"_5-3-setimmediate-监听"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-setimmediate-监听","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.3 setImmediate 监听")]),s._v(" "),n("p",[s._v("基本代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {\n  timerFunc = () => {\n    setImmediate(flushCallbacks)\n  }\n} \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("如上面的Promise和MutationObserver都不支持的话，我们继续会判断设备是否支持setImmediate，setImmediate属于macrotasks(宏任务)的。该任务会在一个宏任务里执行回调队列。")]),s._v(" "),n("h4",{attrs:{id:"_5-4-使用settimeout-做降级处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-使用settimeout-做降级处理","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.4 使用setTimeout 做降级处理")]),s._v(" "),n("p",[s._v("基本代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("else {\n  // Fallback to setTimeout.\n  timerFunc = () => {\n    setTimeout(flushCallbacks, 0)\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("如果我们上面三种情况, 设备都不支持的话, 我们会使用 setTimeout 来做降级处理, 实现延迟效果。")]),s._v(" "),n("h3",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.cnblogs.com/tugenhua0707/p/11756584.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vue 系列---理解 Vue.nextTick 使用及源码分析(五)"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5cd9854b5188252035420a13",target:"_blank",rel:"noopener noreferrer"}},[s._v("你真的理解$nextTick 么"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"联系作者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),n("div",{attrs:{align:"center"}},[n("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),n("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);e.default=a.exports}}]);