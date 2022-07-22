/**
 * awaitable 执行到 await_resume 后 会不会结束?
 *
 * 本代码证明, 会消失
 */
#include "common_def.h"
#include <chrono>
#include <thread>
using namespace std::literals;


struct task {

    struct promise_type {
        task get_return_object() {
            return {std::coroutine_handle<promise_type>::from_promise(*this)};
        }

        std::suspend_never initial_suspend() { return {};}
        std::suspend_never final_suspend() noexcept{ return {};}
        void unhandled_exception() {}
        void return_void() {}
    };

    std::coroutine_handle<promise_type> m_h;

};

struct myawait {
    bool await_ready() { return false;}
    bool await_suspend(std::coroutine_handle<task::promise_type> h ) 
    { 
        std::cout << "await_suspend" << std::endl;
        return true;
    }
    void await_resume() {
        std::cout << "await_resume" << std::endl;
    }

    myawait(){
        std::cout << "myawait ctor" << std::endl;
    }
    ~myawait(){
        std::cout << "myawait dctor" << std::endl;
    }
};

task await() {
    co_await myawait();
    std::cout << "await function end co_await" << std::endl;
}

int main(){
    auto t = await();

    t.m_h.resume();
    std::cout << "befor 10." << std::endl;
    std::this_thread::sleep_for(10s);
    std::cout << "after 10." << std::endl;
    return 0;
} 
