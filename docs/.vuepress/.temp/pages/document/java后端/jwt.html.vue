<template><div><h2 id="第1章-jwt-入门" tabindex="-1"><a class="header-anchor" href="#第1章-jwt-入门" aria-hidden="true">#</a> 第1章 Jwt 入门</h2>
<h3 id="_1-1-jwt-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-jwt-简介" aria-hidden="true">#</a> 1.1 jwt 简介</h3>
<p>JSON Web Token (JWT) 是一种开放标准 ，它定义了一种紧凑且自包含的方式，用于在各方之间作为 JSON 对象安全地传输信息。</p>
<p>由于此信息经过数字签名，因此可以验证和信任。JWT 可以使用秘密（使用<strong>HMAC</strong>算法）或使用<strong>RSA</strong>或<strong>ECDSA</strong>的公钥/私钥对进行<strong>签名</strong>。</p>
<p>虽然 JWT 可以加密以在各方之间提供保密，但我们将重点关注<em>签名</em>令牌。签名令牌可以验证其中包含的声明的<em>完整性</em>，而加密令牌则对其他方<em>隐藏</em>这些声明。</p>
<p>当使用公钥/私钥对对令牌进行签名时，签名还证明只有持有私钥的一方才是对其进行签名的一方。</p>
<h3 id="_1-2-jwt使用场景" tabindex="-1"><a class="header-anchor" href="#_1-2-jwt使用场景" aria-hidden="true">#</a> 1.2  jwt使用场景</h3>
<p>以下是 JSON Web Tokens 有用的一些场景：</p>
<ul>
<li>
<p><strong>授权</strong>：这是使用 JWT 最常见的场景。用户登录后，每个后续请求都将包含 JWT，允许用户访问该令牌允许的路由、服务和资源。单点登录是当今广泛使用 JWT 的一项功能，因为它的开销很小，并且能够轻松跨不同域使用。</p>
</li>
<li>
<p><strong>信息交换</strong>：JSON Web Tokens 是一种在各方之间安全传输信息的好方法。因为 JWT 可以被签名——例如，使用公钥/私钥对——你可以确定发件人就是他们所说的那样。此外，由于使用标头和有效负载计算签名，您还可以验证内容是否未被篡改。</p>
</li>
</ul>
<h3 id="_1-3-jwt-结构" tabindex="-1"><a class="header-anchor" href="#_1-3-jwt-结构" aria-hidden="true">#</a> 1.3 Jwt 结构</h3>
<p>在其紧凑形式中，JSON Web Tokens 由用点 ( <code v-pre>.</code>)分隔的三个部分组成，它们是：</p>
<ul>
<li>标题</li>
<li>有效载荷</li>
<li>签名</li>
</ul>
<p>因此，JWT 通常如下所示。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>xxxxx.yyyyy.zzzzz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="第2章-jwt-组成部分" tabindex="-1"><a class="header-anchor" href="#第2章-jwt-组成部分" aria-hidden="true">#</a> 第2章 jwt 组成部分</h2>
<h3 id="_2-1-标题" tabindex="-1"><a class="header-anchor" href="#_2-1-标题" aria-hidden="true">#</a> 2.1 标题</h3>
<p>标头<em>通常</em>由两部分组成：令牌的类型，即 JWT，以及正在使用的签名算法，例如 HMAC SHA256 或 RSA。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"alg"</span><span class="token operator">:</span> <span class="token string">"HS256"</span><span class="token punctuation">,</span>
  <span class="token property">"typ"</span><span class="token operator">:</span> <span class="token string">"JWT"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，这个 JSON 被<strong>Base64Url</strong>编码以形成 JWT 的第一部分。</p>
<h3 id="_2-2-有效载荷" tabindex="-1"><a class="header-anchor" href="#_2-2-有效载荷" aria-hidden="true">#</a> 2.2 有效载荷</h3>
<p>令牌的第二部分是负载，其中包含声明。声明是关于实体（通常是用户）和附加数据的声明。共有三种类型的声明：<em>注册声明</em>、<em>公共</em>声明和<em>私人</em>声明。</p>
<p>一个示例有效载荷可能是：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"sub"</span><span class="token operator">:</span> <span class="token string">"1234567890"</span><span class="token punctuation">,</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"John Doe"</span><span class="token punctuation">,</span>
  <span class="token property">"admin"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后对有效负载进行<strong>Base64Url</strong>编码以形成 JSON Web 令牌的第二部分。</p>
<p>请注意，对于已签名的令牌，此信息虽然受到防篡改保护，但任何人都可以读取。除非加密，否则不要将机密信息放入 JWT 的负载或标头元素中。</p>
<h3 id="_2-3-签名" tabindex="-1"><a class="header-anchor" href="#_2-3-签名" aria-hidden="true">#</a> 2.3 签名</h3>
<p>要创建签名部分，您必须获取编码的标头、编码的有效载荷、秘密、标头中指定的算法，并对其进行签名。</p>
<p>签名用于验证消息在此过程中没有更改，并且在使用私钥签名的令牌的情况下，它还可以验证 JWT 的发送者是它所说的那个人。</p>
<p>例如，如果要使用 HMAC SHA256 算法，则签名将通过以下方式创建：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">HMACSHA256</span><span class="token punctuation">(</span>
  <span class="token function">base64UrlEncode</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"."</span> <span class="token operator">+</span>
  <span class="token function">base64UrlEncode</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token punctuation">,</span>
  secret<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出是三个由点分隔的 Base64-URL 字符串，可以在 HTML 和 HTTP 环境中轻松传递，同时与基于 XML 的标准（如 SAML）相比更加紧凑。</p>
<h2 id="第3章-jwt-高级" tabindex="-1"><a class="header-anchor" href="#第3章-jwt-高级" aria-hidden="true">#</a> 第3章 jwt 高级</h2>
<h3 id="_3-1-jwt工作流程" tabindex="-1"><a class="header-anchor" href="#_3-1-jwt工作流程" aria-hidden="true">#</a> 3.1 jwt工作流程</h3>
<p>在身份验证中，当用户使用其凭据成功登录时，将返回一个 JSON Web Token。由于令牌是凭证，因此必须非常小心以防止出现安全问题。通常，您不应将令牌保留的时间超过所需的时间。</p>
<p>每当用户想要访问受保护的路由或资源时，用户代理应发送 JWT，通常在请求头的<strong>Authorization</strong>中。标题的内容应如下所示：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>Authorization<span class="token operator">:</span>  &lt;jwt>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2-jwt-的优点" tabindex="-1"><a class="header-anchor" href="#_3-2-jwt-的优点" aria-hidden="true">#</a> 3.2 jwt 的优点</h3>
<p>由于 JSON 没有 XML 冗长，编码时它的大小也更小，这使得 JWT 比 SAML 更紧凑。这使得 JWT 成为在 HTML 和 HTTP 环境中传递的不错选择。</p>
<p>在安全方面，SWT 只能由使用 HMAC 算法的共享秘密对称签名。但是，JWT 和 SAML 令牌可以使用 X.509 证书形式的公钥/私钥对进行签名。与签署 JSON 的简单性相比，在不引入模糊安全漏洞的情况下使用 XML 数字签名签署 XML 是非常困难的。</p>
<p>JSON 解析器在大多数编程语言中都很常见，因为它们直接映射到对象。相反，XML 没有自然的文档到对象映射。这使得使用 JWT 比使用 SAML 断言更容易。</p>
<p>关于使用，JWT 用于互联网规模。这突出了客户端在多个平台（尤其是移动平台）上处理 JSON Web 令牌的简便性。</p>
<h2 id="第4章-单点登录" tabindex="-1"><a class="header-anchor" href="#第4章-单点登录" aria-hidden="true">#</a> 第4章 单点登录</h2>
<h3 id="_4-1-跨域简介" tabindex="-1"><a class="header-anchor" href="#_4-1-跨域简介" aria-hidden="true">#</a> 4.1 跨域简介</h3>
<p>session跨域</p>
<p>spring session 跨域</p>
<p>nginx 跨域</p>
<h3 id="_4-2-单点登录简介" tabindex="-1"><a class="header-anchor" href="#_4-2-单点登录简介" aria-hidden="true">#</a> 4.2 单点登录简介</h3>
<p><img src="@source/document/java后端/asset/image-20220729213823145.png" alt="image-20220729213823145" loading="lazy"></p>
<h2 id="第5章-集成springcould" tabindex="-1"><a class="header-anchor" href="#第5章-集成springcould" aria-hidden="true">#</a> 第5章 集成springcould</h2>
</div></template>
