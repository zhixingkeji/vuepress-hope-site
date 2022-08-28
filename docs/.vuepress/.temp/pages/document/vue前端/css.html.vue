<template><div><h2 id="第1章-基础语法" tabindex="-1"><a class="header-anchor" href="#第1章-基础语法" aria-hidden="true">#</a> 第1章 基础语法</h2>
<h3 id="_1-1-css的概念" tabindex="-1"><a class="header-anchor" href="#_1-1-css的概念" aria-hidden="true">#</a> 1.1 CSS的概念</h3>
<p>网页是立体的，是一层一层的。我们看到的2D网页其实是俯视图，所有的样式叠加呈现出来的</p>
<h3 id="_1-2-css的使用" tabindex="-1"><a class="header-anchor" href="#_1-2-css的使用" aria-hidden="true">#</a> 1.2 CSS的使用</h3>
<p>（1）内联样式</p>
<p>只能针对一个标签进行修改。</p>
<p>当需要变化时，不方便进行维护。</p>
<p>前后端不分离，耦合程度高，代码复用低。</p>
<p>测试时可以用，开发时一定不能用。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;p style="color:red; font-size: 100px">少小离家老大回&lt;/p>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（2）内部样式表</p>
<p>将css语句写入到一对 style 标签中。</p>
<p>通过css选择器，同时为多个标签设置样式。</p>
<p>只能为一个网页起作用，不能跨页面复用。</p>
<p>（3）外部样式表</p>
<p>创建 .css 文件，通过<code v-pre>&lt;link&gt;</code>标签引入到 html 中。</p>
<p>调用了浏览器的缓存机制，加速浏览速度。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>&lt;link rel=<span class="token string">"name"</span> href=<span class="token string">"./style.css"</span>>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3-设置宽高" tabindex="-1"><a class="header-anchor" href="#_1-3-设置宽高" aria-hidden="true">#</a> 1.3 设置宽高</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 100px
<span class="token property">height</span><span class="token punctuation">:</span> fit-content   //根据内容设置高度
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-提升优先级" tabindex="-1"><a class="header-anchor" href="#_1-4-提升优先级" aria-hidden="true">#</a> 1.4 提升优先级</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token important">!important</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-5-指针样式" tabindex="-1"><a class="header-anchor" href="#_1-5-指针样式" aria-hidden="true">#</a> 1.5 指针样式</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>auto | 指针
default | 指针
none | 没有任何样式
context-menu | 指针
help | 指针带问号
pointer | 手指
progress | 指针+等待
wait | 等待
cell | 粗加号
crosshair | 细加号 
text | 输入
vertical-text | 横着输入
move | 移动
not-allowed | 红色禁用
e-resize | 横向拉长
n-resize | 竖向拉长
ne-resize | 斜着拉长
nw-resize | 反斜着拉长
zoom-in | 放大镜
zoom-out | 放小镜
grab | 抓手
grabbing | 抓手中

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第2章-文字字体" tabindex="-1"><a class="header-anchor" href="#第2章-文字字体" aria-hidden="true">#</a> 第2章 文字字体</h2>
<h3 id="_2-1-css字体相关属性" tabindex="-1"><a class="header-anchor" href="#_2-1-css字体相关属性" aria-hidden="true">#</a> 2.1 CSS字体相关属性</h3>
<p>（1）字体样式</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">font-size</span><span class="token punctuation">:</span> 10px<span class="token punctuation">,</span>	对于像素点的大小
<span class="token property">font-size</span><span class="token punctuation">:</span> 10em<span class="token punctuation">,</span>	对于自身字体的大小
<span class="token property">font-size</span><span class="token punctuation">:</span> 10rem<span class="token punctuation">,</span>	对于根元素的字体大小
<span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">,</span>	加粗
<span class="token property">color</span><span class="token punctuation">:</span> #000<span class="token punctuation">,</span>     	字体颜色
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）字体族</p>
<ul>
<li>指定多个字体</li>
</ul>
<p>中间用逗号连接，优先使用第一个，若没有则向后延伸，如果名称中间有空格需要用引号引起来。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>font-family：monospace； //等宽字体族
font-family：serif； //衬线字体
font-family：sans-serif；  //非衬线字体
font-family：<span class="token string">"黑体"</span>；  //中文或者有空格<span class="token punctuation">,</span>需要用双引号包裹

生产通用模板
<span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'Microsoft Yahei'</span><span class="token punctuation">,</span> <span class="token string">'PingFang SC'</span><span class="token punctuation">,</span> <span class="token string">'Avenir'</span><span class="token punctuation">,</span> <span class="token string">'Segoe UI'</span><span class="token punctuation">,</span> <span class="token string">'Hiragino Sans GB'</span><span class="token punctuation">,</span> STHeiti<span class="token punctuation">,</span> <span class="token string">'Microsoft Sans Serif'</span><span class="token punctuation">,</span> <span class="token string">'WenQuanYi Micro Hei'</span><span class="token punctuation">,</span> sans-serif <span class="token important">!important</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>从服务器下载字体</li>
</ul>
<p>给用户使用，注意版权问题，你提供的字体源给用户，必须是免费开源的。</p>
<p>创建文件 src/assets/fonts/fonts.css</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"AlibabaPuHuiTiH"</span><span class="token punctuation">;</span>
    <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"./阿里巴巴普惠字体.ttf"</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"truetype"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全局引入 main.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'@/assets/fonts/fonts.css'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>组件中使用</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span> <span class="token property">font-family</span><span class="token punctuation">:</span> AlibabaPuHuiTiH <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3）字体图标网站<a href="https://fa5.dashgame.com/#/" target="_blank" rel="noopener noreferrer">https://fa5.dashgame.com/#/<ExternalLinkIcon/></a></p>
<p>使用图片图标，放大后会导致失真。</p>
<p>使用字体图标，放大不会失真，矢量图的特点。</p>
<p>注意版权问题。</p>
<p>步骤：下载，解压，导入，引入，创建标签</p>
<p>一般只有fas和fab开头是可用的免费的图标。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;i class="fas fa-bell">&lt;/i>
&lt;i class="fab fa-bell-slash">&lt;/i>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-css文本相关属性" tabindex="-1"><a class="header-anchor" href="#_2-2-css文本相关属性" aria-hidden="true">#</a> 2.2 CSS文本相关属性</h3>
<p>(1) 行高</p>
<p>line-height：200px；</p>
<p>行高指的是文字实际占有的高度。</p>
<p>行高会在字体框的上下平均分配。</p>
<p>公式： 行高 =  上间距高度 + 字体框高度 + 下间距高度</p>
<p>字体框：设置字体大小其实是设置字体框的大小。</p>
<p>(2) 文本对题方式</p>
<p>水平对齐</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">text-align</span><span class="token punctuation">:</span>center  #居中对齐
<span class="token property">text-align</span><span class="token punctuation">:</span>left #左对齐
<span class="token property">text-align</span><span class="token punctuation">:</span>right #右对齐
<span class="token property">text-align</span><span class="token punctuation">:</span>justify # 两端对齐
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>垂直对齐</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>vertical-align：baseline； 默认为基线对齐
vertical-align：top；  顶部对齐
vertical-align：bottom；  底部对齐
vertical-align：middle；  居中对齐
vertical-align：100px；  值对齐

<span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span> //将行高设置为div的高度<span class="token punctuation">,</span>也能居中对齐
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>图片引入标签后是按照基线对齐的，也是底部会有一点留白，需要通过底部对齐来去掉底部的白边。</p>
<p>(3) 文本缩进</p>
<p>文本缩进属性是用来指定文本的第一行的缩进。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span><span class="token property">text-indent</span><span class="token punctuation">:</span>50px<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(4) 文本转换</p>
<p>文本转换属性是用来指定在一个文本中的大写和小写字母。</p>
<p>可用于所有字句变成大写或小写字母，或每个单词的首字母大写。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span><span class="token property">text-transform</span><span class="token punctuation">:</span>uppercase<span class="token punctuation">;</span><span class="token punctuation">}</span> <span class="token selector"># 全部大写
p</span> <span class="token punctuation">{</span><span class="token property">text-transform</span><span class="token punctuation">:</span>lowercase<span class="token punctuation">;</span><span class="token punctuation">}</span> <span class="token selector"># 全部小写
p</span> <span class="token punctuation">{</span><span class="token property">text-transform</span><span class="token punctuation">:</span>capitalize<span class="token punctuation">;</span><span class="token punctuation">}</span> # 每个单词首字母大写
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-超链接样式" tabindex="-1"><a class="header-anchor" href="#_2-3-超链接样式" aria-hidden="true">#</a> 2.3 超链接样式</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>text-decoration：none			没有线
text-decoration：underline		下划线
text-decoration：line-through		删除线
text-decoration：overline ；		上划线
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要删除超链接的下划线可以设置为none</p>
<p>超链接换行会出现一个小空白，两个a标签挨着写就不会有空白</p>
<p>超链接的伪类</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">a：link</span><span class="token punctuation">{</span>
    表示没访问过的链接效果
<span class="token punctuation">}</span>
<span class="token selector">a：visited</span><span class="token punctuation">{</span>
    表示访问过的链接效果
<span class="token punctuation">}</span>
<span class="token selector">a：hover</span><span class="token punctuation">{</span>
    表示鼠标移入时超链接的效果
<span class="token punctuation">}</span>
<span class="token selector">a：active</span><span class="token punctuation">{</span>
    表示鼠标点击链接时的效果
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-空白处理" tabindex="-1"><a class="header-anchor" href="#_2-4-空白处理" aria-hidden="true">#</a> 2.4 空白处理</h3>
<p>white-space：normal；正常</p>
<p>white-space：nowrap；不换行</p>
<p>white-space：pre；保留空白</p>
<p>设置文章只显示摘要，省略掉主要内容</p>
<p>width：200px</p>
<p>white-space：nowrap；</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">overflow</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span> #默认值<span class="token punctuation">,</span>内容不会被修剪<span class="token punctuation">,</span>会呈现在元素框之外
<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> #内容会被修剪，并且其余内容是不可见的。
<span class="token property">overflow</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span> #内容会被修剪，但是浏览器会显示滚动条
<span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span> #如果内容被修剪，才显示滚动条
<span class="token property">overflow</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span> #从父元素继承 overflow 属性的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>text-overflow：ellipsis；</p>
<h2 id="第3章-背景-图片" tabindex="-1"><a class="header-anchor" href="#第3章-背景-图片" aria-hidden="true">#</a> 第3章 背景，图片</h2>
<h3 id="_3-1-css背景相关属性" tabindex="-1"><a class="header-anchor" href="#_3-1-css背景相关属性" aria-hidden="true">#</a> 3.1 CSS背景相关属性</h3>
<p>（1）颜色</p>
<p>直接使用颜色名会非常不方便，比如yello，blue，green</p>
<p>使用RGB值。red，green，blue的值，0-255之间</p>
<p>使用RGBA，增加了一个透明度设置，为百分比</p>
<p>使用十六进制RGB，<code v-pre>#ff00ff</code></p>
<p>HSL：色相（0-360），饱和度（100%），亮度（100%）</p>
<p>全透明颜色：transparent</p>
<p>（2）背景颜色</p>
<p>backround-color：#bfa;</p>
<p>（3）背景图片</p>
<p>backround-image : url (&quot;./path&quot;);</p>
<h3 id="_3-2-背景图片的重复" tabindex="-1"><a class="header-anchor" href="#_3-2-背景图片的重复" aria-hidden="true">#</a> 3.2 背景图片的重复</h3>
<p>背景图片的重复</p>
<p>background-repeat：repeat    // 默认xy双方向重复</p>
<p>background-repeat：repeat-x    // 沿着x双方向重复</p>
<p>background-repeat：repeat-y   // 沿着y双方向重复</p>
<p>background-repeat：no-repeat   // 不重复</p>
<p>背景图片的位置</p>
<p>background-position：top left；// 图片显示在左上角</p>
<p>background-position：center center ；// 图片显示在中心</p>
<p>background-position：bottom right ；// 图片显示在右下角</p>
<p>backgournd-position：-50px 300px； //由偏移量确定位置</p>
<p>背景图片的裁剪</p>
<p>backround-clip：border-box；  // 默认值 背景会出现在边框的下边</p>
<p>backround-clip：content-box；  // 背景只会出现在内容区</p>
<p>backround-clip：padding-box； // 背景只出现在内容区和内边距</p>
<p>背景图片的原点</p>
<p>backround-origin：border-box；// 背景图片的原点在边框上</p>
<p>backround-origin：content-box；  // 背景图片的原点在内容区</p>
<p>backround-origin：padding-box； // 背景图片的原点在内边距上</p>
<p>背景图片的大小</p>
<p>backround-size：100px 100px； // 背景图片的宽高</p>
<p>backround-size：100px auto； // 如果只写了宽度，则高度为 auto</p>
<p>backround-size：100% auto ； // 宽度充满父元素，高度自动</p>
<p>backround-size：cover ； // 保持图片比例，把元素铺满，可能显示不全</p>
<p>backround-size：contain ； // 保持图片比例，把图片显示完整，元素可能不会铺满</p>
<p>背景图片的滚动</p>
<p>background-attachment：scroll   //  默认值，背景图片随着元素滚动而滚动</p>
<p>background-attachment：fixed   //  可选值，背景图片不随着元素滚动</p>
<p>背景图片闪烁问题解决</p>
<p>未请求过的图片，在第一次显示时，可能会闪烁。</p>
<p>把几张图片拼接到一张图片上，通过调整 position 来显示不同内容。</p>
<p>background-color：rgb（241,241,241）</p>
<p>给body设置颜色后，对body无效，而是直接传给html</p>
<h3 id="_3-3-渐变" tabindex="-1"><a class="header-anchor" href="#_3-3-渐变" aria-hidden="true">#</a> 3.3 渐变</h3>
<p>线性渐变</p>
<p>background-image：linear-gradient（to right，red，yellow）</p>
<p>background-image：linear-gradient（to right top，red，yellow，blue）</p>
<p>background-image：linear-gradient（ 0.25 turn，red，yellow）</p>
<p>background-image：linear-gradient（ 90 deg，red，yellow）</p>
<p>径向渐变</p>
<p>background-image：radial-gradient（ 90 deg，red，yellow）</p>
<p>例子</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">&lt;div id="nihao">&lt;/div>

#nihao</span><span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span>150px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>#1fc8db<span class="token punctuation">;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>141deg<span class="token punctuation">,</span>#9fb8ad 0%<span class="token punctuation">,</span>#1fc8db 51%<span class="token punctuation">,</span>#2cb5e8 75%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第4章表格-列表" tabindex="-1"><a class="header-anchor" href="#第4章表格-列表" aria-hidden="true">#</a> 第4章表格，列表</h2>
<h3 id="_4-1-表格相关属性" tabindex="-1"><a class="header-anchor" href="#_4-1-表格相关属性" aria-hidden="true">#</a> 4.1 表格相关属性</h3>
<p>表格边框</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">table, th, td</span>
<span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>折叠边框</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>border-spacing：0px  ；   边界的距离为0，但依然是两条边
boder-collapse：collapse  ； 边界合并，只留一条边
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>表格颜色</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">table, td, th</span>
<span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span>1px solid green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">th</span>
<span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span>white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>隔行变色</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">tr：nth-child（odd）</span><span class="token punctuation">{</span>
color：red；
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tr不是table的子元素，如果没定义tbody，浏览器会自动创建tbody，将tr放入tbody中</p>
<p>表格特有的垂直居中</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">td</span><span class="token punctuation">{</span>
	vertical-align：middle；
	text-align：center；
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表格应用：日历，课程表</p>
<h3 id="_4-2-列表相关属性" tabindex="-1"><a class="header-anchor" href="#_4-2-列表相关属性" aria-hidden="true">#</a> 4.2 列表相关属性</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">list-style-type</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>  //去除项目符号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector"># 无序列表
ul.a</span> <span class="token punctuation">{</span><span class="token property">list-style-type</span><span class="token punctuation">:</span> circle<span class="token punctuation">;</span><span class="token punctuation">}</span> <span class="token selector"># 圆圈
ul.b</span> <span class="token punctuation">{</span><span class="token property">list-style-type</span><span class="token punctuation">:</span> square<span class="token punctuation">;</span><span class="token punctuation">}</span> <span class="token selector"># 方块
 
# 有序列表
ol.c</span> <span class="token punctuation">{</span><span class="token property">list-style-type</span><span class="token punctuation">:</span> upper-roman<span class="token punctuation">;</span><span class="token punctuation">}</span> <span class="token selector"># 罗马符号
ol.d</span> <span class="token punctuation">{</span><span class="token property">list-style-type</span><span class="token punctuation">:</span> lower-alpha<span class="token punctuation">;</span><span class="token punctuation">}</span> # 小写字母
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第5章-弹性盒" tabindex="-1"><a class="header-anchor" href="#第5章-弹性盒" aria-hidden="true">#</a> 第5章 弹性盒</h2>
<h3 id="_5-1-flex弹性盒" tabindex="-1"><a class="header-anchor" href="#_5-1-flex弹性盒" aria-hidden="true">#</a> 5.1 Flex弹性盒</h3>
<p>（1） 弹性盒</p>
<p>CSS中的一种布局手段，主要用来代替浮动完成页面的布局。</p>
<p>Flex 使元素具有弹性，让元素可以跟随页面大小的改变而改变。</p>
<p>为什么已经复习了浮动，还要学习弹性盒呢？</p>
<p>在CSS3中为了解决浮动带来的问题，引入了弹性盒的概念。</p>
<p>为什么不直接学习弹性盒，还要学习浮动呢？</p>
<p>弹性盒比较新，不兼容老版本。但以后的趋势必然是新技术。</p>
<p>（2）弹性容器</p>
<p>要使用弹性盒，必须先将元素设置为弹性容器。</p>
<p>display：flex；</p>
<p>（3）弹性元素</p>
<p>弹性容器的子元素是弹性元素。</p>
<p>注意，只有弹性容器的直接子元素才是弹性元素。</p>
<p>一个元素可以同时是弹性元素（相对父元素），也是弹性容器（相对子元素）。</p>
<h3 id="_5-2-弹性容器的样式" tabindex="-1"><a class="header-anchor" href="#_5-2-弹性容器的样式" aria-hidden="true">#</a> 5.2 弹性容器的样式</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>//控制x轴
   justify-content：flex-start  //元素沿着主轴起点排列
   justify-content：flex-end  //元素沿着主轴终点排列
   justify-content：center  //元素居中排列
   justify-content：space-round  //空白分布到元素两侧
   justify-content：space-betweend  //空白均匀分布到元素间
   justify-content：space-round  //空白分布到元素单侧
   justify-content：centent  //空白分布到容器两侧，内容居中
   
//控制y轴   
   <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start/center/flex-end<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">ul</span><span class="token punctuation">{</span>
    display：flex<span class="token punctuation">;</span>   //开启弹性容器

    flex-direction：row<span class="token punctuation">;</span>  //默认值，水平排列，自左向右
    flex-direction：row-reverse<span class="token punctuation">;</span>  //默认值，水平排列，自右向左
    flex-direction：column<span class="token punctuation">;</span>  //垂直排列，自上向下
    flex-direction：column-reverse<span class="token punctuation">;</span>  //垂直排列，自下向上


    主轴：弹性元素的排列方向
    侧轴：与主轴垂直的方向是侧轴
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-弹性元素的样式" tabindex="-1"><a class="header-anchor" href="#_5-3-弹性元素的样式" aria-hidden="true">#</a> 5.3 弹性元素的样式</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">li</span><span class="token punctuation">{</span>
    //元素增长系数
    <span class="token property">flex-grow</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>  //默认值为0，不占弹性容器里的空间
    <span class="token property">flex-grow</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span>  //不占弹性容器里的空间
    <span class="token property">flex-grow</span><span class="token punctuation">:</span>2<span class="token punctuation">;</span>  //按比例分配容器里的空白空间

    //元素收缩系数
    flex-shrink：1  //默认值为1，容器变小，等比例收缩
    flex-shrink：0  //容器变小，此元素不进行收缩
    flex-shrink：2  //容器变小，按比例进行收缩

   //设置弹性元素在弹性容器中是否自动换行
   flex-wrap：nowrap   //默认值，元素不会自动换行
   flex-wrap：wrap   //元素沿着辅轴方向自动换行
   flex-wrap：wrap-reverse   //元素沿着辅轴反方向自动换行

   //指定元素在主轴上的基础长度
   flex-basis：auto
   flex-basis：100px  
   如果主轴是垂直的，则改变长度
   如果主轴是水平的，则改变宽度



    //简写模式
    flex ： 1 1 auto    //顺序为 增长 缩减 基础
    flex ： initial    //等价于 0 1 auto
    flex ： auto       //等价于 1 1 auto
    flex ： none       //等价于 0 0 auto


    //设定弹性元素的排列顺序
    可以通过属性改变排列的顺序，而不用更改结构
    order：2
    order：1
    order：3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第6章-动画" tabindex="-1"><a class="header-anchor" href="#第6章-动画" aria-hidden="true">#</a> 第6章 动画</h2>
<h3 id="_6-1-动画" tabindex="-1"><a class="header-anchor" href="#_6-1-动画" aria-hidden="true">#</a> 6.1 动画</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;style>
div{
animation-name:mymove;  //为这个动画的过程命名
animation-duration:3s;  //动画的持续时间
animation-iteration-count:3 ; //重复播放3次
animation-delay:3s; //延迟3秒启动
animation-timing-function:ease-in-out; //动画时间函数


animation-iteration-count:20;   //指定动画执行的次数
animation-iteration-count:infinite;   //动画无限次执行


animation-direction:normal;  //默认值，动画正向执行
animation-direction:reverse;  //可选值，动画反向执行
animation-direction:alternate;  //可选值，从from向to执行，重复时反向执行
animation-direction:alternate-reverse;  //可选值，从to向from执行，重复时反向执行

animation-play-state:running;   //默认值，动画执行
animation-play-state:pause;   //默认值，动画执行

animation-fill-mode:none;  //默认值，动画执行完毕后，回到原来的状态
animation-fill-mode:forwards;  //动画执行完毕后，停在结束的位置
animation-fill-mode:backwards;  //动画执行完毕后，停在开始的位置
animation-fill-mode:both;  //结合上面两个特点 


}


关键帧
@keyframes mymove{ //为命名过的动画制作过程
from {left:0px;}    //开始位置
to{left:200px;}     //结束位置
}

@keyframes mymove{ //为命名过的动画制作过程
0% {top:opx;}
50% {top:200px;}
100% {top:100px;}
}
&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-变换-transform" tabindex="-1"><a class="header-anchor" href="#_6-2-变换-transform" aria-hidden="true">#</a> 6.2 变换 transform</h3>
<p>变换不会改变页面布局。</p>
<p>（1）缩放</p>
<p>transform：scaleX(1.5 );  //缩放 x轴为1.5倍</p>
<p>transform：scale( 2，1.6);  //缩放 x轴为2倍，y轴为1.6倍</p>
<p>图片移入放大的效果</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.img-wrapper</span> <span class="token punctuation">{</span>
width：200px；
height：200px；
border：1px red solod；
overflow：hidden；// 是否裁剪
<span class="token punctuation">}</span>

<span class="token selector">img</span> <span class="token punctuation">{</span>  transition：2s； <span class="token punctuation">}</span>
<span class="token selector">.img-wrapper：hover   img</span><span class="token punctuation">{</span>
transform：scale（1.2）；
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对Z轴的缩放无法通过只改变视距来看到，缩放Z轴只是对物体高度的拉伸，需要通过旋转来观看到Z轴的缩放。</p>
<p>变形的原点</p>
<p>transform-origin：center；  默认值为图片的中心</p>
<p>transform-origin：20px 20px；</p>
<p>（2）平移</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translateX</span><span class="token punctuation">(</span>50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translateY</span><span class="token punctuation">(</span>50%<span class="token punctuation">)</span><span class="token punctuation">;</span>  //相对自身的高度平移Y轴的50%
<span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translateZ</span><span class="token punctuation">(</span>50px<span class="token punctuation">)</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translate</span><span class="token punctuation">(</span>50px<span class="token punctuation">,</span>100px<span class="token punctuation">)</span>  //平移 x轴平移80px <span class="token punctuation">,</span>y轴平移 100px
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过平移居中</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box1</span><span class="token punctuation">{</span>
	left：50%<span class="token punctuation">;</span>
	top：50%<span class="token punctuation">;</span>
	transform：<span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过平移浮出效果</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box4</span><span class="token punctuation">{</span>
	transition：all 0.3s；
<span class="token punctuation">}</span>

<span class="token selector">.box4：hover</span><span class="token punctuation">{</span>
	transform：translateY（-4px）；
	box-shadow：0 0 10px rgba（0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.3）；
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过平移调整视距</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span> perspective：800px；<span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span> border：1px red solid；<span class="token punctuation">}</span>

<span class="token selector">.box1</span><span class="token punctuation">{</span>
	width：200px；
	height：200px；
	background-color：#bfa；
	margin：200px  auto；
	transition：2s；
<span class="token punctuation">}</span>

<span class="token selector">.box1：hover</span> <span class="token punctuation">{</span>
	transform：translateZ（800px）；
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）旋转</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>transform：<span class="token function">rotateX</span><span class="token punctuation">(</span> 90 deg <span class="token punctuation">)</span> <span class="token punctuation">;</span> //旋转 图片旋转90度
transform：<span class="token function">rotateY</span><span class="token punctuation">(</span> 0.5 turn <span class="token punctuation">)</span><span class="token punctuation">;</span> //旋转 图片旋转半圈
transform：<span class="token function">skewX</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span> //沿着X轴倾斜10度
transform：<span class="token function">skewY</span><span class="token punctuation">(</span>20deg<span class="token punctuation">)</span><span class="token punctuation">;</span> //沿着Y轴倾斜20度

写成分号的形式 只能采取最后一种设置
如果需要同时实现旋转和平移 需要写在一起

能够同时实现旋转和平移
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token punctuation">:</span><span class="token function">translate</span><span class="token punctuation">(</span>50px<span class="token punctuation">,</span>100px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>

设置元素的背面是否显示
backface-visibility：hidden；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-过渡-transition" tabindex="-1"><a class="header-anchor" href="#_6-3-过渡-transition" aria-hidden="true">#</a> 6.3 过渡 transition</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">&lt;style>
div</span><span class="token punctuation">{</span>
<span class="token property">transition-delay</span><span class="token punctuation">:</span>5000ms<span class="token punctuation">;</span>  //延迟时间5秒
<span class="token property">transition-duration</span><span class="token punctuation">:</span>3s<span class="token punctuation">;</span> //持续时间3秒
<span class="token property">transition-property</span><span class="token punctuation">:</span>height，width，，，，<span class="token punctuation">;</span>  //设置需要变换的属性

<span class="token property">transition-timing-function</span><span class="token punctuation">:</span>ease<span class="token punctuation">;</span> //设置动画的速度曲线 由慢到快再到慢
<span class="token property">transition-timing-function</span><span class="token punctuation">:</span>linear<span class="token punctuation">;</span> //匀速
<span class="token property">transition-timing-function</span><span class="token punctuation">:</span>ease-in<span class="token punctuation">;</span> //加速运动
<span class="token property">transition-timing-function</span><span class="token punctuation">:</span>ease-out<span class="token punctuation">;</span> //减速运动
<span class="token property">transition-timing-function</span><span class="token punctuation">:</span>ease-in-out<span class="token punctuation">;</span> //先加速，后减速 

<span class="token property">transition-timing-function</span><span class="token punctuation">:</span>cubic-bezier（.24<span class="token punctuation">,</span>.95<span class="token punctuation">,</span>.82<span class="token punctuation">,</span>-0.88）//贝赛斯曲线

<span class="token property">transition-timing-function</span><span class="token punctuation">:</span>steps（2，end）<span class="token punctuation">;</span> //分两次执行，先计时在执行
<span class="token property">transition-timing-function</span><span class="token punctuation">:</span>steps（2，start）<span class="token punctuation">;</span> //先执行，再计时

<span class="token punctuation">}</span>


<span class="token selector">div:hover</span><span class="token punctuation">{</span>
<span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span> //设置最终的结果
<span class="token punctuation">}</span>

简写
transition：all，2s；  //全部属性 
transition：height，2s； //只有高度
&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-常用开发动画" tabindex="-1"><a class="header-anchor" href="#_6-3-常用开发动画" aria-hidden="true">#</a> 6.3 常用开发动画</h3>
<ul>
<li>当图片出现在视野中, 开启动画上滑到指定位置,</li>
</ul>
<p>css</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token comment">//为图片添加样式</span>
<span class="token selector">.imgopen</span><span class="token punctuation">{</span>
      <span class="token property">animation</span><span class="token punctuation">:</span> slide-top 1.5s <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.250<span class="token punctuation">,</span> 0.460<span class="token punctuation">,</span> 0.450<span class="token punctuation">,</span> 0.940<span class="token punctuation">)</span>  <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token comment">//图片进入动画</span>
<span class="token atrule"><span class="token rule">@keyframes</span> slide-top</span> <span class="token punctuation">{</span>
     <span class="token selector">0% </span><span class="token punctuation">{</span>
        <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>1.00rem<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>1.00rem<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">100% </span><span class="token punctuation">{</span>
        <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      <span class="token comment">// 设置基本变量</span>
      <span class="token keyword">var</span> windowScrollTop <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">scrollTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> windowViewHeight <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token comment">///捕获需要监控的图片所在的容器</span>
      <span class="token keyword">var</span> elementArray <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'.HomeView-wrapper-3-2-left,.HomeView-wrapper-3-3-left,.HomeView-wrapper-3-4-left,.HomeView-wrapper-3-5-left,.HomeView-wrapper-3-6-left,.HomeView-wrapper-3-7-left'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 响应缩放事件</span>
      <span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        windowViewHeight <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 响应滚动事件</span>
      <span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">scroll</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        windowScrollTop <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">scrollTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>windowScrollTop <span class="token operator">!=</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> windowScrollTop <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
            windowViewHeight <span class="token operator">!=</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span>
            windowViewHeight <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
            elementArray <span class="token operator">!=</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span>
            elementArray <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          elementArray<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>elementArray<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>top <span class="token operator">>=</span> windowScrollTop <span class="token operator">&amp;&amp;</span> elementArray<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>top <span class="token operator">&lt;=</span> windowScrollTop <span class="token operator">+</span> windowViewHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                
                <span class="token comment">//处理逻辑 添加上动画类</span>
              elementArray<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">'imgopen'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"出来了"</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
              <span class="token comment">// 可能需要移除某些类 elementArray.eq(index).removeClass('imgopen');</span>
              console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"离开了"</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>单张长图无缝无限循环滚动</li>
</ul>
<p>构造两张长图片flex横放</p>
<ul>
<li>
<p>轮播图</p>
</li>
<li>
<p>双向滚动菜单</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token comment">//瀑布流2 菜单栏第二项</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      <span class="token comment">// 设置基本变量</span>
      <span class="token keyword">var</span> windowScrollTop <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">scrollTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> windowViewHeight <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 一个空的锚点</span>
      <span class="token keyword">var</span> elementArray <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#case2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 响应缩放事件</span>
      <span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        windowViewHeight <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 响应滚动事件</span>
      <span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">scroll</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        windowScrollTop <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">scrollTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>windowScrollTop <span class="token operator">!=</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> windowScrollTop <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
            windowViewHeight <span class="token operator">!=</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span>
            windowViewHeight <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
            elementArray <span class="token operator">!=</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span>
            elementArray <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          elementArray<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>elementArray<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>top <span class="token operator">>=</span> windowScrollTop <span class="token operator">&amp;&amp;</span> elementArray<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>top <span class="token operator">&lt;=</span> windowScrollTop <span class="token operator">+</span> windowViewHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//菜单栏2添加样式</span>
              <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".menu-item-2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">"menuselect"</span><span class="token punctuation">)</span>
                
                <span class="token comment">//取消菜单栏1和3的样式</span>
              <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".menu-item-1,.menu-item-3"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeClass</span><span class="token punctuation">(</span><span class="token string">"menuselect"</span><span class="token punctuation">)</span>
              <span class="token comment">// elementArray.eq(index).addClass('imgopen');</span>
              console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"出来了"</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第7章-浮动和布局" tabindex="-1"><a class="header-anchor" href="#第7章-浮动和布局" aria-hidden="true">#</a> 第7章 浮动和布局</h2>
<h3 id="_7-1-文档流" tabindex="-1"><a class="header-anchor" href="#_7-1-文档流" aria-hidden="true">#</a> 7.1 文档流</h3>
<p>最底层的那层，normal flow 。</p>
<p>元素有两个状态，在文档流中，和脱离文档流。</p>
<p>块元素：块元素在页面中总是独占一行，默认宽度是父元素的全部。</p>
<p>自上到下垂直排列。</p>
<p>行内元素：不会独占页面一行，只占自身得到大小。</p>
<p>自左向右水平排列。</p>
<p>若在一个行中不能容纳所有的行内元素，则会自动换行。</p>
<h3 id="_7-2-浮动" tabindex="-1"><a class="header-anchor" href="#_7-2-浮动" aria-hidden="true">#</a> 7.2 浮动</h3>
<p>float:left //向左浮动  其他内容会出现在图片的右边</p>
<p>float:right  //向右浮动    其他内容会出现在图片的左边</p>
<p>float:none //不浮动</p>
<p>设置浮动以后，元素完全脱离了文档流，不再占据位置，原来的宽度等式失效。</p>
<p>浮动元素移动的边界不会超过父元素的边界。</p>
<p>浮动元素之间不会覆盖，因为他们都在浮动层，所以按顺序排开。</p>
<p>如果浮动元素的上边是一个没有浮动的块元素，浮动元素就无法上移。</p>
<p>元素脱离文档流后，就没有块元素行内元素之分了。</p>
<p>可以利用浮动效果设置文字环绕</p>
<p>浮动元素不会盖住文字，文字会自动环绕浮动元素。</p>
<h3 id="_7-3-高度塌陷" tabindex="-1"><a class="header-anchor" href="#_7-3-高度塌陷" aria-hidden="true">#</a> 7.3 高度塌陷</h3>
<p>在浮动布局中，父元素的高度默认被子元素撑开</p>
<p>当子元素浮动后，其会完全脱离文档流，</p>
<p>子元素脱离文档流，无法撑起父元素，导致父元素高度塌陷。</p>
<p>父元素塌陷后，其下面的块元素会自动上移。</p>
<p>—— 开启BFC特点</p>
<p>使用BFC进行调整，Block Formatting Context，块级格式化环境</p>
<p>开启BFC后，该元素会变成一个独立的布局区域</p>
<p>开启BFC后，该元素不会被浮动元素覆盖，其元素的父子外边距不会重叠</p>
<p>开启BFC后，元素可以包含浮动的子元素</p>
<p>—— 开启BFC方法</p>
<p>- 设置父元素为浮动（不推荐）</p>
<p>- 将元素设置为行内元素（不推荐）</p>
<p>- overflow：auto / hidden；（推荐）</p>
<p>clear属性</p>
<p>浏览器自动为元素加一个外边距，使其不受其他元素浮动的影响</p>
<p>- clear：left  清除左侧浮动的影响</p>
<p>- clear：right  清除右侧浮动的影响</p>
<p>- clear：both ，清除两侧最大的那个浮动的影响</p>
<p>解决高度塌陷完美解决办法</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box1:after</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决外边距重叠问题</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box1:before</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时解决外边距重叠和塌陷问题问题</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box1:before, .box1:after</span><span class="token punctuation">{</span>
	<span class="token property">content</span><span class="token punctuation">:</span> ’‘<span class="token punctuation">;</span>
	display：table<span class="token punctuation">;</span>
	clear：both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第8章-盒模型" tabindex="-1"><a class="header-anchor" href="#第8章-盒模型" aria-hidden="true">#</a> 第8章 盒模型</h2>
<h3 id="_8-1-盒子模型概念" tabindex="-1"><a class="header-anchor" href="#_8-1-盒子模型概念" aria-hidden="true">#</a> 8.1 盒子模型概念</h3>
<p>每一个盒子由以下几部分组成，</p>
<p>内容区content，内边距padding，边框border，外边距marigin。</p>
<p>内容区，内边距，边框，为可见区域，会影响盒子的大小。</p>
<p>外边距不可见，不会影响盒子大小，但会影响盒子位置。</p>
<h3 id="_8-2-内容区" tabindex="-1"><a class="header-anchor" href="#_8-2-内容区" aria-hidden="true">#</a> 8.2 内容区</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">p</span><span class="token punctuation">{</span>
width：
height：
blackground-color：
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-外边距" tabindex="-1"><a class="header-anchor" href="#_8-3-外边距" aria-hidden="true">#</a> 8.3 外边距</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">&lt;style>
p</span><span class="token punctuation">{</span>
<span class="token property">margin</span><span class="token punctuation">:</span>10px 10px 10px 10px  
<span class="token property">margin-top</span><span class="token punctuation">:</span>100px
<span class="token property">margin-left</span><span class="token punctuation">:</span>100px
<span class="token property">margin-right</span><span class="token punctuation">:</span>100px
<span class="token property">margin-buttom</span><span class="token punctuation">:</span>100px
<span class="token punctuation">}</span>
&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>margin 塌陷</strong></p>
<p>可以为父元素添加 overflow:hidden。</p>
<h3 id="_8-4-内边距" tabindex="-1"><a class="header-anchor" href="#_8-4-内边距" aria-hidden="true">#</a> 8.4 内边距</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">&lt;style>
p</span><span class="token punctuation">{</span>
<span class="token property">padding-top</span><span class="token punctuation">:</span>100px
<span class="token property">padding-left</span><span class="token punctuation">:</span>100px
<span class="token property">padding-right</span><span class="token punctuation">:</span>100px
<span class="token property">padding-buttom</span><span class="token punctuation">:</span>100px

简写模式
<span class="token property">padding</span><span class="token punctuation">:</span>10px 10px 10px 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style>

内容区的背景颜色会延伸到内边距，但不能单独修改内边距的背景色，
可以在父div标签中嵌套一个div标签，样式设置为充满
子标签为内容区的颜色，父标签内容区颜色被覆盖
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-5-边框" tabindex="-1"><a class="header-anchor" href="#_8-5-边框" aria-hidden="true">#</a> 8.5 边框</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">p</span><span class="token punctuation">{</span>
<span class="token property">border-color</span><span class="token punctuation">:</span>red //设置所有边框的颜色
border-left-color  //只设置左边框的颜色

<span class="token property">border-style</span><span class="token punctuation">:</span>soild  //设置所有边框的风格为实线

<span class="token property">border-width</span><span class="token punctuation">:</span>2px  //设置所有边框的粗细
<span class="token property">border-width</span><span class="token punctuation">:</span>2px 4px 6px 8px //顺序，顺时针 上右下左
<span class="token property">border-top-width</span><span class="token punctuation">:</span>30px

<span class="token property">border</span><span class="token punctuation">:</span>red soild 2px  //简写模式

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>用边框画图</strong></p>
<p>更多<a href="https://blog.csdn.net/qq_36987708/article/details/122819586" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_36987708/article/details/122819586<ExternalLinkIcon/></a></p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token comment">// 正方形</span>
<span class="token selector">.zhengfangxing </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//圆形</span>
<span class="token selector">.yuanxing </span><span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>

<span class="token comment">//菱形</span>
<span class="token selector">.lingxing </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid transparent<span class="token punctuation">;</span>
    <span class="token property">border-bottom-color</span><span class="token punctuation">:</span> #5E83FF<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    
    <span class="token selector"><span class="token parent important">&amp;</span>:after </span><span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 10px solid transparent<span class="token punctuation">;</span>
        <span class="token property">border-top-color</span><span class="token punctuation">:</span> #5E83FF<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-6-盒子布局" tabindex="-1"><a class="header-anchor" href="#_8-6-盒子布局" aria-hidden="true">#</a> 8.6 盒子布局</h3>
<p>（1）盒子的水平布局</p>
<p>一个元素在其父元素中，必须满足一个等式</p>
<p>子元素的外边框+外边框+边框+内容区的宽度 = 父元素内容区宽度</p>
<p>浏览器会自动调整子元素的 margin-right</p>
<p>如果有auto的值，则自动调整auto的值，以满足等式，</p>
<p>若没有就强制优先调整margin-right</p>
<p>水平居中方法，将左右外边距调整为auto，会得到相等的两个外边距</p>
<p>（2）盒子的垂直布局</p>
<p>如果子元素中从父元素溢出，默认允许，若不允许则在父元素中设置</p>
<p>overflow：hidden，则不显示溢出内容，但有些内容又需要显示</p>
<p>直接设置 overflow：scroll，则生成两个方向的滚动条，</p>
<p>自动处理 overflow：auto，根据需要自动设置需要一个或者两个滚动条</p>
<p>垂直居中方法，height：25px，line-height：25px</p>
<p>（3）外边距的折叠</p>
<p>只有垂直方向才会发生，相邻的垂直方向上的外边距会发生重叠现象</p>
<p>—— 兄弟元素</p>
<p>兄弟元素会取两者之间的较大值，</p>
<p>如果一正一负，则相加，如果两者都负取绝对值较大的</p>
<p>以上的情况，对开发有利，无需处理</p>
<p>—— 父子元素</p>
<p>父子元素的外边距重叠，子元素的外边距会传递给父元素。</p>
<p>（4）行内元素的盒子模型</p>
<p>行内元素不支持设置内容区宽高，不能手动修改，由内容决定</p>
<p>水平方向外边距求和，垂直方向外边距不起作用，垂直塌陷</p>
<p>行内元素变成块元素</p>
<p>display： inline ，默认值</p>
<p>display： block，块元素</p>
<p>display： inline-block，行内块元素既可以设置宽高，也不会独占一行</p>
<p>display：nono ，彻底隐藏一个元素，不保留原来占得位置</p>
<p>visibility：hidden ；隐藏一个元素，保留原来的位置</p>
<p>（5）盒子的大小</p>
<p>box-sizing：content-box   //内容盒子，width，height 为内容区的大小</p>
<p>box-sizing：border-box    //边界盒子，width，height 为内容区和可见框的大小</p>
<p>（6）轮廓和圆角</p>
<p>outline 用来设置轮廓线，语法和border 一样。</p>
<p>outline 和 border 的区别是不会影响布局。</p>
<p>box-shadow 用来设置阴影，参数有四个。</p>
<p>box-shadow : 水平偏移量，垂直偏移量，模糊半径，颜色。</p>
<p>偏移量可以为负值，作用是向反方向移动。</p>
<p>模糊半径越大，阴影越模糊。</p>
<p>颜色一般为带透明rgba的颜色。</p>
<p>border-radius 用来设置圆角</p>
<p>border-radius：</p>
<p>四个值： 左上 ，右上， 右下， 左下</p>
<p>三个值：左上 ，右上左下 ，右下</p>
<p>两个值：左上右下，右上左下</p>
<p>一个值：全部</p>
<p>如果只有一个参数，则画圆角，如果为两个参数，则画椭圆角</p>
<p>border-top-left-radius：</p>
<p>border-top-right-radius：</p>
<p>border-bottom-left-radius：</p>
<p>border-bottom-right-radius：</p>
<p>将元素设置为一个圆形</p>
<p>border-radius：50%</p>
<h3 id="_8-7-网格布局" tabindex="-1"><a class="header-anchor" href="#_8-7-网格布局" aria-hidden="true">#</a> 8.7 网格布局</h3>
<h2 id="第9章-定位" tabindex="-1"><a class="header-anchor" href="#第9章-定位" aria-hidden="true">#</a> 第9章 定位</h2>
<h3 id="_9-1-定位相关属性" tabindex="-1"><a class="header-anchor" href="#_9-1-定位相关属性" aria-hidden="true">#</a> 9.1 定位相关属性</h3>
<p>只有开启定位的元素才能设置偏移量。</p>
<p>边界的大小会影响别人，而定位只会影响自己。</p>
<p>（1）relative 相对定位</p>
<p>开启相对定位后，不设置偏移量元素不会发生变化。</p>
<p>相对定位不会脱离文档流，不会改变元素性质。</p>
<p>提升元素的层级，可以覆盖别的元素。</p>
<p>相对定位的元素根据自己最原始的位置进行移动的。</p>
<p>（2）absolute 绝对定位</p>
<p>开启绝对定位后，不设置偏移量元素的位置不会发生变化。</p>
<p>绝对定位会让元素脱离文档流。</p>
<p>绝对定位会改变元素的性质，行内变成块，块的宽高被内容撑开。</p>
<p>绝对定位会使元素提升一个层级。</p>
<p>绝对定位的元素以包含块为基准，进行偏移。</p>
<p>包含块：离当前元素最近的祖先块元素。</p>
<p>绝对定位的包含块：离当前元素最近的开启了定位的祖先块元素</p>
<p>如果所有的祖先块元素都没有开启定位，那就以html根元素为包含块。</p>
<p>一般将需要绝对定位的父元素块设置成相对定位。</p>
<p>相对约束变成了9个值，7+left+righ = 父元素可见框的宽度</p>
<p>垂直方向也出现了相对约束。</p>
<p>垂直水平居中方法</p>
<p>margin：auto；</p>
<p>left，right，top，bottom：0；</p>
<p>（3）fixed 固定定位</p>
<p>固定定位永远参照浏览器的可视窗口进行定位。</p>
<p>固定定位的元素不会随浏览器的窗口滚动而移动。</p>
<p>就像网页里某个广告的弹窗一样，会一直固定在某个位置。</p>
<p>（4）sticky 粘滞定位</p>
<p>粘滞定位在一定范围内会随着滚动条滚动，但是达到某个极限值后，将其固定在可视窗口。</p>
<p>新技术的兼容性不好。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">&lt;style>
p</span><span class="token punctuation">{</span>
<span class="token property">position</span><span class="token punctuation">:</span>static<span class="token punctuation">;</span> //默认静止定位
<span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span> //相对定位
<span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span> //绝对定位
<span class="token property">position</span><span class="token punctuation">:</span>fixed<span class="token punctuation">;</span> //固定定位
<span class="token property">position</span><span class="token punctuation">:</span>sticky<span class="token punctuation">;</span> //粘滞定位

<span class="token property">left</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
right：200px；
<span class="token property">top</span><span class="token punctuation">:</span>150px<span class="token punctuation">;</span>
bottom：150；

<span class="token property">position</span><span class="token punctuation">:</span>fixed<span class="token punctuation">;</span> //适应于浏览器的绝对定位
<span class="token property">right</span><span class="token punctuation">:</span>0px<span class="token punctuation">;</span>  //附着浏览器的右边
<span class="token property">buttom</span><span class="token punctuation">:</span>0px<span class="token punctuation">;</span> //附着浏览器底部

<span class="token property">position</span><span class="token punctuation">:</span>rarelative<span class="token punctuation">;</span>
<span class="token property">left</span><span class="token punctuation">:</span> -20px<span class="token punctuation">;</span> //相对于其正常的位置向左偏移-20px
<span class="token property">right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span> //相对与其正常的位置向右偏移20px
<span class="token punctuation">}</span>
&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-定位的z轴" tabindex="-1"><a class="header-anchor" href="#_9-2-定位的z轴" aria-hidden="true">#</a> 9.2 定位的z轴</h3>
<p>（1）有三个元素，都开启了定位，这三个元素不存在父子关系，在z轴上默认都为0，所以是按照顺序覆盖的，先有的box1，后有的box2，所以box2在box1上面，最后有的box3，所以box3在最上面。</p>
<p>（2）提升元素的层级</p>
<p>当把box1的z-index值设为1后，比2和3默认为0的z-index的值要高，所以box1会在最上面。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.box1{z-index：1；}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（3）父子元素的层级</p>
<p>如果box4是box3的子元素，为box3的z轴设为3，为box4的z轴设为1，即便是这样，box3也无法覆盖box4。</p>
<p>因为父子元素之间，box4本身就在box3上，box3的定位提高了，box4在box3身上，等于box3也提高了，所以无法通过修改box3或者box4的z轴高度来实现box3覆盖box4，父元素永远无法覆盖子元素。</p>
<h2 id="第10章-响应式布局" tabindex="-1"><a class="header-anchor" href="#第10章-响应式布局" aria-hidden="true">#</a> 第10章 响应式布局</h2>
<h3 id="_10-1-响应式布局" tabindex="-1"><a class="header-anchor" href="#_10-1-响应式布局" aria-hidden="true">#</a> 10.1 响应式布局</h3>
<p>各种设备分辨率</p>
<p>iphone6</p>
<p>iphone7</p>
<p>ipad</p>
<p>ipad pro</p>
<p>19寸电脑</p>
<p>rem布局</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>对App.vue中设置html根元素的字体 @media

//宽屏等比缩放
4160-4480; fontsize: 325px;
3840-4160; fontsize: 300px;
3520-3840; fontsize: 270px;
3200-3520; fontsize: 250px;
2880-3200; fontsize: 225px;
2560-2880; fontsize: 200px;
2240-2560; fontsize: 175px;
1920-2240; fontsize: 150px;
1600-1920; fontsize: 125px;
1280-1600; fontsize: 100px;

//横版平板+窄屏
960-1280: fontsize: 90px;

//平板
640-960: fontsize: 85px;

//移动端
320-640: fontsize: 80px;
  0-320: fontsize: 75px;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设计稿相关</p>
<p>移动端(0-400多) 设计稿 750px  参考iphone6(375x667) 使用vm单位</p>
<p>平板端(768~1024px) 同移动端 参考ipad 使用vm单位</p>
<p>横版平板(1024px-1366px)和窄屏 电脑设计稿等比缩小 使用rem单位</p>
<p>电脑端 设计稿 1440px  参考19寸屏幕</p>
<p>演示屏幕 电脑设计稿等比放大 使用rem单位</p>
<p>响应式布局</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  // 平板横屏+电脑屏 适配
  <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 960px<span class="token punctuation">)</span></span>  <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>

  // 手机+平板 适配
  <span class="token atrule"><span class="token rule">@media</span> screen  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 960px<span class="token punctuation">)</span></span>  <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>        
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>element-plus 栅格布局</strong></p>
<p>xs	&lt;768px 响应式栅格数或者栅格属性对象	
sm	≥768px 响应式栅格数或者栅格属性对象	
md	≥992px 响应式栅格数或者栅格属性对象	
lg	≥1200px 响应式栅格数或者栅格属性对象	
xl	≥1920px 响应式栅格数或者栅格属性对象</p>
<p><strong>媒体查询</strong></p>
<p>当可视窗口为大于500，且小于700时候生效的样式</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span>（min-width：500px）<span class="token keyword">and</span>（max-width：700px）</span><span class="token punctuation">{</span>
	<span class="token selector">body</span><span class="token punctuation">{</span>     //并列时候用逗号连接
		background：：#bfa
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>媒体查询宽度</strong></p>
<p>宽屏电脑 1200-1920px</p>
<p>窄屏电脑 992-1200px</p>
<p>移动端 0-768px</p>
<p>平板 768-992px</p>
<p>演示屏幕 1920px-∞</p>
<h3 id="_10-2-屏幕自适应" tabindex="-1"><a class="header-anchor" href="#_10-2-屏幕自适应" aria-hidden="true">#</a> 10.2 屏幕自适应</h3>
<p>//淘宝无限适配+rem单位  已淘汰</p>
<h4 id="_10-2-1-电脑端自适应" tabindex="-1"><a class="header-anchor" href="#_10-2-1-电脑端自适应" aria-hidden="true">#</a> 10.2.1 电脑端自适应</h4>
<p>响应式范围在 1200px以上</p>
<p>设计稿为1440px</p>
<p>固定内容区宽 1040px</p>
<p>两边空隙各200px 自适应</p>
<p>最窄屏幕1200px 两边各80px空隙 比例86%</p>
<p>最小文字在 14px</p>
<h4 id="_10-2-2-平板端自适应" tabindex="-1"><a class="header-anchor" href="#_10-2-2-平板端自适应" aria-hidden="true">#</a> 10.2.2 平板端自适应</h4>
<p>响应式范围 768-1200px</p>
<p>设计稿为 ?</p>
<p>固定内容区在 668px</p>
<p>两边间隙 自适应</p>
<p>最窄屏幕 768px 两边个 50px空隙 比例87%</p>
<p>导航栏收起来</p>
<p>使用中或大图片</p>
<p>两边空隙自适应</p>
<p>最小文字在 16px</p>
<h4 id="_10-2-3-手机端自适应" tabindex="-1"><a class="header-anchor" href="#_10-2-3-手机端自适应" aria-hidden="true">#</a> 10.2.3 手机端自适应</h4>
<p>响应式范围 768px以下</p>
<p>导航栏收起来</p>
<p>使用小图片</p>
<p>使用固定尺寸的外边距</p>
<p>使用 vm vh 调整图片和内容</p>
<p>最小文字在 12px</p>
<h3 id="_10-3-响应式图片" tabindex="-1"><a class="header-anchor" href="#_10-3-响应式图片" aria-hidden="true">#</a> 10.3 响应式图片</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picture</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(min-width: 650px)<span class="token punctuation">"</span></span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo1.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(min-width: 465px)<span class="token punctuation">"</span></span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo2.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img_girl.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picture</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第11章-选择器" tabindex="-1"><a class="header-anchor" href="#第11章-选择器" aria-hidden="true">#</a> 第11章 选择器</h2>
<h3 id="_11-1-属性选择器" tabindex="-1"><a class="header-anchor" href="#_11-1-属性选择器" aria-hidden="true">#</a> 11.1 属性选择器</h3>
<p>选择所有 font=fontsize23 的标签</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">[font]</span><span class="token punctuation">{</span>
     选择带有指定属性的标签   
    <span class="token punctuation">}</span>

    <span class="token selector">[font=fontsize23]</span><span class="token punctuation">{</span>  
    选择带有指定属性为指定属性值的标签
    <span class="token punctuation">}</span>

    <span class="token selector">[font^=a]</span><span class="token punctuation">{</span>  
    选择带有指定属性为指定属性值开头的标签
    <span class="token punctuation">}</span> 

    <span class="token selector">[font$=a]</span><span class="token punctuation">{</span>
    选择带有指定属性为指定属性值结尾的标签  
    <span class="token punctuation">}</span>

     <span class="token selector">[font*=a]</span><span class="token punctuation">{</span>
    选择带有指定属性为指定属性值含有任意位置为指定字符串的标签  
    <span class="token punctuation">}</span>

&lt;p font=<span class="token string">"fontsize23"</span>>一段内容&lt;/p>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-2-元素选择器" tabindex="-1"><a class="header-anchor" href="#_11-2-元素选择器" aria-hidden="true">#</a> 11.2 元素选择器</h3>
<p>选择所有的<code v-pre>&lt;p&gt;</code>标签</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">&lt;p font="fontsize23">一段内容&lt;/p>

&lt;style>
   p</span><span class="token punctuation">{</span>  <span class="token property">front-size</span> <span class="token punctuation">:</span>20px   <span class="token punctuation">}</span>
&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-3-类和-id-选择器" tabindex="-1"><a class="header-anchor" href="#_11-3-类和-id-选择器" aria-hidden="true">#</a> 11.3 类和 ID 选择器</h3>
<p>js 使用id选择较多，id 属性只能对应一个标签，</p>
<p>css使用class选择器较多，但是 class 属性可以对应多个标签。</p>
<p>而且一个标签可以拥有多个 class属性。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">&lt;style>    
        .fff</span><span class="token punctuation">{</span>   
        <span class="token property">front-size</span> <span class="token punctuation">:</span> 20px
        <span class="token property">color</span><span class="token punctuation">:</span>red 
        <span class="token punctuation">}</span>

        <span class="token selector">#eee</span><span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span>gold
        <span class="token punctuation">}</span>
&lt;/style>

&lt;p class=<span class="token string">"fff"</span>>一段内容&lt;/p>
&lt;p id=<span class="token string">"eee"</span>>一段内容&lt;/p>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-4-伪类和伪元素选择器" tabindex="-1"><a class="header-anchor" href="#_11-4-伪类和伪元素选择器" aria-hidden="true">#</a> 11.4 伪类和伪元素选择器</h3>
<p>（1）伪类选择器</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">ul > li:first-child</span><span class="token punctuation">{</span>
    选择ul父类，li为子类的，第一个li标签
    <span class="token punctuation">}</span>  
<span class="token selector">ul > li:last-child</span><span class="token punctuation">{</span>
    选择ul父类，li为子类的，最后一个li标签
    <span class="token punctuation">}</span> 
<span class="token selector">ul > li:nth-child（3）</span><span class="token punctuation">{</span>
    选择ul父类，li为子类的，第3个li标签
    <span class="token punctuation">}</span>    
<span class="token selector">ul > li:nth-child（n）</span><span class="token punctuation">{</span>
    若直接写n，则传入0到正无穷
    <span class="token punctuation">}</span>   
<span class="token selector">ul > li:nth-child（2n）</span><span class="token punctuation">{</span>
    若直接写2n或odd，则传入所有偶数的0到正无穷
    <span class="token punctuation">}</span>
<span class="token selector">ul > li:nth-child（2n+1）</span><span class="token punctuation">{</span>
    若直接写2n+1或even，则传入所有奇数的0到正无穷
    <span class="token punctuation">}</span> 
<span class="token selector">ul > li:not（：nth-child（3））</span><span class="token punctuation">{</span>
    选中所有ul下的li，除了第3个标签
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）伪元素选择器</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">p::first-letter</span><span class="token punctuation">{</span>
    选中p标签中的第一个字母，对其单独设置样式
<span class="token punctuation">}</span>
<span class="token selector">p::first-line</span><span class="token punctuation">{</span>
    选中p标签中的第行，对其单独设置样式
<span class="token punctuation">}</span>
<span class="token selector">p::selection</span><span class="token punctuation">{</span>
    被鼠标选中的某些段落的，对其单独设置样式
<span class="token punctuation">}</span>
<span class="token selector">p::before</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">'abc'</span>
    在文章最开头追加一个字符串abc，该字符串无法被选中
<span class="token punctuation">}</span>
<span class="token selector">p::after</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">'abc'</span><span class="token punctuation">;</span>
    在文章最结尾追加一个字符串abc，该字符串无法被选中
<span class="token punctuation">}</span>

&lt;p>ltter&lt;/p>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-5-关系选择器" tabindex="-1"><a class="header-anchor" href="#_11-5-关系选择器" aria-hidden="true">#</a> 11.5 关系选择器</h3>
<p>概念：父元素，子元素，祖先元祖，后代元素，兄弟元素</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>子元素选择器
div > span{
    应用于所有被div包括的子span标签
}

后代元素选择器
div span {
    应用于所有div标签中所有的后代div标签
}

兄弟选择器
p + span{
    应用于仅挨着p下面的下一个span标签,中间不能隔着任何东西
}

p ~ span{
     应用于仅挨着p下面的所有的span标签
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-6-其他选择器" tabindex="-1"><a class="header-anchor" href="#_11-6-其他选择器" aria-hidden="true">#</a> 11.6 其他选择器</h3>
<p>（1）通配选择器</p>
<p>所有的标签属性都被选择</p>
<p color:red="">*</p>
<p>（2）复合选择器</p>
<p>交集选择，既要是 div 标签，也是class=&quot;red&quot;选择。</p>
<p>连写即可，同时选择多个选择器，选择器1选择器2选择器3{ }。</p>
<p>有元素选择器时要开头，其中不应该有 id 选择器，因为编码时 id 属性要唯一。</p>
<p color:red="">div.red</p>
<p>并集选择，中间用逗号隔开</p>
<p>选择器1，选择器2，选择器3</p>
<p color：green="">h1，span</p>
<h3 id="_11-7-继承" tabindex="-1"><a class="header-anchor" href="#_11-7-继承" aria-hidden="true">#</a> 11.7 继承</h3>
<p>div里所有的后代都会被改变，但是有些无法继承，如背景颜色</p>
<p>div{color：green} <code v-pre>&lt;div&gt;&lt;span&gt;</code> 我是div的后代 <code v-pre>&lt;/div&gt;</code></p>
<h3 id="_11-8-样式冲突-选择器的权重" tabindex="-1"><a class="header-anchor" href="#_11-8-样式冲突-选择器的权重" aria-hidden="true">#</a> 11.8 样式冲突，选择器的权重</h3>
<p>选择器的优先级：</p>
<p>内联样式1000，</p>
<p>id选择器100，</p>
<p>类和伪类选择器10，</p>
<p>元素选择器1，</p>
<p>通配选择器0，</p>
<p>继承的样式，无优先级</p>
<p>如果优先级相同，则后者覆盖前者 如果优先级不同，则优先使用优先级高的 优先级可以累加，但不能跨其最大的数量级，多个id选择器累加也不会超过内联样式的优先级 可以在某个样式后面加上 ！important 则把这个优先级提到最高，一般不用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>div{ color：red ！important }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="第12章-常见需求解决方案" tabindex="-1"><a class="header-anchor" href="#第12章-常见需求解决方案" aria-hidden="true">#</a> 第12章 常见需求解决方案</h2>
<h3 id="_12-1-单行省略解决方案" tabindex="-1"><a class="header-anchor" href="#_12-1-单行省略解决方案" aria-hidden="true">#</a> 12.1 单行省略解决方案</h3>
<h3 id="_12-2-高度塌陷解决方案" tabindex="-1"><a class="header-anchor" href="#_12-2-高度塌陷解决方案" aria-hidden="true">#</a> 12.2 高度塌陷解决方案</h3>
<p>float 塌陷</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.father:after</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>  &lt;!--content指你写的父元素-->
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span> 
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-3-菜单固钉" tabindex="-1"><a class="header-anchor" href="#_12-3-菜单固钉" aria-hidden="true">#</a> 12.3 菜单固钉</h3>
<p>左侧竖向菜单在指定容器内固钉,</p>
<p>右侧瀑布流内容, 右侧滚动同时, 左侧随之切换不同菜单</p>
<h3 id="_12-4-网页布局内容居中" tabindex="-1"><a class="header-anchor" href="#_12-4-网页布局内容居中" aria-hidden="true">#</a> 12.4 网页布局内容居中</h3>
<p>例如1440px的设计稿, 两边间距是200px, 内容区固定为1040px</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property">margin</span><span class="token punctuation">:</span> 0 <span class="token function">calc</span><span class="token punctuation">(</span><span class="token punctuation">(</span>100% <span class="token operator">-</span> 10.40rem<span class="token punctuation">)</span> <span class="token operator">/</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
