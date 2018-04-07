(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{375:function(s,n,a){"use strict";a.r(n);var t=a(4),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"节流与防抖动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节流与防抖动","aria-hidden":"true"}},[s._v("#")]),s._v(" 节流与防抖动")]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("事件的触发权很多时候都属于用户，有些情况下会产生问题：")]),s._v(" "),a("ul",[a("li",[s._v("向后台发送数据，用户频繁触发，对服务器造成压力")]),s._v(" "),a("li",[s._v("一些浏览器事件：window.onresize、window.mousemove 等，触发的频率非常高，会造成浏览器性能问题")])]),s._v(" "),a("p",[s._v("如果你碰到这些问题，那就需要用到函数节流和防抖了。")]),s._v(" "),a("h2",{attrs:{id:"内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E4%BB%80%E4%B9%88%E6%98%AF%E9%98%B2%E6%8A%96"}},[s._v("什么是防抖")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E9%98%B2%E6%8A%96%E5%AE%9E%E7%8E%B0"}},[s._v("防抖实现")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF"}},[s._v("使用场景")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E4%BB%80%E4%B9%88%E6%98%AF%E8%8A%82%E6%B5%81"}},[s._v("什么是节流")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%94%E3%80%81%E8%8A%82%E6%B5%81%E5%AE%9E%E7%8E%B0"}},[s._v("节流实现")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E5%85%AD%E3%80%81%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF"}},[s._v("使用场景")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E4%B8%83%E3%80%81%E9%98%B2%E6%8A%96%E4%B8%8E%E8%8A%82%E6%B5%81%E5%8C%BA%E5%88%AB"}},[s._v("防抖与节流区别")])])]),s._v(" "),a("h3",{attrs:{id:"一、什么是防抖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是防抖","aria-hidden":"true"}},[s._v("#")]),s._v(" 一、什么是防抖")]),s._v(" "),a("p",[a("strong",[s._v("防抖：")]),s._v(" 一个需要频繁触发的函数，在规定时间内，只让最后一次生效，前面的不生效。")]),s._v(" "),a("h3",{attrs:{id:"二、防抖实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、防抖实现","aria-hidden":"true"}},[s._v("#")]),s._v(" 二、防抖实现")]),s._v(" "),a("p",[a("strong",[s._v("代码实现")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function debounce(func,wait,immediate){\n    var timeout,result;\n    var debounced = function(){\n        var context = this;\n        var args = arguments;\n\n        if(timeout) clearTimeout(timeout);\n        if(immediate){\n            // 如果已经执行过，不再执行\n            var callNow = !timeout;\n            timeout = setTimeout(function(){\n                timeout = null;\n            },wait);\n            if(callNow) result = func.apply(context,args);\n        }else{\n            timeout = setTimeout(function(){\n                func.apply(context,args);\n            },wait);\n        }\n        return result;\n    };\n\n    debounced.cancel = function(){\n        clearTimeout(timeout);\n        timeout = null;\n    };\n\n    return debounced;\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("h3",{attrs:{id:"三、使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、使用场景","aria-hidden":"true"}},[s._v("#")]),s._v(" 三、使用场景")]),s._v(" "),a("p",[s._v("对于连续的事件响应我们只需要执行一次回调：")]),s._v(" "),a("ul",[a("li",[s._v("每次"),a("code",[s._v("resize/scroll")]),s._v(" 触发统计事件")]),s._v(" "),a("li",[s._v("文本输入的验证(连续输入文字后发送"),a("code",[s._v("AJAX")]),s._v("请求进行验证，验证一次就好)")])]),s._v(" "),a("h3",{attrs:{id:"四、什么是节流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、什么是节流","aria-hidden":"true"}},[s._v("#")]),s._v(" 四、什么是节流")]),s._v(" "),a("p",[a("strong",[s._v("函数节流：")]),s._v(" 一个函数执行一次后，只有大于设定的执行周期后才会执行第二次。")]),s._v(" "),a("h3",{attrs:{id:"五、节流实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、节流实现","aria-hidden":"true"}},[s._v("#")]),s._v(" 五、节流实现")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\nfunction throttle(fun,wait,options){\n    var timeout,context,args,result;\n    var previous = 0;\n    if(!options) options = {};\n\n    var later = function() {\n        previous = options.leading === false ? 0 : new Date().getTime();\n        timeout = null;\n        func.apply(context,args);\n        if(!timeout) context = args = null;\n    };\n\n    var throttled = function() {\n        var now = new Date().getTime();\n        if(!previous && options.leading === false) previous = now;\n        var remaining = wait - (now - previous);\n        context = this;\n        args = arguments;\n        if(remaining <=0 || remaining > wait){\n            if(timeout){\n                clearTimeout(timeout);\n                timeout = null;\n            }\n            previous = now;\n            func.apply(context,args);\n            if(!timeout) context = args = null;\n        } else if (!timeout && options.trailing !== false){\n            timeout = setTimeout(later,remaining);\n        }\n    };\n\n    throttled.cancel = function(){\n        clearTimeout(timeout);\n        previous = 0;\n        timeout = null;\n    };\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br")])]),a("h3",{attrs:{id:"六、使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、使用场景","aria-hidden":"true"}},[s._v("#")]),s._v(" 六、使用场景")]),s._v(" "),a("p",[s._v("需要间隔一定时间触发回调来控制函数调用频率：")]),s._v(" "),a("ul",[a("li",[s._v("DOM 元素的拖拽功能实现(mousemove)")]),s._v(" "),a("li",[s._v("搜索联想(keyup)")]),s._v(" "),a("li",[s._v("计算鼠标移动的距离(mousemove)")]),s._v(" "),a("li",[s._v("Canvas 模拟画板功能(mousemove)")]),s._v(" "),a("li",[s._v("射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）")]),s._v(" "),a("li",[s._v("监听滚动事件判断是否到页面底部自动加载更多：给 scroll 加了 debounce 后，只有用户停止滚动后，才会判断是否到页面底部；如果是 throttle 的话，只要页面滚动就会间隔一段时间判断一次")])]),s._v(" "),a("h3",{attrs:{id:"七、防抖与节流区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、防抖与节流区别","aria-hidden":"true"}},[s._v("#")]),s._v(" 七、防抖与节流区别")]),s._v(" "),a("p",[s._v("函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理处理函数，而函数防抖只是在最后一次事件后才触发一次函数。比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现。")]),s._v(" "),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://muyiy.vip/blog/7/7.1.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("节流防抖"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/22",target:"_blank",rel:"noopener noreferrer"}},[s._v("JavaScript 专题之跟着 underscore 学防抖"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/26",target:"_blank",rel:"noopener noreferrer"}},[s._v("JavaScript 专题之跟着 underscore 学节流"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ljianshu/Blog/issues/43",target:"_blank",rel:"noopener noreferrer"}},[s._v("函数节流和防抖"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"联系作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);n.default=e.exports}}]);