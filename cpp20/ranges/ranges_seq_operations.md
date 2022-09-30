# 基本range要的范围的算法

[Constrained algorithms (since C++20) - cppreference.com](https://en.cppreference.com/w/cpp/algorithm/ranges)

## Non-modifying sequence operations

```plaintext
std::ranges::any_of
std::ranges::all_of
std::ranges::none_of
```

1.cpp

- `std::ranges::for_each`
- `std::ranges::for_each_n`

```plaintext
template<std::input_iterator I, std::sentinel_for<I> S, class Proj = std::identity,
  std::indirectly_unary_invocable<std::projected<I, Proj>> Fun>.
```

2.cpp

什么是 

- `std::identity`
- `std::indirectly_unary_invocable`
- `std::projected`

组合起过滤传递过来的参数

3.cpp

- `std::ranges::count`, `std::ranges::count_if`,


4.cpp

- `std::ranges::mismatch`

5.cpp

- `std::ranges::equal`

6.cpp

- `std::ranges::lexicographical_compare` ,字典序比较

7.cpp

- `std::ranges::find` ,
- `std::ranges::find_if` ,
- `std::ranges::find_if_not` ,

c++23
- `std::ranges::find_last`
- `std::ranges::find_last_if`
- `std::ranges::find_last_if_not`


8.cpp

什么是`ranges::borrowed_subrange_t<R1>`类型?

- `std::ranges::find_end`

9.cpp

- `std::ranges::search`

10.cpp

- `std::ranges::find_first_of`

11.cpp

- `std::ranges::adjacent_find`

12.cpp,c++23

- `std::ranges::contains, std::ranges::contains_subrange`

- `ranges::starts_with`底层是`ranges::equal`
- `ranges::ends_with` 底层是`ranges::equal`

## Modifying sequence operations

13.cpp

```plaintext
std::ranges::copy
std::ranges::copy_if
std::ranges::copy_result
std::ranges::copy_if_result
```

14.cpp

- `std::ranges::copy_n`

15.cpp

`std::ranges::copy_backward` 复制到后面

16.cpp

```plaintext
std::ranges::move
std::ranges::move_backward
```

17.cpp

```plaintext
fill
fill_n
```

18.cpp


```plaintext
std::ranges::transform
std::ranges::unary_transform_result
std::ranges::binary_transform_result
```
转化
可以1转1
可以2转1

19.cpp

```plaintext
std::ranges::generate
std::ranges::generate_n
```

生成:把结果给每个元素赋值
注意与`std::iota()`的区别,还有`std::ranges::iota() c++23`

20.cpp

```plaintext
std::ranges::remove       -> value
std::ranges::remove_if    -> callable
```

删除所有符合条件的元素,不是真的删除,只是移动

21.cpp

```plaintext
std::ranges::remove_copy
std::ranges::remove_copy_if
std::ranges::remove_copy_result
std::ranges::remove_copy_if_result
```

忽略符合的条件

22.cpp

```plaintext
std::ranges::replace
std::ranges::replace_if
std::ranges::replace_copy
std::ranges::replace_copy_if    -> 所有元素都会替换
std::ranges::replace_copy_result
std::ranges::replace_copy_if_result
```

替换元素

23.cpp

```plaintext
std::ranges::swap_ranges
std::ranges::swap_ranges_result
```

区间与区间里的值进行替换

24.cpp

```plaintext
std::ranges::reverse
std::ranges::reverse_copy
```

逆序

25.cpp

```plaintext
std::ranges::rotate
std::ranges::rotate_copy
```
旋转,左旋,右旋只是选取的点不一样

26.cpp

```plaintext
std::ranges::shuffle
std::ranges::shift_left
std::ranges::shift_right
```

27.cpp
```plaintext
std::ranges::sample
```

样本

28.cpp

```plaintext
std::ranges::unique
std::ranges::unique_copy
```

相邻的元素`unique`,如果要所有的元素unique,需要`sort`


## Partitioning operations

30.cpp

```plaintext
ranges::is_partitioned determines if the range is partitioned by the given predicate
ranges::partition divides a range of elements into two groups
ranges::partition_copy copies a range dividing the elements into two groups
ranges::stable_partition divides elements into two groups while preserving their relative order
ranges::partition_point locates the partition point of a partitioned range
```

## Binary search operations (on sorted ranges)

```plaintext
ranges::lower_bound 第一>= k 的位置
ranges::upper_bound 第一> k 的位置
ranges::binary_search  --> bool 是否存在
ranges::equal_range 相等的区间
```
