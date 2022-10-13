<template><div><h2 id="第1章-react-入门" tabindex="-1"><a class="header-anchor" href="#第1章-react-入门" aria-hidden="true">#</a> 第1章 React 入门</h2>
<h3 id="_1-1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-介绍" aria-hidden="true">#</a> 1.1 介绍</h3>
<p>1）由 facebook 开源</p>
<p>2）用于动态构建用户界面的 JS 库</p>
<h3 id="_1-2-特点" tabindex="-1"><a class="header-anchor" href="#_1-2-特点" aria-hidden="true">#</a> 1.2 特点</h3>
<p>1）声明式编码</p>
<p>2）组件化编码</p>
<p>3）高效 Diffing 算法</p>
<p>4）原生应用 React Native</p>
<h3 id="_1-3-基本使用" tabindex="-1"><a class="header-anchor" href="#_1-3-基本使用" aria-hidden="true">#</a> 1.3 基本使用</h3>
<p>npm配置源</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>//脚手架创建项目时会特别慢,因为很多依赖都在外网,需要换成国内镜像源
//设置npm镜像源
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org

//查看npm镜像源
<span class="token function">npm</span> config get registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>npm升级</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>//安装 n 
<span class="token function">npm</span> i <span class="token parameter variable">-g</span> n <span class="token parameter variable">--force</span>

//升级到稳定版本
<span class="token function">sudo</span> n <span class="token parameter variable">--stable</span>

//升级到最新版
n latest

//升级到指定版本
n <span class="token number">10.0</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚手架安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>//安装node 
<span class="token function">node</span> <span class="token parameter variable">-v</span>

//安装cnpm,并且设置镜像源
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> cnpm <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npm.taobao.org

//全局安装react脚手架
<span class="token function">sudo</span> cnpm <span class="token function">install</span> <span class="token parameter variable">-g</span> create-react-app

//创建项目
create-react-app react-study

//启动项目
<span class="token function">npm</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-虚拟dom" tabindex="-1"><a class="header-anchor" href="#_1-4-虚拟dom" aria-hidden="true">#</a> 1.4 虚拟DOM</h3>
<h3 id="_1-5-react-jsx" tabindex="-1"><a class="header-anchor" href="#_1-5-react-jsx" aria-hidden="true">#</a> 1.5 React JSX</h3>
<h4 id="_1-5-1-语法" tabindex="-1"><a class="header-anchor" href="#_1-5-1-语法" aria-hidden="true">#</a> 1.5.1 语法</h4>
<p>使用变量时 用单花括号</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>myid<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>class 更名为 className</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>内联样式 style 要用 双花括号</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span><span class="token string">'white'</span><span class="token punctuation">,</span><span class="token literal-property property">fontSize</span><span class="token operator">:</span><span class="token string">'20px'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>只能有一个根标签, 标签必须闭合</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
	// 代码...
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>标签首字母小写会从html语法里寻找对应标签, 首字母大写会搜索React组件</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>good</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>good</span><span class="token punctuation">></span></span>  <span class="token comment">//报错,html语法里没有该标签</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span> <span class="token comment">//创建html标签</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Good</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Good</span></span><span class="token punctuation">></span></span>  <span class="token comment">//创建组件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组自动遍历, 传入对象会报错</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span><span class="token string">'b'</span><span class="token punctuation">,</span><span class="token string">'c'</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'wl'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>  <span class="token comment">// 结果 abc</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>obj<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>   <span class="token comment">// 结果 报错</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以写表达式 不能写语句</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
	</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token plain-text">  // 大括号中可以写表达式
    
    </span><span class="token punctuation">{</span><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token plain-text">  // 大括号中不能写语句
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注释的写法 要在外面加一层大括号</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token punctuation">{</span><span class="token comment">/* 注释的内容 */</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-5-2-区分表达式和语句" tabindex="-1"><a class="header-anchor" href="#_1-5-2-区分表达式和语句" aria-hidden="true">#</a> 1.5.2 区分表达式和语句</h4>
<p>表达式 : 左侧可以接值 , 包括函数调用 , 定义函数</p>
<p>语句 :  包括 if  for  switch 等流程控制语句</p>
<h4 id="_1-5-3-遍历一个数组实例" tabindex="-1"><a class="header-anchor" href="#_1-5-3-遍历一个数组实例" aria-hidden="true">#</a> 1.5.3 遍历一个数组实例</h4>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span><span class="token string">'b'</span><span class="token punctuation">,</span><span class="token string">'c'</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> <span class="token constant">VDOM</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
  	</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>
        data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-模块化与组件化" tabindex="-1"><a class="header-anchor" href="#_1-6-模块化与组件化" aria-hidden="true">#</a> 1.6 模块化与组件化</h3>
<p>模块: 一个业务逻辑 ,  放在一个js文件里</p>
<p>组件: 所有实现某个功能的 html , css , js , 图片 , 字体 , 音视频等资源的集合, 构成一个组件</p>
<p>模块化: 当应用的 js 都以模块来编写, 这个应用就是模块化的应用</p>
<p>组件化: 当应用多是以组件来编写, 这个应用就是组件化的应用</p>
<h2 id="第2章-react-组件化" tabindex="-1"><a class="header-anchor" href="#第2章-react-组件化" aria-hidden="true">#</a> 第2章 React 组件化</h2>
<h3 id="_2-1-开发者工具" tabindex="-1"><a class="header-anchor" href="#_2-1-开发者工具" aria-hidden="true">#</a> 2.1 开发者工具</h3>
<p>谷歌浏览器下载 react开发工具</p>
<h3 id="_2-2-函数式组件和类式组件" tabindex="-1"><a class="header-anchor" href="#_2-2-函数式组件和类式组件" aria-hidden="true">#</a> 2.2 函数式组件和类式组件</h3>
<h4 id="_2-2-1-函数式组件" tabindex="-1"><a class="header-anchor" href="#_2-2-1-函数式组件" aria-hidden="true">#</a> 2.2.1 函数式组件</h4>
<p>函数定义的组件适用于简单组件</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//创建函数式组件</span>
<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">//函数里的this是undifind，因为babel开启严格模式编译</span>
	consolo<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">我是函数式组件</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span>

<span class="token comment">//渲染组件到页面</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyComponent</span></span><span class="token punctuation">/></span></span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'text'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">//首先react解析标签,找到该组件</span>
<span class="token comment">//发现是函数式组件,调用该函数,将返回的虚拟dom转换为真实dom,呈现在页面里</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-类式组件" tabindex="-1"><a class="header-anchor" href="#_2-2-2-类式组件" aria-hidden="true">#</a> 2.2.2 类式组件</h4>
<p>类式组件适用于复杂组件</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//创建类式组件</span>
<span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
  <span class="token comment">//render放在组件的原型对象上,供实例使用</span>
	<span class="token comment">//render中的this指向组建的实例对象</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">//组件实例对象</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">我是类组件</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>	
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//渲染组件到页面</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyComponent</span></span><span class="token punctuation">/></span></span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'text'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">//首先react解析标签,找到该组件</span>
<span class="token comment">//发现是类式组件,new出该组件实例,通过实例调用到原型上的render方法</span>
<span class="token comment">//将render返回的虚拟dom转换为真实dom,呈现在页面里</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-组件实例的三大属性-state" tabindex="-1"><a class="header-anchor" href="#_2-3-组件实例的三大属性-state" aria-hidden="true">#</a> 2.3 组件实例的三大属性 state</h3>
<p>使用构造器的方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//通过点击 使页面的文字更改</span>
<span class="token keyword">class</span> <span class="token class-name">Weather</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
  
  <span class="token comment">//构造器 new一次组件实例调用1次</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    
    <span class="token comment">//初始化状态</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">isHot</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">wind</span><span class="token operator">:</span> <span class="token string">'微风'</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">//react内部new的实例 获取不到this</span>
    <span class="token comment">//解决函数内this指向为undifind问题</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>changeWeather <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">changeWeather</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    
  <span class="token punctuation">}</span>
  
  
  <span class="token comment">//渲染次数:1+n次 初始化1次,更新几次数据调用几次render</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>isHot<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token comment">//必须加this,只有实例上才有该方法,不然就是直接调用</span>
        <span class="token comment">//changeWeather作为onClick的回调调用,而不是通过实例调用</span>
        <span class="token comment">//相当于 一个指针引用了堆内的该对象,所以丢失this</span>
    	<span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeWeather<span class="token punctuation">}</span><span class="token operator">></span>
      今天天气很 <span class="token punctuation">{</span>isHot <span class="token operator">?</span> <span class="token string">'炎热'</span> <span class="token operator">:</span> <span class="token string">'凉爽'</span><span class="token punctuation">}</span>
 		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>	
   <span class="token punctuation">)</span><span class="token punctuation">}</span>
    
  <span class="token comment">//改变天气方法 </span>
   <span class="token comment">// render和构造器中的this指向是实例对象,但方法中会丢失this</span>
   <span class="token comment">// changeWeather是作为onClick回调,而不是通过实例调用的</span>
   <span class="token comment">// 类里默认开启了严格模式,this不允许指向window</span>
   
  <span class="token function">changeWeather</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//获取isHot变量</span>
  	<span class="token keyword">const</span> isHot <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isHot
    <span class="token comment">//通过react认可的方法进行修改,合并不是替换,不然state就只有被修改的属性了</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">isHot</span><span class="token operator">:</span> <span class="token operator">!</span>isHot<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Weather<span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不使用构造器的方法 简写模式</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//通过点击 使页面的文字更改</span>
<span class="token keyword">class</span> <span class="token class-name">Weather</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
    <span class="token comment">//简写state </span>
    <span class="token comment">//类里面可以直接用赋值语句</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">isHot</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span>
  
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>isHot<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeWeather<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      今天天气很</span><span class="token punctuation">{</span>isHot <span class="token operator">?</span> <span class="token string">'炎热'</span> <span class="token operator">:</span> <span class="token string">'凉爽'</span><span class="token punctuation">}</span><span class="token plain-text">
			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>	
    	<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">//箭头函数 将该方法放到实例对象上</span>
	<span class="token function-variable function">changeWeather</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  	  <span class="token keyword">const</span> isHot <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isHot
      <span class="token comment">//setState方法是异步的,如果某些逻辑要在其之后调用,可以传入第二个参数, 一个回调回函,将要同步执行的内容放到函数里</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">isHot</span><span class="token operator">:</span> <span class="token operator">!</span>isHot<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
          <span class="token comment">//该回调函数内的逻辑是	同步的</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>isHot<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Weather</span></span><span class="token punctuation">/></span></span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-组件实例的三大属性-props" tabindex="-1"><a class="header-anchor" href="#_2-4-组件实例的三大属性-props" aria-hidden="true">#</a> 2.4 组件实例的三大属性 props</h3>
<h4 id="_1-展开运算符的复习" tabindex="-1"><a class="header-anchor" href="#_1-展开运算符的复习" aria-hidden="true">#</a> 1.展开运算符的复习</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//数组拼接</span>
<span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr1<span class="token punctuation">,</span>arr2<span class="token punctuation">]</span> <span class="token comment">// arr3 = [1,2,3,4,5,6,]</span>


<span class="token comment">//不定参函数</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>numbers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> numbers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span>current</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> pre <span class="token operator">+</span> current
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-批量传递props" tabindex="-1"><a class="header-anchor" href="#_2-批量传递props" aria-hidden="true">#</a> 2.批量传递props</h4>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
  
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>sex<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
      	</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">姓名: </span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">性别: </span><span class="token punctuation">{</span>sex<span class="token punctuation">}</span><span class="token plain-text"> </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">年龄: </span><span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token plain-text"> </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>    		
    	<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tom<span class="token punctuation">"</span></span> <span class="token attr-name">age</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">18</span><span class="token punctuation">}</span></span> <span class="token attr-name">sex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>女<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>


<span class="token comment">//模拟后台请求的数据</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">=</span><span class="token string">"tom"</span> age<span class="token operator">=</span><span class="token string">"18"</span> sex<span class="token operator">=</span><span class="token string">"女"</span><span class="token punctuation">}</span>
<span class="token comment">//使用展开运算符</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>p<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Person</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">//展开运算符不能展开对象, 没有itreater接口</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"wl"</span><span class="token punctuation">,</span> age<span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>obj<span class="token punctuation">}</span>
<span class="token comment">//复制对象并修改内容</span>
<span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>obj<span class="token punctuation">,</span>age<span class="token operator">=</span><span class="token number">14</span><span class="token punctuation">}</span>
<span class="token comment">//复制对象并新增内容</span>
<span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>obj<span class="token punctuation">,</span>address<span class="token operator">=</span><span class="token string">"北京"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-对props的限制" tabindex="-1"><a class="header-anchor" href="#_3-对props的限制" aria-hidden="true">#</a> 3.对props的限制</h4>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>sex<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
      	</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">姓名: </span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">性别: </span><span class="token punctuation">{</span>sex<span class="token punctuation">}</span><span class="token plain-text"> </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">年龄: </span><span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token plain-text"> </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>    		
    	<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Person<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//对某个参数类型的限制</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string
  
  <span class="token comment">//对某个参数是否为必填的限制</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">.</span>isRequired
  
  <span class="token comment">//限制参数为函数要写成func</span>
  <span class="token literal-property property">speak</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>func
<span class="token punctuation">}</span>

	

<span class="token comment">//若某个参数没有,显示为默认值</span>
Person<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">'不男不女'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tom<span class="token punctuation">"</span></span> <span class="token attr-name">age</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">18</span><span class="token punctuation">}</span></span> <span class="token attr-name">sex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>女<span class="token punctuation">"</span></span> <span class="token attr-name">spake</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>spake<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  conlose<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我说话了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-props的简写方式" tabindex="-1"><a class="header-anchor" href="#_4-props的简写方式" aria-hidden="true">#</a> 4.props的简写方式</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  
  <span class="token comment">//通过static修饰,为类的原型上添加属性</span>
	<span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  		<span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'不男不女'</span>
	<span class="token punctuation">}</span>
  
  <span class="token comment">//通过static修饰,为类的原型上添加属性</span>
	<span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  	<span class="token comment">//对某个参数类型的限制</span>
  		<span class="token literal-property property">name</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string
	<span class="token punctuation">}</span>
  
  
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>sex<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>ul<span class="token operator">></span>
      	<span class="token operator">&lt;</span>li<span class="token operator">></span>姓名<span class="token operator">:</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span>性别<span class="token operator">:</span> <span class="token punctuation">{</span>sex<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span>年龄<span class="token operator">:</span> <span class="token punctuation">{</span>age<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>    		
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Person name<span class="token operator">=</span><span class="token string">"tom"</span> age<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">18</span><span class="token punctuation">}</span> sex<span class="token operator">=</span><span class="token string">"女"</span> spake<span class="token operator">=</span><span class="token punctuation">{</span>spake<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-构造器与props" tabindex="-1"><a class="header-anchor" href="#_5-构造器与props" aria-hidden="true">#</a> 5.构造器与props</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//在构造器中传入props,在super中接收props,否则this.props为未定义</span>
<span class="token comment">//但原则上不使用构造器</span>
<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-函数式组件使用props" tabindex="-1"><a class="header-anchor" href="#_6-函数式组件使用props" aria-hidden="true">#</a> 6.函数式组件使用props</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>sex<span class="token punctuation">}</span> <span class="token operator">=</span> props
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token operator">&lt;</span>ul<span class="token operator">></span>
       <span class="token operator">&lt;</span>li<span class="token operator">></span>姓名<span class="token operator">:</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
       <span class="token operator">&lt;</span>li<span class="token operator">></span>性别<span class="token operator">:</span> <span class="token punctuation">{</span>sex<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
       <span class="token operator">&lt;</span>li<span class="token operator">></span>年龄<span class="token operator">:</span> <span class="token punctuation">{</span>age<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>    		
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//函数不能声明static,要在外面外挂属性</span>
Person<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span>PropTypes<span class="token punctuation">.</span>string
<span class="token punctuation">}</span>
Person<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
 	<span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">'不男不女'</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Person name<span class="token operator">=</span><span class="token string">"tom"</span> age<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">18</span><span class="token punctuation">}</span> sex<span class="token operator">=</span><span class="token string">"女"</span> spake<span class="token operator">=</span><span class="token punctuation">{</span>spake<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-组件实例的三大属性-refs与事件处理" tabindex="-1"><a class="header-anchor" href="#_2-5-组件实例的三大属性-refs与事件处理" aria-hidden="true">#</a> 2.5 组件实例的三大属性 refs与事件处理</h3>
<h4 id="_2-5-1-refs简介" tabindex="-1"><a class="header-anchor" href="#_2-5-1-refs简介" aria-hidden="true">#</a> 2.5.1 refs简介</h4>
<p>组件内的标签可以定义ref属性来标识自己</p>
<h4 id="_2-5-2-字符串形式ref-已经废弃" tabindex="-1"><a class="header-anchor" href="#_2-5-2-字符串形式ref-已经废弃" aria-hidden="true">#</a> 2.5.2 字符串形式ref (已经废弃)</h4>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//标识ref</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inp1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">></span></span>
<span class="token comment">//组件内获取ref</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>inp1<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>refs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-3-回调形式ref" tabindex="-1"><a class="header-anchor" href="#_2-5-3-回调形式ref" aria-hidden="true">#</a> 2.5.3 回调形式ref</h4>
<p>内联形式</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//currentNode为当前形参 使用任何名称都可以</span>
<span class="token comment">//input1 是为这个节点起的名字,react调用ref函数直接挂载到类的属性上</span>
<span class="token comment">//箭头函数this寻找到了该类的实例,指向了实例</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">currentNode</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>input1 <span class="token operator">=</span> currentNode<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">></span></span>

<span class="token comment">//在类上直接通过this接受</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>input1<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>内联形式在更新时会调用两次</p>
<p>第一次先传入一个null , 第二次才传入节点</p>
<p>解决办法</p>
<p>类绑定的回调  在类上定义方法</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//类内的方法</span>
<span class="token function-variable function">saveInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>input1 <span class="token operator">=</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//return里的</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>saveInput<span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-4-createref形式" tabindex="-1"><a class="header-anchor" href="#_2-5-4-createref形式" aria-hidden="true">#</a> 2.5.4 createRef形式</h4>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Dome</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
  <span class="token comment">//调用reactRef的api,会创建一个容器,专门存放一个ref节点</span>
  <span class="token comment">//用几个就要创建几个容器,只能保存一个,官方推荐</span>
  myRef1 <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  myRef2 <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  
  <span class="token comment">//展示数据 current是节点的key</span>
  <span class="token function-variable function">shouwData1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  	<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>myRef1<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function-variable function">shouwData12</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  	<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>myRef2<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token comment">//失去焦点提示数据</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">onBlur</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showData1<span class="token punctuation">}</span></span> 
        <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>myRef1<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>
      <span class="token comment">//点击后展示数据</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showData2<span class="token punctuation">}</span> 
        ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>myRef2<span class="token operator">></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-5-不要过度使用ref" tabindex="-1"><a class="header-anchor" href="#_2-5-5-不要过度使用ref" aria-hidden="true">#</a> 2.5.5 不要过度使用ref</h4>
<p>如果被调用的标签要展示的也是当前标签的内容 ,则可以省略ref</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Dome</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
  <span class="token comment">//通过传入event获取数据</span>
  <span class="token function-variable function">shouwData1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  	<span class="token function">alert</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token comment">//失去焦点提示数据</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">onBlur</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showData1<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不同标签间展示数据,也可以省略ref</p>
<p>使用受控组件</p>
<h3 id="_2-6-收集表单数据" tabindex="-1"><a class="header-anchor" href="#_2-6-收集表单数据" aria-hidden="true">#</a> 2.6 收集表单数据</h3>
<h4 id="_2-6-1-非受控组件" tabindex="-1"><a class="header-anchor" href="#_2-6-1-非受控组件" aria-hidden="true">#</a> 2.6.1 非受控组件</h4>
<p>现用现取</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Login</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
  
  <span class="token comment">//表单提交方法</span>
  <span class="token function-variable function">hadleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//阻止表单提交</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>username<span class="token punctuation">,</span>password<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    
    <span class="token comment">//取出来的是节点 需要.value获取值</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">你输入的用户名是:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>username<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,
    你输入的密码是:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>password<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> 
  
  <span class="token comment">//渲染</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>hadleSubmit<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        用户名:&lt;input ref=</span><span class="token punctuation">{</span> <span class="token parameter">c</span><span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>username <span class="token operator">=</span>c<span class="token punctuation">}</span><span class="token plain-text">
        type="text" name="username"}></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">></span></span><span class="token plain-text">
        
        密码:&lt;input ref=</span><span class="token punctuation">{</span> <span class="token parameter">c</span><span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>password <span class="token operator">=</span>c<span class="token punctuation">}</span><span class="token plain-text"> 
        type="text" name="password"}></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">></span></span><span class="token plain-text">
        
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">登录</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tom<span class="token punctuation">"</span></span> <span class="token attr-name">age</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">18</span><span class="token punctuation">}</span></span> <span class="token attr-name">sex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>女<span class="token punctuation">"</span></span> <span class="token attr-name">spake</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>spake<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-6-2-受控组件" tabindex="-1"><a class="header-anchor" href="#_2-6-2-受控组件" aria-hidden="true">#</a> 2.6.2 受控组件</h4>
<p>随着输入维护到状态中, 不需要ref , 推荐</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Login</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
  
  <span class="token comment">//初始化状态</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">''</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">//保存用户名到状态</span>
  <span class="token function-variable function">saveUsername</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">username</span><span class="token operator">:</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">//保存密码到状态</span>
   <span class="token function-variable function">savePassword</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">password</span><span class="token operator">:</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">//表单提交回调</span>
  <span class="token function-variable function">hadleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//阻止表单提交</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>username<span class="token punctuation">,</span>password<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
    <span class="token comment">//取出来的已经是值了 不需要.value</span>
     <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">你输入的用户名是:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>username<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,
    你输入的密码是:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>password<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> 
  
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>hadleSubmit<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        用户名:&lt;input onChange=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>saveUsername<span class="token punctuation">}</span><span class="token plain-text"> type="text" name="username"}></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">></span></span><span class="token plain-text">
        
        密码:&lt;input onChange=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>savePassword<span class="token punctuation">}</span><span class="token plain-text"> type="password" name="password"}></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">></span></span><span class="token plain-text">
        
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">登录</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Login</span></span><span class="token punctuation">/></span></span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-高阶函数和函数的柯里化" tabindex="-1"><a class="header-anchor" href="#_2-7-高阶函数和函数的柯里化" aria-hidden="true">#</a> 2.7 高阶函数和函数的柯里化</h3>
<p>1.高阶函数概念</p>
<p>如果一个函数符合下面规范中的任何一个,那就是高阶函数</p>
<p>若A函数接受的参数是一个函数,A就是高阶函数</p>
<p>若A函数调用的返回值依然是一个函数,A就是高阶函数</p>
<p>2.函数的柯里化</p>
<p>通过函数调用继续返回函数的方式, 实现多次接受参数最后统一处理的函数编码形式</p>
<p>3.使用了高阶函数和柯里化</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Login</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
  
  <span class="token comment">//初始化状态</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">''</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">//保存表单数据到状态中</span>
  <span class="token function-variable function">saveFormData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dataType</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">//在返回值返回一个真正的函数,则组件上可以调用该函数</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      <span class="token comment">//不加方括号,是字符串,等于多加了个dataType属性</span>
      <span class="token comment">//加上方括号,等于读变量,才是正常</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">[</span>dataType<span class="token punctuation">]</span><span class="token operator">:</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">//表单提交回调</span>
  <span class="token function-variable function">hadleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//阻止表单提交</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>username<span class="token punctuation">,</span>password<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
    <span class="token comment">//取出来的已经是值了 不需要.value</span>
     <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">你输入的用户名是:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>username<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,
    你输入的密码是:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>password<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> 
  
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>hadleSubmit<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        //如果加上小括号,则调用的是saveFormData函数的返回值
        //不加小括号是调用该函数,此处情况必须有小括号
     用户名:&lt;input onChange=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">saveFormData</span><span class="token punctuation">(</span><span class="token string">'username'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text"> type="text" name="username"}></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">></span></span><span class="token plain-text">
        
     密码:&lt;input onChange=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">saveFormData</span><span class="token punctuation">(</span><span class="token string">'password'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text"> type="password" name="password"}></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">></span></span><span class="token plain-text">
        
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">登录</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Login</span></span><span class="token punctuation">/></span></span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.不使用高阶函数和柯里化</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Login</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
  
  <span class="token comment">//初始化状态</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">''</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">//保存表单数据到状态中</span>
  <span class="token function-variable function">saveFormData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dataType<span class="token punctuation">,</span>event</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span> 
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">[</span>dataType<span class="token punctuation">]</span><span class="token operator">:</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">//表单提交回调</span>
  <span class="token function-variable function">hadleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//阻止表单提交</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>username<span class="token punctuation">,</span>password<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
    <span class="token comment">//取出来的已经是值了 不需要.value</span>
     <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">你输入的用户名是:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>username<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,
    你输入的密码是:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>password<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> 
  
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>hadleSubmit<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
       
     用户名:&lt;input onChange=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">saveFormData</span><span class="token punctuation">(</span><span class="token string">'username'</span><span class="token punctuation">,</span>event<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token plain-text"> type="text" name="username"}></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">></span></span><span class="token plain-text">
        
     密码:&lt;input onChange=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">saveFormData</span><span class="token punctuation">(</span><span class="token string">'password'</span><span class="token punctuation">,</span>event<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token plain-text"> type="password" name="password"}></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">></span></span><span class="token plain-text">
        
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">登录</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Login</span></span><span class="token punctuation">/></span></span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-8-组件生命周期" tabindex="-1"><a class="header-anchor" href="#_2-8-组件生命周期" aria-hidden="true">#</a> 2.8 组件生命周期</h3>
<p>1.完整生命周期</p>
<p>初始化阶段 ReactDom.render执行</p>
<p>constructor() → getDerivedStateFromProps → render → componentDidMount</p>
<p>更新阶段 调用this.setState或者父组件重新render触发</p>
<p>getDerivedStateFromProps → shouldComponentUpdatae → remder → getSnapshotBeforeUpdate → componntDidUpdate</p>
<p>卸载组件 由ReactDOM.unmountComponentAtNode触发</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token function-variable function">death</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  ReactDOM<span class="token punctuation">.</span><span class="token function">unmountComponentAtNode</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.重要钩子</p>
<p>render 初始化渲染和状态更新时调用</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token punctuation">{</span>
	<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>componentDidUpdate 组件更新后调用一次</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><p>componentDidMount 组件挂载后调用一次</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token punctuation">{</span>
	<span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>componentWillUnmount  组件卸载前调用一次</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.废弃钩子</p>
<p>componentWillMount</p>
<p>componentWillReceiveProps</p>
<p>componentWillUpdate</p>
<p>4.新增钩子</p>
<p>getDeruvedStateFromProps</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//若state的值在任何时候都取决于props,则可以使用该钩子</span>
<span class="token comment">//必须为静态方法,接受props和state参数</span>
<span class="token keyword">static</span> <span class="token function">getDerivedStateFromProps</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>state</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">//返回一个状态对象</span>
  <span class="token keyword">return</span> props
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>getSbapshotBeforeUpdate</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//在更新之前获取快照</span>
<span class="token function">getSbapshotBeforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token string">'atguigu'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-9-虚拟dom与diff算法" tabindex="-1"><a class="header-anchor" href="#_2-9-虚拟dom与diff算法" aria-hidden="true">#</a> 2.9 虚拟DOM与DIff算法</h3>
<p>虚拟DOM的最小力度是一个标签, 逐层对比, 只渲染发生改变的那层标签</p>
<p>key是虚拟DOM对象的表示, 在更新时有及其重要的作用</p>
<p>只是简单展示数据而不会删除或增加,可以使用index作为key</p>
<p>如果需要添加删除等操作, 使用index可能会大大降低效率, 破坏diff算法</p>
<h3 id="_2-10-所有组件通信方式总结" tabindex="-1"><a class="header-anchor" href="#_2-10-所有组件通信方式总结" aria-hidden="true">#</a> 2.10 所有组件通信方式总结</h3>
<p>父子组件 : props</p>
<p>兄弟组件 : pubsub , redux</p>
<p>祖孙组件 :  pubsub , redux , context</p>
<h2 id="第3章-react-应用" tabindex="-1"><a class="header-anchor" href="#第3章-react-应用" aria-hidden="true">#</a> 第3章 React 应用</h2>
<h3 id="_3-1-css样式模块化" tabindex="-1"><a class="header-anchor" href="#_3-1-css样式模块化" aria-hidden="true">#</a> 3.1 css样式模块化</h3>
<p>首先把 <code v-pre>index.css</code> 改名为 <code v-pre>index.module.css</code></p>
<p>在 <code v-pre>index.jsx</code> 中 <code v-pre>import aaa from './index.module.css'</code></p>
<p>在需要的标签内使用 <code v-pre>&lt;div classsName={aaa.xxx}&gt;&lt;/div&gt;</code></p>
<p><code v-pre>xxx</code> 是 css文件中的某个 <code v-pre>.xxx{样式}</code></p>
<p>一般很少用css模块化 , 基本上使用 less 或者 scss</p>
<h3 id="_3-2-案例-todolist" tabindex="-1"><a class="header-anchor" href="#_3-2-案例-todolist" aria-hidden="true">#</a> 3.2 案例 TodoList ?</h3>
<h2 id="第4章-react-ajax" tabindex="-1"><a class="header-anchor" href="#第4章-react-ajax" aria-hidden="true">#</a> 第4章 React ajax</h2>
<h3 id="_4-1-axios" tabindex="-1"><a class="header-anchor" href="#_4-1-axios" aria-hidden="true">#</a> 4.1 axios</h3>
<p>安装 axios</p>
<p><code v-pre>npm install axios</code></p>
<h3 id="_4-2-配置代理解决跨域" tabindex="-1"><a class="header-anchor" href="#_4-2-配置代理解决跨域" aria-hidden="true">#</a> 4.2 配置代理解决跨域</h3>
<p>1.跨域限制是ajax的限制, 比如3000端口向5000发送 , 发送成功但是返回数据时候被3000拦截 , 需要在中间加入一个3000端口代理, 代理使用的是请求转发而不是ajax引擎 , 所以不受跨域限制</p>
<p>2.如果只有一台服务器 ,可以在 package.json中配置proxy , 开启代理后,3000发送请求时 会先从自己的端口下寻找资源,如果找到了就不会再向5000请求, 所以可能请求到自己的数据</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token operator">...</span> 
  
  <span class="token comment">//最后一行</span>
  <span class="token string-property property">"proxy"</span><span class="token operator">:</span><span class="token string">"http://localhost:5000"</span>
<span class="token punctuation">}</span>

<span class="token comment">//服务器运行在5000端口上,代码请求要请求3000的接口,会自动转发到5000端口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.如果有多台服务器, 需要创建配置文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/setupProxy.js 注意这个名字必须是setupProxy </span>
<span class="token comment">// 注意该文件不能使用es6语法 要使用cjs语法</span>

<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http-proxy-middleware'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  app<span class="token punctuation">.</span>use<span class="token punctuation">{</span>
    
    <span class="token comment">//代理第一台服务器</span>
    <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token string">'/api1'</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
      <span class="token comment">//遇见/api1前缀的请求则转发到5000端口</span>
      <span class="token literal-property property">target</span><span class="token operator">:</span><span class="token string">'http://localhost:5000'</span><span class="token punctuation">,</span>
      <span class="token comment">//控制服务器收到的请求头中的Host的值</span>
      <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">//重写请求路径</span>
      <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string">'^/api1'</span><span class="token punctuation">,</span><span class="token string">''</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      
      <span class="token comment">//代理第二台服务器</span>
     <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token string">'/api1'</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
      <span class="token literal-property property">target</span><span class="token operator">:</span><span class="token string">'http://localhost:5001'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string">'^/api2'</span><span class="token punctuation">,</span><span class="token string">''</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



<span class="token comment">//react组件中的请求</span>
<span class="token comment">//由于匹配到api1字段了,请求自动转发给5001端口号</span>
<span class="token comment">//即新的请求地址为 http://localhost:5001/students</span>
<span class="token comment">//api1的位置要在端口号后</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/api1/students"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
	<span class="token parameter">response</span> <span class="token operator">=></span><span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-案例-github搜索" tabindex="-1"><a class="header-anchor" href="#_4-3-案例-github搜索" aria-hidden="true">#</a> 4.3 案例 github搜索  ?</h3>
<h3 id="_4-4-消息订阅与发布" tabindex="-1"><a class="header-anchor" href="#_4-4-消息订阅与发布" aria-hidden="true">#</a> 4.4 消息订阅与发布</h3>
<p>1.pubsub组件库安装</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//安装组件</span>
yarn add pubsub<span class="token operator">-</span>js

<span class="token comment">//引入组件</span>
<span class="token keyword">import</span> PubSub <span class="token keyword">from</span> <span class="token string">'pubsub-js'</span>
<span class="token comment">//commonJS风格引入组件</span>
<span class="token keyword">const</span> PubSub <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'pubsub-js'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.订阅消息的组件</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//组件挂载完毕后 开启订阅消息的函数 订阅名称为atguigu的消息</span>
<span class="token function">componenetDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>token <span class="token operator">=</span> PubSub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">"atguigu"</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    consolo<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//组件卸载前取消订阅</span>
<span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  PubSub<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>token<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.发布消息的组件</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//发布名为 atguigu的消息,后面是传递的消息对象,逗号分开</span>
PubSub<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">"atguigu"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">data1</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token literal-property property">data2</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第5章-react-router-dom" tabindex="-1"><a class="header-anchor" href="#第5章-react-router-dom" aria-hidden="true">#</a> 第5章 React-router-dom</h2>
<h3 id="_5-1-spa理解" tabindex="-1"><a class="header-anchor" href="#_5-1-spa理解" aria-hidden="true">#</a> 5.1 spa理解</h3>
<p>spa意思是单页面应用 , 只有一个完整的页面</p>
<p>不会刷新页面 , 只对局部更新</p>
<p>前端路由是路径匹配组件, 后端路由是路径匹配函数</p>
<p>安装针对web开发的库</p>
<p><code v-pre>yarn add react-router-dom</code></p>
<h3 id="_5-2-路由相关api" tabindex="-1"><a class="header-anchor" href="#_5-2-路由相关api" aria-hidden="true">#</a> 5.2 路由相关api</h3>
<p>内置组件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>BrowerRouter
HashRouter
Route
Redirect
Link
NavLink
Switch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>history 对象
match 对象
withRouter 函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hash 和 browser 路由的区别</p>
<p>hash刷新后会丢失state参数,但有时可以解决一些路径错误的问题</p>
<h3 id="_5-3-基本路由" tabindex="-1"><a class="header-anchor" href="#_5-3-基本路由" aria-hidden="true">#</a> 5.3 基本路由</h3>
<h4 id="_5-3-1-路由的基本使用" tabindex="-1"><a class="header-anchor" href="#_5-3-1-路由的基本使用" aria-hidden="true">#</a> 5.3.1 路由的基本使用</h4>
<p>给App开启路由</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//index.js</span>

<span class="token comment">//把 &lt;App/> 外侧包裹路由 就不用在组件内部重复写该标签了</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BrowserRouter</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span><span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">BrowserRouter</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
                document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件内的语法</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// app.jsx</span>

<span class="token comment">// 菜单栏组件</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
  //普通的link 没有点击高亮
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/about<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">About</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Home</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  
  //高级的link 多了个属性 可以设置点击时高亮
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NavLink</span></span> <span class="token attr-name">activeClassName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NavLink</span></span><span class="token punctuation">></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">/></span></span><span class="token plain-text">
  
  
//内容区展示不同组件
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/about<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">/></span></span><span class="token plain-text">
  
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-3-2-一般组件和路由组件" tabindex="-1"><a class="header-anchor" href="#_5-3-2-一般组件和路由组件" aria-hidden="true">#</a> 5.3.2 一般组件和路由组件</h4>
<p>一般组件写在 component 文件夹下, 使用时候用尖括号<code v-pre>&lt;Home/&gt;</code></p>
<p>路由组件写在 pages 文件夹下,使用时用路 由<code v-pre> &lt;Route component={Home}/&gt;</code></p>
<h4 id="_5-3-3-路由组件的三个重要属性" tabindex="-1"><a class="header-anchor" href="#_5-3-3-路由组件的三个重要属性" aria-hidden="true">#</a> 5.3.3 路由组件的三个重要属性</h4>
<p>history 包括 go , goBack , goForward , push , replace</p>
<p>location 包括 pathname , search , state</p>
<p>match 包括 params , path , url</p>
<h4 id="_5-3-4-封装navlink" tabindex="-1"><a class="header-anchor" href="#_5-3-4-封装navlink" aria-hidden="true">#</a> 5.3.4 封装NavLink</h4>
<p>自定义MyNavLink组件</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token punctuation">,</span><span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>NavLink<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">MyNavLink</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">(</span>
      <span class="token comment">//使用原始标签,配置好样式和激活样式</span>
      <span class="token comment">//展开props属性,里面包括children属性,是标签内的文本</span>
      <span class="token comment">//把children属性放到标签上,等于标签内容上写了文本</span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NavLink</span></span> <span class="token attr-name">activeClassName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myclass<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>class<span class="token punctuation">"</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span> 		   
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在其他组件内使用MyNavLink组件</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyNavLink</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/about<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">About</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MyNavLink</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5-3-5-switch组件" tabindex="-1"><a class="header-anchor" href="#_5-3-5-switch组件" aria-hidden="true">#</a> 5.3.5 switch组件</h4>
<p>如果多个Route组件, 并且一个路径如<code v-pre>/home</code>对应着多个组件 <code v-pre>Home</code> <code v-pre>Index</code>   ,  直到循环完所有Route,并且展示所有<code v-pre>/home</code>对应的组件</p>
<p>switch的作用是单一匹配, 找到 <code v-pre>/home</code> 路径对应的一个组件<code v-pre>Home</code>之后立刻停止寻找,即便下面还有对应的<code v-pre>Index</code>组件,也不会向下匹配路径,也不会展示该组件,提高效率</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/about<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Index<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Switch</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-3-6-样式丢失" tabindex="-1"><a class="header-anchor" href="#_5-3-6-样式丢失" aria-hidden="true">#</a> 5.3.6 样式丢失</h4>
<p>问题: 如果刷新, 多层路由路径错误,请求不到css, 会返回index.html</p>
<p>解决1: 用绝对路径</p>
<p><code v-pre>&lt;link ref=&quot;stylesheet&quot; href=&quot;/css/bootstrap.css&quot;&gt;</code></p>
<p>解决2: 使用特殊变量</p>
<p><code v-pre>&lt;link ref=&quot;stylesheet&quot; href=&quot;%PUBLIC_URL%/css/bootstrap.css&quot;&gt;</code></p>
<p>解决3: 使用哈希表路由</p>
<p>一般不使用, 哈希路由不美观</p>
<h4 id="_5-3-7-模糊匹配与严格匹配" tabindex="-1"><a class="header-anchor" href="#_5-3-7-模糊匹配与严格匹配" aria-hidden="true">#</a> 5.3.7 模糊匹配与严格匹配</h4>
<p>react 默认使用的是模糊匹配</p>
<p>严格匹配是路径必须完美匹配,不能多也不能少,必须一模一样才能匹配上</p>
<p>一般来说, 只有当遇到问题时才开启, 会导致无法匹配二级路由</p>
<p>为Route标签增加exact属性可开启</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">exact</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Index<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5-3-8-重定向" tabindex="-1"><a class="header-anchor" href="#_5-3-8-重定向" aria-hidden="true">#</a> 5.3.8 重定向</h4>
<p>重定向写在最后一个Route标签后, 任何路由都匹配不上的时候重定向</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/about<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Redirect</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/about<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Switch</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-嵌套路由" tabindex="-1"><a class="header-anchor" href="#_5-4-嵌套路由" aria-hidden="true">#</a> 5.4 嵌套路由</h3>
<p>注册子路由要写上父路由的path</p>
<p>路由的匹配是按照注册的顺序进行的</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home/message<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">消息</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">></span></span>

<span class="token comment">//注册子路由</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span><span class="token punctuation">></span></span><span class="token plain-text">
	</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home/news<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>News<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Route</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home/message<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Message<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Route</span></span><span class="token punctuation">></span></span><span class="token plain-text">
 
  //实现默认显示该路由 当路由是/home的时候 跟以上两个都匹配不到 
  //所以默认走下面的组件 可以实现默认显示该组件
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Redirect</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home/news<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Switch</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-路由传参" tabindex="-1"><a class="header-anchor" href="#_5-5-路由传参" aria-hidden="true">#</a> 5.5 路由传参</h3>
<h4 id="_5-5-1-通过params传参" tabindex="-1"><a class="header-anchor" href="#_5-5-1-通过params传参" aria-hidden="true">#</a> 5.5.1 通过params传参</h4>
<p>在父级路由组件传参</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//在导航栏向路由组件传递参数</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">to</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/home/message/detail/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">></span></span>

<span class="token comment">//在路由处声明参数</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home/message/detail/:id/:title<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Detail<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在子路由组件接受参数</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>id<span class="token punctuation">,</span>title<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>match<span class="token punctuation">.</span>prams
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5-5-2-通过search传参" tabindex="-1"><a class="header-anchor" href="#_5-5-2-通过search传参" aria-hidden="true">#</a> 5.5.2 通过search传参</h4>
<p>在父级路由组件传参</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//在导航栏向路由组件传递参数</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">to</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/home/message/detail/
?id=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;titile=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">></span></span>

<span class="token comment">//在路由处无需声明</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home/message/detail<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Detail<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在子路由组件接受参数</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>search<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>location
<span class="token comment">//截取掉问号</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>id<span class="token punctuation">,</span>title<span class="token punctuation">}</span> <span class="token operator">=</span> qs<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>search<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入qs库</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//qs库可以把key=value&amp;key=value转化为对象</span>
<span class="token keyword">import</span> qs <span class="token keyword">from</span> <span class="token string">'querystring'</span>

<span class="token comment">//把对象转化为URLencoded</span>
qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

<span class="token comment">//把URLencoded转化为对象</span>
qs<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-5-3-通过state传参" tabindex="-1"><a class="header-anchor" href="#_5-5-3-通过state传参" aria-hidden="true">#</a> 5.5.3 通过state传参</h4>
<p>params和search都会在地址栏显示参数不安全, state可以隐藏参数</p>
<p>在父级路由组件传参</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//在导航栏向路由组件传递参数</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">to</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">pathname</span><span class="token operator">:</span><span class="token string">"/home/message/detail"</span><span class="token punctuation">,</span><span class="token literal-property property">state</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span>obj<span class="token punctuation">.</span>id<span class="token punctuation">,</span><span class="token literal-property property">titile</span><span class="token operator">:</span>obj<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">></span></span>

<span class="token comment">//在路由处无需声明</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home/message/detail<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Detail<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在子路由组件接受参数</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>id<span class="token punctuation">,</span>title<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>location<span class="token punctuation">.</span>stat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-6多种路由跳转方式" tabindex="-1"><a class="header-anchor" href="#_5-6多种路由跳转方式" aria-hidden="true">#</a> 5.6多种路由跳转方式</h3>
<h4 id="_5-6-1-标签式路由导航" tabindex="-1"><a class="header-anchor" href="#_5-6-1-标签式路由导航" aria-hidden="true">#</a> 5.6.1 标签式路由导航</h4>
<p>push模式 压入路由可以后退</p>
<p>replace模式 替换顶部的记录</p>
<p>默认是push模式 , 开启replace需要在Link标签上声明</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">replace</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5-6-2-编程式路由导航" tabindex="-1"><a class="header-anchor" href="#_5-6-2-编程式路由导航" aria-hidden="true">#</a> 5.6.2 编程式路由导航</h4>
<p>1.后退, 前进, 跳转</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//后退函数</span>
<span class="token function-variable function">back</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//前进函数</span>
<span class="token function-variable function">forward</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">goForward</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//跳转指定函数</span>
<span class="token function-variable function">go</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.push 和 replace</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//push函数 + 携带params参数</span>
<span class="token function-variable function">pushShow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span>title</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
 <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
   <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/home/message/detail/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>  
<span class="token punctuation">}</span>

<span class="token comment">//replace函数 + 携带params参数</span>
<span class="token function-variable function">replaceShow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span>title</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
 <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>
   <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/home/message/detail/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>  
<span class="token punctuation">}</span>

<span class="token comment">//按钮调用方法</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">pushShow</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span>id<span class="token punctuation">,</span>obj<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">replaceShow</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span>id<span class="token punctuation">,</span>obj<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-6-3-一般组件的路由跳转" tabindex="-1"><a class="header-anchor" href="#_5-6-3-一般组件的路由跳转" aria-hidden="true">#</a> 5.6.3 一般组件的路由跳转</h4>
<p>只有路由组件才有 <code v-pre>history</code> 的方法 , 但是一般组件没有</p>
<p>需要 <code v-pre>withRouter</code> 进行封装一般组件 , 会给一般组件路由组件的特性</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token punctuation">,</span><span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>withRouter<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span>

<span class="token keyword">class</span> <span class="token class-name">Header</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>

<span class="token comment">//加工组件</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withRouter</span><span class="token punctuation">(</span>Header<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第6章-react-ui组件库" tabindex="-1"><a class="header-anchor" href="#第6章-react-ui组件库" aria-hidden="true">#</a> 第6章 React UI组件库</h2>
<h3 id="_6-1-material-ui-国外" tabindex="-1"><a class="header-anchor" href="#_6-1-material-ui-国外" aria-hidden="true">#</a> 6.1 material UI 国外</h3>
<h3 id="_6-2-ant-design-蚂蚁金服" tabindex="-1"><a class="header-anchor" href="#_6-2-ant-design-蚂蚁金服" aria-hidden="true">#</a> 6.2 Ant design 蚂蚁金服</h3>
<h3 id="_6-3-element-for-react-饿了么" tabindex="-1"><a class="header-anchor" href="#_6-3-element-for-react-饿了么" aria-hidden="true">#</a> 6.3 element for react 饿了么</h3>
<h3 id="_6-4-vant-移动端" tabindex="-1"><a class="header-anchor" href="#_6-4-vant-移动端" aria-hidden="true">#</a> 6.4 vant 移动端</h3>
<h2 id="第7章-redux" tabindex="-1"><a class="header-anchor" href="#第7章-redux" aria-hidden="true">#</a> 第7章 redux</h2>
<h3 id="_7-1-redux概述" tabindex="-1"><a class="header-anchor" href="#_7-1-redux概述" aria-hidden="true">#</a> 7.1 redux概述</h3>
<p>1.redux是一个用于javascript的状态管理</p>
<p>2.redux三大核心</p>
<p>单一数据源</p>
<p>state是只读的 , 只能通过action进行修改</p>
<p>使用纯函数进行修改</p>
<h3 id="_7-2-redux组成" tabindex="-1"><a class="header-anchor" href="#_7-2-redux组成" aria-hidden="true">#</a> 7.2 redux组成</h3>
<p>1.state状态</p>
<p>2.action动作</p>
<p>只是描述有事情要发生，但没有实际去更新state</p>
<p>本质是js对象， 必须包含type属性</p>
<p>一般type会被定义为字符串常量</p>
<p>3.reducer</p>
<p>本质是函数，接收初始的state，和action</p>
<p>响应发送来的action，必须有return返回值</p>
<p>4.store</p>
<p>用来把 action 和 reducer 关联到一起</p>
<p>store.dispatch 提交 action</p>
<p>store.getState 获取 state</p>
<p>store.subscribe 注册监听</p>
<p>store.unsubscribe 注销监听</p>
<h3 id="_7-3-redux案例" tabindex="-1"><a class="header-anchor" href="#_7-3-redux案例" aria-hidden="true">#</a> 7.3 redux案例</h3>
<p>安装 redux</p>
<p><code v-pre>npm install redux</code></p>
<p>1.构建action , 创建一个函数, 返回一个包含type属性的对象</p>
<p>2.构建reducer, 用来响应action , 通过return把数据传给store</p>
<p>3.使用createStore创建store,传递reducer</p>
<p>4.利用store.subscribe注册监听</p>
<p>5.利用store.dispatch发送action, 使用store.getState可以拿到值</p>
<p>src/Pages/Home/index.jsx</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'../../store'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>sendAction<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../../action"</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Index</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>

    <span class="token comment">//按钮点击回调</span>
    <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">//调用函数返回action</span>
        <span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token function">sendAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      	<span class="token comment">//提交一个action</span>
        store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//组件挂载完毕钩子</span>
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	<span class="token comment">//当有提交的action时,会触发到监听钩子</span>
        store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"监听:"</span><span class="token punctuation">,</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>


    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                  点我发送一个action</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/action/index.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">sendAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'send_type'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"我是一个action"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> sendAction <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/reducer/index.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> initState <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"默认值"</span> <span class="token punctuation">}</span>

<span class="token comment">//state 如果传入则使用state,没传的话用默认值</span>
<span class="token keyword">const</span> <span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token operator">=</span>initState<span class="token punctuation">,</span>action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"reducer"</span><span class="token punctuation">,</span>state<span class="token punctuation">,</span>action<span class="token punctuation">)</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">"send_type"</span><span class="token operator">:</span>
            <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>state<span class="token punctuation">,</span>action<span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            <span class="token keyword">return</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> reducer <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/store/index.js</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>createStore<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>reducer<span class="token punctuation">}</span> <span class="token keyword">from</span>  <span class="token string">'../reducer'</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4-react-redux简介" tabindex="-1"><a class="header-anchor" href="#_7-4-react-redux简介" aria-hidden="true">#</a> 7.4 react-redux简介</h3>
<p>1.概念</p>
<p>官方出的适配 react 的 redux</p>
<p>2.provider概念</p>
<p>在app.js的最外层包裹provider标签, 意思是store可以管理这个项目了</p>
<p>3.connect概念</p>
<p>分别在接收方和发送方 配置connect</p>
<p>接收方传入第一个参数mapStateToProps</p>
<p>发送放传入第二个参数mapDispatchToProps ,第一个参数用null占位</p>
<p>被connect加强过的组件  可以在props属性上调用action或者state</p>
<p><code v-pre>this.props.sendAction()</code></p>
<p><code v-pre>this.props.count</code></p>
<h3 id="_7-5-react-redux-案例" tabindex="-1"><a class="header-anchor" href="#_7-5-react-redux-案例" aria-hidden="true">#</a> 7.5 react-redux 案例</h3>
<p>安装 redux  react-redux redux-devtools</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code>npm install <span class="token operator">--</span>save redux
npm install <span class="token operator">--</span>save react<span class="token operator">-</span>redux
npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev redux<span class="token operator">-</span>devtools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/index.js</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> reportWebVitals <span class="token keyword">from</span> <span class="token string">'./reportWebVitals'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">'./router'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Provider<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-redux"</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">"./store"</span>

<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.StrictMode</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Provider</span></span> <span class="token attr-name">store</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Router</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Provider</span></span><span class="token punctuation">></span></span><span class="token plain-text">

  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.StrictMode</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token function">reportWebVitals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/store.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>createStore<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>reducer<span class="token punctuation">}</span> <span class="token keyword">from</span>  <span class="token string">'./reducer'</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/reducer/index.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//初始化变量</span>
<span class="token keyword">const</span> initState <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>

exports<span class="token punctuation">.</span><span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> initState<span class="token punctuation">,</span>action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"reducer"</span><span class="token punctuation">,</span>action<span class="token punctuation">)</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">"add_action"</span><span class="token operator">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>    
        		<span class="token keyword">return</span> state
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/Pages/ComA/index.jsx</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>connect<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-redux"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ComA</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	<span class="token comment">//按钮点击回调</span>
    <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"A组件的props:"</span><span class="token punctuation">,</span>props<span class="token punctuation">)</span>
      	<span class="token comment">//提交sendAction的action</span>
        props<span class="token punctuation">.</span><span class="token function">sendAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

  
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">+</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span>
   
<span class="token punctuation">}</span>

<span class="token comment">//实现发送方的mapDispatchToProps参数</span>
<span class="token keyword">const</span> <span class="token function-variable function">mapDispatchToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">{</span>
        <span class="token function-variable function">sendAction</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
            <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"add_action"</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//使用connect加强A组件并导出</span>
<span class="token comment">//发送方的第一个参数mapStateTpProps要为空</span>
<span class="token comment">//发送方实现第二个参数mapDispatchToProps</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span>mapDispatchToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>ComA<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/Pages/ComB/index.jsx</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>connect<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-redux"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ComB</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"B组件的props"</span><span class="token punctuation">,</span>props<span class="token punctuation">)</span>
    
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"> </span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token plain-text"> </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
   
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"B组件:"</span><span class="token punctuation">,</span>state<span class="token punctuation">)</span>
    <span class="token keyword">return</span> state
<span class="token punctuation">}</span>

<span class="token comment">//connect加强B组件</span>
<span class="token comment">//接收方只实现第一个参数mapStateToProps</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>ComB<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-5-redux-devtools" tabindex="-1"><a class="header-anchor" href="#_7-5-redux-devtools" aria-hidden="true">#</a> 7.5 redux devtools</h3>
<p>1.首先，我们要安装到项目的一些基本使用，如： react、redux、react-redux等</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install  redux-devtools-extension --save-dev
npm install --save redux
npm install --save react-redux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.去谷歌应用商店搜索redux-devtools直接安装即可。 成功后，在浏览器的右上角会有相关的显示。</p>
<p>3.最终效果如下</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Redux <span class="token keyword">from</span> <span class="token string">'redux'</span>

<span class="token comment">// 引入createStore创建store，引入applyMiddleware 来使用中间件</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>createStore<span class="token punctuation">,</span> applyMiddleware<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span>

<span class="token comment">// 引入所有的reducer</span>
<span class="token keyword">import</span> storeReducer <span class="token keyword">from</span> <span class="token string">'../Reducer/index.jsx'</span>

<span class="token comment">// 利用redux-logger打印日志</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>createLogger<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux-logger'</span>

<span class="token comment">// 安装redux-devtools-extension的可视化工具。</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> composeWithDevTools <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux-devtools-extension'</span>


<span class="token comment">// 使用日志打印方法， collapsed让action折叠，看着舒服。</span>
<span class="token keyword">const</span> loggerMiddleware <span class="token operator">=</span> <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">collapsed</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span>  <span class="token function">createStore</span><span class="token punctuation">(</span>
    storeReducer<span class="token punctuation">,</span>
  <span class="token comment">//applyMiddleware()如果有异步的话放在小括号里</span>
    <span class="token function">composeWithDevTools</span><span class="token punctuation">(</span><span class="token function">applyMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第8章-新语法扩展" tabindex="-1"><a class="header-anchor" href="#第8章-新语法扩展" aria-hidden="true">#</a> 第8章 新语法扩展</h2>
<h3 id="_8-1-setstate" tabindex="-1"><a class="header-anchor" href="#_8-1-setstate" aria-hidden="true">#</a> 8.1 setState</h3>
<p>1.对象式写法</p>
<p>setState(stateChange, [ callback ])</p>
<p>推荐使用: 不依赖于原状态</p>
<p>对象更改是异步的 , 但回调函数是状态更新后且render调用后才调用</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code>add <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">count</span><span class="token operator">:</span>count<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      consolo<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// 输出1</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  consolo<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// 输出0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.函数式写法</p>
<p>推荐使用: 依赖于原状态</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//可以接受到state和props参数</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span>props</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">count</span><span class="token operator">:</span>state<span class="token punctuation">.</span>count<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-lazyload" tabindex="-1"><a class="header-anchor" href="#_8-2-lazyload" aria-hidden="true">#</a> 8.2 lazyLoad</h3>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//懒加载方式引入路由组件</span>
<span class="token keyword">const</span> Home <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./Home'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//引入一个一般组件作为加载超时显示的组件</span>
<span class="token keyword">import</span> Loading <span class="token keyword">from</span> <span class="token string">'./Loading'</span>

<span class="token comment">//用Suspense标签把路由包裹起来</span>
<span class="token comment">//回调函数声明fallback,如果超时则显示Loading组件</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Subpense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Loading</span></span><span class="token punctuation">/></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Route</span></span><span class="token punctuation">></span></span><span class="token plain-text">  
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">></span></span><span class="token plain-text">

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-statehook" tabindex="-1"><a class="header-anchor" href="#_8-3-statehook" aria-hidden="true">#</a> 8.3 stateHook</h3>
<p>函数式组件可以使用state</p>
<h3 id="_8-4-effecthook" tabindex="-1"><a class="header-anchor" href="#_8-4-effecthook" aria-hidden="true">#</a> 8.4 effectHook</h3>
<p>函数式组件可以使用生命周期钩子</p>
<h3 id="_8-5-refhook" tabindex="-1"><a class="header-anchor" href="#_8-5-refhook" aria-hidden="true">#</a> 8.5 refHook</h3>
<p>函数式组件可以使用refs功能</p>
<h3 id="_8-6-fragment" tabindex="-1"><a class="header-anchor" href="#_8-6-fragment" aria-hidden="true">#</a> 8.6 FragMent</h3>
<p>因为每个组件都必须有根标签div,导致div太多太复杂</p>
<p>使用Fragment当作根标签, 不会真实渲染出来, 就跟没有根标签一样,同时也满足语法</p>
<p>能且只能接收 key 属性, 其他属性都会丢失 , 连标签本身都会丢失</p>
<h3 id="_8-7-context" tabindex="-1"><a class="header-anchor" href="#_8-7-context" aria-hidden="true">#</a> 8.7 Context</h3>
<p>通常用于祖先组件和后代组件传值</p>
<h3 id="_8-8-purecomponent" tabindex="-1"><a class="header-anchor" href="#_8-8-purecomponent" aria-hidden="true">#</a> 8.8 PureComponent</h3>
<p>组件优化</p>
<h3 id="_8-9-renderprops" tabindex="-1"><a class="header-anchor" href="#_8-9-renderprops" aria-hidden="true">#</a> 8.9 renderProps</h3>
<p>向组件内部动态传入带内容的标签</p>
<p>类似vue中的slot技术</p>
<h3 id="_8-10-errorboundary" tabindex="-1"><a class="header-anchor" href="#_8-10-errorboundary" aria-hidden="true">#</a> 8.10 ErrorBoundary</h3>
<p>用来捕获后代组件的错误</p>
<h2 id="第9章-项目实战cms-manager" tabindex="-1"><a class="header-anchor" href="#第9章-项目实战cms-manager" aria-hidden="true">#</a> 第9章 项目实战cms-manager</h2>
<h3 id="_9-1-项目介绍" tabindex="-1"><a class="header-anchor" href="#_9-1-项目介绍" aria-hidden="true">#</a> 9.1 项目介绍</h3>
<p>项目简介</p>
<p>创建项目</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npx create-react-app cms-manage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装依赖</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cnpm i axios redux react-redux sass sass-loader react-router-dom antd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>文件介绍</p>
<h3 id="_9-2-接口封装" tabindex="-1"><a class="header-anchor" href="#_9-2-接口封装" aria-hidden="true">#</a> 9.2 接口封装</h3>
<h3 id="_9-3-组件库引入" tabindex="-1"><a class="header-anchor" href="#_9-3-组件库引入" aria-hidden="true">#</a> 9.3 组件库引入</h3>
<h3 id="_9-4-路由配置" tabindex="-1"><a class="header-anchor" href="#_9-4-路由配置" aria-hidden="true">#</a> 9.4 路由配置</h3>
<h3 id="_9-5-富文本编辑器" tabindex="-1"><a class="header-anchor" href="#_9-5-富文本编辑器" aria-hidden="true">#</a> 9.5 富文本编辑器</h3>
<h3 id="_9-6-redux状态管理" tabindex="-1"><a class="header-anchor" href="#_9-6-redux状态管理" aria-hidden="true">#</a> 9.6 redux状态管理</h3>
</div></template>
