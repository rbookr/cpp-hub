#include <iostream>
#include <type_traits>

using namespace std;

template<typename T>
struct A {
    void say(){
        static_cast<T*>(this) -> say_impl();
    }
};

struct B : public A<B> {
    void say_impl() {
        std::cout << "say B \n";
    }
    int a=123,b,c;
};

int main(){

    A<B> a1;
    a1.say();
    // 只有 A<B> 这个实例a1 存在
    // 没有定义B的实例，为什么可以调用B的实例的方法呢？:
    // 那为什么 呢？

    //类型上不相等
    cout << "A<B> == B "
        << std::is_same_v<A<B>,B>
        << "\n";

    cout << "A<B> == B sizoef "
        << sizeof(A<B>) << " "
        << sizeof(B) << " "
        << "\n";

    auto pb = static_cast<B*>(&a1);
    pb -> say();
    cout << pb -> a << "\n";

    //
    cout <<" ==== B a2\n";
    B a2;
    a2.say();
    cout << a2. a << "\n";


    return 0;
}
