/*-----------------
* author: Rainboy
* email: rainboylvx@qq.com
* time: 2022年 08月 11日 星期四 19:30:57 CST
*----------------*/

#include <iostream>
#include <coroutine>

template<typename T>
class generator {
public:
    struct promise_type;
    using myhandle_t = std::coroutine_handle<promise_type>;
    struct promise_type{
        generator get_return_object() {
            return myhandle_t::from_promise(*this);
        }

        static std::suspend_never initial_suspend() { return {};}
        static std::suspend_always final_suspend() { return {};}

        void unhandled_exception() { std::terminate();}

        void return_void() {}

    };

    //del copy constructor
    generator(const generator &) = delete;
    //raii delete handle
    ~generator(){
        if(coro)
            coro.destroy();
    }

private:
    generator() {} //不可以自己构造
    generator( myhandle_t h) : coro(h) {}
    myhandle_t coro;
};

void func(int i){
    if( i >= 3){
        std::cout << i << std::endl;
        return;
    }
    func(i+1);
}

int main(){
    func(1);
    return 0;
}
