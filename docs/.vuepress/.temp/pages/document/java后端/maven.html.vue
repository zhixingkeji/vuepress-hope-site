<template><div><h2 id="第1章-maven介绍" tabindex="-1"><a class="header-anchor" href="#第1章-maven介绍" aria-hidden="true">#</a> 第1章 maven介绍</h2>
<h3 id="_1-1-maven的功能" tabindex="-1"><a class="header-anchor" href="#_1-1-maven的功能" aria-hidden="true">#</a> 1.1 maven的功能</h3>
<p>自动打包，依赖管理，向外暴露自己的jar包，</p>
<p>在本地仓库中没有对应的资源会自动从云仓库中下载依赖的jar包</p>
<h3 id="_1-2-maven的项目类型" tabindex="-1"><a class="header-anchor" href="#_1-2-maven的项目类型" aria-hidden="true">#</a> 1.2 maven的项目类型</h3>
<p>POM类型：依赖管理项目</p>
<p>WAR类型：JavaWeb项目</p>
<p>JAR类型：Java普通项目</p>
<h3 id="_1-3-maven配置" tabindex="-1"><a class="header-anchor" href="#_1-3-maven配置" aria-hidden="true">#</a> 1.3 maven配置</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//镜像配置
&lt;!-- 阿里云镜像 -->
&lt;mirror>
  &lt;id>aliyunmaven&lt;/id>
  &lt;mirrorOf>*&lt;/mirrorOf>
  &lt;name>阿里云公共仓库&lt;/name>
  &lt;url>https://maven.aliyun.com/repository/public&lt;/url>
&lt;/mirror>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第2章-pom-xml" tabindex="-1"><a class="header-anchor" href="#第2章-pom-xml" aria-hidden="true">#</a> 第2章 pom.xml</h2>
<h3 id="_2-1-依赖管理" tabindex="-1"><a class="header-anchor" href="#_2-1-依赖管理" aria-hidden="true">#</a> 2.1 依赖管理</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;dependencies>
    &lt;dependency>
    &lt;goupId>&lt;/goupId>
    &lt;artifactId>&lt;/artifactId>
    &lt;version>&lt;/version>
    &lt;scope>test&lt;scope>  //test是给测试类使用的
    &lt;/dependency>
&lt;/dependencies>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-插件管理" tabindex="-1"><a class="header-anchor" href="#_2-2-插件管理" aria-hidden="true">#</a> 2.2 插件管理</h3>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">></span></span>
            //插件的资源坐标
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">></span></span>    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第3章-maven关系" tabindex="-1"><a class="header-anchor" href="#第3章-maven关系" aria-hidden="true">#</a> 第3章 maven关系</h2>
<h3 id="_3-1-依赖" tabindex="-1"><a class="header-anchor" href="#_3-1-依赖" aria-hidden="true">#</a> 3.1 依赖</h3>
<p>项目间的依赖关系</p>
<p>依赖关系：项目A中导入项目B，即项目A依赖项目B</p>
<p>在开发阶段，maven在同一个工作空间内，不同的maven项目可以通过资源坐标直接调用资源，不需要打包放入到本地仓库中，但是运行时还需要打包引入的。</p>
<p>打包顺序，如果A依赖B，B依赖C，则应该先打包C，再打包B，再打包A，每次修改代码，都需要重新打包</p>
<h3 id="_3-2-继承" tabindex="-1"><a class="header-anchor" href="#_3-2-继承" aria-hidden="true">#</a> 3.2 继承</h3>
<p>项目间的继承关系</p>
<p>maven项目继承关系，只继承pom资源文件，其他任何代码都不会继承。</p>
<p>创建两个独立的模块，在子模块的pom里，用 parent 标签包裹父模块的资源坐标。</p>
<p>这样两个独立的模块就建立了继承关系。</p>
<p>父项目中的pom依赖都会自动导入到子项目中，子项目也可以配置自己的依赖。</p>
<p>父项目的改造：如果只想做一个资源管理，不做功能开发的父项目。则不用创建JAVAEE或SE类型的项目，而可以创建一个jar类型的项目，删除目录结构，只保留pom文件，在pom文件里将packaging标签的内容修改为pom</p>
<p>注意：父项目要为pom类型，父子项目都是独立的，不能在父项目下创建子项目</p>
<h3 id="_3-3-聚合" tabindex="-1"><a class="header-anchor" href="#_3-3-聚合" aria-hidden="true">#</a> 3.3 聚合</h3>
<p>聚合关系：</p>
<p>将本来一个整体的事物，拆分为不同的零件，每个零件在物理视图上是独立的，也就是说肉眼看到的是多个零件，但是在逻辑上是属于一个整体的。</p>
<p>根据MVC的代码结构，将项目拆分成四个子项目，pojo，mapper，service，web</p>
<p>依赖关系：web -&gt; service -&gt; mapper -&gt; pojo</p>
<p>这些子项目都开发的是同一个功能，之间存在相互调用，所以使用依赖关系。</p>
<p>继承关系：这些子项目开发的同一个功能，为方便资源的统一，使这些子项目都继承同一个父项目，所以使用继承关系。</p>
<p>创建流程：</p>
<p>创建 jar 类型的maven父项目，删除src目录，修改pom类型</p>
<p>在父项目中右键创建新的子项目，分别是jar类型的pojo子项目，mapper子项目，service子项目，和war类型的web子项目。</p>
<p>由于继承原理，子项目会自动继承父项目的完整资源，而子项目不需要这么多的资源，就需要在父项目中pom文件中使用 <code v-pre>&lt;dependencyManagement&gt;</code>
标签，包裹 <code v-pre>&lt;dependencies&gt;</code> 标签，在子项目中只需要声明 <code v-pre>&lt;goupId&gt;</code> 和 <code v-pre>&lt;artifactId&gt;</code> ，版本号由父项目统一管理。</p>
<p>分别手动配置四个子项目的依赖关系。</p>
<p>将SSM的配置文件放到web子项目中，因为web拥有所有的资源。</p>
<p>在子项目中完成代码的编写，pojo内是实体类代码，mapper类是数据库操作代码，service是业务层代码，web是控制器代码和页面资源。</p>
<p>在父项目中打包。执行clean，执行install</p>
<p>运行拆分后的SSM代码，在web子项目中，执行tomcat run</p>
<h2 id="第4章-生命周期" tabindex="-1"><a class="header-anchor" href="#第4章-生命周期" aria-hidden="true">#</a> 第4章 生命周期</h2>
<h3 id="_4-1-所有功能" tabindex="-1"><a class="header-anchor" href="#_4-1-所有功能" aria-hidden="true">#</a> 4.1 所有功能</h3>
<p>mvn compile 编译</p>
<p>mvn clean 清理</p>
<p>mvn test 测试</p>
<p>mvn package 打包项目</p>
<p>mvn install 安装项目</p>
<h2 id="第5章-私服nexus" tabindex="-1"><a class="header-anchor" href="#第5章-私服nexus" aria-hidden="true">#</a> 第5章 私服Nexus</h2>
<h3 id="_5-1-简介" tabindex="-1"><a class="header-anchor" href="#_5-1-简介" aria-hidden="true">#</a> 5.1 简介</h3>
<p>Nexus可以做Maven私服，私服不是Maven的核心概念，它仅仅是一种衍生出来的特殊的Maven仓库。有三种专门的Maven仓库管理软件可以用来帮助大家建立私服：</p>
<p>如果没有私服，我们所需的所有构件都需要通过maven的中央仓库和第三方的Maven仓库下载到本地，而一个团队中的所有人都重复的从maven仓库下载构件无疑加大了仓库的负载和浪费了外网带宽，如果网速慢的话，还会影响项目的进程。</p>
<p>仓库类型</p>
<p>hosted，本地仓库，通常我们会部署自己的构件到这一类型的仓库。比如公司的第二方库。</p>
<p>proxy，代理仓库，它们被用来代理远程的公共仓库，如maven中央仓库。</p>
<p>group，仓库组，用来合并多个hosted/proxy仓库，当你的项目希望在多个repository使用资源时就不需要多次引用了，只需要引用一个group即可。</p>
<h3 id="_5-2-docker部署" tabindex="-1"><a class="header-anchor" href="#_5-2-docker部署" aria-hidden="true">#</a> 5.2 docker部署</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker search nexus3
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-搭建maven私服" tabindex="-1"><a class="header-anchor" href="#_5-3-搭建maven私服" aria-hidden="true">#</a> 5.3 搭建maven私服</h3>
<p>本地maven配置 全局生效</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>settings</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://maven.apache.org/SETTINGS/1.2.0<span class="token punctuation">"</span></span>
          <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
          <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://maven.apache.org/SETTINGS/1.2.0 https://maven.apache.org/xsd/settings-1.2.0.xsd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
 
<span class="token comment">&lt;!-- 配置本地仓库路径 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>localRepository</span><span class="token punctuation">></span></span>C:\Env\mavenrepo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>localRepository</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pluginGroups</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pluginGroups</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 配置代理 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>proxies</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>proxies</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 配置认证信息 --></span>
<span class="token comment">&lt;!--  &lt;servers>
    &lt;server>
      &lt;id>deploymentRepo&lt;/id>
      &lt;username>repouser&lt;/username>
      &lt;password>repopwd&lt;/password>
    &lt;/server>
  &lt;/servers>
--></span>
  
  
<span class="token comment">&lt;!-- 配置镜像 使用私服不需要配置镜像--></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrors</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrors</span><span class="token punctuation">></span></span>


<span class="token comment">&lt;!-- 配置私服 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profiles</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>nexus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repositories</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>nexus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>nexus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">></span></span>http://43.143.141.8:8081/repository/maven-public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>layout</span><span class="token punctuation">></span></span>default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>layout</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>snapshotPolicy</span><span class="token punctuation">></span></span>always<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>snapshotPolicy</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repositories</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pluginRepositories</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pluginRepository</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>nexus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>nexus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">></span></span>http://43.143.141.8:8081/repository/maven-public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pluginRepository</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pluginRepositories</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profiles</span><span class="token punctuation">></span></span>

  <span class="token comment">&lt;!-- 激活私服 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activeProfiles</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activeProfile</span><span class="token punctuation">></span></span>nexus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activeProfile</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activeProfiles</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>settings</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务端配置</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>创建一个maven2的proxy仓库
名称 maven-aliyun
url -> https://maven.aliyun.com/repository/public
在maven-public中加入maven-aliyun -> 排序提到最高 -> 保存
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置pom文件方式</p>
<p>只针对当前项目有效 , 如果需要全局生效则应配置 <code v-pre>settings.xml</code></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repositories</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 配置nexus远程仓库 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>nexus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>Nexus Snapshot Repository<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">></span></span>http://127.0.0.1:8088/nexus/content/groups/public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>releases</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enabled</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enabled</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>releases</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>snapshots</span><span class="token punctuation">></span></span>
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enabled</span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enabled</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>snapshots</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repositories</span><span class="token punctuation">></span></span>
   <span class="token comment">&lt;!-- 配置从哪个仓库中下载构件，即jar包 --></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pluginRepositories</span><span class="token punctuation">></span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pluginRepository</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>nexus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>Nexus Snapshot Repository<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">></span></span>http://127.0.0.1:8088/nexus/content/groups/public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>releases</span><span class="token punctuation">></span></span>
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enabled</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enabled</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>releases</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>snapshots</span><span class="token punctuation">></span></span>
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enabled</span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enabled</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>snapshots</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pluginRepository</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pluginRepositories</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>idea配置</p>
<p>绑定本地的maven和settings.xml配置文件</p>
<p>测试 命令行输入</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>mvn dependency:get <span class="token parameter variable">-Dartifact</span><span class="token operator">=</span>redis.clients:jedis:3.6.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-4-搭建npm私服" tabindex="-1"><a class="header-anchor" href="#_5-4-搭建npm私服" aria-hidden="true">#</a> 5.4 搭建npm私服</h3>
<p>创建 npm hosted 仓库 名称 npm-hosted</p>
<p>创建 npm proxy 仓库 名称 npm-proxy</p>
<p>添加地址  <a href="http://registry.npm.taobao.org/" target="_blank" rel="noopener noreferrer">http://registry.npm.taobao.org/<ExternalLinkIcon/></a></p>
<p>创建 npm group 仓库 名称 npm-group</p>
<p>添加以上两个仓库成员 proxy在最前</p>
<p>定义npm源</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm config set registry http://43.143.141.8:8081/repository/npm-group/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置项目中的 <code v-pre>.npmrc</code> 文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>registry=http://43.143.141.8:8081/repository/npm-group/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-5-搭建docker私服" tabindex="-1"><a class="header-anchor" href="#_5-5-搭建docker私服" aria-hidden="true">#</a> 5.5 搭建docker私服</h3>
<h3 id="_5-6-搭建python私服" tabindex="-1"><a class="header-anchor" href="#_5-6-搭建python私服" aria-hidden="true">#</a> 5.6 搭建python私服</h3>
</div></template>
