for(int i=0;i<=9;++i){
    if( i==5 ) 
        co_await std::suspend_always{};
}


for(int i=0;i<=9;++i){
    if( i==5 ) {
        auto&& awaiter = std::suspend_always{};
        if( not awaiter.await_ready()){
            awaiter.await_suspend(std::coroutine_hand);
            <suspend / resume>
        }
        'return' awaiter.awaiter_resume()
    }
}

