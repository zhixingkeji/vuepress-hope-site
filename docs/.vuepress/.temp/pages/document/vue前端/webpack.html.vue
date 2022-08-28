<template><div><h2 id="第1章-webpack简介" tabindex="-1"><a class="header-anchor" href="#第1章-webpack简介" aria-hidden="true">#</a> 第1章 webpack简介</h2>
<h3 id="_1-1-前端打包工具的进化" tabindex="-1"><a class="header-anchor" href="#_1-1-前端打包工具的进化" aria-hidden="true">#</a> 1.1 前端打包工具的进化</h3>
<p><strong>解决作用域问题</strong></p>
<p>早期 gruf 和 sss 的接打包方案</p>
<p>使用函数立即调用的方法 (复杂 效率低, 修改一行代码一个js文件就要重新打包)</p>
<p><strong>解决打代码拆分问题</strong></p>
<p>nodejs 基于 commonjs 模块化 (需要第三方工具编译 浏览器才能运行)</p>
<p><strong>解决浏览器不支持node模块化问题</strong></p>
<p>使用第三方工具browserify和requirejs</p>
<p><strong>解决使用node模块化后程序变复杂的问题</strong></p>
<p>es 模块化 ( 浏览器支持不完整)</p>
<p><strong>webpack的出现</strong></p>
<p>支持 commonjs ESmodule 两种方案，并且能打包静态资源</p>
<p><strong>webpack 竞品</strong></p>
<p>parcel rollup vite</p>
<h3 id="_1-2-webpack-概念" tabindex="-1"><a class="header-anchor" href="#_1-2-webpack-概念" aria-hidden="true">#</a> 1.2 webpack 概念</h3>
<p>webpack是一种前端资源构建工具，一个静态模块打包器</p>
<p>在Webpack看来，前端的所有资源文件（js/json/css/img/less/…）都会作为模块处理</p>
<p>它将根据模块的依赖关系进行静态分析，打包生成对应的静态资源bundle</p>
<h3 id="_1-3-webpack-安装" tabindex="-1"><a class="header-anchor" href="#_1-3-webpack-安装" aria-hidden="true">#</a> 1.3 webpack 安装</h3>
<p>首先需要准备node环境</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">node</span> <span class="token parameter variable">-v</span>  //推荐使用LTS版本
$ cnpm <span class="token parameter variable">-v</span>  //国内镜像源
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建npm项目</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 webpack</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cnpm <span class="token function">install</span> webpack webpack-cli --save-dev  //开发依赖
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container info"><p class="custom-container-title">相关信息</p>
<p>不推荐全局安装webpack，不同项目之间使用的版本不同，全局安装后可能会出现一些错误</p>
</div>
<h3 id="_1-4-自定义-webpack-配置" tabindex="-1"><a class="header-anchor" href="#_1-4-自定义-webpack-配置" aria-hidden="true">#</a> 1.4 自定义 webpack 配置</h3>
<p>项目根目录下创建 <code v-pre>webpack.config.js</code>  (必须)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//入口文件</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>
    
    
    <span class="token comment">//输出文件</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'bundle.js'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'./dist'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token comment">//模式</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'none'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行webpack打包</p>
<p><code v-pre>npx webpack</code></p>
<p>会再 <code v-pre>./dist</code> 目录下生成一个js文件</p>
<p>在项目的 <code v-pre>index.html</code> 文件中引入该 js 文件即可</p>
<p>但每次都需要手动引入比较麻烦</p>
<p>使用插件可以根据模板自动生成一个 index.html 并且引入 打包后的js文件</p>
<h3 id="_1-5-webpack-五个核心概念" tabindex="-1"><a class="header-anchor" href="#_1-5-webpack-五个核心概念" aria-hidden="true">#</a> 1.5 Webpack 五个核心概念</h3>
<ol>
<li>Entry
入口（Entry）指示Webpack以哪个文件为入口起点开始打包，分析构建内部依赖图。</li>
<li>Output
输出（Output）指示Webpack打包后的资源bundles输出到哪里去，以及如何命名。</li>
<li>Loader
Loader让Webpack能够去处理那些非JavaScript文件（Webpack自身只理解JavaScript）</li>
<li>Plugins
插件（Plugins）可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。</li>
<li>Mode
模式（Mode）指示Webpack使用相应模式的配置。</li>
</ol>
<h3 id="_1-6-常用命令行指令" tabindex="-1"><a class="header-anchor" href="#_1-6-常用命令行指令" aria-hidden="true">#</a> 1.6 常用命令行指令</h3>
<h2 id="第2章-plugins插件" tabindex="-1"><a class="header-anchor" href="#第2章-plugins插件" aria-hidden="true">#</a> 第2章 plugins插件</h2>
<h3 id="_2-1-插件概念" tabindex="-1"><a class="header-anchor" href="#_2-1-插件概念" aria-hidden="true">#</a> 2.1 插件概念</h3>
<h3 id="_2-2-使用html插件" tabindex="-1"><a class="header-anchor" href="#_2-2-使用html插件" aria-hidden="true">#</a> 2.2 使用html插件</h3>
<p>安装插件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cnpm <span class="token function">install</span> html-webpack-plugin <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置文件 webpack.config.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//入口文件</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>
    
    <span class="token comment">//输出文件</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//打包后的js文件名</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'bundle.js'</span><span class="token punctuation">,</span>
        <span class="token comment">//打包后输出的文件夹,必须为绝对路径</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'./dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">//自动清理上一次打包文件</span>
        <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token comment">//插件</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">//自动生成index.html插件</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">//模板,自己项目中的index.html文件</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'./index.html'</span><span class="token punctuation">,</span>
            <span class="token comment">//打包后的文件名</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'index.html'</span><span class="token punctuation">,</span>
            <span class="token comment">//js引入的位置 默认head 可选body</span>
            <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token string">'head'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    
    <span class="token comment">//自动刷新浏览器服务</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">static</span><span class="token operator">:</span> <span class="token string">'./dist'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token comment">//开发工具  精准定位代码行数</span>
    <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">'inline-source-map'</span><span class="token punctuation">,</span>
    
    <span class="token comment">//模式 可选none development开发模式</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'development'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-热更新" tabindex="-1"><a class="header-anchor" href="#_1-3-热更新" aria-hidden="true">#</a> 1.3 热更新</h3>
<p>实时监听，当代码更新会自动打包，但需要手动刷新浏览器 <strong>(不推荐)</strong></p>
<p><code v-pre>npx webpack --watch</code></p>
<p>使用webpack热更新服务，可以自动刷新浏览器 <strong>(推荐)</strong></p>
<p>安装依赖</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cnpm <span class="token function">install</span> webpack-dev-server <span class="token parameter variable">-D</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置文件新增一项</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    
	<span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">static</span><span class="token operator">:</span> <span class="token string">'./dist'</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动指令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx webpack-dev-serve <span class="token parameter variable">--open</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="第3章-resource资源" tabindex="-1"><a class="header-anchor" href="#第3章-resource资源" aria-hidden="true">#</a> 第3章 Resource资源</h2>
<h3 id="_3-1-资源简介" tabindex="-1"><a class="header-anchor" href="#_3-1-资源简介" aria-hidden="true">#</a> 3.1 资源简介</h3>
<h3 id="_3-2-asset-resource-类型的资源" tabindex="-1"><a class="header-anchor" href="#_3-2-asset-resource-类型的资源" aria-hidden="true">#</a> 3.2 asset/resource 类型的资源</h3>
<p>index.js文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//引入一张图片 模块形式</span>
<span class="token keyword">import</span> imgsrc <span class="token keyword">from</span> <span class="token string">'./assets/img/img1.png'</span>

<span class="token comment">//创建一个img的DOM</span>
<span class="token keyword">const</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span>

<span class="token comment">//把图片的src属性设置为imgsrc</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> imgsrc

<span class="token comment">//追加元素</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件新增</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//大功能: 输出</span>
<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'bundle.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'./dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            
    <span class="token comment">// 有2种打包目录配置,</span>
    <span class="token comment">// 一个是generator,优先级最高</span>
    <span class="token comment">// 一个是output,优先级最低</span>
    <span class="token literal-property property">assetModulefilename</span><span class="token operator">:</span> <span class="token string">'images/[contenthash][ext]'</span>

<span class="token punctuation">}</span>


<span class="token comment">//大功能: 模块</span>
<span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//规则</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 匹配到所有的png文件</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.png$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token comment">// 设置资源类型,再生成一份原文件到指定目录</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'asset/resource'</span><span class="token punctuation">,</span>
            
            <span class="token comment">// 有2种资源打包目录配置,</span>
            <span class="token comment">// 一个是generator,优先级最高</span>
            <span class="token comment">// 一个是output,优先级最低</span>
            
            <span class="token comment">// 打包到images文件夹下,</span>
            <span class="token comment">// 文件名根据文件内容的hash命名,</span>
            <span class="token comment">// 拓展名使用原文件的拓展名</span>
            <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'images/[contenthash][ext]'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-asset-inline-类型的资源" tabindex="-1"><a class="header-anchor" href="#_3-3-asset-inline-类型的资源" aria-hidden="true">#</a> 3.3 asset/inline 类型的资源</h3>
<p>index.js文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//引入一张图片 模块形式</span>
<span class="token keyword">import</span> imgsrc <span class="token keyword">from</span> <span class="token string">'./assets/img/svg1.png'</span>

<span class="token comment">//创建一个img的DOM</span>
<span class="token keyword">const</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span>

<span class="token comment">//把图片的src属性设置为imgsrc</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> imgsrc

<span class="token comment">//追加元素</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件新增</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.svg$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token comment">// inline类型不会生成新文件</span>
            <span class="token comment">// 而是生成文件的 base64</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'asset/inline'</span>     
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-asset-source-类型的资源" tabindex="-1"><a class="header-anchor" href="#_3-4-asset-source-类型的资源" aria-hidden="true">#</a> 3.4 asset/source 类型的资源</h3>
<p>index.js文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 引入一个txt文件</span>
imporp eText <span class="token keyword">from</span> <span class="token string">'./assets/text/text1.txt'</span>

<span class="token comment">//创建一个div标签</span>
<span class="token keyword">const</span> block <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span>

<span class="token comment">//把div的textContent属性设置为eText</span>
block<span class="token punctuation">.</span>textContent <span class="token operator">=</span> eText

<span class="token comment">//追加元素</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件新增</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.txt$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token comment">// source类型不会生成新文件</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'asset/source'</span>      
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-自动选择类型" tabindex="-1"><a class="header-anchor" href="#_3-5-自动选择类型" aria-hidden="true">#</a> 3.5 自动选择类型</h3>
<p>index.js文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 引入一个txt文件</span>
imporp jpgMap <span class="token keyword">from</span> <span class="token string">'./assets/img/jpg1.jpg'</span>

<span class="token comment">//创建一个div标签</span>
<span class="token keyword">const</span> img1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span>

<span class="token comment">//把div的textContent属性设置为eText</span>
img1<span class="token punctuation">.</span>src <span class="token operator">=</span> jpgMap

<span class="token comment">//追加元素</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>img1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件新增</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.jpg$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token comment">// 自动选择类型</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'asset'</span>
            <span class="token comment">// 自动选择类型,范围在resource和inline</span>
            <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            	<span class="token comment">// 设置临界值</span>
            	<span class="token comment">// 大于该值则使用resource类型</span>
            	<span class="token comment">// 小于该值则使用inline类型</span>
            	<span class="token literal-property property">dataUrlCondition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            		<span class="token literal-property property">maxSize</span> <span class="token operator">:</span> <span class="token number">4</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token comment">//4mb</span>
        		<span class="token punctuation">}</span>
        	<span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第4章-loader加载器" tabindex="-1"><a class="header-anchor" href="#第4章-loader加载器" aria-hidden="true">#</a> 第4章 loader加载器</h2>
<h3 id="_4-1-css-loader" tabindex="-1"><a class="header-anchor" href="#_4-1-css-loader" aria-hidden="true">#</a> 4.1 css-loader</h3>
<p><strong>css-loader</strong></p>
<p>安装解析器</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cnpm <span class="token function">install</span> css-loader style-loader <span class="token parameter variable">-D</span>  //css相关
cnpm <span class="token function">install</span> less-loader <span class="token function">less</span> <span class="token parameter variable">-D</span>  // less相关

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置规则</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
     <span class="token punctuation">{</span>
         <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(css|less)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
         <span class="token comment">// 顺序必须这样,执行顺序是从后到前 </span>
         <span class="token comment">// 最先使用less-loader将less文件转为css文件</span>
         <span class="token comment">// 先使用css-loader加载所有css文件,</span>
         <span class="token comment">// 再使用style-loader把所有css放到页面上</span>
         <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span><span class="token string">'css-loader'</span><span class="token punctuation">,</span><span class="token string">'less-loader'</span><span class="token punctuation">]</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>抽离css</p>
<p>安装插件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cnpm <span class="token function">install</span> mini-css-extract-plugin <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>生产环境压缩css</strong></p>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<p>添加该配置后，默认的代码压缩将被取消，需要使用terser插件。</p>
</div>
<p>安装插件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cnpm <span class="token function">install</span> css-minimizer-webpack-plugin <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> CssMinimizerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'css-minimizer-webpack-plugin'</span><span class="token punctuation">)</span>

<span class="token operator">...</span>
<span class="token literal-property property">optimization</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">CssMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       
    <span class="token punctuation">]</span>
         
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-加载字体" tabindex="-1"><a class="header-anchor" href="#_4-2-加载字体" aria-hidden="true">#</a> 4.2 加载字体</h3>
<p>配置规则</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(woff|woff2|eot|ttf|otf)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'asset/resource'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-xml-csv-tsv加载" tabindex="-1"><a class="header-anchor" href="#_4-3-xml-csv-tsv加载" aria-hidden="true">#</a> 4.3 xml csv tsv加载</h3>
<p>安装解析器</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cnpm <span class="token function">install</span> csv-loader xml-loader <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置规则</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// csv转译后会变成数组</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(csv|tsv)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'csv-loader'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
         <span class="token comment">// xml转译后会变成对象</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.xml$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">'xml-loader'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-json5-yaml-toml-加载" tabindex="-1"><a class="header-anchor" href="#_4-4-json5-yaml-toml-加载" aria-hidden="true">#</a> 4.4 json5 yaml toml 加载</h3>
<p>安装依赖</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cnpm <span class="token function">install</span> toml yaml json5 <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> toml <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'toml'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> yaml <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'yaml'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> json5 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'json5'</span><span class="token punctuation">)</span>

<span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
     <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.toml$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'json'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">parse</span><span class="token operator">:</span> toml<span class="token punctuation">.</span>parse
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.yaml$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'json'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">parse</span><span class="token operator">:</span> yaml<span class="token punctuation">.</span>parse
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.json5$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'json'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">parse</span><span class="token operator">:</span> json5<span class="token punctuation">.</span>parse
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-babel-loader" tabindex="-1"><a class="header-anchor" href="#_4-5-babel-loader" aria-hidden="true">#</a> 4.5 babel-loader</h3>
<p>安装依赖</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cnpm <span class="token function">install</span> <span class="token parameter variable">-D</span> babel-loader @babel/core @babel/preset-env
cnpm <span class="token function">install</span> <span class="token parameter variable">-D</span> @babel/runtime 
cnpm <span class="token function">install</span> <span class="token parameter variable">-D</span> @babel/plugin-transform-runtime 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置规则</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'babel-loader'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@babel/preset-env'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">[</span>
                        <span class="token string">'@babel/plugin-transform-runtime'</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第5章-代码分离" tabindex="-1"><a class="header-anchor" href="#第5章-代码分离" aria-hidden="true">#</a> 第5章 代码分离</h2>
<h3 id="_5-1-常见代码分离" tabindex="-1"><a class="header-anchor" href="#_5-1-常见代码分离" aria-hidden="true">#</a> 5.1 常见代码分离</h3>
<p>目的是减少入口 js 的大小</p>
<p><img src="@source/document/vue前端/asset/image-20220605234516031.png" alt="image-20220605234516031" loading="lazy"></p>
<ol>
<li>更改入口起点</li>
</ol>
<p>缺点 对多个入口的依赖重复打包</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//入口文件 配多个js</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">another</span><span class="token operator">:</span> <span class="token string">'./src/another.js'</span>        
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token comment">//输出文件</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//打包后的js文件名 使用name变量防止重命名</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].bundle.js'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'./dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>防止重复</li>
</ol>
<p>使用 dependOn 选项</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//入口文件 配多个js</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>
            <span class="token comment">//开启共享依赖</span>
            <span class="token literal-property property">dependOn</span><span class="token operator">:</span> <span class="token string">'shared'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">another</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">'./src/another.js'</span><span class="token punctuation">,</span>
            <span class="token comment">//开启共享依赖</span>
            <span class="token literal-property property">dependOn</span><span class="token operator">:</span> <span class="token string">'shared'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 配置要共享的依赖,单独对lodash打包</span>
        <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token string">'lodash'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token comment">//输出文件</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//打包后的js文件名 使用name变量防止重命名</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].bundle.js'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'./dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者使用 splitChunks 选项</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//入口文件 配多个js</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">another</span><span class="token operator">:</span> <span class="token string">'./src/another.js'</span>        
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token comment">//输出文件</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//打包后的js文件名 使用name变量防止重命名</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].bundle.js'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'./dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token comment">//优化</span>
    <span class="token literal-property property">optimization</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">'all'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>动态导入</li>
</ol>
<p>待整理</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//入口文件 配多个js</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>     
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token comment">//输出文件</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//打包后的js文件名 使用name变量防止重命名</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].bundle.js'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'./dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-懒加载-待整理" tabindex="-1"><a class="header-anchor" href="#_5-2-懒加载-待整理" aria-hidden="true">#</a> 5.2 懒加载 待整理</h3>
<p>懒加载</p>
<p>预加载</p>
<h3 id="_5-3-缓存" tabindex="-1"><a class="header-anchor" href="#_5-3-缓存" aria-hidden="true">#</a> 5.3 缓存</h3>
<p>服务器上的js 随时后更新, 但引入了第三方的js库, 例如 jquery 等 , 基本不会更新, 在浏览上缓存长期缓存下来, 以减少对服务器的请求</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>     
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 可替换模板字符串 [name] [contenthash]</span>
        <span class="token comment">// 打包后的js文件名 使用内容hash防止浏览器缓存</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'js/[name].[contenthash].js'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'./dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token literal-property property">optimization</span><span class="token operator">:</span><span class="token punctuation">{</span>
         <span class="token comment">//缓存组</span>
        <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">//对node_modules的进行缓存</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\/]node_modules[\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'vendors'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">'all'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-拆分开发环境和生产环境配置" tabindex="-1"><a class="header-anchor" href="#_5-4-拆分开发环境和生产环境配置" aria-hidden="true">#</a> 5.4 拆分开发环境和生产环境配置</h3>
<ol>
<li><strong>公共路径</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//所有资源链接都加上该前缀</span>
	<span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">'http://localhost:8080/'</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><strong>使用环境变量</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">env</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span>   <span class="token punctuation">{</span>
    	<span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        	<span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>     
    	<span class="token punctuation">}</span><span class="token punctuation">,</span>
        
    	<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        	<span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'js/[name].[contenthash].js'</span><span class="token punctuation">,</span>
        	<span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'./dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        	<span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span>
    	<span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//判断启动模式 </span>
        <span class="token literal-property property">mode</span><span class="token operator">:</span> env<span class="token punctuation">.</span>production<span class="token operator">?</span> <span class="token string">'production'</span><span class="token operator">:</span> <span class="token string">'development'</span>
   
	<span class="token punctuation">}</span>    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置代码压缩</p>
<p>启用css压缩后, 其他代码压缩会失效</p>
<p>安装 压缩插件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cnpm <span class="token function">install</span> terseer-webpack-plugin <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> CssMinimizerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'css-minimizer-webpack-plugin'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> TerserPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'terser-webpack-plugin'</span><span class="token punctuation">)</span>
<span class="token operator">...</span>
<span class="token literal-property property">optimization</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">CssMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">TerserPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
         
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用命令行启动</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx webpack <span class="token parameter variable">--env</span> production
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li><strong>拆分配置文件</strong></li>
</ol>
<p>开发环境启动</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx webpack <span class="token parameter variable">-c</span> ./config/webpack.config.dev.js <span class="token comment">#打包</span>
npx webpack serve <span class="token parameter variable">-c</span> ./config/webpack.config.dev.js <span class="token comment">#服务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>开发环境配置</p>
<p><code v-pre>/config/webpack.config.dev.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'scripts/[name].js'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'development'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">'inline-source-map'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">static</span><span class="token operator">:</span> <span class="token string">'../dist'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">'all'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生产环境启动</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx webpack <span class="token parameter variable">-c</span> ./config/webpack.config.prod.js <span class="token comment">#打包</span>
npx webpack serve <span class="token parameter variable">-c</span> ./config/webpack.config.prod.js <span class="token comment">#服务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>生产环境配置</p>
<p><code v-pre>/config/webpack.config.prod.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> CssMinimizerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mini-css-extract-plugin'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> TerserPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'terser-webpack-plugin'</span><span class="token punctuation">)</span>


module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'scripts/[name].[contenthash].js'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">'http://localhost:8080/'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'production'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">optimization</span><span class="token operator">:</span><span class="token punctuation">{</span>
       	<span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">//css压缩</span>
            <span class="token keyword">new</span> <span class="token class-name">CssMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token comment">// 配置压缩后 自带压缩功能失效 </span>
            <span class="token comment">// 需要重新配置js的压缩</span>
            <span class="token keyword">new</span> <span class="token class-name">TerserPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
     	<span class="token comment">//开发环境不需要配置缓存</span>
        <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            	<span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                	<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\/]node_modules[\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'vendors'</span><span class="token punctuation">,</span>
                	<span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">'all'</span>
            	<span class="token punctuation">}</span>
        	<span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">performance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">hints</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>npm启动脚本</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">"serve"</span><span class="token operator">:</span> <span class="token string">"webpack serve -c ./config/webpack.config.dev.js"</span><span class="token punctuation">,</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack -c ./config/webpack.config.dev.js"</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info"><p class="custom-container-title">相关信息</p>
<p>在脚本中不需要使用 <code v-pre>npx</code> 前缀</p>
</div>
<ol start="5">
<li>提取公共配置</li>
</ol>
<p>/ config / webpack.config.conmon.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mini-css-extract-plugin'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> toml <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'toml'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> yaml <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'yaml'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> json5 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'json5'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">another</span><span class="token operator">:</span> <span class="token string">'./src/another.js'</span>        
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'../dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">assetModuleFilename</span><span class="token operator">:</span> <span class="token string">'images/[contenthash][ext]'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token literal-property property">optimization</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'../index.html'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'index.html'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token string">'head'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'styles/[contenthash].css'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
 
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    	<span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        	<span class="token punctuation">{</span>
            	<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.png$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'asset/resource'</span><span class="token punctuation">,</span>
            	<span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                	<span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'images/[contenthash][ext]'</span>
            	<span class="token punctuation">}</span>
        	<span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
            	<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.svg$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'asset/inline'</span>     
        	<span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
            	<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.txt$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'asset/source'</span>      
       	 	<span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
            	<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.jpg$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'asset'</span><span class="token punctuation">,</span>
            	<span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            		<span class="token literal-property property">dataUrlCondition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            			<span class="token literal-property property">maxSize</span> <span class="token operator">:</span> <span class="token number">4</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token comment">//4mb</span>
        			<span class="token punctuation">}</span>
        		<span class="token punctuation">}</span>
       	 	<span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
         		<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(css|less)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
         		<span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span><span class="token string">'css-loader'</span><span class="token punctuation">,</span><span class="token string">'less-loader'</span><span class="token punctuation">]</span>
     		<span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
        		<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(woff|woff2|eot|ttf|otf)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'asset/resource'</span>
    		<span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
        		<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(csv|tsv)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'csv-loader'</span>
    		<span class="token punctuation">}</span><span class="token punctuation">,</span>
    		<span class="token punctuation">{</span>
        		<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.xml$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        		<span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">'xml-loader'</span>
    		<span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
        		<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.toml$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'json'</span><span class="token punctuation">,</span>
        		<span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            		<span class="token literal-property property">parse</span><span class="token operator">:</span> toml<span class="token punctuation">.</span>parse
        		<span class="token punctuation">}</span>
    		<span class="token punctuation">}</span><span class="token punctuation">,</span>
    		<span class="token punctuation">{</span>
        		<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.yaml$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'json'</span><span class="token punctuation">,</span>
        		<span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            		<span class="token literal-property property">parse</span><span class="token operator">:</span> yaml<span class="token punctuation">.</span>parse
        		<span class="token punctuation">}</span>
    		<span class="token punctuation">}</span><span class="token punctuation">,</span>
     		<span class="token punctuation">{</span>
        		<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.json5$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'json'</span><span class="token punctuation">,</span>
        		<span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            		<span class="token literal-property property">parse</span><span class="token operator">:</span> json5<span class="token punctuation">.</span>parse
        		<span class="token punctuation">}</span>
    		<span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
        		<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        		<span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        		<span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            		<span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'babel-loader'</span><span class="token punctuation">,</span>
            		<span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                		<span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@babel/preset-env'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                		<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    		<span class="token punctuation">[</span>
                        		<span class="token string">'@babel/plugin-transform-runtime'</span>
                    		<span class="token punctuation">]</span>
                		<span class="token punctuation">]</span>
            		<span class="token punctuation">}</span>
       	 		<span class="token punctuation">}</span>
    		<span class="token punctuation">}</span>
    	<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>合并配置文件</li>
</ol>
<p>安装深合并的依赖</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cnpm <span class="token function">install</span> webpack-merge <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建文件</p>
<p>/ config / webpack.config.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>merge<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-merge'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> commonConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./webpack.config.common'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> prodConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./webpack.config.prod'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> devConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./webpack.config.dev'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">env</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">case</span> env<span class="token punctuation">.</span>development<span class="token operator">:</span>
            <span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span>commonConfig<span class="token punctuation">,</span>devConfig<span class="token punctuation">)</span>
        <span class="token keyword">case</span> env<span class="token punctuation">.</span>production<span class="token operator">:</span>
            <span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span>commonConfig<span class="token punctuation">,</span>prodConfig<span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token operator">:</span> 
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"没有找到匹配的配置"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置脚本 package.json</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">"serve"</span><span class="token operator">:</span> <span class="token string">"webpack serve -c ./config/webpack.config.js --env development"</span><span class="token punctuation">,</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack -c ./config/webpack.config.js --env production"</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第6章-webpack高级-效率篇" tabindex="-1"><a class="header-anchor" href="#第6章-webpack高级-效率篇" aria-hidden="true">#</a> 第6章 webpack高级 效率篇</h2>
<h3 id="_6-1-source-map" tabindex="-1"><a class="header-anchor" href="#_6-1-source-map" aria-hidden="true">#</a> 6.1 source-map</h3>
<p><img src="@source/document/vue前端/asset/image-20220606101050902.png" alt="image-20220606101050902" loading="lazy"></p>
<p>默认为<code v-pre>eval</code>模式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">'eval'</span>  <span class="token comment">//默认为eval ,可以精准定位到原js的行数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>推荐使用<code v-pre>cheap-module-source-map</code>模式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">'cheap-module-source-map'</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生产环境必须关闭该功能</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token boolean">false</span>  <span class="token comment">// 防止打包体积过大 和反编译出源码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-2-resolve" tabindex="-1"><a class="header-anchor" href="#_6-2-resolve" aria-hidden="true">#</a> 6.2 resolve</h3>
<h3 id="_6-3-devserver" tabindex="-1"><a class="header-anchor" href="#_6-3-devserver" aria-hidden="true">#</a> 6.3 devServer</h3>
<p>使用webpack热更新服务，可以自动刷新浏览器 <strong>(推荐)</strong></p>
<p>安装依赖</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cnpm <span class="token function">install</span> webpack-dev-server <span class="token parameter variable">-D</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置文件新增一项</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    
	<span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">static</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'./dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">//压缩传输文件</span>
        <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//启动端口</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
        <span class="token comment">//内网访问地址</span>
        <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">'0.0.0.0'</span><span class="token punctuation">,</span>
        <span class="token comment">//添加一个头信息</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">'X-assces-token'</span><span class="token operator">:</span> <span class="token string">'123'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//启动跨域代理</span>
        <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token string">'http://localhost:9000'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 使用http2 包括https服务</span>
        <span class="token literal-property property">http2</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">//历史路由模式</span>
        <span class="token literal-property property">historyApiFallback</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">//热替换</span>
        <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">//webpack5开箱即用</span>
        <span class="token comment">//自动刷新</span>
        <span class="token literal-property property">liveReload</span><span class="token operator">:</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动指令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx webpack-dev-serve <span class="token parameter variable">--open</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-4-模块热替换" tabindex="-1"><a class="header-anchor" href="#_6-4-模块热替换" aria-hidden="true">#</a> 6.4 模块热替换</h3>
<p>开启 hot 配置</p>
<p>项目文件增加 if 判断</p>
<p><img src="@source/document/vue前端/asset/image-20220606133408814.png" alt="image-20220606133408814" loading="lazy"></p>
<h3 id="_6-5-eslint" tabindex="-1"><a class="header-anchor" href="#_6-5-eslint" aria-hidden="true">#</a> 6.5 eslint</h3>
<p>安装依赖</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cnpm install eslint -D
npx eslint --init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-6-husky" tabindex="-1"><a class="header-anchor" href="#_6-6-husky" aria-hidden="true">#</a> 6.6 husky</h3>
<p>每次提交代码的时候 执行的钩子</p>
<p>git-hocks</p>
<h2 id="第7章-webpack高级-模块篇" tabindex="-1"><a class="header-anchor" href="#第7章-webpack高级-模块篇" aria-hidden="true">#</a> 第7章 webpack高级 模块篇</h2>
<h3 id="_7-1-模块解析" tabindex="-1"><a class="header-anchor" href="#_7-1-模块解析" aria-hidden="true">#</a> 7.1 模块解析</h3>
<p>底层使用 enhance_resolve</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//配置别名</span>
        <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">'@'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 导入是可以省略js后缀的,但文件名相同时候,优先导入js</span>
        <span class="token comment">//例如同一文件夹内有两个文件 name.js ,name.json</span>
        <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.js'</span><span class="token punctuation">,</span><span class="token string">'.json'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token comment">//外部拓展 使用cdn的方式</span>
    <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">jquery</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">//cdn地址, 不再需要手动引入cdn标签了</span>
            <span class="token string">'https://cdn.jquery/3.6.0./jquery.js'</span>
            <span class="token comment">//别名</span>
            <span class="token string">'JQuery'</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
 	<span class="token comment">// 启用cdn后 需要配置该项</span>
    <span class="token literal-property property">externalsType</span><span class="token operator">:</span> <span class="token string">'script'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-可视化依赖图" tabindex="-1"><a class="header-anchor" href="#_7-2-可视化依赖图" aria-hidden="true">#</a> 7.2 可视化依赖图</h3>
<p>安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cnpm <span class="token function">install</span> --save-dev webpack-bundle-analyzer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>BundleAnalyzerPlugin<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-bundle-analyzer'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>BundleAnalyzerplugin<span class="token punctuation">;</span>

<span class="token operator">...</span>

<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">BundleAnalyzerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-拓展功能" tabindex="-1"><a class="header-anchor" href="#_7-3-拓展功能" aria-hidden="true">#</a> 7.3 拓展功能</h3>
<h4 id="_7-3-1-postcss-与-css模块" tabindex="-1"><a class="header-anchor" href="#_7-3-1-postcss-与-css模块" aria-hidden="true">#</a> 7.3.1 <strong>postcss 与 css模块</strong></h4>
<p>安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cnpm i -D autoprefixer postcss-nested
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置 webpack.config.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// 可以使用正则来区分模块化css和全局css</span>
        <span class="token comment">// 例如</span>
        <span class="token comment">// test: new RegExp(`^(?!.*\\.global).*\\.css`)</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        	<span class="token punctuation">{</span>
        		<span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'style-loader'</span><span class="token punctuation">,</span>
        	<span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'css-loader'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'postcss-loader'</span>
            <span class="token punctuation">}</span>
    	<span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 postcss.config.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">//转化为兼容版本css语法</span>
        <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'autoprefixer'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">//支持css嵌套语法</span>
        <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'postcss-nested'</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 package.json</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	...
	
	<span class="token property">"browserslist"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token string">"> 1%"</span><span class="token punctuation">,</span>
		<span class="token string">"last 2 versions"</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-3-2-web-works" tabindex="-1"><a class="header-anchor" href="#_7-3-2-web-works" aria-hidden="true">#</a> 7.3.2 web works</h4>
<h4 id="_7-3-3-typescript" tabindex="-1"><a class="header-anchor" href="#_7-3-3-typescript" aria-hidden="true">#</a> 7.3.3 typescript</h4>
<p>安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cnpm i -D typescript ts-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>初始化</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx tsc <span class="token parameter variable">--init</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置 tsconfig.json</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"rootDir"</span><span class="token operator">:</span> <span class="token string">"./src"</span>
<span class="token string-property property">"outDir"</span><span class="token operator">:</span> <span class="token string">"./dist"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 webpack.config.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.ts$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">'ts-loader'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.ts'</span><span class="token punctuation">,</span><span class="token string">'js'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4-多页面环境搭建" tabindex="-1"><a class="header-anchor" href="#_7-4-多页面环境搭建" aria-hidden="true">#</a> 7.4 多页面环境搭建</h3>
<p>配置 webpack.config</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">import</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'./src/app2.js'</span><span class="token punctuation">,</span><span class="token string">'./src/app.js'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dependOn</span><span class="token operator">:</span> <span class="token string">'lodash'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'chanel1/[name].js'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">main2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">'./src/app3.js'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dependOn</span><span class="token operator">:</span> <span class="token string">'lodash'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'chanel2/[name].js'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lodash</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">'lodash'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'common/[name].js'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
    
<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlwebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'./index2.html'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token string">'body'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'index2.html'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'main2'</span><span class="token punctuation">,</span><span class="token string">'lodash'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">'http://www.a.com/'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlwebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'./index.html'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token string">'body'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'index.html'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'main'</span><span class="token punctuation">,</span><span class="token string">'lodash'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">'http://www.b.com/'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第8章-webpack高级-优化篇" tabindex="-1"><a class="header-anchor" href="#第8章-webpack高级-优化篇" aria-hidden="true">#</a> 第8章 webpack高级 优化篇</h2>
<h3 id="_8-1-摇树-tree-shaking" tabindex="-1"><a class="header-anchor" href="#_8-1-摇树-tree-shaking" aria-hidden="true">#</a> 8.1 摇树 tree-shaking</h3>
<p>配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">usedExports</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-副作用-sideeffects" tabindex="-1"><a class="header-anchor" href="#_8-2-副作用-sideeffects" aria-hidden="true">#</a> 8.2 副作用 sideEffects</h3>
<p>配置 package.json</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">//webpack4默认所有文件都有"影响"</span>
    <span class="token comment">//有"影响"的文件,导入后即便未使用,打包也不会删除该模块</span>
    <span class="token comment">//没有"影响"的文件 导入后未使用,打包时则会删除</span>
    
    <span class="token property">"sideEffects"</span><span class="token operator">:</span> <span class="token boolean">true</span>  <span class="token comment">//所有文件都有"影响",不能删除</span>
    <span class="token property">"sideEffects"</span><span class="token operator">:</span> <span class="token boolean">true</span>  <span class="token comment">//所有文件都没有"影响",不能删除</span>
    
    <span class="token comment">//数组配置哪些文件有"影响"</span>
    <span class="token property">"sideEffects"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"*.css"</span><span class="token punctuation">,</span><span class="token string">"*.global.js"</span><span class="token punctuation">]</span>  
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-渐进式网络应用程序-pwa" tabindex="-1"><a class="header-anchor" href="#_8-3-渐进式网络应用程序-pwa" aria-hidden="true">#</a> 8.3 渐进式网络应用程序 PWA</h3>
<p>安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cnpm i <span class="token parameter variable">-D</span> workbox-webpack-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置 webpack</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> WorkboxPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'workbox-webpack-plugin'</span><span class="token punctuation">)</span>
<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">WorkboxPlugin<span class="token punctuation">.</span>GenerateSW</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">clientsClaim</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">skipWaiting</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.js</p>
<p><img src="@source/document/vue前端/asset/image-20220606203107399.png" alt="image-20220606203107399" loading="lazy"></p>
<p>package.json</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"http-server dist"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原理是使用了浏览器缓存了该页面</p>
<p>可以查看在谷歌浏览器地址输入</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>chrome://serviceworker-internals
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-4-预置依赖-shimming" tabindex="-1"><a class="header-anchor" href="#_8-4-预置依赖-shimming" aria-hidden="true">#</a> 8.4 预置依赖 shimming</h3>
<p>安装依赖</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cnpm i -D imports-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置 webpack.config.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//webpack为内置模块</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span>
<span class="token comment">//配置全局引入 单文件用到的地方不需要单独引入了</span>
<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ProvidePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
        <span class="token literal-property property">_</span><span class="token operator">:</span> <span class="token string">'lodash'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>

<span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//在commonjs中 模块中的this指向不是window</span>
     <span class="token comment">//使用imports-loader 覆盖this指向,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'./src/index.js'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">'imports-loader?wrapper=window'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-5-全局导出-exports" tabindex="-1"><a class="header-anchor" href="#_8-5-全局导出-exports" aria-hidden="true">#</a> 8.5 全局导出 exports</h3>
<p>安装依赖</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cnpm i -D exports-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置 webpack</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'./src/globals.js'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">'exports-loader?type=commonjs&amp;exports=file,multiple|helpers.parse|parse'</span>  
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他文件中使用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>file<span class="token punctuation">,</span>parse<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./globals"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-6-垫片-polyfills" tabindex="-1"><a class="header-anchor" href="#_8-6-垫片-polyfills" aria-hidden="true">#</a> 8.6 垫片 polyfills</h3>
<p>安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cnpm i -D @babel/polyfill 
cnpm i -S core-js@3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 webpack</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
     <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
     <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
     <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'babel-loader'</span><span class="token punctuation">,</span>
     <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
     <span class="token punctuation">[</span>
     	<span class="token string">'@babel/preset-env'</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">'last 1 version'</span><span class="token punctuation">,</span>
                    <span class="token string">'> 1%'</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">'usage'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token number">3</span>
                                
            <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
            <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-7-构建library" tabindex="-1"><a class="header-anchor" href="#_8-7-构建library" aria-hidden="true">#</a> 8.7 构建library</h3>
<p>构建轮子</p>
<p>配置 webpack.config.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">library</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'mylib'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'umd'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">globalObject</span><span class="token operator">:</span> <span class="token string">'globalThis'</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lodash</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">commonjs</span><span class="token operator">:</span> <span class="token string">'lodash'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">commonjs2</span><span class="token operator">:</span> <span class="token string">'lodash'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">amd</span><span class="token operator">:</span> <span class="token string">'lodash'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token string">'_'</span>    
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 package.json</p>
<p><img src="@source/document/vue前端/asset/image-20220606212245202.png" alt="image-20220606212245202" loading="lazy"></p>
<p>发布npm包</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm config get registry   //判断是不是 npmjs.org

npm adduser  //登录

npm publish //发布该包 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i xxx -D  //你发布的包的名字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-8-模块联邦" tabindex="-1"><a class="header-anchor" href="#_8-8-模块联邦" aria-hidden="true">#</a> 8.8 模块联邦</h3>
<p><img src="@source/document/vue前端/asset/image-20220606213211449.png" alt="image-20220606213211449" loading="lazy"></p>
<h3 id="_8-9-通用构建优化方法" tabindex="-1"><a class="header-anchor" href="#_8-9-通用构建优化方法" aria-hidden="true">#</a> 8.9 通用构建优化方法</h3>
<ol>
<li>更新到最新版本 webpack 和 nodejs</li>
<li>将 loader 应用于必须的模块</li>
<li>少使用 loader 和plugin</li>
<li>减少 resolve 配置</li>
<li>保持 chunk 体积最小</li>
<li>持久化缓存</li>
<li>分析自定义plugin</li>
<li>不使用progress plugin</li>
<li>使用 DllPlugin</li>
<li>使用 thread-loader</li>
</ol>
<h3 id="_8-10-开发和生产环境优化方法" tabindex="-1"><a class="header-anchor" href="#_8-10-开发和生产环境优化方法" aria-hidden="true">#</a> 8.10 开发和生产环境优化方法</h3>
<p>开发环境</p>
<ol>
<li>增量编译 监听模式</li>
<li>内存中编译  webpack-dev-server</li>
<li>stats.toJson 加速</li>
<li>使用 devtools eval-cheap-module-source-map</li>
<li>区别开发和生产依赖</li>
<li>最小化 entry chunk</li>
<li>避免额外的优化 <img src="@source/document/vue前端/asset/image-20220606214654174.png" alt="image-20220606214654174" loading="lazy"></li>
<li>输出结果不带路径信息</li>
<li>使用10版本以上node</li>
<li>ts-loader 配置<img src="@source/document/vue前端/asset/image-20220606214828548.png" alt="image-20220606214828548" loading="lazy"></li>
</ol>
<p>生产环境</p>
<ol>
<li>不启用 sorce-map</li>
</ol>
<h2 id="第9章-webpack5-新特性" tabindex="-1"><a class="header-anchor" href="#第9章-webpack5-新特性" aria-hidden="true">#</a> 第9章 webpack5 新特性</h2>
<h3 id="_9-1-持久化缓存" tabindex="-1"><a class="header-anchor" href="#_9-1-持久化缓存" aria-hidden="true">#</a> 9.1 持久化缓存</h3>
<p>缓存在webpack5中默认开启，缓存默认是在内存里,但可以对cache进行设置</p>
<h3 id="_9-2-资源模块" tabindex="-1"><a class="header-anchor" href="#_9-2-资源模块" aria-hidden="true">#</a> 9.2 资源模块</h3>
<p>资源模块是一种模块类型，它允许使用资源文件（字体，图标等）而无需配置额外 loader</p>
<ul>
<li>raw-loader =&gt; asset/source 导出资源的源代码</li>
<li>file-loader =&gt; asset/resource 发送一个单独的文件并导出 URL</li>
<li>url-loader =&gt; asset/inline 导出一个资源的 data URI</li>
<li>asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现</li>
</ul>
<h3 id="_9-3-uris-会用的比较少" tabindex="-1"><a class="header-anchor" href="#_9-3-uris-会用的比较少" aria-hidden="true">#</a> 9.3 URIs （会用的比较少）</h3>
<p>Webpack 5 支持在请求中处理协议
支持data 支持 Base64 或原始编码,MimeType可以在module.rule中被映射到加载器和模块类型</p>
<h3 id="_9-4-moduleids-chunkids的优化" tabindex="-1"><a class="header-anchor" href="#_9-4-moduleids-chunkids的优化" aria-hidden="true">#</a> 9.4 moduleIds &amp; chunkIds的优化</h3>
<ul>
<li>在webpack5之前，没有从entry打包的chunk文件，都会以1、2、3...的文件命名方式输出,删除某些些文件可能会导致缓存失效</li>
<li>在生产模式下，默认启用这些功能chunkIds: &quot;deterministic&quot;, moduleIds: &quot;deterministic&quot;，此算法采用确定性的方式将短数字 ID(3 或 4 个字符)短hash值分配给 modules 和 chunks
chunkId设置为deterministic，则output中chunkFilename里的[name]会被替换成确定性短数字ID</li>
</ul>
<h3 id="_9-5-移除node-js的polyfill" tabindex="-1"><a class="header-anchor" href="#_9-5-移除node-js的polyfill" aria-hidden="true">#</a> 9.5 移除Node.js的polyfill</h3>
<p>webpack4带了许多Node.js核心模块的polyfill,一旦模块中使用了任何核心模块(如crypto)，这些模块就会被自动启用
webpack5不再自动引入这些polyfill
如果要引入加上</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">reslove</span><span class="token operator">:</span><span class="token punctuation">{</span>
	<span class="token literal-property property">fallback</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token string-property property">"crypto"</span><span class="token operator">:</span>require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"crypto-browerify"</span><span class="token punctuation">)</span>
		<span class="token comment">//...包括stream buffer</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-6-更强大的tree-shaking" tabindex="-1"><a class="header-anchor" href="#_9-6-更强大的tree-shaking" aria-hidden="true">#</a> 9.6 更强大的tree-shaking</h3>
<p>tree-shaking就在打包的时候剔除没有用到的代码</p>
<ul>
<li>webpack4 本身的 tree shaking 比较简单（直接import整个文件或者对象内部未使用的不能被剔除；commonJs模式不支持）,主要是找一个 import 进来的变量是否在这个模块内出现过</li>
<li>webpack5可以进行根据作用域之间的关系来进行优化,开始支持
会分析模块的引用关系</li>
</ul>
<p>webpack.config.js:配置：optimization:true 会给没使用的文件进行标记:
unused harmony export nums ,在prodction模式中会被删除</p>
<hr>
<p>webpack4:在编写支持 tree-shaking 的代码时，导入方式非常重要。你应该避免将整个库导入到单个 JavaScript 对象中。当你这样做时，你是在告诉 Webpack 你需要整个库， Webpack 就不会摇它。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 全部导入 (不支持 tree-shaking)</span>
<span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">'lodash'</span><span class="token punctuation">;</span>
<span class="token comment">// 具名导入(支持 tree-shaking)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> debounce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'lodash'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>modudleId</p>
<ul>
<li>开发环境下 模块ID是相对于根目录的相对路径，上线不行</li>
</ul>
<h3 id="_9-7-sideeffects" tabindex="-1"><a class="header-anchor" href="#_9-7-sideeffects" aria-hidden="true">#</a> 9.7 sideEffects</h3>
<blockquote>
<p>函数副作用指当调用函数时，除了返回函数值之外，还产生了附加的影响,例如修改全局变量
严格的函数式语言要求函数必须无副作用</p>
</blockquote>
<h2 id="第10章-反编译js" tabindex="-1"><a class="header-anchor" href="#第10章-反编译js" aria-hidden="true">#</a> 第10章 反编译js</h2>
<p>使用 reverse-sourcemap</p>
<p>npm install --global reverse-sourcemap</p>
<p>reverse-sourcemap --output-dir 导出路径 app.1111111.js.map</p>
</div></template>
