co_await result;

auto awaitable{ getAwaitable(result) };
if( not awaitable.await_ready() ){
    awaitable.await_suspend(thisCoroHandle);
}
resume:
    awaitable.await_resume();
