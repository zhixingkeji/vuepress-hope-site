<template><div><h2 id="第1章-机器学习简介" tabindex="-1"><a class="header-anchor" href="#第1章-机器学习简介" aria-hidden="true">#</a> 第1章 机器学习简介</h2>
<h3 id="_1-1-人工智能概述" tabindex="-1"><a class="header-anchor" href="#_1-1-人工智能概述" aria-hidden="true">#</a> 1.1 人工智能概述</h3>
<p>达特茅斯会议 人工智能的起点</p>
<p>机器学习是人工智能的一个实现途径</p>
<p>深度学习是机器学习的一个方向发展而来</p>
<h3 id="_1-2-机器学习概述" tabindex="-1"><a class="header-anchor" href="#_1-2-机器学习概述" aria-hidden="true">#</a> 1.2 机器学习概述</h3>
<p><strong>解决问题</strong></p>
<p>传统预测 图像识别 自然语言处理</p>
<p><strong>整体流程</strong></p>
<p>数据 -&gt; 建模 -&gt; 训练 -&gt; 预测</p>
<p><strong>数据集</strong></p>
<p>特征值 + 目标值</p>
<h3 id="_1-3-机器学习算法" tabindex="-1"><a class="header-anchor" href="#_1-3-机器学习算法" aria-hidden="true">#</a> 1.3 机器学习算法</h3>
<p><strong>分类</strong></p>
<p>目前机器学习主流分为三大类：监督学习，无监督学习，强化学习</p>
<p><strong>监督学习</strong></p>
<p>分类问题 : k近邻算法, 贝叶斯, 决策树与随机森林, 逻辑回归</p>
<p>回归问题 : 线性回归, 岭回归</p>
<p><strong>无监督学习</strong></p>
<p>聚类问题 : k-means</p>
<p><strong>强化学习</strong></p>
<p>强化学习是一种学习模型，它不会直接给你解决方案，需要通过试错的方式去寻找。</p>
<p><strong>迁移学习</strong></p>
<p>迁移学习专注于存储已有问题的解决模型，并将其利用在其他不同但相关问题上。</p>
<p>比如说，用来辨识汽车的知识（或者是模型）也可以被用来提升识别卡车的能力。</p>
<p>计算机领域的迁移学习和心理学常常提到的学习迁移在概念上有一定关系，但是两个领域在学术上的关系非常有限。</p>
<p><strong>生成对抗网络</strong></p>
<p>GAN是两个网络的的组合， 一个网络生成模拟数据， 另一个网络判断生成的数据是真实的还是模拟的。</p>
<p>生成模拟数据的网络要不断优化自己让判别的网络判断不出来， 判别的网络也要优化自己让自己判断得更准确。</p>
<p>二者关系形成对抗博弈，因此叫对抗神经网络（生成对抗网络）。</p>
<h3 id="_1-4-机器学习开发流程" tabindex="-1"><a class="header-anchor" href="#_1-4-机器学习开发流程" aria-hidden="true">#</a> 1.4 机器学习开发流程</h3>
<p>-&gt; 获取并处理数据</p>
<p>-&gt; 特征工程</p>
<p>-&gt; 模型训练</p>
<p>-&gt; 模型评估</p>
<p>-&gt; 应用</p>
<h3 id="_1-5-机器学习框架" tabindex="-1"><a class="header-anchor" href="#_1-5-机器学习框架" aria-hidden="true">#</a> 1.5 机器学习框架</h3>
<p><strong>前置知识</strong></p>
<p>基础算法 , 高数 , 线代 , 概率 , 离散</p>
<p><strong>书籍推荐</strong></p>
<p><strong>框架</strong></p>
<p>pytorch ,  tensorflow , opencv , yolov5</p>
<h2 id="第2章-特征工程" tabindex="-1"><a class="header-anchor" href="#第2章-特征工程" aria-hidden="true">#</a> 第2章 特征工程</h2>
<h3 id="_2-1-数据集" tabindex="-1"><a class="header-anchor" href="#_2-1-数据集" aria-hidden="true">#</a> 2.1 数据集</h3>
<h4 id="_2-1-1-可用数据集网站" tabindex="-1"><a class="header-anchor" href="#_2-1-1-可用数据集网站" aria-hidden="true">#</a> 2.1.1 可用数据集网站</h4>
<p>sklearn</p>
<p>UCI</p>
<p>kaggle</p>
<h4 id="_2-1-2-sklearn数据集" tabindex="-1"><a class="header-anchor" href="#_2-1-2-sklearn数据集" aria-hidden="true">#</a> 2.1.2 sklearn数据集</h4>
<p>获取内置的数据集</p>
<p>sklearn.datasets.load_iris()</p>
<p>获取网络的数据集</p>
<p>sklearn.datasets.fetch_20newsgroups()</p>
<p>数据集的返回值</p>
<p>dataset.base.Bunch</p>
<p>数据集的划分</p>
<p>训练集占75%  , 测试集占25%</p>
<p>训练集特征值 x_train</p>
<p>测试集特征值 x_test</p>
<p>训练集目标值 y_train</p>
<p>测试集目标值 y_test</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># 获取莺尾花数据集</span>
iris <span class="token operator">=</span> load_iris<span class="token punctuation">(</span><span class="token punctuation">)</span> 

<span class="token comment"># 数据集查看</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"莺尾花数据集: \n"</span><span class="token punctuation">,</span> iris<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"查看数据集描述: \n"</span><span class="token punctuation">,</span> iris<span class="token punctuation">[</span><span class="token string">"DESCR"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"查看特征值的名字: \n"</span><span class="token punctuation">,</span> iris<span class="token punctuation">.</span>feature_names<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"查看特征值: \n"</span><span class="token punctuation">,</span> iris<span class="token punctuation">.</span>data<span class="token punctuation">,</span>iris<span class="token punctuation">.</span>data<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>

<span class="token comment"># 数据集划分</span>
x_train<span class="token punctuation">,</span>x_test<span class="token punctuation">,</span>y_train<span class="token punctuation">,</span>y_test <span class="token operator">=</span> train_test_spilt<span class="token punctuation">(</span>iris<span class="token punctuation">.</span>data<span class="token punctuation">,</span>iris<span class="token punctuation">.</span>target<span class="token punctuation">,</span>test_size<span class="token operator">=</span><span class="token number">0.2</span><span class="token punctuation">,</span>random_state<span class="token operator">=</span><span class="token number">22</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"查看训练集特征值: \n"</span><span class="token punctuation">,</span> x_train<span class="token punctuation">,</span>x_train<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-特征工程介绍" tabindex="-1"><a class="header-anchor" href="#_2-2-特征工程介绍" aria-hidden="true">#</a> 2.2 特征工程介绍</h3>
<p>处理特征, 帮助算法更好发挥性能</p>
<h3 id="_2-3-特征抽取" tabindex="-1"><a class="header-anchor" href="#_2-3-特征抽取" aria-hidden="true">#</a> 2.3 特征抽取</h3>
<h4 id="_2-3-1-字典特征抽取" tabindex="-1"><a class="header-anchor" href="#_2-3-1-字典特征抽取" aria-hidden="true">#</a> 2.3.1 字典特征抽取</h4>
<p>将任意数据如文本或图像, 转换为可用于机器学习的数字特征</p>
<p>sklearn.feature_extraction.DictVectorizer()</p>
<p>one-hot编码</p>
<p>几个类别就是几列矩阵,用 0和1表示</p>
<p>sparse 稀疏矩阵</p>
<p>类别特征特别多时, 为减少0的存储, 提高效率</p>
<p>实例</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"city"</span><span class="token punctuation">:</span><span class="token string">"北京"</span><span class="token punctuation">,</span><span class="token string">"tem"</span><span class="token punctuation">:</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string">"city"</span><span class="token punctuation">:</span><span class="token string">"上海"</span><span class="token punctuation">,</span><span class="token string">"tem"</span><span class="token punctuation">:</span><span class="token number">60</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string">"city"</span><span class="token punctuation">:</span><span class="token string">"深圳"</span><span class="token punctuation">,</span><span class="token string">"tem"</span><span class="token punctuation">:</span><span class="token number">30</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
transfer <span class="token operator">=</span> DictVectorizer<span class="token punctuation">(</span>sparse<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
data_new <span class="token operator">=</span> transfer<span class="token punctuation">.</span>fit_transform<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"新数据集: \n"</span><span class="token punctuation">,</span> data_new<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"特征名: \n"</span> <span class="token punctuation">,</span> transfer<span class="token punctuation">.</span>feature_names<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-2-文本特征抽取" tabindex="-1"><a class="header-anchor" href="#_2-3-2-文本特征抽取" aria-hidden="true">#</a> 2.3.2 文本特征抽取</h4>
<p><strong>CountVectorizer</strong></p>
<p>统计每个样本特征词出现的个数</p>
<p>sklearn.feature_extraction.CountVectorizer()</p>
<p>该方法没有 sparse 指定参数</p>
<p>但可以使用toarray方法打印</p>
<p><strong>停用词 stop_words</strong></p>
<p>不统计参数里面的词</p>
<p><strong>英文文本抽取</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"life is short, i like python"</span><span class="token punctuation">,</span><span class="token string">"life is too long , i like java"</span><span class="token punctuation">]</span>

<span class="token comment"># 初始化文本计数器</span>
transfer <span class="token operator">=</span> CountVectorizer<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 调用方法生成新数据</span>
data_new <span class="token operator">=</span> transfer<span class="token punctuation">.</span>fit_transform<span class="token punctuation">(</span>data<span class="token punctuation">)</span>

<span class="token comment"># toarray方法把稀疏矩阵转为完整矩阵</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"新数据集: \n"</span><span class="token punctuation">,</span> data_new<span class="token punctuation">.</span>toarray<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 特征名</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"特征名: \n"</span> <span class="token punctuation">,</span> transfer<span class="token punctuation">.</span>feature_names<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>中文文本处理</strong></p>
<p>不支持单个字, 需要用空格隔开</p>
<p><strong>免费分词处理库 jieba</strong></p>
<p>jieba.cut(text)</p>
<p>注意 text不能是列表, 如果是列表需要在循环里调用cut方法</p>
<p><strong>Tfidf特征抽取</strong></p>
<p>idf即逆向文档频率(Inverse Document Frequency)，用来衡量一个词的普遍重要性，一般通过文档总数/包含该词汇的文档数，再取对数得到的值</p>
<h3 id="_2-4-特征预处理" tabindex="-1"><a class="header-anchor" href="#_2-4-特征预处理" aria-hidden="true">#</a> 2.4 特征预处理</h3>
<h4 id="_2-4-1-数值型数据的无量纲化" tabindex="-1"><a class="header-anchor" href="#_2-4-1-数值型数据的无量纲化" aria-hidden="true">#</a> 2.4.1 数值型数据的无量纲化</h4>
<p>特征预处理概念 : 通过一些转换函数将特征数据转换成更加合适算法模型的特征数据的过程</p>
<p>无量纲化概念 : 使不同规格的数据转同一规格 ,</p>
<p>无量纲化方法 : 归一化 , 标准化</p>
<h4 id="_2-4-2-归一化" tabindex="-1"><a class="header-anchor" href="#_2-4-2-归一化" aria-hidden="true">#</a> 2.4.2 归一化</h4>
<p>一般将原始数据映射在 [0,1] 之间</p>
<p>公式</p>
<p><img src="@source/document/python全栈/asset/image-20220515194036855.png" alt="image-20220515194036855" loading="lazy"></p>
<p>缺点 : 在最大值,最小值处会可能会出现异常值</p>
<h4 id="_2-4-3-标准化" tabindex="-1"><a class="header-anchor" href="#_2-4-3-标准化" aria-hidden="true">#</a> 2.4.3 标准化</h4>
<p>标准化概念 :  对原始数据变换到均值为0 , 标准差为1的范围内</p>
<p>公式</p>
<p><img src="@source/document/python全栈/asset/image-20220515194303691.png" alt="image-20220515194303691" loading="lazy"></p>
<h3 id="_2-5-特征降维" tabindex="-1"><a class="header-anchor" href="#_2-5-特征降维" aria-hidden="true">#</a> 2.5 特征降维</h3>
<p>概念 : 降维指在某些限定条件下, 降低特征变量的个数, 得到一组不相关的主变量的过程</p>
<h3 id="_2-6-主成分分析" tabindex="-1"><a class="header-anchor" href="#_2-6-主成分分析" aria-hidden="true">#</a> 2.6 主成分分析</h3>
<h2 id="第3章-分类算法" tabindex="-1"><a class="header-anchor" href="#第3章-分类算法" aria-hidden="true">#</a> 第3章 分类算法</h2>
<h3 id="_3-1-sklearn转换器和估计器" tabindex="-1"><a class="header-anchor" href="#_3-1-sklearn转换器和估计器" aria-hidden="true">#</a> 3.1 sklearn转换器和估计器</h3>
<p><img src="@source/document/python全栈/asset/image-20220515195852404.png" alt="image-20220515195852404" loading="lazy"></p>
<h3 id="_3-2-knn算法" tabindex="-1"><a class="header-anchor" href="#_3-2-knn算法" aria-hidden="true">#</a> 3.2 KNN算法</h3>
<h4 id="_3-2-1-knn概念" tabindex="-1"><a class="header-anchor" href="#_3-2-1-knn概念" aria-hidden="true">#</a> 3.2.1 KNN概念</h4>
<p>K近邻算法 根据最近的邻居的类别 , 来推断出你的类别</p>
<p>无需训练, 简单</p>
<p>懒惰算法, 适合较小的数据集, 因为会计算所有距离</p>
<p>受k的取值影响, 既不能大也不能小</p>
<h4 id="_3-2-2-距离公式" tabindex="-1"><a class="header-anchor" href="#_3-2-2-距离公式" aria-hidden="true">#</a> 3.2.2 距离公式</h4>
<p>欧氏距离</p>
<p><img src="@source/document/python全栈/asset/image-20220515234232248.png" alt="image-20220515234232248" loading="lazy"></p>
<p>曼哈顿距离</p>
<p>明可夫斯基距离</p>
<h4 id="_3-2-3-具体应用" tabindex="-1"><a class="header-anchor" href="#_3-2-3-具体应用" aria-hidden="true">#</a> 3.2.3 具体应用</h4>
<p>电影分析</p>
<p>预测未知电影的类型, 通过knn算法找到离他最近的距离是 <code v-pre>He's not Really into dues</code> , 所以判断他是爱情片</p>
<img src="@source/document/python全栈/asset/image-20220515234550945.png" alt="image-20220515234550945" style="zoom:100%;" />
<h3 id="_3-3-模型选择与调优" tabindex="-1"><a class="header-anchor" href="#_3-3-模型选择与调优" aria-hidden="true">#</a> 3.3 模型选择与调优</h3>
<p><strong>交叉验证</strong></p>
<p>四折交叉验证</p>
<p>训练集 : 训练集 + 验证集</p>
<p>测试集 : 测试集</p>
<p><img src="@source/document/python全栈/asset/image-20220516082014941.png" alt="image-20220516082014941" loading="lazy"></p>
<p><strong>超参数网格搜索</strong></p>
<p><img src="@source/document/python全栈/asset/image-20220516082202756.png" alt="image-20220516082202756" loading="lazy"></p>
<p><strong>联合API</strong></p>
<p><img src="@source/document/python全栈/asset/image-20220516082436571-16526606783881.png" alt="image-20220516082436571" loading="lazy"></p>
<p><strong>鸢尾花案例</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> torch
<span class="token keyword">import</span> tensorflow <span class="token keyword">as</span> tf
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split<span class="token punctuation">,</span> GridSearchCV
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>neighbors <span class="token keyword">import</span> KNeighborsClassifier
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>preprocessing <span class="token keyword">import</span> StandardScaler
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>datasets <span class="token keyword">import</span> load_iris


<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"tf_version:"</span><span class="token punctuation">,</span> tf<span class="token punctuation">.</span>__version__<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>tf<span class="token punctuation">.</span>config<span class="token punctuation">.</span>list_physical_devices<span class="token punctuation">(</span><span class="token string">'GPU'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"torch_GPU:"</span><span class="token punctuation">,</span> torch<span class="token punctuation">.</span>cuda<span class="token punctuation">.</span>is_available<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 用knn算法对鸢尾花进行分类</span>
<span class="token keyword">def</span> <span class="token function">knn_iris</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 获取数据</span>
    iris <span class="token operator">=</span> load_iris<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 划分数据集, 随机数种子(计算机是伪随机的)</span>
    x_train<span class="token punctuation">,</span> x_test<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> y_test <span class="token operator">=</span> train_test_split<span class="token punctuation">(</span>iris<span class="token punctuation">.</span>data<span class="token punctuation">,</span> iris<span class="token punctuation">.</span>target<span class="token punctuation">,</span> random_state<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">)</span>

    <span class="token comment"># 特征工程 : 标准化</span>
    transfer <span class="token operator">=</span> StandardScaler<span class="token punctuation">(</span><span class="token punctuation">)</span>
    x_train <span class="token operator">=</span> transfer<span class="token punctuation">.</span>fit_transform<span class="token punctuation">(</span>x_train<span class="token punctuation">)</span>
    x_test <span class="token operator">=</span> transfer<span class="token punctuation">.</span>transform<span class="token punctuation">(</span>x_test<span class="token punctuation">)</span>

    <span class="token comment"># knn算法预估器</span>
    estimator <span class="token operator">=</span> KNeighborsClassifier<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 交叉验证和网格搜索</span>
    param_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"n_neighbors"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
    estimator <span class="token operator">=</span> GridSearchCV<span class="token punctuation">(</span>estimator<span class="token punctuation">,</span> param_grid<span class="token operator">=</span>param_dict<span class="token punctuation">,</span> cv<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>
    estimator<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>x_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span>

    <span class="token comment"># 模型评估</span>
    y_predict <span class="token operator">=</span> estimator<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>x_test<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"y_predict:\n"</span><span class="token punctuation">,</span> y_predict<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"真实值对比:\n"</span><span class="token punctuation">,</span> y_test <span class="token operator">==</span> y_predict<span class="token punctuation">)</span>
    score <span class="token operator">=</span> estimator<span class="token punctuation">.</span>score<span class="token punctuation">(</span>x_test<span class="token punctuation">,</span> y_test<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"准确率为:\n"</span><span class="token punctuation">,</span> score<span class="token punctuation">)</span>

    <span class="token comment"># 模型调优后的评估</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"最佳参数: \n"</span><span class="token punctuation">,</span> estimator<span class="token punctuation">.</span>best_params_<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"最佳结果: \n"</span><span class="token punctuation">,</span> estimator<span class="token punctuation">.</span>best_score_<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"最佳估计器: \n"</span><span class="token punctuation">,</span> estimator<span class="token punctuation">.</span>best_estimator_<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"交叉验证结果: \n"</span><span class="token punctuation">,</span> estimator<span class="token punctuation">.</span>cv_results_<span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token boolean">None</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span>
    hello<span class="token punctuation">(</span><span class="token punctuation">)</span>
    knn_iris<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>facebook签到位置预测案例</strong></p>
<h3 id="_3-4-朴素贝叶斯算法" tabindex="-1"><a class="header-anchor" href="#_3-4-朴素贝叶斯算法" aria-hidden="true">#</a> 3.4 朴素贝叶斯算法</h3>
<p>3.4.1 朴素贝叶斯算法概念</p>
<p>3.4.2 概率基础</p>
<p>3.4.3 联合概率, 条件概率与相互独立</p>
<p>3.4.4 贝叶斯公式</p>
<p>3.4.5 API</p>
<p>3.4.6 新闻分类案例</p>
<h3 id="_3-5-决策树" tabindex="-1"><a class="header-anchor" href="#_3-5-决策树" aria-hidden="true">#</a> 3.5 决策树</h3>
<p>信息论基础</p>
<p>信息概念 : 消除随机不定性的东西</p>
<p>信息熵 :</p>
<h3 id="_3-6-随机森林" tabindex="-1"><a class="header-anchor" href="#_3-6-随机森林" aria-hidden="true">#</a> 3.6 随机森林</h3>
<h2 id="第4章-回归与聚类算法" tabindex="-1"><a class="header-anchor" href="#第4章-回归与聚类算法" aria-hidden="true">#</a> 第4章 回归与聚类算法</h2>
<h3 id="_4-1-线性回归" tabindex="-1"><a class="header-anchor" href="#_4-1-线性回归" aria-hidden="true">#</a> 4.1 线性回归</h3>
<p>线性关系 : 都是一次</p>
<p>线性模型 : 线性关系(自变量一次) + 非线性关系(参数一次)</p>
<p>损失函数 (成本函数 目标函数)</p>
<p>优化损失 : 缩小损失</p>
<p>优化方法 : 正规方程 + 梯度下降</p>
<p>正规方程 : 可以直接求解w 的值 , 不通用 , 适合小数据量</p>
<p>梯度下降 :  不断迭代求导 找到区域的最小值</p>
<h3 id="_4-2-欠拟合与过拟合" tabindex="-1"><a class="header-anchor" href="#_4-2-欠拟合与过拟合" aria-hidden="true">#</a> 4.2 欠拟合与过拟合</h3>
<p>欠拟合 : 学习到的特征太小 , 在训练集上表现就不好</p>
<p>解决方案 : 增加特征值</p>
<p>过拟合 : 学习到的特征太多 , 在测试集上表现不好</p>
<p>解决方案 :  正则化</p>
<h3 id="_4-3-岭回归" tabindex="-1"><a class="header-anchor" href="#_4-3-岭回归" aria-hidden="true">#</a> 4.3 岭回归</h3>
<h3 id="_4-4-分类算法-逻辑回归与二分类" tabindex="-1"><a class="header-anchor" href="#_4-4-分类算法-逻辑回归与二分类" aria-hidden="true">#</a> 4.4 分类算法 逻辑回归与二分类</h3>
<p>逻辑回归的输入就是线性回归的输出</p>
<p>调用激活函数 sigmoid</p>
<h3 id="_4-5-模型的保存和加载" tabindex="-1"><a class="header-anchor" href="#_4-5-模型的保存和加载" aria-hidden="true">#</a> 4.5 模型的保存和加载</h3>
<p><img src="@source/document/python全栈/asset/image-20220516200835656.png" alt="image-20220516200835656" loading="lazy"></p>
<h3 id="_4-6-无监督学习-kmeans算法" tabindex="-1"><a class="header-anchor" href="#_4-6-无监督学习-kmeans算法" aria-hidden="true">#</a> 4.6 无监督学习 kmeans算法</h3>
</div></template>
