<template><div><p>import pyautogui</p>
<p>pyautogui.PAUSE = 1 # 调用在执行动作后暂停的秒数，只能在执行一些pyautogui动作后才能使用，建议用time.sleep
pyautogui.FAILSAFE = True # 启用自动防故障功能，左上角的坐标为（0，0），将鼠标移到屏幕的左上角，来抛出failSafeException异常</p>
<h1 id="判断-x-y-是否在屏幕上" tabindex="-1"><a class="header-anchor" href="#判断-x-y-是否在屏幕上" aria-hidden="true">#</a> 判断(x,y)是否在屏幕上</h1>
<p>x, y = 122, 244
pyautogui.onScreen(x, y) # 结果为true</p>
<p>width, height = pyautogui.size() # 屏幕的宽度和高度
print(width, height)
鼠标操作
我们在pyautogui库对于鼠标的使用方法大体如下：</p>
<p>import pyautogui</p>
<p>currentMouseX, currentMouseY = pyautogui.position() # 鼠标当前位置
print(currentMouseX, currentMouseY)</p>
<h1 id="控制鼠标移动-duration为持续时间" tabindex="-1"><a class="header-anchor" href="#控制鼠标移动-duration为持续时间" aria-hidden="true">#</a> 控制鼠标移动,duration为持续时间</h1>
<p>for i in range(2):
pyautogui.moveTo(100, 100, duration=0.25) # 移动到 (100,100)
pyautogui.moveTo(200, 100, duration=0.25)
pyautogui.moveTo(200, 200, duration=0.25)
pyautogui.moveTo(100, 200, duration=0.25)</p>
<p>for i in range(2):
pyautogui.moveRel(50, 0, duration=0.25) # 从当前位置右移100像素
pyautogui.moveRel(0, 50, duration=0.25) # 向下
pyautogui.moveRel(-50, 0, duration=0.25) # 向左
pyautogui.moveRel(0, -50, duration=0.25) # 向上</p>
<h1 id="按住鼠标左键-把鼠标拖拽到-100-200-位置" tabindex="-1"><a class="header-anchor" href="#按住鼠标左键-把鼠标拖拽到-100-200-位置" aria-hidden="true">#</a> 按住鼠标左键，把鼠标拖拽到(100, 200)位置</h1>
<p>pyautogui.dragTo(100, 200, button='left')</p>
<h1 id="按住鼠标左键-用2秒钟把鼠标拖拽到-300-400-位置" tabindex="-1"><a class="header-anchor" href="#按住鼠标左键-用2秒钟把鼠标拖拽到-300-400-位置" aria-hidden="true">#</a> 按住鼠标左键，用2秒钟把鼠标拖拽到(300, 400)位置</h1>
<p>pyautogui.dragTo(300, 400, 2, button='left')</p>
<h1 id="按住鼠标左键-用0-2秒钟把鼠标向上拖拽" tabindex="-1"><a class="header-anchor" href="#按住鼠标左键-用0-2秒钟把鼠标向上拖拽" aria-hidden="true">#</a> 按住鼠标左键，用0.2秒钟把鼠标向上拖拽</h1>
<p>pyautogui.dragRel(0, -60, duration=0.2)</p>
<h1 id="pyautogui-click-x-movetox-y-movetoy-clicks-num-of-clicks-interval-secs-between-clicks-button-left" tabindex="-1"><a class="header-anchor" href="#pyautogui-click-x-movetox-y-movetoy-clicks-num-of-clicks-interval-secs-between-clicks-button-left" aria-hidden="true">#</a> pyautogui.click(x=moveToX, y=moveToY, clicks=num_of_clicks, interval=secs_between_clicks, button='left')</h1>
<h1 id="其中-button属性可以设置成left-middle和right。" tabindex="-1"><a class="header-anchor" href="#其中-button属性可以设置成left-middle和right。" aria-hidden="true">#</a> 其中，button属性可以设置成left，middle和right。</h1>
<p>pyautogui.click(10, 20, 2, 0.25, button='left')
pyautogui.click(x=100, y=200, duration=2) # 先移动到(100, 200)再单击
pyautogui.click() # 鼠标当前位置点击一下
pyautogui.doubleClick() # 鼠标当前位置左击两下
pyautogui.doubleClick(x=100, y=150, button=&quot;left&quot;) # 鼠标在（100，150）位置左击两下
pyautogui.tripleClick() # 鼠标当前位置左击三下</p>
<p>pyautogui.mouseDown() # 鼠标左键按下再松开
pyautogui.mouseUp()
pyautogui.mouseDown(button='right') # 按下鼠标右键
pyautogui.mouseUp(button='right', x=100, y=200) # 移动到(100, 200)位置，然后松开鼠标右键</p>
<h1 id="scroll函数控制鼠标滚轮的滚动-amount-to-scroll参数表示滚动的格数。正数则页面向上滚动-负数则向下滚动" tabindex="-1"><a class="header-anchor" href="#scroll函数控制鼠标滚轮的滚动-amount-to-scroll参数表示滚动的格数。正数则页面向上滚动-负数则向下滚动" aria-hidden="true">#</a> scroll函数控制鼠标滚轮的滚动，amount_to_scroll参数表示滚动的格数。正数则页面向上滚动，负数则向下滚动</h1>
<h1 id="pyautogui-scroll-clicks-amount-to-scroll-x-movetox-y-movetoy" tabindex="-1"><a class="header-anchor" href="#pyautogui-scroll-clicks-amount-to-scroll-x-movetox-y-movetoy" aria-hidden="true">#</a> pyautogui.scroll(clicks=amount_to_scroll, x=moveToX, y=moveToY)</h1>
<p>pyautogui.scroll(5, 20, 2)
pyautogui.scroll(10) # 向上滚动10格
pyautogui.scroll(-10) # 向下滚动10格
pyautogui.scroll(10, x=100, y=100) # 移动到(100, 100)位置再向上滚动10格</p>
<h1 id="缓动-渐变函数可以改变光标移动过程的速度和方向。通常鼠标是匀速直线运动-这就是线性缓动-渐变函数。" tabindex="-1"><a class="header-anchor" href="#缓动-渐变函数可以改变光标移动过程的速度和方向。通常鼠标是匀速直线运动-这就是线性缓动-渐变函数。" aria-hidden="true">#</a> 缓动/渐变函数可以改变光标移动过程的速度和方向。通常鼠标是匀速直线运动，这就是线性缓动/渐变函数。</h1>
<h1 id="pyautogui有30种缓动-渐变函数-可以通过pyautogui-ease-查看。" tabindex="-1"><a class="header-anchor" href="#pyautogui有30种缓动-渐变函数-可以通过pyautogui-ease-查看。" aria-hidden="true">#</a> PyAutoGUI有30种缓动/渐变函数，可以通过pyautogui.ease*?查看。</h1>
<h1 id="开始很慢-不断加速" tabindex="-1"><a class="header-anchor" href="#开始很慢-不断加速" aria-hidden="true">#</a> 开始很慢，不断加速</h1>
<p>pyautogui.moveTo(100, 100, 2, pyautogui.easeInQuad)</p>
<h1 id="开始很快-不断减速" tabindex="-1"><a class="header-anchor" href="#开始很快-不断减速" aria-hidden="true">#</a> 开始很快，不断减速</h1>
<p>pyautogui.moveTo(100, 100, 2, pyautogui.easeOutQuad)</p>
<h1 id="开始和结束都快-中间比较慢" tabindex="-1"><a class="header-anchor" href="#开始和结束都快-中间比较慢" aria-hidden="true">#</a> 开始和结束都快，中间比较慢</h1>
<p>pyautogui.moveTo(100, 100, 2, pyautogui.easeInOutQuad)</p>
<h1 id="一步一徘徊前进" tabindex="-1"><a class="header-anchor" href="#一步一徘徊前进" aria-hidden="true">#</a> 一步一徘徊前进</h1>
<p>pyautogui.moveTo(100, 100, 2, pyautogui.easeInBounce)</p>
<h1 id="徘徊幅度更大-甚至超过起点和终点" tabindex="-1"><a class="header-anchor" href="#徘徊幅度更大-甚至超过起点和终点" aria-hidden="true">#</a> 徘徊幅度更大，甚至超过起点和终点</h1>
<p>pyautogui.moveTo(100, 100, 2, pyautogui.easeInElastic)
对于我们要获取鼠标在屏幕中的位置，我们可以采用如下代码：</p>
<p>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25</p>
<h1 id="案例获取鼠标的位置-方便复制我们定位的鼠标坐标点到代码中" tabindex="-1"><a class="header-anchor" href="#案例获取鼠标的位置-方便复制我们定位的鼠标坐标点到代码中" aria-hidden="true">#</a> 案例获取鼠标的位置，方便复制我们定位的鼠标坐标点到代码中</h1>
<p>import pyautogui
import time</p>
<h1 id="获取鼠标位置" tabindex="-1"><a class="header-anchor" href="#获取鼠标位置" aria-hidden="true">#</a> 获取鼠标位置</h1>
<p>def get_mouse_positon():
time.sleep(5) # 准备时间
print('开始获取鼠标位置')
try:
for i in range(10):</p>
<h1 id="get-and-print-the-mouse-coordinates" tabindex="-1"><a class="header-anchor" href="#get-and-print-the-mouse-coordinates" aria-hidden="true">#</a> Get and print the mouse coordinates.</h1>
<p>x, y = pyautogui.position()
positionStr = '鼠标坐标点（X,Y）为：{},{}'.format(str(x).rjust(4), str(y).rjust(4))
pix = pyautogui.screenshot().getpixel((x, y)) # 获取鼠标所在屏幕点的RGB颜色
positionStr += ' RGB:(' + str(pix[0]).rjust(3) + ',' + str(pix[1]).rjust(3) + ',' + str(pix[2]).rjust(
3) + ')'
print(positionStr)
time.sleep(0.5) # 停顿时间
except:
print('获取鼠标位置失败')</p>
<p>if <strong>name</strong> == &quot;<strong>main</strong>&quot;:
get_mouse_positon()
也可以使用pyautogui库帮助文档的方法，不过本人认为使用上面的方法，更加便利。pyautogui库帮助文档的获取鼠标位置的方法如下：</p>
<p>1
2
3
4
5
6
7
8
9
10
11
12
13
14
import pyautogui</p>
<p>print('Press Ctrl-C to quit.')
try:
while True:</p>
<h1 id="get-and-print-the-mouse-coordinates-1" tabindex="-1"><a class="header-anchor" href="#get-and-print-the-mouse-coordinates-1" aria-hidden="true">#</a> Get and print the mouse coordinates.</h1>
<p>x, y = pyautogui.position()
positionStr = 'X:' + str(x).rjust(4) + ' Y:' + str(y).rjust(4)
pix = pyautogui.screenshot().getpixel((x, y)) # 获取鼠标所在屏幕点的RGB颜色
positionStr += ' RGB:(' + str(pix[0]).rjust(3) + ',' + str(pix[1]).rjust(3) + ',' + str(pix[2]).rjust(3) + ')'
print(positionStr, end='') # end='' 替换了默认的换行
print('\b' * len(positionStr), end='', flush=True) # 连续退格键并刷新，删除之前打印的坐标，就像直接更新坐标效果
except KeyboardInterrupt: # 处理 Ctrl-C 按键
print('\nDone.')
键盘操作
我们在pyautogui库对于键盘的使用方法大体如下：</p>
<p>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
import pyautogui</p>
<p>pyautogui.typewrite('Hello world!') # 输入Hello world!字符串
pyautogui.typewrite('Hello world!', interval=0.25) # 每次输入间隔0.25秒，输入Hello world!</p>
<p>pyautogui.press('enter') # 按下并松开（轻敲）回车键
pyautogui.press(['left', 'left', 'left', 'left']) # 按下并松开（轻敲）四下左方向键
pyautogui.keyDown('shift') # 按下<code v-pre>shift</code>键
pyautogui.keyUp('shift') # 松开<code v-pre>shift</code>键</p>
<p>pyautogui.keyDown('shift')
pyautogui.press('4')
pyautogui.keyUp('shift') # 输出 $ 符号的按键</p>
<p>pyautogui.hotkey('ctrl', 'v') # 组合按键（Ctrl+V），粘贴功能，按下并松开'ctrl'和'v'按键</p>
<h1 id="pyautogui-keyboard-keys数组中就是press-keydown-keyup-和hotkey-函数可以输入的按键名称" tabindex="-1"><a class="header-anchor" href="#pyautogui-keyboard-keys数组中就是press-keydown-keyup-和hotkey-函数可以输入的按键名称" aria-hidden="true">#</a> pyautogui.KEYBOARD_KEYS数组中就是press()，keyDown()，keyUp()和hotkey()函数可以输入的按键名称</h1>
<p>pyautogui.KEYBOARD_KEYS = ['\t', '\n', '\r', ' ', '!', '&quot;', '#', '$', '%', '&amp;', &quot;'&quot;, '(', ')', '*', '+', ',', '-', '.',
'/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '&lt;', '=', '&gt;', '?', '@',
'[', '\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~',
'accept', 'add', 'alt', 'altleft', 'altright', 'apps', 'backspace', 'browserback',
'browserfavorites', 'browserforward', 'browserhome', 'browserrefresh', 'browsersearch',
'browserstop', 'capslock', 'clear', 'convert', 'ctrl', 'ctrlleft', 'ctrlright', 'decimal',
'del', 'delete', 'divide', 'down', 'end', 'enter', 'esc', 'escape', 'execute', 'f1', 'f10',
'f11', 'f12', 'f13', 'f14', 'f15', 'f16', 'f17', 'f18', 'f19', 'f2', 'f20', 'f21', 'f22',
'f23', 'f24', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'final', 'fn', 'hanguel', 'hangul',
'hanja', 'help', 'home', 'insert', 'junja', 'kana', 'kanji', 'launchapp1', 'launchapp2',
'launchmail', 'launchmediaselect', 'left', 'modechange', 'multiply', 'nexttrack',
'nonconvert', 'num0', 'num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'num7', 'num8', 'num9',
'numlock', 'pagedown', 'pageup', 'pause', 'pgdn', 'pgup', 'playpause', 'prevtrack', 'print',
'printscreen', 'prntscrn', 'prtsc', 'prtscr', 'return', 'right', 'scrolllock', 'select',
'separator', 'shift', 'shiftleft', 'shiftright', 'sleep', 'space', 'stop', 'subtract', 'tab',
'up', 'volumedown', 'volumemute', 'volumeup', 'win', 'winleft', 'winright', 'yen', 'command',
'option', 'optionleft', 'optionright']
弹窗操作
我们在pyautogui库对于弹出窗口的使用方法大体如下：</p>
<p>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
import pyautogui</p>
<h1 id="显示一个简单的带文字和ok按钮的消息弹窗。用户点击后返回button的文字。" tabindex="-1"><a class="header-anchor" href="#显示一个简单的带文字和ok按钮的消息弹窗。用户点击后返回button的文字。" aria-hidden="true">#</a> 显示一个简单的带文字和OK按钮的消息弹窗。用户点击后返回button的文字。</h1>
<p>pyautogui.alert(text='', title='', button='OK')
b = pyautogui.alert(text='要开始程序么？', title='请求框', button='OK')
print(b) # 输出结果为OK</p>
<h1 id="显示一个简单的带文字、ok和cancel按钮的消息弹窗-用户点击后返回被点击button的文字-支持自定义数字、文字的列表。" tabindex="-1"><a class="header-anchor" href="#显示一个简单的带文字、ok和cancel按钮的消息弹窗-用户点击后返回被点击button的文字-支持自定义数字、文字的列表。" aria-hidden="true">#</a> 显示一个简单的带文字、OK和Cancel按钮的消息弹窗，用户点击后返回被点击button的文字，支持自定义数字、文字的列表。</h1>
<p>pyautogui.confirm(text='', title='', buttons=['OK', 'Cancel']) # OK和Cancel按钮的消息弹窗
pyautogui.confirm(text='', title='', buttons=range(10)) # 10个按键0-9的消息弹窗
a = pyautogui.confirm(text='', title='', buttons=range(10))
print(a) # 输出结果为你选的数字</p>
<h1 id="可以输入的消息弹窗-带ok和cancel按钮。用户点击ok按钮返回输入的文字-点击cancel按钮返回none。" tabindex="-1"><a class="header-anchor" href="#可以输入的消息弹窗-带ok和cancel按钮。用户点击ok按钮返回输入的文字-点击cancel按钮返回none。" aria-hidden="true">#</a> 可以输入的消息弹窗，带OK和Cancel按钮。用户点击OK按钮返回输入的文字，点击Cancel按钮返回None。</h1>
<p>pyautogui.prompt(text='', title='', default='')</p>
<h1 id="样式同prompt-用于输入密码-消息用-表示。带ok和cancel按钮。用户点击ok按钮返回输入的文字-点击cancel按钮返回none。" tabindex="-1"><a class="header-anchor" href="#样式同prompt-用于输入密码-消息用-表示。带ok和cancel按钮。用户点击ok按钮返回输入的文字-点击cancel按钮返回none。" aria-hidden="true">#</a> 样式同prompt()，用于输入密码，消息用*表示。带OK和Cancel按钮。用户点击OK按钮返回输入的文字，点击Cancel按钮返回None。</h1>
<p>pyautogui.password(text='', title='', default='', mask='*')
图像操作
我们在pyautogui库对于图像的使用方法大体如下：</p>
<p>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
import pyautogui</p>
<p>pyautogui.screenshot(r'C:\Users\ZDH\Desktop\PY\my_screenshot.png') # 截全屏并设置保存图片的位置和名称
im = pyautogui.screenshot(r'C:\Users\ZDH\Desktop\PY\my_screenshot.png') # 截全屏并设置保存图片的位置和名称
print(im) # 打印图片的属性</p>
<h1 id="不截全屏-截取区域图片。截取区域region参数为-左上角xy坐标值、宽度和高度" tabindex="-1"><a class="header-anchor" href="#不截全屏-截取区域图片。截取区域region参数为-左上角xy坐标值、宽度和高度" aria-hidden="true">#</a> 不截全屏，截取区域图片。截取区域region参数为：左上角XY坐标值、宽度和高度</h1>
<p>pyautogui.screenshot(r'C:\Users\ZDH\Desktop\PY\region_screenshot.png', region=(0, 0, 300, 400))</p>
<p>pix = pyautogui.screenshot().getpixel((220, 200)) # 获取坐标(220,200)所在屏幕点的RGB颜色
positionStr = ' RGB:(' + str(pix[0]).rjust(3) + ',' + str(pix[1]).rjust(3) + ',' + str(pix[2]).rjust(3) + ')'
print(positionStr) # 打印结果为RGB:( 60, 63, 65)
pix = pyautogui.pixel(220, 200) # 获取坐标(220,200)所在屏幕点的RGB颜色与上面三行代码作用一样
positionStr = ' RGB:(' + str(pix[0]).rjust(3) + ',' + str(pix[1]).rjust(3) + ',' + str(pix[2]).rjust(3) + ')'
print(positionStr) # 打印结果为RGB:( 60, 63, 65)</p>
<h1 id="如果你只是要检验一下指定位置的像素值-可以用pixelmatchescolor-x-y-rgb-函数-把x、y和rgb元组值穿入即可" tabindex="-1"><a class="header-anchor" href="#如果你只是要检验一下指定位置的像素值-可以用pixelmatchescolor-x-y-rgb-函数-把x、y和rgb元组值穿入即可" aria-hidden="true">#</a> 如果你只是要检验一下指定位置的像素值，可以用pixelMatchesColor(x,y,RGB)函数，把X、Y和RGB元组值穿入即可</h1>
<h1 id="如果所在屏幕中-x-y-点的实际rgb三色与函数中的rgb一样就会返回true-否则返回false" tabindex="-1"><a class="header-anchor" href="#如果所在屏幕中-x-y-点的实际rgb三色与函数中的rgb一样就会返回true-否则返回false" aria-hidden="true">#</a> 如果所在屏幕中(x,y)点的实际RGB三色与函数中的RGB一样就会返回True，否则返回False</h1>
<h1 id="tolerance参数可以指定红、绿、蓝3种颜色误差范围" tabindex="-1"><a class="header-anchor" href="#tolerance参数可以指定红、绿、蓝3种颜色误差范围" aria-hidden="true">#</a> tolerance参数可以指定红、绿、蓝3种颜色误差范围</h1>
<p>pyautogui.pixelMatchesColor(100, 200, (255, 255, 255))
pyautogui.pixelMatchesColor(100, 200, (255, 255, 245), tolerance=10)</p>
<h1 id="获得文件图片在现在的屏幕上面的坐标-返回的是一个元组-top-left-width-height" tabindex="-1"><a class="header-anchor" href="#获得文件图片在现在的屏幕上面的坐标-返回的是一个元组-top-left-width-height" aria-hidden="true">#</a> 获得文件图片在现在的屏幕上面的坐标，返回的是一个元组(top, left, width, height)</h1>
<h1 id="如果截图没找到-pyautogui-locateonscreen-函数返回none" tabindex="-1"><a class="header-anchor" href="#如果截图没找到-pyautogui-locateonscreen-函数返回none" aria-hidden="true">#</a> 如果截图没找到，pyautogui.locateOnScreen()函数返回None</h1>
<p>a = pyautogui.locateOnScreen(r'C:\Users\ZDH\Desktop\PY\region_screenshot.png')
print(a) # 打印结果为Box(left=0, top=0, width=300, height=400)
x, y = pyautogui.center(a) # 获得文件图片在现在的屏幕上面的中心坐标
print(x, y) # 打印结果为150 200
x, y = pyautogui.locateCenterOnScreen(r'C:\Users\ZDH\Desktop\PY\region_screenshot.png') # 这步与上面的四行代码作用一样
print(x, y) # 打印结果为150 200</p>
<h1 id="匹配屏幕所有与目标图片的对象-可以用for循环和list-输出" tabindex="-1"><a class="header-anchor" href="#匹配屏幕所有与目标图片的对象-可以用for循环和list-输出" aria-hidden="true">#</a> 匹配屏幕所有与目标图片的对象，可以用for循环和list()输出</h1>
<p>pyautogui.locateAllOnScreen(r'C:\Users\ZDH\Desktop\PY\region_screenshot.png')
for pos in pyautogui.locateAllOnScreen(r'C:\Users\ZDH\Desktop\PY\region_screenshot.png'):
print(pos)</p>
<h1 id="打印结果为box-left-0-top-0-width-300-height-400" tabindex="-1"><a class="header-anchor" href="#打印结果为box-left-0-top-0-width-300-height-400" aria-hidden="true">#</a> 打印结果为Box(left=0, top=0, width=300, height=400)</h1>
<p>a = list(pyautogui.locateAllOnScreen(r'C:\Users\ZDH\Desktop\PY\region_screenshot.png'))
print(a) # 打印结果为[Box(left=0, top=0, width=300, height=400)]</p>
</div></template>
