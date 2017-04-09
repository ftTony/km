# 计算机网络基础

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 网络层次划分
- IP 地址
- 子网掩码及网络划分
- ARP/RARP 协议
- TCP/IP 协议
- UDP 协议
- 其它协议

### 一、网络层次划分

![images](net.png)

#### 1.1 五层协议

- **应用层**：
- **运输层**：
- **网络层**：
- **数据链路层**：
- **物理层**：

#### 1.2 ISO 七层模型中表示层和会话层功能是什么？

- **表示层**
- **会话层**

#### 1.3 数据在各层之间的传递过程

#### 1.4 TCP/IP 四层模型

### 二、IP 地址

### 三、子网掩码及网络划分

### 四、ARP/RARP 协议

### 五、TCP/IP 协议

### 六、UDP 协议

用户数据报协议 UDP，是面向无连接的通讯协议，是无连接的，尽最大可能交付，没有拥塞控制，面向报文（对于应用程序传下来的报文不合并也不拆分，只是添加 UDP 首部），支持一对一、一对多、多对一和多对多的交互通信。UDP 通讯时不需要接收方确认，属于不可靠的传输，可能会出现丢包现象，实际应用中要求程序员编程验证。例如：视频传输、实时通信。

#### 6.1 UDP首部格式

![images](net-udp.png)

### 七、其它协议

### 参考资料

- [计算机网络](https://github.com/frank-lam/fullstack-tutorial/blob/master/notes/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C.md)
- [面试专场之「计算机网络」知识](https://mp.weixin.qq.com/s/4UCkjMpFSy_mvvHdjUVPCw)
- [计算机网络基础知识总结](https://www.cnblogs.com/maybe2030/p/4781555.html)
- [网络基础必知](https://www.cnblogs.com/renfanzi/p/5783937.html)
- [常见面试题整理--计算机网络篇（每位开发者必备）](https://zhuanlan.zhihu.com/p/24001696)
- [计算机网络太难？了解这一篇就够了](https://zhuanlan.zhihu.com/p/84316213)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
