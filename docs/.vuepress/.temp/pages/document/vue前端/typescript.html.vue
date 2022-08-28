<template><div><h2 id="第1章-ts-基础" tabindex="-1"><a class="header-anchor" href="#第1章-ts-基础" aria-hidden="true">#</a> 第1章 ts 基础</h2>
<h3 id="_1-1-ts安装" tabindex="-1"><a class="header-anchor" href="#_1-1-ts安装" aria-hidden="true">#</a> 1.1 ts安装</h3>
<p>npm安装</p>
<p><code v-pre>sudo npm install -g typescript</code></p>
<p>查看版本</p>
<p><code v-pre>$ tsc -v</code></p>
<h2 id="第2章-语法" tabindex="-1"><a class="header-anchor" href="#第2章-语法" aria-hidden="true">#</a> 第2章 语法</h2>
<h3 id="_2-1-基础类型" tabindex="-1"><a class="header-anchor" href="#_2-1-基础类型" aria-hidden="true">#</a> 2.1 基础类型</h3>
<table>
<thead>
<tr>
<th>数据类型</th>
<th>关键字</th>
</tr>
</thead>
<tbody>
<tr>
<td>数字类型</td>
<td>number</td>
</tr>
<tr>
<td>字符串类型</td>
<td>string</td>
</tr>
<tr>
<td>布尔类型</td>
<td>boolean</td>
</tr>
<tr>
<td>枚举</td>
<td>enum</td>
</tr>
<tr>
<td>void</td>
<td>void</td>
</tr>
<tr>
<td>null</td>
<td>null</td>
</tr>
<tr>
<td>undefined</td>
<td>undefined</td>
</tr>
<tr>
<td>never</td>
<td>never</td>
</tr>
</tbody>
</table>
<p>联合类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">var</span> val<span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span> 
val <span class="token operator">=</span> <span class="token number">12</span> 
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"数字为 "</span><span class="token operator">+</span> val<span class="token punctuation">)</span> 
val <span class="token operator">=</span> <span class="token string">"Runoob"</span> 
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"字符串为 "</span> <span class="token operator">+</span> val<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-变量声明" tabindex="-1"><a class="header-anchor" href="#_2-2-变量声明" aria-hidden="true">#</a> 2.2 变量声明</h3>
<p><code v-pre>var uname:string = &quot;Runoob&quot;;</code></p>
<p>类型推断</p>
<p>当类型没有给出时，TypeScript 编译器利用类型推断来推断类型。</p>
<p>如果由于缺乏声明而不能推断出类型，那么它的类型被视作默认的动态 any 类型。</p>
<p>变量作用域</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> global_num <span class="token operator">=</span> <span class="token number">12</span>          <span class="token comment">// 全局变量</span>
<span class="token keyword">class</span> <span class="token class-name">Numbers</span> <span class="token punctuation">{</span> 
   num_val <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">;</span>             <span class="token comment">// 实例变量</span>
   <span class="token keyword">static</span> sval <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>         <span class="token comment">// 静态变量</span>
   
   <span class="token function">storeNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span> 
      <span class="token keyword">var</span> local_num <span class="token operator">=</span> <span class="token number">14</span><span class="token punctuation">;</span>    <span class="token comment">// 局部变量</span>
   <span class="token punctuation">}</span> 
<span class="token punctuation">}</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"全局变量为: "</span><span class="token operator">+</span>global_num<span class="token punctuation">)</span>  
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Numbers<span class="token punctuation">.</span>sval<span class="token punctuation">)</span>   <span class="token comment">// 静态变量</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Numbers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"实例变量: "</span><span class="token operator">+</span>obj<span class="token punctuation">.</span>num_val<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-函数" tabindex="-1"><a class="header-anchor" href="#_2-3-函数" aria-hidden="true">#</a> 2.3 函数</h3>
<p>函数返回值限定</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span> <span class="token punctuation">{</span> <span class="token comment">// 返回字符串</span>
    <span class="token keyword">return</span> <span class="token string">"Hello World"</span> 
<span class="token punctuation">}</span>
<span class="token comment">// 调用函数</span>
<span class="token function">caller</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数参数 类型限定</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">var</span> <span class="token function-variable function">res</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> a<span class="token operator">*</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">res</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匿名函数自调用</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token string">"Hello!!"</span><span class="token punctuation">;</span>   
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>     
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递归函数</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">number</span> <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>         <span class="token comment">// 停止执行</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>     
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token builtin">number</span> <span class="token operator">*</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token builtin">number</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 调用自身</span>
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span><span class="token punctuation">;</span> 
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// 输出 720</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>箭头函数</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token number">10</span> <span class="token operator">+</span> x<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment">//输出结果为 110</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>函数重载</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">disp</span><span class="token punctuation">(</span>s1<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">disp</span><span class="token punctuation">(</span>n1<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>s1<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">disp</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">,</span>y<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">disp</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span>
<span class="token function">disp</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">"xyz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-数组" tabindex="-1"><a class="header-anchor" href="#_2-4-数组" aria-hidden="true">#</a> 2.4 数组</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">var</span> sites<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
sites <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Google"</span><span class="token punctuation">,</span><span class="token string">"Runoob"</span><span class="token punctuation">,</span><span class="token string">"Taobao"</span><span class="token punctuation">]</span>

<span class="token keyword">var</span> sites<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
sites <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第3章-面向对象" tabindex="-1"><a class="header-anchor" href="#第3章-面向对象" aria-hidden="true">#</a> 第3章 面向对象</h2>
<h3 id="_3-1-接口" tabindex="-1"><a class="header-anchor" href="#_3-1-接口" aria-hidden="true">#</a> 3.1 接口</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span> 
   age<span class="token operator">:</span><span class="token builtin">number</span> 
<span class="token punctuation">}</span> 
 
<span class="token keyword">interface</span> <span class="token class-name">Musician</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span> 
   instrument<span class="token operator">:</span><span class="token builtin">string</span> 
<span class="token punctuation">}</span> 
 
<span class="token keyword">var</span> drummer <span class="token operator">=</span> <span class="token operator">&lt;</span>Musician<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> 
drummer<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">27</span> 
drummer<span class="token punctuation">.</span>instrument <span class="token operator">=</span> <span class="token string">"Drums"</span> 
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"年龄:  "</span><span class="token operator">+</span>drummer<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"喜欢的乐器:  "</span><span class="token operator">+</span>drummer<span class="token punctuation">.</span>instrument<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-类" tabindex="-1"><a class="header-anchor" href="#_3-2-类" aria-hidden="true">#</a> 3.2 类</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
    <span class="token comment">// 字段 </span>
    engine<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token comment">// 构造函数 </span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>engine<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>engine <span class="token operator">=</span> engine
    <span class="token punctuation">}</span>

    <span class="token comment">// 方法 </span>
    <span class="token function">disp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"发动机为 :   "</span><span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>engine<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-对象" tabindex="-1"><a class="header-anchor" href="#_3-3-对象" aria-hidden="true">#</a> 3.3 对象</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">var</span> sites <span class="token operator">=</span> <span class="token punctuation">{</span> 
   site1<span class="token operator">:</span><span class="token string">"Runoob"</span><span class="token punctuation">,</span> 
   site2<span class="token operator">:</span><span class="token string">"Google"</span> 
<span class="token punctuation">}</span><span class="token punctuation">;</span> 
<span class="token comment">// 访问对象的值</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sites<span class="token punctuation">.</span>site1<span class="token punctuation">)</span> 
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sites<span class="token punctuation">.</span>site2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-命名空间" tabindex="-1"><a class="header-anchor" href="#_3-4-命名空间" aria-hidden="true">#</a> 3.4 命名空间</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">namespace</span> SomeNameSpaceName <span class="token punctuation">{</span> 
   <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ISomeInterfaceName</span> <span class="token punctuation">{</span>      <span class="token punctuation">}</span>  
   <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">SomeClassName</span> <span class="token punctuation">{</span>      <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-模块" tabindex="-1"><a class="header-anchor" href="#_3-5-模块" aria-hidden="true">#</a> 3.5 模块</h3>
<p>IShape.ts 文件代码：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IShape</span> <span class="token punctuation">{</span> 
   <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Circle.ts 文件代码：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> shape <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">"./IShape"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">implements</span> <span class="token class-name">shape</span><span class="token punctuation">.</span>IShape <span class="token punctuation">{</span> 
   <span class="token keyword">public</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Cirlce is drawn (external module)"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
   <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Triangle.ts 文件代码：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> shape <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">"./IShape"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Triangle</span> <span class="token keyword">implements</span> <span class="token class-name">shape</span><span class="token punctuation">.</span>IShape <span class="token punctuation">{</span> 
   <span class="token keyword">public</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Triangle is drawn (external module)"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
   <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TestShape.ts 文件代码：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> shape <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">"./IShape"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">import</span> circle <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">"./Circle"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">import</span> triangle <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">"./Triangle"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
 
<span class="token keyword">function</span> <span class="token function">drawAllShapes</span><span class="token punctuation">(</span>shapeToDraw<span class="token operator">:</span> shape<span class="token punctuation">.</span>IShape<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   shapeToDraw<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 
 
<span class="token function">drawAllShapes</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">circle</span><span class="token punctuation">.</span><span class="token function">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token function">drawAllShapes</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">triangle</span><span class="token punctuation">.</span><span class="token function">Triangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-声明文件" tabindex="-1"><a class="header-anchor" href="#_3-6-声明文件" aria-hidden="true">#</a> 3.6 声明文件</h3>
<p>在开发过程中不可避免要引用其他第三方的 JavaScript 的库。
虽然通过直接引用可以调用库的类和方法，但是却无法使用TypeScript 诸如类型检查等特性功能。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">var</span> <span class="token function-variable function">jQuery</span><span class="token operator">:</span> <span class="token punctuation">(</span>selector<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">any</span><span class="token punctuation">;</span>

<span class="token function">jQuery</span><span class="token punctuation">(</span><span class="token string">'#foo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
