//[使用C++20协程（Coroutine）实现线程池 - 知乎](https://zhuanlan.zhihu.com/p/375279181)
#include <coroutine>
#include <iostream>
#include <stdexcept>
#include <thread>

struct range_t
{
    struct promise_type;
    struct awaitable
    {
        bool await_ready()
        { 
            std::cout << __func__ << std::endl;
            return false; 
        }
        void await_suspend(std::coroutine_handle<> h)
        {
            std::cout << __func__ << std::endl;
        }
        void await_resume() 
        {
            std::cout << __func__ << std::endl;
        }
    };

    struct promise_type
    {
        range_t get_return_object() { 
            std::cout << __func__ << std::endl;
            return {this}; 
        }
        std::suspend_never initial_suspend() 
        { 
            std::cout << __func__ << std::endl;
            return {}; 
        }
        std::suspend_always final_suspend() noexcept         
        { 
            std::cout << __func__ << std::endl;
            return {}; 
        }
        void return_void()      
        { 
            std::cout << __func__ << std::endl;
            m_end_flag = true;
        }
        awaitable yield_value(int x)
        {
            std::cout << __func__ << std::endl;
            m_x = x;
            return awaitable();
        }
        void unhandled_exception()     
        { 
            std::cout << __func__ << std::endl;
        }

        bool m_end_flag = false;
        int m_x = -1;

        promise_type() {
            std::cout << __func__ << std::endl;
        }
    };


    struct iter
    {
        range_t *r;

        bool operator!=(const nullptr_t &_)
        {
            return !r->m_promise->m_end_flag;
        }

        iter& operator++()
        {
            std::coroutine_handle<promise_type>::from_promise(*r->m_promise)();
            return *this;
        }

        int& operator*()
        {
            return r->m_promise->m_x;
        }
    };

    iter begin()
    {
        return iter(this);
    }

    nullptr_t end()
    {
        return nullptr;
    }

    promise_type *m_promise;
};

range_t range(int stop)
{
    std::cout << __func__ << " enter" << std::endl;
    for (int i=0; i<stop; ++i) {
        std::cout << "\n++before co_yield" << std::endl;
        co_yield i;
        std::cout << "--after co_yield" << std::endl;
    }
    std::cout << __func__ << " exit" << std::endl;
}

int main()
{
    for (auto& i : range(3))
        std::cout << "* Range of " << i << std::endl;
}
