<template><div><h2 id="第1章-pandas数据处理" tabindex="-1"><a class="header-anchor" href="#第1章-pandas数据处理" aria-hidden="true">#</a> 第1章 pandas数据处理</h2>
<h3 id="_1-1-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-简介" aria-hidden="true">#</a> 1.1 简介</h3>
<p>pands数据结构</p>
<p>Series对象 , 类似一维数组</p>
<p>DataFrame , 类似二维数组</p>
<h3 id="_1-2-安装" tabindex="-1"><a class="header-anchor" href="#_1-2-安装" aria-hidden="true">#</a> 1.2 安装</h3>
<p>下载pandas</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>conda <span class="token function">install</span> pandas 
pip3 <span class="token function">install</span> <span class="token parameter variable">-i</span> https://mirrors.aliyun.com/pypi/simple/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>项目引入</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3-相关网站" tabindex="-1"><a class="header-anchor" href="#_1-3-相关网站" aria-hidden="true">#</a> 1.3 相关网站</h3>
<p>菜鸟教程 <a href="https://www.runoob.com/pandas/pandas-cleaning.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/pandas/pandas-cleaning.html<ExternalLinkIcon/></a></p>
<p>c语言中文网 <a href="http://c.biancheng.net/pandas/" target="_blank" rel="noopener noreferrer">http://c.biancheng.net/pandas/<ExternalLinkIcon/></a></p>
<h2 id="第2章-series-对象" tabindex="-1"><a class="header-anchor" href="#第2章-series-对象" aria-hidden="true">#</a> 第2章 Series 对象</h2>
<h2 id="第3章-dataframe-对象" tabindex="-1"><a class="header-anchor" href="#第3章-dataframe-对象" aria-hidden="true">#</a> 第3章 DataFrame 对象</h2>
<p>创建DataFrame</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>data <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token string">'a'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string">'b'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string">'c'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

data_frame1 <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>data_frame1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建DataFrame,只要a,b列</p>
<p>​    data_frame2 = pd.DataFrame(data,columns=['a','b'])</p>
<p>​    print(data_frame2)</p>
<p>为DataFrame添加d列</p>
<p>​    data_frame2['d'] = [11,12,13]</p>
<p>​    print(data_frame2)</p>
<p>删除数据</p>
<p>删除行</p>
<p>data_frame2.drop([0],inplace=True)</p>
<p>删除前三行</p>
<p>data_frame2.drop(labels=range(0,3), axis=0, inplace=True)</p>
<p>删除列</p>
<p>data_frame2.drop(labels='a', axis=1, inplace=True)</p>
<p>修改数据 , 把a列第1行的数据改为10</p>
<p>data_frame2['a'][0] =10</p>
<p>data_frame2['b'] = [1,2,3]</p>
<p>data_frame2['b'] = 1</p>
<p>查询数据</p>
<p>查询列</p>
<p>data_frame2.b</p>
<p>data_frame2['b']</p>
<p>查询行</p>
<p>data_frame2[0:3]</p>
<p>文件存取</p>
<p>存储为csv文件</p>
<p>data_frame2.to_csv('test.csv')</p>
<p>读取csv文件</p>
<p>data_frame3 = pd.read_csv('test.csv')</p>
<h2 id="第4章-csv-和-json" tabindex="-1"><a class="header-anchor" href="#第4章-csv-和-json" aria-hidden="true">#</a> 第4章 CSV 和 JSON</h2>
<h2 id="第5章-数据清洗" tabindex="-1"><a class="header-anchor" href="#第5章-数据清洗" aria-hidden="true">#</a> 第5章 数据清洗</h2>
<h2 id="第6章-数据持久化" tabindex="-1"><a class="header-anchor" href="#第6章-数据持久化" aria-hidden="true">#</a> 第6章 数据持久化</h2>
<p>连接mysql</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> mysql<span class="token punctuation">.</span>connector

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
db <span class="token operator">=</span> mysql<span class="token punctuation">.</span>connector<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>user<span class="token operator">=</span><span class="token string">'root'</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">'wangle2018'</span><span class="token punctuation">,</span> host<span class="token operator">=</span><span class="token string">'127.0.0.1'</span><span class="token punctuation">,</span> database<span class="token operator">=</span><span class="token string">'zgc'</span><span class="token punctuation">)</span>
curesor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
a <span class="token operator">=</span> curesor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">"select * from student"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
curesor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出现报错解决<br>
1.登录mysql数据库 mysql -u root -p<br>
2.更新身份认证方式 ALTER USER '你的用户名@localhost' IDENTIFIED WITH mysql_native_password BY '你的用户密码';</p>
</div></template>
