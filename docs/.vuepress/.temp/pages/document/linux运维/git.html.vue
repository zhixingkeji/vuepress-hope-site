<template><div><h2 id="第1章-git-基础" tabindex="-1"><a class="header-anchor" href="#第1章-git-基础" aria-hidden="true">#</a> 第1章 git 基础</h2>
<h3 id="_1-1本地项目上传远端" tabindex="-1"><a class="header-anchor" href="#_1-1本地项目上传远端" aria-hidden="true">#</a> 1.1<strong>本地项目上传远端</strong></h3>
<p>在磁盘上新建一个空的文件夹，最好是英文名称</p>
<p>输入 <code v-pre>git init</code></p>
<p>在 github 新建一个仓库，名称与本地相同。</p>
<p>使用 git add 文件名.后缀 添加到暂存区</p>
<p>如果文件太多，可以使用 git add --all</p>
<p>使用 git commit -m “这里写提交的备注”</p>
<p>使用 git remote add origin <a href="mailto:git@github.com">git@github.com</a>:zhixingkeji/仓库名称.git 与github关联</p>
<p>使用 git push -u origin master 首次提交</p>
<p>先用 git branch 查看当前的分支，如果不是master则修改</p>
<p>使用 git push origin master 后续提交</p>
<p>使用 git pull origin master 拉取更新</p>
<hr>
<h3 id="_1-2-错误排查" tabindex="-1"><a class="header-anchor" href="#_1-2-错误排查" aria-hidden="true">#</a> 1.2 <strong>错误排查</strong></h3>
<p>fatal: remote origin already exists.</p>
<p>使用 git remote -v 查看远程源</p>
<p>输入 git remote rm origin 删除关联的origin远程库</p>
<p>可能是没有readme文件</p>
<p>error: failed to push some refs to '<a href="http://github.com" target="_blank" rel="noopener noreferrer">github.com<ExternalLinkIcon/></a>:zhixingkeji/wlfirstblog.top.git</p>
<p>git pull --rebase origin master</p>
<h3 id="_1-3-从远端拉去储存库到本地" tabindex="-1"><a class="header-anchor" href="#_1-3-从远端拉去储存库到本地" aria-hidden="true">#</a> 1.3 从远端拉去储存库到本地</h3>
<p>在本地打开一个目录，不需要新建，克隆会自动新建仓库文件夹
在当前目录打开 git bash
输入 git clone <a href="mailto:git@github.com">git@github.com</a>:你的用户名/你的仓库名.git</p>
<h3 id="_1-4-git-指令大全" tabindex="-1"><a class="header-anchor" href="#_1-4-git-指令大全" aria-hidden="true">#</a> 1.4 git 指令大全</h3>
<p><strong>查看历史</strong></p>
<p>git show 查看上一次的提交</p>
<p>git log # 查看当前分支的所有成员的提交记录</p>
<p>git reflog # 方便回滚</p>
<p>git log oneline # 一行简略哈希值</p>
<p>git log --pretty=oneline # 一行完整哈希值</p>
<p><strong>查看状态</strong></p>
<p>git status           #查看工作区状态</p>
<p><strong>更改版本</strong></p>
<p>git reflog # 查看索引值</p>
<p>git reset --hard xxxxxxx # 将指针指向到索引值的版本</p>
<p>git reset --hard HEAD^^^ # 后退三步</p>
<p>git reset --hard HEAD~3 # 后退三步</p>
<p><strong>创建分支、切换分支、合并分支</strong></p>
<p>git branch -v        # 查看所有分支</p>
<p>git branch dev       # 创建dev分支</p>
<p>git checkout dev     # 切换分支到 dev</p>
<p>git checkout main    # 切换分支到 main</p>
<p>git merge dev        # 在当前 main分支上，吸收 dev分支</p>
<p>解决冲突，手动删除特殊符号，保存</p>
<p>&lt;&lt;&lt;&lt;&lt;&lt;&lt;某个分支  冲突1 ======= 冲突2 某个分支 &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;</p>
<p>如果被合并的分支是dev，则显示dev，如果当前分支是master，则显示HEAD</p>
<p>git add name.txt</p>
<p>git commit -m “ message ”</p>
<p>冲突的文件提交时不能带有文件名</p>
<p><strong>比较文件差异</strong></p>
<p>git diff  # 工作区和暂存区比较多个文件</p>
<p>git diff name.text  # 将工作区中的单个文件进行比较</p>
<p>git diff HEAD^ name.text # 和上个版本进行比较</p>
<p><strong>添加，提交</strong></p>
<p>git add . # 将更改提交至工作暂存区</p>
<p>git commit -m &quot;    # 将工作区暂存区内容提交到本地仓库</p>
<blockquote>
<ol>
<li>第一行</li>
<li>第二行&quot;  # 输入另一个双引号可以结束， 在输入另一个双引号之前可以随意换行。</li>
</ol>
</blockquote>
<p><strong>设置项目级别</strong></p>
<p>git config --global user.email &quot;替换为你的邮箱&quot; # 设置你在这台电脑的全局邮箱</p>
<p>git config --global <a href="http://user.name" target="_blank" rel="noopener noreferrer">user.name<ExternalLinkIcon/></a> &quot;替换为你的昵称&quot; # 设置你在这台电脑的全局姓名</p>
<p><strong>推拉更新</strong></p>
<p>git push # 推向远程仓库</p>
<p>git pull # 从远程仓库拉取更新</p>
<p><strong>克隆</strong></p>
<p>git clone <a href="mailto:git@github.com">git@github.com</a>:name/.git #克隆github</p>
<p><strong>查看帮助</strong></p>
<p>git help reset  # 查看reset指令的API</p>
<h2 id="第2章-github-基础" tabindex="-1"><a class="header-anchor" href="#第2章-github-基础" aria-hidden="true">#</a> 第2章 github 基础</h2>
<p>github是一个基于git的代码托管平台，用户可以建私人仓库和公共仓库。</p>
<h2 id="第3章-ssh-基础" tabindex="-1"><a class="header-anchor" href="#第3章-ssh-基础" aria-hidden="true">#</a> 第3章 SSH 基础</h2>
<p>在 Linux 系统上 SSH 是非常常用的工具，通过 SSH Client 我们可以连接到运行了 SSH Server 的远程机器上。</p>
<p>连接远程服务器</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ssh</span> user@remote <span class="token parameter variable">-p</span> port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 OpenSSH Server</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> openssh-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成 ssh key</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ssh-keygen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>分发后可免密登录</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ssh-copy-id user@remote <span class="token parameter variable">-p</span> port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
