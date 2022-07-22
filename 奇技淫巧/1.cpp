#include <iostream>

struct node {
    template<typename T>
    struct A {
        static constexpr T a{0};
    }; //这只是一个类型
};
int main(){
    node n1;
    node::A<int> x;
    std::cout << node::A<int>::a << std::endl;
    return 0;
}
