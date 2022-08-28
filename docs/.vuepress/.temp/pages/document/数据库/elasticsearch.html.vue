<template><div><h2 id="第1章-es-概述" tabindex="-1"><a class="header-anchor" href="#第1章-es-概述" aria-hidden="true">#</a> 第1章 ES 概述</h2>
<h3 id="_1-1-es介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-es介绍" aria-hidden="true">#</a> 1.1 es介绍</h3>
<p>ES是一个开源的高扩展的分布式全文搜索引擎。</p>
<h3 id="_1-2-搜索引擎" tabindex="-1"><a class="header-anchor" href="#_1-2-搜索引擎" aria-hidden="true">#</a> 1.2 搜索引擎</h3>
<ul>
<li>全文搜索引擎</li>
</ul>
<p>如百度 谷歌 搜狗等</p>
<ul>
<li>垂直所有引擎</li>
</ul>
<p>如电商网站 oa系统 等</p>
<h2 id="第2章-es入门" tabindex="-1"><a class="header-anchor" href="#第2章-es入门" aria-hidden="true">#</a> 第2章  ES入门</h2>
<h3 id="_2-1-软件安装" tabindex="-1"><a class="header-anchor" href="#_2-1-软件安装" aria-hidden="true">#</a> 2.1 软件安装</h3>
<p>安装 es</p>
<p>找到官网下载安装包后解压缩</p>
<p>运行bin目录下的elasticsearch.bat脚本</p>
<p>访问 <a href="http://localhost:9200" target="_blank" rel="noopener noreferrer">http://localhost:9200<ExternalLinkIcon/></a></p>
<p>注意 8.0版本以上默认开启ssl , 需要关闭该设置</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># elasticsearch.yml</span>
<span class="token key atrule">xpack.security.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装 kibana 可视化</p>
<p>找到官网下载安装包后解压缩</p>
<p>运行bin目录下的elasticsearch.bat脚本</p>
<p>访问 <a href="http://localhost:5601" target="_blank" rel="noopener noreferrer">http://localhost:5601<ExternalLinkIcon/></a></p>
<p>安装elasticsearch-head</p>
<p>谷歌插件搜索</p>
<h3 id="_2-2-基本操作" tabindex="-1"><a class="header-anchor" href="#_2-2-基本操作" aria-hidden="true">#</a> 2.2 基本操作</h3>
<h4 id="_2-2-2-索引操作" tabindex="-1"><a class="header-anchor" href="#_2-2-2-索引操作" aria-hidden="true">#</a> 2.2.2 索引操作</h4>
<p>创建索引</p>
<p>发 <strong>PUT</strong> 请求 ：<a href="http://127.0.0.1:9200/shopping" target="_blank" rel="noopener noreferrer">http://127.0.0.1:9200/shopping<ExternalLinkIcon/></a></p>
<p>查看所有索引</p>
<p>发 <strong>GET</strong> 请求 ：<a href="http://127.0.0.1:9200/_cat/indices?v" target="_blank" rel="noopener noreferrer">http://127.0.0.1:9200/_cat/indices?v<ExternalLinkIcon/></a></p>
<p>查看单个索引</p>
<p>发 <strong>GET</strong> 请求 ：<a href="http://127.0.0.1:9200/shopping" target="_blank" rel="noopener noreferrer">http://127.0.0.1:9200/shopping<ExternalLinkIcon/></a></p>
<p>删除索引</p>
<p>发 <strong>DELETE</strong> 请求 ：<a href="http://127.0.0.1:9200/shopping" target="_blank" rel="noopener noreferrer">http://127.0.0.1:9200/shopping<ExternalLinkIcon/></a></p>
<h2 id="第3章-es-环境" tabindex="-1"><a class="header-anchor" href="#第3章-es-环境" aria-hidden="true">#</a> 第3章  ES 环境</h2>
<h2 id="第4章-es-进阶" tabindex="-1"><a class="header-anchor" href="#第4章-es-进阶" aria-hidden="true">#</a> 第4章 ES 进阶</h2>
<h2 id="第5章-es集成" tabindex="-1"><a class="header-anchor" href="#第5章-es集成" aria-hidden="true">#</a> 第5章 ES集成</h2>
<h2 id="第6章-es优化" tabindex="-1"><a class="header-anchor" href="#第6章-es优化" aria-hidden="true">#</a> 第6章 ES优化</h2>
</div></template>
