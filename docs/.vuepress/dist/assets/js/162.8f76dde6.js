(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{231:function(s,e,t){"use strict";t.r(e);var a=t(2),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"直播原理及实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#直播原理及实践","aria-hidden":"true"}},[s._v("#")]),s._v(" 直播原理及实践")]),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("直播在互联网中已经成为一个必不可少的东西，作为了一家互联公司直播当然也少不了了，目前直播在牛牛软件中主要功能是教育跟宣传作用。")]),s._v(" "),t("h2",{attrs:{id:"内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E7%9B%B4%E6%92%AD%E6%9E%84%E6%88%90"}},[s._v("直播构成")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E7%9B%B4%E6%92%AD%E6%B5%81%E7%A8%8B"}},[s._v("直播流程")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B8%89%E3%80%81web%E4%B8%AD%E7%9B%B4%E6%92%AD%E6%8A%80%E6%9C%AF"}},[s._v("web中直播技术")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E5%AE%9E%E8%B7%B5%EF%BC%88%E6%90%AD%E5%BB%BArtmp%E3%80%81hls%E7%9B%B4%E6%92%AD%E6%B5%81%E6%9C%8D%E5%8A%A1%EF%BC%89"}},[s._v("实践")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%94%E3%80%81%E7%9B%B4%E6%92%AD%E4%B8%AD%E9%81%87%E5%88%B0%E9%97%AE%E9%A2%98"}},[s._v("直播中遇到坑")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E5%85%AD%E3%80%81%E6%80%BB%E7%BB%93"}},[s._v("总结")])])]),s._v(" "),t("h3",{attrs:{id:"一、直播构成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、直播构成","aria-hidden":"true"}},[s._v("#")]),s._v(" 一、直播构成")]),s._v(" "),t("p",[t("img",{attrs:{src:"live01.png",alt:"c19343ac6b031af7s"}})]),s._v(" "),t("p",[s._v("目前牛牛支持情况：")]),s._v(" "),t("ul",[t("li",[s._v("移动牛牛（安卓、IOS）主播端只支持摄像头直播，观众端支持展示")]),s._v(" "),t("li",[s._v("PC牛牛主播端支持摄像头直播、录屏直播、摄像头+录屏直播，观众端支持展示")]),s._v(" "),t("li",[s._v("MAC牛牛跟web端主播端不支持，观众端支持展示")])]),s._v(" "),t("h3",{attrs:{id:"二、直播流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、直播流程","aria-hidden":"true"}},[s._v("#")]),s._v(" 二、直播流程")]),s._v(" "),t("p",[s._v("视频直播，可以分为以下这几个环节")]),s._v(" "),t("ul",[t("li",[s._v("采集：一般是由客户端（IOS、安卓、PC或其它工具，如OBS）完成的，iOS是比较简单的，Android则要做些机型适配工作，PC最麻烦各种奇葩摄像头驱动，当然这些问题，腾讯云已经帮我们处理好了，呵呵。")]),s._v(" "),t("li",[s._v("前处理：主要是处理直播美颜，美颜算法需要用到GPU编程，需要懂图像处理算法的人，没有好的开源实现，要自己参考论文去研究。难点不在于美颜效果，而在于GPU占用和美颜效果之间找平衡。")]),s._v(" "),t("li",[s._v("编码：肯定要采用硬编码，软编码720p完全没希望，勉强能编码也会导致CPU过热烫到摄像头。编码要在分辨率，帧率，码率，GOP等参数设计上找到最佳平衡点。")]),s._v(" "),t("li",[s._v("传输：一般交给了CDN服务商。")]),s._v(" "),t("li",[s._v("解码：是对之前编码的操作，进行解码，在web里需要解码是hls。")]),s._v(" "),t("li",[s._v("渲染：主要用播放器来解决，web中常用到的播放器有video.js，目前我们使用是腾讯云播放器。")])]),s._v(" "),t("p",[s._v("其实一个完成直播，远远不上面这几个环节，下面是腾讯云直播方案的整个流程图：\n"),t("img",{attrs:{src:"live02.png",alt:"2d4844429b6c24c5s"}})]),s._v(" "),t("h3",{attrs:{id:"三、web中直播技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、web中直播技术","aria-hidden":"true"}},[s._v("#")]),s._v(" 三、web中直播技术")]),s._v(" "),t("p",[s._v("目前互联网上web做直播，主要是展示，主流web展示的话可能涉及到hls跟rtmp这两个东西，现在我们重点讲解hls跟rtmp协议。")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#_3-1-hls"}},[s._v("HLS")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#_3-2-rtmp"}},[s._v("RTMP")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#_3-3-hls%E4%B8%8Ertmp%E5%AF%B9%E5%BA%94"}},[s._v("HLS与RTMP对应")])])]),s._v(" "),t("h4",{attrs:{id:"_3-1-hls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-hls","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.1 HLS")]),s._v(" "),t("p",[s._v("HLS（HTTP Live Streaming全称）是一个基于 HTTP 的视频流协议，由 Apple 公司实现，Mac OS 上的 QuickTime、Safari 以及 iOS 上的 Safari 都能很好的支持 HLS，高版本 Android 也增加了对 HLS 的支持。一些常见的客户端如：MPlayerX、VLC 也都支持 HLS 协议，如果需要在chrome上播放，需要使用videojs-contrib-hls.js解析。")]),s._v(" "),t("p",[s._v("HLS工作流程：")]),s._v(" "),t("p",[t("img",{attrs:{src:"live03.png",alt:"ebf24281ef5b0221s"}})]),s._v(" "),t("ul",[t("li",[t("code",[s._v("Server")]),s._v(":服务器组件负责获取的媒体输入流 , 然后Media编码后 MPEG-4（H.264 video 和 AAC audio）格式然后用硬件打包到 MPEG-2 (MPEG-2 transport stream)的传输流中。图中显示,传输流会经过stream segmenter, 这里的工作是MPEG-2传输流会被分散为小片段然后保存为一个或多个系列的 .ts 格式的媒体文件。这个过程需要借助编码工具来完成，比如 Apple stream segmenter。\n(视频类是.ts文件,纯音频会被编码为一些音频小片段，通常为 ADTS头的AAC、MP3、或者 AC-3格式。)\n服务端可以采用硬件编码和软件编码两种形式，其功能都是按照上文描述的规则对现有的媒体文件进行切片并使用索引文件进行管理。而软件切片通常会使用 Apple 公司提供的工具或者第三方的集成工具。")]),s._v(" "),t("li",[t("code",[s._v("Distribution")]),s._v(":同时上面提到的那个切片器（segmenter）也会创建一个索引文件，通常会包含这些媒体文件的一个列表，也能包含元数据。他一般都是一个.M38U 个hi的列表。列表元素会关联一个 URL 用于客户端访问。然后按序去请求这些 URL。")]),s._v(" "),t("li",[t("code",[s._v("client")]),s._v(":分配组件由标准的网络服务器。他们负责接受Client客户端请求并提供相关联的资源给客户端。")])]),s._v(" "),t("p",[s._v("索引文件结构图")]),s._v(" "),t("p",[t("img",{attrs:{src:"live04.png",alt:"764764-551e7aa6c8f2b86e"}})]),s._v(" "),t("p",[s._v("主索引文件")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=409037,RESOLUTION=416x234,CODECS="mp4a.40.2, avc1.42001e"\nGear1/prog_index.m3u8\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("code",[s._v("\\#EXTM3U")]),s._v("：每个M3U文件第一行必须是这个tag，请标示作用")]),s._v(" "),t("p",[t("code",[s._v("\\#EXT-X-STREAM-INF")]),s._v("：标签的属性列表中直接指明当前流是VIDEO还是AUDIO")]),s._v(" "),t("p",[s._v("属性 :")]),s._v(" "),t("ol",[t("li",[s._v("BANDWIDTH 指定码率")]),s._v(" "),t("li",[s._v("PROGRAM-ID 唯一ID (这个属性在后面的协议版本废除了)")]),s._v(" "),t("li",[s._v("CODECS 指定流的编码类型")]),s._v(" "),t("li",[s._v("RESOLUTION：分辨率")])]),s._v(" "),t("p",[s._v("子索引：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#EXTM3U\n#EXT-X-TARGETDURATION:11\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-PLAYLIST-TYPE:VOD\n#EXTINF:10.133333,\nfileSequence0.ts\n#EXTINF:10.000666,\nfileSequence1.ts\n#EXTINF:10.667334,\nfileSequence2.ts\n#EXTINF:9.686001,\nfileSequence3.ts\n#EXTINF:9.768665,\nfileSequence4.ts\n#EXTINF:10.000000,\nfileSequence5.ts\n#EXT-X-ENDLIST\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("\\#EXTM3U")]),s._v("：m3u文件头，必须放在第一行")]),s._v(" "),t("li",[t("code",[s._v("\\#EXT-X-TARGETDURATION")]),s._v("：每个分片TS的最大的时长")]),s._v(" "),t("li",[t("code",[s._v("\\#EXT-X-VERSION")]),s._v("：用以标示协议版本")]),s._v(" "),t("li",[t("code",[s._v("\\#EXT-X-MEDIA-SEQUENCE")]),s._v("：TS分片的序列号")]),s._v(" "),t("li",[t("code",[s._v("\\#EXT-X-PLAYLIST-TYPE")]),s._v("：提供关于PlayList的可变性的信息， 这个对整个PlayList文件有效，是可选的")]),s._v(" "),t("li",[t("code",[s._v("\\#EXTINF")]),s._v("：extra info，分片TS的信息，如时长，带宽等")])]),s._v(" "),t("p",[t("strong",[s._v("说明")])]),s._v(" "),t("ul",[t("li",[s._v("主索引文件和子索引文件都是.M3U8的playlist")]),s._v(" "),t("li",[s._v("主索引文件只需下载一次，但对于直播节目子索引文件定期重新加载")])]),s._v(" "),t("p",[t("strong",[s._v("videojs-contrib-hls解析过程")]),s._v(" "),t("img",{attrs:{src:"live05.png",alt:"aed1d13465cd5422s"}})]),s._v(" "),t("p",[s._v("HLS简单讲就是把整个流分成一个个小的，基于HTTP的文件来下载，每次只下载一些，前面提到了用于 "),t("code",[s._v("H5")]),s._v("播放直播视频时引入的一个"),t("code",[s._v(".m3u8")]),s._v("的文件，这个文件就是基于"),t("code",[s._v("HLS")]),s._v("协议，存放视频流元数据的文件。 每一个"),t("code",[s._v(".m3u8")]),s._v("文件，分别对应若干个"),t("code",[s._v("ts")]),s._v("文件，这些"),t("code",[s._v("ts")]),s._v("文件才是真正存放视频的数据，"),t("code",[s._v("m3u8")]),s._v(" 文件只是存放了一些"),t("code",[s._v("ts")]),s._v("文件的配置信息和相关路径，当视频播放时，"),t("code",[s._v(".m3u8")]),s._v("是动态改变的，再通过解析器（videojs-contrib-hls.js）解析这个文件，并找到对应的"),t("code",[s._v("ts")]),s._v("文件来播放，所以一般为了加快速度，"),t("code",[s._v(".m3u8")]),s._v("放在"),t("code",[s._v("web")]),s._v("服务器上，"),t("code",[s._v("ts")]),s._v("文件放在"),t("code",[s._v("cdn")]),s._v("上。")]),s._v(" "),t("h4",{attrs:{id:"_3-2-rtmp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-rtmp","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.2 RTMP")]),s._v(" "),t("p",[s._v("Real Time Messaging Protocol（简称 RTMP）是 Macromedia 开发的一套视频直播协议，现在属于 Adobe。这套方案需要搭建专门的 RTMP 流媒体服务如 Adobe Media Server，并且在浏览器中只能使用 Flash 实现播放器。它的实时性非常好，延迟很小，但无法支持移动端 WEB 播放是它的硬伤。")]),s._v(" "),t("p",[s._v("浏览器端，HTML5 video标签无法播放 RTMP 协议的视频，可以通过 video.js 来实现。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<link href="http://vjs.zencdn.net/5.8.8/video-js.css" rel="stylesheet">\n \n<video id="example_video_1" class="video-js vjs-default-skin" controls preload="auto" width="640" height="264" loop="loop" webkit-playsinline>\n<source src="rtmp://10.14.221.17:1935/rtmplive/home" type=\'rtmp/flv\'>\n</video>\n \n<script src="http://vjs.zencdn.net/5.8.8/video.js"><\/script>\n<script>\nvideojs.options.flash.swf = \'video.swf\';\nvideojs(\'example_video_1\').ready(function() {\nthis.play();\n});\n<\/script>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h4",{attrs:{id:"_3-3-hls与rtmp对应"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-hls与rtmp对应","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.3 HLS与RTMP对应")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("协议")]),s._v(" "),t("th",[s._v("原理")]),s._v(" "),t("th",[s._v("延时")]),s._v(" "),t("th",[s._v("优点")]),s._v(" "),t("th",[s._v("缺点")]),s._v(" "),t("th",[s._v("使用场景")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("HLS(http)")]),s._v(" "),t("td",[s._v("集合一段时间数据生成ts切片文件更m3u8文件")]),s._v(" "),t("td",[s._v("10s-30s")]),s._v(" "),t("td",[s._v("跨平台")]),s._v(" "),t("td",[s._v("延时性高")]),s._v(" "),t("td",[s._v("移动端")])]),s._v(" "),t("tr",[t("td",[s._v("RTMP(TCP)")]),s._v(" "),t("td",[s._v("每个时刻的数据收到后立即发送")]),s._v(" "),t("td",[s._v("2s")]),s._v(" "),t("td",[s._v("延时低、实时性好")]),s._v(" "),t("td",[s._v("跨平台差")]),s._v(" "),t("td",[s._v("PC+直播+实时性要求高+互动性强")])])])]),s._v(" "),t("h3",{attrs:{id:"四、实践（搭建rtmp、hls直播流服务）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、实践（搭建rtmp、hls直播流服务）","aria-hidden":"true"}},[s._v("#")]),s._v(" 四、实践（搭建RTMP、HLS直播流服务）")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#_4-1-%E5%AE%89%E8%A3%85nginx"}},[s._v("安装"),t("code",[s._v("nginx")])])]),s._v(" "),t("li",[t("a",{attrs:{href:"#_4-2-%E5%AE%89%E8%A3%85nginx-rtmp-module"}},[s._v("安装"),t("code",[s._v("nginx-rtmp-module")])])]),s._v(" "),t("li",[t("a",{attrs:{href:"#_4-3-nginx-conf%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%EF%BC%8C%E9%85%8D%E7%BD%AErtmp%E3%80%81hls"}},[t("code",[s._v("nginx.conf")]),s._v("配置文件，配置"),t("code",[s._v("RTMP")]),s._v("、"),t("code",[s._v("HLS")])])]),s._v(" "),t("li",[t("a",{attrs:{href:"#_4-4-%E9%87%8D%E5%90%AFnginx"}},[s._v("重启"),t("code",[s._v("nginx")])])]),s._v(" "),t("li",[t("a",{attrs:{href:"#_4-5-%E6%9F%A5%E7%9C%8B%E7%AB%AF%E5%8F%A3%E6%98%AF%E5%90%A6%E5%90%AF%E5%8A%A8"}},[s._v("查看端口是否启动")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#_4-6-ffmpeg%E6%89%A7%E8%A1%8C%E5%91%BD%E4%BB%A4"}},[t("code",[s._v("FFmpeg")]),s._v("执行命令")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#_4-7-%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0"}},[s._v("代码实现")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#_4-8-%E6%95%88%E6%9E%9C"}},[s._v("效果")])])]),s._v(" "),t("h4",{attrs:{id:"_4-1-安装nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-安装nginx","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.1 安装nginx")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("brew install nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_4-2-安装nginx-rtmp-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-安装nginx-rtmp-module","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.2 安装nginx-rtmp-module")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("brew install nginx-full --with-rtmp-module\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("安装FFmpeg（是一个集录制、转换、音/视频编码解码功能 为一体的完整的开源工具，我们下面用它来做推流跟切片）")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("brew install ffmpeg\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_4-3-nginx-conf配置文件，配置rtmp、hls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-nginx-conf配置文件，配置rtmp、hls","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.3 nginx.conf配置文件，配置RTMP、HLS")]),s._v(" "),t("p",[s._v("查找到nginx.conf配置文件（"),t("code",[s._v("/usr/local/etc/nginx/nginx.conf")]),s._v("）")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("rtmp {\n\tserver {\n\t\t#监听的端口\n\t\tlisten 1935;\n\t\t# RTMP 直播流配置\n\t\tapplication rtmplive {\n\t\t\tlive on;\n\t\t\t#为 rtmp 引擎设置最大连接数。默认为 off\n\t\t\tmax_connections 1024;\n\t\t}\n\t\t# HLS 直播流配置\n\t\tapplication hls{\n\t\t\tlive on;\n\t\t\thls on;\n\t\t\thls_path /Users/tony/Documents/notes/live/public/hls;  #这里的路径切片需要保存的路径\n\t\t\thls_fragment 1s;\n\t\t}\n\t}\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("在http中添加"),t("code",[s._v("hls")]),s._v("的配置")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\nlocation /hls {\n\t# Serve HLS fragments\n\ttypes {\n\t\tapplication/vnd.apple.mpegurl m3u8;\n\t\tvideo/mp2t ts;\n\t}\n\troot /Users/tony/Documents/notes/live/public;#切片的路径\n\t#add_header Cache-Controll no-cache;\n\texpires -1;\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h4",{attrs:{id:"_4-4-重启nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-重启nginx","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.4 重启nginx")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo nginx -s reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_4-5-查看端口是否启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-查看端口是否启动","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.5 查看端口是否启动")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("netstat -an | grep 1935\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果显示如下，显示已经启用")]),s._v(" "),t("p",[t("img",{attrs:{src:"live06.png",alt:"edf1708baf6fbc90s"}})]),s._v(" "),t("p",[s._v("http端口同理")]),s._v(" "),t("p",[s._v("到现在我们已经完成了，服务的搭建（rtmp、hls推流地址分别为:"),t("code",[s._v("rtmp://127.0.0.1:1935/rtmplive/home")]),s._v(","),t("code",[s._v("rtmp://localhost:1935/rtmplive/hls")]),s._v("）")]),s._v(" "),t("h4",{attrs:{id:"_4-6-ffmpeg执行命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-ffmpeg执行命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.6 FFmpeg执行命令")]),s._v(" "),t("p",[s._v("我们以推流MP4文件为例，我的视频文件地址："),t("code",[s._v("/Users/tony/Desktop/w01661pl9vw.p702.1.mp4")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("RTMP")]),s._v("协议推流命令")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ffmpeg -re -i /Users/tony/Desktop/w01661pl9vw.p702.1.mp4 -vcodec libx264 -acodec aac -f flv rtmp://127.0.0.1:1935/rtmplive/home\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("HLS")]),s._v("协议推流命令")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ffmpeg -re -i  /Users/tony/Desktop/w01661pl9vw.p702.1.mp4 -vcodec libx264 -vprofile baseline -acodec aac -ar 44100 -strict -2 -ac 1 -f flv -q 10 rtmp://127.0.0.1:1935/hls/test\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("/Users/tony/Desktop/w01661pl9vw.p702.1.mp4")]),s._v(" 表示视频的地址")]),s._v(" "),t("p",[t("code",[s._v("rtmp://127.0.0.1:1935/rtmplive/home")]),s._v("、"),t("code",[s._v("rtmp://localhost:1935/rtmplive/hls")]),s._v("表示推流地址")]),s._v(" "),t("p",[s._v("上面的命令操作后，命令行出现了如下图，表示已经成功了")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<img width="793" alt="wx20180126-111328 2x" src="https://user-images.githubusercontent.com/6395813/49803352-81cfe600-fd8a-11e8-8dee-41f4f0e2d008.png">\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("关于FFmpeg功能命令可参考：")]),s._v(" "),t("p",[t("a",{attrs:{href:"http://www.jianshu.com/p/053665062f22",target:"_blank",rel:"noopener noreferrer"}},[s._v("FFmpeg功能命令集合"),t("OutboundLink")],1)]),s._v(" "),t("h4",{attrs:{id:"_4-7-代码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-代码实现","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.7 代码实现")]),s._v(" "),t("p",[s._v("两种推流方式播放的话，我们都使用video.js播放器播放(牛牛里使用的是腾讯云播放器)")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("RTMP")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"UTF-8\">\n<title>Insert title here</title>\n<link href=\"http://vjs.zencdn.net/5.19/video-js.min.css\" rel=\"stylesheet\">\n<script src=\"http://vjs.zencdn.net/5.19/video.min.js\"><\/script>\n</head>\n<body>\n<video\n    id=\"my-player\"\n    class=\"video-js\"\n    controls\n    preload=\"auto\"\n    data-setup='{}'>\n    <source src='rtmp://127.0.0.1/rtmplive/home' type='rtmp/flv'/>  \n  </p>\n</video>\n<script type=\"text/javascript\">\n   var player = videojs('my-player');\n   var options = {};\n\n   var player = videojs('my-player', options, function onPlayerReady() {\n     videojs.log('Your player is ready!');\n     // In this context, `this` is the player that was created by Video.js.\n     this.play();\n     // How about an event listener?\n     this.on('ended', function() {\n       videojs.log('Awww...over so soon?!');\n     });\n   });\n\n<\/script>\n</body>\n</html>\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br")])]),t("p",[s._v("其它src中的地址填的是RTMP推流地址，注意播放时，如果出现“当前系统环境不支持播放该视频格式”，浏览器需要启用flash，才能正常播放。")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("HLS")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>videojs-contrib-hls embed</title>\n  <link href="https://unpkg.com/video.js/dist/video-js.css" rel="stylesheet">\n  <script src="https://unpkg.com/video.js/dist/video.js"><\/script>\n  <script src="https://unpkg.com/videojs-contrib-hls/dist/videojs-contrib-hls.js"><\/script>\n</head>\n<body>\n\n  <video id="my_video_1" class="video-js vjs-default-skin" controls preload="auto" width="640" height="268" \n  data-setup=\'{}\'>\n    <source src="http://www.tony.com/hls/test.m3u8" type="application/x-mpegURL">\n  </video>\n  \n  <script>\n  <\/script>\n  \n</body>\n</html>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("h4",{attrs:{id:"_4-8-效果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-效果","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.8 效果")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("rtmp效果")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"live08.png",alt:"0b20b027406625d2s"}})]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("hls效果")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"live09.png",alt:"fbd49eed2bd3f92es"}})]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("ts和m3u8文件")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"live10.png",alt:"14e622f03c4a9193s"}})]),s._v(" "),t("h3",{attrs:{id:"五、直播中遇到问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、直播中遇到问题","aria-hidden":"true"}},[s._v("#")]),s._v(" 五、直播中遇到问题")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#_5-1-%E8%87%AA%E5%8A%A8%E6%92%AD%E6%94%BE%E9%97%AE%E9%A2%98"}},[s._v("自动播放问题")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#_5-2-%E5%90%84%E5%B9%B3%E5%8F%B0%E6%92%AD%E6%94%BE%E5%99%A8%E8%A1%A8%E7%8E%B0%E4%B8%8D%E7%BB%9F%E4%B8%80"}},[s._v("各平台播放器表现不统一")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#_5-3-%E5%86%85%E5%B5%8C%E9%A1%B5%E9%9D%A2%E8%B0%83%E8%AF%95%E5%9B%B0%E9%9A%BE"}},[s._v("内页面调试困难")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#_5-4-native%E4%B8%8Eweb%E9%80%9A%E4%BF%A1"}},[s._v("Native与web通信问题")])])]),s._v(" "),t("h4",{attrs:{id:"_5-1-自动播放问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-自动播放问题","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.1 自动播放问题")]),s._v(" "),t("p",[s._v("在X5内核浏览器里必须使用触发"),t("code",[s._v("touchend")]),s._v("、"),t("code",[s._v("click")]),s._v("、"),t("code",[s._v("doubleclick")]),s._v("或"),t("code",[s._v("keydown")]),s._v("事件等标准的事件才能触发")]),s._v(" "),t("h4",{attrs:{id:"_5-2-各平台播放器表现不统一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-各平台播放器表现不统一","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.2 各平台播放器表现不统一")]),s._v(" "),t("p",[s._v("安卓下很多浏览器把video标签替换成了原生自带播放器样式跟行为，很难控制其行为跟样式。")]),s._v(" "),t("h4",{attrs:{id:"_5-3-内嵌页面调试困难"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-内嵌页面调试困难","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.3 内嵌页面调试困难")]),s._v(" "),t("p",[s._v("目前使用的是weinre调试，但weinre调试看不到在native实际效果，比如web调用native，需要native反馈一种效果，weinre是看不到效果。")]),s._v(" "),t("h4",{attrs:{id:"_5-4-native与web通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-native与web通信","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.4 Native与web通信")]),s._v(" "),t("p",[s._v("schema跟jsBridge，schema只能做到web调用native，而且做不到native调用web；jsBridge虽然可以做native调用web，但在iframe没加载完的情况下，也是通知不到web的；")]),s._v(" "),t("h3",{attrs:{id:"六、总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、总结","aria-hidden":"true"}},[s._v("#")]),s._v(" 六、总结")]),s._v(" "),t("p",[s._v("整个直播是一个非常复杂的过程，实现过程中会遇到很多性能问题，需要在性能跟即时性做一个权衡，ts跟m3u8尽量做到缓存，浏览器里尽量使用推流。")]),s._v(" "),t("h3",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.zhihu.com/question/42162310",target:"_blank",rel:"noopener noreferrer"}},[s._v("如何搭建一个完整的视频直播系统？"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://web.jobbole.com/88543/",target:"_blank",rel:"noopener noreferrer"}},[s._v("H5直播起航"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.zhihu.com/question/21087379",target:"_blank",rel:"noopener noreferrer"}},[s._v("有支持M3U8格式的HTML5播放器吗？"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://www.jianshu.com/p/2ce402a485ca",target:"_blank",rel:"noopener noreferrer"}},[s._v("HTTP Live Streaming (HLS) - 概念"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://www.eduve.org/knowledge/732",target:"_blank",rel:"noopener noreferrer"}},[s._v("M3U8格式讲解及实际应用分析"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"联系作者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),t("div",{attrs:{align:"center"}},[t("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),t("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);e.default=n.exports}}]);