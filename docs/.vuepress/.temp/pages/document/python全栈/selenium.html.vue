<template><div><h2 id="第1章-selenuim介绍" tabindex="-1"><a class="header-anchor" href="#第1章-selenuim介绍" aria-hidden="true">#</a> 第1章 selenuim介绍</h2>
<h3 id="_1-1-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-简介" aria-hidden="true">#</a> 1.1 简介</h3>
<p>教程网站 <a href="http://www.python3.vip/" target="_blank" rel="noopener noreferrer">http://www.python3.vip/<ExternalLinkIcon/></a></p>
<p>浏览器驱动网址：<a href="https://chromedriver.storage.googleapis.com/index.html" target="_blank" rel="noopener noreferrer">https://chromedriver.storage.googleapis.com/index.html<ExternalLinkIcon/></a></p>
<h3 id="_1-2-安装" tabindex="-1"><a class="header-anchor" href="#_1-2-安装" aria-hidden="true">#</a> 1.2 安装</h3>
<p>pip install selenium</p>
<p>下载浏览器驱动</p>
<h2 id="第2章-selenium语法" tabindex="-1"><a class="header-anchor" href="#第2章-selenium语法" aria-hidden="true">#</a> 第2章 selenium语法</h2>
<h3 id="_2-1-完整案例" tabindex="-1"><a class="header-anchor" href="#_2-1-完整案例" aria-hidden="true">#</a> 2.1 完整案例</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver  <span class="token comment"># 导入自动化模块  </span>
<span class="token keyword">import</span> time  <span class="token comment"># 时间模块  </span>
<span class="token keyword">import</span> requests  <span class="token comment"># 导入网络模块  </span>
<span class="token keyword">import</span> os  <span class="token comment"># 导入文件模块  </span>
<span class="token keyword">import</span> re  <span class="token comment"># 导入正则模块  </span>
<span class="token keyword">from</span> lxml <span class="token keyword">import</span> etree  <span class="token comment"># 导入xpath模块  </span>
<span class="token keyword">import</span> json  <span class="token comment"># json模块  </span>
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd <span class="token comment"># 数据存储模块  </span>



<span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver <span class="token comment"># 导入自动化模块  </span>
<span class="token keyword">import</span> time  
bro <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>executable_path<span class="token operator">=</span><span class="token string">'./chromedriver.exe'</span><span class="token punctuation">)</span>  <span class="token comment"># 加载驱动  </span>
time<span class="token punctuation">.</span>sleeep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>    <span class="token comment"># 显式等待,有时候必须用显示等待，当需要连续选择两个下拉框的时候可能会找不到。  </span>
bro<span class="token punctuation">.</span>implicitly_wait<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>    <span class="token comment"># 隐式等待  </span>
bro<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">'https://www.baidu.com'</span><span class="token punctuation">)</span>  <span class="token comment"># 访问网址  </span>
response <span class="token operator">=</span> bro<span class="token punctuation">.</span>page_source  <span class="token comment"># 返回页面数据  </span>
tree <span class="token operator">=</span> etree<span class="token punctuation">.</span>HTML<span class="token punctuation">(</span>response<span class="token punctuation">)</span>  <span class="token comment"># 创建xpath实例并解析  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-win带插件的谷歌浏览器方法" tabindex="-1"><a class="header-anchor" href="#_2-2-win带插件的谷歌浏览器方法" aria-hidden="true">#</a> 2.2 win带插件的谷歌浏览器方法</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver   

<span class="token keyword">import</span> selenium<span class="token punctuation">.</span>common<span class="token punctuation">.</span>exceptions   

options <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>ChromeOptions<span class="token punctuation">(</span><span class="token punctuation">)</span>  

options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">"--user-data-dir="</span><span class="token operator">+</span><span class="token string">r"C:/Users/197355/AppData/Local/Google/Chrome/User Data/"</span><span class="token punctuation">)</span>  

path <span class="token operator">=</span> <span class="token string">r'F:\IDE\selenium\chromedriver.exe'</span>  

browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>chrome_options<span class="token operator">=</span>options<span class="token punctuation">,</span> executable_path<span class="token operator">=</span>path<span class="token punctuation">)</span>  

browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">'https://www.bilibili.com/video/BV1R54y117MD'</span><span class="token punctuation">)</span>  

配置文件路径查看方法如下：  
地址栏输入chrome<span class="token punctuation">:</span><span class="token operator">//</span>version<span class="token operator">/</span>查看浏览器信息。  
注：到User Data就结束了，还有斜杠要反过来。  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-设置代理ip" tabindex="-1"><a class="header-anchor" href="#_2-3-设置代理ip" aria-hidden="true">#</a> 2.3 设置代理ip</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver  
options <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>ChromeOptions<span class="token punctuation">(</span><span class="token punctuation">)</span>  
options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">"--proxy-server=http://110.73.2.248:8123"</span><span class="token punctuation">)</span>  
driver_path <span class="token operator">=</span> <span class="token string">r"D:\ProgramApp\chromedriver\chromedriver.exe"</span>  
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>executable_path<span class="token operator">=</span>driver_path<span class="token punctuation">,</span>chrome_options<span class="token operator">=</span>options<span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-模拟等待时间" tabindex="-1"><a class="header-anchor" href="#_2-4-模拟等待时间" aria-hidden="true">#</a> 2.4 模拟等待时间</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>浏览器等待随机时间  
<span class="token keyword">import</span> time  
<span class="token keyword">import</span> random  
time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-元素选择" tabindex="-1"><a class="header-anchor" href="#_2-5-元素选择" aria-hidden="true">#</a> 2.5 元素选择</h3>
<p>将程序定位到标签id为q的输入框</p>
<p>element = bro.find_element_by_id('q')</p>
<p>将程序定位到第一个classname为adj的搜索按钮 , 找不到则报错</p>
<p>element = bro.find_element_by_class_name('adj')</p>
<p>将程序定位到所有classname为adj的搜索按钮  找不到则返回空列表</p>
<p>element = bro.find_elements_by_class_name('adj')</p>
<h3 id="_2-6-操作元素" tabindex="-1"><a class="header-anchor" href="#_2-6-操作元素" aria-hidden="true">#</a> 2.6 操作元素</h3>
<p>模拟鼠标点击</p>
<p>element.click()</p>
<p>模拟键盘点击</p>
<p>from selenium.webdriver.common.keys import Keys</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>Keys<span class="token punctuation">.</span>BACK_SPACE 	<span class="token comment"># 回退键(BackSpace)</span>

Keys<span class="token punctuation">.</span>TAB	<span class="token comment"># 制表键(Tab)</span>
Keys<span class="token punctuation">.</span>ENTER		<span class="token comment"># 回车键(Enter)</span>
Keys<span class="token punctuation">.</span>SHIFT		<span class="token comment"># 大小写转换键(Shift)</span>
Keys<span class="token punctuation">.</span>CONTROL	<span class="token comment"># Control键(Ctrl)</span>
Keys<span class="token punctuation">.</span>ALT	<span class="token comment"># ALT键(Alt)</span>
Keys<span class="token punctuation">.</span>ESCAPE 	<span class="token comment"># 返回键(Esc)</span>
Keys<span class="token punctuation">.</span>SPACE 		<span class="token comment"># 空格键(Space)</span>
Keys<span class="token punctuation">.</span>PAGE_UP		<span class="token comment"># 翻页键上(Page Up)</span>
Keys<span class="token punctuation">.</span>PAGE_DOWN 		<span class="token comment"># 翻页键下(Page Down)</span>
Keys<span class="token punctuation">.</span>END		<span class="token comment"># 行尾键(End)</span>
Keys<span class="token punctuation">.</span>HOME		<span class="token comment"># 行首键(Home)</span>
Keys<span class="token punctuation">.</span>LEFT		<span class="token comment"># 方向键左(Left)</span>
Keys<span class="token punctuation">.</span>UP		<span class="token comment"># 方向键上(Up)</span>
Keys<span class="token punctuation">.</span>RIGHT		<span class="token comment"># 方向键右(Right)</span>
Keys<span class="token punctuation">.</span>DOWN		<span class="token comment"># 方向键下(Down)</span>
Keys<span class="token punctuation">.</span>INSERT		<span class="token comment"># 插入键(Insert)</span>
DELETE		<span class="token comment"># 删除键(Delete)</span>
NUMPAD0 <span class="token operator">~</span> NUMPAD9		<span class="token comment"># 数字键1-9</span>
Keys<span class="token punctuation">.</span>F5		<span class="token comment"># 刷新键</span>
F1 <span class="token operator">~</span> F12		<span class="token comment"># F1 - F12键</span>
<span class="token punctuation">(</span>Keys<span class="token punctuation">.</span>CONTROL<span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">)</span>		<span class="token comment"># 组合键Control+a，全选</span>
<span class="token punctuation">(</span>Keys<span class="token punctuation">.</span>CONTROL<span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">)</span>		<span class="token comment"># 组合键Control+c，复制</span>
<span class="token punctuation">(</span>Keys<span class="token punctuation">.</span>CONTROL<span class="token punctuation">,</span> <span class="token string">'x'</span><span class="token punctuation">)</span>		<span class="token comment"># 组合键Control+x，剪切</span>
<span class="token punctuation">(</span>Keys<span class="token punctuation">.</span>CONTROL<span class="token punctuation">,</span> <span class="token string">'v'</span><span class="token punctuation">)</span>		<span class="token comment"># 组合键Control+v，粘贴</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入字符串</p>
<p>调用WebElement对象的send_keys方法</p>
<p>element.send_keys('iphone\n')</p>
<p>获取元素文本内容</p>
<p>通过WebElement对象的text属性</p>
<p>print(element.text)</p>
<p>或者</p>
<p>element.get_attribute('innerText')</p>
<p>或者</p>
<p>element.get_attribute('textContent')</p>
<p>获取元素的属性</p>
<p>调用WebElement对象的get_attribute方法</p>
<p>print(element.get_attribute('class'))</p>
<p>获取整个元素对应的HTML</p>
<p>element.get_attribute('outerHTML')</p>
<p>获取某个元素内部的HTML文本内容</p>
<p>element.get_attribute('innerHTML')</p>
<p>获取输入框里面的文字</p>
<p>对于input输入框，不能使用text属性</p>
<p>element.get_attribute('value')</p>
<h3 id="_2-7-css语法选择元素" tabindex="-1"><a class="header-anchor" href="#_2-7-css语法选择元素" aria-hidden="true">#</a> 2.7 CSS语法选择元素</h3>
<p>将程序定位到类名为q的输入框</p>
<p>element = bro.find_element_by_css_selector('.q')</p>
<p>将程序定位到div标签</p>
<p>element = bro.find_elements_by_css_selector('div')</p>
<p>将程序定位到id为ori的标签</p>
<p>element = bro.find_elements_by_css_selector('#ori')</p>
<p>获取所有有herf属性的标签元素</p>
<p>element = bro.find_elements_by_css_selector('[href]')</p>
<p>根据标签的其他属性获取元素</p>
<p>element = bro.find_elements_by_css_selector('[href=&quot;<a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">http://www.baidu.com<ExternalLinkIcon/></a>&quot;]')</p>
<p>在极为复杂的混合css选择公式中，通过谷歌浏览器的右键检查中，ctrl+f 可以在线验证css选择器书写是否正确</p>
<h3 id="_2-8-复习css基本语法" tabindex="-1"><a class="header-anchor" href="#_2-8-复习css基本语法" aria-hidden="true">#</a> 2.8 复习css基本语法</h3>
<p>获取e1的所有子元素e2</p>
<p>e1 &gt; e2</p>
<p>获取e1的所有后代元素e2</p>
<p>e1 e2</p>
<p>h3的所有兄弟元素</p>
<p>h3 ~ span</p>
<p>h3的紧跟着的兄弟元素</p>
<p>h3 + span</p>
<p>满足e1 或 e2 其中一种</p>
<p>e1 , e2</p>
<p>注意，逗号优先级较低</p>
<p>如果想要选择#ad中的所有p和a标签</p>
<p>错误写法是 #ad &gt; p,a</p>
<p>正确写法是 #ad &gt; p , #ad &gt; a</p>
<p>按次序选择子节点</p>
<p>span:nth-child(2)</p>
<p>span:nth-child(even)</p>
<p>span:nth-child(odd)</p>
<p>span:nth-last-child(2)</p>
<p>span:nth-of-type(2)</p>
<p>span:nth-last-of-type(2)</p>
<h3 id="_2-9-操作单选框和多选框" tabindex="-1"><a class="header-anchor" href="#_2-9-操作单选框和多选框" aria-hidden="true">#</a> 2.9 操作单选框和多选框</h3>
<p>获取当前选中的元素</p>
<p>element = wd.find_element_by_css_selector(<br>
'#s_radio input[checked=&quot;checked&quot;]'<br>
)</p>
<p>print('当前选中的是' + element.get_attribute('value'))</p>
<p>选中其他选项</p>
<p>wd.find_element_by_css_selector('#s_radio input[value=&quot;数学&quot;]' ).click()</p>
<p>操作checkbox多选框</p>
<p>获取所有已经被选中的选项</p>
<p>elements = wd.find_elements_by_css_selector(  '#s_checkbox input[checked=&quot;checked&quot;]' )</p>
<p>反选所有被选中的选项</p>
<p>for element in elements:</p>
<p>element.click()</p>
<p>再选中需要选择的选项</p>
<p>wd.find_elements_by_css_selector( '#s_checkbox input[value=&quot;英语&quot;]' ).click()</p>
<h3 id="_2-10-操作下拉选择框" tabindex="-1"><a class="header-anchor" href="#_2-10-操作下拉选择框" aria-hidden="true">#</a> 2.10 操作下拉选择框</h3>
<p>单选框  导入路径</p>
<p>from selenium.webdriver.support.ui import Select</p>
<p>创建select对象</p>
<p>s1 = Select(wd.find_element_by_id(&quot;ss_singgle&quot;))</p>
<p>通过可视文本进行单选</p>
<p>s1.select_by_visivle_text(&quot;数学&quot;)</p>
<p>s1.selectByVisibleText(“”);</p>
<p>s1.selectByValue(“”);</p>
<p>s1.selectByIndex(“”);</p>
<p>如果使用select无法满足需要,那就完全模拟鼠标点击</p>
<p>driver.findElement(By.xpath(“//select[@id=’AAA’]/option[@value=’BBB’]”).click();</p>
<p>driver.findElement（<a href="http://By.id" target="_blank" rel="noopener noreferrer">By.id<ExternalLinkIcon/></a>(“AAA”)）.click();</p>
<p>多选框</p>
<p>导入路径</p>
<p>from selenium.webdriver.support.ui import Select</p>
<p>创建select对象</p>
<p>s1 = Select(wd.find_element_by_id(&quot;ss_singgle&quot;))</p>
<p>清楚所有选中</p>
<p>select.deselect_all()</p>
<p>通过可视文本进行多选</p>
<p>s1.select_by_visivle_text(&quot;数学&quot;)</p>
<p>s1.select_by_visivle_text(&quot;英语&quot;)</p>
<h3 id="_2-11-弹出框处理" tabindex="-1"><a class="header-anchor" href="#_2-11-弹出框处理" aria-hidden="true">#</a> 2.11 弹出框处理</h3>
<p>alert = wd.wd.switch_to.alert  # 获取alert对象</p>
<p>print(alert.text)  #获取提示框的文本内容</p>
<p>alert.accept()   #点击ok按钮</p>
<p>alert.dismiss()  #点击取消按钮</p>
<p>confirm</p>
<p>alert = wd.wd.switch_to.alert</p>
<p>alert.send_keys()   # 输入信息</p>
<p>alert.accept()</p>
<h3 id="_2-12-iframe内嵌页面" tabindex="-1"><a class="header-anchor" href="#_2-12-iframe内嵌页面" aria-hidden="true">#</a> 2.12 iframe内嵌页面</h3>
<p>如果定位的标签是在iframe子框架中，则无法通过selenium直接找到，需要切换作用域</p>
<p>将作用域切换到id属性值为iframeResule的子框架中</p>
<p>iframeResule = bro.find...</p>
<p>bro.switch_to.frame('iframeResule')</p>
<p>切回到外层的frame中</p>
<p>bro.switch_to.default_content()</p>
<h3 id="_2-13-动作链" tabindex="-1"><a class="header-anchor" href="#_2-13-动作链" aria-hidden="true">#</a> 2.13 动作链</h3>
<p>导包<br>
from selenium.webdriver import ActionChains</p>
<p>生成动作链对象<br>
action = ActionChains(bro)</p>
<p>点击长按指定的标签<br>
action.click_and_hold(div)</p>
<p>偏移<br>
action.move_by_offset(17,0).perform()<br>
perform()是立即执行<br>
最好写成for循环,表示慢慢拖到指定的位置</p>
<p>释放动作链<br>
action.release()</p>
<p>特殊操作</p>
<p>导包  from selenium.webdriver.common.action_chains import ActionChains</p>
<p>实例化ActionChains对象</p>
<p>ac = ActionChains(wd)</p>
<p>鼠标移动到元素上</p>
<p>ac.move_to_element(  wd.find_element_by_id(&quot;ss_singgle&quot;)  ).perform()</p>
<p>冻结界面</p>
<p>在谷歌控制台输入</p>
<p>setTimeout(function({debugger},5000))</p>
<h3 id="_2-14-浏览器操作" tabindex="-1"><a class="header-anchor" href="#_2-14-浏览器操作" aria-hidden="true">#</a> 2.14 浏览器操作</h3>
<p>让程序执行一组js代码</p>
<p>bro.execute_script('window.scrollTo(0,document.body.srcollHeight)')</p>
<p>后退</p>
<p>bro.back()</p>
<p>前进</p>
<p>bro.forward()</p>
<p>关闭浏览器</p>
<p>bro.quit()</p>
<p>切换标签页</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># 简单版 适合就一两个标签 切换到最后一个标签</span>
web<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>window<span class="token punctuation">(</span>web<span class="token punctuation">.</span>window_handles<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 切换后还需要切回来</span>
web<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span> 关闭当前标签<span class="token punctuation">,</span>但视角还在新标签上
web<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>window<span class="token punctuation">(</span>web<span class="token punctuation">.</span>window_handles<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


<span class="token comment"># 复杂版 依次获取所有标签页的句柄  如果标签标题中有Bing关键字就退出循环  </span>
<span class="token keyword">for</span> handle <span class="token keyword">in</span> wd<span class="token punctuation">.</span>window_handles  
	wd<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>window<span class="token punctuation">(</span>handle<span class="token punctuation">)</span>  
	<span class="token keyword">if</span> <span class="token string">'Bing'</span> <span class="token keyword">in</span> wd<span class="token punctuation">.</span>title<span class="token punctuation">:</span>  	
		<span class="token keyword">break</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要经常切换得到个窗口，可为其保存变量</p>
<p>mainWindow = wd.current_window_handle</p>
<p>wd.switch_to.window(mainWindow)</p>
<h3 id="_2-15-无头浏览器模式" tabindex="-1"><a class="header-anchor" href="#_2-15-无头浏览器模式" aria-hidden="true">#</a> 2.15 无头浏览器模式</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver  <span class="token comment"># 导入自动化模块</span>
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>chrome<span class="token punctuation">.</span>options <span class="token keyword">import</span> Options
opt <span class="token operator">=</span> Options<span class="token punctuation">(</span><span class="token punctuation">)</span>
opt<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">"--headless"</span><span class="token punctuation">)</span>  <span class="token comment"># 无头浏览器</span>
opt<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">"--disbale-gpu"</span><span class="token punctuation">)</span>  <span class="token comment"># 无头浏览器</span>
path <span class="token operator">=</span> <span class="token string">r'../chromedriver'</span>  <span class="token comment"># 驱动路径</span>
bro <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>executable_path<span class="token operator">=</span>path<span class="token punctuation">,</span> options<span class="token operator">=</span>opt<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第3章-xpath解析" tabindex="-1"><a class="header-anchor" href="#第3章-xpath解析" aria-hidden="true">#</a> 第3章 xpath解析</h2>
<p>模块的引入</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> lxml <span class="token keyword">import</span> etree  <span class="token comment"># 导入xpath模块  </span>
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>executable_path<span class="token operator">=</span><span class="token string">'./chromedriver'</span><span class="token punctuation">)</span> 
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>  
response <span class="token operator">=</span> driver<span class="token punctuation">.</span>page_source  
tree <span class="token operator">=</span> etree<span class="token punctuation">.</span>HTML<span class="token punctuation">(</span>response<span class="token punctuation">)</span>  
text <span class="token operator">=</span> tree<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">'/html/body/div[5]/div/div[1]/div[2]/div[1]//text()'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>处理编码问题 爬下来的数据有u/3000等乱码</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>context<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">u'\xa0'</span><span class="token punctuation">,</span> <span class="token string">u''</span><span class="token punctuation">)</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">'utf-8'</span><span class="token punctuation">)</span>  

<span class="token comment"># \xa0 是不间断空白符  </span>
<span class="token builtin">str</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">u'\xa0'</span><span class="token punctuation">,</span> <span class="token string">u''</span><span class="token punctuation">)</span>  


<span class="token comment"># \u3000 是全角的空白符  </span>
<span class="token builtin">str</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">u'\u3000'</span><span class="token punctuation">,</span><span class="token string">u''</span><span class="token punctuation">)</span>  
<span class="token builtin">str</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">'\r\n'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">u'\u3000'</span><span class="token punctuation">,</span> <span class="token string">u''</span><span class="token punctuation">)</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">u'\xa0'</span><span class="token punctuation">,</span> <span class="token string">u''</span><span class="token punctuation">)</span>  
<span class="token builtin">str</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">'\r\n'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">u'\u3000'</span><span class="token punctuation">,</span> <span class="token string">u''</span><span class="token punctuation">)</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">u'\xa0'</span><span class="token punctuation">,</span> <span class="token string">u''</span><span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取标签内文本或全部子标签文本</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">/</span>text<span class="token punctuation">(</span><span class="token punctuation">)</span> 获取该标签内的文本  
<span class="token operator">//</span>text<span class="token punctuation">(</span><span class="token punctuation">)</span>  获取该标签下的所有文本  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第4章-自动化测试" tabindex="-1"><a class="header-anchor" href="#第4章-自动化测试" aria-hidden="true">#</a> 第4章 自动化测试</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> pytest
<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>fixture</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">one</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"我是一个fixture函数"</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>usefixtures</span><span class="token punctuation">(</span><span class="token string">'one'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_one_fixture</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"测试用例一"</span><span class="token punctuation">)</span>
    <span class="token keyword">assert</span> <span class="token number">1</span><span class="token operator">==</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第5章-调用第三方接口" tabindex="-1"><a class="header-anchor" href="#第5章-调用第三方接口" aria-hidden="true">#</a> 第5章 调用第三方接口</h2>
<h3 id="_5-1-接入语音识别-地图poi-orc-oss-翻译等" tabindex="-1"><a class="header-anchor" href="#_5-1-接入语音识别-地图poi-orc-oss-翻译等" aria-hidden="true">#</a> 5.1 接入语音识别 地图poi orc oss 翻译等</h3>
<h3 id="_5-2-超级鹰-自动打验证码" tabindex="-1"><a class="header-anchor" href="#_5-2-超级鹰-自动打验证码" aria-hidden="true">#</a> 5.2 超级鹰 自动打验证码</h3>
<p>超级鹰 <a href="http://www.chaojiying.com/" target="_blank" rel="noopener noreferrer">http://www.chaojiying.com/<ExternalLinkIcon/></a></p>
<p><img src="@source/document/python全栈/asset/image-20220410164628386.png" alt="image-20220410164628386" loading="lazy"></p>
<h3 id="_5-3-讯代理-更换代理ip" tabindex="-1"><a class="header-anchor" href="#_5-3-讯代理-更换代理ip" aria-hidden="true">#</a> 5.3 讯代理 更换代理ip</h3>
<p>讯代理 <a href="http://www.xdaili.cn/" target="_blank" rel="noopener noreferrer">http://www.xdaili.cn/<ExternalLinkIcon/></a></p>
</div></template>
