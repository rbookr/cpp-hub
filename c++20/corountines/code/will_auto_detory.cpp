#include "common_def.h"
using namespace std;

struct promiseObj {
    struct promise_type {
        using handle_type = std::coroutine_handle<promise_type>;
        handle_type m_h;
        promiseObj get_return_object(){
            m_h = handle_type::from_promise(*this);
            return {m_h };
        }

        std::suspend_never initial_suspend() noexcept { return {}; }

        std::suspend_always final_suspend() noexcept { 
            m_h.destroy(); // auto destroy
            return {}; 
        }

        void return_void() {}
        void unhandled_exception() {}
    };

public:
    promise_type::handle_type m_h;
};


promiseObj func(){
    std::cout << 1 << std::endl;
    co_await std::suspend_always{};
    std::cout << 2 << std::endl;
}
int main(){
    auto promise_obj = func();
    std::cout << "start resume()" << std::endl;
    promise_obj.m_h.resume();
//Returns true if the coroutine to which *this refers is suspended at its final suspend point, or false if the coroutine is suspended at other suspend points. The behavior is undefined if *this does not refer to a suspended coroutine
    bool done = promise_obj.m_h.done();
    std::cout <<  "promise_obj.m_h Done ? :"<< boolalpha << done << std::endl;

    promise_obj.m_h.destroy();

    //std::cout <<  "promise_obj.m_h Done after destory ? :"<< boolalpha << done << std::endl;

    //promise_obj.m_h.destroy();
    return 0;
}
