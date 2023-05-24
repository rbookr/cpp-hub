#include <concepts>
#include <coroutine>
#include <exception>
#include <iostream>


static int refNumber{0};

struct ReturnObject{
  struct promise_type{
    promise_type() = default;
    ReturnObject get_return_object() {return {}; }
    std::suspend_never initial_suspend() {return {}; }
    std::suspend_never final_suspend() noexcept {return {}; }
    void unhandled_exception(){}
  };
};

ReturnObject foo(){
    std::cout << "1. hello from coroutine";
    co_await std::suspend_always{}; //suspend the coroutine at this point
    std::cout << "2. hello from coroutine";
} 

int main(){foo(); 

}
