---

title: maven教程

date: 2021-11-15 21:23:01

---


## 第1章 maven介绍
### 1.1 maven的功能
自动打包，依赖管理，向外暴露自己的jar包，

在本地仓库中没有对应的资源会自动从云仓库中下载依赖的jar包



### 1.2 maven的项目类型

POM类型：依赖管理项目

WAR类型：JavaWeb项目

JAR类型：Java普通项目



### 1.3 maven配置

```text
//镜像配置
<!-- 阿里云镜像 -->
<mirror>
  <id>aliyunmaven</id>
  <mirrorOf>*</mirrorOf>
  <name>阿里云公共仓库</name>
  <url>https://maven.aliyun.com/repository/public</url>
</mirror>

```



## 第2章 pom.xml

### 2.1 依赖管理

```text
<dependencies>
    <dependency>
    <goupId></goupId>
    <artifactId></artifactId>
    <version></version>
    <scope>test<scope>  //test是给测试类使用的
    </dependency>
</dependencies>
```



### 2.2 插件管理

```xml
<build>
    <plugins>
        <plugin>
            //插件的资源坐标
        </plugin>
    </plugins>    
</build>
```





## 第3章 maven关系

### 3.1 依赖
项目间的依赖关系

依赖关系：项目A中导入项目B，即项目A依赖项目B

在开发阶段，maven在同一个工作空间内，不同的maven项目可以通过资源坐标直接调用资源，不需要打包放入到本地仓库中，但是运行时还需要打包引入的。

打包顺序，如果A依赖B，B依赖C，则应该先打包C，再打包B，再打包A，每次修改代码，都需要重新打包



### 3.2 继承

项目间的继承关系

maven项目继承关系，只继承pom资源文件，其他任何代码都不会继承。

创建两个独立的模块，在子模块的pom里，用 parent 标签包裹父模块的资源坐标。

这样两个独立的模块就建立了继承关系。

父项目中的pom依赖都会自动导入到子项目中，子项目也可以配置自己的依赖。

父项目的改造：如果只想做一个资源管理，不做功能开发的父项目。则不用创建JAVAEE或SE类型的项目，而可以创建一个jar类型的项目，删除目录结构，只保留pom文件，在pom文件里将packaging标签的内容修改为pom

注意：父项目要为pom类型，父子项目都是独立的，不能在父项目下创建子项目



### 3.3 聚合

聚合关系：

将本来一个整体的事物，拆分为不同的零件，每个零件在物理视图上是独立的，也就是说肉眼看到的是多个零件，但是在逻辑上是属于一个整体的。

根据MVC的代码结构，将项目拆分成四个子项目，pojo，mapper，service，web

依赖关系：web -> service -> mapper -> pojo

这些子项目都开发的是同一个功能，之间存在相互调用，所以使用依赖关系。

继承关系：这些子项目开发的同一个功能，为方便资源的统一，使这些子项目都继承同一个父项目，所以使用继承关系。

创建流程：

创建 jar 类型的maven父项目，删除src目录，修改pom类型

在父项目中右键创建新的子项目，分别是jar类型的pojo子项目，mapper子项目，service子项目，和war类型的web子项目。

由于继承原理，子项目会自动继承父项目的完整资源，而子项目不需要这么多的资源，就需要在父项目中pom文件中使用 `<dependencyManagement>` 
标签，包裹 `<dependencies>` 标签，在子项目中只需要声明 `<goupId>` 和 `<artifactId>` ，版本号由父项目统一管理。

分别手动配置四个子项目的依赖关系。

将SSM的配置文件放到web子项目中，因为web拥有所有的资源。

在子项目中完成代码的编写，pojo内是实体类代码，mapper类是数据库操作代码，service是业务层代码，web是控制器代码和页面资源。

在父项目中打包。执行clean，执行install

运行拆分后的SSM代码，在web子项目中，执行tomcat run





## 第4章 生命周期

### 4.1 所有功能

mvn compile 编译 

mvn clean 清理 

mvn test 测试 

mvn package 打包项目

mvn install 安装项目





## 第5章 私服Nexus

### 5.1 简介

Nexus可以做Maven私服，私服不是Maven的核心概念，它仅仅是一种衍生出来的特殊的Maven仓库。有三种专门的Maven仓库管理软件可以用来帮助大家建立私服：

如果没有私服，我们所需的所有构件都需要通过maven的中央仓库和第三方的Maven仓库下载到本地，而一个团队中的所有人都重复的从maven仓库下载构件无疑加大了仓库的负载和浪费了外网带宽，如果网速慢的话，还会影响项目的进程。



仓库类型

hosted，本地仓库，通常我们会部署自己的构件到这一类型的仓库。比如公司的第二方库。

proxy，代理仓库，它们被用来代理远程的公共仓库，如maven中央仓库。

group，仓库组，用来合并多个hosted/proxy仓库，当你的项目希望在多个repository使用资源时就不需要多次引用了，只需要引用一个group即可。



### 5.2 docker部署

```
docker search nexus3
docker pull sonatype/nexus3
chown -R 200 /home/nexus/nexus-data/
docker run -d --restart=always --privileged=true -p 8081:8081 -p 8082:8082 -p 8083:8083 -p 8084:8084 --name nexus3 -v /home/nexus/nexus-data:/nexus-data sonatype/nexus3
docker logs nexus3

# 重新启动防火墙,打开腾讯云端口
firewall-cmd --zone=public  --permanent --add-port=8081/tcp
firewall-cmd --zone=public  --permanent --add-port=8082/tcp
firewall-cmd --zone=public  --permanent --add-port=8083/tcp
firewall-cmd --zone=public  --permanent --add-port=8084/tcp
systemctl restart firewalld

# 端口详情
8081：nexus3网页端
8082：docker(hosted)私有仓库，可以pull和push
8083：docker(proxy)代理远程仓库，只能pull
8084：docker(group)私有仓库和代理的组，只能pull

# 挂载详情
/home/nexus/nexus-data  # docker里存nexus数据目录

# 账号详情
http://43.143.141.8:8081  # 账号admin 密码在挂载目录admin.password
```



### 5.3 搭建maven私服

本地maven配置 全局生效

```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.2.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.2.0 https://maven.apache.org/xsd/settings-1.2.0.xsd">
 
<!-- 配置本地仓库路径 -->
  <localRepository>C:\Env\mavenrepo</localRepository>

  <pluginGroups>
  </pluginGroups>

<!-- 配置代理 -->
  <proxies>
  </proxies>

<!-- 配置认证信息 -->
<!--  <servers>
    <server>
      <id>deploymentRepo</id>
      <username>repouser</username>
      <password>repopwd</password>
    </server>
  </servers>
-->
  
  
<!-- 配置镜像 使用私服不需要配置镜像-->
  <mirrors>
  </mirrors>


<!-- 配置私服 -->
  <profiles>
    <profile>
      <id>nexus</id>
      <repositories>
        <repository>
          <id>nexus</id>
          <name>nexus</name>
          <url>http://43.143.141.8:8081/repository/maven-public/</url>
          <layout>default</layout>
          <snapshotPolicy>always</snapshotPolicy>
        </repository>
      </repositories>
      <pluginRepositories>
        <pluginRepository>
          <id>nexus</id>
          <name>nexus</name>
          <url>http://43.143.141.8:8081/repository/maven-public/</url>
        </pluginRepository>
      </pluginRepositories>
    </profile>
  </profiles>

  <!-- 激活私服 -->
  <activeProfiles>
    <activeProfile>nexus</activeProfile>
  </activeProfiles>
</settings>
```



服务端配置

```
创建一个maven2的proxy仓库
名称 maven-aliyun
url -> https://maven.aliyun.com/repository/public
在maven-public中加入maven-aliyun -> 排序提到最高 -> 保存
```



配置pom文件方式

只针对当前项目有效 , 如果需要全局生效则应配置 `settings.xml`

```xml
 <repositories>
      <!-- 配置nexus远程仓库 -->
      <repository>
         <id>nexus</id>
         <name>Nexus Snapshot Repository</name>
         <url>http://127.0.0.1:8088/nexus/content/groups/public/</url>
         <releases>
            <enabled>true</enabled>
         </releases>
         <snapshots>
           <enabled>false</enabled>
         </snapshots>
      </repository>
   </repositories>
   <!-- 配置从哪个仓库中下载构件，即jar包 -->
   <pluginRepositories>
       <pluginRepository>
         <id>nexus</id>
         <name>Nexus Snapshot Repository</name>
         <url>http://127.0.0.1:8088/nexus/content/groups/public/</url>
         <releases>
           <enabled>true</enabled>
         </releases>
         <snapshots>
           <enabled>false</enabled>
         </snapshots>
      </pluginRepository>
    </pluginRepositories>
```



idea配置

绑定本地的maven和settings.xml配置文件



测试 命令行输入

```sh
mvn dependency:get -Dartifact=redis.clients:jedis:3.6.1
```





### 5.4 搭建npm私服

创建 npm hosted 仓库 名称 npm-hosted



创建 npm proxy 仓库 名称 npm-proxy 

添加地址  http://registry.npm.taobao.org/



创建 npm group 仓库 名称 npm-group

添加以上两个仓库成员 proxy在最前



定义npm源

```
npm config set registry http://43.143.141.8:8081/repository/npm-group/
```



配置项目中的 `.npmrc` 文件

```
registry=http://43.143.141.8:8081/repository/npm-group/
```



### 5.5 搭建docker私服





### 5.6 搭建python私服
