<template><div><h2 id="第1章-简介" tabindex="-1"><a class="header-anchor" href="#第1章-简介" aria-hidden="true">#</a> 第1章 简介</h2>
<h3 id="_1-1-数据结构介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-数据结构介绍" aria-hidden="true">#</a> 1.1 数据结构介绍</h3>
<h3 id="_1-2-数据结构和算法的关系" tabindex="-1"><a class="header-anchor" href="#_1-2-数据结构和算法的关系" aria-hidden="true">#</a> 1.2 数据结构和算法的关系</h3>
<p>程序 = 数据结构 + 算法</p>
<p>数据结构是算法的基础。</p>
<h3 id="_1-3-线性结构和非线性结构" tabindex="-1"><a class="header-anchor" href="#_1-3-线性结构和非线性结构" aria-hidden="true">#</a> 1.3 线性结构和非线性结构</h3>
<p>线性结构</p>
<p>数组, 队列, 链表, 栈</p>
<p>非线性结构</p>
<p>二维数组, 多维数组,广义表,树结构,图结构</p>
<h2 id="第2章-数组与链表" tabindex="-1"><a class="header-anchor" href="#第2章-数组与链表" aria-hidden="true">#</a> 第2章 数组与链表</h2>
<h3 id="_2-1-数组" tabindex="-1"><a class="header-anchor" href="#_2-1-数组" aria-hidden="true">#</a> 2.1 数组</h3>
<p>在内存中，数组是一块连续的区域。</p>
<p>数组需要预留空间，在使用前要先申请占内存的大小，可能会浪费内存空间。</p>
<p>插入数据和删除数据效率低，插入数据时，这个位置后面的数据在内存中都要向后移。删除数据时，这个数据后面的数据都要往前移动。</p>
<p>随机读取效率很高。因为数组是连续的，知道每一个数据的内存地址，可以直接找到给地址的数据。</p>
<p>并且不利于扩展，数组定义的空间不够时要重新定义数组。</p>
<h3 id="_2-2-稀松数组" tabindex="-1"><a class="header-anchor" href="#_2-2-稀松数组" aria-hidden="true">#</a> 2.2 稀松数组</h3>
<p>稀疏数组(sparse array)是一种只为数组中的非零元素分配内存的特殊类型数组，内存中存储了数组中非零元素的下标和值。</p>
<p>稀疏数组可以简单的看作为是压缩。比如将数据序列化到磁盘上，减少数据量，在IO过程中提高效率等等。</p>
<p><img src="@source/document/java后端/asset/image-20220629213840801.png" alt="image-20220629213840801" loading="lazy"></p>
<h3 id="_2-3-链表介绍" tabindex="-1"><a class="header-anchor" href="#_2-3-链表介绍" aria-hidden="true">#</a> 2.3 链表介绍</h3>
<p>在内存中可以存在任何地方，不要求连续。 在电影院几个人可以随便坐。</p>
<p>每一个数据都保存了下一个数据的内存地址，通过这个地址找到下一个数据。</p>
<p>增加数据和删除数据很容易。</p>
<p>查找数据时效率低，因为不具有随机访问性，所以访问某个位置的数据都要从第一个数据开始访问，然后根据第一个数据保存的下一个数据的地址找到第二个数据，以此类推。</p>
<p>不指定大小，扩展方便。链表大小不用定义，数据随意增删。</p>
<h3 id="_2-4-单链表" tabindex="-1"><a class="header-anchor" href="#_2-4-单链表" aria-hidden="true">#</a> 2.4 单链表</h3>
<h3 id="_2-5-双链表" tabindex="-1"><a class="header-anchor" href="#_2-5-双链表" aria-hidden="true">#</a> 2.5 双链表</h3>
<h3 id="_2-6-循环链表-单项环形链表" tabindex="-1"><a class="header-anchor" href="#_2-6-循环链表-单项环形链表" aria-hidden="true">#</a> 2.6 循环链表 ( 单项环形链表 )</h3>
<h3 id="_2-7-链表和数组的对比" tabindex="-1"><a class="header-anchor" href="#_2-7-链表和数组的对比" aria-hidden="true">#</a> 2.7 链表和数组的对比</h3>
<ul>
<li>数组静态分配内存，链表动态分配内存；</li>
<li>数组在内存中连续，链表不一定连续；</li>
<li>数组元素在栈区，链表元素在堆区；</li>
<li>数组利用下标定位，时间复杂度为O(1)，链表定位元素时间复杂度O(n)；</li>
<li>数组插入或删除元素的时间复杂度O(n)，链表的时间复杂度O(1)</li>
</ul>
<h2 id="第3章-栈与队列" tabindex="-1"><a class="header-anchor" href="#第3章-栈与队列" aria-hidden="true">#</a> 第3章 栈与队列</h2>
<h3 id="_3-1-栈的" tabindex="-1"><a class="header-anchor" href="#_3-1-栈的" aria-hidden="true">#</a> 3.1 栈的</h3>
<p>链表实现动态栈</p>
<p>栈的另外一种实现方式是采用链表，链表是一种递归的数据结构，它或者为空，或者指向一个结点的引用，该结点含有一个泛型的元素和一个指向另一条链表的引用。</p>
<p>可变长数组实现静态栈</p>
<p>要用数组实现栈，可以声明一个int型的标记，这个标记指向的位置即为栈顶，push操作时，将值放在数据中标记的位置，同时将标记+1，pop时，返回数组在标记位置的值，同时标记-1。</p>
<p>但java中的数组在声明的时候其长度就已经固定了，所以栈使用的空间只能是这个数组最大容量的一部分。为了能容纳更多的数据而声明一个特别大的数组会非常浪费空间，那如何解决这个问题，达到既不会浪费数组空间也不会超出数组范围呢？</p>
<p>可以采用动态调整数组大小的方式，在push操作导致栈已满时，重新创建一个数组，其容量为原数组的两倍。同理在pop操作使数组的闲置空间达到一定程度时，重新创建一个容量更小的数组。但闲置的判断标准不能为一半1/2，否则会造成在1/2的临界点处push和pop操作时发生“抖动”，即频繁地进行数组扩容、缩容操作，这会极大地降低栈的性能。所以通常的做法是在减少到数组容量的1/4时缩容为1/2。</p>
<p>数组实现代码</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayStack</span> <span class="token punctuation">{</span>
    <span class="token comment">// 栈的大小</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> maxStack<span class="token punctuation">;</span>
    <span class="token comment">//数组模拟栈</span>
    <span class="token keyword">private</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> stack<span class="token punctuation">;</span>
    <span class="token comment">//栈顶指针  -1为空栈</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> top <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">//构造</span>
    <span class="token keyword">public</span> <span class="token class-name">ArrayStack</span> <span class="token punctuation">(</span><span class="token keyword">int</span> maxStack<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>maxStack <span class="token operator">=</span> maxStack<span class="token punctuation">;</span>
        stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span>maxStack<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//压栈</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pushStack</span><span class="token punctuation">(</span><span class="token keyword">char</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">"该栈已满"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        top<span class="token operator">++</span><span class="token punctuation">;</span>
        stack<span class="token punctuation">[</span>top<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//出栈</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">popStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">"该栈为空"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">char</span> value <span class="token operator">=</span> stack<span class="token punctuation">[</span>top<span class="token punctuation">]</span><span class="token punctuation">;</span>
        top<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    <span class="token comment">//判断空栈</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> isEmpty <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>top <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//判断满栈</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> isFull <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>top <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxStack<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//查看所有元素</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">listStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">"该栈为空"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> stack<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"stack[%d]=%c\n"</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>stack<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回文案例</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token comment">//测试案例 判断回文数据</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建栈</span>
        <span class="token class-name">ArrayStack</span> arrayStack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayStack</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//回文字符串</span>
<span class="token comment">//        String val = "ababa";</span>
        <span class="token class-name">String</span> val <span class="token operator">=</span> <span class="token string">"abcd"</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//入栈</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> val<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//            System.out.println(val.charAt(i));</span>
            arrayStack<span class="token punctuation">.</span><span class="token function">pushStack</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        arrayStack<span class="token punctuation">.</span><span class="token function">listStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//出栈</span>
        <span class="token class-name">String</span> newval <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> length <span class="token operator">=</span> val<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//            System.out.println(val.charAt(i));</span>
            newval <span class="token operator">=</span> newval <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span>arrayStack<span class="token punctuation">.</span><span class="token function">popStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>newval<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>newval<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//判断</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>val<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>newval<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"该数据是回文数据"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"该数据不是回文数据"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-队列" tabindex="-1"><a class="header-anchor" href="#_3-2-队列" aria-hidden="true">#</a> 3.2 队列</h3>
<p>队列是一种特殊的线性表，他只允许在表的前端进行删除操作，在表的后端进行插入操作，后端称为队尾，前端称为队头。</p>
<p>队列就像高速路，进来后就不许逆行，只能从下一站出口出去。</p>
<p>链表实现队列</p>
<p>先进先出队列（简称队列）是一种基于先进先出(FIFO)策略的集合类型。这里只关注队列的链表实现。与链表实现的栈类似，用结点包含泛型的item变量和next变量，前者存放数据，后者用来指向下一个结点。不同之处在于链表的头部、尾部都会被操作，从链表的一端入队(enqueue)，从另一端出队(dequeue)</p>
<p>数组实现队列</p>
<p>顺序队列</p>
<p>溢出问题</p>
<p>循环队列</p>
<h2 id="第4章-堆" tabindex="-1"><a class="header-anchor" href="#第4章-堆" aria-hidden="true">#</a> 第4章 堆</h2>
<p>存储的是数组和对象（其实数组就是对象），凡是new建立的都是在堆中，堆中存放的都是实体（对象），实体用于封装数据，而且是封装多个（实体的多个属性），如果一个数据消失，这个实体也没有消失，还可以用，所以堆是不会随时释放的，但是栈不一样，栈里存放的都是单个变量，变量被释放了，那就没有了。堆里的实体虽然不会被释放，但是会被当成垃圾，Java有垃圾回收机制不定时的收取。</p>
<h2 id="第5章-树" tabindex="-1"><a class="header-anchor" href="#第5章-树" aria-hidden="true">#</a> 第5章 树</h2>
<h3 id="_5-1-树的概念" tabindex="-1"><a class="header-anchor" href="#_5-1-树的概念" aria-hidden="true">#</a> 5.1 树的概念</h3>
<p>线性表是一对一的关系，而树是一对多的关系。</p>
<p>树的结点：包含一个数据元素及若干指向子树的分支；</p>
<p>孩子结点：结点的子树的根称为该结点的孩子；</p>
<p>双亲结点：B 结点是A 结点的孩子，则A结点是B 结点的双亲；</p>
<p>兄弟结点：同一双亲的孩子结点； 堂兄结点：同一层上结点；</p>
<p>祖先结点: 从根到该结点的所经分支上的所有结点</p>
<p>子孙结点：以某结点为根的子树中任一结点都称为该结点的子孙</p>
<p>结点层：根结点的层定义为1；根的孩子为第二层结点，依此类推；</p>
<p>树的深度：树中最大的结点层</p>
<p>结点的度：结点子树的个数</p>
<p>树的度： 树中最大的结点度。</p>
<p>叶子结点：也叫终端结点，是度为 0 的结点；</p>
<p>分枝结点：度不为0的结点；</p>
<p>无序树：树中任意节点的子节点之间没有顺序关系，这种树称为无序树，也称为自由树；</p>
<p>有序树：树中任意节点的子节点之间有顺序关系，这种树称为有序树；</p>
<h3 id="_5-2-二叉树的概念" tabindex="-1"><a class="header-anchor" href="#_5-2-二叉树的概念" aria-hidden="true">#</a> 5.2 二叉树的概念</h3>
<p>二叉树</p>
<p>二叉树是每个结点最多有两个子树的树结构。通常子树被称作“左子树”和“右子树”。</p>
<p></p>
<p>完全二叉树</p>
<p>对于一颗二叉树，假设其深度为d（d&gt;1）。除了第d层外，其它各层的节点数目均已达最大值，且第d层所有节点从左向右连续地紧密排列，这样的二叉树被称为完全二叉树；</p>
<p></p>
<p>满二叉树</p>
<p>所有叶节点都在最底层的完全二叉树；</p>
<p></p>
<p>平衡二叉树（AVL树）</p>
<p>当且仅当任何节点的两棵子树的高度差不大于1的二叉树；</p>
<p>排序二叉树</p>
<p>(二叉查找树（英语：Binary Search Tree))：也称二叉搜索树、有序二叉树；</p>
<p>霍夫曼树</p>
<p>带权路径最短的二叉树称为哈夫曼树或最优二叉树；</p>
<h3 id="_5-3-二叉树的遍历方式" tabindex="-1"><a class="header-anchor" href="#_5-3-二叉树的遍历方式" aria-hidden="true">#</a> 5.3 二叉树的遍历方式</h3>
<p>先序遍历</p>
<p>先访问根节点，先序遍历左子树，先序遍历右子树</p>
<p>中序遍历</p>
<p>中序遍历左子树，访问根节点，中序遍历右子树</p>
<p>后序遍历</p>
<p>后序遍历左子树，后序遍历右子树，访问根节点</p>
<p>层次遍历</p>
<p>即按照层次访问，通常用队列来做。访问根，访问子女，再访问子女的子女</p>
<h3 id="_5-4-二叉树的存储方式" tabindex="-1"><a class="header-anchor" href="#_5-4-二叉树的存储方式" aria-hidden="true">#</a> 5.4 二叉树的存储方式</h3>
<p>顺序存储
用一组连续的存储单元存放二叉树的数据元素。结点在数组中的相对位置蕴含着结点之间的关系。比较浪费空间，基本不用。</p>
<p>链式存储</p>
<p>链式存储结构的每个结点由数据域、左指针域和右指针域组成。左指针和右指针分别指向下一层的二叉树。</p>
<p><img src="@source/document/java后端/asset/image-20220626140439723.png" alt="image-20220626140439723" loading="lazy"></p>
<h3 id="_5-5-二叉树的实现" tabindex="-1"><a class="header-anchor" href="#_5-5-二叉树的实现" aria-hidden="true">#</a> 5.5 二叉树的实现</h3>
<p><img src="@source/document/java后端/asset/image-20220626151301766.png" alt="image-20220626151301766" loading="lazy"></p>
<p>Node.java</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>
<span class="token comment">// 节点</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>

    <span class="token comment">//编号</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> no<span class="token punctuation">;</span>

    <span class="token comment">//标识符</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token comment">//左节点</span>
    <span class="token keyword">private</span> <span class="token class-name">Node</span> left<span class="token punctuation">;</span>

    <span class="token comment">//右节点</span>
    <span class="token keyword">private</span> <span class="token class-name">Node</span> right<span class="token punctuation">;</span>



    <span class="token comment">// get set</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getNo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> no<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setNo</span><span class="token punctuation">(</span><span class="token keyword">int</span> no<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>no <span class="token operator">=</span> no<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Node</span> <span class="token function">getLeft</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setLeft</span><span class="token punctuation">(</span><span class="token class-name">Node</span> left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Node</span> <span class="token function">getRight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setRight</span><span class="token punctuation">(</span><span class="token class-name">Node</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">// 构造方法</span>
    <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token keyword">int</span> no<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>no <span class="token operator">=</span> no<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Node{"</span> <span class="token operator">+</span>
                <span class="token string">"no="</span> <span class="token operator">+</span> no <span class="token operator">+</span>
                <span class="token string">", name='"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token string">", left="</span> <span class="token operator">+</span> left <span class="token operator">+</span>
                <span class="token string">", right="</span> <span class="token operator">+</span> right <span class="token operator">+</span>
                <span class="token char">'}'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">// 前遍历  父节点在前</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">preSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">preSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>right<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">preSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token comment">// 中遍历 父节点在中</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">infixSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">infixSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>right<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">infixSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token comment">// 后遍历 父节点在后</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">postSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">postSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>right<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">postSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>



    <span class="token comment">//前序查找</span>
    <span class="token keyword">public</span> <span class="token class-name">Node</span> <span class="token function">preSearch</span><span class="token punctuation">(</span><span class="token keyword">int</span> no<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//判断是否为当前节点</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>no <span class="token operator">==</span> no<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//查询左子节点</span>
        <span class="token class-name">Node</span> leftNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            leftNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">preSearch</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//找到了</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>leftNode <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> leftNode<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token comment">//查询右子节点</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            leftNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">preSearch</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//找到了</span>
        <span class="token keyword">return</span> leftNode<span class="token punctuation">;</span>



    <span class="token punctuation">}</span>


    <span class="token comment">// 删除</span>
    <span class="token comment">// 不能直接删除节点,因为会删除该节点的整个子树, 要找他的父节点让该子节点为空, 达到删除</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> delNode <span class="token punctuation">(</span><span class="token keyword">int</span> no<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token comment">//先判断当前节点的左节点是否为要删的对象</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">!=</span><span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span>no <span class="token operator">==</span> no<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//再判断当前节点的右节点是否为要删的对象</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">!=</span><span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span>no <span class="token operator">==</span> no<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token comment">//循环递归左节点</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">delNode</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//循环递归右节点</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">delNode</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>


    <span class="token comment">// 新增</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insertNode</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//判断要插入的节点和当前节点的no值 如果小于当前节点</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">getNo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getNo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果左侧节点为空,则插入新节点</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> node<span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>

                <span class="token comment">//如果左节点不为空,则遍历左节点</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">insertNode</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">getNo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getNo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">////判断要插入的节点和当前节点的no值 如果大于当前节点</span>
            <span class="token comment">// 如果右侧节点为空,则插入新节点</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> node<span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>

                <span class="token comment">//如果左节点不为空,则遍历左节点</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">insertNode</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>


        <span class="token punctuation">}</span>




        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"节点的值已经存在"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>BinaryTree.java</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>

<span class="token comment">// 二叉树</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BinaryTree</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Node</span> root<span class="token punctuation">;</span>

    <span class="token comment">//设置根</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setRoot</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> node<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//前序遍历</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">preSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span><span class="token function">preSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"二叉树为空"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//中序遍历</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">infixSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span><span class="token function">infixSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"二叉树为空"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//前序遍历</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">postSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span><span class="token function">postSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"二叉树为空"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token comment">//前序查询</span>
    <span class="token keyword">public</span> <span class="token class-name">Node</span> <span class="token function">preNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> no<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> root<span class="token punctuation">.</span><span class="token function">preSearch</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"空二叉树"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token comment">//删除节点</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> delNode <span class="token punctuation">(</span><span class="token keyword">int</span> no<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//判断root不为空</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token comment">//如果要删除的是root节点</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span><span class="token function">getNo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> no<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                root <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                root<span class="token punctuation">.</span><span class="token function">delNode</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"空二叉树"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>


    <span class="token comment">//新增节点</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> insertNode <span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//如果root不为空</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            root<span class="token punctuation">.</span><span class="token function">insertNode</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//如果root为空,则把当前node设置为root节点</span>
            <span class="token comment">//不能用root.insertNode方法, 空指针异常</span>
            root <span class="token operator">=</span> node<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Text.java</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建对象</span>
        <span class="token class-name">BinaryTree</span> binaryTree <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BinaryTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Node</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token string">"唐僧"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Node</span> node1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token string">"沙和尚"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Node</span> node2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token string">"孙悟空"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Node</span> node3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token string">"玉皇大帝"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Node</span> node4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token string">"猪八戒"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Node</span> node5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">,</span><span class="token string">"黑熊怪"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Node</span> node6 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span><span class="token string">"观世音"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//创建二叉树结构</span>
        binaryTree<span class="token punctuation">.</span><span class="token function">setRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span>node1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span>node2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        node1<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span>node3<span class="token punctuation">)</span><span class="token punctuation">;</span>
        node1<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span>node4<span class="token punctuation">)</span><span class="token punctuation">;</span>
        node2<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span>node5<span class="token punctuation">)</span><span class="token punctuation">;</span>
        node2<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span>node6<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">//遍历二叉树</span>
<span class="token comment">//        binaryTree.preSelect();</span>
<span class="token comment">//        System.out.println("------------------------------------");</span>
<span class="token comment">//        binaryTree.infixSelect();</span>
<span class="token comment">//        System.out.println("------------------------------------");</span>
<span class="token comment">//        binaryTree.postSelect();</span>
<span class="token comment">//        System.out.println("------------------------------------");</span>


        <span class="token comment">// 前序查找</span>
<span class="token comment">//        Node node = binaryTree.preNode(5);</span>
<span class="token comment">//        if (node != null) {</span>
<span class="token comment">//            System.out.println(node);</span>
<span class="token comment">//        }else {</span>
<span class="token comment">//            System.out.println("没找到节点");</span>
<span class="token comment">//        }</span>

        <span class="token comment">// 删除 6号猪八戒</span>
        binaryTree<span class="token punctuation">.</span><span class="token function">delNode</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        binaryTree<span class="token punctuation">.</span><span class="token function">preSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"------------------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 新增 6号 猪八戒</span>
        <span class="token class-name">Node</span> nodeNew <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token string">"猪八戒"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        binaryTree<span class="token punctuation">.</span><span class="token function">insertNode</span><span class="token punctuation">(</span>nodeNew<span class="token punctuation">)</span><span class="token punctuation">;</span>
        binaryTree<span class="token punctuation">.</span><span class="token function">preSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"------------------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-6-红黑树" tabindex="-1"><a class="header-anchor" href="#_5-6-红黑树" aria-hidden="true">#</a> 5.6 红黑树</h3>
<h3 id="_5-7-b-树" tabindex="-1"><a class="header-anchor" href="#_5-7-b-树" aria-hidden="true">#</a> 5.7 B-树</h3>
<p>B树：一种对读写操作进行优化的自平衡的二叉查找树，能够保持数据有序，拥有多于两个子树。</p>
<h3 id="_5-8-森林" tabindex="-1"><a class="header-anchor" href="#_5-8-森林" aria-hidden="true">#</a> 5.8 森林</h3>
<h3 id="_5-9-树的线索化" tabindex="-1"><a class="header-anchor" href="#_5-9-树的线索化" aria-hidden="true">#</a> 5.9 树的线索化</h3>
<h3 id="_5-10-赫夫曼树" tabindex="-1"><a class="header-anchor" href="#_5-10-赫夫曼树" aria-hidden="true">#</a> 5.10 赫夫曼树</h3>
<h3 id="_5-11-赫夫曼编码" tabindex="-1"><a class="header-anchor" href="#_5-11-赫夫曼编码" aria-hidden="true">#</a> 5.11 赫夫曼编码</h3>
<h2 id="第6章-图" tabindex="-1"><a class="header-anchor" href="#第6章-图" aria-hidden="true">#</a> 第6章 图</h2>
<h3 id="_6-1-图的基本概念" tabindex="-1"><a class="header-anchor" href="#_6-1-图的基本概念" aria-hidden="true">#</a> 6.1 图的基本概念</h3>
<p>线性表和树两类数据结构，线性表中的元素是“一对一”的关系，树中的元素是“一对多”的关系，本章所述的图结构中的元素则是“多对多”的关系。</p>
<p>图（Graph）是一种复杂的非线性结构，在图结构中，每个元素都可以有零个或多个前驱，也可以有零个或多个后继，也就是说，元素之间的关系是任意的。</p>
<h3 id="_6-2-无向图" tabindex="-1"><a class="header-anchor" href="#_6-2-无向图" aria-hidden="true">#</a> 6.2 无向图</h3>
<p>无向图是由顶点和边构成。</p>
<h3 id="_6-3-有向图" tabindex="-1"><a class="header-anchor" href="#_6-3-有向图" aria-hidden="true">#</a> 6.3 有向图</h3>
<p>有向图是由顶点和有向边构成。</p>
<h3 id="_6-4-完全图" tabindex="-1"><a class="header-anchor" href="#_6-4-完全图" aria-hidden="true">#</a> 6.4 完全图</h3>
<p>如果任意两个顶点之间都存在边叫完全图，有向的边叫有向完全图。如果无重复的边或者顶点到自身的边叫简单图。</p>
<h2 id="第7章-散列" tabindex="-1"><a class="header-anchor" href="#第7章-散列" aria-hidden="true">#</a> 第7章 散列</h2>
<h3 id="_7-1-散列简介" tabindex="-1"><a class="header-anchor" href="#_7-1-散列简介" aria-hidden="true">#</a> 7.1 散列简介</h3>
<p>它基于数组，通过把关键字映射到数组的某个下标来加快查找速度，但是又和数组、链表、树等数据结构不同，在这些数据结构中查找某个关键字，通常要遍历整个数据结构，也就是O(N)的时间级，但是对于哈希表来说，只是O(1)的时间级。</p>
<p>散列也叫作散列表，是一种非线性的数据结构，可以用来快速的查找和插入数据。在 JavaScript 中，通常使用数组来实现散列。</p>
<p>散列的核心是一个计算特征值的方法，该方法将原始数据进行转换，返回一个索引，随后将值保存在数组对应的索引中。此外，该方法还可以用来进行高效的查找。</p>
<p>由于不同的特征值计算出的索引不尽相同，因此散列在保存数据时不是按顺序保存的，其是基于列表这样一个线性结构上的“非线性”结构，因此被称为散列。</p>
<p>通常，我们会将数组的长度设置为一个质数，因为质数的公约数最少，可以有效的防止碰撞。</p>
<h3 id="_7-2-散列原理" tabindex="-1"><a class="header-anchor" href="#_7-2-散列原理" aria-hidden="true">#</a> 7.2 散列原理</h3>
<h3 id="_7-3-散列应用" tabindex="-1"><a class="header-anchor" href="#_7-3-散列应用" aria-hidden="true">#</a> 7.3 散列应用</h3>
<h3 id="_7-4-散列碰撞" tabindex="-1"><a class="header-anchor" href="#_7-4-散列碰撞" aria-hidden="true">#</a> 7.4 散列碰撞</h3>
<p>散列碰撞概念</p>
<p>不同的value经过散列函数后，得到的key值相同</p>
<p>拉链法</p>
<p>将所有关键字为同义字的记录存储在一个单链表中</p>
<p>开放地址法</p>
<p>这种方法也称再散列法，其基本思想是：当关键字key的哈希地址p=H（key）出现冲突时，以p为基础，产生另一个哈希地址p1，如果p1仍然冲突，再以p为基础，产生另一个哈希地址p2，…，直到找出一个不冲突的哈希地址pi ，将相应元素存入其中。</p>
<p>就是说当发生冲突时，就去寻找下一个空的地址把数据存入其中，只要哈希表足够大，就总能找到这样一个空的地址。</p>
<p>再哈希法</p>
<p>在发生冲突的时候再用另外一个哈希函数算出哈希值，直到算出的哈希值不同为止。</p>
<p>建立公共溢出区</p>
<p>在创建哈希表的同时，再额外创建一个公共溢出区，专门用来存放发生哈希冲突的元素。查找时，先从哈希表查，查不到再去公共溢出区查。</p>
<h2 id="第8章-高级数据结构" tabindex="-1"><a class="header-anchor" href="#第8章-高级数据结构" aria-hidden="true">#</a> 第8章 高级数据结构</h2>
<h3 id="_9-1-优先队列" tabindex="-1"><a class="header-anchor" href="#_9-1-优先队列" aria-hidden="true">#</a> 9.1 优先队列</h3>
<p>优先队列 (Priority Queue)</p>
<h3 id="_9-2-图" tabindex="-1"><a class="header-anchor" href="#_9-2-图" aria-hidden="true">#</a> 9.2 图</h3>
<p>图(Graph)</p>
<h3 id="_9-3-前缀树" tabindex="-1"><a class="header-anchor" href="#_9-3-前缀树" aria-hidden="true">#</a> 9.3 前缀树</h3>
<p>前缀树(Trie)</p>
<h3 id="_9-4-线段树" tabindex="-1"><a class="header-anchor" href="#_9-4-线段树" aria-hidden="true">#</a> 9.4 线段树</h3>
<p>线段树(Segment Tree)</p>
<h3 id="_9-5-树状数组" tabindex="-1"><a class="header-anchor" href="#_9-5-树状数组" aria-hidden="true">#</a> 9.5 树状数组</h3>
<p>树状数组(Fenwick Tree/Binary Indexed Tree)</p>
</div></template>
