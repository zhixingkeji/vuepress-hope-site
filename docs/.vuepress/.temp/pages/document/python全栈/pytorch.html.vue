<template><div><h2 id="第1章-pytorch-简介" tabindex="-1"><a class="header-anchor" href="#第1章-pytorch-简介" aria-hidden="true">#</a> 第1章 pytorch 简介</h2>
<h3 id="_1-1-pytorch-概念" tabindex="-1"><a class="header-anchor" href="#_1-1-pytorch-概念" aria-hidden="true">#</a> 1.1 pytorch 概念</h3>
<p>PyTorch是一个基于Torch的Python开源机器学习库，用于自然语言处理等应用程序。</p>
<p>它主要由Facebookd的人工智能小组开发，不仅能够 实现强大的GPU加速，同时还支持动态神经网络，这一点是现在很多主流框架如TensorFlow都不支持的。</p>
<p>PyTorch提供了两个高级功能：  具有强大的GPU加速的张量计算（如Numpy）  包含自动求导系统的深度神经网络</p>
<p>TensorFlow和Caffe都是命令式的编程语言，而且是静态的，首先必须构建一个神经网络，然后一次又一次使用相同的结构，如果想要改 变网络的结构，就必须从头开始。但是对于PyTorch，通过反向求导技术，可以让你零延迟地任意改变神经网络的行为，而且其实现速度 快。正是这一灵活性是PyTorch对比TensorFlow的最大优势。</p>
<p>目前PyTorch还不支持快速傅里 叶、沿维翻转张量和检查无穷与非数值张量；针对移动端、嵌入式部署以及高性能服务器端的部署其性能表现有待提升；其次因为这个框 架较新，使得他的社区没有那么强大，在文档方面其C库大多数没有文档。</p>
<h3 id="_1-2-专业术语" tabindex="-1"><a class="header-anchor" href="#_1-2-专业术语" aria-hidden="true">#</a> 1.2 专业术语</h3>
<p>正向传播 ：正向传播：沿着从输入层到输出层的顺序，依次计算并存储[神经网络]的中间变量。</p>
<p>反向传播：沿着从输出层到输入层的顺序，依次计算并存储神经网络的中间变量和参数的梯度。</p>
<p>梯度下降： 水平向左滑,也就是让x减小,此时随着x减小,导数(梯度)的绝对值是减小的(也就是<em>梯度下降</em>)。</p>
<p>FCNN 全链接神经网络</p>
<p>RNN 循环神经网络</p>
<p>CNN 卷积神经网络</p>
<p>监督学习：利用一组已知类别的样本调整分类器的参数，使其达到所要求性能的过程</p>
<p>半监督学习：其训练数据的一部分是有标签的,另一部分没有标签,而没标签数据的数量常常极大于有标签数据数量</p>
<p>无监督学习 ：本质上是一种统计手段(也可以理解为一种分类手段)，它没有明确目的的训练方式，你无法提前知道结果是什么，因此无须打标签。</p>
<p>加强学习 （强化学习）： 强化学习是智能体（Agent）以“试错”的方式进行学习，通过与环境进行交互获得的奖赏指导行为，目标是使智能体获得最大的奖赏。</p>
<p>迁移学习：是一种机器学习方法，就是把为任务 A 开发的模型作为初始点，重新使用在为任务 B 开发模型的过程中。</p>
<p>计算机视觉</p>
<p>推荐算法</p>
<p>自然语言处理</p>
<p>对抗网络GAN</p>
<p>机器学习的两个方向：回归问题（连续的） 和 分类问题（离散的）</p>
<p>线性回归问题使用 均方误差 解决预测问题</p>
<p>逻辑回归问题使用 sigmod激活函数 tanh激活函数   解决二分类问题  多分类问题</p>
<p>拟合 ：曲线是否能很好的描述这个样本</p>
<p>过拟合： 样本集上表现极好，但测试集表现差</p>
<p>欠拟合：样本集上就表现差</p>
<h2 id="第2章-pytorch-张量" tabindex="-1"><a class="header-anchor" href="#第2章-pytorch-张量" aria-hidden="true">#</a> 第2章 pytorch 张量</h2>
<h3 id="_2-1-tensor张量概念" tabindex="-1"><a class="header-anchor" href="#_2-1-tensor张量概念" aria-hidden="true">#</a> 2.1 Tensor张量概念</h3>
<p>张量是基于向量和矩阵的推广, 是支持高效科学计算的数组</p>
<p>张量的使用和<code v-pre>Numpy</code>中的<code v-pre>ndarrays</code>很类似, 但张量可以在<code v-pre>GPU</code>上加速运行</p>
<p>标量(Scalar) : 只有大小没有方向的量, 零阶张量</p>
<p>向量(Vector) : 有大小和方向的量 , 一阶张量</p>
<p>矩阵(Matrix) : 多个向量组成的, 二阶张量</p>
<h3 id="_2-2-张量初始化" tabindex="-1"><a class="header-anchor" href="#_2-2-张量初始化" aria-hidden="true">#</a> 2.2 张量初始化</h3>
<p>1.直接生成张量</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
t_data <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
t_data <span class="token operator">=</span> torch<span class="token punctuation">.</span>FloatTensor<span class="token punctuation">(</span>data<span class="token punctuation">)</span>  <span class="token comment"># dtype = float32</span>
t_data <span class="token operator">=</span> torch<span class="token punctuation">.</span>LongTensor<span class="token punctuation">(</span>data<span class="token punctuation">)</span>  <span class="token comment"># dtype = int64</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.通过Numpy数组来生成张量</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>np_array <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
x_np <span class="token operator">=</span> torch<span class="token punctuation">.</span>from_numpy<span class="token punctuation">(</span>np_array<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.通过已有的张量来生成新的张量</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>x_ones <span class="token operator">=</span> torch<span class="token punctuation">.</span>ones_like<span class="token punctuation">(</span>x_data<span class="token punctuation">)</span>   <span class="token comment"># 保留 x_data 的属性</span>
x_rand <span class="token operator">=</span> torch<span class="token punctuation">.</span>rand_like<span class="token punctuation">(</span>x_data<span class="token punctuation">,</span> dtype<span class="token operator">=</span>torch<span class="token punctuation">.</span><span class="token builtin">float</span><span class="token punctuation">)</span>   <span class="token comment"># 重写 x_data 的数据类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>4.通过指定数据维度来生成张量</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>shape <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token punctuation">)</span>
rand_tensor <span class="token operator">=</span> torch<span class="token punctuation">.</span>rand<span class="token punctuation">(</span>shape<span class="token punctuation">)</span>
ones_tensor <span class="token operator">=</span> torch<span class="token punctuation">.</span>ones<span class="token punctuation">(</span>shape<span class="token punctuation">)</span>
zeros_tensor <span class="token operator">=</span> torch<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span>shape<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-张量属性" tabindex="-1"><a class="header-anchor" href="#_2-3-张量属性" aria-hidden="true">#</a> 2.3 张量属性</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>tensor <span class="token operator">=</span> torch<span class="token punctuation">.</span>rand<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>tensor<span class="token punctuation">.</span>shape<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>  <span class="token comment"># 维数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>tensor<span class="token punctuation">.</span>dtype<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span> <span class="token comment"># 数据类型</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>tensor<span class="token punctuation">.</span>device<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span> <span class="token comment"># 存储设备</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-张量运算" tabindex="-1"><a class="header-anchor" href="#_2-4-张量运算" aria-hidden="true">#</a> 2.4 张量运算</h3>
<p>有超过100种张量相关的运算操作, 例如转置、索引、切片、数学运算、线性代数、随机采样等。</p>
<p>判断当前环境GPU是否可用 , 然后将tensor导入GPU内运行</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">if</span> torch<span class="token punctuation">.</span>cuda<span class="token punctuation">.</span>is_available<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	tensor <span class="token operator">=</span> tensor<span class="token punctuation">.</span>to<span class="token punctuation">(</span><span class="token string">'cuda'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>1. 张量的索引和切片</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>tensor <span class="token operator">=</span> torch<span class="token punctuation">.</span>ones<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
tensor<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>            <span class="token comment"># 将第1列(从0开始)的数据全部赋值为0</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tensor<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 张量的拼接</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>t1 <span class="token operator">=</span> torch<span class="token punctuation">.</span>cat<span class="token punctuation">(</span><span class="token punctuation">[</span>tensor<span class="token punctuation">,</span> tensor<span class="token punctuation">,</span> tensor<span class="token punctuation">]</span><span class="token punctuation">,</span> dim<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>t1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 张量的乘积和矩阵乘法</strong></p>
<p>张量的乘积</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># 逐个元素相乘结果</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"tensor.mul(tensor): \n </span><span class="token interpolation"><span class="token punctuation">{</span>tensor<span class="token punctuation">.</span>mul<span class="token punctuation">(</span>tensor<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string"> \n"</span></span><span class="token punctuation">)</span>
<span class="token comment"># 等价写法:</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"tensor * tensor: \n </span><span class="token interpolation"><span class="token punctuation">{</span>tensor <span class="token operator">*</span> tensor<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>张量的矩阵乘法</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"tensor.matmul(tensor.T): \n </span><span class="token interpolation"><span class="token punctuation">{</span>tensor<span class="token punctuation">.</span>matmul<span class="token punctuation">(</span>tensor<span class="token punctuation">.</span>T<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string"> \n"</span></span><span class="token punctuation">)</span>
<span class="token comment"># 等价写法:</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"tensor @ tensor.T: \n </span><span class="token interpolation"><span class="token punctuation">{</span>tensor @ tensor<span class="token punctuation">.</span>T<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4. 自动赋值运算</strong></p>
<p>自动赋值运算通常在方法后有 <code v-pre>_</code> 作为后缀, 例如: <code v-pre>x.copy_(y)</code>, <code v-pre>x.t_()</code>操作会改变 <code v-pre>x</code> 的取值。</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>tensor<span class="token punctuation">,</span> <span class="token string">"\n"</span><span class="token punctuation">)</span>
tensor<span class="token punctuation">.</span>add_<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tensor<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-张量和numpy转化" tabindex="-1"><a class="header-anchor" href="#_2-5-张量和numpy转化" aria-hidden="true">#</a> 2.5 张量和numpy转化</h3>
<p><strong>1. 由张量变换为Numpy array数组</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>t <span class="token operator">=</span> torch<span class="token punctuation">.</span>ones<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"t: </span><span class="token interpolation"><span class="token punctuation">{</span>t<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
n <span class="token operator">=</span> t<span class="token punctuation">.</span>numpy<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"n: </span><span class="token interpolation"><span class="token punctuation">{</span>n<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 由Numpy array数组转为张量</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>n <span class="token operator">=</span> np<span class="token punctuation">.</span>ones<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
t <span class="token operator">=</span> torch<span class="token punctuation">.</span>from_numpy<span class="token punctuation">(</span>n<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第3章-搭建nn网络" tabindex="-1"><a class="header-anchor" href="#第3章-搭建nn网络" aria-hidden="true">#</a> 第3章 搭建nn网络</h2>
<h2 id="第4章-构建大规模并行训练复杂任务" tabindex="-1"><a class="header-anchor" href="#第4章-构建大规模并行训练复杂任务" aria-hidden="true">#</a> 第4章 构建大规模并行训练复杂任务</h2>
<h3 id="_4-1-模型训练的步骤" tabindex="-1"><a class="header-anchor" href="#_4-1-模型训练的步骤" aria-hidden="true">#</a> 4.1 模型训练的步骤</h3>
<p>预处理数据 创建模型和优化方法</p>
<p>模型调用 计算损失</p>
<p>梯度归零 计算梯度</p>
<p>优化模型 打印指标</p>
<h2 id="第5章-高级技巧扩展pytorch" tabindex="-1"><a class="header-anchor" href="#第5章-高级技巧扩展pytorch" aria-hidden="true">#</a> 第5章 高级技巧扩展pytorch</h2>
<h2 id="第6章-是一个完整的实战项目讲解" tabindex="-1"><a class="header-anchor" href="#第6章-是一个完整的实战项目讲解" aria-hidden="true">#</a> 第6章 是一个完整的实战项目讲解</h2>
</div></template>
