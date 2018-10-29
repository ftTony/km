(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{367:function(n,s,a){"use strict";a.r(s);var e=a(2),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"async-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async-函数","aria-hidden":"true"}},[n._v("#")]),n._v(" async 函数")]),n._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[n._v("#")]),n._v(" 前言")]),n._v(" "),a("p",[n._v("ES2017 标准引入了 async 函数，使得异步操作变得更加方便。")]),n._v(" "),a("p",[n._v("它是Generator函数的语法糖。")]),n._v(" "),a("p",[a("code",[n._v("async")]),n._v("函数对Generator函数的改进，体现在以下四点。")]),n._v(" "),a("ul",[a("li",[n._v("内置执行器")]),n._v(" "),a("li",[n._v("更好的语义")]),n._v(" "),a("li",[n._v("更广的适用性")]),n._v(" "),a("li",[n._v("返回值是 Promise")])]),n._v(" "),a("h2",{attrs:{id:"内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[n._v("#")]),n._v(" 内容")]),n._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95"}},[n._v("基本用法")])]),n._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E8%AF%AD%E6%B3%95"}},[n._v("语法")])]),n._v(" "),a("li",[a("a",{attrs:{href:"#%E4%B8%89%E3%80%81async-%E5%87%BD%E6%95%B0%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86"}},[n._v("async 函数的实现原理")])]),n._v(" "),a("li",[a("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E4%B8%8E%E5%85%B6%E4%BB%96%E5%BC%82%E6%AD%A5%E5%A4%84%E7%90%86%E6%96%B9%E6%B3%95%E7%9A%84%E6%AF%94%E8%BE%83"}},[n._v("与其他异步处理方法的比较")])])]),n._v(" "),a("h3",{attrs:{id:"一、基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、基本用法","aria-hidden":"true"}},[n._v("#")]),n._v(" 一、基本用法")]),n._v(" "),a("p",[a("code",[n._v("async")]),n._v("函数返回一个Promise对象，可以使用"),a("code",[n._v("then")]),n._v("方法添加回调函数，当函数执行的时候，一旦遇到"),a("code",[n._v("await")]),n._v("就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 函数声明\nasync function foo(){}\n\n// 函数表达式\nconst foo = async function(){};\n\n// 对象的方法\nlet obj = {async function(){}};\n\n// Class 的方法\nclass Storage{\n  constructor() {\n    this.cachePromise = caches.open('avatars');\n  }\n\n  async getAvatar(name) {\n    const cache = await this.cachePromise;\n    return cache.match(`/avatars/${name}.jpg`);\n  }\n}\n\n// 箭头函数\nconst foo = async() =>{};\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br")])]),a("h3",{attrs:{id:"二、语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、语法","aria-hidden":"true"}},[n._v("#")]),n._v(" 二、语法")]),n._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#21-%E8%BF%94%E5%9B%9Epromise%E5%AF%B9%E8%B1%A1"}},[n._v("返回Promise对象")])]),n._v(" "),a("li",[a("a",{attrs:{href:"#22-promise%E5%AF%B9%E8%B1%A1%E7%9A%84%E7%8A%B6%E6%80%81%E5%8F%98%E5%8C%96"}},[n._v("Promise对象的状态变化")])]),n._v(" "),a("li",[a("a",{attrs:{href:"#23-await%E5%91%BD%E4%BB%A4"}},[n._v("await命令")])]),n._v(" "),a("li",[a("a",{attrs:{href:"#24-%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86"}},[n._v("错误处理")])]),n._v(" "),a("li",[a("a",{attrs:{href:"#25-%E4%BD%BF%E7%94%A8%E6%B3%A8%E6%84%8F%E7%82%B9"}},[n._v("使用注意点")])])]),n._v(" "),a("h4",{attrs:{id:"_2-1-返回promise对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-返回promise对象","aria-hidden":"true"}},[n._v("#")]),n._v(" 2.1 返回Promise对象")]),n._v(" "),a("p",[a("code",[n._v("async")]),n._v("函数返回一个Promise对象。")]),n._v(" "),a("p",[a("code",[n._v("async")]),n._v("函数内部"),a("code",[n._v("return")]),n._v("语句返回的值，会成为"),a("code",[n._v("then")]),n._v("方法回调函数的参数。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("async function f() {\n  return 'hello world';\n}\n\nf().then(v => console.log(v))\n// hello world\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br")])]),a("h4",{attrs:{id:"_2-2-promise对象的状态变化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-promise对象的状态变化","aria-hidden":"true"}},[n._v("#")]),n._v(" 2.2 Promise对象的状态变化")]),n._v(" "),a("p",[a("code",[n._v("async")]),n._v("函数返回的Promise对象，必须等到内部所有"),a("code",[n._v("await")]),n._v("命令后面的Promise对象执行完，才会发生状态改变，除非遇到"),a("code",[n._v("return")]),n._v("语句或错误。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。")]),n._v(" "),a("h4",{attrs:{id:"_2-3-await命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-await命令","aria-hidden":"true"}},[n._v("#")]),n._v(" 2.3 await命令")]),n._v(" "),a("p",[a("code",[n._v("await")]),n._v("命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("async function f() {\n  // 等同于\n  // return 123;\n  return await 123;\n}\n\nf().then(v => console.log(v))\n// 123\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br")])]),a("h4",{attrs:{id:"_2-4-错误处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-错误处理","aria-hidden":"true"}},[n._v("#")]),n._v(" 2.4 错误处理")]),n._v(" "),a("p",[n._v("如果"),a("code",[n._v("await")]),n._v("后面的异步操作出错，那么等同于"),a("code",[n._v("async")]),n._v("函数返回的 Promise 对象被"),a("code",[n._v("reject")]),n._v("。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("async function f() {\n  await new Promise(function (resolve, reject) {\n    throw new Error('出错了');\n  });\n}\n\nf()\n.then(v => console.log(v))\n.catch(e => console.log(e))\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br")])]),a("p",[n._v("防止出错的方法，也是将其放在"),a("code",[n._v("try...catch")]),n._v("代码块之中。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("async function f(){\n    try{\n        await new Promise(function(resolve,reject){\n            throw new Error('出错了');\n        })\n    }catch(e){}\n    return await('hello world');\n}\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br")])]),a("p",[n._v("如果有多个await命令，可以统一放在try...catch结构中。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("async function main(){\n    try{\n    const val1 = await firstStep();\n    const val2 = await secondStep(val1);\n    const val3 = await thirdStep(val1, val2);\n\n    console.log('Final: ', val3);\n    }catch(err){\n        console.log(err);\n    }\n}\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br")])]),a("h4",{attrs:{id:"_2-5-使用注意点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-使用注意点","aria-hidden":"true"}},[n._v("#")]),n._v(" 2.5 使用注意点")]),n._v(" "),a("ol",[a("li",[a("code",[n._v("await")]),n._v("命令后面的"),a("code",[n._v("Promise")]),n._v("对象，运行结果可能是"),a("code",[n._v("rejected")]),n._v("，所以最好把"),a("code",[n._v("await")]),n._v("命令放在"),a("code",[n._v("try...catch")]),n._v("代码块中。")]),n._v(" "),a("li",[n._v("多个"),a("code",[n._v("await")]),n._v("命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。")]),n._v(" "),a("li",[a("code",[n._v("await")]),n._v("命令只能用在"),a("code",[n._v("async")]),n._v("函数之中，如果用在普通函数，就会报错。")]),n._v(" "),a("li",[a("code",[n._v("async")]),n._v("函数可以保留运行堆栈。")])]),n._v(" "),a("h3",{attrs:{id:"三、async-函数的实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、async-函数的实现原理","aria-hidden":"true"}},[n._v("#")]),n._v(" 三、async 函数的实现原理")]),n._v(" "),a("p",[n._v("async 函数的实现原理，就是将Generator函数和自动执行器，包装在一个函数里。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("async function fn(args){\n    // ...\n}\n\n// 等同于\n\nfunction fn(args){\n    return spawn(function*(){\n        // ...\n    });\n}\n\nfunction spawn(genF){\n    return new Promise(function(resolve,reject){\n        const gen = genF();\n        function step(nextF){\n            let next;\n            try{\n                next = nextF();\n            }catch(e){\n                return reject(e);\n            }\n            if(next.done){\n                return resolve(next.value);\n            }\n            Promise.resolve(next.value).then(function(v){\n                step(function(){\n                    return gen.next(v);\n                })\n            },function(e){\n                step(function(){\n                    return gen.throw(e);\n                })\n            })\n        }\n        step(function() { return gen.next(undefined); });\n    });\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br")])]),a("h3",{attrs:{id:"四、与其他异步处理方法的比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、与其他异步处理方法的比较","aria-hidden":"true"}},[n._v("#")]),n._v(" 四、与其他异步处理方法的比较")]),n._v(" "),a("p",[n._v("某个 DOM 元素上面，部署了一系列的动画，前一个动画结束，才能开始后一个。如果当中有一个动画出错，就不再往下执行，返回上一个成功执行的动画的返回值。")]),n._v(" "),a("p",[n._v("Promise 的写法。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("\nfunction chainAnimationsPromise(elem,animations){\n    \n    // 变量ret用来保存上一个动画的返回值\n    let ret = null;\n\n    // 新建一个空的Promise\n    let p = Promise.resolve();\n\n    // 使用then方法，添加所有动画\n    for(let anim of animations){\n        p = p.then(function(val){\n            ret = val;\n            return anim(elem);\n        })\n    }\n\n    // 返回一个部署了错误捕捉机制的Promise\n    return p.catch(function(e){\n        //  ...\n    }).then(function(){\n        return ret;\n    })\n}\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br")])]),a("p",[n._v("Generator 函数的写法。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function chainAnimationsGenerator(elem,animations){\n    return spawn(function*(){\n        let ret = null;\n        try{\n            for(let anim of animations){\n                ret = yield anim(elem);\n            }\n        }catch(e){\n            //  ...\n        }\n        return ret;\n    })\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br")])]),a("p",[n._v("async 函数的写法。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("async function chainAnimationsAsync(elem,animations){\n    let ret = null;\n    try{\n        for(let anim of animations){\n            ret = await anim(elem);\n        }\n    }catch(e){\n        /*忽略错误，继续执行*/\n    }\n    return ret;\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br")])]),a("p",[n._v("可以看到 Async 函数的实现最简洁，最符合语义，几乎没有语义不相关的代码。它将 Generator 写法中的自动执行器，改在语言层面提供，不暴露给用户，因此代码量最少。如果使用 Generator 写法，自动执行器需要用户自己提供。")]),n._v(" "),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[n._v("#")]),n._v(" 参考资料")]),n._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/async",target:"_blank",rel:"noopener noreferrer"}},[n._v("ECMAScript 6 入门"),a("OutboundLink")],1)]),n._v(" "),a("li",[a("a",{attrs:{href:"https://yjhenan.gitbooks.io/-ecmascript-6/docs/async.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("《ECMAScript 6 入门》 第三版"),a("OutboundLink")],1)])]),n._v(" "),a("h2",{attrs:{id:"联系作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[n._v("#")]),n._v(" 联系作者")]),n._v(" "),a("div",{attrs:{align:"center"}},[a("p",[n._v("\n        平凡世界，贵在坚持。\n    ")]),n._v(" "),a("img",{attrs:{src:n.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);s.default=t.exports}}]);