# linux 免密登录

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 基本配置
- 进阶配置

### 一、基本配置

#### 1.1 生成密钥

```
cd ~/.ssh/
ssh-keygen -t rsa -C "my_name" -f "my_key"
# 这一步会生成 my_key.pub（公钥） my_key(私钥)
```

#### 1.2 将公钥放在目标服务器上

```
scp ./my_key.pub root@目标服务器:/root/.ssh/
# 这里使用 scp 命令远程复制公钥
# 注意要存放在登录用户所在目录的 .ssh 文件夹里，这里使用 root 用户登录，故存在 root 用户的用户目录。
```

#### 1.3 将公钥存放进目标服务器 authorized_keys 里

```
cat my_key.pub >> authorized_keys
```

#### 1.4 使用免密登录

```
ssh -i ~/.ssh/my_key root@192.168.1.1
# -i 指定私钥的路径
```

基本配置已经完成了，但每一次连接都得手动指定本机的私钥地址，能不能省略这一步呢？

### 二、进阶配置

进阶配置中，我们要配置本地 .ssh 下的 config 文件，实现自动登录，而不需要手动指定私钥地址。

#### 2.1 进入 config 文件

```
cd ~/.ssh/
vi config
```

#### 2.2 编辑 config 文件

```
User root
Host tencent
HostName 49.235.171.183
Port 22
StrictHostKeyChecking no
IdentityFile ~/.ssh/id_rsa
IdentitiesOnly yes
Protocol 2
Compression yes
ServerAliveInterval 60
ServerAliveCountMax 20
LogLevel INFO
```

#### 2.3 配置完成，体验一下吧

```
ssh tencent
```

#### 2.4 配置多个服务器登录

```
User root
Host tencent
HostName 49.235.171.183
Port 22
StrictHostKeyChecking no
IdentityFile ~/.ssh/id_rsa
IdentitiesOnly yes
Protocol 2
Compression yes
ServerAliveInterval 60
ServerAliveCountMax 20
LogLevel INFO

Host aliyun
User root
HostName 112.74.54.47
Port 22
StrictHostKeyChecking no
IdentityFile ~/.ssh/id_rsa
IdentitiesOnly yes
Protocol 2
Compression yes
ServerAliveInterval 60
ServerAliveCountMax 20
Loglevel INFO
```

#### 2.5 使用免密登录

```
ssh aliyun
ssh tencent
```

> **提示**
> 文中的 ip 地址是为了演示，具体的 ip 需要根据服务器真实 ip 来定。

### 参考资料

- [Linux 免密登录配置](https://lmjben.github.io/blog/operation-linux-login.html#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
