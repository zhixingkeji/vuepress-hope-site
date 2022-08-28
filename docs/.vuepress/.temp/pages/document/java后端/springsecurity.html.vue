<template><div><p>title: springsecurity教程</p>
<p>date: 2021-11-15 21:18:53</p>
<h2 id="第1章-简介" tabindex="-1"><a class="header-anchor" href="#第1章-简介" aria-hidden="true">#</a> 第1章 简介</h2>
<h3 id="_1-1-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-简介" aria-hidden="true">#</a> 1.1   简介</h3>
<p>Spring Security是为基于Spring的应用程序提供声明式安全保护的安全性框架。</p>
<p>它提供了完整的安全性解决方案，能够在web请求级别和方法调用级别处理身份证验证和授权。</p>
<p>因为基于Spring框架，所以Spring Security充分利用了依赖注入和面向切面的技术。</p>
<h3 id="_1-2-全部过滤器" tabindex="-1"><a class="header-anchor" href="#_1-2-全部过滤器" aria-hidden="true">#</a> 1.2 全部过滤器</h3>
<p><img src="@source/document/java后端/asset/image-20220514113227577.png" alt="image-20220514113227577" loading="lazy"></p>
<p>其中重要的过滤器有</p>
<p>UsernamePasswordAuthenticationFilter 用户名密码认证过滤器</p>
<p>ExceptionTranslationFilter  异常过滤器</p>
<p>FilterSecurityInterceptor  授权过滤器</p>
<h3 id="_1-3-内部加载流程" tabindex="-1"><a class="header-anchor" href="#_1-3-内部加载流程" aria-hidden="true">#</a> 1.3 内部加载流程</h3>
<h3 id="_1-4-权限判断原理" tabindex="-1"><a class="header-anchor" href="#_1-4-权限判断原理" aria-hidden="true">#</a> 1.4 权限判断原理</h3>
<h3 id="_1-5-登录验证原理" tabindex="-1"><a class="header-anchor" href="#_1-5-登录验证原理" aria-hidden="true">#</a> 1.5 登录验证原理</h3>
<p><img src="@source/document/java后端/asset/image-20220514114523147.png" alt="image-20220514114523147" loading="lazy"></p>
<p><img src="@source/document/java后端/asset/image-20220514115138765.png" alt="image-20220514115138765" loading="lazy"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// 查询用户数据库
UserDetailsService

//数据加密接口
PasswordEncoder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第2章-登录" tabindex="-1"><a class="header-anchor" href="#第2章-登录" aria-hidden="true">#</a> 第2章 登录</h2>
<h3 id="_2-1-入门案例" tabindex="-1"><a class="header-anchor" href="#_2-1-入门案例" aria-hidden="true">#</a> 2.1  入门案例</h3>
<p>添加依赖</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-security<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建Spring Security的配置类</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>security<span class="token punctuation">.</span>springsecurity<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>
 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>authentication<span class="token punctuation">.</span>builders<span class="token punctuation">.</span></span><span class="token class-name">AuthenticationManagerBuilder</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>web<span class="token punctuation">.</span>builders<span class="token punctuation">.</span></span><span class="token class-name">HttpSecurity</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>web<span class="token punctuation">.</span>configuration<span class="token punctuation">.</span></span><span class="token class-name">EnableWebSecurity</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>web<span class="token punctuation">.</span>configuration<span class="token punctuation">.</span></span><span class="token class-name">WebSecurityConfigurerAdapter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>bcrypt<span class="token punctuation">.</span></span><span class="token class-name">BCryptPasswordEncoder</span></span><span class="token punctuation">;</span>
 
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableWebSecurity</span>  <span class="token comment">//启用Web安全功能</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecurityConfig</span> <span class="token keyword">extends</span> <span class="token class-name">WebSecurityConfigurerAdapter</span> <span class="token punctuation">{</span>
   
  
  <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        http
                <span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">//访问"/"和"/home"路径的请求都允许</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token string">"/home"</span><span class="token punctuation">,</span><span class="token string">"/staff"</span><span class="token punctuation">,</span><span class="token string">"/staff/*"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">//而其他的请求都需要认证</span>
                <span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">//修改Spring Security默认的登陆界面</span>
                <span class="token punctuation">.</span><span class="token function">formLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">loginPage</span><span class="token punctuation">(</span><span class="token string">"/login"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
  
 <span class="token comment">//1.通过配置类来定义用户信息 configure</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">AuthenticationManagerBuilder</span> auth<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token comment">//基于内存来存储用户信息</span>
        auth<span class="token punctuation">.</span><span class="token function">inMemoryAuthentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">passwordEncoder</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BCryptPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withUser</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BCryptPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token string">"123"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">roles</span><span class="token punctuation">(</span><span class="token string">"USER"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withUser</span><span class="token punctuation">(</span><span class="token string">"admin"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BCryptPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token string">"456"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">roles</span><span class="token punctuation">(</span><span class="token string">"USER"</span><span class="token punctuation">,</span><span class="token string">"ADMIN"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
  
  <span class="token comment">//2.通过数据库方式实现登录</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">UserDetailsService</span> <span class="token function">users</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">UserDetails</span> user <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">username</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string">"{bcrypt}$2a$10$GRLdNijSQMUvl/au9ofL.eDwmoohzzS7.rmNSJZ.0FxO/BTk76klW"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">roles</span><span class="token punctuation">(</span><span class="token string">"USER"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">UserDetails</span> admin <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">username</span><span class="token punctuation">(</span><span class="token string">"admin"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string">"{bcrypt}$2a$10$GRLdNijSQMUvl/au9ofL.eDwmoohzzS7.rmNSJZ.0FxO/BTk76klW"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">roles</span><span class="token punctuation">(</span><span class="token string">"USER"</span><span class="token punctuation">,</span> <span class="token string">"ADMIN"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">InMemoryUserDetailsManager</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> admin<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

  
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">PasswordEncoder</span> <span class="token function">passwordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BCryptPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
  
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Controller层</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>security<span class="token punctuation">.</span>springsecurity<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>
 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Controller</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
 
<span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecurityController</span> <span class="token punctuation">{</span>
 
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"/home"</span><span class="token punctuation">,</span><span class="token string">"/"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">home</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"home"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/hello"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/login"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"login"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注册页</p>
<p>登录页</p>
<p>首页(权限页面)</p>
<p>退出</p>
<p>记住我功能</p>
<p>csrf配置</p>
<h2 id="第3章-授权" tabindex="-1"><a class="header-anchor" href="#第3章-授权" aria-hidden="true">#</a> 第3章 授权</h2>
<h3 id="_3-1-在配置类中定义授权规则" tabindex="-1"><a class="header-anchor" href="#_3-1-在配置类中定义授权规则" aria-hidden="true">#</a> 3.1 在配置类中定义授权规则</h3>
<p>授权</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>     http<span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">//登录,注册,错误页面不需要权限</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">"/login.html"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">"/error.html"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">"/all.html"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">"/register"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


                <span class="token comment">//权限匹配, 必须拥有某个指定的权限, 也就是说如果用户的权限表里有多个权限,使用该方法无法匹配</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">"/vip.html"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasAuthority</span><span class="token punctuation">(</span><span class="token string">"admin"</span><span class="token punctuation">)</span>
                <span class="token comment">//权限匹配,拥有以下任意一种权限即可访问,适合某个用户有多种权限时</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">"/vip.html"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasAnyAuthority</span><span class="token punctuation">(</span><span class="token string">"admin"</span><span class="token punctuation">,</span><span class="token string">"admin2"</span><span class="token punctuation">)</span>


<span class="token comment">//               角色匹配 , 声明的时候要加ROLE_, 在这里写不能加,点开源码看到自动添加前缀</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">"/vip.html"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasRole</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">"/vip.html"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasAnyRole</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">,</span><span class="token string">"123"</span><span class="token punctuation">)</span>


<span class="token comment">//                IP地址匹配</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">"/vip.html"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasIpAddress</span><span class="token punctuation">(</span><span class="token string">"127.0.0.1"</span><span class="token punctuation">)</span>


<span class="token comment">//                放行静态资源</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">"/js/**"</span><span class="token punctuation">,</span><span class="token string">"/css/**"</span><span class="token punctuation">,</span><span class="token string">"/images/**"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//                其他所有请求都要认证</span>
                <span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-在注解使用授权规则" tabindex="-1"><a class="header-anchor" href="#_3-2-在注解使用授权规则" aria-hidden="true">#</a> 3.2 在注解使用授权规则</h3>
<p>开启注解</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@EnableGlobalMethodSecurity</span><span class="token punctuation">(</span>securedEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在控制器上</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//判断用户是否有某种角色</span>
# 注意需要手动加上前缀 <span class="token constant">ROLE_</span>
<span class="token annotation punctuation">@Secured</span><span class="token punctuation">(</span><span class="token string">"ROLE_abc"</span><span class="token punctuation">)</span>  
<span class="token annotation punctuation">@Secured</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"ROLE_abc"</span><span class="token punctuation">,</span><span class="token string">"ROLE_管理员"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  
  
<span class="token comment">//在方法执行之前判断 用户是否有某种角色  </span>
<span class="token annotation punctuation">@PreAuthorize</span><span class="token punctuation">(</span><span class="token string">"hasRole('abc')"</span><span class="token punctuation">)</span>

<span class="token comment">//在方法执行之后判断 </span>
  <span class="token annotation punctuation">@PostAuthorize</span><span class="token punctuation">(</span><span class="token string">"hasRole('abc')"</span><span class="token punctuation">)</span>
  
<span class="token comment">// 参数验证</span>
<span class="token annotation punctuation">@PreFilter</span>
  
<span class="token comment">// 返回值过滤</span>
<span class="token annotation punctuation">@PostFilter</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第4章-微服务" tabindex="-1"><a class="header-anchor" href="#第4章-微服务" aria-hidden="true">#</a> 第4章 微服务</h2>
</div></template>
