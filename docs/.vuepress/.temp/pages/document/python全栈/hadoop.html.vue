<template><div><h2 id="第1章-大数据简介" tabindex="-1"><a class="header-anchor" href="#第1章-大数据简介" aria-hidden="true">#</a> 第1章 大数据简介</h2>
<h3 id="_1-1-大数据概念" tabindex="-1"><a class="header-anchor" href="#_1-1-大数据概念" aria-hidden="true">#</a> 1.1 大数据概念</h3>
<h3 id="_1-2-hadoop概念" tabindex="-1"><a class="header-anchor" href="#_1-2-hadoop概念" aria-hidden="true">#</a> 1.2 hadoop概念</h3>
<h3 id="_1-3-hadoop对比spark" tabindex="-1"><a class="header-anchor" href="#_1-3-hadoop对比spark" aria-hidden="true">#</a> 1.3 hadoop对比spark</h3>
<p>Hadoop适合处理离线的静态的大数据；</p>
<p>Spark适合处理离线的流式的大数据；</p>
<h2 id="第2章-hadoop入门" tabindex="-1"><a class="header-anchor" href="#第2章-hadoop入门" aria-hidden="true">#</a> 第2章 Hadoop入门</h2>
<h3 id="_2-1-windows-单节点" tabindex="-1"><a class="header-anchor" href="#_2-1-windows-单节点" aria-hidden="true">#</a> 2.1 windows 单节点</h3>
<h3 id="_2-1-ubuntu-单节点" tabindex="-1"><a class="header-anchor" href="#_2-1-ubuntu-单节点" aria-hidden="true">#</a> 2.1 ubuntu 单节点</h3>
<h3 id="_2-1-ubuntu-完全分布式" tabindex="-1"><a class="header-anchor" href="#_2-1-ubuntu-完全分布式" aria-hidden="true">#</a> 2.1 ubuntu 完全分布式</h3>
<ol>
<li>硬件安装</li>
</ol>
<p>查看是否开启vt虚拟化</p>
<p>安装vmware ， 下载ubnutu</p>
<p>推荐虚拟机配置</p>
<p>最小内存2GB ，最小磁盘30GB ，CPU 2x2 ， 单文件形式安装，NAT网络模式</p>
<ol start="2">
<li>配置IP地址</li>
</ol>
<p>VM虚拟网卡IP配置</p>
<p>打开vmware 编辑 虚拟网络配置，找到vmnet8 点击更改配置</p>
<p>会重新载入，再进入vmnet8</p>
<p>更改子网ip 192.168.10.0， 更改NAT设置192.168.10.2，应用并确认</p>
<p>宿主机win10系统IP配置</p>
<p>打开网络连接设置，找到vmware8，右键属性，双击ipv4协议</p>
<p>更改默认网关192.168.10.2</p>
<p>更改DNS服务器地址192.168.10.2，备用8.8.8.8</p>
<p>虚拟机内部Linux系统IP配置</p>
<p>切换到root  <code v-pre>su root</code> ，打开网络配置文件</p>
<ul>
<li>ubnutu20 在 /etc/netplan/01-netork-manager-all.yaml</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># Let NetworkManager manage all devices on this system</span>
network:
  version: <span class="token number">2</span>
  renderer: NetworkManager
  ethernets:
    ens33:
      dhcp4: no      
      addresses: <span class="token punctuation">[</span><span class="token number">192.168</span>.10.100/24<span class="token punctuation">]</span> <span class="token comment"># ip</span>
      gateway4: <span class="token number">192.168</span>.10.2  
      nameservers:
        addresses: <span class="token punctuation">[</span><span class="token number">192.168</span>.10.2,8.8.8.8<span class="token punctuation">]</span> <span class="token comment">#dns</span>

<span class="token comment"># 保存退出</span>
:wq

<span class="token comment"># 重启网络服务</span>
netplan apply    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>ubnutu16 在 /etc/network/interfaces</p>
</li>
<li>
<p>centos 在 /etc/sysconfig/network-scripts/ifcfg-ens33</p>
</li>
</ul>
<ol start="3">
<li>配置主机名和host文件</li>
</ol>
<p>vim /etc/hostname</p>
<p>hadoop100</p>
<p>vim /etc/hosts</p>
<p>192.168.10.100 hadoop100</p>
<p>192.168.10.101 hadoop101</p>
<p>192.168.10.102 hadoop102</p>
<p>192.168.10.103 hadoop103</p>
<p>192.168.10.104 hadoop104</p>
<ol start="4">
<li>重启查看配置是否成功</li>
</ol>
<p>reboot  # 重启</p>
<p>ifconfig  # 查看配置是否成功</p>
<p>ping <a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">www.baidu.com<ExternalLinkIcon/></a> # 查看网络是否通常</p>
<p>hostname # 查看主机名是否成功</p>
<ol start="5">
<li>使用shell远程连接</li>
</ol>
<p>安装必需工具</p>
<p>apt-get install net-tools</p>
<p>apt-get install vim</p>
<p>安装ssh服务</p>
<p>apt-get install ssh</p>
<p>启动服务</p>
<p>/etc/init.d/ssh start</p>
<p>修改可用root登录</p>
<p>vim /etc/ssh/sshd_config</p>
<p>permitrootlogin yes</p>
<p>重启服务</p>
<p>service ssh restart</p>
<p>关闭防火墙</p>
<ol start="6">
<li>ssh无密登录</li>
</ol>
<p>先在一台虚拟机生成密钥对</p>
<p>ssh-keygen -t rsa</p>
<p>把公钥给到103服务器上，只能使用非root用户</p>
<p>ssh-copy-id hadoop103</p>
<p>连接103 ，只有第一次会输入密码，只能使用非root用户</p>
<p>ssh hadoop103</p>
<p>之后在每台服务器上都生成密钥对，并分发公钥给其他服务器</p>
<ol start="7">
<li>卸载自带jdk</li>
</ol>
<p>ubuntu20没有自带jdk</p>
<ol start="8">
<li>克隆三台虚拟机</li>
</ol>
<p>完全克隆，修改主机名和ip地址</p>
<ol start="9">
<li>写一个分发文件的脚本</li>
</ol>
<p>脚本( 有一点bug 直接用复制命令)</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-lt</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">then</span> 
	<span class="token builtin class-name">echo</span> Not Enough Arguement<span class="token operator">!</span>
	<span class="token builtin class-name">exit</span><span class="token punctuation">;</span>
	
<span class="token keyword">fi</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> hadoop102 hadoop103 hadoop104
<span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> <span class="token variable">$host</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
	
	<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable">$@</span>
	<span class="token keyword">do</span>

		<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token variable">$file</span><span class="token punctuation">]</span>
			<span class="token keyword">then</span>
				<span class="token assign-left variable">pdir</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> <span class="token parameter variable">-P</span> <span class="token punctuation">$(</span>dirname $file<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>
				<span class="token assign-left variable">fname</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> $file<span class="token variable">)</span></span>
				<span class="token function">ssh</span> <span class="token variable">$host</span> <span class="token string">"mkdir -p <span class="token variable">$pdir</span>"</span>
				<span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token variable">$pdir</span>/<span class="token variable">$fname</span> <span class="token variable">$host</span><span class="token builtin class-name">:</span><span class="token variable">$pdir</span>
				<span class="token builtin class-name">echo</span> <span class="token variable">$file</span> success<span class="token operator">!</span>
			<span class="token keyword">else</span> 
				<span class="token builtin class-name">echo</span> <span class="token variable">$file</span> does not exists<span class="token operator">!</span>
				
		<span class="token keyword">fi</span>
	<span class="token keyword">done</span>
<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装需要的jdk</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tar -zxvf jdk1.8.0_202.tar.gz -C /opt/module/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装hadoop</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tar -zxvf hadoop-3.1.3.tar.gz -C /opt/module/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置环境变量</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>//vim /etc/profile.d/my_env
<span class="token comment"># JAVA_HOME</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/opt/module/jdk1.8.0_202

<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin


<span class="token comment"># HADOOP_HOME </span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">HADOOP_HOME</span><span class="token operator">=</span>/opt/module/hadoop-3.1.3 

<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$HADOOP_HOME</span>/bin 
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$HADOOP_HOME</span>/sbin


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查是否安装成功</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 更新配置文件</span>
<span class="token builtin class-name">source</span> /etc/profile.d/my_env

hadoop version  <span class="token comment"># 注意这个不是 -version</span>

<span class="token function">java</span> <span class="token parameter variable">-version</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分发给三台虚拟机</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 仅示范 102克隆到103
scp -r /opt/ root@192.168.10.103:/
scp /etc/profile.d/my_env.sh root@192.168.10.103:/etc/profile.d/my_env.sh
source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>scp完全复制 - 方法详解</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 处于A主机，把文件从A主机拷贝到B主机</span>
//目前我们处在IP为“192.168.60.133”，
//将系统下的/home/ixdba/etc.tar.gz 文件
//拷贝到IP为 <span class="token number">192.168</span>.60.168主机的/tmp目录下

<span class="token function">scp</span> <span class="token parameter variable">-r</span> /home/ixdba/etc.tar.gz root@192.168.60.168:/tmp

<span class="token comment"># 处于B主机，把文件从A主机拷贝到B主机</span>
//如果我们处在“192.168.60.168”服务器上，也可以使用下面的命令传输数据：

<span class="token function">scp</span> <span class="token parameter variable">-r</span> root@192.168.60.133:/home/ixdba/etc.tar.gz /tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-配置集群" tabindex="-1"><a class="header-anchor" href="#_2-2-配置集群" aria-hidden="true">#</a> 2.2 配置集群</h3>
<h4 id="_2-2-1-集群规划" tabindex="-1"><a class="header-anchor" href="#_2-2-1-集群规划" aria-hidden="true">#</a> 2.2.1 集群规划</h4>
<p><img src="@source/document/python全栈/asset/image-20220328223916915.png" alt="image-20220328223916915" loading="lazy"></p>
<h4 id="_2-2-2-四大配置文件" tabindex="-1"><a class="header-anchor" href="#_2-2-2-四大配置文件" aria-hidden="true">#</a> 2.2.2 四大配置文件</h4>
<p>默认配置文件</p>
<p><img src="@source/document/python全栈/asset/image-20220328223756968.png" alt="image-20220328223756968" loading="lazy"></p>
<p>自定义配置文件</p>
<p>$HADOOP_HOME/etc/hadoop/core-site.xml</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token prolog">&lt;?xml-stylesheet type="text/xsl" href="configuration.xsl"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
	//指定namenode内部端口8020
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>fs.defaultFS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">></span></span>hdfs://hadoop102:8020<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
    
    //配置数据存储的目录
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>hadoop.tmp.dir<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">></span></span>/opt/module/hadoop-3.1.3/data<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>	
    
    //配置web页面有操作权限的用户
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>hadoop.http.staticuser.user<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">></span></span>wangle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>	
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>$HADOOP_HOME/etc/hadoop/hdfs-site.xml</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token prolog">&lt;?xml-stylesheet type="text/xsl" href="configuration.xsl"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
	//指定nn外部端口9870
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>dfs.namenode.http-address<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">></span></span>hadoop102:9870<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
    //指定2nn外部端口9870
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>dfs.namenode.secondary.http-address<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">></span></span>hadoop104:9868<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>$HADOOP_HOME/etc/hadoop/mapred-site.xml</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token prolog">&lt;?xml-stylesheet type="text/xsl" href="configuration.xsl"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
	//指定mapreduce运行在yarn上
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>mapreduce.framework.name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">></span></span>yarn<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>$HADOOP_HOME/etc/hadoop/yarn-site.xml</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token prolog">&lt;?xml-stylesheet type="text/xsl" href="configuration.xsl"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
	//指定mr走shuffle
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>yarn.nodemanager.aux-services<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">></span></span>mapreduce_shuffle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
    
    //指定resourceManager的地址
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>yarn.resourcemanager.hostname<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">></span></span>hadoop103<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
    
     //环境变量的继承
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>yarn.nodemanager.env-whitelist<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">></span></span>JAVA_HOME,HADOOP_COMMON_HOME,HADOOP_HDFS_HOME,HADOOP_CONF_DIR,CLASSPATH_PREPEND_DISTCACHE,HADOOP_YARN_HOME,HADOOP_MAPRED_HOME<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>$HADOOP_HOME/etc/hadoop/workers</p>
<p>不允许有任何空格和空行</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>hadoop102
hadoop103
hadoop104
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-3-rsync方法详解" tabindex="-1"><a class="header-anchor" href="#_2-2-3-rsync方法详解" aria-hidden="true">#</a> 2.2.3 rsync方法详解</h4>
<p>scp差异复制 - 方法详解</p>
<h4 id="_2-2-4-分发集群配置" tabindex="-1"><a class="header-anchor" href="#_2-2-4-分发集群配置" aria-hidden="true">#</a> 2.2.4 分发集群配置</h4>
<h4 id="_2-2-5-初始化集群" tabindex="-1"><a class="header-anchor" href="#_2-2-5-初始化集群" aria-hidden="true">#</a> 2.2.5 初始化集群</h4>
<p>首次需要初始化，会在根目录下创建 data 和 logs 文件夹</p>
<p>在102服务器下操作</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/module/hadoop-3.1.3
hdfs namenode <span class="token parameter variable">-format</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在102服务器下操作启动集群</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/module/hadoop-3.1.3/sbin/
<span class="token function">sh</span> start-dfs.sh
jps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>宿主机浏览器访问 hdfs 页面</p>
<p><a href="http://hadoop102:9870" target="_blank" rel="noopener noreferrer">http://hadoop102:9870<ExternalLinkIcon/></a></p>
<p>在103服务器上启动 yarn</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/module/hadoop-3.1.3/sbin/
<span class="token function">sh</span> start-yarn.sh
jps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问 yarn 页面</p>
<p><a href="http://hadoop103:8088" target="_blank" rel="noopener noreferrer">http://hadoop103:8088<ExternalLinkIcon/></a></p>
<p>配置历史服务器</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 在102服务器的mapred-site.xml追加以下配置</span>
//历史服务器内部地址
<span class="token operator">&lt;</span>property<span class="token operator">></span>
	<span class="token operator">&lt;</span>name<span class="token operator">></span>mapreduce.jobhistory.address<span class="token operator">&lt;</span>/name<span class="token operator">></span>
	<span class="token operator">&lt;</span>value<span class="token operator">></span>hadoop102:1002<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>/value<span class="token operator">></span>
<span class="token operator">&lt;</span>/property<span class="token operator">></span>

//历史服务器外部地址
<span class="token operator">&lt;</span>property<span class="token operator">></span>
	<span class="token operator">&lt;</span>name<span class="token operator">></span>mapreduce.jobhistory.webapp.address<span class="token operator">&lt;</span>/name<span class="token operator">></span>
	<span class="token operator">&lt;</span>value<span class="token operator">></span>hadoop102:1988<span class="token operator"><span class="token file-descriptor important">8</span>&lt;</span>/value<span class="token operator">></span>
<span class="token operator">&lt;</span>/property<span class="token operator">></span>


<span class="token comment"># 分发102的配置</span>
<span class="token function">rsync</span> <span class="token variable">$HADOOP_HOME</span>/etc/hadoop/mapred-site.xml <span class="token variable">$HADOOP_HOME</span>/etc/hadoop/mapred-site.xml 


<span class="token comment"># 在102 启动历史服务器</span>
mapred <span class="token parameter variable">--daemon</span> start historyserver

<span class="token comment"># 使用jds查看是否启动成功</span>
jps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>日志聚集功能配置</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 在102服务器的yarn-site.xml追加以下配置</span>
//开启日志聚集功能
<span class="token operator">&lt;</span>property<span class="token operator">></span>
	<span class="token operator">&lt;</span>name<span class="token operator">></span>yarn.log-aggregation-enable<span class="token operator">&lt;</span>/name<span class="token operator">></span>
	<span class="token operator">&lt;</span>value<span class="token operator">></span>true<span class="token operator">&lt;</span>/value<span class="token operator">></span>
<span class="token operator">&lt;</span>/property<span class="token operator">></span>

//设置日志聚集服务器地址
<span class="token operator">&lt;</span>property<span class="token operator">></span>
	<span class="token operator">&lt;</span>name<span class="token operator">></span>yarn.log.server.url<span class="token operator">&lt;</span>/name<span class="token operator">></span>
	<span class="token operator">&lt;</span>value<span class="token operator">></span>http://hadoop102:19888/jobhistory/logs<span class="token operator">&lt;</span>/value<span class="token operator">></span>
<span class="token operator">&lt;</span>/property<span class="token operator">></span>

//设置日志b保留时间为7天
<span class="token operator">&lt;</span>property<span class="token operator">></span>
	<span class="token operator">&lt;</span>name<span class="token operator">></span>yarn.log.aggregation.retain-seconds<span class="token operator">&lt;</span>/name<span class="token operator">></span>
	<span class="token operator">&lt;</span>value<span class="token operator">></span><span class="token number">60480</span><span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>/value<span class="token operator">></span>
<span class="token operator">&lt;</span>/property<span class="token operator">></span>


<span class="token comment"># 分发102的配置</span>
<span class="token function">rsync</span> <span class="token variable">$HADOOP_HOME</span>/etc/hadoop/yarn-site.xml <span class="token variable">$HADOOP_HOME</span>/etc/hadoop/yarn-site.xml 

<span class="token comment"># 在103重启yarn和历史服务器</span>
mapred <span class="token parameter variable">--daemon</span> stop historyserver
mapred <span class="token parameter variable">--daemon</span> start historyserver


<span class="token function">sh</span> <span class="token variable">$HADOOP_HOME</span>/sbin/stop-yarn.sh
<span class="token function">sh</span> <span class="token variable">$HADOOP_HOME</span>/sbin/start-yarn.sh

<span class="token comment"># 使用jds查看是否启动成功</span>
jps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上传测试数据</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 在集群服务器根目录下创建文件夹/input</span>
hadoop fs <span class="token parameter variable">-mkdir</span> /input

<span class="token comment"># 上传一个txt文本到hadoop集群下的/input</span>
hadoop fs <span class="token parameter variable">-put</span> /home/wangle/a.txt /input

<span class="token comment"># 集群中存放文件的位置,每个服务器保存一份数据副本</span>
<span class="token variable">$HADOOP_HOME</span>/data/dfs/data/current/BP/current/finalized/subdir0/subdir0/blk<span class="token punctuation">..</span>.

<span class="token comment"># 测试wordcount程序</span>
hadoop jar <span class="token variable">$HADOOP_HOME</span>/share/hadoop/mapreduce/hadoop-mapreduce-examples-3.1.3.jar wordcount /input /output

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p>
<h3 id="_2-3-集群崩溃办法" tabindex="-1"><a class="header-anchor" href="#_2-3-集群崩溃办法" aria-hidden="true">#</a> 2.3 集群崩溃办法</h3>
<p>停止服务器</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 在102服务器上停止dfs</span>
<span class="token function">sh</span> <span class="token variable">$HADOOP_HOME</span>/sbin/stop-dfs.sh

<span class="token comment"># 在103服务器上停止yarn </span>
<span class="token function">sh</span> <span class="token variable">$HADOOP_HOME</span>/sbin/stop-yarn.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除三台f服务器的 data logs</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span>  <span class="token variable">$HADOOP_HOME</span>/data/  <span class="token variable">$HADOOP_HOME</span>/logs/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>格式化</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>hdfs namenode <span class="token parameter variable">-format</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动集群</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 102服务器dfs</span>
<span class="token function">sh</span> <span class="token variable">$HADOOP_HOME</span>/sbin/start-dfs.sh

<span class="token comment"># 103服务器yarn</span>
<span class="token function">sh</span> <span class="token variable">$HADOOP_HOME</span>/sbin/start-yarn.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在102服务器下操作启动集群</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/module/hadoop-3.1.3/sbin/
<span class="token function">sh</span> start-dfs.sh
jps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-编写集群停启脚本" tabindex="-1"><a class="header-anchor" href="#_2-4-编写集群停启脚本" aria-hidden="true">#</a> 2.4 编写集群停启脚本</h3>
<p>hdfs 和 yarn 停起</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sh</span> <span class="token variable">$HADOOP_HOME</span>/sbin/start-dfs.sh
<span class="token function">sh</span> <span class="token variable">$HADOOP_HOME</span>/sbin/stop-dfs.sh
<span class="token function">sh</span> <span class="token variable">$HADOOP_HOME</span>/sbin/start-yarn.sh
<span class="token function">sh</span> <span class="token variable">$HADOOP_HOME</span>/sbin/stop-yarn.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单独服务的停起</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>hdfs <span class="token parameter variable">--daemon</span> start/stop namenode/datanode/secondarynamenode
<span class="token function">yarn</span> <span class="token parameter variable">--daemon</span> start/stop resourcemanager/nodemanager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编写集群停起脚本</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-lt</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">then</span> 
	<span class="token builtin class-name">echo</span> <span class="token string">"no args input"</span>
	<span class="token builtin class-name">exit</span> <span class="token punctuation">;</span>
<span class="token keyword">fi</span>

<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span> 
<span class="token string">"start"</span><span class="token punctuation">)</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"======启动hadoop集群======"</span>
	<span class="token function">ssh</span> hadoop102 <span class="token string">"opt/module/hadoop-3.1.3/sbin/start-dfs.sh"</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"======dfs启动======"</span>
	<span class="token function">ssh</span> hadoop103 <span class="token string">"opt/module/hadoop-3.1.3/sbin/start-yarn.sh"</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"======yarn启动======"</span>
	<span class="token function">ssh</span> hadoop102 <span class="token string">"opt/module/hadoop-3.1.3/bin/mapred --daemon start historyserver"</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"======history启动======"</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token string">"stop"</span><span class="token punctuation">)</span>
	<span class="token function">ssh</span> hadoop102 <span class="token string">"opt/module/hadoop-3.1.3/bin/mapred --daemon stop historyserver"</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"======history关闭======"</span>
	
	<span class="token function">ssh</span> hadoop103 <span class="token string">"opt/module/hadoop-3.1.3/sbin/stop-yarn.sh"</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"======yarn关闭======"</span>
	<span class="token function">ssh</span> hadoop102 <span class="token string">"opt/module/hadoop-3.1.3/sbin/stop-dfs.sh"</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"======dfs关闭======"</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
*<span class="token punctuation">)</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"input args error"</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-常用配置文件和端口总结" tabindex="-1"><a class="header-anchor" href="#_2-5-常用配置文件和端口总结" aria-hidden="true">#</a> 2.5 常用配置文件和端口总结</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>一、常用端口号
hadoop 3.x
	HDFS NameNode 内部端口号 8020 9000 9820
	HDFS NameNode 外部端口号 9870
	Yank 外部端口号 8088
	历史服务器 19888

hadoop 2.x	
	HDFS NameNode 内部端口号 8020 9000 
	HDFS NameNode 外部端口号 80070
	Yank 外部端口号 8088
	历史服务器 19888
	
二、常用配置文件
hadoop 3.x	
	core-site.xml 
	hdfs-site.xml 
	yarn-site.xml 
	mapred-site.xml 
	workers
	
hadoop 2.x	
	slaves(workers)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-集群时间同步" tabindex="-1"><a class="header-anchor" href="#_2-6-集群时间同步" aria-hidden="true">#</a> 2.6 集群时间同步</h3>
<p>有外网的情况不需要时间同步</p>
<p>局域网的情况下，无互联网，需要配置时间同步</p>
<p>查看 ntpd 服务</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>status ntpd
start ntpd
is-enabled ntpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改102服务器上的 /etc/ntp.conf 文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 解开原有注释</span>
restrict <span class="token number">192.168</span>.10.0 mask <span class="token number">255.255</span>.255.0 nomodify notrap

<span class="token comment"># 添加注释</span>
<span class="token comment"># server 0 ...</span>
<span class="token comment"># server 1 ...</span>
<span class="token punctuation">..</span>.

<span class="token comment"># 追加内容</span>
server <span class="token number">127.127</span>.1.0
fudge <span class="token number">127.127</span>.1.0 stratum <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 /etc/sysconfig/ntpd</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 追加下面内容</span>
<span class="token assign-left variable">SYNC_HWCLOCK</span><span class="token operator">=</span>yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>102 的 ntpd</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 重启ntpd服务</span>

<span class="token comment"># 开启自启动ntpd服务</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他服务器的 ntpd</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 停止ntpd服务</span>

<span class="token comment"># 禁用开机自启动ntpd服务</span>

<span class="token comment"># 编写定时任务</span>
<span class="token function">sudo</span> <span class="token function">crontab</span> <span class="token parameter variable">-e</span>
*/1 * * * * /usr/sbin/ntpdate hadoop102
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>验证是否成功</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 修改103服务器时间</span>
<span class="token function">sudo</span> data <span class="token parameter variable">-s</span> <span class="token string">"2021-9-11 11:11:11"</span>

<span class="token comment"># 1分钟后查看是否同步</span>
<span class="token function">sudo</span> data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第3章-hdfs-存储" tabindex="-1"><a class="header-anchor" href="#第3章-hdfs-存储" aria-hidden="true">#</a> 第3章 HDFS 存储</h2>
<h3 id="_3-1-概述" tabindex="-1"><a class="header-anchor" href="#_3-1-概述" aria-hidden="true">#</a> 3.1 概述</h3>
<h3 id="_3-2-常用命令" tabindex="-1"><a class="header-anchor" href="#_3-2-常用命令" aria-hidden="true">#</a> 3.2 常用命令</h3>
<h3 id="_3-3-客户端api" tabindex="-1"><a class="header-anchor" href="#_3-3-客户端api" aria-hidden="true">#</a> 3.3 客户端api</h3>
<h3 id="_3-4-读写流程" tabindex="-1"><a class="header-anchor" href="#_3-4-读写流程" aria-hidden="true">#</a> 3.4 读写流程</h3>
<h3 id="_3-5-nn和2nn" tabindex="-1"><a class="header-anchor" href="#_3-5-nn和2nn" aria-hidden="true">#</a> 3.5 NN和2NN</h3>
<p>生产环境使用NN的高可用，不会使用2NN</p>
<h3 id="_3-6-datanode工作机制" tabindex="-1"><a class="header-anchor" href="#_3-6-datanode工作机制" aria-hidden="true">#</a> 3.6 DataNode工作机制</h3>
<h2 id="第4章-mapreduce-计算" tabindex="-1"><a class="header-anchor" href="#第4章-mapreduce-计算" aria-hidden="true">#</a> 第4章 MapReduce 计算</h2>
<h3 id="_4-1-概述" tabindex="-1"><a class="header-anchor" href="#_4-1-概述" aria-hidden="true">#</a> 4.1 概述</h3>
<p>分布式运算程序的编程框架。</p>
<p>优点</p>
<ul>
<li>易于编程</li>
<li>高容错</li>
<li>适合海量数据</li>
</ul>
<p>缺点</p>
<ul>
<li>不擅长实时计算</li>
<li>不擅长流式计算</li>
<li>不擅长Dag有向无环图</li>
</ul>
<h3 id="_4-2-序列化" tabindex="-1"><a class="header-anchor" href="#_4-2-序列化" aria-hidden="true">#</a> 4.2 序列化</h3>
<h3 id="_4-3-核心原理" tabindex="-1"><a class="header-anchor" href="#_4-3-核心原理" aria-hidden="true">#</a> 4.3 核心原理</h3>
<h3 id="_4-4-压缩" tabindex="-1"><a class="header-anchor" href="#_4-4-压缩" aria-hidden="true">#</a> 4.4 压缩</h3>
<h2 id="第5章-yarn-资源调度" tabindex="-1"><a class="header-anchor" href="#第5章-yarn-资源调度" aria-hidden="true">#</a> 第5章 Yarn 资源调度</h2>
<h3 id="_5-1-基础架构" tabindex="-1"><a class="header-anchor" href="#_5-1-基础架构" aria-hidden="true">#</a> 5.1 基础架构</h3>
<h3 id="_5-2-工作机制" tabindex="-1"><a class="header-anchor" href="#_5-2-工作机制" aria-hidden="true">#</a> 5.2 工作机制</h3>
<h3 id="_5-3-调度器和调度算法" tabindex="-1"><a class="header-anchor" href="#_5-3-调度器和调度算法" aria-hidden="true">#</a> 5.3 调度器和调度算法</h3>
<h3 id="_5-4-命令行操作" tabindex="-1"><a class="header-anchor" href="#_5-4-命令行操作" aria-hidden="true">#</a> 5.4 命令行操作</h3>
<h3 id="_5-5-生产环境参数配置" tabindex="-1"><a class="header-anchor" href="#_5-5-生产环境参数配置" aria-hidden="true">#</a> 5.5 生产环境参数配置</h3>
<h3 id="_5-6-容量调度器生产环境配置" tabindex="-1"><a class="header-anchor" href="#_5-6-容量调度器生产环境配置" aria-hidden="true">#</a> 5.6 容量调度器生产环境配置</h3>
<h3 id="_5-7-公平调度器生产环境配置" tabindex="-1"><a class="header-anchor" href="#_5-7-公平调度器生产环境配置" aria-hidden="true">#</a> 5.7 公平调度器生产环境配置</h3>
<h3 id="_5-8-yarn的tool接口" tabindex="-1"><a class="header-anchor" href="#_5-8-yarn的tool接口" aria-hidden="true">#</a> 5.8 yarn的tool接口</h3>
</div></template>
