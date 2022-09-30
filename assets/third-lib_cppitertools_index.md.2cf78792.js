import{_ as s,b as n,a,J as e}from"./chunks/framework.218694e7.js";const d=JSON.parse('{"title":"Combinatoric fuctions","description":"","frontmatter":{},"headers":[{"level":2,"title":"Combinatoric fuctions","slug":"combinatoric-fuctions"},{"level":2,"title":"\u4EE3\u7801\u7406\u89E3","slug":"\u4EE3\u7801\u7406\u89E3"},{"level":2,"title":"iterator_wrapper.hpp","slug":"iterator-wrapper-hpp"},{"level":2,"title":"iteratoriterator.hpp","slug":"iteratoriterator-hpp"},{"level":2,"title":"combinations","slug":"combinations"},{"level":2,"title":"permutations","slug":"permutations"}],"relativePath":"third-lib/cppitertools/index.md"}'),p={name:"third-lib/cppitertools/index.md"},l=e(`<p>\u4E00\u4E2A\u5F88\u50CFpython <code>itertools</code>\u7684cpp library <a href="https://github.com/ryanhaining/cppitertools" target="_blank" rel="noreferrer">ryanhaining/cppitertools: Implementation of python itertools and builtin iteration functions for C++17</a></p><p>\u6240\u6709\u7684\u6211\u5199\u7684\u6D4B\u8BD5\u4EE3\u7801:</p><p><a href="https://github/rbookr/cpp-hub/master/third-lib/cppitertools/code" target="_blank" rel="noreferrer">https://github/rbookr/cpp-hub/master/third-lib/cppitertools/code</a></p><ul><li>count() \u4E0D\u505C\u6B62\u7684\u6570\u5B57\u589E\u957F</li></ul><h2 id="combinatoric-fuctions" tabindex="-1">Combinatoric fuctions <a class="header-anchor" href="#combinatoric-fuctions" aria-hidden="true">#</a></h2><p>\u8FD9\u4E9B\u5BF9\u6211\u6709\u7528</p><ul><li>product \u76F8\u5F53\u4E8E\u591A\u53BB\u5D4C\u5957\u5FAA\u73AF,\u7B1B\u5361\u5C14\u4E58\u79EF</li><li>combinations</li><li>combinations_with_replacement</li><li>permutations</li><li>powerset</li></ul><h2 id="\u4EE3\u7801\u7406\u89E3" tabindex="-1">\u4EE3\u7801\u7406\u89E3 <a class="header-anchor" href="#\u4EE3\u7801\u7406\u89E3" aria-hidden="true">#</a></h2><p><code>internal/iterbase.hpp</code></p><div class="language-plaintext line-numbers-mode"><button class="copy"></button><span class="lang">plaintext</span><pre><code><span class="line"><span style="color:#A6ACCD;">get_begin()</span></span>
<span class="line"><span style="color:#A6ACCD;">get_end()</span></span>
<span class="line"><span style="color:#A6ACCD;">dumb_advance(iter&amp; it) \u6C89\u9ED8\u524D\u8FDB,\u4FEE\u6539 it\u7684\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>internal/iteratoriterator.hpp</code></p><div class="language-plaintext line-numbers-mode"><button class="copy"></button><span class="lang">plaintext</span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    \u4F5C\u7528\u4E00\u4E2A\u5305\u542Biterator\u7684\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    template &lt;typename TopIter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    class IteratorIterator</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    1.TopIter \u5FC5\u987B\u662Frandom_access \u7684\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    template &lt;typename Container&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    class IterIterWrapper {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="iterator-wrapper-hpp" tabindex="-1">iterator_wrapper.hpp <a class="header-anchor" href="#iterator-wrapper-hpp" aria-hidden="true">#</a></h2><p>\u63D0\u4F9B\u4E86\u4E00\u4E2A\u7C7B:<code>class iter::impl::IteratorWrapperImpl</code></p><p>\u4E00\u4E2A\u5BB9\u5668\u7684<code>begin</code>,<code>end</code>\u7684\u7C7B\u578B\u662F\u5426\u4E00\u6837</p><p>\u6765\u51B3\u5B9A\u662F\u5426\u4F7F\u7528<code>IteratorWrapperImpl</code>\u6765\u5305\u88C5<code>iterator</code></p><p>\u76EE\u7684\u662F\u4E3A\u4E86\u89E3\u51B3</p><h2 id="iteratoriterator-hpp" tabindex="-1">iteratoriterator.hpp <a class="header-anchor" href="#iteratoriterator-hpp" aria-hidden="true">#</a></h2><p>\u5177\u4F53\u7684\u4F7F\u7528\u89C1\u5BF9\u5E94\u7684code\u76EE\u5F55\u4E0B\u7684 <code>iteratoriterator.cpp</code></p><p>\u63D0\u4F9B\u4E86\u4E24\u4E2A\u7C7B:<code>class iteratoriterator</code>,<code>class IterIterWrapper</code></p><p>\u672C\u8D28\u662F\u63D0\u4F9B\u4E00\u4E2A<code>iterator</code>\u7684\u5BB9\u5668,\u5B58\u4E0B\u53E6\u4E00\u4E0B\u5BB9\u5668\u7684\u8FED\u4EE3\u5668<code>iterator</code></p><p>\u5982\u679C\u4F60\u6709\u4E00\u4E2A\u5BB9\u5668<code>std::vector&lt;int&gt; v</code>,\u90A3\u4E48\u4F60\u5E94\u8BE5\u8FD9\u6837\u5B9A\u4E49\u5BB9\u5668</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// v_iter \u8868\u793A\u5BB9\u5668v\u7684\u8FED\u4EE3\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">using v_iter = std::vector&lt;int&gt;::iterator</span></span>
<span class="line"><span style="color:#A6ACCD;">using IndexVector = std::vector&lt;v_iter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// IndexVector \u8868\u793A\u5B58\u5165v_iter\u7684\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">IterIterWrapper&lt;IndexVector&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-plaintext line-numbers-mode"><button class="copy"></button><span class="lang">plaintext</span><pre><code><span class="line"><span style="color:#A6ACCD;">std::vecotr&lt;int&gt; v{1,2,3,4,5};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u250C\u2500\u2500\u2500+\u2500\u2500\u2500+\u2500\u2500\u2500+\u2500\u2500\u2500+\u2500\u2500\u2500\u2510</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502 1 \u2502 2 \u2502 3 \u2502 4 \u2502 5 \u2502  orgin container V</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500\u2500+\u2500\u2500\u2500+\u2500\u2500\u2500+\u2500\u2500\u2500+\u2500\u2500\u2500\u2518</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u25B2   \u25B2   \u25B2   \u25B2   \u25B2</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502   \u2502   \u2502   \u2502   \u2502  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u250C\u2500\u2500\u2500+\u2500\u2500\u2500+\u2500\u2500\u2500+\u2500\u2500\u2500+\u2500\u2500\u2500\u2510</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502 a \u2502 b \u2502 c \u2502 d \u2502 c \u2502 IndexVector,the container of  IterIterWrapper</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500\u2500+\u2500\u2500\u2500+\u2500\u2500\u2500+\u2500\u2500\u2500+\u2500\u2500\u2500\u2518</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">a = v.begin()</span></span>
<span class="line"><span style="color:#A6ACCD;">b = ++a;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u250C\u2500\u2500\u2500+\u2500\u2500\u2500+</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502 A \u2502 B \u2502  the Container Foo</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500\u2500+\u2500\u2500\u2500+</span></span>
<span class="line"><span style="color:#A6ACCD;">A-&gt; iterator(a)</span></span>
<span class="line"><span style="color:#A6ACCD;">B-&gt; iterator(b)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><ul><li><code>class iteratoriterator</code>:</li><li><code>class IterIterWrapper</code></li></ul><h2 id="combinations" tabindex="-1">combinations <a class="header-anchor" href="#combinations" aria-hidden="true">#</a></h2><p>\u5177\u4F53\u7684\u4F7F\u7528\u89C1\u5BF9\u5E94\u7684code\u76EE\u5F55\u4E0B\u7684 <code>IterIterWrapper.cpp</code></p><p>\u6838\u5FC3\u539F\u7406,core principle</p><div class="language-plaintext line-numbers-mode"><button class="copy"></button><span class="lang">plaintext</span><pre><code><span class="line"><span style="color:#A6ACCD;">1 2 3 4 5 [6]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">0: initial </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">1-&gt;[1][2][3]</span></span>
<span class="line"><span style="color:#A6ACCD;">2-&gt;[1][2][4]</span></span>
<span class="line"><span style="color:#A6ACCD;">3-&gt;[1][2][5]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">4-&gt;[1][2][6] -&gt; fail,out of bound</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            v</span></span>
<span class="line"><span style="color:#A6ACCD;">so -&gt;[1][2][4] </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">items of from iter position (v) to last </span></span>
<span class="line"><span style="color:#A6ACCD;">change to pointer of left of v +2,+3,+4 ....</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">then add</span></span>
<span class="line"><span style="color:#A6ACCD;">      v</span></span>
<span class="line"><span style="color:#A6ACCD;">5-&gt;[1][3][4] </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">so pointer change succeed,steps 5 process succeed and exit</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">just process like above;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">last process </span></span>
<span class="line"><span style="color:#A6ACCD;">    v</span></span>
<span class="line"><span style="color:#A6ACCD;">-&gt; [3][4][5]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">the begin of choose array become the bound.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>? the usefulness of iteratoriterator and the architecture of IterIterWrapper</p><h2 id="permutations" tabindex="-1">permutations <a class="header-anchor" href="#permutations" aria-hidden="true">#</a></h2><p>\u6392\u5217</p><p>\u4F7F\u7528\u4E86STL\u4E2D\u7684<code>std::next_permutation</code>,\u6240\u4EE5\u4E0D\u80FD\u751F\u6210\u90E8\u5206\u7684\u6392\u5217</p>`,33),r=[l];function t(c,o,i,b,C,A){return a(),n("div",null,r)}var m=s(p,[["render",t]]);export{d as __pageData,m as default};
