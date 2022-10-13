## 第1章 jenkins简介



### 1.1 持续集成与交付概念

CI(Continuous integration，中文意思是持续集成)是一种软件开发时间。持续集成强调开发人员提交了新代码之后，立刻进行构建、（单元）测试。根据测试结果，我们可以确定新代码和原有代码能否正确地集成在一起。借用网络图片对CI加以理解。



 CD(Continuous Delivery， 中文意思持续交付)是在持续集成的基础上，将集成后的代码部署到更贴近真实运行环境(类生产环境)中。比如，我们完成单元测试后，可以把代码部署到连接数据库的Staging环境中更多的测试。如果代码没有问题，可以继续手动部署到生产环境。下图反应的是CI/CD 的大概工作模式。



### 1.2 jenkins 介绍

Jenkins是一个开源的、提供友好操作界面的持续集成(CI)工具，起源于Hudson（Hudson是商用的），主要用于持续、自动的构建/测试软件项目、监控外部任务的运行（这个比较抽象，暂且写上，不做解释）。Jenkins用Java语言编写，可在Tomcat等流行的servlet容器中运行，也可独立运行。通常与版本管理工具(SCM)、构建工具结合使用。常用的版本控制工具有SVN、GIT，构建工具有Maven、Ant、Gradle。





## 第2章 jenkins基础

### 2.1



### 2.2



### 2.3



### 2.4





### 2.5



### 2.6 



## 第3章 jenkins + docker

### 3.1 环境安装

1.   安装 vmware虚拟机 ubuntu20操作系统

2.   安装 docker 和 openssh-server

3.   安装 finalshell软件

4.   输入指令

```sh
# 创建文件夹作为挂载地址
mkdir -p /mnt/gitlab/etc 
mkdir -p /mnt/gitlab/log
mkdir -p /mnt/gitlab/data

# 拉取镜像
docker pull gitlab/gitlab-ce

# 运行镜像 创建时间很长,耐心等待
docker run \
    --detach \
    --publish 8443:443 \
    --publish 8090:80 \
    --name gitlab \
    --restart unless-stopped \
    -v /mnt/gitlab/etc:/etc/gitlab \
    -v /mnt/gitlab/log:/var/log/gitlab \
    -v /mnt/gitlab/data:/var/opt/gitlab \
    gitlab/gitlab-ce
```

5.   查看ip访问端口

```
ifconfig  // 访问 192.168.179.128:8090
```

6.   输入用户名和密码

```
默认用户名 root
密码获取 cat /mnt/gitlab/etc/initial_root_password
```

7.   新建项目

进入gitlab 新增项目

添加ssh公钥

8.   将本地代码提交到gitlab中

```
git remote set-url origin git@192.168.179.128:8090/gitlab-instance-8c95171e/java-project.git
```



安装jenkins

```
docker run \
  -u root \
  --rm \
  -d \
  -p 8080:8080 \
  -p 50000:50000 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  jenkinsci/blueocean
```

查看jenkins密码

```
docker ps
docker container exec -it <docker-container-name> bash
cat /var/jenkins_home/secrets/initialAdminPassword
用户名 admin
```









## 第4章  jenkins + k8s

### 4.1



### 4.2



### 4.3

