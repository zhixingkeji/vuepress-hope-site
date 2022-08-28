<template><div><h2 id="第1章-使用变量" tabindex="-1"><a class="header-anchor" href="#第1章-使用变量" aria-hidden="true">#</a> 第1章 使用变量</h2>
<h3 id="_1-1-变量声明" tabindex="-1"><a class="header-anchor" href="#_1-1-变量声明" aria-hidden="true">#</a> 1.1 变量声明</h3>
<p>把反复使用的css属性值 定义成变量，然后通过变量名来引用它们，而无需重复书写这一属性值</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$nav-color</span></span><span class="token punctuation">:</span> #F90<span class="token punctuation">;</span>

<span class="token selector">nav </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$nav-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-在calc中使用变量" tabindex="-1"><a class="header-anchor" href="#_1-2-在calc中使用变量" aria-hidden="true">#</a> 1.2 在calc中使用变量</h3>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$value1</span></span><span class="token punctuation">:</span> 20 

<span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token variable">#{$value1}</span> <span class="token operator">+</span> 12px <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第2章-嵌套" tabindex="-1"><a class="header-anchor" href="#第2章-嵌套" aria-hidden="true">#</a> 第2章 嵌套</h2>
<p>css中重复写选择器是非常恼人的。如果要写一大串指向页面中同一块的样式时，往往需要 一遍又一遍地写同一个ID，scss可以让你只写一遍，且使样式可读性更高。在scss中，你可以像俄罗斯套娃那样在规则块中嵌套规则块</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">#content </span><span class="token punctuation">{</span>
  <span class="token selector">article </span><span class="token punctuation">{</span>
    <span class="token selector">h1 </span><span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> #333 <span class="token punctuation">}</span>
    <span class="token selector">p </span><span class="token punctuation">{</span> <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 1.4em <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">aside </span><span class="token punctuation">{</span> <span class="token property">background-color</span><span class="token punctuation">:</span> #EEE <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-父选择器标识符" tabindex="-1"><a class="header-anchor" href="#_2-1-父选择器标识符" aria-hidden="true">#</a> 2.1 父选择器标识符&amp;</h3>
<p>当包含父选择器标识符的嵌套规则被打开时，它不会像后代选择器那样进行拼接，而是<code v-pre>&amp;</code>被父选择器直接替换</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">article a </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> red <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-群组选择器的嵌套" tabindex="-1"><a class="header-anchor" href="#_2-2-群组选择器的嵌套" aria-hidden="true">#</a> 2.2 群组选择器的嵌套</h3>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token selector">h1, h2, h3 </span><span class="token punctuation">{</span><span class="token property">margin-bottom</span><span class="token punctuation">:</span> .8em<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-子组合选择器和同层组合选择器" tabindex="-1"><a class="header-anchor" href="#_2-3-子组合选择器和同层组合选择器" aria-hidden="true">#</a> 2.3 子组合选择器和同层组合选择器</h3>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">article </span><span class="token punctuation">{</span>
  <span class="token selector">~ article </span><span class="token punctuation">{</span> <span class="token property">border-top</span><span class="token punctuation">:</span> 1px dashed #ccc <span class="token punctuation">}</span>
  <span class="token selector">> section </span><span class="token punctuation">{</span> <span class="token property">background</span><span class="token punctuation">:</span> #eee <span class="token punctuation">}</span>
  <span class="token selector">dl > </span><span class="token punctuation">{</span>
    <span class="token selector">dt </span><span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> #333 <span class="token punctuation">}</span>
    <span class="token selector">dd </span><span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> #555 <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">nav + <span class="token parent important">&amp;</span> </span><span class="token punctuation">{</span> <span class="token property">margin-top</span><span class="token punctuation">:</span> 0 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-嵌套属性" tabindex="-1"><a class="header-anchor" href="#_2-4-嵌套属性" aria-hidden="true">#</a> 2.4 嵌套属性</h3>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">nav </span><span class="token punctuation">{</span>
  <span class="token selector">border: 1px solid #ccc </span><span class="token punctuation">{</span>
  	<span class="token property">left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
 	 	<span class="token property">right</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第3章-导入scss文件" tabindex="-1"><a class="header-anchor" href="#第3章-导入scss文件" aria-hidden="true">#</a> 第3章 导入scss文件</h2>
<h3 id="_3-1-使用scss部分文件" tabindex="-1"><a class="header-anchor" href="#_3-1-使用scss部分文件" aria-hidden="true">#</a> 3.1 使用scss部分文件</h3>
<p>当通过<code v-pre>@import</code>把<code v-pre>sass</code>样式分散到多个文件时，你通常只想生成少数几个<code v-pre>css</code>文件。那些专门为<code v-pre>@import</code>命令而编写的<code v-pre>sass</code>文件，并不需要生成对应的独立<code v-pre>css</code>文件，这样的<code v-pre>sass</code>文件称为局部文件。对此，<code v-pre>sass</code>有一个特殊的约定来命名这些文件。</p>
<p>此约定即，<code v-pre>sass</code>局部文件的文件名以下划线开头。这样，<code v-pre>sass</code>就不会在编译时单独编译这个文件输出<code v-pre>css</code>，而只把这个文件用作导入。当你<code v-pre>@import</code>一个局部文件时，还可以不写文件的全名，即省略文件名开头的下划线。举例来说，你想导入<code v-pre>themes/_night-sky.scss</code>这个局部文件里的变量，你只需在样式表中写<code v-pre>@import</code> <code v-pre>&quot;themes/night-sky&quot;;</code>。</p>
<h3 id="_3-2-默认变量值" tabindex="-1"><a class="header-anchor" href="#_3-2-默认变量值" aria-hidden="true">#</a> 3.2 默认变量值</h3>
<p><code v-pre>!default</code>用于变量，含义是：如果这个变量被声明赋值了，那就用它声明的值，否则就用这个默认值。</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$fancybox-width</span></span><span class="token punctuation">:</span> 400px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token selector">.fancybox </span><span class="token punctuation">{</span>
<span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$fancybox-width</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-嵌套导入" tabindex="-1"><a class="header-anchor" href="#_3-3-嵌套导入" aria-hidden="true">#</a> 3.3 嵌套导入</h3>
<p>有一个名为<code v-pre>_blue-theme.scss</code>的局部文件</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">aside </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后把它导入到一个CSS规则内</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code>.blue-theme <span class="token punctuation">{</span><span class="token keyword">@import</span> <span class="token string">"blue-theme"</span><span class="token punctuation">}</span>

<span class="token comment">//生成的结果跟你直接在.blue-theme选择器内写_blue-theme.scss文件的内容完全一样。</span>

<span class="token selector">.blue-theme </span><span class="token punctuation">{</span>
  <span class="token selector">aside </span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-原生css导入" tabindex="-1"><a class="header-anchor" href="#_3-4-原生css导入" aria-hidden="true">#</a> 3.4 原生css导入</h3>
<p>你不能用<code v-pre>sass</code>的<code v-pre>@import</code>直接导入一个原始的<code v-pre>css</code>文件，因为<code v-pre>sass</code>会认为你想用<code v-pre>css</code>原生的<code v-pre>@import</code>。但是，因为<code v-pre>sass</code>的语法完全兼容<code v-pre>css</code>，所以你可以把原始的<code v-pre>css</code>文件改名为<code v-pre>.scss</code>后缀，即可直接导入了。</p>
<h2 id="第4章-静默注释" tabindex="-1"><a class="header-anchor" href="#第4章-静默注释" aria-hidden="true">#</a> 第4章 静默注释</h2>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span> <span class="token comment">// 这种注释内容不会出现在生成的css文件中</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token comment">/* 这种注释内容会出现在生成的css文件中 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第5章-混合器" tabindex="-1"><a class="header-anchor" href="#第5章-混合器" aria-hidden="true">#</a> 第5章 混合器</h2>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">rounded-corners </span><span class="token punctuation">{</span>
  <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">notice </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #00aa00<span class="token punctuation">;</span>
  <span class="token keyword">@include</span> rounded-corners<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">//sass最终生成：</span>
<span class="token selector">.notice </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #00aa00<span class="token punctuation">;</span>
  <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第6章-使用选择器继承来精简css" tabindex="-1"><a class="header-anchor" href="#第6章-使用选择器继承来精简css" aria-hidden="true">#</a> 第6章 使用选择器继承来精简css</h2>
<p>以<code v-pre>class=&quot;seriousError&quot;</code> 修饰的<code v-pre>html</code>元素最终的展示效果就好像是<code v-pre>class=&quot;seriousError error&quot;</code>。</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token comment">//通过选择器继承继承样式</span>
<span class="token selector">.error </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.seriousError </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> .error<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第七章-vue中引入全局配置文件" tabindex="-1"><a class="header-anchor" href="#第七章-vue中引入全局配置文件" aria-hidden="true">#</a> 第七章 vue中引入全局配置文件</h2>
<p>在配置文件 <strong>vue.config.js</strong> 中增加如下代码:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    
  <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> oneOfsMap <span class="token operator">=</span> config<span class="token punctuation">.</span>module<span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">"scss"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>oneOfs<span class="token punctuation">.</span>store<span class="token punctuation">;</span>
    oneOfsMap<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      item
        <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">"sass-resources-loader"</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">"sass-resources-loader"</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token comment">// 公用scss</span>
          <span class="token literal-property property">resources</span><span class="token operator">:</span> <span class="token string">"./src/css/global.scss"</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
