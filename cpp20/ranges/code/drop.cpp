#include <iostream>
#include <vector>
#include <ranges>


int main(){
    std::vector v {1,2,3,4,5,6,7,8,9};

    auto result { v | std::ranges::views::drop(2)};
    for(auto & i : result ){
        std::cout << i
            << " ";
    }
    return 0;
}
