- [cppreference Unnamed_namespaces](https://en.cppreference.com/w/cpp/language/namespace#Unnamed_namespaces)
- [c++ - Why are unnamed namespaces used and what are their benefits? - Stack Overflow](https://stackoverflow.com/questions/357404/why-are-unnamed-namespaces-used-and-what-are-their-benefits)
- [Using unnamed namespaces instead of static globals | Modern C++ Programming Cookbook](https://subscription.packtpub.com/book/programming/9781786465184/1/ch01lvl1sec15/using-unnamed-namespaces-instead-of-static-globals)

我的理解

`Unnamed_namespaces` 本质其实是一个`unique namespaces`,好处是可以避免link collisions


```cpp
namespace ___very_unique___ {

}
using namespace ___very_unique___;
```


具体的例去看: 
