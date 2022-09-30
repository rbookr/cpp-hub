#include <iostream>
#include "range.hpp"

using iter::range;

int main(){
    for (const auto& e : iter::range(10)) {
        std::cout << e << " ";
    }
    std::cout << "\n" ;

    for (const auto& e : iter::range(10,15)) {
        std::cout << e << " ";
    }
    std::cout << "\n" ;

    for (const auto& e : iter::range(10,15,2)) {
        std::cout << e << " ";
    }
    std::cout << "\n" ;

    for (const auto& e : iter::range(2,-3,-1)) {
        std::cout << e << " ";
    }
    std::cout << "\n" ;

    // step = 0, return empty range
    for (const auto& e : iter::range(0,10,0)) {
        std::cout << e << " ";
    }
    std::cout << "\n" ;

    for(auto i : range(5.0, 10.0, 0.5)) {
        std::cout << i << ' ';
    }
    std::cout << "\n" ;
    return 0;
}
