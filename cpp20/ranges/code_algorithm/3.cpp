#include "common.hpp"

int main(){
    auto vec = get_vec();
    std::cout << 
        ranges::count(vec,1)
        << "\n";
    //1

    std::cout << 
        ranges::count_if(vec,[](int &n){return n>1;})
        << "\n";
    // 9


    using pair = std::pair<int, std::string>; 
    std::vector<pair> pairs{{1,"one"}, {2,"two"}, {3,"tree"}};

    std::cout << 
        std::ranges::count(pairs,1,&pair::first)
        << "\n";
    //1
    return 0;

}
