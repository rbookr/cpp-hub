ranges
===========

可以先看这个: [Ranges library (C++20) - cppreference.com](https://en.cppreference.com/w/cpp/ranges)

然后看这个[A beginner's guide to C++ Ranges and Views. | Hannes Hauswedell's homepage](https://hannes.hauswedell.net/post/2019/11/30/range_intro/)来入门

## abstract

ranges是一种概念(concept):an abstraction of “a collection of items”

range提出一种新的方式来实现算法与容器的连接,以前(before c++20)的时候是使用
`Iterator`来充当连接.


the particel of ranges:

- range access,get sth like Iterator
- range primitives: like iterator_traits
- the particel of ranges,not understand
- range concept, some predefined concepts
- range conversions ??
- range views ??
  - view_interface,**a helper class template for defining a view interface**,use [crtp](https://en.cppreference.com/w/cpp/language/crtp)
  - ranges::sub_range
- range factories
- range adaptors
- views
  - transform the underlying range
  - do not own any data
  - lazy-evaluated
  - Combinability



3. ranges 写完代码 与使用

[view的代码 samples](https://github.com/rbookr/cpp-hub/tree/master/cpp20/ranges/code)

[我写的ranges简单实现:myRanges](https://github.com/rainboy-learn/myRanges/tree/new)

下面与LegacyItertor有着差不多的定义
p
std::ranges::input_range
std::ranges::output_range
std::ranges::forward_range
std::ranges::bidirectional_range
std::ranges::random_access_range
std::ranges::cotiguoous_range

## gcc 12 下的 Range_adaptor_closure_objects

Range_adaptor_closure_objects是把各个view用`|` 组合起的一个闭包类,但是`gcc10,gcc12`的实现并不一样,

甚至标准有规定它是如何实现的?给我拓展range库带来了麻烦

cppreference上说它接受一个`view`并返回一个view

```plaintext
C(R)
R | C
R | C | D // (R|C) |D
R | (C | D)

```

[](https://en.cppreference.com/w/cpp/ranges#Range_adaptor_closure_objects)

## 参考

- [c++ code samples before and after Ranges](https://mariusbancila.ro/blog/2019/01/20/cpp-code-samples-before-and-after-ranges/)
- [C++20中的Ranges库 | Marvin's Blog【程式人生】](https://marvinsblog.net/post/2020-11-30-cpp-20-ranges/)
- [C++20 Ranges — Complete Guide | ITNEXT](https://itnext.io/c-20-ranges-complete-guide-4d26e3511db0)
- [A beginner's guide to C++ Ranges and Views. | Hannes Hauswedell's homepage](https://hannes.hauswedell.net/post/2019/11/30/range_intro/)
