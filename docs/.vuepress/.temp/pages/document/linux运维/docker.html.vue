<template><div><h2 id="第1章-docker-简介" tabindex="-1"><a class="header-anchor" href="#第1章-docker-简介" aria-hidden="true">#</a> 第1章 docker 简介</h2>
<h3 id="_1-1-docker的出现" tabindex="-1"><a class="header-anchor" href="#_1-1-docker的出现" aria-hidden="true">#</a> 1.1 docker的出现</h3>
<p>运维工程师需要大量的配置环境，每有一台新的服务器，就需要重装所有的软件，一个一个下载，一个一个配置，而且开发者需要写非常详细的部署说明，即便这样，依然会出现在开发者的电脑上可以运行，而到运维者的电脑上无法运行，于是dock镜像出现了。</p>
<p>开发者将自己电脑上的配置环境，运行环境，依赖包，操作系统，内核，数据，代码等等，全部打包封装成一个镜像，而运维只需要安装这一个镜像，大大减少了配置的成本。</p>
<p>docker是基于go语言实现得到云开源项目。docker的理念就是一次封装，到处运行。解决了运行环境和配置问题软件容器，方便做持续集成并有助于整体发布的容器虚拟化技术。</p>
<p>虚拟机的缺点，资源占用多，冗余步骤多，启动慢。docker不是模拟出一个完整的操作系统，而是一个linux容器，依赖于宿主的内核，没有自己的内核。</p>
<h3 id="_1-2-docker安装" tabindex="-1"><a class="header-anchor" href="#_1-2-docker安装" aria-hidden="true">#</a> 1.2 docker安装</h3>
<p><strong>centos版docker</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 卸载旧版本</span>
<span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\</span>
              docker-client <span class="token punctuation">\</span>
              docker-client-latest <span class="token punctuation">\</span>
              docker-common <span class="token punctuation">\</span>
              docker-latest <span class="token punctuation">\</span>
              docker-latest-logrotate <span class="token punctuation">\</span>
              docker-logrotate <span class="token punctuation">\</span>
              docker-engine
              
<span class="token comment"># 更新工具</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils <span class="token punctuation">\</span>
  device-mapper-persistent-data <span class="token punctuation">\</span>
  lvm2
  
<span class="token comment"># 配置加速源</span>
<span class="token function">sudo</span> yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

<span class="token comment"># 安装最新版本的Docker</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ubuntu版docker</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 卸载旧版本</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> remove <span class="token function">docker</span> docker-engine docker.io containerd runc

<span class="token comment"># 更新软件源</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update

<span class="token comment"># 安装工具</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> apt-transport-https ca-certificates <span class="token function">curl</span> gnupg-agent software-properties-common python-software-properties
    
<span class="token comment"># 添加Docker官方GPG key</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg <span class="token operator">|</span> apt-key <span class="token function">add</span> -

<span class="token comment"># 验证指纹</span>
<span class="token function">sudo</span> apt-key fingerprint 0EBFCD88

<span class="token comment"># 添加仓库</span>
<span class="token function">sudo</span> add-apt-repository <span class="token string">"deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> stable"</span>

<span class="token comment"># 更新软件源</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update

<span class="token comment"># 安装docker</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io

<span class="token comment"># 配置国内镜像 输入以下内容</span>
<span class="token function">vim</span> /etc/docker/daemon.json
 
<span class="token punctuation">{</span>
    <span class="token string">"registry-mirrors"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">"https://cq20bk8v.mirror.aliyuncs.com"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>windows版docker</strong></p>
<p>运行环境需要开启功能 hyper-v 或 wsl2</p>
<p>推荐 wls2 因为 性能更好 ,  而且开启 hyper-V 会与 vm虚拟机冲突</p>
<p>下载windows安装包</p>
<p><a href="https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe" target="_blank" rel="noopener noreferrer">https://desktop.docker.com/win/main/amd64/Docker Desktop Installer.exe<ExternalLinkIcon/></a></p>
<p>开启功能 适用于linux的windows子系统</p>
<p><img src="@source/document/linux运维/asset/image-20220522115051752.png" alt="image-20220522115051752" loading="lazy"></p>
<p>如果出现报错 , 更新 wsl2 版本</p>
<p><a href="https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi" target="_blank" rel="noopener noreferrer">https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi<ExternalLinkIcon/></a></p>
<p><img src="https://img-blog.csdnimg.cn/20200916165811639.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5NjExMjMw,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述" loading="lazy"></p>
<h3 id="_1-3-基本应用安装" tabindex="-1"><a class="header-anchor" href="#_1-3-基本应用安装" aria-hidden="true">#</a> 1.3 基本应用安装</h3>
<p>docker getting started</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull docker/getting-started
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">--name</span> demo docker/getting-started 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>nginx</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull nginx

<span class="token function">docker</span> run  <span class="token parameter variable">--name</span> myNginx <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8089</span>:80 <span class="token punctuation">\</span>
<span class="token parameter variable">-v</span> /root/nginx/html:/usr/share/nginx/html <span class="token punctuation">\</span>
<span class="token parameter variable">-v</span> /root/nginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\</span> 
<span class="token parameter variable">-v</span> /root/nginx/conf.d:/etc/nginx/conf.d  <span class="token punctuation">\</span>
<span class="token parameter variable">-v</span> /root/nginx/logs:/var/log/nginx nginx

//注意
虚拟化的nginx没有默认页面,保证速度快就删除了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tomcat8  docker-compose.yml</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull tomcat
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">3355</span>:3355 <span class="token parameter variable">--name</span> tomcat01 tomcat


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>redis6  docker-compose.yml</p>
<p>mysql8.0.21  docker-compose.yml</p>
<p>jkd1.8  docker-compose.yml</p>
<h3 id="_1-4-可视化portainer" tabindex="-1"><a class="header-anchor" href="#_1-4-可视化portainer" aria-hidden="true">#</a> 1.4 可视化portainer</h3>
<p>创建数据卷</p>
<p>docker volume create portainer_data</p>
<p>拉取镜像</p>
<p>docker pull portainer/portainer-ce:2.11.1</p>
<p>创建容器</p>
<p>docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest</p>
<p>登录</p>
<p><code v-pre>https://localhost:9443</code></p>
<p>账号密码</p>
<h3 id="_1-5-基本指令" tabindex="-1"><a class="header-anchor" href="#_1-5-基本指令" aria-hidden="true">#</a> 1.5 基本指令</h3>
<p>启动docker：systemctl start docker</p>
<p>停止docker：systemctl stop docker</p>
<p>重启docker：systemctl restart docker</p>
<p>查看docker状态：systemctl status docker</p>
<p>开机启动：systemctl enable docker</p>
<p><code v-pre>service docker start </code> 启动</p>
<p><code v-pre>docker version</code>   查看版本</p>
<p><code v-pre>docker info</code>    查看详细信息</p>
<p><code v-pre>docker xx -helo</code>   查看指令帮助</p>
<p><code v-pre>docker run hello-world</code>   测试官方demo</p>
<h2 id="第2章-镜像" tabindex="-1"><a class="header-anchor" href="#第2章-镜像" aria-hidden="true">#</a> 第2章 镜像</h2>
<h3 id="_2-1-镜像简介" tabindex="-1"><a class="header-anchor" href="#_2-1-镜像简介" aria-hidden="true">#</a> 2.1 镜像简介</h3>
<h3 id="_2-2-指令" tabindex="-1"><a class="header-anchor" href="#_2-2-指令" aria-hidden="true">#</a> 2.2 指令</h3>
<p><code v-pre>docker images -a</code>        # 查看本地主机上的所有镜像</p>
<p><code v-pre>docker pull mysql</code>       # 拉取镜像</p>
<p><code v-pre>docker pull nginx:5.7</code>   # 指定版本拉取</p>
<p><code v-pre>docker rmi -f mysql</code>     # 删除指定镜像</p>
<p><code v-pre>docker rmi -f $(docker images -aq)</code>  # 删除全部镜像</p>
<h2 id="第3章-容器" tabindex="-1"><a class="header-anchor" href="#第3章-容器" aria-hidden="true">#</a> 第3章 容器</h2>
<h3 id="_3-1-容器简介" tabindex="-1"><a class="header-anchor" href="#_3-1-容器简介" aria-hidden="true">#</a> 3.1 容器简介</h3>
<p>创建多个容器只改外部端口 不改内部端口</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">3355</span>:3355 <span class="token parameter variable">--name</span> tomcat01 tomcat

<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">3356</span>:3355 <span class="token parameter variable">--name</span> tomcat01 tomcat

<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">3357</span>:3355 <span class="token parameter variable">--name</span> tomcat01 tomcat


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-指令" tabindex="-1"><a class="header-anchor" href="#_3-2-指令" aria-hidden="true">#</a> 3.2 指令</h3>
<h4 id="_3-2-1-指令选项" tabindex="-1"><a class="header-anchor" href="#_3-2-1-指令选项" aria-hidden="true">#</a> 3.2.1 指令选项</h4>
<p>docker run --name=mynginx -d --restart=always -p 8080:80 nginx</p>
<p>--name=&quot;name&quot;   命名</p>
<p>-d   后台方式</p>
<p>-it   交互方式</p>
<p>-p 80:80 指定端口</p>
<p>-- restart=always  开机时自动启动</p>
<p>-v 主机地址 : 容器内地址 -v .....    # 数据挂载</p>
<h4 id="_3-2-2-所有指令" tabindex="-1"><a class="header-anchor" href="#_3-2-2-所有指令" aria-hidden="true">#</a> 3.2.2 所有指令</h4>
<p>docker update name --restart=always  # 更新容器的设置项</p>
<p>docker run -it centos /bin/bash   # 运行并进入容器</p>
<p>exit     #停止并退出容器</p>
<p>docker ps       # 查看正在运行的容器</p>
<p>docker ps -a    # 查看历史所有运行过的容器</p>
<p>docker rm 容器id</p>
<p>docker rm -f $(docker ps -aq)   # 删除所有容器</p>
<p>docker start 容器id   # 启动容器</p>
<p>docker restart 容器id  # 重启容器</p>
<p>docker stop 容器id  # 停止容器</p>
<p>docker kill 容器id  # 杀死容器</p>
<p>docker top 容器id   # 查看容器中的进程今</p>
<p>docker logs -tf 容器id   # 查看日志</p>
<p>docker inspect 容器id  # 查看镜像的元数据</p>
<p>docker logs 容器id [-f ] # 查看容器的日志 [-f 实时模式]</p>
<h4 id="_3-2-3-进入容器内部" tabindex="-1"><a class="header-anchor" href="#_3-2-3-进入容器内部" aria-hidden="true">#</a> 3.2.3 进入容器内部</h4>
<p>docker exec -it centos  /bin/bash  # 进入当前正在运行的容器，使用容器内的终端</p>
<p>exit  # 退出容器内的终端</p>
<p>docker attach 容器id     # 不开启新的终端</p>
<p>docker cp 容器id:容器内路径 主机目录  # 把容器内文件复制到主机 ,也可以反向复制</p>
<h4 id="_3-2-4-注意" tabindex="-1"><a class="header-anchor" href="#_3-2-4-注意" aria-hidden="true">#</a> 3.2.4 注意</h4>
<p>docker run -d centos</p>
<p>docker ps</p>
<p>后台运行容器，需要前台进程，不然会自杀</p>
<h3 id="_2-3-容器分享" tabindex="-1"><a class="header-anchor" href="#_2-3-容器分享" aria-hidden="true">#</a> 2.3 容器分享</h3>
<h4 id="_2-3-1-本地分享" tabindex="-1"><a class="header-anchor" href="#_2-3-1-本地分享" aria-hidden="true">#</a> 2.3.1 本地分享</h4>
<p>把已经配置好的容器 提交为镜像</p>
<p>docker commit -a &quot;auther&quot; -m &quot;提交信息&quot; 当前容器id myname:v0</p>
<p>把镜像保存为一个物理文件, 上传到云服务器</p>
<p>docker save -o xxx.tar myname</p>
<p>其他主机装载该容器</p>
<p>docker load -i xxx.tar</p>
<h4 id="_2-3-2-远程仓库" tabindex="-1"><a class="header-anchor" href="#_2-3-2-远程仓库" aria-hidden="true">#</a> 2.3.2 远程仓库</h4>
<p>更改名字 前面要有自己的docker账号名</p>
<p>docker tag myname:1.0  leifengyang/myname:1.0</p>
<p>命令行登录docker账号</p>
<p>docker login</p>
<p>推送到docker仓库</p>
<p>docker push leifengyang/myname:1.0</p>
<p>查看镜像页面有下载命令</p>
<p>docker pull ....</p>
<h2 id="第4章-卷" tabindex="-1"><a class="header-anchor" href="#第4章-卷" aria-hidden="true">#</a> 第4章 卷</h2>
<h3 id="_4-1-简介" tabindex="-1"><a class="header-anchor" href="#_4-1-简介" aria-hidden="true">#</a> 4.1 简介</h3>
<p>Docker镜像被存储在一系列的只读层中。当我们创建一个容器时，Docker会读取镜像（只读），并在其顶部添加一层读写层。如果正在运行中的容器修改了现有文件，该文件将会被拷贝出底层的只读层，放到最顶层的读写层中。读写层中原来的旧版本文件（未被更改过的文件）仍然存在于镜像中。</p>
<p>所以当Docker容器被删除后，再基于原来的镜像创建容器时，将创建一个没有任何数据更改的容器，在之前那个容器中的数据更改会丢失掉。只读层和读写层的组合被Docker称为联合文件系统（Union File System）。</p>
<p>为了能够持久化这些更改过的数据，并且能够很容易实现容器间共享数据，Docker提出了Volume的概念。Volume是外部默认的联合文件系统或者是存在于宿主文件系统中正常的文件或文件夹。</p>
<p>数据卷的最大特点是：其生存周期独立于容器的生存周期。</p>
<p><strong>问题：</strong></p>
<p>不能在宿主机上很方便地访问容器中的文件。</p>
<p>无法在多个容器之间共享数据。</p>
<p>当容器删除时，容器中产生的数据将会丢失。</p>
<p>为了解决这些问题，Docker引入了数据卷(Volume) 机制。数据卷以独立于Docker文件系统的形式存在于宿主机中。</p>
<p><strong>好处：</strong></p>
<p>数据卷可在容器之间共享或重用数据。</p>
<p>数据卷的更改可以直接生效。</p>
<p>数据卷的生命周期一直持续到没有容器使用它为止。</p>
<p>对数据卷操作不会影响到镜像本身。</p>
<p>数据卷可以完成容器到宿主机、宿主机到容器以及容器到容器之间的数据共享。</p>
<h3 id="_4-2-指令" tabindex="-1"><a class="header-anchor" href="#_4-2-指令" aria-hidden="true">#</a> 4.2 指令</h3>
<p><code v-pre>docker volume help</code>   查看Volume有哪些命令</p>
<p><code v-pre>docker volume ls</code>   列出所有的数据卷</p>
<p><code v-pre>docker volume create centos-volume</code>   创建一个数据卷。默认放到 /var/lib/docker/volume</p>
<p><code v-pre>docker volume inspect centos-volume</code>  展示一个或多个数据卷的详细信息</p>
<p><code v-pre>docker volume prune</code>  移除未使用的数据卷。</p>
<p><code v-pre>docker volume rm xxx</code>  移除一个或多个数据卷。</p>
<p><code v-pre>docker stop centos.9</code></p>
<p><code v-pre>docker rm centos.9</code><br>
如果不能移除该数据卷， 需要先移除该容器（只停止是不行的）。</p>
<p><code v-pre>docker volume rm xxx</code>   再移除该数据卷。</p>
<p>运行容器时就使用数据卷</p>
<p>docker run -v 数据卷名称 :  容器内部路径 ....  # 数据卷不存在就自动创建</p>
<p>docker run -v 本机路径 : 容器内部路径...</p>
<h2 id="第5章-dockerfile" tabindex="-1"><a class="header-anchor" href="#第5章-dockerfile" aria-hidden="true">#</a> 第5章 Dockerfile</h2>
<h3 id="_5-1-dockerfile-简介" tabindex="-1"><a class="header-anchor" href="#_5-1-dockerfile-简介" aria-hidden="true">#</a> 5.1 Dockerfile 简介</h3>
<p>Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。</p>
<h3 id="_5-2-指令详解" tabindex="-1"><a class="header-anchor" href="#_5-2-指令详解" aria-hidden="true">#</a> 5.2 指令详解</h3>
<p>COPY</p>
<p>复制指令，从上下文目录中复制文件或者目录到容器里指定路径。</p>
<p>ADD</p>
<p>ADD 指令和 COPY 的使用格类似（同样需求下，官方推荐使用 COPY）。</p>
<p>CMD
类似于 RUN 指令，用于运行程序，但二者运行的时间点不同</p>
<p>VOLUME
定义匿名数据卷。在启动容器时忘记挂载数据卷，会自动挂载到匿名卷。</p>
<h3 id="_5-2-dockerfile部署无后台的前端项目" tabindex="-1"><a class="header-anchor" href="#_5-2-dockerfile部署无后台的前端项目" aria-hidden="true">#</a> 5.2 Dockerfile部署无后台的前端项目</h3>
<ol>
<li>配置vue.config.js</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">publicPath</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> 
      <span class="token string">'production'</span> <span class="token operator">?</span> <span class="token string">'./'</span> <span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>构建项目</li>
</ol>
<p>npm run build</p>
<ol start="3">
<li>nginx配置</li>
</ol>
<p>项目根目录 下新增 nginx / default.conf 文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server {
    listen       80;
    server_name  localhost;
    access_log  /var/log/nginx/host.access.log  main;
    error_log  /var/log/nginx/error.log  error;
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>Dockerfile配置</li>
</ol>
<p>根目录下新增 Dockerfile 文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 设置基础镜像
FROM nginx
# 定义作者
MAINTAINER cuianbing &lt;cuianbing@outlook.com>
# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
COPY dist/  /usr/share/nginx/html/
# 用本地的 default.conf 配置来替换nginx镜像里的默认配置
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>构建镜像</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker build -t xinyi .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6">
<li>打包镜像</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker save -o xinyi.tar xinyi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="7">
<li>上传到服务器</li>
</ol>
<p>使用 finallshell 或者 xftp 将文件上传到服务器</p>
<ol start="8">
<li>读取镜像</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker load -i xinyi.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="9">
<li>运行项目</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -d -p 80:80 --name xinyicon xinyi

注意 每个服务器只有80端口能配置前端项目
可以通过nginx转发不能后缀实现多个项目
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>申请ssl证书</p>
<p>阿里云 ssl工作台 领取免费证书</p>
<p>项目升级为https</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>// public index.html

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Content-Security-Policy<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>upgrade-insecure-requests<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nginx配置https</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><h3 id="_5-3-dockerfile部署有后台的前端项目" tabindex="-1"><a class="header-anchor" href="#_5-3-dockerfile部署有后台的前端项目" aria-hidden="true">#</a> 5.3 Dockerfile部署有后台的前端项目</h3>
<h3 id="_5-4-dockerfile部署redis" tabindex="-1"><a class="header-anchor" href="#_5-4-dockerfile部署redis" aria-hidden="true">#</a> 5.4 Dockerfile部署redis</h3>
<div class="language-docker ext-docker line-numbers-mode"><pre v-pre class="language-docker"><code><span class="token comment"># 拉取redis镜像</span>
<span class="token instruction"><span class="token keyword">FROM</span> redis</span>

<span class="token comment"># 复制配置文件到容器内</span>
<span class="token instruction"><span class="token keyword">COPY</span> redis.conf /usr/local/etc/redis/redis.conf</span>

<span class="token comment"># 以配置文件形式启动redis</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">"redis-server"</span>,<span class="token string">"/usr/local/etc/redis/redis.conf"</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-dockerfile部署mysql" tabindex="-1"><a class="header-anchor" href="#_5-5-dockerfile部署mysql" aria-hidden="true">#</a> 5.5 Dockerfile部署mysql</h3>
<h3 id="_5-6-dockerfile部署springboot项目" tabindex="-1"><a class="header-anchor" href="#_5-6-dockerfile部署springboot项目" aria-hidden="true">#</a> 5.6 Dockerfile部署springboot项目</h3>
<div class="language-docker ext-docker line-numbers-mode"><pre v-pre class="language-docker"><code><span class="token comment"># 设置基础镜像</span>
<span class="token instruction"><span class="token keyword">FROM</span> openjdk:8-jdk-slim</span>

<span class="token comment"># 复制jar包到 /app.jar </span>
<span class="token instruction"><span class="token keyword">COPY</span> target/*.jar /app.jar</span>
<span class="token comment"># cmd覆盖 ENTRYPOINT追加</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">"java"</span>,<span class="token string">"-jar"</span>,<span class="token string">"/app.jar"</span>]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-6-dockerfile部署nginx" tabindex="-1"><a class="header-anchor" href="#_5-6-dockerfile部署nginx" aria-hidden="true">#</a> 5.6 Dockerfile部署nginx</h3>
<div class="language-docker ext-docker line-numbers-mode"><pre v-pre class="language-docker"><code><span class="token comment"># 设置基础镜像</span>
<span class="token instruction"><span class="token keyword">FROM</span> nginx</span>
<span class="token comment"># 定义作者</span>
<span class="token instruction"><span class="token keyword">MAINTAINER</span> cuianbing &lt;cuianbing@outlook.com></span>
<span class="token comment"># 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面</span>
<span class="token instruction"><span class="token keyword">COPY</span> dist/  /usr/share/nginx/html/</span>
<span class="token comment"># 用本地的 default.conf 配置来替换nginx镜像里的默认配置</span>
<span class="token instruction"><span class="token keyword">COPY</span> nginx/default.conf /etc/nginx/conf.d/default.conf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第6章-docker-compose" tabindex="-1"><a class="header-anchor" href="#第6章-docker-compose" aria-hidden="true">#</a> 第6章 Docker Compose</h2>
<h3 id="_6-1-docker-compose介绍" tabindex="-1"><a class="header-anchor" href="#_6-1-docker-compose介绍" aria-hidden="true">#</a> 6.1 Docker Compose介绍</h3>
<p>介绍</p>
<p>Compose 是用于定义和运行多容器 Docker 应用程序的工具。</p>
<p>通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。</p>
<p>然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务。</p>
<p>安装</p>
<p>apt install docker-compose</p>
<h3 id="_6-2-常用指令" tabindex="-1"><a class="header-anchor" href="#_6-2-常用指令" aria-hidden="true">#</a> 6.2 常用指令</h3>
<p>docker-compose up  # 默认运行当前目录下docker-compose.yml的文件</p>
<p>docker-compose up -d # 开启后台守护进程</p>
<p>docker-compose -f server.yml up -d # 指定运行某个compose的yml文件</p>
<p>alise dockerc = docker-compose # 配置一下别名</p>
<p>docker-compose up -d  nginx # 后台上线yml配置的所有容器</p>
<p>docker-compose ps  # 查看所有容器</p>
<p>docker-compose down # 下线yml配置内的所有容器</p>
<p>docker-compose logs nginx # 查看日志</p>
<p>docker-compose rm nginx  # 删除容器</p>
<p>docker-compose stop nginx # 停止所有容器</p>
<p>docker-compose start nginx  # 启动容器</p>
<p>docker-compose restart nginx # 重启容器</p>
<h3 id="_6-3-实例-部署springboot后端项目" tabindex="-1"><a class="header-anchor" href="#_6-3-实例-部署springboot后端项目" aria-hidden="true">#</a> 6.3 实例 部署springboot后端项目</h3>
<p>打包 maven clean package</p>
<p>/project/target/docker-study-0.0.1-SNAPSHOT.jar</p>
<p>/project/docker-compose.yml</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">"3.1"</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">dockerstudy</span><span class="token punctuation">:</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">image</span><span class="token punctuation">:</span> dockerstudy<span class="token punctuation">:</span>latest
    <span class="token key atrule">build</span><span class="token punctuation">:</span> .
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> dockerstudy<span class="token punctuation">-</span>container
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8080<span class="token punctuation">:</span><span class="token number">8080</span>
      
  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
  
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/project/Dockerfile</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>FROM java:8
EXPOSE 8090
ADD docker-study-0.0.1-SNAPSHOT.jar app.jar
RUN bash -c "touch /app.jar"

ENTRYPOINT ["java","-jar","/app.jar"]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将三个文件放到服务器内的一个文件夹里</p>
<p>运行指令 docker-compuse up -d</p>
<p>访问 服务器ip:端口号/业务</p>
<h3 id="_6-4-实例-部署vue前端项目" tabindex="-1"><a class="header-anchor" href="#_6-4-实例-部署vue前端项目" aria-hidden="true">#</a> 6.4 实例 部署vue前端项目</h3>
<p>项目打包 npm run build</p>
<p>更改dist文件夹名为 myproject</p>
<p>上传服务器 /root/html/myproject</p>
<p>/root/docker-compose.yml</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>version: "3"

services:
  nginx:
    image: nginx
    container_name: mynginx
    restart: always
    ports:
      - "80:80"
    volumes:
      - /root/html/:/usr/share/nginx/html/
      - /root/nginx/default.conf:/etc/nginx/conf.d/default.conf
    privileged: true
    environment:
      - TZ=Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/root/nginx/default.conf</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;
    access_log  /var/log/nginx/host.access.log  main;
    error_log  /var/log/nginx/error.log  error;


    # 我的博客
    location / {
        root   /usr/share/nginx/html/mysite/dist/;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    # 项目1 心医官网 8081
    location /xinyi/ {
            alias   /usr/share/nginx/html/xinyi/dist/;
            index  index.html index.htm;
            try_files $uri $uri/ /index.html;
    }

    # 项目2 unishop 8082
    location /unishop/ {
            alias   /usr/share/nginx/html/unishop/dist/;
            index  index.html index.htm;
            try_files $uri $uri/ /index.html;
    }
    # 项目3 ui可视化 8083
    location /tuozhuai/ {
            alias   /usr/share/nginx/html/tuozhuai/dist/;
            index  index.html index.htm;
            try_files $uri $uri/ /index.html;
    }
    # 项目4 后台管理系统 8084
    location /houtai/ {
            alias   /usr/share/nginx/html/houtai/dist/;
            index  index.html index.htm;
            try_files $uri $uri/ /index.html;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行</p>
<p>docker-compose up -d</p>
<h2 id="第7章-docker-swarm" tabindex="-1"><a class="header-anchor" href="#第7章-docker-swarm" aria-hidden="true">#</a> 第7章 Docker Swarm</h2>
<h3 id="_7-1-docker-swarm-简介" tabindex="-1"><a class="header-anchor" href="#_7-1-docker-swarm-简介" aria-hidden="true">#</a> 7.1 Docker Swarm 简介</h3>
<p>docker的集群工具</p>
<p>小程序博客类 不需要</p>
<p>大程序大公司 使用k8s更好</p>
<h2 id="第8章-高级应用" tabindex="-1"><a class="header-anchor" href="#第8章-高级应用" aria-hidden="true">#</a> 第8章 高级应用</h2>
<h3 id="_6-1-idea配置远程开发docker" tabindex="-1"><a class="header-anchor" href="#_6-1-idea配置远程开发docker" aria-hidden="true">#</a> 6.1 idea配置远程开发docker</h3>
<ol>
<li>进入到/lib/systemd/system路径下，然后编辑docker.service配置文件：</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vim /lib/systemd/system/docker.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>找到ExecStart所对应的行，修改为（Docker的远程访问接口为2375）：</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>保存并退出编辑后，重载守护进程以及重启Docker：</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>service docker restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4">
<li>可通过执行命令查看是否开放了远程访问端口：</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl status docker.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5">
<li>开启阿里云防火墙</li>
</ol>
<p>开启防火墙 tcp 2375端口</p>
<ol start="6">
<li>idea下载docker插件</li>
</ol>
<p>下载docker 插件后, 找到 设置 构建 执行 部署 docker</p>
<p>新建一个docker 使用 tcp套接字连接 url为 tcp://39.107.251.205:2375</p>
<h2 id="第9章-解决方案" tabindex="-1"><a class="header-anchor" href="#第9章-解决方案" aria-hidden="true">#</a> 第9章 解决方案</h2>
<h3 id="_9-1-报错大全" tabindex="-1"><a class="header-anchor" href="#_9-1-报错大全" aria-hidden="true">#</a> 9.1 报错大全</h3>
<p>Error response from daemon: Get <a href="https://registry-1.docker.io/v2/" target="_blank" rel="noopener noreferrer">https://registry-1.docker.io/v2/<ExternalLinkIcon/></a>....</p>
<p>问题描述 : dns解析错误</p>
<p>解决办法 :</p>
<p>打开 vim /etc/resolv.conf</p>
<p>新增  nameserver 8.8.8.8</p>
</div></template>
