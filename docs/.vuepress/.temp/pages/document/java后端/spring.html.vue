<template><div><h2 id="一-spring-概念" tabindex="-1"><a class="header-anchor" href="#一-spring-概念" aria-hidden="true">#</a> 一. spring 概念</h2>
<h3 id="_1-1-框架概述" tabindex="-1"><a class="header-anchor" href="#_1-1-框架概述" aria-hidden="true">#</a> 1.1 框架概述</h3>
<p>spring是轻量级的开源javaEE框架</p>
<p>spring可以解决企业应用开发的复杂应</p>
<p>spring有两个核心部分，IOC和AOP</p>
<p>IOC：控制反转，把创建对象过程交给spring进行管理</p>
<p>AOP：面向切面，不修改源代码进行功能增强</p>
<h3 id="_1-2-spring优点" tabindex="-1"><a class="header-anchor" href="#_1-2-spring优点" aria-hidden="true">#</a> 1.2 spring优点</h3>
<p>方便解耦，简化开发</p>
<p>Aop编程的支持</p>
<p>方便程序的测试</p>
<p>方便集成各种其他框架</p>
<p>方便进行事物操作</p>
<p>降低API开发难度</p>
<h2 id="二-spring-ioc" tabindex="-1"><a class="header-anchor" href="#二-spring-ioc" aria-hidden="true">#</a> 二. spring IOC</h2>
<h3 id="_2-1-ioc-概念和原理" tabindex="-1"><a class="header-anchor" href="#_2-1-ioc-概念和原理" aria-hidden="true">#</a> 2.1 IOC 概念和原理</h3>
<p>IOC控制反转：把对象创建和对象之间的调用过程，交给spring进行管理</p>
<p>人话：获得依赖对象的方式反转了</p>
<p>目的：降低代码之间的耦合度</p>
<p>实现方式：DI 依赖注入，依赖查找</p>
<h3 id="_2-2-ioc-底层原理" tabindex="-1"><a class="header-anchor" href="#_2-2-ioc-底层原理" aria-hidden="true">#</a> 2.2 IOC 底层原理</h3>
<p>XML解析、工厂模式、反射</p>
<h3 id="_2-3-ioc接口" tabindex="-1"><a class="header-anchor" href="#_2-3-ioc接口" aria-hidden="true">#</a> 2.3 IOC接口</h3>
<p>ICO的思想基于IOC容器完成，IOC容器底层就是对象工厂。</p>
<p>接口实现类：</p>
<p>FileSystemXmlApplicationContext</p>
<p>ClassPathXmlApplicationContext</p>
<p>Spring提供IOC容器实现的两种方式（接口）：</p>
<p>（1）BeanFactory，由spring内部人员使用，不推荐开发者使用</p>
<p>加载配置文件的时候不会创建对象，在获取（使用）时才去创建对象</p>
<p>（2）ApplicationContext，继承BeanFactory，功能拓展增强，开发人员使用</p>
<p>加载配置文件时，就创建了对象。</p>
<p>测试</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ApplicationContext</span> content <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">"beans.xml"</span><span class="token punctuation">)</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">"user01"</span><span class="token punctuation">,</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-ioc-管理-bean" tabindex="-1"><a class="header-anchor" href="#_2-4-ioc-管理-bean" aria-hidden="true">#</a> 2.4 IOC 管理 bean</h3>
<p>Bean管理过程：</p>
<p>​	1⃣spring创建对象</p>
<p>​	2⃣spring属性注入</p>
<p>Bean管理方式：</p>
<p>​	1⃣基于xml配置文件实现</p>
<p>​	2⃣基于注解方式实现</p>
<h3 id="_2-5-xml-方式" tabindex="-1"><a class="header-anchor" href="#_2-5-xml-方式" aria-hidden="true">#</a> 2.5 xml 方式</h3>
<p>开发不推荐 感兴趣自行查找相关资料</p>
<h3 id="_2-6-注解方式" tabindex="-1"><a class="header-anchor" href="#_2-6-注解方式" aria-hidden="true">#</a> 2.6 注解方式</h3>
<h4 id="_2-6-1-注解简介" tabindex="-1"><a class="header-anchor" href="#_2-6-1-注解简介" aria-hidden="true">#</a> 2.6.1 注解简介</h4>
<p>注解作用在类, 方法, 属性上面</p>
<p>简化xml配置</p>
<p>例如 @Text</p>
<p>xml用来管理bean，注解只负责属性的注入</p>
<h4 id="_2-6-2-spring-提供常用的注解" tabindex="-1"><a class="header-anchor" href="#_2-6-2-spring-提供常用的注解" aria-hidden="true">#</a> 2.6.2 spring 提供常用的注解</h4>
<p>web注解, 下面四个注解功能完全相同</p>
<p><code v-pre>@Component</code></p>
<p><code v-pre>@Mapper</code></p>
<p><code v-pre>@Service</code></p>
<p><code v-pre>@Controller </code></p>
<p>配置文件</p>
<p><code v-pre>@Configuration</code></p>
<p><code v-pre>@ComponentScan(basePackages={&quot;com.example&quot;})</code></p>
<p>根据属性类型自动装配</p>
<p><code v-pre>@Autowired</code></p>
<p>但是如果一个接口有多个实现类就会找不到, 需要结合 <code v-pre>@Qualifier</code> 使用</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Service</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">"userService"</span><span class="token punctuation">)</span>

<span class="token annotation punctuation">@Autowired</span>
<span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">"userService"</span><span class="token punctuation">)</span> ，根据属性名注入
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>@Resource</code> ，根据类型</p>
<p><code v-pre>@Resource(name=&quot;userService&quot;) </code>  , 根据名称注入</p>
<p><code v-pre>@Value(value=&quot;abc&quot;)</code> ，注入普通类型属性</p>
<h3 id="_2-7-bean-的声明周期" tabindex="-1"><a class="header-anchor" href="#_2-7-bean-的声明周期" aria-hidden="true">#</a> 2.7 bean 的声明周期</h3>
<p>(1)通过构造器创建bean实例(无参数构造)</p>
<p>(2)为bean的属性设置值和对其他bean引用(调用set方法)</p>
<p>(3)调用bean的初始化的方法(需要进行配置初始化的方法)</p>
<p>(4)bean可以使用了(对象获取到了)</p>
<p>(5)当容器关闭时候,调用bean的销毁的方法(需要进行配置销毁的方法)</p>
<h2 id="三-spring-aop" tabindex="-1"><a class="header-anchor" href="#三-spring-aop" aria-hidden="true">#</a> 三. spring AOP</h2>
<h3 id="_3-1-aop-概念" tabindex="-1"><a class="header-anchor" href="#_3-1-aop-概念" aria-hidden="true">#</a> 3.1 AOP 概念</h3>
<p>aop就是动态代理的规范化，把动态代理的实现步骤方式都定义好了，用统一的方式，使用动态代理。</p>
<p>面向切面编程，利用AOP可以对业务逻辑的各个部分进行隔离，降低耦合度。</p>
<p>不修改源代码，在主干功能里添加新功能。</p>
<p>例如：登录功能增加权限验证。</p>
<h3 id="_3-2-aop原理" tabindex="-1"><a class="header-anchor" href="#_3-2-aop原理" aria-hidden="true">#</a> 3.2 AOP原理</h3>
<h4 id="_3-2-1-动态代理简介" tabindex="-1"><a class="header-anchor" href="#_3-2-1-动态代理简介" aria-hidden="true">#</a> 3.2.1 动态代理简介</h4>
<p>有两种情况：</p>
<p>有接口，使用jdk动态代理，创建实现类的代理对象</p>
<p>没有接口，使用cglib动态代理，创建子类的代理对象</p>
<h4 id="_3-2-2-动态代理的作用" tabindex="-1"><a class="header-anchor" href="#_3-2-2-动态代理的作用" aria-hidden="true">#</a> 3.2.2 动态代理的作用</h4>
<p>​    1）在目标类源代码不改变的情况下，增加业务功能</p>
<p>​    2）减少代码的重复，专注业务逻辑代码</p>
<p>​    3）解耦合，让功能分离</p>
<h4 id="_3-2-3-切面-aspect" tabindex="-1"><a class="header-anchor" href="#_3-2-3-切面-aspect" aria-hidden="true">#</a> 3.2.3 切面 aspect</h4>
<p>给你的目标类增加的功能，就是切面。</p>
<p>如日志，事物，统计，检查，验证等。</p>
<p>切面的特点，和业务无关。</p>
<p>切面的三个要素</p>
<p>​    1）切面的功能代码，切面干什么</p>
<p>​    2）切面的执行位置，使用切入点表示切面执行的位置</p>
<p>​    3）切面的执行时间，在目标方法之前，还是目标方法之后</p>
<h4 id="_3-2-4-专业术语" tabindex="-1"><a class="header-anchor" href="#_3-2-4-专业术语" aria-hidden="true">#</a> 3.2.4 专业术语</h4>
<p><code v-pre>连接点</code>，连接业务方法和切面的位置，就是类中可以被增强的业务方法</p>
<p><code v-pre>切入点</code>，指多个连接点方法的集合，类中实际被增强的连接点</p>
<p><code v-pre>目标对象</code>，给哪个类的方法增加功能，这个类就是目标对象</p>
<p><code v-pre>通知</code>，实际增强的逻辑部分</p>
<p><code v-pre>切面</code>， 把通知应用到切入点的过程</p>
<h3 id="_3-3-aspectj" tabindex="-1"><a class="header-anchor" href="#_3-3-aspectj" aria-hidden="true">#</a> 3.3 aspectJ</h3>
<p>aspectJ：专门的做AOP的框架</p>
<p>spring原生AOP比较笨重，一般使用sping中集成的 aspectJ 框架</p>
<h4 id="_3-3-1-advice-通知" tabindex="-1"><a class="header-anchor" href="#_3-3-1-advice-通知" aria-hidden="true">#</a> 3.3.1 Advice 通知</h4>
<p>切面的执行时间，这个执行时间叫做Advice（通知，增强）</p>
<p>​    在aspectJ框架中，使用注解表示，一共有5个</p>
<p>​    @Before  ，前置通知</p>
<p>​    @AfterReturning ，后置通知</p>
<p>​    @Around ，环绕通知</p>
<p>​    @AfterThrowing ， 异常通知</p>
<p>​    @After ，最终通知</p>
<h4 id="_3-3-2-切面执行的位置" tabindex="-1"><a class="header-anchor" href="#_3-3-2-切面执行的位置" aria-hidden="true">#</a> 3.3.2 切面执行的位置</h4>
<p>使用的是切入点表达式</p>
<p>​    execution（ 【访问权限】【返回类型】【 类全路径】 【方法名称】【参数列表】）</p>
<p>?       表示可选参数</p>
<p>​    *       表示0至任意多的字符</p>
<p>​    ..      用在方法参数中，表示任意多个参数</p>
<p>​            用在包名后，表示当前包及其子包路径</p>
<p>​    +       用在类名后，表示当前类及其子类</p>
<p>​            用在接口后，表示当前接口及其实现类</p>
<p>​    举例：</p>
<p>​    execution（public * *（..））</p>
<p>​    指定切入点为：任意公共方法</p>
<p>​    execution（* com.dao.book.add(..））</p>
<p>​    指定切入点为：对该类里面的add方法增强</p>
<p>​    execution（* set*（..））</p>
<p>​    指定切入点为：任意一个以set开始的方法</p>
<p>​    execution（* com.xyz.service.<em>.</em>（..））</p>
<p>​    指定切入点为：定义在com.xyz.service包里的任意类的任意方法</p>
<p>​    execution（* <em>..service.</em>.*(..)）</p>
<p>​    指定切入点为：定义在所有包下的service子包下所有类中的所有方法为切入点</p>
<p>​    execution（* <em>.service.</em>.*(..)）</p>
<p>​    指定切入点为：定义在只有一级包下的service子包下所有类中的所有方法为切入点</p>
<p>切入点抽取</p>
<p>@Pointcut（）</p>
<p>设置优先级</p>
<p>@Order（1）</p>
<p>完全使用注解开发</p>
<p>创建AopConfig类</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span>basePackages<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"com.example"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EnableAspectJAutoProxy</span><span class="token punctuation">(</span>proxyTargetClass<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AopConfig</span><span class="token punctuation">{</span>
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-3-aspectj使用" tabindex="-1"><a class="header-anchor" href="#_3-3-3-aspectj使用" aria-hidden="true">#</a> 3.3.3 aspectJ使用</h4>
<p>加入依赖，spring依赖，aspectJ依赖，junit依赖</p>
<p>创建目标类：被增强类，和增强类</p>
<p>创建切面类：在增强类的上面加上@Aspect，在类中定义方法，在方法上加上通知注解，参数指定切入点表达式</p>
<p>创建spring的配置文件，创建命名空间，声明aspectJ框架中的自动代理生成器标签</p>
<p>创建测试类，从spring容器中获取目标对象，调用方法</p>
<h3 id="_3-4-aop使用场景" tabindex="-1"><a class="header-anchor" href="#_3-4-aop使用场景" aria-hidden="true">#</a> 3.4 aop使用场景</h3>
<p>1）当你要给一个系统中存在的类修改功能</p>
<p>2）当你要给项目中的多个类，增加一个相同的功能，使用aop</p>
<p>3）给业务方法增加事物，日志输出</p>
<h2 id="四-spring-事物管理" tabindex="-1"><a class="header-anchor" href="#四-spring-事物管理" aria-hidden="true">#</a> 四. spring 事物管理</h2>
<h3 id="_4-1-事务概念" tabindex="-1"><a class="header-anchor" href="#_4-1-事务概念" aria-hidden="true">#</a> 4.1 事务概念</h3>
<h4 id="_4-1-1-基本概念" tabindex="-1"><a class="header-anchor" href="#_4-1-1-基本概念" aria-hidden="true">#</a> 4.1.1 基本概念</h4>
<p>事务是数据库操作的最基本单元，逻辑上一组操作要么都成功，要么都失败。</p>
<p>例如：银行转账。</p>
<p>底层使用AOP原理。</p>
<p>一般添加到 service 层。</p>
<h4 id="_4-1-2-事务的特性-acid" tabindex="-1"><a class="header-anchor" href="#_4-1-2-事务的特性-acid" aria-hidden="true">#</a> 4.1.2 事务的特性 ACID</h4>
<ol>
<li>原子性</li>
<li>一致性</li>
<li>隔离性</li>
<li>持久性</li>
</ol>
<h4 id="_4-1-3-事务管理的核心接口" tabindex="-1"><a class="header-anchor" href="#_4-1-3-事务管理的核心接口" aria-hidden="true">#</a> 4.1.3 事务管理的核心接口</h4>
<p>PlatformTransactionManager 核心接口</p>
<p>DataSourceTransactionManager 实现类（mybatis框架）</p>
<h4 id="_4-1-4-事物操作的两种方式" tabindex="-1"><a class="header-anchor" href="#_4-1-4-事物操作的两种方式" aria-hidden="true">#</a> 4.1.4 事物操作的两种方式</h4>
<p>编程式：try catch （代码冗余）</p>
<p>声明式： 注解（推荐） ，xml</p>
<h3 id="_4-2-声明式事务管理" tabindex="-1"><a class="header-anchor" href="#_4-2-声明式事务管理" aria-hidden="true">#</a> 4.2 声明式事务管理</h3>
<h4 id="_4-2-1-事务操作过程" tabindex="-1"><a class="header-anchor" href="#_4-2-1-事务操作过程" aria-hidden="true">#</a> 4.2.1 事务操作过程</h4>
<ol>
<li>开启事务</li>
<li>进行业务操作</li>
<li>没有异常，提交事务</li>
<li>发生异常，事物回滚</li>
</ol>
<h4 id="_4-2-2-完全注解开发" tabindex="-1"><a class="header-anchor" href="#_4-2-2-完全注解开发" aria-hidden="true">#</a> 4.2.2 完全注解开发</h4>
<p>在service类或方法上面，添加注解 @Transactional</p>
<p>添加到类上面为所有方法都开启事物</p>
<p>添加到方法上只为该方法开启事物</p>
<p>创建配置类</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span> <span class="token comment">//配置类</span>
<span class="token annotation punctuation">@ComponentScan</span> （basePackages <span class="token operator">=</span> <span class="token string">"com atguigu"</span>）<span class="token comment">//组件扫描</span>
<span class="token annotation punctuation">@EnableTransactionManagement</span> <span class="token comment">//开启事务</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TxConfig</span> <span class="token punctuation">{</span>
    
  	<span class="token comment">//创建数据库连接池</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">DruidDataSource</span> getDruidDataSourceO <span class="token punctuation">{</span>
        <span class="token class-name">DruidDataSource</span> dataSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DruidDataSource</span><span class="token punctuation">(</span><span class="token operator">:</span>
        dataSource<span class="token punctuation">.</span> <span class="token function">setDriverClassName</span><span class="token punctuation">(</span><span class="token string">"com mysql. jdbc. Driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataSource<span class="token punctuation">.</span> <span class="token function">setUrl</span><span class="token punctuation">(</span><span class="token string">"jdbc:mysql:///user_db"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataSource<span class="token punctuation">.</span> <span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataSource<span class="token punctuation">.</span> <span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> dataSource<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
                                                         
		<span class="token comment">//创建JdbcTemplate对象</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">JdbcTemplate</span> <span class="token function">getJdbcTemplate</span><span class="token punctuation">(</span><span class="token class-name">DataSource</span> dataSource<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//到ioc容器中根据类型找到dataSource</span>
        <span class="token class-name">JdbcTemplate</span> jdbcTemplate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JdbcTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//注入dataSource</span>
        jdbcTemplate<span class="token punctuation">.</span> <span class="token function">setDataSource</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> jdbcTemplate<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
                                                         
    <span class="token comment">//创建事务管理器</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSourceTransactionManager</span> getDataSourceTransactionManager <span class="token punctuation">(</span><span class="token class-name">DataSource</span> dataSource<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">DataSourceTransactionManager</span> transactionManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSourceTransactionManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        transactionManager<span class="token punctuation">.</span><span class="token function">setDataSource</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> transactionManager<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>                                                     
                                                         
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-3-相关参数" tabindex="-1"><a class="header-anchor" href="#_4-2-3-相关参数" aria-hidden="true">#</a> 4.2.3 相关参数</h4>
<p>事物传播行为 ： propagation</p>
<p>前两个使用最多，需要掌握</p>
<p><img src="@source/document/java后端/asset/spring教程-1637044716589.png" alt="iShot2021-11-16 14.37.19.png" loading="lazy"></p>
<p>事物隔离级别：ioslation</p>
<p>三种问题：脏读，不可重复读，虚读</p>
<p>解决：注解中设置参数，mysql默认3级</p>
<p><img src="@source/document/java后端/asset/spring教程-1637044783265.png" alt="ima123ge.png" loading="lazy"></p>
<p>超时时间：timeout</p>
<p>事物需要在一定时间内进行提交，不提交就回滚</p>
<p>默认值为-1，以秒为单位</p>
<p>是否只读：readonly</p>
<p>查询操作可以设置只读，默认为false</p>
<p>回滚：rollbackfor</p>
<p>设置出现哪些异常进行事物回滚</p>
<p>不回滚：norollbackfor</p>
<p>设置出现哪些异常不进行事物回滚</p>
<h2 id="五-spring5-新特性" tabindex="-1"><a class="header-anchor" href="#五-spring5-新特性" aria-hidden="true">#</a> 五. spring5 新特性</h2>
<h3 id="_5-1-整合日志框架" tabindex="-1"><a class="header-anchor" href="#_5-1-整合日志框架" aria-hidden="true">#</a> 5.1 整合日志框架</h3>
<h3 id="_5-2-nullable注解" tabindex="-1"><a class="header-anchor" href="#_5-2-nullable注解" aria-hidden="true">#</a> 5.2 Nullable注解</h3>
<h3 id="_5-3-整合junit框架" tabindex="-1"><a class="header-anchor" href="#_5-3-整合junit框架" aria-hidden="true">#</a> 5.3 整合Junit框架</h3>
<h3 id="_5-4-webflux" tabindex="-1"><a class="header-anchor" href="#_5-4-webflux" aria-hidden="true">#</a> 5.4 WebFlux</h3>
<h2 id="第6章-模板引擎" tabindex="-1"><a class="header-anchor" href="#第6章-模板引擎" aria-hidden="true">#</a> 第6章 模板引擎</h2>
<h3 id="_6-1-jsp" tabindex="-1"><a class="header-anchor" href="#_6-1-jsp" aria-hidden="true">#</a> 6.1 jsp</h3>
<h3 id="_6-2-freemarker" tabindex="-1"><a class="header-anchor" href="#_6-2-freemarker" aria-hidden="true">#</a> 6.2 freemarker</h3>
</div></template>
