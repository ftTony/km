(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{445:function(e,t,r){"use strict";r.r(t);var v=r(13),a=Object(v.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"代码-code-review"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代码-code-review"}},[e._v("#")]),e._v(" 代码 Code Review")]),e._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),r("p",[e._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),e._v(" "),r("h2",{attrs:{id:"内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[e._v("#")]),e._v(" 内容")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E4%B8%80%E3%80%81code-review-%E7%9A%84%E5%A5%BD%E5%A4%84"}},[e._v("Code Review 的好处")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E6%8E%A8%E5%8A%A8-code-review-%E8%90%BD%E5%9C%B0%E6%89%A7%E8%A1%8C"}},[e._v("推动 Code Review 落地执行")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E5%89%8D%E7%AB%AF%E5%A6%82%E4%BD%95%E5%81%9A-code-review"}},[e._v("前端如何做 Code Review")])])]),e._v(" "),r("h3",{attrs:{id:"一、code-review-的好处"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、code-review-的好处"}},[e._v("#")]),e._v(" 一、Code Review 的好处")]),e._v(" "),r("p",[e._v("想要做好 Code Review，必须让参与的工程师充分认识到 Code Review 的好处")]),e._v(" "),r("ul",[r("li",[e._v("互相学习，彼此成就")]),e._v(" "),r("li",[e._v("知识共享，自动互备")]),e._v(" "),r("li",[e._v("统一风格，提升质量")])]),e._v(" "),r("h4",{attrs:{id:"_1-1-互相学习，彼此成就"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-互相学习，彼此成就"}},[e._v("#")]),e._v(" 1.1 互相学习，彼此成就")]),e._v(" "),r("p",[e._v("无论是高手云集的架构师团队，还是以 CURD 为主的业务开发团队，大家的技术能力、经验都是有差异的。")]),e._v(" "),r("p",[e._v("通过 Code Review，对于同样的功能实现，有经验的工程师可以给经验尚浅的工程师提供合理的优化建议。经验尚浅的工程师可以通过阅读优质代码，快速学习相关技术运用的最佳实践。如果大家技术实力相当，可能就是互相刷新新思想了。")]),e._v(" "),r("blockquote",[r("p",[e._v("你有一个苹果，我有一个苹果，彼此交换一下，我们仍然是各有一个苹果；但你有一种思想，我有一种思想，彼此交换，我们就都有了两种思想，甚至更多。")])]),e._v(" "),r("h4",{attrs:{id:"_1-2-知识共享，自动互备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-知识共享，自动互备"}},[e._v("#")]),e._v(" 1.2 知识共享，自动互备")]),e._v(" "),r("p",[e._v("在大部分团队，尤其是采用服务化架构以及微服务架构的团队，通常都是 1 个开发人员负责多个服务/项目（Project），如果没有 Code Review，那么项目所涉及的架构知识，或者业务知识，就只存在于项目执行过程中产出的架构文档，以及核心流程、功能的说明文档了。")]),e._v(" "),r("p",[e._v("文档可以帮助其他工程师了解服务/项目的情况，但通常其他工程师不会主动去阅读这些文档，等到真的要维护别的工程师写的代码，文档的完整性往往没有最初的效果好了，文档跟代码实现的切尔西度也会下降。")]),e._v(" "),r("p",[e._v("Code Review 的过程，就是根据提交者的描述阅读代码的逻辑，看代码实现是否跟描述一致。在这个时候，Reviewer 就必须阅读文档，知识的传播性就更好，也基本上不会出现只有 1 个人了解某个项目的情况了。")]),e._v(" "),r("h4",{attrs:{id:"_1-3-统一风格，提升质量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-统一风格，提升质量"}},[e._v("#")]),e._v(" 1.3 统一风格，提升质量")]),e._v(" "),r("p",[e._v("如果要给代码质量分一下等级的话，那应该是：")]),e._v(" "),r("p",[e._v("可以编译通过->可以正常运行->可以测试通过->容易阅读->容易维护。那么通过 Code Review 的代码最起码可以达到易阅读这个级别。")]),e._v(" "),r("p",[e._v("要做到易阅读，可不是说只要有 Code Review 这个环节就可以了，还要有相关的规范，让大家按照同样的工程风格、编码风格去构建项目和编写代码。统一风格一方面是让大家无论是维护项目还是阅读代码，不用互相适应各自的编码习惯，另外也是给 Reviewer 一个 Code Rview 的基本依据。")]),e._v(" "),r("blockquote",[r("p",[e._v("发现 Bug 不是 Code Review 的必需品，而是附属品。至于那些低级的问题/bug 交给代码扫描工具就可以了，还不是 Code Review 的职责。")])]),e._v(" "),r("h3",{attrs:{id:"二、推动-code-review-落地执行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、推动-code-review-落地执行"}},[e._v("#")]),e._v(" 二、推动 Code Review 落地执行")]),e._v(" "),r("h4",{attrs:{id:"_2-1-选定工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-选定工具"}},[e._v("#")]),e._v(" 2.1 选定工具")]),e._v(" "),r("p",[e._v("可以用来做 Code Review 的工具很多，这里主要介绍相对主流的 Gerrit、GitLab")]),e._v(" "),r("h4",{attrs:{id:"_2-2-制定开发规范"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-制定开发规范"}},[e._v("#")]),e._v(" 2.2 制定开发规范")]),e._v(" "),r("p",[e._v("没有规则，就没有执行。规则中首当其部的就是开发规范。")]),e._v(" "),r("p",[e._v("规范中建议包含：")]),e._v(" "),r("ul",[r("li",[e._v("工程规范（工程结构，分层方式及命名等等）")]),e._v(" "),r("li",[e._v("全名规范（接口、类、方法名、变量名等）")]),e._v(" "),r("li",[e._v("代码格式（括号、空格、换行、缩进等）")]),e._v(" "),r("li",[e._v("注释规范（规定必要的注释）")]),e._v(" "),r("li",[e._v("日志规范（合理的记录必要的日志）")]),e._v(" "),r("li",[e._v("各种推荐与不推荐的代码示例")])]),e._v(" "),r("h3",{attrs:{id:"三、前端如何做-code-review"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、前端如何做-code-review"}},[e._v("#")]),e._v(" 三、前端如何做 Code Review")]),e._v(" "),r("h3",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/ken-io/p/how-to-do-code-review-in-a-team.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何在团队中做好 Code Review"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://juejin.im/post/5d80c27cf265da03e61b45c7",target:"_blank",rel:"noopener noreferrer"}},[e._v("【译】Google 官方文章——如何去做 code review"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/2Fpqlhl2XLuk7dFXCPUD-A",target:"_blank",rel:"noopener noreferrer"}},[e._v("关于代码评审（Code Review）"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/fengshi123/blog/issues/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端代码评审 Checklist 清单"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/73809355",target:"_blank",rel:"noopener noreferrer"}},[e._v("Code Review 最佳实践"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"联系作者"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#联系作者"}},[e._v("#")]),e._v(" 联系作者")]),e._v(" "),r("div",{attrs:{align:"center"}},[r("p",[e._v("\n        平凡世界，贵在坚持。\n    ")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);t.default=a.exports}}]);