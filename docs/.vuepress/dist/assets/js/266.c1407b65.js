(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{494:function(e,s,a){"use strict";a.r(s);var n=a(4),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"nginx-常用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-常用配置","aria-hidden":"true"}},[e._v("#")]),e._v(" nginx 常用配置")]),e._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),a("p",[e._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),e._v(" "),a("h2",{attrs:{id:"内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[e._v("#")]),e._v(" 内容")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%B8%80%E3%80%81Ngnix%E4%BB%8B%E7%BB%8D"}},[e._v("Ngnix 介绍")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E5%AE%89%E8%A3%85"}},[e._v("安装")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E4%B8%89%E3%80%81Nginx%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE%E4%B8%8E%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"}},[e._v("Nginx 基本配置与参数说明")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E5%9B%9B%E3%80%81Nginx%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1"}},[e._v("Nginx 负载均衡")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%94%E3%80%81Nginx%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86"}},[e._v("Nginx 反向代理")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E5%85%AD%E3%80%81%E9%85%8D%E7%BD%AEGzip"}},[e._v("配置 Gzip")])])]),e._v(" "),a("h3",{attrs:{id:"一、ngnix-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、ngnix-介绍","aria-hidden":"true"}},[e._v("#")]),e._v(" 一、Ngnix 介绍")]),e._v(" "),a("p",[e._v("Nginx 是一款轻量级的网页服务器、反向代理器以及电子邮件代理服务器。其将源代码以类 BSD 许可证的形式发布，因它的稳定性、丰富的功能集、示例配置文件和低系统资源的消耗而闻名。类似的 web 服务器有 Apache、IIS。")]),e._v(" "),a("h3",{attrs:{id:"二、安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、安装","aria-hidden":"true"}},[e._v("#")]),e._v(" 二、安装")]),e._v(" "),a("h3",{attrs:{id:"_2-1-安装依赖包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-安装依赖包","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.1 安装依赖包")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//一键安装上面四个依赖\nyum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2-2-下载并解压安装包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-下载并解压安装包","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.2 下载并解压安装包")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n//创建一个文件夹\ncd /usr/local\nmkdir nginx\ncd nginx\n//下载tar包\nwget http://nginx.org/download/nginx-1.13.7.tar.gz\ntar -xvf nginx-1.13.7.tar.gz\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("h3",{attrs:{id:"_2-3-安装-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-安装-nginx","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.3 安装 nginx")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//进入nginx目录\ncd /usr/local/nginx\n//执行命令\n./configure\n//执行make命令\nmake\n//执行make install命令\nmake install\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("h4",{attrs:{id:"_2-4-启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-启动","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.4 启动")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/usr/local/nginx/sbin/nginx -s reload\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("查看 nginx 进程是否启动：")]),e._v(" "),a("p",[a("code",[e._v("ps -ef | grep nginx")])]),e._v(" "),a("h4",{attrs:{id:"_2-5-关闭防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-关闭防火墙","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.5 关闭防火墙")]),e._v(" "),a("ul",[a("li",[e._v("centOS6 及以前版本使用命令： "),a("code",[e._v("systemctl stop iptables.service")])]),e._v(" "),a("li",[e._v("centOS7 关闭防火墙命令： "),a("code",[e._v("systemctl stop firewalld.service")])])]),e._v(" "),a("h4",{attrs:{id:"_2-6-启动，关闭，重启，命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-启动，关闭，重启，命令","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.6 启动，关闭，重启，命令")]),e._v(" "),a("p",[e._v("进入安装目录中，命令："),a("code",[e._v("cd /usr/local/nginx/sbin")]),e._v("，"),a("code",[e._v("./nginx")]),e._v(" 启动，"),a("code",[e._v("./nginx -s stop")]),e._v(" 关闭，"),a("code",[e._v("./nginx -s reload")]),e._v("重启。")]),e._v(" "),a("h3",{attrs:{id:"三、nginx-基本配置与参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、nginx-基本配置与参数说明","aria-hidden":"true"}},[e._v("#")]),e._v(" 三、Nginx 基本配置与参数说明")]),e._v(" "),a("p",[e._v("nginx 配置文件主要分为六个区域：main(全局设置)、events(nginx 工作模式)、http(http 设置)、server(主机设置)、location(URL 匹配)、upstream(负载均衡器设置)。")]),e._v(" "),a("h4",{attrs:{id:"_3-1-main-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-main-模块","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.1 main 模块")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("user nobody nobody;\nworker_processes 2;\nerror_log /usr/local/var/log/nginx/error.log  notice;\npid        /usr/local/var/run/nginx/nginx.pid;\nworker_rlimit_nofile 1024;\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("ul",[a("li",[a("code",[e._v("user")]),e._v("：来指定 Nginx Worker 进程运行用户以及用户组，默认同 nobody 账号运行。")]),e._v(" "),a("li",[a("code",[e._v("worker_processes")]),e._v("：来指定了 Nginx 要开启的子进程数。每个 Nginx 进程平均耗费 10M~12M 内存。根据经验，一般指定 1 个进程就足够了，如果是多核 CPU，建议指定和 CPU 的数量一样的进程数即可。我这里写 2，那么就会开启 2 个子进程，总共 3 个进程。")]),e._v(" "),a("li",[a("code",[e._v("error_log")]),e._v("：用来定义全局错误日志文件。日志输出级别有 debug、info、notice、warn、error、crit 可供选择，其中，debug 输出日志最为最详细，而 crit 输出日志最少。")]),e._v(" "),a("li",[a("code",[e._v("pid")]),e._v("：用来指定进程 id 的存储文件位置。")]),e._v(" "),a("li",[a("code",[e._v("worker_rlimit_nofile")]),e._v("：用于指定一个 nginx 进程可以打开的最多文件描述符数目，这里是 65535，需要使用命令“ulimit -n 65535”来设置。")])]),e._v(" "),a("h4",{attrs:{id:"_3-2-events-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-events-模块","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.2 events 模块")]),e._v(" "),a("p",[e._v("events 模块来用指定 nginx 的工作模式和工作模式及连接数上限，一般是这样：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("events {\n    use kqueue; #mac平台\n    worker_connections  1024;\n}\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("ul",[a("li",[a("code",[e._v("use")]),e._v("：用来指定 Nginx 的工作模式。Nginx 支持的工作模式有 select、poll、kqueue、epoll、rtsig 和/dev/poll。其中 select 和 poll 都是标准的工作模式，kqueue 和 epoll 是高效的工作模式，不同的是 epoll 用在 Linux 平台上，而 kqueue 用在 BSD 系统中，因为 Mac 基于 BSD,所以 Mac 也得用这个模式，对于 Linux 系统，epoll 工作模式是首选。")]),e._v(" "),a("li",[a("code",[e._v("worker_connections")]),e._v("：用于定义"),a("code",[e._v("Nginx")]),e._v("每个进程的最大连接数，即接收前端的最大请求数，默认是"),a("code",[e._v("1024")]),e._v("。最大客户端连接数由"),a("code",[e._v("worker_processes")]),e._v("和"),a("code",[e._v("worker_connections")]),e._v("决定，即"),a("code",[e._v("Max_clients=worker_processes*worker_connections")]),e._v("，在作为反向代理时，"),a("code",[e._v("Max_clients")]),e._v("变为："),a("code",[e._v("Max_clients = worker_processes * worker_connections/4")]),e._v("。进程的最大连接数受 Linux 系统进程的最大打开文件数限制，在执行操作系统命令“ulimit -n 65536”后"),a("code",[e._v("worker_connections")]),e._v("的设置才能生效。")])]),e._v(" "),a("h4",{attrs:{id:"_3-3-http-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-http-模块","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.3 http 模块")]),e._v(" "),a("p",[e._v("http 模块可以说是最核心的模块了，它负责 HTTP 服务器相关属性的配置，它里面的 server 和 upstream 子模块，至关重要。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('http{\n    include       mime.types;\n    default_type  application/octet-stream;\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request"\n    \'$status $body_bytes_sent "$http_referer" \'\n    \'"$http_user_agent" "$http_x_forwarded_for"\';\n    access_log  /usr/local/var/log/nginx/access.log  main;\n    sendfile        on;\n    tcp_nopush      on;\n    tcp_nodelay     on;\n    keepalive_timeout  10;\n    #gzip  on;\n    upstream myproject {\n        .....\n    }\n    server {\n        ....\n    }\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br")])]),a("p",[e._v("下面详细介绍下这段代码中每个配置选项的含义。")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("include")]),e._v("：来用设定文件的"),a("code",[e._v("mime")]),e._v("类型,类型在配置文件目录下的"),a("code",[e._v("mime.type")]),e._v("文件定义，来告诉"),a("code",[e._v("nginx")]),e._v("来识别文件类型。")]),e._v(" "),a("li",[a("code",[e._v("default_type")]),e._v("：设定了默认的类型为二进制流，也就是当文件类型未定义时使用这种方式，例如在没有配置"),a("code",[e._v("asp")]),e._v("的"),a("code",[e._v("locate")]),e._v("环境时，Nginx 是不予解析的，此时，用浏览器访问 asp 文件就会出现下载了。")]),e._v(" "),a("li",[a("code",[e._v("log_format")]),e._v("：用于设置日志的格式，和记录哪些参数，这里设置为"),a("code",[e._v("main")]),e._v("，刚好用于"),a("code",[e._v("access_log")]),e._v("来纪录这种类型。")]),e._v(" "),a("li",[a("code",[e._v("access_log")]),e._v("：用来纪录每次的访问日志的文件地址，后面的"),a("code",[e._v("main")]),e._v("是日志的格式样式，对应于"),a("code",[e._v("log_format")]),e._v("的"),a("code",[e._v("main")]),e._v("。")]),e._v(" "),a("li",[a("code",[e._v("sendfile")]),e._v("：参数用于开启高效文件传输模式。将"),a("code",[e._v("tcp_nopush")]),e._v("和"),a("code",[e._v("tcp_nodelay")]),e._v("两个指令设置为"),a("code",[e._v("on")]),e._v("用于防止网络阻塞。")]),e._v(" "),a("li",[a("code",[e._v("keepalive_timeout")]),e._v("：设置客户端连接保持活动的超时时间。在超过这个时间之后，服务器会关闭该连接。")])]),e._v(" "),a("h4",{attrs:{id:"_3-4-server-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-server-模块","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.4 server 模块")]),e._v(" "),a("p",[a("code",[e._v("sever")]),e._v("模块是"),a("code",[e._v("http")]),e._v("的子模块，它用来定一个虚拟主机，我们先讲最基本的配置，这些在后面再讲。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server {\n        listen       8080;\n        server_name  localhost 192.168.12.10 www.yangyi.com;\n        # 全局定义，如果都是这一个目录，这样定义最简单。\n        root   /Users/yangyi/www;\n        index  index.php index.html index.htm;\n        charset utf-8;\n        access_log  usr/local/var/log/host.access.log  main;\n        aerror_log  usr/local/var/log/host.error.log  error;\n        ....\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("ul",[a("li",[a("code",[e._v("server")]),e._v("：标志定义虚拟主机开始。")]),e._v(" "),a("li",[a("code",[e._v("listen")]),e._v("：用于指定虚拟主机的服务端口。")]),e._v(" "),a("li",[a("code",[e._v("server_name")]),e._v("：用来指定 IP 地址或者域名，多个域名之间用空格分开。")]),e._v(" "),a("li",[a("code",[e._v("root")]),e._v("：表示在这整个"),a("code",[e._v("server")]),e._v("虚拟主机内，全部的"),a("code",[e._v("root web")]),e._v("根目录。注意要和"),a("code",[e._v("locate {}")]),e._v("下面定义的区分开来。")]),e._v(" "),a("li",[a("code",[e._v("index")]),e._v("：全局定义访问的默认首页地址。注意要和"),a("code",[e._v("locate {}")]),e._v("下面定义的区分开来。")]),e._v(" "),a("li",[a("code",[e._v("charset")]),e._v("：用于设置网页的默认编码格式。")]),e._v(" "),a("li",[a("code",[e._v("access_log")]),e._v("：用来指定此虚拟主机的访问日志存放路径，最后的"),a("code",[e._v("main")]),e._v("用于指定访问日志的输出格式。")])]),e._v(" "),a("h4",{attrs:{id:"_3-5-location-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-location-模块","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.5 location 模块")]),e._v(" "),a("p",[a("code",[e._v("location")]),e._v("模块是 nginx 中用的最多的，也是最重要的模块了，什么负载均衡啊、反向代理啊、虚拟域名啊都与它相关;location 根据它字面意思就知道是来定位的，定位 URL，解析 URL，所以，它也提供了强大的正则匹配功能，也支持条件判断匹配，用户可以通过 location 指令实现 Nginx 对动、静态网页进行过滤处理。像我们的 php 环境搭建就是用到了它。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("location / {\n    root   /Users/yangyi/www;\n    index  index.php index.html index.htm;\n}\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("ul",[a("li",[a("code",[e._v("location")]),e._v("： "),a("code",[e._v("/")]),e._v("表示匹配访问根目录。")]),e._v(" "),a("li",[a("code",[e._v("root")]),e._v("：指令用于指定访问根目录时，虚拟主机的 web 目录，这个目录可以是相对路径（相对路径是相对于 nginx 的安装目录）。也可以是绝对路径。")]),e._v(" "),a("li",[a("code",[e._v("index")]),e._v("：用于设定我们只输入域名后访问的默认首页地址，有个先后顺序：index.php index.html index.htm，如果没有开启目录浏览权限，又找不到这些默认首页，就会报 403 错误。")]),e._v(" "),a("li",[a("code",[e._v("location")]),e._v("：还有一种方式就是正则匹配，开启正则匹配这样：location ~。后面加个~。")])]),e._v(" "),a("p",[e._v("下面这个例子是运用正则匹配来链接 php。我们之前搭建环境也是这样做：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("location ~ \\.php$ {\n    root           /Users/yangyi/www;\n    fastcgi_pass   127.0.0.1:9000;\n    fastcgi_index  index.php;\n    include        fastcgi.conf;\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[a("code",[e._v("\\.php$")]),e._v("熟悉正则的我们直到，这是匹配.php 结尾的 URL，用来解析 php 文件。里面的 root 也是一样，用来表示虚拟主机的根目录。\nfast_pass 链接的是 php-fpm 的地址，之前我们也搭建过。")]),e._v(" "),a("h3",{attrs:{id:"四、nginx-负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、nginx-负载均衡","aria-hidden":"true"}},[e._v("#")]),e._v(" 四、Nginx 负载均衡")]),e._v(" "),a("ul",[a("li",[e._v("轮询（默认），请求过来后，Nginx 随机分配流量到任一服务器")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("upstream backend {\n    server 127.0.0.1:3000;\n    server 127.0.0.1:3001;\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("ul",[a("li",[a("code",[e._v("weight=number")]),e._v("设置服务器的权重，默认为 1，权重大的会被优先分配")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("upstream backend {\n    server 127.0.0.1:3000 weight=2;\n    server 127.0.0.1:3001 weight=1;\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("ul",[a("li",[a("code",[e._v("backup")]),e._v(" 标记为备份服务器。当主服务器不可用时，将传递与备份服务器的连接。")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("upstream backend {\n    server 127.0.0.1:3000 backup;\n    server 127.0.0.1:3001;\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("ul",[a("li",[a("code",[e._v("ip_hash")]),e._v(" 保持会话，保证同一客户端始终访问一台服务器。")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("upstream backend {\n    ip_hash;\n    server 127.0.0.1:3000 backup;\n    server 127.0.0.1:3001;\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("ul",[a("li",[a("code",[e._v("least_conn")]),e._v(" 优先分配最少连接数的服务器，避免服务器超载请求过多。")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("upstream backend {\n    least_conn;\n    server 127.0.0.1:3000;\n    server 127.0.0.1:3001;\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h3",{attrs:{id:"五、nginx-反向代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、nginx-反向代理","aria-hidden":"true"}},[e._v("#")]),e._v(" 五、Nginx 反向代理")]),e._v(" "),a("ul",[a("li",[e._v("什么是反向代理")]),e._v(" "),a("li",[e._v("反射代理的作用")]),e._v(" "),a("li",[e._v("反射代理配置")])]),e._v(" "),a("h4",{attrs:{id:"_5-1-什么是反向代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-什么是反向代理","aria-hidden":"true"}},[e._v("#")]),e._v(" 5.1 什么是反向代理")]),e._v(" "),a("p",[e._v("反向代理是指以代理服务器来接受 internet 上的连接请求，然后奖请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给 internet 上请求连接的客户端，此时代理服务器对外就是表现为一个服务器.")]),e._v(" "),a("p",[e._v("代理情况："),a("code",[e._v("client —(send request)—> clinet proxy –(send request)—> server")])]),e._v(" "),a("h4",{attrs:{id:"_5-2-反射代理的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-反射代理的作用","aria-hidden":"true"}},[e._v("#")]),e._v(" 5.2 反射代理的作用")]),e._v(" "),a("p",[e._v("保护网站安全：任何来自 internet 的请求都必须先经过代理器；\n通过配置缓存功能加速 web 请求：可以缓存真实 web 服务器上的某些静态资源，减轻真实 web 服务器的负载压力；")]),e._v(" "),a("p",[e._v("实现负载均衡：充当负载均衡服务器均衡分发请求，平衡集群中各个服务器的负载压力。")]),e._v(" "),a("h4",{attrs:{id:"_5-3-反向代理配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-反向代理配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 5.3 反向代理配置")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("location /api {\n    # 请求host传给后端\n    proxy_set_header Host $http_host;\n    # 请求ip 传给后端\n    proxy_set_header X-Real-IP $remote_addr;\n    # 请求协议传给后端\n    proxy_set_header X-Scheme $scheme;\n    # 路径重写\n    rewrite  /api/(.*)  /$1  break;\n    # 代理服务器\n    proxy_pass http://localhost:9000;\n}\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("ul",[a("li",[e._v("拦截路径"),a("code",[e._v("/api")]),e._v(", 可以通过正则匹配。")]),e._v(" "),a("li",[a("code",[e._v("proxy_set_header")]),e._v("允许重新定义或添加字段传递给代理服务器的请求头。")]),e._v(" "),a("li",[a("code",[e._v("$http_host")]),e._v("、"),a("code",[e._v("$remote_addr")]),e._v("、"),a("code",[e._v("$scheme")]),e._v(" 为 Nginx 内置变量。")]),e._v(" "),a("li",[a("code",[e._v("rewrite")]),e._v("根据"),a("code",[e._v("rewrite")]),e._v("后的请求"),a("code",[e._v("URI")]),e._v("，将路径重写，如：接口路径为"),a("code",[e._v("/user")]),e._v(", 我们可以请求"),a("code",[e._v("/api/user")]),e._v("。（为什么需要重写 uri？因为在使用 Nginx 做反向代理的时候，需要匹配到跨域的接口再做转发，为了方便匹配，会人为的在原接口中添加一段路径（或标示， 如例子中的 api），因此需要在匹配之后、转发之前把添加的那段去掉，因此需要 rewrite。）")]),e._v(" "),a("li",[a("code",[e._v("break")]),e._v("继续本次请求后面的处理 ,停止匹配下面的 location。需要注意的是与之类似的 last 执行过程则是停止当前这个请求，并根据 rewrite 匹配的规则重新发起一个请求，从上到下依次匹配 location 后面的规则。")]),e._v(" "),a("li",[a("code",[e._v("proxy_pass")]),e._v("代理服务器。")])]),e._v(" "),a("h3",{attrs:{id:"六、配置-gzip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、配置-gzip","aria-hidden":"true"}},[e._v("#")]),e._v(" 六、配置 Gzip")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server {\n    # 开启gzip 压缩\n    gzip on;\n    # 设置gzip所需的http协议最低版本 （HTTP/1.1, HTTP/1.0）\n    gzip_http_version 1.1;\n    # 设置压缩级别，压缩级别越高压缩时间越长  （1-9）\n    gzip_comp_level 4;\n    # 设置压缩的最小字节数， 页面Content-Length获取\n    gzip_min_length 1000;\n    # 设置压缩文件的类型  （text/html)\n    gzip_types text/plain application/javascript text/css;\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.nginx.cn/76.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("nginx 基本配置与参数说明"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://manual.51yip.com/nginx/StandardHTTPModules/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nginx 标准 HTTP 模块"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5a2600bdf265da432b4aaaba",target:"_blank",rel:"noopener noreferrer"}},[e._v("nginx 从入门到实践"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5cae9de95188251ae2324ec3",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端想要了解的 Nginx"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/knowledgesea/p/5175711.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nginx 配置详解"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/knowledgesea/p/5199046.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nginx 代理功能与负载均衡详解"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/PzctPuzKRbRlAUBnD584Xg",target:"_blank",rel:"noopener noreferrer"}},[e._v("一次百万长连接压测 Nginx OOM 的问题排查分析"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/chenyanbin/p/12521296.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("从入门到精通-Nginx，图文并茂、负载均衡、动静分离、虚拟主机 附案例源码"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5e806d84e51d4546b659b370",target:"_blank",rel:"noopener noreferrer"}},[e._v("五分钟看懂 Nginx 负载均衡"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.yiibai.com/nginx/beginners_guide.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("nginx 入门教程"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"联系作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[e._v("#")]),e._v(" 联系作者")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("p",[e._v("\n        平凡世界，贵在坚持。\n    ")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);s.default=t.exports}}]);