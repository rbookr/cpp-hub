#include <coroutine>
#include "utils.hpp"

struct my_awaiter {
    // 是否准备完成
    // true 准备完成 不会挂起协程
    // false 准备未完成 会挂起协程
    //这时候协程的局部变量和挂起点都会被存入协程的状态当中
    bool await_ready() {
        LOG("in await_ready");
        return false;
    }
    bool await_suspend() {
        return false;
    }
};

struct my_suspend_always: public std::suspend_always {
    
};

struct my_suspend_never: public std::suspend_never {
    
};

int main(){
    
    return 0;
}
