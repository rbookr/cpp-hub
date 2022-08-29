1. [LegacyIterator][1]
==========


FAQ1: how understand the mean of "named requirements"? -> 给一个具体的需求取一个名字

why use `Legacy` prefix? see this : <https://stackoverflow.com/a/53970846>

> Pre-C++20, a "concept" was just a set of requirements in the standard that represented the behavior expected of certain template parameters. In C++20, with concepts becoming an actual language feature, that needed to shift. The problem is that the Ranges concept of "RandomAccessIterator" is not the same as the old-style "concept" of "RandomAccessIterator".


所以我们这里的讲的其实是**老式的迭代器**

[requirements](https://en.cppreference.com/w/cpp/named_req/Iterator#Requirements) : LegacyIterator must **satisfy**

- CopyConstrcutible
- CopyAssignable
- Destrutible
- swapable
- has member typedefs 
	- `value_type`
	- diffrence_type
	- reference
	- pointer
	- iterator_category
- operator
 - `*r`
 - `++r -> It&`

`r` is **Dereferenceable** and **incrementable**

我们可以这里 [iterator_traits](https://en.cppreference.com/w/cpp/iterator/iterator_traits) 看到一个具体的`iterator`要满足的条件


## 2. [LegacyInputIterator][2]

## 3. [Iterator_library]()


guarntee validity for single pass algoritms

requirements

- satisfy LegacyIterator
- EqualityComaparable

https://www.geeksforgeeks.org/input-iterators-in-cpp/
sample-code

//https://en.cppreference.com/w/cpp/named_req/InputIterator


一个重要的问题 算法各自需要哪些类型的迭代器
每个容器是什么类型的迭代器

迭代器的辅助函数

简单input 迭代器实现

STL 中有用于操作迭代器的三个函数模板，它们是：

advance(p, n)：使迭代器 p 向前或向后移动 n 个元素。

distance(p, q)：计算两个迭代器之间的距离，即迭代器 p 经过多少次 + + 操作后和迭代器 q 相等。如果调用时 p 已经指向 q 的后面，则这个函数会陷入死循环。

iter_swap(p, q)：用于交换两个迭代器 p、q 指向的值。

iterator library
https://www.geeksforgeeks.org/iterators-c-stl/
4. next() :- This function returns the new iterator that the iterator would point after advancing the positions mentioned in its arguments.

5. prev() :- This function returns the new iterator that the iterator would point after decrementing the positions mentioned in its arguments.

insert()

## 引用

- [C++ Input Iterator - Stack Overflow](https://stackoverflow.com/questions/35247177/c-input-iterator)

[1]: https://en.cppreference.com/w/cpp/named_req/Iterator
[2]: https://en.cppreference.com/w/cpp/named_req/InputIterator
https://en.cppreference.com/w/cpp/iterator/iterator_traits
https://en.cppreference.com/w/cpp/iterator/iterator_tags
