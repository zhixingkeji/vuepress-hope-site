---
title: ES基础

date: 2022-03-24 00:28:26


---



## 第1章 ES 概述

### 1.1 es介绍

ES是一个开源的高扩展的分布式全文搜索引擎。



### 1.2 搜索引擎

-   全文搜索引擎

如百度 谷歌 搜狗等



-   垂直所有引擎

如电商网站 oa系统 等











## 第2章  ES入门

### 2.1 软件安装

安装 es

找到官网下载安装包后解压缩

运行bin目录下的elasticsearch.bat脚本

访问 http://localhost:9200



注意 8.0版本以上默认开启ssl , 需要关闭该设置

```yml
# /config/elasticsearch.yml
xpack.security.enabled: false
```



docker安装

```
# 拉取镜像
docker pull elasticsearch:8.4.3

# 运行容器
docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:8.4.3

# 查找容器信息
docker ps 

# 以root身份进入
docker exec -it -u root 3718f73b385e bash

# 更新软件源
apt-get update

# 安装vim
apt-get install vim
```





安装 kibana 可视化

找到官网下载安装包后解压缩

运行bin目录下的elasticsearch.bat脚本

访问 http://localhost:5601



安装elasticsearch-head可视化

谷歌插件商店搜索



### 2.2 基本操作

#### 2.2.2 索引操作

创建索引

发 **PUT** 请求 ：http://127.0.0.1:9200/shopping



查看所有索引

发 **GET** 请求 ：http://127.0.0.1:9200/_cat/indices?v



查看单个索引

发 **GET** 请求 ：http://127.0.0.1:9200/shopping



删除索引

发 **DELETE** 请求 ：http://127.0.0.1:9200/shopping





## 第3章  ES 环境





## 第4章 ES 进阶



## 第5章 ES集成



## 第6章 ES优化

