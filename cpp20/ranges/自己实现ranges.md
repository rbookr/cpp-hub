

自定义view大致分为四步：

1.  定义一个view类从`view_base`继承，标准库中定义了`view_base`的子类`view_interface`，直接从`view_interface`继承可以省一些事情；
2.  为view类定义iterator和setinel，实现`*`和`++`之类的运算符；
3.  为view定义begin()和end()函数；
4.  为view定义adaptor。

[为gcc10的ranges写自定义view - 知乎](https://zhuanlan.zhihu.com/p/133517420)
