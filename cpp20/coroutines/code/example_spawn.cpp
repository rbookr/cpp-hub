#include <iostream>
#include <thread>
#include <chrono>
#include "common_def.h"


template<typename ReturnObject>
struct promise {
    int m_result;
    std::coroutine_handle<> m_continuation;
    ReturnObject get_return_object() {
        this->m_continuation = std::noop_coroutine();
        return { std::coroutine_handle<promise<ReturnObject>>::from_promise(*this)};
    };

    std::suspend_always initial_suspend() { 
        log("initial_suspend");
        return {}; 
    }

    struct FinalAwaiter : std::suspend_always
    {
        template<class Promise>
            std::coroutine_handle<> await_suspend(std::coroutine_handle<Promise> h) const noexcept
            {
                auto &promise = h.promise();
                auto continuum = promise.m_continuation;
                return continuum;
            }
    };

    FinalAwaiter final_suspend() noexcept
    {
        log("final_suspend");
        return {};
    }
    //std::suspend_always final_suspend() noexcept { 
        //return {}; 
    //}
    std::suspend_always yield_value(int res) {
        m_result = res;
        return {};
    }

    void unhandled_exception() {}
    void return_void() {}
};

struct Task {
       
    using promise_type = promise<Task>;

    std::coroutine_handle<promise_type> m_h;

    int result() {
        return m_h.promise().m_result;
    }
    ~Task() {
        //if(m_h) //注意需要手动 destroy
            //m_h.destroy();
    }

    bool await_ready() noexcept
    {
        log("await_ready");
        return false;
    }

    template<class Promise>
    std::coroutine_handle<> await_suspend(std::coroutine_handle<Promise> awaiting_coro)
    {

        log("await_suspend");
        auto sub_coroutine = m_h;
        sub_coroutine.promise().m_continuation = awaiting_coro;
        return sub_coroutine;
    }

    //int await_resume() { 
        //log("Task await_resume");
        //return 0; }

    void await_resume() { 
        log("Task await_resume");
         }

};

struct SpawnTask
{
    SpawnTask(std::coroutine_handle<> h) : m_handle(h) {   
    }
    std::coroutine_handle<> m_handle;

    struct SpawnTaskPromise 
    {

        std::suspend_never initial_suspend() { 
            log("spawn Task initial_suspend");
            return {}; }
        std::suspend_never final_suspend() noexcept { 
            log("spawn Task final_suspend");

            return {}; }

        void unhandled_exception() { }

        SpawnTask get_return_object() {
            return {std::coroutine_handle<SpawnTaskPromise>::from_promise(*this)};
        }
        void return_void() { }
    };
    using promise_type = SpawnTaskPromise;
};

SpawnTask co_spawn(Task t) {
    log("co_spawn");
    co_await t;
    log("end co_spawn");
}

Task say_hello(){
    for(int i=1;i<=5;++i){
        std::cout << "hello before" << std::endl;
        co_await std::suspend_always {};
        std::cout << "hello after" << std::endl;
    }
}

int main(){
    auto t1 = say_hello();
    auto t2 = co_spawn(t1);
    //{
        //co_spawn(t1); //希望 t1 结束时 co_spawn 也结束!!
    //}
    
    for(int i=1;i<=10;++i){
        std::this_thread::sleep_for(std::chrono::milliseconds(100));
        if( t1.m_h  ) {
            if( !t1.m_h.done())
                t1.m_h();
            else {
                t1.m_h.destroy();
                t1.m_h = nullptr;
                //t1.m_h = std::noop_coroutine_handle;
                    //std::noop_coroutine();
            }
        }
        //std::cout << "handle done : " << std::boolalpha << t1.m_h.done()  << std::endl;
        std::cout << i << std::endl;
    }
    if( t2.m_handle )
        std::cout << "spawn handle exist" << std::endl;
    t2.m_handle.destroy();
    if( t2.m_handle.done())
        std::cout << "spawn task done!" << std::endl;
    return 0;
}
