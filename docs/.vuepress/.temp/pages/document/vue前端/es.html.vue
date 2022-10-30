<template><div><h2 id="第1章-es6语法" tabindex="-1"><a class="header-anchor" href="#第1章-es6语法" aria-hidden="true">#</a> 第1章 ES6语法</h2>
<h3 id="_1-1-class-类" tabindex="-1"><a class="header-anchor" href="#_1-1-class-类" aria-hidden="true">#</a> 1.1 class 类</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//增加类的概念</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  
  <span class="token comment">//构造器</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">brand<span class="token punctuation">,</span> price</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>brand <span class="token operator">=</span> brand
    <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price
    
  <span class="token punctuation">}</span>
  
  <span class="token comment">//静态变量 只属于该类 该类的实例上没有该属性</span>
  <span class="token keyword">static</span> name <span class="token operator">=</span> <span class="token string">"手机"</span>
  
  <span class="token comment">//成员方法</span>
  <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"call"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">//get和set方法</span>
  <span class="token keyword">get</span> <span class="token function">price</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"价格"</span>
  <span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>继承类</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">brand<span class="token punctuation">,</span>age<span class="token punctuation">,</span>name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//如果使用了继承 必须在构造器里调用super</span>
        <span class="token comment">//super关键字必须在构造器的最前面</span>
      
        <span class="token keyword">super</span><span class="token punctuation">(</span>brand<span class="token punctuation">,</span>age<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
    
      <span class="token comment">//类中定义的方法都是放在类的原型对象上,供实例调用</span>
        <span class="token comment">//如果该类中没有方法则顺着原型链向上找, 找到顶层还没有则报错</span>
    <span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我很爱学习"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-模块化" tabindex="-1"><a class="header-anchor" href="#_1-2-模块化" aria-hidden="true">#</a> 1.2 模块化</h3>
<p>好处: 防止命名冲突 代码复用 高维护性</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 第一种暴露方式</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span> 
<span class="token keyword">export</span> <span class="token punctuation">{</span>a<span class="token punctuation">,</span>b<span class="token punctuation">}</span>

<span class="token comment">// 第二种暴露方式</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token comment">// 第一种导入方式</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">"./src/test.js"</span>

<span class="token comment">// 第二种导入方式</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>school<span class="token punctuation">,</span> teacher<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./src/test.js"</span> 
<span class="token keyword">import</span> <span class="token punctuation">{</span><span class="token keyword">default</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./src/test.js"</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-箭头函数" tabindex="-1"><a class="header-anchor" href="#_1-3-箭头函数" aria-hidden="true">#</a> 1.3 箭头函数</h3>
<p>箭头函数中的this是静态的, 始终指向声明该函数的所在的作用域指向的this, 如果没有this就会一直往上找, 直到找到window对象</p>
<p>无法使用call函数改变箭头函数的this指向</p>
<p>不能作为构造实例化对象</p>
<p>不能使用 arguements 对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-函数参数默认值" tabindex="-1"><a class="header-anchor" href="#_1-4-函数参数默认值" aria-hidden="true">#</a> 1.4 函数参数默认值</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//如果传了age则用传入的参数, 如果传则默认为25</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">sex<span class="token punctuation">,</span>age <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">,</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> sty <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">"男"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-模板字符串" tabindex="-1"><a class="header-anchor" href="#_1-5-模板字符串" aria-hidden="true">#</a> 1.5 模板字符串</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//解析html标签</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;ul>&lt;li>沈腾&lt;/li>&lt;/ul></span><span class="token template-punctuation string">`</span></span>

<span class="token comment">//引用变量</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'小豪'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Your name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-解构赋值" tabindex="-1"><a class="header-anchor" href="#_1-6-解构赋值" aria-hidden="true">#</a> 1.6 解构赋值</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>data<span class="token punctuation">}</span> <span class="token operator">=</span> obj
等于下面的写法
<span class="token keyword">const</span> a <span class="token operator">=</span> obj<span class="token punctuation">.</span>data


<span class="token comment">//多重结构赋值 + 重命名</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span>data<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">=</span> obj
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment">// 1 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-7-延展操作符" tabindex="-1"><a class="header-anchor" href="#_1-7-延展操作符" aria-hidden="true">#</a> 1.7 延展操作符</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//1.数组的合并</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"一天"</span><span class="token punctuation">,</span><span class="token string">"快乐"</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"每天"</span><span class="token punctuation">,</span><span class="token string">"开心"</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> ab <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>a<span class="token punctuation">,</span><span class="token operator">...</span>b<span class="token punctuation">]</span>

<span class="token comment">//2.数组的克隆 (浅拷贝)</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>a<span class="token punctuation">]</span>

<span class="token comment">//3.将伪数组转为数组</span>
<span class="token keyword">const</span> divlist <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectAll</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> divArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>divlist<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-8-对象属性简写" tabindex="-1"><a class="header-anchor" href="#_1-8-对象属性简写" aria-hidden="true">#</a> 1.8 对象属性简写</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">"张三"</span>
<span class="token keyword">let</span> student <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token punctuation">,</span>   <span class="token comment">// 对象属性name:name 可以简写为 name</span>
  
  <span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">// 对象方法study: function(){ } 可以简写</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我爱学习"</span><span class="token punctuation">)</span>  
  <span class="token punctuation">}</span>
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-9-promise" tabindex="-1"><a class="header-anchor" href="#_1-9-promise" aria-hidden="true">#</a> 1.9 Promise</h3>
<p>解决异步获取参数的问题 解决回调地狱 但是终极解决方案是 async await</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">"./resouces/未学.md"</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token comment">// 判断如果失败</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    
    <span class="token comment">//如果成功</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"读取失败"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-10-let与const" tabindex="-1"><a class="header-anchor" href="#_1-10-let与const" aria-hidden="true">#</a> 1.10 Let与Const</h3>
<p>使用let或const定义的变量具有块级作用域域性质,在同一个代码块中不允许重复声明</p>
<h3 id="_1-11-字符串或数组方法" tabindex="-1"><a class="header-anchor" href="#_1-11-字符串或数组方法" aria-hidden="true">#</a> 1.11 字符串或数组方法</h3>
<p>map filter reduce</p>
<h3 id="_1-12-rest参数" tabindex="-1"><a class="header-anchor" href="#_1-12-rest参数" aria-hidden="true">#</a> 1.12 rest参数</h3>
<p>使用延展符后所有参数会放到列表里, 可以调用列表的方法</p>
<p>注意 rest参数要放到最后</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">data</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b<span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">data</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>

<span class="token literal-property property">结果</span><span class="token operator">:</span> a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> args <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span> <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-13-symbol-新的数据类型" tabindex="-1"><a class="header-anchor" href="#_1-13-symbol-新的数据类型" aria-hidden="true">#</a> 1.13 Symbol 新的数据类型</h3>
<p>原始7大数据类型: undefined null string boolean number object symbol</p>
<p>作用: 给对象添加独一无二的属性或方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> game <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"狼人杀"</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'say'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我可以发言了"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-14-迭代器" tabindex="-1"><a class="header-anchor" href="#_1-14-迭代器" aria-hidden="true">#</a> 1.14 迭代器</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> xiyou <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"唐僧"</span><span class="token punctuation">,</span><span class="token string">"孙悟空"</span><span class="token punctuation">,</span><span class="token string">"沙和尚"</span><span class="token punctuation">,</span><span class="token string">"猪八戒"</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> iterator <span class="token operator">=</span> xiyou<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {value: '唐僧', done: false}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {value: '孙悟空', done: false}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {value: '沙和尚', done: false}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {value: '猪八戒', done: false}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {value: undefined, done: true}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-15-生成器" tabindex="-1"><a class="header-anchor" href="#_1-15-生成器" aria-hidden="true">#</a> 1.15 生成器</h3>
<p>解决了异步任务</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//获取用户数据</span>
fuction <span class="token function">getUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token string">"用户数据"</span>
    iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//获取订单数据</span>
fuction <span class="token function">getOrders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token string">"订单数据"</span>
    iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//获取商品数据</span>
fuction <span class="token function">getGoods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token string">"商品数据"</span>
    iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//生成器函数</span>
<span class="token keyword">function</span> <span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> users <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">getUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> orders <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">getOrders</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> goods <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">getGoods</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//调用生成器函数</span>
<span class="token keyword">let</span> iterator <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-16-set-集合" tabindex="-1"><a class="header-anchor" href="#_1-16-set-集合" aria-hidden="true">#</a> 1.16 Set 集合</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//创建元素</span>
<span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">//获取集合长度</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>size<span class="token punctuation">)</span>

<span class="token comment">//添加元素</span>
s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

<span class="token comment">//删除元素</span>
s<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">//判断元素是否存在</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//清空集合</span>
s<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//实现了 iteartor接口</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> v <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实例 应用场景</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span>

<span class="token comment">//1.去重</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span>

<span class="token comment">//2.交集</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//3.并集</span>
<span class="token keyword">let</span> union <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span>new <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">,</span><span class="token operator">...</span>arr2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

<span class="token comment">//4.差集</span>
<span class="token keyword">let</span> diff <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-17-map-数据结构" tabindex="-1"><a class="header-anchor" href="#_1-17-map-数据结构" aria-hidden="true">#</a> 1.17 Map 数据结构</h3>
<p>键值对, 键不限于字符串类型</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>

size  <span class="token comment">//获取长度</span>
<span class="token keyword">set</span>  <span class="token comment">//新增</span>
<span class="token keyword">get</span>  <span class="token comment">//获取</span>
has  <span class="token comment">//判断</span>
clear  <span class="token comment">//清空</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-18-reflect反射" tabindex="-1"><a class="header-anchor" href="#_1-18-reflect反射" aria-hidden="true">#</a> 1.18 Reflect反射</h3>
<p>Reflect.apply()</p>
<h2 id="第2章-es7语法" tabindex="-1"><a class="header-anchor" href="#第2章-es7语法" aria-hidden="true">#</a> 第2章 ES7语法</h2>
<h3 id="_2-1-includes" tabindex="-1"><a class="header-anchor" href="#_2-1-includes" aria-hidden="true">#</a> 2.1  includes</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> books <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'西游'</span><span class="token punctuation">,</span><span class="token string">'三国'</span><span class="token punctuation">,</span><span class="token string">'科技'</span><span class="token punctuation">]</span>
books<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'西游'</span><span class="token punctuation">)</span> <span class="token comment">//  如果存在则返回元素下标0</span>
books<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'快穿'</span><span class="token punctuation">)</span> <span class="token comment">// 如果不存在则返回-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-指数操作符" tabindex="-1"><a class="header-anchor" href="#_2-2-指数操作符" aria-hidden="true">#</a> 2.2 指数操作符</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">**</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 2的10次方等于1024</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第3章-es8语法" tabindex="-1"><a class="header-anchor" href="#第3章-es8语法" aria-hidden="true">#</a> 第3章 ES8语法</h2>
<h3 id="_3-1-async-await" tabindex="-1"><a class="header-anchor" href="#_3-1-async-await" aria-hidden="true">#</a> 3.1 async await</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//异步终极解决方案</span>
<span class="token keyword">async</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">apiGetTableData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// await 异步任务</span>
    <span class="token comment">// do something    </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-object-values" tabindex="-1"><a class="header-anchor" href="#_3-2-object-values" aria-hidden="true">#</a> 3.2 Object.values</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// [1, 2, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-object-entries" tabindex="-1"><a class="header-anchor" href="#_3-3-object-entries" aria-hidden="true">#</a> 3.3 Object.entries</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// [["a", 1], ["b", 2], ["c", 3]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-string-padding" tabindex="-1"><a class="header-anchor" href="#_3-4-string-padding" aria-hidden="true">#</a> 3.4 String.padding</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 右对齐</span>
<span class="token string">'hello'</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "     hello"</span>
<span class="token comment">// 左对齐</span>
<span class="token string">'hello'</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>    <span class="token comment">//"hello     "</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第4章-es9语法" tabindex="-1"><a class="header-anchor" href="#第4章-es9语法" aria-hidden="true">#</a> 第4章 ES9语法</h2>
<h3 id="_4-1-拓展运算符可以应用于对象" tabindex="-1"><a class="header-anchor" href="#_4-1-拓展运算符可以应用于对象" aria-hidden="true">#</a> 4.1 拓展运算符可以应用于对象</h3>
<h3 id="_4-2-正则拓展" tabindex="-1"><a class="header-anchor" href="#_4-2-正则拓展" aria-hidden="true">#</a> 4.2 正则拓展</h3>
<p>正则捕获分组</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">"abc"</span>
<span class="token keyword">const</span> reg <span class="token operator">=</span>  <span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">&lt;</span>txt<span class="token operator">></span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span>  
<span class="token comment">// 以前使用 (.*) 捕获内容 现在可以在括号内的最前面加上?&lt;name>, 尖括号内可以是任何名字</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>group<span class="token punctuation">.</span>txt<span class="token punctuation">)</span>
<span class="token comment">//分组后的结果多了个group属性, 可以获取到用 ?&lt;name> 声明的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>反向断言</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><p>dotAll模式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><h2 id="第5章-es10语法" tabindex="-1"><a class="header-anchor" href="#第5章-es10语法" aria-hidden="true">#</a> 第5章 ES10语法</h2>
<h3 id="_5-1-object-fromentries" tabindex="-1"><a class="header-anchor" href="#_5-1-object-fromentries" aria-hidden="true">#</a> 5.1 Object.fromEntries</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 可以把二维数组转为对象 与Objedt.entries互为逆运算</span>
<span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span><span class="token string">"wangle"</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-字符串方法拓展" tabindex="-1"><a class="header-anchor" href="#_5-2-字符串方法拓展" aria-hidden="true">#</a> 5.2 字符串方法拓展</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'   love   '</span> 
str<span class="token punctuation">.</span><span class="token function">trimStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//清除左侧空白 </span>
str<span class="token punctuation">.</span><span class="token function">trimEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//清除右侧空白</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-数组方法拓展" tabindex="-1"><a class="header-anchor" href="#_5-3-数组方法拓展" aria-hidden="true">#</a> 5.3 数组方法拓展</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>flat方法 将多维数组展开 参数默认为<span class="token number">1</span> 即把二维数组展开成一维数组
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
arr<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment">//[1,2,3,4,5,6,7,8]</span>

flatMap方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-symbol-description" tabindex="-1"><a class="header-anchor" href="#_5-4-symbol-description" aria-hidden="true">#</a> 5.4 Symbol.description</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>description<span class="token punctuation">)</span>  <span class="token comment">// name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第6章-es11语法" tabindex="-1"><a class="header-anchor" href="#第6章-es11语法" aria-hidden="true">#</a> 第6章 ES11语法</h2>
<h3 id="_6-1-私有属性" tabindex="-1"><a class="header-anchor" href="#_6-1-私有属性" aria-hidden="true">#</a> 6.1 私有属性</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">student</span> <span class="token punctuation">{</span>
  <span class="token comment">//公有属性</span>
  name<span class="token punctuation">;</span>
  
  <span class="token comment">//私有属性 外部不能直接访问</span>
  #age<span class="token punctuation">;</span>
  
  <span class="token comment">//构造器</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#age <span class="token operator">=</span> age 
  <span class="token punctuation">}</span>
  
  <span class="token comment">//提供外部访问私有属性的方法</span>
  <span class="token function">intro</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>#age<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-string-matchall" tabindex="-1"><a class="header-anchor" href="#_6-2-string-matchall" aria-hidden="true">#</a> 6.2 string.matchAll</h3>
<h3 id="_6-3-可选链操作符" tabindex="-1"><a class="header-anchor" href="#_6-3-可选链操作符" aria-hidden="true">#</a> 6.3 可选链操作符</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//需要达到的效果</span>
<span class="token keyword">const</span> dbhost <span class="token operator">=</span> config<span class="token punctuation">.</span>db<span class="token punctuation">.</span>host
<span class="token comment">//但是如果某个属性不存在则会报错 普通改写</span>
<span class="token keyword">const</span> dbhost <span class="token operator">=</span> config <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>db <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>db<span class="token punctuation">.</span>host
<span class="token comment">// 使用可选操作符后</span>
<span class="token keyword">const</span> dbhost <span class="token operator">=</span> config<span class="token operator">?.</span>db<span class="token operator">?.</span>host
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-动态import" tabindex="-1"><a class="header-anchor" href="#_6-4-动态import" aria-hidden="true">#</a> 6.4 动态import</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//动态引入模块 当按钮被点击时 引入js</span>
btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span><span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./hello.js'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">module</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    module<span class="token punctuation">.</span><span class="token function">helloMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-5-bigint类型" tabindex="-1"><a class="header-anchor" href="#_6-5-bigint类型" aria-hidden="true">#</a> 6.5 Bigint类型</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">10000000000000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-6-绝对全局对象" tabindex="-1"><a class="header-anchor" href="#_6-6-绝对全局对象" aria-hidden="true">#</a> 6.6 绝对全局对象</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>globalThis<span class="token punctuation">)</span>  <span class="token comment">// 始终指向全局对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="第7章-es12语法" tabindex="-1"><a class="header-anchor" href="#第7章-es12语法" aria-hidden="true">#</a> 第7章 ES12语法</h2>
<h3 id="_7-1-string-replaceall" tabindex="-1"><a class="header-anchor" href="#_7-1-string-replaceall" aria-hidden="true">#</a> 7.1 string.replaceAll</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'你好haha,我是haha'</span>
str<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">'haha'</span><span class="token punctuation">,</span><span class="token string">'hehe'</span><span class="token punctuation">)</span>
<span class="token comment">// str = 你好hehe,我是hehe</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-逻辑赋值运算符" tabindex="-1"><a class="header-anchor" href="#_7-2-逻辑赋值运算符" aria-hidden="true">#</a> 7.2 逻辑赋值运算符</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">??=</span>    <span class="token operator">&amp;&amp;=</span>    <span class="token operator">||</span><span class="token operator">?</span>

a <span class="token operator">||=</span> b  <span class="token comment">//等同于 a = a || b</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-weakref" tabindex="-1"><a class="header-anchor" href="#_7-3-weakref" aria-hidden="true">#</a> 7.3 WeakRef</h3>
<p>获取对象的弱引用 就不会被回收掉了</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> ref <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakRef</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-3-下划线分隔符" tabindex="-1"><a class="header-anchor" href="#_7-3-下划线分隔符" aria-hidden="true">#</a> 7.3 下划线分隔符</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">23333</span>
<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">23_333</span>  <span class="token comment">//只让阅读更清晰 不会编译到代码里 不会影响程序运行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
