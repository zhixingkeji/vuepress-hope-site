<template><div><h2 id="一-mysql简介" tabindex="-1"><a class="header-anchor" href="#一-mysql简介" aria-hidden="true">#</a> 一. mysql简介</h2>
<h3 id="_1-1-mysql常用指令" tabindex="-1"><a class="header-anchor" href="#_1-1-mysql常用指令" aria-hidden="true">#</a> 1.1 <strong>mysql常用指令</strong></h3>
<table>
<thead>
<tr>
<th>指令</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>show databases</td>
<td>展示所有数据库</td>
</tr>
<tr>
<td>create database name</td>
<td>创建数据库</td>
</tr>
<tr>
<td>create table name</td>
<td>创建数据表</td>
</tr>
<tr>
<td>ues dbtest</td>
<td>连接dbtest数据库</td>
</tr>
<tr>
<td>show tables</td>
<td>展示当前库的所有表</td>
</tr>
<tr>
<td>show tables from t1</td>
<td>展示t1库的所有表</td>
</tr>
<tr>
<td>show warnings</td>
<td>查看警告</td>
</tr>
<tr>
<td>desc t1</td>
<td>查看t1表的结构</td>
</tr>
<tr>
<td>show create table t1</td>
<td>查看t1表的建表语句</td>
</tr>
<tr>
<td>source 文件绝对路径</td>
<td>导入sql脚本</td>
</tr>
<tr>
<td>select database();</td>
<td>查看当前所在的数据库</td>
</tr>
<tr>
<td>select version();</td>
<td>查看当前数据库的版本</td>
</tr>
<tr>
<td>drop database  name</td>
<td>删库</td>
</tr>
<tr>
<td>drop table  name</td>
<td>删表</td>
</tr>
<tr>
<td>\c</td>
<td>结束指令</td>
</tr>
<tr>
<td>\q</td>
<td>退出</td>
</tr>
</tbody>
</table>
<p>严格模式</p>
<p>set sql_mode = &quot;TRADITIONAL&quot;;    # 关闭</p>
<p>set sql_model= &quot;&quot;;  # 开启</p>
<h3 id="_1-2-数据类型" tabindex="-1"><a class="header-anchor" href="#_1-2-数据类型" aria-hidden="true">#</a> 1.2 <strong>数据类型</strong></h3>
<h4 id="_1-2-1-数值型" tabindex="-1"><a class="header-anchor" href="#_1-2-1-数值型" aria-hidden="true">#</a> 1.2.1 数值型</h4>
<p>一般不用 浮点型, 会自动取舍 ,丢失精度</p>
<p>使用DECIMAL存储浮点型, 原理是以字符串形式表示浮点数</p>
<p><img src="@source/document/数据库/asset/mysql教程-1636895820262.png" alt="截图.png" loading="lazy"></p>
<h4 id="_1-2-2-日期时间型" tabindex="-1"><a class="header-anchor" href="#_1-2-2-日期时间型" aria-hidden="true">#</a> 1.2.2 日期时间型</h4>
<p>一般存为时间戳 TIMESTAMP , 然后在程序内处理日期</p>
<p><img src="@source/document/数据库/asset/mysql教程-1636895860535.png" alt="1.png" loading="lazy"></p>
<h4 id="_1-2-3-字符串型" tabindex="-1"><a class="header-anchor" href="#_1-2-3-字符串型" aria-hidden="true">#</a> 1.2.3 字符串型</h4>
<p>char 比 varchar 查询效率高</p>
<p>BLOG 存储二进制大对象和文本串</p>
<p>EBUM 枚举</p>
<p>SET 集合</p>
<p><img src="@source/document/数据库/asset/mysql教程-1636895865516.png" alt="2.png" loading="lazy"></p>
<h4 id="_1-2-4-json" tabindex="-1"><a class="header-anchor" href="#_1-2-4-json" aria-hidden="true">#</a> 1.2.4 JSON</h4>
<p>JSON_ARRAY  # 创建json数组</p>
<p>JSON_OBJECT  # 创建json对象</p>
<p>JSON_ARRAY_INSERT # 插入数据到json数组中,不替换现有值</p>
<p>JSON_SET  #  替换现有值, 并增加没有存储的值</p>
<p>JSON_REPLACE # 仅替换现有值</p>
<h3 id="_1-3-表的设计三范式" tabindex="-1"><a class="header-anchor" href="#_1-3-表的设计三范式" aria-hidden="true">#</a> 1.3 <strong>表的设计三范式</strong></h3>
<p>按照三范式设计的表不会出现数据冗余。
①任何一张表都应该有主键，并且每字段原子性不可再分。<br>
②在第一范式下，非主键字段完全依赖（所有）主键。<br>
③在第二范式下，非主键字段直接依赖主键，不能有传递依赖。</p>
<p><strong>表的经典设计方案</strong><br>
一对一：主键共享，外键唯一。<br>
一对多：两张表<br>
多对多：三张表，关系表两外键</p>
<h3 id="_1-4-索引" tabindex="-1"><a class="header-anchor" href="#_1-4-索引" aria-hidden="true">#</a> 1.4 <strong>索引</strong></h3>
<p>索引就是一本书的目录，通过目录可以快速找到对应的资源。<br>
检索方式：全盘扫描，根据索引搜索。<br>
索引原理：缩小了搜索范围，所以提高了效率</p>
<p>索引是给某些字段添加的，也需要被维护。<br>
经常修改的数据不适合添加索引，如果数据修改，就要重排索引。<br>
在数据量庞大，经常出现在where语句中，以及少量的DML操作时，才会添加索引。</p>
<p>主键和unique约束的字段会自动添加索引，所以根据主键查询效率较高。</p>
<p>查看sql执行语句的计划，在要执行的语句前面加上explain关键字即可。<br>
explain select * from emp;</p>
<p>创建索引对象<br>
create index 索引名称 on 表名（字段名）；</p>
<p>删除索引对象<br>
create index 索引名称 on 表名；</p>
<p>索引底层数据结构：B + Tree</p>
<h3 id="_1-5-视图" tabindex="-1"><a class="header-anchor" href="#_1-5-视图" aria-hidden="true">#</a> 1.5 <strong>视图</strong></h3>
<p>视图：同一张表的数据，站在不同的角度去看待。</p>
<p>创建视图<br>
create view myview as select empno,ename from emp;</p>
<p>删除视图<br>
drop view myview;</p>
<p>只有DQL语句才能创建视图。<br>
对视图的增删改查，会影响到原表数据。<br>
通过视图影响原表数据，不是原表的直接操作。</p>
<p>意义：有些机密信息包含在数据库中，将任务外包给程序员，只给视图即可。</p>
<h3 id="_1-6-存储引擎" tabindex="-1"><a class="header-anchor" href="#_1-6-存储引擎" aria-hidden="true">#</a> 1.6 存储引擎</h3>
<p>默认 ENGINE= InnoDB default CHARSET=utf8</p>
<p>MyISAM引擎</p>
<p>三张表：格式，数据，索引</p>
<p>可以被压缩，转换为只读文件，不支持事物</p>
<p>InnoDB引擎</p>
<p>存储在表空间中，无法被压缩。</p>
<p>支持事物，行级锁，外键，崩溃后自动恢复</p>
<p>MEMORY引擎</p>
<p>查询速度最快</p>
<p>不支持事物，回滚，容易丢失数据</p>
<h3 id="_1-8-锁机制" tabindex="-1"><a class="header-anchor" href="#_1-8-锁机制" aria-hidden="true">#</a> 1.8 锁机制</h3>
<p>表锁, 开销最小</p>
<p>行锁, 开销最大</p>
<p>乐观锁</p>
<p>悲观锁</p>
<p>自旋锁</p>
<h2 id="二-mysql操作" tabindex="-1"><a class="header-anchor" href="#二-mysql操作" aria-hidden="true">#</a> 二. mysql操作</h2>
<h3 id="_2-1-建库相关" tabindex="-1"><a class="header-anchor" href="#_2-1-建库相关" aria-hidden="true">#</a> 2.1 建库相关</h3>
<h4 id="_2-1-1-建库语句" tabindex="-1"><a class="header-anchor" href="#_2-1-1-建库语句" aria-hidden="true">#</a> 2.1.1 建库语句</h4>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> dbname 
<span class="token keyword">DEFAULT</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-2-删库语句" tabindex="-1"><a class="header-anchor" href="#_2-1-2-删库语句" aria-hidden="true">#</a> 2.1.2 删库语句</h4>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> dbname 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-1-3-查看数据库建库的命令" tabindex="-1"><a class="header-anchor" href="#_2-1-3-查看数据库建库的命令" aria-hidden="true">#</a> 2.1.3 查看数据库建库的命令</h4>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> dbname<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-1-4-切换数据库" tabindex="-1"><a class="header-anchor" href="#_2-1-4-切换数据库" aria-hidden="true">#</a> 2.1.4 切换数据库</h4>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">USE</span> dbname<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-1-5-查看当前所在的库" tabindex="-1"><a class="header-anchor" href="#_2-1-5-查看当前所在的库" aria-hidden="true">#</a> 2.1.5 查看当前所在的库</h4>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DATABASE</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-建表相关" tabindex="-1"><a class="header-anchor" href="#_2-2-建表相关" aria-hidden="true">#</a> 2.2 建表相关</h3>
<h4 id="_2-2-1-查看所有表" tabindex="-1"><a class="header-anchor" href="#_2-2-1-查看所有表" aria-hidden="true">#</a> 2.2.1 查看所有表</h4>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SHOW</span> <span class="token keyword">TABLES</span><span class="token punctuation">;</span>
<span class="token keyword">SHOW</span> <span class="token keyword">TABLES</span> <span class="token keyword">FROM</span> dbname<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-查看表结构" tabindex="-1"><a class="header-anchor" href="#_2-2-2-查看表结构" aria-hidden="true">#</a> 2.2.2 查看表结构</h4>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DESC</span> tablename<span class="token punctuation">;</span>
<span class="token keyword">SHOW</span> <span class="token keyword">COLUMNS</span> <span class="token keyword">FROM</span> tablename<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-3-建表语句" tabindex="-1"><a class="header-anchor" href="#_2-2-3-建表语句" aria-hidden="true">#</a> 2.2.3 建表语句</h4>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>runoob_tbl<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">`</span>runoob_id<span class="token punctuation">`</span></span> <span class="token keyword">INT</span> <span class="token keyword">UNSIGNED</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>runoob_title<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>runoob_author<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>submission_date<span class="token punctuation">`</span></span> <span class="token keyword">DATE</span><span class="token punctuation">,</span>
<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span> <span class="token identifier"><span class="token punctuation">`</span>runoob_id<span class="token punctuation">`</span></span> <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-数据相关" tabindex="-1"><a class="header-anchor" href="#_2-3-数据相关" aria-hidden="true">#</a> 2.3 数据相关</h3>
<h4 id="_2-3-1-增加数据" tabindex="-1"><a class="header-anchor" href="#_2-3-1-增加数据" aria-hidden="true">#</a> 2.3.1 增加数据</h4>
<p>字符数据必须要加引号</p>
<p>部分插入</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> tablename <span class="token punctuation">(</span> field1<span class="token punctuation">,</span> field2<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>fieldN <span class="token punctuation">)</span>
<span class="token keyword">VALUES</span> <span class="token punctuation">(</span> value1<span class="token punctuation">,</span> value2<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>valueN <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>完整插入</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> t_stu <span class="token keyword">values</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">'zhangsan'</span><span class="token punctuation">,</span><span class="token string">'f'</span><span class="token punctuation">,</span><span class="token string">'class3'</span><span class="token punctuation">,</span><span class="token string">'1999-10-21'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">'jack'</span><span class="token punctuation">,</span><span class="token string">'f'</span><span class="token punctuation">,</span><span class="token string">'class1'</span><span class="token punctuation">,</span><span class="token string">'1999-11-21'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">'lisi'</span><span class="token punctuation">,</span><span class="token string">'m'</span><span class="token punctuation">,</span><span class="token string">'class2'</span><span class="token punctuation">,</span><span class="token string">'1999-12-21'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-2-修改数据" tabindex="-1"><a class="header-anchor" href="#_2-3-2-修改数据" aria-hidden="true">#</a> 2.3.2 修改数据</h4>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code> <span class="token keyword">UPDATE</span> table1 <span class="token keyword">SET</span> field1 <span class="token operator">=</span> new<span class="token operator">-</span>value1<span class="token punctuation">,</span> field2 <span class="token operator">=</span> new<span class="token operator">-</span><span class="token keyword">value</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-3-3-删除数据" tabindex="-1"><a class="header-anchor" href="#_2-3-3-删除数据" aria-hidden="true">#</a> 2.3.3 删除数据</h4>
<p>删除表的数据</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>delete from deptCopy where deptno <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>没有条件全部删除</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>delete from deptCopy<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：delete 不释放物理空间，可以回滚，效率慢。</p>
<p>不可恢复性删除，直接截断表中所有的数据，不可恢复</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>truncate table deptCopy<span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>只是删除表的数据，并不是删除表</p>
<h3 id="_2-4-字段约束" tabindex="-1"><a class="header-anchor" href="#_2-4-字段约束" aria-hidden="true">#</a> 2.4 字段约束</h3>
<h4 id="_2-4-1-unsigned" tabindex="-1"><a class="header-anchor" href="#_2-4-1-unsigned" aria-hidden="true">#</a> 2.4.1 UNSIGNED</h4>
<p>只能设置数值类型 , 不能存储负数</p>
<p>使用了无符号模式 , 可存储长度增加一倍</p>
<h4 id="_2-4-2-zerofill" tabindex="-1"><a class="header-anchor" href="#_2-4-2-zerofill" aria-hidden="true">#</a> 2.4.2 ZEROFILL</h4>
<p>只能设置数值类型</p>
<p>位数不足在左侧自动补零</p>
<h4 id="_2-4-3-auto-increment" tabindex="-1"><a class="header-anchor" href="#_2-4-3-auto-increment" aria-hidden="true">#</a> 2.4.3 AUTO_INCREMENT</h4>
<p>不能单独使用, 必须配合索引</p>
<h4 id="_2-4-4-null-和-not-null" tabindex="-1"><a class="header-anchor" href="#_2-4-4-null-和-not-null" aria-hidden="true">#</a> 2.4.4 NULL 和 NOT NULL</h4>
<p>没有插入的字段 自动为 NULL</p>
<p>设置了不能为空的字段 就必须要插入数据</p>
<h4 id="_2-4-5-default" tabindex="-1"><a class="header-anchor" href="#_2-4-5-default" aria-hidden="true">#</a> 2.4.5 DEFAULT</h4>
<p>如果没有添加值 , 则使用默认值</p>
<h3 id="_2-5-主键约束" tabindex="-1"><a class="header-anchor" href="#_2-5-主键约束" aria-hidden="true">#</a> 2.5 主键约束</h3>
<h4 id="_2-5-1-primary-key" tabindex="-1"><a class="header-anchor" href="#_2-5-1-primary-key" aria-hidden="true">#</a> 2.5.1 PRIMARY KEY</h4>
<p>主键自动 NOT NULL</p>
<p>主键保证数据唯一性</p>
<p>自增必须是主键 , 主键不一定是自增</p>
<p>每张表只能存在一个主键 ( 复合主键 )</p>
<h3 id="_2-6-外键约束" tabindex="-1"><a class="header-anchor" href="#_2-6-外键约束" aria-hidden="true">#</a> 2.6 外键约束</h3>
<p><strong>实际开发中不能使用!</strong></p>
<p>FOREIGN KEY (col) REFERENCES table (id)</p>
<p>父表和子表要使用 innodb</p>
<p>不能使用临时表</p>
<p>子表父表字段的约束必须相同</p>
<p>外键必须创建索引, 没有会自动创建</p>
<p>查看索引</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SHOW</span> INDEXES <span class="token keyword">FROM</span> tablename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-7-唯一约束" tabindex="-1"><a class="header-anchor" href="#_2-7-唯一约束" aria-hidden="true">#</a> 2.7 唯一约束</h3>
<p>UNIQUE KEY</p>
<p>唯一约束的字段不能有重复的数据</p>
<p>唯一约束可以为空</p>
<p>可以存在多个唯一约束</p>
<p>应用 : 该用户名已被注册</p>
<h2 id="三-查询操作" tabindex="-1"><a class="header-anchor" href="#三-查询操作" aria-hidden="true">#</a> 三. 查询操作</h2>
<h3 id="_3-1-简单查询" tabindex="-1"><a class="header-anchor" href="#_3-1-简单查询" aria-hidden="true">#</a> 3.1 简单查询</h3>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> 字段 <span class="token keyword">from</span> 表名 <span class="token keyword">where</span> 条件<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-1-1-模糊查询-like" tabindex="-1"><a class="header-anchor" href="#_3-1-1-模糊查询-like" aria-hidden="true">#</a> 3.1.1 模糊查询 like</h4>
<p><code v-pre>%</code>  代表任意多个字符</p>
<p><code v-pre>_</code>  代表任意一个字符</p>
<p>where name like '%o%'   找出名字中有o的</p>
<p>where name like 'o%'   找出o开头的</p>
<p>where name like 'o%'   找出o结尾的</p>
<p>where name like '<em>a%'  找出名字中第二个字符是a的</em></p>
<p><code v-pre>_a_</code>    //三位且中间字母是a的</p>
<p><code v-pre>_a</code>     //两位且结尾字母是a的</p>
<p><code v-pre>a_</code>     //两位且开头字母是a的</p>
<h4 id="_3-1-2-排序" tabindex="-1"><a class="header-anchor" href="#_3-1-2-排序" aria-hidden="true">#</a> 3.1.2 <strong>排序</strong></h4>
<p>order by 字段; // 默认是升序排列</p>
<p>order by 字段 asc ; // 指定为升序排列</p>
<p>order by 字段 desc ; // 指定为降序排列</p>
<p>需求：按照工资降序排列？</p>
<p>select nama,sal from emp order by sal desc;</p>
<p>需求：按照工资降序排列，当工资相同按照姓名升序排列？</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> nama<span class="token punctuation">,</span>sal <span class="token keyword">from</span> emp <span class="token keyword">order</span> <span class="token keyword">by</span> sal <span class="token keyword">desc</span><span class="token punctuation">,</span> name <span class="token keyword">asc</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需求：找出销售员按照工资降序排列，当工资相同按照姓名升序排列？</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> nama<span class="token punctuation">,</span>sal<span class="token punctuation">,</span>job
<span class="token keyword">from</span> emp
<span class="token keyword">where</span> job <span class="token operator">=</span> <span class="token string">'SALESMAN'</span>
<span class="token keyword">order</span> <span class="token keyword">by</span> sal <span class="token keyword">desc</span><span class="token punctuation">,</span> name <span class="token keyword">asc</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>逗号后面的规则可能根本用不上，只有当前面字段排序后出现相等情况，才会启用逗号后面的规则</p>
<h4 id="_3-1-3-限制-limit" tabindex="-1"><a class="header-anchor" href="#_3-1-3-限制-limit" aria-hidden="true">#</a> 3.1.3 限制 limit</h4>
<p>概念：mysql数据库中特有的属性<br>
作用：取结果集中的部分数据。<br>
周期：limit 是最后执行的部分<br>
语法：limit startIndex，length<br>
索引从0开始，length表示长度</p>
<p>需求：取出工资前五名的员工</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> ename,sal from emp order by sal desc limit <span class="token number">0,5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需求：找出工资在第4到9名的员工 ( 跳过前3条 ,  取6条数据 )</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> ename,sal from emp order by sal desc limit <span class="token number">3,6</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实际开发的应用：数据分页展示</p>
<p>pageSize  pageNumber</p>
<p>int pageSize = 10; //每页显示10条数据</p>
<p>int pageNumber = 2 ; //页面是2</p>
<p>limit (pageNumber -1 )*pageSize,pageSize</p>
<h4 id="_3-1-4-in-关键字" tabindex="-1"><a class="header-anchor" href="#_3-1-4-in-关键字" aria-hidden="true">#</a> 3.1.4 in 关键字</h4>
<p><code v-pre>in</code></p>
<p><code v-pre>not in</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> ename,job from emp  
where job in<span class="token punctuation">(</span><span class="token string">'MANAGER'</span>,<span class="token string">'SALESMAN'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-5-逻辑运算符" tabindex="-1"><a class="header-anchor" href="#_3-1-5-逻辑运算符" aria-hidden="true">#</a> 3.1.5 逻辑运算符</h4>
<p>where name like '%_%'  找出名字中有下划线的</p>
<p><code v-pre>and 并且</code></p>
<p><code v-pre>or 或者</code></p>
<p><code v-pre>is null   / not  is null</code></p>
<p><code v-pre>in(值1，值2，值3，值4...)  / not in</code>  查找的不是范围，是确定值</p>
<p><code v-pre>&lt;&gt;</code>  不等于</p>
<p><code v-pre>between 100 and 500</code>  查找100到500闭区间</p>
<p><code v-pre>between 'A' and 'C'</code>  查找A到B闭区间</p>
<h3 id="_3-2-分组查询-group-by" tabindex="-1"><a class="header-anchor" href="#_3-2-分组查询-group-by" aria-hidden="true">#</a> 3.2 分组查询 group by</h3>
<p>group by 和 having</p>
<p>group by：按照某个字段或者某些字段进行分组</p>
<p>having：having是对分组之后的数据进行再次过滤</p>
<p>group by 一般联合 分组函数使用，先进行分组，再执行函数。</p>
<p>如果没有group by进行分组，整张表自成一组。</p>
<p>分组函数不能出现在where子句中，因为group by是在where后面执行，没分组之前不能用分组函数。</p>
<p>分组的查询语句中，select后面跟未分组的字段或不是分组函数的字段毫无意义，标准sql直接报错，mysql能运行但数据也是乱的。</p>
<p>需求：找出每个工作岗位的最高薪资</p>
<p>select max(sal),job from emp group by job;</p>
<p>需求：找出所有高于平均工资的员工</p>
<p>select name,sal from emp where sal &gt; ( select avg(sal) from emp)</p>
<p>需求：找出每个部门里每个工作岗位的最高薪资</p>
<p>select deptno,job,max(sal) from emp group by deptno,job;</p>
<p>having 和 where
完整的DQL语句执行顺序：</p>
<p>⑤select，①from，②where，③group by，④having，⑥order by</p>
<p>需求：找出每个部门的最高薪资，并且要大于2900</p>
<p>select max(sal),deptno from emp group by deptno having max(sal) &gt; 2900;     // 效率较低</p>
<p>select max(sal),deptno from emp where sal &gt; 2900 group by deptno;    // 效率较高</p>
<p>需求：找个每个部门的平均薪资，并且要大于2000</p>
<p>select deptno,avg(sal) from emp group by deptno having avg(sal) &gt;2000;</p>
<h3 id="_3-3-连接查询" tabindex="-1"><a class="header-anchor" href="#_3-3-连接查询" aria-hidden="true">#</a> 3.3 连接查询</h3>
<p>实际开发中，一般都是多表查询。</p>
<p>一般一个业务对应多张表，比如学生和班级，最少两张表。</p>
<h4 id="_3-3-1-笛卡尔积现象" tabindex="-1"><a class="header-anchor" href="#_3-3-1-笛卡尔积现象" aria-hidden="true">#</a> 3.3.1 笛卡尔积现象</h4>
<p>select e.ename, d.dname from emp as e,dept as d;</p>
<p>当两张表进行连接查询的时候，没有任何条件限制，最终的查询结果数就是两张表记录的乘积。</p>
<p>需求：找出每个员工的部门名称</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> e<span class="token punctuation">.</span>ename<span class="token punctuation">,</span> d<span class="token punctuation">.</span>dname
<span class="token keyword">from</span> emp  e<span class="token punctuation">,</span>dept  d
<span class="token keyword">where</span> e<span class="token punctuation">.</span>deptno <span class="token operator">=</span> d<span class="token punctuation">.</span>deptno<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-2-内连接" tabindex="-1"><a class="header-anchor" href="#_3-3-2-内连接" aria-hidden="true">#</a> 3.3.2 内连接</h4>
<p>join on 等值连接：表连接条件是等量关系</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> e<span class="token punctuation">.</span>ename<span class="token punctuation">,</span> d<span class="token punctuation">.</span>dname
<span class="token keyword">from</span> emp <span class="token keyword">as</span> e <span class="token keyword">join</span> dept <span class="token keyword">as</span> d   
<span class="token comment">//  from A inner(可以省略) join B</span>
<span class="token keyword">on</span> e<span class="token punctuation">.</span>deptno <span class="token operator">=</span> d<span class="token punctuation">.</span>deptno  <span class="token comment">// on 表连接条件</span>
<span class="token keyword">where</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>   <span class="token comment">// 过滤条件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>join 非等值连接：表连接条件是非等量关系</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> e.ename,e.sal,s.grade
from emp as e <span class="token function">join</span> salgrade as s
on e.sal between s.losal and s.hisal<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-3-inner-join-自连接" tabindex="-1"><a class="header-anchor" href="#_3-3-3-inner-join-自连接" aria-hidden="true">#</a> 3.3.3 inner join 自连接：</h4>
<p>自己连接自己，一张表看做两张表</p>
<p>自连接的 inner 不可省略</p>
<p>需求：找出每个员工的上级领导</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> a.ename as <span class="token string">'员工'</span>, b.ename as <span class="token string">'领导'</span>
from emp a inner <span class="token function">join</span> emp b
on a.mgr <span class="token operator">=</span> b.empno<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-4-外连接" tabindex="-1"><a class="header-anchor" href="#_3-3-4-外连接" aria-hidden="true">#</a> 3.3.4 外连接</h4>
<p>内连接AB是平行的，只查AB匹配的数据，有些数据可能丢失。</p>
<p>外连接分主副表，主表数据完全查找，不会丢失数据，副表若没有匹配上，则显示NULL。</p>
<p>左连接有右连接的写法，右连接也有左连接的写法。</p>
<p>outer 可以省略</p>
<p>left join 左连接：表示左边的表是主表</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> a.ename as <span class="token string">'员工'</span>, b.ename as <span class="token string">'领导'</span>
from emp a left <span class="token function">join</span> emp b
on a.mgr <span class="token operator">=</span> b.empno<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>right join 右连接：表示右边的表示主表</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> a.ename as <span class="token string">'员工'</span>, b.ename as <span class="token string">'领导'</span>
from emp b right <span class="token function">join</span> emp a
on a.mgr <span class="token operator">=</span> b.empno<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求：查找没有员工的部门<br>
分析：有的部门没有员工，部门要显示完整，员工可能为NULL，所以主表为部门表，副表为员工表</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> d.*
from dept d left <span class="token function">join</span> emp e
on d.deptno <span class="token operator">=</span> e.deptno
where e.empno is null<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求：找出每一个员工的部门名称和工资等级
分析：A join B join C ，A先和B连接的结果再和C连接</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> e.ename,d.dname,s.grade
from emp e
<span class="token function">join</span> dept d
on e.deptno <span class="token operator">=</span> d.deptno
<span class="token function">join</span> salgrade s
on e.sal between s.losal and s.hisal<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求：找出每一个员工的部门名称和工资等级和上级领导
分析：上级领导需要用到外连接，有的员工没有领导，所以领导是副表</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> e.ename <span class="token string">'员工'</span>,d.dname <span class="token string">'部门'</span>,s.grade <span class="token string">'等级'</span>,m.ename <span class="token string">'领导'</span>
from emp e
<span class="token function">join</span> dept d
on e.deptno <span class="token operator">=</span> d.deptno
<span class="token function">join</span> salgrade s
on e.sal between s.losal and s.hisal
left <span class="token function">join</span> emp m
on e.mgr <span class="token operator">=</span> m.empno<span class="token punctuation">;</span>  //员工的领导编号等于领导的员工编号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-子查询" tabindex="-1"><a class="header-anchor" href="#_3-4-子查询" aria-hidden="true">#</a> 3.4 子查询</h3>
<h4 id="_3-4-1-where中嵌套子查询" tabindex="-1"><a class="header-anchor" href="#_3-4-1-where中嵌套子查询" aria-hidden="true">#</a> 3.4.1 where中嵌套子查询</h4>
<p>需求：查找所有大于平均工资的员工数据</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> * from emp where sal <span class="token operator">></span> <span class="token punctuation">(</span>select avg<span class="token punctuation">(</span>sal<span class="token punctuation">)</span> from emp<span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-4-2-select中嵌套子查询" tabindex="-1"><a class="header-anchor" href="#_3-4-2-select中嵌套子查询" aria-hidden="true">#</a> 3.4.2 select中嵌套子查询</h4>
<p>需求：找出每个员工名及其所在的部门名称</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> e.ename,<span class="token punctuation">(</span>
<span class="token keyword">select</span> d.dname
from dept d
where e.deptno <span class="token operator">=</span> d.deptno
<span class="token punctuation">)</span> as dname
from emp e<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4-3-from中嵌套子查询" tabindex="-1"><a class="header-anchor" href="#_3-4-3-from中嵌套子查询" aria-hidden="true">#</a> 3.4.3 from中嵌套子查询</h4>
<p>需求：找出每个部门平均薪水的薪资等级</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> t.*,s.grade
from <span class="token punctuation">(</span>select deptno,avg<span class="token punctuation">(</span>sal<span class="token punctuation">)</span> as avgsal from emp group by deptno<span class="token punctuation">)</span> t
<span class="token function">join</span> salgrade s
on t.avgsal between s.losal and s.hisal<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4-4-表的复制" tabindex="-1"><a class="header-anchor" href="#_3-4-4-表的复制" aria-hidden="true">#</a> 3.4.4 表的复制</h4>
<p>将查询结构当做新表创建出来</p>
<p>create table 表名 as select语句;</p>
<p>将查询结构插入到一张表中</p>
<p>insert into 表名 select语句;</p>
<h3 id="_3-5-函数" tabindex="-1"><a class="header-anchor" href="#_3-5-函数" aria-hidden="true">#</a> 3.5 函数</h3>
<h4 id="_3-5-1-多行处理函数" tabindex="-1"><a class="header-anchor" href="#_3-5-1-多行处理函数" aria-hidden="true">#</a> 3.5.1 多行处理函数</h4>
<p>所有分组函数都是对某一组数据进行操作的</p>
<p>分组函数自动忽略NULL</p>
<p>count 计数，sum 求和，avg 平均值，max 最大值，min 最小值</p>
<p>count(*) 是统计所有记录的条数，</p>
<p>count(name) 是统计所有name不为NULL的条数</p>
<p>需求：找出工资最大值和最小值</p>
<p>select max(sal),min(sal) from emp</p>
<p>需求：找出工资总和</p>
<p>select sum(sal) from emp</p>
<h4 id="_3-5-2-单行处理函数" tabindex="-1"><a class="header-anchor" href="#_3-5-2-单行处理函数" aria-hidden="true">#</a> 3.5.2 单行处理函数</h4>
<p>只要有NULL参与的运算，结果都是NULL</p>
<p>ifnull(可能为NULL的数据，当做什么来处理)</p>
<p>需求：计算员工的年薪</p>
<p>select name,(sal+ifnull(comm,0))*12 as yearsal from emp;</p>
<h4 id="_3-5-3-字符函数" tabindex="-1"><a class="header-anchor" href="#_3-5-3-字符函数" aria-hidden="true">#</a> 3.5.3 字符函数</h4>
<p>CONCAT()   # 字符连接</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> CONCAT<span class="token punctuation">(</span>id<span class="token punctuation">,</span><span class="token string">"-"</span><span class="token punctuation">,</span>name<span class="token punctuation">)</span> <span class="token keyword">as</span> idame <span class="token keyword">from</span> <span class="token keyword">user</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>CONCAT_WS()  # 使用指定分隔符连接</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> CONCAT_WS<span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span>id<span class="token punctuation">,</span>name<span class="token punctuation">)</span> <span class="token keyword">from</span> <span class="token keyword">user</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-5-4-字符串函数" tabindex="-1"><a class="header-anchor" href="#_3-5-4-字符串函数" aria-hidden="true">#</a> 3.5.4 字符串函数</h4>
<p>LENGTH()  # 获取长度</p>
<p>TRIM()  # 去除前后空格</p>
<p>SUBSTRING()  # 字符串截取</p>
<p>REPLACE()  # 字符串替换</p>
<h4 id="_3-5-5-数值函数" tabindex="-1"><a class="header-anchor" href="#_3-5-5-数值函数" aria-hidden="true">#</a> 3.5.5 数值函数</h4>
<p>FOWER()  # 幂运算</p>
<p>ROUND()  # 四舍五入</p>
<h4 id="_3-5-6-比较运算函数" tabindex="-1"><a class="header-anchor" href="#_3-5-6-比较运算函数" aria-hidden="true">#</a> 3.5.6 比较运算函数</h4>
<p>in()  # 在列出值范围内</p>
<p>not in () # 不在列出值范围内</p>
<p>between and   # 在范围内</p>
<p>not betwwen and   # 不在范围内</p>
<p>is null  # 为空</p>
<p>is not null  # 不为空</p>
<h4 id="_3-5-7-日期时间函数" tabindex="-1"><a class="header-anchor" href="#_3-5-7-日期时间函数" aria-hidden="true">#</a> 3.5.7 日期时间函数</h4>
<p>now()  # 当前日期和时间</p>
<p>curdate  # 当前日期</p>
<p>curtime  # 当前时间</p>
<h4 id="_3-5-8-信息函数" tabindex="-1"><a class="header-anchor" href="#_3-5-8-信息函数" aria-hidden="true">#</a> 3.5.8 信息函数</h4>
<p>connection_id  # 连接id</p>
<p>user() # 当前用户</p>
<p>database() # 当前数据库</p>
<p>last_insert_id()  # 最后插入记录的id</p>
<h4 id="_3-5-9-聚合函数" tabindex="-1"><a class="header-anchor" href="#_3-5-9-聚合函数" aria-hidden="true">#</a> 3.5.9 聚合函数</h4>
<p>avg()  # 平均值</p>
<p>count()  # 计数</p>
<p>max()  # 最大值</p>
<p>min()  # 最小值</p>
<p>sum()  # 求和</p>
<h4 id="_3-5-10-自定义函数" tabindex="-1"><a class="header-anchor" href="#_3-5-10-自定义函数" aria-hidden="true">#</a> 3.5.10 自定义函数</h4>
<h3 id="_3-6-去重" tabindex="-1"><a class="header-anchor" href="#_3-6-去重" aria-hidden="true">#</a> 3.6 去重</h3>
<p>查询结构集的去重</p>
<p>select distinct job from emp;</p>
<p>distinct 出现在所有字段前面，后面的字段联合去重</p>
<p>需求：查询去重后的岗位数量</p>
<p>select count(distinct job) from emp;</p>
<p>union 查询结果集取并集</p>
<p>两结果集的列的数量必须一致</p>
<p>需求：找出工作岗位是salesman和manager的员工</p>
<p>使用or关键字</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> ename,job from emp
where job <span class="token operator">=</span> <span class="token string">'MANAGER'</span> or job <span class="token operator">=</span> <span class="token string">'SALESMAN'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>UNION 语句：用于将不同表中相同列中查询的数据展示出来；（不包括重复数据）<br>
UNION ALL 语句：用于将不同表中相同列中查询的数据展示出来；（包括重复数据）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> ename,job from emp where job <span class="token operator">=</span> <span class="token string">'MANAGER'</span>  
union 
<span class="token keyword">select</span> ename,job from emp where job <span class="token operator">=</span> <span class="token string">'SALESMAN'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-高级" tabindex="-1"><a class="header-anchor" href="#四-高级" aria-hidden="true">#</a> 四. 高级</h2>
<h3 id="_4-1-事物" tabindex="-1"><a class="header-anchor" href="#_4-1-事物" aria-hidden="true">#</a> 4.1 事物</h3>
<p>事物：一个完整的业务逻辑单元，不能再分。<br>
案例：银行转账，两条语句必须同时成功或失败<br>
原理：开启事物机制后，执行DML只在缓存内，不修改数据库，提交事物或者回滚事物才会修改数据库。<br>
TCL：commit，rollback，savepoint<br>
特性：A原子性，C一致性，I隔离性，D持久性</p>
<p>和事物相关的只有DML语句（insert delete update）<br>
如果所有的业务都能使用1条DML语句，就不需要事物机制。</p>
<p>事物隔离<br>
设置隔离级别：<br>
set global transaction isolation level read uncommitted;</p>
<p>查看隔离级别：<br>
select @@global.tx_isolation;</p>
<p>第一级别：读未提交<br>
set global transaction isolation level read uncommitted;<br>
对方的事务还没有提交，但已经可以被我方读取到，<br>
存在脏读现象。</p>
<p>第二级别：读已提交<br>
set global transaction isolation level read committed;<br>
对方的事务提交之后，才能被我方读取到，解决了脏读，<br>
但不能重复读。</p>
<p>第三级别：可重复读<br>
set global transaction isolation level repeatable read;<br>
无论对方修改多少次，我方总是读去到第一次的数据，<br>
解决了不能重复读取，但读到的数据是幻象。</p>
<p>第四级别：串行化读<br>
set global transaction isolation level serializable;<br>
解决了所有问题，<br>
但是需要排队，效率低</p>
<p>mysql默认级别是三，可重复读。<br>
oracle默认级别是二，读已提交。</p>
<p>mysql默认开启事物，并且自动提交，每一条语句提交一次。<br>
start transaction 手动开启事物，可以关闭自动提交。<br>
提交后，就不能再回滚。</p>
<h3 id="_4-2-高并发解决方案" tabindex="-1"><a class="header-anchor" href="#_4-2-高并发解决方案" aria-hidden="true">#</a> 4.2 高并发解决方案</h3>
<h4 id="_4-2-1-缓存穿透" tabindex="-1"><a class="header-anchor" href="#_4-2-1-缓存穿透" aria-hidden="true">#</a> 4.2.1 缓存穿透</h4>
<p>概念说明：指 cache 和 db 中都没有数据，读完 cache 没有，再读 db 还是没有，每次请求到 cache 和 db。</p>
<p>解决方法：</p>
<p>a).拦截非法请求，比如不正常的 id 请求直接拒绝。</p>
<p>b).没有数据时也 cache 下，过期时间可设置短点，不把过多请求打到 db 去。</p>
<p>c).使用 Write Behind Caching 模式，命中不了 cache 不读取 db。这时需要注意 cache 大小，此时的数据都存在了内容。</p>
<p>d).采用布隆过滤器，不存在的 key 直接过滤；布隆过滤器判断存在，则数据可能存在，如果判断不存在，则肯定不存在。</p>
<p>一般建议前两种，实现起来比较简单</p>
<h4 id="_4-2-2-缓存击穿" tabindex="-1"><a class="header-anchor" href="#_4-2-2-缓存击穿" aria-hidden="true">#</a> 4.2.2 缓存击穿</h4>
<p>概念说明：一般是少量热点数据过期(比如微博热搜)，导致大量请求查 cache 没有，又查 db。</p>
<p>解决方法：</p>
<p>a)热点 key 永不过期，异步更新。</p>
<p>b)更新热点 key 时加锁，同一个 key 最好只有一个请求打到 db。</p>
<p>c)接口限流，熔断、降级。</p>
<h4 id="_4-2-3-缓存雪崩" tabindex="-1"><a class="header-anchor" href="#_4-2-3-缓存雪崩" aria-hidden="true">#</a> 4.2.3 缓存雪崩</h4>
<p>概念说明：大量 cache 数据同时过期，导致大量请求打到 db。</p>
<p>解决方法：</p>
<p>a).热点 key 永不过期，异步更新。</p>
<p>b).防止同时大量数据过期，cache 过期时间随机抖动下。</p>
<h3 id="_4-3-集群" tabindex="-1"><a class="header-anchor" href="#_4-3-集群" aria-hidden="true">#</a> 4.3 集群</h3>
<h3 id="_4-4-主从复制" tabindex="-1"><a class="header-anchor" href="#_4-4-主从复制" aria-hidden="true">#</a> 4.4 主从复制</h3>
<h4 id="_4-4-1-基于日志点复制" tabindex="-1"><a class="header-anchor" href="#_4-4-1-基于日志点复制" aria-hidden="true">#</a> 4.4.1 基于日志点复制</h4>
<h4 id="_4-4-2-基于gtid复制-推荐" tabindex="-1"><a class="header-anchor" href="#_4-4-2-基于gtid复制-推荐" aria-hidden="true">#</a> 4.4.2 基于GTID复制  (推荐)</h4>
<h3 id="_4-5-数据备份" tabindex="-1"><a class="header-anchor" href="#_4-5-数据备份" aria-hidden="true">#</a> 4.5 数据备份</h3>
<p>数据库的导入导出</p>
<p>导出整个库</p>
<p>mysqldump dbname&gt;D:\dbname.sql -uroot -p...</p>
<p>导出指定表</p>
<p>mysqldump dbname tname&gt;D:\dbname.sql -uroot -p...</p>
<p>导入数据</p>
<p>create database dbname;</p>
<p>use dbname;</p>
<p>source D:\dbname.sql</p>
<h2 id="五-索引优化" tabindex="-1"><a class="header-anchor" href="#五-索引优化" aria-hidden="true">#</a> 五. 索引优化</h2>
<h2 id="六-多表查询" tabindex="-1"><a class="header-anchor" href="#六-多表查询" aria-hidden="true">#</a> 六. 多表查询</h2>
<h2 id="七-主从复制" tabindex="-1"><a class="header-anchor" href="#七-主从复制" aria-hidden="true">#</a> 七. 主从复制</h2>
<h2 id="八-mysql锁机制" tabindex="-1"><a class="header-anchor" href="#八-mysql锁机制" aria-hidden="true">#</a> 八. mysql锁机制</h2>
</div></template>
