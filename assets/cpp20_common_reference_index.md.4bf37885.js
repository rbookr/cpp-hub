import{_ as e,b as n,a as c,J as o}from"./chunks/framework.218694e7.js";const y=JSON.parse('{"title":"simple common reference","description":"","frontmatter":{},"headers":[{"level":3,"title":"simple common reference","slug":"simple-common-reference"},{"level":2,"title":"\u5C1D\u8BD5","slug":"\u5C1D\u8BD5"},{"level":2,"title":"\u8D44\u6599","slug":"\u8D44\u6599"}],"relativePath":"cpp20/common_reference/index.md"}'),r={name:"cpp20/common_reference/index.md"},t=o(`<h1 id="common-reference" tabindex="-1">common_reference <a class="header-anchor" href="#common-reference" aria-hidden="true">#</a></h1><p>\u6211\u5F88\u96BE\u7406\u89E3<a href="https://en.cppreference.com/w/cpp/types/common_reference" target="_blank" rel="noreferrer">\u6587\u6863</a>\u6240\u8BF4\u7684\u5185\u5BB9,\u4E0B\u9762\u6211\u6309\u6211\u7684\u7406\u89E3\u628A\u6574\u4E2A\u6587\u6863\u5927\u6982\u7FFB\u8BD1\u4E00\u4E0B</p><p>Determines the common reference type of the types <code>T...</code> ,that is,the type of whic all types in <code>T..</code> can be converted or bound. if such a type exists(are determind according to the rules below), the member type names that type. Otherwis,there is no member type. the behavior is undefined if any of the types in <code>T...</code> is an incomplete type other than <code>void</code>.</p><ul><li>\u4E00\u4E2A\u7C7B\u578B\uFF0C\u6240\u6709\u7684<code>T...</code>\u53EF\u4EE5\u88AB\u8F6C\u6362\u6210\u7684\u6216\u8005<code>bound</code>(?).</li><li>\u5982\u679C\u8FD9\u4E2A\u7C7B\u578B\u5B58\u5728\uFF0C\u90A3\u4E48<code>member type</code>(? struct common_reference::type)\u547D\u540D\u4E3A\u90A3\u4E2A\u7C7B\u578B,\u5426\u5219\uFF0C\u6CA1\u6709 <code>member type</code></li><li>\u9664\u4E86,<code>void</code>,\u5982\u679C <code>T...</code>\u6709<code>incomplete type</code>,\uFF0C\u884C\u4E3A\u672A\u5B9A\u4E49</li></ul><p>when given reference types,common_reference attempts to find a reference type to which the supplied reference types can all bound,but may return a no-reference type if it cannot find such a reference type.</p><ul><li><p>\u5F53\u7ED9\u4E86\u5F88\u591A\u7684\u5F15\u7528\u7C7B\u578B\u65F6\uFF0C<code>common_reference</code>\u5C1D\u8BD5\u627E\u5230\u4E00\u79CD\u53EF\u4EE5 \u5168\u90E8 <code>all bound</code>(?)\u7684\u5F15\u7528\u7C7B\u578B</p></li><li><p>\u4F46\u4E5F\u6709\u53EF\u80FD\u8FD4\u56DE\u4E00\u4E2A\u975E\u5F15\u7528\u7C7B\u578B,\u5982\u679C\u627E\u4E0D\u5230\u8FD9\u79CD\u5F15\u7528\u7C7B\u578B\u3002</p></li><li><p>if <code>sizeof ...(T)</code>is zero,there is no member type. \u4E0D\u7528\u7FFB\u8BD1</p></li><li><p>if <code>sizeof ...(T)</code>is one,the member type names the same type. \u4E0D\u7528\u7FFB\u8BD1</p></li><li><p>if <code>sizeof ...(T)</code>is two,T1,T2</p><ul><li>if T1 and T2 are both reference types, and <code>simple common reference S</code> of T1 and T2 exists,then the member type type names S.</li></ul></li></ul><h3 id="simple-common-reference" tabindex="-1">simple common reference <a class="header-anchor" href="#simple-common-reference" aria-hidden="true">#</a></h3><ul><li>if T1 is <code>cv1 x&amp; </code> and T2 is <code>cv2 Y&amp;</code>,their simple common reference type is <code>decltype(false ? std:declval&lt;cv12 x&amp;&gt;() : std::declval&lt;cv12 Y &amp;&gt;())</code> ,where cv12 is the union of cv1 and cv2, if that type exists and is a reference type.</li></ul><h2 id="\u5C1D\u8BD5" tabindex="-1">\u5C1D\u8BD5 <a class="header-anchor" href="#\u5C1D\u8BD5" aria-hidden="true">#</a></h2><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//\u6CA1\u6709type \u6210\u5458\u51FD\u6570 ,\u56E0\u4E3A \u6709\u4E00\u4E2A\u7C7B\u578B\u662Fvoid</span></span>
<span class="line"><span style="color:#FFCB6B;">common_reference</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">void</span><span style="color:#89DDFF;">&gt;::</span><span style="color:#A6ACCD;">type a3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u8D44\u6599" tabindex="-1">\u8D44\u6599 <a class="header-anchor" href="#\u8D44\u6599" aria-hidden="true">#</a></h2><ul><li><a href="https://en.cppreference.com/w/cpp/types/common_reference" target="_blank" rel="noreferrer">common_reference cppreference</a></li></ul>`,12),a=[t];function s(p,i,l,d,m,f){return c(),n("div",null,a)}var u=e(r,[["render",s]]);export{y as __pageData,u as default};
