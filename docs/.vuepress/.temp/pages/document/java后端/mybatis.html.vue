<template><div><h2 id="一-框架概述" tabindex="-1"><a class="header-anchor" href="#一-框架概述" aria-hidden="true">#</a> 一.  框架概述</h2>
<h3 id="_1-1-软件开发常用结构" tabindex="-1"><a class="header-anchor" href="#_1-1-软件开发常用结构" aria-hidden="true">#</a> 1.1 软件开发常用结构</h3>
<h4 id="_1-1-1-三层架构" tabindex="-1"><a class="header-anchor" href="#_1-1-1-三层架构" aria-hidden="true">#</a> 1.1.1 三层架构</h4>
<p>表现层：用户界面（jsp，html，servlet）
业务层：接受界面层传过来的数据，处理逻辑，调用api
持久层：操作数据库</p>
<h4 id="_1-1-2-三层框架对应的框架" tabindex="-1"><a class="header-anchor" href="#_1-1-2-三层框架对应的框架" aria-hidden="true">#</a> 1.1.2 三层框架对应的框架</h4>
<p>表现层：springmvc 框架（servlet）controller包
业务层：spring 框架 service类
持久层：mybatis框架 （jdbc）dao包</p>
<h4 id="_1-1-3-三层的交互" tabindex="-1"><a class="header-anchor" href="#_1-1-3-三层的交互" aria-hidden="true">#</a> 1.1.3 三层的交互</h4>
<p>用户界面 -&gt; 业务逻辑层 -&gt; 持久层 -&gt; 数据库</p>
<h3 id="_1-2-框架的定义" tabindex="-1"><a class="header-anchor" href="#_1-2-框架的定义" aria-hidden="true">#</a> 1.2 框架的定义</h3>
<h4 id="_1-2-1-框架是什么" tabindex="-1"><a class="header-anchor" href="#_1-2-1-框架是什么" aria-hidden="true">#</a> 1.2.1 框架是什么</h4>
<p>框架是一个半成品，骨架，定义好了基础的功能。</p>
<h3 id="_1-3-jdbc编程" tabindex="-1"><a class="header-anchor" href="#_1-3-jdbc编程" aria-hidden="true">#</a> 1.3 JDBC编程</h3>
<h4 id="_1-3-1-jdbc-复习" tabindex="-1"><a class="header-anchor" href="#_1-3-1-jdbc-复习" aria-hidden="true">#</a> 1.3.1 jdbc 复习</h4>
<p>java database connectivity     java语言连接数据库</p>
<p>JDBC是sun公司的一套接口。</p>
<p>面向接口编程：降低耦合，多态。</p>
<p>JDBC编程六步</p>
<p>①注册驱动</p>
<p>②获取连接</p>
<p>③获取数据库操作对象</p>
<p>④执行sql语句</p>
<p>⑤处理查询结果集</p>
<p>⑥释放资源</p>
<h4 id="_1-3-2-jdbc-的缺点" tabindex="-1"><a class="header-anchor" href="#_1-3-2-jdbc-的缺点" aria-hidden="true">#</a> 1.3.2 jdbc 的缺点</h4>
<p>六步走，关闭资源，唯一的核心就是一句sql，却要编写一大堆重复代码</p>
<h3 id="_1-4-mybatis框架概述" tabindex="-1"><a class="header-anchor" href="#_1-4-mybatis框架概述" aria-hidden="true">#</a> 1.4 mybatis框架概述</h3>
<h4 id="_1-4-1-mybatis功能" tabindex="-1"><a class="header-anchor" href="#_1-4-1-mybatis功能" aria-hidden="true">#</a> 1.4.1 mybatis功能</h4>
<p>sql 映射，把一行数据映射成一个java对象
数据访问，对数据库的增删改查</p>
<h4 id="_1-4-2-mybatis封装" tabindex="-1"><a class="header-anchor" href="#_1-4-2-mybatis封装" aria-hidden="true">#</a> 1.4.2 mybatis封装</h4>
<p>连接对象，包括connection，satatement，resultset
sql语句
循环sql，封装list集合
关闭资源的能力</p>
<h4 id="_1-4-3-开发人员的工作" tabindex="-1"><a class="header-anchor" href="#_1-4-3-开发人员的工作" aria-hidden="true">#</a> 1.4.3 开发人员的工作</h4>
<p>开发人员集中精力在开发sql语句上即可，而不用关心创建，连接，关闭等繁琐操作</p>
<h2 id="二-快速入门" tabindex="-1"><a class="header-anchor" href="#二-快速入门" aria-hidden="true">#</a> 二. 快速入门</h2>
<h3 id="_2-1-创建mybatis" tabindex="-1"><a class="header-anchor" href="#_2-1-创建mybatis" aria-hidden="true">#</a> 2.1 创建mybatis</h3>
<p>maven安装依赖</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.5.7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-1-新建student表" tabindex="-1"><a class="header-anchor" href="#_2-1-1-新建student表" aria-hidden="true">#</a> 2.1.1 新建student表</h4>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>studen<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> 
<span class="token identifier"><span class="token punctuation">`</span>email<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> 
<span class="token identifier"><span class="token punctuation">`</span>age<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> 
<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">INNODB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-2-配置pom" tabindex="-1"><a class="header-anchor" href="#_2-1-2-配置pom" aria-hidden="true">#</a> 2.1.2 配置pom</h4>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencys</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.5.7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>8.0.26<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencys</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">></span></span>src/main/java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>directory</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">></span></span>**/*.properties<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">></span></span>**/*.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>includes</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtering</span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filtering</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-3-创建实体类目录下的student" tabindex="-1"><a class="header-anchor" href="#_2-1-3-创建实体类目录下的student" aria-hidden="true">#</a> 2.1.3 创建实体类目录下的Student</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>example<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-4-创建mapper目录下的studentmapper接口类" tabindex="-1"><a class="header-anchor" href="#_2-1-4-创建mapper目录下的studentmapper接口类" aria-hidden="true">#</a> 2.1.4 创建mapper目录下的StudentMapper接口类</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>example<span class="token punctuation">.</span>dao</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>example<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Student</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">StudentDao</span> <span class="token punctuation">{</span>
    <span class="token comment">//查询表中所有数据</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">></span></span> <span class="token function">selectStudents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">insertStudent</span><span class="token punctuation">(</span><span class="token class-name">Student</span> student<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-5-创建类路径mapper目录下的studentmapper-xml" tabindex="-1"><a class="header-anchor" href="#_2-1-5-创建类路径mapper目录下的studentmapper-xml" aria-hidden="true">#</a> 2.1.5 创建类路径mapper目录下的StudentMapper.xml</h4>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
        <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0/EN"</span>
        <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--约束文件--></span>


<span class="token comment">&lt;!--namespace：接口的全限定名--></span>
<span class="token comment">&lt;!--id：方法名--></span>
<span class="token comment">&lt;!--resultType：类的全限定名称--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.example.dao.StudentDao<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selectStudents<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.example.domain.Student<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            select * from student order by id  
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>insertStudent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            insert into student values(#{id},#{name},#{email},#{age})
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-6-创建config目录下的mybatisconfig主配置文件" tabindex="-1"><a class="header-anchor" href="#_2-1-6-创建config目录下的mybatisconfig主配置文件" aria-hidden="true">#</a> 2.1.6 创建config目录下的mybatisConfig主配置文件</h4>
<h4 id="_2-1-7-创建myapp类" tabindex="-1"><a class="header-anchor" href="#_2-1-7-创建myapp类" aria-hidden="true">#</a> 2.1.7 创建myApp类</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//查询操作</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> myApp <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
         <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> <span class="token class-name">MyBatisUtils</span><span class="token punctuation">.</span><span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> sqlID <span class="token operator">=</span> <span class="token string">"org.example.dao.StudentDao.selectStudents"</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">></span></span> studentsList <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span>sqlID<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Student</span> stu <span class="token operator">:</span> studentsList<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"查询到的数据"</span><span class="token operator">+</span>stu<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        sqlSession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



<span class="token comment">//插入操作</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> testinsert <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
        <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> <span class="token class-name">MyBatisUtils</span><span class="token punctuation">.</span><span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> sqlID <span class="token operator">=</span> <span class="token string">"org.example.dao.StudentDao.insertStudent"</span><span class="token punctuation">;</span>
        <span class="token class-name">Student</span> student1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        student1<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">1005</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        student1<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        student1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"张飞"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        student1<span class="token punctuation">.</span><span class="token function">setEmail</span><span class="token punctuation">(</span><span class="token string">"zf@qq.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> nums <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>sqlID<span class="token punctuation">,</span>student1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        sqlSession<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
        sqlSession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-8-创建工具类" tabindex="-1"><a class="header-anchor" href="#_2-1-8-创建工具类" aria-hidden="true">#</a> 2.1.8  创建工具类</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>example<span class="token punctuation">.</span>utils</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyBatisUtils</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span>  <span class="token class-name">SqlSessionFactory</span> factory <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> config <span class="token operator">=</span> <span class="token string">"mybatis.xml"</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">InputStream</span> in <span class="token operator">=</span> <span class="token class-name">Resources</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
           factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqlSessionFactoryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">SqlSession</span> <span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>factory<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            sqlSession <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sqlSession<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-dao代理" tabindex="-1"><a class="header-anchor" href="#三-dao代理" aria-hidden="true">#</a> 三. dao代理</h2>
<h3 id="_3-1-动态代理" tabindex="-1"><a class="header-anchor" href="#_3-1-动态代理" aria-hidden="true">#</a> 3.1 动态代理</h3>
<p>mybatis根据dao接口，创建一个dao接口的实现类，并创建这个类的对象</p>
<p>使用SqlSession.getMapper(dao接口.class)</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> prox <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> <span class="token class-name">MyBatisUtils</span><span class="token punctuation">.</span><span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StudentDao</span> dao <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">StudentDao</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">></span></span> students <span class="token operator">=</span> dao<span class="token punctuation">.</span><span class="token function">selectStudents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Student</span> stu<span class="token operator">:</span> students<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-传入参数" tabindex="-1"><a class="header-anchor" href="#_3-2-传入参数" aria-hidden="true">#</a> 3.2 传入参数</h3>
<p>从java代码中把数据传入到mapper文件的sql语句中</p>
<h4 id="_3-2-1-传一个简单参数" tabindex="-1"><a class="header-anchor" href="#_3-2-1-传一个简单参数" aria-hidden="true">#</a> 3.2.1 传一个简单参数</h4>
<p>在dao接口方法中写入一个参数，</p>
<p>在映射文件中select标签里，parameterType=&quot;java.lang.Integer&quot;</p>
<p>可以不写，因为反射机制会自动获取</p>
<p 任意字符="">在sql语句中写入 where id=#{id}，占位符： #</p>
<h4 id="_3-2-2-传多个参数" tabindex="-1"><a class="header-anchor" href="#_3-2-2-传多个参数" aria-hidden="true">#</a> 3.2.2 传多个参数</h4>
<p>接口中有两个参数，使用 @Param 命名参数</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">></span></span> selectMulitParam <span class="token punctuation">(</span> 
    <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"myname"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span>
    <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"myage"</span><span class="token punctuation">)</span> <span class="token class-name">Inter</span> age
<span class="token punctuation">)</span><span class="token punctuation">;</span>

select id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> email<span class="token punctuation">,</span> age from student where name<span class="token operator">=</span>#<span class="token punctuation">(</span>myname<span class="token punctuation">}</span> or age<span class="token operator">=</span>#<span class="token punctuation">{</span>myagel<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-3-传入对象" tabindex="-1"><a class="header-anchor" href="#_3-2-3-传入对象" aria-hidden="true">#</a> 3.2.3 传入对象</h4>
<p>创建新的类 或用原有的类 ,接口方法传参写对象</p>
<p paramName="">sql语句用占位符 里面直接加属性名 name=#</p>
<h4 id="_3-2-4-按位置传参" tabindex="-1"><a class="header-anchor" href="#_3-2-4-按位置传参" aria-hidden="true">#</a> 3.2.4 按位置传参</h4>
<p>按参数的位置传值</p>
<p arg0="">name = #</p>
<p arg1="">age = #</p>
<h4 id="_3-2-5-map传参" tabindex="-1"><a class="header-anchor" href="#_3-2-5-map传参" aria-hidden="true">#</a> 3.2.5 Map传参</h4>
<p>不建议使用</p>
<h3 id="_3-3-封装mybatis输出结果" tabindex="-1"><a class="header-anchor" href="#_3-3-封装mybatis输出结果" aria-hidden="true">#</a> 3.3 封装mybatis输出结果</h3>
<p>resuleType可以自定义返回类型</p>
<p>列名和属性名不一样时,要用resultMap(属性多)或者用as(属性较少)</p>
<h3 id="_3-4-模糊like" tabindex="-1"><a class="header-anchor" href="#_3-4-模糊like" aria-hidden="true">#</a> 3.4 模糊like</h3>
<p name="">sql语句    	where name like #</p>
<p>测试方法 	name=&quot;%李%&quot;</p>
<h2 id="四-动态sql" tabindex="-1"><a class="header-anchor" href="#四-动态sql" aria-hidden="true">#</a> 四. 动态sql</h2>
<h3 id="_4-1-概念" tabindex="-1"><a class="header-anchor" href="#_4-1-概念" aria-hidden="true">#</a> 4.1 概念</h3>
<p>sql的内容是变化的,可以根据条件获取到不同的sql语句</p>
<p>主要是where部分发生变化</p>
<h3 id="_4-2-使用mybatis的标签-if" tabindex="-1"><a class="header-anchor" href="#_4-2-使用mybatis的标签-if" aria-hidden="true">#</a> 4.2 使用mybatis的标签 <code v-pre>&lt;if&gt;</code></h3>
<p>if 语句注意拼接后是否符合sql语法</p>
<p>可以添加 where 1=1</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>&lt;select id= result=>
	select id,name from student
  where 1=1
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name !=null and name !='' <span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    and name = #{name}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    and age <span class="token entity named-entity" title="&gt;">&amp;gt;</span> #{age}
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-使用-where-标签" tabindex="-1"><a class="header-anchor" href="#_4-3-使用-where-标签" aria-hidden="true">#</a> 4.3  使用 <code v-pre>&lt;where&gt;</code> 标签</h3>
<p>可以防止 使用 <code v-pre>&lt;if&gt;</code> 标签造成的语法错误, 自动去掉多余的 <code v-pre>or</code>   <code v-pre>and</code></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>&lt;select id= result=>
    select id,name from student
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>where</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name !=null and name !='' <span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          	and name = #{name}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          	and age <span class="token entity named-entity" title="&gt;">&amp;gt;</span> #{age}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>where</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-使用-foreach-标签" tabindex="-1"><a class="header-anchor" href="#_4-4-使用-foreach-标签" aria-hidden="true">#</a> 4.4 使用 <code v-pre>&lt;foreach&gt;</code> 标签</h3>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>&lt;select id= result=>
    select id,name from student where id in
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foreach</span> <span class="token attr-name">cpllection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list<span class="token punctuation">"</span></span> <span class="token attr-name">item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myid<span class="token punctuation">"</span></span> <span class="token attr-name">open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(<span class="token punctuation">"</span></span> <span class="token attr-name">close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>)<span class="token punctuation">"</span></span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>,<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    		#{myid}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>foreach</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-sql代码片段复用" tabindex="-1"><a class="header-anchor" href="#_4-5-sql代码片段复用" aria-hidden="true">#</a> 4.5 sql代码片段复用</h3>
<p>首先定义sql片段</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sql</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id的值<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sql</span><span class="token punctuation">></span></span>


在select中复用sql片段
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span><span class="token punctuation">></span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span> <span class="token attr-name">refid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id的值<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    .......
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-配置文件" tabindex="-1"><a class="header-anchor" href="#五-配置文件" aria-hidden="true">#</a> 五. 配置文件</h2>
<h3 id="_5-1-主配置文件" tabindex="-1"><a class="header-anchor" href="#_5-1-主配置文件" aria-hidden="true">#</a> 5.1 主配置文件</h3>
<p>settings里的所有设置</p>
<p>mybatis内定义的别名</p>
<p>JDBC参数表示mybatis底层调用是JDBC中的对象，MANAGED是委托给其他容器，比如服务器软件或者spring框架</p>
<p>POOLED参数，使用连接池，UPOOLED不使用连接池</p>
<h3 id="_5-2-数据库属性配置文件" tabindex="-1"><a class="header-anchor" href="#_5-2-数据库属性配置文件" aria-hidden="true">#</a> 5.2 数据库属性配置文件</h3>
<p>jdbc.yml</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">jdbc</span><span class="token punctuation">:</span>
	<span class="token key atrule">driver</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
	<span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/wl<span class="token punctuation">?</span>serverTimezone=Asia/Shanghai
  <span class="token key atrule">username</span><span class="token punctuation">:</span> root
  <span class="token key atrule">password</span><span class="token punctuation">:</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六-扩展" tabindex="-1"><a class="header-anchor" href="#六-扩展" aria-hidden="true">#</a> 六. 扩展</h2>
<p>6.1 PageHelper 分页插件</p>
<p>6.1.1 添加maven坐标</p>
<p>6.1.2 加入plugin配置</p>
<p>6.1.3 创建对象</p>
</div></template>
