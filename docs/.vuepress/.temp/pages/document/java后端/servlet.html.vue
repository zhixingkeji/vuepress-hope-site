<template><div><h2 id="第1章-简介" tabindex="-1"><a class="header-anchor" href="#第1章-简介" aria-hidden="true">#</a> 第1章 简介</h2>
<h3 id="_1-1-服务器" tabindex="-1"><a class="header-anchor" href="#_1-1-服务器" aria-hidden="true">#</a> 1.1 服务器</h3>
<p>开源服务器
tomcat，jetty</p>
<h3 id="_1-2-创建servlet" tabindex="-1"><a class="header-anchor" href="#_1-2-创建servlet" aria-hidden="true">#</a> 1.2 创建servlet</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> myservlet <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-web-xml配置" tabindex="-1"><a class="header-anchor" href="#_1-3-web-xml配置" aria-hidden="true">#</a> 1.3 web.xml配置</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>加载时机：
<span class="token operator">&lt;</span>load<span class="token operator">-</span>on<span class="token operator">-</span>startup<span class="token operator">></span>
<span class="token number">0</span>或正数：启动程序时创建，越小优先级越高
负数：访问时才创建
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-注解" tabindex="-1"><a class="header-anchor" href="#_1-4-注解" aria-hidden="true">#</a> 1.4 注解</h3>
<p>@WebServlet(value=&quot;/home&quot;,loadOnStartup=0)</p>
<p>有注解之后就可以不用web.xml</p>
<p>老版本2.5以下不支持注解</p>
<p>注解和web.xml同时生效</p>
<h2 id="第2章-request" tabindex="-1"><a class="header-anchor" href="#第2章-request" aria-hidden="true">#</a> 第2章  request</h2>
<h3 id="_2-1-常用方法" tabindex="-1"><a class="header-anchor" href="#_2-1-常用方法" aria-hidden="true">#</a> 2.1 常用方法</h3>
<ol>
<li>获取请求时的完整路径</li>
<li>获取请求时的部分路径</li>
<li>获取请求时的参数字符串</li>
<li>获取请求方式</li>
<li>获取当前协议版本</li>
<li>获取站点名</li>
</ol>
<p><img src="@source/document/java后端/asset/servlet教程-1636977542181.png" alt="截1.png" loading="lazy"></p>
<h3 id="_2-2-获取请求参数" tabindex="-1"><a class="header-anchor" href="#_2-2-获取请求参数" aria-hidden="true">#</a> 2.2 获取请求参数</h3>
<p><img src="@source/document/java后端/asset/servlet教程-1636980381203.png" alt="截11图.png" loading="lazy"></p>
<h3 id="_2-3-解决乱码问题" tabindex="-1"><a class="header-anchor" href="#_2-3-解决乱码问题" aria-hidden="true">#</a> 2.3 解决乱码问题</h3>
<p><code v-pre>req.setCharacterEncoding(&quot;UTF-8&quot;);</code></p>
<h3 id="_2-4-请求转发" tabindex="-1"><a class="header-anchor" href="#_2-4-请求转发" aria-hidden="true">#</a> 2.4 请求转发</h3>
<p>特点：</p>
<p>1）服务器行为</p>
<p>2）地址栏不发生改变</p>
<p>3）只有一次请求</p>
<p>4）可以多次跳转，数据一直共享</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//可以调转到servlet 或者WEB-INF目下的文件</span>
req<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">"s02"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">"index.html"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-域对象" tabindex="-1"><a class="header-anchor" href="#_2-5-域对象" aria-hidden="true">#</a> 2.5 域对象</h3>
<p>在01里设置内容，请求转发</p>
<p>在02里接收内容</p>
<p><img src="@source/document/java后端/asset/servlet教程-1636980502238.png" alt="i12312e.png" loading="lazy"></p>
<h2 id="第3章-reponse" tabindex="-1"><a class="header-anchor" href="#第3章-reponse" aria-hidden="true">#</a> 第3章 reponse</h2>
<h3 id="_3-1-response响应数据" tabindex="-1"><a class="header-anchor" href="#_3-1-response响应数据" aria-hidden="true">#</a> 3.1 response响应数据</h3>
<p>不能同时使用
<img src="@source/document/java后端/asset/servlet教程-1636980567156.png" alt="ima123ge.png" loading="lazy"></p>
<h3 id="_3-2-解决乱码问题" tabindex="-1"><a class="header-anchor" href="#_3-2-解决乱码问题" aria-hidden="true">#</a> 3.2 解决乱码问题</h3>
<p><img src="@source/document/java后端/asset/servlet教程-1636980627675.png" alt="i1231mage.png" loading="lazy"></p>
<h3 id="_3-3-重定向" tabindex="-1"><a class="header-anchor" href="#_3-3-重定向" aria-hidden="true">#</a> 3.3 重定向</h3>
<p>特点：</p>
<p>1）客服端行为</p>
<p>2）两次请求</p>
<p>3）地址栏发生改变</p>
<p>4）参数不能共享</p>
<p><img src="@source/document/java后端/asset/servlet教程-1636980679905.png" alt="im231age.png" loading="lazy"></p>
<h3 id="_3-4-重定向和请求转发的区别" tabindex="-1"><a class="header-anchor" href="#_3-4-重定向和请求转发的区别" aria-hidden="true">#</a> 3.4 重定向和请求转发的区别</h3>
<p><img src="@source/document/java后端/asset/servlet教程-1636980688456.png" alt="123image.png" loading="lazy"></p>
<h2 id="第4章-cookie" tabindex="-1"><a class="header-anchor" href="#第4章-cookie" aria-hidden="true">#</a> 第4章 cookie</h2>
<h3 id="_4-1-cookie简介" tabindex="-1"><a class="header-anchor" href="#_4-1-cookie简介" aria-hidden="true">#</a> 4.1 cookie简介</h3>
<p>浏览器技术，存在客户端</p>
<p>应用：记住密码，广告优化</p>
<h3 id="_4-2-创建和发送cookie" tabindex="-1"><a class="header-anchor" href="#_4-2-创建和发送cookie" aria-hidden="true">#</a> 4.2 创建和发送cookie</h3>
<p>创建cookie对象</p>
<p>Cookie cookie = new Cookie(&quot;uname&quot;,&quot;zhangsan&quot;)</p>
<p>发送cookie对象</p>
<p>response.addCookie(cookie)</p>
<h3 id="_4-3-获取cookie" tabindex="-1"><a class="header-anchor" href="#_4-3-获取cookie" aria-hidden="true">#</a> 4.3 获取cookie</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Cookie</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cookies <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getCookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>cookies <span class="token operator">!=</span><span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> cookies<span class="token punctuation">.</span>length<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Cookie</span> e <span class="token operator">:</span> cookies<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printIn</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printIn</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-cookie到期时间" tabindex="-1"><a class="header-anchor" href="#_4-4-cookie到期时间" aria-hidden="true">#</a> 4.4 cookie到期时间</h3>
<p>负整数</p>
<p>不存储, 浏览器关闭就会消失</p>
<p>正整数</p>
<p>表示存储的秒数</p>
<p>零</p>
<p>表示删除该cookie</p>
<p><img src="@source/document/java后端/asset/servlet教程-1636981224098.png" alt="11mage.png" loading="lazy"></p>
<h3 id="_4-5-注意事项" tabindex="-1"><a class="header-anchor" href="#_4-5-注意事项" aria-hidden="true">#</a> 4.5 注意事项</h3>
<p>1）cookie仅保存在当前浏览器中，不能跨浏览器</p>
<p>2）中文问题</p>
<p><img src="@source/document/java后端/asset/servlet教程-1636981266604.png" alt="image12.png" loading="lazy"></p>
<p>3）同名问题，直接覆盖原有的</p>
<p>4）浏览器中cookie的存放数量，有上限的，由浏览器决定，后期结合session跟踪</p>
<h3 id="_4-6-路径" tabindex="-1"><a class="header-anchor" href="#_4-6-路径" aria-hidden="true">#</a> 4.6 路径</h3>
<p><img src="@source/document/java后端/asset/servlet教程-1636981379204.png" alt="13image.png" loading="lazy"></p>
<p><img src="@source/document/java后端/asset/servlet教程-1636981385033.png" alt="14image.png" loading="lazy"></p>
<p><img src="@source/document/java后端/asset/servlet教程-1636981356877.png" alt="15image.png" loading="lazy"></p>
<p><img src="@source/document/java后端/asset/servlet教程-1636981392517.png" alt="16image.png" loading="lazy"></p>
<h2 id="第5章-session会话" tabindex="-1"><a class="header-anchor" href="#第5章-session会话" aria-hidden="true">#</a> 第5章 session会话</h2>
<h3 id="_5-1-session" tabindex="-1"><a class="header-anchor" href="#_5-1-session" aria-hidden="true">#</a> 5.1 session</h3>
<p>有就显示，没有就新建一个</p>
<p>session底层依赖cookie</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">HttpSession</span> session <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getsession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> id <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-域对象" tabindex="-1"><a class="header-anchor" href="#_5-2-域对象" aria-hidden="true">#</a> 5.2 域对象</h3>
<p>只要没有销毁，数据就一直共享，不管是转发还是重定向</p>
<p>request域对象重定向后失效</p>
<p>创建session</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">HttpSession</span> session <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getsession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
session<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"uname"</span><span class="token punctuation">,</span><span class="token string">"admin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-销毁" tabindex="-1"><a class="header-anchor" href="#_5-3-销毁" aria-hidden="true">#</a> 5.3 销毁</h3>
<p>默认30分钟，可以在web.xml项目里更改，但是会影响整个项目</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>session-config</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>session-timeout</span><span class="token punctuation">></span></span>30<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>session-timeout</span><span class="token punctuation">></span></span>>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>session-config</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义时间</p>
<p><code v-pre>session.setMaxInactiveInterval(15)</code></p>
<p>立刻销毁</p>
<p><code v-pre>session.invalidate()</code></p>
<p>关闭浏览器</p>
<p>关闭浏览器会话失效</p>
<p>关闭服务器</p>
<p>关闭服务器会话失效</p>
<h2 id="第6章-servletcontext对象" tabindex="-1"><a class="header-anchor" href="#第6章-servletcontext对象" aria-hidden="true">#</a> 第6章 ServletContext对象</h2>
<h3 id="_6-1-context对象" tabindex="-1"><a class="header-anchor" href="#_6-1-context对象" aria-hidden="true">#</a> 6.1 context对象</h3>
<p>每个web应用只有一个context对象，</p>
<p>作用：共享数据</p>
<p>只要服务器不关闭，context就存在</p>
<p><img src="@source/document/java后端/asset/servlet教程-1636981875986.png" alt="23image.png" loading="lazy"></p>
<h3 id="_6-2-获取" tabindex="-1"><a class="header-anchor" href="#_6-2-获取" aria-hidden="true">#</a> 6.2 获取</h3>
<p><img src="@source/document/java后端/asset/servlet教程-1636981879851.png" alt="24image.png" loading="lazy"></p>
<h3 id="_6-3-常用方法" tabindex="-1"><a class="header-anchor" href="#_6-3-常用方法" aria-hidden="true">#</a> 6.3 常用方法</h3>
<p><img src="@source/document/java后端/asset/servlet教程-1636981888746.png" alt="25image.png" loading="lazy"></p>
<h2 id="第7章-文件上传下载" tabindex="-1"><a class="header-anchor" href="#第7章-文件上传下载" aria-hidden="true">#</a> 第7章 文件上传下载</h2>
<h3 id="_7-1-文件上传" tabindex="-1"><a class="header-anchor" href="#_7-1-文件上传" aria-hidden="true">#</a> 7.1 文件上传</h3>
<p>前台发送文件，后台接收保存文件</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>upload<span class="token punctuation">"</span></span> <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multipart/form-data<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    姓名： <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>uname<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
    文件： <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myfile<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>提交<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>servletstudy</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span> value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"/upload"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@MultipartConfig</span>   <span class="token comment">//文件上传的注解</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> upload <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"文件上传"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//解决中文乱码问题</span>
        req<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//获取参数</span>
        <span class="token class-name">String</span> uname <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">"uname"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>uname<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//获取part对象</span>
        <span class="token class-name">Part</span> part <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getPart</span><span class="token punctuation">(</span><span class="token string">"myfile"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//得到文件名</span>
        <span class="token class-name">String</span> filename <span class="token operator">=</span> part<span class="token punctuation">.</span><span class="token function">getSubmittedFileName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//得到文件路径</span>
        <span class="token class-name">String</span> filepath <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getRealPath</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>filepath<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//上传到指定目录</span>
        part<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>filepath<span class="token operator">+</span><span class="token char">'/'</span><span class="token operator">+</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-文件下载-超链接" tabindex="-1"><a class="header-anchor" href="#_7-2-文件下载-超链接" aria-hidden="true">#</a> 7.2 文件下载（超链接）</h3>
<p>页面放在webapp下，可以直接通过浏览器地址直接访问</p>
<p>放在WEB-INF文件夹下，是受保护的，无法通过地址直接访问</p>
<p>构建项目时，把工件设置为 /s01  项目名的意思</p>
<p>外部源，是项目中的一些图片视频等资源，设置成  /s01/asset</p>
<p>超链接会自动展示txt或图片，点击后不会自动下载</p>
<p>无法识别的格式如压缩文件，点击后自动下载</p>
<p>如果需要自动下载图片，需要在标签上加 download</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--超链接方式下载--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>asset/ewshop.zip<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>压缩文件超链接方式下载<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--编程方式下载--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>from</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>downloadServlet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        文件名： <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fileName<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入要下载的文件名<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>下载<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>from</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-文件下载-后台" tabindex="-1"><a class="header-anchor" href="#_7-3-文件下载-后台" aria-hidden="true">#</a> 7.3 文件下载（后台）</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//</span>
<span class="token comment">// Source code recreated from a .class file by IntelliJ IDEA</span>
<span class="token comment">// (powered by FernFlower decompiler)</span>
<span class="token comment">//</span>

<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>servletstudy</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">WebServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletResponse</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"/downloadServlet"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> download <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"文件下载"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        req<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">"text/html;charset=UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">"fileName"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> filename <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">"fileName"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>filename <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token string">""</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>filename<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> path <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getRealPath</span><span class="token punctuation">(</span><span class="token string">"/asset/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>path <span class="token operator">+</span> filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> file<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">"application/x-msdownload"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                resp<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Content-Disposition"</span><span class="token punctuation">,</span> <span class="token string">"attachment;filename="</span> <span class="token operator">+</span> filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">InputStream</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">ServletOutputStream</span> out <span class="token operator">=</span> resp<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">boolean</span> var9 <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

                <span class="token keyword">int</span> len<span class="token punctuation">;</span>
                <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                out<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                in<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"文件不存在"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"请输入下载的文件名"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第8章-jsp模板" tabindex="-1"><a class="header-anchor" href="#第8章-jsp模板" aria-hidden="true">#</a> 第8章 JSP模板</h2>
<h3 id="_8-1-jsp基础语法" tabindex="-1"><a class="header-anchor" href="#_8-1-jsp基础语法" aria-hidden="true">#</a> 8.1 JSP基础语法</h3>
<p><strong>简介</strong></p>
<p>jsp 相比 html，html只能提供静态数据，jsp能嵌套java代码，提供动态数据</p>
<p>jsp 相比 servlet，servlet不适合数据排版，jsp作为数据视图模板来使用</p>
<p>jsp 本质其实就是一个servlet的封装</p>
<p><strong>注释</strong></p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>&lt;%-- JSP注释 --%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>java</strong>脚本</p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>&lt;%
	Sring str = &quot;hello world&quot;
     System.out.println(str);
%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-jsp的指令标签" tabindex="-1"><a class="header-anchor" href="#_8-2-jsp的指令标签" aria-hidden="true">#</a> 8.2 JSP的指令标签</h3>
<p><strong>静态包含</strong></p>
<p>将两个jsp文件合并到一起，只生成一个servlet，所以不能有同名变量，耦合高</p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>&lt;%@include file=&quot;head.jsp&quot; %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>动态包含</strong></p>
<p>生成多个源码文件，可以传入参数</p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>//不传参的  两个标签之间不能有任何内容
&lt;jsp:include page=&quot;head.jsp&quot; &gt;&lt;/jsp:include&gt;

//需要传参的
&lt;%
	String str = &quot;hello&quot;;
%&gt;

&lt;jsp:include page=&quot;head.jsp&quot; &gt;
	&lt;jsp:param name=&quot;uname&quot; value=&quot;admin&quot;/&gt;
    &lt;jsp:param name=&quot;msg&quot; value=&quot;&lt;%=str%&gt;&quot;/&gt;
&lt;/jsp:include&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-jsp的四大域对象" tabindex="-1"><a class="header-anchor" href="#_8-3-jsp的四大域对象" aria-hidden="true">#</a> 8.3 JSP的四大域对象</h3>
<p><strong>page</strong></p>
<p>只在一个页面中保存，跳转后无效</p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>&lt;%
pageContext.setAttribute(&quot;name1&quot;,&quot;zhangsan&quot;);
pageContext.getAttribute(&quot;name1&quot;)
%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>request</strong></p>
<p>只在一次请求中保存，跳转后依然有效</p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>&lt;%
request.setAttribute(&quot;name1&quot;,&quot;zhangsan&quot;);
request.getAttribute(&quot;name1&quot;)
%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>session</strong></p>
<p>在一次会话范围中，无论何种跳转都可以使用</p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>&lt;%
session.setAttribute(&quot;name1&quot;,&quot;zhangsan&quot;);
session.getAttribute(&quot;name1&quot;)
%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>application</strong></p>
<p>在整个服务器上保存</p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>&lt;%
application.setAttribute(&quot;name1&quot;,&quot;zhangsan&quot;);
application.getAttribute(&quot;name1&quot;)
%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-el表达式的使用" tabindex="-1"><a class="header-anchor" href="#_8-4-el表达式的使用" aria-hidden="true">#</a> 8.4 EL表达式的使用</h3>
<p><strong>获取简单对象</strong></p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>//获取变量
获取局部变量: ${str}
获取域对象: ${uname}   //获取域对象从 page -&gt; application查找

//如果有变量名冲突 可指定域对象
page范围: ${pageScope.uname}
request范围: ${requestScope.uname}
session范围: ${sessionScope.uname}
application范围: ${applicationScope.uname}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>获取复杂数据</strong></p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>//设置List
&lt;%
	List&lt;String&gt; list = new ArrayList&lt;&gt;();
	list.add(&quot;aaa&quot;);
	list.add(&quot;bbb&quot;);
	request.setAttribute(&quot;list&quot;,list)
%&gt;

//获取List
获取list的大小: ${list.size()}
获取list指定下标的值: ${list[1]}

//设置map
&lt;%
	Map map = new HashMap();
	map.put(&quot;aaa&quot;,1);
	map.put(&quot;bbb&quot;,&quot;22&quot;);
	request.setAttribute(&quot;map&quot;,map)
%&gt;


//获取map
${map.aaa}
${map[&quot;bbb&quot;]}


//设置javaBean
&lt;%
	User user = new User();
	user.setID(1);
	user.setUsername(&quot;wl&quot;);

	request.setAttribute(&quot;user&quot;,user)
%&gt;

//获取javaBean
获取javaBean对象: ${user}
获取javaBean对象属性: ${user.username}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>empty</strong></p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>${empty str}
${!empty str}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>EL运算</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>${a == b}
${a eq b}
${a == "cc"}
${a > b}
${a &lt; b}
${a >= b}  

${a + b}
${a - b}
${a * b}
${a / b}
      
${a &amp;&amp; b}
${a || b}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-5-jstl" tabindex="-1"><a class="header-anchor" href="#_8-5-jstl" aria-hidden="true">#</a> 8.5 JSTL</h3>
<p><strong>JSTL简介</strong></p>
<p>JSP标准标签库，定制标签类库的集合</p>
<p>根据JSTL标签所提供的功能，可以将其分为5个类别。</p>
<ul>
<li>核心标签</li>
<li>格式化标签</li>
<li>SQL 标签</li>
<li>XML 标签</li>
<li>JSTL 函数</li>
</ul>
<p><strong>标签的使用</strong></p>
<p>下载所需要的 jar包</p>
<p>jstl.jar，standard.jar</p>
<p>WEB-INF 下创建lib目录，拷贝jar包到目录下</p>
<p>idea设置项目结构，点击模块，点击依赖，点击加号</p>
<p>新增上面创建的lib目录，勾选确定</p>
<p>开头引入该依赖</p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>页面内使用</p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>&lt;c:if test=&quot;${1==1}&quot;&gt;
    如果为真,则显示该内容
&lt;/c:if&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>条件动作标签</strong></p>
<p>if 标签</p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>//test表示判断里面写条件
//var表示将结果返回给变量
//scope表示将变量放到那个域对象中
&lt;c:if test=&quot;${num &gt; 0}&quot; var=&quot;flag&quot; scope=&quot;request&quot;&gt;
    如果为真,则显示该内容
&lt;/c:if&gt; 

//查看判断的结果
${flag}

//jstl中没有else功能,但可以用完全相反的结果来实现
&lt;c:if test=&quot;${num &lt;= 0}&quot; var=&quot;flag&quot; scope=&quot;request&quot;&gt;
    如果为真,则显示该内容
&lt;/c:if&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>switch 标签</p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>&lt;c:choose&gt;
    //在choose中不能使用if标签,但在when中可以使用if标签
	&lt;c:when test=&quot;score &lt; 60&quot;&gt;
    	&lt;h2&gt;你没及格&lt;/h2&gt;
    &lt;/c:when&gt;
    
    &lt;c:when test=&quot;score == 60&quot;&gt;
    	&lt;h2&gt;及格了&lt;/h2&gt;
    &lt;/c:when&gt;
    
    &lt;c:otherwise&gt;
    	&lt;h2&gt;很优秀&lt;/h2&gt;
    &lt;/c:otherwise&gt;
&lt;/c:choose&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>迭代标签</strong></p>
<p>foreach 标签</p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>// begin=&quot;开始数&quot; end=&quot;结束数&quot; step=&quot;迭代数&quot; var=&quot;限域变量名&quot;

&lt;c:forEach begin=&quot;0&quot; end=&quot;10&quot; step=&quot;1&quot; var=&quot;i&quot;&gt;
    标题 ${i}
&lt;/c:forEach&gt;

&lt;c:forEach items=&quot;${userList}&quot;  var=&quot;user&quot;&gt;
    &lt;td&gt;${user.id}&lt;/td&gt;
       &lt;td&gt;${user.name}&lt;/td&gt;
        
&lt;/c:forEach&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>格式化动作标签</strong></p>
<p>format</p>
</div></template>
