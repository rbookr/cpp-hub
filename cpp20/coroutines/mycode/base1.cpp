//一个最基础的协程

#include <iostream>
#include <coroutine> //包含 协程的头文件

template<typename... Args>
void log(Args... args){
    ((std::cout << args <<" "), ...);
    std::cout <<"\n";
}

#define LOG(...) log("LINE:",__LINE__,__VA_ARGS__)

// Task 协程返回对象
struct Task {
    struct promise_type;

    // 用来存储协程的句柄
    // 协程句柄本质是一个指针
    // 指向内存上代表 协程状态的 那部分
    std::coroutine_handle<promise_type> m_h;
    // 协程需要的promise object
    struct promise_type {
        // 第一步
        // 创建后调用此函数,得到协程返回对象,把它保存在local
        Task get_return_object() {
            // ::from_address
            // ::form_promise
            // 两个工具函数的作用是
            //  通过promise_object 得到 协程句柄
            return { std::coroutine_handle<promise_type>::from_promise(*this)};
            //如果按下面的方式调用,得到 m_h
            //在m_h.resume()时就会SEG FAIL
            //return { std::coroutine_handle<promise_type>::from_address(this)};
        }

        // 第二步
        // 调用此函数,并co_await 结果
        // 当initial_suspend 结束时,调用协程body
        std::suspend_always initial_suspend() noexcept {
            LOG("call Task initial_suspend");
            return {};
        }

        // 最后
        // 当协程结束前,调用此函数,并 co_await 结果
        // 当final_suspend结束时,整个协程结束
        std::suspend_always final_suspend() noexcept {
            LOG("call Task final_suspend");
            return {};
        }

        //当协程执行完,后调用 co_return;时调用此函数
        void return_void() {
            LOG("call Task return_void()");
        };

        // 当协程发生未处理的异常时
        void unhandled_exception(){};
    };
};

Task my_first_coroutine(){
    LOG("in my_first_coroutine:==START==");
    co_await std::suspend_always{};
    LOG("in my_first_coroutine:==END==");
}

int main(){
    
    LOG("in main, before call my_first_coroutine()");
    auto myTask = my_first_coroutine();
    LOG("in main, after call my_first_coroutine()");
    LOG("in main, before call myTask.m_h.resume()");
    myTask.m_h.resume();
    LOG("in main, after call myTask.m_h.resume()");

    LOG("in main, before call again myTask.m_h.resume()");
    myTask.m_h.resume();
    LOG("in main, after call again myTask.m_h.resume()");
    return 0;
}
