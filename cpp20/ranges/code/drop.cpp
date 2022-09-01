#include <iostream>
#include <vector>
#include <ranges>
#include "utils.hpp"

int func(){
    return 2;
}

int main(){
    std::vector v {1,2,3,4,5,6,7,8,9};

    std::cout << type_name<decltype(std::ranges::views::drop)>() << "\n";
    // 这个 drop_inst 的类型是 std::ranges::__RangeAdaptorClosure
    auto drop_inst = std::ranges::views::drop(func());
    std::cout << type_name<decltype(drop_inst)>() << "\n";
    auto result { v | drop_inst};
    for(auto & i : result ){
        std::cout << i
            << " ";
    }
    return 0;
}
