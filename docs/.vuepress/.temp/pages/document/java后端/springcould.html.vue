<template><div><h2 id="一-spring-could-简介" tabindex="-1"><a class="header-anchor" href="#一-spring-could-简介" aria-hidden="true">#</a> 一 . Spring could - 简介</h2>
<h3 id="_1-1-微服务概念" tabindex="-1"><a class="header-anchor" href="#_1-1-微服务概念" aria-hidden="true">#</a> 1.1 微服务概念</h3>
<p>简而言之，就是将一个大型的单机应用系统拆分成若干个小的服务，这些小的服务独立部署，服务与服务之间采用rpc/http轻量协议传输数据，服务间不具有强耦合性，从而实现了单个服务的高内聚，服务与服务之间低耦合的效果。这些一个一个细分的小服务就称之为微服务。</p>
<h3 id="_1-2-版本对应" tabindex="-1"><a class="header-anchor" href="#_1-2-版本对应" aria-hidden="true">#</a> 1.2 版本对应</h3>
<p>毕业版本</p>
<p>[<a href="https://github.com/spring-cloud-incubator/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E" target="_blank" rel="noopener noreferrer">https://github.com/spring-cloud-incubator/spring-cloud-alibaba/wiki/版本说明<ExternalLinkIcon/></a>]</p>
<p><strong>我自己使用的版本</strong></p>
<table>
<thead>
<tr>
<th>Spring Cloud Alibaba Version</th>
<th>Spring Cloud Version</th>
<th>Spring Boot Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>2.2.6.RELEASE</td>
<td>Spring Cloud Hoxton.SR9</td>
<td>2.3.2.RELEASE</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>Spring Cloud Alibaba Version</th>
<th>Sentinel Version</th>
<th>Nacos Version</th>
<th>RocketMQ Version</th>
<th>Dubbo Version</th>
<th>Seata Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>2.2.6.RELEASE</td>
<td>1.8.1</td>
<td>1.4.2</td>
<td>4.4.0</td>
<td>2.7.8</td>
<td>1.3.0</td>
</tr>
</tbody>
</table>
<p><strong>官网推荐的</strong></p>
<p>组件版本关系</p>
<table>
<thead>
<tr>
<th>Spring Cloud Alibaba Version</th>
<th>Sentinel Version</th>
<th>Nacos Version</th>
<th>RocketMQ Version</th>
<th>Dubbo Version</th>
<th>Seata Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>2021.0.1.0*</td>
<td>1.8.3</td>
<td>1.4.2</td>
<td>4.9.2</td>
<td>2.7.15</td>
<td>1.4.2</td>
</tr>
<tr>
<td>2.2.7.RELEASE</td>
<td>1.8.1</td>
<td>2.0.3</td>
<td>4.6.1</td>
<td>2.7.13</td>
<td>1.3.0</td>
</tr>
<tr>
<td>2.2.6.RELEASE</td>
<td>1.8.1</td>
<td>1.4.2</td>
<td>4.4.0</td>
<td>2.7.8</td>
<td>1.3.0</td>
</tr>
<tr>
<td>2021.1 or 2.2.5.RELEASE or 2.1.4.RELEASE or 2.0.4.RELEASE</td>
<td>1.8.0</td>
<td>1.4.1</td>
<td>4.4.0</td>
<td>2.7.8</td>
<td>1.3.0</td>
</tr>
<tr>
<td>2.2.3.RELEASE or 2.1.3.RELEASE or 2.0.3.RELEASE</td>
<td>1.8.0</td>
<td>1.3.3</td>
<td>4.4.0</td>
<td>2.7.8</td>
<td>1.3.0</td>
</tr>
<tr>
<td>2.2.1.RELEASE or 2.1.2.RELEASE or 2.0.2.RELEASE</td>
<td>1.7.1</td>
<td>1.2.1</td>
<td>4.4.0</td>
<td>2.7.6</td>
<td>1.2.0</td>
</tr>
<tr>
<td>2.2.0.RELEASE</td>
<td>1.7.1</td>
<td>1.1.4</td>
<td>4.4.0</td>
<td>2.7.4.1</td>
<td>1.0.0</td>
</tr>
<tr>
<td>2.1.1.RELEASE or 2.0.1.RELEASE or 1.5.1.RELEASE</td>
<td>1.7.0</td>
<td>1.1.4</td>
<td>4.4.0</td>
<td>2.7.3</td>
<td>0.9.0</td>
</tr>
<tr>
<td>2.1.0.RELEASE or 2.0.0.RELEASE or 1.5.0.RELEASE</td>
<td>1.6.3</td>
<td>1.1.1</td>
<td>4.4.0</td>
<td>2.7.3</td>
<td>0.7.1</td>
</tr>
</tbody>
</table>
<p>毕业版本依赖关系</p>
<table>
<thead>
<tr>
<th>Spring Cloud Alibaba Version</th>
<th>Spring Cloud Version</th>
<th>Spring Boot Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>2021.0.1.0</td>
<td>Spring Cloud 2021.0.1</td>
<td>2.6.3</td>
</tr>
<tr>
<td>2.2.7.RELEASE</td>
<td>Spring Cloud Hoxton.SR12</td>
<td>2.3.12.RELEASE</td>
</tr>
<tr>
<td>2021.1</td>
<td>Spring Cloud 2020.0.1</td>
<td>2.4.2</td>
</tr>
<tr>
<td>2.2.6.RELEASE</td>
<td>Spring Cloud Hoxton.SR9</td>
<td>2.3.2.RELEASE</td>
</tr>
<tr>
<td>2.1.4.RELEASE</td>
<td>Spring Cloud Greenwich.SR6</td>
<td>2.1.13.RELEASE</td>
</tr>
<tr>
<td>2.2.1.RELEASE</td>
<td>Spring Cloud Hoxton.SR3</td>
<td>2.2.5.RELEASE</td>
</tr>
<tr>
<td>2.2.0.RELEASE</td>
<td>Spring Cloud Hoxton.RELEASE</td>
<td>2.2.X.RELEASE</td>
</tr>
<tr>
<td>2.1.2.RELEASE</td>
<td>Spring Cloud Greenwich</td>
<td>2.1.X.RELEASE</td>
</tr>
<tr>
<td>2.0.4.RELEASE(停止维护，建议升级)</td>
<td>Spring Cloud Finchley</td>
<td>2.0.X.RELEASE</td>
</tr>
<tr>
<td>1.5.1.RELEASE(停止维护，建议升级)</td>
<td>Spring Cloud Edgware</td>
<td>1.5.X.RELEASE</td>
</tr>
</tbody>
</table>
<h2 id="二-阿里nacos-服务注册与发现" tabindex="-1"><a class="header-anchor" href="#二-阿里nacos-服务注册与发现" aria-hidden="true">#</a> 二. 阿里nacos - 服务注册与发现</h2>
<p>相关技术（eureka停更，consul，zookeeper）</p>
<h3 id="_2-1-nacos-快速入门" tabindex="-1"><a class="header-anchor" href="#_2-1-nacos-快速入门" aria-hidden="true">#</a> 2.1 nacos 快速入门</h3>
<h3 id="_2-2-nacos-服务端配置" tabindex="-1"><a class="header-anchor" href="#_2-2-nacos-服务端配置" aria-hidden="true">#</a> 2.2 nacos 服务端配置</h3>
<h4 id="_2-2-1-nacos单机模式部署" tabindex="-1"><a class="header-anchor" href="#_2-2-1-nacos单机模式部署" aria-hidden="true">#</a> 2.2.1 nacos单机模式部署</h4>
<p>startup.cmd</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>set MODE="standalone"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-2-2-nacos集群模式部署" tabindex="-1"><a class="header-anchor" href="#_2-2-2-nacos集群模式部署" aria-hidden="true">#</a> 2.2.2 nacos集群模式部署</h4>
<ol>
<li>下载 nacos</li>
</ol>
<p>需要jdk环境</p>
<p>apt install openjdk-8-jre-headless</p>
<ol start="2">
<li>修改nacos/bin/</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">MODE</span><span class="token operator">=</span><span class="token string">"cluster"</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span><span class="token string">"/usr/lib/jvm/java-1.8.0-openjdk-amd64"</span>
<span class="token assign-left variable">JAVA_OPT</span><span class="token operator">=</span><span class="token string">"<span class="token variable">${JAVA_OPT}</span> -server -Xms64m -Xmx64m -Xmn32m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=320m"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>修改nacos/conf/cluster.conf</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">39.107</span>.251.205:8849
<span class="token number">39.107</span>.251.205:8850
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>修改nacos/conf/application.properties</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">server.port</span><span class="token operator">=</span><span class="token number">8849</span>
<span class="token assign-left variable">spring.datasource.platform</span><span class="token operator">=</span>mysql
<span class="token assign-left variable">db.num</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">db.url.0</span><span class="token operator">=</span>jdbc:mysql://127.0.0.1:3306/nacos?characterEncoding<span class="token operator">=</span>utf8<span class="token operator">&amp;</span><span class="token assign-left variable">connectTimeout</span><span class="token operator">=</span><span class="token number">1000</span><span class="token operator">&amp;</span><span class="token assign-left variable">socketTimeout</span><span class="token operator">=</span><span class="token number">3000</span><span class="token operator">&amp;</span><span class="token assign-left variable">autoReconnect</span><span class="token operator">=</span>true<span class="token operator">&amp;</span><span class="token assign-left variable">serverTimezone</span><span class="token operator">=</span>UTC
<span class="token assign-left variable">db.user.0</span><span class="token operator">=</span>root
<span class="token assign-left variable">db.password.0</span><span class="token operator">=</span>root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>登录<a href="http://ip" target="_blank" rel="noopener noreferrer">http://ip<ExternalLinkIcon/></a>:port/nacos</li>
</ol>
<p>账号 nacos    密码 nacos</p>
<h3 id="_2-3-客户端配置" tabindex="-1"><a class="header-anchor" href="#_2-3-客户端配置" aria-hidden="true">#</a> 2.3 客户端配置</h3>
<p>网卡配置</p>
<p>端口配置</p>
<p>宕机后是否删除</p>
<h3 id="_2-4-ribbon-负载均衡" tabindex="-1"><a class="header-anchor" href="#_2-4-ribbon-负载均衡" aria-hidden="true">#</a> 2.4 Ribbon 负载均衡</h3>
<p>相关技术 ( spring could loadbalance 功能不全 )</p>
<p>nacos 默认集成 ribbon</p>
<h4 id="_2-4-1-客户端使用负载均衡" tabindex="-1"><a class="header-anchor" href="#_2-4-1-客户端使用负载均衡" aria-hidden="true">#</a> 2.4.1 客户端使用负载均衡</h4>
<p>Ribbon</p>
<p>默认使用轮训算法</p>
<h4 id="_2-4-2-服务端使用负载均衡" tabindex="-1"><a class="header-anchor" href="#_2-4-2-服务端使用负载均衡" aria-hidden="true">#</a> 2.4.2 服务端使用负载均衡</h4>
<p>nginx</p>
<p>默认使用轮训算法</p>
<h4 id="_2-4-3-常见负载均衡算法" tabindex="-1"><a class="header-anchor" href="#_2-4-3-常见负载均衡算法" aria-hidden="true">#</a> 2.4.3 常见负载均衡算法</h4>
<p>随机 RandomRule</p>
<p>轮训 RoundRobinRule</p>
<p>重试 RetryRule</p>
<p>加权轮训</p>
<p>地址hash</p>
<p>最小连接数 BestAvailableRile</p>
<h4 id="_2-4-4-更改默认的策略" tabindex="-1"><a class="header-anchor" href="#_2-4-4-更改默认的策略" aria-hidden="true">#</a> 2.4.4 更改默认的策略</h4>
<p>创建配置类方法</p>
<p>创建一个IRule的Bean</p>
<p>要放到不能扫描的地方 或与启动类同级包下</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>ribbon</span><span class="token punctuation">;</span>


<span class="token comment">//注意这个配置文件不能放在springApplication能自动扫描到的地方</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>loadbalancer<span class="token punctuation">.</span></span><span class="token class-name">IRule</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>loadbalancer<span class="token punctuation">.</span></span><span class="token class-name">RoundRobinRule</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RibbonConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">IRule</span> <span class="token function">iRule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 默认负载均衡策略 轮询</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RoundRobinRule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在启动类上注解</p>
<p>为某个服务开启自定义的ribbon</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RibbonClients</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token annotation punctuation">@RibbonClient</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">"stock-service"</span><span class="token punctuation">,</span>configuration <span class="token operator">=</span> <span class="token class-name">RibbonConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-4-5-自定义策略" tabindex="-1"><a class="header-anchor" href="#_2-4-5-自定义策略" aria-hidden="true">#</a> 2.4.5 自定义策略</h4>
<h4 id="_2-4-6-使用-spring-loadbalancer替换-ribbon" tabindex="-1"><a class="header-anchor" href="#_2-4-6-使用-spring-loadbalancer替换-ribbon" aria-hidden="true">#</a> 2.4.6 使用 spring loadbalancer替换 ribbon</h4>
<p>暂时不用替换</p>
<h2 id="三-openfeign-服务调用" tabindex="-1"><a class="header-anchor" href="#三-openfeign-服务调用" aria-hidden="true">#</a> 三. openFeign - 服务调用</h2>
<p>相关技术（Feign停更 , RestTemplate繁琐）</p>
<h3 id="_3-1-openfeign-的介绍" tabindex="-1"><a class="header-anchor" href="#_3-1-openfeign-的介绍" aria-hidden="true">#</a> 3.1  openFeign 的介绍</h3>
<p>集成了 spring could netflix Ribbon</p>
<p>替代 RestTemplate , 使用注解的方式调用 Htpp API</p>
<p>支持 spring mvc 注解</p>
<h3 id="_3-2-openfeign-的使用" tabindex="-1"><a class="header-anchor" href="#_3-2-openfeign-的使用" aria-hidden="true">#</a> 3.2 openFeign 的使用</h3>
<p>maven依赖</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>denpendency</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gourpId</span><span class="token punctuation">></span></span>org.springframework.could<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>gourpId</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-could-starter-openfeign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>denpendency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建接口</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>order<span class="token punctuation">.</span>feign</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>openfeign<span class="token punctuation">.</span></span><span class="token class-name">FeignClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">"stock-service"</span><span class="token punctuation">,</span>path<span class="token operator">=</span><span class="token string">"/stock"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">StockFeignServoce</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/reduce"</span><span class="token punctuation">)</span>
    <span class="token class-name">String</span> <span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在控制器内注入 调用</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">StockFeignServoce</span> stockFeignServoce<span class="token punctuation">;</span>


<span class="token class-name">String</span> msg <span class="token operator">=</span> stockFeignServoce<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-日志配置" tabindex="-1"><a class="header-anchor" href="#_3-3-日志配置" aria-hidden="true">#</a> 3.3 日志配置</h3>
<h4 id="_3-3-1-日志级别" tabindex="-1"><a class="header-anchor" href="#_3-3-1-日志级别" aria-hidden="true">#</a> 3.3.1 日志级别</h4>
<p>NONE   默认</p>
<p>BASIC</p>
<p>HEADERS</p>
<p>FULL</p>
<h4 id="_3-3-2-日志配置" tabindex="-1"><a class="header-anchor" href="#_3-3-2-日志配置" aria-hidden="true">#</a> 3.3.2 日志配置</h4>
<p>conifg.OpenFeignConfig</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>order<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">feign<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token comment">//添加@Configuration注解表示全局启用,不加则局部启用</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OpenFeignConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Logger<span class="token punctuation">.</span>Level</span> <span class="token function">openfeignLoggerLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//日志级别</span>
        <span class="token keyword">return</span> <span class="token class-name">Logger<span class="token punctuation">.</span>Level</span><span class="token punctuation">.</span><span class="token constant">FULL</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个feign接口</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>order<span class="token punctuation">.</span>feign</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">"product-service"</span><span class="token punctuation">,</span>path<span class="token operator">=</span><span class="token string">"/product"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ProductFeignService</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/{id}"</span><span class="token punctuation">)</span>
    <span class="token class-name">String</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在控制器类里调用</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">ProductFeignService</span> productFeignService<span class="token punctuation">;</span>

<span class="token class-name">String</span> msg2 <span class="token operator">=</span> productFeignService<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改主配置yml文件</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># feign的默认级别是debug,spring默认是info,所以不会输出</span>
<span class="token comment">#单独为feign开启debug级别日志</span>
<span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">level</span><span class="token punctuation">:</span>
    <span class="token key atrule">com.example.order.feign</span><span class="token punctuation">:</span> debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-契约配置" tabindex="-1"><a class="header-anchor" href="#_3-4-契约配置" aria-hidden="true">#</a> 3.4 契约配置</h3>
<p>将适配springmvc的注解模式 修改为feign原生注解的模式</p>
<p>在配置类里增加一个bean</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">COntract</span> <span class="token function">feignContract</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Contract<span class="token punctuation">.</span>Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-超时配置" tabindex="-1"><a class="header-anchor" href="#_3-5-超时配置" aria-hidden="true">#</a> 3.5 超时配置</h3>
<p>在配置里增加一个bean</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">Request<span class="token punctuation">.</span>Options</span> <span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Request<span class="token punctuation">.</span>Options</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">,</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-自定义拦截器" tabindex="-1"><a class="header-anchor" href="#_3-6-自定义拦截器" aria-hidden="true">#</a> 3.6 自定义拦截器</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomFeignInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">RequestInterceptor</span><span class="token punctuation">{</span>
  
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">apply</span><span class="token punctuation">(</span><span class="token class-name">RequestTemplate</span> requestTemplate<span class="token punctuation">)</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-阿里-nacos-服务配置" tabindex="-1"><a class="header-anchor" href="#四-阿里-nacos-服务配置" aria-hidden="true">#</a> 四. 阿里 nacos - 服务配置</h2>
<p>相关技术（springcould config停更）</p>
<p>为配置文件生成md5  , 每隔几毫秒与上一次md5做对比 , 不同则拉取新配置</p>
<h3 id="_4-1-快速入门" tabindex="-1"><a class="header-anchor" href="#_4-1-快速入门" aria-hidden="true">#</a> 4.1 快速入门</h3>
<p><strong>引入依赖</strong></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--        nacos 配置中心--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-alibaba-nacos-config<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在nacos网页内新增配置</strong></p>
<p><img src="@source/document/java后端/asset/image-20220520080200118.png" alt="image-20220520080200118" loading="lazy"></p>
<p><strong>开启nacos服务端的权限</strong></p>
<p>nacos安装目录下的 application.properties  (注意不是springboot的配置文件)</p>
<p>nacos.core.auth.enabled=true</p>
<p><strong>在程序内新增一个bootstrap.yml文件</strong></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>config<span class="token punctuation">-</span>service
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8848</span>
      <span class="token key atrule">username</span><span class="token punctuation">:</span> nacos
      <span class="token key atrule">password</span><span class="token punctuation">:</span> nacos
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token key atrule">namespace</span><span class="token punctuation">:</span> public
        <span class="token key atrule">file-extension</span><span class="token punctuation">:</span> yaml

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主配置文件application.yml</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8050</span>

<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>config<span class="token punctuation">-</span>service
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8848</span>
      <span class="token key atrule">cluster-name</span><span class="token punctuation">:</span> DEFAULT_GROUP
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
        <span class="token key atrule">username</span><span class="token punctuation">:</span> nacos
        <span class="token key atrule">password</span><span class="token punctuation">:</span> nacos
        <span class="token key atrule">namespace</span><span class="token punctuation">:</span> public

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动类里感受config自动拉去配置文件</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>stock</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">ConfigurableApplicationContext</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span>


<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConfigApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>

        <span class="token class-name">ConfigurableApplicationContext</span> applicationContext <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ConfigApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">//感受nacos配置中心的自动拉取配置文件</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token doc-comment comment">/**
             * 获取nacos配置中心的文件
             * **/</span>

            <span class="token comment">//从默认配置中读取user.name</span>
            <span class="token class-name">String</span> username <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"user.name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//从默认配置中读取user.age</span>
            <span class="token class-name">String</span> userage <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"user.age"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//从shared-configs配置中读取user.config</span>
            <span class="token class-name">String</span> config <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"user.config"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//从extension-configs配置中读取user.config</span>
            <span class="token class-name">String</span> ex_config <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"user.config"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//从extension-configs配置中读取user.grade</span>
            <span class="token class-name">String</span> ex_grade <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"user.grade"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>userage<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ex_config<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ex_grade<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//每3秒读取一次文件</span>
            <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-其他拓展配置" tabindex="-1"><a class="header-anchor" href="#_4-2-其他拓展配置" aria-hidden="true">#</a> 4.2 其他拓展配置</h3>
<p>默认配置(与服务名相同的那个配置文件)和 profile配置</p>
<p>不同的配置项互补 , 相同配置项按优先级覆盖</p>
<p>优先级 : profile &gt; 默认配置 &gt; extension-configs &gt; shared-configs</p>
<h3 id="_4-3-读取自定义dataid公共配置文件" tabindex="-1"><a class="header-anchor" href="#_4-3-读取自定义dataid公共配置文件" aria-hidden="true">#</a> 4.3 读取自定义DataID公共配置文件</h3>
<p>bootstrap.yml</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># nacos-config 专用配置文件</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>config<span class="token punctuation">-</span>service <span class="token comment"># 默认配置文件与服务名相同</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8848</span>
      <span class="token key atrule">username</span><span class="token punctuation">:</span> nacos
      <span class="token key atrule">password</span><span class="token punctuation">:</span> nacos
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token key atrule">namespace</span><span class="token punctuation">:</span> public
        <span class="token key atrule">file-extension</span><span class="token punctuation">:</span> yaml  <span class="token comment"># 只针对默认配置文件</span>

        <span class="token comment"># 公共配置</span>
        <span class="token key atrule">shared-configs</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">data-id</span><span class="token punctuation">:</span> com.example.config.properties
            <span class="token key atrule">refresh</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

        <span class="token comment"># 拓展配置</span>
        <span class="token key atrule">extension-configs</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">data-id</span><span class="token punctuation">:</span> com.example.extension.yaml
            <span class="token key atrule">refresh</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

          <span class="token punctuation">-</span> <span class="token key atrule">data-id</span><span class="token punctuation">:</span> com.example.extension1.yaml
            <span class="token key atrule">refresh</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-动态获取配置的值" tabindex="-1"><a class="header-anchor" href="#_4-4-动态获取配置的值" aria-hidden="true">#</a> 4.4 动态获取配置的值</h3>
<p>在项目中读取配置中心的值</p>
<p>使用 <code v-pre>@Value</code> 注解不能动态感知</p>
<p>要在类上添加注解 <code v-pre>@RefreshScope</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>stock<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>context<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RefreshScope</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RefreshScope</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/config"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConfigController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${user.name}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/show"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"username: {}"</span><span class="token punctuation">,</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"自动获取获取username: "</span><span class="token operator">+</span>username<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-阿里-sentinel-服务熔断" tabindex="-1"><a class="header-anchor" href="#五-阿里-sentinel-服务熔断" aria-hidden="true">#</a> 五.  阿里 sentinel - 服务熔断</h2>
<p>相关技术（Hystrix停更）</p>
<h3 id="_5-1-介绍" tabindex="-1"><a class="header-anchor" href="#_5-1-介绍" aria-hidden="true">#</a> 5.1 介绍</h3>
<p><strong>Sentinel概念</strong></p>
<p>阿里巴巴开源的，面向分布式服务架构的高可用防护组件</p>
<p><strong>Sentinel 对比 Hystrix</strong></p>
<p><img src="@source/document/java后端/asset/image-20220520141418170.png" alt="image-20220520141418170" loading="lazy"></p>
<p><strong>服务器可用性问题</strong></p>
<p>负载不均，流量激增，线程池满，缺乏高可用防护，容错机制 ，单点故障，缓存击穿，DB超时，第三方服务卡顿</p>
<p><strong>服务雪崩</strong></p>
<p>某个小的服务例如积分服务挂了，导致某条链请求异常，而依赖了这条上的某个服务的另一条链也造成了瘫痪，最终因为一个小服务整个项目挂了</p>
<p><strong>容错机制</strong></p>
<p>请求限流，服务降级，过载直接拒绝请求，线程隔离，熔断，热点防护，整形</p>
<h3 id="_5-2-入门" tabindex="-1"><a class="header-anchor" href="#_5-2-入门" aria-hidden="true">#</a> 5.2 入门</h3>
<p><strong>pom.xml 引入依赖</strong></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--        sentinel 场景--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-alibaba-sentinel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>application.yml</strong></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8020</span>

<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> order<span class="token punctuation">-</span>sentinel
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">sentinel</span><span class="token punctuation">:</span>
      <span class="token key atrule">transport</span><span class="token punctuation">:</span>
        <span class="token key atrule">dashboard</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8858</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-2-启动本地服务端" tabindex="-1"><a class="header-anchor" href="#_5-2-2-启动本地服务端" aria-hidden="true">#</a> 5.2.2 启动本地服务端</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-Dserver.port</span><span class="token operator">=</span><span class="token number">8858</span> <span class="token parameter variable">-jar</span> sentinel-dashboard-1.8.1.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>访问端口后即可在网页控制台看到信息</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>http://127.0.0.1:8858/   # 用户名 sentinel 密码 sentinel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-3-流程控制" tabindex="-1"><a class="header-anchor" href="#_5-3-流程控制" aria-hidden="true">#</a> 5.3 流程控制</h3>
<p>服务提供端</p>
<h4 id="_5-3-1-阈值类型" tabindex="-1"><a class="header-anchor" href="#_5-3-1-阈值类型" aria-hidden="true">#</a> 5.3.1 阈值类型</h4>
<p>QPS流控  每秒访问次数</p>
<p>线程流控  并发线程数</p>
<h4 id="_5-3-2-流控模式" tabindex="-1"><a class="header-anchor" href="#_5-3-2-流控模式" aria-hidden="true">#</a> 5.3.2 流控模式</h4>
<p><strong>直接</strong></p>
<p>只影响本资源</p>
<p><strong>关联</strong></p>
<p>只影响设置关联的资源</p>
<p>当前有两个资源，一个生成订单，一个查询订单，当生成订单访问量大的时候，限流查询订单，以保证生成订单能占用到大量资源，查询订单和生成订单相比，生成订单更加重要。</p>
<p>具体操作，点击查询订单资源的流控按钮，资源为查询订单（对谁流控资源就是谁），关联资源为生成订单（关联的资源压力大的时候，限制当前资源的访问）。</p>
<p><img src="@source/document/java后端/asset/image-20220520174124326.png" alt="image-20220520174124326" loading="lazy"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>order<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>


<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/order"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderController</span> <span class="token punctuation">{</span>


    <span class="token comment">//生成订单</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/add"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"生成订单"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token string">"生成订单"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//查询订单</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/get"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"查询订单"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token string">"查询订单"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>链路</strong></p>
<p>影响入口资源</p>
<p>当前有个资源叫 <code v-pre>getUser方法</code>，有两个接口<code v-pre>test1</code> <code v-pre>test2</code>里调用了该方法，当getUser方法调用次数过多时，限制test1接口，不限制test2接口。</p>
<p>具体操作，在getUser方法上声明为Sentinel资源，点击该资源的流控按钮，设置入口资源为test1接口。</p>
<p>需要在application.yml中关闭链路收敛</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><h4 id="_5-3-3-流控效果" tabindex="-1"><a class="header-anchor" href="#_5-3-3-流控效果" aria-hidden="true">#</a> 5.3.3 流控效果</h4>
<p><code v-pre>快速失败</code> 直接拒绝</p>
<p><code v-pre>warm up</code>  预热时间</p>
<p>预热时长 5s</p>
<p>适合洪峰流量</p>
<p>在5秒内，从预热因子默认为3，慢慢增长到指定的阈值</p>
<p><code v-pre>排队等待</code> 超时时间</p>
<p>超时时间 5s</p>
<p>适合脉冲流量</p>
<h4 id="_5-3-4-全局异常和自定义异常处理" tabindex="-1"><a class="header-anchor" href="#_5-3-4-全局异常和自定义异常处理" aria-hidden="true">#</a> 5.3.4 全局异常和自定义异常处理</h4>
<p>自定义异常处理</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SentinelResource</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">"getUser"</span><span class="token punctuation">,</span>blockHandler<span class="token operator">=</span><span class="token string">"blockHandlerGerUser"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"查询用户"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//自定义异常处理方法</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">blockHandlerGerUser</span><span class="token punctuation">(</span><span class="token class-name">BlockException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"查询用户"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-降级规则" tabindex="-1"><a class="header-anchor" href="#_5-4-降级规则" aria-hidden="true">#</a> 5.4 降级规则</h3>
<p>只能对弱依赖降级 针对服务消费端的</p>
<h4 id="_5-4-1-过程解析" tabindex="-1"><a class="header-anchor" href="#_5-4-1-过程解析" aria-hidden="true">#</a> 5.4.1 过程解析</h4>
<p>请求按比例进来 比如10个中有1个是慢调用就进入熔断</p>
<p>在熔断时间过后 进入半开状态</p>
<p>半开状态只要有一次出现慢调用再次熔断</p>
<h4 id="_5-4-2-熔断策略" tabindex="-1"><a class="header-anchor" href="#_5-4-2-熔断策略" aria-hidden="true">#</a> 5.4.2 熔断策略</h4>
<p>慢调用比例</p>
<p>异常比例</p>
<p>异常数</p>
<h3 id="_5-5-热点规则" tabindex="-1"><a class="header-anchor" href="#_5-5-热点规则" aria-hidden="true">#</a> 5.5 热点规则</h3>
<h3 id="_5-6-系统规则" tabindex="-1"><a class="header-anchor" href="#_5-6-系统规则" aria-hidden="true">#</a> 5.6 系统规则</h3>
<h3 id="_5-7-规则持久化" tabindex="-1"><a class="header-anchor" href="#_5-7-规则持久化" aria-hidden="true">#</a> 5.7 规则持久化</h3>
<p>sentinel 默认配置保存在内存中 重启服务后丢失</p>
<p>pull 拉模式</p>
<p>push 推模式 结合 nacos配置中心</p>
<p><img src="@source/document/java后端/asset/image-20220520190744103.png" alt="image-20220520190744103" loading="lazy"></p>
<p>只能从nacos中拉 , 在sentinel中修改配置后无法推送给nacos , 需要寻找其他方法</p>
<h3 id="_5-8-整合openfeign" tabindex="-1"><a class="header-anchor" href="#_5-8-整合openfeign" aria-hidden="true">#</a> 5.8 整合openfeign</h3>
<h3 id="_5-9-整合getway" tabindex="-1"><a class="header-anchor" href="#_5-9-整合getway" aria-hidden="true">#</a> 5.9 整合getway</h3>
<p>依赖</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--        sentinel 整合gateway--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-alibaba-sentinel-gateway<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/document/java后端/asset/image-20220520191811337.png" alt="image-20220520191811337" loading="lazy"></p>
<h2 id="六-阿里-seata-事物" tabindex="-1"><a class="header-anchor" href="#六-阿里-seata-事物" aria-hidden="true">#</a> 六. 阿里 seata - 事物</h2>
<p>相关技术（）</p>
<p>分布式事务解决方案</p>
<p>一般来说 分布式事物不用seata , 除非某些纯金融类应用 如支付宝</p>
<p>普通项目用 消息队列控制事物</p>
<h3 id="_6-1-事物概念" tabindex="-1"><a class="header-anchor" href="#_6-1-事物概念" aria-hidden="true">#</a> 6.1 事物概念</h3>
<p><strong>本地事物</strong></p>
<p>Transactional</p>
<p><strong>事物特性</strong></p>
<p>原子性，一致性，隔离性，持久性</p>
<p><strong>分布式事物</strong></p>
<p><strong>事务模式</strong></p>
<p>AT (seata)  TCC(MQ)   SAGA   XA</p>
<p><strong>事务协议</strong></p>
<p>两阶段 (2PC)   三阶段 (3PC)</p>
<p><img src="@source/document/java后端/asset/image-20220520193653353.png" alt="image-20220520193653353" loading="lazy"></p>
<h3 id="_6-2-at模式" tabindex="-1"><a class="header-anchor" href="#_6-2-at模式" aria-hidden="true">#</a> 6.2 AT模式</h3>
<p><strong>Seata概念</strong></p>
<p>采用二阶段 , 无侵入式分布式事物解决方案</p>
<p><strong>Seata三个角色</strong></p>
<p>TC 事务协调者 驱动全局事务提交或回滚</p>
<p>TM 事务管理器 定义全局事务的范围, 开始全局事务, 提交或回滚全局事务</p>
<p>RM 资源管理器 管理分支事务处理的资源</p>
<p><strong>一阶段</strong></p>
<p>劫持sql 解析sql语义 保存快照<code v-pre>before image</code></p>
<p>执行sql 保存新快照<code v-pre>after image</code> 生成行锁</p>
<p>提交业务sql  <code v-pre>undo log</code>  <code v-pre>redo log</code></p>
<p><strong>二阶段 回滚</strong></p>
<p>校验脏写 : 对比 <code v-pre>after image</code> 和 <code v-pre>数据库数据</code></p>
<p>还原数据 : <code v-pre>before image</code> <code v-pre>逆向sql</code> <code v-pre>数据还原</code></p>
<p>删除中间数据 : 删除 <code v-pre>before image</code>  删除 <code v-pre>after image</code>  删除 <code v-pre>行锁</code></p>
<p><strong>二阶段 提交</strong></p>
<p>删除中间数据 : 删除 <code v-pre>before image</code>  删除 <code v-pre>after image</code>  删除 <code v-pre>行锁</code></p>
<h3 id="_6-3-tcc模式" tabindex="-1"><a class="header-anchor" href="#_6-3-tcc模式" aria-hidden="true">#</a> 6.3 TCC模式</h3>
<p><strong>TCC</strong></p>
<p>侵入式比较强 , 需要自己实现相关业务逻辑</p>
<p>没有锁的概念 , 性能更强</p>
<p>使用 MQ 保证可靠消息最终一致性方案</p>
<p><strong>Try阶段</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Try</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sendMQ
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Confirm</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Confirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span><span class="token punctuation">{</span>
       <span class="token function">sendCommit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Cancel</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">deleteMQ</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-at入门案例" tabindex="-1"><a class="header-anchor" href="#_6-4-at入门案例" aria-hidden="true">#</a> 6.4 AT入门案例</h3>
<p>开启注解</p>
<p><code v-pre>@GlobalTransacational</code></p>
<p>下载 TC 服务端</p>
<p><a href="https://github.com/seata/seata/releases" target="_blank" rel="noopener noreferrer">https://github.com/seata/seata/releases<ExternalLinkIcon/></a></p>
<p>seata / conf / file.conf</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mode = "file"   // 还以 mysqlDB  和 redis 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="七-spring-cloud-gateway-服务网关" tabindex="-1"><a class="header-anchor" href="#七-spring-cloud-gateway-服务网关" aria-hidden="true">#</a> 七. spring Cloud gateway - 服务网关</h2>
<p>相关技术（zuul停更，zuul2停更）</p>
<h3 id="_7-1-简介" tabindex="-1"><a class="header-anchor" href="#_7-1-简介" aria-hidden="true">#</a> 7.1 简介</h3>
<p>无网关的架构的问题</p>
<p>每个业务都需要鉴权 , 限流 , 跨域 等逻辑</p>
<p>多个微服务域名不同 , 存在数百个不同的域名</p>
<p>采用网关的架构的优点</p>
<p><img src="@source/document/java后端/asset/image-20220520202943046.png" alt="image-20220520202943046" loading="lazy"></p>
<p><img src="@source/document/java后端/asset/image-20220520203415736.png" alt="image-20220520203415736" loading="lazy"></p>
<h3 id="_7-2-入门案例" tabindex="-1"><a class="header-anchor" href="#_7-2-入门案例" aria-hidden="true">#</a> 7.2 入门案例</h3>
<p><strong>依赖</strong></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- 不能加入springmvc依赖--></span>

<span class="token comment">&lt;!--        网关 场景--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-gateway<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>application.yml配置</strong></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8088</span>

<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> api<span class="token punctuation">-</span>gateway
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8848</span>
      <span class="token key atrule">cluster-name</span><span class="token punctuation">:</span> DEFAULT_GROUP
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
        <span class="token key atrule">username</span><span class="token punctuation">:</span> nacos
        <span class="token key atrule">password</span><span class="token punctuation">:</span> nacos
        <span class="token key atrule">namespace</span><span class="token punctuation">:</span> public
    <span class="token key atrule">gateway</span><span class="token punctuation">:</span>
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
        <span class="token key atrule">locator</span><span class="token punctuation">:</span>
          <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 自动匹配服务名</span>
          
<span class="token comment">#      手动配置方式     </span>
<span class="token comment">#      routers:</span>
<span class="token comment">#        - id: order_router  # 路由唯一表示</span>
<span class="token comment">#          url: lb://order-service  # 转发后的地址</span>
<span class="token comment">#          predicates:</span>
<span class="token comment">#            - Path=/order-serv/**</span>
<span class="token comment">#          filters:</span>
<span class="token comment">#            - StripPrefix=1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-断言" tabindex="-1"><a class="header-anchor" href="#_7-3-断言" aria-hidden="true">#</a> 7.3 断言</h3>
<p><strong>作用</strong></p>
<p>当请求 gateway 的时候，使用断言请求进行匹配，如果匹配成功就路由转发，如果匹配失败就返回404</p>
<p><strong>类型</strong></p>
<p>内置</p>
<h4 id="基于datatime类型的断言工厂" tabindex="-1"><a class="header-anchor" href="#基于datatime类型的断言工厂" aria-hidden="true">#</a> 基于Datatime类型的断言工厂</h4>
<h4 id="基于远程地址的断言工厂" tabindex="-1"><a class="header-anchor" href="#基于远程地址的断言工厂" aria-hidden="true">#</a> 基于远程地址的断言工厂</h4>
<h4 id="基于cookie的断言工厂" tabindex="-1"><a class="header-anchor" href="#基于cookie的断言工厂" aria-hidden="true">#</a> 基于Cookie的断言工厂</h4>
<h4 id="基于header的断言工厂" tabindex="-1"><a class="header-anchor" href="#基于header的断言工厂" aria-hidden="true">#</a> 基于Header的断言工厂</h4>
<h4 id="基于host的断言工厂" tabindex="-1"><a class="header-anchor" href="#基于host的断言工厂" aria-hidden="true">#</a> 基于Host的断言工厂</h4>
<h4 id="基于method请求方法的断言工厂" tabindex="-1"><a class="header-anchor" href="#基于method请求方法的断言工厂" aria-hidden="true">#</a> 基于Method请求方法的断言工厂</h4>
<h4 id="基于query请求参数的断言工厂" tabindex="-1"><a class="header-anchor" href="#基于query请求参数的断言工厂" aria-hidden="true">#</a> 基于Query请求参数的断言工厂</h4>
<h4 id="基于路由权重的断言工厂" tabindex="-1"><a class="header-anchor" href="#基于路由权重的断言工厂" aria-hidden="true">#</a> 基于路由权重的断言工厂</h4>
<h4 id="自定义路由断言工厂" tabindex="-1"><a class="header-anchor" href="#自定义路由断言工厂" aria-hidden="true">#</a> 自定义路由断言工厂</h4>
<h3 id="_7-4-过滤器" tabindex="-1"><a class="header-anchor" href="#_7-4-过滤器" aria-hidden="true">#</a> 7.4 过滤器</h3>
<p>官网31个局部过滤器</p>
<p>全局滤过器</p>
<p><img src="@source/document/java后端/asset/image-20220521184543666.png" alt="image-20220521184543666" loading="lazy"></p>
<h3 id="_7-5-网关配置跨域" tabindex="-1"><a class="header-anchor" href="#_7-5-网关配置跨域" aria-hidden="true">#</a> 7.5 网关配置跨域</h3>
<p>config / CorsConfig.java</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>stock<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>cors<span class="token punctuation">.</span></span><span class="token class-name">CorsConfiguration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>cors<span class="token punctuation">.</span>reactive<span class="token punctuation">.</span></span><span class="token class-name">CorsWebFilter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>cors<span class="token punctuation">.</span>reactive<span class="token punctuation">.</span></span><span class="token class-name">UrlBasedCorsConfigurationSource</span></span><span class="token punctuation">;</span>

<span class="token comment">// 该跨域配置与springmvc完全不同</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CorsConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">CorsWebFilter</span> <span class="token function">corsFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">CorsConfiguration</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CorsConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        config<span class="token punctuation">.</span><span class="token function">addAllowedMethod</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        config<span class="token punctuation">.</span><span class="token function">addAllowedHeader</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        config<span class="token punctuation">.</span><span class="token function">addAllowedOrigin</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//注意引入包的时候最后有 .reactive</span>
        <span class="token class-name">UrlBasedCorsConfigurationSource</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UrlBasedCorsConfigurationSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        source<span class="token punctuation">.</span><span class="token function">registerCorsConfiguration</span><span class="token punctuation">(</span><span class="token string">"/**"</span><span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CorsWebFilter</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
                
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-6-集成-sentinel" tabindex="-1"><a class="header-anchor" href="#_7-6-集成-sentinel" aria-hidden="true">#</a> 7.6 集成 Sentinel</h3>
<p>添加依赖</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>   <span class="token comment">&lt;!--        sentinel 场景--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-alibaba-sentinel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>


        <span class="token comment">&lt;!--        sentinel_网关 场景--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-alibaba-sentinel-gateway<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring.could.sentinel.transport.dashboard</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8858</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="八-apache-skywalking-服务跟踪" tabindex="-1"><a class="header-anchor" href="#八-apache-skywalking-服务跟踪" aria-hidden="true">#</a> 八. Apache SkyWalking - 服务跟踪</h2>
<p>相关技术spring could sleuth</p>
<h3 id="_8-1-简介" tabindex="-1"><a class="header-anchor" href="#_8-1-简介" aria-hidden="true">#</a> 8.1 简介</h3>
<p><strong>微服务架构的问题</strong></p>
<p><img src="@source/document/java后端/asset/image-20220520204844583.png" alt="image-20220520204844583" loading="lazy"></p>
<p><strong>SkyWalking</strong></p>
<p>包括了分布式追踪 , 性能指标分析 , 应用和服务依赖分析等功能</p>
<p><strong>主要功能</strong></p>
<p><img src="@source/document/java后端/asset/image-20220520205338301.png" alt="image-20220520205338301" loading="lazy"></p>
<h3 id="_8-2-入门案例" tabindex="-1"><a class="header-anchor" href="#_8-2-入门案例" aria-hidden="true">#</a> 8.2 入门案例</h3>
<p><strong>下载程序</strong></p>
<p>推荐版本 8.5.0 for mysql 版本</p>
<p><a href="https://archive.apache.org/dist/skywalking/8.5.0/apache-skywalking-apm-es7-8.5.0.tar.gz" target="_blank" rel="noopener noreferrer">https://archive.apache.org/dist/skywalking/8.5.0/apache-skywalking-apm-es7-8.5.0.tar.gz<ExternalLinkIcon/></a></p>
<p><strong>配置端口</strong></p>
<p>webapp / webapp.yml</p>
<p>控制台界面端口 8868</p>
<p>收集监控数据的端口 11800</p>
<p>接受前端请求的端口 12800</p>
<p><img src="@source/document/java后端/asset/image-20220521192401839.png" alt="image-20220521192401839" loading="lazy"></p>
<p><strong>网关插件</strong></p>
<p>默认不支持gateway</p>
<p>将 agent \ optional-plugins \ apm-spring-cloud-gateway-2.1.x-plugin-8.5.0.jar</p>
<p>复制到文件夹下 agent \ plugins</p>
<p><strong>开启服务</strong></p>
<p>bin / startup.bat</p>
<p><strong>配置vm启动参数</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>-javaagent:D:<span class="token punctuation">\</span>Environment<span class="token punctuation">\</span>apache-skywalking-apm-bin-es7<span class="token punctuation">\</span>agent<span class="token punctuation">\</span>skywalking-agent.jar
<span class="token parameter variable">-DSW_AGENT_NAME</span><span class="token operator">=</span>api-gateway
<span class="token parameter variable">-DSW_AGENT_COLLECTOR_BACKEND_SERVICES</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1:11800
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-mysql持久化" tabindex="-1"><a class="header-anchor" href="#_8-3-mysql持久化" aria-hidden="true">#</a> 8.3 mysql持久化</h3>
<p><strong>配置数据库</strong></p>
<p>config / application.yml</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>storage:
	selector: mysql
	mysql:
		properties:
			jdbc: 127.0.0.1:3306/swtest
			user: root	
			password: wangle2018
	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将mysql连接驱动放到 oap-libs 文件夹里</p>
<h3 id="_8-4-自定义链路追踪" tabindex="-1"><a class="header-anchor" href="#_8-4-自定义链路追踪" aria-hidden="true">#</a> 8.4 自定义链路追踪</h3>
<p>依赖</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code> <span class="token comment">&lt;!--        skywalking工具类--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.skywalking<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>apm-toolkit-trace<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>8.5.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//将业务方法加入链路追踪</span>
<span class="token annotation punctuation">@Trace</span>


<span class="token comment">//为链路追踪增加其他额外信息,比如记录参数和返回信息</span>
<span class="token annotation punctuation">@Tags</span><span class="token punctuation">(</span>  <span class="token comment">//key一般为方法名</span>
    <span class="token punctuation">{</span><span class="token annotation punctuation">@Tag</span><span class="token punctuation">(</span>key<span class="token operator">=</span><span class="token string">"getAll"</span><span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token string">"returnedObj"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">//记录返回值 value固定写法</span>
     <span class="token annotation punctuation">@Tag</span><span class="token punctuation">(</span>key<span class="token operator">=</span><span class="token string">"getAll"</span><span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token string">"arg[0]"</span><span class="token punctuation">)</span>   <span class="token comment">//记录参数</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-5-日志" tabindex="-1"><a class="header-anchor" href="#_8-5-日志" aria-hidden="true">#</a> 8.5 日志</h3>
<h3 id="_8-6-告警" tabindex="-1"><a class="header-anchor" href="#_8-6-告警" aria-hidden="true">#</a> 8.6 告警</h3>
</div></template>
