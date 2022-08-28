<template><div><h2 id="第1章-行列式" tabindex="-1"><a class="header-anchor" href="#第1章-行列式" aria-hidden="true">#</a> 第1章 行列式</h2>
<h4 id="_1-1-二阶、三阶行列式" tabindex="-1"><a class="header-anchor" href="#_1-1-二阶、三阶行列式" aria-hidden="true">#</a> 1.1 二阶、三阶行列式</h4>
<h4 id="_1-1-1二阶行列式" tabindex="-1"><a class="header-anchor" href="#_1-1-1二阶行列式" aria-hidden="true">#</a> 1.1.1二阶行列式</h4>
<p>主对角线为 a₁₁ x a₂₂</p>
<p>副对角线为 a₂₁ x a₁₂</p>
<p>行列式的值为主对角线 减 副对角 a₁₁ x a₂₂ - a₂₁ x a₁₂</p>
<p>等式左边所有X,Y的系数写成行列式D，D≠0</p>
<p>行列式D₁ → 第一列写结果，第二列写X₁的系数</p>
<p>行列式D₂ → 第一列写结果，第二列写X₂的系数</p>
<p>X₁=D₁/D , X₂=D₂/D</p>
<h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h4>
<h4 id="_1-1-2三阶行列式" tabindex="-1"><a class="header-anchor" href="#_1-1-2三阶行列式" aria-hidden="true">#</a> 1.1.2三阶行列式</h4>
<p>符合对角线法则</p>
<p>解线性方程组:</p>
<p>等式左边所有X,Y,Z的系数写成行列式D,D≠0</p>
<p>行列式D1→第一列写结果 第二三列写y,z的系数</p>
<p>行列式D2→第一列写结果 第二三列写x,z的系数</p>
<p>行列式D3→第一列写结果 第二三列写x,y的系数</p>
<p>X=D1/D , Y=D2/D , Z=D3/D</p>
<h3 id="_1-2-n阶行列式" tabindex="-1"><a class="header-anchor" href="#_1-2-n阶行列式" aria-hidden="true">#</a> 1.2 n阶行列式</h3>
<h4 id="_1-2-1-排列与逆序" tabindex="-1"><a class="header-anchor" href="#_1-2-1-排列与逆序" aria-hidden="true">#</a> 1.2.1 排列与逆序</h4>
<h4 id="_1-2-2-阶行列式的定义" tabindex="-1"><a class="header-anchor" href="#_1-2-2-阶行列式的定义" aria-hidden="true">#</a> 1.2.2 阶行列式的定义</h4>
<p><strong>全排列的定义</strong></p>
<p>由1,2,3,4,,,n组成的一个有序数组称为一个n级全排列</p>
<p><strong>排列的种数</strong></p>
<p>n个不同元素的所有排列的种数,通常用Pn表示</p>
<p>P₃ = 3x2x1</p>
<p>Pn = n!</p>
<p><strong>逆序的定义</strong></p>
<p>如果两个数的前后位置与大小顺序相反,则构成一个逆序</p>
<p><strong>逆序数的定义</strong></p>
<p>一个排列中所有逆序的总数</p>
<p><strong>排列的奇偶性</strong></p>
<p>逆序数为奇数的称为奇排列，列标为奇排列为负项</p>
<p>逆序数为偶数的称为偶排列，列标为偶排列为正项</p>
<p><strong>对换的定义</strong></p>
<p>在排列中，将任意两个元素对调,其余元素不动，这种做出新排列手续的叫做对换</p>
<p>将两个相邻的元素进行一次对调，叫做相邻对调</p>
<p><strong>对换的定理</strong></p>
<p>一个排列中的任意两个元素对换，排列奇偶性改变</p>
<p>奇排列变成偶排列，偶排列变成奇排列</p>
<p><strong>标准排列</strong></p>
<p>标准排序为偶排序，其逆序数为0，必然为自然排列</p>
<p>奇排列调成标准排列的对换次数为奇数</p>
<p>偶排列调成标准排列的对换次数为偶数</p>
<p><strong>n阶行列式的计算方法</strong></p>
<p><strong>上(下)三角行列式</strong></p>
<p>主对角线上(下)的元素都为0</p>
<p>此行列式的值为最长的主对角线相乘</p>
<p><strong>对角行列式</strong></p>
<p>主对角线上和下的元素都为0</p>
<p>此行列式的值为最长的主对角线相乘</p>
<p><strong>次上(下)三角行列式</strong></p>
<p>次对角线上(下)的元素都为0</p>
<p>此行列式的值为最长的主次角线相乘x(-1)的n(n-1)次方</p>
<p><strong>次对角行列式</strong></p>
<p>次对角线上和下的元素都为0</p>
<p>此行列式的值为最长的主次角线相乘x(-1)的n(n-1)次方</p>
<p><strong>按行展开</strong></p>
<p>行标是标准排列,列标是所有排列的可能</p>
<p><strong>按列展开</strong></p>
<p>列标是标准排列,行标是所有排列的可能</p>
<p><strong>既不按行也不按列</strong></p>
<p>符号由行标的逆序数加上列表的逆序数共同决定</p>
<h3 id="_1-3-行列式的性质" tabindex="-1"><a class="header-anchor" href="#_1-3-行列式的性质" aria-hidden="true">#</a> 1.3 行列式的性质</h3>
<p>转置行列式：aij=aji</p>
<p>行列式中的行与列具有同等的地位，行列式的性质凡是对行成立的对列也成立</p>
<p>性质1：行列式与他的转置行列式相等</p>
<p>性质2：对换行列式的两行、两列，行列式变号</p>
<p>推论：如果行列式有两行或两列完全相同，则此行列式等于零</p>
<p>性质3：行列式中某一行或列中所有的元素都乘同一数k，等于用数k乘此行列式</p>
<p>推论：行列式中某一行或列的所有元素的公因子可以提到行列式记号外面</p>
<p>性质4：行列式中如果有两行或列成比例，则此行列式等于零</p>
<p>性质5：若行列式的某一行或列的元素都是两数之和，可以拆成两个行列式之和</p>
<p>性质6：把行列式的某一行或列的各元素乘以同一数然后加到另一行或列对应的元素上去，行列式不变</p>
<h3 id="_1-4-行列式按行-列" tabindex="-1"><a class="header-anchor" href="#_1-4-行列式按行-列" aria-hidden="true">#</a> 1.4 行列式按行（列）</h3>
<h4 id="_1-4-1-行列式按某一行-列" tabindex="-1"><a class="header-anchor" href="#_1-4-1-行列式按某一行-列" aria-hidden="true">#</a> 1.4.1 行列式按某一行（列）</h4>
<h4 id="_1-4-2-行列式按某k行-列" tabindex="-1"><a class="header-anchor" href="#_1-4-2-行列式按某k行-列" aria-hidden="true">#</a> 1.4.2 行列式按某k行（列）</h4>
<p><strong>余子式</strong>：在n阶行列式中，把（i，j）元 ai j 所在的第 i 行和第 j 列划去后，留下的 n-1 阶行列式叫做 aij 的余子式，记做 Mij</p>
<p><strong>代数余子式</strong>：记<code v-pre>Aij=(−1)i+jMijA_{ij}=(-1)^{i+j}M_{ij}Aij=(−1)i+jMij</code>,<code v-pre>AijA_ijAij</code>叫做<code v-pre>(i,j)(i,j)(i,j)</code>元<code v-pre>aija_{ij}aij</code>的代数余子式。</p>
<p><strong>定理1：</strong> 行列式等于他的任一行或列的各元素与其对应的代数余子式乘积之和</p>
<p><strong>定理2：</strong> 行列式某一行或列的元素与另一行或列的对应元素的代数余子式的乘积之和等于零</p>
<h3 id="_1-5-克莱姆法则" tabindex="-1"><a class="header-anchor" href="#_1-5-克莱姆法则" aria-hidden="true">#</a> 1.5 克莱姆法则</h3>
<h2 id="第2章-矩阵" tabindex="-1"><a class="header-anchor" href="#第2章-矩阵" aria-hidden="true">#</a> 第2章 矩阵</h2>
<p>2.1矩阵的概念</p>
<p>2.1.1矩阵的概念</p>
<p>2.1.2常用的特殊矩阵</p>
<p>2.2矩阵的运算</p>
<p>2.2.1矩阵的加法和数乘</p>
<p>2.2.2矩阵的乘法</p>
<p>2.2.3矩阵的转置</p>
<p>2.3可逆矩阵</p>
<p>2.3.1逆矩阵的概念</p>
<p>2.3.2矩阵可逆的充要条件、逆矩阵的伴随矩阵求法</p>
<p>2.3.3可逆矩阵的性质</p>
<p>2.4[^分块矩阵</p>
<p>2.5矩阵的初等变换、矩阵的秩和初等矩阵</p>
<p>2.5.1矩阵的初等变换</p>
<p>2.5.2矩阵的秩</p>
<p>2.4.3初等矩阵</p>
<h2 id="第3章-线性方程组" tabindex="-1"><a class="header-anchor" href="#第3章-线性方程组" aria-hidden="true">#</a> 第3章 线性方程组</h2>
<p>3.1线性方程组的消元解法67</p>
<p>3.2n维向量及其线性运算74</p>
<p>3.2.1n维向量74</p>
<p>3.2.2向量组的线性组合76</p>
<p>3.3向量组的线性相关性78</p>
<p>3.3.1<a href="https://baike.baidu.com/item/%E7%BA%BF%E6%80%A7%E7%9B%B8%E5%85%B3%E6%80%A7/19132268" target="_blank" rel="noopener noreferrer">线性相关性<ExternalLinkIcon/></a>的概念78</p>
<p>3.3.2线性相关性的判定81</p>
<p>3.3.3向量组之间的线性表示82</p>
<p>3.4向量组的秩84</p>
<p>3.4.1<a href="https://baike.baidu.com/item/%E6%9E%81%E5%A4%A7%E7%BA%BF%E6%80%A7%E6%97%A0%E5%85%B3%E7%BB%84/11035667" target="_blank" rel="noopener noreferrer">极大线性无关组<ExternalLinkIcon/></a>84</p>
<p>3.4.2向量组的秩85</p>
<p>3.4.3矩阵与向量组秩的关系85</p>
<p>3.5线性方程组解的结构87</p>
<p>3.5.1<a href="https://baike.baidu.com/item/%E9%BD%90%E6%AC%A1%E7%BA%BF%E6%80%A7%E6%96%B9%E7%A8%8B%E7%BB%84/2225933" target="_blank" rel="noopener noreferrer">齐次线性方程组<ExternalLinkIcon/></a>解的结构87</p>
<p>3.5.2<a href="https://baike.baidu.com/item/%E9%9D%9E%E9%BD%90%E6%AC%A1%E7%BA%BF%E6%80%A7%E6%96%B9%E7%A8%8B%E7%BB%84/2220611" target="_blank" rel="noopener noreferrer">非齐次线性方程组<ExternalLinkIcon/></a>解的结构93</p>
<h2 id="第4章-矩阵的特征值和特征向量" tabindex="-1"><a class="header-anchor" href="#第4章-矩阵的特征值和特征向量" aria-hidden="true">#</a> 第4章 矩阵的特征值和特征向量</h2>
<p>4.1矩阵的特征值和特征向量101</p>
<p>4.1.1矩阵的特征值和特征向量101</p>
<p>4.1.2特征值、特征向量的基本性质103</p>
<p>4.2相似矩阵与矩阵对角化105</p>
<p>4.2.1相似矩阵的定义105</p>
<p>4.2.2相似矩阵的性质106</p>
<p>4.2.3方阵对角化107</p>
<p>4.3<a href="https://baike.baidu.com/item/%E5%AE%9E%E5%AF%B9%E7%A7%B0%E7%9F%A9%E9%98%B5/4773879" target="_blank" rel="noopener noreferrer">实对称矩阵<ExternalLinkIcon/></a>的特征值和特征向量112</p>
<p>4.3.1向量内积112</p>
<p>4.3.2<a href="https://baike.baidu.com/item/%E6%AD%A3%E4%BA%A4%E5%90%91%E9%87%8F%E7%BB%84/5123261" target="_blank" rel="noopener noreferrer">正交向量组<ExternalLinkIcon/></a>113</p>
<p>4.3.3正交矩阵114</p>
<p>4.3.4<a href="https://baike.baidu.com/item/%E5%AE%9E%E5%AF%B9%E7%A7%B0%E7%9F%A9%E9%98%B5/4773879" target="_blank" rel="noopener noreferrer">实对称矩阵<ExternalLinkIcon/></a>的特征值和特征向量114</p>
<h2 id="第5章-二次型" tabindex="-1"><a class="header-anchor" href="#第5章-二次型" aria-hidden="true">#</a> 第5章 二次型</h2>
<p>5.1二次型与对称矩阵124</p>
<p>5.1.1二次型及其矩阵124</p>
<p>5.1.2矩阵合同126</p>
<p>5.2二次型的标准型与规范型127</p>
<p>5.2.1二次型的标准型127</p>
<p>5.2.2化二次型为标准型128</p>
<p>5.3二次型的有定性132</p>
<p>5.3.1二次型的正（负）定性132</p>
<p>5.3.2二次型的有定性133</p>
</div></template>
