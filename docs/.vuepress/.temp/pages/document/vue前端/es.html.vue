<template><div><h2 id="第1章-es6语法" tabindex="-1"><a class="header-anchor" href="#第1章-es6语法" aria-hidden="true">#</a> 第1章 ES6语法</h2>
<h3 id="_1-1-类" tabindex="-1"><a class="header-anchor" href="#_1-1-类" aria-hidden="true">#</a> 1.1 类</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>class Person {
//增加类的概念
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-模块化" tabindex="-1"><a class="header-anchor" href="#_1-2-模块化" aria-hidden="true">#</a> 1.2 模块化</h3>
<h3 id="_1-3-箭头函数" tabindex="-1"><a class="header-anchor" href="#_1-3-箭头函数" aria-hidden="true">#</a> 1.3 箭头函数</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-函数参数默认值" tabindex="-1"><a class="header-anchor" href="#_1-4-函数参数默认值" aria-hidden="true">#</a> 1.4 函数参数默认值</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//如果传了age则用传入的参数, 如果传则默认为25</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">age <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">,</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-模板字符串" tabindex="-1"><a class="header-anchor" href="#_1-5-模板字符串" aria-hidden="true">#</a> 1.5 模板字符串</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'小豪'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Your name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-解构赋值" tabindex="-1"><a class="header-anchor" href="#_1-6-解构赋值" aria-hidden="true">#</a> 1.6 解构赋值</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>data<span class="token punctuation">}</span> <span class="token operator">=</span> obj
等于下面的写法
<span class="token keyword">const</span> a <span class="token operator">=</span> obj<span class="token punctuation">.</span>data


<span class="token comment">//多重结构</span>

<span class="token comment">//多重结构重命名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-7-延展操作符" tabindex="-1"><a class="header-anchor" href="#_1-7-延展操作符" aria-hidden="true">#</a> 1.7 延展操作符</h3>
<h3 id="_1-8-对象属性简写" tabindex="-1"><a class="header-anchor" href="#_1-8-对象属性简写" aria-hidden="true">#</a> 1.8 对象属性简写</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">router</span><span class="token operator">:</span>router
可以简写为 router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-9-promise" tabindex="-1"><a class="header-anchor" href="#_1-9-promise" aria-hidden="true">#</a> 1.9 Promise</h3>
<h3 id="_1-10-let与const" tabindex="-1"><a class="header-anchor" href="#_1-10-let与const" aria-hidden="true">#</a> 1.10 Let与Const</h3>
<p>使用let或const定义的变量具有块级作用域域性质,在同一个代码块中不允许重复声明</p>
<h3 id="_1-11-字符串或数组方法" tabindex="-1"><a class="header-anchor" href="#_1-11-字符串或数组方法" aria-hidden="true">#</a> 1.11 字符串或数组方法</h3>
<p>map filter reduce</p>
<h2 id="第2章-es7语法" tabindex="-1"><a class="header-anchor" href="#第2章-es7语法" aria-hidden="true">#</a> 第2章 ES7语法</h2>
<h3 id="_2-1-includes" tabindex="-1"><a class="header-anchor" href="#_2-1-includes" aria-hidden="true">#</a> 2.1  includes</h3>
<h3 id="_2-2-指数操作符" tabindex="-1"><a class="header-anchor" href="#_2-2-指数操作符" aria-hidden="true">#</a> 2.2 指数操作符</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token number">2</span><span class="token operator">**</span><span class="token number">10</span><span class="token punctuation">;</span>   <span class="token comment">// 2的10次方等于1024</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="第3章-es8语法" tabindex="-1"><a class="header-anchor" href="#第3章-es8语法" aria-hidden="true">#</a> 第3章 ES8语法</h2>
<h3 id="_3-1-async-await" tabindex="-1"><a class="header-anchor" href="#_3-1-async-await" aria-hidden="true">#</a> 3.1 async await</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//异步终极解决方案</span>
<span class="token keyword">async</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">apiGetTableData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// await 异步任务</span>
    <span class="token comment">// do something    </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.2 Object.values</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// [1, 2, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.3 Object.entries</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// [["a", 1], ["b", 2], ["c", 3]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.4 String.padding</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 右对齐</span>
<span class="token string">'hello'</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "     hello"</span>
<span class="token comment">// 左对齐</span>
<span class="token string">'hello'</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>    <span class="token comment">//"hello     "</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第4章-es9语法" tabindex="-1"><a class="header-anchor" href="#第4章-es9语法" aria-hidden="true">#</a> 第4章 ES9语法</h2>
<h2 id="第5章-es10语法" tabindex="-1"><a class="header-anchor" href="#第5章-es10语法" aria-hidden="true">#</a> 第5章 ES10语法</h2>
<h2 id="第6章-es11语法" tabindex="-1"><a class="header-anchor" href="#第6章-es11语法" aria-hidden="true">#</a> 第6章 ES11语法</h2>
<h2 id="第7章-es12语法" tabindex="-1"><a class="header-anchor" href="#第7章-es12语法" aria-hidden="true">#</a> 第7章 ES12语法</h2>
<hr>
<p>连续解构赋值+重命名</p>
<p>三元表达式连写</p>
</div></template>
