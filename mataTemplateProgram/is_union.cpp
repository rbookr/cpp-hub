#include <iostream>
#include <type_traits>

struct A {
    
};

union B{
    int a;
    char c;
};
int main(){
    std::cout << std::is_union<A>::value << std::endl;
    std::cout << std::is_union<B>::value << std::endl;
    constexpr auto a = __is_union(B);
    std::cout << a << std::endl;
    return 0;
}

