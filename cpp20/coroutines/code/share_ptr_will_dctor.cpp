//share ptr 会自动消失
#include <memory>
#include "common_def.h"

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

struct node {
    int i  = 3;
    node() {
        std::cout << "node construct" << std::endl;
    }

    ~node() {
        std::cout << "node de construct" << std::endl;
    }
    friend std::ostream & operator<<(std::ostream & o , node & n) {
        o << n.i;
        return o;
    }

    node(node const & other) {
        std::cout <<  "copy construct"<< std::endl;
        i = other.i;
    }

    node(node && other) {
        std::cout <<  "copy move construct"<< std::endl;
        i = other.i;
    }

    node & operator=(node const & other) {
        std::cout <<  "copy operator "<< std::endl;
        i = other.i;
        return (*this);
    }

    node & operator=(node && other) {
        std::cout <<  "copy move operator "<< std::endl;
        i = other.i;
        return (*this);
    }

};


promiseObj func(){
    int i = 1;
    std::cout << i << std::endl;
    co_await std::suspend_always{};
    i = 2;
    std::cout << i << std::endl;
    // 证明 原始的类型 会被保存到 coroutine_ state 里
    node n;

    std::cout << "n before " << n << std::endl;
    co_await std::suspend_always{};
    //直接复制 node的 内存进行 复制的
    std::cout << "n after " << n << std::endl;
}

int main(){

    auto __promise = func();

    __promise.m_h.resume(); // int i
    std::cout << "promiseObj resume" << std::endl;
    __promise.m_h.resume(); // node
    
    return 0;
}
