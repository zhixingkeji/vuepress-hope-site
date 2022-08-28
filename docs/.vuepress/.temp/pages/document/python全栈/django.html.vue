<template><div><h2 id="第1章-django-简介" tabindex="-1"><a class="header-anchor" href="#第1章-django-简介" aria-hidden="true">#</a> 第1章 Django 简介</h2>
<h3 id="_1-1-django概念" tabindex="-1"><a class="header-anchor" href="#_1-1-django概念" aria-hidden="true">#</a> 1.1 Django概念</h3>
<h3 id="_1-2-项目结构" tabindex="-1"><a class="header-anchor" href="#_1-2-项目结构" aria-hidden="true">#</a> 1.2 项目结构</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>study_django<span class="token operator">/</span><span class="token punctuation">.</span>
├── manage<span class="token punctuation">.</span>py	<span class="token comment"># 管理文件</span>
├── myapp	 <span class="token comment"># 项目的app </span>
│   ├── __init__<span class="token punctuation">.</span>py
│   ├── admin<span class="token punctuation">.</span>py  <span class="token comment"># 默认的后台管理功能 </span>
│   ├── apps<span class="token punctuation">.</span>py  <span class="token comment"># 启动类</span>
│   ├── migrations <span class="token comment"># 数据库字段变更记录</span>
│   │   └── __init__<span class="token punctuation">.</span>py
│   ├── models<span class="token punctuation">.</span>py   <span class="token comment"># 对应数据库实体类</span>
│   ├── tests<span class="token punctuation">.</span>py  <span class="token comment"># 单元测试</span>
│   └── views<span class="token punctuation">.</span>py  <span class="token comment"># 视图函数,对应路由</span>
│ 
├── study_django 	<span class="token comment"># 与项目路径同名</span>
│   ├── __init__<span class="token punctuation">.</span>py  
│   ├── asgi<span class="token punctuation">.</span>py   <span class="token comment"># 异步请求</span>
│   ├── settings<span class="token punctuation">.</span>py  <span class="token comment"># 配置</span>
│   ├── urls<span class="token punctuation">.</span>py  <span class="token comment"># 路由对应关系</span>
│   └── wsgi<span class="token punctuation">.</span>py  <span class="token comment"># 同步请求</span>
└── templates  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-app概念" tabindex="-1"><a class="header-anchor" href="#_1-3-app概念" aria-hidden="true">#</a> 1.3 app概念</h3>
<p>类似于springcould的微服务, 普通项目一般只有一个app</p>
<h2 id="第2章-django-项目搭建" tabindex="-1"><a class="header-anchor" href="#第2章-django-项目搭建" aria-hidden="true">#</a> 第2章 Django 项目搭建</h2>
<h3 id="_2-1-原始环境搭建" tabindex="-1"><a class="header-anchor" href="#_2-1-原始环境搭建" aria-hidden="true">#</a> 2.1 原始环境搭建</h3>
<p>安装django</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>conda <span class="token function">install</span> django
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建项目</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>django-admin startproject myproject
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建app</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>python manage.py startapp app01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-高级环境搭建" tabindex="-1"><a class="header-anchor" href="#_2-2-高级环境搭建" aria-hidden="true">#</a> 2.2 高级环境搭建</h3>
<p>使用pycharm专业版 ,  创建 Django 项目即可 , 自动安装依赖</p>
<h3 id="_2-3-快速上手" tabindex="-1"><a class="header-anchor" href="#_2-3-快速上手" aria-hidden="true">#</a> 2.3 快速上手</h3>
<p><strong>注册app</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># 项目名/同名文件夹/settings.py</span>
INSTALLED_APPS <span class="token operator">=</span> <span class="token punctuation">[</span>

   <span class="token comment"># myapp下的apps.py里的class类名MyappConfig</span>
  <span class="token string">'myapp.apps.MyappConfig'</span><span class="token punctuation">,</span>  

<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编写路由</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># 项目名/同名文件夹/urls.py</span>
<span class="token keyword">from</span> myapp <span class="token keyword">import</span> views

urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment"># path('admin/', admin.site.urls),</span>
    path<span class="token punctuation">(</span><span class="token string">'index/'</span><span class="token punctuation">,</span>views<span class="token punctuation">.</span>index<span class="token punctuation">)</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编写视图函数</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># 项目名/app名/views.py</span>
<span class="token keyword">from</span> django<span class="token punctuation">.</span>http <span class="token keyword">import</span> HttpResponse

<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> HttpResponse<span class="token punctuation">(</span><span class="token string">"欢迎使用"</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>启动项目</strong></p>
<p>pycharm专业版直接点运行即可</p>
<p>命令行启动</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>python manage.py runserver <span class="token number">8000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="第3章-基本功能" tabindex="-1"><a class="header-anchor" href="#第3章-基本功能" aria-hidden="true">#</a> 第3章 基本功能</h2>
<h3 id="_3-1-视图模板" tabindex="-1"><a class="header-anchor" href="#_3-1-视图模板" aria-hidden="true">#</a> 3.1 视图模板</h3>
<p><strong>返回视图模板</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># views.py</span>

<span class="token keyword">def</span> <span class="token function">index_page</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span><span class="token string">"user_list.html"</span><span class="token punctuation">)</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创建模板</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code># 项目路径/myapp/templates/user_list.html

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>我是视图模板<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong></p>
<p>寻找模板时不是只找本app下的templates文件, 而已根据注册的app的顺序, 逐个寻找templates文件</p>
<h3 id="_3-2-静态文件" tabindex="-1"><a class="header-anchor" href="#_3-2-静态文件" aria-hidden="true">#</a> 3.2 静态文件</h3>
<p>类似flask , 在 app下面创建 static 文件夹</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>项目名/app名/static

static
	/js
	/css
	/img
	/lib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件里默认</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># settings.py</span>
STATIC_URL <span class="token operator">=</span> <span class="token string">'/static/'</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在视图模板中使用</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>{% load static %} 

<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>我是视图模板<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{% static 'img/logo.png' %}<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-模板语法" tabindex="-1"><a class="header-anchor" href="#_3-3-模板语法" aria-hidden="true">#</a> 3.3 模板语法</h3>
<p>传值给视图模板</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">index_data</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    user <span class="token operator">=</span> <span class="token string">"wl"</span>
    user_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"zhang3"</span><span class="token punctuation">,</span><span class="token string">"li4"</span><span class="token punctuation">,</span><span class="token string">"wang5"</span><span class="token punctuation">]</span>
    user_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"hehe"</span><span class="token punctuation">,</span>
      <span class="token string">"salary"</span><span class="token punctuation">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    
    
    <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">"user_list.html"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token string">"user"</span><span class="token punctuation">:</span> user<span class="token punctuation">,</span>
      <span class="token string">"userlist"</span><span class="token punctuation">:</span> user_list<span class="token punctuation">,</span>
      <span class="token string">"userdict"</span><span class="token punctuation">:</span> user_dict
    
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字符串</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ user }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>列表</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ userlist.0 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ userlist.1 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ userlist.2 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字典</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ userdict.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ userdict.salary }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>if</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>{% if user == "wl" %}
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>哈哈<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
{% elif user == "lele" %}
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>噗噗<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
{% else %}
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>呵呵<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
{% endif %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
	{% for k,v in n3.items %}        
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span> {{ k }} = {{ v }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  {% endfor %}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>

# dict.values
# dict.keys
# dict.items
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-请求和响应" tabindex="-1"><a class="header-anchor" href="#_3-4-请求和响应" aria-hidden="true">#</a> 3.4 请求和响应</h3>
<p>request 参数</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>request.method
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取表单数据</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>request.get("user")
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重定向</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">return</span> redirect<span class="token punctuation">(</span><span class="token string">"http://www.baidu.com"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-5-跨域配置" tabindex="-1"><a class="header-anchor" href="#_3-5-跨域配置" aria-hidden="true">#</a> 3.5 跨域配置</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>{% csrf_token %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="第4章-数据库" tabindex="-1"><a class="header-anchor" href="#第4章-数据库" aria-hidden="true">#</a> 第4章 数据库</h2>
<h3 id="_4-1-连接数据库" tabindex="-1"><a class="header-anchor" href="#_4-1-连接数据库" aria-hidden="true">#</a> 4.1 连接数据库</h3>
<p>安装模块</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>conda <span class="token function">install</span> mysqlclient
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>手动创建数据库</p>
<p>settings配置数据源</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>DATABASES <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token string">'default'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
		<span class="token string">'ENGINE'</span><span class="token punctuation">:</span><span class="token string">'django.db.backends.mysql'</span><span class="token punctuation">,</span>
    <span class="token string">'NAME'</span><span class="token punctuation">:</span> <span class="token string">'study-django'</span><span class="token punctuation">,</span>
    <span class="token string">'USER'</span><span class="token punctuation">:</span> <span class="token string">'root'</span><span class="token punctuation">,</span>
    <span class="token string">'PASSWORD'</span><span class="token punctuation">:</span><span class="token string">'wangle2018'</span><span class="token punctuation">,</span>
    <span class="token string">'HOST'</span><span class="token punctuation">:</span><span class="token string">'127.0.0.1'</span><span class="token punctuation">,</span>
    <span class="token string">'PORT'</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>操作表</p>
<p>​</p>
<h3 id="_4-2-增删改查" tabindex="-1"><a class="header-anchor" href="#_4-2-增删改查" aria-hidden="true">#</a> 4.2 增删改查</h3>
<h2 id="第5章-高级功能" tabindex="-1"><a class="header-anchor" href="#第5章-高级功能" aria-hidden="true">#</a> 第5章 高级功能</h2>
</div></template>
