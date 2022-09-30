//https://www.bennyhuo.com/book/cpp-coroutines/02-generator.html#%E5%AE%9E%E7%8E%B0%E7%9B%AE%E6%A0%87
// 实现一个序列生成器
// 使用 co_yiled

#include <iostream>
#include <thread>
#include <coroutine>
#include <future>

//协程的返回值
struct Generator {
    struct promise_type {
        std::suspend_always initial_suspend() { return {};}
        std::suspend_always final_suspend() noexcept { return {};}

        void unhandled_exception(){}

        Generator get_return_object() {
            return Generator{
                std::coroutine_handle<promise_type>::from_promise(*this)
            };
        }

        void return_void() {}
        int val;

        std::suspend_always yield_value(int val){
            this->val= val;
            return {};
        }
    };

    explicit Generator(std::coroutine_handle<promise_type> handle) noexcept
        : m_handle(handle) {}
    
    Generator(Generator&& gen) noexcept
        :m_handle(std::move(gen.m_handle)) {}

    bool has_next() {
        //什么时候叫做done ?
        if( m_handle.done() )
            return false;
        //if( m_handle.promise().is_)
        return true;
    }

    int next() {
        m_handle.resume();
        return m_handle.promise().val;
    }

    std::coroutine_handle<promise_type> m_handle;

    //将 协程状态 的销毁 交给Generator
    ~Generator() {
        if( m_handle)
            m_handle.destroy();
    }
};

struct IntAwaiter {
    int val;
    bool await_ready(){ return false;}
    void await_suspend(std::coroutine_handle<
            Generator::promise_type> h) {
        h.promise().val = val;
    }
};

//定义协程函数
Generator sequence() {
    int i =0;
    while ( true ) {
        // co_await i++;
        co_yield i++;
    }
}
int main(){
    //1. 创建coroutines 
    //  initial_suspend 挂起
    auto gen = sequence();

    for(int i=1;i<=10;++i){
        // 2 调用 next
        //     ->> resume coroutine
        //     ->> co_await promoise().await_transform(int)
        //          |-> co_await await_suspend 挂起
        //
        //   3 回到这里
        std::cout << gen.next() << "\n";
    }
    return 0;
}
