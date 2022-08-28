<template><div><h2 id="第1章-vuepress" tabindex="-1"><a class="header-anchor" href="#第1章-vuepress" aria-hidden="true">#</a> 第1章 vuepress</h2>
<h3 id="_1-1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-介绍" aria-hidden="true">#</a> 1.1 介绍</h3>
<h3 id="_1-2-安装" tabindex="-1"><a class="header-anchor" href="#_1-2-安装" aria-hidden="true">#</a> 1.2 安装</h3>
<h3 id="_1-3-项目结构" tabindex="-1"><a class="header-anchor" href="#_1-3-项目结构" aria-hidden="true">#</a> 1.3 项目结构</h3>
<h3 id="_1-4-配置" tabindex="-1"><a class="header-anchor" href="#_1-4-配置" aria-hidden="true">#</a> 1.4 配置</h3>
<h3 id="_1-5-静态资源" tabindex="-1"><a class="header-anchor" href="#_1-5-静态资源" aria-hidden="true">#</a> 1.5 静态资源</h3>
<h3 id="_1-6-md拓展" tabindex="-1"><a class="header-anchor" href="#_1-6-md拓展" aria-hidden="true">#</a> 1.6 md拓展</h3>
<h2 id="第2章-hopo主题" tabindex="-1"><a class="header-anchor" href="#第2章-hopo主题" aria-hidden="true">#</a> 第2章 hopo主题</h2>
<h3 id="_2-1-介绍" tabindex="-1"><a class="header-anchor" href="#_2-1-介绍" aria-hidden="true">#</a> 2.1 介绍</h3>
<p>虽然标明了这是一个主题仓库，但是它同时包含了十多个同样功能完善且强大的插件。</p>
<h3 id="_2-2-安装" tabindex="-1"><a class="header-anchor" href="#_2-2-安装" aria-hidden="true">#</a> 2.2 安装</h3>
<p>在当前 <code v-pre>my-vuepress</code> 项目的 <code v-pre>[my-site]</code> 文件夹内创建 hope 项目</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init vuepress-theme-hope@next my-site
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="第3章-md基础" tabindex="-1"><a class="header-anchor" href="#第3章-md基础" aria-hidden="true">#</a> 第3章 md基础</h2>
<h2 id="第4章-hope-md增强" tabindex="-1"><a class="header-anchor" href="#第4章-hope-md增强" aria-hidden="true">#</a> 第4章 hope-md增强</h2>
<h3 id="_4-1-启用md增强" tabindex="-1"><a class="header-anchor" href="#_4-1-启用md增强" aria-hidden="true">#</a> 4.1 启用md增强</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress-theme-hope"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">{</span>
      mdEnhance<span class="token operator">:</span> <span class="token punctuation">{</span>
        enableAll<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-自定义容器" tabindex="-1"><a class="header-anchor" href="#_4-2-自定义容器" aria-hidden="true">#</a> 4.2 自定义容器</h3>
<p>启动该功能</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>plugins<span class="token operator">:</span> <span class="token punctuation">{</span>
	mdEnhance<span class="token operator">:</span> <span class="token punctuation">{</span>
		container<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>信息容器</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>::: info 自定义标题

一个有 `代码` 和 [链接](#markdown) 的信息容器。

```js
const a = 1;
```

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注释容器</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>::: note 自定义标题

一个有 `代码` 和 [链接](#markdown) 的注释容器。

```js
const a = 1;
```

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提示容器</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>::: tip 自定义标题

一个有 `代码` 和 [链接](#markdown) 的提示容器。

```js
const a = 1;
```

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>警告容器</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>::: warning 自定义标题

一个有 `代码` 和 [链接](#markdown) 的警告容器。

```js
const a = 1;
```

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>危险容器</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>::: danger 自定义标题

一个有 `代码` 和 [链接](#markdown) 的危险容器。

```js
const a = 1;
```

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详情容器</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>::: details 自定义标题

一个有 `代码` 和 [链接](#markdown) 的详情容器。

```js
const a = 1;
```

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-选项卡" tabindex="-1"><a class="header-anchor" href="#_4-3-选项卡" aria-hidden="true">#</a> 4.3 选项卡</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>plugins<span class="token operator">:</span> <span class="token punctuation">{</span>
	mdEnhance<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 添加选项卡支持</span>
	tabs<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>::: code-tabs#shell

@tab 标题 1

&lt;!-- tab 1 内容 -->

@tab 标题 2

&lt;!-- tab 2 内容 -->

@tab:active 标题 3

&lt;!-- tab 3 将会被默认激活 -->

&lt;!-- tab 3 内容 -->

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-tex" tabindex="-1"><a class="header-anchor" href="#_4-4-tex" aria-hidden="true">#</a> 4.4 Tex</h3>
<h3 id="_4-5-图表" tabindex="-1"><a class="header-anchor" href="#_4-5-图表" aria-hidden="true">#</a> 4.5 图表</h3>
<h3 id="_4-6-徽章" tabindex="-1"><a class="header-anchor" href="#_4-6-徽章" aria-hidden="true">#</a> 4.6 徽章</h3>
<h3 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h3>
<p>徽章</p>
<p>pdf</p>
<h3 id="外部引入" tabindex="-1"><a class="header-anchor" href="#外部引入" aria-hidden="true">#</a> 外部引入</h3>
<p>思维导图</p>
<h2 id="第5章-hope界面" tabindex="-1"><a class="header-anchor" href="#第5章-hope界面" aria-hidden="true">#</a> 第5章 hope界面</h2>
<h2 id="第6章-hope布局" tabindex="-1"><a class="header-anchor" href="#第6章-hope布局" aria-hidden="true">#</a> 第6章 hope布局</h2>
<h2 id="第7章-hope功能" tabindex="-1"><a class="header-anchor" href="#第7章-hope功能" aria-hidden="true">#</a> 第7章 hope功能</h2>
<h2 id="第8章-hope博客" tabindex="-1"><a class="header-anchor" href="#第8章-hope博客" aria-hidden="true">#</a> 第8章 hope博客</h2>
<h2 id="第9章-hope插件" tabindex="-1"><a class="header-anchor" href="#第9章-hope插件" aria-hidden="true">#</a> 第9章 hope插件</h2>
</div></template>
