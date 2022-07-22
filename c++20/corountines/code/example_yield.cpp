#include <iostream>
#include "common_def.h"


template<typename ReturnObject>
struct promise {
    int m_result;
    ReturnObject get_return_object() {
        return { std::coroutine_handle<promise<ReturnObject>>::from_promise(*this)};
    };

    std::suspend_never initial_suspend() { return {}; }
    std::suspend_always final_suspend() noexcept { return {}; }
    std::suspend_always yield_value(int res) {
        m_result = res;
        return {};
    }

    void unhandled_exception() {}
    void return_void() {}
};



struct task {
    using promise_type = promise<task>;

    std::coroutine_handle<promise_type> m_h;

    int result() {
        return m_h.promise().m_result;
    }
    ~task() {
        if(m_h)
            m_h.destroy();
    }
};


task counter() {
    for(int i=1;i<=10;++i){
        co_yield i; // 相当于执行了 co_await coroutine_handle<> t.promise().yield_value(i)
    }
}


int main(){
    auto Task = counter(); // task会在coroutine函数第一次执行的时候调用 promise的get_return_object 返回值
    for(int i=1;i<=10;++i){
        //输出值
        std::cout << Task.result() << std::endl;
        Task.m_h();
    }
    return 0;
}
