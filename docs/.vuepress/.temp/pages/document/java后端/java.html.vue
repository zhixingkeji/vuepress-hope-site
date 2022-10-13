<template><div><h2 id="第1章-java-介绍" tabindex="-1"><a class="header-anchor" href="#第1章-java-介绍" aria-hidden="true">#</a> 第1章 java 介绍</h2>
<h3 id="_1-1-基本信息" tabindex="-1"><a class="header-anchor" href="#_1-1-基本信息" aria-hidden="true">#</a> 1.1 基本信息</h3>
<p>大小写敏感：Java 是大小写敏感的，这就意味着标识符 Hello 与 hello 是不同的。</p>
<p>类名：对于所有的类来说，类名的首字母应该大写。如果类名由若干单词组成，那么每个单词的首字母应该大写，例如 MyFirstJavaClass 。</p>
<p>方法名：所有的方法名都应该以小写字母开头。如果方法名含有若干单词，则后面的每个单词首字母大写。</p>
<p>源文件名：源文件名必须和类名相同。当保存文件的时候，你应该使用类名作为文件名保存（切记 Java 是大小写敏感的），文件名的后缀为 .java。（如果文件名和类名不相同则会导致编译错误）。</p>
<p>主方法入口：所有的 Java 程序由 public static void main(String[] args) 方法开始执行。</p>
<h3 id="_1-2-标识符" tabindex="-1"><a class="header-anchor" href="#_1-2-标识符" aria-hidden="true">#</a> 1.2 标识符</h3>
<p>所有的标识符都应该以字母（A-Z 或者 a-z）,美元符（$）、或者下划线（_）开始</p>
<p>首字符之后可以是字母（A-Z 或者 a-z）,美元符（$）、下划线（_）或数字的任何字符组合</p>
<p>关键字不能用作标识符</p>
<p>标识符是大小写敏感的</p>
<p>合法标识符举例：age、$salary、_value、__1_value</p>
<p>非法标识符举例：123abc、-salary</p>
<h3 id="_1-3-修饰符" tabindex="-1"><a class="header-anchor" href="#_1-3-修饰符" aria-hidden="true">#</a> 1.3 修饰符</h3>
<p>访问控制修饰符 : default, public , protected, private</p>
<p>非访问控制修饰符 : final, abstract, static, synchronized</p>
<h3 id="_1-4-变量" tabindex="-1"><a class="header-anchor" href="#_1-4-变量" aria-hidden="true">#</a> 1.4 变量</h3>
<p>局部变量</p>
<p>类变量（静态变量）</p>
<p>成员变量（非静态变量）</p>
<h3 id="_1-5-数组" tabindex="-1"><a class="header-anchor" href="#_1-5-数组" aria-hidden="true">#</a> 1.5 数组</h3>
<p>数组是储存在堆上的对象，可以保存多个同类型变量。在后面的章节中，我们将会学到如何声明、构造以及初始化一个数组。</p>
<h3 id="_1-6-枚举" tabindex="-1"><a class="header-anchor" href="#_1-6-枚举" aria-hidden="true">#</a> 1.6 枚举</h3>
<p>Java 5.0引入了枚举，枚举限制变量只能是预先设定好的值。使用枚举可以减少代码中的 bug。</p>
<h3 id="_1-7-关键字" tabindex="-1"><a class="header-anchor" href="#_1-7-关键字" aria-hidden="true">#</a> 1.7 关键字</h3>
<p>访问控制</p>
<ul>
<li>private	私有的</li>
<li>protected	受保护的</li>
<li>public	公共的</li>
<li>default	默认</li>
</ul>
<p>类、方法和变量修饰符</p>
<ul>
<li>nabstract	声明抽象</li>
<li>nclass	类</li>
<li>nextends	扩充,继承</li>
<li>nfinal	最终值,不可改变的</li>
<li>nimplements	实现（接口）</li>
<li>ninterface	接口</li>
<li>nnative	本地，原生方法（非 Java 实现）</li>
<li>new	创建</li>
<li>nstatic	静态</li>
<li>nstrictfp	严格,精准</li>
<li>nsynchronized	线程,同步</li>
<li>ntransient	短暂</li>
<li>nvolatile	易失</li>
</ul>
<p>程序控制语句</p>
<ul>
<li>break	跳出循环</li>
<li>case	定义一个值以供 switch 选择</li>
<li>continue	继续</li>
<li>default	默认</li>
<li>do	运行</li>
<li>else	否则</li>
<li>for	循环</li>
<li>if	如果</li>
<li>instanceof	实例</li>
<li>return	返回</li>
<li>switch	根据值选择执行</li>
<li>while	循环</li>
</ul>
<p>错误处理</p>
<ul>
<li>assert	断言表达式是否为真</li>
<li>catch	捕捉异常</li>
<li>finally	有没有异常都执行</li>
<li>throw	抛出一个异常对象</li>
<li>throws	声明一个异常可能被抛出</li>
<li>try	捕获异常</li>
</ul>
<p>包相关</p>
<ul>
<li>import	引入</li>
<li>package	包</li>
</ul>
<p>基本类型</p>
<ul>
<li>boolean	布尔型</li>
<li>byte	字节型</li>
<li>char	字符型</li>
<li>double	双精度浮点</li>
<li>float	单精度浮点</li>
<li>int	整型</li>
<li>long	长整型</li>
<li>short	短整型</li>
</ul>
<p>变量引用	-</p>
<ul>
<li>super	父类,超类</li>
<li>this	本类</li>
<li>void	无返回值</li>
</ul>
<p>保留关键字-</p>
<ul>
<li>goto	是关键字，但不能使用</li>
<li>const	是关键字，但不能使用</li>
</ul>
<h3 id="_1-8-注释" tabindex="-1"><a class="header-anchor" href="#_1-8-注释" aria-hidden="true">#</a> 1.8 注释</h3>
<p>单行注释<br>
<code v-pre>// 这是单行注释的示例</code></p>
<p>多行注释<br>
<code v-pre>/* 多行注释的示例 */</code></p>
<h3 id="_1-9-继承" tabindex="-1"><a class="header-anchor" href="#_1-9-继承" aria-hidden="true">#</a> 1.9 继承</h3>
<p>在 Java 中，一个类可以由其他类派生。</p>
<p>利用继承的方法，可以重用已存在类的方法和属性，而不用重写这些代码。</p>
<p>被继承的类称为超类（super class），派生类称为子类（subclass）。</p>
<h3 id="_1-10-接口" tabindex="-1"><a class="header-anchor" href="#_1-10-接口" aria-hidden="true">#</a> 1.10 接口</h3>
<p>在 Java 中，接口可理解为对象间相互通信的协议。接口在继承中扮演着很重要的角色。</p>
<p>接口只定义派生要用到的方法，但是方法的具体实现完全取决于派生类。</p>
<h2 id="第2章-数据类型" tabindex="-1"><a class="header-anchor" href="#第2章-数据类型" aria-hidden="true">#</a> 第2章 数据类型</h2>
<h3 id="_2-1-内置数据类型" tabindex="-1"><a class="header-anchor" href="#_2-1-内置数据类型" aria-hidden="true">#</a> 2.1 内置数据类型</h3>
<p>Java语言提供了八种基本类型。六种数字类型（四个整数型，两个浮点型），一种字符类型，还有一种布尔型。</p>
<h4 id="_1-byte" tabindex="-1"><a class="header-anchor" href="#_1-byte" aria-hidden="true">#</a> (1) byte</h4>
<p>byte 数据类型是8位、有符号的，以二进制补码表示的整数；</p>
<p>最小值是 -128（-2^7）；</p>
<p>最大值是 127（2^7-1）；</p>
<p>默认值是 0；</p>
<p>byte 类型用在大型数组中节约空间，主要代替整数，因为 byte 变量占用的空间只有 int 类型的四分之一；</p>
<p>例子：byte a = 100，byte b = -50。</p>
<h4 id="_2-short" tabindex="-1"><a class="header-anchor" href="#_2-short" aria-hidden="true">#</a> (2) short</h4>
<p>short 数据类型是 16 位、有符号的以二进制补码表示的整数</p>
<p>最小值是 -32768（-2^15）；</p>
<p>最大值是 32767（2^15 - 1）；</p>
<p>Short 数据类型也可以像 byte 那样节省空间。一个short变量是int型变量所占空间的二分之一；</p>
<p>默认值是 0；</p>
<p>例子：short s = 1000，short r = -20000。</p>
<h4 id="_3-int" tabindex="-1"><a class="header-anchor" href="#_3-int" aria-hidden="true">#</a> (3) int</h4>
<p>int 数据类型是32位、有符号的以二进制补码表示的整数；</p>
<p>最小值是 -2,147,483,648（-2^31）；</p>
<p>最大值是 2,147,483,647（2^31 - 1）；</p>
<p>一般地整型变量默认为 int 类型；</p>
<p>默认值是 0 ；</p>
<p>例子：int a = 100000, int b = -200000。</p>
<h4 id="_4-long" tabindex="-1"><a class="header-anchor" href="#_4-long" aria-hidden="true">#</a> (4) long</h4>
<p>long 数据类型是 64 位、有符号的以二进制补码表示的整数；</p>
<p>最小值是 -9,223,372,036,854,775,808（-2^63）；
最
大值是 9,223,372,036,854,775,807（2^63 -1）；</p>
<p>这种类型主要使用在需要比较大整数的系统上；</p>
<p>默认值是 0L；</p>
<p>例子： long a = 100000L，Long b = -200000L。</p>
<p>&quot;L&quot;理论上不分大小写，但是若写成&quot;l&quot;容易与数字&quot;1&quot;混淆，不容易分辩。所以最好大写。</p>
<h4 id="_5-float" tabindex="-1"><a class="header-anchor" href="#_5-float" aria-hidden="true">#</a> (5) float</h4>
<p>float 数据类型是单精度、32位、符合IEEE 754标准的浮点数；</p>
<p>float 在储存大型浮点数组的时候可节省内存空间；</p>
<p>默认值是 0.0f；</p>
<p>浮点数不能用来表示精确的值，如货币；</p>
<p>例子：float f1 = 234.5f。</p>
<h4 id="_6-double" tabindex="-1"><a class="header-anchor" href="#_6-double" aria-hidden="true">#</a> (6) double</h4>
<p>double 数据类型是双精度、64 位、符合 IEEE 754 标准的浮点数；</p>
<p>浮点数的默认类型为 double 类型；
d
ouble类型同样不能表示精确的值，如货币；</p>
<p>默认值是 0.0d；</p>
<p>例子： double   d1  = 7D ;</p>
<h4 id="_7-boolean" tabindex="-1"><a class="header-anchor" href="#_7-boolean" aria-hidden="true">#</a> (7) boolean</h4>
<p>boolean数据类型表示一位的信息；</p>
<p>只有两个取值：true 和 false；</p>
<p>默认值是 false；</p>
<p>例子：boolean one = true。</p>
<h4 id="_8-char" tabindex="-1"><a class="header-anchor" href="#_8-char" aria-hidden="true">#</a> (8) char</h4>
<p>char 类型是一个单一的 16 位 Unicode 字符；</p>
<p>最小值是 \u0000（十进制等效值为 0）；</p>
<p>最大值是 \uffff（即为 65535）；</p>
<p>char 数据类型可以储存任何字符；</p>
<p>例子：char letter = 'A';。</p>
<h3 id="_2-2-引用类型" tabindex="-1"><a class="header-anchor" href="#_2-2-引用类型" aria-hidden="true">#</a> 2.2 引用类型</h3>
<p>在Java中，引用类型的变量非常类似于C/C++的指针。引用类型指向一个对象，指向对象的变量是引用变量。这些变量在声明时被指定为一个特定的类型，比如 Employee、Puppy 等。变量一旦声明后，类型就不能被改变了。</p>
<p>对象、数组都是引用数据类型。</p>
<p>所有引用类型的默认值都是null。</p>
<p>一个引用变量可以用来引用任何与之兼容的类型。</p>
<p>例子：Site site = new Site(&quot;Runoob&quot;)。</p>
<h3 id="_2-3-常量" tabindex="-1"><a class="header-anchor" href="#_2-3-常量" aria-hidden="true">#</a> 2.3 常量</h3>
<p>常量在程序运行时是不能被修改的。</p>
<p>在 Java 中使用 final 关键字来修饰常量，声明方式和变量类似：</p>
<p>final double PI = 3.1415927;</p>
<h3 id="_2-4-类型转换" tabindex="-1"><a class="header-anchor" href="#_2-4-类型转换" aria-hidden="true">#</a> 2.4 类型转换</h3>
<h4 id="_2-4-1-自动类型转换" tabindex="-1"><a class="header-anchor" href="#_2-4-1-自动类型转换" aria-hidden="true">#</a> 2.4.1 自动类型转换</h4>
<p>必须满足转换前的数据类型的位数要低于转换后的数据类型，例如: short数据类型的位数为16位，就可以自动转换位数为32的int类型，同样float数据类型的位数为32，可以自动转换为64位的double类型。</p>
<h4 id="_2-4-2-强制类型转换" tabindex="-1"><a class="header-anchor" href="#_2-4-2-强制类型转换" aria-hidden="true">#</a> 2.4.2 强制类型转换</h4>
<ol>
<li>
<p>条件是转换的数据类型必须是兼容的。</p>
</li>
<li>
<p>格式：(type)value type是要强制类型转换后的数据类型 实例：</p>
</li>
</ol>
<p>int a = 123;</p>
<p>byte b = (byte)a</p>
<h3 id="_2-5-变量类型" tabindex="-1"><a class="header-anchor" href="#_2-5-变量类型" aria-hidden="true">#</a> 2.5 变量类型</h3>
<h4 id="_2-5-1-类变量-静态变量" tabindex="-1"><a class="header-anchor" href="#_2-5-1-类变量-静态变量" aria-hidden="true">#</a> 2.5.1 类变量（静态变量）</h4>
<p>类变量也称为静态变量，在类中以 static 关键字声明，但必须在方法之外。</p>
<p>无论一个类创建了多少个对象，类只拥有类变量的一份拷贝。</p>
<p>静态变量除了被声明为常量外很少使用，静态变量是指声明为 public/private，final 和 static 类型的变量。</p>
<p>静态变量初始化后不可改变。</p>
<p>静态变量储存在静态存储区。经常被声明为常量，很少单独使用 static 声明变量。</p>
<p>静态变量在第一次被访问时创建，在程序结束时销毁。</p>
<p>与实例变量具有相似的可见性。但为了对类的使用者可见，大多数静态变量声明为 public 类型 。</p>
<p>默认值和实例变量相似。数值型变量默认值是 0，布尔型默认值是 false，引用类型默认值是 null。</p>
<p>变量的值可以在声明的时候指定，也可以在构造方法中指定。此外，静态变量还可以在静态语句块中初始化。</p>
<p>静态变量可以通过：ClassName.VariableName的方式访问。</p>
<p>类变量被声明为 public static final 类型时，类变量名称一般建议使用大写字母。</p>
<p>如果静态变量不是 public 和 final 类型，其命名方式与实例变量以及局部变量的命名方式一致。</p>
<h4 id="_2-5-2-实例变量" tabindex="-1"><a class="header-anchor" href="#_2-5-2-实例变量" aria-hidden="true">#</a> 2.5.2 实例变量</h4>
<p>实例变量声明在一个类中，但在方法、构造方法和语句块之外；</p>
<p>当一个对象被实例化之后，每个实例变量的值就跟着确定；</p>
<p>实例变量在对象创建的时候创建，在对象被销毁的时候销毁；</p>
<p>实例变量的值应该至少被一个方法、构造方法或者语句块引用，使得外部能够通过这些方式获取实例变量信息；</p>
<p>实例变量可以声明在使用前或者使用后；</p>
<p>访问修饰符可以修饰实例变量；</p>
<p>实例变量对于类中的方法、构造方法或者语句块是可见的。一般情况下应该把实例变量设为私有。通过使用访问修饰符可以使实例变量对子类可见；</p>
<p>实例变量具有默认值。数值型变量的默认值是0，布尔型变量的默认值是false，引用类型变量的默认值是null。</p>
<p>变量的值可以在声明时指定，也可以在构造方法中指定；</p>
<p>实例变量可以直接通过变量名访问。但在静态方法以及其他类中，就应该使用完全限定名：ObejectReference.VariableName。</p>
<h4 id="_2-5-3-局部变量" tabindex="-1"><a class="header-anchor" href="#_2-5-3-局部变量" aria-hidden="true">#</a> 2.5.3 局部变量</h4>
<p>局部变量声明在方法、构造方法或者语句块中；</p>
<p>局部变量在方法、构造方法、或者语句块被执行的时候创建，当它们执行完成后，变量将会被销毁；</p>
<p>访问修饰符不能用于局部变量；</p>
<p>局部变量只在声明它的方法、构造方法或者语句块中可见；</p>
<p>局部变量是在栈上分配的。</p>
<p>局部变量没有默认值，所以局部变量被声明后，必须经过初始化，才可以使用。</p>
<h3 id="_2-6-修饰符" tabindex="-1"><a class="header-anchor" href="#_2-6-修饰符" aria-hidden="true">#</a> 2.6 修饰符</h3>
<h4 id="_2-6-1-访问控制修饰符" tabindex="-1"><a class="header-anchor" href="#_2-6-1-访问控制修饰符" aria-hidden="true">#</a> 2.6.1 访问控制修饰符</h4>
<p>Java中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。Java 支持 4 种不同的访问权限。</p>
<p>default (即默认，什么也不写）: 在同一包内可见，不使用任何修饰符。使用对象：类、接口、变量、方法。</p>
<p>private : 在同一类内可见。使用对象：变量、方法。 注意：不能修饰类（外部类）</p>
<p>public : 对所有类可见。使用对象：类、接口、变量、方法</p>
<p>protected : 对同一包内的类和所有子类可见。使用对象：变量、方法。 注意：不能修饰类（外部类）。</p>
<table>
<thead>
<tr>
<th>修饰符</th>
<th>当前类</th>
<th>同一包内</th>
<th>子孙类(同一包)</th>
<th>子孙类(不同包)</th>
<th>其他包</th>
</tr>
</thead>
<tbody>
<tr>
<td>public</td>
<td>Y</td>
<td>Y</td>
<td>Y</td>
<td>Y</td>
<td>Y</td>
</tr>
<tr>
<td>protected</td>
<td>Y</td>
<td>Y</td>
<td>Y</td>
<td>Y/N（说明）</td>
<td>N</td>
</tr>
<tr>
<td>default</td>
<td>Y</td>
<td>Y</td>
<td>Y</td>
<td>N</td>
<td>N</td>
</tr>
<tr>
<td>private</td>
<td>Y</td>
<td>N</td>
<td>N</td>
<td>N</td>
<td>N</td>
</tr>
</tbody>
</table>
<p>请注意以下方法继承的规则：</p>
<p>父类中声明为 public 的方法在子类中也必须为 public。</p>
<p>父类中声明为 protected 的方法在子类中要么声明为 protected，要么声明为 public，不能声明为 private。</p>
<p>父类中声明为 private 的方法，不能够被继承。</p>
<h4 id="_2-6-2-非访问修饰符" tabindex="-1"><a class="header-anchor" href="#_2-6-2-非访问修饰符" aria-hidden="true">#</a> 2.6.2 非访问修饰符</h4>
<p>static 修饰符，用来修饰类方法和类变量。</p>
<p>final 修饰符，用来修饰类、方法和变量，final 修饰的类不能够被继承，修饰的方法不能被继承类重新定义，修饰的变量为常量，是不可修改的。</p>
<p>abstract 修饰符，用来创建抽象类和抽象方法。</p>
<p>synchronized 和 volatile 修饰符，主要用于线程的编程。</p>
<h3 id="_2-7-运算符" tabindex="-1"><a class="header-anchor" href="#_2-7-运算符" aria-hidden="true">#</a> 2.7 运算符</h3>
<h4 id="_2-7-1-算数运算符" tabindex="-1"><a class="header-anchor" href="#_2-7-1-算数运算符" aria-hidden="true">#</a> 2.7.1 算数运算符</h4>
<table>
<thead>
<tr>
<th>操作符</th>
<th>描述</th>
<th>例子</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>+</code></td>
<td>加法 相加运算符两侧的值</td>
<td>A + B 等于 30</td>
</tr>
<tr>
<td><code v-pre>-</code></td>
<td>减法 左操作数减去右操作数</td>
<td>A – B 等于 -10</td>
</tr>
<tr>
<td><code v-pre>*</code></td>
<td>乘法 相乘操作符两侧的值</td>
<td>A * B等于200</td>
</tr>
<tr>
<td><code v-pre>/</code></td>
<td>除法 左操作数除以右操作数</td>
<td>B / A等于2</td>
</tr>
<tr>
<td><code v-pre>％</code></td>
<td>取余 左操作数除以右操作数的余数</td>
<td>B%A等于0</td>
</tr>
<tr>
<td><code v-pre>++</code></td>
<td>自增 操作数的值增加1</td>
<td>B++ 或 ++B</td>
</tr>
<tr>
<td><code v-pre>--</code></td>
<td>自减 操作数的值减少1</td>
<td>B-- 或 --B</td>
</tr>
</tbody>
</table>
<h4 id="_2-7-2-关系运算符" tabindex="-1"><a class="header-anchor" href="#_2-7-2-关系运算符" aria-hidden="true">#</a> 2.7.2 关系运算符</h4>
<table>
<thead>
<tr>
<th>运算符</th>
<th>描述</th>
<th>例子</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>==</code></td>
<td>检查如果两个操作数的值是否相等，如果相等则条件为真。</td>
<td>（A == B）为假。</td>
</tr>
<tr>
<td><code v-pre>!=</code></td>
<td>检查如果两个操作数的值是否相等，如果值不相等则条件为真。</td>
<td>(A != B) 为真。</td>
</tr>
<tr>
<td><code v-pre>&gt;</code></td>
<td>检查左操作数的值是否大于右操作数的值，如果是那么条件为真。</td>
<td>（A&gt; B）为假。</td>
</tr>
<tr>
<td><code v-pre>&lt;</code></td>
<td>检查左操作数的值是否小于右操作数的值，如果是那么条件为真。</td>
<td>（A &lt;B）为真。</td>
</tr>
<tr>
<td><code v-pre>&gt;=</code></td>
<td>检查左操作数的值是否大于或等于右操作数的值，如果是那么条件为真。</td>
<td>（A&gt; = B）为假。</td>
</tr>
<tr>
<td><code v-pre>&lt;=</code></td>
<td>检查左操作数的值是否小于或等于右操作数的值，如果是那么条件为真。</td>
<td>（A &lt;= B）为真。</td>
</tr>
</tbody>
</table>
<h4 id="_2-7-3-位运算符" tabindex="-1"><a class="header-anchor" href="#_2-7-3-位运算符" aria-hidden="true">#</a> 2.7.3 位运算符</h4>
<table>
<thead>
<tr>
<th>操作符</th>
<th>描述</th>
<th>例子</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>＆</code></td>
<td>如果相对应位都是1，则结果为1，否则为0</td>
<td><code v-pre>（A＆B）</code>，得到12，即0000 1100</td>
</tr>
<tr>
<td><code v-pre>|</code></td>
<td>如果相对应位都是 0，则结果为 0，否则为 1</td>
<td><code v-pre>（A | B）</code>得到61，即 0011 1101</td>
</tr>
<tr>
<td><code v-pre>^</code></td>
<td>如果相对应位值相同，则结果为0，否则为1</td>
<td><code v-pre>（A ^ B）</code>得到49，即 0011 0001</td>
</tr>
<tr>
<td><code v-pre>〜</code></td>
<td>按位取反运算符翻转操作数的每一位，即0变成1，1变成0。</td>
<td><code v-pre>（〜A）</code>得到-61，即1100 0011</td>
</tr>
<tr>
<td><code v-pre>&lt;&lt;</code></td>
<td>按位左移运算符。左操作数按位左移右操作数指定的位数。</td>
<td><code v-pre>A &lt;&lt; 2</code> 得到240，即 1111 0000</td>
</tr>
<tr>
<td><code v-pre>&gt;&gt;</code></td>
<td>按位右移运算符。左操作数按位右移右操作数指定的位数。</td>
<td><code v-pre>A &gt;&gt; 2</code> 得到15即 1111</td>
</tr>
<tr>
<td><code v-pre>&gt;&gt;&gt;</code></td>
<td>按位右移补零操作符。左操作数的值按右操作数指定的位数右移，移动得到的空位以零填充。</td>
<td><code v-pre>A&gt;&gt;&gt;2</code> 得到15即0000 1111</td>
</tr>
</tbody>
</table>
<h4 id="_2-7-4-逻辑运算符" tabindex="-1"><a class="header-anchor" href="#_2-7-4-逻辑运算符" aria-hidden="true">#</a> 2.7.4 逻辑运算符</h4>
<table>
<thead>
<tr>
<th>操作符</th>
<th>描述</th>
<th>例子</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>&amp;&amp;</code></td>
<td>称为逻辑与运算符。当且仅当两个操作数都为真，条件才为真。</td>
<td><code v-pre>（A &amp;&amp; B）</code> 为假。</td>
</tr>
<tr>
<td><code v-pre>||</code></td>
<td>称为逻辑或操作符。如果任何两个操作数任何一个为真，条件为真。</td>
<td><code v-pre>（A || B）</code> 为真。</td>
</tr>
<tr>
<td><code v-pre>！</code></td>
<td>称为逻辑非运算符。用来反转操作数的逻辑状态。如果条件为true，则逻辑非运算符将得到false。</td>
<td><code v-pre>！（A &amp;&amp; B）</code>为真。</td>
</tr>
</tbody>
</table>
<h4 id="_2-7-5-赋值运算符" tabindex="-1"><a class="header-anchor" href="#_2-7-5-赋值运算符" aria-hidden="true">#</a> 2.7.5 赋值运算符</h4>
<table>
<thead>
<tr>
<th>操作符</th>
<th>描述</th>
<th>例子</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>=</code></td>
<td>简单的赋值运算符，将右操作数的值赋给左侧操作数</td>
<td><code v-pre>C = A + B</code> 将把 <code v-pre>A + B</code> 得到的值赋给 <code v-pre>C</code></td>
</tr>
<tr>
<td><code v-pre>+=</code></td>
<td>加和赋值操作符，它把左操作数和右操作数相加赋值给左操作数</td>
<td><code v-pre>C + = A</code> 等价于<code v-pre>C = C + A</code></td>
</tr>
<tr>
<td><code v-pre>-=</code></td>
<td>减和赋值操作符，它把左操作数和右操作数相减赋值给左操作数</td>
<td><code v-pre>C - = A</code> 等价于 <code v-pre>C = C - A</code></td>
</tr>
<tr>
<td><code v-pre>*=</code></td>
<td>乘和赋值操作符，它把左操作数和右操作数相乘赋值给左操作数</td>
<td><code v-pre>C * = A</code> 等价于 <code v-pre>C = C * A</code></td>
</tr>
<tr>
<td><code v-pre>/=</code></td>
<td>除和赋值操作符，它把左操作数和右操作数相除赋值给左操作数</td>
<td><code v-pre>C / = A </code>，C 与 A 同类型时等价于 <code v-pre>C = C / A</code></td>
</tr>
<tr>
<td><code v-pre>％=</code></td>
<td>取模和赋值操作符，它把左操作数和右操作数取模后赋值给左操作数</td>
<td><code v-pre>C％= A</code> 等价于 <code v-pre>C = C％A</code></td>
</tr>
<tr>
<td><code v-pre>&lt;&lt;=</code></td>
<td>左移位赋值运算符</td>
<td><code v-pre>C &lt;&lt; = 2</code> 等价于 <code v-pre>C = C &lt;&lt; 2</code></td>
</tr>
<tr>
<td><code v-pre>&gt;&gt;=</code></td>
<td>右移位赋值运算符</td>
<td><code v-pre>C &gt;&gt; = 2</code> 等价于 <code v-pre>C = C &gt;&gt; 2</code></td>
</tr>
<tr>
<td><code v-pre>＆=</code></td>
<td>按位与赋值运算符</td>
<td><code v-pre>C＆= 2</code> 等价于 <code v-pre>C = C＆2</code></td>
</tr>
<tr>
<td><code v-pre>^=</code></td>
<td>按位异或赋值操作符</td>
<td><code v-pre>C ^ = 2 </code>等价于 <code v-pre>C = C ^ 2</code></td>
</tr>
<tr>
<td><code v-pre>|=</code></td>
<td>按位或赋值操作符</td>
<td><code v-pre>C | = 2</code>等价于<code v-pre>C = C | 2</code></td>
</tr>
</tbody>
</table>
<h4 id="_2-7-6-其他运算符" tabindex="-1"><a class="header-anchor" href="#_2-7-6-其他运算符" aria-hidden="true">#</a> 2.7.6 其他运算符</h4>
<p>条件运算符<br>
variable x = (expression) <code v-pre>?</code> value if true <code v-pre>:</code> value if false</p>
<h2 id="第3章-流程控制" tabindex="-1"><a class="header-anchor" href="#第3章-流程控制" aria-hidden="true">#</a> 第3章 流程控制</h2>
<h3 id="_3-1-while-循环" tabindex="-1"><a class="header-anchor" href="#_3-1-while-循环" aria-hidden="true">#</a> 3.1 while 循环</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">while</span><span class="token punctuation">(</span> 布尔表达式 <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//循环内容</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-do-while-循环" tabindex="-1"><a class="header-anchor" href="#_3-2-do-while-循环" aria-hidden="true">#</a> 3.2 do while 循环</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">do</span> <span class="token punctuation">{</span>
       <span class="token comment">//代码语句</span>
<span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>布尔表达式<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-for循环" tabindex="-1"><a class="header-anchor" href="#_3-3-for循环" aria-hidden="true">#</a> 3.3 for循环</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span>初始化<span class="token punctuation">;</span> 布尔表达式<span class="token punctuation">;</span> 更新<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//代码语句</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-增强for循环" tabindex="-1"><a class="header-anchor" href="#_3-4-增强for循环" aria-hidden="true">#</a> 3.4 增强for循环</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span> <span class="token class-name">String</span> a <span class="token operator">:</span> names <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//代码语句</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-break-关键字" tabindex="-1"><a class="header-anchor" href="#_3-5-break-关键字" aria-hidden="true">#</a> 3.5 break 关键字</h3>
<p>break 主要用在循环语句或者 switch 语句中，用来跳出整个语句块。</p>
<p>break 跳出最里层的循环，并且继续执行该循环下面的语句。</p>
<h3 id="_3-6-continue-关键字" tabindex="-1"><a class="header-anchor" href="#_3-6-continue-关键字" aria-hidden="true">#</a> 3.6 continue 关键字</h3>
<p>continue 适用于任何循环控制结构中。作用是让程序立刻跳转到下一次循环的迭代。</p>
<p>在 for 循环中，continue 语句使程序立即跳转到更新语句。</p>
<p>在 while 或者 do…while 循环中，程序立即跳转到布尔表达式的判断语句。</p>
<h3 id="_3-7-if-判断" tabindex="-1"><a class="header-anchor" href="#_3-7-if-判断" aria-hidden="true">#</a> 3.7 if 判断</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>布尔表达式 <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token comment">//如果布尔表达式 1的值为true执行代码</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>布尔表达式 <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token comment">//如果布尔表达式 2的值为true执行代码</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>布尔表达式 <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token comment">//如果布尔表达式 3的值为true执行代码</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token comment">//如果以上布尔表达式都不为true执行代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-8-switch-语句" tabindex="-1"><a class="header-anchor" href="#_3-8-switch-语句" aria-hidden="true">#</a> 3.8 switch 语句</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">switch</span><span class="token punctuation">(</span>expression<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> value <span class="token operator">:</span>
       <span class="token comment">//语句</span>
       <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">//可选</span>
    <span class="token keyword">case</span> value <span class="token operator">:</span>
       <span class="token comment">//语句</span>
       <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">//可选</span>
    <span class="token comment">//你可以有任意数量的case语句</span>
    <span class="token keyword">default</span> <span class="token operator">:</span> <span class="token comment">//可选</span>
       <span class="token comment">//语句</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第4章-常见的类" tabindex="-1"><a class="header-anchor" href="#第4章-常见的类" aria-hidden="true">#</a> 第4章 常见的类</h2>
<h3 id="_4-1-number类" tabindex="-1"><a class="header-anchor" href="#_4-1-number类" aria-hidden="true">#</a> 4.1 Number类</h3>
<p>在实际开发过程中，我们经常会遇到需要使用对象，而不是内置数据类型的情形。为了解决这个问题，Java 语言为每一个内置数据类型提供了对应的包装类。</p>
<table>
<thead>
<tr>
<th>包装类</th>
<th>基本数据类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>Boolean</td>
<td>boolean</td>
</tr>
<tr>
<td>Byte</td>
<td>byte</td>
</tr>
<tr>
<td>Short</td>
<td>short</td>
</tr>
<tr>
<td>Integer</td>
<td>int</td>
</tr>
<tr>
<td>Long</td>
<td>long</td>
</tr>
<tr>
<td>Character</td>
<td>char</td>
</tr>
<tr>
<td>Float</td>
<td>float</td>
</tr>
<tr>
<td>Double</td>
<td>double</td>
</tr>
</tbody>
</table>
<p>所有的包装类都是抽象类 Number 的子类</p>
<p><img src="@source/document/java后端/asset/javase-1636966460660.png" alt="" loading="lazy"></p>
<h3 id="_4-2-math-类" tabindex="-1"><a class="header-anchor" href="#_4-2-math-类" aria-hidden="true">#</a> 4.2 Math 类</h3>
<p>Math 包含了用于执行基本数学运算的属性和方法，如初等指数、对数、平方根和三角函数。</p>
<p>Math 的方法都被定义为 static 形式，通过 Math 类可以在主函数中直接调用。</p>
<p><code v-pre>Math.sin()</code></p>
<p>求指定double类型参数的正弦值。</p>
<p><code v-pre>Math.cos()</code></p>
<p>求指定double类型参数的余弦值。</p>
<p><code v-pre>Math.tan()</code></p>
<p>求指定double类型参数的正切值。</p>
<h3 id="_4-3-character-类" tabindex="-1"><a class="header-anchor" href="#_4-3-character-类" aria-hidden="true">#</a> 4.3 Character 类</h3>
<p>Character 类用于对单个字符进行操作。</p>
<p>Character 类在对象中包装一个基本类型 char 的值</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>isLetter()</td>
<td>是否是一个字母</td>
</tr>
<tr>
<td>isDigit()</td>
<td>是否是一个数字字符</td>
</tr>
<tr>
<td>isWhitespace()</td>
<td>是否是一个空白字符</td>
</tr>
<tr>
<td>isUpperCase()</td>
<td>是否是大写字母</td>
</tr>
<tr>
<td>isLowerCase()</td>
<td>是否是小写字母</td>
</tr>
<tr>
<td>toUpperCase()</td>
<td>指定字母的大写形式</td>
</tr>
<tr>
<td>toLowerCase()</td>
<td>指定字母的小写形式</td>
</tr>
</tbody>
</table>
<h3 id="_4-4-string-类" tabindex="-1"><a class="header-anchor" href="#_4-4-string-类" aria-hidden="true">#</a> 4.4 String 类</h3>
<p>字符串广泛应用 在 Java 编程中，在 Java 中字符串属于对象，Java 提供了 String 类来创建和操作字符串。</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
<th>返回值</th>
</tr>
</thead>
<tbody>
<tr>
<td>charAt(int index)</td>
<td>返回指定索引处的 char 值。</td>
<td>char</td>
</tr>
<tr>
<td>compareTo(Object o)</td>
<td>把这个字符串和另一个对象比较。</td>
<td>int</td>
</tr>
<tr>
<td>concat(String str)</td>
<td>将指定字符串连接到此字符串的结尾。</td>
<td>String</td>
</tr>
<tr>
<td>length()</td>
<td>返回此字符串的长度。</td>
<td>int</td>
</tr>
<tr>
<td>split(String regex)</td>
<td>根据给定正则表达式的匹配拆分此字符串。</td>
<td>String[]</td>
</tr>
<tr>
<td>toLowerCase()</td>
<td>使用默认语言环境的规则将此 String 中的所有字符都转换为小写。</td>
<td>String</td>
</tr>
<tr>
<td>toString()</td>
<td>返回此对象本身（它已经是一个字符串！）。</td>
<td>String</td>
</tr>
<tr>
<td>toUpperCase()</td>
<td>使用默认语言环境的规则将此 String 中的所有字符都转换为大写。</td>
<td>String</td>
</tr>
<tr>
<td>trim()</td>
<td>返回字符串的副本，忽略前导空白和尾部空白。</td>
<td>String</td>
</tr>
<tr>
<td>contains(CharSequence chars)</td>
<td>判断是否包含指定的字符系列。</td>
<td>boolean</td>
</tr>
<tr>
<td>isEmpty()</td>
<td>判断字符串是否为空。</td>
<td>boolean</td>
</tr>
</tbody>
</table>
<h3 id="_4-5-stringbuffer" tabindex="-1"><a class="header-anchor" href="#_4-5-stringbuffer" aria-hidden="true">#</a> 4.5 StringBuffer</h3>
<p>当对字符串进行修改的时候，需要使用 StringBuffer 和 StringBuilder 类。</p>
<p>和 String 类不同的是，StringBuffer 和 StringBuilder 类的对象能够被多次的修改，并且不产生新的未使用对象。</p>
<p><img src="@source/document/java后端/asset/javase-1636968526707.png" alt="" loading="lazy"></p>
<p>在使用 StringBuffer 类时，每次都会对 StringBuffer 对象本身进行操作，而不是生成新的对象，所以如果需要对字符串进行修改推荐使用 StringBuffer。</p>
<p>StringBuilder 类在 Java 5 中被提出，它和 StringBuffer 之间的最大不同在于 StringBuilder 的方法不是线程安全的（不能同步访问）。</p>
<p>由于 StringBuilder 相较于 StringBuffer 有速度优势，所以多数情况下建议使用 StringBuilder 类。</p>
<p><img src="@source/document/java后端/asset/javase-1636968539335.png" alt="" loading="lazy"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RunoobTest</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"Runoob.."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span> 
        sb<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">"Java"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span> 
        sb<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然而在应用程序要求线程安全的情况下，则必须使用 StringBuffer 类。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">StringBuffer</span> sBuffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token string">"菜鸟教程官网："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sBuffer<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"www"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sBuffer<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">".runoob"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sBuffer<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">".com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sBuffer<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-数组" tabindex="-1"><a class="header-anchor" href="#_4-6-数组" aria-hidden="true">#</a> 4.6 数组</h3>
<h4 id="_4-6-1-创建数组" tabindex="-1"><a class="header-anchor" href="#_4-6-1-创建数组" aria-hidden="true">#</a> 4.6.1 创建数组</h4>
<p><code v-pre>double[] myList = {1.9, 2.9, 3.4, 3.5};</code></p>
<h4 id="_4-6-2-foreach-循环" tabindex="-1"><a class="header-anchor" href="#_4-6-2-foreach-循环" aria-hidden="true">#</a> 4.6.2 forEach 循环</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">double</span> e<span class="token operator">:</span> myList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-6-3-多维数组" tabindex="-1"><a class="header-anchor" href="#_4-6-3-多维数组" aria-hidden="true">#</a> 4.6.3 多维数组</h4>
<p><code v-pre>String[][] str = new String[3][4];</code></p>
<h3 id="_4-7-日期类" tabindex="-1"><a class="header-anchor" href="#_4-7-日期类" aria-hidden="true">#</a> 4.7 日期类</h3>
<h4 id="_4-7-1-date类" tabindex="-1"><a class="header-anchor" href="#_4-7-1-date类" aria-hidden="true">#</a> 4.7.1 Date类</h4>
<p>java.util 包提供了 Date 类来封装当前的日期和时间。 Date 类提供两个构造函数来实例化 Date 对象。</p>
<p>第一个构造函数使用当前日期和时间来初始化对象。</p>
<p><code v-pre>Date date = new Date();</code></p>
<p>日期格式化</p>
<p><code v-pre>SimpleDateFormat ft = new SimpleDateFormat (&quot;yyyy-MM-dd hh:mm:ss&quot;);</code></p>
<p><code v-pre>System.out.println(&quot;当前时间为: &quot; + ft.format(dNow));</code></p>
<h4 id="_4-7-2-calendar类" tabindex="-1"><a class="header-anchor" href="#_4-7-2-calendar类" aria-hidden="true">#</a> 4.7.2 Calendar类</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Calendar</span> c1 <span class="token operator">=</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 获得年份</span>
<span class="token keyword">int</span> year <span class="token operator">=</span> c1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">YEAR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 获得月份</span>
<span class="token keyword">int</span> month <span class="token operator">=</span> c1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">MONTH</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// 获得日期</span>
<span class="token keyword">int</span> date <span class="token operator">=</span> c1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">DATE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 获得小时</span>
<span class="token keyword">int</span> hour <span class="token operator">=</span> c1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">HOUR_OF_DAY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 获得分钟</span>
<span class="token keyword">int</span> minute <span class="token operator">=</span> c1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">MINUTE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 获得秒</span>
<span class="token keyword">int</span> second <span class="token operator">=</span> c1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">SECOND</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 获得星期几（注意（这个与Date类是不同的）：1代表星期日、2代表星期1、3代表星期二，以此类推）</span>
<span class="token keyword">int</span> day <span class="token operator">=</span> c1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">DAY_OF_WEEK</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-8-正则" tabindex="-1"><a class="header-anchor" href="#_4-8-正则" aria-hidden="true">#</a> 4.8 正则</h3>
<p>正则表达式定义了字符串的模式。</p>
<p>正则表达式可以用来搜索、编辑或处理文本。</p>
<p>正则表达式并不仅限于某一种语言，但是在每种语言中有细微的差别。</p>
<h3 id="_4-9-scanner类" tabindex="-1"><a class="header-anchor" href="#_4-9-scanner类" aria-hidden="true">#</a> 4.9 Scanner类</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ScannerDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> scan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 从键盘接收数据</span>
 
        <span class="token comment">// nextLine方式接收字符串</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"nextLine方式接收："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 判断是否还有输入</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>scan<span class="token punctuation">.</span><span class="token function">hasNextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> str2 <span class="token operator">=</span> scan<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"输入的数据为："</span> <span class="token operator">+</span> str2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        scan<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-10-file-类" tabindex="-1"><a class="header-anchor" href="#_4-10-file-类" aria-hidden="true">#</a> 4.10 File 类</h3>
<h4 id="_4-10-1-读取目录" tabindex="-1"><a class="header-anchor" href="#_4-10-1-读取目录" aria-hidden="true">#</a> 4.10.1 读取目录</h4>
<p><code v-pre>String dirname = &quot;/tmp&quot;;</code></p>
<p><code v-pre>File f1 = new File(dirname);</code></p>
<h4 id="_4-10-2-删除目录" tabindex="-1"><a class="header-anchor" href="#_4-10-2-删除目录" aria-hidden="true">#</a> 4.10.2 删除目录</h4>
<p><code v-pre>File folder = new File(&quot;/tmp/java/&quot;);</code></p>
<p><code v-pre>deleteFolder(folder);</code></p>
<h4 id="_4-10-3-删除目录和文件" tabindex="-1"><a class="header-anchor" href="#_4-10-3-删除目录和文件" aria-hidden="true">#</a> 4.10.3 删除目录和文件</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">deleteFolder</span><span class="token punctuation">(</span><span class="token class-name">File</span> folder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span> files <span class="token operator">=</span> folder<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>files <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">File</span> f <span class="token operator">:</span> files<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">deleteFolder</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    f<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        folder<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-10-4-文件读写流" tabindex="-1"><a class="header-anchor" href="#_4-10-4-文件读写流" aria-hidden="true">#</a> 4.10.4 文件读写流</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//文件名 :fileStreamTest2.java</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> fileStreamTest2 <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
 
        <span class="token class-name">File</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"a.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FileOutputStream</span> fop <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 构建FileOutputStream对象,文件不存在会自动新建</span>
 
        <span class="token class-name">OutputStreamWriter</span> writer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span>fop<span class="token punctuation">,</span> <span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 构建OutputStreamWriter对象,参数可以指定编码,默认为操作系统默认编码,windows上是gbk</span>
 
        writer<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"中文输入"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 写入到缓冲区</span>
 
        writer<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"\r\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 换行</span>
 
        writer<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"English"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 刷新缓存冲,写入到文件,如果下面已经没有写入的内容了,直接close也会写入</span>
 
        writer<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 关闭写入流,同时会把缓冲区内容写入文件,所以上面的注释掉</span>
 
        fop<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 关闭输出流,释放系统资源</span>
 
        <span class="token class-name">FileInputStream</span> fip <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 构建FileInputStream对象</span>
 
        <span class="token class-name">InputStreamReader</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>fip<span class="token punctuation">,</span> <span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 构建InputStreamReader对象,编码与写入相同</span>
 
        <span class="token class-name">StringBuffer</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>reader<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> reader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 转成char加到StringBuffer对象中</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        reader<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 关闭读取流</span>
 
        fip<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 关闭输入流,释放系统资源</span>
 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第5章-面向对象" tabindex="-1"><a class="header-anchor" href="#第5章-面向对象" aria-hidden="true">#</a> 第5章 面向对象</h2>
<h3 id="_5-1-对象和类" tabindex="-1"><a class="header-anchor" href="#_5-1-对象和类" aria-hidden="true">#</a> 5.1 对象和类</h3>
<p>对象：对象是类的一个实例（对象不是找个女朋友），有状态和行为。</p>
<p>类：类是一个模板，它描述一类对象的行为和状态。</p>
<p><img src="@source/document/java后端/asset/javase-1636970776577.png" alt="" loading="lazy"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> breed<span class="token punctuation">;</span>
    <span class="token keyword">int</span> size<span class="token punctuation">;</span>
    <span class="token class-name">String</span> colour<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
 
    <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">void</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    
     <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 这个构造器仅有一个参数：name</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-方法" tabindex="-1"><a class="header-anchor" href="#_5-2-方法" aria-hidden="true">#</a> 5.2 方法</h3>
<p>Java方法是语句的集合，它们在一起执行一个功能。</p>
<p>提高了代码的重用性。</p>
<p><img src="@source/document/java后端/asset/javase-1636971038265.png" alt="" loading="lazy"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> n1<span class="token punctuation">,</span> <span class="token keyword">int</span> n2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> temp <span class="token operator">=</span> n1<span class="token punctuation">;</span>
    n1 <span class="token operator">=</span> n2<span class="token punctuation">;</span>
    n2 <span class="token operator">=</span> temp<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-继承" tabindex="-1"><a class="header-anchor" href="#_5-3-继承" aria-hidden="true">#</a> 5.3 继承</h3>
<h4 id="_5-3-1-继承的概念" tabindex="-1"><a class="header-anchor" href="#_5-3-1-继承的概念" aria-hidden="true">#</a> 5.3.1 继承的概念</h4>
<p>继承是java面向对象编程技术的一块基石，因为它允许创建分等级层次的类。</p>
<p>继承就是子类继承父类的特征和行为，使得子类对象（实例）具有父类的实例域和方法，或子类从父类继承方法，使得子类具有父类相同的行为。</p>
<p><img src="@source/document/java后端/asset/javase-1636971440988.png" alt="" loading="lazy"></p>
<h4 id="_5-3-2-继承的特性" tabindex="-1"><a class="header-anchor" href="#_5-3-2-继承的特性" aria-hidden="true">#</a> 5.3.2 继承的特性</h4>
<p>子类拥有父类非 private 的属性、方法。</p>
<p>子类可以拥有自己的属性和方法，即子类可以对父类进行扩展。</p>
<p>子类可以用自己的方式实现父类的方法。</p>
<p>Java 的继承是单继承，但是可以多重继承，单继承就是一个子类只能继承一个父类，多重继承就是，例如 B 类继承 A 类，C 类继承 B 类，所以按照关系就是 B 类是 C 类的父类，A 类是 B 类的父类，这是 Java 继承区别于 C++ 继承的一个特性。</p>
<p>提高了类之间的耦合性（继承的缺点，耦合度高就会造成代码之间的联系越紧密，代码独立性越差）。</p>
<h4 id="_5-3-3-super-与-this-关键字" tabindex="-1"><a class="header-anchor" href="#_5-3-3-super-与-this-关键字" aria-hidden="true">#</a> 5.3.3 super 与 this 关键字</h4>
<p><code v-pre>super</code> 关键字：我们可以通过super关键字来实现对父类成员的访问，用来引用当前对象的父类。</p>
<p><code v-pre>this</code> 关键字：指向自己的引用。</p>
<h4 id="_5-3-4-final关键字" tabindex="-1"><a class="header-anchor" href="#_5-3-4-final关键字" aria-hidden="true">#</a> 5.3.4 final关键字</h4>
<p>inal 关键字声明类可以把类定义为不能继承的，即最终类；或者用于修饰方法，该方法不能被子类重写</p>
<p><code v-pre>final class 类名 {//类体}</code></p>
<h4 id="_5-3-5-构造器" tabindex="-1"><a class="header-anchor" href="#_5-3-5-构造器" aria-hidden="true">#</a> 5.3.5 构造器</h4>
<p>子类是不继承父类的构造器（构造方法或者构造函数）的，它只是调用（隐式或显式）。如果父类的构造器带有参数，则必须在子类的构造器中显式地通过 super 关键字调用父类的构造器并配以适当的参数列表。</p>
<p>如果父类构造器没有参数，则在子类的构造器中不需要使用 super 关键字调用父类构造器，系统会自动调用父类的无参构造器。</p>
<h3 id="_5-4-重写与重载" tabindex="-1"><a class="header-anchor" href="#_5-4-重写与重载" aria-hidden="true">#</a> 5.4 重写与重载</h3>
<h4 id="_5-4-1-方法的重写规则" tabindex="-1"><a class="header-anchor" href="#_5-4-1-方法的重写规则" aria-hidden="true">#</a> 5.4.1 方法的重写规则</h4>
<p>参数列表与被重写方法的参数列表必须完全相同。</p>
<p>返回类型与被重写方法的返回类型可以不相同，但是必须是父类返回值的派生类（java5 及更早版本返回类型要一样，java7 及更高版本可以不同）。</p>
<p>访问权限不能比父类中被重写的方法的访问权限更低。例如：如果父类的一个方法被声明为 public，那么在子类中重写该方法就不能声明为 protected。</p>
<p>父类的成员方法只能被它的子类重写。</p>
<p>声明为 final 的方法不能被重写。</p>
<p>声明为 static 的方法不能被重写，但是能够被再次声明。</p>
<p>子类和父类在同一个包中，那么子类可以重写父类所有方法，除了声明为 private 和 final 的方法。</p>
<p>子类和父类不在同一个包中，那么子类只能够重写父类的声明为 public 和 protected 的非 final 方法。</p>
<p>重写的方法能够抛出任何非强制异常，无论被重写的方法是否抛出异常。但是，重写的方法不能抛出新的强制性异常，或者比被重写方法声明的更广泛的强制性异常，反之则可以。</p>
<p>构造方法不能被重写。</p>
<p>如果不能继承一个类，则不能重写该类的方法。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"动物可以移动"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"狗可以跑和走"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"狗可以吠叫"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDog</span><span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">Animal</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Animal 对象</span>
      <span class="token class-name">Animal</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Dog 对象</span>
 
      a<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 执行 Animal 类的方法</span>
      b<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//执行 Dog 类的方法</span>
      b<span class="token punctuation">.</span><span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//报错, 父类没有bark方法</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-4-2-super" tabindex="-1"><a class="header-anchor" href="#_5-4-2-super" aria-hidden="true">#</a> 5.4.2 Super</h4>
<p>当需要在子类中调用父类的被重写方法时，要使用 super 关键字。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"动物可以移动"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 应用super类的方法</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"狗可以跑和走"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDog</span><span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 
      <span class="token class-name">Animal</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Dog 对象</span>
      b<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//执行 Dog类的方法</span>
 
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-4-3-重载" tabindex="-1"><a class="header-anchor" href="#_5-4-3-重载" aria-hidden="true">#</a> 5.4.3 重载</h4>
<p>重载(overloading) 是在一个类里面，方法名字相同，而参数不同。返回类型可以相同也可以不同。</p>
<p>每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。</p>
<p>最常用的地方就是构造器的重载。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Overloading</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"test1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"test2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>   
 
    <span class="token comment">//以下两个参数类型顺序不同</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token class-name">String</span> s<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"test3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"returntest3"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>   
 
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span><span class="token keyword">int</span> a<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"test4"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"returntest4"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>   
 
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Overloading</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Overloading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        o<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">"test3"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"test4"</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-4-4-重载的规则" tabindex="-1"><a class="header-anchor" href="#_5-4-4-重载的规则" aria-hidden="true">#</a> 5.4.4 重载的规则</h4>
<p>被重载的方法必须改变参数列表(参数个数或类型不一样)；</p>
<p>被重载的方法可以改变返回类型；</p>
<p>被重载的方法可以改变访问修饰符；</p>
<p>被重载的方法可以声明新的或更广的检查异常；</p>
<p>方法能够在同一个类中或者在一个子类中被重载。</p>
<p>无法以返回值类型作为重载函数的区分标准。</p>
<h4 id="_5-4-5-重写与重载之间的区别" tabindex="-1"><a class="header-anchor" href="#_5-4-5-重写与重载之间的区别" aria-hidden="true">#</a> 5.4.5 重写与重载之间的区别</h4>
<table>
<thead>
<tr>
<th>区别点</th>
<th>重载方法</th>
<th>重写方法</th>
</tr>
</thead>
<tbody>
<tr>
<td>参数列表</td>
<td>必须修改</td>
<td>一定不能修改</td>
</tr>
<tr>
<td>返回类型</td>
<td>可以修改</td>
<td>一定不能修改</td>
</tr>
<tr>
<td>异常</td>
<td>可以修改</td>
<td>可以减少或删除，一定不能抛出新的或者更广的异常</td>
</tr>
<tr>
<td>访问</td>
<td>可以修改</td>
<td>一定不能做更严格的限制（可以降低限制）</td>
</tr>
</tbody>
</table>
<p><img src="@source/document/java后端/asset/javase-1636972125339.png" alt="" loading="lazy"></p>
<h3 id="_5-5-多态" tabindex="-1"><a class="header-anchor" href="#_5-5-多态" aria-hidden="true">#</a> 5.5 多态</h3>
<h4 id="_5-5-1-多态介绍" tabindex="-1"><a class="header-anchor" href="#_5-5-1-多态介绍" aria-hidden="true">#</a> 5.5.1 多态介绍</h4>
<p>多态是同一个行为具有多个不同表现形式或形态的能力。</p>
<p>多态就是同一个接口，使用不同的实例而执行不同操作。</p>
<h4 id="_5-5-2-多态的优点" tabindex="-1"><a class="header-anchor" href="#_5-5-2-多态的优点" aria-hidden="true">#</a> 5.5.2 多态的优点</h4>
<ul>
<li>消除类型之间的耦合关系</li>
<li>可替换性</li>
<li>可扩充性</li>
<li>接口性</li>
<li>灵活性</li>
<li>简化性</li>
</ul>
<h4 id="_5-5-3-多态存在的三个必要条件" tabindex="-1"><a class="header-anchor" href="#_5-5-3-多态存在的三个必要条件" aria-hidden="true">#</a> 5.5.3 多态存在的三个必要条件</h4>
<ul>
<li>继承</li>
<li>重写</li>
<li>父类引用指向子类对象：Parent p = new Child();</li>
</ul>
<p><img src="@source/document/java后端/asset/javase-1636972669937.png" alt="" loading="lazy"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Circle.draw()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Square.draw()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">class</span> <span class="token class-name">Triangle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Triangle.draw()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-6-抽象类" tabindex="-1"><a class="header-anchor" href="#_5-6-抽象类" aria-hidden="true">#</a> 5.6 抽象类</h3>
<p>在面向对象的概念中，所有的对象都是通过类来描绘的，但是反过来，并不是所有的类都是用来描绘对象的，如果一个类中没有包含足够的信息来描绘一个具体的对象，这样的类就是抽象类。</p>
<p>抽象类除了不能实例化对象之外，类的其它功能依然存在，成员变量、成员方法和构造方法的访问方式和普通类一样。</p>
<p>由于抽象类不能实例化对象，所以抽象类必须被继承，才能被使用。也是因为这个原因，通常在设计阶段决定要不要设计抽象类。</p>
<p>父类包含了子类集合的常见的方法，但是由于父类本身是抽象的，所以不能使用这些方法。</p>
<p>在 Java 中抽象类表示的是一种继承关系，一个类只能继承一个抽象类，而一个类却可以实现多个接口。</p>
<p><code v-pre>public abstract class Employee { // pass }</code></p>
<h3 id="_5-7-封装" tabindex="-1"><a class="header-anchor" href="#_5-7-封装" aria-hidden="true">#</a> 5.7 封装</h3>
<p>在面向对象程式设计方法中，封装（英语：Encapsulation）是指一种将抽象性函式接口的实现细节部分包装、隐藏起来的方法。</p>
<p>封装可以被认为是一个保护屏障，防止该类的代码和数据被外部类定义的代码随机访问。</p>
<p>要访问该类的代码和数据，必须通过严格的接口控制。</p>
<p>封装最主要的功能在于我们能修改自己的实现代码，而不用修改那些调用我们代码的程序片段。</p>
<p>适当的封装可以让程式码更容易理解与维护，也加强了程式码的安全性。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EncapTest</span><span class="token punctuation">{</span>
 
   <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
 
   <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
 
   <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> age<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span> <span class="token keyword">int</span> newAge<span class="token punctuation">)</span><span class="token punctuation">{</span>
      age <span class="token operator">=</span> newAge<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> newName<span class="token punctuation">)</span><span class="token punctuation">{</span>
      name <span class="token operator">=</span> newName<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setIdNum</span><span class="token punctuation">(</span> <span class="token class-name">String</span> newId<span class="token punctuation">)</span><span class="token punctuation">{</span>
      idNum <span class="token operator">=</span> newId<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-8-接口" tabindex="-1"><a class="header-anchor" href="#_5-8-接口" aria-hidden="true">#</a> 5.8 接口</h3>
<h4 id="_5-8-1-接口的介绍" tabindex="-1"><a class="header-anchor" href="#_5-8-1-接口的介绍" aria-hidden="true">#</a> 5.8.1 接口的介绍</h4>
<p>接口（英文：Interface），在JAVA编程语言中是一个抽象类型，是抽象方法的集合，接口通常以interface来声明。一个类通过继承接口的方式，从而来继承接口的抽象方法。</p>
<p>接口并不是类，编写接口的方式和类很相似，但是它们属于不同的概念。类描述对象的属性和方法。接口则包含类要实现的方法。</p>
<p>除非实现接口的类是抽象类，否则该类要定义接口中的所有方法。</p>
<p>接口无法被实例化，但是可以被实现。一个实现接口的类，必须实现接口内所描述的所有方法，否则就必须声明为抽象类。另外，在 Java 中，接口类型可用来声明一个变量，他们可以成为一个空指针，或是被绑定在一个以此接口实现的对象。</p>
<h4 id="_5-8-2-接口与类区别" tabindex="-1"><a class="header-anchor" href="#_5-8-2-接口与类区别" aria-hidden="true">#</a> 5.8.2 接口与类区别</h4>
<p>接口不能用于实例化对象。</p>
<p>接口没有构造方法。</p>
<p>接口中所有的方法必须是抽象方法，Java 8 之后 接口中可以使用 default 关键字修饰的非抽象方法。</p>
<p>接口不能包含成员变量，除了 static 和 final 变量。</p>
<p>接口不是被类继承了，而是要被类实现。</p>
<p>接口支持多继承。</p>
<h4 id="_5-8-3-接口与抽象类区别" tabindex="-1"><a class="header-anchor" href="#_5-8-3-接口与抽象类区别" aria-hidden="true">#</a> 5.8.3 接口与抽象类区别</h4>
<ul>
<li>抽象类中的方法可以有方法体，就是能实现方法的具体功能，但是接口中的方法不行。</li>
<li>抽象类中的成员变量可以是各种类型的，而接口中的成员变量只能是 public static final 类型的。</li>
<li>接口中不能含有静态代码块以及静态方法(用 static 修饰的方法)，而抽象类是可以有静态代码块和静态方法。</li>
<li>一个类只能继承一个抽象类，而一个类却可以实现多个接口。</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">NameOfInterface</span>
<span class="token punctuation">{</span>
   <span class="token comment">//任何类型 final, static 字段</span>
   <span class="token comment">//抽象方法</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-8-4-接口特性" tabindex="-1"><a class="header-anchor" href="#_5-8-4-接口特性" aria-hidden="true">#</a> 5.8.4 接口特性</h4>
<p>接口中每一个方法也是隐式抽象的,接口中的方法会被隐式的指定为 public abstract（只能是 public abstract，其他修饰符都会报错）。</p>
<p>接口中可以含有变量，但是接口中的变量会被隐式的指定为 public static final 变量（并且只能是 public，用 private 修饰会报编译错误）。</p>
<p>接口中的方法是不能在接口中实现的，只能由实现接口的类来实现接口中的方法。</p>
<p>注：JDK 1.8 以后，接口里可以有静态方法和方法体了。</p>
<p>注：JDK 1.8 以后，接口允许包含具体实现的方法，该方法称为&quot;默认方法&quot;，默认方法使用 default 关键字修饰。更多内容可参考 Java 8 默认方法。</p>
<p>注：JDK 1.9 以后，允许将方法定义为 private，使得某些复用的代码不会把方法暴露出去。更多内容可参考 Java 9 私有接口方法。</p>
<h3 id="_5-9-枚举" tabindex="-1"><a class="header-anchor" href="#_5-9-枚举" aria-hidden="true">#</a> 5.9 枚举</h3>
<p>Java 枚举是一个特殊的类，一般表示一组常量，比如一年的 4 个季节，一个年的 12 个月份，一个星期的 7 天，方向有东南西北等。</p>
<p>Java 枚举类使用 enum 关键字来定义，各个常量使用逗号 , 来分割。</p>
<p>例如定义一个颜色的枚举类。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">enum</span> <span class="token class-name">Color</span>
<span class="token punctuation">{</span>
    <span class="token constant">RED</span><span class="token punctuation">,</span> <span class="token constant">GREEN</span><span class="token punctuation">,</span> <span class="token constant">BLUE</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 执行输出结果</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Color</span> c1 <span class="token operator">=</span> <span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-10-package-包" tabindex="-1"><a class="header-anchor" href="#_5-10-package-包" aria-hidden="true">#</a> 5.10 package 包</h3>
<p>为了更好地组织类，Java 提供了包机制，用于区别类名的命名空间。</p>
<p>1、把功能相似或相关的类或接口组织在同一个包中，方便类的查找和使用。</p>
<p>2、如同文件夹一样，包也采用了树形目录的存储方式。同一个包中的类名字是不同的，不同的包中的类的名字是可以相同的，当同时调用两个不同包中相同类名的类时，应该加上包名加以区别。因此，包可以避免名字冲突。</p>
<p>3、包也限定了访问权限，拥有包访问权限的类才能访问某个包中的类。</p>
<h3 id="_5-11-异常处理" tabindex="-1"><a class="header-anchor" href="#_5-11-异常处理" aria-hidden="true">#</a> 5.11 异常处理</h3>
<h4 id="_5-11-1-异常的简介" tabindex="-1"><a class="header-anchor" href="#_5-11-1-异常的简介" aria-hidden="true">#</a> 5.11.1 异常的简介</h4>
<p>异常是程序中的一些错误，但并不是所有的错误都是异常，并且错误有时候是可以避免的。</p>
<p>比如说，你的代码少了一个分号，那么运行出来结果是提示是错误 java.lang.Error；如果你用System.out.println(11/0)，那么你是因为你用0做了除数，会抛出 java.lang.ArithmeticException 的异常。</p>
<h4 id="_5-11-2-异常的原因" tabindex="-1"><a class="header-anchor" href="#_5-11-2-异常的原因" aria-hidden="true">#</a> 5.11.2 异常的原因</h4>
<p>异常发生的原因有很多，通常包含以下几大类：</p>
<ul>
<li>用户输入了非法数据。</li>
<li>要打开的文件不存在。</li>
<li>网络通信时连接中断，或者JVM内存溢出。</li>
</ul>
<p><img src="@source/document/java后端/asset/javase-1636973788599.png" alt="" loading="lazy"></p>
<h4 id="_5-11-3-异常的层次" tabindex="-1"><a class="header-anchor" href="#_5-11-3-异常的层次" aria-hidden="true">#</a> 5.11.3 异常的层次</h4>
<ul>
<li>检查性异常：最具代表的检查性异常是用户错误或问题引起的异常，这是程序员无法预见的。例如要打开一个不存在文件时，一个异常就发生了，这些异常在编译时不能被简单地忽略。</li>
<li>运行时异常： 运行时异常是可能被程序员避免的异常。与检查性异常相反，运行时异常可以在编译时被忽略。</li>
<li>错误： 错误不是异常，而是脱离程序员控制的问题。错误在代码中通常被忽略。例如，当栈溢出时，一个错误就发生了，它们在编译也检查不到的。</li>
</ul>
<h4 id="_5-11-4-try-catch-捕获异常" tabindex="-1"><a class="header-anchor" href="#_5-11-4-try-catch-捕获异常" aria-hidden="true">#</a> 5.11.4 try catch 捕获异常</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">try</span><span class="token punctuation">{</span>
  <span class="token comment">// 程序代码</span>
<span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>异常类型<span class="token number">1</span> 异常的变量名<span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 程序代码</span>
<span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>异常类型<span class="token number">2</span> 异常的变量名<span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 程序代码</span>
<span class="token punctuation">}</span><span class="token keyword">finally</span><span class="token punctuation">{</span>
  <span class="token comment">// 程序代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-11-5-throws-抛出异常" tabindex="-1"><a class="header-anchor" href="#_5-11-5-throws-抛出异常" aria-hidden="true">#</a> 5.11.5 throws 抛出异常</h4>
<p>如果一个方法没有捕获到一个检查性异常，那么该方法必须使用 throws 关键字来声明。throws 关键字放在方法签名的尾部。</p>
<p>也可以使用 throw 关键字抛出一个异常，无论它是新实例化的还是刚捕获到的。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> className
<span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">withdraw</span><span class="token punctuation">(</span><span class="token keyword">double</span> amount<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">RemoteException</span><span class="token punctuation">,</span>
                              <span class="token class-name">InsufficientFundsException</span>
   <span class="token punctuation">{</span>
       <span class="token comment">// Method implementation</span>
   <span class="token punctuation">}</span>
   <span class="token comment">//Remainder of class definition</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第6章-数据结构" tabindex="-1"><a class="header-anchor" href="#第6章-数据结构" aria-hidden="true">#</a> 第6章 数据结构</h2>
<h3 id="_6-1-数据结构简介" tabindex="-1"><a class="header-anchor" href="#_6-1-数据结构简介" aria-hidden="true">#</a> 6.1 数据结构简介</h3>
<h4 id="_6-1-1-枚举-enumeration" tabindex="-1"><a class="header-anchor" href="#_6-1-1-枚举-enumeration" aria-hidden="true">#</a> 6.1.1 枚举（Enumeration）</h4>
<p>枚举（Enumeration）接口虽然它本身不属于数据结构,但它在其他数据结构的范畴里应用很广。 枚举（The Enumeration）接口定义了一种从数据结构中取回连续元素的方式。</p>
<p>例如，枚举定义了一个叫nextElement 的方法，该方法用来得到一个包含多元素的数据结构的下一个元素。</p>
<h4 id="_6-1-2-位集合-bitset" tabindex="-1"><a class="header-anchor" href="#_6-1-2-位集合-bitset" aria-hidden="true">#</a> 6.1.2 位集合（BitSet）</h4>
<p>位集合类实现了一组可以单独设置和清除的位或标志。</p>
<p>该类在处理一组布尔值的时候非常有用，你只需要给每个值赋值一&quot;位&quot;，然后对位进行适当的设置或清除，就可以对布尔值进行操作了。</p>
<h4 id="_6-1-3-向量-vector" tabindex="-1"><a class="header-anchor" href="#_6-1-3-向量-vector" aria-hidden="true">#</a> 6.1.3 向量（Vector）</h4>
<p>向量（Vector）类和传统数组非常相似，但是Vector的大小能根据需要动态的变化。</p>
<p>和数组一样，Vector对象的元素也能通过索引访问。</p>
<p>使用Vector类最主要的好处就是在创建对象的时候不必给对象指定大小，它的大小会根据需要动态的变化。</p>
<h4 id="_6-1-4-栈-stack" tabindex="-1"><a class="header-anchor" href="#_6-1-4-栈-stack" aria-hidden="true">#</a> 6.1.4 栈（Stack）</h4>
<p>栈（Stack）实现了一个后进先出（LIFO）的数据结构。</p>
<p>你可以把栈理解为对象的垂直分布的栈，当你添加一个新元素时，就将新元素放在其他元素的顶部。</p>
<p>当你从栈中取元素的时候，就从栈顶取一个元素。换句话说，最后进栈的元素最先被取出。</p>
<h4 id="_6-1-5-字典-dictionary" tabindex="-1"><a class="header-anchor" href="#_6-1-5-字典-dictionary" aria-hidden="true">#</a> 6.1.5 字典（Dictionary）</h4>
<p>字典（Dictionary） 类是一个抽象类，它定义了键映射到值的数据结构。</p>
<p>当你想要通过特定的键而不是整数索引来访问数据的时候，这时候应该使用Dictionary。</p>
<p>由于Dictionary类是抽象类，所以它只提供了键映射到值的数据结构，而没有提供特定的实现。</p>
<h4 id="_6-1-6-哈希表-hashtable" tabindex="-1"><a class="header-anchor" href="#_6-1-6-哈希表-hashtable" aria-hidden="true">#</a> 6.1.6 哈希表（Hashtable）</h4>
<p>Hashtable类提供了一种在用户定义键结构的基础上来组织数据的手段。</p>
<p>例如，在地址列表的哈希表中，你可以根据邮政编码作为键来存储和排序数据，而不是通过人名。</p>
<p>哈希表键的具体含义完全取决于哈希表的使用情景和它包含的数据。</p>
<h4 id="_6-1-7-属性-properties" tabindex="-1"><a class="header-anchor" href="#_6-1-7-属性-properties" aria-hidden="true">#</a> 6.1.7 属性（Properties）</h4>
<p>Properties 继承于 Hashtable.Properties 类表示了一个持久的属性集.属性列表中每个键及其对应值都是一个字符串。</p>
<p>Properties 类被许多Java类使用。例如，在获取环境变量时它就作为System.getProperties()方法的返回值。</p>
<h3 id="_6-2-集合框架" tabindex="-1"><a class="header-anchor" href="#_6-2-集合框架" aria-hidden="true">#</a> 6.2 集合框架</h3>
<p>集合框架是一个用来代表和操纵集合的统一架构。所有的集合框架都包含如下内容：</p>
<p>接口：是代表集合的抽象数据类型。例如 Collection、List、Set、Map 等。之所以定义多个接口，是为了以不同的方式操作集合对象</p>
<p>实现（类）：是集合接口的具体实现。从本质上讲，它们是可重复使用的数据结构，例如：ArrayList、LinkedList、HashSet、HashMap。</p>
<p>算法：是实现集合接口的对象里的方法执行的一些有用的计算，例如：搜索和排序。这些算法被称为多态，那是因为相同的方法可以在相似的接口上有着不同的实现。</p>
<p>除了集合，该框架也定义了几个 Map 接口和类。Map 里存储的是键/值对。尽管 Map 不是集合，但是它们完全整合在集合中。</p>
<p>集合框架体系如图所示
<img src="@source/document/java后端/asset/javase-1636975046379.png" alt="" loading="lazy"></p>
<p>Java 集合框架提供了一套性能优良，使用方便的接口和类，java集合框架位于java.util包中， 所以当使用集合框架的时候需要进行导包。</p>
<h3 id="_6-3-动态数组" tabindex="-1"><a class="header-anchor" href="#_6-3-动态数组" aria-hidden="true">#</a> 6.3 动态数组</h3>
<p>ArrayList 类是一个可以动态修改的数组，与普通数组的区别就是它是没有固定大小的限制，我们可以添加或删除元素。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RunoobTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> sites <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sites<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"Google"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sites<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"Runoob"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sites<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"Taobao"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sites<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"Weibo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sites<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 访问第二个元素</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-链表" tabindex="-1"><a class="header-anchor" href="#_6-4-链表" aria-hidden="true">#</a> 6.4 链表</h3>
<p>链表（Linked list）是一种常见的基础数据结构，是一种线性表，但是并不会按线性的顺序存储数据，而是在每一个节点里存到下一个节点的地址。</p>
<p>链表可分为单向链表和双向链表。</p>
<p>一个单向链表包含两个值: 当前节点的值和一个指向下一个节点的链接。</p>
<p>一个双向链表有三个整数值: 数值、向后的节点链接、向前的节点链接。</p>
<p>Java LinkedList（链表） 类似于 ArrayList，是一种常用的数据容器。</p>
<p>与 ArrayList 相比，LinkedList 的增加和删除的操作效率更高，而查找和修改的操作效率较低。</p>
<h3 id="_6-5-hashset" tabindex="-1"><a class="header-anchor" href="#_6-5-hashset" aria-hidden="true">#</a> 6.5 HashSet</h3>
<p>HashSet 基于 HashMap 来实现的，是一个不允许有重复元素的集合。</p>
<p>HashSet 允许有 null 值。</p>
<p>HashSet 是无序的，即不会记录插入的顺序。</p>
<p>HashSet 不是线程安全的， 如果多个线程尝试同时修改 HashSet，则最终结果是不确定的。 您必须在多线程访问时显式同步对 HashSet 的并发访问。</p>
<p>HashSet 实现了 Set 接口。</p>
<h3 id="_6-6-hashmap" tabindex="-1"><a class="header-anchor" href="#_6-6-hashmap" aria-hidden="true">#</a> 6.6 HashMap</h3>
<p>HashMap 是一个散列表，它存储的内容是键值对(key-value)映射。</p>
<p>HashMap 实现了 Map 接口，根据键的 HashCode 值存储数据，具有很快的访问速度，最多允许一条记录的键为 null，不支持线程同步。</p>
<p>HashMap 是无序的，即不会记录插入的顺序。</p>
<p><img src="@source/document/java后端/asset/javase-1636975489932.png" alt="" loading="lazy"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token class-name">Sites</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 添加键值对</span>
        <span class="token class-name">Sites</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"Google"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Sites</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"Runoob"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Sites</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">"Taobao"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Sites</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">"Zhihu"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-7-迭代器" tabindex="-1"><a class="header-anchor" href="#_6-7-迭代器" aria-hidden="true">#</a> 6.7 迭代器</h3>
<p>Java Iterator（迭代器）不是一个集合，它是一种用于访问集合的方法，可用于迭代 ArrayList 和 HashSet 等集合。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Iterator</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RunoobTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// 创建集合</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> sites <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sites<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"Google"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sites<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"Runoob"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sites<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"Taobao"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sites<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"Zhihu"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取迭代器</span>
        <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> it <span class="token operator">=</span> sites<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 输出集合中的所有元素</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-8-object" tabindex="-1"><a class="header-anchor" href="#_6-8-object" aria-hidden="true">#</a> 6.8 Object</h3>
<p>Java Object 类是所有类的父类，也就是说 Java 的所有类都继承了 Object，子类可以使用 Object 的所有方法。</p>
<p><img src="@source/document/java后端/asset/javase-1636975753161.png" alt="" loading="lazy"></p>
<p>显示继承:</p>
<p><code v-pre>public class Runoob extends Object{ }</code></p>
<p>隐式继承:</p>
<p><code v-pre>public class Runoob { }</code></p>
<h3 id="_6-9-泛型" tabindex="-1"><a class="header-anchor" href="#_6-9-泛型" aria-hidden="true">#</a> 6.9 泛型</h3>
<p>Java 泛型（generics）是 JDK 5 中引入的一个新特性, 泛型提供了编译时类型安全检测机制，该机制允许程序员在编译时检测到非法的类型。</p>
<p>泛型的本质是参数化类型，也就是说所操作的数据类型被指定为一个参数。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GenericTest</span> <span class="token punctuation">{</span>
     
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> name <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> age <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Number</span><span class="token punctuation">></span></span> number <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Number</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        name<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"icon"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        age<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        number<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">314</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">//getUperNumber(name);//1</span>
        <span class="token function">getUperNumber</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//2</span>
        <span class="token function">getUperNumber</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//3</span>
       
   <span class="token punctuation">}</span>
 
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"data :"</span> <span class="token operator">+</span> data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">getUperNumber</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Number</span><span class="token punctuation">></span></span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"data :"</span> <span class="token operator">+</span> data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-10-序列化" tabindex="-1"><a class="header-anchor" href="#_6-10-序列化" aria-hidden="true">#</a> 6.10 序列化</h3>
<p>Java 提供了一种对象序列化的机制，该机制中，一个对象可以被表示为一个字节序列，该字节序列包括该对象的数据、有关对象的类型的信息和存储在对象中数据的类型。</p>
<p>将序列化对象写入文件之后，可以从文件中读取出来，并且对它进行反序列化，也就是说，对象的类型信息、对象的数据，还有对象中的数据类型可以用来在内存中新建对象。</p>
<p>整个过程都是 Java 虚拟机（JVM）独立的，也就是说，在一个平台上序列化的对象可以在另一个完全不同的平台上反序列化该对象。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span>
<span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
   <span class="token keyword">public</span> <span class="token class-name">String</span> address<span class="token punctuation">;</span>
   <span class="token keyword">public</span> <span class="token keyword">transient</span> <span class="token keyword">int</span> <span class="token constant">SSN</span><span class="token punctuation">;</span>
   <span class="token keyword">public</span> <span class="token keyword">int</span> number<span class="token punctuation">;</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">mailCheck</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Mailing a check to "</span> <span class="token operator">+</span> name
                           <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> address<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-11-文档注释" tabindex="-1"><a class="header-anchor" href="#_6-11-文档注释" aria-hidden="true">#</a> 6.11 文档注释</h3>
<p>Java 支持三种注释方式。前两种分别是 // 和 /* <em>/，第三种被称作说明注释，它以 /</em>* 开始，以 */结束。</p>
<p>说明注释允许你在程序中嵌入关于程序的信息。你可以使用 javadoc 工具软件来生成信息，并输出到HTML文件中。</p>
<p>说明注释，使你更加方便的记录你的程序信息。</p>
<p>javadoc 工具将你 Java 程序的源代码作为输入，输出一些包含你程序注释的HTML文件。</p>
<p>每一个类的信息将在独自的HTML文件里。javadoc 也可以输出继承的树形结构和索引。</p>
<p>由于 javadoc 的实现不同，工作也可能不同，你需要检查你的 Java 开发系统的版本等细节，选择合适的 Javadoc 版本。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
* 这个类演示了文档注释
* <span class="token keyword">@author</span> Ayan Amhed
* <span class="token keyword">@version</span> 1.2
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第7章-io流" tabindex="-1"><a class="header-anchor" href="#第7章-io流" aria-hidden="true">#</a> 第7章 IO流</h2>
<h3 id="_7-1-io流简介" tabindex="-1"><a class="header-anchor" href="#_7-1-io流简介" aria-hidden="true">#</a> 7.1 IO流简介</h3>
<p>输入: 让程序从外部系统读数据</p>
<p>输出: 程序输出数据写到外部系统</p>
<p>数据源: 提供数据的原始媒介</p>
<p>流: 一连串连续动态的数据集合</p>
<h3 id="_7-2-流的分类" tabindex="-1"><a class="header-anchor" href="#_7-2-流的分类" aria-hidden="true">#</a> 7.2 流的分类</h3>
<p>四大IO抽象类: 字节流 InputSteam / OutputStream  字符流 Reader / Writer</p>
<p>节点流: 可以直接从数据源读写数据</p>
<p>处理流: 不直接连接到数据源, 也叫包装流, 如BufferedInputStream</p>
<h3 id="_7-3-流的体系" tabindex="-1"><a class="header-anchor" href="#_7-3-流的体系" aria-hidden="true">#</a> 7.3 流的体系</h3>
<p>InputSream / OutputStream 字节流的抽象类</p>
<p>Reader / Writer 字符流的抽象类</p>
<p>FileInputStream / FileOutputStream 节点流 以字节为单位直接操作文件</p>
<p>ByteArrayInputStream / ByteArrayOutputStream 节点流 以字节为单位直接操作字节数组对象</p>
<p>ObjectInputStream / ObjectOutputStream 处理流 以字节为单位直接操作对象</p>
<p>DataInputStream / DataOutputStream 处理流 以字节为单位直接操作基本数据类型与字符串类型</p>
<p>FileReader / FileWriter 节点流 以字符为单位直接操作基本数据类型与字符串类型</p>
<p>BufferedReader / BufferedWriter 处理流 增加缓存功能</p>
<p>BufferedInputSteram / BufferedOutputStream 处理流 增加缓存功能</p>
<p>InputStreamReader / OutputStreamWriter 处理流 将字节流对象转为成字符流对象</p>
<p>PrintStream 处理流 包装OutputStream 方便输出字符</p>
<h3 id="_7-4-入门案例" tabindex="-1"><a class="header-anchor" href="#_7-4-入门案例" aria-hidden="true">#</a> 7.4 入门案例</h3>
<p>文件字节输入流</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>company<span class="token punctuation">.</span></span>字节输入流<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileNotFoundException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FirstTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">"/Users/wangle/Project/IO/a.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>temp <span class="token operator">=</span> fis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>

                sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>fis<span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    fis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-5-file类" tabindex="-1"><a class="header-anchor" href="#_7-5-file类" aria-hidden="true">#</a> 7.5 File类</h3>
<ul>
<li>
<p>作用: 获取文件或目录, 以及对其创建, 删除等功能</p>
</li>
<li>
<p>操作文件方法</p>
</li>
</ul>
<p>createNewFile 创建新文件</p>
<p>delete 从磁盘上删除</p>
<p>exists 查询是否存在</p>
<p>getAbsolutePath 获取文件绝对路径</p>
<p>getPath 获取文件相对路径</p>
<p>getName 获取文件名</p>
<p>isFile 判断是否为文件</p>
<p>length 查看文件中的字节数</p>
<p>isHidden 查看是否为隐藏文件</p>
<ul>
<li>操作目录方法</li>
</ul>
<p>exists 查询目录是否存在</p>
<p>isDirectory 判断是否为目录</p>
<p>mkdir 创建目录</p>
<p>getParentFile 获取当前目录的父目录</p>
<p>list 返回字符串数组 包含目录中的文件和目录的路径名</p>
<p>listFiles 返回File数组 包含目录中的文件</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>company<span class="token punctuation">.</span></span><span class="token class-name">File</span>类<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token comment">//        test_file();</span>
        <span class="token function">test_dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span>  <span class="token function">test_file</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"/Users/wangle/Project/IO/aa.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//创建文件</span>
            file<span class="token punctuation">.</span><span class="token function">createNewFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span>  <span class="token function">test_dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//mkdirs方法</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"/Users/wangle/Project/IO"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//mkdir 只能创建单级目录 mkdirs可以创建多级目录</span>
        file<span class="token punctuation">.</span><span class="token function">mkdirs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//list方法</span>
        <span class="token class-name">File</span> file2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"/Users/wangle/Project/IO"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> temp <span class="token operator">:</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"--------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//listFiles方法</span>
        <span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr2 <span class="token operator">=</span> file2<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">File</span> temp <span class="token operator">:</span> arr2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-6-文件字节流" tabindex="-1"><a class="header-anchor" href="#_7-6-文件字节流" aria-hidden="true">#</a> 7.6 文件字节流</h3>
<p>创建缓冲数组提高读写效率 , 必须是2的次方, 一般用1024 2048等</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>company<span class="token punctuation">.</span></span>字节输入流<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileNotFoundException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FirstTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">readFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">readFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">"/Users/wangle/Project/IO/a.jpg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">"/Users/wangle/Project/IO/b.jpg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//创建缓冲区</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

            <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>temp <span class="token operator">=</span> fis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                fos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">//将数据从内存中写入到磁盘里</span>
            fos<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>fis<span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    fis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>fos<span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    fos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-7-字节缓冲流" tabindex="-1"><a class="header-anchor" href="#_7-7-字节缓冲流" aria-hidden="true">#</a> 7.7 字节缓冲流</h3>
<p>buffer缓冲流自动创建了缓冲数组 默认大小为8192</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>company<span class="token punctuation">.</span></span>字节输入流<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FirstTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">readFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">readFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">BufferedInputStream</span> bis <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">BufferedOutputStream</span> bos <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>



        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">"/Users/wangle/Project/IO/a.jpg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            bis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span>fis<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//默认缓冲区大小为8192</span>
            fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">"/Users/wangle/Project/IO/b.jpg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            bos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span>fos<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>temp <span class="token operator">=</span> bis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                bos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">//将数据从内存中写入到磁盘里</span>
            bos<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>bis<span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    bis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>fis<span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    fis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>bos<span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    bos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>fos<span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    fos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-8-字节数组流" tabindex="-1"><a class="header-anchor" href="#_7-8-字节数组流" aria-hidden="true">#</a> 7.8 字节数组流</h3>
<p>字节数组流用于在流和数组之间转化</p>
<p>ByteArrayInputStream 将字节流读取到数组</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>company<span class="token punctuation">.</span></span>字节数组流<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">ByteArrayInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ByteTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token string">"abcdefghijklmnopqrstuvwxyzABCDEF"</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">ByteArrayInputStream</span> bais <span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            bais <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayInputStream</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>temp <span class="token operator">=</span> bais<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span><span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                bais<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ByteArrayOutputStream 将字节流写到数组</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>company<span class="token punctuation">.</span></span>字节数组流<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">ByteArrayInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">ByteArrayOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ByteDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token string">"abcdefghijklmnopqrstuvwxyzABCDEF"</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ByteArrayOutputStream</span> baos <span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            baos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            baos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token char">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            baos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token char">'b'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            baos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token char">'c'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span>  baos<span class="token punctuation">.</span><span class="token function">toByteArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                baos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-9-数据流" tabindex="-1"><a class="header-anchor" href="#_7-9-数据流" aria-hidden="true">#</a> 7.9 数据流</h3>
<p>不需要复杂的流的类型转换了</p>
<p>注意读取的顺序必须和写入的顺序一致</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>company<span class="token punctuation">.</span></span>数据流<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//数据输出流</span>
        <span class="token class-name">DataOutputStream</span> dos <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token comment">//数据输入流</span>
        <span class="token class-name">DataInputStream</span> dis <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>


        <span class="token keyword">try</span> <span class="token punctuation">{</span>

            <span class="token comment">//写入</span>
            dos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataOutputStream</span><span class="token punctuation">(</span>
                    <span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span>
                            <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">"/Users/wangle/Project/IO/a.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

            <span class="token punctuation">)</span><span class="token punctuation">;</span>

            dos<span class="token punctuation">.</span><span class="token function">writeChar</span><span class="token punctuation">(</span><span class="token char">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            dos<span class="token punctuation">.</span><span class="token function">writeInt</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            dos<span class="token punctuation">.</span><span class="token function">writeUTF</span><span class="token punctuation">(</span><span class="token string">"你好哥哥"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            dos<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


            <span class="token comment">//读取</span>
            dis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataInputStream</span><span class="token punctuation">(</span>
                    <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span>
                            <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">"/Users/wangle/Project/IO/a.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dis<span class="token punctuation">.</span><span class="token function">readChar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dis<span class="token punctuation">.</span><span class="token function">readInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dis<span class="token punctuation">.</span><span class="token function">readUTF</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token punctuation">}</span><span class="token keyword">finally</span><span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>dos<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    dos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>dis<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    dis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-10-对象流" tabindex="-1"><a class="header-anchor" href="#_7-10-对象流" aria-hidden="true">#</a> 7.10 对象流</h3>
<p>将java对象从程序中序列化持久存储到文件里, 并从文件中反序列化到程序中</p>
<p>注意要实现Serializable接口</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>company<span class="token punctuation">.</span></span>对象流<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ObjectDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ObjectOutputStream</span> oos <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">ObjectInputStream</span> ois <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>

            <span class="token comment">//写入</span>
            oos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">"/Users/wangle/Project/IO/object.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Users</span> users <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Users</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">"old"</span><span class="token punctuation">,</span><span class="token string">"lao"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            oos<span class="token punctuation">.</span><span class="token function">writeObject</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span><span class="token punctuation">;</span>
            oos<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//读取</span>
            ois <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">"/Users/wangle/Project/IO/object.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Users</span> user2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Users</span><span class="token punctuation">)</span>ois<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>oos<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    oos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">if</span><span class="token punctuation">(</span>ois<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    ois<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-11-随机访问流" tabindex="-1"><a class="header-anchor" href="#_7-11-随机访问流" aria-hidden="true">#</a> 7.11 随机访问流</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>company<span class="token punctuation">.</span></span>随机访问流<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">RandomAccessFile</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RandomDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">RandomAccessFile</span> raf <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//写入数据</span>
            raf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RandomAccessFile</span><span class="token punctuation">(</span><span class="token string">"/Users/wangle/Project/IO/c.txt"</span><span class="token punctuation">,</span><span class="token string">"rw"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">70</span><span class="token punctuation">,</span><span class="token number">80</span><span class="token punctuation">,</span><span class="token number">90</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                raf<span class="token punctuation">.</span><span class="token function">writeInt</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">//移动指针位置 读取指定位置元素</span>
            raf<span class="token punctuation">.</span><span class="token function">seek</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"读取指定位置元素"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>raf<span class="token punctuation">.</span><span class="token function">readInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            
            <span class="token comment">//读取所有奇数索引数据</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"读取奇数索引元素"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">;</span> i<span class="token operator">+=</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                raf<span class="token punctuation">.</span><span class="token function">seek</span><span class="token punctuation">(</span>i<span class="token operator">*</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>raf<span class="token punctuation">.</span><span class="token function">readInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            

            <span class="token comment">//替换第三个数据  0-3 4-7 8-11</span>
            raf<span class="token punctuation">.</span><span class="token function">seek</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            raf<span class="token punctuation">.</span><span class="token function">writeInt</span><span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"替换后数组"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                raf<span class="token punctuation">.</span><span class="token function">seek</span><span class="token punctuation">(</span>i<span class="token operator">*</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>raf<span class="token punctuation">.</span><span class="token function">readInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token operator">!=</span> raf<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    raf<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
