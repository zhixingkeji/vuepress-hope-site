<template><div><h2 id="第1章-七大设计原则" tabindex="-1"><a class="header-anchor" href="#第1章-七大设计原则" aria-hidden="true">#</a> 第1章 七大设计原则</h2>
<h3 id="_1-1-开闭原则" tabindex="-1"><a class="header-anchor" href="#_1-1-开闭原则" aria-hidden="true">#</a> 1.1 开闭原则</h3>
<p>开闭原则就是说对扩展开放，对修改关闭。</p>
<p>当应用的需求改变时，在不修改软件实体的源代码或者二进制代码的前提下，可以扩展模块的功能，使其满足新的需求。</p>
<p>所以一句话概括就是：为了使程序的扩展性好，易于维护和升级。想要达到这样的效果，我们需要使用接口和抽象类。</p>
<h3 id="_1-2-依赖倒置原则" tabindex="-1"><a class="header-anchor" href="#_1-2-依赖倒置原则" aria-hidden="true">#</a> 1.2 依赖倒置原则</h3>
<p>针对接口编程，依赖于抽象而不依赖于具体。</p>
<p>高层模块不应该依赖低层模块，两者都应该依赖其抽象；抽象不应该依赖细节，细节应该依赖抽象</p>
<h3 id="_1-3-单一职责原则" tabindex="-1"><a class="header-anchor" href="#_1-3-单一职责原则" aria-hidden="true">#</a> 1.3 单一职责原则</h3>
<p>一个类只负责一个功能领域中相应的职责，或者可以定义为：就一个类而言，应该只有一个引起它变化的原因。</p>
<h3 id="_1-4-接口隔离原则" tabindex="-1"><a class="header-anchor" href="#_1-4-接口隔离原则" aria-hidden="true">#</a> 1.4 接口隔离原则</h3>
<p>使用多个隔离的接口，比使用单个接口要好。还是一个降低类之间的耦合度的意思。</p>
<h3 id="_1-5-迪米特法则" tabindex="-1"><a class="header-anchor" href="#_1-5-迪米特法则" aria-hidden="true">#</a> 1.5 迪米特法则</h3>
<p>一个实体应当尽量少的与其他实体之间发生相互作用，使得系统功能模块相对独立。</p>
<h3 id="_1-6-里氏替换原则" tabindex="-1"><a class="header-anchor" href="#_1-6-里氏替换原则" aria-hidden="true">#</a> 1.6 里氏替换原则</h3>
<p>子类可以扩展父类的功能，但不能改变父类原有的功能。也就是说：子类继承父类时，除添加新的方法完成新增功能外，尽量不要重写父类的方法。</p>
<p>任何基类可以出现的地方，子类一定可以出现。 LSP是继承复用的基石，只有当衍生类可以替换掉基类，软件单位的功能不受到影响时，基类才能真正被复用，而衍生类也能够在基类的基础上增加新的行为。里氏代换原则是对“开-闭”原则的补充。实现“开-闭”原则的关键步骤就是抽象化。而基类与子类的继承关系就是抽象化的具体实现，所以里氏代换原则是对实现抽象化的具体步骤的规范。</p>
<h3 id="_1-7-合成复用原则" tabindex="-1"><a class="header-anchor" href="#_1-7-合成复用原则" aria-hidden="true">#</a> 1.7 合成复用原则</h3>
<p>合成复用原则，要求在软件复用时，要先尽量使用组合或者聚合等关联关系实现，其次才考虑使用继承。也就是在一个新对象里通过关联的方式使用已有对象的一些方法和功能。</p>
<h3 id="_1-8-总结" tabindex="-1"><a class="header-anchor" href="#_1-8-总结" aria-hidden="true">#</a> 1.8 总结</h3>
<table>
<thead>
<tr>
<th>设计原则</th>
<th>归纳</th>
<th>目的</th>
</tr>
</thead>
<tbody>
<tr>
<td>开闭原则</td>
<td>对扩展开放，对修改关闭</td>
<td>降低维护带来的新风险</td>
</tr>
<tr>
<td>依赖倒置原则</td>
<td>高层不应该依赖低层，要面向接口编程</td>
<td>更利于代码结构的升级扩展</td>
</tr>
<tr>
<td>单一职责原则</td>
<td>一个类只干一件事，实现类要单一</td>
<td>便于理解，提高代码的可读性</td>
</tr>
<tr>
<td>接口隔离原则</td>
<td>一个接口只干一件事，接口要精简单一</td>
<td>功能解耦，高聚合、低耦合</td>
</tr>
<tr>
<td>迪米特法则</td>
<td>不该知道的不要知道，一个类应该保持对其它对象最少的了解，降低耦合度</td>
<td>只和朋友交流，不和陌生人说话，减少代码臃肿</td>
</tr>
<tr>
<td>里氏替换原则</td>
<td>不要破坏继承体系，子类重写方法功能发生改变，不应该影响父类方法的含义</td>
<td>防止继承泛滥</td>
</tr>
<tr>
<td>合成复用原则</td>
<td>尽量使用组合或者聚合关系实现代码复用，少使用继承</td>
<td>降低代码耦合</td>
</tr>
</tbody>
</table>
<h2 id="第2章-创建型设计模式" tabindex="-1"><a class="header-anchor" href="#第2章-创建型设计模式" aria-hidden="true">#</a> 第2章 创建型设计模式</h2>
<p>创建型模式的主要关注点是“怎样创建对象？”，它的主要特点是“将对象的创建与使用分离”。这样可以降低系统的耦合度，使用者不需要关注对象的创建细节，对象的创建由相关的工厂来完成。就像我们去商场购买商品时，不需要知道商品是怎么生产出来一样，因为它们由专门的厂商生产。</p>
<p>除了工厂方法模式属于类创建型模式，其他的全部属于对象创建型模式。</p>
<h3 id="_2-1-简单工厂模式" tabindex="-1"><a class="header-anchor" href="#_2-1-简单工厂模式" aria-hidden="true">#</a> 2.1 简单工厂模式</h3>
<h4 id="_2-1-1-简单工厂模式的定义和特点" tabindex="-1"><a class="header-anchor" href="#_2-1-1-简单工厂模式的定义和特点" aria-hidden="true">#</a> 2.1.1 简单工厂模式的定义和特点</h4>
<h6 id="工厂模式的定义" tabindex="-1"><a class="header-anchor" href="#工厂模式的定义" aria-hidden="true">#</a> 工厂模式的定义：</h6>
<p>定义一个创建产品对象的工厂接口，将产品对象的实际创建工作推迟到具体子工厂类当中。这满足创建型模式中所要求的“创建与使用相分离”的特点。</p>
<p>简单工厂模式每增加一个产品就要增加一个具体产品类和一个对应的具体工厂类，这增加了系统的复杂度，违背了“开闭原则”。</p>
<p>“工厂方法模式”是对简单工厂模式的进一步抽象化，其好处是可以使系统在不修改原来代码的情况下引进新的产品，即满足开闭原则。</p>
<h4 id="_2-1-2-简单工厂模式的优点和缺点" tabindex="-1"><a class="header-anchor" href="#_2-1-2-简单工厂模式的优点和缺点" aria-hidden="true">#</a> 2.1.2 简单工厂模式的优点和缺点</h4>
<h6 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点：</h6>
<ol>
<li>工厂类包含必要的逻辑判断，可以决定在什么时候创建哪一个产品的实例。客户端可以免除直接创建产品对象的职责，很方便的创建出相应的产品。工厂和产品的职责区分明确。</li>
<li>客户端无需知道所创建具体产品的类名，只需知道参数即可。</li>
<li>也可以引入配置文件，在不修改客户端代码的情况下更换和添加新的具体产品类。</li>
</ol>
<h6 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点：</h6>
<ol>
<li>简单工厂模式的工厂类单一，负责所有产品的创建，职责过重，一旦异常，整个系统将受影响。且工厂类代码会非常臃肿，违背高聚合原则。</li>
<li>使用简单工厂模式会增加系统中类的个数（引入新的工厂类），增加系统的复杂度和理解难度</li>
<li>系统扩展困难，一旦增加新产品不得不修改工厂逻辑，在产品类型较多时，可能造成逻辑过于复杂</li>
<li>简单工厂模式使用了 static 工厂方法，造成工厂角色无法形成基于继承的等级结构。</li>
</ol>
<h4 id="_2-1-3-简单工厂模式的应用场景" tabindex="-1"><a class="header-anchor" href="#_2-1-3-简单工厂模式的应用场景" aria-hidden="true">#</a> 2.1.3 简单工厂模式的应用场景</h4>
<p>对于产品种类相对较少的情况，考虑使用简单工厂模式。使用简单工厂模式的客户端只需要传入工厂类的参数，不需要关心如何创建对象的逻辑，可以很方便地创建所需产品。</p>
<h4 id="_2-1-4-简单工厂模式的结构与实现" tabindex="-1"><a class="header-anchor" href="#_2-1-4-简单工厂模式的结构与实现" aria-hidden="true">#</a> 2.1.4 简单工厂模式的结构与实现</h4>
<h6 id="简单工厂模式的主要角色如下" tabindex="-1"><a class="header-anchor" href="#简单工厂模式的主要角色如下" aria-hidden="true">#</a> 简单工厂模式的主要角色如下：</h6>
<ul>
<li>简单工厂（SimpleFactory）：是简单工厂模式的核心，负责实现创建所有实例的内部逻辑。工厂类的创建产品类的方法可以被外界直接调用，创建所需的产品对象。</li>
<li>抽象产品（Product）：是简单工厂创建的所有对象的父类，负责描述所有实例共有的公共接口。</li>
<li>具体产品（ConcreteProduct）：是简单工厂模式的创建目标。</li>
</ul>
<p><img src="http://c.biancheng.net/uploads/allimg/200908/5-200ZQ64244445.png" alt="简单工厂模式的结构图" loading="lazy"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//抽象产品</span>
    <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
        <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//具体产品：ProductA</span>
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteProduct1</span> <span class="token keyword">implements</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"具体产品1显示..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//具体产品：ProductB</span>
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteProduct2</span> <span class="token keyword">implements</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"具体产品2显示..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Const</span> <span class="token punctuation">{</span>
        <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">PRODUCT_A</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">PRODUCT_B</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">PRODUCT_C</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SimpleFactory</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Product</span> <span class="token function">makeProduct</span><span class="token punctuation">(</span><span class="token keyword">int</span> kind<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">switch</span> <span class="token punctuation">(</span>kind<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">case</span> <span class="token class-name">Const</span><span class="token punctuation">.</span><span class="token constant">PRODUCT_A</span><span class="token operator">:</span>
                    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteProduct1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token class-name">Const</span><span class="token punctuation">.</span><span class="token constant">PRODUCT_B</span><span class="token operator">:</span>
                    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteProduct2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-5-简单工厂模式的扩展" tabindex="-1"><a class="header-anchor" href="#_2-1-5-简单工厂模式的扩展" aria-hidden="true">#</a> 2.1.5 简单工厂模式的扩展</h4>
<h3 id="_2-3-工厂方法模式" tabindex="-1"><a class="header-anchor" href="#_2-3-工厂方法模式" aria-hidden="true">#</a> 2.3 工厂方法模式</h3>
<h4 id="_2-3-1-工厂方法模式的定义和特点" tabindex="-1"><a class="header-anchor" href="#_2-3-1-工厂方法模式的定义和特点" aria-hidden="true">#</a> 2.3.1 工厂方法模式的定义和特点</h4>
<p>“工厂方法模式”是对简单工厂模式的进一步抽象化，其好处是可以使系统在不修改原来代码的情况下引进新的产品，即满足开闭原则。</p>
<h4 id="_2-3-2-工厂方法模式的优点和缺点" tabindex="-1"><a class="header-anchor" href="#_2-3-2-工厂方法模式的优点和缺点" aria-hidden="true">#</a> 2.3.2 工厂方法模式的优点和缺点</h4>
<h6 id="优点-1" tabindex="-1"><a class="header-anchor" href="#优点-1" aria-hidden="true">#</a> 优点：</h6>
<ul>
<li>用户只需要知道具体工厂的名称就可得到所要的产品，无须知道产品的具体创建过程。</li>
<li>灵活性增强，对于新产品的创建，只需多写一个相应的工厂类。</li>
<li>典型的解耦框架。高层模块只需要知道产品的抽象类，无须关心其他实现类，满足迪米特法则、依赖倒置原则和里氏替换原则。</li>
</ul>
<h6 id="缺点-1" tabindex="-1"><a class="header-anchor" href="#缺点-1" aria-hidden="true">#</a> 缺点：</h6>
<ul>
<li>类的个数容易过多，增加复杂度</li>
<li>增加了系统的抽象性和理解难度</li>
<li>抽象产品只能生产一种产品，此弊端可使用抽象工厂模式解决。</li>
</ul>
<h4 id="_2-3-3-工厂方法模式的应用场景" tabindex="-1"><a class="header-anchor" href="#_2-3-3-工厂方法模式的应用场景" aria-hidden="true">#</a> 2.3.3 工厂方法模式的应用场景</h4>
<ul>
<li>客户只知道创建产品的工厂名，而不知道具体的产品名。如 TCL 电视工厂、海信电视工厂等。</li>
<li>创建对象的任务由多个具体子工厂中的某一个完成，而抽象工厂只提供创建产品的接口。</li>
<li>客户不关心创建产品的细节，只关心产品的品牌</li>
</ul>
<h4 id="_2-3-4-工厂方法模式的结构与实现" tabindex="-1"><a class="header-anchor" href="#_2-3-4-工厂方法模式的结构与实现" aria-hidden="true">#</a> 2.3.4 工厂方法模式的结构与实现</h4>
<h6 id="工厂方法模式的主要角色如下。" tabindex="-1"><a class="header-anchor" href="#工厂方法模式的主要角色如下。" aria-hidden="true">#</a> 工厂方法模式的主要角色如下。</h6>
<ol>
<li>抽象工厂（Abstract Factory）：提供了创建产品的接口，调用者通过它访问具体工厂的工厂方法 newProduct() 来创建产品。</li>
<li>具体工厂（ConcreteFactory）：主要是实现抽象工厂中的抽象方法，完成具体产品的创建。</li>
<li>抽象产品（Product）：定义了产品的规范，描述了产品的主要特性和功能。</li>
<li>具体产品（ConcreteProduct）：实现了抽象产品角色所定义的接口，由具体工厂来创建，它同具体工厂之间一一对应。</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token class-name">FactoryMethod</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AbstractFactoryTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Product</span> a<span class="token punctuation">;</span>
            <span class="token class-name">AbstractFactory</span> af<span class="token punctuation">;</span>
            af <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">AbstractFactory</span><span class="token punctuation">)</span> <span class="token class-name">ReadXML1</span><span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            a <span class="token operator">=</span> af<span class="token punctuation">.</span><span class="token function">newProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            a<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//抽象产品：提供了产品的接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//具体产品1：实现抽象产品中的抽象方法</span>
<span class="token keyword">class</span> <span class="token class-name">ConcreteProduct1</span> <span class="token keyword">implements</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"具体产品1显示..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//具体产品2：实现抽象产品中的抽象方法</span>
<span class="token keyword">class</span> <span class="token class-name">ConcreteProduct2</span> <span class="token keyword">implements</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"具体产品2显示..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//抽象工厂：提供了厂品的生成方法</span>
<span class="token keyword">interface</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Product</span> <span class="token function">newProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//具体工厂1：实现了厂品的生成方法</span>
<span class="token keyword">class</span> <span class="token class-name">ConcreteFactory1</span> <span class="token keyword">implements</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Product</span> <span class="token function">newProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"具体工厂1生成-->具体产品1..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteProduct1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//具体工厂2：实现了厂品的生成方法</span>
<span class="token keyword">class</span> <span class="token class-name">ConcreteFactory2</span> <span class="token keyword">implements</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Product</span> <span class="token function">newProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"具体工厂2生成-->具体产品2..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteProduct2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token class-name">FactoryMethod</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>parsers<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>w3c<span class="token punctuation">.</span>dom<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">ReadXML1</span> <span class="token punctuation">{</span>
    <span class="token comment">//该方法用于从XML配置文件中提取具体类类名，并返回一个实例对象</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">getObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//创建文档对象</span>
            <span class="token class-name">DocumentBuilderFactory</span> dFactory <span class="token operator">=</span> <span class="token class-name">DocumentBuilderFactory</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">DocumentBuilder</span> builder <span class="token operator">=</span> dFactory<span class="token punctuation">.</span><span class="token function">newDocumentBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Document</span> doc<span class="token punctuation">;</span>
            doc <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"src/FactoryMethod/config1.xml"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//获取包含类名的文本节点</span>
            <span class="token class-name">NodeList</span> nl <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"className"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Node</span> classNode <span class="token operator">=</span> nl<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFirstChild</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> cName <span class="token operator">=</span> <span class="token string">"FactoryMethod."</span> <span class="token operator">+</span> classNode<span class="token punctuation">.</span><span class="token function">getNodeValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//System.out.println("新类名："+cName);</span>
            <span class="token comment">//通过类名生成实例对象并将其返回</span>
            <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> c <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>cName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Object</span> obj <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-5-工厂方法模式的扩展" tabindex="-1"><a class="header-anchor" href="#_2-3-5-工厂方法模式的扩展" aria-hidden="true">#</a> 2.3.5 工厂方法模式的扩展</h4>
<h3 id="_2-4-抽象工厂模式" tabindex="-1"><a class="header-anchor" href="#_2-4-抽象工厂模式" aria-hidden="true">#</a> 2.4 抽象工厂模式</h3>
<h4 id="_2-4-1-抽象工厂模式的定义和特点" tabindex="-1"><a class="header-anchor" href="#_2-4-1-抽象工厂模式的定义和特点" aria-hidden="true">#</a> 2.4.1 抽象工厂模式的定义和特点</h4>
<h6 id="抽象工厂-abstractfactory-模式的定义" tabindex="-1"><a class="header-anchor" href="#抽象工厂-abstractfactory-模式的定义" aria-hidden="true">#</a> 抽象工厂（AbstractFactory）模式的定义：</h6>
<p>是一种为访问类提供一个创建一组相关或相互依赖对象的接口，且访问类无须指定所要产品的具体类就能得到同族的不同等级的产品的模式结构。</p>
<p>抽象工厂模式是工厂方法模式的升级版本，工厂方法模式只生产一个等级的产品，而抽象工厂模式可生产多个等级的产品。</p>
<h4 id="_2-4-2-抽象工厂模式的优点和缺点" tabindex="-1"><a class="header-anchor" href="#_2-4-2-抽象工厂模式的优点和缺点" aria-hidden="true">#</a> 2.4.2 抽象工厂模式的优点和缺点</h4>
<h6 id="优点-2" tabindex="-1"><a class="header-anchor" href="#优点-2" aria-hidden="true">#</a> 优点</h6>
<ul>
<li>可以在类的内部对产品族中相关联的多等级产品共同管理，而不必专门引入多个新的类来进行管理。</li>
<li>当需要产品族时，抽象工厂可以保证客户端始终只使用同一个产品的产品组。</li>
<li>抽象工厂增强了程序的可扩展性，当增加一个新的产品族时，不需要修改原代码，满足开闭原则。</li>
</ul>
<h6 id="缺点-2" tabindex="-1"><a class="header-anchor" href="#缺点-2" aria-hidden="true">#</a> 缺点</h6>
<p>当产品族中需要增加一个新的产品时，所有的工厂类都需要进行修改。增加了系统的抽象性和理解难度。</p>
<h4 id="_2-4-3-抽象工厂模式的应用场景和实例" tabindex="-1"><a class="header-anchor" href="#_2-4-3-抽象工厂模式的应用场景和实例" aria-hidden="true">#</a> 2.4.3 抽象工厂模式的应用场景和实例</h4>
<h6 id="抽象工厂模式通常适用于以下场景" tabindex="-1"><a class="header-anchor" href="#抽象工厂模式通常适用于以下场景" aria-hidden="true">#</a> 抽象工厂模式通常适用于以下场景：</h6>
<ol>
<li>当需要创建的对象是一系列相互关联或相互依赖的产品族时，如电器工厂中的电视机、洗衣机、空调等。</li>
<li>系统中有多个产品族，但每次只使用其中的某一族产品。如有人只喜欢穿某一个品牌的衣服和鞋。</li>
<li>系统中提供了产品的类库，且所有产品的接口相同，客户端不依赖产品实例的创建细节和内部结构。</li>
</ol>
<h6 id="抽象工厂模式的应用实例" tabindex="-1"><a class="header-anchor" href="#抽象工厂模式的应用实例" aria-hidden="true">#</a> 抽象工厂模式的应用实例</h6>
<p>分析：农场中除了像畜牧场一样可以养动物，还可以培养植物，如养马、养牛、种菜、种水果等，所以本实例比前面介绍的畜牧场类复杂，必须用抽象工厂模式来实现。</p>
<p>本例用抽象工厂模式来设计两个农场，一个是韶关农场用于养牛和种菜，一个是上饶农场用于养马和种水果，可以在以上两个农场中定义一个生成动物的方法 newAnimal() 和一个培养植物的方法 newPlant()。</p>
<p>对马类、牛类、蔬菜类和水果类等具体产品类，由于要显示它们的图像，所以它们的构造函数中用到了 JPanel、JLabel 和 ImageIcon 等组件，并定义一个 show() 方法来显示它们。</p>
<h4 id="_2-4-4-抽象工厂模式的结构与实现" tabindex="-1"><a class="header-anchor" href="#_2-4-4-抽象工厂模式的结构与实现" aria-hidden="true">#</a> 2.4.4 抽象工厂模式的结构与实现</h4>
<h6 id="模式的结构" tabindex="-1"><a class="header-anchor" href="#模式的结构" aria-hidden="true">#</a> 模式的结构</h6>
<ol>
<li>抽象工厂（Abstract Factory）：提供了创建产品的接口，它包含多个创建产品的方法 newProduct()，可以创建多个不同等级的产品。</li>
<li>具体工厂（Concrete Factory）：主要是实现抽象工厂中的多个抽象方法，完成具体产品的创建。</li>
<li>抽象产品（Product）：定义了产品的规范，描述了产品的主要特性和功能，抽象工厂模式有多个抽象产品。</li>
<li>具体产品（ConcreteProduct）：实现了抽象产品角色所定义的接口，由具体工厂来创建，它同具体工厂之间是多对一的关系。</li>
</ol>
<h6 id="模式的实现" tabindex="-1"><a class="header-anchor" href="#模式的实现" aria-hidden="true">#</a> 模式的实现</h6>
<p>(1) 抽象工厂：提供了产品的生成方法。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Product1</span> <span class="token function">newProduct1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Product2</span> <span class="token function">newProduct2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) 具体工厂：实现了产品的生成方法。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ConcreteFactory1</span> <span class="token keyword">implements</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Product1</span> <span class="token function">newProduct1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"具体工厂 1 生成-->具体产品 11..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteProduct11</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Product2</span> <span class="token function">newProduct2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"具体工厂 1 生成-->具体产品 21..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteProduct21</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-5-抽象工厂模式的扩展" tabindex="-1"><a class="header-anchor" href="#_2-4-5-抽象工厂模式的扩展" aria-hidden="true">#</a> 2.4.5 抽象工厂模式的扩展</h4>
<p>抽象工厂模式的扩展有一定的“开闭原则”倾斜性：</p>
<ol>
<li>当增加一个新的产品族时只需增加一个新的具体工厂，不需要修改原代码，满足开闭原则。</li>
<li>当产品族中需要增加一个新种类的产品时，则所有的工厂类都需要进行修改，不满足开闭原则。</li>
</ol>
<p>另一方面，当系统中只存在一个等级结构的产品时，抽象工厂模式将退化到工厂方法模式。</p>
<h3 id="_2-5-单例模式" tabindex="-1"><a class="header-anchor" href="#_2-5-单例模式" aria-hidden="true">#</a> 2.5 单例模式</h3>
<h4 id="_2-5-1-单例模式的定义" tabindex="-1"><a class="header-anchor" href="#_2-5-1-单例模式的定义" aria-hidden="true">#</a> 2.5.1 单例模式的定义</h4>
<p>指一个类只有一个实例，且该类能自行创建这个实例的一种模式。例如，Windows 中只能打开一个任务管理器，这样可以避免因打开多个任务管理器窗口而造成内存资源的浪费，或出现各个窗口显示内容的不一致等错误。</p>
<h4 id="_2-5-2-单例模式的特点" tabindex="-1"><a class="header-anchor" href="#_2-5-2-单例模式的特点" aria-hidden="true">#</a> 2.5.2 单例模式的特点</h4>
<ol>
<li>单例类只有一个实例对象；</li>
<li>该单例对象必须由单例类自行创建；</li>
<li>单例类对外提供一个访问该单例的全局访问点。</li>
</ol>
<h4 id="_2-5-3-单例模式的优点和缺点" tabindex="-1"><a class="header-anchor" href="#_2-5-3-单例模式的优点和缺点" aria-hidden="true">#</a> 2.5.3 单例模式的优点和缺点</h4>
<p>单例模式的优点：</p>
<ul>
<li>单例模式可以保证内存里只有一个实例，减少了内存的开销。</li>
<li>可以避免对资源的多重占用。</li>
<li>单例模式设置全局访问点，可以优化和共享资源的访问。</li>
</ul>
<p>单例模式的缺点：</p>
<ul>
<li>单例模式一般没有接口，扩展困难。如果要扩展，则除了修改原来的代码，没有第二种途径，违背开闭原则。</li>
<li>在并发测试中，单例模式不利于代码调试。在调试过程中，如果单例中的代码没有执行完，也不能模拟生成一个新的对象。</li>
<li>单例模式的功能代码通常写在一个类中，如果功能设计不合理，则很容易违背单一职责原则。</li>
</ul>
<h4 id="_2-5-4-单例模式的应用场景" tabindex="-1"><a class="header-anchor" href="#_2-5-4-单例模式的应用场景" aria-hidden="true">#</a> 2.5.4 单例模式的应用场景</h4>
<ul>
<li>需要频繁创建的一些类，使用单例可以降低系统的内存压力，减少 GC。</li>
<li>某类只要求生成一个对象的时候，如一个班中的班长、每个人的身份证号等。</li>
<li>某些类创建实例时占用资源较多，或实例化耗时较长，且经常使用。</li>
<li>某类需要频繁实例化，而创建的对象又频繁被销毁的时候，如多线程的线程池、网络连接池等。</li>
<li>频繁访问数据库或文件的对象。</li>
<li>对于一些控制硬件级别的操作，或者从系统上来讲应当是单一控制逻辑的操作，如果有多个实例，则系统会完全乱套。</li>
<li>当对象需要被共享的场合。由于单例模式只允许创建一个对象，共享该对象可以节省内存，并加快对象访问速度。如 Web 中的配置对象、数据库的连接池等。</li>
</ul>
<h4 id="_2-5-5-单例模式的结构与实现" tabindex="-1"><a class="header-anchor" href="#_2-5-5-单例模式的结构与实现" aria-hidden="true">#</a> 2.5.5 单例模式的结构与实现</h4>
<h6 id="懒汉式单例结构" tabindex="-1"><a class="header-anchor" href="#懒汉式单例结构" aria-hidden="true">#</a> 懒汉式单例结构</h6>
<p>该模式的特点是类加载时没有生成单例，只有当第一次调用 getlnstance 方法时才去创建这个单例。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LazySingleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token class-name">LazySingleton</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>    <span class="token comment">//保证 instance 在所有线程中同步</span>
    <span class="token keyword">private</span> <span class="token class-name">LazySingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>    <span class="token comment">//private 避免类在外部被实例化</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token class-name">LazySingleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//getInstance 方法前加同步</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LazySingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="饿汉式单例结构" tabindex="-1"><a class="header-anchor" href="#饿汉式单例结构" aria-hidden="true">#</a> 饿汉式单例结构</h6>
<p>该模式的特点是类一旦加载就创建一个单例，保证在调用 getInstance 方法之前单例已经存在了。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HungrySingleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">HungrySingleton</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HungrySingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">HungrySingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">HungrySingleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="单例模式的应用实例" tabindex="-1"><a class="header-anchor" href="#单例模式的应用实例" aria-hidden="true">#</a> 单例模式的应用实例</h6>
<p>用懒汉式单例模式模拟产生美国当今总统对象。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingletonLazy</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">President</span> zt1 <span class="token operator">=</span> <span class="token class-name">President</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        zt1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//输出总统的名字</span>
        <span class="token class-name">President</span> zt2 <span class="token operator">=</span> <span class="token class-name">President</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        zt2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//输出总统的名字</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>zt1 <span class="token operator">==</span> zt2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"他们是同一人！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"他们不是同一人！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">President</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token class-name">President</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>    <span class="token comment">//保证instance在所有线程中同步</span>
    <span class="token comment">//private避免类在外部被实例化</span>
    <span class="token keyword">private</span> <span class="token class-name">President</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"产生一个总统！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token class-name">President</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//在getInstance方法上加同步</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">President</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"已经有一个总统，不能产生新总统！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"我是美国总统：特朗普。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-6-单例模式的扩展" tabindex="-1"><a class="header-anchor" href="#_2-5-6-单例模式的扩展" aria-hidden="true">#</a> 2.5.6 单例模式的扩展</h4>
<p>单例模式可扩展为有限的多例（Multitcm）模式，这种模式可生成有限个实例并保存在 ArrayList 中，客户需要时可随机获取</p>
<h3 id="_2-6-原型模式" tabindex="-1"><a class="header-anchor" href="#_2-6-原型模式" aria-hidden="true">#</a> 2.6 原型模式</h3>
<h4 id="_2-6-1-原型模式的定义和特点" tabindex="-1"><a class="header-anchor" href="#_2-6-1-原型模式的定义和特点" aria-hidden="true">#</a> 2.6.1 原型模式的定义和特点</h4>
<h6 id="原型模式的定义" tabindex="-1"><a class="header-anchor" href="#原型模式的定义" aria-hidden="true">#</a> 原型模式的定义</h6>
<p>用一个已经创建的实例作为原型，通过复制该原型对象来创建一个和原型相同或相似的新对象。在这里，原型实例指定了要创建的对象的种类。用这种方式创建对象非常高效，根本无须知道对象创建的细节。例如，Windows 操作系统的安装通常较耗时，如果复制就快了很多。</p>
<h4 id="_2-6-2-原型模式的优点和缺点" tabindex="-1"><a class="header-anchor" href="#_2-6-2-原型模式的优点和缺点" aria-hidden="true">#</a> 2.6.2 原型模式的优点和缺点</h4>
<h6 id="原型模式的优点" tabindex="-1"><a class="header-anchor" href="#原型模式的优点" aria-hidden="true">#</a> 原型模式的优点：</h6>
<ul>
<li>Java 自带的原型模式基于内存二进制流的复制，在性能上比直接 new 一个对象更加优良。</li>
<li>可以使用深克隆方式保存对象的状态，使用原型模式将对象复制一份，并将其状态保存起来，简化了创建对象的过程，以便在需要的时候使用（例如恢复到历史某一状态），可辅助实现撤销操作。</li>
</ul>
<h6 id="原型模式的缺点" tabindex="-1"><a class="header-anchor" href="#原型模式的缺点" aria-hidden="true">#</a> 原型模式的缺点：</h6>
<ul>
<li>需要为每一个类都配置一个 clone 方法</li>
<li>clone 方法位于类的内部，当对已有类进行改造的时候，需要修改代码，违背了开闭原则。</li>
<li>当实现深克隆时，需要编写较为复杂的代码，而且当对象之间存在多重嵌套引用时，为了实现深克隆，每一层对象对应的类都必须支持深克隆，实现起来会比较麻烦。因此，深克隆、浅克隆需要运用得当。</li>
</ul>
<h4 id="_2-6-3-原型模式的应用场景" tabindex="-1"><a class="header-anchor" href="#_2-6-3-原型模式的应用场景" aria-hidden="true">#</a> 2.6.3 原型模式的应用场景</h4>
<p>原型模式通常适用于以下场景。</p>
<ul>
<li>对象之间相同或相似，即只是个别的几个属性不同的时候。</li>
<li>创建对象成本较大，例如初始化时间长，占用CPU太多，或者占用网络资源太多等，需要优化资源。</li>
<li>创建一个对象需要繁琐的数据准备或访问权限等，需要提高性能或者提高安全性。</li>
<li>系统中大量使用该类对象，且各个调用者都需要给它的属性重新赋值。</li>
</ul>
<h4 id="_2-6-4-原型模式的结构与实现" tabindex="-1"><a class="header-anchor" href="#_2-6-4-原型模式的结构与实现" aria-hidden="true">#</a> 2.6.4 原型模式的结构与实现</h4>
<h6 id="原型模式的克隆分为浅克隆和深克隆。" tabindex="-1"><a class="header-anchor" href="#原型模式的克隆分为浅克隆和深克隆。" aria-hidden="true">#</a> 原型模式的克隆分为浅克隆和深克隆。</h6>
<ul>
<li>浅克隆：创建一个新对象，新对象的属性和原来对象完全相同，对于非基本类型属性，仍指向原有属性所指向的对象的内存地址。</li>
<li>深克隆：创建一个新对象，属性中引用的其他对象也会被克隆，不再指向原有对象地址。</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProtoTypeCitation</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span> <span class="token punctuation">{</span>
        citation obj1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">citation</span><span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token string">"同学：在2016学年第一学期中表现优秀，被评为三好学生。"</span><span class="token punctuation">,</span> <span class="token string">"韶关学院"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        obj1<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        citation obj2 <span class="token operator">=</span> <span class="token punctuation">(</span>citation<span class="token punctuation">)</span> obj1<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        obj2<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"李四"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        obj2<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//奖状类</span>
<span class="token keyword">class</span> citation <span class="token keyword">implements</span> <span class="token class-name">Cloneable</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token class-name">String</span> info<span class="token punctuation">;</span>
    <span class="token class-name">String</span> college<span class="token punctuation">;</span>
    <span class="token function">citation</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> info<span class="token punctuation">,</span> <span class="token class-name">String</span> college<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>info <span class="token operator">=</span> info<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>college <span class="token operator">=</span> college<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"奖状创建成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> info <span class="token operator">+</span> college<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"奖状拷贝成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>citation<span class="token punctuation">)</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>奖状创建成功！
张三同学：在2016学年第一学期中表现优秀，被评为三好学生。韶关学院
奖状拷贝成功！
李四同学：在2016学年第一学期中表现优秀，被评为三好学生。韶关学院
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-6-5-原型模式的扩展" tabindex="-1"><a class="header-anchor" href="#_2-6-5-原型模式的扩展" aria-hidden="true">#</a> 2.6.5 原型模式的扩展</h4>
<p>原型模式可扩展为带原型管理器的原型模式，它在原型模式的基础上增加了一个原型管理器 PrototypeManager 类。该类用 HashMap 保存多个复制的原型，Client 类可以通过管理器的 get(String id) 方法从中获取复制的原型。</p>
<h3 id="_2-7-建造者模式" tabindex="-1"><a class="header-anchor" href="#_2-7-建造者模式" aria-hidden="true">#</a> 2.7 建造者模式</h3>
<h4 id="_2-7-1-建造者模式的定义和特点" tabindex="-1"><a class="header-anchor" href="#_2-7-1-建造者模式的定义和特点" aria-hidden="true">#</a> 2.7.1 建造者模式的定义和特点</h4>
<h4 id="_2-7-2-建造者模式的优点和缺点" tabindex="-1"><a class="header-anchor" href="#_2-7-2-建造者模式的优点和缺点" aria-hidden="true">#</a> 2.7.2 建造者模式的优点和缺点</h4>
<h4 id="_2-7-3-建造者模式的应用场景" tabindex="-1"><a class="header-anchor" href="#_2-7-3-建造者模式的应用场景" aria-hidden="true">#</a> 2.7.3 建造者模式的应用场景</h4>
<h4 id="_2-7-4-建造者模式的结构与实现" tabindex="-1"><a class="header-anchor" href="#_2-7-4-建造者模式的结构与实现" aria-hidden="true">#</a> 2.7.4 建造者模式的结构与实现</h4>
<h4 id="_2-7-5-建造者模式的扩展" tabindex="-1"><a class="header-anchor" href="#_2-7-5-建造者模式的扩展" aria-hidden="true">#</a> 2.7.5 建造者模式的扩展</h4>
<h2 id="第3章-行为型设计模式" tabindex="-1"><a class="header-anchor" href="#第3章-行为型设计模式" aria-hidden="true">#</a> 第3章 行为型设计模式</h2>
<h3 id="_3-1-模板方法模式" tabindex="-1"><a class="header-anchor" href="#_3-1-模板方法模式" aria-hidden="true">#</a> 3.1 模板方法模式</h3>
<h3 id="_3-2-策略模式" tabindex="-1"><a class="header-anchor" href="#_3-2-策略模式" aria-hidden="true">#</a> 3.2 策略模式</h3>
<h3 id="_3-3-命令模式" tabindex="-1"><a class="header-anchor" href="#_3-3-命令模式" aria-hidden="true">#</a> 3.3 命令模式</h3>
<h3 id="_3-4-职责链模式" tabindex="-1"><a class="header-anchor" href="#_3-4-职责链模式" aria-hidden="true">#</a> 3.4 职责链模式</h3>
<h3 id="_3-5-状态模式" tabindex="-1"><a class="header-anchor" href="#_3-5-状态模式" aria-hidden="true">#</a> 3.5 状态模式</h3>
<h3 id="_3-6-观察者模式" tabindex="-1"><a class="header-anchor" href="#_3-6-观察者模式" aria-hidden="true">#</a> 3.6 观察者模式</h3>
<h3 id="_3-7-中介者模式" tabindex="-1"><a class="header-anchor" href="#_3-7-中介者模式" aria-hidden="true">#</a> 3.7 中介者模式</h3>
<h3 id="_3-8-迭代器模式" tabindex="-1"><a class="header-anchor" href="#_3-8-迭代器模式" aria-hidden="true">#</a> 3.8 迭代器模式</h3>
<h3 id="_3-9-访问者模式" tabindex="-1"><a class="header-anchor" href="#_3-9-访问者模式" aria-hidden="true">#</a> 3.9 访问者模式</h3>
<h3 id="_3-10-备忘录模式" tabindex="-1"><a class="header-anchor" href="#_3-10-备忘录模式" aria-hidden="true">#</a> 3.10 备忘录模式</h3>
<h3 id="_3-11-解释器模式" tabindex="-1"><a class="header-anchor" href="#_3-11-解释器模式" aria-hidden="true">#</a> 3.11 解释器模式</h3>
<h2 id="第4章-结构型设计模式" tabindex="-1"><a class="header-anchor" href="#第4章-结构型设计模式" aria-hidden="true">#</a> 第4章 结构型设计模式</h2>
<h3 id="_4-1-代理模式" tabindex="-1"><a class="header-anchor" href="#_4-1-代理模式" aria-hidden="true">#</a> 4.1 代理模式</h3>
<h3 id="_4-2-适配器模式" tabindex="-1"><a class="header-anchor" href="#_4-2-适配器模式" aria-hidden="true">#</a> 4.2 适配器模式</h3>
<h3 id="_4-3-装饰器模式" tabindex="-1"><a class="header-anchor" href="#_4-3-装饰器模式" aria-hidden="true">#</a> 4.3 装饰器模式</h3>
<h3 id="_4-4-桥接模式" tabindex="-1"><a class="header-anchor" href="#_4-4-桥接模式" aria-hidden="true">#</a> 4.4 桥接模式</h3>
<h3 id="_4-5-组合模式" tabindex="-1"><a class="header-anchor" href="#_4-5-组合模式" aria-hidden="true">#</a> 4.5 组合模式</h3>
<h3 id="_4-6-外观模式" tabindex="-1"><a class="header-anchor" href="#_4-6-外观模式" aria-hidden="true">#</a> 4.6 外观模式</h3>
<h3 id="_4-7-享元模式" tabindex="-1"><a class="header-anchor" href="#_4-7-享元模式" aria-hidden="true">#</a> 4.7 享元模式</h3>
<h2 id="第5章-其他" tabindex="-1"><a class="header-anchor" href="#第5章-其他" aria-hidden="true">#</a> 第5章 其他</h2>
<h3 id="_5-1-并发型模式" tabindex="-1"><a class="header-anchor" href="#_5-1-并发型模式" aria-hidden="true">#</a> 5.1 并发型模式</h3>
<h3 id="_5-2-线程池模式" tabindex="-1"><a class="header-anchor" href="#_5-2-线程池模式" aria-hidden="true">#</a> 5.2 线程池模式</h3>
<h3 id="_5-3-综合练习" tabindex="-1"><a class="header-anchor" href="#_5-3-综合练习" aria-hidden="true">#</a> 5.3 综合练习</h3>
<h2 id="第6章-uml图" tabindex="-1"><a class="header-anchor" href="#第6章-uml图" aria-hidden="true">#</a> 第6章 UML图</h2>
<h3 id="_6-1-类图概述" tabindex="-1"><a class="header-anchor" href="#_6-1-类图概述" aria-hidden="true">#</a> 6.1 类图概述</h3>
<h3 id="_6-2-类图表示法" tabindex="-1"><a class="header-anchor" href="#_6-2-类图表示法" aria-hidden="true">#</a> 6.2 类图表示法</h3>
<h3 id="_6-3-类与类之间的关系" tabindex="-1"><a class="header-anchor" href="#_6-3-类与类之间的关系" aria-hidden="true">#</a> 6.3 类与类之间的关系</h3>
<p>关联关系</p>
<p>聚合关系</p>
<p>组合关系</p>
<p>依赖关系</p>
<p>继承关系</p>
<p>实现关系</p>
</div></template>
