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
</div></template>
