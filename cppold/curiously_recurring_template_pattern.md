目的 ：

- 那些需要知道子类类型的 
- enable_share_from_this ,公用工具类抽象
- 计数类对象有多少个，这种公用工具类抽象
- compile-time polymorphism ?


```cpp
<%- include("code/crtp.cpp") _%>
include
```

## what is CRTP

- inheriting from a template class
- use the derived class itself as a template parameter of the base class

不能出现的情况

如何避免


## waht CRTP can bring to your code 


- add functionality

这里我也不重复的去复述原文了，可以去看一下原文，意思 就是提供功能性的一些东西（需要子类类型)


## 来源：
知乎， crtp 有什么 用

https://fluentcpp.com/2017/05/12/curiously-recurring-template-pattern
