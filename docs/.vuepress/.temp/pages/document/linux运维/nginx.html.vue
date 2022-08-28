<template><div><h2 id="一-nginx简介" tabindex="-1"><a class="header-anchor" href="#一-nginx简介" aria-hidden="true">#</a> 一. nginx简介</h2>
<h3 id="_1-1-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-简介" aria-hidden="true">#</a> 1.1 简介</h3>
<p>nginx是一个高性能的http和反向代理的web服务器。占有内存少，并发能力强。</p>
<h3 id="_1-2-安装" tabindex="-1"><a class="header-anchor" href="#_1-2-安装" aria-hidden="true">#</a> 1.2 安装</h3>
<p>ubuntu下安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 1更新软件源</span>
<span class="token function">apt-get</span> update

<span class="token comment"># 2安装nginx</span>
<span class="token function">apt-get</span> <span class="token function">install</span> nginx

<span class="token comment"># 3找到配置文件修改 /etc/nginx/sites-enabled/default</span>
server <span class="token punctuation">{</span>
	listen <span class="token number">80</span><span class="token punctuation">;</span>

	root /root/nginx/html/myvuepress<span class="token punctuation">;</span>

	
	server_name localhost<span class="token punctuation">;</span>

	location / <span class="token punctuation">{</span>
		try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ @router<span class="token punctuation">;</span>
		index index.html index.htm<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	location @router <span class="token punctuation">{</span>
        rewrite ^.*$ /index.html last<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># 4在root目录下创建根目录</span>
/root/nginx/html

<span class="token comment"># 5把项目压缩放到根目录下解压</span>
/root/nginx/html/myvuepress

<span class="token comment"># 6重启nginx</span>
<span class="token function">service</span> nginx restart

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>所有的配置文件都在/etc/nginx下</li>
<li>程序文件在/usr/sbin/nginx</li>
<li>日志放在了/var/log/nginx中</li>
<li>已经在/etc/init.d/下创建了启动脚本nginx</li>
</ul>
<p>nginx卸载</p>
<h3 id="_1-3-配置文件-nginx-conf" tabindex="-1"><a class="header-anchor" href="#_1-3-配置文件-nginx-conf" aria-hidden="true">#</a> 1.3 配置文件 nginx.conf</h3>
<p>usr/local/nginx/conf/nginx.conf  所在目录</p>
<p>包括三块内容:</p>
<p>全局 , events , http</p>
<p>简单版</p>
<div class="language-conf ext-conf line-numbers-mode"><pre v-pre class="language-conf"><code>
events {
	#单个进程允许的客户端最大连接数
	worker_connections  20480;
}

http {
	include			mime.types;
	default_type	application/octet-stream;
	server {
		#=====nigix服务访问的端口=====# ###改这里###
		listen			8080;
		#=====nigix服务访问的域名或者IP=====# ###改这里###
		server_name		localhost;
		location / {
			root	D:/Environment/nginx-1.16.1/html/;
			index	index.html;
		}
		location /test1/ {
			alias	D:/Environment/nginx-1.16.1/html/test1/;
			index	index.html;
		}	
		location /test2/ {
			alias	D:/Environment/nginx-1.16.1/html/test2/;
			index	index.html;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂版本</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">#定义Nginx运行的用户和用户组</span>
<span class="token keyword">user</span> www www<span class="token punctuation">;</span>

<span class="token comment">#nginx进程数，建议设置为等于CPU总核心数。</span>
worker_processes <span class="token number">8</span><span class="token punctuation">;</span>
 
<span class="token comment">#全局错误日志定义类型，[ debug | info | notice | warn | error | crit ]</span>
error_log <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>nginx<span class="token operator">/</span>logs<span class="token operator">/</span>error<span class="token punctuation">.</span>log info<span class="token punctuation">;</span>

<span class="token comment">#进程pid文件</span>
pid <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>nginx<span class="token operator">/</span>logs<span class="token operator">/</span>nginx<span class="token punctuation">.</span>pid<span class="token punctuation">;</span>

<span class="token comment">#指定进程可以打开的最大描述符：数目</span>
<span class="token comment">#工作模式与连接数上限</span>
<span class="token comment">#这个指令是指当一个nginx进程打开的最多文件描述符数目，理论值应该是最多打开文件数（ulimit -n）与nginx进程数相除，但是nginx分配请求并不是那么均匀，所以最好与ulimit -n 的值保持一致。</span>
<span class="token comment">#现在在linux 2.6内核下开启文件打开数为65535，worker_rlimit_nofile就相应应该填写65535。</span>
<span class="token comment">#这是因为nginx调度时分配请求到进程并不是那么的均衡，所以假如填写10240，总并发量达到3-4万时就有进程可能超过10240了，这时会返回502错误。</span>
worker_rlimit_nofile <span class="token number">65535</span><span class="token punctuation">;</span>


events
{
    <span class="token comment">#参考事件模型，use [ kqueue | rtsig | epoll | /dev/poll | select | poll ]; epoll模型</span>
    <span class="token comment">#是Linux 2.6以上版本内核中的高性能网络I/O模型，linux建议epoll，如果跑在FreeBSD上面，就用kqueue模型。</span>
    <span class="token comment">#补充说明：</span>
    <span class="token comment">#与apache相类，nginx针对不同的操作系统，有不同的事件模型</span>
    <span class="token comment">#A）标准事件模型</span>
    <span class="token comment">#Select、poll属于标准事件模型，如果当前系统不存在更有效的方法，nginx会选择select或poll</span>
    <span class="token comment">#B）高效事件模型</span>
    <span class="token comment">#Kqueue：使用于FreeBSD 4.1+, OpenBSD 2.9+, NetBSD 2.0 和 MacOS X.使用双处理器的MacOS X系统使用kqueue可能会造成内核崩溃。</span>
    <span class="token comment">#Epoll：使用于Linux内核2.6版本及以后的系统。</span>
    <span class="token comment">#/dev/poll：使用于Solaris 7 11/99+，HP/UX 11.22+ (eventport)，IRIX 6.5.15+ 和 Tru64 UNIX 5.1A+。</span>
    <span class="token comment">#Eventport：使用于Solaris 10。 为了防止出现内核崩溃的问题， 有必要安装安全补丁。</span>
    <span class="token keyword">use</span> epoll<span class="token punctuation">;</span>

    <span class="token comment">#单个进程最大连接数（最大连接数=连接数*进程数）</span>
    <span class="token comment">#根据硬件调整，和前面工作进程配合起来用，尽量大，但是别把cpu跑到100%就行。每个进程允许的最多连接数，理论上每台nginx服务器的最大连接数为。</span>
    worker_connections <span class="token number">65535</span><span class="token punctuation">;</span>

    <span class="token comment">#keepalive超时时间。</span>
    keepalive_timeout <span class="token number">60</span><span class="token punctuation">;</span>

    <span class="token comment">#客户端请求头部的缓冲区大小。这个可以根据你的系统分页大小来设置，一般一个请求头的大小不会超过1k，不过由于一般系统分页都要大于1k，所以这里设置为分页大小。</span>
    <span class="token comment">#分页大小可以用命令getconf PAGESIZE 取得。</span>
    <span class="token comment">#[root@web001 ~]# getconf PAGESIZE</span>
    <span class="token comment">#4096</span>
    <span class="token comment">#但也有client_header_buffer_size超过4k的情况，但是client_header_buffer_size该值必须设置为“系统分页大小”的整倍数。</span>
    client_header_buffer_size <span class="token number">4</span>k<span class="token punctuation">;</span>

    <span class="token comment">#这个将为打开文件指定缓存，默认是没有启用的，max指定缓存数量，建议和打开文件数一致，inactive是指经过多长时间文件没被请求后删除缓存。</span>
    open_file_cache max<span class="token operator">=</span><span class="token number">65535</span> inactive<span class="token operator">=</span><span class="token number">60</span>s<span class="token punctuation">;</span>

    <span class="token comment">#这个是指多长时间检查一次缓存的有效信息。</span>
    <span class="token comment">#语法:open_file_cache_valid time 默认值:open_file_cache_valid 60 使用字段:http, server, location 这个指令指定了何时需要检查open_file_cache中缓存项目的有效信息.</span>
    open_file_cache_valid <span class="token number">80</span>s<span class="token punctuation">;</span>

    <span class="token comment">#open_file_cache指令中的inactive参数时间内文件的最少使用次数，如果超过这个数字，文件描述符一直是在缓存中打开的，如上例，如果有一个文件在inactive时间内一次没被使用，它将被移除。</span>
    <span class="token comment">#语法:open_file_cache_min_uses number 默认值:open_file_cache_min_uses 1 使用字段:http, server, location  这个指令指定了在open_file_cache指令无效的参数中一定的时间范围内可以使用的最小文件数,如果使用更大的值,文件描述符在cache中总是打开状态.</span>
    open_file_cache_min_uses <span class="token number">1</span><span class="token punctuation">;</span>
    
    <span class="token comment">#语法:open_file_cache_errors on | off 默认值:open_file_cache_errors off 使用字段:http, server, location 这个指令指定是否在搜索一个文件时记录cache错误.</span>
    open_file_cache_errors <span class="token keyword">on</span><span class="token punctuation">;</span>
}
 
 
 
<span class="token comment">#设定http服务器，利用它的反向代理功能提供负载均衡支持</span>
http
{
    <span class="token comment"># 文件扩展名与文件类型映射表 </span>
    <span class="token comment"># 可以自己设置某些特殊格式用某种文件格式解析</span>
    include mime<span class="token punctuation">.</span><span class="token keyword">types</span><span class="token punctuation">;</span>

    <span class="token comment">#默认文件类型</span>
    default_type application<span class="token operator">/</span>octet<span class="token operator">-</span>stream<span class="token punctuation">;</span>

    <span class="token comment">#默认编码</span>
    <span class="token comment">#charset utf-8;</span>

    <span class="token comment">#服务器名字的hash表大小</span>
    <span class="token comment">#保存服务器名字的hash表是由指令server_names_hash_max_size 和server_names_hash_bucket_size所控制的。参数hash bucket size总是等于hash表的大小，并且是一路处理器缓存大小的倍数。在减少了在内存中的存取次数后，使在处理器中加速查找hash表键值成为可能。如果hash bucket size等于一路处理器缓存的大小，那么在查找键的时候，最坏的情况下在内存中查找的次数为2。第一次是确定存储单元的地址，第二次是在存储单元中查找键 值。因此，如果Nginx给出需要增大hash max size 或 hash bucket size的提示，那么首要的是增大前一个参数的大小.</span>
    server_names_hash_bucket_size <span class="token number">128</span><span class="token punctuation">;</span>

    <span class="token comment">#客户端请求头部的缓冲区大小。这个可以根据你的系统分页大小来设置，一般一个请求的头部大小不会超过1k，不过由于一般系统分页都要大于1k，所以这里设置为分页大小。分页大小可以用命令getconf PAGESIZE取得。</span>
    client_header_buffer_size <span class="token number">32</span>k<span class="token punctuation">;</span>

    <span class="token comment">#客户请求头缓冲大小。nginx默认会用client_header_buffer_size这个buffer来读取header值，如果header过大，它会使用large_client_header_buffers来读取。</span>
    large_client_header_buffers <span class="token number">4</span> <span class="token number">64</span>k<span class="token punctuation">;</span>

    <span class="token comment">#设定通过nginx上传文件的大小</span>
    client_max_body_size <span class="token number">8</span>m<span class="token punctuation">;</span>

    <span class="token comment">#开启高效文件传输模式，sendfile指令指定nginx是否调用sendfile函数来输出文件，对于普通应用设为 on，如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络I/O处理速度，降低系统的负载。注意：如果图片显示不正常把这个改成off。</span>
    <span class="token comment">#sendfile指令指定 nginx 是否调用sendfile 函数（zero copy 方式）来输出文件，对于普通应用，必须设为on。如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络IO处理速度，降低系统uptime。</span>
    sendfile <span class="token keyword">on</span><span class="token punctuation">;</span>

    <span class="token comment">#开启目录列表访问，合适下载服务器，默认关闭。</span>
    autoindex <span class="token keyword">on</span><span class="token punctuation">;</span>

    <span class="token comment">#此选项允许或禁止使用socke的TCP_CORK的选项，此选项仅在使用sendfile的时候使用</span>
    tcp_nopush <span class="token keyword">on</span><span class="token punctuation">;</span>
     
    tcp_nodelay <span class="token keyword">on</span><span class="token punctuation">;</span>

    <span class="token comment">#长连接超时时间，单位是秒</span>
    keepalive_timeout <span class="token number">120</span><span class="token punctuation">;</span>

    <span class="token comment">#FastCGI相关参数是为了改善网站的性能：减少资源占用，提高访问速度。下面参数看字面意思都能理解。</span>
    fastcgi_connect_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_send_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_read_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_buffer_size <span class="token number">64</span>k<span class="token punctuation">;</span>
    fastcgi_buffers <span class="token number">4</span> <span class="token number">64</span>k<span class="token punctuation">;</span>
    fastcgi_busy_buffers_size <span class="token number">128</span>k<span class="token punctuation">;</span>
    fastcgi_temp_file_write_size <span class="token number">128</span>k<span class="token punctuation">;</span>

    <span class="token comment">#gzip模块设置</span>
    gzip <span class="token keyword">on</span><span class="token punctuation">;</span> <span class="token comment">#开启gzip压缩输出</span>
    gzip_min_length <span class="token number">1</span>k<span class="token punctuation">;</span>    <span class="token comment">#最小压缩文件大小</span>
    gzip_buffers <span class="token number">4</span> <span class="token number">16</span>k<span class="token punctuation">;</span>    <span class="token comment">#压缩缓冲区</span>
    gzip_http_version <span class="token number">1.0</span><span class="token punctuation">;</span>    <span class="token comment">#压缩版本（默认1.1，前端如果是squid2.5请使用1.0）</span>
    gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span>    <span class="token comment">#压缩等级</span>
    gzip_types <span class="token keyword">text</span><span class="token operator">/</span>plain application<span class="token operator">/</span>x<span class="token operator">-</span>javascript <span class="token keyword">text</span><span class="token operator">/</span>css application<span class="token operator">/</span>xml<span class="token punctuation">;</span>    <span class="token comment">#压缩类型，默认就已经包含textml，所以下面就不用再写了，写上去也不会有问题，但是会有一个warn。</span>
    gzip_vary <span class="token keyword">on</span><span class="token punctuation">;</span>

    <span class="token comment">#开启限制IP连接数的时候需要使用</span>
    <span class="token comment">#limit_zone crawler $binary_remote_addr 10m;</span>



    <span class="token comment">#负载均衡配置</span>
    upstream jh<span class="token punctuation">.</span>w3cschool<span class="token punctuation">.</span>cn {
     
        <span class="token comment">#upstream的负载均衡，weight是权重，可以根据机器配置定义权重。weigth参数表示权值，权值越高被分配到的几率越大。</span>
        server <span class="token number">192.168</span><span class="token number">.80</span><span class="token number">.121</span>:<span class="token number">80</span> weight<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
        server <span class="token number">192.168</span><span class="token number">.80</span><span class="token number">.122</span>:<span class="token number">80</span> weight<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
        server <span class="token number">192.168</span><span class="token number">.80</span><span class="token number">.123</span>:<span class="token number">80</span> weight<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>

        <span class="token comment">#nginx的upstream目前支持4种方式的分配</span>
        <span class="token comment">#1、轮询（默认）</span>
        <span class="token comment">#每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。</span>
        <span class="token comment">#2、weight</span>
        <span class="token comment">#指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。</span>
        <span class="token comment">#例如：</span>
        <span class="token comment">#upstream bakend {</span>
        <span class="token comment">#    server 192.168.0.14 weight=10;</span>
        <span class="token comment">#    server 192.168.0.15 weight=10;</span>
        <span class="token comment">#}</span>
        <span class="token comment">#2、ip_hash</span>
        <span class="token comment">#每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。</span>
        <span class="token comment">#例如：</span>
        <span class="token comment">#upstream bakend {</span>
        <span class="token comment">#    ip_hash;</span>
        <span class="token comment">#    server 192.168.0.14:88;</span>
        <span class="token comment">#    server 192.168.0.15:80;</span>
        <span class="token comment">#}</span>
        <span class="token comment">#3、fair（第三方）</span>
        <span class="token comment">#按后端服务器的响应时间来分配请求，响应时间短的优先分配。</span>
        <span class="token comment">#upstream backend {</span>
        <span class="token comment">#    server server1;</span>
        <span class="token comment">#    server server2;</span>
        <span class="token comment">#    fair;</span>
        <span class="token comment">#}</span>
        <span class="token comment">#4、url_hash（第三方）</span>
        <span class="token comment">#按访问url的hash结果来分配请求，使每个url定向到同一个后端服务器，后端服务器为缓存时比较有效。</span>
        <span class="token comment">#例：在upstream中加入hash语句，server语句中不能写入weight等其他的参数，hash_method是使用的hash算法</span>
        <span class="token comment">#upstream backend {</span>
        <span class="token comment">#    server squid1:3128;</span>
        <span class="token comment">#    server squid2:3128;</span>
        <span class="token comment">#    hash $request_uri;</span>
        <span class="token comment">#    hash_method crc32;</span>
        <span class="token comment">#}</span>

        <span class="token comment">#tips:</span>
        <span class="token comment">#upstream bakend{#定义负载均衡设备的Ip及设备状态}{</span>
        <span class="token comment">#    ip_hash;</span>
        <span class="token comment">#    server 127.0.0.1:9090 down;</span>
        <span class="token comment">#    server 127.0.0.1:8080 weight=2;</span>
        <span class="token comment">#    server 127.0.0.1:6060;</span>
        <span class="token comment">#    server 127.0.0.1:7070 backup;</span>
        <span class="token comment">#}</span>
        <span class="token comment">#在需要使用负载均衡的server中增加 proxy_pass http://bakend/;</span>

        <span class="token comment">#每个设备的状态设置为:</span>
        <span class="token comment">#1.down表示单前的server暂时不参与负载</span>
        <span class="token comment">#2.weight为weight越大，负载的权重就越大。</span>
        <span class="token comment">#3.max_fails：允许请求失败的次数默认为1.当超过最大次数时，返回proxy_next_upstream模块定义的错误</span>
        <span class="token comment">#4.fail_timeout:max_fails次失败后，暂停的时间。</span>
        <span class="token comment">#5.backup： 其它所有的非backup机器down或者忙的时候，请求backup机器。所以这台机器压力会最轻。</span>

        <span class="token comment">#nginx支持同时设置多组的负载均衡，用来给不用的server来使用。</span>
        <span class="token comment">#client_body_in_file_only设置为On 可以讲client post过来的数据记录到文件中用来做debug</span>
        <span class="token comment">#client_body_temp_path设置记录文件的目录 可以设置最多3层目录</span>
        <span class="token comment">#location对URL进行匹配.可以进行重定向或者进行新的代理 负载均衡</span>
    }
     
     
     
    <span class="token comment">#虚拟主机的配置</span>
    server
    {
        <span class="token comment">#监听端口</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>

        <span class="token comment">#域名可以有多个，用空格隔开</span>
        server_name www<span class="token punctuation">.</span>w3cschool<span class="token punctuation">.</span>cn w3cschool<span class="token punctuation">.</span>cn<span class="token punctuation">;</span>
        <span class="token keyword">index</span> <span class="token keyword">index</span><span class="token punctuation">.</span>html <span class="token keyword">index</span><span class="token punctuation">.</span>htm <span class="token keyword">index</span><span class="token punctuation">.</span>php<span class="token punctuation">;</span>
        root <span class="token operator">/</span><span class="token keyword">data</span><span class="token operator">/</span>www<span class="token operator">/</span>w3cschool<span class="token punctuation">;</span>

        <span class="token comment">#对******进行负载均衡</span>
        location <span class="token operator">~</span> <span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token punctuation">(</span>php<span class="token operator">|</span>php5<span class="token punctuation">)</span>?$
        {
            fastcgi_pass <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">9000</span><span class="token punctuation">;</span>
            fastcgi_index <span class="token keyword">index</span><span class="token punctuation">.</span>php<span class="token punctuation">;</span>
            include fastcgi<span class="token punctuation">.</span>conf<span class="token punctuation">;</span>
        }
         
        <span class="token comment">#图片缓存时间设置</span>
        location <span class="token operator">~</span> <span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>swf<span class="token punctuation">)</span>$
        {
            expires <span class="token number">10</span>d<span class="token punctuation">;</span>
        }
         
        <span class="token comment">#JS和CSS缓存时间设置</span>
        location <span class="token operator">~</span> <span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token punctuation">(</span>js<span class="token operator">|</span>css<span class="token punctuation">)</span>?$
        {
            expires <span class="token number">1</span>h<span class="token punctuation">;</span>
        }
         
        <span class="token comment">#日志格式设定</span>
        <span class="token comment">#$remote_addr与$http_x_forwarded_for用以记录客户端的ip地址；</span>
        <span class="token comment">#$remote_user：用来记录客户端用户名称；</span>
        <span class="token comment">#$time_local： 用来记录访问时间与时区；</span>
        <span class="token comment">#$request： 用来记录请求的url与http协议；</span>
        <span class="token comment">#$status： 用来记录请求状态；成功是200，</span>
        <span class="token comment">#$body_bytes_sent ：记录发送给客户端文件主体内容大小；</span>
        <span class="token comment">#$http_referer：用来记录从那个页面链接访问过来的；</span>
        <span class="token comment">#$http_user_agent：记录客户浏览器的相关信息；</span>
        <span class="token comment">#通常web服务器放在反向代理的后面，这样就不能获取到客户的IP地址了，通过$remote_add拿到的IP地址是反向代理服务器的iP地址。反向代理服务器在转发请求的http头信息中，可以增加x_forwarded_for信息，用以记录原有客户端的IP地址和原来客户端的请求的服务器地址。</span>
        log_format access <span class="token string">'$remote_addr - $remote_user [$time_local] "$request" '</span>
        <span class="token string">'$status $body_bytes_sent "$http_referer" '</span>
        <span class="token string">'"$http_user_agent" $http_x_forwarded_for'</span><span class="token punctuation">;</span>
         
        <span class="token comment">#定义本虚拟主机的访问日志</span>
        access_log  <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>nginx<span class="token operator">/</span>logs<span class="token operator">/</span>host<span class="token punctuation">.</span>access<span class="token punctuation">.</span>log  main<span class="token punctuation">;</span>
        access_log  <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>nginx<span class="token operator">/</span>logs<span class="token operator">/</span>host<span class="token punctuation">.</span>access<span class="token punctuation">.</span><span class="token number">404.</span>log  log404<span class="token punctuation">;</span>
         
        <span class="token comment">#对 "/" 启用反向代理</span>
        location <span class="token operator">/</span> {
            proxy_pass http:<span class="token comment">//127.0.0.1:88;</span>
            proxy_redirect <span class="token keyword">off</span><span class="token punctuation">;</span>
            proxy_set_header X<span class="token operator">-</span><span class="token keyword">Real</span><span class="token operator">-</span>IP $remote_addr<span class="token punctuation">;</span>
             
            <span class="token comment">#后端的Web服务器可以通过X-Forwarded-For获取用户真实IP</span>
            proxy_set_header X<span class="token operator">-</span>Forwarded<span class="token operator">-</span><span class="token keyword">For</span> $proxy_add_x_forwarded_for<span class="token punctuation">;</span>
             
            <span class="token comment">#以下是一些反向代理的配置，可选。</span>
            proxy_set_header Host $host<span class="token punctuation">;</span>

            <span class="token comment">#允许客户端请求的最大单文件字节数</span>
            client_max_body_size <span class="token number">10</span>m<span class="token punctuation">;</span>

            <span class="token comment">#缓冲区代理缓冲用户端请求的最大字节数，</span>
            <span class="token comment">#如果把它设置为比较大的数值，例如256k，那么，无论使用firefox还是IE浏览器，来提交任意小于256k的图片，都很正常。如果注释该指令，使用默认的client_body_buffer_size设置，也就是操作系统页面大小的两倍，8k或者16k，问题就出现了。</span>
            <span class="token comment">#无论使用firefox4.0还是IE8.0，提交一个比较大，200k左右的图片，都返回500 Internal Server Error错误</span>
            client_body_buffer_size <span class="token number">128</span>k<span class="token punctuation">;</span>

            <span class="token comment">#表示使nginx阻止HTTP应答代码为400或者更高的应答。</span>
            proxy_intercept_errors <span class="token keyword">on</span><span class="token punctuation">;</span>

            <span class="token comment">#后端服务器连接的超时时间_发起握手等候响应超时时间</span>
            <span class="token comment">#nginx跟后端服务器连接超时时间(代理连接超时)</span>
            proxy_connect_timeout <span class="token number">90</span><span class="token punctuation">;</span>

            <span class="token comment">#后端服务器数据回传时间(代理发送超时)</span>
            <span class="token comment">#后端服务器数据回传时间_就是在规定时间之内后端服务器必须传完所有的数据</span>
            proxy_send_timeout <span class="token number">90</span><span class="token punctuation">;</span>

            <span class="token comment">#连接成功后，后端服务器响应时间(代理接收超时)</span>
            <span class="token comment">#连接成功后_等候后端服务器响应时间_其实已经进入后端的排队之中等候处理（也可以说是后端服务器处理请求的时间）</span>
            proxy_read_timeout <span class="token number">90</span><span class="token punctuation">;</span>

            <span class="token comment">#设置代理服务器（nginx）保存用户头信息的缓冲区大小</span>
            <span class="token comment">#设置从被代理服务器读取的第一部分应答的缓冲区大小，通常情况下这部分应答中包含一个小的应答头，默认情况下这个值的大小为指令proxy_buffers中指定的一个缓冲区的大小，不过可以将其设置为更小</span>
            proxy_buffer_size <span class="token number">4</span>k<span class="token punctuation">;</span>

            <span class="token comment">#proxy_buffers缓冲区，网页平均在32k以下的设置</span>
            <span class="token comment">#设置用于读取应答（来自被代理服务器）的缓冲区数目和大小，默认情况也为分页大小，根据操作系统的不同可能是4k或者8k</span>
            proxy_buffers <span class="token number">4</span> <span class="token number">32</span>k<span class="token punctuation">;</span>

            <span class="token comment">#高负荷下缓冲大小（proxy_buffers*2）</span>
            proxy_busy_buffers_size <span class="token number">64</span>k<span class="token punctuation">;</span>

            <span class="token comment">#设置在写入proxy_temp_path时数据的大小，预防一个工作进程在传递文件时阻塞太长</span>
            <span class="token comment">#设定缓存文件夹大小，大于这个值，将从upstream服务器传</span>
            proxy_temp_file_write_size <span class="token number">64</span>k<span class="token punctuation">;</span>
        }
         
         
        <span class="token comment">#设定查看Nginx状态的地址</span>
        location <span class="token operator">/</span>NginxStatus {
            stub_status <span class="token keyword">on</span><span class="token punctuation">;</span>
            access_log <span class="token keyword">on</span><span class="token punctuation">;</span>
            auth_basic <span class="token string">"NginxStatus"</span><span class="token punctuation">;</span>
            auth_basic_user_file confpasswd<span class="token punctuation">;</span>
            <span class="token comment">#htpasswd文件的内容可以用apache提供的htpasswd工具来产生。</span>
        }
         
        <span class="token comment">#本地动静分离反向代理配置</span>
        <span class="token comment">#所有jsp的页面均交由tomcat或resin处理</span>
        location <span class="token operator">~</span> <span class="token punctuation">.</span><span class="token punctuation">(</span>jsp<span class="token operator">|</span>jspx<span class="token operator">|</span><span class="token keyword">do</span><span class="token punctuation">)</span>?$ {
            proxy_set_header Host $host<span class="token punctuation">;</span>
            proxy_set_header X<span class="token operator">-</span><span class="token keyword">Real</span><span class="token operator">-</span>IP $remote_addr<span class="token punctuation">;</span>
            proxy_set_header X<span class="token operator">-</span>Forwarded<span class="token operator">-</span><span class="token keyword">For</span> $proxy_add_x_forwarded_for<span class="token punctuation">;</span>
            proxy_pass http:<span class="token comment">//127.0.0.1:8080;</span>
        }
         
        <span class="token comment">#所有静态文件由nginx直接读取不经过tomcat或resin</span>
        location <span class="token operator">~</span> <span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token punctuation">(</span>htm<span class="token operator">|</span>html<span class="token operator">|</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>swf<span class="token operator">|</span>ioc<span class="token operator">|</span>rar<span class="token operator">|</span>zip<span class="token operator">|</span>txt<span class="token operator">|</span>flv<span class="token operator">|</span>mid<span class="token operator">|</span>doc<span class="token operator">|</span>ppt<span class="token operator">|</span>
        pdf<span class="token operator">|</span>xls<span class="token operator">|</span>mp3<span class="token operator">|</span>wma<span class="token punctuation">)</span>$
        {
            expires <span class="token number">15</span>d<span class="token punctuation">;</span> 
        }
         
        location <span class="token operator">~</span> <span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token punctuation">(</span>js<span class="token operator">|</span>css<span class="token punctuation">)</span>?$
        {
            expires <span class="token number">1</span>h<span class="token punctuation">;</span>
        }
    }
}
<span class="token comment">######Nginx配置文件nginx.conf中文详解#####</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-常用命令" tabindex="-1"><a class="header-anchor" href="#_1-4-常用命令" aria-hidden="true">#</a> 1.4 常用命令</h3>
<p>nginx -v  查看版本</p>
<p>nginx  start 启动</p>
<p>nginx -s stop 关闭</p>
<p>nginx -s reload 重启</p>
<h2 id="二-反向代理" tabindex="-1"><a class="header-anchor" href="#二-反向代理" aria-hidden="true">#</a> 二. 反向代理</h2>
<p>正向代理，在浏览器中配置代理服务器，通过代理进行网站的访问。
反向代理，用户不知道真实服务器，而是通过访问反向代理服务器，然后转发到真实服务器上。</p>
<h2 id="三-负载均衡" tabindex="-1"><a class="header-anchor" href="#三-负载均衡" aria-hidden="true">#</a> 三. 负载均衡</h2>
<p>有多个请求时，一台服务器不能满足需求，需要增加服务器的数量，在用户访问服务器时，nginx反向代理能将大量的请求，平均分配给各个服务器，也就是负载均衡。</p>
<h2 id="四-动静分离" tabindex="-1"><a class="header-anchor" href="#四-动静分离" aria-hidden="true">#</a> 四. 动静分离</h2>
<p>为了加快网站的解析速度，可以把动态页面和静态页面由不同的服务器来解析，加快解析的速度，即nginx能根据用户的请求，自动转发到静态资源服务器或动态资源服务器上。</p>
<h2 id="五-高可用集群" tabindex="-1"><a class="header-anchor" href="#五-高可用集群" aria-hidden="true">#</a> 五. 高可用集群</h2>
<h2 id="六-nginx-原理" tabindex="-1"><a class="header-anchor" href="#六-nginx-原理" aria-hidden="true">#</a> 六. nginx 原理</h2>
</div></template>
