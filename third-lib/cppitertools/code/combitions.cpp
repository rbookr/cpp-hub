#include <iostream>
#include <string>
#include <vector>
#include "combinations.hpp"
#include "combinations_with_replacement.hpp"

using std::vector;
using iter::combinations;
using iter::combinations_with_replacement;
using std::cout;
using std::string;

int main(){
    vector<int> v {1,2,3,4,5};
    //combinations 的原理是什么呢?
    for( auto && i : combinations(v,3) ) {
        for(auto && j : i) {
            cout << j << " ";
        }
        std::cout << "\n" ;
    }
    std::cout << "=====================" << std::endl;

    for( auto && i : combinations_with_replacement(v,3) ) {
        for(auto && j : i) {
            cout << j << " ";
        }
        std::cout << "\n" ;
    }
    return 0;
}
