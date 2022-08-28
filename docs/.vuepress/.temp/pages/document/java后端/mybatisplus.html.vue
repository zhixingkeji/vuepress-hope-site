<template><div><h2 id="第1章-简介" tabindex="-1"><a class="header-anchor" href="#第1章-简介" aria-hidden="true">#</a> 第1章 简介</h2>
<h3 id="_1-1-特性" tabindex="-1"><a class="header-anchor" href="#_1-1-特性" aria-hidden="true">#</a> 1.1 特性</h3>
<ul>
<li>
<p>无侵入</p>
</li>
<li>
<p>支持 ActiveRecord 模式</p>
</li>
<li>
<p>支持自定义全局通用操作</p>
</li>
<li>
<p>代码生成器</p>
</li>
<li>
<p>分页插件</p>
</li>
<li>
<p>内置性能分析插件</p>
</li>
<li>
<p>全局拦截插件</p>
</li>
</ul>
<h3 id="_1-2-安装" tabindex="-1"><a class="header-anchor" href="#_1-2-安装" aria-hidden="true">#</a> 1.2 安装</h3>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--mybatisplus--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mybatis-plus-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>mybatis-plus-latest-version<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

 <span class="token comment">&lt;!--代码生成器--></span>



 <span class="token comment">&lt;!--模板引擎--></span>




<span class="token comment">&lt;!--jackson--></span>


<span class="token comment">&lt;!--lombok--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span> 

<span class="token comment">&lt;!--mysql--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-常用注解" tabindex="-1"><a class="header-anchor" href="#_1-3-常用注解" aria-hidden="true">#</a> 1.3 常用注解</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//@TableName 表名注解，标识实体类对应的表</span>
<span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span><span class="token string">"sys_user"</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//@TableId 实体类主键字段 </span>
<span class="token annotation punctuation">@TableId</span>
<span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>

<span class="token comment">// @TableField 对一个字段使用,该表中无真实字段,但业务中需要用到该属性</span>
<span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span>exist<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> name<span class="token punctuation">;</span> 

<span class="token comment">// @Version 乐观锁注解、标记在字段上</span>

<span class="token comment">// @EnumValue 普通枚举类注解(注解在枚举字段上)</span>

<span class="token comment">// @TableLogic 表字段逻辑处理注解（逻辑删除）</span>

<span class="token comment">// @KeySequence 序列主键策略 `oracle`</span>

<span class="token comment">// @InterceptorIgnore 插件see</span>

<span class="token comment">// @OrderBy 内置 SQL 默认指定排序，优先级低于 wrapper 条件查询</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-配置" tabindex="-1"><a class="header-anchor" href="#_1-4-配置" aria-hidden="true">#</a> 1.4 配置</h3>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span> <span class="token comment"># 配置数据源信息 </span>
	<span class="token key atrule">datasource</span><span class="token punctuation">:</span> <span class="token comment"># 配置数据源类型 </span>
		<span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver 
		<span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/mybatis_plus<span class="token punctuation">?</span>serverTimezone=GMT%2B8<span class="token important">&amp;characterEncoding=utf-8&amp;useSSL=false</span> <span class="token comment">#mysql8版本url</span>
		<span class="token key atrule">username</span><span class="token punctuation">:</span> root 
		<span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>


//application.yml配置
<span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token punctuation">...</span><span class="token punctuation">...</span>
  <span class="token key atrule">configuration</span><span class="token punctuation">:</span>
    <span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl 
    <span class="token comment">#配置mybatis原生日志,该日志打印消息最全,有完整的sql语句,适合开发阶段</span>
  <span class="token key atrule">global-config</span><span class="token punctuation">:</span>
    <span class="token punctuation">...</span><span class="token punctuation">...</span>
    <span class="token key atrule">db-config</span><span class="token punctuation">:</span>
      <span class="token punctuation">...</span><span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-1-mybatis-plus" tabindex="-1"><a class="header-anchor" href="#_1-4-1-mybatis-plus" aria-hidden="true">#</a> 1.4.1 mybatis-plus</h4>
<p>configLocation</p>
<ul>
<li>类型：<code v-pre>String</code></li>
<li>默认值：<code v-pre>null</code></li>
</ul>
<p>MyBatis 配置文件位置，如果您有单独的 MyBatis 配置，请将其路径配置到 <code v-pre>configLocation</code> 中.MyBatis Configuration 的具体内容请参考<a href="https://www.mybatis.org/mybatis-3/zh/configuration.html" target="_blank" rel="noopener noreferrer">MyBatis 官方文档(opens new window)<ExternalLinkIcon/></a></p>
<p>mapperLocations</p>
<ul>
<li>类型：<code v-pre>String[]</code></li>
<li>默认值：<code v-pre>[&quot;classpath*:/mapper/**/*.xml&quot;]</code></li>
</ul>
<p>MyBatis Mapper 所对应的 XML 文件位置，如果您在 Mapper 中有自定义方法(XML 中有自定义实现)，需要进行该配置，告诉 Mapper 所对应的 XML 文件位置</p>
<p>注意</p>
<p>Maven 多模块项目的扫描路径需以 <code v-pre>classpath*:</code> 开头 （即加载多个 jar 包下的 XML 文件）</p>
<p>typeAliasesPackage</p>
<ul>
<li>类型：<code v-pre>String</code></li>
<li>默认值：<code v-pre>null</code></li>
</ul>
<p>MyBaits 别名包扫描路径，通过该属性可以给包中的类注册别名，注册后在 Mapper 对应的 XML 文件中可以直接使用类名，而不用使用全限定的类名(即 XML 中调用的时候不用包含包名)</p>
<p>typeAliasesSuperType</p>
<ul>
<li>类型：<code v-pre>Class&lt;?&gt;</code></li>
<li>默认值：<code v-pre>null</code></li>
</ul>
<p>该配置请和 <a href="https://baomidou.com/pages/56bac0/#typealiasespackage" target="_blank" rel="noopener noreferrer">typeAliasesPackage<ExternalLinkIcon/></a> 一起使用，如果配置了该属性，则仅仅会扫描路径下以该类作为父类的域对象</p>
<p>typeHandlersPackage</p>
<ul>
<li>类型：<code v-pre>String</code></li>
<li>默认值：<code v-pre>null</code></li>
</ul>
<p>TypeHandler 扫描路径，如果配置了该属性，SqlSessionFactoryBean 会把该包下面的类注册为对应的 TypeHandler</p>
<p>提示</p>
<p>TypeHandler 通常用于自定义类型转换。</p>
<p>typeEnumsPackage</p>
<ul>
<li>类型：<code v-pre>String</code></li>
<li>默认值：<code v-pre>null</code></li>
</ul>
<p>枚举类 扫描路径，如果配置了该属性，会将路径下的枚举类进行注入，让实体类字段能够简单快捷的使用枚举属性</p>
<p>checkConfigLocation</p>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>false</code></li>
</ul>
<p>启动时是否检查 MyBatis XML 文件的存在，默认不检查</p>
<p>executorType</p>
<ul>
<li>类型：<code v-pre>ExecutorType</code></li>
<li>默认值：<code v-pre>simple</code></li>
</ul>
<p>通过该属性可指定 MyBatis 的执行器，MyBatis 的执行器总共有三种：</p>
<ul>
<li>ExecutorType.SIMPLE：该执行器类型不做特殊的事情，为每个语句的执行创建一个新的预处理语句（PreparedStatement）</li>
<li>ExecutorType.REUSE：该执行器类型会复用预处理语句（PreparedStatement）</li>
<li>ExecutorType.BATCH：该执行器类型会批量执行所有的更新语句</li>
</ul>
<h4 id="_1-4-2-configuration" tabindex="-1"><a class="header-anchor" href="#_1-4-2-configuration" aria-hidden="true">#</a> 1.4.2 Configuration</h4>
<p>本部分（Configuration）的配置大都为 MyBatis 原生支持的配置，这意味着您可以通过 MyBatis XML 配置文件的形式进行配置。</p>
<p>mapUnderscoreToCamelCase</p>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>true</code></li>
</ul>
<p>是否开启自动驼峰命名规则（camel case）映射，即从经典数据库列名 A_COLUMN（下划线命名） 到经典 Java 属性名 aColumn（驼峰命名） 的类似映射。</p>
<p>注意</p>
<p>此属性在 MyBatis 中原默认值为 false，在 MyBatis-Plus 中，此属性也将用于生成最终的 SQL 的 select body</p>
<p>如果您的数据库命名符合规则无需使用 <code v-pre>@TableField</code> 注解指定数据库字段名</p>
<p>defaultEnumTypeHandler</p>
<ul>
<li>类型：<code v-pre>Class&lt;? extends TypeHandler</code></li>
<li>默认值：<code v-pre>org.apache.ibatis.type.EnumTypeHandler</code></li>
</ul>
<p>默认枚举处理类,如果配置了该属性,枚举将统一使用指定处理器进行处理</p>
<p>提示</p>
<ul>
<li>org.apache.ibatis.type.EnumTypeHandler : 存储枚举的名称</li>
<li>org.apache.ibatis.type.EnumOrdinalTypeHandler : 存储枚举的索引</li>
<li>com.baomidou.mybatisplus.extension.handlers.MybatisEnumTypeHandler : 枚举类需要实现 IEnum 接口或字段标记@EnumValue 注解.(3.1.2 以下版本为 EnumTypeHandler)</li>
<li>com.baomidou.mybatisplus.extension.handlers.EnumAnnotationTypeHandler: 枚举类字段需要标记@EnumValue 注解</li>
</ul>
<p>aggressiveLazyLoading</p>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>true</code></li>
</ul>
<p>当设置为 true 的时候，懒加载的对象可能被任何懒属性全部加载，否则，每个属性都按需加载。需要和 <a href="https://baomidou.com/pages/56bac0/" target="_blank" rel="noopener noreferrer">lazyLoadingEnabled<ExternalLinkIcon/></a> 一起使用。</p>
<p>autoMappingBehavior</p>
<ul>
<li>类型：<code v-pre>AutoMappingBehavior</code></li>
<li>默认值：<code v-pre>partial</code></li>
</ul>
<p>MyBatis 自动映射策略，通过该配置可指定 MyBatis 是否并且如何来自动映射数据表字段与对象的属性，总共有 3 种可选值：</p>
<ul>
<li>AutoMappingBehavior.NONE：不启用自动映射</li>
<li>AutoMappingBehavior.PARTIAL：只对非嵌套的 resultMap 进行自动映射</li>
<li>AutoMappingBehavior.FULL：对所有的 resultMap 都进行自动映射</li>
</ul>
<p>autoMappingUnknownColumnBehavior</p>
<ul>
<li>类型：<code v-pre>AutoMappingUnknownColumnBehavior</code></li>
<li>默认值：<code v-pre>NONE</code></li>
</ul>
<p>MyBatis 自动映射时未知列或未知属性处理策略，通过该配置可指定 MyBatis 在自动映射过程中遇到未知列或者未知属性时如何处理，总共有 3 种可选值：</p>
<ul>
<li>AutoMappingUnknownColumnBehavior.NONE：不做任何处理 (默认值)</li>
<li>AutoMappingUnknownColumnBehavior.WARNING：以日志的形式打印相关警告信息</li>
<li>AutoMappingUnknownColumnBehavior.FAILING：当作映射失败处理，并抛出异常和详细信息</li>
</ul>
<p>localCacheScope</p>
<ul>
<li>类型：<code v-pre>String</code></li>
<li>默认值：<code v-pre>SESSION</code></li>
</ul>
<p>Mybatis 一级缓存，默认为 SESSION。</p>
<ul>
<li>SESSION session 级别缓存，同一个 session 相同查询语句不会再次查询数据库</li>
<li>STATEMENT 关闭一级缓存</li>
</ul>
<p>单服务架构中（有且仅有只有一个程序提供相同服务），一级缓存开启不会影响业务，只会提高性能。 微服务架构中需要关闭一级缓存，原因：Service1 先查询数据，若之后 Service2 修改了数据，之后 Service1 又再次以同样的查询条件查询数据，因走缓存会出现查处的数据不是最新数据</p>
<p>cacheEnabled</p>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>true</code></li>
</ul>
<p>开启 Mybatis 二级缓存，默认为 true。</p>
<p>callSettersOnNulls</p>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>false</code></li>
</ul>
<p>指定当结果集中值为 null 的时候是否调用映射对象的 Setter（Map 对象时为 put）方法，通常运用于有 Map.keySet() 依赖或 null 值初始化的情况。</p>
<p>通俗的讲，即 MyBatis 在使用 resultMap 来映射查询结果中的列，如果查询结果中包含空值的列，则 MyBatis 在映射的时候，不会映射这个字段，这就导致在调用到该字段的时候由于没有映射，取不到而报空指针异常。</p>
<p>当您遇到类似的情况，请针对该属性进行相关配置以解决以上问题。</p>
<p>注意</p>
<p>基本类型（int、boolean 等）是不能设置成 null 的。</p>
<p>configurationFactory</p>
<ul>
<li>类型：<code v-pre>Class&lt;?&gt;</code></li>
<li>默认值：<code v-pre>null</code></li>
</ul>
<p>指定一个提供 Configuration 实例的工厂类。该工厂生产的实例将用来加载已经被反序列化对象的懒加载属性值，其必须包含一个签名方法<code v-pre>static Configuration getConfiguration()</code>。（从 3.2.3 版本开始）</p>
<h4 id="_1-4-3-globalconfig" tabindex="-1"><a class="header-anchor" href="#_1-4-3-globalconfig" aria-hidden="true">#</a> 1.4.3 GlobalConfig</h4>
<p>banner</p>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>true</code></li>
</ul>
<p>是否控制台 print mybatis-plus 的 LOGO</p>
<p>enableSqlRunner</p>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>false</code></li>
</ul>
<p>是否初始化 SqlRunner(com.baomidou.mybatisplus.extension.toolkit.SqlRunner)</p>
<p>sqlInjector</p>
<ul>
<li>类型：<code v-pre>com.baomidou.mybatisplus.core.injector.ISqlInjector</code></li>
<li>默认值：<code v-pre>com.baomidou.mybatisplus.core.injector.DefaultSqlInjector</code></li>
</ul>
<p>SQL 注入器(starter 下支持<code v-pre>@bean</code>注入)</p>
<p>superMapperClass</p>
<ul>
<li>类型：<code v-pre>Class</code></li>
<li>默认值：<code v-pre>com.baomidou.mybatisplus.core.mapper.Mapper.class</code></li>
</ul>
<p>通用 Mapper 父类(影响 sqlInjector,只有这个的子类的 mapper 才会注入 sqlInjector 内的 method)</p>
<p>metaObjectHandler</p>
<ul>
<li>类型：<code v-pre>com.baomidou.mybatisplus.core.handlers.MetaObjectHandler</code></li>
<li>默认值：<code v-pre>null</code></li>
</ul>
<p>元对象字段填充控制器(starter 下支持<code v-pre>@bean</code>注入)</p>
<p>identifierGenerator(since 3.3.0)</p>
<ul>
<li>类型：<code v-pre>com.baomidou.mybatisplus.core.incrementer.IdentifierGenerator</code></li>
<li>默认值：<code v-pre>com.baomidou.mybatisplus.core.incrementer.DefaultIdentifierGenerator</code></li>
</ul>
<p>Id 生成器(starter 下支持<code v-pre>@bean</code>注入)</p>
<h4 id="_1-4-4-dbconfig" tabindex="-1"><a class="header-anchor" href="#_1-4-4-dbconfig" aria-hidden="true">#</a> 1.4.4 DbConfig</h4>
<p>idType</p>
<ul>
<li>类型：<code v-pre>com.baomidou.mybatisplus.annotation.IdType</code></li>
<li>默认值：<code v-pre>ASSIGN_ID</code></li>
</ul>
<p>全局默认主键类型</p>
<p>tablePrefix</p>
<ul>
<li>类型：<code v-pre>String</code></li>
<li>默认值：<code v-pre>null</code></li>
</ul>
<p>表名前缀</p>
<p>schema</p>
<ul>
<li>类型：<code v-pre>String</code></li>
<li>默认值：<code v-pre>null</code></li>
</ul>
<p>schema</p>
<p>columnFormat</p>
<ul>
<li>类型：<code v-pre>String</code></li>
<li>默认值：<code v-pre>null</code></li>
</ul>
<p>字段 format,例: <code v-pre>%s</code>,(对主键无效)</p>
<p>propertyFormat(since 3.3.0)</p>
<ul>
<li>类型：<code v-pre>String</code></li>
<li>默认值：<code v-pre>null</code></li>
</ul>
<p>entity 的字段(property)的 format,只有在 column as property 这种情况下生效例: <code v-pre>%s</code>,(对主键无效)</p>
<p>tableUnderline</p>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>true</code></li>
</ul>
<p>表名是否使用驼峰转下划线命名,只对表名生效</p>
<p>capitalMode</p>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>false</code></li>
</ul>
<p>大写命名,对表名和字段名均生效</p>
<p>keyGenerator</p>
<ul>
<li>类型：<code v-pre>com.baomidou.mybatisplus.core.incrementer.IKeyGenerator</code></li>
<li>默认值：<code v-pre>null</code></li>
</ul>
<p>表主键生成器(starter 下支持<code v-pre>@bean</code>注入)</p>
<p>logicDeleteField</p>
<ul>
<li>类型：<code v-pre>String</code></li>
<li>默认值：<code v-pre>null</code></li>
</ul>
<p>全局的 entity 的逻辑删除字段属性名,(<a href="https://baomidou.com/guide/logic-delete.html" target="_blank" rel="noopener noreferrer">逻辑删除<ExternalLinkIcon/></a>下有效)</p>
<p>logicDeleteValue</p>
<ul>
<li>类型：<code v-pre>String</code></li>
<li>默认值：<code v-pre>1</code></li>
</ul>
<p>逻辑已删除值,(<a href="https://baomidou.com/guide/logic-delete.html" target="_blank" rel="noopener noreferrer">逻辑删除<ExternalLinkIcon/></a>下有效)</p>
<p>logicNotDeleteValue</p>
<ul>
<li>类型：<code v-pre>String</code></li>
<li>默认值：<code v-pre>0</code></li>
</ul>
<p>逻辑未删除值,(<a href="https://baomidou.com/guide/logic-delete.html" target="_blank" rel="noopener noreferrer">逻辑删除<ExternalLinkIcon/></a>下有效)</p>
<p>insertStrategy</p>
<ul>
<li>类型：<code v-pre>com.baomidou.mybatisplus.annotation.FieldStrategy</code></li>
<li>默认值：<code v-pre>NOT_NULL</code></li>
</ul>
<p>字段验证策略之 insert,在 insert 的时候的字段验证策略</p>
<p>updateStrategy</p>
<ul>
<li>类型：<code v-pre>com.baomidou.mybatisplus.annotation.FieldStrategy</code></li>
<li>默认值：<code v-pre>NOT_NULL</code></li>
</ul>
<p>字段验证策略之 update,在 update 的时候的字段验证策略</p>
<p>whereStrategy</p>
<ul>
<li>类型：<code v-pre>com.baomidou.mybatisplus.annotation.FieldStrategy</code></li>
<li>默认值：<code v-pre>NOT_NULL</code></li>
</ul>
<p>字段验证策略之 select,在 select 的时候的字段验证策略既 wrapper 根据内部 entity 生成的 where 条件</p>
<h3 id="_1-5-mybatisplusconfig配置类" tabindex="-1"><a class="header-anchor" href="#_1-5-mybatisplusconfig配置类" aria-hidden="true">#</a> 1.5 MybatisplusConfig配置类</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><h2 id="第2章-核心功能" tabindex="-1"><a class="header-anchor" href="#第2章-核心功能" aria-hidden="true">#</a> 第2章 核心功能</h2>
<h3 id="_2-1-代码生成器" tabindex="-1"><a class="header-anchor" href="#_2-1-代码生成器" aria-hidden="true">#</a> 2.1 代码生成器</h3>
<p>引入依赖</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mybatis-plus-generator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.4.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.velocity<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>velocity-engine-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>latest-velocity-version<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-分页插件" tabindex="-1"><a class="header-anchor" href="#_2-2-分页插件" aria-hidden="true">#</a> 2.2 分页插件</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">"com.baomidou.cloud.service.*.mapper*"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisPlusConfig</span> <span class="token punctuation">{</span>

    <span class="token comment">// 旧版</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">PaginationInterceptor</span> <span class="token function">paginationInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">PaginationInterceptor</span> paginationInterceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PaginationInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置请求的页面大于最大页后操作， true调回到首页，false 继续请求  默认false</span>
        <span class="token comment">// paginationInterceptor.setOverflow(false);</span>
        <span class="token comment">// 设置最大单页限制数量，默认 500 条，-1 不受限制</span>
        <span class="token comment">// paginationInterceptor.setLimit(500);</span>
        <span class="token comment">// 开启 count 的 join 优化,只针对部分 left join</span>
        paginationInterceptor<span class="token punctuation">.</span><span class="token function">setCountSqlParser</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">JsqlParserCountOptimize</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> paginationInterceptor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 最新版</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">mybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MybatisPlusInterceptor</span> interceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        interceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PaginationInnerInterceptor</span><span class="token punctuation">(</span><span class="token class-name">DbType</span><span class="token punctuation">.</span><span class="token constant">H2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> interceptor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-性能分析插件" tabindex="-1"><a class="header-anchor" href="#_2-3-性能分析插件" aria-hidden="true">#</a> 2.3 性能分析插件</h3>
<h3 id="_2-4-全局拦截插件" tabindex="-1"><a class="header-anchor" href="#_2-4-全局拦截插件" aria-hidden="true">#</a> 2.4 全局拦截插件</h3>
<h2 id="第3章-wrapper条件构造器" tabindex="-1"><a class="header-anchor" href="#第3章-wrapper条件构造器" aria-hidden="true">#</a> 第3章 Wrapper条件构造器</h2>
<p>Wrapper 条件构造抽象类，最顶端父类，抽象类中提供4个方法西面贴源码展示
AbstractWrapper ： 用于查询条件封装，生成 sql 的 where 条件
AbstractLambdaWrapper ： Lambda 语法使用 Wrapper统一处理解析 lambda 获取 column。
LambdaQueryWrapper ：看名称也能明白就是用于Lambda语法使用的查询Wrapper
LambdaUpdateWrapper ： Lambda 更新封装Wrapper
QueryWrapper ： Entity 对象封装操作类，不是用lambda语法
UpdateWrapper ： Update 条件封装，用于Entity对象更新操作</p>
<p><img src="@source/document/java后端/asset/70.png" alt="å¨è¿éæå¥å¾çæè¿°" loading="lazy"></p>
<p><img src="@source/document/java后端/asset/70-20220407132510282.png" alt="å¨è¿éæå¥å¾çæè¿°" loading="lazy"></p>
<h3 id="_3-1-querywrapper" tabindex="-1"><a class="header-anchor" href="#_3-1-querywrapper" aria-hidden="true">#</a> 3.1 QueryWrapper</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>   <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserEntity</span><span class="token punctuation">></span></span> userWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userWrapper<span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span>wrapper<span class="token operator">-></span>wrapper<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"test2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">or</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"test2"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">or</span><span class="token punctuation">(</span>wrapper <span class="token operator">-></span> wrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"test2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">or</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"test2"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

# <span class="token class-name">SELECT</span> id<span class="token punctuation">,</span>username<span class="token punctuation">,</span>pwd<span class="token punctuation">,</span>date_u<span class="token punctuation">,</span>time_u<span class="token punctuation">,</span>u_num<span class="token punctuation">,</span>img <span class="token constant">FROM</span> student <span class="token constant">WHERE</span> <span class="token punctuation">(</span> username <span class="token operator">=</span> <span class="token operator">?</span> <span class="token class-name">OR</span> username <span class="token operator">=</span> <span class="token operator">?</span> <span class="token punctuation">)</span> <span class="token constant">OR</span> <span class="token punctuation">(</span> username <span class="token constant">LIKE</span> <span class="token operator">?</span> <span class="token constant">OR</span> username <span class="token constant">LIKE</span> <span class="token operator">?</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>  <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserEntity</span><span class="token punctuation">></span></span> userWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userWrapper<span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span>wrapper<span class="token operator">-></span>wrapper<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"test2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">or</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"test2"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span>wrapper <span class="token operator">-></span> wrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"test2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">or</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"test2"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
#<span class="token class-name">SELECT</span> id<span class="token punctuation">,</span>username<span class="token punctuation">,</span>pwd<span class="token punctuation">,</span>date_u<span class="token punctuation">,</span>time_u<span class="token punctuation">,</span>u_num<span class="token punctuation">,</span>img <span class="token constant">FROM</span> student <span class="token constant">WHERE</span> <span class="token punctuation">(</span> username <span class="token operator">=</span> <span class="token operator">?</span> <span class="token class-name">OR</span> username <span class="token operator">=</span> <span class="token operator">?</span> <span class="token punctuation">)</span> <span class="token constant">AND</span> <span class="token punctuation">(</span> username <span class="token constant">LIKE</span> <span class="token operator">?</span> <span class="token constant">OR</span> username <span class="token constant">LIKE</span> <span class="token operator">?</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token class-name">QueryWrapper</span> userWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userWrapper<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token string">"select stamp_u,username,name,age from student,rel_student where student.id=rel_student.id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

#select stamp_u<span class="token punctuation">,</span>username<span class="token punctuation">,</span>name<span class="token punctuation">,</span>age from student<span class="token punctuation">,</span>rel_student where student<span class="token punctuation">.</span>id<span class="token operator">=</span>rel_student<span class="token punctuation">.</span>id 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>     <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserEntity</span><span class="token punctuation">></span></span> userWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userWrapper<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"test"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"test"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

#select <span class="token operator">*</span> from student <span class="token class-name">WHERE</span> username <span class="token operator">=</span> <span class="token operator">?</span>  and  username <span class="token operator">=</span> <span class="token operator">?</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-updatewrapper" tabindex="-1"><a class="header-anchor" href="#_3-2-updatewrapper" aria-hidden="true">#</a> 3.2 UpdateWrapper</h3>
<h3 id="_3-3-lombdaquerywrapper" tabindex="-1"><a class="header-anchor" href="#_3-3-lombdaquerywrapper" aria-hidden="true">#</a> 3.3 lombdaQueryWrapper</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">User</span> user <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectOne</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token function">lombdaQueryWrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token operator">::</span><span class="token function">getUsername</span><span class="token punctuation">,</span><span class="token string">"wl"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-4-lombdaupdatewrapper" tabindex="-1"><a class="header-anchor" href="#_3-4-lombdaupdatewrapper" aria-hidden="true">#</a> 3.4 lombdaUpdateWrapper</h3>
<h2 id="第4章-basemapper的curd接口" tabindex="-1"><a class="header-anchor" href="#第4章-basemapper的curd接口" aria-hidden="true">#</a> 第4章 BaseMapper的CURD接口</h2>
<h3 id="_4-1-select" tabindex="-1"><a class="header-anchor" href="#_4-1-select" aria-hidden="true">#</a> 4.1 select</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 根据 ID 查询
     *
     * <span class="token keyword">@param</span> <span class="token parameter">id</span> 主键ID
     */</span>
    <span class="token class-name">T</span> <span class="token function">selectById</span><span class="token punctuation">(</span><span class="token class-name">Serializable</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 查询（根据ID 批量查询）
     *
     * <span class="token keyword">@param</span> <span class="token parameter">idList</span> 主键ID列表(不能为 null 以及 empty)
     */</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token function">selectBatchIds</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">COLLECTION</span><span class="token punctuation">)</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Serializable</span><span class="token punctuation">></span></span> idList<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 查询（根据 columnMap 条件）
     *
     * <span class="token keyword">@param</span> <span class="token parameter">columnMap</span> 表字段 map 对象
     */</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token function">selectByMap</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">COLUMN_MAP</span><span class="token punctuation">)</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> columnMap<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 根据 entity 条件，查询一条记录
     *
     * <span class="token keyword">@param</span> <span class="token parameter">queryWrapper</span> 实体对象封装操作类（可以为 null）
     */</span>
    <span class="token class-name">T</span> <span class="token function">selectOne</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 根据 Wrapper 条件，查询总记录数
     *
     * <span class="token keyword">@param</span> <span class="token parameter">queryWrapper</span> 实体对象封装操作类（可以为 null）
     */</span>
    <span class="token class-name">Integer</span> <span class="token function">selectCount</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 根据 entity 条件，查询全部记录
     *
     * <span class="token keyword">@param</span> <span class="token parameter">queryWrapper</span> 实体对象封装操作类（可以为 null）
     */</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token function">selectList</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 根据 Wrapper 条件，查询全部记录
     *
     * <span class="token keyword">@param</span> <span class="token parameter">queryWrapper</span> 实体对象封装操作类（可以为 null）
     */</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token function">selectMaps</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 根据 Wrapper 条件，查询全部记录
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>注意： 只返回第一个字段的值<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
     *
     * <span class="token keyword">@param</span> <span class="token parameter">queryWrapper</span> 实体对象封装操作类（可以为 null）
     */</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> <span class="token function">selectObjs</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 根据 entity 条件，查询全部记录（并翻页）
     *
     * <span class="token keyword">@param</span> <span class="token parameter">page</span>         分页查询条件（可以为 RowBounds.DEFAULT）
     * <span class="token keyword">@param</span> <span class="token parameter">queryWrapper</span> 实体对象封装操作类（可以为 null）
     */</span>
    <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span> <span class="token keyword">extends</span> <span class="token class-name">IPage</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token class-name">E</span> <span class="token function">selectPage</span><span class="token punctuation">(</span><span class="token class-name">E</span> page<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 根据 Wrapper 条件，查询全部记录（并翻页）
     *
     * <span class="token keyword">@param</span> <span class="token parameter">page</span>         分页查询条件
     * <span class="token keyword">@param</span> <span class="token parameter">queryWrapper</span> 实体对象封装操作类
     */</span>
    <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span> <span class="token keyword">extends</span> <span class="token class-name">IPage</span><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token class-name">E</span> <span class="token function">selectMapsPage</span><span class="token punctuation">(</span><span class="token class-name">E</span> page<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-update" tabindex="-1"><a class="header-anchor" href="#_4-2-update" aria-hidden="true">#</a> 4.2 update</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token doc-comment comment">/**
     * 根据 ID 修改
     *
     * <span class="token keyword">@param</span> <span class="token parameter">entity</span> 实体对象
     */</span>
    <span class="token keyword">int</span> <span class="token function">updateById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">ENTITY</span><span class="token punctuation">)</span> <span class="token class-name">T</span> entity<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 根据 whereEntity 条件，更新记录
     *
     * <span class="token keyword">@param</span> <span class="token parameter">entity</span>        实体对象 (set 条件值,可以为 null)
     * <span class="token keyword">@param</span> <span class="token parameter">updateWrapper</span> 实体对象封装操作类（可以为 null,里面的 entity 用于生成 where 语句）
     */</span>
    <span class="token keyword">int</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">ENTITY</span><span class="token punctuation">)</span> <span class="token class-name">T</span> entity<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> updateWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-insert" tabindex="-1"><a class="header-anchor" href="#_4-3-insert" aria-hidden="true">#</a> 4.3 insert</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token doc-comment comment">/**
     * 插入一条记录
     *
     * <span class="token keyword">@param</span> <span class="token parameter">entity</span> 实体对象
     */</span>
    <span class="token keyword">int</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">T</span> entity<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-delete" tabindex="-1"><a class="header-anchor" href="#_4-4-delete" aria-hidden="true">#</a> 4.4 delete</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>
    <span class="token doc-comment comment">/**
     * 根据 ID 删除
     *
     * <span class="token keyword">@param</span> <span class="token parameter">id</span> 主键ID
     */</span>
    <span class="token keyword">int</span> <span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token class-name">Serializable</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 根据 columnMap 条件，删除记录
     *
     * <span class="token keyword">@param</span> <span class="token parameter">columnMap</span> 表字段 map 对象
     */</span>
    <span class="token keyword">int</span> <span class="token function">deleteByMap</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">COLUMN_MAP</span><span class="token punctuation">)</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> columnMap<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 根据 entity 条件，删除记录
     *
     * <span class="token keyword">@param</span> <span class="token parameter">queryWrapper</span> 实体对象封装操作类（可以为 null,里面的 entity 用于生成 where 语句）
     */</span>
    <span class="token keyword">int</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 删除（根据ID 批量删除）
     *
     * <span class="token keyword">@param</span> <span class="token parameter">idList</span> 主键ID列表(不能为 null 以及 empty)
     */</span>
    <span class="token keyword">int</span> <span class="token function">deleteBatchIds</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">COLLECTION</span><span class="token punctuation">)</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Serializable</span><span class="token punctuation">></span></span> idList<span class="token punctuation">)</span><span class="token punctuation">;</span>

   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第5章-iservice的curd接口" tabindex="-1"><a class="header-anchor" href="#第5章-iservice的curd接口" aria-hidden="true">#</a> 第5章 IService的CURD接口</h2>
<h2 id="第6章-拓展" tabindex="-1"><a class="header-anchor" href="#第6章-拓展" aria-hidden="true">#</a> 第6章 拓展</h2>
<p><a href="https://baomidou.com/pages/e131bd/" target="_blank" rel="noopener noreferrer">主键策略<ExternalLinkIcon/></a></p>
<p><a href="https://baomidou.com/pages/568eb2/" target="_blank" rel="noopener noreferrer">自定义ID生成器<ExternalLinkIcon/></a></p>
<p><a href="https://baomidou.com/pages/6b03c5/" target="_blank" rel="noopener noreferrer">逻辑删除<ExternalLinkIcon/></a></p>
<p><a href="https://baomidou.com/pages/8390a4/" target="_blank" rel="noopener noreferrer">通用枚举<ExternalLinkIcon/></a></p>
<p><a href="https://baomidou.com/pages/fd41d8/" target="_blank" rel="noopener noreferrer">字段类型处理器<ExternalLinkIcon/></a></p>
<p><a href="https://baomidou.com/pages/4c6bcf/" target="_blank" rel="noopener noreferrer">自动填充功能<ExternalLinkIcon/></a></p>
<p><a href="https://baomidou.com/pages/42ea4a/" target="_blank" rel="noopener noreferrer">SQL注入器<ExternalLinkIcon/></a></p>
<p><a href="https://baomidou.com/pages/833fab/" target="_blank" rel="noopener noreferrer">执行SQL分析打印<ExternalLinkIcon/></a></p>
<p><a href="https://baomidou.com/pages/e0a5ce/" target="_blank" rel="noopener noreferrer">数据安全保护<ExternalLinkIcon/></a></p>
<p><a href="https://baomidou.com/pages/a61e1b/" target="_blank" rel="noopener noreferrer">多数据源<ExternalLinkIcon/></a></p>
<p><a href="https://baomidou.com/pages/ba5b24/" target="_blank" rel="noopener noreferrer">MybatisX快速开发插件<ExternalLinkIcon/></a></p>
<p><a href="https://baomidou.com/pages/1864e1/" target="_blank" rel="noopener noreferrer">企业高级特性<ExternalLinkIcon/></a></p>
<p><a href="https://baomidou.com/pages/2976a3/" target="_blank" rel="noopener noreferrer">插件主体<ExternalLinkIcon/></a></p>
<p><a href="https://baomidou.com/pages/97710a/" target="_blank" rel="noopener noreferrer">分页插件<ExternalLinkIcon/></a></p>
<p><a href="https://baomidou.com/pages/0d93c0/" target="_blank" rel="noopener noreferrer">乐观锁插件<ExternalLinkIcon/></a></p>
<p><a href="https://baomidou.com/pages/aef2f2/" target="_blank" rel="noopener noreferrer">多租户插件<ExternalLinkIcon/></a></p>
<p><a href="https://baomidou.com/pages/333106/" target="_blank" rel="noopener noreferrer">防全表更新与删除插件<ExternalLinkIcon/></a></p>
<p><a href="https://baomidou.com/pages/2a45ff/" target="_blank" rel="noopener noreferrer">动态表名插件<ExternalLinkIcon/></a></p>
</div></template>
