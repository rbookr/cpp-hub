import{_ as s,b as n,a,J as l}from"./chunks/framework.218694e7.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u5947\u6280\u6DEB\u5DE7/\u7236\u7C7B\u4E2D\u6709\u5B50\u7C7B\u7C7B\u578B.md"}'),p={name:"\u5947\u6280\u6DEB\u5DE7/\u7236\u7C7B\u4E2D\u6709\u5B50\u7C7B\u7C7B\u578B.md"},e=l(`<div class="language-plaintext line-numbers-mode"><button class="copy"></button><span class="lang">plaintext</span><pre><code><span class="line"><span style="color:#A6ACCD;">/* author: Rainboy email: rainboylvx@qq.com  time: 2021\u5E74 08\u6708 13\u65E5 \u661F\u671F\u4E94 23:52:49 CST */</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &lt;bits/stdc++.h&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">using namespace std;</span></span>
<span class="line"><span style="color:#A6ACCD;">typedef long long ll;</span></span>
<span class="line"><span style="color:#A6ACCD;">const int maxn = 1e6+5,maxe = 1e6+5; //\u70B9\u4E0E\u8FB9\u7684\u6570\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">int n,m;</span></span>
<span class="line"><span style="color:#A6ACCD;">/* \u5B9A\u4E49\u5168\u5C40\u53D8\u91CF */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//struct aa;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">template&lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">struct aa { // \u5728\u7236\u7C7B\u4E2D\u8FD4\u56DE\u5B50\u7C7B\u7684\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">    T return_bb() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return T();</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">template&lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">struct bb : public aa&lt; bb&lt;T&gt; &gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    T val;</span></span>
<span class="line"><span style="color:#A6ACCD;">    bb():val{10} {</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    void ok(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        cout &lt;&lt; &quot;ok&quot; &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">int main(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    bb&lt;int&gt; myb;</span></span>
<span class="line"><span style="color:#A6ACCD;">    auto ret = myb.return_bb();</span></span>
<span class="line"><span style="color:#A6ACCD;">    cout &lt;&lt; ret.val &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#A6ACCD;">    myb.ok();</span></span>
<span class="line"><span style="color:#A6ACCD;">    return 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div>`,1),r=[e];function c(t,o,i,b,A,C){return a(),n("div",null,r)}var y=s(p,[["render",c]]);export{u as __pageData,y as default};
