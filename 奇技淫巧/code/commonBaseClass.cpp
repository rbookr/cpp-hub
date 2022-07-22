/**
 * 核心思想 自动把基类指针转换成子类指针
 */
/**
 * 
 *   
 *  +------------+
 *  |            |
 *a |  __call__  |---------------------+----+
 *  +------------+                     |    |
 *b |            |                     |    |
 *  | static invoke_function<type C1><-+    |
 *  | static invoke_function<type C2><------+
 *  |            |
 *  +------------+
 *  |            |
 *c |            |
 *  +------------+
 *
 */
#include <iostream>

struct a {
    // 需要一个指针
    void hello() {
        this->__call__(this);
    }
    using call_type = void (*)(a *);
    call_type __call__;
};

struct b : a {

    template<typename subClass>
    b(subClass * ){
        //让他指向自己
        this->__call__ = &invoke_function<subClass>;
    }
    
    template<typename subClass>
    static void invoke_function(a * p_a){
        auto pointer = static_cast<subClass *>(p_a);
        pointer -> say_hello();
    }
};

struct c1 : b {
    int a[100] = {0};
    c1() : b(this) {}

    void say_hello() {
        std::cout << "c1 say hello" << std::endl;
    }
};

struct c2 : b {

    c2() : b(this) {}
    void say_hello() {
        std::cout << "c2 say hello" << std::endl;
    }
};

int main(){
    c1 _c1;
    c2 _c2;

    a * c1_a = &_c1;
    c1_a->__call__(c1_a);

    a * c2_a = &_c2;
    auto print_address = [](auto address,std::string_view name) {
        std::cout << name <<  " : "   <<  std::hex <<
            reinterpret_cast<uint64_t>(address)<< std::endl;
    };

    print_address(c1_a, "c1_a");
    print_address(c2_a, "c2_a");

    c2_a->__call__(c2_a);

    c2_a->__call__(c1_a); 
    // 为什么这个 输出 c2 say_hello 原理我不知道

    


    return 0;
}
