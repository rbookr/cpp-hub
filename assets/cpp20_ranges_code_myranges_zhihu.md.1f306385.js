import{_ as s,b as n,a,J as e}from"./chunks/framework.218694e7.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"cpp20/ranges/code/myranges/zhihu.md"}'),p={name:"cpp20/ranges/code/myranges/zhihu.md"},l=e(`<p>#\u4E3Agcc10\u7684ranges\u5199\u81EA\u5B9A\u4E49view</p><p>gcc10\u662F\u5BF9C++20\u7684\u7279\u6027\u652F\u6301\u5F97\u6700\u591A\u7684\u4E00\u4E2A\u7F16\u8BD1\u5668\uFF0C\u652F\u6301\u5305\u62ECranges\u5728\u5185\u7684\u8BF8\u591A\u7279\u6027\u3002gcc10\u7684\u53D1\u5E03\u65E5\u671F\u539F\u672C\u662F\u5728\u4ECA\u5E74\u4E09\u56DB\u6708\u4EFD\uFF0C\u73B0\u5728\u770B\u6765\u6709\u6240\u5EF6\u8FDF\u3002\u4E0D\u8FC7\u5F88\u591A\u7279\u6027\u5728trunk\u4E2D\u5C31\u80FD\u7528\uFF0C\u5305\u62EC\u5BF9ranges\uFF0C\u6211\u5DF2\u8BD5\u7528\u4E00\u6BB5\u65F6\u95F4\u3002</p><p>\u6211\u4E4B\u524D\u53D1\u8FC7\u4E00\u7BC7ranges\u7684\u5165\u95E8\u6587\u7AE0\uFF0C\u5F53\u65F6\u7528\u7684\u662Frange-v3\u5E93\uFF0Crange-v3\u662F\u4E3A\u90A3\u4E9B\u4E0D\u652F\u6301concept\u7684\u7F16\u8BD1\u5668\u5199\u7684\uFF0C\u56E0\u4E3A\u8981\u6A21\u62DFconcept\uFF0C\u6240\u4EE5\u7F16\u8BD1\u901F\u5EA6\u5947\u6162\u3002gcc10\u4E2D\u7684ranges\u662F\u7B2C\u4E00\u4E2A\u5728\u8BD1\u5668\u4E2D\u53D1\u5E03\u7684\u5B98\u65B9ranges\uFF0C\u6CA1\u6709\u7F16\u8BD1\u901F\u5EA6\u6162\u7684\u95EE\u9898\u3002</p><p>gcc10\u4E2D\u7684ranges\u5934\u6587\u4EF6\u53EA\u67093000\u591A\u884C\u4EE3\u7801\uFF0C\u5305\u542B\u4E86C++20\u4E2D\u6240\u89C4\u5B9A\u7684\u4E00\u4E9Brange/view\u7C7B\u3002ranges\u7684\u76EE\u6807\u662F\u63D0\u4F9B\u4E00\u5957ranges/views/adaptors\u8BBE\u65BD\uFF0C\u8BA9\u7A0B\u5E8F\u5458\u7528\u8FD9\u4E9B\u6807\u51C6\u8BBE\u65BD\u8FDB\u884C\u7EC4\u5408\uFF0C\u6765\u5B8C\u6210\u5404\u79CD\u9700\u6C42\u3002\u7528\u8FD9\u79CD\u98CE\u683C\u6765\u5199\u4EE3\u7801\uFF0C\u53EF\u4EE5\u7701\u6389\u5F88\u591A\u5FAA\u73AF\u548C\u8FB9\u754C\u5224\u65AD\uFF0C\u7701\u65F6\u7701\u529B\u3002\u6240\u4EE5ranges\u88AB\u5305\u62ECC++\u4E4B\u7236\u5728\u5185\u7684\u4EBA\u79F0\u4E3A\u4E0B\u4E00\u4EE3STL\uFF0C\u5176\u91CD\u8981\u6027\u53EF\u60F3\u800C\u77E5\u3002</p><p>\u6709\u65F6\u5019\u6807\u51C6\u5E93\u4E2D\u63D0\u4F9B\u7684ranges\u8BBE\u65BD\u4E0D\u591F\uFF0C\u9700\u8981\u7A0B\u5E8F\u5458\u7F16\u5199\u81EA\u5DF1\u7684view\u3002\u53EF\u60DCC++20\u8FDE\u6807\u6CE8\u5E93\u4E2D\u63D0\u4F9B\u7684view\u5C31\u592A\u5C11\uFF0C\u5305\u62ECcycle\u3001zip\u8FD9\u6837\u5E38\u89C1\u7684\u90FD\u6CA1\u6709\u3002\u672C\u6587\u5C31\u4EE5\u5C1D\u8BD5\u5B9A\u4E49\u8FD9\u4E24\u4E2A\u4E1C\u4E1C\uFF0C\u6765\u6F14\u793A\u81EA\u5B9A\u4E49view\u7684\u65B9\u6CD5\u3002</p><p>\u5E72\u652F\u7EAA\u5E74\u6CD5\u753110\u5929\u5E72\u548C12\u5730\u652F\u8F6E\u6D41\u7EC4\u5408\u800C\u6765\uFF0C60\u5E74\u4E00\u4E2A\u8F6E\u56DE\u3002\u6211\u7528\u8FD9\u4E2A\u4F8B\u5B50\u6765\u6F14\u793Acycle\u548Czip\u7684\u7528\u6CD5\u3002\u6211\u8981\u7684\u6548\u679C\u5982\u4E0B\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">namespace vs = std::ranges::views;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">int main() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    vector v1 {&quot;\u7532&quot;, &quot;\u4E59&quot;, &quot;\u4E19&quot;, &quot;\u4E01&quot;, &quot;\u620A&quot;, &quot;\u5DF1&quot;, &quot;\u5E9A&quot;, &quot;\u8F9B&quot;, &quot;\u58EC&quot;, &quot;\u7678&quot;};</span></span>
<span class="line"><span style="color:#A6ACCD;">    vector v2 {&quot;\u5B50&quot;, &quot;\u4E11&quot;, &quot;\u5BC5&quot;, &quot;\u536F&quot;, &quot;\u8FB0&quot;, &quot;\u5DF3&quot;, &quot;\u5348&quot;, &quot;\u672A&quot;, &quot;\u7533&quot;, &quot;\u9149&quot;, &quot;\u620C&quot;, &quot;\u4EA5&quot;};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    auto a = v1 | vs::cycle;</span></span>
<span class="line"><span style="color:#A6ACCD;">    auto b = v2 | vs::cycle;</span></span>
<span class="line"><span style="color:#A6ACCD;">    auto c = vs::zip(a, b) | vs::take(60);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    for(auto&amp;&amp; [x, y]: c)</span></span>
<span class="line"><span style="color:#A6ACCD;">    	cout&lt;&lt;x&lt;&lt;y&lt;&lt;&quot; &quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    cout&lt;&lt;&quot;\\n&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4EE3\u7801\u4E2D\u7684cycle\u548Czip\u5C31\u662F\u672C\u6587\u8981\u5B9E\u73B0\u7684\u81EA\u5B9A\u4E49view(\u51C6\u786E\u5730\u8BF4\u662Fview adaptor)\u3002</p><p>\u81EA\u5B9A\u4E49view\u5927\u81F4\u5206\u4E3A\u56DB\u6B65\uFF1A</p><ol><li>\u5B9A\u4E49\u4E00\u4E2Aview\u7C7B\u4ECE<code>view_base</code>\u7EE7\u627F\uFF0C\u6807\u51C6\u5E93\u4E2D\u5B9A\u4E49\u4E86<code>view_base</code>\u7684\u5B50\u7C7B<code>view_interface</code>\uFF0C\u76F4\u63A5\u4ECE<code>view_interface</code>\u7EE7\u627F\u53EF\u4EE5\u7701\u4E00\u4E9B\u4E8B\u60C5\uFF1B</li><li>\u4E3Aview\u7C7B\u5B9A\u4E49iterator\u548Csetinel\uFF0C\u5B9E\u73B0<code>*</code>\u548C<code>++</code>\u4E4B\u7C7B\u7684\u8FD0\u7B97\u7B26\uFF1B</li><li>\u4E3Aview\u5B9A\u4E49begin()\u548Cend()\u51FD\u6570\uFF1B</li><li>\u4E3Aview\u5B9A\u4E49adaptor\u3002</li></ol><p>STL\u7684\u6807\u51C6\u5E93\u7684\u7F16\u7801\u98CE\u683C\u6709\u5F88\u591A\u4E0B\u5212\u7EBF\uFF0C\u8FD9\u79CD\u98CE\u683C\u662F\u6545\u610F\u7684\uFF0C\u53EB\u505A\u4EE3\u7801\u4E11\u5316(uglification)\uFF0C\u4F8B\u5982\u4EE5<code>_M_</code>\u5F00\u5934\u7684\u8868\u793A\u7C7B\u6210\u5458\uFF0C<code>_\u5927\u5199\u5B57\u6BCD\u5F00\u5934\u52A0\u5C0F\u5199\u5B57\u6BCD</code>\u8868\u793A\u7C7B\u540D\u6216\u8005\u6A21\u677F\u53C2\u6570\u7C7B\u578B\u540D\uFF0C<code>__\u5C0F\u5199\u5B57\u6BCD</code>\u8868\u793A\u5C40\u90E8\u53D8\u91CF\uFF0C\u7B49\u7B49\u3002\u8FD9\u79CD\u98CE\u683C\u521A\u5F00\u59CB\u770B\u8D77\u6765\u771F\u662F\u5F88\u4E11\uFF0C\u6211\u5C1D\u8BD5\u4E86\u4E00\u4E0B\uFF0C\u5176\u5B9E\u8FD8\u597D\u3002</p><p>\u4E11\u6CA1\u5173\u7CFB\uFF0C\u53EA\u8981\u4E11\u51FA\u98CE\u683C\u4E11\u51FA\u6C34\u5E73\uFF0C\u90A3\u5C31\u662F\u725B\u7684\u4E1C\u897F\u3002</p><p>\u5148\u6765\u770B<code>cycle_view</code>\u5427\uFF0C\u5C31\u662F\u60F3\u8981\u4E00\u4E2A\u5E8F\u5217\u7684\u65E0\u9650\u5FAA\u73AF\uFF0C\u5230\u4E86\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u4EE5\u540E\u53C8\u7ED5\u56DE\u6765\u5230\u7B2C\u4E00\u4E2A\u3002\u5B9E\u73B0\u5B83\u7684\u65B9\u6CD5\u5C31\u662F\u5728iterator\u7684<code>++</code>\u4E2D\u505A\u4E00\u4E2A\u5224\u65AD\u5373\u53EF\u3002\u53EF\u4EE5\u8FD9\u6837\u6765\u5B9E\u73B0\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">constexpr _Iterator&amp; operator++()</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	++_M_current;</span></span>
<span class="line"><span style="color:#A6ACCD;">	if(_M_current == ranges::end(_M_parent-&gt;_M_base)) // \u5230\u6700\u540E\u4E86\uFF0C\u5C06\u8FED\u4EE3\u5668\u653E\u5230\u7B2C\u4E00\u4E2A\u53BB</span></span>
<span class="line"><span style="color:#A6ACCD;">		_M_current = ranges::begin(_M_parent-&gt;_M_base);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	return *this;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>zip_view</code>\u6CA1\u6709\u4EC0\u4E48\u7279\u522B\u7684\uFF0C\u5C31\u662F\u5728\u8981\u4FDD\u5B58\u4E24\u4E2A\u5E8F\u5217\u7684\u6307\u9488\uFF0C\u6BCF\u6B21\u8981\u8FD4\u56DE\u4E24\u4E2A\u503C\uFF0C\u6211\u7528pair\u8FD4\u56DE\u3002</p><p>\u5B9E\u73B0view\u4EE5\u540E\u9700\u8981\u5B9A\u4E49adaptor\uFF0Cgcc10\u4E2D\u5B9A\u4E49adaptor\u5F88\u7B80\u5355\uFF0C\u53EA\u8981\u5B9A\u4E00\u4E2Alambda\u5373\u53EF\u3002\u5BF9\u4E8E\u6784\u9020\u51FD\u6570\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\u7684view\uFF0C\u8FD4\u56DE<code>__adaptor::_RangeAdaptorClosure</code>\u7C7B\u578B\uFF1B\u5BF9\u4E8E\u6784\u9020\u51FD\u6570\u53C2\u6570\u5728\u4E00\u4E2A\u4EE5\u4E0A\u7684view\uFF0C\u8FD4\u56DE<code>__adaptor::_RangeAdaptor</code>\u7C7B\u578B\u3002\u672C\u6587\u4E2D\u7684\u4E24\u4E2Aview\u521A\u597D\u6F14\u793A\u8FD9\u4E24\u79CD\u60C5\u51B5\u3002\u4EE5<code>cycle_view</code>\u4E3A\u4F8B\uFF0C\u53EA\u8981\u5982\u4E0B\u5B9A\u4E49\u5373\u53EF\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">template &lt;input_range _Range&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">cycle_view(_Range &amp;&amp;) -&gt; cycle_view&lt;views::all_t&lt;_Range&gt;&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">namespace views {</span></span>
<span class="line"><span style="color:#A6ACCD;">	inline constexpr __adaptor::_RangeAdaptorClosure cycle</span></span>
<span class="line"><span style="color:#A6ACCD;">	= [] &lt;viewable_range _Range&gt; (_Range&amp;&amp; __r)</span></span>
<span class="line"><span style="color:#A6ACCD;">	{</span></span>
<span class="line"><span style="color:#A6ACCD;">		return cycle_view { std::forward&lt;_Range&gt;(__r) };</span></span>
<span class="line"><span style="color:#A6ACCD;">	};</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u6309\u7167gcc10\u7684ranges\u5934\u6587\u4EF6\u4E2D\u5176\u5B83view\u7684\u4EE3\u7801\uFF0C\u6765\u5B9E\u73B0\u81EA\u5DF1\u60F3\u8981\u7684view\u7684\u529F\u80FD\u975E\u5E38\u7B80\u5355\u3002\u4F46\u662F\u5982\u679C\u8981\u4F18\u5316\uFF0C\u8FD8\u662F\u6709\u5F88\u591A\u4E8B\u60C5\u8981\u505A\u7684\uFF0C\u6BD4\u5982\u9700\u8981\u5B9E\u73B0\u66F4\u591A\u7684\u8FD0\u7B97\u7B26\uFF1B\u4E3A\u4E86\u63D0\u9AD8\u8FD0\u884C\u6548\u7387\uFF0C\u9700\u8981\u5BF9\u5404\u79CDconcept\u6765\u8FDB\u884C\u91CD\u8F7D\uFF1B\u4E3A\u4E86\u63D0\u9AD8\u62F7\u8D1D\u901F\u5EA6\uFF0C\u8981\u8003\u8651\u5982\u4F55\u51CF\u5C11\u6210\u5458\u53D8\u91CF\u3002\u603B\u4E4B\uFF0C\u81EA\u5DF1\u52A8\u624B\u5B9E\u73B0\u4E00\u904D\u624D\u4F1A\u6709\u66F4\u6DF1\u7684\u4F53\u4F1A\u3002<a href="https://github.com/franktea/myranges" target="_blank" rel="noreferrer">\u6211\u7684\u4EE3\u7801\u5728\u8FD9\u91CC</a>\u3002</p><p>\u6709\u5174\u8DA3\u7684\u5FEB\u81EA\u5DF1\u8BD5\u8BD5\u5427\u3002\u6BD5\u7ADF\uFF0Cranges\u7684\u65F6\u4EE3\u8981\u6765\u4E86\u3002</p>`,19),c=[l];function o(r,t,i,u,b,d){return a(),n("div",null,c)}var _=s(p,[["render",o]]);export{A as __pageData,_ as default};
