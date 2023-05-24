//协程的返回对象
struct MyRet {
    //协程的返回对象,必须有 promise_type
    struct promise_type { //这个就是 promise object
        MyRet get_return_object()
        { return {std::coroutine_handle<promise_type>::from_promise(*this)}; }

        std::suspend_always initial_suspend() noexcept { return {}; }
        std::suspend_always final_suspend() noexcept { return {}; }
        void return_void() {}
        void unhandled_exception() {}
    };
};
