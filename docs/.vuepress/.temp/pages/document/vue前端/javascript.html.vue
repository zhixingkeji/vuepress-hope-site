<template><div><h2 id="第1章-js简介" tabindex="-1"><a class="header-anchor" href="#第1章-js简介" aria-hidden="true">#</a> 第1章 js简介</h2>
<h3 id="_1-1-js简介" tabindex="-1"><a class="header-anchor" href="#_1-1-js简介" aria-hidden="true">#</a> 1.1 js简介</h3>
<p>js是脚本语言，是解释性语言，不需要编译，内嵌在网页中</p>
<p>js特点</p>
<p>解释性，基于对象，事件驱动，跨平台，安全性</p>
<p>js应用</p>
<p>验证内容 动画效果</p>
<h3 id="_1-2-js使用" tabindex="-1"><a class="header-anchor" href="#_1-2-js使用" aria-hidden="true">#</a> 1.2 js使用</h3>
<p>在页面中直接嵌入JavaScript代码</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"我喜欢学习javascript"</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>链接外部JavaScript文件</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>作为标记的属性值使用</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:alert('点我干啥')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点我<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>与事件结合调用</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>点我<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'点我干啥'</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="第2章-基本语法" tabindex="-1"><a class="header-anchor" href="#第2章-基本语法" aria-hidden="true">#</a> 第2章 基本语法</h2>
<h3 id="_2-1-语法" tabindex="-1"><a class="header-anchor" href="#_2-1-语法" aria-hidden="true">#</a> 2.1 语法</h3>
<ol>
<li>执行顺序</li>
</ol>
<p>从上到下逐行执行</p>
<ol start="2">
<li>大小写敏感</li>
</ol>
<p>在输入语言的关键字，函数名，变量时，区分大小写，只有在html中不区分</p>
<ol start="3">
<li>空格与换行</li>
</ol>
<p>在JavaScript中会忽略程序中的空格，换行，制表符</p>
<p>但是一个分号语句内不能换行</p>
<ol start="4">
<li>每行结尾的分号可有可无</li>
</ol>
<p>虽然可以去掉分号，但是建议加上，方便阅读</p>
<ol start="5">
<li>注释</li>
</ol>
<p>单行注释 <code v-pre>//</code>  ，   多行注释 <code v-pre>/*     */</code></p>
<h3 id="_2-2-输出" tabindex="-1"><a class="header-anchor" href="#_2-2-输出" aria-hidden="true">#</a> 2.2 输出</h3>
<p>JavaScript 能够以不同方式“显示”数据：</p>
<p>使用 <code v-pre>window.alert()</code> 写入警告框</p>
<p>使用 <code v-pre>document.write()</code> 写入 HTML 输出</p>
<p>使用 <code v-pre>innerHTML 写入 HTML</code> 元素</p>
<p>使用 <code v-pre>console.log()</code> 写入浏览器控制台</p>
<h3 id="_2-3-变量" tabindex="-1"><a class="header-anchor" href="#_2-3-变量" aria-hidden="true">#</a> 2.3 变量</h3>
<p>ES2015 引入了两个重要的 JavaScript 新关键词：<code v-pre>let</code> 和 <code v-pre>const</code></p>
<p>全局作用域:</p>
<p>全局（在函数之外）声明的变量拥有全局作用域。</p>
<p>局部变量只能在它们被声明的函数内访问。</p>
<p>通过 var 关键词声明的变量没有块作用域。</p>
<p>在 HTML 中，全局作用域是 window 对象。</p>
<p>在 HTML 中，全局作用域是 window 对象。</p>
<p>通过 <code v-pre>var</code> 关键词定义的全局变量属于 window 对象。</p>
<p>通过 <code v-pre>let</code> 关键词定义的全局变量不属于 window 对象。</p>
<h3 id="_2-4-常量" tabindex="-1"><a class="header-anchor" href="#_2-4-常量" aria-hidden="true">#</a> 2.4 常量</h3>
<p>关键字 <code v-pre>const</code> 有一定的误导性。</p>
<p>它没有定义常量值。它定义了对值的常量引用。</p>
<p>因此，我们不能更改常量原始值，但我们可以更改常量对象的属性。</p>
<h3 id="_2-5-数据类型" tabindex="-1"><a class="header-anchor" href="#_2-5-数据类型" aria-hidden="true">#</a> 2.5 数据类型</h3>
<p>数值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> length <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>                             <span class="token comment">// 数字</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>字符串值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> lastName <span class="token operator">=</span> <span class="token string">"Gates"</span><span class="token punctuation">;</span>                      <span class="token comment">// 字符串</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>布尔值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> hasbol <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>数组</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> cars <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Porsche"</span>， <span class="token string">"Volvo"</span>， <span class="token string">"BMW"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>         <span class="token comment">// 数组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">firstName</span><span class="token operator">:</span><span class="token string">"Bill"</span>， lastName<span class="token operator">:</span><span class="token string">"Gates"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>    <span class="token comment">// 对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//一些代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-事件" tabindex="-1"><a class="header-anchor" href="#_2-6-事件" aria-hidden="true">#</a> 2.6 事件</h3>
<p>HTML 事件可以是浏览器或用户做的某些事情。</p>
<pre><code>例如 :  

HTML 网页完成加载  

HTML 输入字段被修改  

HTML 按钮被点击  
</code></pre>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span><span class="token value javascript language-javascript">document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML<span class="token operator">=</span><span class="token function">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">'</span></span></span><span class="token punctuation">></span></span>
    现在的时间是？<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>常见的HTML事件</p>
<table>
<thead>
<tr>
<th>事件</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>onchange</td>
<td>HTML 元素已被改变</td>
</tr>
<tr>
<td>onclick</td>
<td>用户点击了 HTML 元素</td>
</tr>
<tr>
<td>onmouseover</td>
<td>用户把鼠标移动到 HTML 元素上</td>
</tr>
<tr>
<td>onmouseout</td>
<td>用户把鼠标移开 HTML 元素</td>
</tr>
<tr>
<td>onkeydown</td>
<td>用户按下键盘按键</td>
</tr>
<tr>
<td>onload</td>
<td>浏览器已经完成页面加载</td>
</tr>
</tbody>
</table>
<h3 id="_2-7-字符串方法" tabindex="-1"><a class="header-anchor" href="#_2-7-字符串方法" aria-hidden="true">#</a> 2.7 字符串方法</h3>
<p>字符串长度</p>
<p>length 属性返回字符串的长度</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> txt <span class="token operator">=</span> <span class="token string">"ABCDEFGHIJKLMNOPQRSTUVWXYZ"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> sln <span class="token operator">=</span> txt<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查找字符串中的字符串</p>
<p>indexOf() 方法返回字符串中指定文本首次出现的索引（位置）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"The full name of China is the People's Republic of China."</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> pos <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">"China"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>检索字符串中的字符串</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"The full name of China is the People's Republic of China."</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> pos <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token string">"locate"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>截取字符串 slice() 方法</p>
<p>该方法设置两个参数：起始索引（开始位置），终止索引（结束位置）。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"Apple,Banana,Mango"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

$ res <span class="token operator">=</span> Banana
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>截取字符串 substr() 方法</p>
<p>parm1起始索引，parm2规定被提取部分的长度。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"Apple,Banana,Mango"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>替换字符串内容</p>
<p>replace() 方法用另一个值替换在字符串中指定的值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>str <span class="token operator">=</span> <span class="token string">"Please visit Microsoft!"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> n <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"Microsoft"</span><span class="token punctuation">,</span> <span class="token string">"W3School"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>默认地，replace() 只替换首个匹配</p>
<p>如需替换所有匹配，请使用正则表达式的 g 标志</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>str <span class="token operator">=</span> <span class="token string">"Please visit Microsoft and Microsoft!"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> n <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Microsoft</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">"W3School"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>把字符串转换为数组</p>
<p>可以通过 split() 将字符串转换为数组</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> txt <span class="token operator">=</span> <span class="token string">"a,b,c,d,e"</span><span class="token punctuation">;</span>   <span class="token comment">// 字符串</span>
txt<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// 用逗号分隔</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>字符串模板</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> price <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token constant">VAT</span> <span class="token operator">=</span> <span class="token number">0.25</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Total: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span>price <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token constant">VAT</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> header <span class="token operator">=</span> <span class="token string">"Templates Literals"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> tags <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"template literals"</span><span class="token punctuation">,</span> <span class="token string">"javascript"</span><span class="token punctuation">,</span><span class="token string">"es6"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> html <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;h2></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>header<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/h2>&lt;ul></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> x <span class="token keyword">of</span> tags<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  html <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;li></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/li></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

html <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;/ul></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-8-数字方法" tabindex="-1"><a class="header-anchor" href="#_2-8-数字方法" aria-hidden="true">#</a> 2.8 数字方法</h3>
<p>toString() 方法</p>
<p>以字符串返回数值。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
x<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">// 从变量 x 返回 123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>四舍五入 toFixed() 方法</p>
<p>返回字符串值，它包含了指定位数小数的数字</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">9.656</span><span class="token punctuation">;</span>
x<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// 返回 10</span>
x<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// 返回 9.66</span>
x<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// 返回 9.6560</span>
x<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// 返回 9.656000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>valueOf() 方法</p>
<p>valueOf() 以数值返回数值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
x<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">// 从变量 x 返回 123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-9-数组方法" tabindex="-1"><a class="header-anchor" href="#_2-9-数组方法" aria-hidden="true">#</a> 2.9 数组方法</h3>
<p>添加数组元素</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Banana"</span>， <span class="token string">"Orange"</span>， <span class="token string">"Apple"</span>， <span class="token string">"Mango"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
fruits<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"Lemon"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment">// 向 fruits 添加一个新元素 (Lemon)</span>
fruits<span class="token punctuation">[</span>fruits<span class="token punctuation">.</span>length<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Lemon"</span><span class="token punctuation">;</span>     <span class="token comment">// 向 fruits 添加一个新元素 (Lemon)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断是否为数组<code v-pre>isArray()</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 返回 true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把数组转换为字符串</p>
<p>join() 方法也可将所有数组元素结合为一个字符串。</p>
<p>它的行为类似 toString()，但是您还可以规定分隔符</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Banana"</span><span class="token punctuation">,</span><span class="token string">"Orange"</span><span class="token punctuation">,</span><span class="token string">"Apple"</span><span class="token punctuation">,</span><span class="token string">"Mango"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> fruits<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">" * "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">//结果 : Banana * Orange * Apple * Mango</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除数组元素</p>
<p>pop() 方法从数组中删除最后一个元素，方法返回“被弹出”的值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Banana"</span>， <span class="token string">"Orange"</span>， <span class="token string">"Apple"</span>， <span class="token string">"Mango"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
fruits<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// 从 fruits 删除最后一个元素（"Mango"）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>拼接数组</p>
<p>splice() 方法可用于向数组添加新项</p>
<p>第一个参数（2）定义了应添加新元素的位置（拼接）</p>
<p>第二个参数（2）定义应删除多少元素</p>
<p>其余参数（“Lemon”，“Kiwi”）定义要添加的新元素</p>
<p>方法返回一个包含已删除项的数组</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Banana"</span><span class="token punctuation">,</span><span class="token string">"Orange"</span><span class="token punctuation">,</span><span class="token string">"Apple"</span><span class="token punctuation">,</span><span class="token string">"Mango"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
fruits<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">"Lemon"</span><span class="token punctuation">,</span><span class="token string">"Kiwi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-10-日期" tabindex="-1"><a class="header-anchor" href="#_2-10-日期" aria-hidden="true">#</a> 2.10 日期</h3>
<p>var d = new Date();</p>
<h3 id="_2-11-数学" tabindex="-1"><a class="header-anchor" href="#_2-11-数学" aria-hidden="true">#</a> 2.11 数学</h3>
<p>Math 对象允许您对数字执行数学任务。</p>
<p>Math.pow(x， y) 的返回值是 x 的 y 次幂</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 64</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Math.sqrt(x) 返回 x 的平方根</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// 返回 8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Math.round(x) 的返回值是 x 四舍五入为最接近的整数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">6.8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 返回 7</span>
Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">2.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 返回 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Math.abs(x) 返回 x 的绝对值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">4.7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 返回 4.7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Math.min() 和 Math.max() 可用于查找参数列表中的最低或最高值：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">450</span><span class="token punctuation">,</span><span class="token number">35</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">300</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">78</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 返回 -300</span>
Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">450</span><span class="token punctuation">,</span><span class="token number">35</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">300</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">78</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 返回 450</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Math.random() 返回介于 0（包括） 与 1（不包括） 之间的随机数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 返回随机数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-13-比较" tabindex="-1"><a class="header-anchor" href="#_2-13-比较" aria-hidden="true">#</a> 2.13 比较</h3>
<p>与或非</p>
<p>三元运算符</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> voteable <span class="token operator">=</span> <span class="token punctuation">(</span>age <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">"太年轻"</span><span class="token operator">:</span><span class="token string">"足够成熟"</span><span class="token punctuation">;</span>

<span class="token comment">// 如果变量 age 的值小于 18，变量 voteable 的值将是 "太年轻"，</span>
<span class="token comment">// 否则变量值将是 "足够成熟"。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第3章-流程控制" tabindex="-1"><a class="header-anchor" href="#第3章-流程控制" aria-hidden="true">#</a> 第3章 流程控制</h2>
<h3 id="_3-1-if条件" tabindex="-1"><a class="header-anchor" href="#_3-1-if条件" aria-hidden="true">#</a> 3.1 if条件</h3>
<p>使用 if 来规定要执行的代码块，如果指定条件为 true</p>
<p>使用 else 来规定要执行的代码块，如果相同的条件为 false</p>
<p>使用 else if 来规定要测试的新条件，如果第一个条件为 false</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    greeting <span class="token operator">=</span> <span class="token string">"Good morning"</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    greeting <span class="token operator">=</span> <span class="token string">"Good day"</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    greeting <span class="token operator">=</span> <span class="token string">"Good evening"</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-switch" tabindex="-1"><a class="header-anchor" href="#_3-2-switch" aria-hidden="true">#</a> 3.2 switch</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token string">"0"</span><span class="token punctuation">;</span>

<span class="token keyword">switch</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>
    text <span class="token operator">=</span> <span class="token string">"Off"</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
    text <span class="token operator">=</span> <span class="token string">"On"</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    text <span class="token operator">=</span> <span class="token string">"No value found"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-for循环" tabindex="-1"><a class="header-anchor" href="#_3-3-for循环" aria-hidden="true">#</a> 3.3 for循环</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     text <span class="token operator">=</span> <span class="token string">"数字是: "</span> <span class="token operator">+</span> i <span class="token punctuation">;</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>for/in</code> 语句遍历对象的属性</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">fname</span><span class="token operator">:</span><span class="token string">"Bill"</span><span class="token punctuation">,</span><span class="token literal-property property">lname</span><span class="token operator">:</span><span class="token string">"Gates"</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">62</span><span class="token punctuation">}</span><span class="token punctuation">;</span> 

<span class="token keyword">var</span> text <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> x<span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>x <span class="token keyword">in</span> person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    text <span class="token operator">+=</span> person<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>for in</code> 语句也可以遍历数组的属性</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">45</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">16</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> txt <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token keyword">in</span> numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  txt <span class="token operator">+=</span> numbers<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>forEach()</code> 方法为每个数组元素调用一次函数（回调函数）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">45</span>， <span class="token number">4</span>， <span class="token number">9</span>， <span class="token number">16</span>， <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> txt <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>myFunction<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span>index<span class="token punctuation">,</span>array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  txt <span class="token operator">+=</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-while循环" tabindex="-1"><a class="header-anchor" href="#_3-4-while循环" aria-hidden="true">#</a> 3.4 while循环</h3>
<p>while 循环会一直循环代码块，只要指定的条件为 true。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    text <span class="token operator">+=</span> <span class="token string">"数字是 "</span> <span class="token operator">+</span> i<span class="token punctuation">;</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>do/while 循环是 while 循环的变体。</p>
<p>在检查条件是否为真之前，这种循环会执行一次代码块，然后只要条件为真就会重复循环。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">do</span> <span class="token punctuation">{</span>
    text <span class="token operator">+=</span> <span class="token string">"The number is "</span> <span class="token operator">+</span> i<span class="token punctuation">;</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-异常" tabindex="-1"><a class="header-anchor" href="#_3-5-异常" aria-hidden="true">#</a> 3.5 异常</h3>
<p>try 语句使您能够测试代码块中的错误。</p>
<p>catch 语句允许您处理错误。</p>
<p>throw 语句允许您创建自定义错误。</p>
<p>finally 使您能够执行代码，在 try 和 catch 之后，无论结果如何。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
     供测试的代码块
<span class="token punctuation">}</span>
 <span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     处理错误的代码块
<span class="token punctuation">}</span> 
<span class="token keyword">finally</span> <span class="token punctuation">{</span>
     无论结果如何都执行的代码块
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-作用域" tabindex="-1"><a class="header-anchor" href="#_3-6-作用域" aria-hidden="true">#</a> 3.6 作用域</h3>
<p>自动全局</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 此处的代码能够使用 carName 变量</span>
<span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    carName <span class="token operator">=</span> <span class="token string">"porsche"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第4章-面向对象" tabindex="-1"><a class="header-anchor" href="#第4章-面向对象" aria-hidden="true">#</a> 第4章 面向对象</h2>
<h3 id="_4-1-类" tabindex="-1"><a class="header-anchor" href="#_4-1-类" aria-hidden="true">#</a> 4.1 类</h3>
<p>JavaScript 类不是对象。</p>
<p>它只是 JavaScript 对象的模板。</p>
<p>如需创建类继承，请使用 extends 关键字。</p>
<p>通过 super() 方法，我们调用了父级的构造方法，获得了父级的属性和方法的访问权限。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name， year</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>year <span class="token operator">=</span> year<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Model</span> <span class="token keyword">extends</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
   <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">brand， mod</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">(</span>brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token operator">=</span> mod<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">present</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'， it is a '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myCar1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">"Ford"</span>， <span class="token number">2014</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> myCar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Model</span><span class="token punctuation">(</span><span class="token string">"Ford"</span>， <span class="token string">"Mustang"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-对象" tabindex="-1"><a class="header-anchor" href="#_4-2-对象" aria-hidden="true">#</a> 4.2 对象</h3>
<p>对象是包含变量的变量</p>
<p>对象属性，对象中的命名值，被称为属性。</p>
<p>对象方法，对象方法是包含函数定义的对象属性。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">"Bill"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">"Gates"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">62</span><span class="token punctuation">,</span>
    <span class="token literal-property property">eyeColor</span><span class="token operator">:</span> <span class="token string">"blue"</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第5章-dom" tabindex="-1"><a class="header-anchor" href="#第5章-dom" aria-hidden="true">#</a> 第5章 Dom</h2>
<h3 id="_5-1-dom简介" tabindex="-1"><a class="header-anchor" href="#_5-1-dom简介" aria-hidden="true">#</a> 5.1 DOM简介</h3>
<p>通过 HTML DOM，JS 能够访问和改变 HTML 文档的所有元素。</p>
<p>对象的 HTML DOM 树</p>
<p><img src="@source/document/vue前端/asset/js教程-1636869688010.png" alt="" loading="lazy"></p>
<p>下面的例子改变了 <code v-pre>id=&quot;demo&quot;</code> 的 <code v-pre>&lt;p&gt;</code> 元素的内容</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
   document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"Hello World!"</span><span class="token punctuation">;</span>
   </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找 HTML 元素</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>document.getElementById(id)</td>
<td>通过元素 id 来查找元素</td>
</tr>
<tr>
<td>document.getElementsByTagName(name)</td>
<td>通过标签名来查找元素</td>
</tr>
<tr>
<td>document.getElementsByClassName(name)</td>
<td>通过类名来查找元素</td>
</tr>
</tbody>
</table>
<hr>
<p>改变 HTML 元素</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>element.innerHTML = new html content</td>
<td>改变元素的 inner HTML</td>
</tr>
<tr>
<td>element.attribute = new value</td>
<td>改变 HTML 元素的属性值</td>
</tr>
<tr>
<td>element.setAttribute(attribute， value)</td>
<td>改变 HTML 元素的属性值</td>
</tr>
<tr>
<td>element.style.property = new style</td>
<td>改变 HTML 元素的样式</td>
</tr>
</tbody>
</table>
<hr>
<p>添加和删除元素</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>document.createElement(element)</td>
<td>创建 HTML 元素</td>
</tr>
<tr>
<td>document.removeChild(element)</td>
<td>删除 HTML 元素</td>
</tr>
<tr>
<td>document.appendChild(element)</td>
<td>添加 HTML 元素</td>
</tr>
<tr>
<td>document.replaceChild(element)</td>
<td>替换 HTML 元素</td>
</tr>
<tr>
<td>document.write(text)</td>
<td>写入 HTML 输出流</td>
</tr>
</tbody>
</table>
<hr>
<p>添加事件处理程序</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td code="">document.getElementById(id).onclick = function()</td>
<td>向 onclick 事件添加事件处理程序</td>
</tr>
</tbody>
</table>
<hr>
<p>改变 HTML 样式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>property <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">style</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-2-dom-表单" tabindex="-1"><a class="header-anchor" href="#_5-2-dom-表单" aria-hidden="true">#</a> 5.2 DOM 表单</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string">"/action_page.php"</span> method<span class="token operator">=</span><span class="token string">"post"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"fname"</span> required<span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"submit"</span> value<span class="token operator">=</span><span class="token string">"Submit"</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-dom-css" tabindex="-1"><a class="header-anchor" href="#_5-3-dom-css" aria-hidden="true">#</a> 5.3 DOM CSS</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>html<span class="token operator">></span>
   <span class="token operator">&lt;</span>body<span class="token operator">></span>
      <span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">"p2"</span><span class="token operator">></span>Hello World<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
   <span class="token operator">&lt;</span>script<span class="token operator">></span>
   document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"p2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">"blue"</span><span class="token punctuation">;</span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>上面的段落已被脚本改变。<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-dom-事件" tabindex="-1"><a class="header-anchor" href="#_5-4-dom-事件" aria-hidden="true">#</a> 5.4 DOM 事件</h3>
<table>
<thead>
<tr>
<th>事件</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>onabort</td>
<td>图像的加载被中断</td>
</tr>
<tr>
<td>onblur</td>
<td>元素失去焦点</td>
</tr>
<tr>
<td>onchange</td>
<td>域的内容被改变</td>
</tr>
<tr>
<td>onclick</td>
<td>单击事件</td>
</tr>
<tr>
<td>ondblclick</td>
<td>双击事件</td>
</tr>
<tr>
<td>onerror</td>
<td>加载文档或图片时发生错误</td>
</tr>
<tr>
<td>onfocus</td>
<td>元素获得焦点</td>
</tr>
<tr>
<td>onkeydown</td>
<td>键盘被按下</td>
</tr>
<tr>
<td>onkeypress</td>
<td>键盘被按下松开</td>
</tr>
<tr>
<td>onkeyup</td>
<td>键盘被松开</td>
</tr>
<tr>
<td>onload</td>
<td>页面或图片完成加载</td>
</tr>
<tr>
<td>onmousedown</td>
<td>鼠标按钮被按下</td>
</tr>
<tr>
<td>onmousemove</td>
<td>鼠标被移动</td>
</tr>
<tr>
<td>onmouseout</td>
<td>鼠标移出</td>
</tr>
<tr>
<td>onmouseever</td>
<td>鼠标移入</td>
</tr>
<tr>
<td>onmouseup</td>
<td>鼠标按钮被松开</td>
</tr>
<tr>
<td>onreset</td>
<td>重置按钮被点击</td>
</tr>
<tr>
<td>onresize</td>
<td>窗口大小改变</td>
</tr>
<tr>
<td>onselect</td>
<td>文本被选中</td>
</tr>
<tr>
<td>onsubmit</td>
<td>提交按钮被点击</td>
</tr>
<tr>
<td>onunload</td>
<td>用户退出页面</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>h1 onclick<span class="token operator">=</span><span class="token string">"this.innerHTML = 'Hello!'"</span><span class="token operator">></span>点击此文本！<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-5-dom-事件监听" tabindex="-1"><a class="header-anchor" href="#_5-5-dom-事件监听" aria-hidden="true">#</a> 5.5 DOM 事件监听</h3>
<p>向元素添加事件处理程序</p>
<p>当用户点击某个元素时提示 &quot;Hello World!&quot;：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span>， <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第6章-bom" tabindex="-1"><a class="header-anchor" href="#第6章-bom" aria-hidden="true">#</a> 第6章 BOM</h2>
<h3 id="_6-1-浏览器对象模型-bom" tabindex="-1"><a class="header-anchor" href="#_6-1-浏览器对象模型-bom" aria-hidden="true">#</a> 6.1 浏览器对象模型 (BOM)</h3>
<p>所有浏览器都支持 window 对象。它代表浏览器的窗口。</p>
<p>所有全局 JavaScript 对象，函数和变量自动成为 window 对象的成员。</p>
<p>全局变量是 window 对象的属性。</p>
<p>全局函数是 window 对象的方法。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"header"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//等同于</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"header"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-bom-location" tabindex="-1"><a class="header-anchor" href="#_6-2-bom-location" aria-hidden="true">#</a> 6.2 BOM Location</h3>
<ul>
<li>window.location.href 返回当前页面的 href (URL)</li>
<li>window.location.hostname 返回 web 主机的域名</li>
<li>window.location.pathname 返回当前页面的路径或文件名</li>
<li>window.location.protocol 返回使用的 web 协议（http: 或 https:）</li>
<li>window.location.assign 加载新文档</li>
</ul>
<h3 id="_6-3-bom-screen" tabindex="-1"><a class="header-anchor" href="#_6-3-bom-screen" aria-hidden="true">#</a> 6.3 BOM Screen</h3>
<ul>
<li>screen.width  显示以像素计的屏幕宽度</li>
<li>screen.height  显示以像素计的屏幕高度</li>
<li>screen.availWidth  显示以像素计的屏幕可用宽度</li>
<li>screen.availHeight 显示以像素计的屏幕可用高度</li>
<li>screen.colorDepth  显示以位计的屏幕色彩深度</li>
<li>screen.pixelDepth  显示以位计的屏幕像素深度</li>
</ul>
<h3 id="_6-4-bom-history" tabindex="-1"><a class="header-anchor" href="#_6-4-bom-history" aria-hidden="true">#</a> 6.4 BOM History</h3>
<p>window.history 对象包含浏览器历史。</p>
<p>history.back() - 等同于在浏览器点击后退按钮</p>
<p>history.forward() - 等同于在浏览器中点击前进按钮</p>
<h3 id="_6-5-bom-navigator" tabindex="-1"><a class="header-anchor" href="#_6-5-bom-navigator" aria-hidden="true">#</a> 6.5 BOM Navigator</h3>
<p>window.navigator 对象包含有关访问者的信息。</p>
<p>navigator.appName - 属性返回浏览器的应用程序名称</p>
<p>navigator.appCodeName - 属性返回浏览器的应用程序代码名称</p>
<p>navigator.platform - 属性返回浏览器平台（操作系统）</p>
<p>navigator.product - 属性返回浏览器引擎的产品名称</p>
<h3 id="_6-6-bom-弹出框" tabindex="-1"><a class="header-anchor" href="#_6-6-bom-弹出框" aria-hidden="true">#</a> 6.6 BOM 弹出框</h3>
<p>JavaScript 有三种类型的弹出框：警告框、确认框和提示框。</p>
<p><strong>警告框</strong>
如果要确保信息传递给用户，通常会使用警告框。</p>
<p>当警告框弹出时，用户将需要单击“确定”来继续。</p>
<p><code v-pre>window.alert(&quot;sometext&quot;);</code></p>
<p><strong>确认框</strong></p>
<p>如果您希望用户验证或接受某个东西，则通常使用“确认”框。</p>
<p>当确认框弹出时，用户将不得不单击“确定”或“取消”来继续进行。</p>
<p>如果用户单击“确定”，该框返回 true。如果用户单击“取消”，该框返回 false。</p>
<p><code v-pre>window.confirm(&quot;sometext&quot;);</code></p>
<p><strong>提示框</strong></p>
<p>如果您希望用户在进入页面前输入值，通常会使用提示框。</p>
<p>当提示框弹出时，用户将不得不输入值后单击“确定”或点击“取消”来继续进行。</p>
<p>如果用户单击“确定”，该框返回输入值。如果用户单击“取消”，该框返回 NULL。</p>
<p><code v-pre>window.prompt(&quot;sometext&quot;，&quot;defaultText&quot;);</code></p>
<h3 id="_6-7-bom-timing" tabindex="-1"><a class="header-anchor" href="#_6-7-bom-timing" aria-hidden="true">#</a> 6.7 BOM Timing</h3>
<p>JavaScript 可以在时间间隔内执行。</p>
<p>这就是所谓的定时事件（ Timing Events）。</p>
<p>单击按钮。等待 3 秒，然后页面会提示 &quot;Hello&quot;</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button onclick<span class="token operator">=</span><span class="token string">"myVar = setTimeout(myFunction， 3000)"</span><span class="token operator">></span>试一试<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span>button onclick<span class="token operator">=</span><span class="token string">"clearTimeout(myVar)"</span><span class="token operator">></span>停止执行<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Hello'</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-8-bom-cookie" tabindex="-1"><a class="header-anchor" href="#_6-8-bom-cookie" aria-hidden="true">#</a> 6.8 BOM Cookie</h3>
<p>Cookie 让您在网页中存储用户信息。</p>
<p>CookieUtil 工具简化 cookie 的存储</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">var</span> CookieUtil <span class="token operator">=</span> <span class="token punctuation">{</span>

        <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> cookieName <span class="token operator">=</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'='</span><span class="token punctuation">,</span>
                cookieStart <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>cookieName<span class="token punctuation">)</span><span class="token punctuation">,</span>
                cookieValue <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>cookieStart <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">var</span> cookieEnd <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">';'</span><span class="token punctuation">,</span> cookieStart<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>cookieEnd <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    cookieEnd <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                cookieValue <span class="token operator">=</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>cookieStart <span class="token operator">+</span> cookieName<span class="token punctuation">.</span>length<span class="token punctuation">,</span> cookieEnd<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">return</span> cookieValue<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> expires<span class="token punctuation">,</span> path<span class="token punctuation">,</span> domain<span class="token punctuation">,</span> secure</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    <span class="token comment">// name和value是必须，其他参数可以不设</span>
            <span class="token keyword">var</span> cookieText <span class="token operator">=</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'='</span> <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>expires <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cookieText <span class="token operator">+=</span> <span class="token string">'; expires='</span> <span class="token operator">+</span> expires<span class="token punctuation">.</span><span class="token function">toGMTString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cookieText <span class="token operator">+=</span> <span class="token string">'; path='</span> <span class="token operator">+</span> path<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>domain<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cookieText <span class="token operator">+=</span> <span class="token string">'; domain='</span> <span class="token operator">+</span> domain<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>secure<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cookieText <span class="token operator">+=</span> <span class="token string">'; secure'</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> cookieText<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token function-variable function">unset</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> path<span class="token punctuation">,</span> domain<span class="token punctuation">,</span> secure</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    <span class="token comment">// 删除，name必须</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> path<span class="token punctuation">,</span> domain<span class="token punctuation">,</span> secure<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//新增cookie</span>
CookieUtil<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'book'</span><span class="token punctuation">,</span> <span class="token string">'Javascript'</span><span class="token punctuation">)</span>

<span class="token comment">//获取cookie</span>
CookieUtil<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'book'</span><span class="token punctuation">)</span>

<span class="token comment">//删除cookie</span>
CookieUtil<span class="token punctuation">.</span><span class="token function">unset</span><span class="token punctuation">(</span><span class="token string">'book'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-9-bom-session" tabindex="-1"><a class="header-anchor" href="#_6-9-bom-session" aria-hidden="true">#</a> 6.9 BOM Session</h3>
<p>让您在网页中存储用户信息。</p>
<p>sessionStorage</p>
<p>localStorage</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'TanXiao'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">"name"</span>， <span class="token string">"Bill Gates"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第7章-json" tabindex="-1"><a class="header-anchor" href="#第7章-json" aria-hidden="true">#</a> 第7章 Json</h2>
<h3 id="_7-1-json-简介" tabindex="-1"><a class="header-anchor" href="#_7-1-json-简介" aria-hidden="true">#</a> 7.1 Json 简介</h3>
<p>JSON: JavaScript Object Notation（JavaScript 对象标记法）。</p>
<p>JSON 是一种存储和交换数据的语法。</p>
<p>JSON 是通过 JavaScript 对象标记法书写的文本。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//存储数据：</span>
myObj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"Bill Gates"</span>，  age<span class="token operator">:</span><span class="token number">62</span>， city<span class="token operator">:</span><span class="token string">"Seattle"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
myJSON <span class="token operator">=</span>  <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>myObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">"testJSON"</span>， myJSON<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//接收数据：</span>
text <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">"testJSON"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj <span class="token operator">=</span>  <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> obj<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-json-语法" tabindex="-1"><a class="header-anchor" href="#_7-2-json-语法" aria-hidden="true">#</a> 7.2 Json 语法</h3>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code> <span class="token punctuation">{</span> <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"Bill Gates"</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-3-json-对比-xml" tabindex="-1"><a class="header-anchor" href="#_7-3-json-对比-xml" aria-hidden="true">#</a> 7.3 Json 对比 XML</h3>
<p><strong>相似点</strong> :</p>
<p>JSON 和 XML 都是“自描述的”（人类可读的）</p>
<p>JSON 和 XML 都是分级的（值中有值）</p>
<p>JSON 和 XML 都能被大量编程语言解析和使用</p>
<p>JSON 和 XML 都能被 XMLHttpRequest 读取</p>
<p><strong>不同点 :</strong></p>
<p>JSON 不使用标签</p>
<p>JSON 更短</p>
<p>JSON 的读写速度更快</p>
<p>JSON 可使用数组</p>
<p>XML 必须使用 XML 解析器进行解析</p>
<p>JSON 可通过标准的 JavaScript 函数进行解析</p>
<p>JSON 实例</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">"employees"</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token property">"firstName"</span><span class="token operator">:</span><span class="token string">"Bill"</span>， <span class="token property">"lastName"</span><span class="token operator">:</span><span class="token string">"Gates"</span> <span class="token punctuation">}</span>，
    <span class="token punctuation">{</span> <span class="token property">"firstName"</span><span class="token operator">:</span><span class="token string">"Steve"</span>， <span class="token property">"lastName"</span><span class="token operator">:</span><span class="token string">"Jobs"</span> <span class="token punctuation">}</span>，
    <span class="token punctuation">{</span> <span class="token property">"firstName"</span><span class="token operator">:</span><span class="token string">"Elon"</span>， <span class="token property">"lastName"</span><span class="token operator">:</span><span class="token string">"Musk"</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>XML 实例</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>employees</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>employee</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>firstName</span><span class="token punctuation">></span></span>Bill<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>firstName</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lastName</span><span class="token punctuation">></span></span>Gates<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lastName</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>employee</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>employee</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>firstName</span><span class="token punctuation">></span></span>Steve<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>firstName</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lastName</span><span class="token punctuation">></span></span>Jobs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lastName</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>employee</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>employee</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>firstName</span><span class="token punctuation">></span></span>Elon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>firstName</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lastName</span><span class="token punctuation">></span></span>Musk<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lastName</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>employee</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>employees</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4-json-数据类型" tabindex="-1"><a class="header-anchor" href="#_7-4-json-数据类型" aria-hidden="true">#</a> 7.4 Json 数据类型</h3>
<p>允许的类型: 字符串 数字 对象 数组 布尔 Null</p>
<p>不允许的类型: 函数 日期 undefined</p>
<p>数字
<code v-pre>{ &quot;age&quot;:30 }</code></p>
<p>字符串
<code v-pre>{ &quot;name&quot;:&quot;John&quot; }</code></p>
<p>对象
<code v-pre>{ &quot;employee&quot;:{ &quot;name&quot;:&quot;Bill Gates&quot;， &quot;age&quot;:62， &quot;city&quot;:&quot;Seattle&quot; } }</code></p>
<p>数组
<code v-pre>{ &quot;employees&quot;:[ &quot;Bill&quot;， &quot;Steve&quot;， &quot;David&quot; ] }</code></p>
<p>布尔
<code v-pre>{ &quot;sale&quot;:true }</code></p>
<p>null
<code v-pre>{ &quot;middlename&quot;:null }</code></p>
<p>7.5 Json 解析</p>
<h2 id="第8章-ajax" tabindex="-1"><a class="header-anchor" href="#第8章-ajax" aria-hidden="true">#</a> 第8章 Ajax</h2>
<h3 id="_8-1-ajax-简介" tabindex="-1"><a class="header-anchor" href="#_8-1-ajax-简介" aria-hidden="true">#</a> 8.1 Ajax 简介</h3>
<p>不刷新页面更新网页</p>
<p>在页面加载后从服务器请求数据</p>
<p>在页面加载后从服务器接收数据</p>
<p>在后台向服务器发送数据</p>
<p><img src="@source/document/vue前端/asset/js教程-1636874085321.png" alt="" loading="lazy"></p>
<p>AJAX 如何工作</p>
<p>网页中发生一个事件（页面加载、按钮点击）</p>
<p>由 JavaScript 创建 XMLHttpRequest 对象</p>
<p>XMLHttpRequest 对象向 web 服务器发送请求</p>
<p>服务器处理该请求</p>
<p>服务器将响应发送回网页</p>
<p>由 JavaScript 读取响应</p>
<p>由 JavaScript 执行正确的动作（比如更新页面)</p>
<h3 id="_8-2-xmlhttprequest对象" tabindex="-1"><a class="header-anchor" href="#_8-2-xmlhttprequest对象" aria-hidden="true">#</a> 8.2 XMLHttpRequest对象</h3>
<p>Ajax 的核心是 XMLHttpRequest 对象。</p>
<p><code v-pre>variable = new XMLHttpRequest();</code></p>
<h3 id="_8-3-ajax-请求" tabindex="-1"><a class="header-anchor" href="#_8-3-ajax-请求" aria-hidden="true">#</a> 8.3 Ajax 请求</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> xhttp<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>XMLHttpRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    xhttp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// code for IE6， IE5</span>
     xhttp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">"Microsoft.XMLHTTP"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-ajax-响应" tabindex="-1"><a class="header-anchor" href="#_8-4-ajax-响应" aria-hidden="true">#</a> 8.4 Ajax 响应</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">loadDoc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> xhttp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    xhttp<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>responseText<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    xhttp<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"GET"</span>， <span class="token string">"ajax_info.txt"</span>， <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    xhttp<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第9章-jquery" tabindex="-1"><a class="header-anchor" href="#第9章-jquery" aria-hidden="true">#</a> 第9章 JQuery</h2>
<h3 id="_9-1-简介" tabindex="-1"><a class="header-anchor" href="#_9-1-简介" aria-hidden="true">#</a> 9.1 简介</h3>
<p>jQuery 是一个 JavaScript 函数库。</p>
<p>jQuery 是一个轻量级的&quot;写的少，做的多&quot;的 JavaScript 库。</p>
<p>jQuery 库包含以下功能：</p>
<ul>
<li>HTML 元素选取</li>
<li>HTML 元素操作</li>
<li>CSS 操作</li>
<li>HTML 事件函数</li>
<li>JavaScript 特效和动画</li>
<li>HTML DOM 遍历和修改</li>
<li>AJAX</li>
<li>Utilities</li>
</ul>
<p><strong>jQuery 安装</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cnpm <span class="token function">install</span> jquery 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>jQuery 引入</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code># 普通项目
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>node_modules/jquery/dist/jquery.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

# vue项目
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>$</code> 符号的由来</strong></p>
<p>jQuery.js 就是一个自执行函数</p>
<p>给 <code v-pre>window</code> 添加了两个变量</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>jQuery <span class="token operator">=</span> window<span class="token punctuation">.</span>$ <span class="token operator">=</span> jQuery 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>jquery 对象</strong></p>
<p>jquery对象 就是用 jquery选择器获取到的对象</p>
<p>JS的dom对象不能调用jquery对象的方法，同理 jquery对象也不能调用 dom对象的方法</p>
<p>jquery对象是一个伪数组，jquery对象就是dom对象的一个包装集</p>
<p><strong>jquery 对象和 dom对象的转化</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//dom 2 jquery</span>
<span class="token keyword">var</span> div1 <span class="token operator">=</span> ducument<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"one"</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> $div1 <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>div1<span class="token punctuation">)</span>

<span class="token comment">// jquery 2 dom</span>
<span class="token keyword">var</span> $divs <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> div1 <span class="token operator">=</span> $divs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> 
<span class="token keyword">var</span> div1 <span class="token operator">=</span> $divs<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-jquery事件" tabindex="-1"><a class="header-anchor" href="#_9-2-jquery事件" aria-hidden="true">#</a> 9.2 Jquery事件</h3>
<p><strong>js所有事件</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">鼠标事件</th>
<th style="text-align:left">键盘事件</th>
<th style="text-align:left">表单事件</th>
<th style="text-align:left">文档/窗口事件</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/jquery/event-click.html" target="_blank" rel="noopener noreferrer">click<ExternalLinkIcon/></a></td>
<td style="text-align:left"><a href="https://www.runoob.com/jquery/event-keypress.html" target="_blank" rel="noopener noreferrer">keypress<ExternalLinkIcon/></a></td>
<td style="text-align:left"><a href="https://www.runoob.com/jquery/event-submit.html" target="_blank" rel="noopener noreferrer">submit<ExternalLinkIcon/></a></td>
<td style="text-align:left"><a href="https://www.runoob.com/jquery/event-load.html" target="_blank" rel="noopener noreferrer">load<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/jquery/event-dblclick.html" target="_blank" rel="noopener noreferrer">dblclick<ExternalLinkIcon/></a></td>
<td style="text-align:left"><a href="https://www.runoob.com/jquery/event-keydown.html" target="_blank" rel="noopener noreferrer">keydown<ExternalLinkIcon/></a></td>
<td style="text-align:left"><a href="https://www.runoob.com/jquery/event-change.html" target="_blank" rel="noopener noreferrer">change<ExternalLinkIcon/></a></td>
<td style="text-align:left"><a href="https://www.runoob.com/jquery/event-resize.html" target="_blank" rel="noopener noreferrer">resize<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/jquery/event-mouseenter.html" target="_blank" rel="noopener noreferrer">mouseenter<ExternalLinkIcon/></a></td>
<td style="text-align:left"><a href="https://www.runoob.com/jquery/event-keyup.html" target="_blank" rel="noopener noreferrer">keyup<ExternalLinkIcon/></a></td>
<td style="text-align:left"><a href="https://www.runoob.com/jquery/event-focus.html" target="_blank" rel="noopener noreferrer">focus<ExternalLinkIcon/></a></td>
<td style="text-align:left"><a href="https://www.runoob.com/jquery/event-scroll.html" target="_blank" rel="noopener noreferrer">scroll<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/jquery/event-mouseleave.html" target="_blank" rel="noopener noreferrer">mouseleave<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"><a href="https://www.runoob.com/jquery/event-blur.html" target="_blank" rel="noopener noreferrer">blur<ExternalLinkIcon/></a></td>
<td style="text-align:left"><a href="https://www.runoob.com/jquery/event-unload.html" target="_blank" rel="noopener noreferrer">unload<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/jquery/event-hover.html" target="_blank" rel="noopener noreferrer">hover<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p><strong>注册事件</strong></p>
<p>on注册简单事件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 表示给$(selector)绑定事件，并且由自己触发，不支持动态绑定。</span>
    <span class="token function">$</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span> <span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>on注册委托事件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 表示给$(selector)绑定代理事件，当必须是它的内部元素span才能触发这个事件，支持动态绑定</span>
    <span class="token function">$</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span> <span class="token string">"click"</span><span class="token punctuation">,</span><span class="token string">'span'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>on注册事件的语法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 第一个参数：events，绑定事件的名称可以是由空格分隔的多个事件（标准事件或者自定义事件）</span>
    <span class="token comment">// 第二个参数：selector, 执行事件的后代元素（可选），如果没有后代元素，那么事件将有自己执行。</span>
    <span class="token comment">// 第三个参数：data，传递给处理函数的数据，事件触发的时候通过event.data来使用（不常使用）</span>
    <span class="token comment">// 第四个参数：handler，事件处理函数</span>
    <span class="token function">$</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>events<span class="token punctuation">,</span><span class="token punctuation">[</span>selector<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span>data<span class="token punctuation">]</span><span class="token punctuation">,</span>handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>事件解绑</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 解绑匹配元素的所有事件</span>
    <span class="token function">$</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 解绑匹配元素的所有click事件</span>
    <span class="token function">$</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>触发事件</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token function">$</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//触发 click事件</span>
    <span class="token function">$</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-3-jquery-选择器" tabindex="-1"><a class="header-anchor" href="#_9-3-jquery-选择器" aria-hidden="true">#</a> 9.3 jquery 选择器</h3>
<p>jquery 基本选择器</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>用法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>ID选择器</td>
<td>$(&quot;#id&quot;)</td>
<td>获取指定ID的元素</td>
</tr>
<tr>
<td>类选择器</td>
<td>$(&quot;.class&quot;)</td>
<td>获取同一类class的元素</td>
</tr>
<tr>
<td>标签选择器</td>
<td>$(&quot;div&quot;)</td>
<td>获取同一类标签的所有元素</td>
</tr>
<tr>
<td>并集选择器</td>
<td>$(&quot;div,p,li&quot;)</td>
<td>使用逗号分隔,符合条件之一即可</td>
</tr>
<tr>
<td>交集选择器</td>
<td>$(&quot;div.red&quot;)</td>
<td>获取class为red的div元素</td>
</tr>
</tbody>
</table>
<p>层级选择器</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>用法</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>子代选择器</td>
<td>$(“ul&gt;li”);</td>
<td style="text-align:left">使用&gt;号，获取儿子层级的元素，注意，并不会获取孙子层级的元素</td>
</tr>
<tr>
<td>后代选择器</td>
<td>$(“ul li”);</td>
<td style="text-align:left">使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等</td>
</tr>
</tbody>
</table>
<p>过滤选择器</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>用法</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>:eq（index）</td>
<td>$(“li:eq(2)”).css(“color”, ”red”);</td>
<td style="text-align:left">获取到的li元素中，选择索引号为2的元素，索引号index从0开始。</td>
</tr>
<tr>
<td>:odd</td>
<td>$(“li:odd”).css(“color”, ”red”);</td>
<td style="text-align:left">获取到的li元素中，选择索引号为奇数的元素</td>
</tr>
<tr>
<td>:even</td>
<td>$(“li:even”).css(“color”, ”red”);</td>
<td style="text-align:left">获取到的li元素中，选择索引号为偶数的元素</td>
</tr>
</tbody>
</table>
<p>筛选选择器(方法)</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>用法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>children(selector)</td>
<td>$(“ul”).children(“li”)</td>
<td>相当于$(“ul&gt;li”)，子类选择器</td>
</tr>
<tr>
<td>find(selector)</td>
<td>$(“ul”).find(“li”);</td>
<td>相当于$(“ul li”),后代选择器</td>
</tr>
<tr>
<td>siblings(selector)</td>
<td>$(“#first”).siblings(“li”);</td>
<td>查找兄弟节点，不包括自己本身。</td>
</tr>
<tr>
<td>parent()</td>
<td>$(“#first”).parent();</td>
<td>查找父亲</td>
</tr>
<tr>
<td>eq(index)</td>
<td>$(“li”).eq(2);</td>
<td>相当于$(“li:eq(2)”),index从0开始</td>
</tr>
<tr>
<td>next()</td>
<td>$(“li”).next()</td>
<td>找下一个兄弟</td>
</tr>
<tr>
<td>prev()</td>
<td>$(“li”).prev()</td>
<td>找上一次兄弟</td>
</tr>
</tbody>
</table>
<p>html 相关操作</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//获取被选元素的文本</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//覆盖被选元素的文本</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">"设置文本"</span><span class="token punctuation">)</span>

<span class="token comment">//在被选元素的结尾插入内容（仍然在该元素的内部）</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"追加文本"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//在被选元素的开头插入内容（仍然在该元素的内部）</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prepend</span><span class="token punctuation">(</span><span class="token string">"在开头追加文本"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//在被选元素之后插入内容（在该元素的外部）</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"img"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span><span class="token string">"在后面添加文本"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">//在被选元素之前插入内容（在该元素的外部）</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"img"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">before</span><span class="token punctuation">(</span><span class="token string">"在前面添加文本"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//删除被选元素及其子元素。</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#div1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//删除被选元素的子元素。</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#div1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//删除 class="italic" 的所有 &lt;p> 元素</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">".italic"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>css相关操作</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//移除class</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"h1,h2,p"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeClass</span><span class="token punctuation">(</span><span class="token string">"blue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//添加class</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"h1,h2,p"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">"blue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">"important"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//返回 style 属性</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"background-color"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//设置 style 属性</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">"background-color"</span><span class="token operator">:</span><span class="token string">"yellow"</span><span class="token punctuation">,</span><span class="token string-property property">"font-size"</span><span class="token operator">:</span><span class="token string">"200%"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//设置宽高</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#div1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token string">"200px"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属性设置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">/*1.获取属性*/</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*2.设置属性*/</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span><span class="token string">'tom'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*3.设置多个属性*/</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string-property property">'name'</span><span class="token operator">:</span><span class="token string">'tom'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'age'</span><span class="token operator">:</span><span class="token string">'18'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*4.删除属性*/</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeAttr</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>prop方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">/*对于布尔类型的属性，不要attr方法，应该用prop方法 prop用法跟attr方法一样。*/</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#checkbox"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">"checked"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#checkbox"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">"checked"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#checkbox"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">"checked"</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#checkbox"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeProp</span><span class="token punctuation">(</span><span class="token string">"checked"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-4-jquery-ajax" tabindex="-1"><a class="header-anchor" href="#_9-4-jquery-ajax" aria-hidden="true">#</a> 9.4 jquery ajax</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// get方法</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  $<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"demo_test.php"</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span>status</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"数据: "</span> <span class="token operator">+</span> data <span class="token operator">+</span> <span class="token string">"\n状态: "</span> <span class="token operator">+</span> status<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// post方法</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    $<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"/try/ajax/demo_test_post.php"</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"菜鸟教程"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">"http://www.runoob.com"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span>status</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"数据: \n"</span> <span class="token operator">+</span> data <span class="token operator">+</span> <span class="token string">"\n状态: "</span> <span class="token operator">+</span> status<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-5-动画" tabindex="-1"><a class="header-anchor" href="#_9-5-动画" aria-hidden="true">#</a> 9.5 动画</h3>
<p>基本动画</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">/*注意：动画的本质是改变容器的大小和透明度*/</span>
    <span class="token comment">/*注意：如果不传参数是看不到动画*/</span>
    <span class="token comment">/*注意：可传入特殊的字符  fast normal slow*/</span>
    <span class="token comment">/*注意：可传入数字 单位毫秒*/</span>
    <span class="token comment">/*1.展示动画*/</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*2.隐藏动画*/</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*3.切换展示和隐藏*/</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>滑入滑出</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">/*注意：动画的本质是改变容器的高度*/</span>
    <span class="token comment">/*1.滑入动画*/</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slideDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*2.滑出动画*/</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slideUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*3.切换滑入滑出*/</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slideToggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>淡入淡出</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">/*注意：动画的本质是改变容器的透明度*/</span>
    <span class="token comment">/*1.淡入动画*/</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fadeIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*2.淡出动画*/</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fadeOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*3.切换淡入淡出*/</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fadeToggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fadeTo</span><span class="token punctuation">(</span><span class="token string">'speed'</span><span class="token punctuation">,</span><span class="token string">'opacity'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义动画</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">/*
    * 自定义动画
    * 参数1：需要做动画的属性
    * 参数2：需要执行动画的总时长
    * 参数3：执行动画的时候的速度
    * 参数4：执行动画完成之后的回调函数
    * */</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#box1'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">left</span><span class="token operator">:</span><span class="token number">800</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#box2'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">left</span><span class="token operator">:</span><span class="token number">800</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">5000</span><span class="token punctuation">,</span><span class="token string">'linear'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#box3'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">left</span><span class="token operator">:</span><span class="token number">800</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">5000</span><span class="token punctuation">,</span><span class="token string">'swing'</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'动画执行完成'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动画队列</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">/*
    jQuery中有个动画队列的机制。
    当我们对一个对象添加多次动画效果时后添加的动作就会被放入这个动画队列中，  
    等前面的动画完成后再开始执行。
    可是用户的操作往往都比动画快，  
    如果用户对一个对象频繁操作时不处理动画队列就会造成队列堆积，
    影响到效果。
    */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>stop使用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">/*1.停止当前动画  如果动画队列当中还有动画立即执行*/</span>
    <span class="token comment">//$('div').stop();</span>
    <span class="token comment">/*2.和stop()效果一致  说明这是默认设置*/</span>
    <span class="token comment">//$('div').stop(false,false);</span>
    <span class="token comment">/*3.停止当前动画  清除动画队列*/</span>
    <span class="token comment">//$('div').stop(true,false);</span>
    <span class="token comment">/*4.停止当前动画并且到结束位置  清除了动画队列*/</span>
    <span class="token comment">//$('div').stop(true,true);</span>
    <span class="token comment">/*5.停止当前动画并且到结束位置  如果动画队列当中还有动画立即执行*/</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-6-节点操作" tabindex="-1"><a class="header-anchor" href="#_9-6-节点操作" aria-hidden="true">#</a> 9.6 节点操作</h3>
<p>创建节点</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">/*创建节点*/</span>
    <span class="token keyword">var</span> $a <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'&lt;a href="http://www.baidu.com" target="_blank">百度1&lt;/a>'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>克隆节点</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">/*如果想克隆事件  false  true克隆事件*/</span>
    <span class="token keyword">var</span> $cloneP <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>添加&amp;移动节点</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">/*追加自身的最后面  传对象和html格式代码*/</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#box'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'&lt;a href="http://www.baidu.com" target="_blank">&lt;b>百度3&lt;/b>&lt;/a>'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#box'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*追加到目标元素最后面  传目标元素的选择器或者对象*/</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'&lt;a href="http://www.baidu.com" target="_blank">&lt;b>百度3&lt;/b>&lt;/a>'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendTo</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#box'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendTo</span><span class="token punctuation">(</span><span class="token string">'#box'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token function">prepend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">prependTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">after</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">before</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除节点&amp;清空节点</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">/*1.清空box里面的元素*/</span>
    <span class="token comment">/* 清理门户 */</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#box'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*2.删除某个元素*/</span>
    <span class="token comment">/* 自杀 */</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#box'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-7-高级特性" tabindex="-1"><a class="header-anchor" href="#_9-7-高级特性" aria-hidden="true">#</a> 9.7 高级特性</h3>
<p>链式编程</p>
<p>隐式迭代</p>
<p>多库共存</p>
<h3 id="_9-8-jquery插件" tabindex="-1"><a class="header-anchor" href="#_9-8-jquery插件" aria-hidden="true">#</a> 9.8 jquery插件</h3>
<p>操作cookie 插件</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>引入依赖
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.staticfile.org/jquery/3.4.0/jquery.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.staticfile.org/jquery-cookie/1.4.1/jquery.cookie.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 读取 cookie</span>
$<span class="token punctuation">.</span><span class="token function">cookie</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     

<span class="token comment">//创建</span>
$<span class="token punctuation">.</span><span class="token function">cookie</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'value'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//删除</span>
$<span class="token punctuation">.</span><span class="token function">removeCookie</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span>

<span class="token comment">//创建 cookie，并设置 7 天后过期：</span>
$<span class="token punctuation">.</span><span class="token function">cookie</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'value'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">expires</span><span class="token operator">:</span> <span class="token number">7</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//创建 cookie，并设置 cookie 的有效路径，路径为网站的根目录</span>
$<span class="token punctuation">.</span><span class="token function">cookie</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'value'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//删除cookie,带路径的</span>
$<span class="token punctuation">.</span><span class="token function">removeCookie</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>懒加载插件</p>
<p>jquery.lazyload.js</p>
<p>ui 插件</p>
<p>jquery.ui.js插件</p>
<h2 id="第10章-高级用法" tabindex="-1"><a class="header-anchor" href="#第10章-高级用法" aria-hidden="true">#</a> 第10章 高级用法</h2>
<h3 id="_10-1-高阶函数" tabindex="-1"><a class="header-anchor" href="#_10-1-高阶函数" aria-hidden="true">#</a> 10.1 高阶函数</h3>
<ul>
<li>介绍</li>
</ul>
<p>一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。</p>
<ul>
<li>map</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> newnums <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">300</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> new2num <span class="token operator">=</span> newnums<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">v<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> v <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>new2num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[ 200, 400, 600 ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>filter</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> newnums <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">v <span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> n <span class="token operator">>=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newnums<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[ 100, 200, 300 ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>reduce</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> newnums <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">600</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> total <span class="token operator">=</span> new2num<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">preValue<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> preValue <span class="token operator">+</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1200</span>

<span class="token comment">// 第一次:preValue 0 n 200</span>
<span class="token comment">// 第二次:preValue 200 n 400</span>
<span class="token comment">// 第三次:preValue 600 n 600</span>
<span class="token comment">// 1200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>链式调用和箭头语法</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>total <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">n</span> <span class="token operator">=></span> n <span class="token operator">>=</span> <span class="token number">100</span><span class="token punctuation">)</span>
    	<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">n</span> <span class="token operator">=></span> n <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
    	<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span>n</span><span class="token punctuation">)</span> <span class="token operator">=></span> pre <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-2-闭包" tabindex="-1"><a class="header-anchor" href="#_10-2-闭包" aria-hidden="true">#</a> 10.2 闭包</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> add <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> counter <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-改变this" tabindex="-1"><a class="header-anchor" href="#_10-3-改变this" aria-hidden="true">#</a> 10.3 改变this</h3>
<p>.call</p>
<p>.bind</p>
</div></template>
