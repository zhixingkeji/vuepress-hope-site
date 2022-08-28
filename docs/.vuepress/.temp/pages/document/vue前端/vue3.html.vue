<template><div><h2 id="第1章-入门" tabindex="-1"><a class="header-anchor" href="#第1章-入门" aria-hidden="true">#</a> 第1章 入门</h2>
<h3 id="_1-1-vue介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-vue介绍" aria-hidden="true">#</a> 1.1 vue介绍</h3>
<p>Vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>
<h3 id="_1-2-编程范式" tabindex="-1"><a class="header-anchor" href="#_1-2-编程范式" aria-hidden="true">#</a> 1.2 编程范式</h3>
<p>命令式编程：以往的编程例如jq，js 都是先执行什么再执行什么。</p>
<p>例如，先创建div元素，定义message，把message放到div中显示</p>
<p>声明式编程：Vue只需要声明div中需要显示什么，由vue对象进行管理元素</p>
<p>好处是前后端完全分离，响应式后端数据更改后前端自动修改）</p>
<h3 id="_1-3-设置活动模板" tabindex="-1"><a class="header-anchor" href="#_1-3-设置活动模板" aria-hidden="true">#</a> 1.3 设置活动模板</h3>
<p>设置，编辑器，活动模板，在Vue下添加vue，和代码，定义在html里响应</p>
<p>之后在敲代码时输入vue按tab键会自动导出模板里的代码</p>
<h2 id="第2章-使用" tabindex="-1"><a class="header-anchor" href="#第2章-使用" aria-hidden="true">#</a> 第2章 使用</h2>
<h3 id="_2-1-vue-安装" tabindex="-1"><a class="header-anchor" href="#_2-1-vue-安装" aria-hidden="true">#</a> 2.1 vue 安装</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> vue@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-vue-cli脚手架" tabindex="-1"><a class="header-anchor" href="#_2-2-vue-cli脚手架" aria-hidden="true">#</a> 2.2 vue-cli脚手架</h3>
<p>安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cnpm install -g @vue/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>检查</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令行创建项目</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>vue create myproject
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>gui界面</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>vue ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装插件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue add element-plus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置 vue.config.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//部署生产环境和开发环境下的URL：可对当前环境进行区分</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'production'</span> <span class="token operator">?</span> <span class="token string">'/public/'</span> <span class="token operator">:</span> <span class="token string">'./'</span><span class="token punctuation">,</span>
     <span class="token comment">// 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 </span>
    <span class="token literal-property property">assetsDir</span><span class="token operator">:</span> <span class="token string">"assets"</span><span class="token punctuation">,</span>
    <span class="token comment">// 输出文件目录：在npm run build时，生成文件的目录名称</span>
    <span class="token literal-property property">outputDir</span><span class="token operator">:</span> <span class="token string">'dist'</span><span class="token punctuation">,</span>
    <span class="token comment">// 代码保存时进行eslint检测</span>
    <span class="token literal-property property">lintOnSave</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token comment">// 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 </span>
    <span class="token literal-property property">productionSourceMap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>  
    <span class="token comment">// webpack-dev-server 相关配置</span>
	<span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    	<span class="token comment">// 自动打开浏览器</span>
        <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 主机</span>
        <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">'localhost'</span><span class="token punctuation">,</span>
        <span class="token comment">// 端口</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9930</span><span class="token punctuation">,</span>
        <span class="token comment">// https</span>
        <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">// 热更新</span>
        <span class="token literal-property property">hotOnly</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    	<span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token string">'http://localhost:4000'</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    
   	<span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    	<span class="token keyword">const</span> svgRule <span class="token operator">=</span> config<span class="token punctuation">.</span>module<span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">'svg'</span><span class="token punctuation">)</span>
		<span class="token comment">// 清除已有的所有 loader。</span>
    	<span class="token comment">// 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。</span>
    svgRule<span class="token punctuation">.</span>uses<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 添加要替换的 loader</span>
    svgRule
      <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'vue-svg-loader'</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">'vue-svg-loader'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-计算属性" tabindex="-1"><a class="header-anchor" href="#_2-3-计算属性" aria-hidden="true">#</a> 2.3 计算属性</h3>
<h4 id="_2-3-1-computed" tabindex="-1"><a class="header-anchor" href="#_2-3-1-computed" aria-hidden="true">#</a> 2.3.1 computed</h4>
<p>一般的, computed函数只有get方法, 所以不能 plusOne++ , 如果需要 需要对其设置 set 方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> plusOne <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> count<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token parameter">val</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    count<span class="token punctuation">.</span>value <span class="token operator">=</span> val <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-监听属性" tabindex="-1"><a class="header-anchor" href="#_2-4-监听属性" aria-hidden="true">#</a> 2.4 监听属性</h3>
<h4 id="_2-4-1-watcheffect" tabindex="-1"><a class="header-anchor" href="#_2-4-1-watcheffect" aria-hidden="true">#</a> 2.4.1 watchEffect</h4>
<p>立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// -> logs 0</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  count<span class="token punctuation">.</span>value<span class="token operator">++</span>
  <span class="token comment">// -> logs 1</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-2-watch" tabindex="-1"><a class="header-anchor" href="#_2-4-2-watch" aria-hidden="true">#</a> 2.4.2 watch</h4>
<p>侦听单一源</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 侦听一个 getter</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>count<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">count<span class="token punctuation">,</span> prevCount</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">// 直接侦听一个 ref</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">count<span class="token punctuation">,</span> prevCount</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-条件渲染" tabindex="-1"><a class="header-anchor" href="#_2-5-条件渲染" aria-hidden="true">#</a> 2.5 条件渲染</h3>
<h4 id="_2-5-1-v-if" tabindex="-1"><a class="header-anchor" href="#_2-5-1-v-if" aria-hidden="true">#</a> 2.5.1 v-if</h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>score>=90<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{message}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>score>=80<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{message}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>score>=70<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{message}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span>{{message}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-2-v-show-和-v-if-的区别" tabindex="-1"><a class="header-anchor" href="#_2-5-2-v-show-和-v-if-的区别" aria-hidden="true">#</a> 2.5.2 v-show 和 v-if 的区别</h4>
<p>v-if 为 false 的时候，是从虚拟dom里删除，当为true时再添加渲染。</p>
<p>v-show 只是把行内元素样式改为不显示，但是还在dom里。</p>
<p>v-show 适合频繁切换显示隐藏，因为不用新添加dom。</p>
<h3 id="_2-6-列表渲染" tabindex="-1"><a class="header-anchor" href="#_2-6-列表渲染" aria-hidden="true">#</a> 2.6 列表渲染</h3>
<h4 id="_2-6-1-遍历数组" tabindex="-1"><a class="header-anchor" href="#_2-6-1-遍历数组" aria-hidden="true">#</a> 2.6.1 遍历数组</h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in names<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> {{ item }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, index) in names<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{index+1}} {{ item }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意 如果是遍历的是图片路径需要特殊处理</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//先使用js导入图片 名称为图片的文件名</span>
<span class="token keyword">import</span> lunbo1 <span class="token keyword">from</span> <span class="token string">"~@/assets/swiper/lunbo1.png"</span>
<span class="token keyword">import</span> lunbo2 <span class="token keyword">from</span> <span class="token string">"~@/assets/swiper/lunbo2.png"</span>

<span class="token comment">//创建数组存放图片</span>
 <span class="token keyword">const</span> lunbo_list <span class="token operator">=</span> <span class="token punctuation">[</span> lunbo1<span class="token punctuation">,</span> lunbo2 <span class="token punctuation">]</span>
 
<span class="token comment">//在页面上使用</span>
<span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"item in lunbo_list"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>img <span class="token operator">:</span>src<span class="token operator">=</span><span class="token string">"item"</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-6-2-遍历对象" tabindex="-1"><a class="header-anchor" href="#_2-6-2-遍历对象" aria-hidden="true">#</a> 2.6.2 遍历对象</h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value in obj<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> {{ value }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(value,key) in obj<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{key}} : {{ value }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(value,key,index) in obj<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{key}} . {{key}} : {{ value }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-6-3-与数据响应有关的数组方法" tabindex="-1"><a class="header-anchor" href="#_2-6-3-与数据响应有关的数组方法" aria-hidden="true">#</a> 2.6.3 与数据响应有关的数组方法</h4>
<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>push</td>
<td>将一个元素添加到数组末尾，并返回新数组的长度</td>
</tr>
<tr>
<td>pop</td>
<td>从数组中删除并返回最后一个元素</td>
</tr>
<tr>
<td>shift</td>
<td>从数组中删除并返回第一个元素</td>
</tr>
<tr>
<td>unshitf</td>
<td>将一个或多个元素添加到数组的开头，并返回新数组的长度</td>
</tr>
<tr>
<td>splice</td>
<td>从数组中删除或向数组添加元素</td>
</tr>
<tr>
<td>sort</td>
<td>对数组元素排序，返回排序后的数组</td>
</tr>
<tr>
<td>reserve</td>
<td>将数组中的元素位置颠倒，返回颠倒后的数组</td>
</tr>
</tbody>
</table>
<h4 id="_2-6-4-列表渲染中的key" tabindex="-1"><a class="header-anchor" href="#_2-6-4-列表渲染中的key" aria-hidden="true">#</a> 2.6.4 列表渲染中的key</h4>
<p>虚拟dom会进行判断，是否进行复用，</p>
<p>如果key值一样则复用，否则创建新的缓存</p>
<p>当某一层有很多相同节点时，也就是列表节点，我们希望插入一个新的节点，</p>
<p>所以我们需要使用key来给每个节点做一个唯一的标识，</p>
<p>diff就会识别两者的不同，找到正确位置进行插入，</p>
<p>而不是将整个列表重新排序插入，提高虚拟DOM的效率</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in names<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> {{ item }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-7-事件处理" tabindex="-1"><a class="header-anchor" href="#_2-7-事件处理" aria-hidden="true">#</a> 2.7 事件处理</h3>
<h4 id="_2-7-1-v-on" tabindex="-1"><a class="header-anchor" href="#_2-7-1-v-on" aria-hidden="true">#</a> 2.7.1 v-on</h4>
<p>语法糖简写为 <code v-pre>@</code></p>
<h4 id="_2-7-2-多事件处理" tabindex="-1"><a class="header-anchor" href="#_2-7-2-多事件处理" aria-hidden="true">#</a> 2.7.2 多事件处理</h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 这两个 one() 和 two() 将执行按钮点击事件 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>one($event), two($event)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  Submit
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-7-3-事件修饰符" tabindex="-1"><a class="header-anchor" href="#_2-7-3-事件修饰符" aria-hidden="true">#</a> 2.7.3 事件修饰符</h4>
<p><code v-pre>.stop </code></p>
<p><code v-pre>.prevent</code></p>
<p><code v-pre>.capture </code></p>
<p><code v-pre>.self</code></p>
<p><code v-pre>.once</code></p>
<p><code v-pre>.passive</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 只当在 event.target 是当前元素自身时触发处理函数 --></span>
<span class="token comment">&lt;!-- 即事件不是从内部元素触发的 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click.self</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doThat<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-8-v-model" tabindex="-1"><a class="header-anchor" href="#_2-8-v-model" aria-hidden="true">#</a> 2.8 v-model</h3>
<p>表单输入绑定</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>edit me<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Message is: {{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-9-动态样式绑定" tabindex="-1"><a class="header-anchor" href="#_2-9-动态样式绑定" aria-hidden="true">#</a> 2.9 动态样式绑定</h3>
<p>普通样式与动态样式共存</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>//html
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>static<span class="token punctuation">"</span></span>
  <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ 'active': isActive, 'text-danger': hasError }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

//js
const isActive = ref(true)
const hasError = ref(false)

//结果
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>static active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绑定数据对象</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>//html
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>classObject<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

//js
data: {
  classObject: {
    active: true,
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绑定计算属性</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>//html
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>classObject<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

//js
export default {
  data() {
    return {
    isActive: true,
    };
  },
  computed: {
  classObject: function () {
    return {
      active: this.isActive,
    }
  }
}

//结果
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单纯数组</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>//html
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[activeClass, errorClass]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

//js
data() {
    return {
      activeClass: "active",
      errorClass: "disActive"
    };
  },

//结果
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active disActive<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三元运算符</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>//html
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[isActive?'active':'disActive']<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

//js
data() {
    return {
      isActive: false,
    };
},

//结果
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>disActive<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-10-生命周期" tabindex="-1"><a class="header-anchor" href="#_2-10-生命周期" aria-hidden="true">#</a> 2.10 生命周期</h3>
<h4 id="_2-10-1-生命周期介绍" tabindex="-1"><a class="header-anchor" href="#_2-10-1-生命周期介绍" aria-hidden="true">#</a> 2.10.1 生命周期介绍</h4>
<h4 id="_2-10-2-setup" tabindex="-1"><a class="header-anchor" href="#_2-10-2-setup" aria-hidden="true">#</a> 2.10.2 setup</h4>
<p>接收两个参数</p>
<ol>
<li><code v-pre>props</code></li>
</ol>
<p>props是响应式的, 使用普通的解构赋值会消除响应性</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// MyBook.vue</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> title <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>title<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><code v-pre>context</code></li>
</ol>
<p>不是响应式的, 可以使用结构赋值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// MyBook.vue</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Attribute (非响应式对象，等同于 $attrs)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>attrs<span class="token punctuation">)</span>

    <span class="token comment">// 插槽 (非响应式对象，等同于 $slots)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>slots<span class="token punctuation">)</span>

    <span class="token comment">// 触发事件 (方法，等同于 $emit)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>emit<span class="token punctuation">)</span>

    <span class="token comment">// 暴露公共 property (函数)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>expose<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-10-3-生命周期钩子" tabindex="-1"><a class="header-anchor" href="#_2-10-3-生命周期钩子" aria-hidden="true">#</a> 2.10.3 生命周期钩子</h4>
<table>
<thead>
<tr>
<th>选项式 API</th>
<th>Hook inside</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>beforeMount</code></td>
<td><code v-pre>onBeforeMount</code></td>
</tr>
<tr>
<td><code v-pre>mounted</code></td>
<td><code v-pre>onMounted</code></td>
</tr>
<tr>
<td><code v-pre>beforeUpdate</code></td>
<td><code v-pre>onBeforeUpdate</code></td>
</tr>
<tr>
<td><code v-pre>updated</code></td>
<td><code v-pre>onUpdated</code></td>
</tr>
<tr>
<td><code v-pre>beforeUnmount</code></td>
<td><code v-pre>onBeforeUnmount</code></td>
</tr>
<tr>
<td><code v-pre>unmounted</code></td>
<td><code v-pre>onUnmounted</code></td>
</tr>
<tr>
<td><code v-pre>errorCaptured</code></td>
<td><code v-pre>onErrorCaptured</code></td>
</tr>
<tr>
<td><code v-pre>renderTracked</code></td>
<td><code v-pre>onRenderTracked</code></td>
</tr>
<tr>
<td><code v-pre>renderTriggered</code></td>
<td><code v-pre>onRenderTriggered</code></td>
</tr>
<tr>
<td><code v-pre>activated</code></td>
<td><code v-pre>onActivated</code></td>
</tr>
<tr>
<td><code v-pre>deactivated</code></td>
<td><code v-pre>onDeactivated</code></td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// mounted</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Component is mounted!'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-11-模板语法" tabindex="-1"><a class="header-anchor" href="#_2-11-模板语法" aria-hidden="true">#</a> 2.11 模板语法</h3>
<h4 id="_2-11-1-文本" tabindex="-1"><a class="header-anchor" href="#_2-11-1-文本" aria-hidden="true">#</a> 2.11.1 文本</h4>
<p>数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Message: {{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-11-2-v-html" tabindex="-1"><a class="header-anchor" href="#_2-11-2-v-html" aria-hidden="true">#</a> 2.11.2 v-html</h4>
<p>原始html</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rawHtml<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-11-3-v-pre" tabindex="-1"><a class="header-anchor" href="#_2-11-3-v-pre" aria-hidden="true">#</a> 2.11.3 v-pre</h4>
<p>不用任何解析，保留原格式输出</p>
<h4 id="_2-11-4-v-cloak" tabindex="-1"><a class="header-anchor" href="#_2-11-4-v-cloak" aria-hidden="true">#</a> 2.11.4 v-cloak</h4>
<p>在没渲染加载完成之前不显示</p>
<h2 id="第3章-组件" tabindex="-1"><a class="header-anchor" href="#第3章-组件" aria-hidden="true">#</a> 第3章 组件</h2>
<h3 id="_3-1-组件注册" tabindex="-1"><a class="header-anchor" href="#_3-1-组件注册" aria-hidden="true">#</a> 3.1 组件注册</h3>
<p>组件内引用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> ComponentA <span class="token keyword">from</span> <span class="token string">'./ComponentA.vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ComponentA
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全局注册组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//main.js</span>
<span class="token keyword">import</span> Btns <span class="token keyword">from</span> <span class="token string">"@/components/Btns"</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">"Btns"</span><span class="token punctuation">,</span>Btns<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-父传子props传值" tabindex="-1"><a class="header-anchor" href="#_3-2-父传子props传值" aria-hidden="true">#</a> 3.2 父传子props传值</h3>
<p><strong>父组件发送</strong></p>
<p>在组件标签上绑定一个变量即可</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>son</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>12</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>son</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>子组件接收</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 类型检查</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
        
    <span class="token comment">// 类型检查 + 其他验证</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value <span class="token operator">>=</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>


<span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>content</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//接收变量</span>
    <span class="token keyword">const</span> age <span class="token operator">=</span> props<span class="token punctuation">.</span>age
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-子传父emit" tabindex="-1"><a class="header-anchor" href="#_3-3-子传父emit" aria-hidden="true">#</a> 3.3 子传父emit</h3>
<p><strong>子组件发送</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>content</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">menuClick</span> <span class="token punctuation">(</span><span class="token parameter">menuName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 通过⾃定义事件回传值</span>
        context<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'menuClick'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> menuName <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件接收</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>son @menuClick<span class="token operator">=</span><span class="token string">"menuClick"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>son<span class="token operator">></span>

<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//父组件传给子组件的值</span>
	<span class="token keyword">let</span> parentValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
 	<span class="token keyword">const</span> <span class="token function-variable function">menuClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    	parentValue<span class="token punctuation">.</span>value <span class="token operator">=</span> value
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-父子双向绑定" tabindex="-1"><a class="header-anchor" href="#_3-4-父子双向绑定" aria-hidden="true">#</a> 3.4 父子双向绑定</h3>
<h3 id="_3-5-加强组件传值" tabindex="-1"><a class="header-anchor" href="#_3-5-加强组件传值" aria-hidden="true">#</a> 3.5 加强组件传值</h3>
<p>provide不限层级，只要是处于A页面下的子组件 或者孙子组件都可以。</p>
<p><code v-pre>provide</code> 和 <code v-pre>inject</code> 都需要放在setup中才能够使用，不在里头会报错像下面这样。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>父组件发送
<span class="token function">provide</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token string">'foo'</span><span class="token punctuation">)</span> <span class="token comment">// 若提供非字符串值将出错</span>

子组件接收
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token comment">// foo 的类型: string | undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-模板使用" tabindex="-1"><a class="header-anchor" href="#_3-6-模板使用" aria-hidden="true">#</a> 3.6 模板使用</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template #title<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-7-css样式隔离" tabindex="-1"><a class="header-anchor" href="#_3-7-css样式隔离" aria-hidden="true">#</a> 3.7 css样式隔离</h3>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">sooped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-8-异步组件" tabindex="-1"><a class="header-anchor" href="#_3-8-异步组件" aria-hidden="true">#</a> 3.8 异步组件</h3>
<h4 id="_3-8-1-keep-alive" tabindex="-1"><a class="header-anchor" href="#_3-8-1-keep-alive" aria-hidden="true">#</a> 3.8.1 keep-alive</h4>
<h4 id="保持组件活性介绍" tabindex="-1"><a class="header-anchor" href="#保持组件活性介绍" aria-hidden="true">#</a> 保持组件活性介绍</h4>
<p>vue内部的一个组件，保留组件的状态。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-8-2-被保持状态的组件的方法" tabindex="-1"><a class="header-anchor" href="#_3-8-2-被保持状态的组件的方法" aria-hidden="true">#</a> 3.8.2 被保持状态的组件的方法</h4>
<p>activated（），deactivated（）</p>
<h4 id="_3-8-3-包含和排除" tabindex="-1"><a class="header-anchor" href="#_3-8-3-包含和排除" aria-hidden="true">#</a> 3.8.3 包含和排除</h4>
<p>keep-alive标签内的属性，include 和 exclude</p>
<p>keep-alive exclude=&quot;About&quot;  //排除about组件的保留记录</p>
<h3 id="_3-9-组件插槽" tabindex="-1"><a class="header-anchor" href="#_3-9-组件插槽" aria-hidden="true">#</a> 3.9 组件插槽</h3>
<p>匿名插槽</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- my-button子组件定义 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span>默认按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 父组件调用my-button --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-button</span><span class="token punctuation">></span></span>
	提交按钮
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-button</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 父组件页面渲染为 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span>
    提交按钮
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具名插槽</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- my-layout子组件定义 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
            <span class="token comment">&lt;!-- 其实就是&lt;slot name="default">&lt;/slot> --></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 父组件调用my-layout --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-layout</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 填充内容顺序无关 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>footer</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>我来组成脚丫子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    
    <span class="token comment">&lt;!-- v-slot:header可以简写为#header --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>header</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>我来组成头部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- v-slot:default可以忽略不写 --></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>我来组成身体<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-layout</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 父组件页面渲染为 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>我来组成头部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>我来组成身体<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>我来组成脚丫子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>作用域插槽</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- todo-list子组件定义 --></span>
app.component('todo-list', {
  data() {
    return {
      items: [
        { "thing1":"阅读", "thing2":"看电视" },
        { "thing1":"背单词", "thing2":"玩游戏" }
      ]
    }
  },
  template: `
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, index) in items<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token comment">&lt;!-- data即插槽prop，绑定item，index也是插槽prop，绑定index，备用内容为item.thing1 --></span>
        	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span> <span class="token attr-name">:index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.thing1 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  `
})

<span class="token comment">&lt;!-- 正常用法：父组件调用todo-list --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>todo-list</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 这里default就是具名插槽的用法，slotProps来接收子组件数据，命名随意 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slotProps<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fas fa-check<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ slotProps.index }} + ' - ' + {{ slotProps.data.thing2 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>todo-list</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 特殊用法：只有默认插槽时，v-slot可以写在组件上 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>todo-list</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slotProps<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fas fa-check<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ slotProps.index }} + ' - ' + {{ slotProps.data.thing2 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>todo-list</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 特殊用法：v-slot有解构的用法 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>todo-list</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{index, data}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fas fa-check<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ index }} + ' - ' + {{ data.thing2 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>todo-list</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 父组件页面渲染为 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fas fa-check<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>0 - 看电视<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fas fa-check<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1 - 玩游戏<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-10-组件切换" tabindex="-1"><a class="header-anchor" href="#_3-10-组件切换" aria-hidden="true">#</a> 3.10 组件切换</h3>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>home<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in info<span class="token punctuation">"</span></span> 
              <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.name<span class="token punctuation">"</span></span> 
              <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form(item.value)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        {{item.name}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">></span></span>
 	//is赋值组件名称
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>componentShow<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> FormDemo <span class="token keyword">from</span> <span class="token string">"../components/formDemo"</span><span class="token punctuation">;</span> <span class="token comment">// 引入组件1</span>
<span class="token keyword">import</span> Cartogram <span class="token keyword">from</span> <span class="token string">"../components/cartogram"</span><span class="token punctuation">;</span> <span class="token comment">//引入组件2</span>
 
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      FormDemo<span class="token punctuation">,</span>
      Cartogram<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	<span class="token keyword">let</span> componentShow <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> info <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
             <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"表单"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> FormDemo <span class="token punctuation">}</span><span class="token punctuation">,</span>
             <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"统计"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> Cartogram <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> <span class="token function-variable function">form</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">//把组件名赋值给公用组件</span>
            componentShow<span class="token punctuation">.</span>value <span class="token operator">=</span> val<span class="token punctuation">;</span> 
        <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
       	componentShow<span class="token punctuation">,</span>
      	info<span class="token punctuation">,</span>
        form
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第4章-第三方库" tabindex="-1"><a class="header-anchor" href="#第4章-第三方库" aria-hidden="true">#</a> 第4章 第三方库</h2>
<h3 id="_4-1-elementui组件库" tabindex="-1"><a class="header-anchor" href="#_4-1-elementui组件库" aria-hidden="true">#</a> 4.1 elementUI组件库</h3>
<p>安装element-plus</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>vue <span class="token function">add</span> element-plus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 element icon</p>
<div class="language-she ext-she line-numbers-mode"><pre v-pre class="language-she"><code>cnpm install --save @element-plus/icons-vue 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>全局注册 plugins/element.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">'element-plus'</span>
<span class="token keyword">import</span> <span class="token string">'../element-variables.scss'</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ElIcons <span class="token keyword">from</span> <span class="token string">'@element-plus/icons-vue'</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> name <span class="token keyword">in</span> ElIcons<span class="token punctuation">)</span><span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span><span class="token punctuation">(</span>ElIcons<span class="token punctuation">)</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改组件样式配色等</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token comment">// 样式穿透语法 ::v-deep</span>
<span class="token comment">// 可以穿透scoped作用域 </span>
<span class="token selector">::v-deep .el-tabs__active-bar</span><span class="token punctuation">{</span>
    <span class="token comment">//使用开发者工具查看当前class</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>  #4880FF<span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>dialog对话框 禁止页面滚动</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@mousewheel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>forbidScroll<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dialog</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dialog</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

// 禁用鼠标滚动 达到不能滚动页面的效果
setup(){
    function forbidScroll(e) {
     	e.preventDefault &amp;&amp; e.preventDefault();
     	e.returnValue = false;
      	e.stopPropagation &amp;&amp; e.stopPropagation();
      	return false;
    }   
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回到顶部组件</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-backtop</span> <span class="token attr-name">:bottom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-backtop</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>树形控件</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tree</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span> <span class="token attr-name">:props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultProps<span class="token punctuation">"</span></span> <span class="token attr-name">@node-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleNodeClick<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-2-表单验证模块" tabindex="-1"><a class="header-anchor" href="#_4-2-表单验证模块" aria-hidden="true">#</a> 4.2 表单验证模块</h3>
<h3 id="_4-3-deepcopy-深拷贝" tabindex="-1"><a class="header-anchor" href="#_4-3-deepcopy-深拷贝" aria-hidden="true">#</a> 4.3 deepcopy 深拷贝</h3>
<h3 id="_4-4-别名" tabindex="-1"><a class="header-anchor" href="#_4-4-别名" aria-hidden="true">#</a> 4.4 别名</h3>
<p>alias 解决引入文件路径问题</p>
<p>使用import导入时可以简写</p>
<p>在标签内使用src时需要在前加 <code v-pre>~</code></p>
<p><code v-pre>import TabBar from &quot;@/views/TabBar&quot; </code></p>
<p><code v-pre>&lt;img src=&quot;~@/assets/img/home.svg&quot;&gt;</code></p>
<p>webpack.base.conf.js 文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">'.js'</span><span class="token punctuation">,</span> <span class="token string">'.vue'</span><span class="token punctuation">,</span> <span class="token string">'.json'</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'@'</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'src'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">'assets'</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'@/assets'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">'components'</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'@/components'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">'views'</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'@/views'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-使用网页md编辑器组件" tabindex="-1"><a class="header-anchor" href="#_4-5-使用网页md编辑器组件" aria-hidden="true">#</a> 4.5 使用网页md编辑器组件</h3>
<h4 id="_4-5-1-vue3下安装" tabindex="-1"><a class="header-anchor" href="#_4-5-1-vue3下安装" aria-hidden="true">#</a> 4.5.1 vue3下安装</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i mavon-editor@3.0.0-beta
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>main.js中引入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> mavonEditor <span class="token keyword">from</span> <span class="token string">'mavon-editor'</span>
<span class="token keyword">import</span> <span class="token string">'mavon-editor/dist/css/index.css'</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>mavonEditor<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件内使用</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mavon-editor</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formLabelAlign.content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mavon-editor</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-5-2-vue2下安装" tabindex="-1"><a class="header-anchor" href="#_4-5-2-vue2下安装" aria-hidden="true">#</a> 4.5.2 vue2下安装</h4>
<p>npm i mavon-editor</p>
<h4 id="_4-5-3-解析" tabindex="-1"><a class="header-anchor" href="#_4-5-3-解析" aria-hidden="true">#</a> 4.5.3 解析</h4>
<p>npm install markdown-it --save</p>
<p>npm install github-markdown-css</p>
<h3 id="_4-6-mitt" tabindex="-1"><a class="header-anchor" href="#_4-6-mitt" aria-hidden="true">#</a> 4.6 mitt</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cnpm <span class="token function">install</span> mitt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-7-path" tabindex="-1"><a class="header-anchor" href="#_4-7-path" aria-hidden="true">#</a> 4.7 path</h3>
<h3 id="_4-8-boostrape" tabindex="-1"><a class="header-anchor" href="#_4-8-boostrape" aria-hidden="true">#</a> 4.8 boostrape</h3>
<p>安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cnpm i bootstrap@3
cnpm i autoprefixer  
cnpm i @popperjs/core
cnpm i jquery
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入 main.js</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import 'bootstrap'
import $ from 'jquery'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>组件中引入</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-9-swiper" tabindex="-1"><a class="header-anchor" href="#_4-9-swiper" aria-hidden="true">#</a> 4.9 swiper</h3>
<p>安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cnpm i swiper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>swiper</span>
        <span class="token attr-name">:slidesPerView</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span>
        <span class="token attr-name">:spaceBetween</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>30<span class="token punctuation">"</span></span>
        <span class="token attr-name">:loop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
        <span class="token attr-name">:pagination</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
          clickable: true,
        }<span class="token punctuation">"</span></span>
        <span class="token attr-name">:navigation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
        <span class="token attr-name">:modules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modules<span class="token punctuation">"</span></span>
        <span class="token attr-name">:autoplay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
          delay: 3000,
          disableOnInteraction: false,         
        }<span class="token punctuation">"</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mySwiper<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>swiper-slide</span><span class="token punctuation">></span></span>s1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>swiper-slide</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>swiper-slide</span><span class="token punctuation">></span></span>s1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>swiper-slide</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>swiper</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>Swiper<span class="token punctuation">,</span> SwiperSlide<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"swiper/vue"</span><span class="token punctuation">;</span>
    <span class="token comment">//自动翻页</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Autoplay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'swiper'</span><span class="token punctuation">;</span>
    <span class="token comment">//左右翻页箭头和翻页条</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Pagination<span class="token punctuation">,</span> Navigation<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"swiper"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"swiper/css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"swiper/css/pagination"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"swiper/css/navigation"</span><span class="token punctuation">;</span>
    
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Rotation"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Swiper<span class="token punctuation">,</span>
    SwiperSlide
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	<span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token punctuation">[</span>Pagination<span class="token punctuation">,</span> Navigation<span class="token punctuation">,</span> Autoplay<span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
      modules
  <span class="token punctuation">}</span>  
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.Rotation</span> <span class="token punctuation">{</span>
  <span class="token selector">//容器0 轮播图
  .mySwiper</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> fit-content<span class="token punctuation">;</span>
    //<span class="token property">margin</span><span class="token punctuation">:</span> 0 <span class="token function">calc</span><span class="token punctuation">(</span><span class="token punctuation">(</span>100% - 10.40rem<span class="token punctuation">)</span> / 2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token selector">img</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      //<span class="token property">height</span><span class="token punctuation">:</span> 6rem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-10-draggable" tabindex="-1"><a class="header-anchor" href="#_4-10-draggable" aria-hidden="true">#</a> 4.10 draggable</h3>
<p>安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cnpm i -S vuedraggable@next 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>引入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> draggable <span class="token keyword">from</span> <span class="token string">'vuedraggable'</span>

<span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    draggable
<span class="token punctuation">}</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"AboutView"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>使用draggable组件 v<span class="token operator">-</span>model绑定数组<span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>draggable v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"myArray"</span>  @start<span class="token operator">=</span><span class="token string">"onStart"</span> @end<span class="token operator">=</span><span class="token string">"onEnd"</span> item<span class="token operator">-</span>key<span class="token operator">=</span><span class="token string">"id"</span> animation<span class="token operator">=</span><span class="token string">"1000"</span> chosen<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"chosen"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>template #item<span class="token operator">=</span><span class="token string">"{element}"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"item"</span> <span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>element<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

    <span class="token operator">&lt;</span><span class="token operator">/</span>draggable<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>useRoute<span class="token punctuation">,</span> useRouter<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue-router"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>useStore<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuex"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> draggable <span class="token keyword">from</span> <span class="token string">'vuedraggable'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"AboutView"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    draggable
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> drag <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span>  myArray<span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'www.itxst.com'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'www.baidu.com'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'www.taobao.com'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">40</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'www.yahoo.com'</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">onStart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      drag<span class="token punctuation">.</span>value<span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//拖拽结束事件</span>
    <span class="token keyword">const</span> <span class="token function-variable function">onEnd</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      drag<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      myArray<span class="token punctuation">,</span>
      drag<span class="token punctuation">,</span>
      onStart<span class="token punctuation">,</span>
      onEnd
    <span class="token punctuation">}</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>style scoped lang<span class="token operator">=</span><span class="token string">"scss"</span><span class="token operator">></span>
<span class="token punctuation">.</span>AboutView <span class="token punctuation">{</span>
  <span class="token comment">/*被拖拽对象的样式*/</span>
  <span class="token punctuation">.</span>item <span class="token punctuation">{</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 6px<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #fdfdfd<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> solid 1px #eee<span class="token punctuation">;</span>
    margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
    <span class="token literal-property property">cursor</span><span class="token operator">:</span> move<span class="token punctuation">;</span>


    <span class="token operator">&amp;</span><span class="token operator">:</span>hover <span class="token punctuation">{</span>
      background<span class="token operator">-</span>color<span class="token operator">:</span> #f1f1f1<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token punctuation">.</span>chosen <span class="token punctuation">{</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> solid 2px #3089dc <span class="token operator">!</span>important<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-11-screenfull" tabindex="-1"><a class="header-anchor" href="#_4-11-screenfull" aria-hidden="true">#</a> 4.11 screenfull</h3>
<p>安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cnpm install screenfull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>引入</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import screenfull from "screenfull";
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例子</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>screen_full<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>requestFullScreen<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        当前屏幕全屏<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toggleFullscreen()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        让指定元素全屏<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>log<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span><span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 100px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>useRoute<span class="token punctuation">,</span> useRouter<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue-router"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>useStore<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuex"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> screenfull <span class="token keyword">from</span> <span class="token string">"screenfull"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"screen_full"</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
    <span class="token keyword">const</span> <span class="token function-variable function">requestFullScreen</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>screenfull<span class="token punctuation">.</span>isEnabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        screenfull<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">toggleFullscreen</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> ele <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//指定全屏区域元素</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>screenfull<span class="token punctuation">.</span>isEnabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        screenfull<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      requestFullScreen<span class="token punctuation">,</span>
      toggleFullscreen
    <span class="token punctuation">}</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.screen_full</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>


<span class="token selector">#log</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span> //超出全屏内容出现滚动条
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-12-codemirror" tabindex="-1"><a class="header-anchor" href="#_4-12-codemirror" aria-hidden="true">#</a> 4.12 codemirror</h3>
<p>安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cnpm install vue-codemirror
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-13-day-js" tabindex="-1"><a class="header-anchor" href="#_4-13-day-js" aria-hidden="true">#</a> 4.13 day.js</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cnpm install dayjs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-14-mock" tabindex="-1"><a class="header-anchor" href="#_4-14-mock" aria-hidden="true">#</a> 4.14 mock</h3>
<p>模拟接口</p>
<h3 id="_4-15-video-js" tabindex="-1"><a class="header-anchor" href="#_4-15-video-js" aria-hidden="true">#</a> 4.15  Video.js</h3>
<h3 id="_4-100-其他" tabindex="-1"><a class="header-anchor" href="#_4-100-其他" aria-hidden="true">#</a> 4.100 其他</h3>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"clipboard"</span><span class="token operator">:</span> <span class="token string">"2.0.4"</span><span class="token punctuation">,</span> <span class="token comment">//复制到剪贴板</span>
<span class="token property">"codemirror"</span><span class="token operator">:</span> <span class="token string">"5.45.0"</span><span class="token punctuation">,</span> <span class="token comment">// 代码编辑器</span>
<span class="token property">"dropzone"</span><span class="token operator">:</span> <span class="token string">"5.5.1"</span><span class="token punctuation">,</span> <span class="token comment">//Dropzone 将显示文件预览和上传进度</span>
<span class="token property">"file-saver"</span><span class="token operator">:</span> <span class="token string">"2.0.1"</span><span class="token punctuation">,</span><span class="token comment">//保存文件</span>
<span class="token property">"jszip"</span><span class="token operator">:</span> <span class="token string">"3.2.1"</span><span class="token punctuation">,</span> <span class="token comment">//创建压缩文件等</span>
<span class="token property">"nprogress"</span><span class="token operator">:</span> <span class="token string">"0.2.0"</span><span class="token punctuation">,</span><span class="token comment">//进度条</span>

<span class="token property">"vue-splitpane"</span><span class="token operator">:</span> <span class="token string">"1.0.4"</span><span class="token punctuation">,</span><span class="token comment">//分屏</span>
<span class="token property">"vuedraggable"</span><span class="token operator">:</span> <span class="token string">"2.20.0"</span><span class="token punctuation">,</span><span class="token comment">//拖放</span>
<span class="token property">"xlsx"</span><span class="token operator">:</span> <span class="token string">"0.14.1"</span><span class="token comment">//excel操作</span>

<span class="token property">"gsap"</span><span class="token operator">:</span> <span class="token string">"^3.6.1"</span><span class="token punctuation">,</span> <span class="token comment">//动画库</span>
<span class="token property">"husky"</span><span class="token operator">:</span> <span class="token string">"1.3.1"</span><span class="token punctuation">,</span> <span class="token comment">//现代原生 Git 钩子变得简单</span>
<span class="token property">"plop"</span><span class="token operator">:</span> <span class="token string">"2.3.0"</span><span class="token punctuation">,</span><span class="token comment">//文件生成模板</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第5章-axios" tabindex="-1"><a class="header-anchor" href="#第5章-axios" aria-hidden="true">#</a> 第5章 axios</h2>
<h3 id="_5-1-概念" tabindex="-1"><a class="header-anchor" href="#_5-1-概念" aria-hidden="true">#</a> 5.1 概念</h3>
<p>Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中</p>
<h3 id="_5-2-特点" tabindex="-1"><a class="header-anchor" href="#_5-2-特点" aria-hidden="true">#</a> 5.2 特点</h3>
<ul>
<li>从浏览器中创建 <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest" target="_blank" rel="noopener noreferrer">XMLHttpRequests<ExternalLinkIcon/></a></li>
<li>从 node.js 创建 <a href="http://nodejs.org/api/http.html" target="_blank" rel="noopener noreferrer">http<ExternalLinkIcon/></a> 请求</li>
<li>支持 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">Promise<ExternalLinkIcon/></a> API</li>
<li>拦截请求和响应</li>
<li>转换请求数据和响应数据</li>
<li>取消请求</li>
<li>自动转换 JSON 数据</li>
<li>客户端支持防御 XSRF</li>
</ul>
<h3 id="_5-3-安装" tabindex="-1"><a class="header-anchor" href="#_5-3-安装" aria-hidden="true">#</a> 5.3 安装</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cnpm <span class="token function">install</span> axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-4-发送请求" tabindex="-1"><a class="header-anchor" href="#_5-4-发送请求" aria-hidden="true">#</a> 5.4 发送请求</h3>
<p>原生请求</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取远端图片</span>
<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">'get'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'http://bit.ly/2mTM3nY'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">responseType</span><span class="token operator">:</span><span class="token string">'stream'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  response<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">'ada_lovelace.jpg'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>封装的请求方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">)</span>
axios<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">)</span>
axios<span class="token punctuation">.</span><span class="token function">head</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">)</span>
axios<span class="token punctuation">.</span><span class="token function">options</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">)</span>
axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> data<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
axios<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> data<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
axios<span class="token punctuation">.</span><span class="token function">patch</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> data<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
axios<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//执行并发请求</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-配置拦截" tabindex="-1"><a class="header-anchor" href="#_5-5-配置拦截" aria-hidden="true">#</a> 5.5 配置拦截</h3>
<h3 id="_5-6-封装项目api" tabindex="-1"><a class="header-anchor" href="#_5-6-封装项目api" aria-hidden="true">#</a> 5.6 封装项目api</h3>
<h2 id="第6章-vue-router" tabindex="-1"><a class="header-anchor" href="#第6章-vue-router" aria-hidden="true">#</a> 第6章 vue-router</h2>
<h3 id="_6-1-vue路由" tabindex="-1"><a class="header-anchor" href="#_6-1-vue路由" aria-hidden="true">#</a> 6.1 vue路由</h3>
<p>动态路由</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// router.js</span>
<span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> goods<span class="token operator">/</span><span class="token operator">:</span>id<span class="token punctuation">}</span>

<span class="token comment">//组件中</span>
<span class="token keyword">const</span> id <span class="token operator">=</span> route<span class="token punctuation">.</span>param<span class="token punctuation">.</span>id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由导航</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"/home"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>路由元信息</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// router.js</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'home'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> HomeView<span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由拦截认证</p>
<p>在组件中获取 router  route</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter<span class="token punctuation">,</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由跳转后不在顶部解决方案</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>index<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>index <span class="token operator">===</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>内外部合并路由跳转</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//产品矩阵的路由跳转按钮</span>
<span class="token keyword">const</span> <span class="token function-variable function">routeClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
	<span class="token comment">//通过是否包含http关键字判断内外部链接</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token string">"http"</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//外部链接</span>
		window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		<span class="token comment">//内部链接</span>
		router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由守卫</p>
<p>路由拦截</p>
<p>路由跳转</p>
<p>router和route的区别</p>
<h2 id="第7章-vuex" tabindex="-1"><a class="header-anchor" href="#第7章-vuex" aria-hidden="true">#</a> 第7章 vuex</h2>
<h3 id="_7-1-vuex介绍" tabindex="-1"><a class="header-anchor" href="#_7-1-vuex介绍" aria-hidden="true">#</a> 7.1 vuex介绍</h3>
<h3 id="_7-2-核心模块" tabindex="-1"><a class="header-anchor" href="#_7-2-核心模块" aria-hidden="true">#</a> 7.2 核心模块</h3>
<ul>
<li>
<p>state里定义数据</p>
</li>
<li>
<p>getters里定义getter方法</p>
</li>
<li>
<p>muation里定义set方法</p>
</li>
<li>
<p>action 定义异步的set方法</p>
</li>
<li>
<p>modules 定义模块</p>
</li>
</ul>
<p>src / store / index.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span>

<span class="token keyword">import</span> cart <span class="token keyword">from</span> <span class="token string">'./module/cart.js'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"保留"</span><span class="token punctuation">,</span><span class="token string">"123"</span><span class="token punctuation">,</span><span class="token string">"不知道"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token function">checkedAll</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> state<span class="token punctuation">.</span>list<span class="token punctuation">.</span>length
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">checkAllCommit</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"点击全选"</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">checkAll</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>commit<span class="token punctuation">,</span> getters<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"checkAll"</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        cart
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src / store / module / cart.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-在组件内获取vuex" tabindex="-1"><a class="header-anchor" href="#_7-3-在组件内获取vuex" aria-hidden="true">#</a> 7.3 在组件内获取vuex</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>useStore<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuex"</span><span class="token punctuation">;</span>

<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//在组件内获取store</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token punctuation">{</span>
        store
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//在组件获取Action</span>
  	<span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'checkAll'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">//在组件内获取Mutations</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'selectOne'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>    
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">//在组件内获取State</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function-variable function">list</span> <span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>cart<span class="token punctuation">.</span>list<span class="token punctuation">,</span>
      <span class="token function-variable function">selectedList</span> <span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>cart<span class="token punctuation">.</span>selectedList<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">//在组件内获取Getters</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'checkedAll'</span><span class="token punctuation">,</span><span class="token string">'totalCount'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4-持久化vuex" tabindex="-1"><a class="header-anchor" href="#_7-4-持久化vuex" aria-hidden="true">#</a> 7.4 持久化vuex</h3>
<ul>
<li>vuex和其他存储的区别</li>
</ul>
<p>cookie</p>
<p>localstore  本地存储空间</p>
<p>sessionstore  会话存储空间 区别</p>
<ul>
<li>将 vuex 的数据序列化存到 localstore , 并从中反序列化读</li>
</ul>
<h3 id="_7-5-提交方法" tabindex="-1"><a class="header-anchor" href="#_7-5-提交方法" aria-hidden="true">#</a> 7.5 提交方法</h3>
<p>组件内提交</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'SET_TOKEN'</span><span class="token punctuation">,</span>jwt<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-6-异步方法" tabindex="-1"><a class="header-anchor" href="#_7-6-异步方法" aria-hidden="true">#</a> 7.6 异步方法</h3>
<h2 id="第8章-解决方案" tabindex="-1"><a class="header-anchor" href="#第8章-解决方案" aria-hidden="true">#</a> 第8章 解决方案</h2>
<h3 id="_8-1-webstrom-vue模板" tabindex="-1"><a class="header-anchor" href="#_8-1-webstrom-vue模板" aria-hidden="true">#</a> 8.1 webstrom vue模板</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><h3 id="_8-2-对话框显示方案" tabindex="-1"><a class="header-anchor" href="#_8-2-对话框显示方案" aria-hidden="true">#</a> 8.2 对话框显示方案</h3>
<p>父子组件,父组件按钮打开一个对话框,对话框是他的子组件,</p>
<p>实现是否显示对话框的双向绑定.</p>
<p><strong>子组件 UserAdd</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//html</span>
<span class="token operator">&lt;</span>el<span class="token operator">-</span>dialog
    title<span class="token operator">=</span><span class="token string">"新增用户"</span>
    <span class="token operator">:</span>model<span class="token operator">-</span>value<span class="token operator">=</span><span class="token string">"adduserbtn"</span>
    @close<span class="token operator">=</span><span class="token string">"onClose"</span>    <span class="token comment">//点右上角的叉子</span>
    @open<span class="token operator">=</span><span class="token string">"onOpen"</span>      <span class="token comment">//打开时</span>
<span class="token operator">></span>
    <span class="token operator">&lt;</span>span<span class="token operator">></span>你好<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>    
	<span class="token operator">&lt;</span>template #footer<span class="token operator">></span>
    	<span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"dialog-footer"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>el<span class="token operator">-</span>button 
				type<span class="token operator">=</span><span class="token string">"primary"</span> 
				@click<span class="token operator">=</span><span class="token string">"onCancel"</span>
       		 <span class="token operator">></span>取消<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">></span>
        	<span class="token operator">&lt;</span>el<span class="token operator">-</span>button 
				type<span class="token operator">=</span><span class="token string">"primary"</span> 
				@click<span class="token operator">=</span><span class="token string">"handelConfirm"</span>
       		 <span class="token operator">></span>确定<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">></span>
      	<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>dialog<span class="token operator">></span>        

<span class="token comment">//script</span>
<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">adduserbtn</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> adduserbtn <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>adduserbtn<span class="token punctuation">)</span>
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>adduserbtn<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">//查看父组件传过来的值是否变化，从而修改值</span>
      adduserbtn<span class="token punctuation">.</span>value <span class="token operator">=</span> val
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> adduserbtn<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">//查看子组件值是否变化，在赋值给父组件</span>
      context<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'update:adduserbtn'</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">//关闭操作</span>
    <span class="token keyword">let</span> <span class="token function-variable function">close</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        adduserbtn<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    
    
    <span class="token comment">//窗口打开</span>
    <span class="token keyword">let</span> <span class="token function-variable function">onOpen</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    	<span class="token operator">...</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//窗口关闭</span>
    <span class="token keyword">let</span> <span class="token function-variable function">onClose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      	<span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      	<span class="token operator">...</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//提交按钮</span>
    <span class="token keyword">let</span> <span class="token function-variable function">handelConfirm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      	<span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>
    
     <span class="token comment">//取消按钮</span>
    <span class="token keyword">let</span> <span class="token function-variable function">onCancel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
     	<span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
    

<span class="token comment">//style</span>
给对话框之外添加遮罩层 并且无法点击
设置滚轮不能滚动
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>父组件</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>//html
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UserAdd</span> <span class="token attr-name"><span class="token namespace">v-model:</span>adduserbtn</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>adduserbtn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>UserAdd</span><span class="token punctuation">></span></span>

//script
let adduserbtn = ref(false)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-复制内容到剪贴板" tabindex="-1"><a class="header-anchor" href="#_8-3-复制内容到剪贴板" aria-hidden="true">#</a> 8.3 复制内容到剪贴板</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>text <span class="token operator">=</span> <span class="token string">"123"</span> 

<span class="token keyword">if</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">writeText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-生产和开发环境配置" tabindex="-1"><a class="header-anchor" href="#_8-4-生产和开发环境配置" aria-hidden="true">#</a> 8.4 生产和开发环境配置</h3>
<p>/ vue.config.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">publicPath</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> 
    <span class="token string">'production'</span> <span class="token operator">?</span> <span class="token string">'./'</span> <span class="token operator">:</span> <span class="token string">'/'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-5-升级为https连接" tabindex="-1"><a class="header-anchor" href="#_8-5-升级为https连接" aria-hidden="true">#</a> 8.5 升级为https连接</h3>
<p>public / index.html</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>	
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Content-Security-Policy<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>upgrade-insecure-requests<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>踩坑记录, 加上这个meta以后 , 上传到云服务器后, 请求的资源都变成了https开头的, 但是nginx默认是http连接 , 所以访问不到</p>
<h3 id="_8-6-回到顶部组件" tabindex="-1"><a class="header-anchor" href="#_8-6-回到顶部组件" aria-hidden="true">#</a> 8.6 回到顶部组件</h3>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!--    锚点--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>head<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--    按钮--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>gohead('#head')<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>回到顶部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--    js--></span>
const gohead = (id)=>{
    console.log("回到顶部")
    document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
	});
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-7-路由过渡动画" tabindex="-1"><a class="header-anchor" href="#_8-7-路由过渡动画" aria-hidden="true">#</a> 8.7 路由过渡动画</h3>
<ul>
<li>
<p>路由视图</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ Component }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transName<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>out-in<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Component<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>过渡模式 mode</p>
</li>
</ul>
<p>default：淡入和淡出过渡同时发生</p>
<p>in-out：新元素首先淡入。 然后当前元素淡出。</p>
<p>out-in：当前元素先淡出。 然后新元素开始淡入。</p>
<ul>
<li>过渡周期</li>
</ul>
<p><code v-pre>v-enter-from</code> / <code v-pre>v-leave-from</code>  过渡的初始状态，过度开始后将其删除</p>
<p><code v-pre>v-enter-active</code> / <code v-pre>v-leave-active</code>  过渡的激活状态</p>
<p><code v-pre>v-enter-to</code> / <code v-pre>v-leave-to</code>  过渡的结束状态</p>
<ol>
<li>始终向右滑动淡出</li>
</ol>
<p>动画样式</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.fade-enter-active,
.fade-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.fade-enter-from,
.fade-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.fade-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.fade-leave-from</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>
<p>上下压缩动画</p>
</li>
<li>
<p>根据index值不同不同方向滑动</p>
</li>
</ol>
<p>添加路由元信息</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">'/app'</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"views"</span><span class="token punctuation">,</span>  
    <span class="token literal-property property">component</span><span class="token operator">:</span> views<span class="token punctuation">,</span> 
    <span class="token literal-property property">meta</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/choiceAddress'</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'choiceAddress'</span><span class="token punctuation">,</span>  
    <span class="token literal-property property">component</span><span class="token operator">:</span> addrespage<span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token literal-property property">index</span><span class="token operator">:</span>  <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>监听 route</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 类名</span>
<span class="token keyword">let</span> silderName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">"slide-left"</span><span class="token punctuation">)</span>

<span class="token comment">//旧路由</span>
<span class="token keyword">let</span> oldroute <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
oldroute<span class="token punctuation">.</span>value <span class="token operator">=</span> route<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>index<span class="token punctuation">;</span>


<span class="token function">watch</span><span class="token punctuation">(</span>route<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span><span class="token keyword">from</span></span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"当前路由"</span><span class="token punctuation">,</span>route<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>index<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"旧路由"</span><span class="token punctuation">,</span>oldroute<span class="token punctuation">.</span>value<span class="token punctuation">)</span>

      <span class="token comment">//判断为前进、还是后退，同时更改类名</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>index <span class="token operator">&lt;</span> oldroute<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
        silderName<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'slide-left'</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        silderName<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'slide-right'</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">//更新旧路由</span>
      oldroute<span class="token punctuation">.</span>value <span class="token operator">=</span> route<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>index<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样式</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.slide-left-enter-active, .slide-right-enter-active</span><span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all .5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.slide-left-enter-from, .slide-left-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-100vw<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.slide-right-enter-from, .slide-right-leave-to</span><span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>100vw<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-8-网页换肤" tabindex="-1"><a class="header-anchor" href="#_8-8-网页换肤" aria-hidden="true">#</a> 8.8 网页换肤</h3>
<p>1.换肤组件</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changeTheme('white')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    白天主题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changeTheme('dark')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    黑夜主题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>    
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//获取原型对象    </span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> proxy <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    
    <span class="token comment">//点击事件</span>
	<span class="token keyword">const</span> <span class="token function-variable function">changeTheme</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
      localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'themeColor'</span><span class="token punctuation">,</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
      proxy<span class="token punctuation">.</span><span class="token function">$resetSetItem</span><span class="token punctuation">(</span><span class="token string">'themeColor'</span><span class="token punctuation">,</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      changeTheme
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>    
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>    
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.main.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//改变皮肤函数 </span>
<span class="token keyword">const</span> <span class="token function-variable function">resetSetItem</span>  <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> newVal</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">'themeColor'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建一个StorageEvent事件</span>
  <span class="token keyword">var</span> newStorageEvent <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createEvent</span><span class="token punctuation">(</span><span class="token string">'StorageEvent'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> storage <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">setItem</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">k<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 初始化创建的事件</span>
	  newStorageEvent<span class="token punctuation">.</span><span class="token function">initStorageEvent</span><span class="token punctuation">(</span><span class="token string">'setItem'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> k<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> val<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 派发对象</span>
	  window<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>newStorageEvent<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> storage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//把函数挂载app对象上</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$resetSetItem  <span class="token operator">=</span> resetSetItem <span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.index.html</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">var</span> coverSupport <span class="token operator">=</span> <span class="token string">'CSS'</span> <span class="token keyword">in</span> window <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> <span class="token constant">CSS</span><span class="token punctuation">.</span>supports <span class="token operator">===</span> <span class="token string">'function'</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token constant">CSS</span><span class="token punctuation">.</span><span class="token function">supports</span><span class="token punctuation">(</span><span class="token string">'top: env(a)'</span><span class="token punctuation">)</span> <span class="token operator">||</span>
        <span class="token constant">CSS</span><span class="token punctuation">.</span><span class="token function">supports</span><span class="token punctuation">(</span><span class="token string">'top: constant(a)'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>
        <span class="token string">'&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'</span> <span class="token operator">+</span>
        <span class="token punctuation">(</span>coverSupport <span class="token operator">?</span> <span class="token string">', viewport-fit=cover'</span> <span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'" />'</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
 
     <span class="token comment">&lt;!--首先引入默认的皮肤样式--></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./src/static/theme/dark.scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token comment">&lt;!--app-html--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/src/main.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">

  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>



<span class="token comment">&lt;!--主题变换第三步, --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">//在js添加默认引入的dark.css,</span>
    <span class="token comment">// 如果不引入，ivew自带的样式会覆盖在html中引入的dark.css,所以需要在js重新引入，</span>
    <span class="token comment">// 用来覆盖ivew的默认样式</span>
    <span class="token keyword">var</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"link"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    link<span class="token punctuation">.</span>rel <span class="token operator">=</span> <span class="token string">"stylesheet"</span><span class="token punctuation">;</span>
    link<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">"text/css"</span><span class="token punctuation">;</span>
    link<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">"./src/static/theme/dark.css"</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> head <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"head"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//监听sessionStorage切换主题</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'setItem'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> themeColor <span class="token operator">=</span> sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'themeColor'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">"./src/static/theme/"</span> <span class="token operator">+</span> themeColor <span class="token operator">+</span> <span class="token string">".scss"</span>
        <span class="token function">changeStyles</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">function</span> <span class="token function">changeStyles</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> links <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"link"</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>links<span class="token punctuation">)</span>
        <span class="token comment">//替换之前引入的css</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>links<span class="token punctuation">.</span>length <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> links<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// links[i].parentNode.removeChild(links[i]);</span>
                links<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>href <span class="token operator">=</span> url
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">var</span> links <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"link"</span><span class="token punctuation">)</span>
        <span class="token comment">//console.log(links)</span>

    <span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.创建主题scss文件</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token comment">// src/static/theme/dark.scss</span>
<span class="token selector">view </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token comment">// src/static/theme/white.scss</span>
<span class="token selector">view </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-9-全局挂载函数" tabindex="-1"><a class="header-anchor" href="#_8-9-全局挂载函数" aria-hidden="true">#</a> 8.9 全局挂载函数</h3>
<p>src/tools/tools.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//产品矩阵的路由跳转按钮</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">"@/router"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">routeClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
  url <span class="token operator">=</span> url <span class="token operator">+</span> <span class="token string">""</span>
  <span class="token comment">//点击立即咨询</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token string">"http"</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token comment">//点击了解更多按钮</span>
    router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>routeClick<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./tools/tools.js'</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$routeClick <span class="token operator">=</span> routeClick<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>组件中使用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>el<span class="token operator">-</span>button @click<span class="token operator">=</span><span class="token string">"routeClick('https://baidu.com')"</span>
<span class="token operator">></span>免费体验<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">></span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>getCurrentInstance<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 	<span class="token keyword">const</span> <span class="token punctuation">{</span> proxy <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//关键代码</span>
    <span class="token keyword">const</span> routeClick <span class="token operator">=</span> proxy<span class="token punctuation">.</span>$routeClick<span class="token punctuation">;</span><span class="token comment">//关键代码</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      routeClick
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-10-图片压缩" tabindex="-1"><a class="header-anchor" href="#_8-10-图片压缩" aria-hidden="true">#</a> 8.10 图片压缩</h3>
<p>安装依赖</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cnpm install imagemin-pngquant --save-dev 
cnpm install image-webpack-loader --save-dev 
cnpm install compression-webpack-plugin --save-dev
cnpm install autoprefixer -S  
cnpm install @popperjs/core -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue.config.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

    <span class="token comment">//压缩图片方法</span>
    <span class="token comment">// 解决ie11兼容ES6</span>
    <span class="token comment">// config.entry('main').add('babel-polyfill')</span>
    <span class="token comment">// 开启图片压缩</span>
    config<span class="token punctuation">.</span>module<span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">'images'</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpe?g|gif|svg)(\?.*)?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'image-webpack-loader'</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">'image-webpack-loader'</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">bypassOnDebug</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 开启js、css压缩</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'development'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">'compressionPlugin'</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$|\.html$|.\css</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// 匹配文件名</span>
            <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">10240</span><span class="token punctuation">,</span> <span class="token comment">// 对超过10k的数据压缩</span>
            <span class="token literal-property property">deleteOriginalAssets</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 不删除源文件</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">transpileDependencies</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'biyi-admin'</span><span class="token punctuation">,</span> <span class="token comment">// 指定对第三方依赖包进行babel-polyfill处理</span>
<span class="token punctuation">]</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-11-滚动事件简单版" tabindex="-1"><a class="header-anchor" href="#_8-11-滚动事件简单版" aria-hidden="true">#</a> 8.11 滚动事件简单版</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//当滚动到指定距离后触发改变</span>
<span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">scroll</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">let</span> srcollTop <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">scrollTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>srcollTop <span class="token operator">&lt;</span> <span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#affect"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"display"</span><span class="token punctuation">,</span><span class="token string">"none"</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#affect"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"display"</span><span class="token punctuation">,</span><span class="token string">""</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
