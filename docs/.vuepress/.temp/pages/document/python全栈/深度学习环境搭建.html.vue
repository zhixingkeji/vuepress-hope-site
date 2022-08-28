<template><div><h2 id="第1章-anaconda" tabindex="-1"><a class="header-anchor" href="#第1章-anaconda" aria-hidden="true">#</a> 第1章 anaconda</h2>
<h3 id="_1-1-conda-介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-conda-介绍" aria-hidden="true">#</a> 1.1 conda 介绍</h3>
<h3 id="_1-2-conda-指令" tabindex="-1"><a class="header-anchor" href="#_1-2-conda-指令" aria-hidden="true">#</a> 1.2 conda 指令</h3>
<p>环境基本命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 建立名为learn的conda环境</span>
conda create <span class="token parameter variable">--name</span> learn 

<span class="token comment"># 建立名为learn的conda环境并指定python版本</span>
conda create <span class="token parameter variable">--name</span> learn <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.7</span> 

<span class="token comment"># 激活learn环境</span>
conda activate learn 

<span class="token comment"># 退出当前环境</span>
conda deactivate 

<span class="token comment"># 删除名为learn的conda环境和其下所有包</span>
conda remove <span class="token parameter variable">-n</span> learn <span class="token parameter variable">--all</span>

<span class="token comment"># 列出所有的conda虚拟环境</span>
conda <span class="token function">env</span> list 

<span class="token comment"># 列出当前环境下已安装的所有包</span>
conda list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>包管理基本命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 安装名为re的包</span>
conda <span class="token function">install</span> re

<span class="token comment"># 安装名为re的包并制定版本3.1</span>
conda <span class="token function">install</span> <span class="token assign-left variable">re</span><span class="token operator">=</span><span class="token number">3.1</span>

<span class="token comment"># 更新名为re的包</span>
conda update re

<span class="token comment"># 删除名为re的包</span>
conda remove re

<span class="token comment"># 列出名为re的包在conda源中的所有可用版本</span>
conda search re
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-conda-配置" tabindex="-1"><a class="header-anchor" href="#_1-3-conda-配置" aria-hidden="true">#</a> 1.3 conda 配置</h3>
<p><strong>展示可用的频道</strong></p>
<p>conda config --show channels</p>
<p><strong>删除所有的镜像源，恢复到默认</strong></p>
<p>conda config --remove-key channels</p>
<p><strong>配置清华源</strong></p>
<p>conda config --add channels <a href="https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/" target="_blank" rel="noopener noreferrer">https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/<ExternalLinkIcon/></a></p>
<p>conda config --add channels <a href="http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/" target="_blank" rel="noopener noreferrer">http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/<ExternalLinkIcon/></a></p>
<p>conda config --add channels <a href="http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/fastai/" target="_blank" rel="noopener noreferrer">http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/fastai/<ExternalLinkIcon/></a></p>
<p>conda config --add channels <a href="https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge" target="_blank" rel="noopener noreferrer">https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge<ExternalLinkIcon/></a></p>
<p>conda config --set show_channel_urls yes</p>
<h3 id="_1-4-jupyter-notebook" tabindex="-1"><a class="header-anchor" href="#_1-4-jupyter-notebook" aria-hidden="true">#</a> 1.4 jupyter notebook</h3>
<p><strong>启动</strong></p>
<p>基于conda 的 base环境</p>
<p><code v-pre>$ jupyter notebook</code></p>
<p><strong>指定环境启动</strong></p>
<p>切换到要使用的conda环境 安装 ipykernel</p>
<p><code v-pre>$ conda install ipykernel</code></p>
<p>mypytorch 对应在笔记中的环境名称</p>
<p><code v-pre>$ python -m ipykernel install --name mypytorch</code></p>
<p><strong>代码补全功能</strong></p>
<p>进入 conda 环境的命令行</p>
<p><code v-pre>$ conda install jupyter_contrib_nbextensions</code></p>
<p><code v-pre>$ jupyter contrib nbextension install --user --skip-running-check</code></p>
<p><code v-pre>$ jupyter notebook</code></p>
<p>启动Jupyter Notebook，上面选项栏会出现 Nbextensions , 勾选 Hinterland</p>
<p>写代码的时候按 Tab 键即可使用</p>
<p><strong>使用技巧</strong></p>
<p>在小括号内按住 <code v-pre>shift+tab+tab</code> 可以提示参数类型</p>
<p><code v-pre>shift+enter</code> 运行当前行并新建下一行</p>
<p><code v-pre>%pwd</code> 显示当前路径</p>
<p><code v-pre>%matplotlib inline</code> 把结果画成图像输出</p>
<h2 id="第2章-cuda" tabindex="-1"><a class="header-anchor" href="#第2章-cuda" aria-hidden="true">#</a> 第2章 CUDA</h2>
<h3 id="_2-1-安装-cuda" tabindex="-1"><a class="header-anchor" href="#_2-1-安装-cuda" aria-hidden="true">#</a> 2.1 安装 cuda</h3>
<p>下载cuda 11.3.0</p>
<p><a href="https://developer.nvidia.cn/cuda-toolkit-archive" target="_blank" rel="noopener noreferrer">https://developer.nvidia.cn/cuda-toolkit-archive<ExternalLinkIcon/></a></p>
<p>安装 cudnn 8.2.1  ( 适用于cuda 11.x ) 右键复制链接下载
<a href="https://developer.nvidia.com/rdp/cudnn-archive#a-collapse51b" target="_blank" rel="noopener noreferrer">https://developer.nvidia.com/rdp/cudnn-archive#a-collapse51b<ExternalLinkIcon/></a></p>
<p>把cudnn目录移动到cuda-development目录下,把bin配到环境变量后重启</p>
<h2 id="第3章-tensorflow2" tabindex="-1"><a class="header-anchor" href="#第3章-tensorflow2" aria-hidden="true">#</a> 第3章 TensorFlow2</h2>
<h3 id="_3-1-版本对应" tabindex="-1"><a class="header-anchor" href="#_3-1-版本对应" aria-hidden="true">#</a> 3.1 版本对应</h3>
<p>python3.7.0+CUDA11.6.0+cuDNN8.3.2+tensorflow2.7.0+Keras2.7.0</p>
<p>python3.7.0+CUDA11.3.1+cuDNN8.2.1+tensorflow2.7.0+Keras2.7.0</p>
<p>python3.7.0+CUDA10.1.2+cuDNN7.6.5+tensorflow2.2.0+keras 2.3.1</p>
<h3 id="_3-2-安装-tensorflow-cpu版" tabindex="-1"><a class="header-anchor" href="#_3-2-安装-tensorflow-cpu版" aria-hidden="true">#</a> 3.2 安装 TensorFlow cpu版</h3>
<p>conda 安装 (conda 最高2.6.0)</p>
<p><code v-pre>conda install tensorflow=2.6.0 </code></p>
<p><code v-pre>conda install keras=2.6.0</code></p>
<p>pip 安装</p>
<p><code v-pre>pip install tensorflow==2.7.0</code></p>
<p><code v-pre>pip install keras==2.7.0</code></p>
<p>测试</p>
<p><code v-pre>import tensorflow as tf</code></p>
<p><code v-pre>print(tf.__version__)</code></p>
<h3 id="_3-3-安装-tensorflow-gpu版" tabindex="-1"><a class="header-anchor" href="#_3-3-安装-tensorflow-gpu版" aria-hidden="true">#</a> 3.3 安装 TensorFlow gpu版</h3>
<p><code v-pre>conda install tensorflow-gpu=2.6.0</code></p>
<p>测试</p>
<p><code v-pre>import tensorflow as tf</code></p>
<p><code v-pre>print(tf.test.is_gpu_available())</code></p>
<h2 id="第4章-pytorch" tabindex="-1"><a class="header-anchor" href="#第4章-pytorch" aria-hidden="true">#</a> 第4章 Pytorch</h2>
<h3 id="_4-1-版本对应" tabindex="-1"><a class="header-anchor" href="#_4-1-版本对应" aria-hidden="true">#</a> 4.1 版本对应</h3>
<p>pytorch 版本</p>
<p>python-3.7.0 + CUDA-11.3 + cuDNN + pytorch-1.11.0</p>
<h3 id="_4-2-安装-pytorch-cpu版" tabindex="-1"><a class="header-anchor" href="#_4-2-安装-pytorch-cpu版" aria-hidden="true">#</a> 4.2 安装 Pytorch cpu版</h3>
<p><code v-pre>conda install pytorch torchvision torchaudio cpuonly -c pytorch</code></p>
<p>测试 是否安装成功</p>
<p><code v-pre>print(torch.empty(0,2))</code></p>
<h3 id="_4-3-安装-pytorch-gpu版" tabindex="-1"><a class="header-anchor" href="#_4-3-安装-pytorch-gpu版" aria-hidden="true">#</a> 4.3 安装 Pytorch gpu版</h3>
<p>安装 pytorch</p>
<p><code v-pre>conda install pytorch torchvision torchaudio cudatoolkit=11.3 -c pytorch</code></p>
<p>测试 cuda是否可用</p>
<p><code v-pre>print(torch.cuda.is_available())</code></p>
<h2 id="第5章-常用库安装" tabindex="-1"><a class="header-anchor" href="#第5章-常用库安装" aria-hidden="true">#</a> 第5章 常用库安装</h2>
<h3 id="_5-1-opencv-python集成环境" tabindex="-1"><a class="header-anchor" href="#_5-1-opencv-python集成环境" aria-hidden="true">#</a> 5.1 opencv - python集成环境</h3>
<p><code v-pre>conda install opencv</code></p>
<p>测试</p>
<p>import cv2 as cv</p>
<h3 id="_5-2-opencv-c-集成环境" tabindex="-1"><a class="header-anchor" href="#_5-2-opencv-c-集成环境" aria-hidden="true">#</a> 5.2 opencv - c++集成环境</h3>
<h4 id="_5-2-1-配置gcc" tabindex="-1"><a class="header-anchor" href="#_5-2-1-配置gcc" aria-hidden="true">#</a> 5.2.1 配置gcc</h4>
<p><strong>mac版本</strong></p>
<p>安装brew</p>
<p>/bin/zsh -c &quot;$(curl -fsSL <a href="https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh" target="_blank" rel="noopener noreferrer">https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh<ExternalLinkIcon/></a>)&quot;</p>
<p>brew -v</p>
<p>安装gcc</p>
<p>brew install gcc</p>
<p>gcc -v</p>
<p><strong>win版本</strong></p>
<p>下载安装编译器（MinGW-W64 GCC）</p>
<p><a href="https://sourceforge.net/projects/mingw-w64/files/mingw-w64/mingw-w64-release/" target="_blank" rel="noopener noreferrer">https://sourceforge.net/projects/mingw-w64/files/mingw-w64/mingw-w64-release/<ExternalLinkIcon/></a></p>
<p>配置bin目录到系统变量</p>
<p>测试</p>
<p>gcc -v</p>
<h4 id="_5-2-2-配置vscode" tabindex="-1"><a class="header-anchor" href="#_5-2-2-配置vscode" aria-hidden="true">#</a> 5.2.2 配置vscode</h4>
<p>vscode 安装 c/c++ 插件</p>
<p>编写 .vscode</p>
<p><img src="@source/document/python全栈/asset/image-20220505111128919.png" alt="image-20220505111128919" loading="lazy"></p>
<p>tasks.json</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>
<span class="token punctuation">{</span>
    <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"2.0.0"</span><span class="token punctuation">,</span>
    <span class="token property">"tasks"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"echo"</span><span class="token punctuation">,</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"shell"</span><span class="token punctuation">,</span>
            <span class="token property">"command"</span><span class="token operator">:</span> <span class="token string">"D:\\Environment\\mingw64\\bin\\gcc"</span><span class="token punctuation">,</span>   <span class="token comment">//改为自己的目录</span>
            <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">"-g"</span><span class="token punctuation">,</span> 
                <span class="token string">"${file}"</span><span class="token punctuation">,</span> 
                <span class="token string">"-o"</span><span class="token punctuation">,</span> 
                <span class="token string">"${fileBasenameNoExtension}.exe"</span><span class="token punctuation">,</span>
                <span class="token string">"-fexec-charset=GBK"</span>    <span class="token comment">//解决中文乱码</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"presentation"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"echo"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">"reveal"</span><span class="token operator">:</span> <span class="token string">"always"</span><span class="token punctuation">,</span>
        <span class="token property">"focus"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">"panel"</span><span class="token operator">:</span> <span class="token string">"shared"</span><span class="token punctuation">,</span> 
        <span class="token property">"showReuseMessage"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">"clear"</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>launch.json</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>
<span class="token punctuation">{</span>
    <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"0.2.0"</span><span class="token punctuation">,</span>
    <span class="token property">"configurations"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"(Windows) Launch"</span><span class="token punctuation">,</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"cppvsdbg"</span><span class="token punctuation">,</span>
            <span class="token property">"request"</span><span class="token operator">:</span> <span class="token string">"launch"</span><span class="token punctuation">,</span>
            <span class="token property">"program"</span><span class="token operator">:</span> <span class="token string">"cmd"</span><span class="token punctuation">,</span>
            <span class="token property">"preLaunchTask"</span><span class="token operator">:</span> <span class="token string">"echo"</span><span class="token punctuation">,</span>
            <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">"/C"</span><span class="token punctuation">,</span>
                <span class="token string">"${fileDirname}\\${fileBasenameNoExtension}.exe"</span><span class="token punctuation">,</span>
                <span class="token string">"&amp;"</span><span class="token punctuation">,</span>
                <span class="token string">"echo."</span><span class="token punctuation">,</span>
                <span class="token string">"&amp;"</span><span class="token punctuation">,</span>
                <span class="token string">"pause"</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"stopAtEntry"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">"cwd"</span><span class="token operator">:</span> <span class="token string">"${workspaceFolder}"</span><span class="token punctuation">,</span>
            <span class="token property">"environment"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"externalConsole"</span><span class="token operator">:</span><span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"(gdb) Launch"</span><span class="token punctuation">,</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"cppdbg"</span><span class="token punctuation">,</span>
            <span class="token property">"request"</span><span class="token operator">:</span> <span class="token string">"launch"</span><span class="token punctuation">,</span>
            <span class="token property">"program"</span><span class="token operator">:</span> <span class="token string">"${workspaceFolder}/${fileBasenameNoExtension}.exe"</span><span class="token punctuation">,</span>
            <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"stopAtEntry"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">"cwd"</span><span class="token operator">:</span> <span class="token string">"${workspaceFolder}"</span><span class="token punctuation">,</span>
            <span class="token property">"environment"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"externalConsole"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">"MIMode"</span><span class="token operator">:</span> <span class="token string">"gdb"</span><span class="token punctuation">,</span>
            <span class="token property">"miDebuggerPath"</span><span class="token operator">:</span> <span class="token string">"D:\\Environment\\mingw64\\bin\\gdb.exe"</span><span class="token punctuation">,</span> <span class="token comment">// 改为自己的路径</span>
            <span class="token property">"preLaunchTask"</span><span class="token operator">:</span> <span class="token string">"echo"</span><span class="token punctuation">,</span><span class="token comment">//这里和task.json的label相对应</span>
            <span class="token property">"setupCommands"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Enable pretty-printing for gdb"</span><span class="token punctuation">,</span>
                    <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"-enable-pretty-printing"</span><span class="token punctuation">,</span>
                    <span class="token property">"ignoreFailures"</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
 
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c_cpp_properties.json</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>
<span class="token punctuation">{</span>
    <span class="token property">"configurations"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Win32"</span><span class="token punctuation">,</span>
            <span class="token property">"includePath"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">"${workspaceRoot}"</span><span class="token punctuation">,</span>
                <span class="token string">"D:/Environment/mingw64/include/**"</span><span class="token punctuation">,</span>   <span class="token comment">//改为自己的路径</span>
                <span class="token string">"D:/Environment/mingw64/bin/../lib/gcc/x86_64-w64-mingw32/8.1.0/include/c++"</span><span class="token punctuation">,</span>
                <span class="token string">"D:/Environment/mingw64/bin/../lib/gcc/x86_64-w64-mingw32/8.1.0/include/c++/x86_64-w64-mingw32"</span><span class="token punctuation">,</span>
                <span class="token string">"D:/Environment/mingw64/bin/../lib/gcc/x86_64-w64-mingw32/8.1.0/include/c++/backward"</span><span class="token punctuation">,</span>
                <span class="token string">"D:/Environment/mingw64/bin/../lib/gcc/x86_64-w64-mingw32/8.1.0/include"</span><span class="token punctuation">,</span>
                <span class="token string">"D:/Environment/mingw64/bin/../lib/gcc/x86_64-w64-mingw32/8.1.0/include-fixed"</span><span class="token punctuation">,</span>
                <span class="token string">"D:/Environment/mingw64/bin/../lib/gcc/x86_64-w64-mingw32/8.1.0/../../../../x86_64-w64-mingw32/include"</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"defines"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">"_DEBUG"</span><span class="token punctuation">,</span>
                <span class="token string">"UNICODE"</span><span class="token punctuation">,</span>
                <span class="token string">"__GNUC__=6"</span><span class="token punctuation">,</span>
                <span class="token string">"__cdecl=__attribute__((__cdecl__))"</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"intelliSenseMode"</span><span class="token operator">:</span> <span class="token string">"msvc-x64"</span><span class="token punctuation">,</span>
            <span class="token property">"browse"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"limitSymbolsToIncludedHeaders"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token property">"databaseFilename"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                <span class="token property">"path"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">"${workspaceRoot}"</span><span class="token punctuation">,</span>
                    <span class="token string">"D:/Environment/mingw64/include/**"</span><span class="token punctuation">,</span> <span class="token comment">//改为自己的路径</span>
                    <span class="token string">"D:/Environment/mingw64/bin/../lib/gcc/x86_64-w64-mingw32/8.1.0/include/c++"</span><span class="token punctuation">,</span>
                    <span class="token string">"D:/Environment/mingw64/bin/../lib/gcc/x86_64-w64-mingw32/8.1.0/include/c++/x86_64-w64-mingw32"</span><span class="token punctuation">,</span>
                    <span class="token string">"D:/Environment/mingw64/bin/../lib/gcc/x86_64-w64-mingw32/8.1.0/include/c++/backward"</span><span class="token punctuation">,</span>
                    <span class="token string">"D:/Environment/mingw64/bin/../lib/gcc/x86_64-w64-mingw32/8.1.0/include"</span><span class="token punctuation">,</span>
                    <span class="token string">"D:/Environment/mingw64/bin/../lib/gcc/x86_64-w64-mingw32/8.1.0/include-fixed"</span><span class="token punctuation">,</span>
                    <span class="token string">"D:/Environment/mingw64/bin/../lib/gcc/x86_64-w64-mingw32/8.1.0/../../../../x86_64-w64-mingw32/include"</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"version"</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试 c-hello.c</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"hello world\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">"pause"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试 cpp-hello.cpp</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token comment">// 需要先把task.json文件中的gcc改为g++</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"HelloWorld\n"</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-3-安装cmake" tabindex="-1"><a class="header-anchor" href="#_5-2-3-安装cmake" aria-hidden="true">#</a> 5.2.3 安装cmake</h4>
<p>待完善</p>
<h4 id="_5-2-4-安装-opencv" tabindex="-1"><a class="header-anchor" href="#_5-2-4-安装-opencv" aria-hidden="true">#</a> 5.2.4 安装 opencv</h4>
<p>待完善</p>
<h3 id="_5-3-sklearn库" tabindex="-1"><a class="header-anchor" href="#_5-3-sklearn库" aria-hidden="true">#</a> 5.3 sklearn库</h3>
<p><code v-pre>conda install scikit-learn</code></p>
<h3 id="_5-4-jieba库" tabindex="-1"><a class="header-anchor" href="#_5-4-jieba库" aria-hidden="true">#</a> 5.4 jieba库</h3>
<h3 id="_5-5-matlab" tabindex="-1"><a class="header-anchor" href="#_5-5-matlab" aria-hidden="true">#</a> 5.5 matlab</h3>
<h3 id="_5-6-pandas" tabindex="-1"><a class="header-anchor" href="#_5-6-pandas" aria-hidden="true">#</a> 5.6 pandas</h3>
<h3 id="_5-7-numpy" tabindex="-1"><a class="header-anchor" href="#_5-7-numpy" aria-hidden="true">#</a> 5.7 numpy</h3>
</div></template>
