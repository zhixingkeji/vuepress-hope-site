<template><div><h2 id="第1章-目标检测概述" tabindex="-1"><a class="header-anchor" href="#第1章-目标检测概述" aria-hidden="true">#</a> 第1章 目标检测概述</h2>
<h3 id="_1-1-阶段" tabindex="-1"><a class="header-anchor" href="#_1-1-阶段" aria-hidden="true">#</a> 1.1 阶段</h3>
<p>二阶段</p>
<p>Faster-Rcnn  Mask-Rcnn</p>
<p>速度慢，效果好</p>
<p>一阶段</p>
<p>yolo</p>
<p>速度快，适合实时监测，效果差</p>
<h3 id="_1-2-iou指标分析" tabindex="-1"><a class="header-anchor" href="#_1-2-iou指标分析" aria-hidden="true">#</a> 1.2 IOU指标分析</h3>
<p>iou指标 : 交集和并集的比例</p>
<p>map指标 :</p>
<p>精度 :</p>
<p>召回率 :</p>
<h2 id="第2章-yolov1" tabindex="-1"><a class="header-anchor" href="#第2章-yolov1" aria-hidden="true">#</a> 第2章 yolov1</h2>
<h2 id="第3章-yolov2" tabindex="-1"><a class="header-anchor" href="#第3章-yolov2" aria-hidden="true">#</a> 第3章 yolov2</h2>
<h2 id="第4章-yolov3" tabindex="-1"><a class="header-anchor" href="#第4章-yolov3" aria-hidden="true">#</a> 第4章 yolov3</h2>
<h2 id="第5章-yolov4" tabindex="-1"><a class="header-anchor" href="#第5章-yolov4" aria-hidden="true">#</a> 第5章 yolov4</h2>
<h2 id="第6章-yolov5" tabindex="-1"><a class="header-anchor" href="#第6章-yolov5" aria-hidden="true">#</a> 第6章 yolov5</h2>
<h2 id="labelimg安装" tabindex="-1"><a class="header-anchor" href="#labelimg安装" aria-hidden="true">#</a> labelImg安装</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>conda <span class="token function">install</span> <span class="token assign-left variable">pyqt</span><span class="token operator">=</span><span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>conda <span class="token function">install</span> <span class="token parameter variable">-c</span> anaconda lxml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>github下载 labelImg\labelImg-master 进入到文件夹下 打开cmd</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pyrcc5 <span class="token parameter variable">-o</span> libs/resources.py resources.qrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>python labelImg.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
