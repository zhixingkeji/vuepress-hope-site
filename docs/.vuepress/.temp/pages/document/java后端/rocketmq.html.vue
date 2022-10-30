<template><div><h2 id="第1章-mq介绍" tabindex="-1"><a class="header-anchor" href="#第1章-mq介绍" aria-hidden="true">#</a> 第1章 MQ介绍</h2>
<h3 id="_1-1-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-简介" aria-hidden="true">#</a> 1.1 简介</h3>
<p>MQ是一种提供<code v-pre>消息队列服务</code>的中间件, 是一套提供了消息生产, 存储, 消费全过程的软件</p>
<h3 id="_1-2-优缺点" tabindex="-1"><a class="header-anchor" href="#_1-2-优缺点" aria-hidden="true">#</a> 1.2 优缺点</h3>
<ul>
<li>优点</li>
</ul>
<p>异步提速</p>
<p>应用解耦</p>
<p>分布式事务的数据一致性</p>
<p>消息的顺序收发</p>
<p>削峰填谷</p>
<p>大规模机器的缓存同步</p>
<ul>
<li>缺点</li>
</ul>
<p>系统可用性降低（MQ死机则整个系统断裂）</p>
<p>系统复杂度提高（mq可能发生的丢失消息，重复消费）</p>
<p>一致性问题（MQ发送ABC三台服务器，AB成功，C失败）</p>
<h3 id="_1-3-使用场景" tabindex="-1"><a class="header-anchor" href="#_1-3-使用场景" aria-hidden="true">#</a> 1.3 使用场景</h3>
<h3 id="_1-4-四种mq对比" tabindex="-1"><a class="header-anchor" href="#_1-4-四种mq对比" aria-hidden="true">#</a> 1.4 四种MQ对比</h3>
<ul>
<li>RabbitMQ</li>
</ul>
<p>erlang语言，处理速度 us 级</p>
<ul>
<li>RocketMQ</li>
</ul>
<p>java语言，处理速度 ms 级</p>
<ul>
<li>Kafka</li>
</ul>
<p>scala语言实现，应用于大数据</p>
<ul>
<li>ActiveMQ</li>
</ul>
<p>淘汰</p>
<h4 id="_1-4-1-有broke" tabindex="-1"><a class="header-anchor" href="#_1-4-1-有broke" aria-hidden="true">#</a> 1.4.1 有broke</h4>
<p>重topic : kafka  ActiveMQ  rocketMQ</p>
<p>依据topic进行消息中转</p>
<p>轻topick  rabbitMQ</p>
<p>topic只是一种中转模式</p>
<h4 id="_1-4-2-无broke" tabindex="-1"><a class="header-anchor" href="#_1-4-2-无broke" aria-hidden="true">#</a> 1.4.2 无broke</h4>
<p>zeroMQ</p>
<p>无broke中转站 直接使用socket 进行通信</p>
<h3 id="_1-5-工作原理" tabindex="-1"><a class="header-anchor" href="#_1-5-工作原理" aria-hidden="true">#</a> 1.5 工作原理</h3>
<ul>
<li>生产者Producer、消费者Consumer、经纪人Broker</li>
</ul>
<p>Producer 发送消息给 Broker，并收到返回的接收结果</p>
<p>Consumer 监听 Broker，Broker 有消息了就推送给 Consumer</p>
<ul>
<li>命名服务器NameServer</li>
</ul>
<p>NameServer类似于注册中心，注册中心，发送心跳，负载均衡</p>
<ul>
<li>Topic主题</li>
</ul>
<p>表示一类消息的集合, 每个主题包含若干消息, 每个消息只能属于一个主题 , 是消息订阅的基本单位</p>
<ul>
<li>Tag标题</li>
</ul>
<p>用于统一主题下区分不同类型的消息</p>
<ul>
<li>Message消息</li>
</ul>
<p>生产和消费数据的最小单位 , 每条消息必须属于一个主题</p>
<ul>
<li>队列</li>
</ul>
<p>存储消息的物理实体</p>
<ul>
<li>消息标识</li>
</ul>
<p>生产者发送消息产生一个msgid, 到达broker后产生一个offestmsgid , 用户也可以指定与业务相关的key</p>
<h2 id="第2章-rocketmq" tabindex="-1"><a class="header-anchor" href="#第2章-rocketmq" aria-hidden="true">#</a> 第2章 RocketMQ</h2>
<h3 id="_2-1-安装配置" tabindex="-1"><a class="header-anchor" href="#_2-1-安装配置" aria-hidden="true">#</a> 2.1 安装配置</h3>
<p><strong>下载安装包</strong></p>
<p>首先下载安装包 rocketmq-all-4.9.0-bin-release</p>
<p><a href="https://rocketmq.apache.org/dowloading/releases/" target="_blank" rel="noopener noreferrer">https://rocketmq.apache.org/dowloading/releases/<ExternalLinkIcon/></a></p>
<p><strong>配置环境变量</strong></p>
<p>ROCKETMQ_HOME = 安装路径</p>
<p><strong>cmd启动服务</strong></p>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code># 启动name-service服务器
start mqnamesrv.cmd

# 启动broke服务器
start mqbroker.cmd -n localhost:9876 autoCreateTopicEnble=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试例子</strong></p>
<p>创建环境变量</p>
<p>key : NAMESRV_ADDR</p>
<p>value : localhost:9876</p>
<p>生产者发送消息</p>
<p>在bin目录下</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tools.cmd org.apache.rocketmq.example.quickstart.Producer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>消费者接收消息</p>
<p>在bin目录下</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tools.cmd org.apache.rocketmq.example.quickstart.Consumer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>可视化工具</strong></p>
<p>拉取镜像</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull apacherocketmq/rocketmq-dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开启容器</p>
<p>注意 namesrv.addr 填写宿主机地址 192.168.0.109</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> rocketmq-dashboard <span class="token parameter variable">-e</span> <span class="token string">"JAVA_OPTS=-Drocketmq.namesrv.addr=127.0.0.1:9876"</span> <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token parameter variable">-t</span> apacherocketmq/rocketmq-dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-在springboot项目中集成" tabindex="-1"><a class="header-anchor" href="#_2-2-在springboot项目中集成" aria-hidden="true">#</a> 2.2 在springboot项目中集成</h3>
<p>创建maven空项目，作为父项目管理依赖，只有POM文件</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">"</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">></span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>packaging</span><span class="token punctuation">></span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>packaging</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modules</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">></span></span>rocketmq-provider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">></span></span>rocketmq-consumer1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">></span></span>rocket-consumer2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modules</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>rocketmq-study<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>


    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.source</span><span class="token punctuation">></span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.source</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.target</span><span class="token punctuation">></span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.target</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencyManagement</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-dependencies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.3.2.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.rocketmq<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>rocketmq-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>



        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencyManagement</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">></span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建模块，maven空项目，rocketmq-consumer</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- pom.xml --></span>

<span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">"</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>rocketmq-study<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">></span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>rocketmq-consumer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.source</span><span class="token punctuation">></span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.source</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.target</span><span class="token punctuation">></span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.target</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.rocketmq<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>rocketmq-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>



    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//comsumer.ComsumerService</span>

<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>comsumer</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RocketMQMessageListener</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RocketMQListener</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RocketMQMessageListener</span><span class="token punctuation">(</span>topic <span class="token operator">=</span> <span class="token string">"wuliu"</span><span class="token punctuation">,</span>consumerGroup <span class="token operator">=</span> <span class="token string">"${rocketmq.consumer.group}"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ComsumerService</span> <span class="token keyword">implements</span> <span class="token class-name">RocketMQListener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"收到消息内容"</span> <span class="token operator">+</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// ComsumerApplication</span>

<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ComsumerApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ComsumerApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># application.yml</span>

<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8081</span>
  <span class="token key atrule">servlet</span><span class="token punctuation">:</span>
    <span class="token key atrule">context-path</span><span class="token punctuation">:</span> /


<span class="token key atrule">rocketmq</span><span class="token punctuation">:</span>
  <span class="token key atrule">name-server</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">9876</span>
  <span class="token key atrule">consumer</span><span class="token punctuation">:</span>
    <span class="token key atrule">group</span><span class="token punctuation">:</span> consumer<span class="token punctuation">-</span>demo1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建模块，maven空项目，rocketmq-provider</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- pom.xml --></span>

<span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">"</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>rocketmq-study<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">></span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>rocketmq-provider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.source</span><span class="token punctuation">></span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.source</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.target</span><span class="token punctuation">></span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.target</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>


    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.rocketmq<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>rocketmq-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>



    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//producer.ProducerService</span>
    
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>producer</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RocketMQTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>


<span class="token annotation punctuation">@Component</span><span class="token punctuation">(</span><span class="token string">"producerService"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProducerService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RocketMQTemplate</span> rocketMQTemplate<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">10</span> <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            rocketMQTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token string">"wuliu"</span><span class="token punctuation">,</span><span class="token string">"你大爷"</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// RocketmqProviderApplication</span>

<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">ConfigurableApplicationContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>producer<span class="token punctuation">.</span></span><span class="token class-name">ProducerService</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RocketmqProviderApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ConfigurableApplicationContext</span> run <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">RocketmqProviderApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ProducerService</span> producerService <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ProducerService</span><span class="token punctuation">)</span> run<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">"producerService"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        producerService<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># application.yml</span>

<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8082</span>
  <span class="token key atrule">servlet</span><span class="token punctuation">:</span>
    <span class="token key atrule">context-path</span><span class="token punctuation">:</span> /


<span class="token key atrule">rocketmq</span><span class="token punctuation">:</span>
  <span class="token key atrule">name-server</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">9876</span>
  <span class="token key atrule">producer</span><span class="token punctuation">:</span>
    <span class="token key atrule">group</span><span class="token punctuation">:</span> producer<span class="token punctuation">-</span>demo1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第3章-消息发送" tabindex="-1"><a class="header-anchor" href="#第3章-消息发送" aria-hidden="true">#</a> 第3章 消息发送</h2>
<h3 id="_3-1-发送简单消息" tabindex="-1"><a class="header-anchor" href="#_3-1-发送简单消息" aria-hidden="true">#</a> 3.1 发送简单消息</h3>
<p>消息会乱序到达</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">10</span> <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            rocketMQTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token string">"wuliu"</span><span class="token punctuation">,</span><span class="token string">"你大爷"</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-发送同步消息" tabindex="-1"><a class="header-anchor" href="#_3-2-发送同步消息" aria-hidden="true">#</a> 3.2 发送同步消息</h3>
<p>消息会按顺序到达，性能低，可靠性高，发送重要消息</p>
<p>第一条消息发送后，broke确定接收了，才能发送第二条</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendSyncMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">SendResult</span> sendResult <span class="token operator">=</span> rocketMQTemplate<span class="token punctuation">.</span><span class="token function">syncSend</span><span class="token punctuation">(</span><span class="token string">"topic"</span><span class="token punctuation">,</span><span class="token string">"同步消息"</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sendResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-发送异步消息" tabindex="-1"><a class="header-anchor" href="#_3-3-发送异步消息" aria-hidden="true">#</a> 3.3 发送异步消息</h3>
<p>性能高，可靠性差，适合对响应时间要求高的场景</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//发送异步消息</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendAsyncMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            rocketMQTemplate<span class="token punctuation">.</span><span class="token function">asyncSend</span><span class="token punctuation">(</span><span class="token string">"topic"</span><span class="token punctuation">,</span><span class="token string">"同步消息"</span><span class="token operator">+</span>i<span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">SendCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

                <span class="token annotation punctuation">@Override</span>
                <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onSuccess</span><span class="token punctuation">(</span><span class="token class-name">SendResult</span> sendResult<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"发送成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token annotation punctuation">@Override</span>
                <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onException</span><span class="token punctuation">(</span><span class="token class-name">Throwable</span> throwable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"发送失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-发送单项消息" tabindex="-1"><a class="header-anchor" href="#_3-4-发送单项消息" aria-hidden="true">#</a> 3.4 发送单项消息</h3>
<p>只发送消息啊，不记录broker是否接收成功</p>
<p>适合不关心结果的场景，例如日志记录</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token comment">//单项消息发送</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendOneWayMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            rocketMQTemplate<span class="token punctuation">.</span><span class="token function">sendOneWay</span><span class="token punctuation">(</span><span class="token string">"topic"</span><span class="token punctuation">,</span><span class="token string">"同步消息"</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-发送批量消息" tabindex="-1"><a class="header-anchor" href="#_3-5-发送批量消息" aria-hidden="true">#</a> 3.5 发送批量消息</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token comment">//批量消息发送</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Message</span><span class="token punctuation">></span></span> msglist <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> msg1 <span class="token operator">=</span> <span class="token string">"hello 1"</span><span class="token punctuation">;</span>
<span class="token class-name">Message</span> mess1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Message</span><span class="token punctuation">(</span>msg1<span class="token punctuation">)</span><span class="token punctuation">;</span>
msglist<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>mess1<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> msg1 <span class="token operator">=</span> <span class="token string">"hello 2"</span><span class="token punctuation">;</span>
<span class="token class-name">Message</span> mess2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Message</span><span class="token punctuation">(</span>msg2<span class="token punctuation">)</span><span class="token punctuation">;</span>
msglist<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>mess2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendOneWayMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    rocketMQTemplate<span class="token punctuation">.</span><span class="token function">syncSend</span><span class="token punctuation">(</span><span class="token string">"topic"</span><span class="token punctuation">,</span>msglist<span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-消费者广播模式和负载均衡模式" tabindex="-1"><a class="header-anchor" href="#_3-6-消费者广播模式和负载均衡模式" aria-hidden="true">#</a> 3.6 消费者广播模式和负载均衡模式</h3>
<p>负载均衡模式是一条消息只被一个消费者消费，如物流系统内有多台服务器，只有一台服务器消费一条下单消息即可，也就是这条消息只能被消费一次</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//同一组内 默认为负载均衡模式，messageModel属性可省略</span>
<span class="token annotation punctuation">@RocketMQMessageListener</span><span class="token punctuation">(</span>topic <span class="token operator">=</span> <span class="token string">"wuliu"</span><span class="token punctuation">,</span>consumerGroup <span class="token operator">=</span> <span class="token string">"${rocketmq.consumer.group}"</span><span class="token punctuation">,</span>messageModel <span class="token operator">=</span> <span class="token class-name">MessageModel</span><span class="token punctuation">.</span><span class="token constant">CLUSTERING</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>广播模式是每个消费者都要消费这条消息，如物流系统，发货系统，支付系统都要消费下单消息</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//配置messageModel的值为MessageModel.BROADCASTING</span>
<span class="token annotation punctuation">@RocketMQMessageListener</span><span class="token punctuation">(</span>topic <span class="token operator">=</span> <span class="token string">"wuliu"</span><span class="token punctuation">,</span>consumerGroup <span class="token operator">=</span> <span class="token string">"${rocketmq.consumer.group}"</span><span class="token punctuation">,</span>messageModel <span class="token operator">=</span> <span class="token class-name">MessageModel</span><span class="token punctuation">.</span><span class="token constant">BROADCASTING</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>同一组内 默认为负载均衡模式，messageModel属性可省略</p>
<p>比如发送10条消息到group1组内, group1组内有两个consumer , 每个consumer消费5条消息</p>
<p>不同组时 默认为广播模式</p>
<p>比如 group1组 和 group2组 都订阅了同一个topic , 该消息会同时发送给两个组</p>
<p>若要在同一group内 实现广播模式 , 可修改消息模型为广播模型</p>
<h2 id="第4章-消息操作" tabindex="-1"><a class="header-anchor" href="#第4章-消息操作" aria-hidden="true">#</a> 第4章 消息操作</h2>
<h3 id="_4-1-实现顺序消息" tabindex="-1"><a class="header-anchor" href="#_4-1-实现顺序消息" aria-hidden="true">#</a> 4.1 实现顺序消息</h3>
<p><strong>概念</strong></p>
<p>rocketmq 内部会有4个真实的队列，队列内有序，队列外无序</p>
<p><strong>生产者发送顺序消息</strong></p>
<p>roucketTemplate.syncSendOrderly，发送同步顺序消息</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//同步顺序消息</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/order"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendSyncOrderlyMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            rocketMQTemplate<span class="token punctuation">.</span><span class="token function">syncSendOrderly</span><span class="token punctuation">(</span><span class="token string">"wuliu"</span><span class="token punctuation">,</span><span class="token string">"同步消息"</span><span class="token operator">+</span>i<span class="token punctuation">,</span><span class="token string">"select_queue_key"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>roucketTemplate.asyncSendOrderly，发送异步顺序消息</p>
<p>roucketTemplate.sendOneWayOrderly，发送单向顺序消息</p>
<p><strong>开启消费者的顺序模式</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RocketMQMessageListener</span><span class="token punctuation">(</span>topic <span class="token operator">=</span> <span class="token string">"wuliu"</span><span class="token punctuation">,</span>consumerGroup <span class="token operator">=</span> <span class="token string">"${rocketmq.consumer.group}"</span><span class="token punctuation">,</span>consumeMode <span class="token operator">=</span> <span class="token class-name">ConsumeMode</span><span class="token punctuation">.</span><span class="token constant">ORDERLY</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-2-实现延迟消息" tabindex="-1"><a class="header-anchor" href="#_4-2-实现延迟消息" aria-hidden="true">#</a> 4.2 实现延迟消息</h3>
<p>不支持自定义时间，只能用内置的延迟等级来实现</p>
<table>
<thead>
<tr>
<th>延迟等级</th>
<th>对应时间</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>1s</td>
</tr>
<tr>
<td>2</td>
<td>5s</td>
</tr>
<tr>
<td>3</td>
<td>10s</td>
</tr>
<tr>
<td>4</td>
<td>30s</td>
</tr>
<tr>
<td>5</td>
<td>1m</td>
</tr>
<tr>
<td>6</td>
<td>2m</td>
</tr>
<tr>
<td>7</td>
<td>3m</td>
</tr>
<tr>
<td>8</td>
<td>4m</td>
</tr>
<tr>
<td>9</td>
<td>5m</td>
</tr>
<tr>
<td>10</td>
<td>7m</td>
</tr>
<tr>
<td>11</td>
<td>8m</td>
</tr>
<tr>
<td>12</td>
<td>9m</td>
</tr>
<tr>
<td>13</td>
<td>10m</td>
</tr>
<tr>
<td>14</td>
<td>20m</td>
</tr>
<tr>
<td>15</td>
<td>30m</td>
</tr>
<tr>
<td>16</td>
<td>1h</td>
</tr>
<tr>
<td>17</td>
<td>2h</td>
</tr>
</tbody>
</table>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//3000是3秒内发送失败报异常 </span>
<span class="token comment">// 2代表延迟等级,对应为5秒</span>
rocketMQTemplate<span class="token punctuation">.</span><span class="token function">syncSend</span><span class="token punctuation">(</span><span class="token string">"group"</span><span class="token punctuation">,</span><span class="token class-name">MessageBuilder</span><span class="token punctuation">.</span><span class="token function">withPayload</span><span class="token punctuation">(</span><span class="token string">"延迟5秒发送"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">3000</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-实现事务消息" tabindex="-1"><a class="header-anchor" href="#_4-3-实现事务消息" aria-hidden="true">#</a> 4.3 实现事务消息</h3>
<p><strong>事物概念</strong></p>
<p><img src="@source/document/java后端/asset/image-20220522210410629.png" alt="image-20220522210410629" loading="lazy"></p>
<p>RocketMQ事务的3个状态</p>
<p>TransactionStatus.CommitTransaction：提交事务消息，消费者可以消费此消息</p>
<p>TransactionStatus.RollbackTransaction：回滚事务，它代表该消息将被删除，不允许被消费。</p>
<p>TransactionStatus.Unknown ：中间状态，它代表需要检查消息队列来确定状态。</p>
<p>RocketMQ实现事务消息主要分为两个阶段：正常事务的发送及提交、事务信息的补偿流程</p>
<p>正常事务发送与提交阶段</p>
<p>1、生产者发送一个半消息给MQServer(半消息是指消费者暂时不能消费的消息)</p>
<p>2、服务端响应消息写入结果，半消息发送成功</p>
<p>3、开始执行本地事务</p>
<p>4、根据本地事务的执行状态执行Commit或者Rollback操作</p>
<p>事务信息的补偿流程</p>
<p>1、如果MQServer长时间没收到本地事务的执行状态会向生产者发起一个确认回查的操作请求</p>
<p>2、生产者收到确认回查请求后，检查本地事务的执行状态</p>
<p>3、根据检查后的结果执行Commit或者Rollback操作</p>
<p>补偿阶段主要是用于解决生产者在发送Commit或者Rollback操作时发生超时或失败的情况。</p>
<p><strong>事物发送</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>  <span class="token comment">//事物消息</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/tran"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token class-name">MQTtransaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//topic -- 消息要发送的地址； body -- 具体的消息</span>
        <span class="token class-name">String</span> body <span class="token operator">=</span> <span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>messaging<span class="token punctuation">.</span></span>Message</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> message <span class="token operator">=</span> <span class="token class-name">MessageBuilder</span><span class="token punctuation">.</span><span class="token function">withPayload</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token class-name">RocketMQHeaders</span><span class="token punctuation">.</span><span class="token constant">TRANSACTION_ID</span><span class="token punctuation">,</span> <span class="token string">"MYKEY"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">//创建事务</span>
        <span class="token class-name">TransactionSendResult</span> transactionSendResult <span class="token operator">=</span>  rocketMQTemplate<span class="token punctuation">.</span><span class="token function">sendMessageInTransaction</span><span class="token punctuation">(</span><span class="token string">"wuliu"</span><span class="token punctuation">,</span> message<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>transactionSendResult<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> transactionSendResult<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>事物回滚和补偿</strong></p>
<p>producer / TxProducerListene.java</p>
<p>这是对事务消息的监听器</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>producer</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RocketMQTransactionListener</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RocketMQLocalTransactionListener</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RocketMQLocalTransactionState</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>messaging<span class="token punctuation">.</span></span><span class="token class-name">Message</span></span><span class="token punctuation">;</span>


<span class="token annotation punctuation">@RocketMQTransactionListener</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TxProducerListene</span> <span class="token keyword">implements</span> <span class="token class-name">RocketMQLocalTransactionListener</span> <span class="token punctuation">{</span>

    <span class="token comment">//正常事务过程</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">RocketMQLocalTransactionState</span> <span class="token function">executeLocalTransaction</span><span class="token punctuation">(</span><span class="token class-name">Message</span> message<span class="token punctuation">,</span> <span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"开始执行本地事务"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">//模拟执行结果,</span>
        <span class="token comment">// 如果是1提交事务,</span>
        <span class="token comment">// 如果是2回滚事务,</span>
        <span class="token comment">// 如果是其他的则进入回查状态,</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>


        <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//提交事务</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"本地事务提交"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token class-name">RocketMQLocalTransactionState</span><span class="token punctuation">.</span><span class="token constant">COMMIT</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//回滚事务</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"本地事务回滚"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token class-name">RocketMQLocalTransactionState</span><span class="token punctuation">.</span><span class="token constant">ROLLBACK</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//等待回查事务</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"等待回查事务中"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token class-name">RocketMQLocalTransactionState</span><span class="token punctuation">.</span><span class="token constant">UNKNOWN</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token comment">//事务补偿过程</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">RocketMQLocalTransactionState</span> <span class="token function">checkLocalTransaction</span><span class="token punctuation">(</span><span class="token class-name">Message</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"执行事务补偿"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//模拟执行结果,</span>
        <span class="token comment">// 如果是1提交事务,</span>
        <span class="token comment">// 如果是2回滚事务,</span>
        <span class="token comment">// 如果是其他的则进入回查状态,</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>


        <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//提交事物 发送消息</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"回查结果:提交半消息"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token class-name">RocketMQLocalTransactionState</span><span class="token punctuation">.</span><span class="token constant">COMMIT</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//回滚事务 删除消息</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"回查结果:回滚半消息"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token class-name">RocketMQLocalTransactionState</span><span class="token punctuation">.</span><span class="token constant">ROLLBACK</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token comment">//回滚事务,记录日志,等待人工干预</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"回查结果:需要人工干预"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token class-name">RocketMQLocalTransactionState</span><span class="token punctuation">.</span><span class="token constant">UNKNOWN</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>事务消息接收</strong></p>
<p>与普通消费者相同</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>comsumer</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">MessageModel</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RocketMQMessageListener</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">SelectorType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>rocketmq<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RocketMQListener</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RocketMQMessageListener</span><span class="token punctuation">(</span>topic <span class="token operator">=</span> <span class="token string">"wuliu"</span><span class="token punctuation">,</span>consumerGroup <span class="token operator">=</span> <span class="token string">"${rocketmq.consumer.group}"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ComsumerService</span> <span class="token keyword">implements</span> <span class="token class-name">RocketMQListener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"消费者1 收到消息内容: "</span> <span class="token operator">+</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-过滤消息" tabindex="-1"><a class="header-anchor" href="#_4-4-过滤消息" aria-hidden="true">#</a> 4.4 过滤消息</h3>
<p><strong>按照 topic和group 过滤消息</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RocketMQMessageListener</span><span class="token punctuation">(</span>topic <span class="token operator">=</span> <span class="token string">"wuliu"</span><span class="token punctuation">,</span>consumerGroup <span class="token operator">=</span> <span class="token string">"${rocketmq.consumer.group}"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ComsumerService</span> <span class="token keyword">implements</span> <span class="token class-name">RocketMQListener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"消费者1 收到消息内容: "</span> <span class="token operator">+</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>按照 tag 过滤消息</strong></p>
<p><code v-pre>* </code> 代表任意 tag</p>
<p><code v-pre>||</code> 代表某些 tag</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RocketMQMessageListener</span><span class="token punctuation">(</span>topic <span class="token operator">=</span> <span class="token string">"wuliu"</span><span class="token punctuation">,</span>consumerGroup <span class="token operator">=</span> <span class="token string">"${rocketmq.consumer.group}"</span><span class="token punctuation">,</span>selectorExpression <span class="token operator">=</span> <span class="token string">"tag1 || tag2"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>按照 属性 过滤</strong></p>
<p>开启属性过滤功能 , 追加属性 , 重启服务</p>
<p>conf / broker.conf</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>enablePropertyFilter=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生产者设置消息属性</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>message<span class="token punctuation">.</span><span class="token function">putUserProperty</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">,</span><span class="token string">"18"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
message<span class="token punctuation">.</span><span class="token function">putUserProperty</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span><span class="token string">"zhangsan"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>消费者过滤消息</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RocketMQMessageListener</span><span class="token punctuation">(</span>topic <span class="token operator">=</span> <span class="token string">"wuliu"</span><span class="token punctuation">,</span>consumerGroup <span class="token operator">=</span> <span class="token string">"${rocketmq.consumer.group}"</span><span class="token punctuation">,</span>selectorType <span class="token operator">=</span> <span class="token class-name">SelectorType</span><span class="token punctuation">.</span><span class="token constant">SQL92</span><span class="token punctuation">,</span>selectorExpression <span class="token operator">=</span> <span class="token string">"age > 92 and name = 'wl'"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="第5章-集群环境" tabindex="-1"><a class="header-anchor" href="#第5章-集群环境" aria-hidden="true">#</a> 第5章 集群环境</h2>
<h3 id="_5-1-集群介绍" tabindex="-1"><a class="header-anchor" href="#_5-1-集群介绍" aria-hidden="true">#</a> 5.1 集群介绍</h3>
<p><strong>单机模式</strong></p>
<p>一个broker提供服务，宕机后服务瘫痪</p>
<p><strong>集群模式</strong></p>
<p>多个 broker 提供服务</p>
<p>多个 master 多个 slave</p>
<p><strong>集群同步方式</strong></p>
<p>同步方式为 sync ，性能低，消息无延迟</p>
<p>同步方式为 async ， 性能高，数据有延迟</p>
<p><strong>集群工作流程</strong></p>
<p><img src="@source/document/java后端/asset/image-20220522225952154.png" alt="image-20220522225952154" loading="lazy"></p>
<h3 id="_5-2-多主多从同步搭建" tabindex="-1"><a class="header-anchor" href="#_5-2-多主多从同步搭建" aria-hidden="true">#</a> 5.2 多主多从同步搭建</h3>
<p><img src="@source/document/java后端/asset/image-20220522230415988.png" alt="image-20220522230415988" loading="lazy"></p>
<h3 id="_5-3-高级特性" tabindex="-1"><a class="header-anchor" href="#_5-3-高级特性" aria-hidden="true">#</a> 5.3 高级特性</h3>
<p><strong>消息存储</strong></p>
<p>ActivateMQ 存到数据库 速度慢</p>
<p>RocketmQ 存到文件系统 速度快</p>
<p><img src="@source/document/java后端/asset/image-20220522231640390.png" alt="image-20220522231640390" loading="lazy"></p>
<p><strong>高效读写</strong></p>
<p>预先申请空间，实现顺序读写</p>
<p>零拷贝技术，减少一次用户态复制过程</p>
<p><strong>物理地址</strong></p>
<p><img src="@source/document/java后端/asset/image-20220522234219759.png" alt="image-20220522234219759" loading="lazy"></p>
<h3 id="_5-4-刷盘机制" tabindex="-1"><a class="header-anchor" href="#_5-4-刷盘机制" aria-hidden="true">#</a> 5.4 刷盘机制</h3>
<p><strong>刷盘机制</strong></p>
<p>同步刷盘：安全性高，效率低，速度慢</p>
<p>异步刷盘：安全性低，效率高，速度快</p>
<p><strong>刷盘方式</strong></p>
<p>flushDiskType = SYNC_FLUSH</p>
<p>SYNC_FLUSH 同步刷盘</p>
<p>ASYNC_FLUSH 异步刷盘</p>
<p><strong>同步刷盘</strong></p>
<p><img src="@source/document/java后端/asset/image-20220522234700141.png" alt="image-20220522234700141" loading="lazy"></p>
<p><strong>异步刷盘</strong></p>
<p><img src="@source/document/java后端/asset/image-20220522234814029.png" alt="image-20220522234814029" loading="lazy"></p>
<p><strong>高可用</strong></p>
<p><img src="@source/document/java后端/asset/image-20220522235318750.png" alt="image-20220522235318750" loading="lazy"></p>
<p><strong>主从复制</strong></p>
<p><img src="@source/document/java后端/asset/image-20220522235404540.png" alt="image-20220522235404540" loading="lazy"></p>
<h3 id="_5-6-负载均衡" tabindex="-1"><a class="header-anchor" href="#_5-6-负载均衡" aria-hidden="true">#</a> 5.6 负载均衡</h3>
<p>生产者负载均衡 轮训</p>
<p><img src="@source/document/java后端/asset/image-20220523000545873.png" alt="image-20220523000545873" loading="lazy"></p>
<p>消费者负载均衡 循环平均分配</p>
<p><img src="@source/document/java后端/asset/image-20220523000622635.png" alt="image-20220523000622635" loading="lazy"></p>
<h3 id="_5-7-消息重试" tabindex="-1"><a class="header-anchor" href="#_5-7-消息重试" aria-hidden="true">#</a> 5.7 消息重试</h3>
<p><strong>消息重试</strong></p>
<p>当信息消费后，未正常返回消费成功的信息，将启动消息重试机制</p>
<p><strong>有序消息重试</strong></p>
<p><img src="@source/document/java后端/asset/image-20220523001121211.png" alt="image-20220523001121211" loading="lazy"></p>
<p><strong>无序消息重试</strong></p>
<p>除了有序消息其他都是无序消息</p>
<p><img src="@source/document/java后端/asset/image-20220523001039739.png" alt="image-20220523001039739" loading="lazy"></p>
<p><strong>死信队列</strong></p>
<p><img src="@source/document/java后端/asset/image-20220523001615396.png" alt="image-20220523001615396" loading="lazy"></p>
<p><img src="@source/document/java后端/asset/image-20220523001538332.png" alt="image-20220523001538332" loading="lazy"></p>
<p><img src="@source/document/java后端/asset/image-20220523001558174.png" alt="image-20220523001558174" loading="lazy"></p>
<h3 id="_5-9-消息重复消费" tabindex="-1"><a class="header-anchor" href="#_5-9-消息重复消费" aria-hidden="true">#</a> 5.9 消息重复消费</h3>
<p><img src="@source/document/java后端/asset/image-20220523002346046.png" alt="image-20220523002346046" loading="lazy"></p>
<p><strong>消息幂等</strong></p>
<p><img src="@source/document/java后端/asset/image-20220523002251358.png" alt="image-20220523002251358" loading="lazy"></p>
<h3 id="_5-10-其他问题解决方案" tabindex="-1"><a class="header-anchor" href="#_5-10-其他问题解决方案" aria-hidden="true">#</a> 5.10 其他问题解决方案</h3>
<p><strong>多主多从架构</strong></p>
<p>同步复制</p>
<p>异步刷盘</p>
<p><strong>解决消息丢失</strong></p>
<p>发送丢失</p>
<p>重试</p>
<p><strong>消息丢失</strong></p>
<p>多主多从</p>
<p>异步刷盘加同步复制</p>
<p><strong>消费丢失</strong></p>
<p>消息重试 死信队列</p>
<p><strong>消息重复</strong></p>
<p>幂等性</p>
<p>去重表</p>
<p><strong>怎么确保消息有顺序</strong></p>
<p>一个主题里只放一个队列</p>
<p>不能使用并发</p>
<h2 id="第6章-rabbit" tabindex="-1"><a class="header-anchor" href="#第6章-rabbit" aria-hidden="true">#</a> 第6章 rabbit</h2>
<p>安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker pull rabbitmq:management
docker run -d --hostname my-rabbit --name rabbit -p 15672:15672 -p 5672:5672 rabbitmq:management

http://localhost:15672/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第7章-kafka" tabindex="-1"><a class="header-anchor" href="#第7章-kafka" aria-hidden="true">#</a> 第7章 kafka</h2>
</div></template>
