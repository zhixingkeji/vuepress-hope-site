<template><div><h2 id="第1章-jenkins简介" tabindex="-1"><a class="header-anchor" href="#第1章-jenkins简介" aria-hidden="true">#</a> 第1章 jenkins简介</h2>
<<<<<<< HEAD
<<<<<<< HEAD
<h3 id="_1-1-软件开发声明周期" tabindex="-1"><a class="header-anchor" href="#_1-1-软件开发声明周期" aria-hidden="true">#</a> 1.1 软件开发声明周期</h3>
<h3 id="_1-2-软件开发瀑布模型" tabindex="-1"><a class="header-anchor" href="#_1-2-软件开发瀑布模型" aria-hidden="true">#</a> 1.2 软件开发瀑布模型</h3>
<h3 id="_1-3-软件敏捷开发" tabindex="-1"><a class="header-anchor" href="#_1-3-软件敏捷开发" aria-hidden="true">#</a> 1.3 软件敏捷开发</h3>
<h3 id="_1-4-持续集成概念" tabindex="-1"><a class="header-anchor" href="#_1-4-持续集成概念" aria-hidden="true">#</a> 1.4 持续集成概念</h3>
<h3 id="_1-5-持续集成的有点" tabindex="-1"><a class="header-anchor" href="#_1-5-持续集成的有点" aria-hidden="true">#</a> 1.5 持续集成的有点</h3>
<h3 id="_1-6-jenkins-介绍" tabindex="-1"><a class="header-anchor" href="#_1-6-jenkins-介绍" aria-hidden="true">#</a> 1.6 jenkins 介绍</h3>
<h2 id="第2章-jenkins基础" tabindex="-1"><a class="header-anchor" href="#第2章-jenkins基础" aria-hidden="true">#</a> 第2章 jenkins基础</h2>
=======
=======
>>>>>>> 815481ce3079460341bfa9ef9afd3199c8319e8d
<h3 id="_1-1-持续集成与交付概念" tabindex="-1"><a class="header-anchor" href="#_1-1-持续集成与交付概念" aria-hidden="true">#</a> 1.1 持续集成与交付概念</h3>
<p>CI(Continuous integration，中文意思是持续集成)是一种软件开发时间。持续集成强调开发人员提交了新代码之后，立刻进行构建、（单元）测试。根据测试结果，我们可以确定新代码和原有代码能否正确地集成在一起。借用网络图片对CI加以理解。</p>
<p>CD(Continuous Delivery， 中文意思持续交付)是在持续集成的基础上，将集成后的代码部署到更贴近真实运行环境(类生产环境)中。比如，我们完成单元测试后，可以把代码部署到连接数据库的Staging环境中更多的测试。如果代码没有问题，可以继续手动部署到生产环境。下图反应的是CI/CD 的大概工作模式。</p>
<h3 id="_1-2-jenkins-介绍" tabindex="-1"><a class="header-anchor" href="#_1-2-jenkins-介绍" aria-hidden="true">#</a> 1.2 jenkins 介绍</h3>
<p>Jenkins是一个开源的、提供友好操作界面的持续集成(CI)工具，起源于Hudson（Hudson是商用的），主要用于持续、自动的构建/测试软件项目、监控外部任务的运行（这个比较抽象，暂且写上，不做解释）。Jenkins用Java语言编写，可在Tomcat等流行的servlet容器中运行，也可独立运行。通常与版本管理工具(SCM)、构建工具结合使用。常用的版本控制工具有SVN、GIT，构建工具有Maven、Ant、Gradle。</p>
<h2 id="第2章-jenkins基础" tabindex="-1"><a class="header-anchor" href="#第2章-jenkins基础" aria-hidden="true">#</a> 第2章 jenkins基础</h2>
<h3 id="_2-1" tabindex="-1"><a class="header-anchor" href="#_2-1" aria-hidden="true">#</a> 2.1</h3>
<h3 id="_2-2" tabindex="-1"><a class="header-anchor" href="#_2-2" aria-hidden="true">#</a> 2.2</h3>
<h3 id="_2-3" tabindex="-1"><a class="header-anchor" href="#_2-3" aria-hidden="true">#</a> 2.3</h3>
<h3 id="_2-4" tabindex="-1"><a class="header-anchor" href="#_2-4" aria-hidden="true">#</a> 2.4</h3>
<h3 id="_2-5" tabindex="-1"><a class="header-anchor" href="#_2-5" aria-hidden="true">#</a> 2.5</h3>
<h3 id="_2-6" tabindex="-1"><a class="header-anchor" href="#_2-6" aria-hidden="true">#</a> 2.6</h3>
<<<<<<< HEAD
>>>>>>> 815481ce3079460341bfa9ef9afd3199c8319e8d
=======
>>>>>>> 815481ce3079460341bfa9ef9afd3199c8319e8d
<h2 id="第3章-jenkins-docker" tabindex="-1"><a class="header-anchor" href="#第3章-jenkins-docker" aria-hidden="true">#</a> 第3章 jenkins + docker</h2>
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
<li>
<p>输入指令</p>
</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 创建文件夹作为挂载地址</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /mnt/gitlab/etc 
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /mnt/gitlab/log
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /mnt/gitlab/data

<span class="token comment"># 拉取镜像</span>
<span class="token function">docker</span> pull gitlab/gitlab-ce

<span class="token comment"># 运行镜像 创建时间很长,耐心等待</span>
<span class="token function">docker</span> run <span class="token punctuation">\</span>
    <span class="token parameter variable">--detach</span> <span class="token punctuation">\</span>
    <span class="token parameter variable">--publish</span> <span class="token number">8443</span>:443 <span class="token punctuation">\</span>
    <span class="token parameter variable">--publish</span> <span class="token number">8090</span>:80 <span class="token punctuation">\</span>
    <span class="token parameter variable">--name</span> gitlab <span class="token punctuation">\</span>
    <span class="token parameter variable">--restart</span> unless-stopped <span class="token punctuation">\</span>
    <span class="token parameter variable">-v</span> /mnt/gitlab/etc:/etc/gitlab <span class="token punctuation">\</span>
    <span class="token parameter variable">-v</span> /mnt/gitlab/log:/var/log/gitlab <span class="token punctuation">\</span>
    <span class="token parameter variable">-v</span> /mnt/gitlab/data:/var/opt/gitlab <span class="token punctuation">\</span>
    gitlab/gitlab-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>查看ip访问端口</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ifconfig  // 访问 192.168.179.128:8090
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6">
<li>输入用户名和密码</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>默认用户名 root
密码获取 cat /mnt/gitlab/etc/initial_root_password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7">
<li>新建项目</li>
</ol>
<p>进入gitlab 新增项目</p>
<p>添加ssh公钥</p>
<ol start="8">
<li>将本地代码提交到gitlab中</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git remote set-url origin git@192.168.179.128:8090/gitlab-instance-8c95171e/java-project.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装jenkins</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第4章-jenkins-k8s" tabindex="-1"><a class="header-anchor" href="#第4章-jenkins-k8s" aria-hidden="true">#</a> 第4章  jenkins + k8s</h2>
<h3 id="_4-1" tabindex="-1"><a class="header-anchor" href="#_4-1" aria-hidden="true">#</a> 4.1</h3>
<h3 id="_4-2" tabindex="-1"><a class="header-anchor" href="#_4-2" aria-hidden="true">#</a> 4.2</h3>
<h3 id="_4-3" tabindex="-1"><a class="header-anchor" href="#_4-3" aria-hidden="true">#</a> 4.3</h3>
</div></template>
