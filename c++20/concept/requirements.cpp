#include <iostream>
#include <concepts>

struct node {
    int x,y;
};


template<typename T,typename U>
concept common = requires {
    typename  std::common_type_t<T,U>;
};

template<typename T,typename U>
requires common<T, U>
void func(T t,U u) {
}

int main(){
    //输出 0 因为不成立
    std::cout << (common<int, node>) << std::endl;

    // 没有匹配的函数
    //func(int(1), node {});

    // 运行成功
    func(int(1), int(2));
    return 0;
}
