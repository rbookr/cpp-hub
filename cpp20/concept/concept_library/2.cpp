#include <iostream>
using namespace std;

template<typename>
void test_ptr_convertible(...)
{
    cout << "failed\n";
}

//利用的原理是能否 自动转换
template<typename T>
void test_ptr_convertible(T const *) 
{
    cout << "yes\n";
}


struct A {
    int a;
};

struct B :public A {
    int b;
};

struct C {
};

int main(){
    
    test_ptr_convertible<A>(static_cast<B*>(nullptr));
    test_ptr_convertible<A>(static_cast<C*>(nullptr));

    return 0;
}
