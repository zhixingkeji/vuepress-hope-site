<template><div><h2 id="第1章-jvm" tabindex="-1"><a class="header-anchor" href="#第1章-jvm" aria-hidden="true">#</a> 第1章 jvm</h2>
<h3 id="_1-1-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-简介" aria-hidden="true">#</a> 1.1 简介</h3>
<p>jvm 是java程序的运行环境, 准确说是java二进制字节码的运行环境</p>
<ul>
<li>优点</li>
</ul>
<p>一次编写, 多平台运行</p>
<p>自动内存管理, 垃圾回收功能</p>
<p>数组下标越界检查</p>
<p>多态</p>
<ul>
<li>缺点</li>
</ul>
<p>只能运行在装有jdk环境的系统上</p>
<ul>
<li>模块介绍</li>
</ul>
<p>java字节码 类加载器 本地方法接口</p>
<p>JVM内存结构: 方法区 堆 虚拟机栈 程序计数器 本地方法栈</p>
<p>执行引擎: 解释器 即时编译器 垃圾回收器</p>
<h3 id="_1-2-内存结构" tabindex="-1"><a class="header-anchor" href="#_1-2-内存结构" aria-hidden="true">#</a> 1.2 内存结构</h3>
<ul>
<li>程序计数器</li>
</ul>
<p>作用: 记住下一条jvm指令的地址</p>
<p>特点: 线程私有, 不会内存溢出</p>
<ul>
<li>虚拟机栈</li>
</ul>
<p>定义</p>
<p>每个线程运行时需要的内存, 称为虚拟机栈</p>
<p>每个栈由多个栈帧组成,对应每次方法调用时所占有的内存</p>
<p>每个线程只能有一个活动栈帧, 对应着当前正在执行的那个方法</p>
<p>栈的解释</p>
<p>垃圾回收器不管理栈内存, 只管理堆内存</p>
<p>栈内存不是越大越好, 相应的线程会减少</p>
<p>方法内局部变量没有逃离方法的作用访问是线程安全的, 但如果是局部变量引用了对象, 并逃离方法的作用方法, 需要考虑线程安全</p>
<p>栈内存溢出原因</p>
<ol>
<li>栈帧过多 (循环调用, 无限递归)</li>
<li>栈帧过大</li>
</ol>
<ul>
<li>本地方法栈</li>
</ul>
<p>和系统交互的方法</p>
<ul>
<li>堆 heap</li>
</ul>
<p>(1) 特点</p>
<p>通过new创建对象都会使用堆</p>
<p>堆是线程共享的, 需要考虑线程安全</p>
<p>有垃圾回收机制</p>
<p>(2) 堆内存溢出</p>
<p>创建对象太多超过堆空间</p>
<p>(3) 诊断工具</p>
<p>jps 查看当前系统中有哪些java进程</p>
<p>jmap 查看堆内存占用情况</p>
<p>jconsole 监测工具</p>
<ul>
<li>方法区</li>
</ul>
<p>(1) 定义</p>
<p>存储类相关的代码</p>
<p>jdk1.8以后由系统内存管理</p>
<p>(2) 组成</p>
<p>(3) 方法区内存溢出</p>
<p>(4) 运行时常量池</p>
<p>常量池就是一张表, 虚拟机指令根据这张常量表找到要执行的类名, 方法名, 参数类型, 字面量等信息</p>
<p>运行时常量池是class文件中的, 当该类被加载, 他的常量池信息就会放入运行时常量池, 并把里面符号地址变为真实地址</p>
<p>面试题</p>
<p><img src="@source/document/java后端/asset/image-20220912171408796.png" alt="image-20220912171408796" loading="lazy"></p>
<ul>
<li>直接内存</li>
</ul>
<p>用于数据缓冲区</p>
<p>读写性能高</p>
<p>不受jvm回收管理</p>
<h3 id="_1-4-执行引擎" tabindex="-1"><a class="header-anchor" href="#_1-4-执行引擎" aria-hidden="true">#</a> 1.4 执行引擎</h3>
<ul>
<li>
<p>解释器</p>
</li>
<li>
<p>线程状态</p>
</li>
</ul>
<p>6种状态</p>
<p>使用getState方法获取线程状态</p>
<h3 id="_8-7-锁" tabindex="-1"><a class="header-anchor" href="#_8-7-锁" aria-hidden="true">#</a> 8.7 锁</h3>
<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <img src="@source/document/java后端/asset/image-20220907215906957.png" alt="image-20220907215906957" loading="lazy"></h1>
<ul>
<li>
<p>即时编译器</p>
</li>
<li>
<p>垃圾回收器</p>
</li>
</ul>
<p>(1) 判断回收条件</p>
<p>引用计数法</p>
<p>可达性分析算法</p>
<p>四种引用</p>
<p>强引用 弱引用 虚引用 软引用 终结器引用</p>
<p>(2) 垃圾回收算法</p>
<p>(3) 分代垃圾回收</p>
<p>(4) 垃圾回收器</p>
<p>(5) 垃圾回收调优</p>
</div></template>
