<template><div><h2 id="第一章-简介" tabindex="-1"><a class="header-anchor" href="#第一章-简介" aria-hidden="true">#</a> 第一章 简介</h2>
<h3 id="_1-1-初体验" tabindex="-1"><a class="header-anchor" href="#_1-1-初体验" aria-hidden="true">#</a> 1.1 初体验</h3>
<p><strong>用 HbuildX 创建项目</strong></p>
<p><img src="@source/document/vue前端/asset/image-20220529195009605.png" alt="image-20220529195009605" loading="lazy"></p>
<ul>
<li>创建vue2项目</li>
</ul>
<p><code v-pre>vue create -p dcloudio/uni-preset-vue uniapp-study</code></p>
<ul>
<li>创建vue3项目 暂时不好用</li>
</ul>
<p><code v-pre>vue create -p dcloudio/uni-preset-vue#vue3 uni-name</code></p>
<ul>
<li>创建vue3的vite项目</li>
</ul>
<p><code v-pre>npx degit dcloudio/uni-preset-vue#vite my-vue3-project</code></p>
<p>如果连接超时可直接下载模板</p>
<p><a href="https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite.zip" target="_blank" rel="noopener noreferrer">https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite.zip<ExternalLinkIcon/></a></p>
<p><strong>运行项目</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev:mp-weixin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>微信开发者工具导入项目</strong></p>
<p>导入 <code v-pre>dist/dev/mp_weixin</code> 目录</p>
<h3 id="_1-2-项目结构" tabindex="-1"><a class="header-anchor" href="#_1-2-项目结构" aria-hidden="true">#</a> 1.2 项目结构</h3>
<p>App.vue  应用配置</p>
<p>main.js   vue入口文件</p>
<p>manifest.json  配置应用 appid logo 版本等打包信息</p>
<p>pages.json  配置路由 导航 选项卡等</p>
<p>uni.scss 内置的scss变量</p>
<p>pages-index-index.vue  页面组件</p>
<p>static-logo.png  静态资源</p>
<h3 id="_1-3-pages-json" tabindex="-1"><a class="header-anchor" href="#_1-3-pages-json" aria-hidden="true">#</a> 1.3 pages.json</h3>
<p>路由</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">//配置页面</span>
    <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">//首页页面 谁在第一个谁就是首页</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//路由地址</span>
            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span>
            <span class="token comment">//样式</span>
        	<span class="token property">"style"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            	<span class="token comment">// 顶部导航栏文字</span>
            	<span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"首页"</span><span class="token punctuation">,</span>
            	<span class="token comment">//顶部导航栏背景色</span>
            	<span class="token property">"navigationBarBackgroundColor"</span><span class="token operator">:</span> <span class="token string">"#ff5566"</span><span class="token punctuation">,</span>
            	<span class="token comment">//顶部导航栏文字颜色</span>
            	<span class="token property">"navigationBarTextStyle"</span><span class="token operator">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
            	<span class="token comment">//启用自定义导航栏,关闭原生导航栏</span>
            	<span class="token property">"navigationStyle"</span><span class="token operator">:</span> <span class="token string">"custom"</span>
        	<span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        
        <span class="token comment">// 其他页面	</span>
        <span class="token punctuation">{</span>
         <span class="token comment">//路由地址</span>
            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span>
            <span class="token comment">//样式</span>
        	<span class="token property">"style"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        
        	<span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
	
	<span class="token comment">//全局样式, 如果配置了局部样式优先局部,没配局部用全局</span>
	<span class="token property">"globalStyle"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//关闭小程序原生导航栏</span>
        <span class="token property">"navigationStyle"</span><span class="token operator">:</span> <span class="token string">"custom"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token comment">//底部菜单栏</span>
	<span class="token property">"tabBar"</span><span class="token operator">:</span>  <span class="token punctuation">{</span>
		<span class="token property">"color"</span><span class="token operator">:</span> <span class="token string">"#d8d8d8"</span><span class="token punctuation">,</span>
        <span class="token property">"selectedColor"</span><span class="token operator">:</span> <span class="token string">"#444"</span><span class="token punctuation">,</span>
        <span class="token property">"list"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">//配置项1</span>
            <span class="token punctuation">{</span>
                <span class="token comment">//文字</span>
                <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"首页"</span><span class="token punctuation">,</span>
                <span class="token comment">//路由</span>
                <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
                <span class="token comment">//未选中图标</span>
                <span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">"static/tab/1.png"</span><span class="token punctuation">,</span>
                <span class="token comment">//选中后图标</span>
                <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">""</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            
            <span class="token comment">//配置项2</span>
            <span class="token punctuation">{</span>
                ...
            <span class="token punctuation">}</span>
            
            
        <span class="token punctuation">]</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-单位" tabindex="-1"><a class="header-anchor" href="#_1-4-单位" aria-hidden="true">#</a> 1.4 单位</h3>
<p>rpx 小程序单位  750rpx 等于屏幕宽度</p>
<p>vm  H5单位 100vm 等于屏幕的宽和高</p>
<h3 id="_1-5-全局样式" tabindex="-1"><a class="header-anchor" href="#_1-5-全局样式" aria-hidden="true">#</a> 1.5 全局样式</h3>
<p>安装scss依赖</p>
<p>cnpm install --save-dev sass</p>
<p>编写 uni.scss</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token comment">//配置类</span>
<span class="token selector">.fs-14</span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14rpx<span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//配置值</span>
<span class="token property"><span class="token variable">$uni-color-primary</span></span><span class="token punctuation">:</span> #007aff<span class="token important">!important</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入 uni.scss</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">import</span> <span class="token string">"./uni.scss"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>组件中启用 scss</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span>
&lt;/style
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-标签" tabindex="-1"><a class="header-anchor" href="#_1-6-标签" aria-hidden="true">#</a> 1.6 标签</h3>
<p><code v-pre>&lt;div&gt;</code> 改成 <code v-pre>&lt;view&gt;</code></p>
<p><code v-pre>&lt;span&gt;</code> 改成 <code v-pre>&lt;text&gt;</code></p>
<p><code v-pre>&lt;a&gt;</code> 改成 <code v-pre>&lt;navigator&gt;</code></p>
<p><code v-pre>&lt;img&gt;</code> 改成 <code v-pre>&lt;image&gt;</code></p>
<p><code v-pre>&lt;iframe&gt;</code> 改成 <code v-pre>&lt;web-view&gt;</code></p>
<p>audio 不再推荐使用，改成api方式，背景音频api文档
其实老的HTML标签也可以在uni-app里使用，uni-app编译器会在编译时把老标签转为新标签。但不推荐这种用法，调试H5端时容易混乱，基于元素的选择器也会出问题。</p>
<h2 id="第2章-基本语法" tabindex="-1"><a class="header-anchor" href="#第2章-基本语法" aria-hidden="true">#</a> 第2章  基本语法</h2>
<h3 id="_2-1-数据的展示" tabindex="-1"><a class="header-anchor" href="#_2-1-数据的展示" aria-hidden="true">#</a> 2.1 数据的展示</h3>
<p>通过在data里定义 , 在标签里用 双大括号展示</p>
<p>还可以用在标签上绑定属性 , <code v-pre>&lt;view :data-color=&quot;color&quot;/&gt;</code></p>
<h3 id="_2-2-数据的循环" tabindex="-1"><a class="header-anchor" href="#_2-2-数据的循环" aria-hidden="true">#</a> 2.2 数据的循环</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>view v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"(item,index) in list"</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"item.id"</span><span class="token operator">></span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-条件编译" tabindex="-1"><a class="header-anchor" href="#_2-3-条件编译" aria-hidden="true">#</a> 2.3 条件编译</h3>
<p>v-if  不适合做频繁切换</p>
<p>v-show   适合频繁切换</p>
<h3 id="_2-4-计算属性" tabindex="-1"><a class="header-anchor" href="#_2-4-计算属性" aria-hidden="true">#</a> 2.4 计算属性</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>view<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>cvMoney<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">cvMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//计算属性的加工功能</span>
        <span class="token keyword">return</span> <span class="token string">"$"</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>money
    <span class="token punctuation">}</span>
    <span class="token function">filtList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//计算属性的过滤功能</span>
        <span class="token comment">//过滤掉id小于0的对象</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=></span> v<span class="token punctuation">.</span>id <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-判断微信程序和app" tabindex="-1"><a class="header-anchor" href="#_2-5-判断微信程序和app" aria-hidden="true">#</a> 2.5 判断微信程序和app</h3>
<p>使用魔法注释 判断当前为微信小程序的时候才显示该内容</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> #ifdef <span class="token constant">MP</span><span class="token operator">-</span><span class="token constant">WEIXIN</span> <span class="token operator">--</span><span class="token operator">></span>
	<span class="token operator">&lt;</span>view<span class="token operator">></span> 显示内容<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> #endif <span class="token operator">--</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第3章-事件和组件" tabindex="-1"><a class="header-anchor" href="#第3章-事件和组件" aria-hidden="true">#</a> 第3章 事件和组件</h2>
<h3 id="_3-1-事件的使用" tabindex="-1"><a class="header-anchor" href="#_3-1-事件的使用" aria-hidden="true">#</a> 3.1 事件的使用</h3>
<p>注册事件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>view @click<span class="token operator">=</span><span class="token string">"handleClick"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>定义函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"这里是函数内容"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-事件的传参" tabindex="-1"><a class="header-anchor" href="#_3-2-事件的传参" aria-hidden="true">#</a> 3.2 事件的传参</h3>
<p>普通传参</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>view @click<span class="token operator">=</span><span class="token string">"handleClick('abc')"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>$event 把整个对象传入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>view @click<span class="token operator">=</span><span class="token string">"handleClick($event)"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-3-组件使用" tabindex="-1"><a class="header-anchor" href="#_3-3-组件使用" aria-hidden="true">#</a> 3.3 组件使用</h3>
<p>创建组件</p>
<p>src/components/img-border.vue</p>
<p>引入组件</p>
<p>src/pages/index/index.vue</p>
<p>import imgBorder from &quot;@/components/img-border&quot;;</p>
<p>注册组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
    imgBorder
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>img<span class="token operator">-</span>border<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>img<span class="token operator">-</span>border<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-4-组件传参" tabindex="-1"><a class="header-anchor" href="#_3-4-组件传参" aria-hidden="true">#</a> 3.4 组件传参</h3>
<h4 id="_3-4-1-父传子" tabindex="-1"><a class="header-anchor" href="#_3-4-1-父传子" aria-hidden="true">#</a> 3.4.1 父传子</h4>
<p>父组件内标签上 绑定属性</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>img<span class="token operator">-</span>border <span class="token operator">:</span>list<span class="token operator">=</span><span class="token string">"[1,2,3]"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>img<span class="token operator">-</span>border<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>子组件在props属性里接受</p>
<p>声明传递内容的类型</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> Array
<span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4-2-子传父" tabindex="-1"><a class="header-anchor" href="#_3-4-2-子传父" aria-hidden="true">#</a> 3.4.2 子传父</h4>
<p>子组件触发事件传递数据</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>view @click<span class="token operator">=</span>"clickHandler<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>

<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">clickHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">"srcChange"</span><span class="token punctuation">,</span><span class="token string">"内容"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件监听接收数据</p>
<p>e形参就是子组件传过来的参数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>view @srcChange<span class="token operator">=</span>"HandlerSrcChange<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>

<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">HandlersrcChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-全局共享数据" tabindex="-1"><a class="header-anchor" href="#_3-5-全局共享数据" aria-hidden="true">#</a> 3.5 全局共享数据</h3>
<h4 id="_3-5-1-通过vue原型共享数据" tabindex="-1"><a class="header-anchor" href="#_3-5-1-通过vue原型共享数据" aria-hidden="true">#</a> 3.5.1 通过Vue原型共享数据</h4>
<p>在 src/main.js</p>
<p><code v-pre>Vue.prototype.baseurl=&quot;www.baidu.com&quot;</code></p>
<p>在某个组件里的 onLoad 函数内</p>
<p><code v-pre>console.log(this.baseurl)</code></p>
<h4 id="_3-5-2-通过小程序特性-globaldata-共享数据" tabindex="-1"><a class="header-anchor" href="#_3-5-2-通过小程序特性-globaldata-共享数据" aria-hidden="true">#</a> 3.5.2 通过小程序特性 globalData 共享数据</h4>
<p>在 src/App.vue</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">globalData</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span><span class="token string">"www.badiu.com"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在某个组件里的 onLoad 函数内</p>
<p><code v-pre>e = getApp().globalData.base</code></p>
<p><code v-pre>console.log(e)</code></p>
<h4 id="_3-5-3-vuex" tabindex="-1"><a class="header-anchor" href="#_3-5-3-vuex" aria-hidden="true">#</a> 3.5.3 vuex</h4>
<h4 id="_3-5-4-本地存储" tabindex="-1"><a class="header-anchor" href="#_3-5-4-本地存储" aria-hidden="true">#</a> 3.5.4 本地存储</h4>
<h3 id="_3-6-组件插槽" tabindex="-1"><a class="header-anchor" href="#_3-6-组件插槽" aria-hidden="true">#</a> 3.6 组件插槽</h3>
<p>插槽可以实现动态给子组件传递标签</p>
<p>创建子组件 <code v-pre>&lt;tab-Bar&gt;</code>  在需要插入的地方使用 <code v-pre>&lt;slot&gt;&lt;/slot&gt;</code>占位</p>
<p>父组件引入子组件 并在内部写入标签 即可插入到子组件内</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>tab<span class="token operator">-</span>Bar<span class="token operator">></span>
    <span class="token operator">&lt;</span>view<span class="token operator">></span>要插入的标签内容<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>tab<span class="token operator">-</span>Bar<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-常用组件库" tabindex="-1"><a class="header-anchor" href="#_3-7-常用组件库" aria-hidden="true">#</a> 3.7 常用组件库</h3>
<ul>
<li>ColorUI</li>
</ul>
<p>下载官方压缩包 解压到项目的 plugins文件夹下</p>
<p>在 main.js 中引入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//引入colorui</span>
<span class="token keyword">import</span> <span class="token string">"./plugins/colorui/main.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./plugins/colorui/icon.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./plugins/colorui/animation.css"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Vant</li>
</ul>
<p>1.在项目根目录下新建 wxcomponents 目录 ，此目录应该与src 目录同级。</p>
<p>2.直接通过 git 下载 vant-weapp 最新源代码，并将dist目录拷贝到新建的wxcomponents目录下，并重命名dist为vant</p>
<p>3.在pages.json中新增两个一级配置</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"autoscan"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token property">"custom"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token property">"^van-(.*)"</span><span class="token operator">:</span> <span class="token string">"@/wxcomponents/vant/$1/index.vue"</span>
   <span class="token comment">// 匹配wxcomponents目录内的vue文件</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Vuetify</p>
</li>
<li>
<p>Nutui</p>
</li>
</ul>
<h2 id="第4章-生命周期" tabindex="-1"><a class="header-anchor" href="#第4章-生命周期" aria-hidden="true">#</a> 第4章 生命周期</h2>
<h3 id="_4-1-应用级" tabindex="-1"><a class="header-anchor" href="#_4-1-应用级" aria-hidden="true">#</a> 4.1 应用级</h3>
<p>onLaunch 当uniapp应用启动完成时触发，全局只触发一次</p>
<p>onShow 当uniapp应用启动，或从后台进入前台显示</p>
<p>onHide 当uniapp应用从前台进入后台</p>
<p>onUniNViewMessage 对nvue页面发送的数据进行监听</p>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<p>应用级别生命周期仅在App.vue中监听，在其他页面无效</p>
</div>
<h3 id="_4-2-页面级" tabindex="-1"><a class="header-anchor" href="#_4-2-页面级" aria-hidden="true">#</a> 4.2 <strong>页面级</strong></h3>
<p>onLoad 页面初始化 执行一次</p>
<p>onReady 页面加载完毕 执行一次</p>
<p>onShow 页面进入时 执行多次</p>
<p>onHide 页面离开时 执行多次</p>
<p>onPullDownRefresh 页面下拉时 需要在pages.json中开启配置</p>
<h3 id="_4-3-组件级" tabindex="-1"><a class="header-anchor" href="#_4-3-组件级" aria-hidden="true">#</a> 4.3 <strong>组件级</strong></h3>
<p>组件内使用 mounted 组件挂载完毕时</p>
<p>组件内的生命周期就是vue生命周期</p>
<h2 id="第5章-路由" tabindex="-1"><a class="header-anchor" href="#第5章-路由" aria-hidden="true">#</a> 第5章 路由</h2>
<h3 id="_5-1-路由导航" tabindex="-1"><a class="header-anchor" href="#_5-1-路由导航" aria-hidden="true">#</a> 5.1 路由导航</h3>
<ul>
<li>uni.navigateTo</li>
</ul>
<p>保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。</p>
<ul>
<li>uni.redirectTo</li>
</ul>
<p>关闭当前页面，跳转到应用内的某个页面。</p>
<ul>
<li>uni.reLaunch</li>
</ul>
<p>关闭所有页面，打开到应用内的某个页面。</p>
<ul>
<li>uni.switchTab</li>
</ul>
<p>如果页面需要跳转到 tabBar 页面使用uni.switchTab，此方法会关闭其他所有非 tabBar 页面。</p>
<ul>
<li>uni.navigateBack</li>
</ul>
<p>关闭当前页面，返回上一页面或多级页面。</p>
<ul>
<li>uni.preloadPage</li>
</ul>
<p>预加载页面，是一种性能优化技术。被预载的页面，在打开时速度更快。</p>
<h3 id="_5-2-获取路由" tabindex="-1"><a class="header-anchor" href="#_5-2-获取路由" aria-hidden="true">#</a> 5.2 获取路由</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取当前打开过的页面路由数组</span>
<span class="token keyword">let</span> routes <span class="token operator">=</span> <span class="token function">getCurrentPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取当前页面路由，也就是最后一个打开的页面路由</span>
<span class="token keyword">let</span> curRoute <span class="token operator">=</span> routes<span class="token punctuation">[</span>routes<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>route
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第6章-常用功能总结" tabindex="-1"><a class="header-anchor" href="#第6章-常用功能总结" aria-hidden="true">#</a> 第6章 常用功能总结</h2>
<h3 id="_6-1-静音功能" tabindex="-1"><a class="header-anchor" href="#_6-1-静音功能" aria-hidden="true">#</a> 6.1 静音功能</h3>
<p>video 标签上 muted 属性 : 设置为 true 或 false</p>
<h3 id="_6-2-下载功能" tabindex="-1"><a class="header-anchor" href="#_6-2-下载功能" aria-hidden="true">#</a> 6.2 下载功能</h3>
<h3 id="_6-3-触控功能" tabindex="-1"><a class="header-anchor" href="#_6-3-触控功能" aria-hidden="true">#</a> 6.3 触控功能</h3>
<p>滑动</p>
<p>长按</p>
<p>点击</p>
<p>多指</p>
<h3 id="_6-4-分享功能" tabindex="-1"><a class="header-anchor" href="#_6-4-分享功能" aria-hidden="true">#</a> 6.4 分享功能</h3>
<h3 id="_6-5-轮播图" tabindex="-1"><a class="header-anchor" href="#_6-5-轮播图" aria-hidden="true">#</a> 6.5 轮播图</h3>
<p>swiper标签</p>
<p>scrollview标签</p>
<p>双联动</p>
<h3 id="_6-4" tabindex="-1"><a class="header-anchor" href="#_6-4" aria-hidden="true">#</a> 6.4</h3>
<h2 id="第7章-开发实战" tabindex="-1"><a class="header-anchor" href="#第7章-开发实战" aria-hidden="true">#</a> 第7章 开发实战</h2>
<h3 id="_5-1-项目介绍" tabindex="-1"><a class="header-anchor" href="#_5-1-项目介绍" aria-hidden="true">#</a> 5.1 项目介绍</h3>
<p>懂你找图</p>
<h3 id="_5-2-项目搭建" tabindex="-1"><a class="header-anchor" href="#_5-2-项目搭建" aria-hidden="true">#</a> 5.2 项目搭建</h3>
<h4 id="_5-2-1-环境准备" tabindex="-1"><a class="header-anchor" href="#_5-2-1-环境准备" aria-hidden="true">#</a> 5.2.1 环境准备</h4>
<ul>
<li>创建vue2项目</li>
</ul>
<p><code v-pre>vue create -p dcloudio/uni-preset-vue uniapp-study</code></p>
<ul>
<li>创建vue3项目 暂时不好用</li>
</ul>
<p><code v-pre>vue create -p dcloudio/uni-preset-vue#vue3 uni-name</code></p>
<ul>
<li>创建vue3的vite项目</li>
</ul>
<p><code v-pre>npx degit dcloudio/uni-preset-vue#vite my-vue3-project</code></p>
<p>如果连接超时可直接下载模板</p>
<p><a href="https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite.zip" target="_blank" rel="noopener noreferrer">https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite.zip<ExternalLinkIcon/></a></p>
<p>安装样式依赖</p>
<p><code v-pre>npm i sass -D</code></p>
<p><code v-pre>npm i sass-loader@10.1.1 -D </code></p>
<p>打开webstrom运行项目</p>
<p><code v-pre>npm run dev:mp-weixin</code></p>
<p>打开微信开发工具导入dist/weixin目录</p>
</div></template>
