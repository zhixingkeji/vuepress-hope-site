<template><div><h2 id="一-shiro简介" tabindex="-1"><a class="header-anchor" href="#一-shiro简介" aria-hidden="true">#</a> 一. shiro简介</h2>
<h3 id="_1-1-shiro-入门" tabindex="-1"><a class="header-anchor" href="#_1-1-shiro-入门" aria-hidden="true">#</a> 1.1 shiro 入门</h3>
<ul>
<li>Apache Shiro 是 Java  的一个安全（权限）框架。</li>
<li>Shiro 可以非常容易的开发出足够好的应用，其不仅可以用在 JavaSE 环境，也可以用在 JavaEE 环境。</li>
<li>Shiro 可以完成：认证、授权、加密、会话管理、与Web 集成、缓存 等。</li>
</ul>
<h3 id="_1-2-shiro-功能" tabindex="-1"><a class="header-anchor" href="#_1-2-shiro-功能" aria-hidden="true">#</a> 1.2 shiro 功能</h3>
<p><strong>Subject</strong>：主体，可以看到主体可以是任何可以与应用交互的“用户”；</p>
<p><strong>SecurityManager</strong>：相当于SpringMVC中的DispatcherServlet或者Struts2中的FilterDispatcher；是Shiro的心脏；所有具体的交互都通过SecurityManager进行控制；它管理着所有Subject、且负责进行认证和授权、及会话、缓存的管理。</p>
<p><strong>Authenticator</strong>：认证器，负责主体认证的，这是一个扩展点，如果用户觉得Shiro默认的不好，可以自定义实现；其需要认证策略（Authentication Strategy），即什么情况下算用户认证通过了；</p>
<p><strong>Authrizer</strong>：授权器，或者访问控制器，用来决定主体是否有权限进行相应的操作；即控制着用户能访问应用中的哪些功能；</p>
<p><strong>Realm</strong>：可以有1个或多个Realm，可以认为是安全实体数据源，即用于获取安全实体的；可以是JDBC实现，也可以是LDAP实现，或者内存实现等等；由用户提供；注意：Shiro不知道你的用户/权限存储在哪及以何种格式存储；所以我们一般在应用中都需要实现自己的Realm；</p>
<p><strong>Session Manager</strong>：会话管理，即用户登录后就是一次会话，在没有退出之前，它的所有信息都在会话中；会话可以是普通JavaSE环境的，也可以是如Web环境的；</p>
<p><strong>Cryptography</strong>：加密，保护数据的安全性，如密码加密存储到数据库，而不是明文存储；</p>
<p><strong>Web Support</strong>：Web支持，可以非常容易的集成到Web环境；</p>
<p><strong>CacheManager</strong>：缓存，比如用户登录后，其用户信息、拥有的角色/权限不必每次去查，这样可以提高效率；</p>
<p><strong>Concurrency</strong>：shiro支持多线程应用的并发验证，即如在一个线程中开启另一个线程，能把权限自动传播过去；</p>
<p><strong>Testing</strong>：提供测试支持；</p>
<p><strong>Run As</strong>：允许一个用户假装为另一个用户（如果他们允许）的身份进行访问；</p>
<p><strong>Remember Me</strong>：记住我，这个是非常常见的功能，即一次登录后，下次再来的话不用登录了。</p>
<h2 id="二-过滤器" tabindex="-1"><a class="header-anchor" href="#二-过滤器" aria-hidden="true">#</a> 二. 过滤器</h2>
<h3 id="_2-1-过滤级别" tabindex="-1"><a class="header-anchor" href="#_2-1-过滤级别" aria-hidden="true">#</a> 2.1 过滤级别</h3>
<p>anon，authcBasic，auchc，user 是认证过滤器。</p>
<p>perms，roles，ssl，rest，port 是授权过滤器。</p>
<p>使用方法</p>
<p>/admins/=anon # 表示该 uri 可以匿名访问
/admins/=auth # 表示该 uri 需要认证才能访问
/admins/=authcBasic # 表示该 uri 需要 httpBasic 认证
/admins/=perms[user:add:] # 表示该 uri 需要认证用户拥有 user:add: 权限才能访问
/admins/=port[8081] # 表示该 uri 需要使用 8081 端口
/admins/=rest[user] # 相当于 /admins/=perms[user:method]，其中，method 表示 get、post、delete 等
/admins/=roles[admin] # 表示该 uri 需要认证用户拥有 admin 角色才能访问
/admins/=ssl # 表示该 uri 需要使用 https 协议
/admins/=user # 表示该 uri 需要认证或通过记住我认证才能访问
/logout=logout # 表示注销,可以当作固定配置</p>
<h3 id="_2-2-异常处理" tabindex="-1"><a class="header-anchor" href="#_2-2-异常处理" aria-hidden="true">#</a> 2.2 异常处理</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>
<span class="token class-name">Subject</span> subject <span class="token operator">=</span> <span class="token class-name">SecurityUtils</span><span class="token punctuation">.</span><span class="token function">getSubject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>subject<span class="token punctuation">.</span><span class="token function">isAuthenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">UsernamePasswordToken</span> usernamePasswordToken <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UsernamePasswordToken</span><span class="token punctuation">(</span>userName<span class="token punctuation">,</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
  usernamePasswordToken<span class="token punctuation">.</span><span class="token function">setRememberMe</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">try</span><span class="token punctuation">{</span>
     subject<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>usernamePasswordToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">UnknownAccountException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"账户不存在:"</span><span class="token operator">+</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">LockedAccountException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"账户被锁定:"</span><span class="token operator">+</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IncorrectCredentialsException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"密码不匹配:"</span><span class="token operator">+</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-相关配置" tabindex="-1"><a class="header-anchor" href="#三-相关配置" aria-hidden="true">#</a> 三. 相关配置</h2>
<h3 id="_3-1-安装依赖" tabindex="-1"><a class="header-anchor" href="#_3-1-安装依赖" aria-hidden="true">#</a> 3.1 安装依赖</h3>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.shiro<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>shiro-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.4.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-配置realm及多realm的认证策略" tabindex="-1"><a class="header-anchor" href="#_3-2-配置realm及多realm的认证策略" aria-hidden="true">#</a> 3.2 配置Realm及多Realm的认证策略</h3>
<h3 id="_3-3-配置cache" tabindex="-1"><a class="header-anchor" href="#_3-3-配置cache" aria-hidden="true">#</a> 3.3 配置Cache</h3>
<h3 id="_3-4-配置securitymanager" tabindex="-1"><a class="header-anchor" href="#_3-4-配置securitymanager" aria-hidden="true">#</a> 3.4 配置securityManager</h3>
<h3 id="_3-5-配置shirofilterfactorybean" tabindex="-1"><a class="header-anchor" href="#_3-5-配置shirofilterfactorybean" aria-hidden="true">#</a> 3.5 配置shiroFilterFactoryBean</h3>
<h2 id="第四章-realm的认证和授权" tabindex="-1"><a class="header-anchor" href="#第四章-realm的认证和授权" aria-hidden="true">#</a> 第四章 realm的认证和授权</h2>
<h3 id="_4-1-身份认证" tabindex="-1"><a class="header-anchor" href="#_4-1-身份认证" aria-hidden="true">#</a> 4.1 身份认证</h3>
<h3 id="_4-2-realm" tabindex="-1"><a class="header-anchor" href="#_4-2-realm" aria-hidden="true">#</a> 4.2 Realm</h3>
<h3 id="_4-3-编码散列算法" tabindex="-1"><a class="header-anchor" href="#_4-3-编码散列算法" aria-hidden="true">#</a> 4.3 编码散列算法</h3>
<h3 id="_4-4-reaml使用散列算法" tabindex="-1"><a class="header-anchor" href="#_4-4-reaml使用散列算法" aria-hidden="true">#</a> 4.4 Reaml使用散列算法</h3>
<h3 id="_4-5-身份授权" tabindex="-1"><a class="header-anchor" href="#_4-5-身份授权" aria-hidden="true">#</a> 4.5 身份授权</h3>
<h2 id="web项目集成shiro" tabindex="-1"><a class="header-anchor" href="#web项目集成shiro" aria-hidden="true">#</a> web项目集成shiro</h2>
<h2 id="springboot集成shiro" tabindex="-1"><a class="header-anchor" href="#springboot集成shiro" aria-hidden="true">#</a> springboot集成shiro</h2>
<p>实现realm的缓存机制</p>
<p>分布式会话管理</p>
<p>限制密码重试次数</p>
<p>在线并发登录人数控制</p>
<h2 id="jwt集成shiro" tabindex="-1"><a class="header-anchor" href="#jwt集成shiro" aria-hidden="true">#</a> jwt集成shiro</h2>
<p>分布式统一权限系统</p>
</div></template>
