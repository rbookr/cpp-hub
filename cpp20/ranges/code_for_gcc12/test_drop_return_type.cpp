#include <ranges>
#include <vector>
#include <iostream>

#include "utils/type_name.hpp"

int func(int a) { return a;}

int main(){
    std::vector<int> v{1,2,3};
    auto t = v | std::ranges::views::drop(2);
    std::cout << rainboy::type_name<decltype(t)>() << "\n";
    int b = 2;
    b = 2;

        auto tt = std::ranges::views::drop(func(b));
    return 0;
}
