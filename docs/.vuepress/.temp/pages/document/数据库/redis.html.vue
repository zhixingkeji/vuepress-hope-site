<template><div><h2 id="一-redis-简介" tabindex="-1"><a class="header-anchor" href="#一-redis-简介" aria-hidden="true">#</a> 一. redis 简介</h2>
<h3 id="_1-1-nosql-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-nosql-简介" aria-hidden="true">#</a> 1.1 nosql 简介</h3>
<p>不遵循 sql 标准</p>
<p>不持之 acid</p>
<p>远超 sql 性能</p>
<p>对数据高并发读写</p>
<p>对数据高可拓展性</p>
<h4 id="_1-1-1-web-1-0-时代" tabindex="-1"><a class="header-anchor" href="#_1-1-1-web-1-0-时代" aria-hidden="true">#</a> 1.1.1 web 1.0 时代</h4>
<p>电脑 -&gt; 服务器 -&gt; 数据库</p>
<h4 id="_1-1-2-web-2-0-时代" tabindex="-1"><a class="header-anchor" href="#_1-1-2-web-2-0-时代" aria-hidden="true">#</a> 1.1.2 web 2.0 时代</h4>
<p>手机,电脑 -&gt; 服务器 -&gt; 数据库</p>
<h4 id="_1-1-3-解决cpu内存压力" tabindex="-1"><a class="header-anchor" href="#_1-1-3-解决cpu内存压力" aria-hidden="true">#</a> 1.1.3 解决cpu内存压力</h4>
<p>session信息存储</p>
<ol>
<li>存在cookie里, 安全性低</li>
<li>session复制, 浪费资源</li>
<li>文件服务器, 花费大</li>
<li>缓存数据库redis, 最终方案</li>
</ol>
<h4 id="_1-1-4-解决-io-压力" tabindex="-1"><a class="header-anchor" href="#_1-1-4-解决-io-压力" aria-hidden="true">#</a> 1.1. 4 解决 IO 压力</h4>
<p>频繁查询的数据, 放到缓存数据库中, 就不会到关系数据库中查询</p>
<h3 id="_1-2-redis简介" tabindex="-1"><a class="header-anchor" href="#_1-2-redis简介" aria-hidden="true">#</a> 1.2 redis简介</h3>
<p>Redis 是完全开源的，遵守 BSD 协议，是一个高性能的 key-value 数据库。</p>
<p>持久化 , 主从备份, 多种数据结构 , 支持事物 , 时效性 , 原子性</p>
<hr>
<h3 id="_1-3-基本数据类型" tabindex="-1"><a class="header-anchor" href="#_1-3-基本数据类型" aria-hidden="true">#</a> 1.3 <strong>基本数据类型</strong></h3>
<p>Redis支持五种数据类型：<br>
string（字符串），hash（哈希），list（列表），set（集合）及zset(有序集合)。</p>
<hr>
<h3 id="_1-4-安装redis" tabindex="-1"><a class="header-anchor" href="#_1-4-安装redis" aria-hidden="true">#</a> 1.4 <strong>安装redis</strong></h3>
<p><strong>docker安装redis</strong></p>
<p>默认安装路径 :    /usr/local/bin</p>
<p>默认端口号 : 6379</p>
<p>docker 安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull redis:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置持久化</p>
<p>更改conf文件的 <code v-pre>daemonize no</code> 改为 <code v-pre>daemonize yes</code>, 可以后台启动</p>
<p>启动</p>
<p>redis-server /etc/redis.conf</p>
<p><strong>windows安装redis</strong></p>
<p>下载redis安装包</p>
<p><a href="https://github.com/microsoftarchive/redis/releases" target="_blank" rel="noopener noreferrer">https://github.com/microsoftarchive/redis/releases<ExternalLinkIcon/></a></p>
<p>配置到目录到path路径变量</p>
<p>设置开启自启动服务</p>
<p>redis-server --service-uninstall</p>
<p>redis-server --service-install redis.windows.conf</p>
<h3 id="_1-5-常用命令" tabindex="-1"><a class="header-anchor" href="#_1-5-常用命令" aria-hidden="true">#</a> 1.5 常用命令</h3>
<p>redis-cli 快速启动</p>
<p>ping   查看是否连通</p>
<p>select 1  选择 db1 数据库</p>
<p>dbsize  查看当前数据库的key数量</p>
<p>flushdb  清空当前库</p>
<p>flushall 通杀全部库</p>
<p>keys * 查看当前库的所有key</p>
<p>exists key 判断某个key是否存在</p>
<p>type key  查看key的类型</p>
<p>del key 删除key</p>
<p>expire key 10  给key设置过期时间</p>
<p>ttl key  查看key的剩余时间</p>
<p>CONFIG get requirepass  查看是否设置了密码验证</p>
<p>CONFIG set requirepass &quot;runoob&quot;   设置密码</p>
<p>AUTH &quot;runoob&quot;   用户登录</p>
<h3 id="_1-6-单线程-多路io复用" tabindex="-1"><a class="header-anchor" href="#_1-6-单线程-多路io复用" aria-hidden="true">#</a> 1.6 单线程+多路IO复用</h3>
<p>举例 : 黄牛单线程帮多人买票, 买到票之前 , 顾客可以做各自的事情</p>
<p>思考: java中的两个线程执行 i=0, i++, 100次 ,最终值的范围?</p>
<p>答案: 2-200</p>
<h2 id="二-redis-数据类型" tabindex="-1"><a class="header-anchor" href="#二-redis-数据类型" aria-hidden="true">#</a> 二.  redis 数据类型</h2>
<h3 id="_2-1-字符串-string" tabindex="-1"><a class="header-anchor" href="#_2-1-字符串-string" aria-hidden="true">#</a> 2.1 <strong>字符串</strong> String</h3>
<p>存储字符串</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">set</span> key value <span class="token comment"># 设置key, 没有创建,有就覆盖</span>
append key value <span class="token comment"># 对key的值追加内容</span>
strlen key  <span class="token comment"># 获取值的长度</span>
setnx key value <span class="token comment"># 设置key,只有当key不存在时才会成功</span>

get key  <span class="token comment"># 获取key的值</span>

<span class="token comment"># 略过以下: </span>
<span class="token comment"># 设置/取多个key </span>
<span class="token comment"># 数字自增/自减 </span>
<span class="token comment"># 范围设置/取值 </span>
<span class="token comment"># 设置值和过期时间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-哈希-hash" tabindex="-1"><a class="header-anchor" href="#_2-2-哈希-hash" aria-hidden="true">#</a> 2.2 <strong>哈希</strong> Hash</h3>
<p>适合存储对象</p>
<p>映射关系</p>
<p>key -&gt; field : value</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>hmset key f1 v1 f2 v2<span class="token punctuation">..</span>.
hexists key field  <span class="token comment"># 查看key中的field域是否存在</span>

hget k1 f1 <span class="token comment"># 取出k1中f1的value</span>

hkeys key <span class="token comment"># 获取key中所有field</span>
hvals key <span class="token comment"># 获取key中所有value</span>

hsetnx key f1 value <span class="token comment"># 新增一个域f1,值为value,若已存在f1则失败</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-列表-list" tabindex="-1"><a class="header-anchor" href="#_2-3-列表-list" aria-hidden="true">#</a> 2.3 <strong>列表</strong> List</h3>
<p>底层结构是<code v-pre>双向链表</code> , 将 <code v-pre>压缩列表</code> 和 <code v-pre>链表</code> 结合成<code v-pre>快速列表</code></p>
<p>内容可以重复, 有数序</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>lpush key v1 <span class="token comment"># 头插法</span>
lpush key v2 

rpush key v1 v2 v3 <span class="token comment"># 尾插法</span>

lpop/rpop key  <span class="token comment"># 从左边/右边 删除一个值.值在键在,值亡键销</span>

rpoplpush k1 k2 <span class="token comment"># 从k1右边吐一个值,插到k2的左边</span>

LRANGE key <span class="token number">0</span> <span class="token number">2</span> <span class="token comment"># 范围取值, 0 -1 是取所有值</span>

llen key <span class="token comment"># 获取列表长度</span>

lindex key index <span class="token comment"># 获取key下标是index的值</span>

lset k1 index value <span class="token comment"># 更新key的index下标的value</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-无序集合-set" tabindex="-1"><a class="header-anchor" href="#_2-4-无序集合-set" aria-hidden="true">#</a> 2.4 <strong>无序集合</strong> Set</h3>
<p>String 类型的无序集合, 集合成员是唯一的</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>sadd key v1 <span class="token comment"># 设置一个值</span>
sadd key v1 v2 v3  <span class="token comment"># 设置多个值</span>

smembers key  <span class="token comment"># 取出该集合的所有值</span>
sismember key value  <span class="token comment"># 判断该集合中是否有某个值 返回01</span>
scard key  <span class="token comment"># 返回集合中的元素个数</span>

srem key v1 v2 <span class="token comment"># 删除集合中的某些元素</span>
spop key  <span class="token comment"># 随机删除一个值</span>

sinter key1 key2 <span class="token comment"># 返回两个集合的交集</span>
sunion k1 k2 <span class="token comment"># 返回两个集合的并集</span>
<span class="token function">sdiff</span> k1 k2 <span class="token comment"># 返回两个集合的差集(k1有但k2没有的)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-有序集合zset" tabindex="-1"><a class="header-anchor" href="#_2-5-有序集合zset" aria-hidden="true">#</a> 2.5 <strong>有序集合Zset</strong></h3>
<p>底层数据结构是 跳跃表 , 效率相当与红黑树</p>
<p>有序集合的成员是唯一的</p>
<p>redis通过评分进行排序, 分数可以重复</p>
<p>分数相同时, 根据value的数字或字母大小进行排序</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>zadd key score value <span class="token comment"># 添加一个值</span>
zadd runoobkey <span class="token number">3</span> mysql <span class="token number">4</span> c++ <span class="token number">5</span> redis <span class="token comment"># 添加多个值</span>

zrange runoobkey <span class="token number">0</span> <span class="token number">10</span> WITHSCORES <span class="token comment"># 根据索引范围,获取key的值和评分</span>

zincrby key <span class="token number">50</span> value <span class="token comment"># 为value的评分增加50</span>

zrem key value <span class="token comment"># 删除指定元素</span>

zcount key min max <span class="token comment"># 统计该分数区间内的元素个数</span>

zrank key value <span class="token comment">#返回该值在集合中的排名,从0开始</span>

zrangebyscore <span class="token comment">#根据评分范围,获取key的值和评分</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-bitmaps" tabindex="-1"><a class="header-anchor" href="#_2-6-bitmaps" aria-hidden="true">#</a> 2.6 Bitmaps</h3>
<p>位操作</p>
<h3 id="_2-7-hyperloglog" tabindex="-1"><a class="header-anchor" href="#_2-7-hyperloglog" aria-hidden="true">#</a> 2.7 HyperLogLog</h3>
<p>基数</p>
<h3 id="_2-8-geospatial" tabindex="-1"><a class="header-anchor" href="#_2-8-geospatial" aria-hidden="true">#</a> 2.8 Geospatial</h3>
<p>地理坐标</p>
<h2 id="三-redis-进阶" tabindex="-1"><a class="header-anchor" href="#三-redis-进阶" aria-hidden="true">#</a> 三.  redis 进阶</h2>
<h3 id="_3-1-配置文件详解" tabindex="-1"><a class="header-anchor" href="#_3-1-配置文件详解" aria-hidden="true">#</a> 3.1 配置文件详解</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 更改端口号</span>
port <span class="token number">6379</span>

<span class="token comment"># 支持远程调用</span>
注释掉 <span class="token builtin class-name">bind</span> <span class="token number">127.0</span>.0.1
保护模式改为no

<span class="token comment"># 超时 长时间未操作断开连接</span>
<span class="token function">timeout</span>

<span class="token comment"># 后台模式启动 </span>
daemonize <span class="token function">yes</span>

<span class="token comment"># 日志级别</span>
loglevel notice

<span class="token comment"># 文件输出路径</span>
logfile

<span class="token comment"># 数据库个数</span>
databases <span class="token number">16</span>

<span class="token comment"># 以下略过</span>
<span class="token comment"># 最大连接数</span>
<span class="token comment"># 最大内存占用</span>
<span class="token comment"># 抽样数量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-发布和订阅" tabindex="-1"><a class="header-anchor" href="#_3-2-发布和订阅" aria-hidden="true">#</a> 3.2 <strong>发布和订阅</strong></h3>
<h4 id="_3-2-1-简单的发布订阅" tabindex="-1"><a class="header-anchor" href="#_3-2-1-简单的发布订阅" aria-hidden="true">#</a> 3.2.1 简单的发布订阅</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>SUBSCRIBE runoobChat  <span class="token comment"># 第一个客户端订阅频道</span>

PUBLISH runoobChat <span class="token string">"Redis PUBLISH test"</span>  <span class="token comment"># 第二个客户端发送消息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-2-管道技术" tabindex="-1"><a class="header-anchor" href="#_3-2-2-管道技术" aria-hidden="true">#</a> 3.2.2 <strong>管道技术</strong></h4>
<p>Redis 管道技术可以在服务端未响应时，客户端可以继续向服务端发送请求，并最终一次性读取所有服务端的响应。</p>
<p><strong>Stream</strong></p>
<p>发布订阅 (pub/sub) 可以分发消息，但无法记录历史消息</p>
<p>Redis Stream 提供了消息的持久化和主备复制功能</p>
<p>消息队列相关命令</p>
<p>XADD - 添加消息到末尾</p>
<p>XTRIM - 对流进行修剪，限制长度</p>
<p>XDEL - 删除消息</p>
<p>XLEN - 获取流包含的元素数量，即消息长度</p>
<p>XRANGE - 获取消息列表，会自动过滤已经删除的消息</p>
<p>消费者组相关命令</p>
<p>XGROUP CREATE - 创建消费者组</p>
<p>XREADGROUP GROUP - 读取消费者组中的消息</p>
<p>XACK - 将消息标记为&quot;已处理&quot;</p>
<p>XGROUP SETID - 为消费者组设置新的最后递送消息ID</p>
<p>XGROUP DELCONSUMER - 删除消费者</p>
<p>XGROUP DESTROY - 删除消费者组</p>
<p>XPENDING - 显示待处理消息的相关信息</p>
<p>XCLAIM - 转移消息的归属权</p>
<p>XINFO - 查看流和消费者组的相关信息</p>
<h3 id="_3-3-jedis操作redis" tabindex="-1"><a class="header-anchor" href="#_3-3-jedis操作redis" aria-hidden="true">#</a> 3.3 jedis操作redis</h3>
<p>创建maven工程</p>
<p>引入依赖</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goupId</span><span class="token punctuation">></span></span>redis.clients<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>jedis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改redis配置文件</p>
<p>关闭服务器防火墙</p>
<p>连接到redis服务</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">redis<span class="token punctuation">.</span>clients<span class="token punctuation">.</span>jedis<span class="token punctuation">.</span></span><span class="token class-name">Jedis</span></span><span class="token punctuation">;</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisJava</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//连接本地的 Redis 服务</span>
        <span class="token class-name">Jedis</span> jedis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedis</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">,</span><span class="token number">6379</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 如果 Redis 服务设置了密码，需要下面这行，没有就不需要</span>
        <span class="token comment">// jedis.auth("123456"); </span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"连接成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//查看服务是否运行</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"服务正在运行: "</span><span class="token operator">+</span>jedis<span class="token punctuation">.</span><span class="token function">ping</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      
       <span class="token comment">//设置 redis 字符串数据</span>
        jedis<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"runoobkey"</span><span class="token punctuation">,</span> <span class="token string">"www.runoob.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      
       <span class="token comment">//存储数据到列表中</span>
        jedis<span class="token punctuation">.</span><span class="token function">lpush</span><span class="token punctuation">(</span><span class="token string">"site-list"</span><span class="token punctuation">,</span> <span class="token string">"Runoob"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jedis<span class="token punctuation">.</span><span class="token function">lpush</span><span class="token punctuation">(</span><span class="token string">"site-list"</span><span class="token punctuation">,</span> <span class="token string">"Google"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jedis<span class="token punctuation">.</span><span class="token function">lpush</span><span class="token punctuation">(</span><span class="token string">"site-list"</span><span class="token punctuation">,</span> <span class="token string">"Taobao"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-redis与springboot整合" tabindex="-1"><a class="header-anchor" href="#_3-4-redis与springboot整合" aria-hidden="true">#</a> 3.4 redis与springboot整合</h3>
<p>改pom</p>
<p>spring-boot-starter-data-redis</p>
<p>commons-pool2</p>
<p>写yml</p>
<p>spring: redis: ...</p>
<p>写配置类</p>
<p>RedisConfig extends CachingConfigurerSupport</p>
<p>使用RedisTemplate操作</p>
<h3 id="_3-5-性能测试" tabindex="-1"><a class="header-anchor" href="#_3-5-性能测试" aria-hidden="true">#</a> 3.5 性能测试</h3>
<h4 id="_3-5-1-网络测试" tabindex="-1"><a class="header-anchor" href="#_3-5-1-网络测试" aria-hidden="true">#</a> 3.5.1 网络测试</h4>
<p>ab工具</p>
<h4 id="_3-5-2-本机测试" tabindex="-1"><a class="header-anchor" href="#_3-5-2-本机测试" aria-hidden="true">#</a> 3.5.2 本机测试</h4>
<p>使用 redis-benchmark</p>
<p>主机为 127.0.0.1，端口号为 6379<br>
执行的命令为 set,lpush，请求数为 10000<br>
通过 -q 参数让结果只显示每秒执行的请求数</p>
<p><em>注意: 在命令行使用 而不是redis控制台</em></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ redis-benchmark <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6379</span> <span class="token parameter variable">-t</span> set,lpush <span class="token parameter variable">-n</span> <span class="token number">10000</span> <span class="token parameter variable">-q</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="四-redis-事物和锁机制" tabindex="-1"><a class="header-anchor" href="#四-redis-事物和锁机制" aria-hidden="true">#</a> 四. redis 事物和锁机制</h2>
<h3 id="_4-1-事物" tabindex="-1"><a class="header-anchor" href="#_4-1-事物" aria-hidden="true">#</a> 4.1 事物</h3>
<p>redis 事物是一个单独的隔离操作, 事物中的所有命令都会被序列化 按顺序的执行</p>
<p>事物在执行的过程中, 不会被其他客户端发送来的命令请求所打断</p>
<p>事物的主要作用就是串联多个命令防止别的命令插队</p>
<p>在组队阶段发生错误, 则不会执行任何操作</p>
<p>在执行阶段发生错误, 谁错了谁不执行, 其他正常执行</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>MULTI  <span class="token comment"># 开始事物</span>
SET book-name <span class="token string">"Mastering C++ in 21 days"</span>
GET book-name
SADD tag <span class="token string">"C++"</span> <span class="token string">"Programming"</span> <span class="token string">"Mastering Series"</span>

EXEC  <span class="token comment"># 执行事物</span>
discard <span class="token comment"># 放弃事物</span>




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-事物冲突的问题" tabindex="-1"><a class="header-anchor" href="#_4-2-事物冲突的问题" aria-hidden="true">#</a> 4.2 事物冲突的问题</h3>
<h4 id="_4-2-1-悲观锁" tabindex="-1"><a class="header-anchor" href="#_4-2-1-悲观锁" aria-hidden="true">#</a> 4.2.1 悲观锁</h4>
<p>默认拿数据的时候, 别人都跟他抢数据, 所以必须上锁</p>
<p>效率低</p>
<h4 id="_4-2-2-乐观锁" tabindex="-1"><a class="header-anchor" href="#_4-2-2-乐观锁" aria-hidden="true">#</a> 4.2.2 乐观锁</h4>
<p>通过版本号检查是否相同</p>
<p>提交前将拿到的版本号与数据库当前的版本号对比, 不同则不能操作</p>
<h4 id="_4-2-3-单例自旋锁" tabindex="-1"><a class="header-anchor" href="#_4-2-3-单例自旋锁" aria-hidden="true">#</a> 4.2.3 单例自旋锁</h4>
<h4 id="_4-2-4-监听" tabindex="-1"><a class="header-anchor" href="#_4-2-4-监听" aria-hidden="true">#</a> 4.2.4 监听</h4>
<p>对某个值进行监听, 在事物中, 若被监听的值发生了改变, 则终止事物</p>
<p>watch k1 k2....</p>
<p>unwatch k1 k2...</p>
<h3 id="_4-3-事物的三特性" tabindex="-1"><a class="header-anchor" href="#_4-3-事物的三特性" aria-hidden="true">#</a> 4.3 事物的三特性</h3>
<p>单独的隔离操作</p>
<p>没有隔离级别的概念</p>
<p>不保证原子性</p>
<h3 id="_4-4-秒杀案例" tabindex="-1"><a class="header-anchor" href="#_4-4-秒杀案例" aria-hidden="true">#</a> 4.4 秒杀案例</h3>
<p>模拟并发请求工具  ab</p>
<p>yum -y install httpd-tools</p>
<h2 id="五-持久化" tabindex="-1"><a class="header-anchor" href="#五-持久化" aria-hidden="true">#</a> 五. 持久化</h2>
<h3 id="_5-1-持久化-rdb" tabindex="-1"><a class="header-anchor" href="#_5-1-持久化-rdb" aria-hidden="true">#</a> 5.1  持久化 RDB</h3>
<p>在指定的时间间隔将内存数据集的快照写入磁盘</p>
<p>创建fork子进程, 将数据读入一个临时区域, 再写到rdb文件内</p>
<p>使用了写时复制技术, 需要两倍的内存 , 适合大规模数据储存,</p>
<p>最后一次持久化可能丢失</p>
<p>手动备份</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>SAVE   //前台执行备份
BGSAVE  //后台执行备份
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>备份命令将在 redis 安装目录中创建dump.rdb文件。
如果需要恢复数据，只需将备份文件 (dump.rdb) 移动到 redis 安装目录并启动服务即可</p>
<p>获取 redis 安装目录可以使用 CONFIG 命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>CONFIG GET <span class="token function">dir</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-2-持久化-aof" tabindex="-1"><a class="header-anchor" href="#_5-2-持久化-aof" aria-hidden="true">#</a> 5.2 持久化 AOF</h3>
<p>append only file</p>
<p>以日志记录每个写操作 , 只许追加文件但不改写</p>
<p>aof和rdb同时开启, 优先使用aof, 因为数据更可靠</p>
<h3 id="_5-3-主从复制" tabindex="-1"><a class="header-anchor" href="#_5-3-主从复制" aria-hidden="true">#</a> 5.3  主从复制</h3>
<h4 id="_5-3-1-特点" tabindex="-1"><a class="header-anchor" href="#_5-3-1-特点" aria-hidden="true">#</a> 5.3.1 特点</h4>
<p>主机数据更新后, 自动同步后从机</p>
<p>实现读写分离, 主机负责写, 从机负责读</p>
<p>容灾快速恢复</p>
<h4 id="_5-3-2-详细步骤" tabindex="-1"><a class="header-anchor" href="#_5-3-2-详细步骤" aria-hidden="true">#</a> 5.3.2 详细步骤</h4>
<ul>
<li>创建 /myredis/redis.conf 文件</li>
</ul>
<p>关闭保护模式</p>
<p>开启后台进程</p>
<p>关闭地址绑定</p>
<p>关闭aof</p>
<ul>
<li>复制三个 conf 文件</li>
</ul>
<p>redis6379.conf</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>include /myredis/redis.conf

pidfile /var/run/redis_6379.pid

portt 6379

dbfilename dumb6379.rdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>redis6380.conf</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>include /myredis/redis.conf

pidfile /var/run/redis_6380.pid

portt 6380

dbfilename dumb6380.rdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>redis6381.conf</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>include /myredis/redis.conf

pidfile /var/run/redis_6381.pid

portt 6381

dbfilename dumb6381.rdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动服务</p>
<p>docker run -itd -p 6379:6379 --name redis6379 -v /myredis/redis6379.conf:/etc/redis/redis6379.conf  redis redis-server /etc/redis/redis6379.conf</p>
<p>docker run -itd -p 6380:6380 --name redis6380 -v /myredis/redis6380.conf:/etc/redis/redis6380.conf  redis redis-server /etc/redis/redis6380.conf</p>
<p>docker run -itd -p 6381:6381 --name redis6381 -v /myredis/redis6381.conf:/etc/redis/redis6381.conf  redis redis-server /etc/redis/redis6381.conf</p>
<p>安装redis工具</p>
<p>apt install redis-tools</p>
<p>进入redis控制台</p>
<p>redis-cli -p 6379</p>
<ul>
<li>关闭防火墙</li>
</ul>
<p>开启云服务器端口</p>
<p>关闭物理机的防火墙</p>
<ul>
<li>控制台指令</li>
</ul>
<p>info replication</p>
<p>slaveof 39.107.251.205  6379</p>
<h4 id="_5-3-3-一主二仆" tabindex="-1"><a class="header-anchor" href="#_5-3-3-一主二仆" aria-hidden="true">#</a> 5.3.3 一主二仆</h4>
<p>主机挂机重启就可 , 从机挂了重新认主 , 自动拉取数据</p>
<h4 id="_5-3-4-薪火相传" tabindex="-1"><a class="header-anchor" href="#_5-3-4-薪火相传" aria-hidden="true">#</a> 5.3.4 薪火相传</h4>
<p>从机 也可以有自己的从机, 从机从主机同步数据, 从机的从机从从机同步数据</p>
<h4 id="_5-3-5-反客为主" tabindex="-1"><a class="header-anchor" href="#_5-3-5-反客为主" aria-hidden="true">#</a> 5.3.5 反客为主</h4>
<p>主机挂了, 丛机变成主机</p>
<p>slaveof no one</p>
<h4 id="_5-3-6-哨兵模式" tabindex="-1"><a class="header-anchor" href="#_5-3-6-哨兵模式" aria-hidden="true">#</a> 5.3.6 哨兵模式</h4>
<p>反客为主的自动版</p>
<p>主机挂后, 从机自动变为主机, 主机连接后变为从机</p>
<p>slave-priority 设置从机变主机的权重</p>
<h2 id="六-集群" tabindex="-1"><a class="header-anchor" href="#六-集群" aria-hidden="true">#</a> 六. 集群</h2>
<h3 id="_6-1-集群简介" tabindex="-1"><a class="header-anchor" href="#_6-1-集群简介" aria-hidden="true">#</a> 6.1  集群简介</h3>
<p>容量不够,  需要扩容</p>
<p>并发写操作 . redis 如何分摊</p>
<p>早起使用主机代理方式, redis3 以后使用 无中心化集群方式</p>
<p>任何一个节点都可以作为入口, 相互注册 转发</p>
<p>每个节点存放总数据库的 1/n</p>
<p>哈希一致性算法 哈希环 解决扩容问题 只需要两台机器发生数据传输</p>
<h3 id="_6-2-集群配置" tabindex="-1"><a class="header-anchor" href="#_6-2-集群配置" aria-hidden="true">#</a> 6.2 集群配置</h3>
<p>略</p>
<h3 id="_6-3-插槽" tabindex="-1"><a class="header-anchor" href="#_6-3-插槽" aria-hidden="true">#</a> 6.3 插槽</h3>
<p>一个集群包含16384个插槽</p>
<p>这些插槽平分给每个节点</p>
<p>当存key的时候 , redis计算出一个值,  将这个值匹配到相对应的插槽 , 如果超过当前节点的插槽范围 , 则自动切换到对应节点, 完成插入操作</p>
<h3 id="_6-4-故障恢复" tabindex="-1"><a class="header-anchor" href="#_6-4-故障恢复" aria-hidden="true">#</a> 6.4 故障恢复</h3>
<p>可以设置一个节点挂了 整个集群都挂</p>
<p>或者一个节点挂了 其他节点正常运行</p>
<h3 id="_6-5-使用-jedis-操作集群" tabindex="-1"><a class="header-anchor" href="#_6-5-使用-jedis-操作集群" aria-hidden="true">#</a> 6.5 使用 Jedis 操作集群</h3>
<p>略</p>
<h2 id="七-现实应用场景" tabindex="-1"><a class="header-anchor" href="#七-现实应用场景" aria-hidden="true">#</a> 七. 现实应用场景</h2>
<h3 id="_7-1-缓存穿透" tabindex="-1"><a class="header-anchor" href="#_7-1-缓存穿透" aria-hidden="true">#</a> 7.1 缓存穿透</h3>
<h4 id="_7-1-1-现象" tabindex="-1"><a class="header-anchor" href="#_7-1-1-现象" aria-hidden="true">#</a> 7.1.1 现象</h4>
<p>请求大量进入, redis没缓存过数据, 命中率降低, 一直查数据库</p>
<h4 id="_7-1-2-原因" tabindex="-1"><a class="header-anchor" href="#_7-1-2-原因" aria-hidden="true">#</a> 7.1.2 原因</h4>
<p>黑客攻击, 访问大量空url</p>
<h4 id="_7-1-1-解决" tabindex="-1"><a class="header-anchor" href="#_7-1-1-解决" aria-hidden="true">#</a> 7.1.1 解决</h4>
<p>无数据也设置缓存为 , 设置为null , 把时间过期设短 (依然能穿透)</p>
<p>把所有id存在redis里 , 先判断是否存在 (内存消耗大)</p>
<p>实时监控 设置请求的白名单 报网警解决 (效率低)</p>
<p>推荐 布隆过滤器</p>
<p>通过hash算法存到位数组中, 会产生hash碰撞有错误率</p>
<p>增加位数组长度或者增加hash函数</p>
<p>布隆算法说存在不一定存在, 但布隆说不存在则一定不存在</p>
<p>删除数据时候, 可能好多id对应一个值, 需要用二维数组计数, 剩最后一个才能删除</p>
<h3 id="_7-2-缓存击穿" tabindex="-1"><a class="header-anchor" href="#_7-2-缓存击穿" aria-hidden="true">#</a> 7.2 缓存击穿</h3>
<h4 id="_7-2-1-现象" tabindex="-1"><a class="header-anchor" href="#_7-2-1-现象" aria-hidden="true">#</a> 7.2.1 现象</h4>
<p>现象</p>
<p>数据库访问压力瞬间变大</p>
<p>redis没有出现大量的key过期</p>
<p>redis运行平稳</p>
<h4 id="_7-2-2-原因" tabindex="-1"><a class="header-anchor" href="#_7-2-2-原因" aria-hidden="true">#</a> 7.2.2 原因</h4>
<p>某个超级热点key过期</p>
<h4 id="_7-2-2-解决" tabindex="-1"><a class="header-anchor" href="#_7-2-2-解决" aria-hidden="true">#</a> 7.2.2 解决</h4>
<p>预先设置热门数据</p>
<p>监控实时调整</p>
<p>使用锁  (降低效率)</p>
<h3 id="_7-3-缓存雪崩" tabindex="-1"><a class="header-anchor" href="#_7-3-缓存雪崩" aria-hidden="true">#</a> 7.3 缓存雪崩</h3>
<h4 id="_7-3-1-现象" tabindex="-1"><a class="header-anchor" href="#_7-3-1-现象" aria-hidden="true">#</a> 7.3.1 现象</h4>
<p>大量key集中过期, 此时有了高并发请求</p>
<h4 id="_7-3-2-原因" tabindex="-1"><a class="header-anchor" href="#_7-3-2-原因" aria-hidden="true">#</a> 7.3.2  原因</h4>
<p>到了某个时间点 , 大量的key统一过期 , 请求都到了数据库</p>
<h4 id="_7-3-3-解决" tabindex="-1"><a class="header-anchor" href="#_7-3-3-解决" aria-hidden="true">#</a> 7.3.3 解决</h4>
<p>构建多级缓存架构</p>
<p>使用锁和队列</p>
<p>设置过期标志</p>
<p>加上随机值 使缓存失效时间离散开</p>
<h3 id="_7-4-分布式锁" tabindex="-1"><a class="header-anchor" href="#_7-4-分布式锁" aria-hidden="true">#</a> 7.4 分布式锁</h3>
<h4 id="_7-4-1-简介" tabindex="-1"><a class="header-anchor" href="#_7-4-1-简介" aria-hidden="true">#</a> 7.4.1 简介</h4>
<p>在集群中, 对某个数据加锁 , 要把集群中所有机器都配置上锁</p>
<h4 id="_7-4-2-优化之过期时间" tabindex="-1"><a class="header-anchor" href="#_7-4-2-优化之过期时间" aria-hidden="true">#</a> 7.4.2 优化之过期时间</h4>
<p>上锁同时设置锁的过期时间</p>
<p>防止上锁后, 机器故障, 无法设置过期时间</p>
<h4 id="_7-4-3-优化之防止误删" tabindex="-1"><a class="header-anchor" href="#_7-4-3-优化之防止误删" aria-hidden="true">#</a> 7.4.3 优化之防止误删</h4>
<p>使用 uuid 防止锁误删</p>
<h4 id="_7-4-4-优化之保证原子性" tabindex="-1"><a class="header-anchor" href="#_7-4-4-优化之保证原子性" aria-hidden="true">#</a> 7.4.4 优化之保证原子性</h4>
<p>使用 lua 脚本保证原子性</p>
<h4 id="_7-4-5-锁必须满足的条件" tabindex="-1"><a class="header-anchor" href="#_7-4-5-锁必须满足的条件" aria-hidden="true">#</a> 7.4.5 锁必须满足的条件</h4>
<ul>
<li>互斥性: 同时只有一个客户端可以持有锁</li>
<li>不能死锁: 过期时间到了自动解锁</li>
<li>加锁和解锁必须是同一个客户端</li>
<li>加锁解锁要有原子性</li>
</ul>
<h2 id="八-新功能-redis-6" tabindex="-1"><a class="header-anchor" href="#八-新功能-redis-6" aria-hidden="true">#</a> 八. 新功能 redis 6</h2>
<h3 id="_8-1-acl-更强的权限控制" tabindex="-1"><a class="header-anchor" href="#_8-1-acl-更强的权限控制" aria-hidden="true">#</a> 8.1 ACL 更强的权限控制</h3>
<p>acl list 查看所有用户</p>
<p>acl cat 查看所有命令</p>
<h3 id="_8-2-io-多线程" tabindex="-1"><a class="header-anchor" href="#_8-2-io-多线程" aria-hidden="true">#</a> 8.2 IO 多线程</h3>
<p>并不是支持了多线程, 执行命令依然是单线程+多路IO复用</p>
<p>只是网络请求和协议解析可以使用多线程</p>
<p>默认关闭</p>
<h3 id="_8-3-工具支持-cluster" tabindex="-1"><a class="header-anchor" href="#_8-3-工具支持-cluster" aria-hidden="true">#</a> 8.3 工具支持 cluster</h3>
<p>不需要单独安装ruby环境</p>
<h2 id="第9章-面试技巧" tabindex="-1"><a class="header-anchor" href="#第9章-面试技巧" aria-hidden="true">#</a> 第9章 面试技巧</h2>
</div></template>
