#pragma once

#include <iostream>

#if defined(__clang__)

#include <experimental/coroutine>
#include <experimental/memory_resource>
namespace std {
    using std::experimental::suspend_always;
    using std::experimental::suspend_never;
    using std::experimental::coroutine_handle;
    using std::experimental::noop_coroutine;
    using std::experimental::coroutine_traits;
    namespace pmr {
        using std::experimental::pmr::memory_resource;
        using std::experimental::pmr::get_default_resource;
        using std::experimental::pmr::set_default_resource;
    }
}
#else

#include <coroutine>
#include <memory_resource>

#endif


template<typename... T>
void log(T... args){
    ( (std::cout << args << ","),...);
    std::cout << '\n';
}
