import{_ as s,b as n,a,J as e}from"./chunks/framework.218694e7.js";const u=JSON.parse('{"title":"Core language concepts","description":"","frontmatter":{},"headers":[{"level":2,"title":"Core language concepts","slug":"core-language-concepts"},{"level":2,"title":"Comparison concepts","slug":"comparison-concepts"},{"level":2,"title":"Object concepts","slug":"object-concepts"},{"level":2,"title":"Callable concepts","slug":"callable-concepts"}],"relativePath":"cpp20/concept/concept_library.md"}'),p={name:"cpp20/concept/concept_library.md"},l=e(`<h1 id="concept-library" tabindex="-1">concept library <a class="header-anchor" href="#concept-library" aria-hidden="true">#</a></h1><p>\u63D0\u4F9B\u4E86\u5F88\u591A\u57FA\u7840\u7684<code>concept</code></p><ul><li><a href="https://en.cppreference.com/w/cpp/concepts" target="_blank" rel="noreferrer">Concepts library (since C++20) - cppreference.com</a></li></ul><p>\u4E3A\u4E86\u66F4\u65B9\u4FBF\u7406\u89E3\u7684\u5B9E\u73B0,[\u5728\u8FD9\u4E2A\u6587\u4EF6\u91CC][1],\u6211\u5B9E\u73B0\u4E86\uFF1A</p><ul><li>same as \uFF1Astd::is_same_v template \u7279\u5316</li><li>is_union,is_union_v</li><li>is_class,is_class_v,\u539F\u7406\uFF1A\u7C7B\u6709\u6210\u5458\u6570\u636E\u6307\u9488\uFF0CSFINAE</li><li>is_base_of,is_base_of_v,\u539F\u7406\uFF1A\u5B50\u7C7B\u6307\u9488\u53EF\u4EE5\u8F6C\u81EA\u52A8\u7236\u7C7B\u6307\u9488</li><li>convertible_to,\u539F\u7406 std::is_convertible_v \u548C static_cast</li><li>integral \u539F\u7406\uFF1Astd::is_integral_v(\u539F\u7406\uFF1A\u6BCF\u4E2A\u7C7B\u578B\u8FDB\u884C\u7279\u5316)</li><li>swappable,\u539F\u7406\uFF1Astd::ranges::swap</li></ul><h2 id="core-language-concepts" tabindex="-1">Core language concepts <a class="header-anchor" href="#core-language-concepts" aria-hidden="true">#</a></h2><div class="language-plaintext line-numbers-mode"><button class="copy"></button><span class="lang">plaintext</span><pre><code><span class="line"><span style="color:#A6ACCD;">same_as</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that a type is the same as another type</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">derived_from</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that a type is derived from another type</span></span>
<span class="line"><span style="color:#A6ACCD;">-&gt; std::is_base_of</span></span>
<span class="line"><span style="color:#A6ACCD;">-&gt; std::is_convertible_v -&gt; Derived * -&gt; Base*</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">convertible_to</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that a type is implicitly convertible to another type</span></span>
<span class="line"><span style="color:#A6ACCD;">- convertible_to,\u539F\u7406 std::is_convertible_v \u548C static_cast</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">common_reference_with</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that two types share a common reference type</span></span>
<span class="line"><span style="color:#A6ACCD;">std::same_as&lt; std::common_reference_t&lt;T,U&gt; , std::common_reference_t&lt;U,T&gt; ,</span></span>
<span class="line"><span style="color:#A6ACCD;">std::convertible_to&lt;T,std::common_reference_t&lt;T,U&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">std::convertible_to&lt;U,std::common_reference_t&lt;T,U&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">\u90FD\u53EF\u4EE5\u8F6C\u6362\u6210\u516C\u5171\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5B58\u5728\u4E00\u4E2A\u5171\u540C\u5F15\u7528\u7C7B\u578B\uFF0CT\uFF0CU\u90FD \u53EF\u4EE5\u8F6C\u6362\u5230</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u672C\u8D28\uFF1F\u6211\u4E0D\u61C2\uFF0C\u56E0\u4E3A\u6CA1\u6709\u76F8\u5173\u7684\u4EE3\u7801\u6765\u89E3\u91CA\u5B83\u7684\u4F5C\u7528\u4E0E\u542B\u4E49\uFF0C\u76EE\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6587\u6863\u91CC\u8FD8\u6709\u4E00\u4E2A\u6982\u5FF5\`equality preservation\` \u76F8\u7B49\u80FD\u529B\u7684\u4FDD\u6301</span></span>
<span class="line"><span style="color:#A6ACCD;">\u53EF\u4EE5\u53C2\u8003\u8FD9\u91CC\u7684\u6211\u5199\u7684\u6D4B\u8BD5\u7684\u4EE3\u7801 </span></span>
<span class="line"><span style="color:#A6ACCD;">https://github.com/rbookr/cpp-hub/tree/master/cpp20/concept/concept-library/common_reference_with.cpp</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">common_with</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that two types share a common type</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E0Ecommon_reference_with\u7684\u6982\u5FF5\u5DEE\u4E0D\u591A\uFF0C\u4E24\u4E2A\u6709\u4E00\u7C7B\u578BT\uFF0CU\u5B58\u4E00\u4E2A\u516C\u5171\u7C7B\u578B\uFF0C\u4E14\u53EF\u4EE5\u76F8\u4E92\u8F6C\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;">\u53EF\u4EE5\u53C2\u8003\u8FD9\u91CC\u7684\u6211\u5199\u7684\u6D4B\u8BD5\u7684\u4EE3\u7801 </span></span>
<span class="line"><span style="color:#A6ACCD;">https://github.com/rbookr/cpp-hub/tree/master/cpp20/concept/concept-library/common_with.cpp</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">integral</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that a type is an integral type</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5C31\u662F std::is_integral_v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">signed_integral</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that a type is an integral type that is signed</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5C31\u662F std::is_integral_v &amp;&amp; std::is_signed_v</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6709\u7B26\u53F7\u6574\u6570 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">unsigned_integral</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that a type is an integral type that is unsigned</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5C31\u662F std::is_integral_v &amp;&amp; !std::is_signed_v</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6709\u7B26\u53F7\u6574\u6570 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">floating_point</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that a type is a floating-point type</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5C31\u662Fis_point_v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">assignable_from&lt;LHS,RHS&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that a type is assignable from another type</span></span>
<span class="line"><span style="color:#A6ACCD;">\u53C8\u662F\u4E00\u4E2A\u96BE\u4EE5\u7406\u89E3\u7684\u6982\u5FF5</span></span>
<span class="line"><span style="color:#A6ACCD;">\u53EF\u4EE5\u53BB\u770Bcppreference\u4E0A\u7684\u6E90\u7801 </span></span>
<span class="line"><span style="color:#A6ACCD;">RHS\u8868\u8FBE\u5F0F\u7684\u7C7B\u578B\u4E0E\u503C\u5206\u7C7B\u53EF\u4EE5\u8D4B\u503C\u7ED9LHS\u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">\u9996\u5148\u6211\u5C31\u4E0D\u7406\u89E3\u5B83\u6709\u4EC0\u4E48\u7528,</span></span>
<span class="line"><span style="color:#A6ACCD;">cppreference\u5BF9\u5E94\u7684\u8282\u6709\u4E00\u5B9A\u7684\u89E3\u91CA</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">swappable</span></span>
<span class="line"><span style="color:#A6ACCD;">swappable_with</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that a type can be swapped or that two types can be swapped with each other</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">destructible</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that an object of the type can be destroyed</span></span>
<span class="line"><span style="color:#A6ACCD;">std::is_notrow_destructible</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">constructible_from&lt;T,...args&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that a variable of the type can be constructed from or bound to a set of argument types</span></span>
<span class="line"><span style="color:#A6ACCD;">std::destructible &amp;&amp;  std::is_construct_v&lt;T,args...&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">default_initializable</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that an object of a type can be default constructed</span></span>
<span class="line"><span style="color:#A6ACCD;">std::constructible_from&lt;T&gt; &amp;&amp; requires { T{};} &amp;&amp; :: new T</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">move_constructible</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that an object of a type can be move constructed</span></span>
<span class="line"><span style="color:#A6ACCD;">std::constructible_from&lt;T,T&gt; &amp;&amp; std::convertible_to&lt;T,T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">copy_constructible</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that an object of a type can be copy constructed and move constructed</span></span>
<span class="line"><span style="color:#A6ACCD;">----- \u770Bcppreference \u5427</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br></div></div><h2 id="comparison-concepts" tabindex="-1">Comparison concepts <a class="header-anchor" href="#comparison-concepts" aria-hidden="true">#</a></h2><div class="language-plaintext line-numbers-mode"><button class="copy"></button><span class="lang">plaintext</span><pre><code><span class="line"><span style="color:#A6ACCD;">boolean-testable</span></span>
<span class="line"><span style="color:#A6ACCD;">\u53EF\u8F6C\u6362\u6210bool</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that a type can be used in Boolean contexts</span></span>
<span class="line"><span style="color:#A6ACCD;">(exposition-only concept)</span></span>
<span class="line"><span style="color:#A6ACCD;">equality_comparable</span></span>
<span class="line"><span style="color:#A6ACCD;">equality_comparable_with</span></span>
<span class="line"><span style="color:#A6ACCD;">\u53EF\u4EE5  == \uFF0C!= \u6BD4\u8F83 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that operator == is an equivalence relation</span></span>
<span class="line"><span style="color:#A6ACCD;">totally_ordered</span></span>
<span class="line"><span style="color:#A6ACCD;">totally_ordered_with</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that the comparison operators on the type yield a total order</span></span>
<span class="line"><span style="color:#A6ACCD;">TODO ?? \u4E0D\u61C2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Defined in header &lt;compare&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">three_way_comparable</span></span>
<span class="line"><span style="color:#A6ACCD;">three_way_comparable_with</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that operator &lt;=&gt; produces consistent result on given types</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="object-concepts" tabindex="-1">Object concepts <a class="header-anchor" href="#object-concepts" aria-hidden="true">#</a></h2><div class="language-plaintext line-numbers-mode"><button class="copy"></button><span class="lang">plaintext</span><pre><code><span class="line"><span style="color:#A6ACCD;">movable</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that an object of a type can be moved and swapped</span></span>
<span class="line"><span style="color:#A6ACCD;">copyable</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that an object of a type can be copied, moved, and swapped</span></span>
<span class="line"><span style="color:#A6ACCD;">semiregular</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that an object of a type can be copied, moved, swapped, and default constructed</span></span>
<span class="line"><span style="color:#A6ACCD;">regular</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that a type is regular, that is, it is both semiregular and equality_comparable</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="callable-concepts" tabindex="-1">Callable concepts <a class="header-anchor" href="#callable-concepts" aria-hidden="true">#</a></h2><div class="language-plaintext line-numbers-mode"><button class="copy"></button><span class="lang">plaintext</span><pre><code><span class="line"><span style="color:#A6ACCD;">invocable</span></span>
<span class="line"><span style="color:#A6ACCD;">regular_invocable</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that a callable type can be invoked with a given set of argument types</span></span>
<span class="line"><span style="color:#A6ACCD;">predicate</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that a callable type is a Boolean predicate</span></span>
<span class="line"><span style="color:#A6ACCD;">\u53EF\u4EE5call\uFF0C\u4E14\u8FD4\u56DE\u503C\u4E3Abool</span></span>
<span class="line"><span style="color:#A6ACCD;">std::invoke_result_t&lt;T,args..&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">relation</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that a callable type is a binary relation</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">equivalence_relation</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that a relation imposes an equivalence relation</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">strict_weak_order</span></span>
<span class="line"><span style="color:#A6ACCD;">specifies that a relation imposes a strict weak ordering</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>[1]: &lt; <a href="https://github.com/rbookr/cpp-hub/tree/master/cpp20/concept/concept-library/common.hpp" target="_blank" rel="noreferrer">https://github.com/rbookr/cpp-hub/tree/master/cpp20/concept/concept-library/common.hpp</a>&gt;</p>`,14),c=[l];function r(t,i,o,b,C,A){return a(),n("div",null,c)}var y=s(p,[["render",r]]);export{u as __pageData,y as default};
