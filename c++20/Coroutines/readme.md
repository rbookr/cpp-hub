

 - c++20 的 coroutine 是给库的开发者使用的，所以看起来比较复杂
 - c++20 的 coroutine 标签只包含编译器需要实现的底层功能，并没有简单方便的高级库

Awaitable有3个函数
- await_ready 
- await_suspend
- await_resume

- [c++20协程入门 - 知乎](https://zhuanlan.zhihu.com/p/59178345)
- [C++网络编程之asio(五)——在asio中使用协程 - 知乎](https://zhuanlan.zhihu.com/p/58784652)
