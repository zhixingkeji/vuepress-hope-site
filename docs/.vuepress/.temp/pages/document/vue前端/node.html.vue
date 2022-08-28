<template><div><h2 id="第1章-node-基础" tabindex="-1"><a class="header-anchor" href="#第1章-node-基础" aria-hidden="true">#</a> 第1章 node 基础</h2>
<h3 id="_1-1-node安装" tabindex="-1"><a class="header-anchor" href="#_1-1-node安装" aria-hidden="true">#</a> 1.1 node安装</h3>
<p><strong>mac os 安装</strong></p>
<p><code v-pre>brew install node</code></p>
<p><strong>win10安装</strong></p>
<p>官网下载最新版安装, 不要勾选安装 <code v-pre>chocolate</code> 功能</p>
<p>在系统变量下添加键 <code v-pre>NODE_HOME</code>, 值为安装根目录</p>
<p>在Path下面新增`` %NODE_HOME%\bin`</p>
<p>安装cnpm  <code v-pre>npm install -g cnpm --registry=https://registry.npmmirror.com</code></p>
<p><strong>linux安装</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>apt-get install curl
curl -sL https://deb.nodesource.com/setup | bash -
apt-get install nodejs
apt-get install npm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-常用指令" tabindex="-1"><a class="header-anchor" href="#_1-2-常用指令" aria-hidden="true">#</a> 1.2 常用指令</h3>
<p><code v-pre>node -v</code>   查看node版本</p>
<p><code v-pre>node hello.js</code>   执行文件</p>
<p><code v-pre>npm -v</code>  查看npm版本</p>
<p><code v-pre>npm install express</code>   安装模块</p>
<p><code v-pre>cnpm install express</code>   安装模块</p>
<h3 id="_1-3-nvm版本管理工具" tabindex="-1"><a class="header-anchor" href="#_1-3-nvm版本管理工具" aria-hidden="true">#</a> 1.3 nvm版本管理工具</h3>
<p>介绍</p>
<p>切换node版本的工具</p>
<p>下载地址</p>
<p><a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noopener noreferrer">https://github.com/coreybutler/nvm-windows/releases<ExternalLinkIcon/></a></p>
<p>常用指令</p>
<p>nvm -v  查看版本</p>
<p>nvm -ls  列出所有安装的版本</p>
<p>nvm install node  安装最新版本node</p>
<p>nvm list available  列出所有可安装的版本</p>
<p>nvm install 11.13.0  安装指定版本号的Node</p>
<p>nvm use 11.13.0  使用特定版本的Node</p>
<p>nvm uninstall 11.13.0  卸载版本号的Node</p>
<p>nvm on ：开启node.js版本管理</p>
<p>nvm off ：关闭node.js版本管理</p>
<h3 id="_1-4-pnpm" tabindex="-1"><a class="header-anchor" href="#_1-4-pnpm" aria-hidden="true">#</a> 1.4 pnpm</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cnpm install pnpm -g
pnpm config get registry // 查看源
pnpm config set registry http://registry.npm.taobao.org // 切换淘宝源

pnpm install 包
pnpm i 包
pnpm add 包    // -S  默认写入dependencies
pnpm add -D    // -D devDependencies
pnpm add -g    // 全局安装
pnpm remove 包         //移除包
pnpm remove 包 --global   //移除全局包
pnpm up                //更新所有依赖项
pnpm upgrade 包        //更新包
pnpm upgrade 包 --global   //更新全局包
设置存储路径：pnpm config set store-dir /path/to/.pnpm-store

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第2章-基本语法" tabindex="-1"><a class="header-anchor" href="#第2章-基本语法" aria-hidden="true">#</a> 第2章 基本语法</h2>
<h3 id="_2-1-回调函数" tabindex="-1"><a class="header-anchor" href="#_2-1-回调函数" aria-hidden="true">#</a> 2.1 回调函数</h3>
<p><code v-pre>function foo2(value, callback1, callback2) { }</code></p>
<p>阻塞代码实例</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> data <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">'input.txt'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"程序执行结束!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>非阻塞代码实例</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'input.txt'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"程序执行结束!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-事件循环" tabindex="-1"><a class="header-anchor" href="#_2-2-事件循环" aria-hidden="true">#</a> 2.2 事件循环</h3>
<p>事件驱动程序</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 引入 events 模块</span>
<span class="token keyword">var</span> events <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'events'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建 eventEmitter 对象</span>
<span class="token keyword">var</span> eventEmitter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">events<span class="token punctuation">.</span>EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// 创建事件处理程序</span>
<span class="token keyword">var</span> <span class="token function-variable function">connectHandler</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">connected</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'连接成功。'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
   <span class="token comment">// 触发 data_received 事件 </span>
   eventEmitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'data_received'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 绑定 connection 事件处理程序</span>
eventEmitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'connection'</span><span class="token punctuation">,</span> connectHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// 使用匿名函数绑定 data_received 事件</span>
eventEmitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'data_received'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'数据接收成功。'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// 触发 connection 事件 </span>
eventEmitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'connection'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"程序执行完毕。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-模块" tabindex="-1"><a class="header-anchor" href="#_2-3-模块" aria-hidden="true">#</a> 2.3 模块</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//hello.js </span>
<span class="token keyword">function</span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">var</span> name<span class="token punctuation">;</span> 
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">setName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">thyName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        name <span class="token operator">=</span> thyName<span class="token punctuation">;</span> 
    <span class="token punctuation">}</span><span class="token punctuation">;</span> 
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello '</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">;</span> 
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Hello<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//main.js</span>
<span class="token keyword">var</span> Hello <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./hello'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
hello <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
hello<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">'BYVoid'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
hello<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第3章-文件系统" tabindex="-1"><a class="header-anchor" href="#第3章-文件系统" aria-hidden="true">#</a> 第3章 文件系统</h2>
<h3 id="_3-1-读取文件" tabindex="-1"><a class="header-anchor" href="#_3-1-读取文件" aria-hidden="true">#</a> 3.1 读取文件</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 异步读取</span>
fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'input.txt'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"异步读取: "</span> <span class="token operator">+</span> data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 同步读取</span>
<span class="token keyword">var</span> data <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">'input.txt'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"同步读取: "</span> <span class="token operator">+</span> data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"程序执行完毕。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-打开文件" tabindex="-1"><a class="header-anchor" href="#_3-2-打开文件" aria-hidden="true">#</a> 3.2 打开文件</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 异步打开文件</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"准备打开文件！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fs<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'input.txt'</span><span class="token punctuation">,</span> <span class="token string">'r+'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> fd</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"文件打开成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-获取文件信息" tabindex="-1"><a class="header-anchor" href="#_3-3-获取文件信息" aria-hidden="true">#</a> 3.3 获取文件信息</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">stat</span><span class="token punctuation">(</span><span class="token string">'/Users/liuht/code/itbilu/demo/fs.js'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> stats</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stats<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//true</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stats<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-写入文件" tabindex="-1"><a class="header-anchor" href="#_3-4-写入文件" aria-hidden="true">#</a> 3.4 写入文件</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"准备写入文件"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">'input.txt'</span><span class="token punctuation">,</span> <span class="token string">'我是通 过fs.writeFile 写入文件的内容'</span><span class="token punctuation">,</span>  <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"数据写入成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"--------我是分割线-------------"</span><span class="token punctuation">)</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"读取写入的数据！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'input.txt'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"异步读取文件数据: "</span> <span class="token operator">+</span> data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-删除文件" tabindex="-1"><a class="header-anchor" href="#_3-5-删除文件" aria-hidden="true">#</a> 3.5 删除文件</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"准备删除文件！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fs<span class="token punctuation">.</span><span class="token function">unlink</span><span class="token punctuation">(</span><span class="token string">'input.txt'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"文件删除成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-创建目录" tabindex="-1"><a class="header-anchor" href="#_3-6-创建目录" aria-hidden="true">#</a> 3.6 创建目录</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// tmp 目录必须存在</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"创建目录 /tmp/test/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fs<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token string">"/tmp/test/"</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"目录创建成功。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-读取目录" tabindex="-1"><a class="header-anchor" href="#_3-7-读取目录" aria-hidden="true">#</a> 3.7 读取目录</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"查看 /tmp 目录"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fs<span class="token punctuation">.</span><span class="token function">readdir</span><span class="token punctuation">(</span><span class="token string">"/tmp/"</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> files</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   files<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> file <span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-8-删除目录" tabindex="-1"><a class="header-anchor" href="#_3-8-删除目录" aria-hidden="true">#</a> 3.8 删除目录</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 执行前创建一个空的 /tmp/test 目录</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"准备删除目录 /tmp/test"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fs<span class="token punctuation">.</span><span class="token function">rmdir</span><span class="token punctuation">(</span><span class="token string">"/tmp/test"</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"读取 /tmp 目录"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   fs<span class="token punctuation">.</span><span class="token function">readdir</span><span class="token punctuation">(</span><span class="token string">"/tmp/"</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> files</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      files<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> file <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第4章-常用内置模块" tabindex="-1"><a class="header-anchor" href="#第4章-常用内置模块" aria-hidden="true">#</a> 第4章 常用内置模块</h2>
<h3 id="_4-1-path" tabindex="-1"><a class="header-anchor" href="#_4-1-path" aria-hidden="true">#</a> 4.1 path</h3>
<p><code v-pre>__dirname</code> 指向被执行 js 文件所在目录的绝对路径</p>
<p><code v-pre>__filename</code> 指向被执行 js 文件的绝对路径</p>
<p><code v-pre>path.join()</code></p>
<p>将多个参数值合并成一个路径</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>
path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'/files/1.txt'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>path.basename()</code></p>
<ul>
<li>获取路径中的文件名(无后缀)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fpath <span class="token operator">=</span> <span class="token string">'/a/b/c/index.html'</span>
path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>fpath<span class="token punctuation">,</span> <span class="token string">'.html'</span><span class="token punctuation">)</span> <span class="token comment">//输出 index</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>extname()</code></p>
<ul>
<li>获取路径中文件的后缀名</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fpath  <span class="token operator">=</span> <span class="token string">'/a/b/c/index.html'</span>
path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>fpath<span class="token punctuation">)</span> <span class="token comment">//输出 html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>sep</code></p>
<ul>
<li>返回操作系统指定的路径分割符</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>sep<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>win32<span class="token punctuation">.</span>sep<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>posix<span class="token punctuation">.</span>sep<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>normalize()</code></p>
<ul>
<li>将非标准的路径转换成标准路径，解析像 ‘.’ ，’…’，或多个杠。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span><span class="token string">'./a/b/../../c'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span><span class="token string">'./a//b//.././c'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>resolve()</code></p>
<ul>
<li>返回绝对路径</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'./demo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>isAbsolute()</code></p>
<ul>
<li>判断是否为绝对路径</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
path<span class="token punctuation">.</span><span class="token function">isAbsolute</span><span class="token punctuation">(</span><span class="token string">'E:/a'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>parse()</code></p>
<ul>
<li>解析一个路径，返回一个带有属性的对象</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
path<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">'./demo/test/a/1.txt'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>relative()</code></p>
<ul>
<li>返回参数一到参数二的相对路径</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
path<span class="token punctuation">.</span><span class="token function">relative</span><span class="token punctuation">(</span><span class="token string">'./demo/test'</span><span class="token punctuation">,</span> <span class="token string">'./demo/test/a/1.txt'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-fs" tabindex="-1"><a class="header-anchor" href="#_4-2-fs" aria-hidden="true">#</a> 4.2 fs</h3>
<h3 id="_4-3-os" tabindex="-1"><a class="header-anchor" href="#_4-3-os" aria-hidden="true">#</a> 4.3 os</h3>
<h3 id="_4-4-http" tabindex="-1"><a class="header-anchor" href="#_4-4-http" aria-hidden="true">#</a> 4.4 http</h3>
<h3 id="_4-5-url" tabindex="-1"><a class="header-anchor" href="#_4-5-url" aria-hidden="true">#</a> 4.5 url</h3>
<h3 id="_4-6-events" tabindex="-1"><a class="header-anchor" href="#_4-6-events" aria-hidden="true">#</a> 4.6 events</h3>
<h3 id="_4-7-querystring" tabindex="-1"><a class="header-anchor" href="#_4-7-querystring" aria-hidden="true">#</a> 4.7 QueryString</h3>
<h3 id="_4-8-stream" tabindex="-1"><a class="header-anchor" href="#_4-8-stream" aria-hidden="true">#</a> 4.8 stream</h3>
<h2 id="第5章-常用第三方库" tabindex="-1"><a class="header-anchor" href="#第5章-常用第三方库" aria-hidden="true">#</a> 第5章 常用第三方库</h2>
<p>Danfo.js  结构化数据处理 类似pandas</p>
<p>electron  跨桌面端开发</p>
<p>jimp 图片裁剪</p>
<p>opencvjs 图像处理</p>
<h2 id="第6章-express服务器" tabindex="-1"><a class="header-anchor" href="#第6章-express服务器" aria-hidden="true">#</a> 第6章 express服务器</h2>
</div></template>
