# linux 常用命令

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [ssh 登录](#一、ssh-登录)
- [ssh 上传或下载文件](#二、ssh-上传或下载)
- [打包跟压缩文件](#三、打包跟压缩文件)

### 一、ssh 登录

**客户端用户@服务器地址**

```
ssh root@49.235.171.183
```

### 二、ssh 上传或下载

- [上传文件](#_2-1-上传文件)
- [上传文件目录](#_2-2-上传文件目录)
- [下传文件](#_2-3-下传文件)
- [下传文件目录](#_2-4-下传文件目录)

#### 2.1 上传文件

```
scp /path/filename username@servername:/path
```

例如 `scp /var/www/test.php root@192.168.0.101:/var/www/` #把本机`/var/www/`目录下的 `test.php` 文件上传到 `192.168.0.101` 这台服务器上的`/var/www/`目录中

#### 2.2 上传文件目录

```
scp  -r local_dir username@servername:remote_dir
```

例如：`scp -r test root@192.168.0.101:/var/www/` #把当前目录下的`test`目录上传到服务器的`/var/www/`目录

#### 2.3 下传文件

```
scp username@servername:/path/filename /var/www/local_dir（本地目录）
```

例如 `scp root@192.168.0.101:/var/www/test.txt` #把 `192.168.0.101` 上的`/var/www/test.txt` 的文件下载到`/var/www/local_dir`（本地目录）

#### 2.4 下传文件目录

```
scp /path/filename username@servername:/path
```

例如 `scp /var/www/test.php root@192.168.0.101:/var/www/` #把本机`/var/www/`目录下的 `test.php` 文件上传到 `192.168.0.101` 这台服务器上的`/var/www/`目录中

### 三、打包跟压缩文件

- tar
- zip
- rar
- gz
- tar.gz 和 tgz
- bz2
- tar.bz2
- bz
- tar.bz
- Z
- lha
- rpm
- deb

#### 3.1 tar

- 解包：`tar xvf FileName.tar`
- 打包：`tar cvf FileName.tar DirName`

#### 3.2 zip

- 解压：`unzip FileName.zip`
- 压缩：`zip FileName.zip DirName`

#### 3.3 rar

- 解压：`rar x FileName.rar`
- 压缩：`rar a FileName.rar DirName`

#### 3.4 gz

- 解压 1：`gunzip FileName.gz`
- 解压 2：`gzip -d FileName.gz`
- 压缩：`gzip FileName`

#### 3.5 tar.gz 和 tgz

- 解压：`tar zxvf FileName.tar.gz`
- 压缩：`tar zcvf FileName.tar.gz DirName`

#### 3.6 bz2

- 解压 1：`bzip2 -d FileName.bz2`
- 解压 2：`bunzip2 FileName.bz2`
- 压缩：`bzip2 -z FileName`

#### 3.7 bz

- 解压 1：`bzip2 -d FileName.bz`
- 解压 2：`bunzip2 FileName.bz`
- 压缩：未知

#### 3.8 tar.bz

- 解压：`tar jxvf FileName.tar.bz`
- 压缩：未知

#### 3.9 Z

- 解压：`uncompress FileName.Z`
- 压缩：`compress FileName`

#### 3.10 lha

- 解压：`lha -e FileName.lha`
- 压缩：`lha -a FileName.lha FileName`

#### 3.11 rpm

- 解包：`rpm2cpio FileName.rpm | cpio -div`

#### 3.12 deb

- 解包：`ar p FileName.deb data.tar.gz | tar zxf -`

参考资料：[linux 的压缩解压命令全解](https://www.cnblogs.com/lanqingzhou/p/8058571.html)

## 参考资料

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
