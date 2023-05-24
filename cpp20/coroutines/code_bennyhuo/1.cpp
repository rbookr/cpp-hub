//简单的等待器

#include <iostream>
#include <thread>
#include <coroutine>
#include <future>

struct Result {
    struct promise_type {
        Result get_return_object(){
            return {std::coroutine_handle<promise_type>::from_promise(*this)};
        }

        std::suspend_always initial_suspend() noexcept
        { return {}; }

        std::suspend_always final_suspend() noexcept
        { return {}; }

        void return_void() {}
        void unhandled_exception() {}

    };

    std::coroutine_handle<promise_type> m_hanle;
};

struct myAwaiter {
    int value;

    bool await_ready(){
        return false;
    }

    //在 await_suspend 没有执行完前
    void await_suspend(std::coroutine_handle<> handle)
    {
        // 在一个分裂出来的线程中执行异步函数
        std::cout << "start await_suspend " << std::endl;
        // async 会在 等待它的线程执行完
        std::async([=](){
                using namespace std::chrono_literals;
                std::this_thread::sleep_for(3s);
                handle.resume();
        });
        std::cout << "end await_suspend " << std::endl;
    }

    int await_resume(){
        return value;
    }
};

//创建一个我的协程
Result myCoro_func() {
    std::cout << 1 << "\n";
    auto val = co_await myAwaiter{.value = 100};
    std::cout << val << "\n";
    std::cout << 2 << "\n";
}

int main(){
    auto result = myCoro_func();
    //1. 创建 coroutine state, promise object
    //2. 因为 initial_suspend 所以没有执行 coroutine body

    result.m_hanle.resume(); //恢复执行
    // 输出 1
    std::cout << "<< in main >>" << "\n";

    return 0;
}
