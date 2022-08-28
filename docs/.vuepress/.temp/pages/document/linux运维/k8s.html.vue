<template><div><h2 id="第1章-k8s-介绍" tabindex="-1"><a class="header-anchor" href="#第1章-k8s-介绍" aria-hidden="true">#</a> 第1章  k8s 介绍</h2>
<p>Kubernetes是Google 2014年创建管理的，是Google 10多年大规模容器管理技术Borg的开源版本。</p>
<p>它是容器集群管理系统，是一个开源的平台，可以实现容器集群的自动化部署、自动扩缩容、维护等功能。</p>
<h3 id="_1-1-功能特点" tabindex="-1"><a class="header-anchor" href="#_1-1-功能特点" aria-hidden="true">#</a> 1.1 功能特点</h3>
<ul>
<li>负载均衡</li>
<li>服务发现</li>
<li>存储编排</li>
<li>自动回滚部署</li>
<li>自动完成装箱计算</li>
<li>自我修复</li>
<li>密钥和配置管理</li>
</ul>
<h3 id="_1-2-历史发展" tabindex="-1"><a class="header-anchor" href="#_1-2-历史发展" aria-hidden="true">#</a> 1.2 历史发展</h3>
<ol>
<li>物理机部署</li>
<li>虚拟机部署</li>
<li>容器化部署</li>
</ol>
<h3 id="_1-3-架构和组件" tabindex="-1"><a class="header-anchor" href="#_1-3-架构和组件" aria-hidden="true">#</a> 1.3 架构和组件</h3>
<p><img src="@source/document/linux运维/asset/image-20220606223356413.png" alt="image-20220606223356413" loading="lazy"></p>
<ul>
<li>Control Plane master</li>
</ul>
<p>主节点，控制面板 ，不需要很高性能，不跑任务，通常一个就行了，也可以开多个主节点来提高集群可用度。</p>
<ul>
<li>Controller manager</li>
</ul>
<p>负责维护集群的状态，比如故障检测、自动扩展、滚动更新等</p>
<ul>
<li>etcd</li>
</ul>
<p>数据库, 保存了整个集群的状态</p>
<ul>
<li>api server</li>
</ul>
<p>提供资源操作的唯一入口API</p>
<ul>
<li>scheduler</li>
</ul>
<p>负责资源调度，按照预定的调度策略将 Pod 调度到相应的机器上；</p>
<ul>
<li>kubectl</li>
</ul>
<p>命令行交互指令 , 类似于 docker....</p>
<ul>
<li>kubelet</li>
</ul>
<p>负责维护容器的生命周期，同时也负责 Volume（CSI）和网络（CNI）的管理</p>
<ul>
<li>kube-proxy</li>
</ul>
<p>负责为 service 提供 集群内部的服务发现和负载均衡</p>
<ul>
<li>kubeadmin</li>
</ul>
<p>k8s集群简化搭建的脚手架</p>
<ul>
<li>pod</li>
</ul>
<p>Pod是kubernetes中最小的资源管理组件，Pod也是最小化运行容器化应用的资源对象，在一个Pod中同时运行一个或多个容器。</p>
<ul>
<li>node</li>
</ul>
<p>工作节点，可以是虚拟机或物理计算机，任务都在这里跑，机器性能需要好点；通常都有很多个，可以不断加机器扩大集群；每个工作节点由主节点管理</p>
<ul>
<li>deployments</li>
</ul>
<p>最常见的控制器，用于部署和管理 pod</p>
<ul>
<li>service</li>
</ul>
<p>为一组pod 提供负载均衡，对外提供访问入口</p>
<ul>
<li>
<p>job</p>
</li>
<li>
<p>volume</p>
</li>
<li>
<p>namespace</p>
</li>
</ul>
<p>命令空间，将资源对象从逻辑上隔离，从而形成多个虚拟集群</p>
<ul>
<li>label</li>
</ul>
<p>标签，附加到某个资源上，用于关联对象</p>
<h3 id="_1-4-minikube部署k8s集群" tabindex="-1"><a class="header-anchor" href="#_1-4-minikube部署k8s集群" aria-hidden="true">#</a> 1.4 minikube部署k8s集群</h3>
<p>minikube官网 <a href="https://minikube.sigs.k8s.io/docs/start/" target="_blank" rel="noopener noreferrer">https://minikube.sigs.k8s.io/docs/start/<ExternalLinkIcon/></a></p>
<p>下载安装包 <a href="https://storage.googleapis.com/minikube/releases/latest/minikube-installer.exe" target="_blank" rel="noopener noreferrer">https://storage.googleapis.com/minikube/releases/latest/minikube-installer.exe<ExternalLinkIcon/></a></p>
<p>或者用 powershell</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>New-Item <span class="token parameter variable">-Path</span> <span class="token string">'c:\'</span> <span class="token parameter variable">-Name</span> <span class="token string">'minikube'</span> <span class="token parameter variable">-ItemType</span> Directory <span class="token parameter variable">-Force</span>
Invoke-WebRequest <span class="token parameter variable">-OutFile</span> <span class="token string">'c:\minikube\minikube.exe'</span> <span class="token parameter variable">-Uri</span> <span class="token string">'https://github.com/kubernetes/minikube/releases/latest/download/minikube-windows-amd64.exe'</span> <span class="token parameter variable">-UseBasicParsing</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token variable">$oldPath</span> <span class="token operator">=</span> <span class="token punctuation">[</span>Environment<span class="token punctuation">]</span>::GetEnvironmentVariable<span class="token punctuation">(</span><span class="token string">'Path'</span>, <span class="token punctuation">[</span>EnvironmentVariableTarget<span class="token punctuation">]</span>::Machine<span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$oldPath</span>.Split<span class="token punctuation">(</span><span class="token string">';'</span><span class="token punctuation">)</span> <span class="token parameter variable">-inotcontains</span> <span class="token string">'C:\minikube'</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token variable"><span class="token variable">`</span>
  <span class="token punctuation">[</span>Environment<span class="token punctuation">]</span>::SetEnvironmentVariable<span class="token punctuation">(</span><span class="token string">'Path'</span>, <span class="token punctuation">$(</span><span class="token string">'{0};C:\minikube'</span> <span class="token parameter variable">-f</span> $oldPath<span class="token punctuation">)</span>, <span class="token punctuation">[</span>EnvironmentVariableTarget<span class="token punctuation">]</span>::Machine<span class="token punctuation">)</span> <span class="token variable">`</span></span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相关操作</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 启动集群</span>
minikube start
<span class="token comment"># 查看节点。kubectl 是一个用来跟 K8S 集群进行交互的命令行工具</span>
kubectl get <span class="token function">node</span>
<span class="token comment"># 停止集群</span>
minikube stop
<span class="token comment"># 清空集群</span>
minikube delete <span class="token parameter variable">--all</span>
<span class="token comment"># 安装集群可视化 Web UI 控制台</span>
minikube dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-kubeadm部署k8s集群" tabindex="-1"><a class="header-anchor" href="#_1-5-kubeadm部署k8s集群" aria-hidden="true">#</a> 1.5 kubeadm部署k8s集群</h3>
<h3 id="_1-6-rancher部署k8s集群" tabindex="-1"><a class="header-anchor" href="#_1-6-rancher部署k8s集群" aria-hidden="true">#</a> 1.6 rancher部署k8s集群</h3>
<p>在linux云服务器上安装 rancher</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run --privileged -d --restart=unless-stopped -p 80:80 -p 443:443 rancher/rancher:stable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看密码</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker ps #查看容器id
docker logs 容器id  2>&amp;1 | grep "Bootstrap Password:"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>登录服务器</p>
<p><a href="http://ip" target="_blank" rel="noopener noreferrer">http://ip<ExternalLinkIcon/></a></p>
<h3 id="_1-7-kubectl指令" tabindex="-1"><a class="header-anchor" href="#_1-7-kubectl指令" aria-hidden="true">#</a> 1.7 kubectl指令</h3>
<p>查看node</p>
<p>kubectl get node</p>
<p>查看namespace</p>
<p>kubectl get namespace</p>
<p>查看job</p>
<p>kubectl get job</p>
<p>查看日志</p>
<p>kubectl logs name -f</p>
<p>创建yaml文件</p>
<p>kubectl apply -f xxx.yaml</p>
<p>删除ymal文件</p>
<p>kubectl delete -f xxx.yaml</p>
<p>删除deployment</p>
<p>kubectl delete deployment  [name]</p>
<h2 id="第2章-k8s基础" tabindex="-1"><a class="header-anchor" href="#第2章-k8s基础" aria-hidden="true">#</a> 第2章 k8s基础</h2>
<h3 id="_2-1-namespace-命名空间" tabindex="-1"><a class="header-anchor" href="#_2-1-namespace-命名空间" aria-hidden="true">#</a> 2.1 namespace 命名空间</h3>
<ul>
<li>命名空间简介</li>
</ul>
<p>实现多套环境的资源隔离。</p>
<p>默认情况下集群所有pod都可以互相访问，如果使其不能互相访问，就可以使用命名空间隔离。</p>
<ul>
<li>系统默认创建的</li>
</ul>
<p>default                Active   17d
kube-node-lease        Active   17d
kube-public            Active   17d
kube-system            Active   17d
kubernetes-dashboard   Active   17d</p>
<p>查看命名空间</p>
<p>kubectl get ns</p>
<p>创建命名空间</p>
<p>kubectl create namespace [name]</p>
<p>删除命名空间</p>
<p>kubectl delete namespace [name]</p>
<p>查看命名空间下的资源</p>
<p>kubectl get pods -n wlm</p>
<h3 id="_2-2-pod-容器" tabindex="-1"><a class="header-anchor" href="#_2-2-pod-容器" aria-hidden="true">#</a> 2.2 pod 容器</h3>
<ul>
<li>pod概念</li>
</ul>
<p>pod是k8s的最小单元，一个pod由一个或多个容器组成。</p>
<p>pod始终部署在node上。</p>
<p>创建pod时候，会默认创建一个根容器，用于判断健康状态和共享ip。</p>
<ul>
<li>接口文档</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>kubectl get pods  # 查看所有pods
kubectl get pod [name] # 查看某个pod
kubectl get pod [name] -o yaml # 查看某个pod的yaml
kubectl delete pod [name] # 删除某个pod
kubectl describe pod [name] # 查看pod的详情
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>创建容器</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kebectl run nginx --image=nginx --port=80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>删除容器</li>
</ul>
<p>使用上面命令行创建的pod，无法通过 <code v-pre>delete pod</code> 直接删除pod，因为控制器发现pod死亡后会马上重新拉起一个新的pod，需要删除该pod的控制器才能彻底删除pod</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kebectl delete deployment nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>资源清单</li>
</ul>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1 <span class="token comment">#必选,版本号,例如v1</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod <span class="token comment"># 必选,资源类型,例如Pod</span>
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> <span class="token comment">#必选,元数据</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> string <span class="token comment"># 必选,Pod名称</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default <span class="token comment"># Pod所属的命名空间,默认为"default"</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token comment"># 自定义标签列表</span>
   <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string
<span class="token key atrule">spec</span><span class="token punctuation">:</span> <span class="token comment"># 必选,Pod中容器的详细定义</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span> <span class="token comment">#必选,Pod中容器列表</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string <span class="token comment"># 必选,容器名称</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> string <span class="token comment"># 必选,容器的镜像名称</span>
    <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>Always <span class="token punctuation">|</span>Never<span class="token punctuation">|</span>IfNotPresent】
    <span class="token comment"># 获取镜像的策略</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span>
    <span class="token comment">#容器的启动命令列表,如不指定,使用打包时使用的启动命令</span>
	<span class="token key atrule">args</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span> <span class="token comment">#容器的启动命令参数列表</span>
	<span class="token key atrule">workingDir</span><span class="token punctuation">:</span> string <span class="token comment">#容器的工作目录</span>
	<span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span> <span class="token comment"># 挂载到容器内部的存储卷配置</span>
	<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string
	<span class="token comment">#引用pod定义的共享存储卷的名称,需用volumes[]部分定义的的卷名</span>
	  <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> string
	  <span class="token comment"># 存储卷在容器内mount的绝对路径,应少于512字符		      </span>
	  <span class="token key atrule">read0nly</span><span class="token punctuation">:</span> boolean <span class="token comment">#是否为只读模式</span>
	<span class="token key atrule">ports</span><span class="token punctuation">:</span> <span class="token comment">#需要暴露的端口库号列表</span>
	<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string <span class="token comment"># 端口的名称</span>
	  <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> int <span class="token comment"># 容器需要监听的端口号</span>
	  <span class="token key atrule">hostPort</span><span class="token punctuation">:</span> int 
	  <span class="token comment">#容器所在主机需要监听的端口号,默认与Container相同</span>
	  <span class="token key atrule">protocol</span><span class="token punctuation">:</span> string <span class="token comment">#端口协议,支持TCP和UDP,默认TCP</span>
	<span class="token key atrule">env</span><span class="token punctuation">:</span> <span class="token comment">#容器运行前需设置的环境变量列表</span>
	<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string <span class="token comment">#环境变量名称</span>
	  <span class="token key atrule">value</span><span class="token punctuation">:</span> string <span class="token comment">#环境变量的值</span>
	<span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token comment"># 资源限制和自愿请求的设置</span>

<span class="token key atrule">status</span><span class="token punctuation">:</span> <span class="token comment"># 状态 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-1-pod配置" tabindex="-1"><a class="header-anchor" href="#_2-2-1-pod配置" aria-hidden="true">#</a> 2.2.1 pod配置</h4>
<ul>
<li>基本配置</li>
</ul>
<p>pod-base.yaml</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> 
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>base
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">user</span><span class="token punctuation">:</span> heima
<span class="token key atrule">spec</span><span class="token punctuation">:</span> 
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
  	<span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> busybox
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox<span class="token punctuation">:</span><span class="token number">1.30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建容器</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kubectl apply -f pod-base.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>镜像拉取策略</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>imagePullPolicy: Always # 永远从远程拉取
imagePullPolicy: Never # 永远从本地拉取
imagePullPolicy: IfNotPresent # 本地有则用本地,没有则远程拉取

在指定镜像版本号后,默认值为IfNotPresent
在使用镜像版本为laster时,默认值为Always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>启动命令</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>command: ["/bin/sh","-c","torch /tmp/hello.txt;while true;do /bin/echo $(data) +%t >> /tem/hello.txt;sleep 3;done;"]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>环境变量</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>env:
  - name: "username"
  value: "admin"
  - name: "password"
  value: "12323"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>端口设置</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ports: 
  - name: nginx-port 
    containerPort: 80
    protocol: TCP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>资源配额</li>
</ul>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token comment">#</span>
  <span class="token key atrule">limits</span><span class="token punctuation">:</span> <span class="token comment"># 上限</span>
    <span class="token key atrule">cpu</span><span class="token punctuation">:</span> <span class="token string">"2"</span> <span class="token comment">#cpu核心限制2核</span>
    <span class="token key atrule">memory</span><span class="token punctuation">:</span> <span class="token string">"10G"</span> <span class="token comment">#内存限制</span>
  <span class="token key atrule">requests</span><span class="token punctuation">:</span> <span class="token comment"># 下限</span>
    <span class="token key atrule">cpu</span><span class="token punctuation">:</span> <span class="token string">"1"</span> <span class="token comment">#cpu核心限制1核</span>
    <span class="token key atrule">memory</span><span class="token punctuation">:</span> <span class="token string">"10M"</span> <span class="token comment">#内存限制</span>
        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-pod生命周期" tabindex="-1"><a class="header-anchor" href="#_2-2-2-pod生命周期" aria-hidden="true">#</a> 2.2.2 pod生命周期</h4>
<ul>
<li>
<p>创建和终止</p>
</li>
<li>
<p>初始化容器</p>
</li>
<li>
<p>钩子函数</p>
</li>
</ul>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">lifecycle</span><span class="token punctuation">:</span>
  <span class="token key atrule">postStart</span><span class="token punctuation">:</span> <span class="token comment"># 启动后</span>
    <span class="token key atrule">exec</span><span class="token punctuation">:</span>
      <span class="token key atrule">command</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> cat
      <span class="token punctuation">-</span> /tmp/healthy
      
  <span class="token key atrule">preStop</span><span class="token punctuation">:</span> <span class="token comment"># 停止前</span>
    <span class="token key atrule">exec</span><span class="token punctuation">:</span> 
      <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"/usr/sbin/nginx"</span><span class="token punctuation">,</span><span class="token string">"-s"</span><span class="token punctuation">,</span><span class="token string">"quit"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>容器探测</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> livenessProbe:
   tcpSocket:
     port: 8080 #尝试访问8080端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/document/linux运维/asset/image-20220702100718191.png" alt="image-20220702100718191" loading="lazy"></p>
<p>三种方式</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tcpSocket
httpGet
exec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>五种选项</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#容器启动后等待多少秒执行第一次探测
initialDelaySeconds &lt;integer> 

#探测超时时间。默认1秒,最小1秒
timeoutSeconds &lt;integer>

#执行探测的频率。默认是1秒,最小1秒
periodSeconds &lt;integer>

#连续探测失败多少次才被认定为失败。默认是3。最小值是1
failureThreshold &lt;integer>

#连续探测成功多少次才被认定为成功。默认是1
successThreshold &lt;integer>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>重启策略</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>restartPolicy: Always  # 默认值 永远自动重启
restartPolicy: OnFailure # 容器终于运行且退出码不为0时重启
restartPolicy: Never # 永不重启
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-3-pod调度" tabindex="-1"><a class="header-anchor" href="#_2-2-3-pod调度" aria-hidden="true">#</a> 2.2.3 pod调度</h4>
<ul>
<li>自动调度</li>
</ul>
<p>通过 scheduler 组件自动计算和调度，无法人工干预</p>
<ul>
<li>定向调度</li>
</ul>
<p>强制调度到指定节点上，不管节点是否存在</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>spec:
  # 方式1 nodeName
  nodeName: node1 # 指定node1节点
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>spec:
  # 方式2 nodeSelector
  nodeSelector: 
    nodeenv: pro # 指定调度到具有该标签的节点上
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>亲和性调度</li>
</ul>
<p>优先调度到该节点，如果不存在则自动调度到其他节点上</p>
<p>pod 亲和性 有指定的pod则跟他在一起</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>affinity: #亲和性设置
  podAffinity: # 设置node亲和性
    requiredDuringSchedulingIgnoredDuringExecution: #硬限制
    - labelSelector:
	    matchExpressions: #匹配env的值在["xxx","yyy"]中的标签   
	    - key:nodeenv
		  operator: In
  		  values: ["xxx","yyy"]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>node 亲和性 有指定的node则跟他在一起</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>affinity: #亲和性设置
  nodeAffinity: # 设置node亲和性
    requiredDuringSchedulingIgnoredDuringExecution: #硬限制
      nodeSelectorTerms:
	  - matchExpressions: #匹配env的值在["xxx","yyy"]中的标签   
	    - key:nodeenv
		  operator: In
  		  values: ["xxx","yyy"]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pod 反亲和性  有指定的某个pod则不跟他在一起</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>affinity: #亲和性设置
  podAntiAffinity: # 设置node亲和性
    requiredDuringSchedulingIgnoredDuringExecution: #硬限制
    - labelSelector:
	    matchExpressions: #匹配env的值在["xxx","yyy"]中的标签   
	    - key:nodeenv
		  operator: In
  		  values: ["xxx","yyy"]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>污点</li>
</ul>
<p>污点的格式为:key=value:effect,key和value是污点的标签,effect描述污点的作用,支持如下三个选项:</p>
<p>·PreferNoSchedule</p>
<p>kubernetes 将尽量避免把Pod调度到具有该污点的Node上,除非没有其他节点可调度</p>
<p>·NoSchedule</p>
<p>kubernetes 将不会把Pod调度到具有该污点的Node上,但不会影响当前Node上已存在的Pod，master节点上默认采用该污点</p>
<p>NoExecute</p>
<p>kubernetes 将不会把Pod调度到具有该污点的Node上,同时也会将Node上已存在的Pod驱离</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 设置污点
kubectl taint nodes node1 key=value:[effect]

# 去除污点
kubectl taint nodes node1 key:[effect]-

# 去除所有污点
kubectl taint nodes node1 key-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>容忍</li>
</ul>
<p>污点就是拒绝,容忍就是忽略,Nod通过污点拒绝pod调度上去,Pod通过容忍忽略拒绝</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>sepc:
  tolerations:
  - key: "tag"  # 要容忍的污点key
  operator: "Equal" # 操作符
  value: "heima" # 污点的value
  effect: "NoExecute" # 容忍污点的规则
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-label-标签" tabindex="-1"><a class="header-anchor" href="#_2-3-label-标签" aria-hidden="true">#</a> 2.3 Label 标签</h3>
<ul>
<li>label简介</li>
</ul>
<p>作用是在资源上添加标识，用来对它们区分和选择。</p>
<p>标签由一个键值对组成。</p>
<p>一个资源可以添加多个标签，一个标签也可以添加到多个pod上。</p>
<p>可以在资源创建前定义标签，也可以在创建后修改标签。</p>
<ul>
<li>对比</li>
</ul>
<p>label和namespace相比较，不同namespace内的容器不能互相通信，label可以互相通信</p>
<ul>
<li>常见标签</li>
</ul>
<p>版本标签：version ：release、stable</p>
<p>环境标签：environment：dev、test、pro</p>
<p>架构标签：tier：frontend、backend</p>
<ul>
<li>标签选择器</li>
</ul>
<p>基于等式的 name = slave ， key为name的标签，值为slave的标签</p>
<p>基于集合的 name in （master，slave），key为name，值为master或slave的标签</p>
<p>标签选择器可以混合使用。</p>
<ul>
<li>接口文档</li>
</ul>
<p>kubectl get pod --show-labels  # 展示标签</p>
<p>kubectl label pod name  version=1.0 # 打标签</p>
<p>kubectl label pod name  version=2.0 --overwrite # 修改标签</p>
<p>kubectl label pod -l version=2.0 --show-labels  # 筛选标签</p>
<p>kubectl label pod name version- # 删除标签</p>
<h3 id="_2-4-controller-控制器" tabindex="-1"><a class="header-anchor" href="#_2-4-controller-控制器" aria-hidden="true">#</a> 2.4 controller 控制器</h3>
<ul>
<li>控制器种类</li>
</ul>
<p>Deployment 通过控制ReplicaSet来控制pod,并支持滚动升级、版本回退</p>
<p>Horizental Pod Autoscaler:可以根据集群负载自动调整Pod的数量</p>
<p>DaemonSet 在集群中的指定Node上都运行一个副本,用于守护进程</p>
<p>job 它创建出来的p0d只要完成任务就立即退出,用于执行一次性任务</p>
<p>Cronjob 它创建的pod会周期性的执行,用于执行周期性任务</p>
<p>StatefulSet 管理有状态应用</p>
<ul>
<li>作用</li>
</ul>
<p>用于管理pod，k8s中通常不直接管理pod，而是用控制器来管理pod。</p>
<ul>
<li>主要功能</li>
</ul>
<p>管理pod，上线部署，副本设定，滚动升级，回滚等</p>
<h4 id="_2-4-1-deployment-控制器" tabindex="-1"><a class="header-anchor" href="#_2-4-1-deployment-控制器" aria-hidden="true">#</a> 2.4.1 deployment 控制器</h4>
<ul>
<li>yaml部署</li>
</ul>
<p>kubectl apply -f web.yaml</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># web.yaml</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1 <span class="token comment"># 项目名名和版本号</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment <span class="token comment"># 控制器类型</span>
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> <span class="token comment"># 元数据</span>
	<span class="token key atrule">name</span><span class="token punctuation">:</span> web <span class="token comment">#应用名</span>
	<span class="token key atrule">namespace</span><span class="token punctuation">:</span> default <span class="token comment"># 命名空间</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
	<span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span> <span class="token comment"># 副本数量</span>
	<span class="token key atrule">selector</span><span class="token punctuation">:</span>
		<span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
			<span class="token key atrule">app</span><span class="token punctuation">:</span> web <span class="token comment"># 匹配标签</span>
	<span class="token key atrule">template</span><span class="token punctuation">:</span>
		<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
			<span class="token key atrule">labels</span><span class="token punctuation">:</span>
				<span class="token key atrule">app</span><span class="token punctuation">:</span> web <span class="token comment"># 副本标签</span>
		<span class="token key atrule">spec</span><span class="token punctuation">:</span>
			<span class="token key atrule">containers</span><span class="token punctuation">:</span>
			<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> web
				<span class="token key atrule">image</span><span class="token punctuation">:</span> nginx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>命令行部署</li>
</ul>
<p>kubectl create deployment web --image=nginx --replicas=3</p>
<ul>
<li>镜像更新策略</li>
</ul>
<p>重建更新和滚动更新</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>strategy:
  type: Recreate/RollingUpdate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>版本回退</li>
</ul>
<p><img src="@source/document/linux运维/asset/image-20220702112847034.png" alt="image-20220702112847034" loading="lazy"></p>
<ul>
<li>删除</li>
</ul>
<p>kubectl delete deploy nginx</p>
<ul>
<li>deployment与pod关系图</li>
</ul>
<p><img src="@source/document/linux运维/asset/image-20220626104520307.png" alt="image-20220626104520307" loading="lazy"></p>
<h4 id="_2-4-2-hpa-控制器" tabindex="-1"><a class="header-anchor" href="#_2-4-2-hpa-控制器" aria-hidden="true">#</a> 2.4.2 HPA 控制器</h4>
<h4 id="_2-4-3-daemonset-控制器" tabindex="-1"><a class="header-anchor" href="#_2-4-3-daemonset-控制器" aria-hidden="true">#</a> 2.4.3 DaemonSet 控制器</h4>
<p>每个节点运行时 都添加一个pod副本，适合日志监控类</p>
<h4 id="_2-4-4-job-控制器" tabindex="-1"><a class="header-anchor" href="#_2-4-4-job-控制器" aria-hidden="true">#</a> 2.4.4 job 控制器</h4>
<p>执行一次任务后就退出</p>
<h4 id="_2-4-5-cronjob-控制器" tabindex="-1"><a class="header-anchor" href="#_2-4-5-cronjob-控制器" aria-hidden="true">#</a> 2.4.5 Cronjob 控制器</h4>
<p>循环执行任务</p>
<h3 id="_2-5-service-服务" tabindex="-1"><a class="header-anchor" href="#_2-5-service-服务" aria-hidden="true">#</a> 2.5 service 服务</h3>
<ul>
<li>解决的问题</li>
</ul>
<p>pod 重建后ip不固定</p>
<p>集群内部可访问，外部不能访问</p>
<ul>
<li>简介</li>
</ul>
<p>service 实现了服务发现和负载均衡。</p>
<ul>
<li>接口</li>
</ul>
<p>kubectl get svc  # 查看服务</p>
<p>kubectl delete svc [name] # 删除服务</p>
<p>kubectl expose deploy nginx --name=svc-nginx1 --type=NodePort --port=80 --target-port=80  # 暴露访问地址</p>
<p>kubectl create -f svc-nginx.yaml</p>
<ul>
<li>资源清单文件</li>
</ul>
<p><img src="@source/document/linux运维/asset/image-20220702115449364.png" alt="image-20220702115449364" loading="lazy"></p>
<ul>
<li>Ingress</li>
</ul>
<h2 id="第3章-资源管理" tabindex="-1"><a class="header-anchor" href="#第3章-资源管理" aria-hidden="true">#</a> 第3章 资源管理</h2>
<h3 id="_3-1-资源管理方式" tabindex="-1"><a class="header-anchor" href="#_3-1-资源管理方式" aria-hidden="true">#</a> 3.1 资源管理方式</h3>
<p>直接命令</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kubectl run nginx-pod --image=nginx --port=80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令式</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kubectl create -f nginx-pod.yaml
kubectl patch -f nginx-pod.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>声明式 (推荐方式)</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kubectl apply -f nginx-pod.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2-创建资源实例" tabindex="-1"><a class="header-anchor" href="#_3-2-创建资源实例" aria-hidden="true">#</a> 3.2 创建资源实例</h3>
<p>启动minikube</p>
<p>minikube start</p>
<p>创建文件 nginx-dep.yml</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>deployment
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>alpine
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建deployments</p>
<p>kubectl apply -f nginx-dep.yml</p>
<p>创建文件</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>service
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">30080</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建 service</p>
<p>kubectl apply -f nginx-svc.yml</p>
<p>查看pods</p>
<p>kubectl get pods</p>
<p>转发url minikube</p>
<p>kubectl port-forward nginx-deployment-7d9d7464fb-mrc4h 30001:80</p>
<p>浏览器访问</p>
<p><a href="http://127.0.0.1:30001" target="_blank" rel="noopener noreferrer">http://127.0.0.1:30001<ExternalLinkIcon/></a></p>
<h2 id="第4章-数据存储" tabindex="-1"><a class="header-anchor" href="#第4章-数据存储" aria-hidden="true">#</a> 第4章 数据存储</h2>
<h3 id="_4-1-基本存储" tabindex="-1"><a class="header-anchor" href="#_4-1-基本存储" aria-hidden="true">#</a> 4.1 基本存储</h3>
<ul>
<li>emptydir</li>
</ul>
<p>临时空间，共享数据 pod销毁则销毁</p>
<ul>
<li>hostpath</li>
</ul>
<p>node目录挂载到pod中</p>
<ul>
<li>nfs</li>
</ul>
<p>网络文件存储系统</p>
<h3 id="_4-2-高级存储" tabindex="-1"><a class="header-anchor" href="#_4-2-高级存储" aria-hidden="true">#</a> 4.2 高级存储</h3>
<p>pv</p>
<p>pvc</p>
<p>生命周期</p>
<h3 id="_4-3-配置存储" tabindex="-1"><a class="header-anchor" href="#_4-3-配置存储" aria-hidden="true">#</a> 4.3 配置存储</h3>
<h2 id="第5章-安全认证" tabindex="-1"><a class="header-anchor" href="#第5章-安全认证" aria-hidden="true">#</a> 第5章 安全认证</h2>
<h3 id="_5-1-概念" tabindex="-1"><a class="header-anchor" href="#_5-1-概念" aria-hidden="true">#</a> 5.1 概念</h3>
<p>Kubernetes作为一个分布式集群的管理工具,保证集群的安全性是其一个重要的任务。所谓的安全性其实就是保证对Kubernetes的各种客户端进行认证和鉴权操作。</p>
<h3 id="_5-2-认证" tabindex="-1"><a class="header-anchor" href="#_5-2-认证" aria-hidden="true">#</a> 5.2 认证</h3>
<p>用户名密码</p>
<p>token</p>
<p>ca证书</p>
<h3 id="_5-3-授权" tabindex="-1"><a class="header-anchor" href="#_5-3-授权" aria-hidden="true">#</a> 5.3 授权</h3>
<p>rbac</p>
<h3 id="_5-4-准入" tabindex="-1"><a class="header-anchor" href="#_5-4-准入" aria-hidden="true">#</a> 5.4 准入</h3>
<h2 id="第6章-kubusphere" tabindex="-1"><a class="header-anchor" href="#第6章-kubusphere" aria-hidden="true">#</a> 第6章 kubusphere</h2>
<h2 id="第7章-rancher" tabindex="-1"><a class="header-anchor" href="#第7章-rancher" aria-hidden="true">#</a> 第7章 rancher</h2>
<h2 id="第8章-微服务集成" tabindex="-1"><a class="header-anchor" href="#第8章-微服务集成" aria-hidden="true">#</a> 第8章 微服务集成</h2>
<h2 id="第9章-边缘化" tabindex="-1"><a class="header-anchor" href="#第9章-边缘化" aria-hidden="true">#</a> 第9章 边缘化</h2>
</div></template>
