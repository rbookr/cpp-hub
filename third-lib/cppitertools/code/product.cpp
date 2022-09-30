#include <iostream>
#include <string>
#include <vector>
#include "dropwhile.hpp"
#include "product.hpp"

using std::vector;
using iter::product;
using iter::dropwhile;
using std::cout;
using std::string;

int main(){
    vector<int> v1{1,2,3};
    vector<int> v2{7,8};
    vector<string> v3{"the","cat"};
    vector<string> v4{"hi","what's","up","dude"};
    
    auto p1 = product(v1,v2,v3,v4);
    auto iter = p1.begin();
    ++iter;
    ++iter;
    ++iter;
    ++iter;

    // for (auto&& [a, b, c, d] : product(v1,v2,v3,v4)) {
    //     cout << a << ", " << b << ", " << c << ", " << d << '\n';
    // }
    //
    // std::cout << "===========================================" << std::endl;
    // for (auto&& [a, b, c, d] : product(v1,v2,v3,v4) | dropwhile(
    // [](auto & v){ return std::get<0>(v) == 1;}
    //
    //             )) {
    //     cout << a << ", " << b << ", " << c << ", " << d << '\n';
    // }
    return 0;
}
