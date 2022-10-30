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
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># /config/elasticsearch.yml</span>
<span class="token key atrule">xpack.security.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>docker安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 拉取镜像
docker pull elasticsearch:8.4.3

# 运行容器
docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:8.4.3

# 查找容器信息
docker ps 

# 以root身份进入
docker exec -it -u root 3718f73b385e bash

# 更新软件源
apt-get update

# 安装vim
apt-get install vim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装 kibana 可视化</p>
<p>找到官网下载安装包后解压缩</p>
<p>运行bin目录下的elasticsearch.bat脚本</p>
<p>访问 <a href="http://localhost:5601" target="_blank" rel="noopener noreferrer">http://localhost:5601<ExternalLinkIcon/></a></p>
<p>安装elasticsearch-head可视化</p>
<p>谷歌插件商店搜索</p>
<h3 id="_2-2-索引" tabindex="-1"><a class="header-anchor" href="#_2-2-索引" aria-hidden="true">#</a> 2.2 索引</h3>
<h4 id="_2-2-1-倒排索引" tabindex="-1"><a class="header-anchor" href="#_2-2-1-倒排索引" aria-hidden="true">#</a> 2.2.1 倒排索引</h4>
<h4 id="_2-2-2-索引操作" tabindex="-1"><a class="header-anchor" href="#_2-2-2-索引操作" aria-hidden="true">#</a> 2.2.2 索引操作</h4>
<p>创建索引</p>
<p>发 <strong>PUT</strong> 请求 ：<a href="http://127.0.0.1:9200/shopping" target="_blank" rel="noopener noreferrer">http://127.0.0.1:9200/shopping<ExternalLinkIcon/></a></p>
<p>查看所有索引</p>
<p>发 <strong>GET</strong> 请求 ：<a href="http://127.0.0.1:9200/_cat/indices?v" target="_blank" rel="noopener noreferrer">http://127.0.0.1:9200/_cat/indices?v<ExternalLinkIcon/></a></p>
<p>查看单个索引</p>
<p>发 <strong>GET</strong> 请求 ：<a href="http://127.0.0.1:9200/shopping" target="_blank" rel="noopener noreferrer">http://127.0.0.1:9200/shopping<ExternalLinkIcon/></a></p>
<p>删除索引</p>
<p>发 <strong>DELETE</strong> 请求 ：<a href="http://127.0.0.1:9200/shopping" target="_blank" rel="noopener noreferrer">http://127.0.0.1:9200/shopping<ExternalLinkIcon/></a></p>
<h3 id="_2-3-查询" tabindex="-1"><a class="header-anchor" href="#_2-3-查询" aria-hidden="true">#</a> 2.3 查询</h3>
<p>2.4</p>
<h2 id="第3章-es-环境" tabindex="-1"><a class="header-anchor" href="#第3章-es-环境" aria-hidden="true">#</a> 第3章  ES 环境</h2>
<h2 id="第4章-es-进阶" tabindex="-1"><a class="header-anchor" href="#第4章-es-进阶" aria-hidden="true">#</a> 第4章 ES 进阶</h2>
<h2 id="第5章-es集成" tabindex="-1"><a class="header-anchor" href="#第5章-es集成" aria-hidden="true">#</a> 第5章 ES集成</h2>
<h3 id="_5-1-spring-data框架" tabindex="-1"><a class="header-anchor" href="#_5-1-spring-data框架" aria-hidden="true">#</a> 5.1  spring data框架</h3>
<p>依赖</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>	
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-data-elasticsearch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置</p>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token key attr-name">elasticsearch.host</span><span class="token punctuation">=</span><span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">elasticsearch.port</span><span class="token punctuation">=</span><span class="token value attr-value">9200	</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-spark-stream" tabindex="-1"><a class="header-anchor" href="#_5-2-spark-stream" aria-hidden="true">#</a> 5.2 spark stream</h3>
<h3 id="_5-3-flint" tabindex="-1"><a class="header-anchor" href="#_5-3-flint" aria-hidden="true">#</a> 5.3 flint</h3>
<h2 id="第6章-es优化" tabindex="-1"><a class="header-anchor" href="#第6章-es优化" aria-hidden="true">#</a> 第6章 ES优化</h2>
</div></template>
