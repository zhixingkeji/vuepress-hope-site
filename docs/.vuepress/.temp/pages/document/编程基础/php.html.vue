<template><div><h2 id="第1章-php语法" tabindex="-1"><a class="header-anchor" href="#第1章-php语法" aria-hidden="true">#</a> 第1章 php语法</h2>
<ol>
<li>
<p><strong>特点</strong></p>
<p>关键字大小写不敏感，但是变量敏感</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

    echo <span class="token string">"Hello World!"</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>echo 网页上显示字符串</p>
<hr>
<ol start="2">
<li>
<p><strong>变量</strong></p>
<p>以<code v-pre>$</code>开头定义变量，不需要声明，没有类型</p>
<p>作用域 全局 局部 静态</p>
<p>全局只能在全局访问 局部只能在局部访问</p>
<p>局部要访问全局的需要在变量前加global关键字</p>
<p>或者用$GLOBALS数组</p>
<p><code v-pre>global $x,$y;</code></p>
<p><code v-pre>$GLOBALS['y']=$GLOBALS['x']+$GLOBALS['y'];</code></p>
</li>
</ol>
<p>显示变量</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token comment">//创建字符串</span>

$txt1<span class="token operator">=</span><span class="token string">"Learn PHP"</span><span class="token punctuation">;</span>

$txt2<span class="token operator">=</span><span class="token string">"W3School.com.cn"</span><span class="token punctuation">;</span>

<span class="token comment">//创建数组</span>

$cars<span class="token operator">=</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token string">"Volvo"</span><span class="token punctuation">,</span><span class="token string">"BMW"</span><span class="token punctuation">,</span><span class="token string">"SAAB"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


echo $txt1<span class="token punctuation">;</span>

<span class="token comment">//显示html标记</span>

echo <span class="token string">"&lt;br>"</span><span class="token punctuation">;</span>

<span class="token comment">//字符串中显示变量</span>

echo <span class="token string">"Study PHP at $txt2"</span><span class="token punctuation">;</span>

<span class="token comment">//显示数组</span>

echo <span class="token string">"My car is a {$cars[0]}"</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="3">
<li>
<p><strong>数据类型</strong></p>
<p>字符串: &quot;&quot;</p>
<p>整数： 不能有小数点，正负均可</p>
<p>浮点数：有小数点</p>
<p>逻辑： 布尔</p>
<p>数组： array（）</p>
<p>对象：class obj</p>
<p>NULL值： null</p>
</li>
</ol>
<hr>
<ol start="4">
<li><strong>字符串函数</strong></li>
</ol>
<p>返回字符串长度</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

echo <span class="token function">strlen</span><span class="token punctuation">(</span><span class="token string">"Hello world!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//输出15</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出字符串的单词个数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

echo <span class="token function">str_word_count</span><span class="token punctuation">(</span><span class="token string">"Hello world!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 2</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>反转字符串</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

echo <span class="token function">strrev</span><span class="token punctuation">(</span><span class="token string">"Hello world!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 !dlrow olleH</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找字符串是否出现</p>
<p>出现则返回第一个字符的索引，否则返回false</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

echo <span class="token function">strpos</span><span class="token punctuation">(</span><span class="token string">"Hello world!"</span><span class="token punctuation">,</span><span class="token string">"world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//返回7 </span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>替换字符串中的文本</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

echo <span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token string">"world"</span><span class="token punctuation">,</span> <span class="token string">"Kitty"</span><span class="token punctuation">,</span> <span class="token string">"Hello world!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 Hello Kitty!</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="5">
<li>
<p><strong>常量</strong></p>
<p>常量是全局的，且函数内部也可以访问</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token function">define</span><span class="token punctuation">(</span><span class="token string">"GREETING"</span><span class="token punctuation">,</span> <span class="token string">"Welcome to W3School.com.cn!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

echo <span class="token constant">GREETING</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="6">
<li><strong>运算符</strong></li>
</ol>
<p>算数 + - * / %</p>
<p>赋值  =</p>
<p>字符串 <code v-pre>.</code> 串接  <code v-pre>.=</code> 串接赋值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

$a <span class="token operator">=</span> <span class="token string">"Hello"</span><span class="token punctuation">;</span>

$b <span class="token operator">=</span> $a <span class="token punctuation">.</span> <span class="token string">" world!"</span><span class="token punctuation">;</span>

echo $b<span class="token punctuation">;</span> <span class="token comment">// 输出 Hello world!</span>


$x<span class="token operator">=</span><span class="token string">"Hello"</span><span class="token punctuation">;</span>

$x <span class="token punctuation">.</span><span class="token operator">=</span> <span class="token string">" world!"</span><span class="token punctuation">;</span>

echo $x<span class="token punctuation">;</span> <span class="token comment">// 输出 Hello world!</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="7">
<li><strong>if 判断</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

$t<span class="token operator">=</span><span class="token function">date</span><span class="token punctuation">(</span><span class="token string">"H"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">if</span> <span class="token punctuation">(</span>$t<span class="token operator">&lt;</span><span class="token string">"10"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  echo <span class="token string">"Have a good morning!"</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span> <span class="token function">elseif</span> <span class="token punctuation">(</span>$t<span class="token operator">&lt;</span><span class="token string">"20"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  echo <span class="token string">"Have a good day!"</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

  echo <span class="token string">"Have a good night!"</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="8">
<li><strong>switch</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

$favfruit<span class="token operator">=</span><span class="token string">"orange"</span><span class="token punctuation">;</span>


<span class="token keyword">switch</span> <span class="token punctuation">(</span>$favfruit<span class="token punctuation">)</span> <span class="token punctuation">{</span>

   <span class="token keyword">case</span> <span class="token string">"apple"</span><span class="token operator">:</span>

     echo <span class="token string">"Your favorite fruit is apple!"</span><span class="token punctuation">;</span>

     <span class="token keyword">break</span><span class="token punctuation">;</span>

   <span class="token keyword">case</span> <span class="token string">"banana"</span><span class="token operator">:</span>

     echo <span class="token string">"Your favorite fruit is banana!"</span><span class="token punctuation">;</span>

     <span class="token keyword">break</span><span class="token punctuation">;</span>

   <span class="token keyword">case</span> <span class="token string">"orange"</span><span class="token operator">:</span>

     echo <span class="token string">"Your favorite fruit is orange!"</span><span class="token punctuation">;</span>

     <span class="token keyword">break</span><span class="token punctuation">;</span>

   <span class="token keyword">default</span><span class="token operator">:</span>

     echo <span class="token string">"Your favorite fruit is neither apple, banana, or orange!"</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="9">
<li><strong>while 循环</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php 

$x<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> 


<span class="token keyword">while</span><span class="token punctuation">(</span>$x<span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  echo <span class="token string">"这个数字是：$x &lt;br>"</span><span class="token punctuation">;</span>

  $x<span class="token operator">++</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span> 

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php 

$x<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">;</span>


<span class="token keyword">do</span> <span class="token punctuation">{</span>

  echo <span class="token string">"这个数字是：$x &lt;br>"</span><span class="token punctuation">;</span>

  $x<span class="token operator">++</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>$x<span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="10">
<li><strong>for 循环</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php 

<span class="token keyword">for</span> <span class="token punctuation">(</span>$x<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> $x<span class="token operator">&lt;=</span><span class="token number">10</span><span class="token punctuation">;</span> $x<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  echo <span class="token string">"数字是：$x &lt;br>"</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span> 

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php 

$colors <span class="token operator">=</span> <span class="token function">array</span><span class="token punctuation">(</span><span class="token string">"red"</span><span class="token punctuation">,</span><span class="token string">"green"</span><span class="token punctuation">,</span><span class="token string">"blue"</span><span class="token punctuation">,</span><span class="token string">"yellow"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 


<span class="token function">foreach</span> <span class="token punctuation">(</span><span class="token parameter">$colors <span class="token keyword">as</span> $value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  echo <span class="token string">"$value &lt;br>"</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="11">
<li><strong>函数</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token keyword">function</span> <span class="token function">familyName</span><span class="token punctuation">(</span><span class="token parameter">$fname<span class="token punctuation">,</span>$year</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  echo <span class="token string">"$fname Zhang. Born in $year &lt;br>"</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

  <span class="token function">familyName</span><span class="token punctuation">(</span><span class="token string">"Li"</span><span class="token punctuation">,</span><span class="token string">"1975"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>带默认值的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token keyword">function</span> <span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token parameter">$minheight<span class="token operator">=</span><span class="token number">50</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  echo <span class="token string">"The height is : $minheight &lt;br>"</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

  <span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">350</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将使用默认值 50</span>

  <span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>带返回值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">$x<span class="token punctuation">,</span>$y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  $z<span class="token operator">=</span>$x<span class="token operator">+</span>$y<span class="token punctuation">;</span>

    <span class="token keyword">return</span> $z<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    echo <span class="token string">"5 + 10 = "</span> <span class="token punctuation">.</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">"&lt;br>"</span><span class="token punctuation">;</span>

    echo <span class="token string">"7 + 13 = "</span> <span class="token punctuation">.</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">"&lt;br>"</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="12">
<li><strong>数组</strong></li>
</ol>
<p>有三种数组</p>
<p>索引数组 带有数字索引的数组</p>
<p>关联数组 带有指定键的数组</p>
<p>多维数组 包含一个或多个数组的数组</p>
<p>索引数组</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
$cars<span class="token operator">=</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token string">"porsche"</span><span class="token punctuation">,</span><span class="token string">"BMW"</span><span class="token punctuation">,</span><span class="token string">"Volvo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


$cars<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"porsche"</span><span class="token punctuation">;</span>

$cars<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"BMW"</span><span class="token punctuation">;</span>

$cars<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"Volvo"</span><span class="token punctuation">;</span>


<span class="token comment">//获取数组长度</span>

<span class="token operator">&lt;</span><span class="token operator">?</span>php

$cars<span class="token operator">=</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token string">"porsche"</span><span class="token punctuation">,</span><span class="token string">"BMW"</span><span class="token punctuation">,</span><span class="token string">"Volvo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

echo <span class="token function">count</span><span class="token punctuation">(</span>$cars<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>


<span class="token comment">//遍历索引数组</span>

<span class="token operator">&lt;</span><span class="token operator">?</span>php

$cars<span class="token operator">=</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token string">"porsche"</span><span class="token punctuation">,</span><span class="token string">"BMW"</span><span class="token punctuation">,</span><span class="token string">"Volvo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

$arrlength<span class="token operator">=</span><span class="token function">count</span><span class="token punctuation">(</span>$cars<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">for</span><span class="token punctuation">(</span>$x<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>$x<span class="token operator">&lt;</span>$arrlength<span class="token punctuation">;</span>$x<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  echo $cars<span class="token punctuation">[</span>$x<span class="token punctuation">]</span><span class="token punctuation">;</span>

  echo <span class="token string">"&lt;br>"</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关联数组</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
$age<span class="token operator">=</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token string">"Bill"</span><span class="token operator">=></span><span class="token string">"35"</span><span class="token punctuation">,</span><span class="token string">"Steve"</span><span class="token operator">=></span><span class="token string">"37"</span><span class="token punctuation">,</span><span class="token string">"Elon"</span><span class="token operator">=></span><span class="token string">"43"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


$age<span class="token punctuation">[</span><span class="token string">'Bill'</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"63"</span><span class="token punctuation">;</span>

$age<span class="token punctuation">[</span><span class="token string">'Steve'</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"56"</span><span class="token punctuation">;</span>

$age<span class="token punctuation">[</span><span class="token string">'Elon'</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"47"</span><span class="token punctuation">;</span>


<span class="token comment">//遍历关联数组</span>

<span class="token operator">&lt;</span><span class="token operator">?</span>php

$age<span class="token operator">=</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token string">"Bill"</span><span class="token operator">=></span><span class="token string">"63"</span><span class="token punctuation">,</span><span class="token string">"Steve"</span><span class="token operator">=></span><span class="token string">"56"</span><span class="token punctuation">,</span><span class="token string">"Elon"</span><span class="token operator">=></span><span class="token string">"47"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token function">foreach</span><span class="token punctuation">(</span>$age <span class="token keyword">as</span> <span class="token parameter">$x</span><span class="token operator">=></span>$x_value<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  echo <span class="token string">"Key="</span> <span class="token punctuation">.</span> $x <span class="token punctuation">.</span> <span class="token string">", Value="</span> <span class="token punctuation">.</span> $x_value<span class="token punctuation">;</span>

  echo <span class="token string">"&lt;br>"</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="13">
<li>
<p><strong>数组排序</strong></p>
<p>sort() - 以升序对数组排序</p>
<p>rsort() - 以降序对数组排序</p>
<p>asort() - 根据值，以升序对关联数组进行排序</p>
<p>ksort() - 根据键，以升序对关联数组进行排序</p>
<p>arsort() - 根据值，以降序对关联数组进行排序</p>
<p>krsort() - 根据键，以降序对关联数组进行排序</p>
</li>
</ol>
<hr>
<ol start="14">
<li>
<p><strong>超全局变量</strong></p>
<p>$GLOBALS</p>
<p>$_SERVER</p>
<p>$_REQUEST</p>
<p>$_POST</p>
<p>$_GET</p>
<p>$_FILES</p>
<p>$_ENV</p>
<p>$_COOKIE</p>
<p>$_SESSION</p>
</li>
</ol>
<h2 id="第2章-php进阶" tabindex="-1"><a class="header-anchor" href="#第2章-php进阶" aria-hidden="true">#</a> 第2章 php进阶</h2>
<ol>
<li><strong>多维数组</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
$cars <span class="token operator">=</span> <span class="token function">array</span>

  <span class="token punctuation">(</span>

  <span class="token function">array</span><span class="token punctuation">(</span><span class="token string">"Volvo"</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token function">array</span><span class="token punctuation">(</span><span class="token string">"BMW"</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token function">array</span><span class="token punctuation">(</span><span class="token string">"Saab"</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token function">array</span><span class="token punctuation">(</span><span class="token string">"Land Rover"</span><span class="token punctuation">,</span><span class="token number">17</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">)</span>

  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  
  
  <span class="token operator">&lt;</span><span class="token operator">?</span>php

echo $cars<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token string">": 库存："</span><span class="token punctuation">.</span>$cars<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token string">", 销量："</span><span class="token punctuation">.</span>$cars<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token string">".&lt;br>"</span><span class="token punctuation">;</span>

echo $cars<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token string">": 库存："</span><span class="token punctuation">.</span>$cars<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token string">", 销量："</span><span class="token punctuation">.</span>$cars<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token string">".&lt;br>"</span><span class="token punctuation">;</span>

echo $cars<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token string">": 库存："</span><span class="token punctuation">.</span>$cars<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token string">", 销量："</span><span class="token punctuation">.</span>$cars<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token string">".&lt;br>"</span><span class="token punctuation">;</span>

echo $cars<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token string">": 库存："</span><span class="token punctuation">.</span>$cars<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token string">", 销量："</span><span class="token punctuation">.</span>$cars<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token string">".&lt;br>"</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>



<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token keyword">for</span> <span class="token punctuation">(</span>$row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> $row <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> $row<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  echo <span class="token string">"&lt;p>&lt;b>Row number $row&lt;/b>&lt;/p>"</span><span class="token punctuation">;</span>

  echo <span class="token string">"&lt;ul>"</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span>$col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> $col <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> $col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    echo <span class="token string">"&lt;li>"</span><span class="token punctuation">.</span>$cars<span class="token punctuation">[</span>$row<span class="token punctuation">]</span><span class="token punctuation">[</span>$col<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token string">"&lt;/li>"</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

  echo <span class="token string">"&lt;/ul>"</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="2">
<li><strong>日期</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

echo <span class="token string">"今天是 "</span> <span class="token punctuation">.</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string">"Y/m/d"</span><span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">"&lt;br>"</span><span class="token punctuation">;</span>

echo <span class="token string">"今天是 "</span> <span class="token punctuation">.</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string">"Y.m.d"</span><span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">"&lt;br>"</span><span class="token punctuation">;</span>

echo <span class="token string">"今天是 "</span> <span class="token punctuation">.</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string">"Y-m-d"</span><span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">"&lt;br>"</span><span class="token punctuation">;</span>

echo <span class="token string">"今天是 "</span> <span class="token punctuation">.</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string">"l"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>


© <span class="token number">2010</span><span class="token operator">-</span><span class="token operator">&lt;</span><span class="token operator">?</span>php echo <span class="token function">date</span><span class="token punctuation">(</span><span class="token string">"Y"</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token operator">></span>


<span class="token operator">&lt;</span><span class="token operator">?</span>php

echo <span class="token string">"现在时间是 "</span> <span class="token punctuation">.</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string">"h:i:sa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="3">
<li>
<p><strong>引入文件</strong></p>
<p>require 会生成致命错误（E_COMPILE_ERROR）并停止脚本</p>
<p>include 只生成警告（E_WARNING），并且脚本会继续</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
include <span class="token string">'filename'</span><span class="token punctuation">;</span>

require <span class="token string">'filename'</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="4">
<li><strong>操作文件</strong></li>
</ol>
<p>读取文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

echo <span class="token function">readfile</span><span class="token punctuation">(</span><span class="token string">"webdictionary.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

$myfile <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">"webdictionary.txt"</span><span class="token punctuation">,</span> <span class="token string">"r"</span><span class="token punctuation">)</span> or <span class="token function">die</span><span class="token punctuation">(</span><span class="token string">"Unable to open file!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

echo <span class="token function">fread</span><span class="token punctuation">(</span>$myfile<span class="token punctuation">,</span><span class="token function">filesize</span><span class="token punctuation">(</span><span class="token string">"webdictionary.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">fclose</span><span class="token punctuation">(</span>$myfile<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>逐行读取</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

$myfile <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">"webdictionary.txt"</span><span class="token punctuation">,</span> <span class="token string">"r"</span><span class="token punctuation">)</span> or <span class="token function">die</span><span class="token punctuation">(</span><span class="token string">"Unable to open file!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 输出单行直到 end-of-file</span>

<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">feof</span><span class="token punctuation">(</span>$myfile<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  echo <span class="token function">fgets</span><span class="token punctuation">(</span>$myfile<span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">"&lt;br>"</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token function">fclose</span><span class="token punctuation">(</span>$myfile<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>逐个字符读取</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
$myfile <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">"webdictionary.txt"</span><span class="token punctuation">,</span> <span class="token string">"r"</span><span class="token punctuation">)</span> or <span class="token function">die</span><span class="token punctuation">(</span><span class="token string">"Unable to open file!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 输出单字符直到 end-of-file</span>

<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">feof</span><span class="token punctuation">(</span>$myfile<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  echo <span class="token function">fgetc</span><span class="token punctuation">(</span>$myfile<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token function">fclose</span><span class="token punctuation">(</span>$myfile<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>


<span class="token operator">&lt;</span><span class="token operator">?</span>php

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

$myfile <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">"newfile.txt"</span><span class="token punctuation">,</span> <span class="token string">"w"</span><span class="token punctuation">)</span> or <span class="token function">die</span><span class="token punctuation">(</span><span class="token string">"Unable to open file!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

$txt <span class="token operator">=</span> <span class="token string">"Bill Gates\n"</span><span class="token punctuation">;</span>

<span class="token function">fwrite</span><span class="token punctuation">(</span>$myfile<span class="token punctuation">,</span> $txt<span class="token punctuation">)</span><span class="token punctuation">;</span>

$txt <span class="token operator">=</span> <span class="token string">"Steve Jobs\n"</span><span class="token punctuation">;</span>

<span class="token function">fwrite</span><span class="token punctuation">(</span>$myfile<span class="token punctuation">,</span> $txt<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">fclose</span><span class="token punctuation">(</span>$myfile<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件上传</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token comment">//上传表单</span>

<span class="token operator">&lt;</span>html<span class="token operator">></span>

<span class="token operator">&lt;</span>body<span class="token operator">></span>


<span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string">"upload_file.php"</span> method<span class="token operator">=</span><span class="token string">"post"</span>

enctype<span class="token operator">=</span><span class="token string">"multipart/form-data"</span><span class="token operator">></span>

<span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"file"</span><span class="token operator">></span>Filename<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>

<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"file"</span> name<span class="token operator">=</span><span class="token string">"file"</span> id<span class="token operator">=</span><span class="token string">"file"</span> <span class="token operator">/</span><span class="token operator">></span> 

<span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"submit"</span> name<span class="token operator">=</span><span class="token string">"submit"</span> value<span class="token operator">=</span><span class="token string">"Submit"</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>


<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>



<span class="token comment">//上传脚本 保存上传的文件</span>

<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>$_FILES<span class="token punctuation">[</span><span class="token string">"file"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"type"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">"image/gif"</span><span class="token punctuation">)</span>

                <span class="token operator">||</span> <span class="token punctuation">(</span>$_FILES<span class="token punctuation">[</span><span class="token string">"file"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"type"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">"image/jpeg"</span><span class="token punctuation">)</span>

                <span class="token operator">||</span> <span class="token punctuation">(</span>$_FILES<span class="token punctuation">[</span><span class="token string">"file"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"type"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">"image/pjpeg"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>$_FILES<span class="token punctuation">[</span><span class="token string">"file"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"size"</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">20000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>

   <span class="token keyword">if</span> <span class="token punctuation">(</span>$_FILES<span class="token punctuation">[</span><span class="token string">"file"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"error"</span><span class="token punctuation">]</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>

   <span class="token punctuation">{</span>

      echo <span class="token string">"Return Code: "</span> <span class="token punctuation">.</span> $_FILES<span class="token punctuation">[</span><span class="token string">"file"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"error"</span><span class="token punctuation">]</span> <span class="token punctuation">.</span> <span class="token string">"&lt;br />"</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span>

   <span class="token keyword">else</span>

   <span class="token punctuation">{</span>

      echo <span class="token string">"Upload: "</span> <span class="token punctuation">.</span> $_FILES<span class="token punctuation">[</span><span class="token string">"file"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span> <span class="token punctuation">.</span> <span class="token string">"&lt;br />"</span><span class="token punctuation">;</span>

      echo <span class="token string">"Type: "</span> <span class="token punctuation">.</span> $_FILES<span class="token punctuation">[</span><span class="token string">"file"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"type"</span><span class="token punctuation">]</span> <span class="token punctuation">.</span> <span class="token string">"&lt;br />"</span><span class="token punctuation">;</span>

      echo <span class="token string">"Size: "</span> <span class="token punctuation">.</span> <span class="token punctuation">(</span>$_FILES<span class="token punctuation">[</span><span class="token string">"file"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"size"</span><span class="token punctuation">]</span> <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">" Kb&lt;br />"</span><span class="token punctuation">;</span>

      echo <span class="token string">"Temp file: "</span> <span class="token punctuation">.</span> $_FILES<span class="token punctuation">[</span><span class="token string">"file"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"tmp_name"</span><span class="token punctuation">]</span> <span class="token punctuation">.</span> <span class="token string">"&lt;br />"</span><span class="token punctuation">;</span>


      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">file_exists</span><span class="token punctuation">(</span><span class="token string">"upload/"</span> <span class="token punctuation">.</span> $_FILES<span class="token punctuation">[</span><span class="token string">"file"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

      <span class="token punctuation">{</span>

         echo $_FILES<span class="token punctuation">[</span><span class="token string">"file"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span> <span class="token punctuation">.</span> <span class="token string">" already exists. "</span><span class="token punctuation">;</span>

      <span class="token punctuation">}</span>

      <span class="token keyword">else</span>

      <span class="token punctuation">{</span>

         <span class="token function">move_uploaded_file</span><span class="token punctuation">(</span>$_FILES<span class="token punctuation">[</span><span class="token string">"file"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"tmp_name"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

                 <span class="token string">"upload/"</span> <span class="token punctuation">.</span> $_FILES<span class="token punctuation">[</span><span class="token string">"file"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

         echo <span class="token string">"Stored in: "</span> <span class="token punctuation">.</span> <span class="token string">"upload/"</span> <span class="token punctuation">.</span> $_FILES<span class="token punctuation">[</span><span class="token string">"file"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

      <span class="token punctuation">}</span>

   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">else</span>

<span class="token punctuation">{</span>

   echo <span class="token string">"Invalid file"</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

        <span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="5">
<li><strong>cookies</strong></li>
</ol>
<p>创建cook</p>
<p>必须在html标签之前</p>
<p>创建user: alex porter的cook，设置时间为一小时后过期</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php 

<span class="token function">setcookie</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">,</span> <span class="token string">"Alex Porter"</span><span class="token punctuation">,</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">3600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取回cook</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isset</span><span class="token punctuation">(</span>$_COOKIE<span class="token punctuation">[</span><span class="token string">"user"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  echo <span class="token string">"Welcome "</span> <span class="token punctuation">.</span> $_COOKIE<span class="token punctuation">[</span><span class="token string">"user"</span><span class="token punctuation">]</span> <span class="token punctuation">.</span> <span class="token string">"!&lt;br />"</span><span class="token punctuation">;</span>

<span class="token keyword">else</span>

  echo <span class="token string">"Welcome guest!&lt;br />"</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除cook</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php 

<span class="token comment">// set the expiration date to one hour ago</span>

<span class="token function">setcookie</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">3600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="6">
<li><strong>sessions</strong></li>
</ol>
<p>创建session</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token function">session_start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isset</span><span class="token punctuation">(</span>$_SESSION<span class="token punctuation">[</span><span class="token string">'views'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  $_SESSION<span class="token punctuation">[</span><span class="token string">'views'</span><span class="token punctuation">]</span><span class="token operator">=</span>$_SESSION<span class="token punctuation">[</span><span class="token string">'views'</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>


<span class="token keyword">else</span>

  $_SESSION<span class="token punctuation">[</span><span class="token string">'views'</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>

echo <span class="token string">"Views="</span><span class="token punctuation">.</span> $_SESSION<span class="token punctuation">[</span><span class="token string">'views'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除session</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token function">unset</span><span class="token punctuation">(</span>$_SESSION<span class="token punctuation">[</span><span class="token string">'views'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除所有session</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token function">session_destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="7">
<li>
<p><strong>email</strong></p>
<p>发送邮件</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span>html<span class="token operator">></span>

<span class="token operator">&lt;</span>body<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token keyword">function</span> <span class="token function">spamcheck</span><span class="token punctuation">(</span><span class="token parameter">$field</span><span class="token punctuation">)</span>

  <span class="token punctuation">{</span>

  <span class="token comment">//filter_var() sanitizes the e-mail </span>

  <span class="token comment">//address using FILTER_SANITIZE_EMAIL</span>

  $field<span class="token operator">=</span><span class="token function">filter_var</span><span class="token punctuation">(</span>$field<span class="token punctuation">,</span> <span class="token constant">FILTER_SANITIZE_EMAIL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//filter_var() validates the e-mail</span>

<span class="token comment">//address using FILTER_VALIDATE_EMAIL</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">filter_var</span><span class="token punctuation">(</span>$field<span class="token punctuation">,</span> <span class="token constant">FILTER_VALIDATE_EMAIL</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>

<span class="token keyword">return</span> <span class="token constant">TRUE</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">else</span>

<span class="token punctuation">{</span>

<span class="token keyword">return</span> <span class="token constant">FALSE</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token punctuation">}</span>


<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isset</span><span class="token punctuation">(</span>$_REQUEST<span class="token punctuation">[</span><span class="token string">'email'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span><span class="token comment">//if "email" is filled out, proceed</span>


<span class="token comment">//check if the email address is invalid</span>

$mailcheck <span class="token operator">=</span> <span class="token function">spamcheck</span><span class="token punctuation">(</span>$_REQUEST<span class="token punctuation">[</span><span class="token string">'email'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>$mailcheck<span class="token operator">==</span><span class="token constant">FALSE</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>

echo <span class="token string">"Invalid input"</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">else</span>

<span class="token punctuation">{</span><span class="token comment">//send email</span>

$email <span class="token operator">=</span> $_REQUEST<span class="token punctuation">[</span><span class="token string">'email'</span><span class="token punctuation">]</span> <span class="token punctuation">;</span>

$subject <span class="token operator">=</span> $_REQUEST<span class="token punctuation">[</span><span class="token string">'subject'</span><span class="token punctuation">]</span> <span class="token punctuation">;</span>

$message <span class="token operator">=</span> $_REQUEST<span class="token punctuation">[</span><span class="token string">'message'</span><span class="token punctuation">]</span> <span class="token punctuation">;</span>

<span class="token function">mail</span><span class="token punctuation">(</span><span class="token string">"someone@example.com"</span><span class="token punctuation">,</span> <span class="token string">"Subject: $subject"</span><span class="token punctuation">,</span>

$message<span class="token punctuation">,</span> <span class="token string">"From: $email"</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

echo <span class="token string">"Thank you for using our mail form"</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">else</span>

<span class="token punctuation">{</span><span class="token comment">//if "email" is not filled out, display the form</span>

echo "<span class="token operator">&lt;</span>form method<span class="token operator">=</span><span class="token string">'post'</span> action<span class="token operator">=</span><span class="token string">'mailform.php'</span><span class="token operator">></span>

<span class="token literal-property property">Email</span><span class="token operator">:</span> <span class="token operator">&lt;</span>input name<span class="token operator">=</span><span class="token string">'email'</span> type<span class="token operator">=</span><span class="token string">'text'</span> <span class="token operator">/</span><span class="token operator">></span><span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>

<span class="token literal-property property">Subject</span><span class="token operator">:</span> <span class="token operator">&lt;</span>input name<span class="token operator">=</span><span class="token string">'subject'</span> type<span class="token operator">=</span><span class="token string">'text'</span> <span class="token operator">/</span><span class="token operator">></span><span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>

<span class="token literal-property property">Message</span><span class="token operator">:</span><span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">&lt;</span>textarea name<span class="token operator">=</span><span class="token string">'message'</span> rows<span class="token operator">=</span><span class="token string">'15'</span> cols<span class="token operator">=</span><span class="token string">'40'</span><span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>textarea<span class="token operator">></span><span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">'submit'</span> <span class="token operator">/</span><span class="token operator">></span>

  <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>"<span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

<span class="token operator">?</span><span class="token operator">></span>


<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="8">
<li><strong>error</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token comment">//error handler function</span>

<span class="token keyword">function</span> <span class="token function">customError</span><span class="token punctuation">(</span><span class="token parameter">$errno<span class="token punctuation">,</span> $errstr</span><span class="token punctuation">)</span>

 <span class="token punctuation">{</span> 

 echo <span class="token string">"&lt;b>Error:&lt;/b> [$errno] $errstr&lt;br />"</span><span class="token punctuation">;</span>

 echo <span class="token string">"Ending Script"</span><span class="token punctuation">;</span>

 <span class="token function">die</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>


<span class="token comment">//set error handler</span>

<span class="token function">set_error_handler</span><span class="token punctuation">(</span><span class="token string">"customError"</span><span class="token punctuation">,</span><span class="token constant">E_USER_WARNING</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//trigger error</span>

$test<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>$test<span class="token operator">></span><span class="token number">1</span><span class="token punctuation">)</span>

 <span class="token punctuation">{</span>

 <span class="token function">trigger_error</span><span class="token punctuation">(</span><span class="token string">"Value must be 1 or below"</span><span class="token punctuation">,</span><span class="token constant">E_USER_WARNING</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="9">
<li><strong>exception</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token comment">//创建可抛出一个异常的函数</span>

<span class="token keyword">function</span> <span class="token function">checkNum</span><span class="token punctuation">(</span><span class="token parameter">$number</span><span class="token punctuation">)</span>

 <span class="token punctuation">{</span>

 <span class="token keyword">if</span><span class="token punctuation">(</span>$number<span class="token operator">></span><span class="token number">1</span><span class="token punctuation">)</span>

  <span class="token punctuation">{</span>

  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">"Value must be 1 or below"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

 <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>


<span class="token comment">//在 "try" 代码块中触发异常</span>

<span class="token keyword">try</span>

 <span class="token punctuation">{</span>

 <span class="token function">checkNum</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token comment">//If the exception is thrown, this text will not be shown</span>

 echo <span class="token string">'If you see this, the number is 1 or below'</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>


<span class="token comment">//捕获异常</span>

<span class="token keyword">catch</span><span class="token punctuation">(</span>Exception $e<span class="token punctuation">)</span>

 <span class="token punctuation">{</span>

 echo <span class="token string">'Message: '</span> <span class="token punctuation">.</span>$e<span class="token operator">-</span><span class="token operator">></span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义异常类</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token keyword">class</span> <span class="token class-name">customException</span> <span class="token keyword">extends</span> <span class="token class-name">Exception</span>

 <span class="token punctuation">{</span>

 <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">errorMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token punctuation">{</span>

  <span class="token comment">//error message</span>

  $errorMsg <span class="token operator">=</span> <span class="token string">'Error on line '</span><span class="token punctuation">.</span>$<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">getLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token string">' in '</span><span class="token punctuation">.</span>$<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">getFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token punctuation">.</span><span class="token string">': &lt;b>'</span><span class="token punctuation">.</span>$<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token string">'&lt;/b> is not a valid E-Mail address'</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> $errorMsg<span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

 <span class="token punctuation">}</span>


$email <span class="token operator">=</span> <span class="token string">"someone@example...com"</span><span class="token punctuation">;</span>


<span class="token keyword">try</span>

 <span class="token punctuation">{</span>

 <span class="token comment">//check if </span>

 <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">filter_var</span><span class="token punctuation">(</span>$email<span class="token punctuation">,</span> <span class="token constant">FILTER_VALIDATE_EMAIL</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token constant">FALSE</span><span class="token punctuation">)</span>

  <span class="token punctuation">{</span>

  <span class="token comment">//throw exception if email is not valid</span>

  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">customException</span><span class="token punctuation">(</span>$email<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

 <span class="token punctuation">}</span>


<span class="token keyword">catch</span> <span class="token punctuation">(</span>customException $e<span class="token punctuation">)</span>

 <span class="token punctuation">{</span>

 <span class="token comment">//display custom message</span>

 echo $e<span class="token operator">-</span><span class="token operator">></span><span class="token function">errorMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="10">
<li><strong>filter</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

$int <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>


<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">filter_var</span><span class="token punctuation">(</span>$int<span class="token punctuation">,</span> <span class="token constant">FILTER_VALIDATE_INT</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

 <span class="token function">echo</span><span class="token punctuation">(</span><span class="token string">"Integer is not valid"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>

<span class="token keyword">else</span> <span class="token punctuation">{</span>

 <span class="token function">echo</span><span class="token punctuation">(</span><span class="token string">"Integer is valid"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第3章-表单" tabindex="-1"><a class="header-anchor" href="#第3章-表单" aria-hidden="true">#</a> 第3章 表单</h2>
<ol>
<li><strong>表单处理</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span>html<span class="token operator">></span>

<span class="token operator">&lt;</span>body<span class="token operator">></span>


<span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string">"welcome.php"</span> method<span class="token operator">=</span><span class="token string">"post"</span><span class="token operator">></span>

<span class="token literal-property property">Name</span><span class="token operator">:</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"name"</span><span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">></span>

<span class="token constant">E</span><span class="token operator">-</span>mail<span class="token operator">:</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"email"</span><span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">></span>

<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>


<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="2">
<li><strong>表单验证</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token comment">// 定义变量并设置为空值</span>

$name <span class="token operator">=</span> $email <span class="token operator">=</span> $gender <span class="token operator">=</span> $comment <span class="token operator">=</span> $website <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>


<span class="token keyword">if</span> <span class="token punctuation">(</span>$_SERVER<span class="token punctuation">[</span><span class="token string">"REQUEST_METHOD"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">"POST"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  $name <span class="token operator">=</span> <span class="token function">test_input</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  $email <span class="token operator">=</span> <span class="token function">test_input</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"email"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  $website <span class="token operator">=</span> <span class="token function">test_input</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"website"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  $comment <span class="token operator">=</span> <span class="token function">test_input</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"comment"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  $gender <span class="token operator">=</span> <span class="token function">test_input</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"gender"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">test_input</span><span class="token punctuation">(</span><span class="token parameter">$data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  $data <span class="token operator">=</span> <span class="token function">trim</span><span class="token punctuation">(</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>

  $data <span class="token operator">=</span> <span class="token function">stripslashes</span><span class="token punctuation">(</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>

  $data <span class="token operator">=</span> <span class="token function">htmlspecialchars</span><span class="token punctuation">(</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> $data<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="3">
<li><strong>表单必填</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> <span class="token constant">HTML</span><span class="token operator">></span> 

<span class="token operator">&lt;</span>html<span class="token operator">></span>

<span class="token operator">&lt;</span>head<span class="token operator">></span>

<span class="token operator">&lt;</span>style<span class="token operator">></span>

<span class="token punctuation">.</span>error <span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token constant">FF0000</span><span class="token punctuation">;</span><span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>

<span class="token operator">&lt;</span>body<span class="token operator">></span> 


<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token comment">// 定义变量并设置为空值</span>

$nameErr <span class="token operator">=</span> $emailErr <span class="token operator">=</span> $genderErr <span class="token operator">=</span> $websiteErr <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>

$name <span class="token operator">=</span> $email <span class="token operator">=</span> $gender <span class="token operator">=</span> $comment <span class="token operator">=</span> $website <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>


<span class="token keyword">if</span> <span class="token punctuation">(</span>$_SERVER<span class="token punctuation">[</span><span class="token string">"REQUEST_METHOD"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">"POST"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">empty</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

     $nameErr <span class="token operator">=</span> <span class="token string">"姓名是必填的"</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

     $name <span class="token operator">=</span> <span class="token function">test_input</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span>

   
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">empty</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"email"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

     $emailErr <span class="token operator">=</span> <span class="token string">"电邮是必填的"</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

     $email <span class="token operator">=</span> <span class="token function">test_input</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"email"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span>

     
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">empty</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"website"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

     $website <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

     $website <span class="token operator">=</span> <span class="token function">test_input</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"website"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span>


   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">empty</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"comment"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

     $comment <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

     $comment <span class="token operator">=</span> <span class="token function">test_input</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"comment"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span>


   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">empty</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"gender"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

     $genderErr <span class="token operator">=</span> <span class="token string">"性别是必选的"</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

     $gender <span class="token operator">=</span> <span class="token function">test_input</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"gender"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">test_input</span><span class="token punctuation">(</span><span class="token parameter">$data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

   $data <span class="token operator">=</span> <span class="token function">trim</span><span class="token punctuation">(</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>

   $data <span class="token operator">=</span> <span class="token function">stripslashes</span><span class="token punctuation">(</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>

   $data <span class="token operator">=</span> <span class="token function">htmlspecialchars</span><span class="token punctuation">(</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token keyword">return</span> $data<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token operator">?</span><span class="token operator">></span>


<span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token constant">PHP</span> 验证实例<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>

<span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"error"</span><span class="token operator">></span><span class="token operator">*</span> 必需的字段<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>

<span class="token operator">&lt;</span>form method<span class="token operator">=</span><span class="token string">"post"</span> action<span class="token operator">=</span><span class="token string">"&lt;?php echo htmlspecialchars($_SERVER["</span><span class="token constant">PHP_SELF</span><span class="token string">"]);?>"</span><span class="token operator">></span> 

   姓名：<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"name"</span><span class="token operator">></span>

   <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"error"</span><span class="token operator">></span><span class="token operator">*</span> <span class="token operator">&lt;</span><span class="token operator">?</span>php echo $nameErr<span class="token punctuation">;</span><span class="token operator">?</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>

   <span class="token operator">&lt;</span>br<span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">></span>

   电邮：<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"email"</span><span class="token operator">></span>

   <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"error"</span><span class="token operator">></span><span class="token operator">*</span> <span class="token operator">&lt;</span><span class="token operator">?</span>php echo $emailErr<span class="token punctuation">;</span><span class="token operator">?</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>

   <span class="token operator">&lt;</span>br<span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">></span>

   网址：<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"website"</span><span class="token operator">></span>

   <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"error"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">?</span>php echo $websiteErr<span class="token punctuation">;</span><span class="token operator">?</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>

   <span class="token operator">&lt;</span>br<span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">></span>

   评论：<span class="token operator">&lt;</span>textarea name<span class="token operator">=</span><span class="token string">"comment"</span> rows<span class="token operator">=</span><span class="token string">"5"</span> cols<span class="token operator">=</span><span class="token string">"40"</span><span class="token operator">></span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="4">
<li><strong>表单url、email验证</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> <span class="token constant">HTML</span><span class="token operator">></span> 

<span class="token operator">&lt;</span>html<span class="token operator">></span>

<span class="token operator">&lt;</span>head<span class="token operator">></span>

<span class="token operator">&lt;</span>style<span class="token operator">></span>

<span class="token punctuation">.</span>error <span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token constant">FF0000</span><span class="token punctuation">;</span><span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>

<span class="token operator">&lt;</span>body<span class="token operator">></span> 


<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token comment">// 定义变量并设置为空值</span>

$nameErr <span class="token operator">=</span> $emailErr <span class="token operator">=</span> $genderErr <span class="token operator">=</span> $websiteErr <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>

$name <span class="token operator">=</span> $email <span class="token operator">=</span> $gender <span class="token operator">=</span> $comment <span class="token operator">=</span> $website <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>


<span class="token keyword">if</span> <span class="token punctuation">(</span>$_SERVER<span class="token punctuation">[</span><span class="token string">"REQUEST_METHOD"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">"POST"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">empty</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

     $nameErr <span class="token operator">=</span> <span class="token string">"姓名是必填的"</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

     $name <span class="token operator">=</span> <span class="token function">test_input</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

     <span class="token comment">// 检查姓名是否包含字母和空白字符</span>

     <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">preg_match</span><span class="token punctuation">(</span><span class="token string">"/^[a-zA-Z ]*$/"</span><span class="token punctuation">,</span>$name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

       $nameErr <span class="token operator">=</span> <span class="token string">"只允许字母和空格"</span><span class="token punctuation">;</span> 

     <span class="token punctuation">}</span>

   <span class="token punctuation">}</span>

   
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">empty</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"email"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

     $emailErr <span class="token operator">=</span> <span class="token string">"电邮是必填的"</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

     $email <span class="token operator">=</span> <span class="token function">test_input</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"email"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

     <span class="token comment">// 检查电子邮件地址语法是否有效</span>

     <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">preg_match</span><span class="token punctuation">(</span><span class="token string">"/([\w\-]+\@[\w\-]+\.[\w\-]+)/"</span><span class="token punctuation">,</span>$email<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

       $emailErr <span class="token operator">=</span> <span class="token string">"无效的 email 格式"</span><span class="token punctuation">;</span> 

     <span class="token punctuation">}</span>

   <span class="token punctuation">}</span>

     
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">empty</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"website"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

     $website <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

     $website <span class="token operator">=</span> <span class="token function">test_input</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"website"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

     <span class="token comment">// 检查 URL 地址语法是否有效（正则表达式也允许 URL 中的斜杠）</span>

     <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">preg_match</span><span class="token punctuation">(</span><span class="token string">"/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&amp;@#\/%?=~_|!:,.;]*[-a-z0-9+&amp;@#\/%=~_|]/i"</span><span class="token punctuation">,</span>$website<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

       $websiteErr <span class="token operator">=</span> <span class="token string">"无效的 URL"</span><span class="token punctuation">;</span> 

     <span class="token punctuation">}</span>

   <span class="token punctuation">}</span>


   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">empty</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"comment"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

     $comment <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

     $comment <span class="token operator">=</span> <span class="token function">test_input</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"comment"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span>


   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">empty</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"gender"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

     $genderErr <span class="token operator">=</span> <span class="token string">"性别是必选的"</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

     $gender <span class="token operator">=</span> <span class="token function">test_input</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"gender"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">test_input</span><span class="token punctuation">(</span><span class="token parameter">$data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

   $data <span class="token operator">=</span> <span class="token function">trim</span><span class="token punctuation">(</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>

   $data <span class="token operator">=</span> <span class="token function">stripslashes</span><span class="token punctuation">(</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>

   $data <span class="token operator">=</span> <span class="token function">htmlspecialchars</span><span class="token punctuation">(</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token keyword">return</span> $data<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token operator">?</span><span class="token operator">></span>


<span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token constant">PHP</span> 验证实例<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>

<span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"error"</span><span class="token operator">></span><span class="token operator">*</span> 必需的字段<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>

<span class="token operator">&lt;</span>form method<span class="token operator">=</span><span class="token string">"post"</span> action<span class="token operator">=</span><span class="token string">"&lt;?php echo htmlspecialchars($_SERVER["</span><span class="token constant">PHP_SELF</span><span class="token string">"]);?>"</span><span class="token operator">></span> 

   姓名：<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"name"</span><span class="token operator">></span>

   <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"error"</span><span class="token operator">></span><span class="token operator">*</span> <span class="token operator">&lt;</span><span class="token operator">?</span>php echo $nameErr<span class="token punctuation">;</span><span class="token operator">?</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>

   <span class="token operator">&lt;</span>br<span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">></span>

   电邮：<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"email"</span><span class="token operator">></span>

   <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"error"</span><span class="token operator">></span><span class="token operator">*</span> <span class="token operator">&lt;</span><span class="token operator">?</span>php echo $emailErr<span class="token punctuation">;</span><span class="token operator">?</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>

   <span class="token operator">&lt;</span>br<span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">></span>

   网址：<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"website"</span><span class="token operator">></span>

   <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"error"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">?</span>php echo $websiteErr<span class="token punctuation">;</span><span class="token operator">?</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>

   <span class="token operator">&lt;</span>br<span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">></span>

   评论：<span class="token operator">&lt;</span>textarea name<span class="token operator">=</span><span class="token string">"comment"</span> rows<span class="token operator">=</span><span class="token string">"5"</span> cols<span class="token operator">=</span><span class="token string">"40"</span><span class="token operator">></span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="5">
<li><strong>表单完成</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> <span class="token constant">HTML</span><span class="token operator">></span> 

<span class="token operator">&lt;</span>html<span class="token operator">></span>

<span class="token operator">&lt;</span>head<span class="token operator">></span>

<span class="token operator">&lt;</span>style<span class="token operator">></span>

<span class="token punctuation">.</span>error <span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token constant">FF0000</span><span class="token punctuation">;</span><span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>

<span class="token operator">&lt;</span>body<span class="token operator">></span> 


<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token comment">// 定义变量并设置为空值</span>

$nameErr <span class="token operator">=</span> $emailErr <span class="token operator">=</span> $genderErr <span class="token operator">=</span> $websiteErr <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>

$name <span class="token operator">=</span> $email <span class="token operator">=</span> $gender <span class="token operator">=</span> $comment <span class="token operator">=</span> $website <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>


<span class="token keyword">if</span> <span class="token punctuation">(</span>$_SERVER<span class="token punctuation">[</span><span class="token string">"REQUEST_METHOD"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">"POST"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">empty</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

     $nameErr <span class="token operator">=</span> <span class="token string">"姓名是必填的"</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

     $name <span class="token operator">=</span> <span class="token function">test_input</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

     <span class="token comment">// 检查姓名是否包含字母和空白字符</span>

     <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">preg_match</span><span class="token punctuation">(</span><span class="token string">"/^[a-zA-Z ]*$/"</span><span class="token punctuation">,</span>$name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

       $nameErr <span class="token operator">=</span> <span class="token string">"只允许字母和空格"</span><span class="token punctuation">;</span> 

     <span class="token punctuation">}</span>

   <span class="token punctuation">}</span>

   
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">empty</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"email"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

     $emailErr <span class="token operator">=</span> <span class="token string">"电邮是必填的"</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

     $email <span class="token operator">=</span> <span class="token function">test_input</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"email"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

     <span class="token comment">// 检查电子邮件地址语法是否有效</span>

     <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">preg_match</span><span class="token punctuation">(</span><span class="token string">"/([\w\-]+\@[\w\-]+\.[\w\-]+)/"</span><span class="token punctuation">,</span>$email<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

       $emailErr <span class="token operator">=</span> <span class="token string">"无效的 email 格式"</span><span class="token punctuation">;</span> 

     <span class="token punctuation">}</span>

   <span class="token punctuation">}</span>

     
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">empty</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"website"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

     $website <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

     $website <span class="token operator">=</span> <span class="token function">test_input</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"website"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

     <span class="token comment">// 检查 URL 地址语法是否有效（正则表达式也允许 URL 中的斜杠）</span>

     <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">preg_match</span><span class="token punctuation">(</span><span class="token string">"/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&amp;@#\/%?=~_|!:,.;]*[-a-z0-9+&amp;@#\/%=~_|]/i"</span><span class="token punctuation">,</span>$website<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

       $websiteErr <span class="token operator">=</span> <span class="token string">"无效的 URL"</span><span class="token punctuation">;</span> 

     <span class="token punctuation">}</span>

   <span class="token punctuation">}</span>


   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">empty</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"comment"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

     $comment <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

     $comment <span class="token operator">=</span> <span class="token function">test_input</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"comment"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span>


   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">empty</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"gender"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

     $genderErr <span class="token operator">=</span> <span class="token string">"性别是必选的"</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

     $gender <span class="token operator">=</span> <span class="token function">test_input</span><span class="token punctuation">(</span>$_POST<span class="token punctuation">[</span><span class="token string">"gender"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">test_input</span><span class="token punctuation">(</span><span class="token parameter">$data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

   $data <span class="token operator">=</span> <span class="token function">trim</span><span class="token punctuation">(</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>

   $data <span class="token operator">=</span> <span class="token function">stripslashes</span><span class="token punctuation">(</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>

   $data <span class="token operator">=</span> <span class="token function">htmlspecialchars</span><span class="token punctuation">(</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token keyword">return</span> $data<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token operator">?</span><span class="token operator">></span>


<span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token constant">PHP</span> 验证实例<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>

<span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"error"</span><span class="token operator">></span><span class="token operator">*</span> 必需的字段<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>

<span class="token operator">&lt;</span>form method<span class="token operator">=</span><span class="token string">"post"</span> action<span class="token operator">=</span><span class="token string">"&lt;?php echo htmlspecialchars($_SERVER["</span><span class="token constant">PHP_SELF</span><span class="token string">"]);?>"</span><span class="token operator">></span> 

   姓名：<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"name"</span><span class="token operator">></span>

   <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"error"</span><span class="token operator">></span><span class="token operator">*</span> <span class="token operator">&lt;</span><span class="token operator">?</span>php echo $nameErr<span class="token punctuation">;</span><span class="token operator">?</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>

   <span class="token operator">&lt;</span>br<span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">></span>

   电邮：<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"email"</span><span class="token operator">></span>

   <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"error"</span><span class="token operator">></span><span class="token operator">*</span> <span class="token operator">&lt;</span><span class="token operator">?</span>php echo $emailErr<span class="token punctuation">;</span><span class="token operator">?</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>

   <span class="token operator">&lt;</span>br<span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">></span>

   网址：<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"website"</span><span class="token operator">></span>

   <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"error"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">?</span>php echo $websiteErr<span class="token punctuation">;</span><span class="token operator">?</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>

   <span class="token operator">&lt;</span>br<span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">></span>

   评论：<span class="token operator">&lt;</span>textarea name<span class="token operator">=</span><span class="token string">"comment"</span> rows<span class="token operator">=</span><span class="token string">"5"</span> cols<span class="token operator">=</span><span class="token string">"40"</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第4章-xml" tabindex="-1"><a class="header-anchor" href="#第4章-xml" aria-hidden="true">#</a> 第4章 XML</h2>
<ol>
<li>
<p><strong>expat</strong></p>
<p>基于时间的解析器</p>
<p><code v-pre>xml文件</code></p>
</li>
</ol>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>
<span class="token prolog">&lt;?xml version="1.0" encoding="ISO-8859-1"?></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>note</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>to</span><span class="token punctuation">></span></span>George<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>to</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>from</span><span class="token punctuation">></span></span>John<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>from</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>heading</span><span class="token punctuation">></span></span>Reminder<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>heading</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>Don't forget the meeting!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>note</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php


<span class="token comment">//Initialize the XML parser</span>

$parser<span class="token operator">=</span><span class="token function">xml_parser_create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//Function to use at the start of an element</span>

<span class="token keyword">function</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token parameter">$parser<span class="token punctuation">,</span>$element_name<span class="token punctuation">,</span>$element_attrs</span><span class="token punctuation">)</span>

  <span class="token punctuation">{</span>

  <span class="token keyword">switch</span><span class="token punctuation">(</span>$element_name<span class="token punctuation">)</span>

    <span class="token punctuation">{</span>

    <span class="token keyword">case</span> <span class="token string">"NOTE"</span><span class="token operator">:</span>

    echo <span class="token string">"-- Note --&lt;br />"</span><span class="token punctuation">;</span>

    <span class="token keyword">break</span><span class="token punctuation">;</span> 

    <span class="token keyword">case</span> <span class="token string">"TO"</span><span class="token operator">:</span>

    echo <span class="token string">"To: "</span><span class="token punctuation">;</span>

    <span class="token keyword">break</span><span class="token punctuation">;</span> 

    <span class="token keyword">case</span> <span class="token string">"FROM"</span><span class="token operator">:</span>

    echo <span class="token string">"From: "</span><span class="token punctuation">;</span>

    <span class="token keyword">break</span><span class="token punctuation">;</span> 

    <span class="token keyword">case</span> <span class="token string">"HEADING"</span><span class="token operator">:</span>

    echo <span class="token string">"Heading: "</span><span class="token punctuation">;</span>

    <span class="token keyword">break</span><span class="token punctuation">;</span> 

    <span class="token keyword">case</span> <span class="token string">"BODY"</span><span class="token operator">:</span>

    echo <span class="token string">"Message: "</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

  <span class="token punctuation">}</span>


<span class="token comment">//Function to use at the end of an element</span>

<span class="token keyword">function</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token parameter">$parser<span class="token punctuation">,</span>$element_name</span><span class="token punctuation">)</span>

  <span class="token punctuation">{</span>

  echo <span class="token string">"&lt;br />"</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>


<span class="token comment">//Function to use when finding character data</span>

<span class="token keyword">function</span> <span class="token function">char</span><span class="token punctuation">(</span><span class="token parameter">$parser<span class="token punctuation">,</span>$data</span><span class="token punctuation">)</span>

  <span class="token punctuation">{</span>

  echo $data<span class="token punctuation">;</span>

  <span class="token punctuation">}</span>


<span class="token comment">//Specify element handler</span>

<span class="token function">xml_set_element_handler</span><span class="token punctuation">(</span>$parser<span class="token punctuation">,</span><span class="token string">"start"</span><span class="token punctuation">,</span><span class="token string">"stop"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//Specify data handler</span>

<span class="token function">xml_set_character_data_handler</span><span class="token punctuation">(</span>$parser<span class="token punctuation">,</span><span class="token string">"char"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//Open XML file</span>

$fp<span class="token operator">=</span><span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">"test.xml"</span><span class="token punctuation">,</span><span class="token string">"r"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//Read data</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span>$data<span class="token operator">=</span><span class="token function">fread</span><span class="token punctuation">(</span>$fp<span class="token punctuation">,</span><span class="token number">4096</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token punctuation">{</span>

  <span class="token function">xml_parse</span><span class="token punctuation">(</span>$parser<span class="token punctuation">,</span>$data<span class="token punctuation">,</span><span class="token function">feof</span><span class="token punctuation">(</span>$fp<span class="token punctuation">)</span><span class="token punctuation">)</span> or 

  <span class="token function">die</span> <span class="token punctuation">(</span><span class="token function">sprintf</span><span class="token punctuation">(</span><span class="token string">"XML Error: %s at line %d"</span><span class="token punctuation">,</span> 

  <span class="token function">xml_error_string</span><span class="token punctuation">(</span><span class="token function">xml_get_error_code</span><span class="token punctuation">(</span>$parser<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token function">xml_get_current_line_number</span><span class="token punctuation">(</span>$parser<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>


<span class="token comment">//Free the XML parser</span>

<span class="token function">xml_parser_free</span><span class="token punctuation">(</span>$parser<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token operator">?</span><span class="token operator">></span>


<span class="token comment">//输出</span>

<span class="token operator">--</span> Note <span class="token operator">--</span>

<span class="token literal-property property">To</span><span class="token operator">:</span> George

<span class="token literal-property property">From</span><span class="token operator">:</span> John

<span class="token literal-property property">Heading</span><span class="token operator">:</span> Reminder

<span class="token literal-property property">Message</span><span class="token operator">:</span> Don't forget the meeting<span class="token operator">!</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="2">
<li>
<p><strong>dom</strong></p>
<p>基于树的解析器</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token comment">//脚本</span>

<span class="token operator">&lt;</span><span class="token operator">?</span>php

$xmlDoc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DOMDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

$xmlDoc<span class="token operator">-</span><span class="token operator">></span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">"note.xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


$x <span class="token operator">=</span> $xmlDoc<span class="token operator">-</span><span class="token operator">></span>documentElement<span class="token punctuation">;</span>

<span class="token function">foreach</span> <span class="token punctuation">(</span><span class="token parameter">$x<span class="token operator">-</span><span class="token operator">></span>childNodes <span class="token constant">AS</span> $item</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>

   print $item<span class="token operator">-</span><span class="token operator">></span>nodeName <span class="token punctuation">.</span> <span class="token string">" = "</span> <span class="token punctuation">.</span> $item<span class="token operator">-</span><span class="token operator">></span>nodeValue <span class="token punctuation">.</span> <span class="token string">"&lt;br />"</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

        <span class="token operator">?</span><span class="token operator">></span>


<span class="token comment">//输出</span>

#text <span class="token operator">=</span>

        to <span class="token operator">=</span> George

#text <span class="token operator">=</span>

        from <span class="token operator">=</span> John

#text <span class="token operator">=</span>

        heading <span class="token operator">=</span> Reminder

#text <span class="token operator">=</span>

        body <span class="token operator">=</span> Don't forget the meeting<span class="token operator">!</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="3">
<li>
<p><strong>simpleXML</strong></p>
<p>更简单，但如果需要命名空间时不建议使用。</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

$xml <span class="token operator">=</span> <span class="token function">simplexml_load_file</span><span class="token punctuation">(</span><span class="token string">"test.xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


echo $xml<span class="token operator">-</span><span class="token operator">></span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">"&lt;br />"</span><span class="token punctuation">;</span>


<span class="token function">foreach</span><span class="token punctuation">(</span><span class="token parameter">$xml<span class="token operator">-</span><span class="token operator">></span><span class="token function">children</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> $child</span><span class="token punctuation">)</span>

  <span class="token punctuation">{</span>

  echo $child<span class="token operator">-</span><span class="token operator">></span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token string">": "</span> <span class="token punctuation">.</span> $child <span class="token punctuation">.</span> <span class="token string">"&lt;br />"</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

<span class="token operator">?</span><span class="token operator">></span>


<span class="token comment">//输出</span>

note

<span class="token literal-property property">to</span><span class="token operator">:</span> George

<span class="token literal-property property">from</span><span class="token operator">:</span> John

<span class="token literal-property property">heading</span><span class="token operator">:</span> Reminder

<span class="token literal-property property">body</span><span class="token operator">:</span> Don't forget the meeting<span class="token operator">!</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第5章-数据库" tabindex="-1"><a class="header-anchor" href="#第5章-数据库" aria-hidden="true">#</a> 第5章 数据库</h2>
<ol>
<li><strong>连接数据库</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token comment">//连接数据库</span>

$con <span class="token operator">=</span> <span class="token function">mysql_connect</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">,</span><span class="token string">"peter"</span><span class="token punctuation">,</span><span class="token string">"abc123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>$con<span class="token punctuation">)</span>

  <span class="token punctuation">{</span>

  <span class="token function">die</span><span class="token punctuation">(</span><span class="token string">'Could not connect: '</span> <span class="token punctuation">.</span> <span class="token function">mysql_error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>


<span class="token comment">// 创建数据库</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">mysql_query</span><span class="token punctuation">(</span><span class="token string">"CREATE DATABASE my_db"</span><span class="token punctuation">,</span>$con<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token punctuation">{</span>

  echo <span class="token string">"Database created"</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

<span class="token keyword">else</span>

  <span class="token punctuation">{</span>

  echo <span class="token string">"Error creating database: "</span> <span class="token punctuation">.</span> <span class="token function">mysql_error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

  
  <span class="token comment">// 创建新表</span>

<span class="token function">mysql_select_db</span><span class="token punctuation">(</span><span class="token string">"my_db"</span><span class="token punctuation">,</span> $con<span class="token punctuation">)</span><span class="token punctuation">;</span>

$sql <span class="token operator">=</span> "<span class="token constant">CREATE</span> <span class="token constant">TABLE</span> <span class="token function">Persons</span> 

<span class="token punctuation">(</span>

personID int <span class="token constant">NOT</span> <span class="token constant">NULL</span> <span class="token constant">AUTO_INCREMENT</span><span class="token punctuation">,</span> 

<span class="token constant">PRIMARY</span> <span class="token constant">KEY</span><span class="token punctuation">(</span>personID<span class="token punctuation">)</span><span class="token punctuation">,</span>

FirstName <span class="token function">varchar</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

LastName <span class="token function">varchar</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

Age int

<span class="token punctuation">)</span>"<span class="token punctuation">;</span>

<span class="token function">mysql_query</span><span class="token punctuation">(</span>$sql<span class="token punctuation">,</span>$con<span class="token punctuation">)</span><span class="token punctuation">;</span>

 
<span class="token comment">//插入数据</span>

<span class="token function">mysql_query</span><span class="token punctuation">(</span>"<span class="token constant">INSERT</span> <span class="token constant">INTO</span> <span class="token function">Persons</span> <span class="token punctuation">(</span>FirstName<span class="token punctuation">,</span> LastName<span class="token punctuation">,</span> Age<span class="token punctuation">)</span> 

<span class="token constant">VALUES</span> <span class="token punctuation">(</span><span class="token string">'Peter'</span><span class="token punctuation">,</span> <span class="token string">'Griffin'</span><span class="token punctuation">,</span> <span class="token string">'35'</span><span class="token punctuation">)</span>"<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">mysql_query</span><span class="token punctuation">(</span>"<span class="token constant">INSERT</span> <span class="token constant">INTO</span> <span class="token function">Persons</span> <span class="token punctuation">(</span>FirstName<span class="token punctuation">,</span> LastName<span class="token punctuation">,</span> Age<span class="token punctuation">)</span> 

<span class="token constant">VALUES</span> <span class="token punctuation">(</span><span class="token string">'Glenn'</span><span class="token punctuation">,</span> <span class="token string">'Quagmire'</span><span class="token punctuation">,</span> <span class="token string">'33'</span><span class="token punctuation">)</span>"<span class="token punctuation">)</span><span class="token punctuation">;</span>


  
<span class="token comment">//关闭数据库</span>

<span class="token function">mysql_close</span><span class="token punctuation">(</span>$con<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="2">
<li><strong>表单数据插入数据库</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span>html<span class="token operator">></span>

<span class="token operator">&lt;</span>body<span class="token operator">></span>

<span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string">"insert.php"</span> method<span class="token operator">=</span><span class="token string">"post"</span><span class="token operator">></span>

<span class="token literal-property property">Firstname</span><span class="token operator">:</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"firstname"</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token literal-property property">Lastname</span><span class="token operator">:</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"lastname"</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token literal-property property">Age</span><span class="token operator">:</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"age"</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"submit"</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

$con <span class="token operator">=</span> <span class="token function">mysql_connect</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">,</span><span class="token string">"peter"</span><span class="token punctuation">,</span><span class="token string">"abc123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>$con<span class="token punctuation">)</span>

  <span class="token punctuation">{</span>

  <span class="token function">die</span><span class="token punctuation">(</span><span class="token string">'Could not connect: '</span> <span class="token punctuation">.</span> <span class="token function">mysql_error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>


<span class="token function">mysql_select_db</span><span class="token punctuation">(</span><span class="token string">"my_db"</span><span class="token punctuation">,</span> $con<span class="token punctuation">)</span><span class="token punctuation">;</span>


$sql<span class="token operator">=</span>"<span class="token constant">INSERT</span> <span class="token constant">INTO</span> <span class="token function">Persons</span> <span class="token punctuation">(</span>FirstName<span class="token punctuation">,</span> LastName<span class="token punctuation">,</span> Age<span class="token punctuation">)</span>

<span class="token constant">VALUES</span>

<span class="token punctuation">(</span><span class="token string">'$_POST[firstname]'</span><span class="token punctuation">,</span><span class="token string">'$_POST[lastname]'</span><span class="token punctuation">,</span><span class="token string">'$_POST[age]'</span><span class="token punctuation">)</span>"<span class="token punctuation">;</span>


<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">mysql_query</span><span class="token punctuation">(</span>$sql<span class="token punctuation">,</span>$con<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token punctuation">{</span>

  <span class="token function">die</span><span class="token punctuation">(</span><span class="token string">'Error: '</span> <span class="token punctuation">.</span> <span class="token function">mysql_error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

echo <span class="token string">"1 record added"</span><span class="token punctuation">;</span>


<span class="token function">mysql_close</span><span class="token punctuation">(</span>$con<span class="token punctuation">)</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li><strong>查询数据库展示在html中</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

$con <span class="token operator">=</span> <span class="token function">mysql_connect</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">,</span><span class="token string">"peter"</span><span class="token punctuation">,</span><span class="token string">"abc123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>$con<span class="token punctuation">)</span>

  <span class="token punctuation">{</span>

  <span class="token function">die</span><span class="token punctuation">(</span><span class="token string">'Could not connect: '</span> <span class="token punctuation">.</span> <span class="token function">mysql_error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>


<span class="token function">mysql_select_db</span><span class="token punctuation">(</span><span class="token string">"my_db"</span><span class="token punctuation">,</span> $con<span class="token punctuation">)</span><span class="token punctuation">;</span>


$result <span class="token operator">=</span> <span class="token function">mysql_query</span><span class="token punctuation">(</span><span class="token string">"SELECT * FROM Persons"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


echo "<span class="token operator">&lt;</span>table border<span class="token operator">=</span><span class="token string">'1'</span><span class="token operator">></span>

<span class="token operator">&lt;</span>tr<span class="token operator">></span>

<span class="token operator">&lt;</span>th<span class="token operator">></span>Firstname<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">></span>

<span class="token operator">&lt;</span>th<span class="token operator">></span>Lastname<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>tr<span class="token operator">></span>"<span class="token punctuation">;</span>


<span class="token keyword">while</span><span class="token punctuation">(</span>$row <span class="token operator">=</span> <span class="token function">mysql_fetch_array</span><span class="token punctuation">(</span>$result<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token punctuation">{</span>

  echo <span class="token string">"&lt;tr>"</span><span class="token punctuation">;</span>

  echo <span class="token string">"&lt;td>"</span> <span class="token punctuation">.</span> $row<span class="token punctuation">[</span><span class="token string">'FirstName'</span><span class="token punctuation">]</span> <span class="token punctuation">.</span> <span class="token string">"&lt;/td>"</span><span class="token punctuation">;</span>

  echo <span class="token string">"&lt;td>"</span> <span class="token punctuation">.</span> $row<span class="token punctuation">[</span><span class="token string">'LastName'</span><span class="token punctuation">]</span> <span class="token punctuation">.</span> <span class="token string">"&lt;/td>"</span><span class="token punctuation">;</span>

  echo <span class="token string">"&lt;/tr>"</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

echo <span class="token string">"&lt;/table>"</span><span class="token punctuation">;</span>


<span class="token function">mysql_close</span><span class="token punctuation">(</span>$con<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="4">
<li><strong>where</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

$con <span class="token operator">=</span> <span class="token function">mysql_connect</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">,</span><span class="token string">"peter"</span><span class="token punctuation">,</span><span class="token string">"abc123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>$con<span class="token punctuation">)</span>

  <span class="token punctuation">{</span>

  <span class="token function">die</span><span class="token punctuation">(</span><span class="token string">'Could not connect: '</span> <span class="token punctuation">.</span> <span class="token function">mysql_error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>


<span class="token function">mysql_select_db</span><span class="token punctuation">(</span><span class="token string">"my_db"</span><span class="token punctuation">,</span> $con<span class="token punctuation">)</span><span class="token punctuation">;</span>


$result <span class="token operator">=</span> <span class="token function">mysql_query</span><span class="token punctuation">(</span>"<span class="token constant">SELECT</span> <span class="token operator">*</span> <span class="token constant">FROM</span> Persons

<span class="token constant">WHERE</span> FirstName<span class="token operator">=</span><span class="token string">'Peter'</span>"<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">while</span><span class="token punctuation">(</span>$row <span class="token operator">=</span> <span class="token function">mysql_fetch_array</span><span class="token punctuation">(</span>$result<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token punctuation">{</span>

  echo $row<span class="token punctuation">[</span><span class="token string">'FirstName'</span><span class="token punctuation">]</span> <span class="token punctuation">.</span> <span class="token string">" "</span> <span class="token punctuation">.</span> $row<span class="token punctuation">[</span><span class="token string">'LastName'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  echo <span class="token string">"&lt;br />"</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>


<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="5">
<li><strong>order by</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

$con <span class="token operator">=</span> <span class="token function">mysql_connect</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">,</span><span class="token string">"peter"</span><span class="token punctuation">,</span><span class="token string">"abc123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>$con<span class="token punctuation">)</span>

  <span class="token punctuation">{</span>

  <span class="token function">die</span><span class="token punctuation">(</span><span class="token string">'Could not connect: '</span> <span class="token punctuation">.</span> <span class="token function">mysql_error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>


<span class="token function">mysql_select_db</span><span class="token punctuation">(</span><span class="token string">"my_db"</span><span class="token punctuation">,</span> $con<span class="token punctuation">)</span><span class="token punctuation">;</span>

    
    <span class="token comment">//升序排列</span>

$result <span class="token operator">=</span> <span class="token function">mysql_query</span><span class="token punctuation">(</span><span class="token string">"SELECT * FROM Persons ORDER BY age"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//降序排列</span>

    <span class="token comment">//ORDER BY column_name DESC</span>

<span class="token keyword">while</span><span class="token punctuation">(</span>$row <span class="token operator">=</span> <span class="token function">mysql_fetch_array</span><span class="token punctuation">(</span>$result<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token punctuation">{</span>

  echo $row<span class="token punctuation">[</span><span class="token string">'FirstName'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  echo <span class="token string">" "</span> <span class="token punctuation">.</span> $row<span class="token punctuation">[</span><span class="token string">'LastName'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  echo <span class="token string">" "</span> <span class="token punctuation">.</span> $row<span class="token punctuation">[</span><span class="token string">'Age'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  echo <span class="token string">"&lt;br />"</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>


<span class="token function">mysql_close</span><span class="token punctuation">(</span>$con<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="6">
<li><strong>update</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

$con <span class="token operator">=</span> <span class="token function">mysql_connect</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">,</span><span class="token string">"peter"</span><span class="token punctuation">,</span><span class="token string">"abc123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>$con<span class="token punctuation">)</span>

  <span class="token punctuation">{</span>

  <span class="token function">die</span><span class="token punctuation">(</span><span class="token string">'Could not connect: '</span> <span class="token punctuation">.</span> <span class="token function">mysql_error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>


<span class="token function">mysql_select_db</span><span class="token punctuation">(</span><span class="token string">"my_db"</span><span class="token punctuation">,</span> $con<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token function">mysql_query</span><span class="token punctuation">(</span>"<span class="token constant">UPDATE</span> Persons <span class="token constant">SET</span> Age <span class="token operator">=</span> <span class="token string">'36'</span>

<span class="token constant">WHERE</span> FirstName <span class="token operator">=</span> <span class="token string">'Peter'</span> <span class="token constant">AND</span> LastName <span class="token operator">=</span> <span class="token string">'Griffin'</span>"<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token function">mysql_close</span><span class="token punctuation">(</span>$con<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="7">
<li><strong>delete</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">?</span>php

$con <span class="token operator">=</span> <span class="token function">mysql_connect</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">,</span><span class="token string">"peter"</span><span class="token punctuation">,</span><span class="token string">"abc123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>$con<span class="token punctuation">)</span>

  <span class="token punctuation">{</span>

  <span class="token function">die</span><span class="token punctuation">(</span><span class="token string">'Could not connect: '</span> <span class="token punctuation">.</span> <span class="token function">mysql_error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>


<span class="token function">mysql_select_db</span><span class="token punctuation">(</span><span class="token string">"my_db"</span><span class="token punctuation">,</span> $con<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token function">mysql_query</span><span class="token punctuation">(</span><span class="token string">"DELETE FROM Persons WHERE LastName='Griffin'"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token function">mysql_close</span><span class="token punctuation">(</span>$con<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<ol start="8">
<li><strong>odbc连接</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span>html<span class="token operator">></span>

<span class="token operator">&lt;</span>body<span class="token operator">></span>


<span class="token operator">&lt;</span><span class="token operator">?</span>php

$conn<span class="token operator">=</span><span class="token function">odbc_connect</span><span class="token punctuation">(</span><span class="token string">'northwind'</span><span class="token punctuation">,</span><span class="token string">''</span><span class="token punctuation">,</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>$conn<span class="token punctuation">)</span>

  <span class="token punctuation">{</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token string">"Connection Failed: "</span> <span class="token punctuation">.</span> $conn<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>

$sql<span class="token operator">=</span><span class="token string">"SELECT * FROM customers"</span><span class="token punctuation">;</span>

$rs<span class="token operator">=</span><span class="token function">odbc_exec</span><span class="token punctuation">(</span>$conn<span class="token punctuation">,</span>$sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>$rs<span class="token punctuation">)</span>

  <span class="token punctuation">{</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token string">"Error in SQL"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>

echo <span class="token string">"&lt;table>&lt;tr>"</span><span class="token punctuation">;</span>

echo <span class="token string">"&lt;th>Companyname&lt;/th>"</span><span class="token punctuation">;</span>

echo <span class="token string">"&lt;th>Contactname&lt;/th>&lt;/tr>"</span><span class="token punctuation">;</span>

 
 <span class="token comment">//取回记录</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">odbc_fetch_row</span><span class="token punctuation">(</span>$rs<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>

   
     <span class="token comment">//从记录中取回字段</span>

  $compname<span class="token operator">=</span><span class="token function">odbc_result</span><span class="token punctuation">(</span>$rs<span class="token punctuation">,</span><span class="token string">"CompanyName"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  $conname<span class="token operator">=</span><span class="token function">odbc_result</span><span class="token punctuation">(</span>$rs<span class="token punctuation">,</span><span class="token string">"ContactName"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  echo <span class="token string">"&lt;tr>&lt;td>$compname&lt;/td>"</span><span class="token punctuation">;</span>

  echo <span class="token string">"&lt;td>$conname&lt;/td>&lt;/tr>"</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>


<span class="token comment">//odbc_close()函数用于关闭 ODBC 连接。</span>

<span class="token function">odbc_close</span><span class="token punctuation">(</span>$conn<span class="token punctuation">)</span><span class="token punctuation">;</span>


echo <span class="token string">"&lt;/table>"</span><span class="token punctuation">;</span>

<span class="token operator">?</span><span class="token operator">></span>


<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第6章-pdo" tabindex="-1"><a class="header-anchor" href="#第6章-pdo" aria-hidden="true">#</a> 第6章 PDO</h2>
<ol>
<li>
<p><strong>PDO 简介</strong></p>
<p>PHP 数据对象 （PDO） 扩展为PHP访问数据库定义了一个轻量级的一致接口。</p>
<p>PDO 提供了一个数据访问抽象层，这意味着，不管使用哪种数据库，都可以用相同的函数（方法）来查询和获取数据。</p>
<p>PDO随PHP5.1发行，在PHP5.0的PECL扩展中也可以使用，无法运行于之前的PHP版本。</p>
</li>
</ol>
<hr>
<ol start="2">
<li>
<p><strong>PDO 安装</strong></p>
<p>你可以通过 PHP 的 phpinfo() 函数来查看是否安装了PDO扩展。</p>
<p>在 Unix 系统上安装 PDO</p>
<p>在Unix上或Linux上你需要添加以下扩展：</p>
<p><code v-pre>extension=pdo.so</code></p>
</li>
</ol>
<p>各种数据库扩展：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
;extension=php_pdo_firebird.dll

;extension=php_pdo_informix.dll

;extension=php_pdo_mssql.dll

;extension=php_pdo_mysql.dll

;extension=php_pdo_oci.dll

;extension=php_pdo_oci8.dll

;extension=php_pdo_odbc.dll

;extension=php_pdo_pgsql.dll

;extension=php_pdo_sqlite.dll

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在设定好这些配置后，我们需要重启PHP 或 Web服务器。</p>
<p>接下来我们们来看下具体的实例，以下为使用PDO连接MySql数据库的实例：</p>
<p>预定义常量</p>
<p>PHP PDO连接连接管理</p>
<p>PHP PDO 事务与自动提交</p>
<p>PHP PDO 预处理语句与存储过程</p>
<p>PHP PDO 错误与错误处理</p>
<p>PHP PDO 大对象 (LOBs)</p>
<p>PDO 类：</p>
<ul>
<li>
<p>启动一个事务</p>
<p>PDO::beginTransaction</p>
</li>
<li>
<p>提交一个事务</p>
<p>PDO::commit</p>
</li>
<li>
<p>创建一个表示数据库连接的 PDO 实例</p>
<p>PDO::__construct</p>
</li>
<li>
<p>获取跟数据库句柄上一次操作相关的 SQLSTATE</p>
<p>PDO::errorCode</p>
</li>
<li>
<p>返回最后一次操作数据库的错误信息</p>
<p>PDO::errorInfo</p>
</li>
<li>
<p>执行一条 SQL 语句，并返回受影响的行数</p>
<p>PDO::exec</p>
</li>
<li>
<p>取回一个数据库连接的属性</p>
<p>PDO::getAttribute</p>
</li>
<li>
<p>返回一个可用驱动的数组</p>
<p>PDO::getAvailableDrivers</p>
</li>
<li>
<p>检查是否在一个事务内</p>
<p>PDO::inTransaction</p>
</li>
<li>
<p>返回最后插入行的ID或序列值</p>
<p>PDO::lastInsertId</p>
</li>
<li>
<p>备要执行的SQL语句并返回一个 PDOStatement 对象</p>
<p>PDO::prepare</p>
</li>
<li>
<p>执行 SQL 语句，返回PDOStatement对象,可以理解为结果集</p>
<p>PDO::query</p>
</li>
<li>
<p>为SQL语句中的字符串添加引号。</p>
<p>PDO::quote</p>
</li>
<li>
<p>回滚一个事务</p>
<p>PDO::rollBack</p>
</li>
<li>
<p>设置属性</p>
<p>PDO::setAttribute</p>
</li>
</ul>
<p>PDOStatement 类：</p>
<ul>
<li>
<p>绑定一列到一个 PHP 变量</p>
<p>PDOStatement::bindColumn</p>
</li>
<li>
<p>绑定一个参数到指定的变量名</p>
<p>PDOStatement::bindParam</p>
</li>
<li>
<p>把一个值绑定到一个参数</p>
<p>PDOStatement::bindValue</p>
</li>
<li>
<p>关闭游标，使语句能再次被执行。</p>
<p>PDOStatement::closeCursor</p>
</li>
<li>
<p>返回结果集中的列数</p>
<p>PDOStatement::columnCount</p>
</li>
<li>
<p>打印一条 SQL 预处理命令</p>
<p>PDOStatement::debugDumpParams</p>
</li>
<li>
<p>获取跟上一次语句句柄操作相关的 SQLSTATE</p>
<p>PDOStatement::errorCode</p>
</li>
<li>
<p>获取跟上一次语句句柄操作相关的扩展错误信息</p>
<p>PDOStatement::errorInfo</p>
</li>
<li>
<p>执行一条预处理语句</p>
<p>PDOStatement::execute</p>
</li>
<li>
<p>从结果集中获取下一行</p>
<p>PDOStatement::fetch</p>
</li>
<li>
<p>返回一个包含结果集中所有行的数组</p>
<p>PDOStatement::fetchAll</p>
</li>
<li>
<p>从结果集中的下一行返回单独的一列。</p>
<p>PDOStatement::fetchColumn</p>
</li>
<li>
<p>获取下一行并作为一个对象返回。</p>
<p>PDOStatement::fetchObject</p>
</li>
<li>
<p>检索一个语句属性</p>
<p>PDOStatement::getAttribute</p>
</li>
<li>
<p>返回结果集中一列的元数据</p>
<p>PDOStatement::getColumnMeta</p>
</li>
<li>
<p>在一个多行集语句句柄中推进到下一个行集</p>
<p>PDOStatement::nextRowset</p>
</li>
<li>
<p>返回受上一个 SQL 语句影响的行数</p>
<p>PDOStatement::rowCount</p>
</li>
<li>
<p>设置一个语句属性</p>
<p>PDOStatement::setAttribute</p>
</li>
<li>
<p>为语句设置默认的获取模式</p>
<p>PDOStatement::setFetchMode</p>
</li>
</ul>
</div></template>
