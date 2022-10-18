<template><div><h2 id="第1章-算法简介" tabindex="-1"><a class="header-anchor" href="#第1章-算法简介" aria-hidden="true">#</a> 第1章 算法简介</h2>
<p>算法学习路线</p>
<p><img src="https://pic4.zhimg.com/v2-3e2599bc0ca77c5f609fb62e15d9755f_r.jpg" alt="preview" loading="lazy"></p>
<h3 id="_1-1-算法概念" tabindex="-1"><a class="header-anchor" href="#_1-1-算法概念" aria-hidden="true">#</a> 1.1 算法概念</h3>
<p>算法是完成一组任务的指令。</p>
<h3 id="_1-2-时间复杂度" tabindex="-1"><a class="header-anchor" href="#_1-2-时间复杂度" aria-hidden="true">#</a> 1.2 时间复杂度</h3>
<h3 id="_1-2-二分查找" tabindex="-1"><a class="header-anchor" href="#_1-2-二分查找" aria-hidden="true">#</a> 1.2 二分查找</h3>
<p>每次查找中间位置的数，这样就能排除一半的元素，在剩下的元素中继续重复，直到结束。</p>
<p>对于包含n个元素的列表，用二分查找最多需要 log<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mrow></mrow><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4511em;vertical-align:-0.15em;"></span><span class="mord"><span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>n 步。</p>
<p>输入必须是有序的元素列表。</p>
<p>简单例子</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> 二分查找 <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> list<span class="token punctuation">,</span> <span class="token keyword">int</span> item<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> low <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> high <span class="token operator">=</span> list<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;=</span> high<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span> low <span class="token operator">+</span> high <span class="token punctuation">)</span> <span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> guess <span class="token operator">=</span> list<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>guess <span class="token operator">==</span> item<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> mid<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>guess <span class="token operator">></span> item<span class="token punctuation">)</span><span class="token punctuation">{</span>
                high <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>guess <span class="token operator">&lt;</span> item<span class="token punctuation">)</span><span class="token punctuation">{</span>
                low <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> mylist <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">101</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token function">search</span><span class="token punctuation">(</span>mylist<span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-大-o-表示法" tabindex="-1"><a class="header-anchor" href="#_1-3-大-o-表示法" aria-hidden="true">#</a> 1.3  大 O 表示法</h3>
<p>算法的运行时间用大 O 表示法表示。</p>
<p>大 O 表示法指了算法最糟糕情况下的运行时间。</p>
<p>算法的运行时间指的是算法需要的操作数。</p>
<p>一些常见的大O运行时间</p>
<ul>
<li>
<p>O(log n) 对数时间，包括二分查找</p>
</li>
<li>
<p>O(n) 线性时间，包括简单查找</p>
</li>
<li>
<p>O(n * log n) 快速排序</p>
</li>
<li>
<p>O(n<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mrow></mrow><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span></span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>) 选择排序</p>
</li>
<li>
<p>O(n!) 旅行商问题</p>
</li>
</ul>
<h2 id="第2章-排序" tabindex="-1"><a class="header-anchor" href="#第2章-排序" aria-hidden="true">#</a> 第2章 排序</h2>
<p><a href="https://www.cnblogs.com/onepixel/articles/7674659.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/onepixel/articles/7674659.html<ExternalLinkIcon/></a></p>
<p><img src="@source/document/java后端/asset/849589-20190306165258970-1789860540.png" alt="img" loading="lazy"></p>
<p>比较类排序</p>
<p>通过比较来决定元素间的相对次序，由于其时间复杂度不能突破O(nlogn)，因此也称为非线性时间比较类排序。</p>
<p>非比较类排序</p>
<p>不通过比较来决定元素间的相对次序，它可以突破基于比较排序的时间下界，以线性时间运行，因此也称为线性时间非比较类排序。</p>
<p><img src="@source/document/java后端/asset/849589-20180402133438219-1946132192.png" alt="img" loading="lazy"></p>
<h3 id="_2-1-选择排序" tabindex="-1"><a class="header-anchor" href="#_2-1-选择排序" aria-hidden="true">#</a> 2.1 选择排序</h3>
<p>选择排序(Selection-sort)是一种简单直观的排序算法。它的工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。 。</p>
<p><img src="@source/document/java后端/asset/849589-20171015224719590-1433219824.gif" alt="img" loading="lazy"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> 选择排序<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Selection</span> <span class="token punctuation">{</span>

    <span class="token comment">// 排序主代码</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span>  <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token keyword">int</span> minIndex <span class="token operator">=</span> i<span class="token punctuation">;</span>

            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span> <span class="token punctuation">;</span> j<span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length <span class="token punctuation">;</span>j <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">greater</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    minIndex <span class="token operator">=</span> j<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token function">exch</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>i<span class="token punctuation">,</span>minIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token comment">// 比较 元素v 是否大于 元素w</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">greater</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span> v<span class="token punctuation">,</span> <span class="token class-name">Comparable</span> w<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> v<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">//数组元素 i 和 j 交换位置</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">exch</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a <span class="token punctuation">,</span> <span class="token keyword">int</span> i <span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Comparable</span> temp<span class="token punctuation">;</span>
        temp <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>


    <span class="token punctuation">}</span>



<span class="token punctuation">}</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> 选择排序<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SelectionTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token class-name">Selection</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-快速排序" tabindex="-1"><a class="header-anchor" href="#_2-2-快速排序" aria-hidden="true">#</a> 2.2 快速排序</h3>
<p>快速排序的基本思想：通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。</p>
<p><img src="@source/document/java后端/asset/849589-20171015230936371-1413523412.gif" alt="img" loading="lazy"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> 快速排序<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Quick</span> <span class="token punctuation">{</span>

    <span class="token comment">// 对数组a中的元素进行排序</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//        assist = new Comparable[a.length];</span>
        <span class="token keyword">int</span> lo <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> hi <span class="token operator">=</span> a<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">;</span>

        <span class="token function">sort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>lo<span class="token punctuation">,</span>hi<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 排序主代码</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> lo <span class="token punctuation">,</span> <span class="token keyword">int</span> hi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>hi<span class="token operator">&lt;=</span>lo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">int</span> partition <span class="token operator">=</span> <span class="token function">partition</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> lo<span class="token punctuation">,</span> hi<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">sort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>lo<span class="token punctuation">,</span>partition <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">sort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> partition <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">,</span> hi<span class="token punctuation">)</span><span class="token punctuation">;</span>




    <span class="token punctuation">}</span>


    <span class="token comment">// 归并</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">partition</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> lo <span class="token punctuation">,</span> <span class="token keyword">int</span> hi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Comparable</span> key <span class="token operator">=</span> a<span class="token punctuation">[</span>lo<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> left <span class="token operator">=</span> lo <span class="token punctuation">;</span>
        <span class="token keyword">int</span> right <span class="token operator">=</span> hi <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token function">less</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>a<span class="token punctuation">[</span><span class="token operator">--</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>right<span class="token operator">==</span>lo<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>


            <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token function">less</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token operator">++</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">==</span> hi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>



            <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">>=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">exch</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>


        <span class="token function">exch</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>lo<span class="token punctuation">,</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> right<span class="token punctuation">;</span>



    <span class="token punctuation">}</span>

    <span class="token comment">// 比较 元素v 是否大于 元素w</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">less</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span> v<span class="token punctuation">,</span> <span class="token class-name">Comparable</span> w<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> v<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">//数组元素 i 和 j 交换位置</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">exch</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a <span class="token punctuation">,</span> <span class="token keyword">int</span> i <span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Comparable</span> temp<span class="token punctuation">;</span>
        temp <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> 快速排序<span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QuickTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token class-name">Quick</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-归并排序" tabindex="-1"><a class="header-anchor" href="#_2-3-归并排序" aria-hidden="true">#</a> 2.3 归并排序</h3>
<p>归并排序是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为2-路归并。</p>
<p><img src="@source/document/java后端/asset/849589-20171015230557043-37375010.gif" alt="img" loading="lazy"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> 归并排序<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Merge</span> <span class="token punctuation">{</span>

    <span class="token comment">//辅助数组</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span>  <span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> assist<span class="token punctuation">;</span>

    <span class="token comment">// 对数组a中的元素进行排序</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span><span class="token punctuation">{</span>
        assist <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Comparable</span><span class="token punctuation">[</span>a<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> lo <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> hi <span class="token operator">=</span> a<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">;</span>

        <span class="token function">sort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>lo<span class="token punctuation">,</span>hi<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 排序主代码</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> lo <span class="token punctuation">,</span> <span class="token keyword">int</span> hi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>hi<span class="token operator">&lt;=</span>lo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token keyword">int</span> mid <span class="token operator">=</span> lo <span class="token operator">+</span> <span class="token punctuation">(</span>hi <span class="token operator">-</span> lo <span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>

        <span class="token comment">// 分别对每一组数据进行排序</span>
        <span class="token function">sort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>lo<span class="token punctuation">,</span>mid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">sort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> mid<span class="token operator">+</span><span class="token number">1</span> <span class="token punctuation">,</span> hi<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// 再把两个组中的数据进行归并</span>
        <span class="token function">merge</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> lo<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> hi<span class="token punctuation">)</span><span class="token punctuation">;</span>



    <span class="token punctuation">}</span>


    <span class="token comment">// 归并</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> lo <span class="token punctuation">,</span> <span class="token keyword">int</span> mid<span class="token punctuation">,</span> <span class="token keyword">int</span> hi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> lo<span class="token punctuation">;</span>
        <span class="token keyword">int</span> p1 <span class="token operator">=</span> lo<span class="token punctuation">;</span>
        <span class="token keyword">int</span> p2 <span class="token operator">=</span> mid <span class="token operator">+</span><span class="token number">1</span> <span class="token punctuation">;</span>

        <span class="token keyword">while</span><span class="token punctuation">(</span>p1<span class="token operator">&lt;=</span>mid <span class="token operator">&amp;&amp;</span> p2<span class="token operator">&lt;=</span>hi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">less</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>p1<span class="token punctuation">]</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>p2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                assist<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>p1<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                assist<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>p2<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>

        <span class="token keyword">while</span><span class="token punctuation">(</span>p1<span class="token operator">&lt;=</span>mid<span class="token punctuation">)</span><span class="token punctuation">{</span>
            assist<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>p1<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token keyword">while</span><span class="token punctuation">(</span>p2 <span class="token operator">&lt;=</span> hi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            assist<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>p2<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> index <span class="token operator">=</span> lo <span class="token punctuation">;</span> index<span class="token operator">&lt;=</span> hi <span class="token punctuation">;</span> index <span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            a<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> assist<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>

    <span class="token comment">// 比较 元素v 是否大于 元素w</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">less</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span> v<span class="token punctuation">,</span> <span class="token class-name">Comparable</span> w<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> v<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">//数组元素 i 和 j 交换位置</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">exch</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a <span class="token punctuation">,</span> <span class="token keyword">int</span> i <span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Comparable</span> temp<span class="token punctuation">;</span>
        temp <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> 归并排序<span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MergeTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token class-name">Merge</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-计数排序" tabindex="-1"><a class="header-anchor" href="#_2-4-计数排序" aria-hidden="true">#</a> 2.4 计数排序</h3>
<p>计数排序不是基于比较的排序算法，其核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。</p>
<p><img src="@source/document/java后端/asset/849589-20171015231740840-6968181.gif" alt="img" loading="lazy"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function countingSort(arr, maxValue) {
    var bucket = new Array(maxValue + 1),
        sortedIndex = 0;
        arrLen = arr.length,
        bucketLen = maxValue + 1;
 
    for (var i = 0; i &lt; arrLen; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }
 
    for (var j = 0; j &lt; bucketLen; j++) {
        while(bucket[j] > 0) {
            arr[sortedIndex++] = j;
            bucket[j]--;
        }
    }
 
    return arr;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-冒泡排序" tabindex="-1"><a class="header-anchor" href="#_2-5-冒泡排序" aria-hidden="true">#</a> 2.5 冒泡排序</h3>
<p>比较相邻的元素。如果第一个比第二个大，就交换它们两个；
对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
针对所有的元素重复以上的步骤，除了最后一个；
重复步骤1~3，直到排序完成。</p>
<p><img src="@source/document/java后端/asset/849589-20171015223238449-2146169197.gif" alt="img" loading="lazy"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> 冒泡排序<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Bubble</span> <span class="token punctuation">{</span>

    <span class="token comment">// 排序主代码</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> a<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">;</span> i<span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> j<span class="token operator">&lt;</span> i <span class="token punctuation">;</span>j <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">greater</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token function">exch</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> j <span class="token punctuation">,</span> j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>


    <span class="token comment">// 比较 元素v 是否大于 元素w</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">greater</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span> v<span class="token punctuation">,</span> <span class="token class-name">Comparable</span> w<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> v<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">//数组元素 i 和 j 交换位置</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">exch</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a <span class="token punctuation">,</span> <span class="token keyword">int</span> i <span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Comparable</span> temp<span class="token punctuation">;</span>
        temp <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> 冒泡排序<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BubbleTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token class-name">Bubble</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-插入排序" tabindex="-1"><a class="header-anchor" href="#_2-6-插入排序" aria-hidden="true">#</a> 2.6 插入排序</h3>
<p>插入排序（Insertion-Sort）的算法描述是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。</p>
<p><img src="@source/document/java后端/asset/849589-20171015225645277-1151100000.gif" alt="img" loading="lazy"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> 插入排序<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Insertion</span> <span class="token punctuation">{</span>

    <span class="token comment">// 排序主代码</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length   <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token keyword">int</span> minIndex <span class="token operator">=</span> i<span class="token punctuation">;</span>

            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token punctuation">;</span> j<span class="token operator">></span><span class="token number">0</span> <span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">greater</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token function">exch</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>


        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token comment">// 比较 元素v 是否大于 元素w</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">greater</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span> v<span class="token punctuation">,</span> <span class="token class-name">Comparable</span> w<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> v<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">//数组元素 i 和 j 交换位置</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">exch</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a <span class="token punctuation">,</span> <span class="token keyword">int</span> i <span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Comparable</span> temp<span class="token punctuation">;</span>
        temp <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>


    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> 插入排序<span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InsertionTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token class-name">Insertion</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-希尔排序" tabindex="-1"><a class="header-anchor" href="#_2-7-希尔排序" aria-hidden="true">#</a> 2.7 希尔排序</h3>
<p>1959年Shell发明，第一个突破O(n2)的排序算法，是简单插入排序的改进版。它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序。</p>
<p><img src="@source/document/java后端/asset/849589-20180331170017421-364506073.gif" alt="img" loading="lazy"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> 希尔排序<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Shell</span> <span class="token punctuation">{</span>

    <span class="token comment">// 排序主代码</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//先判断h</span>
        <span class="token keyword">int</span> h <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span> h <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            h <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> h <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>



        <span class="token comment">//循环</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>h<span class="token operator">>=</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token comment">//排序</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> h <span class="token punctuation">;</span> i<span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length   <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>


                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token punctuation">;</span> j <span class="token operator">>=</span> h <span class="token punctuation">;</span> j<span class="token operator">-=</span>h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">greater</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>j<span class="token operator">-</span>h<span class="token punctuation">]</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                        <span class="token function">exch</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>j<span class="token operator">-</span>h<span class="token punctuation">,</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>


            <span class="token punctuation">}</span>



            <span class="token comment">//h减少法则</span>
            h <span class="token operator">=</span> h <span class="token operator">/</span> <span class="token number">2</span> <span class="token punctuation">;</span>
        <span class="token punctuation">}</span>





    <span class="token punctuation">}</span>

    <span class="token comment">// 比较 元素v 是否大于 元素w</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">greater</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span> v<span class="token punctuation">,</span> <span class="token class-name">Comparable</span> w<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> v<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">//数组元素 i 和 j 交换位置</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">exch</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a <span class="token punctuation">,</span> <span class="token keyword">int</span> i <span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Comparable</span> temp<span class="token punctuation">;</span>
        temp <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> 希尔排序<span class="token punctuation">;</span>



<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ShellTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token class-name">Shell</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-8-堆排序" tabindex="-1"><a class="header-anchor" href="#_2-8-堆排序" aria-hidden="true">#</a> 2.8 堆排序</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> 堆排序<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Heap</span> <span class="token punctuation">{</span>

    <span class="token comment">// 对数组a中的元素进行排序</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> creatHeap <span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> source<span class="token punctuation">,</span> <span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> heap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>heap<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>source<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token punctuation">(</span>heap<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span> <span class="token punctuation">;</span> i<span class="token operator">></span><span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">sink</span><span class="token punctuation">(</span>heap<span class="token punctuation">,</span>i <span class="token punctuation">,</span> heap<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> sort <span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> source <span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> heap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Comparable</span><span class="token punctuation">[</span>source<span class="token punctuation">.</span>length <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token function">creatHeap</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span>heap<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> <span class="token class-name">N</span> <span class="token operator">=</span> heap<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token class-name">N</span><span class="token operator">!=</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">exch</span><span class="token punctuation">(</span>heap<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token class-name">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">N</span><span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token function">sink</span><span class="token punctuation">(</span>heap<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token class-name">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>heap<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>source<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>source<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>


    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sink</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> heap<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">,</span> <span class="token keyword">int</span> range<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span> target <span class="token operator">&lt;=</span> range<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> max<span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>target <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;=</span> range<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">less</span><span class="token punctuation">(</span>heap<span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">*</span>target<span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">*</span>target<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    max <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span>target <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                    max <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span>target<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                max <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span>target<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">less</span><span class="token punctuation">(</span>heap<span class="token punctuation">,</span>target<span class="token punctuation">,</span>max<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token function">exch</span><span class="token punctuation">(</span>heap<span class="token punctuation">,</span>target<span class="token punctuation">,</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span>

            target <span class="token operator">=</span> max<span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 比较 元素v 是否大于 元素w</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">less</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> heap <span class="token punctuation">,</span> <span class="token keyword">int</span> i <span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>heap<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">//数组元素 i 和 j 交换位置</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">exch</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span><span class="token punctuation">[</span><span class="token punctuation">]</span> heap <span class="token punctuation">,</span> <span class="token keyword">int</span> i <span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Comparable</span> temp <span class="token operator">=</span> heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> heap<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        heap<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> 堆排序<span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HeapTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token class-name">Heap</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-9-基数排序" tabindex="-1"><a class="header-anchor" href="#_2-9-基数排序" aria-hidden="true">#</a> 2.9 基数排序</h3>
<h2 id="第3章-搜索" tabindex="-1"><a class="header-anchor" href="#第3章-搜索" aria-hidden="true">#</a> 第3章 搜索</h2>
<h3 id="_3-1-递归" tabindex="-1"><a class="header-anchor" href="#_3-1-递归" aria-hidden="true">#</a> 3.1 递归</h3>
<h3 id="_3-2-剪枝" tabindex="-1"><a class="header-anchor" href="#_3-2-剪枝" aria-hidden="true">#</a> 3.2 剪枝</h3>
<h3 id="_3-3-广度优先搜索" tabindex="-1"><a class="header-anchor" href="#_3-3-广度优先搜索" aria-hidden="true">#</a> 3.3 广度优先搜索</h3>
<p>深度优先搜索</p>
<h3 id="_3-4-狄克斯特拉算法" tabindex="-1"><a class="header-anchor" href="#_3-4-狄克斯特拉算法" aria-hidden="true">#</a> 3.4 狄克斯特拉算法</h3>
<p>爬山算法</p>
<p>回溯算法</p>
<h3 id="_3-5-反向索引" tabindex="-1"><a class="header-anchor" href="#_3-5-反向索引" aria-hidden="true">#</a> 3.5 反向索引</h3>
<h2 id="第4章-图论" tabindex="-1"><a class="header-anchor" href="#第4章-图论" aria-hidden="true">#</a> 第4章 图论</h2>
<h3 id="_4-1-最短路" tabindex="-1"><a class="header-anchor" href="#_4-1-最短路" aria-hidden="true">#</a> 4.1 最短路</h3>
<h3 id="_4-2-最小生成树" tabindex="-1"><a class="header-anchor" href="#_4-2-最小生成树" aria-hidden="true">#</a> 4.2 最小生成树</h3>
<h3 id="_4-3-网络流建模" tabindex="-1"><a class="header-anchor" href="#_4-3-网络流建模" aria-hidden="true">#</a> 4.3 网络流建模</h3>
<h2 id="第5章-高级算法" tabindex="-1"><a class="header-anchor" href="#第5章-高级算法" aria-hidden="true">#</a> 第5章 高级算法</h2>
<h3 id="_5-1-分而治之" tabindex="-1"><a class="header-anchor" href="#_5-1-分而治之" aria-hidden="true">#</a> 5.1 分而治之</h3>
<h3 id="_5-2-动态规划" tabindex="-1"><a class="header-anchor" href="#_5-2-动态规划" aria-hidden="true">#</a> 5.2 动态规划</h3>
<h3 id="_5-3-贪婪算法" tabindex="-1"><a class="header-anchor" href="#_5-3-贪婪算法" aria-hidden="true">#</a> 5.3 贪婪算法</h3>
<h3 id="_5-4-倍增" tabindex="-1"><a class="header-anchor" href="#_5-4-倍增" aria-hidden="true">#</a> 5.4 倍增</h3>
<h3 id="_5-5-np问题" tabindex="-1"><a class="header-anchor" href="#_5-5-np问题" aria-hidden="true">#</a> 5.5 NP问题</h3>
<h3 id="_5-6-二分查找" tabindex="-1"><a class="header-anchor" href="#_5-6-二分查找" aria-hidden="true">#</a> 5.6 二分查找</h3>
<h2 id="六-其他" tabindex="-1"><a class="header-anchor" href="#六-其他" aria-hidden="true">#</a> 六. 其他</h2>
<h3 id="_6-1-费曼算法" tabindex="-1"><a class="header-anchor" href="#_6-1-费曼算法" aria-hidden="true">#</a> 6.1 费曼算法</h3>
<h3 id="_6-2-并行算法" tabindex="-1"><a class="header-anchor" href="#_6-2-并行算法" aria-hidden="true">#</a> 6.2 并行算法</h3>
<h3 id="_6-3-mapreduce" tabindex="-1"><a class="header-anchor" href="#_6-3-mapreduce" aria-hidden="true">#</a> 6.3 mapreduce</h3>
<h3 id="_6-4-布隆过滤器" tabindex="-1"><a class="header-anchor" href="#_6-4-布隆过滤器" aria-hidden="true">#</a> 6.4 布隆过滤器</h3>
<h3 id="_6-5-sha算法" tabindex="-1"><a class="header-anchor" href="#_6-5-sha算法" aria-hidden="true">#</a> 6.5 sha算法</h3>
<h3 id="_6-6-局部敏感散列算法" tabindex="-1"><a class="header-anchor" href="#_6-6-局部敏感散列算法" aria-hidden="true">#</a> 6.6 局部敏感散列算法</h3>
<h3 id="_6-7-线性规划" tabindex="-1"><a class="header-anchor" href="#_6-7-线性规划" aria-hidden="true">#</a> 6.7 线性规划</h3>
<h3 id="_6-8-diffie-hellman密钥" tabindex="-1"><a class="header-anchor" href="#_6-8-diffie-hellman密钥" aria-hidden="true">#</a> 6.8 diffie-hellman密钥</h3>
<h3 id="_6-9-k最邻近算法" tabindex="-1"><a class="header-anchor" href="#_6-9-k最邻近算法" aria-hidden="true">#</a> 6.9  K最邻近算法</h3>
</div></template>
