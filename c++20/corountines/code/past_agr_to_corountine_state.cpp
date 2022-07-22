/**
 * 通过协程的参数
 * 1. 在prmose_type的内部生成需要的数据
 * 2. 在整个协程结束的时候释放资源
 *   协程会在ctrl+c的时候自动执行final_suspend吗？
 *
 * ? promise_type 会复制参数,结束时会删除参数?
 */
#include <memory>
#include "common_def.h"

struct promise_object;

struct promise_type;

struct promise_object {
    using promise_type = ::promise_type;
    std::coroutine_handle<promise_type> m_h;
};

struct promise_type {
    promise_object get_return_object() {
        return {std::coroutine_handle<promise_type>::from_promise(*this)};
    }

    std::suspend_never initial_suspend() { 
        return {};
    }

    std::suspend_never final_suspend() noexcept{ 
        return {};
    }
    
    void return_void() {}
    void unhandled_exception() {}
};

struct node {
    int i = 1;
    node() {
        std::cout << "default cotr" << std::endl;
    }
    node(node const & ) {
        std::cout << "copy cotr" << std::endl;
    }

    //node(node && ) {
        //std::cout << "movable copy cotr" << std::endl;
    //}
    //node(node&&) = delete;

    node & operator=(node const &) {
        std::cout << "copy asign" << std::endl;
        return *this;
    }

    ~node() {
        std::cout << "default decotr , i = " << i << std::endl;
    }
};

promise_object func(node a){
    a.i = 2;
    std::cout << "func 1,i = " << a.i << std::endl;
    co_await std::suspend_always{};
    std::cout << "func 2,i = " << a.i << std::endl;
    co_await std::suspend_always{};
    std::cout << "func 3,i = " << a.i << std::endl;
}

/**
 * test1()的运行结果表明
 * 1. coroutine函数的执行的参数a 其时是被复制到coroutine_state的参数
 * 2. x 被构造,通过 x copy ctor 得到a
 *  如果存在 movable ctor 就使用movable ctor 复制a到 coroutine_state
 *  否则使用 copy ctor 到 coroutine_state
 *
 * 普通参数a在第一次await 被析构
 */
void test1() {
    node x;
    x.i = 100;
    auto coroutine_obj = func(x);
    std::cout << " run func 1" << std::endl;
    std::cout << " run func resume" << std::endl;
    coroutine_obj.m_h.resume();
    std::cout << " run func resume after" << std::endl;
    coroutine_obj.m_h.resume();
}

promise_object func2(std::shared_ptr<node> sp) {
    sp->i = 2;
    std::cout << "func 1,i = " << sp->i  << " sp.count="<< sp.use_count()<< std::endl;
    co_await std::suspend_always{};
    std::cout << "func 2,i = " << sp->i  << " sp.count="<< sp.use_count()<< std::endl;
    co_await std::suspend_always{};
    std::cout << "func 3,i = " << sp->i  << " sp.count="<< sp.use_count()<< std::endl;
}


/**
 * test2() 运行的结果表明:
 * 1. shared_ptr 被 复制到 coroutine_state 里
 * 2. 在整个coroutine_state 结束时, shared_ptr 的use_count--,变成0,就析构
 */
void test2(){
    auto t = std::make_shared<node>();
    auto coroutine_obj = func2(t);
    std::cout << " run func 1" << std::endl;
    std::cout << " run func resume" << std::endl;
    coroutine_obj.m_h.resume();
    std::cout << " run func resume after" << std::endl;
    coroutine_obj.m_h.resume();
}

int main(){
    std::cout << "============ test 1" << std::endl;
    test1();
    std::cout << "\n" << std::endl;
    std::cout << "============ test 2" << std::endl;
    test2();
    return 0;
}
