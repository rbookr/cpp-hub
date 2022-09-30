- [How C++ range-based for loop works - nextptr](https://www.nextptr.com/tutorial/ta1208652092/how-cplusplus-rangebased-for-loop-works)
- [ranges for C++20简介 - 知乎](https://zhuanlan.zhihu.com/p/86809598)
- [为gcc10的ranges写自定义view - 知乎](https://zhuanlan.zhihu.com/p/133517420)

```cpp
for( range decl : range_expression){
    //loop
}
```
=>
```cpp
util c++14
{ //整个实现被 {}包含 range_expression 的生命
    auto && range = range_expression;
    for( auto b = beginExpr , e = endExpr ; b!=e ; ++b){
        range decl = *b;
        //loop

    }
}
```

```cpp
c++17
{
    auto && range = range_expression;
    auto b = beginExpr;
    auto e = endExpr;
    for( ; b!= e;,++b){
        range decl = *b;
        //loop
    }
}
```

## 视频教程 youtube cppcon

ranges will return a ranges::dangling object

- [C++20 Ranges in Practice - Tristan Brindle - CppCon 2020 - YouTube](https://www.youtube.com/watch?v=d_E-VLyUnzc)
