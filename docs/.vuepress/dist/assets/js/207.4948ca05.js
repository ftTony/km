(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{343:function(r,e,t){"use strict";t.r(e);var a=t(2),_=Object(a.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"docker-学习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-学习","aria-hidden":"true"}},[r._v("#")]),r._v(" docker 学习")]),r._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[r._v("#")]),r._v(" 前言")]),r._v(" "),t("p",[r._v("软件开发最大的麻烦事之一，就是环境配置。用户计算机的环境都不相同，你怎么知道自家的软件，能在那些机器跑起来？")]),r._v(" "),t("p",[r._v("用户必须保证两件事：操作系统的设置。各种库和组件的安装。只有它们都正确。软件才能运行。举例来说，安装一个 Python 应用，计算机必须有 Python 引擎，还必须有各各依赖，可能还要配置环境变量。")]),r._v(" "),t("p",[r._v("如果某些老旧的模块与当前环境不兼容，那就麻烦了。开发者常常会说：“它在我的机器可以跑了”，言下之意就是，其他机器很可能跑不了。")]),r._v(" "),t("p",[r._v("环境配置如此麻烦，换一台机器，就要重来一次，旷日费时。很多人想到，能不能从根本上解决问题，软件可以带环境安装？也就是说，安装的时候，把原始环境一模一样地复制过来。")]),r._v(" "),t("h2",{attrs:{id:"内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[r._v("#")]),r._v(" 内容")]),r._v(" "),t("ul",[t("li",[r._v("虚拟机")]),r._v(" "),t("li",[r._v("Linux 容器")]),r._v(" "),t("li",[r._v("Docker 是什么？")]),r._v(" "),t("li",[r._v("Docker 的用途")]),r._v(" "),t("li",[r._v("基本概念")]),r._v(" "),t("li",[r._v("安装 Docker")]),r._v(" "),t("li",[r._v("操作容器")])]),r._v(" "),t("h3",{attrs:{id:"一、虚拟机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、虚拟机","aria-hidden":"true"}},[r._v("#")]),r._v(" 一、虚拟机")]),r._v(" "),t("p",[r._v("虚拟机就是带环境安装的一种解决方案。它可以在一种操作系统里面运行另一种操作系统，比如在 Windows 系统里面运行 Linux 系统。应用程序对此毫无感知，因为虚拟机看上去跟真实系统一模一样，而对于底层系统来说，虚拟机就是一普通文件，不需要了就删掉，对其他部分毫无影响。")]),r._v(" "),t("p",[r._v("虽然用户可以通过虚拟机还原软件的原始环境。但是，这个方案有几个缺点。")]),r._v(" "),t("ul",[t("li",[t("strong",[r._v("资源占用多")]),r._v("虚拟机会独占一部分内在和硬盘空间。它运行的时候，其他程序就不能使用这些资源了。哪怕虚拟机里面的应用程序，真正使用的内存只有 1MB，虚拟机依然需要几百 MB 的内存才能运行。")]),r._v(" "),t("li",[t("strong",[r._v("冗余步骤多")]),r._v("虚拟机是完整的操作系统，一些系统级别的操作步骤，往往无法跳过，比如用户登录。")]),r._v(" "),t("li",[t("strong",[r._v("启动慢")]),r._v("启动操作系统需要多久，启动虚拟机就需要多久。可能要等几分钟，应用程序才能真正运行。")])]),r._v(" "),t("h3",{attrs:{id:"二、linux-容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、linux-容器","aria-hidden":"true"}},[r._v("#")]),r._v(" 二、Linux 容器")]),r._v(" "),t("p",[r._v("由于虚拟机存在这些缺点，Linux 发展出了另一种虚拟化技术：Linux 容器。")]),r._v(" "),t("p",[r._v("**Linux 容器不是模拟一个完整的操作系统，而是对进程进行隔离。**或者说，在正常进程的外面套了一个"),t("a",{attrs:{href:"https://opensource.com/article/18/1/history-low-level-container-runtimes",target:"_blank",rel:"noopener noreferrer"}},[r._v("保护层"),t("OutboundLink")],1),r._v("。对于容器里面的进程来说，它接触到的各种资源都是虚拟的，从而实现与底层系统的隔离。")]),r._v(" "),t("p",[r._v("由于窗口是进程级别的，相比虚拟机有很多优势。")]),r._v(" "),t("ul",[t("li",[t("strong",[r._v("启动快")]),r._v(" 容器里面的应用，直接就是底层系统的一个进程，而不是虚拟机内部的进程。所以，启动容器启动本机的一进程，而不是启动一个操作系统，速度就快很多。")]),r._v(" "),t("li",[t("strong",[r._v("资源占用少")]),r._v(" 容器占用需要的资源，不占用那些没有用到的资源；虚拟机由于是完整的操作，不可避免要占用所有资源。另外，多个容器可以共享资源，虚拟机都是独享资源。")]),r._v(" "),t("li",[t("strong",[r._v("体积小")]),r._v(" 容器只要包含用到的组件即可，而虚拟机是整个操作系统的打包，所以容器文件比虚拟机文件要小很多。")])]),r._v(" "),t("p",[r._v("总之，容器有点像轻量级的虚拟机，能够提供虚拟化的环境，但是成本开销小得多。")]),r._v(" "),t("h3",{attrs:{id:"三、docker-是什么？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、docker-是什么？","aria-hidden":"true"}},[r._v("#")]),r._v(" 三、Docker 是什么？")]),r._v(" "),t("p",[r._v("**Docker 属于 Linux 容器的一种封装，提供简单易用的容器使用接口。**它是目前最流行的 Linux 窗口解决方案。")]),r._v(" "),t("p",[r._v("Docker 将应用程序与该程序的依赖，打包在一个文件里面。运行这个文件，就会生成一个虚拟容器。程序在这个虚拟容器里运行，就好像在真实的物理机上运行一样。有了 Docker，就不用担心环境问题。")]),r._v(" "),t("p",[r._v("总体来说，Docker 的接口相当简单，用户可以方便地创建和使用容器，把自己的应用放入容器。容器还可以进行版本管理、复制、分享、修改，就像管理普通的代码一样。")]),r._v(" "),t("h3",{attrs:{id:"四、docker-的用途"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、docker-的用途","aria-hidden":"true"}},[r._v("#")]),r._v(" 四、Docker 的用途")]),r._v(" "),t("p",[r._v("Docker 的主要用途，目前有三大类。")]),r._v(" "),t("ul",[t("li",[t("strong",[r._v("提供一次性的环境")]),r._v("。比如，本地测试他人的软件、持续集成的时候提供单元测试和构建的环境。")]),r._v(" "),t("li",[t("strong",[r._v("提供弹性的云服务")]),r._v("。因为 Docker 容器可以随开随关，很适合动态扩容和缩容。")]),r._v(" "),t("li",[t("strong",[r._v("组件微服务架构")]),r._v("。通过多个容器，一台机器可以跑多个服务，因此在梧桐就可以模拟出微服务架构。")])]),r._v(" "),t("h3",{attrs:{id:"五、基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、基本概念","aria-hidden":"true"}},[r._v("#")]),r._v(" 五、基本概念")]),r._v(" "),t("ul",[t("li",[r._v("镜像")]),r._v(" "),t("li",[r._v("容器")]),r._v(" "),t("li",[r._v("仓库")])]),r._v(" "),t("h3",{attrs:{id:"六、安装-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、安装-docker","aria-hidden":"true"}},[r._v("#")]),r._v(" 六、安装 Docker")]),r._v(" "),t("ul",[t("li",[r._v("Windows")]),r._v(" "),t("li",[r._v("CentOS")]),r._v(" "),t("li",[r._v("macOS")])]),r._v(" "),t("h3",{attrs:{id:"七、操作容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七、操作容器","aria-hidden":"true"}},[r._v("#")]),r._v(" 七、操作容器")]),r._v(" "),t("ul",[t("li",[r._v("启动")]),r._v(" "),t("li",[r._v("守护态运行")]),r._v(" "),t("li",[r._v("进入容器")]),r._v(" "),t("li",[r._v("导出和导入")]),r._v(" "),t("li",[r._v("删除")])]),r._v(" "),t("h3",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[r._v("#")]),r._v(" 参考资料")]),r._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("Docker 入门教程"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/ZUw_qLk3m77ATkYXpfP08A",target:"_blank",rel:"noopener noreferrer"}},[r._v("Node.js 服务 Docker 容器化应用实践"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/S7ksqF8z4SYJvcG1DOupNA",target:"_blank",rel:"noopener noreferrer"}},[r._v("一文零基础教你学会 Docker 入门到实践"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5d8440ebe51d4561eb0b2751",target:"_blank",rel:"noopener noreferrer"}},[r._v("写给前端的 Docker 实战教程"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/39241059",target:"_blank",rel:"noopener noreferrer"}},[r._v("使用 Docker 构建前端应用"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://docker_practice.gitee.io/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Docker — 从入门到实践"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/39241059",target:"_blank",rel:"noopener noreferrer"}},[r._v("使用 Docker 构建前端应用"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5c83cbaa6fb9a04a0f65fdaa",target:"_blank",rel:"noopener noreferrer"}},[r._v("如何使用 docker 部署前端应用"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/jaywcjlove/docker-tutorial",target:"_blank",rel:"noopener noreferrer"}},[r._v("Docker 入门教程"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5dddd15b6fb9a071576dbd7a",target:"_blank",rel:"noopener noreferrer"}},[r._v("前端领域的 Docker 与 Kubernetes"),t("OutboundLink")],1)])]),r._v(" "),t("h2",{attrs:{id:"联系作者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[r._v("#")]),r._v(" 联系作者")]),r._v(" "),t("div",{attrs:{align:"center"}},[t("p",[r._v("\n        平凡世界，贵在坚持。\n    ")]),r._v(" "),t("img",{attrs:{src:r.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);e.default=_.exports}}]);