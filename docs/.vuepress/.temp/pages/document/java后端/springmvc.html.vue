<template><div><h2 id="第1章-spring-mvc概述" tabindex="-1"><a class="header-anchor" href="#第1章-spring-mvc概述" aria-hidden="true">#</a> 第1章 Spring MVC概述</h2>
<h3 id="_1-1-概述" tabindex="-1"><a class="header-anchor" href="#_1-1-概述" aria-hidden="true">#</a> 1.1 概述</h3>
<p>springMVC是基于spring的一个框架，实际上是专门做web开发的模块</p>
<p>底层是servlet，使开发更方便</p>
<h3 id="_1-2-入门案例" tabindex="-1"><a class="header-anchor" href="#_1-2-入门案例" aria-hidden="true">#</a> 1.2 入门案例</h3>
<p>需求：</p>
<p>用户在页面发起一个请求，请求交给springmvc的控制器对象</p>
<p>并显示请求的处理结果（在结果页面显示一个欢迎语句）</p>
<h4 id="_1-2-1-新建web-maven工程" tabindex="-1"><a class="header-anchor" href="#_1-2-1-新建web-maven工程" aria-hidden="true">#</a> 1.2.1 新建web maven工程</h4>
<h4 id="_1-2-2-加入依赖" tabindex="-1"><a class="header-anchor" href="#_1-2-2-加入依赖" aria-hidden="true">#</a> 1.2.2 加入依赖</h4>
<h4 id="_1-2-3-web-xml中注册dispatcherservlet" tabindex="-1"><a class="header-anchor" href="#_1-2-3-web-xml中注册dispatcherservlet" aria-hidden="true">#</a> 1.2.3 web.xml中注册DispatcherServlet</h4>
<p>DispatcherServlet叫做中央调度器，是一个servlet，它的父类是继承HttpServlet</p>
<p>DispatcherServlet页叫做前端控制器（front controller ）</p>
<p>DispatcherServlet负责接收用户提交的请求，调用其它的控制器对象，并把请求的处理结果显示给用户</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>web-app</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://xmlns.jcp.org/xml/ns/javaee<span class="token punctuation">"</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://xmlns.jcp.org/xml/ns/javaee
          http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd<span class="token punctuation">"</span></span>
         <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">></span></span>myweb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">></span></span>org.springframework.web.servlet.DispatcherServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-class</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>init-param</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">></span></span>contextConfigLocation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">></span></span>classpath:springmvc.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>init-param</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>load-on-startup</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>load-on-startup</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-mapping</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">></span></span>myweb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">></span></span>*.do<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-mapping</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>web-app</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-4-创建一个发起请求的页面index-jsp" tabindex="-1"><a class="header-anchor" href="#_1-2-4-创建一个发起请求的页面index-jsp" aria-hidden="true">#</a> 1.2.4 创建一个发起请求的页面index.jsp</h4>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
        &lt;h1&gt;第一个springmvc项目lele&lt;/h1&gt;
        &lt;p&gt;&lt;a href=&quot;some.do&quot;&gt;发起some.do的请求&lt;/a&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-5-创建控制器类" tabindex="-1"><a class="header-anchor" href="#_1-2-5-创建控制器类" aria-hidden="true">#</a> 1.2.5 创建控制器类</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Controller</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ModelAndView</span></span><span class="token punctuation">;</span>

<span class="token comment">//处理器对象</span>
<span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/some.do"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">doSome</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ModelAndView</span> mv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModelAndView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">"msg"</span><span class="token punctuation">,</span><span class="token string">"欢迎使用springmvc做web开发"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">"fun"</span><span class="token punctuation">,</span><span class="token string">"执行的是doSome方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        mv<span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">"/show.jsp"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> mv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-6-响应结果的页面" tabindex="-1"><a class="header-anchor" href="#_1-2-6-响应结果的页面" aria-hidden="true">#</a> 1.2.6 响应结果的页面</h4>
<p>创建一个作为结果的jsp，显示请求的处理结果</p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h3&gt;show.jsp&lt;/h3&gt;
    &lt;h3&gt;msg:${msg}&lt;/h3&gt;&lt;br&gt;
    &lt;h3&gt;fun:${fun}&lt;/h3&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-7-创建springmvc的配置文件" tabindex="-1"><a class="header-anchor" href="#_1-2-7-创建springmvc的配置文件" aria-hidden="true">#</a> 1.2.7 创建springmvc的配置文件</h4>
<p>注意踩坑 tomcat版本和servlet版本要对应</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/beans<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/context<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/beans 
       http://www.springframework.org/schema/beans/spring-beans.xsd 
       http://www.springframework.org/schema/context 
       https://www.springframework.org/schema/context/spring-context.xsd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.example.controller<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第2章-注解式开发" tabindex="-1"><a class="header-anchor" href="#第2章-注解式开发" aria-hidden="true">#</a> 第2章 注解式开发</h2>
<h2 id="第3章-框架整合" tabindex="-1"><a class="header-anchor" href="#第3章-框架整合" aria-hidden="true">#</a> 第3章 框架整合</h2>
<h2 id="第4章-核心技术" tabindex="-1"><a class="header-anchor" href="#第4章-核心技术" aria-hidden="true">#</a> 第4章 核心技术</h2>
<h3 id="_4-1-请求重定向和转发" tabindex="-1"><a class="header-anchor" href="#_4-1-请求重定向和转发" aria-hidden="true">#</a> 4.1 请求重定向和转发</h3>
<h3 id="_4-2-异常处理" tabindex="-1"><a class="header-anchor" href="#_4-2-异常处理" aria-hidden="true">#</a> 4.2 异常处理</h3>
<h3 id="_4-3-拦截器" tabindex="-1"><a class="header-anchor" href="#_4-3-拦截器" aria-hidden="true">#</a> 4.3 拦截器</h3>
<h2 id="第5章-restful-风格" tabindex="-1"><a class="header-anchor" href="#第5章-restful-风格" aria-hidden="true">#</a> 第5章 restful 风格</h2>
<h3 id="_5-1-简介" tabindex="-1"><a class="header-anchor" href="#_5-1-简介" aria-hidden="true">#</a> 5.1 简介</h3>
<p>1.目的</p>
<p>简化网址名称</p>
<p>隐藏请求目的</p>
<p>2.通过行为区分同一链接</p>
<p>查询 GET</p>
<p>添加 POST</p>
<p>修改 PUT</p>
<p>删除 DELETE</p>
<p>3.演示</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//通过method修改请求方法</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">"/users/{id}"</span><span class="token punctuation">,</span>method<span class="token operator">=</span><span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">DELETE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token comment">//通过PathVariable获取路径变量,需要有{}占位符</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> delete <span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user delete:"</span> <span class="token operator">+</span> id<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-简化注解" tabindex="-1"><a class="header-anchor" href="#_5-2-简化注解" aria-hidden="true">#</a> 5.2 简化注解</h3>
<p>在类上使用@RestController,其下面所有方法都是接收json数据</p>
<p>在类上使用@RequestMapping(&quot;/books&quot;), 省略在所有方法上</p>
<p>在方法上使用@PostMapping代替method=Request.POST</p>
</div></template>
