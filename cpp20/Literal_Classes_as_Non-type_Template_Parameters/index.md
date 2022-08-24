## 代码

::: details 1.cpp

```cpp
<%- include("1.cpp") _%>
```
:::

::: details 2.cpp
```cpp
<%- include("2.cpp") _%>
```
:::

## FAQ

1. 什么叫做`Literal Type`类类型
2. template parameter NonType 是如果转换的?
3. 两个同类型同数值的`Literal Type`是同一个吗
4. class parameter是如果deduction

## 回答

### 1

> *   an floating-point type;
> *   a literal class type with the following properties:
>     *   all base classes and non-static data members are public and non-mutable and
>     *   the types of all bases classes and non-static data members are structural types or (possibly multi-dimensional) array thereof.

From [https://en.cppreference.com/w/cpp/language/template_parameters](https://en.cppreference.com/w/cpp/language/template_parameters)

我们可以认为这种class type is `constexpr 

### 4

参考[cppreference CTAD][1]

从`c++20`开始,template parameter可以是一个class type,且可以deduction


```cpp
template<class T>
struct X
{
    X(T) {}
 
    auto operator<=>(const X&) const = default;
};
 
template<X x>
struct Y {};
 
Y<0> y; // OK, Y<X<int>(0)>
```

## 其它

注意看 代码 1.cpp,只有在c++20 下才可以编译成功,c++17会出现下面的错误

```
non-type template parameters of class type only available with ‘-std=c++20’ or ‘-std=gnu++20’
    7 | template<point P>
```

C++20 allows us to use class-template argument deduction in the declaration of a template parameter:

```cpp
template <size_t Length>
struct fixed_string {
    char _chars[Length+1] = {}; // +1 for null terminator
};

//deduction guide
template <size_t N>
fixed_string(const char (&arr)[N])
    -> fixed_string<N-1>;  // Drop the null terminator

template <fixed_string S>
struct ctad_foo {};
```
## 参考

- [Literal Classes as Non-type Template Parameters in C++20 | Kevin Hartman](https://ctrpeach.io/posts/cpp20-class-as-non-type-template-param/)
- [Stringy Templates](https://vector-of-bool.github.io/2021/10/22/string-templates.html)

[1]: <https://en.cppreference.com/w/cpp/language/class_template_argument_deduction>
