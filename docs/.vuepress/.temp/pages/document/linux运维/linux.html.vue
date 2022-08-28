<template><div><h2 id="第1章-linux-简介" tabindex="-1"><a class="header-anchor" href="#第1章-linux-简介" aria-hidden="true">#</a> 第1章 linux 简介</h2>
<h3 id="_1-1-linux-系统目录结构" tabindex="-1"><a class="header-anchor" href="#_1-1-linux-系统目录结构" aria-hidden="true">#</a> 1. 1 Linux 系统目录结构</h3>
<p><img src="@source/document/linux运维/asset/linux教程-1636947887884.png" alt="" loading="lazy"></p>
<p>/bin 二进制指令</p>
<p>/boot 系统启动核心文件</p>
<p>/dev 外部设备</p>
<p>/etc 配置文件</p>
<p>/home 用户主目录</p>
<p>/lib 共享库</p>
<p>/opt 安装额外软件 如mysql</p>
<p>/usr/local 安装的软件</p>
<p>/var 日志</p>
<h3 id="_1-2-基本指令" tabindex="-1"><a class="header-anchor" href="#_1-2-基本指令" aria-hidden="true">#</a> 1.2 基本指令</h3>
<p><code v-pre>ls</code>  查看目录</p>
<p><code v-pre>history</code>  查看历史记录</p>
<p><code v-pre>shutdown -h now</code>  立即关机</p>
<p><code v-pre>shutdown -r now</code>  立即重启</p>
<p><code v-pre>reboot</code>  重启</p>
<p><code v-pre>cal</code>  查看当月日历</p>
<p><code v-pre>cal 2020</code>  查看2020年的日历</p>
<p><code v-pre>data</code> 当前时间</p>
<h3 id="_1-3-远程登录服务器" tabindex="-1"><a class="header-anchor" href="#_1-3-远程登录服务器" aria-hidden="true">#</a> 1.3  远程登录服务器</h3>
<p>软件</p>
<p>xshell  xftp  filezilla finalshell  electerm</p>
<h2 id="第2章-文件管理" tabindex="-1"><a class="header-anchor" href="#第2章-文件管理" aria-hidden="true">#</a> 第2章 文件管理</h2>
<h3 id="_2-1-创建文件" tabindex="-1"><a class="header-anchor" href="#_2-1-创建文件" aria-hidden="true">#</a> 2.1 创建文件</h3>
<p>vim text.txt 创建文本</p>
<p>touch 文件名 // 创建空文件</p>
<p>touch ok.txt yes.txt papap.txt  // 创建多个空文件</p>
<p>mkdir  /home/dog    // 创建文件夹</p>
<p>mkdir -p /home/animals/tiger    // 创建多级文件夹</p>
<h3 id="_2-2-删除文件" tabindex="-1"><a class="header-anchor" href="#_2-2-删除文件" aria-hidden="true">#</a> 2.2 删除文件</h3>
<p>rm 文件  //删除文件</p>
<p>rm -f 文件  //强制删除文件</p>
<p>rmdir  /home/dog   //删除空目录</p>
<p>rm -rf  /home/dog   //强制递归删除非空目录</p>
<p>重名文，移动文件</p>
<p>mv pig.txt cat.txt       //重命名pig为cat</p>
<p>mv pig.txt /home/animal/       //移动pig到新文件夹</p>
<p>cat 文件              // 以只读方式查看文件</p>
<p>cat -n 文件              // 显示行号</p>
<p>cat -n /etc/profile | more          // 分页显示</p>
<h3 id="_2-3-查看文件" tabindex="-1"><a class="header-anchor" href="#_2-3-查看文件" aria-hidden="true">#</a> 2.3 查看文件</h3>
<p>more指令</p>
<p>ctrl+b 返回上一页</p>
<p>enter 下一行</p>
<p>space 下一页</p>
<p>less指令 //  按需加载，查看大型文件</p>
<p>space  下一页</p>
<p>pagedown 下一页</p>
<p>pageup 上一页</p>
<p>ls      // 查看目录和文件</p>
<p>ls -l      // 以列表方式显示目录和文件</p>
<p>ls -a       // 查看目录和文件包括隐藏</p>
<p>pwd  // 显示当前工作目录的绝对路径</p>
<p>cd  // 切换目录</p>
<p>cd ..   // 返回上级目录</p>
<p>cd ~  // 返回用户的家目录</p>
<h3 id="_2-4-剪贴复制粘贴文件" tabindex="-1"><a class="header-anchor" href="#_2-4-剪贴复制粘贴文件" aria-hidden="true">#</a> 2.4  剪贴复制粘贴文件</h3>
<p>cp  a.txt b/      //把文件复制到某个目录下</p>
<p>cp  -r a/ b/       //把文件夹递归复制到某个目录下</p>
<p>\cp  -r a/ b/       // 强制覆盖</p>
<h2 id="第3章-系统相关" tabindex="-1"><a class="header-anchor" href="#第3章-系统相关" aria-hidden="true">#</a> 第3章 系统相关</h2>
<h3 id="_3-1-自定义指令别名" tabindex="-1"><a class="header-anchor" href="#_3-1-自定义指令别名" aria-hidden="true">#</a> 3.1 自定义指令别名</h3>
<p>vim ~/.bashrc</p>
<p>添加如下行</p>
<p>alias ll='ls -alF'</p>
<p>alias la='ls -A'</p>
<p>alias vi='vim'</p>
<p>alias sub='sublime-text-dev'</p>
<p>:wq存盘退出</p>
<p>退出后执行命令</p>
<p>source ~/.bashrc</p>
<h3 id="_3-2-查看linux系统信息" tabindex="-1"><a class="header-anchor" href="#_3-2-查看linux系统信息" aria-hidden="true">#</a> 3.2 查看Linux系统信息</h3>
<p>arch   #显示机器的处理器架构(1)</p>
<p>uname -m #显示机器的处理器架构(2)</p>
<p>uname -r #显示正在使用的内核版本</p>
<p>dmidecode -q      #显示硬件系统部件 - (SMBIOS / DMI)</p>
<p>hdparm -i /dev/hda   #罗列一个磁盘的架构特性</p>
<p>hdparm -tT /dev/sda  #在磁盘上执行测试性读取操作</p>
<p>cat /proc/cpuinfo    #显示CPU info的信息</p>
<p>cat /proc/interrupts #显示中断</p>
<p>cat /proc/meminfo   #校验内存使用</p>
<p>cat /proc/swaps    #显示哪些swap被使用</p>
<p>cat /proc/version   #显示内核的版本</p>
<p>cat /proc/net/dev   #显示网络适配器及统计</p>
<p>cat /proc/mounts   #显示已加载的文件系统</p>
<p>lspci -tv  #罗列PCI设备</p>
<p>lsusb -tv  #显示USB设备</p>
<h3 id="_3-3-显示系统日期" tabindex="-1"><a class="header-anchor" href="#_3-3-显示系统日期" aria-hidden="true">#</a> 3.3 显示系统日期</h3>
<p>cal 2007        #显示2007年的日历表</p>
<p>date 041217002007.00  #设置日期和时间 - 月日时分年.秒</p>
<p>clock -w       #将时间修改保存到 BIOS</p>
<h3 id="_3-4-关机-关机、重启、登出" tabindex="-1"><a class="header-anchor" href="#_3-4-关机-关机、重启、登出" aria-hidden="true">#</a> 3.4 关机(关机、重启、登出 )</h3>
<p>shutdown -h now   #关闭系统(1)</p>
<p>init 0      #关闭系统(2)</p>
<p>telinit 0     #关闭系统(3)</p>
<p>shutdown -h hours:minutes &amp;  #按预定时间关闭系统</p>
<p>shutdown -c    #取消按预定时间关闭系统</p>
<p>shutdown -r now  #重启(1)</p>
<p>reboot  #重启(2)</p>
<p>logout  #注销</p>
<h3 id="_3-5-网络" tabindex="-1"><a class="header-anchor" href="#_3-5-网络" aria-hidden="true">#</a> 3.5 网络</h3>
<p>ifconfig eth0  #显示一个以太网卡的配置</p>
<p>ifup eth0    #启用一个 'eth0' 网络设备</p>
<p>ifdown eth0   #禁用一个 'eth0' 网络设备</p>
<p>ifconfig eth0 192.168.1.1 netmask 255.255.255.0   #控制IP地址</p>
<p>ifconfig eth0 promisc   #设置 'eth0' 成混杂模式以嗅探数据包 (sniffing)</p>
<p>dhclient eth0      #以dhcp模式启用 'eth0'</p>
<p>route -n  #查看路由表</p>
<p>route add -net 0/0 gw IP_Gateway  #配置默认网关</p>
<p>route add -net 192.168.0.0 netmask 255.255.0.0 gw 192.168.1.1
#配置静态路由到达网络'192.168.0.0/16'</p>
<p>route del 0/0 gw IP_gateway    #删除静态路由</p>
<p>hostname #查看机器名</p>
<p>host <a href="http://www.example.com" target="_blank" rel="noopener noreferrer">www.example.com<ExternalLinkIcon/></a>    #把一个主机名解析到一个网际地址或把一个网际地址解析到一个主机名。</p>
<p>nslookup <a href="http://www.example.com" target="_blank" rel="noopener noreferrer">www.example.com<ExternalLinkIcon/></a>  #用于查询DNS的记录，查看域名解析是否正常，在网络故障的时候用来诊断网络问题。</p>
<p>ip link show      #查看网卡信息</p>
<p>mii-tool        #用于查看、管理介质的网络接口的状态</p>
<p>ethtool         #用于查询和设置网卡配置</p>
<p>netstat -tupl      #用于显示TCP/UDP的状态信息</p>
<p>tcpdump tcp port 80   #显示所有http协议的流量</p>
<h3 id="_3-6-打包和压缩文件" tabindex="-1"><a class="header-anchor" href="#_3-6-打包和压缩文件" aria-hidden="true">#</a> 3.6 打包和压缩文件</h3>
<p>bunzip2 file1.bz2  #解压一个叫做 'file1.bz2'的文件</p>
<p>bzip2 file1     #压缩一个叫做 'file1' 的文件</p>
<p>gunzip file1.gz   #解压一个叫做 'file1.gz'的文件</p>
<p>gzip file1     #压缩一个叫做 'file1'的文件</p>
<p>gzip -9 file1    #最大程度压缩</p>
<p>rar a file1.rar test_file     #创建一个叫做 'file1.rar' 的包</p>
<p>rar a file1.rar file1 file2 dir1  #同时压缩 'file1', 'file2' 以及目录 'dir1'</p>
<p>rar x file1.rar   #解压rar包</p>
<p>unrar x file1.rar  #解压rar包</p>
<p>tar -cvf archive.tar file1  #创建一个非压缩的 tarball</p>
<p>tar -cvf archive.tar file1 file2 dir1 #创建一个包含了 'file1', 'file2' 以及 'dir1'的档案文件
tar -tf archive.tar  #显示一个包中的内容</p>
<p>tar -xvf archive.tar  #释放一个包</p>
<p>tar -xvf archive.tar -C /tmp   #将压缩包释放到 /tmp目录下</p>
<p>tar -cvfj archive.tar.bz2 dir1  #创建一个bzip2格式的压缩包</p>
<p>tar -jxvf archive.tar.bz2    #解压一个bzip2格式的压缩包</p>
<p>tar -cvfz archive.tar.gz dir1  #创建一个gzip格式的压缩包</p>
<p>tar -zxvf archive.tar.gz     #解压一个gzip格式的压缩包</p>
<p>zip file1.zip file1  #创建一个zip格式的压缩包</p>
<p>zip -r file1.zip file1 file2 dir1  #将几个文件和目录同时压缩成一个zip格式的压缩包</p>
<p>unzip file1.zip  #解压一个zip格式压缩包</p>
<h3 id="_3-7-软件包安装" tabindex="-1"><a class="header-anchor" href="#_3-7-软件包安装" aria-hidden="true">#</a> 3.7 软件包安装</h3>
<h4 id="_3-7-1-rpm包-fedora-redhat及类似系统" tabindex="-1"><a class="header-anchor" href="#_3-7-1-rpm包-fedora-redhat及类似系统" aria-hidden="true">#</a> 3.7.1 RPM包 Fedora, Redhat及类似系统</h4>
<p>rpm -ivh package.rpm  #安装一个rpm包</p>
<p>rpm -ivh --nodeeps package.rpm  #安装一个rpm包而忽略依赖关系警告</p>
<p>rpm -U package.rpm    #更新一个rpm包但不改变其配置文件</p>
<p>rpm -F package.rpm    #更新一个确定已经安装的rpm包</p>
<p>rpm -e package_name.rpm  #删除一个rpm包</p>
<p>rpm -qa   #显示系统中所有已经安装的rpm包</p>
<p>rpm -qa | grep httpd  #显示所有名称中包含 &quot;httpd&quot; 字样的rpm包</p>
<p>rpm -qi package_name  #获取一个已安装包的特殊信息</p>
<p>rpm -qg &quot;System Environment/Daemons&quot;   #显示一个组件的rpm包</p>
<p>rpm -ql package_name    #显示一个已经安装的rpm包提供的文件列表</p>
<p>rpm -qc package_name    #显示一个已经安装的rpm包提供的配置文件列表</p>
<p>rpm -q package_name --whatrequires   #显示与一个rpm包存在依赖关系的列表</p>
<p>rpm -q package_name --whatprovides  #显示一个rpm包所占的体积</p>
<p>rpm -q package_name --scripts     #显示在安装/删除期间所执行的脚本l</p>
<p>rpm -q package_name --changelog    #显示一个rpm包的修改历史</p>
<p>rpm -qf /etc/httpd/conf/httpd.conf  #确认所给的文件由哪个rpm包所提供</p>
<p>rpm -qp package.rpm -l  #显示由一个尚未安装的rpm包提供的文件列表</p>
<p>rpm --import /media/cdrom/RPM-GPG-KEY  #导入公钥数字证书</p>
<p>rpm --checksig package.rpm   #确认一个rpm包的完整性</p>
<p>rpm -qa gpg-pubkey   #确认已安装的所有rpm包的完整性</p>
<p>rpm -V package_name   #检查文件尺寸、 许可、类型、所有者、群组、MD5检查以及最后修改时间</p>
<p>rpm -Va         #检查系统中所有已安装的rpm包- 小心使用</p>
<p>rpm -Vp package.rpm   #确认一个rpm包还未安装</p>
<p>rpm2cpio package.rpm | cpio --extract --make-directories <em>bin</em>  #从一个rpm包运行可执行文件</p>
<p>rpm -ivh /usr/src/redhat/RPMS/<code v-pre>arch</code>/package.rpm  #从一个rpm源码安装一个构建好的包</p>
<p>rpmbuild --rebuild package_name.src.rpm    #从一个rpm源码构建一个 rpm 包</p>
<h4 id="_3-7-2-deb包-debian-ubuntu及类似系统" tabindex="-1"><a class="header-anchor" href="#_3-7-2-deb包-debian-ubuntu及类似系统" aria-hidden="true">#</a> 3.7.2 DEB包 (Debian, Ubuntu及类似系统)</h4>
<p>dpkg -i package.deb   #安装/更新一个 deb 包</p>
<p>dpkg -r package_name  #从系统删除一个 deb 包</p>
<p>dpkg -l         #显示系统中所有已经安装的 deb 包</p>
<p>dpkg -l | grep httpd  #显示所有名称中包含 &quot;httpd&quot; 字样的deb包</p>
<p>dpkg -s package_name  #获得已经安装在系统中一个特殊包的信息</p>
<p>dpkg -L package_name  #显示系统中已经安装的一个deb包所提供的文件列表</p>
<p>dpkg --contents package.deb  #显示尚未安装的一个包所提供的文件列表</p>
<p>dpkg -S /bin/ping       #确认所给的文件由哪个deb包提供</p>
<h4 id="_3-7-3-apt软件工具-debian-ubuntu及类似系统" tabindex="-1"><a class="header-anchor" href="#_3-7-3-apt软件工具-debian-ubuntu及类似系统" aria-hidden="true">#</a> 3.7.3 APT软件工具 (Debian, Ubuntu及类似系统)</h4>
<p>apt-get install package_name   #安装/更新一个 deb 包</p>
<p>apt-cdrom install package_name  #从光盘安装/更新一个 deb 包</p>
<p>apt-get update   #升级列表中的软件包</p>
<p>apt-get upgrade   #升级所有已安装的软件</p>
<p>apt-get remove package_name   #从系统删除一个deb包</p>
<p>apt-get check   #确认依赖的软件仓库正确</p>
<p>apt-get clean   #从下载的软件包中清理缓存</p>
<p>apt-cache search searched-package  #返回包含所要搜索字符串的软件包名称</p>
<h2 id="第4章-文本处理" tabindex="-1"><a class="header-anchor" href="#第4章-文本处理" aria-hidden="true">#</a> 第4章 文本处理</h2>
<h3 id="_4-1-vim使用" tabindex="-1"><a class="header-anchor" href="#_4-1-vim使用" aria-hidden="true">#</a> 4.1 VIM使用</h3>
<h4 id="_4-1-1-vim命令行模式" tabindex="-1"><a class="header-anchor" href="#_4-1-1-vim命令行模式" aria-hidden="true">#</a> 4.1.1 vim命令行模式</h4>
<p>i  进入插入模式</p>
<p>/abc   # 查找关键字 abc</p>
<h4 id="_4-1-2-插入模式" tabindex="-1"><a class="header-anchor" href="#_4-1-2-插入模式" aria-hidden="true">#</a> 4.1.2 插入模式</h4>
<p>ESC   #  退出插入模式</p>
<p>yy   #  复制当前行</p>
<p>p   #  粘贴</p>
<p>dd   #  删除当前行</p>
<p>：set nu  #  显示行号</p>
<p>：set nonu   # 不显示行号</p>
<p>u   # 撤销</p>
<p>ZZ   # 保存退出vim</p>
<h2 id="第5章-预留" tabindex="-1"><a class="header-anchor" href="#第5章-预留" aria-hidden="true">#</a> 第5章 预留</h2>
<h2 id="第6章-用户权限" tabindex="-1"><a class="header-anchor" href="#第6章-用户权限" aria-hidden="true">#</a> 第6章 用户权限</h2>
<h3 id="_6-1-用户" tabindex="-1"><a class="header-anchor" href="#_6-1-用户" aria-hidden="true">#</a> 6.1  用户</h3>
<p>一般不会使用root权限开发，而是普通账户</p>
<p>useradd xxx   // 添加用户，默认同时放入到与其同名的组内</p>
<p>useradd -d  目录 xx  // 将xx的家目录放到指定的目录下，不能事先创建</p>
<p>passwd xx  // 更改xx的密码</p>
<p>userdel xx  // 删除xx用户，保留家目录</p>
<p>userdel -r xx  // 删除xx用户，删除家目录</p>
<p>id xxx // 查询用户信息</p>
<p>su - xxx // 切换用户</p>
<p>exit  // 返回到原来的用户</p>
<p>whoami  // 查看我是谁</p>
<h3 id="_6-2-组" tabindex="-1"><a class="header-anchor" href="#_6-2-组" aria-hidden="true">#</a> 6.2 组</h3>
<p>一个用户可以有多个组</p>
<p>groupadd 组名   // 添加组</p>
<p>groupdel  组名   // 删除组</p>
<p>useradd -g 用户组  用户名  //创建用户直接上组</p>
<p>usermod -g 组名 用户名  // 将用户改为新的组</p>
<h3 id="_6-3-文件" tabindex="-1"><a class="header-anchor" href="#_6-3-文件" aria-hidden="true">#</a> 6.3 文件</h3>
<p>查看文件所有者</p>
<p>groupadd police  //创建警察组</p>
<p>useradd -g police tom  //创建tom归属于警察组</p>
<p>passwd tom  // 创建tom的密码</p>
<p>touch ok.txt   //创建文件</p>
<p>ls -ahl   //查看文件的所有者</p>
<p>修改文件所有者</p>
<p>touch apple.txt   // 使用root 创建txt文件</p>
<p>chown tom apple.txt   //把txt文件的所有者改为tom</p>
<p>chown -R tom kkk/   //把kkk目录下的所有内容的所有者改为tom</p>
<p>修改文件所在组</p>
<p>chgrp police 文件名         //把文件的所在组改为police组</p>
<p>chgrp -R police kkk/       //把kkk目录下所有内容的所在组改为police组</p>
<h3 id="_6-4-权限管理" tabindex="-1"><a class="header-anchor" href="#_6-4-权限管理" aria-hidden="true">#</a> 6.4 权限管理</h3>
<p><code v-pre>ls -l</code></p>
<p>第一位：  - 普通文件     d目录   l 软连接   c 字符设备  b 块文件/硬盘</p>
<p>后三位：  rw-    用户所有者的权限   读写</p>
<p>再三位：   r--     文件所在组的权限      只读</p>
<p>再三位：   r--      文件其他组的权限      只读</p>
<p>后数字：  文件的硬链接的数量，或文件夹中子文件夹的数量</p>
<p>后字符：文件的所有者</p>
<p>后字符：文件的所在组</p>
<p>后数据：文件的大小，或目录固定为4096</p>
<p>后日期：文件最后的修改时间</p>
<p>最后字符：文件名</p>
<p>rwx权限</p>
<p>文件          r 代表读    w代表写     x代表可执行</p>
<p>文件夹      r 代表读    w代表写     x代表进入</p>
<p>chmod 修改权限</p>
<p>u：所有者，g：所在组，o：其他人，a：所有人（u+g+o）</p>
<p>chmod u=rwx, g=rx, o=x  文件目录名</p>
<p>对于文件目录，设置u为rwx，g为rx，o为x权限</p>
<p>chmod o+w 文件目录名</p>
<p>对于文件目录，给o增加w权限</p>
<p>chmod a-x 文件目录名</p>
<p>对于文件目录，给a撤销x权限</p>
<p>chomd 640 文件目录名</p>
<p>第一位所有者，第二位所在组，第三位其他人</p>
<p>r=4 ，w=2 ， x=1，r+w=6，r+x=5，wx=3，r+w+x=7</p>
<h2 id="第7章-ubuntu" tabindex="-1"><a class="header-anchor" href="#第7章-ubuntu" aria-hidden="true">#</a> 第7章 ubuntu</h2>
<h3 id="_7-1-云服务器连接" tabindex="-1"><a class="header-anchor" href="#_7-1-云服务器连接" aria-hidden="true">#</a> 7.1 云服务器连接</h3>
<p>1.创建密码</p>
<p>阿里云控制台 远程连接 使用密码连接 设置密码 Wangle2018.</p>
<p>重启服务器</p>
<p>2.允许root远程登录</p>
<p>sudo vi /etc/ssh/sshd_config ，找到  PermitRootLogin 这项 将其改为 yes</p>
<p>保存退出并重启ssh服务既可，sudo service ssh restart</p>
<h3 id="_7-2-软件和服务指令" tabindex="-1"><a class="header-anchor" href="#_7-2-软件和服务指令" aria-hidden="true">#</a> 7.2 软件和服务指令</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 软件更新</span>
<span class="token function">apt-get</span> update

<span class="token comment"># 卸载软件</span>
<span class="token function">apt-get</span> autoremove <span class="token parameter variable">--purge</span> nginx

<span class="token comment"># 查看所有服务</span>
<span class="token function">service</span> --status-all

<span class="token comment"># 查看某个服务</span>
<span class="token function">service</span> --status-all <span class="token operator">|</span> <span class="token function">grep</span> nginx

<span class="token comment"># 开启某个服务</span>
<span class="token function">service</span> nginx start

<span class="token comment"># 重启某个服务</span>
<span class="token function">service</span> nginx restart

<span class="token comment"># 查看当前服务状态</span>
<span class="token function">service</span> nginx status

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第8章-centos" tabindex="-1"><a class="header-anchor" href="#第8章-centos" aria-hidden="true">#</a> 第8章 centos</h2>
</div></template>
