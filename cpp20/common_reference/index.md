common_reference
=====================


我很难理解[文档][1]所说的内容,下面我按我的理解把整个文档大概翻译一下

Determines the common reference type of the types `T...` ,that is,the type of whic all types in `T..` can be converted or bound. if such a type exists(are determind according to the rules below), the member type names that type. Otherwis,there is no member type. the behavior is undefined if any of the types in `T...` is an incomplete type other than `void`.


- 一个类型，所有的`T...`可以被转换成的或者`bound`(?).
- 如果这个类型存在，那么`member type`(? struct common_reference::type)命名为那个类型,否则，没有 `member type`
- 除了,`void`,如果 `T...`有`incomplete type`,，行为未定义 


when given reference types,common_reference attempts to find a reference type to which the supplied reference types can all bound,but may return a no-reference type if it cannot find such a reference type.

- 当给了很多的引用类型时，`common_reference`尝试找到一种可以 全部 `all bound`(?)的引用类型
- 但也有可能返回一个非引用类型,如果找不到这种引用类型。

- if `sizeof ...(T)`is zero,there is no member type. 不用翻译
- if `sizeof ...(T)`is one,the member type names the same type. 不用翻译
- if `sizeof ...(T)`is two,T1,T2
    - if T1 and T2 are both reference types, and `simple common reference S` of T1 and T2 exists,then the member type type names S.


### simple common reference 

- if T1 is `cv1 x& ` and T2 is `cv2 Y&`,their simple common reference type is `decltype(false ? std:declval<cv12 x&>() : std::declval<cv12 Y &>())` ,where cv12 is the union of cv1 and cv2, if that type exists and is a reference type.


## 尝试

```cpp
//没有type 成员函数 ,因为 有一个类型是void
common_reference<int,void>::type a3;
```


## 资料

- [common_reference cppreference](https://en.cppreference.com/w/cpp/types/common_reference)

[1]: <https://en.cppreference.com/w/cpp/types/common_reference>
