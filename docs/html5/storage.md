# 客户端存储

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- Cookie
- sessionStorage
- localStorage
- 区别

### 一、Cookie

### 二、sessionStorage

### 三、localStorage

### 四、区别

- Cookie：cookie 数据始终在同源的 http 请求中携带（即使不需要），即 cookie 在浏览器和服务器间来回传递。而 sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存。cookie 数据还有路径（path）的概念，可以限制 cookie 只属于某个路径下,存储的大小很小只有 4K 左右。 （key：可以在浏览器和服务器端来回传递，存储容量小，只有大约 4K 左右）
- sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持，localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie 只在设置的 cookie 过期时间之前一直有效，即使窗口或浏览器关闭。（key：本身就是一个回话过程，关闭浏览器后消失，session 为一个回话，当页面不同即使是同一页面打开两次，也被视为同一次回话）
- localStorage：localStorage 在所有同源窗口中都是共享的；cookie 也是在所有同源窗口中都是共享的。（key：同源窗口都会共享，并且不会失效，不管窗口或者浏览器关闭与否都会始终生效）

### 参考资料

- 《高程第 3 版》
- 《权威第 6 版》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
