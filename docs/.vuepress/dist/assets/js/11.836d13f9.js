(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{238:function(a,t,r){"use strict";r.r(t);var e=r(4),_=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"设计模式六大原则"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设计模式六大原则","aria-hidden":"true"}},[a._v("#")]),a._v(" 设计模式六大原则")]),a._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),r("p",[a._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),a._v(" "),r("h2",{attrs:{id:"内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E4%B8%80%E5%8D%95%E4%B8%80%E8%81%8C%E8%B4%A3%E5%8E%9F%E5%88%99"}},[a._v("单一职责原则")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#%E4%BA%8C%E9%87%8C%E6%B0%8F%E6%9B%BF%E6%8D%A2%E5%8E%9F%E5%88%99"}},[a._v("里氏替换原则")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#%E4%B8%89%E5%BC%80%E6%94%BE%E5%B0%81%E9%97%AD%E5%8E%9F%E5%88%99"}},[a._v("开放封闭原则")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#%E5%9B%9B%E5%BC%80%E6%94%BE%E5%B0%81%E9%97%AD%E5%8E%9F%E5%88%99"}},[a._v("依赖倒置原则")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#%E4%BA%94%E5%BC%80%E6%94%BE%E5%B0%81%E9%97%AD%E5%8E%9F%E5%88%99"}},[a._v("迪米特法则")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#%E5%85%AD%E5%BC%80%E6%94%BE%E5%B0%81%E9%97%AD%E5%8E%9F%E5%88%99"}},[a._v("开放封闭原则")])])]),a._v(" "),r("h3",{attrs:{id:"一、单一职责原则"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、单一职责原则","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、单一职责原则")]),a._v(" "),r("p",[a._v("*核心思想：*应该有且仅有一个原因引起类的变更")]),a._v(" "),r("p",[a._v("*问题描述：*假如有类Class1完成职责T1，T2，当职责T1或T2有变更需要修改时，有可能影响到该类的另外一个职责正常工作。")]),a._v(" "),r("p",[a._v("*好处：*类的复杂度降低、可读性提高、可维护性提高、扩展性提高、降低了变更引起的风险。")]),a._v(" "),r("p",[a._v("*需注意：*单一职责原则提出了一个编写程序的标准，用“职责”或“变化原因”来衡量接口或类设计得是否优良，但是“职责”和“变化原因”都是不可以度量的，因项目和环境而异。")]),a._v(" "),r("h3",{attrs:{id:"二、里氏替换原则"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、里氏替换原则","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、里氏替换原则")]),a._v(" "),r("p",[a._v("*核心思想：*在使用基类的的地方可以任意使用其子类，能保证子类完美替换基类。")]),a._v(" "),r("p",[a._v("*通俗来讲：*只要父类能出现的地方子类就能出现。反之，父类则未必能胜任。")]),a._v(" "),r("p",[a._v("*好处：*增强程序的健壮性，即使增加了子类，原有的子类还可以继续运行。")]),a._v(" "),r("p",[a._v("*需注意：*如果子类不能完整地实现父类的方法，或者父类的某些方法在子类中已经发生“畸变”，则建议断开父子继承关系 采用依赖、聚合、组合等关系代替继承。")]),a._v(" "),r("h3",{attrs:{id:"三、开放封闭原则"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、开放封闭原则","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、开放封闭原则")]),a._v(" "),r("p",[a._v("*核心思想：*高层模块不应该依赖底层模块，二者都该依赖其抽象；抽象不应该依赖细节；细节应该依赖抽象；")]),a._v(" "),r("p",[a._v("*说明：*高层模块就是调用端，低层模块就是具体实现类。抽象就是指接口或抽象类。细节就是实现类。")]),a._v(" "),r("p",[a._v("*通俗来讲：*依赖倒置原则的本质就是通过抽象（接口或抽象类）使个各类或模块的实现彼此独立，互不影响，实现模块间的松耦合。")]),a._v(" "),r("p",[a._v("*问题描述：*类A直接依赖类B，假如要将类A改为依赖类C，则必须通过修改类A的代码来达成。这种场景下，类A一般是高层模块，负责复杂的业务逻辑；类B和类C是低层模块，负责基本的原子操作；假如修改类A，会给程序带来不必要的风险。")]),a._v(" "),r("p",[a._v("*解决方案：*将类A修改为依赖接口interface，类B和类C各自实现接口interface，类A通过接口interface间接与类B或者类C发生联系，则会大大降低修改类A的几率。")]),a._v(" "),r("p",[a._v("*好处：*依赖倒置的好处在小型项目中很难体现出来。但在大中型项目中可以减少需求变化引起的工作量。使并行开发更友好。")]),a._v(" "),r("h3",{attrs:{id:"四、依赖倒置原则"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、依赖倒置原则","aria-hidden":"true"}},[a._v("#")]),a._v(" 四、依赖倒置原则")]),a._v(" "),r("p",[a._v("*核心思想：*类间的依赖关系应该建立在最小的接口上")]),a._v(" "),r("p",[a._v("*通俗来讲：*建立单一接口，不要建立庞大臃肿的接口，尽量细化接口，接口中的方法尽量少。也就是说，我们要为各个类建立专用的接口，而不要试图去建立一个很庞大的接口供所有依赖它的类去调用。")]),a._v(" "),r("p",[a._v("*问题描述：*类A通过接口interface依赖类B，类C通过接口interface依赖类D，如果接口interface对于类A和类B来说不是最小接口，则类B和类D必须去实现他们不需要的方法。\n需注意：")]),a._v(" "),r("p",[a._v("*接口尽量小，但是要有限度。*对接口进行细化可以提高程序设计灵活性，但是如果过小，则会造成接口数量过多，使设计复杂化。所以一定要适度")]),a._v(" "),r("p",[a._v("*提高内聚，减少对外交互。*使接口用最少的方法去完成最多的事情")]),a._v(" "),r("p",[a._v("*为依赖接口的类定制服务。*只暴露给调用的类它需要的方法，它不需要的方法则隐藏起来。只有专注地为一个模块提供定制服务，才能建立最小的依赖关系。")]),a._v(" "),r("h3",{attrs:{id:"五、迪米特法则"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五、迪米特法则","aria-hidden":"true"}},[a._v("#")]),a._v(" 五、迪米特法则")]),a._v(" "),r("p",[a._v("*核心思想：*类间解耦。")]),a._v(" "),r("p",[r("em",[a._v("通俗来讲：")]),a._v(" 一个类对自己依赖的类知道的越少越好。自从我们接触编程开始，就知道了软件编程的总的原则：低耦合，高内聚。无论是面向过程编程还是面向对象编程，只有使各个模块之间的耦合尽量的低，才能提高代码的复用率。低耦合的优点不言而喻，但是怎么样编程才能做到低耦合呢？那正是迪米特法则要去完成的。")]),a._v(" "),r("h3",{attrs:{id:"六、开放封闭原则"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#六、开放封闭原则","aria-hidden":"true"}},[a._v("#")]),a._v(" 六、开放封闭原则")]),a._v(" "),r("p",[a._v("*核心思想：*尽量通过扩展软件实体来解决需求变化，而不是通过修改已有的代码来完成变化\n*通俗来讲：*一个软件产品在生命周期内，都会发生变化，既然变化是一个既定的事实，我们就应该在设计的时候尽量适应这些变化，以提高项目的稳定性和灵活性。")]),a._v(" "),r("h3",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),r("p",[r("em",[a._v("一句话概括:")]),a._v(" 单一职责原则告诉我们实现类要职责单一；里氏替换原则告诉我们不要破坏继承体系；依赖倒置原则告诉我们要面向接口编程；接口隔离原则告诉我们在设计接口的时候要精简单一；迪米特法则告诉我们要降低耦合。而开闭原则是总纲，他告诉我们要对扩展开放，对修改关闭。")]),a._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://www.uml.org.cn/sjms/201211023.asp",target:"_blank",rel:"noopener noreferrer"}},[a._v("设计模式六大原则"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://juejin.im/post/5a52144d6fb9a01c9b65c651",target:"_blank",rel:"noopener noreferrer"}},[a._v("设计模式6大原则"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://www.jianshu.com/p/807bc228dbc2",target:"_blank",rel:"noopener noreferrer"}},[a._v("快速理解-设计模式六大原则"),r("OutboundLink")],1)])]),a._v(" "),r("h2",{attrs:{id:"联系作者"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),r("div",{attrs:{align:"center"}},[r("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),r("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);t.default=_.exports}}]);