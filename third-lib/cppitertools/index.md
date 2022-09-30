
一个很像python `itertools`的cpp library
[ryanhaining/cppitertools: Implementation of python itertools and builtin iteration functions for C++17](https://github.com/ryanhaining/cppitertools)


所有的我写的测试代码: 

https://github/rbookr/cpp-hub/master/third-lib/cppitertools/code

- count() 不停止的数字增长

## Combinatoric fuctions

这些对我有用

- product 相当于多去嵌套循环,笛卡尔乘积
- combinations
- combinations_with_replacement
- permutations
- powerset

## 代码理解

`internal/iterbase.hpp`

```plaintext
get_begin()
get_end()
dumb_advance(iter& it) 沉默前进,修改 it的值
```

`internal/iteratoriterator.hpp`

```plaintext

    作用一个包含iterator的容器


    template <typename TopIter>
    class IteratorIterator

    1.TopIter 必须是random_access 的容器



    template <typename Container>
    class IterIterWrapper {
```

## iterator_wrapper.hpp

提供了一个类:`class iter::impl::IteratorWrapperImpl`

一个容器的`begin`,`end`的类型是否一样

来决定是否使用`IteratorWrapperImpl`来包装`iterator`

目的是为了解决

## iteratoriterator.hpp

具体的使用见对应的code目录下的 `iteratoriterator.cpp`

提供了两个类:`class iteratoriterator`,`class IterIterWrapper`


本质是提供一个`iterator`的容器,存下另一下容器的迭代器`iterator`

如果你有一个容器`std::vector<int> v`,那么你应该这样定义容器

```
// v_iter 表示容器v的迭代器
using v_iter = std::vector<int>::iterator
using IndexVector = std::vector<v_iter>
// IndexVector 表示存入v_iter的容器
IterIterWrapper<IndexVector>
```



```plaintext
std::vecotr<int> v{1,2,3,4,5};


┌───+───+───+───+───┐
│ 1 │ 2 │ 3 │ 4 │ 5 │  orgin container V
└───+───+───+───+───┘
  ▲   ▲   ▲   ▲   ▲
  │   │   │   │   │  
┌───+───+───+───+───┐
│ a │ b │ c │ d │ c │ IndexVector,the container of  IterIterWrapper
└───+───+───+───+───┘

a = v.begin()
b = ++a;


┌───+───+
│ A │ B │  the Container Foo
└───+───+
A-> iterator(a)
B-> iterator(b)

```

- `class iteratoriterator`: 
- `class IterIterWrapper`



## combinations

具体的使用见对应的code目录下的 `IterIterWrapper.cpp`

核心原理,core principle


```plaintext
1 2 3 4 5 [6]

0: initial 

1->[1][2][3]
2->[1][2][4]
3->[1][2][5]

4->[1][2][6] -> fail,out of bound

            v
so ->[1][2][4] 

items of from iter position (v) to last 
change to pointer of left of v +2,+3,+4 ....

then add
      v
5->[1][3][4] 

so pointer change succeed,steps 5 process succeed and exit

just process like above;


last process 
    v
-> [3][4][5]

the begin of choose array become the bound.

```

? the usefulness of iteratoriterator and the architecture of IterIterWrapper

## permutations

排列

使用了STL中的`std::next_permutation`,所以不能生成部分的排列
