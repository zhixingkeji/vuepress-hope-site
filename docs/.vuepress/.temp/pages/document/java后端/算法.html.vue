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
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>function <span class="token function">sortArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		let pos <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span>let j <span class="token operator">=</span> i <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>pos<span class="token punctuation">]</span> <span class="token operator">></span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				pos <span class="token operator">=</span> j<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		let tmp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">;</span>
			arr<span class="token punctuation">[</span>pos<span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-快速排序" tabindex="-1"><a class="header-anchor" href="#_2-2-快速排序" aria-hidden="true">#</a> 2.2 快速排序</h3>
<p>快速排序的基本思想：通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。</p>
<p><img src="@source/document/java后端/asset/849589-20171015230936371-1413523412.gif" alt="img" loading="lazy"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;
 
    if (left &lt; right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
    return arr;
}
 
function partition(arr, left ,right) {     // 分区操作
    var pivot = left,                      // 设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i &lt;= right; i++) {
        if (arr[i] &lt; arr[pivot]) {
            swap(arr, i, index);
            index++;
        }       
    }
    swap(arr, pivot, index - 1);
    return index-1;
}
 
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-归并排序" tabindex="-1"><a class="header-anchor" href="#_2-3-归并排序" aria-hidden="true">#</a> 2.3 归并排序</h3>
<p>归并排序是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为2-路归并。</p>
<p><img src="@source/document/java后端/asset/849589-20171015230557043-37375010.gif" alt="img" loading="lazy"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function mergeSort(arr) {
    var len = arr.length;
    if (len &lt; 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right) {
    var result = [];
 
    while (left.length>0 &amp;&amp; right.length>0) {
        if (left[0] &lt;= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
 
    return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4计数排序" tabindex="-1"><a class="header-anchor" href="#_2-4计数排序" aria-hidden="true">#</a> 2.4计数排序</h3>
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
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i &lt; len - 1; i++) {
        for (var j = 0; j &lt; len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                var temp = arr[j+1];        // 元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-插入排序" tabindex="-1"><a class="header-anchor" href="#_2-6-插入排序" aria-hidden="true">#</a> 2.6 插入排序</h3>
<p>插入排序（Insertion-Sort）的算法描述是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。</p>
<p><img src="@source/document/java后端/asset/849589-20171015225645277-1151100000.gif" alt="img" loading="lazy"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i &lt; len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 &amp;&amp; arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-希尔排序" tabindex="-1"><a class="header-anchor" href="#_2-7-希尔排序" aria-hidden="true">#</a> 2.7 希尔排序</h3>
<p>1959年Shell发明，第一个突破O(n2)的排序算法，是简单插入排序的改进版。它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序。</p>
<p><img src="@source/document/java后端/asset/849589-20180331170017421-364506073.gif" alt="img" loading="lazy"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// 修改于 2019-03-06
function shellSort(arr) {
    var len = arr.length;
    for (var gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // 注意：这里和动图演示的不一样，动图是分组执行，实际操作是多个分组交替执行
        for (var i = gap; i &lt; len; i++) {
            var j = i;
            var current = arr[i];
            while (j - gap >= 0 &amp;&amp; current &lt; arr[j - gap]) {
                 arr[j] = arr[j - gap];
                 j = j - gap;
            }
            arr[j] = current;
        }
    }
    return arr;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第3章-搜索" tabindex="-1"><a class="header-anchor" href="#第3章-搜索" aria-hidden="true">#</a> 第3章 搜索</h2>
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
