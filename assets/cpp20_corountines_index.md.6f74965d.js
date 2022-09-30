import{_ as e,b as a,a as s,J as n}from"./chunks/framework.218694e7.js";var l="/assets/142543013.2db24f09.jpg";const F=JSON.parse('{"title":"coroutine \u534F\u7A0B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u54EA\u4E9B\u8D44\u6E90","slug":"\u54EA\u4E9B\u8D44\u6E90"},{"level":2,"title":"what is a coroutine?","slug":"what-is-a-coroutine"},{"level":2,"title":"\u9650\u5236","slug":"\u9650\u5236"},{"level":2,"title":"Q: coroutine \u6709\u4E9B\u7EC4\u4EF6\u4E0E\u6982\u5FF5","slug":"q-coroutine-\u6709\u4E9B\u7EC4\u4EF6\u4E0E\u6982\u5FF5"},{"level":3,"title":"1 Q which is promise object","slug":"_1-q-which-is-promise-object"},{"level":2,"title":"Q: \u5B83\u4EEC\u5982\u4F55\u914D\u5408/\u7EC4\u5408","slug":"q-\u5B83\u4EEC\u5982\u4F55\u914D\u5408-\u7EC4\u5408"},{"level":2,"title":"\u5B9E\u4F8B\u4EE3\u7801","slug":"\u5B9E\u4F8B\u4EE3\u7801"},{"level":2,"title":"\u534F\u7A0B\u7684\u6267\u884C\u8FC7\u7A0B\u662F\u600E\u6837\u7684 coroutine is a function that can suspend execution to be resumed later.","slug":"\u534F\u7A0B\u7684\u6267\u884C\u8FC7\u7A0B\u662F\u600E\u6837\u7684-coroutine-is-a-function-that-can-suspend-execution-to-be-resumed-later"},{"level":2,"title":"what is promise Object","slug":"what-is-promise-object"},{"level":2,"title":"awaitable","slug":"awaitable"},{"level":2,"title":"co_await \u6267\u884C\u8FC7\u7A0B","slug":"co-await-\u6267\u884C\u8FC7\u7A0B"},{"level":3,"title":"[#](#await-resume) await_resume","slug":"await-resume"},{"level":2,"title":"co_yield \u6267\u884C\u8FC7\u7A0B","slug":"co-yield-\u6267\u884C\u8FC7\u7A0B"},{"level":3,"title":"1. convert to awaitable","slug":"_1-convert-to-awaitable"},{"level":3,"title":"2. get awaiter","slug":"_2-get-awaiter"},{"level":3,"title":"3. call awaiter.await_ready()","slug":"_3-call-awaiter-await-ready"},{"level":3,"title":"4. call awaiter.await_resume()","slug":"_4-call-awaiter-await-resume"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"cpp20/corountines/index.md"}'),o={name:"cpp20/corountines/index.md"},t=n(`<h1 id="coroutine-\u534F\u7A0B" tabindex="-1">coroutine \u534F\u7A0B <a class="header-anchor" href="#coroutine-\u534F\u7A0B" aria-hidden="true">#</a></h1><h2 id="\u54EA\u4E9B\u8D44\u6E90" tabindex="-1">\u54EA\u4E9B\u8D44\u6E90 <a class="header-anchor" href="#\u54EA\u4E9B\u8D44\u6E90" aria-hidden="true">#</a></h2><ul><li><a href="https://www.scs.stanford.edu/~dm/blog/c++-coroutines.html" target="_blank" rel="noreferrer">My tutorial and take on C++20 coroutines</a><ul><li><a href="https://github.com/rbookr/cpp-hub/blob/master/cpp20/corountines/c%2B%2B-coroutines.pdf" target="_blank" rel="noreferrer">\u6211\u5B58\u7684github\u5730\u5740</a></li></ul></li><li>\u5F88\u597D\u7684\u89C6\u9891\u6559\u7A0B <a href="https://b23.tv/wyaKYsL" target="_blank" rel="noreferrer">C++ 20 \u7684\u534F\u7A0B\u5176\u5B9E\u5C31\u662F\u4E00\u9996\u6B4C\uFF1F-\u54D4\u54E9\u54D4\u54E9</a><ul><li>\u5BF9\u5E94\u7684\u6559\u6848 <a href="https://www.bennyhuo.com/book/cpp-coroutines/00-foreword.html" target="_blank" rel="noreferrer">https://www.bennyhuo.com/book/cpp-coroutines/00-foreword.html</a></li></ul></li><li><a href="https://en.cppreference.com/w/cpp/language/coroutines" target="_blank" rel="noreferrer">Coroutines (C++20) - cppreference.com</a></li></ul><h2 id="what-is-a-coroutine" tabindex="-1">what is a coroutine? <a class="header-anchor" href="#what-is-a-coroutine" aria-hidden="true">#</a></h2><blockquote><p>A coroutine is a function that can suspend execution to be resumed later.</p></blockquote><p>\u534F\u7A0B\u5FC5\u987B\u5305\u542B\u8FD9\u4E2A\u4E09\u4E2A\u8FD0\u7B97\u7B26 <code>co_await</code> <code>co_yield</code> <code>co_return</code> \u4E00\u4E2A\u6216\u591A\u4E2A.</p><h2 id="\u9650\u5236" tabindex="-1">\u9650\u5236 <a class="header-anchor" href="#\u9650\u5236" aria-hidden="true">#</a></h2><p>\u534F\u7A0B\u4E0D\u80FD\u4F7F\u7528\u53D8\u957F\u5B9E\u53C2\uFF0C\u666E\u901A\u7684 return \u8BED\u53E5\uFF0C\u6216\u5360\u4F4D\u7B26\u8FD4\u56DE\u7C7B\u578B\uFF08auto \u6216 Concept\uFF09\u3002 constexpr \u51FD\u6570\u3001\u6784\u9020\u51FD\u6570\u3001\u6790\u6784\u51FD\u6570\u53CA main \u51FD\u6570 \u4E0D\u80FD\u662F\u534F\u7A0B\u3002</p><h2 id="q-coroutine-\u6709\u4E9B\u7EC4\u4EF6\u4E0E\u6982\u5FF5" tabindex="-1">Q: coroutine \u6709\u4E9B\u7EC4\u4EF6\u4E0E\u6982\u5FF5 <a class="header-anchor" href="#q-coroutine-\u6709\u4E9B\u7EC4\u4EF6\u4E0E\u6982\u5FF5" aria-hidden="true">#</a></h2><ul><li>keywords / operator <ul><li>co_await</li><li>co_return</li><li>co_yield</li></ul></li><li>concept \u6982\u5FF5 <ul><li>promise object,\u627F\u8BFA\u5BF9\u8C61 <ul><li>\u5982\u679C\u901A\u8FC7<code>std::coroutine_traits</code>\u6839\u636E\u534F\u7A0B\u7684\u8FD4\u56DE\u7C7B\u578B\u6765\u5F97\u5230<code>promise_type</code></li><li><code>promise object</code> \u5982\u4F55\u5728<code>construct</code></li><li><code>promise object</code> \u5728heap\u7684state\u4E0A</li><li><code>promise object</code> \u5185\u90E8\u7684\u6210\u5458\u51FD\u6570\u4F55\u65F6\u88AB\u8C03\u7528</li></ul></li><li>coroutine handle,\u534F\u7A0B\u53E5\u67C4 <ul><li>\u76F8\u5F53\u4E8E\u4E00\u4E2A\u6307\u9488</li><li>\u5982\u4F55\u5F97\u5230\u53E5\u67C4</li><li>\u5982\u4F55\u8D4B\u503C?</li></ul></li><li>coroutine state,\u534F\u7A0B\u72B6\u6001 <ul><li>running</li><li>suspend</li><li>resumed</li><li>finish</li></ul></li></ul></li></ul><h3 id="_1-q-which-is-promise-object" tabindex="-1">1 Q which is promise object <a class="header-anchor" href="#_1-q-which-is-promise-object" aria-hidden="true">#</a></h3><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><div class="highlight-lines"><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br></div><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//\u534F\u7A0B\u7684\u8FD4\u56DE\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#C792EA;">struct</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">MyRet</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //\u534F\u7A0B\u7684\u8FD4\u56DE\u5BF9\u8C61,\u5FC5\u987B\u6709 promise_type</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">struct</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">promise_type</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;font-style:italic;"> //\u8FD9\u4E2A\u5C31\u662F promise object</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">MyRet</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">get_return_object</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">coroutine_handle</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">promise_type</span><span style="color:#89DDFF;">&gt;::</span><span style="color:#82AAFF;">from_promise</span><span style="color:#89DDFF;">(*this)};</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">suspend_always</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">initial_suspend</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">noexcept</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{};</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">suspend_always</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">final_suspend</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">noexcept</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{};</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">void</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">return_void</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">void</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">unhandled_exception</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5982\u4F55\u7406\u89E3,\u5176\u5B9E\u662F\u7406\u89E3\u5B83\u6267\u884C\u7684\u8FC7\u7A0B</p><p>\u5982\u679C\u6709\u4E00\u4E2A\u534F\u7A0B\u5982:<code>MyRet coro()</code>,\u5F53\u4F60\u7B2C\u4E00\u6B21\u6267\u884C\u5B83\u65F6</p><blockquote><p>When a coroutine begins execution, it performs the following:</p><ul><li>allocates the coroutine state object using operator new (see below)</li><li>copies all function parameters to the coroutine state: by-value parameters are moved or copied, by-reference parameters remain references (and so may become dangling if the coroutine is resumed after the lifetime of referred object ends)</li><li>calls the constructor for the promise object. If the promise type has a constructor that takes all coroutine parameters, that constructor is called, with post-copy coroutine arguments. Otherwise the default constructor is called.</li><li>calls promise.get_return_object() and keeps the result in a local variable. The result of that call will be returned to the caller when the coroutine first suspends. Any exceptions thrown up to and including this step propagate back to the caller, not placed in the promise.</li><li>calls promise.initial_suspend() and co_awaits its result. Typical Promise types either return a suspend_always, for lazily-started coroutines, or suspend_never, for eagerly-started coroutines.</li><li>when co_await promise.initial_suspend() resumes, starts executing the body of the coroutine</li></ul><p>When a coroutine reaches a suspension point</p><ul><li>the return object obtained earlier is returned to the caller/resumer, after implicit conversion to the return type of the coroutine, if necessary.</li></ul><p>When a coroutine reaches the co_return statement, it performs the following:</p><ul><li>calls promise.return_void() for <ul><li>co_return;</li><li>co_return expr where expr has type void</li><li>falling off the end of a void-returning coroutine. The behavior is undefined if the Promise type has no Promise::return_void() member function in this case.</li></ul></li><li>or calls promise.return_value(expr) for co_return expr where expr has non-void type</li><li>destroys all variables with automatic storage duration in reverse order they were created.</li><li>calls promise.final_suspend() and co_awaits the result.</li></ul><p>If the coroutine ends with an uncaught exception, it performs the following:</p><ul><li>catches the exception and calls promise.unhandled_exception() from within the catch-block</li><li>calls promise.final_suspend() and co_awaits the result (e.g. to resume a continuation or publish a result). It&#39;s undefined behavior to resume a coroutine from this point.</li></ul><p>When the coroutine state is destroyed either because it terminated via co_return or uncaught exception, or because it was destroyed via its handle, it does the following:</p><ul><li>calls the destructor of the promise object.</li><li>calls the destructors of the function parameter copies.</li><li>calls operator delete to free the memory used by the coroutine state</li><li>transfers execution back to the caller/resumer.</li></ul></blockquote><h2 id="q-\u5B83\u4EEC\u5982\u4F55\u914D\u5408-\u7EC4\u5408" tabindex="-1">Q: \u5B83\u4EEC\u5982\u4F55\u914D\u5408/\u7EC4\u5408 <a class="header-anchor" href="#q-\u5B83\u4EEC\u5982\u4F55\u914D\u5408-\u7EC4\u5408" aria-hidden="true">#</a></h2><p><img src="`+l+`" alt="\u6765\u81EA B\u7AD9up bennyhuo\u4E0D\u662F\u7B97\u547D\u7684"></p><h2 id="\u5B9E\u4F8B\u4EE3\u7801" tabindex="-1">\u5B9E\u4F8B\u4EE3\u7801 <a class="header-anchor" href="#\u5B9E\u4F8B\u4EE3\u7801" aria-hidden="true">#</a></h2><h2 id="\u534F\u7A0B\u7684\u6267\u884C\u8FC7\u7A0B\u662F\u600E\u6837\u7684-coroutine-is-a-function-that-can-suspend-execution-to-be-resumed-later" tabindex="-1">\u534F\u7A0B\u7684\u6267\u884C\u8FC7\u7A0B\u662F\u600E\u6837\u7684 coroutine is a function that can suspend execution to be resumed later. <a class="header-anchor" href="#\u534F\u7A0B\u7684\u6267\u884C\u8FC7\u7A0B\u662F\u600E\u6837\u7684-coroutine-is-a-function-that-can-suspend-execution-to-be-resumed-later" aria-hidden="true">#</a></h2><p>\u534F\u7A0B\u4E0E\u4EE5\u4E0B\u5BF9\u8C61\u5173\u8054</p><ul><li>promise object</li><li>coroutine_handle</li><li>coroutine state <ul><li>promise obeject</li><li>arguments (all copied by value)</li><li>stop point,\u4F7F\u5F97\u6062\u590D\u65F6\u7A0B\u5E8F\u77E5\u6653\u8981\u4ECE\u4F55\u5904\u7EE7\u7EED\uFF0C\u9500\u6BC1\u65F6\u77E5\u6653\u6709\u54EA\u4E9B\u5C40\u90E8\u53D8\u91CF\u5728\u4F5C\u7528\u57DF\u5185</li><li>\u751F\u5B58\u671F\u8DE8\u8FC7\u5F53\u524D\u6682\u505C\u70B9\u7684\u5C40\u90E8\u53D8\u91CF\u548C\u4E34\u65F6\u91CF</li></ul></li></ul><h2 id="what-is-promise-object" tabindex="-1">what is promise Object <a class="header-anchor" href="#what-is-promise-object" aria-hidden="true">#</a></h2><p>responsibilites of coroutine-Promise;</p><ul><li><p>return_void()/return_value()/yield_value()</p></li><li><p>unhandle_exception()</p></li><li><p>c++20 \u7684 coroutine \u662F\u7ED9\u5E93\u7684\u5F00\u53D1\u8005\u4F7F\u7528\u7684\uFF0C\u6240\u4EE5\u770B\u8D77\u6765\u6BD4\u8F83\u590D\u6742</p></li><li><p>c++20 \u7684 coroutine \u6807\u7B7E\u53EA\u5305\u542B\u7F16\u8BD1\u5668\u9700\u8981\u5B9E\u73B0\u7684\u5E95\u5C42\u529F\u80FD\uFF0C\u5E76\u6CA1\u6709\u7B80\u5355\u65B9\u4FBF\u7684\u9AD8\u7EA7\u5E93</p></li></ul><h2 id="awaitable" tabindex="-1">awaitable <a class="header-anchor" href="#awaitable" aria-hidden="true">#</a></h2><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"></span></code></pre><div class="line-numbers-wrapper"></div></div><p>promise object coroutine handle coroutine state</p><p>concept</p><ul><li>awaitable , awaiter</li></ul><p>new lanauge keywords</p><ul><li>co_await</li><li>co_yield</li><li>co_return</li></ul><p>new types</p><ul><li><code>coroutine_handle&lt;P&gt;</code></li><li><code>coroutine_traits&lt;Ts...&gt;</code></li><li>suspend_always</li><li>suspend_never</li></ul><p>general mechanism facility</p><p>Two kinds of interfaces that are defined by the coroutines</p><ul><li>Promise</li><li>Awaitable</li></ul><h2 id="co-await-\u6267\u884C\u8FC7\u7A0B" tabindex="-1">co_await \u6267\u884C\u8FC7\u7A0B <a class="header-anchor" href="#co-await-\u6267\u884C\u8FC7\u7A0B" aria-hidden="true">#</a></h2><ol><li><code>co_await</code> is a unary operator.</li><li>effect: suspend coroutine and return control to the caller.</li><li>expr define <code>operator co_await</code></li></ol><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">co_await</span><span style="color:#A6ACCD;"> expr</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>expr</code>\u901A\u5E38\u662F\u4E00\u4E2A<code>awaiter</code>\u5BF9\u8C61,\u53EB\u505A\u7B49\u5F85\u5668</p><p>\u5199\u6CD5\u5982\u4E0B:</p><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#C792EA;">struct</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">MyAwaiter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">bool</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">await_ready</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">false;</span><span style="color:#676E95;font-style:italic;"> //--&gt; \u6682\u505C--&gt;await_suspend</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">void</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">await_suspend</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">coroutine_handle</span><span style="color:#89DDFF;">&lt;&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">bool</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">await_suspend</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">coroutine_handle</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">await_suspend</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  //throws: rethrows on resume</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  //\u5B83\u7684\u7ED3\u679C \u5C31\u662F\u6574\u4E2Aco_await expr \u7684\u7ED3\u679C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  //\u5B83\u5728\u6062\u590D\u7684\u65F6\u5019\u88AB\u6267\u884C</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">void</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">await_resume</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">await_resume</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#F07178;">}</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u7B80\u6613\u7684\u6267\u884C\u8FC7\u7A0B\u5982\u4E0B,\u5177\u4F53\u7684\u770B\u8FD9\u91CC <a href="https://en.cppreference.com/w/cpp/language/coroutines#co_await" target="_blank" rel="noreferrer">https://en.cppreference.com/w/cpp/language/coroutines#co_await</a></p><p>await_ready \u8FD4\u56DE bool \u7C7B\u578B\uFF0C\u5982\u679C\u8FD4\u56DE true\uFF0C\u5219\u8868\u793A\u5DF2\u7ECF\u5C31\u7EEA\uFF0C\u65E0\u9700\u6302\u8D77\uFF1B\u5426\u5219\u8868\u793A\u9700\u8981\u6302\u8D77\u3002</p><p>await_ready \u8FD4\u56DE false \u65F6\uFF0C\u534F\u7A0B\u5C31\u6302\u8D77\u4E86\u3002\u8FD9\u65F6\u5019\u534F\u7A0B\u7684\u5C40\u90E8\u53D8\u91CF\u548C\u6302\u8D77\u70B9\u90FD\u4F1A\u88AB\u5B58\u5165\u534F\u7A0B\u7684\u72B6\u6001\u5F53\u4E2D\uFF0Cawait_suspend \u88AB\u8C03\u7528\u5230\u3002</p><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#89DDFF;">???</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">await_suspend</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">coroutine_handle</span><span style="color:#89DDFF;">&lt;&gt;</span><span style="color:#A6ACCD;"> coroutine_handle</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u53C2\u6570 coroutine_handle \u7528\u6765\u8868\u793A\u5F53\u524D\u534F\u7A0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u7A0D\u540E\u5408\u9002\u7684\u65F6\u673A\u901A\u8FC7\u8C03\u7528 resume \u6765\u6062\u590D\u6267\u884C\u5F53\u524D\u534F\u7A0B\uFF1A</p><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#A6ACCD;">coroutine_handle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resume</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6CE8\u610F\u5230 await_suspend \u51FD\u6570\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u6211\u4EEC\u6CA1\u6709\u660E\u786E\u7ED9\u51FA\uFF0C\u56E0\u4E3A\u5B83\u6709\u4EE5\u4E0B\u51E0\u79CD\u9009\u9879\uFF1A</p><ul><li>\u8FD4\u56DE void \u7C7B\u578B\u6216\u8005\u8FD4\u56DE true\uFF0C\u8868\u793A\u5F53\u524D\u534F\u7A0B\u6302\u8D77\u4E4B\u540E\u5C06\u6267\u884C\u6743\u8FD8\u7ED9\u5F53\u521D\u8C03\u7528\u6216\u8005\u6062\u590D\u5F53\u524D\u534F\u7A0B\u7684\u51FD\u6570\u3002</li><li>\u8FD4\u56DE false\uFF0C\u5219\u6062\u590D\u6267\u884C\u5F53\u524D\u534F\u7A0B\u3002\u6CE8\u610F\u6B64\u65F6\u4E0D\u540C\u4E8E await_ready \u8FD4\u56DE true \u7684\u60C5\u5F62\uFF0C\u6B64\u65F6\u534F\u7A0B\u5DF2\u7ECF\u6302\u8D77\uFF0Cawait_suspend \u8FD4\u56DE false \u76F8\u5F53\u4E8E\u6302\u8D77\u53C8\u7ACB\u5373\u6062\u590D\u3002</li><li>\u8FD4\u56DE\u5176\u4ED6\u534F\u7A0B\u7684 coroutine_handle \u5BF9\u8C61\uFF0C\u8FD9\u65F6\u5019\u8FD4\u56DE\u7684 coroutine_handle \u5BF9\u5E94\u7684\u534F\u7A0B\u88AB\u6062\u590D\u6267\u884C\u3002</li><li>\u629B\u51FA\u5F02\u5E38\uFF0C\u6B64\u65F6\u5F53\u524D\u534F\u7A0B\u6062\u590D\u6267\u884C\uFF0C\u5E76\u5728\u5F53\u524D\u534F\u7A0B\u5F53\u4E2D\u629B\u51FA\u5F02\u5E38\u3002</li></ul><p>\u53EF\u89C1\uFF0Cawait_suspend \u652F\u6301\u7684\u60C5\u51B5\u975E\u5E38\u591A\uFF0C\u4E5F\u76F8\u5BF9\u590D\u6742\u3002\u5B9E\u9645\u4E0A\u8FD9\u4E5F\u662F C++ \u534F\u7A0B\u5F53\u4E2D\u6700\u4E3A\u6838\u5FC3\u7684\u51FD\u6570\u4E4B\u4E00\u4E86\u3002</p><h3 id="await-resume" tabindex="-1"><a href="#await-resume">#</a> await_resume <a class="header-anchor" href="#await-resume" aria-hidden="true">#</a></h3><p>\u534F\u7A0B\u6062\u590D\u6267\u884C\u4E4B\u540E\uFF0C\u7B49\u5F85\u4F53\u7684 await_resume \u51FD\u6570\u88AB\u8C03\u7528\u3002</p><pre><code>??? await_resume()\uFF1B
</code></pre><p>1</p><p>\u540C\u6837\u5730\uFF0Cawait_resume \u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u4E5F\u662F\u4E0D\u9650\u5B9A\u7684\uFF0C\u8FD4\u56DE\u503C\u5C06\u4F5C\u4E3A <code>co_await</code> \u8868\u8FBE\u5F0F\u7684\u8FD4\u56DE\u503C\u3002</p><h2 id="co-yield-\u6267\u884C\u8FC7\u7A0B" tabindex="-1"><code>co_yield</code> \u6267\u884C\u8FC7\u7A0B <a class="header-anchor" href="#co-yield-\u6267\u884C\u8FC7\u7A0B" aria-hidden="true">#</a></h2><p><code>co_yield</code>\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u503C\u7136\u540E\u6302\u8D77\u534F\u7A0B.</p><p>\u7B49\u4EF7\u4E8E</p><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">co_await</span><span style="color:#A6ACCD;"> promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">yield_value</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">expr</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4E5F\u5C31\u662F\u8BF4\u5B83 \u5176\u5B83\u662F\u8C03\u7528\u4E86<code>promise object</code>\u7684<code>yield_value</code> \u51FD\u6570</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">std::suspend_always yield_value(int a){</span></span>
<span class="line"><span style="color:#A6ACCD;">  // save into promise object</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {};</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6240\u4EE5\u5B83\u7684\u5177\u4F53\u6267\u884C\u7684\u8FC7\u7A0B\u5E94\u8BE5\u53BB\u770B<code>co_await</code>,\u53EA\u4E0D\u8FC7<code>co_yield</code>\u628A\u7ED3\u679C\u4F20\u7ED9\u4E86<code>promise.yield_value</code> \u6574\u4E2A\u6267\u884C\u7684\u8FC7\u7A0B\u5E94\u8BE5\u5206\u6210\u4E86\u56DB\u4E2A\u5927\u7684\u8FC7\u7A0B</p><h3 id="_1-convert-to-awaitable" tabindex="-1">1. convert to awaitable <a class="header-anchor" href="#_1-convert-to-awaitable" aria-hidden="true">#</a></h3><ol><li>\u5C31\u662F<code>expr</code>\u672C\u8EAB(\u7B80\u5316\u4E86,\u5177\u4F53\u770Bcppreference\u4E0A\u539F\u6587)</li><li>\u5F53\u524D\u7684<code>promise_type</code>\u6709\u4E00\u4E2A\u6210\u5458\u51FD\u6570<code>await_transform</code>,\u90A3\u4E48<code>awaitable</code>\u5C31\u662F<code>promise.await_transform(expr)</code></li></ol><h3 id="_2-get-awaiter" tabindex="-1">2. get awaiter <a class="header-anchor" href="#_2-get-awaiter" aria-hidden="true">#</a></h3><ol><li>the awaiter is <code>operator co_await()</code></li><li>\u81EA\u5DF1\u672C\u8EAB</li></ol><h3 id="_3-call-awaiter-await-ready" tabindex="-1">3. call <code>awaiter.await_ready()</code> <a class="header-anchor" href="#_3-call-awaiter-await-ready" aria-hidden="true">#</a></h3><ol><li>\u8C03\u7528 <code>awaiter.await_ready()</code></li><li>\u6839\u636E\u7ED3\u679C\u6765\u51B3\u5B9A\u662F\u5426\u6682\u505C</li><li><code>false</code></li></ol><ul><li>\u6682\u505C\u534F\u7A0B</li><li>\u8C03\u7528<code>awaiter.await_suspend(handle)</code><ul><li>\u5982\u679C<code>await_suspend</code>\u8FD4\u56DE<code>void</code>,\u6B64\u534F\u7A0B\u4FDD\u6301\u6682\u505C,\u8FD4\u56DE\u63A7\u5236\u7ED9\u8C03\u7528\u65B9</li><li>\u5982\u679C<code>await_suspend</code>\u8FD4\u56DE<code>bool</code>, <ul><li>\u503C\u4E3A<code>true</code>,\u6B64\u534F\u7A0B\u4FDD\u6301\u6682\u505C,\u8FD4\u56DE\u63A7\u5236\u7ED9\u8C03\u7528\u65B9</li><li>\u503C\u4E3A<code>false</code>,\u6062\u590D\u6B64\u534F\u7A0B</li></ul></li><li>\u5982\u679C<code>await_suspend</code>\u8FD4\u56DE\u5176\u5B83\u534F\u7A0B<code>other_hanle</code>,\u8C03\u7528<code>other_hanle.resume()</code>,\u6062\u590D\u8BE5\u534F\u7A0B\uFF08\u6CE8\u610F\u8FD9\u53EF\u4EE5\u8FDE\u9501\u8FDB\u884C\uFF0C\u5E76\u6700\u7EC8\u5BFC\u81F4\u5F53\u524D\u534F\u7A0B\u6062\u590D\uFF09</li><li>\u5982\u679C <code>await_suspend</code> \u629B\u51FA\u5F02\u5E38\uFF0C\u90A3\u4E48\u6355\u6349\u8BE5\u5F02\u5E38\uFF0C\u6062\u590D\u534F\u7A0B\uFF0C\u5E76\u7ACB\u5373\u91CD\u629B\u5F02\u5E38</li></ul></li><li>\u6700\u540E\uFF0C\u8C03\u7528 <code>awaiter.await_resume()</code>\uFF0C\u5B83\u7684\u7ED3\u679C\u5C31\u662F\u6574\u4E2A <code>co_await expr</code> \u8868\u8FBE\u5F0F\u7684\u7ED3\u679C</li></ul><h3 id="_4-call-awaiter-await-resume" tabindex="-1">4. call <code>awaiter.await_resume()</code> <a class="header-anchor" href="#_4-call-awaiter-await-resume" aria-hidden="true">#</a></h3><p>\u4E00\u4E2A\u7591\u95EE,\u534F\u7A0BA\u8C03\u7528\u534F\u7A0BB,\u5982\u679CB\u6682\u505C,\u90A3\u4E48A\u6682\u505C,\u5426\u5219A\u4E0D\u6682\u505C,\u600E\u4E48\u5B9E\u73B0\u5462?</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">A        -&gt;        B</span></span>
<span class="line"><span style="color:#A6ACCD;">handle A -&gt; handle B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">co_await function B()  -&gt; bool</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li>\u5F88\u597D\u7684\u89C6\u9891\u6559\u7A0B <a href="https://b23.tv/wyaKYsL" target="_blank" rel="noreferrer">C++ 20 \u7684\u534F\u7A0B\u5176\u5B9E\u5C31\u662F\u4E00\u9996\u6B4C\uFF1F-\u54D4\u54E9\u54D4\u54E9</a><ul><li>\u5BF9\u5E94\u7684\u6559\u6848 <a href="https://www.bennyhuo.com/book/cpp-coroutines/00-foreword.html" target="_blank" rel="noreferrer">https://www.bennyhuo.com/book/cpp-coroutines/00-foreword.html</a></li></ul></li><li><a href="https://zhuanlan.zhihu.com/p/59178345" target="_blank" rel="noreferrer">c++20\u534F\u7A0B\u5165\u95E8 - \u77E5\u4E4E</a></li><li><a href="https://zhuanlan.zhihu.com/p/58784652" target="_blank" rel="noreferrer">C++\u7F51\u7EDC\u7F16\u7A0B\u4E4Basio(\u4E94)\u2014\u2014\u5728asio\u4E2D\u4F7F\u7528\u534F\u7A0B - \u77E5\u4E4E</a></li><li><a href="https://lewissbaker.github.io/2017/11/17/understanding-operator-co-await" target="_blank" rel="noreferrer">C++ Coroutines: Understanding operator co_await | Asymmetric Transfer</a></li><li>\u770B\u8FD9\u4E2A\u80FD\u770B\u61C2 <a href="https://www.youtube.com/watch?v=7sKUAyWXNHA" target="_blank" rel="noreferrer">Pavel Novikov - &quot;Understanding Coroutines by Example&quot; - C++ London - YouTube</a></li><li><a href="https://www.youtube.com/watch?v=vzC2iRfO_H8" target="_blank" rel="noreferrer">Andreas Buhr: C++ Coroutines - YouTube</a></li><li>an awaitable which suspends every second time <a href="https://medium.com/nerd-for-tech/painless-c-coroutines-part-1-ba90dd101adb" target="_blank" rel="noreferrer">Painless C++ Coroutines -Part 1. Learn how to cretae a simple coroutine | by Gajendra Gulgulia | May, 2021 | Medium | Nerd For Tech</a></li></ul>`,75),r=[t];function i(p,c,u,d,h,y){return s(),a("div",null,r)}var m=e(o,[["render",i]]);export{F as __pageData,m as default};
