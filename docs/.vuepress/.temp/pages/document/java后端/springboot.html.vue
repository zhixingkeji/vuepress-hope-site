<template><div><h2 id="第1章-基础入门" tabindex="-1"><a class="header-anchor" href="#第1章-基础入门" aria-hidden="true">#</a> 第1章  基础入门</h2>
<h3 id="_1-1-spring和springboot" tabindex="-1"><a class="header-anchor" href="#_1-1-spring和springboot" aria-hidden="true">#</a> 1.1 spring和springboot</h3>
<p>SpringBoot优点</p>
<p>​	创建独立的spring应用</p>
<p>​	内嵌tomcat服务器</p>
<p>​	自动starer依赖</p>
<p>​	自动配置spring和第三方功能</p>
<p>​	生产级别的监控，健康检查及外部化配置</p>
<p>​	无代码生成，无需编写xml</p>
<h3 id="_1-2-快速体验-springboot" tabindex="-1"><a class="header-anchor" href="#_1-2-快速体验-springboot" aria-hidden="true">#</a> 1.2 快速体验 springboot</h3>
<p>​	@RestController   代表@responsebody和@controller</p>
<p>​	@GetMapping(&quot;/hello&quot;)   响应get请求</p>
<p>​	@Configuration  注册配置类</p>
<p>​	@Conditional   条件装配</p>
<p>​	@ImportResources  导入xml配置文件</p>
<p>​	@Component  注册spring组件</p>
<p>​	@ConfigurationProperties（prefix=“user”）自动装配</p>
<p>​	@Value 自动装配</p>
<h3 id="_1-3-自动配置原理入门" tabindex="-1"><a class="header-anchor" href="#_1-3-自动配置原理入门" aria-hidden="true">#</a> 1.3 自动配置原理入门</h3>
<p>自动配置版本号，可以在pom的properties标签里修改版本号</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mysql.version</span><span class="token punctuation">></span></span>5.1.34<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mysql.verison</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建父项目，只有pom文件就可以，新建模块为子项目</p>
<p>子项目的parent要引用父项目的坐标</p>
<p>父项目的pom文件只负责管理依赖，使用 <code v-pre>&lt;DepencyManagement&gt;</code></p>
<p>依赖排除</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependce</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  //要排除的依赖
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclutions</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclution</span><span class="token punctuation">></span></span>
   			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclution</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclutions</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependce</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-lombok简化开发" tabindex="-1"><a class="header-anchor" href="#_1-4-lombok简化开发" aria-hidden="true">#</a> 1.4 lombok简化开发</h3>
<ul>
<li><code v-pre>@ToString</code></li>
</ul>
<p>自动生成 Tostring 方法</p>
<ul>
<li><code v-pre>@Getter/@Setter</code></li>
</ul>
<p>自动生成 get、set 方法</p>
<ul>
<li><code v-pre>@Data</code></li>
</ul>
<p>包含：<code v-pre>@ToString</code>, <code v-pre>@EqualsAndHashCode</code>, <code v-pre>@Getter</code>，<code v-pre>@Setter</code> ，<code v-pre>@RequiredArgsConstructor</code></p>
<ul>
<li>
<p><code v-pre>@NoArgsConstructor</code>  <code v-pre>@RequiredArgsConstructor</code>  <code v-pre>@AllArgsConstructor</code></p>
<p>生成无参的构造函数，生成带有必需参数的构造函数，生成全参的构造函数</p>
</li>
<li>
<p><code v-pre>@slf4j</code></p>
<p>自动生成该类的 log 静态常量，要打日志就可以直接打，不用再手动 new log 静态常量了</p>
</li>
<li>
<p><code v-pre>@Builder</code></p>
<p>自动生成流式 set 值写法，从此之后再也不用写一堆 setter 了</p>
</li>
<li>
<p><code v-pre>@EqualsAndHashCode</code></p>
</li>
</ul>
<p>自动生成 equals(Object other) 和 hashcode() 方法，包括所有非静态变量和非 transient 的变量</p>
<ul>
<li><code v-pre>@Value</code></li>
</ul>
<p>类似与@Data，但他会把所有的变量都设成 final 的 ，注意没有@setter</p>
<p>包含：<code v-pre>@Getter</code>，<code v-pre>@ToString</code>，<code v-pre>@EqualsAndHashCode</code>，<code v-pre>@RequiredArgsConstructor</code></p>
<h3 id="_1-5-热部署" tabindex="-1"><a class="header-anchor" href="#_1-5-热部署" aria-hidden="true">#</a> 1.5 热部署</h3>
<p>dev-tools 是热重启</p>
<p>jrebel 是热重载</p>
<p>破解方法</p>
<p>百度有~非常简单</p>
<h3 id="_1-6-spring-initailizr" tabindex="-1"><a class="header-anchor" href="#_1-6-spring-initailizr" aria-hidden="true">#</a> 1.6 spring Initailizr</h3>
<p>web 提供mvc依赖</p>
<p>mysql 提供mysql驱动依赖</p>
<h2 id="第2章-配置文件-application-yml" tabindex="-1"><a class="header-anchor" href="#第2章-配置文件-application-yml" aria-hidden="true">#</a> 第2章  配置文件 application.yml</h2>
<h3 id="_2-1-不同环境的配置文件" tabindex="-1"><a class="header-anchor" href="#_2-1-不同环境的配置文件" aria-hidden="true">#</a> 2.1 不同环境的配置文件</h3>
<p>application.properties：主配置文件</p>
<p>application-dev.properties：开发环境配置文件</p>
<p>application-test.properties：测试环境配置文件</p>
<p>application-prod.properties：生产环境配置文件</p>
<p><code v-pre>server.port=8080 </code></p>
<p><code v-pre>spring.profiles.active=prod  //激活指定的配置文件</code></p>
<h3 id="_2-2-配置文件的格式" tabindex="-1"><a class="header-anchor" href="#_2-2-配置文件的格式" aria-hidden="true">#</a> 2.2 配置文件的格式</h3>
<p>配置文件加载顺序 : properties &gt; yml &gt; yaml</p>
<p>配置按优先级覆盖 : 重叠配置按加载顺序覆盖，其余的互补</p>
<p>企业开发主流使用 yml 格式</p>
<h3 id="_2-3-配置文件的表示" tabindex="-1"><a class="header-anchor" href="#_2-3-配置文件的表示" aria-hidden="true">#</a> 2.3 配置文件的表示</h3>
<ol>
<li>表示字符串</li>
</ol>
<p>字符串不需要加引号</p>
<p>单双引号包裹的字符串内可以包含空格, 但是会触发转义如 <code v-pre>\t \n</code>等</p>
<ol start="2">
<li>yml 表示对象</li>
</ol>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">key0</span><span class="token punctuation">:</span>
    <span class="token key atrule">key1</span><span class="token punctuation">:</span> value1
    <span class="token key atrule">key2</span><span class="token punctuation">:</span> value2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>数组</li>
</ol>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">likes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>game<span class="token punctuation">,</span>music<span class="token punctuation">,</span>sleep<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4">
<li>数据引用</li>
</ol>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">baseUrl</span><span class="token punctuation">:</span> c<span class="token punctuation">:</span>\windows
<span class="token key atrule">tempUrl</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>baseUrl<span class="token punctuation">}</span>\temp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-配置文件内的提示功能" tabindex="-1"><a class="header-anchor" href="#_2-4-配置文件内的提示功能" aria-hidden="true">#</a> 2.4 配置文件内的提示功能</h3>
<p>依赖 spring-boot-configuration-processor</p>
<p>如果还不显示找到 Project Structure 中的 Facets 右边的小绿叶图标</p>
<h3 id="_2-5-控制器层读取配置文件的内容" tabindex="-1"><a class="header-anchor" href="#_2-5-控制器层读取配置文件的内容" aria-hidden="true">#</a> 2.5 控制器层读取配置文件的内容</h3>
<p>只能一条一条读取</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookController</span><span class="token punctuation">{</span>
  <span class="token comment">//使用该注解 可以读取到配置文件yml中的信息</span>
  <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${country}"</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> countryName<span class="token punctuation">;</span>
  
  <span class="token comment">//读取多级属性</span>
   <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${country.name}"</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> countryName<span class="token punctuation">;</span>
  
  <span class="token comment">//读取列表中第2个数据</span>
   <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${country[1]}"</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> countryName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把所有配置封装到Environment对象里</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">Environment</span> env<span class="token punctuation">;</span>

env<span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把一部分配置封装起来 , 目前主流的方式</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//使用spring来管理这个类</span>
<span class="token annotation punctuation">@Component</span>
<span class="token comment">//扫描yml配置前缀为datasource的所有信息</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">"datasource"</span><span class="token punctuation">)</span>
<span class="token comment">//lombok简化开发</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataSource</span><span class="token punctuation">{</span>
  <span class="token comment">//所有属性名会一一对应 注入数据</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> driverClassName<span class="token punctuation">;</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第3章-web开发" tabindex="-1"><a class="header-anchor" href="#第3章-web开发" aria-hidden="true">#</a> 第3章  web开发</h2>
<h3 id="_3-1-配置文件" tabindex="-1"><a class="header-anchor" href="#_3-1-配置文件" aria-hidden="true">#</a> 3.1 配置文件</h3>
<ol>
<li>静态资源目录</li>
</ol>
<p>默认静态资源文件路径在resources目录下的  static ， public ， resources ，META-INF/resources</p>
<p>直接访问 / + 静态资源文件名 即可访问</p>
<p>请求进来，先去找controller能否处理，处理不了交给静态资源，静态资源也无法处理则报错。</p>
<ol start="2">
<li>修改静态资源目录</li>
</ol>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>
        <span class="token key atrule">static-locations</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>classpath<span class="token punctuation">:</span>/abc/<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过webjars依赖，添加的包里的静态资源，也会自动映射，可以通过/webjars/  访问</p>
<ol start="3">
<li>静态资源访问前缀</li>
</ol>
<p>默认为<code v-pre> /**</code>  ，可增加前缀 <code v-pre>res</code></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
    <span class="token key atrule">mvc</span><span class="token punctuation">:</span>
        <span class="token key atrule">static-path-pattern</span><span class="token punctuation">:</span> /res/<span class="token important">**</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-欢迎页支持" tabindex="-1"><a class="header-anchor" href="#_3-2-欢迎页支持" aria-hidden="true">#</a> 3.2 欢迎页支持</h3>
<ol>
<li>静态路径下的  index.html</li>
</ol>
<p>static目录下会自动识别index.html作为欢迎页</p>
<p>但是加了资源前缀会失败。</p>
<ol start="2">
<li>controller 能处理 /index</li>
</ol>
<h3 id="_3-3-请求参数注解使用" tabindex="-1"><a class="header-anchor" href="#_3-3-请求参数注解使用" aria-hidden="true">#</a> 3.3 请求参数注解使用</h3>
<ol>
<li>普通参数与基本注解</li>
</ol>
<p>注解：</p>
<p>@PathVariable 路径变量、</p>
<p>@RequestHeader 获取请求头、</p>
<p>@ModelAttribute 获取请求、</p>
<p>@RequestParam 获取请求参数、</p>
<p>@MatrixVariable 获取矩阵变量、</p>
<p>@CookieValue 获取cookie值、</p>
<p>@RequestBody 获取请求体</p>
<p>Servlet API：HttpSession、HttpMethod</p>
<ol start="2">
<li>
<p>pojo封装过程</p>
</li>
<li>
<p>参数处理原理</p>
</li>
</ol>
<h3 id="_3-4-响应数据与内容协商" tabindex="-1"><a class="header-anchor" href="#_3-4-响应数据与内容协商" aria-hidden="true">#</a> 3.4 响应数据与内容协商</h3>
<h3 id="_3-5-视图解析与模板引擎" tabindex="-1"><a class="header-anchor" href="#_3-5-视图解析与模板引擎" aria-hidden="true">#</a> 3.5 视图解析与模板引擎</h3>
<h3 id="_3-6-拦截器" tabindex="-1"><a class="header-anchor" href="#_3-6-拦截器" aria-hidden="true">#</a> 3.6 拦截器</h3>
<h3 id="_3-7-跨域" tabindex="-1"><a class="header-anchor" href="#_3-7-跨域" aria-hidden="true">#</a> 3.7 跨域</h3>
<h3 id="_3-8-文件上传" tabindex="-1"><a class="header-anchor" href="#_3-8-文件上传" aria-hidden="true">#</a> 3.8 文件上传</h3>
<h3 id="_3-9-异常处理" tabindex="-1"><a class="header-anchor" href="#_3-9-异常处理" aria-hidden="true">#</a> 3.9 异常处理</h3>
<h3 id="_3-10-web原生" tabindex="-1"><a class="header-anchor" href="#_3-10-web原生" aria-hidden="true">#</a> 3.10 web原生</h3>
<h3 id="_3-11-嵌入式web容器" tabindex="-1"><a class="header-anchor" href="#_3-11-嵌入式web容器" aria-hidden="true">#</a> 3.11 嵌入式web容器</h3>
<h3 id="_3-12-定制化原理" tabindex="-1"><a class="header-anchor" href="#_3-12-定制化原理" aria-hidden="true">#</a> 3.12 定制化原理</h3>
<h2 id="第4章-数据访问" tabindex="-1"><a class="header-anchor" href="#第4章-数据访问" aria-hidden="true">#</a> 第4章 数据访问</h2>
<h3 id="_4-1-数据源自动配置" tabindex="-1"><a class="header-anchor" href="#_4-1-数据源自动配置" aria-hidden="true">#</a> 4.1 数据源自动配置</h3>
<p>注意 5版本和 8版本的mysql驱动不同, 包名加了cj, 以及时区不同</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code>//5版本
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
	<span class="token key atrule">datasource</span><span class="token punctuation">:</span>
		<span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
		<span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/shiro
		<span class="token key atrule">username</span><span class="token punctuation">:</span> root
		<span class="token key atrule">password</span><span class="token punctuation">:</span> root123
		
//8版本
		<span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
		<span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/shiro<span class="token punctuation">?</span>serverTimezone=UTC

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-整合druid" tabindex="-1"><a class="header-anchor" href="#_4-2-整合druid" aria-hidden="true">#</a> 4.2 整合druid</h3>
<p>导入druid-starter坐标</p>
<p>yml配置druid</p>
<h3 id="_4-3-整合mybaits" tabindex="-1"><a class="header-anchor" href="#_4-3-整合mybaits" aria-hidden="true">#</a> 4.3 整合mybaits</h3>
<p>需要勾选 mybatis 和 mysql driver</p>
<p>配置数据源</p>
<p>写service层和mapper层进行测试</p>
<h3 id="_4-4-整合mybatis-plus" tabindex="-1"><a class="header-anchor" href="#_4-4-整合mybatis-plus" aria-hidden="true">#</a> 4.4 整合mybatis-plus</h3>
<p>spring的脚手架没有mybatisplus</p>
<p>需要引入maven坐标</p>
<p>继承baseMapper类</p>
<h3 id="_4-5-整合redis" tabindex="-1"><a class="header-anchor" href="#_4-5-整合redis" aria-hidden="true">#</a> 4.5 整合redis</h3>
<h3 id="_4-6-整合mongodb" tabindex="-1"><a class="header-anchor" href="#_4-6-整合mongodb" aria-hidden="true">#</a> 4.6 整合mongodb</h3>
<h3 id="_4-7整合es" tabindex="-1"><a class="header-anchor" href="#_4-7整合es" aria-hidden="true">#</a> 4.7整合es</h3>
<h2 id="第5章-junit5单元测试" tabindex="-1"><a class="header-anchor" href="#第5章-junit5单元测试" aria-hidden="true">#</a> 第5章 junit5单元测试</h2>
<h3 id="_5-1-整合junit" tabindex="-1"><a class="header-anchor" href="#_5-1-整合junit" aria-hidden="true">#</a> 5.1 整合Junit</h3>
<p>使用注解@SpringbootTest在类上, 使用@Test在方法上</p>
<p>如果测试类存在于引导类所在包或子包中无需指定引导类</p>
<p>如果不存在则要指定classes属性</p>
<p><code v-pre>@SpringbootTest(classes= ...)</code></p>
<h2 id="第6章-actutor生产指标监控" tabindex="-1"><a class="header-anchor" href="#第6章-actutor生产指标监控" aria-hidden="true">#</a> 第6章 Actutor生产指标监控</h2>
<p>could中整合了 不用单独学</p>
<h2 id="第7章-springboot核心原理" tabindex="-1"><a class="header-anchor" href="#第7章-springboot核心原理" aria-hidden="true">#</a> 第7章 springboot核心原理</h2>
<h3 id="_7-1-profile环境切换" tabindex="-1"><a class="header-anchor" href="#_7-1-profile环境切换" aria-hidden="true">#</a> 7.1 profile环境切换</h3>
<p>命令行优先</p>
<h3 id="_7-2-配置加载优先级" tabindex="-1"><a class="header-anchor" href="#_7-2-配置加载优先级" aria-hidden="true">#</a> 7.2 配置加载优先级</h3>
<h3 id="_7-3-自定义stater细节" tabindex="-1"><a class="header-anchor" href="#_7-3-自定义stater细节" aria-hidden="true">#</a> 7.3 自定义stater细节</h3>
<h2 id="第8章-常用工具集" tabindex="-1"><a class="header-anchor" href="#第8章-常用工具集" aria-hidden="true">#</a> 第8章 常用工具集</h2>
<h3 id="_8-1-日志-slf4j" tabindex="-1"><a class="header-anchor" href="#_8-1-日志-slf4j" aria-hidden="true">#</a> 8.1 日志 slf4j</h3>
<p>安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>集成在lombok里 不需要单独引入
使用注解@slf4j在类上
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>用法</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//传入参数</span>
log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"数据:{},成功{}"</span><span class="token punctuation">,</span><span class="token class-name">Activity_list</span><span class="token punctuation">,</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//不同级别</span>
log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"----------------打印info日志----------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">"----------------打印debug日志----------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
log<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">"----------------打印warn日志----------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"----------------打印error日志----------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">file</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./log/$<span class="token punctuation">{</span>server.port<span class="token punctuation">}</span>
    <span class="token key atrule">pattern</span><span class="token punctuation">:</span>
      <span class="token key atrule">file</span><span class="token punctuation">:</span> <span class="token string">'%d{yyyy/MM/dd HH:mm:ss.SSS} %clr(%-5level) [%magenta(%thread)] %cyan(%logger{15}) : %msg%n'</span>
      <span class="token key atrule">console</span><span class="token punctuation">:</span> <span class="token string">'%d{yyyy/MM/dd HH:mm:ss.SSS} %clr(%-5level) [%magenta(%thread)] %cyan(%logger{15}) : %msg%n'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-接口文档-openapi" tabindex="-1"><a class="header-anchor" href="#_8-2-接口文档-openapi" aria-hidden="true">#</a> 8.2 接口文档 openapi</h3>
<p>springboot2.6 以后, 不支持swagger2</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>  <span class="token comment">&lt;!-- openapi --></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springdoc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>springdoc-openapi-ui<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.6.7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

 <span class="token comment">&lt;!--配合Swagger2 形成一个knife4j页面 --></span>  
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.github.xiaoymin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>knife4j-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.0.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">springdoc</span><span class="token punctuation">:</span>
  <span class="token key atrule">api-docs</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>   <span class="token comment"># 默认就是开启</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基本注解</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//标注控制器</span>
<span class="token annotation punctuation">@Tag</span>

<span class="token comment">//标注接口  </span>
<span class="token annotation punctuation">@Operation</span>

<span class="token comment">//隐藏</span>
<span class="token annotation punctuation">@Hidden</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>标注控制器</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Tag</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"活动控制器"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ActivityController</span> <span class="token punctuation">{</span>
  
  <span class="token annotation punctuation">@Operation</span><span class="token punctuation">(</span>summary <span class="token operator">=</span> <span class="token string">"摘要"</span><span class="token punctuation">,</span> 
           description <span class="token operator">=</span> <span class="token string">"详细描述"</span><span class="token punctuation">,</span>
            parameters <span class="token operator">=</span> <span class="token punctuation">{</span>
                    <span class="token annotation punctuation">@Parameter</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"auth"</span><span class="token punctuation">,</span> 
                               description <span class="token operator">=</span> <span class="token string">"请求头"</span><span class="token punctuation">,</span> 
                               in <span class="token operator">=</span> <span class="token class-name">ParameterIn</span><span class="token punctuation">.</span><span class="token constant">HEADER</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token annotation punctuation">@Parameter</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"id"</span><span class="token punctuation">,</span> 
                               description <span class="token operator">=</span> <span class="token string">"id"</span><span class="token punctuation">,</span> 
                               in <span class="token operator">=</span> <span class="token class-name">ParameterIn</span><span class="token punctuation">.</span><span class="token constant">PATH</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token annotation punctuation">@Parameter</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"param"</span><span class="token punctuation">,</span> 
                               description <span class="token operator">=</span> <span class="token string">"参数"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            responses <span class="token operator">=</span> <span class="token punctuation">{</span>
              <span class="token annotation punctuation">@ApiResponse</span><span class="token punctuation">(</span>responseCode <span class="token operator">=</span> <span class="token string">"400"</span><span class="token punctuation">,</span> 
                           description <span class="token operator">=</span> <span class="token string">"400错误"</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            security <span class="token operator">=</span> <span class="token annotation punctuation">@SecurityRequirement</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"需要认证"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token keyword">public</span> <span class="token class-name">ResultTemplate</span> <span class="token function">allActivity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数解析</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Parameter</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"param"</span><span class="token punctuation">,</span> 
           description <span class="token operator">=</span> <span class="token string">"参数"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>访问页面</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8080</span><span class="token operator">/</span>swagger<span class="token operator">-</span>ui<span class="token operator">/</span>index<span class="token punctuation">.</span>html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="第9章-freemarker视图模板" tabindex="-1"><a class="header-anchor" href="#第9章-freemarker视图模板" aria-hidden="true">#</a> 第9章 freemarker视图模板</h2>
<h3 id="_9-1-概述" tabindex="-1"><a class="header-anchor" href="#_9-1-概述" aria-hidden="true">#</a> 9.1 概述</h3>
<p>Freemarker是一款模板引擎，是一种基于模版生成静态文件的通用工具，它是使用纯java编写的，一般用来生成HTML页面。</p>
<p>注释</p>
<div class="language-ftl ext-ftl line-numbers-mode"><pre v-pre class="language-ftl"><code><span class="token ftl language-ftl"><span class="token ftl-comment comment">&lt;#-- freemarker中的注释  --></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-2-数据类型" tabindex="-1"><a class="header-anchor" href="#_9-2-数据类型" aria-hidden="true">#</a> 9.2 数据类型</h3>
<p>布尔</p>
<p>日期</p>
<p>数值</p>
<p>字符串</p>
<p>sequence</p>
<p>hash</p>
<h3 id="_9-3-常见指令" tabindex="-1"><a class="header-anchor" href="#_9-3-常见指令" aria-hidden="true">#</a> 9.3 常见指令</h3>
<p>assign 自定义变量指令</p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>&lt;#assign name&gt; 
  capture this 
&lt;/#assign&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>if 逻辑判断指令</p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>&lt;#assign age=23&gt;
&lt;#if (age&gt;60)&gt;老年人
&lt;#elseif (age&gt;40)&gt;中年人
&lt;#elseif (age&gt;20)&gt;青年人
&lt;#else&gt; 少年人
&lt;/#if&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>list 遍历指令</p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>&lt;#list nameList as names&gt;    
  ${names}   
&lt;/#list&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>switch 开关</p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>&lt;#switch x&gt;  
  &lt;#case 1&gt;  
         1  
      &lt;#break&gt;  
  &lt;#case 2&gt;  
         2  
      &lt;#break&gt;  
  &lt;#default&gt;  
         d  
      &lt;#break&gt;  
&lt;/#switch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>marco 自定义指令</p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>&lt;#macro test foo bar=&quot;Bar&quot; baaz=-1&gt;
测试和参数：${foo}, ${bar}, ${baaz}
&lt;/#宏&gt;
&lt;@test foo=&quot;a&quot; bar=&quot;b&quot; baaz=5*5-2/&gt;
&lt;@test foo=&quot;a&quot; bar=&quot;b&quot;/&gt;
&lt;@test foo=&quot;a&quot; baaz=5*5-2/&gt;
&lt;@test foo=&quot;a&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>import 导入指令</p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>&lt;#import &quot;lib/my_test.ftl&quot; as com&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>include 包含指令</p>
<div class="language-jsp ext-jsp line-numbers-mode"><pre v-pre class="language-jsp"><code>&lt;#include &quot;/inc/top.ftl&quot;/&gt;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-4-页面静态化" tabindex="-1"><a class="header-anchor" href="#_9-4-页面静态化" aria-hidden="true">#</a> 9.4 页面静态化</h3>
<p><strong>概念</strong></p>
<p>对于数据长期不需要改变的动态页面静态化，让用户访问该页面时不用请求数据库，而是直接请求该静态html即可，减轻对数据库的压力</p>
<p><strong>定义模板</strong></p>
<p><strong>加载模板</strong></p>
<p><strong>生成对应的html文件</strong></p>
<h3 id="_9-5-运算符" tabindex="-1"><a class="header-anchor" href="#_9-5-运算符" aria-hidden="true">#</a> 9.5 运算符</h3>
<p><strong>算数</strong></p>
<p><strong>逻辑</strong></p>
<p><strong>比较</strong></p>
<p><strong>空值</strong></p>
</div></template>
