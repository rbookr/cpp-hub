concept library
========

提供了很多基础的`concept`

- [Concepts library (since C++20) - cppreference.com](https://en.cppreference.com/w/cpp/concepts)

为了更方便理解的实现,[在这个文件里][1],我实现了：

- same as ：std::is_same_v template 特化
- is_union,is_union_v
- is_class,is_class_v,原理：类有成员数据指针，SFINAE
- is_base_of,is_base_of_v,原理：子类指针可以转自动父类指针
- convertible_to,原理 std::is_convertible_v 和 static_cast
- integral 原理：std::is_integral_v(原理：每个类型进行特化)
- swappable,原理：std::ranges::swap


## Core language concepts

```plaintext
same_as
specifies that a type is the same as another type

derived_from
specifies that a type is derived from another type
-> std::is_base_of
-> std::is_convertible_v -> Derived * -> Base*

convertible_to
specifies that a type is implicitly convertible to another type
- convertible_to,原理 std::is_convertible_v 和 static_cast

common_reference_with
specifies that two types share a common reference type
std::same_as< std::common_reference_t<T,U> , std::common_reference_t<U,T> ,
std::convertible_to<T,std::common_reference_t<T,U>
std::convertible_to<U,std::common_reference_t<T,U>
都可以转换成公共类型
存在一个共同引用类型，T，U都 可以转换到


本质？我不懂，因为没有相关的代码来解释它的作用与含义，目的
文档里还有一个概念`equality preservation` 相等能力的保持
可以参考这里的我写的测试的代码 
https://github.com/rbookr/cpp-hub/tree/master/cpp20/concept/concept-library/common_reference_with.cpp

common_with
specifies that two types share a common type
与common_reference_with的概念差不多，两个有一类型T，U存一个公共类型，且可以相互转换
可以参考这里的我写的测试的代码 
https://github.com/rbookr/cpp-hub/tree/master/cpp20/concept/concept-library/common_with.cpp

integral
specifies that a type is an integral type
就是 std::is_integral_v

signed_integral
specifies that a type is an integral type that is signed
就是 std::is_integral_v && std::is_signed_v
有符号整数 

unsigned_integral
specifies that a type is an integral type that is unsigned
就是 std::is_integral_v && !std::is_signed_v
有符号整数 

floating_point
specifies that a type is a floating-point type
就是is_point_v

assignable_from<LHS,RHS>
specifies that a type is assignable from another type
又是一个难以理解的概念
可以去看cppreference上的源码 
RHS表达式的类型与值分类可以赋值给LHS表达式
首先我就不理解它有什么用,
cppreference对应的节有一定的解释

swappable
swappable_with
specifies that a type can be swapped or that two types can be swapped with each other

destructible
specifies that an object of the type can be destroyed
std::is_notrow_destructible

constructible_from<T,...args>
specifies that a variable of the type can be constructed from or bound to a set of argument types
std::destructible &&  std::is_construct_v<T,args...>

default_initializable
specifies that an object of a type can be default constructed
std::constructible_from<T> && requires { T{};} && :: new T

move_constructible
specifies that an object of a type can be move constructed
std::constructible_from<T,T> && std::convertible_to<T,T>

copy_constructible
specifies that an object of a type can be copy constructed and move constructed
----- 看cppreference 吧

```

## Comparison concepts

```plaintext
boolean-testable
可转换成bool

specifies that a type can be used in Boolean contexts
(exposition-only concept)
equality_comparable
equality_comparable_with
可以  == ，!= 比较 

specifies that operator == is an equivalence relation
totally_ordered
totally_ordered_with
specifies that the comparison operators on the type yield a total order
TODO ?? 不懂


Defined in header <compare>
three_way_comparable
three_way_comparable_with
specifies that operator <=> produces consistent result on given types



```

## Object concepts
```plaintext
movable
specifies that an object of a type can be moved and swapped
copyable
specifies that an object of a type can be copied, moved, and swapped
semiregular
specifies that an object of a type can be copied, moved, swapped, and default constructed
regular
specifies that a type is regular, that is, it is both semiregular and equality_comparable
```

## Callable concepts

```plaintext
invocable
regular_invocable
specifies that a callable type can be invoked with a given set of argument types
predicate
specifies that a callable type is a Boolean predicate
可以call，且返回值为bool
std::invoke_result_t<T,args..>


relation
specifies that a callable type is a binary relation

equivalence_relation
specifies that a relation imposes an equivalence relation

strict_weak_order
specifies that a relation imposes a strict weak ordering
```


[1]: <
https://github.com/rbookr/cpp-hub/tree/master/cpp20/concept/concept-library/common.hpp>
