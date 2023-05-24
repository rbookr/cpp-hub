//task<int> foo(){
    //co_return 42;
//}
//-----+
//     |
//     v
Task<int> foo(){
    struct CoroFrame {
        Task<int>::promise_type promise; //定义一个promise变量
        bool inital_await_resume_called = false;
        int state = 0;
        void operator()(){
            try {
                co_await promise.inital_suspend(); //初始化suspend

                promise.return_value(42);

                goto final_suspend;
            }
            catch(...){
                if (not inital_await_resume_called)
                    throw;
                promise.unhandle_exception();
            }
            final_suspend:
                co_await promise.final_suspend();
        }
    };
    auto coroFrame = new CoroFrame;
    auto returnObject{ coroFrame->promise.get_return_object()};
    (*coroFrame)();
    return returnObject;
}
