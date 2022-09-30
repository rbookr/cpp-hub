#include "common.hpp"

auto print = [](const auto& n) { std::cout << ' ' << n; };

int main(){

    auto vec = get_vec();
    
    using pair = std::pair<int, std::string>; 
    std::vector<pair> pairs{{1,"one"}, {2,"two"}, {3,"tree"}};
 
    std::cout << "project the pair::first: ";
    ranges::for_each(pairs, print, [](const pair& p) { return p.first; });
 
    std::cout << "\n" "project the pair::second:";
    ranges::for_each(pairs.begin(),pairs.end(), print, &pair::second); // ?!

    // 第三个参数 : 类的成员函数指针

    
    std::cout << "\n for_each_n" ;
    ranges::for_each_n(vec.begin(),3,print);
    return 0;
}
