<template><div><h2 id="第1章-概述" tabindex="-1"><a class="header-anchor" href="#第1章-概述" aria-hidden="true">#</a> 第1章 概述</h2>
<h3 id="_1-1-spark" tabindex="-1"><a class="header-anchor" href="#_1-1-spark" aria-hidden="true">#</a> 1.1 spark</h3>
<p>spark是一种基于内存的快速通用、可扩展的大数据分析计算引擎。</p>
<h3 id="_1-2-sprak-对比-hadoop" tabindex="-1"><a class="header-anchor" href="#_1-2-sprak-对比-hadoop" aria-hidden="true">#</a> 1.2 sprak 对比 hadoop</h3>
<p>spark数据通信是基于内存，而hadoop是基于磁盘</p>
<p>spark更擅长大数据计算，但受内存限制。</p>
<h3 id="_1-3-核心模块" tabindex="-1"><a class="header-anchor" href="#_1-3-核心模块" aria-hidden="true">#</a> 1.3 核心模块</h3>
<p>spark core</p>
<p>spark sql</p>
<p>spark streaming</p>
<p>sprak mllib</p>
<p>spark graphx</p>
<h2 id="第2章-spark安装" tabindex="-1"><a class="header-anchor" href="#第2章-spark安装" aria-hidden="true">#</a> 第2章 Spark安装</h2>
<h3 id="_2-1-scala环境配置" tabindex="-1"><a class="header-anchor" href="#_2-1-scala环境配置" aria-hidden="true">#</a> 2.1 scala环境配置</h3>
<p>官网下载 2.13.8 版本二进制源码，解压缩到一个目录</p>
<p>添加环境变量，<code v-pre>SCALA_HOME</code> ，在Path变量下添加<code v-pre>%SCALA_HOME%\bin</code></p>
<p>命令行输入<code v-pre>scala</code>，安装完成</p>
<h3 id="_2-2-scala在vscode中集成" tabindex="-1"><a class="header-anchor" href="#_2-2-scala在vscode中集成" aria-hidden="true">#</a> 2.2 scala在vscode中集成</h3>
<p>在项目下创建 .vscode目录，新建 tasks.json 文件</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"0.1.0"</span><span class="token punctuation">,</span>
    <span class="token property">"isShellCommand"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"showOutput"</span><span class="token operator">:</span> <span class="token string">"always"</span><span class="token punctuation">,</span>
    <span class="token property">"echoCommand"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"suppressTaskName"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"windows"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"command"</span><span class="token operator">:</span> <span class="token string">"cmd"</span><span class="token punctuation">,</span>
        <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"/C"</span><span class="token punctuation">,</span>
            <span class="token string">"scala"</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"linux"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"command"</span><span class="token operator">:</span> <span class="token string">"sh"</span><span class="token punctuation">,</span>
        <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"scala"</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"osx"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"command"</span><span class="token operator">:</span> <span class="token string">"sh"</span><span class="token punctuation">,</span>
        <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"scala"</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"tasks"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"taskName"</span><span class="token operator">:</span> <span class="token string">"run script"</span><span class="token punctuation">,</span>
            <span class="token property">"isBuildCommand"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">"${file}"</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目下新建一个 HelloWorld.scala 文件</p>
<div class="language-scala ext-scala line-numbers-mode"><pre v-pre class="language-scala"><code><span class="token keyword">object</span> HelloWorld <span class="token punctuation">{</span>
 <span class="token keyword">def</span> main<span class="token punctuation">(</span>args<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Unit</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        println<span class="token punctuation">(</span><span class="token string">"Hello, world!"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>Ctrl+Shift+B</code> 运行 <code v-pre>scala</code> 文件</p>
<p>一定要使用 <code v-pre>Ctrl+Shift+B</code> 运行文件</p>
<h3 id="_2-3-idea集成spark" tabindex="-1"><a class="header-anchor" href="#_2-3-idea集成spark" aria-hidden="true">#</a> 2.3 idea集成spark</h3>
<p>在 idea 中安装scala插件，SDK使用自己下载的2.13.8版本</p>
<p>pom依赖</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.spark<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spark-core_2.13<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.spark<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spark-sql_2.13<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.spark<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spark-streaming_2.13<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.spark<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spark-mllib_2.13<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p>
<div class="language-scala ext-scala line-numbers-mode"><pre v-pre class="language-scala"><code># spark<span class="token operator">-</span>project<span class="token operator">/</span>src<span class="token operator">/</span>main<span class="token operator">/</span>java<span class="token operator">/</span>test<span class="token punctuation">.</span>scala
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>rdd<span class="token punctuation">.</span></span>RDD
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>spark<span class="token punctuation">.</span></span><span class="token punctuation">{</span>SparkConf<span class="token punctuation">,</span> SparkContext<span class="token punctuation">}</span>

<span class="token keyword">object</span> test <span class="token punctuation">{</span>
  <span class="token keyword">def</span> main<span class="token punctuation">(</span>args<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Unit</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//application</span>


    <span class="token comment">//spark framework</span>

    <span class="token keyword">val</span> sparkConf <span class="token operator">=</span> <span class="token keyword">new</span> SparkConf<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>setMaster<span class="token punctuation">(</span><span class="token string">"local"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>setAppName<span class="token punctuation">(</span><span class="token string">"WordCount"</span><span class="token punctuation">)</span>
    <span class="token keyword">val</span> sc <span class="token operator">:</span> SparkContext <span class="token operator">=</span> <span class="token keyword">new</span> SparkContext<span class="token punctuation">(</span>sparkConf<span class="token punctuation">)</span>
    <span class="token keyword">val</span> fileRDD <span class="token operator">:</span> RDD<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span> <span class="token operator">=</span> sc<span class="token punctuation">.</span>textFile<span class="token punctuation">(</span><span class="token string">"input/word.txt"</span><span class="token punctuation">)</span>
    <span class="token keyword">val</span> wordRDD<span class="token operator">:</span> RDD<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span> <span class="token operator">=</span> fileRDD<span class="token punctuation">.</span>flatMap<span class="token punctuation">(</span>_<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">val</span> word2OneRDD<span class="token operator">:</span> RDD<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token builtin">String</span><span class="token punctuation">,</span><span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> wordRDD<span class="token punctuation">.</span>map<span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">val</span> word2CountRDD <span class="token operator">:</span> RDD<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token builtin">String</span><span class="token punctuation">,</span><span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> word2OneRDD<span class="token punctuation">.</span>reduceByKey<span class="token punctuation">(</span>_<span class="token operator">+</span>_<span class="token punctuation">)</span>
    <span class="token keyword">val</span> word2Count<span class="token operator">:</span>Array<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token builtin">String</span><span class="token punctuation">,</span><span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> word2CountRDD<span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span>
    word2Count<span class="token punctuation">.</span>foreach<span class="token punctuation">(</span>println<span class="token punctuation">)</span>

    sc<span class="token punctuation">.</span>stop<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># spark-project/input/word.txt

aaa bbb ccc eee fff aaa 
aaa    aaa   bbb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置日志输出目录和日志级别</p>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token comment"># log4j.properties</span>

<span class="token key attr-name">log4j.rootCategory</span><span class="token punctuation">=</span><span class="token value attr-value">ERROR, console</span>
<span class="token key attr-name">log4j.appender.console</span><span class="token punctuation">:</span> <span class="token value attr-value">org.apache.log4j.ConsoleAppender</span>
<span class="token key attr-name">log4j.appender.console.target</span><span class="token punctuation">:</span> <span class="token value attr-value">System.err</span>
<span class="token key attr-name">log4j.appender.console.layout</span><span class="token punctuation">:</span> <span class="token value attr-value">org.apache.log4j.PatternLayout</span>
<span class="token key attr-name">log4j.appender.console.layout.ConversionPattern</span><span class="token punctuation">:</span> <span class="token value attr-value">%d{yy/MM/dd HH:mm:ss} %p %c{1}：%m%n</span>
<span class="token key attr-name">log4j.logger.org.apache.spark.repl.Main</span><span class="token punctuation">:</span> <span class="token value attr-value">ERROR</span>
<span class="token key attr-name">log4j.logger.org.spark_project.jetty</span><span class="token punctuation">=</span><span class="token value attr-value">ERROR</span>
<span class="token key attr-name">log4j.logger.org.spark_project.jetty.util.component.AbstractLifeCycle</span><span class="token punctuation">=</span><span class="token value attr-value">ERROR</span>
<span class="token key attr-name">log4j.logger.org.apache.repl.SparkIMain$exprTyper</span><span class="token punctuation">=</span><span class="token value attr-value">ERROR</span>
<span class="token key attr-name">log4j.logger.org.apache.repl.SparkILoop$SparkILoopInterpreter</span><span class="token punctuation">=</span><span class="token value attr-value">ERROR</span>
<span class="token key attr-name">log4j.logger.org.apache.parquet</span><span class="token punctuation">=</span><span class="token value attr-value">ERROR</span>
<span class="token key attr-name">log4j.logger.parquet</span><span class="token punctuation">=</span><span class="token value attr-value">ERROR</span>
<span class="token key attr-name">log4j.logger.org.apache.hadoop.hive.metastore.RetryingHMSHandler</span><span class="token punctuation">=</span><span class="token value attr-value">FATAL</span>
<span class="token key attr-name">og4j.logger.org.apache.hadoop.hive.ql.exec.FunctionRegistry</span><span class="token punctuation">=</span><span class="token value attr-value">ERROR					</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-win系统部署" tabindex="-1"><a class="header-anchor" href="#_2-4-win系统部署" aria-hidden="true">#</a> 2.4 win系统部署</h3>
<h3 id="_2-5-常见安装报错" tabindex="-1"><a class="header-anchor" href="#_2-5-常见安装报错" aria-hidden="true">#</a> 2.5 常见安装报错</h3>
<ul>
<li>win 系统需要 hadoop 的 wine工具</li>
</ul>
<p><a href="https://github.com/cdarlint/winutils" target="_blank" rel="noopener noreferrer">https://github.com/cdarlint/winutils<ExternalLinkIcon/></a></p>
<ul>
<li>win 系统的 spark-shell 无论怎样都会报错</li>
</ul>
<h2 id="第3章-运行环境" tabindex="-1"><a class="header-anchor" href="#第3章-运行环境" aria-hidden="true">#</a> 第3章 运行环境</h2>
<h3 id="_3-1-linux本地模式安装" tabindex="-1"><a class="header-anchor" href="#_3-1-linux本地模式安装" aria-hidden="true">#</a> 3.1 linux本地模式安装</h3>
<p>下载安装包</p>
<p><a href="https://dlcdn.apache.org/spark/spark-3.2.1/spark-3.2.1-bin-hadoop3.2.tgz" target="_blank" rel="noopener noreferrer">spark-3.2.1-bin-hadoop3.2.tgz<ExternalLinkIcon/></a></p>
<p>解压缩到 /opt/module 目录下</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> spark-3.2.1-bin-hadoop3.2.tar <span class="token parameter variable">-C</span> /opt/module
<span class="token function">mv</span> /opt/module/spark-3.2.1-bin-hadoop3.2.tar /opt/module/spark-local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置环境变量</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 打开自定义的用户变量文件</span>
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/profile.d/my_env.sh

<span class="token comment"># 添加以下内容</span>
<span class="token comment"># SPARK_HOME</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">SPARL_HOME</span><span class="token operator">=</span>/opt/module/spark-local
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$SPARK_HOME</span>/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$PRARK_HOME</span>/sbin

<span class="token comment"># 保存退出</span>
:wq

<span class="token comment"># 刷新</span>
<span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 $SPARL_HOME/data 目录下新建 word.txt 文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>hello nihao
hello spark
hello spark
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动spark-shell</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>spark-shell

sc.textFile<span class="token punctuation">(</span><span class="token string">"data/word.txt"</span><span class="token punctuation">)</span>.flatMap<span class="token punctuation">(</span>_.split<span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">))</span>.map<span class="token variable"><span class="token punctuation">((</span>_<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">))</span></span>.reduceByKey<span class="token punctuation">(</span>_+_<span class="token punctuation">)</span>.collect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>监控页面</p>
<p><a href="http://xn--ip-tx5di3ni80c:4040" target="_blank" rel="noopener noreferrer">http://虚拟机ip:4040<ExternalLinkIcon/></a></p>
<p>spark-submit 运行的小例子</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 注意在命令行，不是spark-shell里</span>
spark-submit <span class="token punctuation">\</span>
<span class="token parameter variable">--class</span> org.apache.spark.examples.SparkPi <span class="token punctuation">\</span>
<span class="token parameter variable">--master</span> local<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">\</span>
./examples/jars/spark-examples_2.12-3.2.1.jar <span class="token punctuation">\</span>
<span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-独立集群模式-有问题" tabindex="-1"><a class="header-anchor" href="#_3-2-独立集群模式-有问题" aria-hidden="true">#</a> 3.2 独立集群模式  有问题！！！</h3>
<p>解压缩，重命名</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">tar</span> <span class="token parameter variable">-xvf</span> spark-3.2.1-bin-hadoop3.2.tar <span class="token parameter variable">-C</span> /opt/module
<span class="token function">mv</span> /opt/module/spark-3.2.1-bin-hadoop3.2 /opt/module/spark-standalone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 conf / workers 文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 重命名</span>
<span class="token builtin class-name">cd</span> /opt/module/spark-standalone/conf
<span class="token function">mv</span> workers.template workers

<span class="token comment"># 修改里面的 ip 地址</span>
hadoop102
hadoop103
hadoop104
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 conf / <a href="http://spark-env.sh" target="_blank" rel="noopener noreferrer">spark-env.sh<ExternalLinkIcon/></a> 文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/module/spark-standalone/conf
<span class="token function">mv</span> spark-env.sh.template spark-env.sh

<span class="token comment"># spark 集群配置</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/opt/module/jdk1.8.0_202  
<span class="token assign-left variable">SPARK_MASTER_HOST</span><span class="token operator">=</span>hadoop102
<span class="token assign-left variable">SPARK_MASTER_PORT</span><span class="token operator">=</span><span class="token number">7077</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分发集群</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">scp</span> <span class="token parameter variable">-r</span> /opt/module/spark-standalone root@192.168.10.103:/opt/module/

<span class="token function">scp</span> <span class="token parameter variable">-r</span> /opt/module/spark-standalone root@192.168.10.104:/opt/module/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动集群</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>sbin/start-all.sh
jps   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看后台页面</p>
<p><a href="http://hadoop102:7077" target="_blank" rel="noopener noreferrer">http://hadoop102:7077<ExternalLinkIcon/></a></p>
<p>提交应用</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>bin/spark-submit <span class="token punctuation">\</span>
<span class="token parameter variable">--class</span> org.apache.spark.examples.SparkPi <span class="token punctuation">\</span>
<span class="token parameter variable">--master</span> spark://hadoop102:7077 <span class="token punctuation">\</span>
./examples/jars/spark-examples_2.12-3.2.1.jar <span class="token punctuation">\</span>
<span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>历史服务器配置</p>
<p>高可用配置</p>
<h3 id="_3-3-yarn集群模式" tabindex="-1"><a class="header-anchor" href="#_3-3-yarn集群模式" aria-hidden="true">#</a> 3.3 yarn集群模式</h3>
<p>xsync</p>
<p>xcall</p>
<h2 id="第4章-core" tabindex="-1"><a class="header-anchor" href="#第4章-core" aria-hidden="true">#</a> 第4章 core</h2>
<h2 id="第5章-sql" tabindex="-1"><a class="header-anchor" href="#第5章-sql" aria-hidden="true">#</a> 第5章 sql</h2>
<h2 id="第6章-steaming" tabindex="-1"><a class="header-anchor" href="#第6章-steaming" aria-hidden="true">#</a> 第6章 steaming</h2>
<h2 id="第7章-mllib" tabindex="-1"><a class="header-anchor" href="#第7章-mllib" aria-hidden="true">#</a> 第7章 mllib</h2>
<h2 id="第8章-graphx" tabindex="-1"><a class="header-anchor" href="#第8章-graphx" aria-hidden="true">#</a> 第8章 graphx</h2>
</div></template>
