import{_ as s,b as n,a,J as l}from"./chunks/framework.218694e7.js";const A=JSON.parse('{"title":"\u4E00\u4E2A\u51FD\u6570\u5982\u4F55\u8FD4\u56DE\u591A\u4E2A\u503C\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u4E2A\u51FD\u6570\u5982\u4F55\u8FD4\u56DE\u591A\u4E2A\u503C\uFF1F","slug":"\u4E00\u4E2A\u51FD\u6570\u5982\u4F55\u8FD4\u56DE\u591A\u4E2A\u503C\uFF1F"}],"relativePath":"cpp17/optional/1.md"}'),p={name:"cpp17/optional/1.md"},o=l(`<ul><li><a href="https://zhuanlan.zhihu.com/p/64985296" target="_blank" rel="noreferrer">C++17 \u65B0\u7279\u6027\u4E4B std::optional\uFF08\u4E0A\uFF09 - \u77E5\u4E4E</a></li><li><a href="https://blog.csdn.net/janeqi1987/article/details/100567933" target="_blank" rel="noreferrer">C++17\u4E4Bstd::optional_janeqi1987\u7684\u4E13\u680F-CSDN\u535A\u5BA2_std::optional</a></li></ul><h2 id="\u4E00\u4E2A\u51FD\u6570\u5982\u4F55\u8FD4\u56DE\u591A\u4E2A\u503C\uFF1F" tabindex="-1">\u4E00\u4E2A\u51FD\u6570\u5982\u4F55\u8FD4\u56DE\u591A\u4E2A\u503C\uFF1F <a class="header-anchor" href="#\u4E00\u4E2A\u51FD\u6570\u5982\u4F55\u8FD4\u56DE\u591A\u4E2A\u503C\uFF1F" aria-hidden="true">#</a></h2><ol><li>\u5F15\u7528\u4F20\u53C2</li><li>\u4F7F\u7528<code>tuple</code></li><li>\u4F7F\u7528<code>pair&lt;T,bool&gt;</code> \u6765\u5224\u65AD\u51FD\u6570\u53EF\u80FD\u4F1A\u8FD0\u884C\u5931\u8D25\u7684\u60C5\u51B5</li><li>\u4F7F\u7528</li></ol><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">optional</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">struct</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Out</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    string out1 </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    string out2 </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">optional</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Out</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">func</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#C792EA;">&amp;</span><span style="color:#A6ACCD;"> in</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    Out o</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">in</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">size</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> nullopt</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    o</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    o</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> o </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">auto</span><span style="color:#A6ACCD;"> ret </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">func</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hi</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> ret</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has_value</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ret</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">out1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ret</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">out2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>std::nullopt \u662F C++ 17 \u4E2D\u63D0\u4F9B\u7684\u6CA1\u6709\u503C\u7684 optional \u7684\u8868\u8FBE\u5F62\u5F0F\uFF0C\u7B49\u540C\u4E8E { } \u3002</p>`,5),e=[o];function t(r,c,D,F,y,i){return a(),n("div",null,e)}var u=s(p,[["render",t]]);export{A as __pageData,u as default};
