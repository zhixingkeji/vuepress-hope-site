<template><div><h2 id="第1章-electron-简介" tabindex="-1"><a class="header-anchor" href="#第1章-electron-简介" aria-hidden="true">#</a> 第1章 Electron 简介</h2>
<h3 id="_1-1-主进程和渲染进程简介" tabindex="-1"><a class="header-anchor" href="#_1-1-主进程和渲染进程简介" aria-hidden="true">#</a> 1.1 主进程和渲染进程简介</h3>
<p><strong>主进程</strong></p>
<p>Electron 运行 package.json 的 main 脚本（background.js）的进程被称为主进程。</p>
<p>在主进程中运行的脚本通过创建web页面来展示用户界面。</p>
<p>一个 Electron 应用总是有且只有一个主进程。</p>
<p>主进程在 Node.js 环境中运行，这意味着它能够<code v-pre>require</code>模块化和使用所有 Node.js API。</p>
<p><strong>渲染进程</strong></p>
<p>由于 Electron 使用了 Chromium 来展示 web 页面，所以 Chromium 的多进程架构也被使用到。</p>
<p>每个 Electron 中的 web 页面运行在它自己的渲染进程中。</p>
<p>在普通的浏览器中，web页面通常在一个沙盒环境中运行，不被允许去接触原生的资源。</p>
<p>渲染器无法直接访问<code v-pre>require</code> 或其他 Node.js API。为了在渲染器中直接包含 NPM 模块，您必须使用在 Web 上使用的相同捆绑工具链（例如，<code v-pre>webpack</code>或<code v-pre>parcel</code></p>
<p><strong>主进程与渲染进程的关系</strong></p>
<p>主进程使用 BrowserWindow 实例创建页面。 每个 BrowserWindow 实例都在自己的渲染进程里运行页面。 当一个 BrowserWindow 实例被销毁后，相应的渲染进程也会被终止。</p>
<p>主进程管理所有的<a href="https://www.zhihu.com/search?q=web%E9%A1%B5%E9%9D%A2&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A75764907%7D" target="_blank" rel="noopener noreferrer">web页面<ExternalLinkIcon/></a>和它们对应的渲染进程。 每个渲染进程都是独立的，它只关心它所运行的 web 页面。</p>
<h3 id="_1-2-嵌入网页" tabindex="-1"><a class="header-anchor" href="#_1-2-嵌入网页" aria-hidden="true">#</a> 1.2 嵌入网页</h3>
<h3 id="_1-3-预加载" tabindex="-1"><a class="header-anchor" href="#_1-3-预加载" aria-hidden="true">#</a> 1.3 预加载</h3>
<p>``预加载脚本包含在其 Web 内容开始加载之前在渲染器进程中执行的代码。这些脚本在渲染器上下文中运行，但通过访问 Node.js API 被授予更多权限。</p>
<p>因为预加载脚本<a href="https://developer.mozilla.org/en-US/docs/Web/API/Window" target="_blank" rel="noopener noreferrer"><code v-pre>Window</code><ExternalLinkIcon/></a>与渲染器共享一个全局接口并且可以访问 Node.js API，它通过在<code v-pre>window</code>全局中公开任意 API 来增强渲染器，然后您的 Web 内容可以使用这些 API。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//main.js</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> BrowserWindow <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'electron'</span><span class="token punctuation">)</span>
<span class="token comment">//...</span>
<span class="token keyword">const</span> win <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrowserWindow</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">webPreferences</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">preload</span><span class="token operator">:</span> <span class="token string">'path/to/preload.js'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>尽管预加载脚本 <code v-pre>window</code>与它们所附加的渲染器共享一个全局变量，但<code v-pre>window</code>由于<code v-pre>contextIsolation</code> 默认设置为 <code v-pre>true</code> 您不能直接将预加载脚本中的任何变量附加到内部的 <code v-pre>window</code> 对象上。</p>
<h3 id="_1-4-上下文桥" tabindex="-1"><a class="header-anchor" href="#_1-4-上下文桥" aria-hidden="true">#</a> 1.4 上下文桥</h3>
<p>在上下文隔离模式下 , 通过preload把变量和函数传递到子进程的<code v-pre>window</code>对象上</p>
<p>preload.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> contextBridge <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'electron'</span><span class="token punctuation">)</span>

<span class="token comment">//</span>
contextBridge<span class="token punctuation">.</span><span class="token function">exposeInMainWorld</span><span class="token punctuation">(</span><span class="token string">'myAPI'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">doAThing</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>redener.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>myAPI<span class="token punctuation">.</span><span class="token function">doAThing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-5-进程间通信" tabindex="-1"><a class="header-anchor" href="#_1-5-进程间通信" aria-hidden="true">#</a> 1.5 进程间通信</h3>
<p><strong>子进程到主进程</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>监听
ipcMain<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'set-title'</span><span class="token punctuation">,</span> handleSetTitle<span class="token punctuation">)</span>
ipcRenderer<span class="token punctuation">.</span>on

发送
ipcRenderer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'set-title'</span><span class="token punctuation">,</span> title<span class="token punctuation">)</span>
ipcMain<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>主进程到子进程</strong></p>
<p><strong>子进程到子进程</strong></p>
<p>消息转发</p>
<h2 id="第2章-electron-项目搭建" tabindex="-1"><a class="header-anchor" href="#第2章-electron-项目搭建" aria-hidden="true">#</a> 第2章  Electron 项目搭建</h2>
<h3 id="_2-1-入门项目" tabindex="-1"><a class="header-anchor" href="#_2-1-入门项目" aria-hidden="true">#</a> 2.1 入门项目</h3>
<p><strong>官方文档</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>https://www.electronjs.org/docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>官方 quick start</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/electron/electron-quick-start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>完整功能实例代码</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://gitee.com/kiamusze/electron-api-demos-Zh_CN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-搭建-vue-electron" tabindex="-1"><a class="header-anchor" href="#_2-2-搭建-vue-electron" aria-hidden="true">#</a> 2.2 搭建 vue-electron</h3>
<p><strong>创建vue项目</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue create electron-vue-demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>安装插件</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue add electron-builder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>踩坑1</strong> ：在安装过程中，很可能会卡在这一步不动了，我们先强制结束掉，再执行一次</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue add electron-builder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>踩坑2</strong>：webpack5之后移除了某个模块 , 需要手动安装</p>
<p><strong>踩坑3</strong> :  把某个配置设置为false</p>
<p>配置 vue.config</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  devServer: {
    // can be overwritten by process.env.HOST
    host: '0.0.0.0',
    port: 8080
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('src', resolve('src'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'));
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>devServer 用于设置开发环境的服务，这里表示在本地8080端口启动web服务。</p>
<p>chainWebpack 我们给项目目录起了“别名(alias)”，在代码中，我们可以直接用“别名”访问资源，省去了每次输入完整相对路径的麻烦。</p>
<blockquote>
<p>※注：
◉ 在js代码中可直接使用别名，例如：
@/common/js/xxx.js 等价于 src/common/js/xxx.js
common/js/xxx.js 等价于 src/common/js/xxx.js
◉ 在css或者html中使用别名，需要在别名前加“~”，例如：
@import &quot;~common/stylus/font.styl&quot;;</p>
</blockquote>
<h2 id="第3章-electron-全部api" tabindex="-1"><a class="header-anchor" href="#第3章-electron-全部api" aria-hidden="true">#</a> 第3章 Electron 全部API</h2>
<h3 id="_3-1-渲染进程" tabindex="-1"><a class="header-anchor" href="#_3-1-渲染进程" aria-hidden="true">#</a> 3.1 渲染进程</h3>
<h3 id="_3-2-主进程" tabindex="-1"><a class="header-anchor" href="#_3-2-主进程" aria-hidden="true">#</a> 3.2 主进程</h3>
<h3 id="_3-2-app窗口大小" tabindex="-1"><a class="header-anchor" href="#_3-2-app窗口大小" aria-hidden="true">#</a> 3.2 APP窗口大小</h3>
<p>修改background.js：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function createWindow () {
      // Create the browser window.
      win = new BrowserWindow({
M       width: 1200,
M       height: 620,
        webPreferences: {
          nodeIntegration: true
        }
      })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-内嵌页面" tabindex="-1"><a class="header-anchor" href="#_3-1-内嵌页面" aria-hidden="true">#</a> 3.1 内嵌页面</h3>
<h3 id="_3-2-主进程和渲染进程通信" tabindex="-1"><a class="header-anchor" href="#_3-2-主进程和渲染进程通信" aria-hidden="true">#</a> 3.2 主进程和渲染进程通信</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//渲染进程发送消息</span>
ipcRenderer<span class="token punctuation">.</span><span class="token function">sendToHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//渲染进程监听消息</span>
ipcRenderer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"channel"</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span>message</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span> pass <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-取消跨域限制" tabindex="-1"><a class="header-anchor" href="#_3-3-取消跨域限制" aria-hidden="true">#</a> 3.3 取消跨域限制</h3>
<p>修改background.js：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function createWindow () {
      // Create the browser window.
      win = new BrowserWindow({
        width: 1200,
        height: 620,
        webPreferences: {
+         webSecurity: false,
          nodeIntegration: true
        }
      })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-取消菜单栏" tabindex="-1"><a class="header-anchor" href="#_3-4-取消菜单栏" aria-hidden="true">#</a> 3.4 取消菜单栏</h3>
<p>在我们生成的桌面APP中，我们可以看到默认的菜单栏。</p>
<p>在windows中，菜单栏在APP窗口内的顶部；在macOS中，菜单栏位于电脑屏幕顶部。</p>
<p>为了方便项目将来也能直接生成纯web应用，尽量把APP的全部功能都做到渲染进程里，这里我们取消菜单栏。</p>
<p>由于macOS的特殊性，顶部菜单栏无法删除，所以我们针对macOS特殊处理，把菜单栏只保留“关于”和“退出”。</p>
<p>修改background.js：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>M   import { app, protocol, BrowserWindow, Menu } from 'electron'
    ...
    function createWindow () {
        ...
        win.on('closed', () => {
            win = null
        })

+       createMenu()
    }

+   // 设置菜单栏
+   function createMenu() {
+       // darwin表示macOS，针对macOS的设置
+       if (process.platform === 'darwin') {
+           const template = [
+           {
+               label: 'App Demo',
+               submenu: [
+                   {
+                       role: 'about'
+                   },
+                   {
+                       role: 'quit'
+                   }]
+           }]
+           let menu = Menu.buildFromTemplate(template)
+           Menu.setApplicationMenu(menu)
+       } else {
+           // windows及linux系统
+           Menu.setApplicationMenu(null)
+       }
+   }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://pic1.zhimg.com/80/v2-243f591c62c81d7027c4b5e9f674effc_720w.jpg" alt="img" loading="lazy">windows界面菜单栏已消失</p>
<p><img src="https://pic2.zhimg.com/80/v2-1972a0b1f0cccd671fe0f72738b28825_720w.jpg" alt="img" loading="lazy">macOS界面菜单栏已简化</p>
<blockquote>
<p>macOS菜单栏名称label的“App Demo”会在build版本生效，dev版本会显示“Electron”。</p>
</blockquote>
<p>更多关于菜单栏设置，请参阅：<a href="https://link.zhihu.com/?target=https%3A//electronjs.org/docs/api/menu" target="_blank" rel="noopener noreferrer">https://electronjs.org/docs/api/menu<ExternalLinkIcon/></a></p>
<h3 id="_3-5-设置app窗口图标" tabindex="-1"><a class="header-anchor" href="#_3-5-设置app窗口图标" aria-hidden="true">#</a> 3.5 设置APP窗口图标</h3>
<p>准备windows和macOS两版图标。</p>
<blockquote>
<p>windows: <a href="https://www.zhihu.com/search?q=app.ico&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A75764907%7D" target="_blank" rel="noopener noreferrer">app.ico<ExternalLinkIcon/></a> 最小尺寸：256x256
macOS: app.png或<a href="https://www.zhihu.com/search?q=app.icns&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A75764907%7D" target="_blank" rel="noopener noreferrer">app.icns<ExternalLinkIcon/></a> 最小尺寸：512x512 （后续4.1章节用到）</p>
</blockquote>
<p>把图标文件放到public/目录下，项目结构如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>|- /dist_electron
  （略）
|- /public
   |- app.icns  &lt;-- 本教程暂时未使用icns
   |- app.ico
   |- app.png
   |- favicon.ico
   |- index.html
|- /src
  （略）
|- .editorconfig
|- .eslintrc.js
|- .gitignore
|- babel.config.js
|- package.json
|- package-lock.json
|- README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以顺便把<a href="https://www.zhihu.com/search?q=favicon.ico&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A75764907%7D" target="_blank" rel="noopener noreferrer">favicon.ico<ExternalLinkIcon/></a>也修改一下，但是在桌面版APP上是用不到的。如果以后生成纯web项目才会用到。</p>
<p>修改background.js，让APP窗口应用图标：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function createWindow () {
      // Create the browser window.
      win = new BrowserWindow({
        width: 1200,
        height: 620,
        webPreferences: {
          nodeIntegration: true
        },
+       // eslint-disable-next-line no-undef
+       icon: `${__static}/app.ico`
      })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>这里的${__static}对应的是public目录</p>
</blockquote>
<p>现在，Windows系统上可以看到开发环境的APP<a href="https://www.zhihu.com/search?q=%E7%AA%97%E5%8F%A3%E5%9B%BE%E6%A0%87&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A75764907%7D" target="_blank" rel="noopener noreferrer">窗口图标<ExternalLinkIcon/></a>已经生效了。</p>
<p>macOS图标请参照4.1章节，并且需要在build后才能生效。</p>
<p><img src="https://pic4.zhimg.com/80/v2-1d4e795580183238a869be17230216e3_720w.jpg" alt="img" loading="lazy">windows APP窗口及任务栏图标</p>
<h3 id="_3-6-设置app窗口标题栏名称" tabindex="-1"><a class="header-anchor" href="#_3-6-设置app窗口标题栏名称" aria-hidden="true">#</a> 3.6 设置APP窗口标题栏名称</h3>
<p>修改public/index.html:</p>
<p>我们把electron-vue-demo改为App Demo。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;head>
        &lt;meta charset="utf-8">
        &lt;meta http-equiv="X-UA-Compatible" content="IE=edge">
        &lt;meta name="viewport" content="width=device-width,initial-scale=1.0">
        &lt;link rel="icon" href="&lt;%= BASE_URL %>favicon.ico">
M       &lt;title>App Demo&lt;/title>
  &lt;/head>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第4章-electron打包" tabindex="-1"><a class="header-anchor" href="#第4章-electron打包" aria-hidden="true">#</a> 第4章  Electron打包</h2>
<p>这里我们已经集成了electron-builder工具，官方文档可以参阅：<a href="https://link.zhihu.com/?target=https%3A//www.electron.build/" target="_blank" rel="noopener noreferrer">https://www.electron.build/<ExternalLinkIcon/></a></p>
<h3 id="_4-1-设置app及安装包图标" tabindex="-1"><a class="header-anchor" href="#_4-1-设置app及安装包图标" aria-hidden="true">#</a> 4.1 设置APP及安装包图标</h3>
<p>在3.5章节，我们的图标生效于运行APP的窗口。本小节将生效于最终生成的可执行文件和安装包图标。需要准备的图标文件请回看3.5章节。</p>
<p>修改vue.config.js</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>chainWebpack: config => {...},
+   pluginOptions: {
+       electronBuilder: {
+           builderOptions: {
+               win: {
+                   icon: './public/app.ico'
+               },
+               mac: {
+                   icon: './public/app.png'
+               }
+           }
+       }
+   }
    ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行build后的mac版本，可以看到图标都已生效了。</p>
<p><img src="https://pic3.zhimg.com/80/v2-a731460485841be4eb202caceb0b337e_720w.jpg" alt="img" loading="lazy">macOS APP Dock图标</p>
<p>安装包和可执行文件的截图就不再放出了。</p>
<p>更多详细介绍，可参阅： <a href="https://link.zhihu.com/?target=https%3A//www.electron.build/icons.html" target="_blank" rel="noopener noreferrer">https://www.electron.build/icons.html<ExternalLinkIcon/></a></p>
<h3 id="_4-2-设置app名称" tabindex="-1"><a class="header-anchor" href="#_4-2-设置app名称" aria-hidden="true">#</a> 4.2 设置APP名称</h3>
<p>APP名称包括安装包中APP的名称、可执行文件的文件名。</p>
<p>修改vue.config.js:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>pluginOptions: {
        electronBuilder: {
            builderOptions: {
                win: {
                    icon: './public/app.ico'
                },
                mac: {
                    icon: './public/app.png'
                },
+               productName: 'AppDemo'
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-打包app" tabindex="-1"><a class="header-anchor" href="#_4-3-打包app" aria-hidden="true">#</a> 4.3 打包APP</h3>
<p>执行以下命令，可以build工程：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm run electron:build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最终在dist_electron目录下生成build后的产品。</p>
<h3 id="windows版本" tabindex="-1"><a class="header-anchor" href="#windows版本" aria-hidden="true">#</a> windows版本</h3>
<p>目录如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/dist_electron
|- /bundled
  （略）
|- /win-unpacked  &lt;-- 绿色版
  （略）
|- AppDemo Setup 0.1.0.exe  &lt;-- 安装文件
|- AppDemo Setup 0.1.0.exe.blockmap
|- builder-effective-config.yaml
|- index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里其实就win-unpacked和AppDemo Setup 0.1.0.exe有用。</p>
<blockquote>
<p>※注：在32位环境下打包生成的是32位APP，在64位环境下打包生成的是64位APP。</p>
</blockquote>
<h3 id="mac版本" tabindex="-1"><a class="header-anchor" href="#mac版本" aria-hidden="true">#</a> mac版本</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/dist_electron
|- /bundled
  （略）
|- /mac
   |- AppDemo   &lt;-- 绿色版
|- AppDemo-0.1.0-mac.zip  &lt;-- 绿色版压缩包
|- AppDemo-0.1.0-mac.dmg  &lt;-- 安装包
|- AppDemo-0.1.0.dmg.blockmap
|- builder-effective-config.yaml
|- index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-可能出现的错误" tabindex="-1"><a class="header-anchor" href="#_4-4-可能出现的错误" aria-hidden="true">#</a> 4.4 可能出现的错误</h3>
<p>我曾经在Win10 64bit 1809版本上build失败，保存信息中提示：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Error output:
Can't open output file
Error - aborting creation process
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与此同时，在win7和win10 1803版本build正常。经研究，无果。后来把windows升级到1903版本，问题解决了。应该是vue-cli-plugin-electron-builder插件与系统之间的问题导致。</p>
<h2 id="五-完整功能解决方案" tabindex="-1"><a class="header-anchor" href="#五-完整功能解决方案" aria-hidden="true">#</a> 五.  完整功能解决方案</h2>
<p>在完成以上章节后，后面基本可以完全按照web方式开发了。这里简单分享下一些小经验。</p>
<h3 id="_5-1-src目录结构参考" tabindex="-1"><a class="header-anchor" href="#_5-1-src目录结构参考" aria-hidden="true">#</a> 5.1 src目录结构参考</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/src
|- /common
   |- /fonts
   |- /images
   |- /js
      |- api
      |- libs
   |- /stylus
   |- /components
   |- /base
   |- /modules
      |- /moduleA
      |- /moduleB
      ...
   |- /views
   |- App.vue
   |- background.js
   |- main.js
   |- router.js
   |- store.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面对部分重要目录简要说明：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>common/ - 项目公用库
common/fonts/ - 字体文件
common/images/ - 公用图片
common/js/ - 公用js目录
common/js/api/ - 把api按类别封装成函数，并export出去，减少业务逻辑中的重复代码
common/js/lib/ - 存放一些公用函数库、定义的常量库等
common/stylus/ - Stylus样式文件
components/ - vue组件目录
component/base/ - vue基础组件，例如自定义的CheckBox、日期选择器、Dialog、Toaster、分页组件等
component/modules/ - vue模块
views/ - vue页面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-换肤功能的实现" tabindex="-1"><a class="header-anchor" href="#_5-2-换肤功能的实现" aria-hidden="true">#</a> 5.2 换肤功能的实现</h3>
<p>很多项目都有实时换肤的需求，在实际开发中，虽然我们使用了Sass、Less、Stylus等高端样式工具，但最终经过编译还是要回归到最原始的CSS。换肤的本质还是实时替换皮肤样式文件。</p>
<h3 id="失败案例" tabindex="-1"><a class="header-anchor" href="#失败案例" aria-hidden="true">#</a> 失败案例</h3>
<p>以Stylus为例，抽象出皮肤文件skin.styl:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$color-bg = #fff
$color-text = #333
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在业务样式中引用：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@import 'skin.styl'

body
 background: $color-bg
 color: $color-text
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当经过编译后，生成的css为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>body {background: #fff; color: #333;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>样式已经写死了，无法换肤。</p>
<p>那么应该怎么做呢？</p>
<h3 id="成功案例" tabindex="-1"><a class="header-anchor" href="#成功案例" aria-hidden="true">#</a> 成功案例</h3>
<p>项目根目录下的public目录是静态目录，也就是说在build最终产品的时候，它里面的文件将原封不动保留。所以，可以将皮肤文件放在这里。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>|- /public
+  |- /skin
+     |- /skin01
+        |- skin.css
+     |- /skin02
+        |- skin.css
   |- app.icns
   |- app.ico
   |- app.png
   |- favicon.ico
   |- index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于Electron的是基于<a href="https://www.zhihu.com/search?q=chromium%E5%86%85%E6%A0%B8&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A75764907%7D" target="_blank" rel="noopener noreferrer">chromium内核<ExternalLinkIcon/></a>，所以不用担心代码的浏览器兼容问题。接下来就是发挥CSS3变量var(--*)的时候了。</p>
<p>public/skin/skin01/skin.css：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>:root {
    --color-bg: #fff;
    --color-text: #333;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>public/skin/skin02/skin.css：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>:root {
    --color-bg: #263238;
    --color-text: #b2ccd6;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改src/App.vue：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>...
    &lt;style lang="stylus">
+   body
+     background: var(--color-bg)
+     color: var(--color-text)
    #app
      font-family 'Avenir', Helvetica, Arial, sans-serif
      -webkit-font-smoothing antialiased
      -moz-osx-font-smoothing grayscale
      text-align center
M     color: var(--color-text)

    #nav
      padding 30px
      a
        font-weight bold
M       color: var(--color-text)
        &amp;.router-link-exact-active
          color #42b983
    &lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在public/index.html引入皮肤样式，注意加上id=&quot;app-skin&quot;：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;head>
        &lt;meta charset="utf-8">
        &lt;meta http-equiv="X-UA-Compatible" content="IE=edge">
        &lt;meta name="viewport" content="width=device-width,initial-scale=1.0">
        &lt;link rel="icon" href="&lt;%= BASE_URL %>favicon.ico">
+       &lt;link rel="stylesheet" href="&lt;%= BASE_URL %>skin/skin01/skin.css" id="app-skin">
        &lt;title>App Demo&lt;/title>
  &lt;/head>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>篇幅有限，这里就不写通过js修改皮肤的代码了。通过调试工具手动修改skin的css路径，可看到换肤效果：</p>
<p><img src="https://pic3.zhimg.com/80/v2-4e42205d182fddfc520a4a0e0e5c9bb6_720w.jpg" alt="img" loading="lazy">skin01浅色皮肤</p>
<p><img src="https://pic1.zhimg.com/80/v2-721e4b15b9d560ec146eadd0680eb420_720w.jpg" alt="img" loading="lazy">skin02深色皮肤</p>
<h3 id="_5-4-注册快捷键打开devtools" tabindex="-1"><a class="header-anchor" href="#_5-4-注册快捷键打开devtools" aria-hidden="true">#</a> 5.4 注册快捷键打开devTools</h3>
<p>在Electron中打开devTools是通过主线程中调用win.webContents.openDevTools()实现的。以上教程仅在开发环境初始启动的时候打开devTools，但是一旦关闭就不能再打开了。下面讲一下怎么通过快捷键打开devTools。</p>
<p>修改background.js:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>...
M   import { app, protocol, BrowserWindow, Menu, globalShortcut } from 'electron'
    ...
    app.on('ready', async () => {
        if (isDevelopment &amp;&amp; !process.env.IS_TEST) {
        // Install Vue Devtools
            try {
                await installVueDevtools()
            } catch (e) {
                console.error('Vue Devtools failed to install:', e.toString())
            }
        }
        // 在开发环境和生产环境均可通过快捷键打开devTools
+       globalShortcut.register('CommandOrControl+Shift+i', function () {
+           win.webContents.openDevTools()
+       })
        createWindow()
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在windows下，按Ctrl+Shift+i即可打开devTools</p>
<p>在macOS下，按Commond+Shift+i即可打开devTools</p>
<p>为什么没用F12？因为windows系统中，F12是系统保留快捷键，无法使用。官方原话是这么解释的：</p>
<blockquote>
<p>The F12 key is reserved for use by the debugger at all times, so it should not be registered as a hot key. Even when you are not debugging an application, F12 is reserved in case a kernel-mode debugger or a just-in-time debugger is resident.</p>
</blockquote>
<p>但是可以使用Ctrl+F12，只要不单独使用F12就可以。</p>
<p>以上代码在开发环境和生产环境中均有效，为保证生产环境的安全，建议不要在生产环境中使用。放到上面的if语句中即可。</p>
<h3 id="_5-5-截图" tabindex="-1"><a class="header-anchor" href="#_5-5-截图" aria-hidden="true">#</a> 5.5 截图</h3>
<p>注意 在17版本后 electron只有在主进程的js中有 desktopCapturer 属性, 所以要使用 ipcMain发送消息, 在preload中写截图逻辑</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> app<span class="token punctuation">,</span> BrowserWindow<span class="token punctuation">,</span> desktopCapturer <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'electron'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> electron <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'electron'</span><span class="token punctuation">)</span>


<span class="token comment">//截图函数</span>
    desktopCapturer<span class="token punctuation">.</span><span class="token function">getSources</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">types</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'window'</span><span class="token punctuation">,</span> <span class="token string">'screen'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">thumbnailSize</span><span class="token operator">:</span> thumbSize <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">sources</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sources<span class="token punctuation">)</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> source <span class="token keyword">of</span> sources<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>source<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'Screen 1'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"找到了electron进程"</span><span class="token punctuation">)</span>
                    <span class="token comment">// mainWindow.webContents.send('SET_SOURCE', source.id)</span>
                    <span class="token comment">// console.log(source.thumbnail.crop())</span>

                <span class="token comment">//crop  resize</span>

                <span class="token comment">//base64</span>
                <span class="token comment">// console.log(source.thumbnail.toDataURL())</span>

                <span class="token comment">//截图后</span>
                <span class="token keyword">let</span> rect <span class="token operator">=</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>



                <span class="token keyword">let</span> image <span class="token operator">=</span> source<span class="token punctuation">.</span>thumbnail<span class="token punctuation">.</span><span class="token function">crop</span><span class="token punctuation">(</span>rect<span class="token punctuation">)</span>


                <span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>
                fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span><span class="token string">'./code.png'</span><span class="token punctuation">,</span> image<span class="token punctuation">.</span><span class="token function">toPNG</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"write error"</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"write success"</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>



                <span class="token keyword">return</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-6-录像" tabindex="-1"><a class="header-anchor" href="#_5-6-录像" aria-hidden="true">#</a> 5.6 录像</h3>
<h3 id="_5-7-超级鹰验证码识别" tabindex="-1"><a class="header-anchor" href="#_5-7-超级鹰验证码识别" aria-hidden="true">#</a> 5.7 超级鹰验证码识别</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//安装 restler请求库</span>
<span class="token keyword">var</span> restler <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'restler'</span><span class="token punctuation">)</span>

restler<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'http://upload.chaojiying.net/Upload/Processing.php'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">multipart</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">//用户名</span>
        <span class="token string-property property">'user'</span><span class="token operator">:</span> <span class="token string">'wl2020'</span><span class="token punctuation">,</span>
      <span class="token comment">//密码</span>
        <span class="token string-property property">'pass'</span><span class="token operator">:</span> <span class="token string">'wangle2018.'</span><span class="token punctuation">,</span>
      <span class="token comment">//软件ID</span>
        <span class="token string-property property">'softid'</span><span class="token operator">:</span> <span class="token string">'911390'</span><span class="token punctuation">,</span>
      <span class="token comment">//验证码类型</span>
        <span class="token string-property property">'codetype'</span><span class="token operator">:</span> <span class="token string">'1104'</span><span class="token punctuation">,</span>
      <span class="token comment">//base64字符串, 去掉前缀</span>
        <span class="token string-property property">'file_base64'</span><span class="token operator">:</span>  <span class="token string">'iVBORw0KGgoAAAANSUhEUgAAAF8AAAAoCAIAAAAXCbHbAAADG0lEQVR42u2aPWgVQRDHHyKoWJhgoSKIxEbBSvGjUCHpJJXREAI2ih+VlaRQUxjiE96DmDSGEERE7MTCQrEQJLVNFDWgKJIUFhGxEvRpcGB0stm73ZuZ29286Dv+Rbib3bf32//O7F2u8mN+piWXKv/wvQ1OdrXoRAT0/9JZ/+iYpX3VXktl6VT+HoUxTQKoY+MbVCLvFAIyrx5f2MTp8+32kQQOIlIuXn8GPfFgSyQ62UsAiMMoLCCOspgW6TQGbgan46HGZOTXu8Fz0qFqsnIMOmnSDSfx6YKX0NlfO4kKMr5kmVh0w0Pfn4nywOJfmHp0Dsr+ZHo6tMqmNtdLpgK6ZEcEoZOyhJs/zQRETcBKKOccBx9i4t2NywgmoC/Px0m5rVwrLjAd8+A0SUPHFDJypQLyUVzvcPaHUenw15dnqgTj6569Jco7haUhNh2R3/VPEjNPJkEIqHHvIYpTs5ilga8zh4dBQSizPM7vzmRk+ciz5fFsFNXeQUYgTj+1r1dBCt+9mv6l97bJqJACHEdfrPMM69SVvqjLKstI5p27G1bFWPy5gHLjAVBjdFZU1KQeJEbMCmufBUY6TMw0jIxArngykWhnkBs2fWkK5Wl1o+OOb2qzpxR0RCXcEwzeATp8R1Dkx741rhhihJioCfooQM3ya9veoVAogY4CDQZ7ADGrR6z3yiJAnBROJ0df94A4/RTSURRQGZ0TO9cyAQ23dYWaQGJkYco28QPipMX3O9pBeu8AIBcjE5CIDvPVvYUpwYZb2bXJaK53F4q5xFyPHYoHXbNVf+cHEP8WLnzeE4tOro8IE8EqU784gLIxHEZjl7+ZEvzH5sBcP6mkXXMxqdGIxPQR2seCZfJaMrKe64cikRLNv19bT38KxQjp1HY/pTMv2x/7vGMBivcqT20ZPh2Od+oTbaBlpjNwpC5aSmMHz8dGQ0JAFiZnVo4EqDo/goyYAkAuRvFkYcqfxhiAgA6aKD2jhZ+rm/0Llerts+ZCEzEqLx2gpB+OmIASa2XQWS5AK4CO5aBrF++jWl9VNssSa303GEy/AZkSmaIA7j4MAAAAAElFTkSuQmCC'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//固定请求头</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'User-Agent'</span><span class="token operator">:</span> <span class="token string">'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/x-www-form-urlencoded'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'complete'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> captcha <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//输出验证码信息</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>captcha<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
