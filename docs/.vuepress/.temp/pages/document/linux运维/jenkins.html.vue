<template><div><h2 id="第1章-jenkins简介" tabindex="-1"><a class="header-anchor" href="#第1章-jenkins简介" aria-hidden="true">#</a> 第1章 jenkins简介</h2>
<h3 id="_1-1-持续集成与交付概念" tabindex="-1"><a class="header-anchor" href="#_1-1-持续集成与交付概念" aria-hidden="true">#</a> 1.1 持续集成与交付概念</h3>
<p>CI(Continuous integration，中文意思是持续集成)是一种软件开发时间。持续集成强调开发人员提交了新代码之后，立刻进行构建、（单元）测试。根据测试结果，我们可以确定新代码和原有代码能否正确地集成在一起。借用网络图片对CI加以理解。</p>
<p>CD(Continuous Delivery， 中文意思持续交付)是在持续集成的基础上，将集成后的代码部署到更贴近真实运行环境(类生产环境)中。比如，我们完成单元测试后，可以把代码部署到连接数据库的Staging环境中更多的测试。如果代码没有问题，可以继续手动部署到生产环境。下图反应的是CI/CD 的大概工作模式。</p>
<h3 id="_1-2-jenkins-介绍" tabindex="-1"><a class="header-anchor" href="#_1-2-jenkins-介绍" aria-hidden="true">#</a> 1.2 jenkins 介绍</h3>
<p>一个开源的、提供友好操作界面的持续集成(CI)工具，主要用于持续、自动的构建/测试软件项目、监控外部任务的运行。</p>
<h3 id="_1-3-jenkins-安装" tabindex="-1"><a class="header-anchor" href="#_1-3-jenkins-安装" aria-hidden="true">#</a> 1.3 jenkins 安装</h3>
<ul>
<li>安装jdk11</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 搜索软件</span>
yum search <span class="token function">java</span><span class="token operator">|</span><span class="token function">grep</span> jdk

<span class="token comment"># 安装jdk</span>
yum <span class="token function">install</span> java-11-openjdk <span class="token parameter variable">-y</span>

<span class="token comment"># 默认目录</span>
/usr/lib/jvm/java-11-openjdk-11.0.11.0.9-1.el7_9.x86_64

<span class="token comment"># 编辑环境配置文件</span>
<span class="token function">vim</span> /etc/profile

<span class="token comment"># 配置环境变量</span>
<span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/lib/jvm/java-11-openjdk-11
<span class="token assign-left variable">JRE_HOME</span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/jre
<span class="token assign-left variable">JAVA_BIN</span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin
<span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">$JAVA_HOME</span>/lib/dt.jar:<span class="token variable">$JAVA_HOME</span>/lib/tools.jar:<span class="token variable">$JRE_HOME</span>/lib
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token variable">$JRE_HOME</span>/bin
<span class="token builtin class-name">export</span> JAVA_HOME JRE_HOME <span class="token environment constant">PATH</span> CLASSPATH

<span class="token comment"># 使修改生效</span>
<span class="token builtin class-name">source</span> /etc/profile

<span class="token comment"># 验证</span>
<span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>安装jenkins</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">wget</span> <span class="token parameter variable">-O</span> /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
<span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">--import</span> https://pkg.jenkins.io/redhat-stable/jenkins.io.key

yum <span class="token function">install</span> jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>安装maven</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>安装git</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">git</span> <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>进入jenkins 安装maven插件</p>
</li>
<li>
<p>jenkins安装node</p>
</li>
<li>
<p>配置github令牌和钩子</p>
</li>
<li>
<p>jenkins新建项目</p>
</li>
</ul>
<h2 id="第2章-jenkins基础" tabindex="-1"><a class="header-anchor" href="#第2章-jenkins基础" aria-hidden="true">#</a> 第2章 jenkins基础</h2>
<h3 id="_2-1-流程简介" tabindex="-1"><a class="header-anchor" href="#_2-1-流程简介" aria-hidden="true">#</a> 2.1 流程简介</h3>
<p>本地代码编写完成 提交到github仓库</p>
<p>github触发webhook 向jenkins服务器发送post请求</p>
<p>jenkins服务器接受到该请求 触发该项目的工作</p>
<p>拉取代码到工作空间后</p>
<p>执行构建前工作</p>
<p>执行构建项目 shell脚本</p>
<p>执行构建后操作 通过ssh插件 发送打包内容到其他服务器 并执行命令</p>
<p>将结果发送到邮箱</p>
<h3 id="_2-2-构建触发器" tabindex="-1"><a class="header-anchor" href="#_2-2-构建触发器" aria-hidden="true">#</a> 2.2 构建触发器</h3>
<ul>
<li>快照依赖构建</li>
</ul>
<p>当依赖的快照被构建时执行job</p>
<ul>
<li>触发远程构建</li>
</ul>
<p>远程调用本job的restapi时执行job</p>
<ul>
<li>job依赖构建</li>
</ul>
<p>当依赖得劲ob被构建时执行本job</p>
<ul>
<li>每日定时自动构建</li>
</ul>
<p>使用cron表达式定时构建job</p>
<ul>
<li>向github提交代码自动构建</li>
</ul>
<p>github-webhook触发时构建本job</p>
<p>适合小型个人项目, 如果是多人项目是手动job, 不可能谁提交一下就构建一次</p>
<ul>
<li>定期检查代码变更构建</li>
</ul>
<p>使用cron表达式定时检查代码变更, 变更后构建本job</p>
<h3 id="_2-3-插件" tabindex="-1"><a class="header-anchor" href="#_2-3-插件" aria-hidden="true">#</a> 2.3 插件</h3>
<h3 id="_2-4-全局配置" tabindex="-1"><a class="header-anchor" href="#_2-4-全局配置" aria-hidden="true">#</a> 2.4 全局配置</h3>
<h3 id="_2-5-邮箱通知" tabindex="-1"><a class="header-anchor" href="#_2-5-邮箱通知" aria-hidden="true">#</a> 2.5 邮箱通知</h3>
<p>1.开启163邮箱的smtp功能 并记录秘钥</p>
<p><img src="@source/document/linux运维/asset/image-20221014212516962.png" alt="image-20221014212516962" loading="lazy"></p>
<p>2.配置jenkins的管理员邮箱为发件邮箱</p>
<p><img src="@source/document/linux运维/asset/image-20221014212654507.png" alt="image-20221014212654507" loading="lazy"></p>
<p>3.配置jenkins邮箱插件</p>
<p>身份验证 用户名为163邮箱的账号 密码为开启smtp时的秘钥</p>
<p><img src="@source/document/linux运维/asset/image-20221014212802042.png" alt="image-20221014212802042" loading="lazy"></p>
<p>4.配置jenkins邮件通知</p>
<p>勾选测试 发件成功的例子</p>
<p><img src="@source/document/linux运维/asset/image-20221014212932491.png" alt="image-20221014212932491" loading="lazy"></p>
<h3 id="_2-6-优化细节" tabindex="-1"><a class="header-anchor" href="#_2-6-优化细节" aria-hidden="true">#</a> 2.6 优化细节</h3>
<p>解决端口冲突 清理目录</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 删除历史</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> filename


<span class="token comment"># 获取命令行传来的第一个参数</span>
<span class="token builtin class-name">echo</span> <span class="token string">"arg:<span class="token variable">$1</span>"</span>
<span class="token assign-left variable">appname</span><span class="token operator">=</span><span class="token variable">$1</span>

<span class="token comment"># 获取pid  awk $2是获取第二列的数据</span>
<span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> $1 <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">'java -jar'</span> <span class="token function">awk</span> <span class="token string">'{printf $2}'</span><span class="token variable">`</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">$pid</span>

<span class="token comment"># 空值判断 否则报错 -z代表判断是否为空</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$pid</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">then</span> 
		<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$appname</span> not started"</span>
	<span class="token keyword">else</span> 
		<span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$pid</span>
		<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$appname</span> stoped"</span>
<span class="token keyword">fi</span>		
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>超时配置</p>
<p>考虑到项目构建的时间, 设置超时时间, 不然超时就会有报错</p>
<p>shell权限配置</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 进入文件 修改权限</span>
<span class="token function">sudo</span> visudo

<span class="token comment"># 追加内容 给jenkins权限</span>
jenkins <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span> NOPASSWD: ALL

<span class="token comment"># 构建执行的shell前面加上sudo即可</span>
<span class="token function">sudo</span> <span class="token function">touch</span> index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-jenkins集群并发构建" tabindex="-1"><a class="header-anchor" href="#_2-7-jenkins集群并发构建" aria-hidden="true">#</a> 2.7 jenkins集群并发构建</h3>
<h3 id="_2-8-流水线-pipeline" tabindex="-1"><a class="header-anchor" href="#_2-8-流水线-pipeline" aria-hidden="true">#</a> 2.8 流水线 pipeline</h3>
<p>安装插件 blue ocean 功能更多的流水线UI管理界面</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pipeline <span class="token punctuation">{</span>
    agent any

    stages <span class="token punctuation">{</span>
        stage<span class="token punctuation">(</span><span class="token string">'Hello'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                <span class="token builtin class-name">echo</span> <span class="token string">'Hello World'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多分支流水线</p>
<h3 id="_2-9-用户权限" tabindex="-1"><a class="header-anchor" href="#_2-9-用户权限" aria-hidden="true">#</a> 2.9 用户权限</h3>
<h3 id="_2-10-依赖项目" tabindex="-1"><a class="header-anchor" href="#_2-10-依赖项目" aria-hidden="true">#</a> 2.10 依赖项目</h3>
<h2 id="第3章-容器化构建docker" tabindex="-1"><a class="header-anchor" href="#第3章-容器化构建docker" aria-hidden="true">#</a> 第3章 容器化构建docker</h2>
<h3 id="_3-1-环境安装" tabindex="-1"><a class="header-anchor" href="#_3-1-环境安装" aria-hidden="true">#</a> 3.1 环境安装</h3>
<ol>
<li>
<p>安装 vmware虚拟机 ubuntu20操作系统</p>
</li>
<li>
<p>安装 docker 和 openssh-server</p>
</li>
<li>
<p>安装 finalshell软件</p>
</li>
</ol>
<p>安装jenkins</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run \
  -u root \
  --rm \
  -d \
  -p 8080:8080 \
  -p 50000:50000 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  jenkinsci/blueocean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看jenkins密码</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker ps
docker container exec -it &lt;docker-container-name> bash
cat /var/jenkins_home/secrets/initialAdminPassword
用户名 admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第4章-容器化构建-k8s" tabindex="-1"><a class="header-anchor" href="#第4章-容器化构建-k8s" aria-hidden="true">#</a> 第4章  容器化构建 k8s</h2>
<h3 id="_4-1-环境安装" tabindex="-1"><a class="header-anchor" href="#_4-1-环境安装" aria-hidden="true">#</a> 4.1 环境安装</h3>
</div></template>
