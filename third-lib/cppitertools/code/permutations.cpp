
#include <iostream>
#include <string>
#include <vector>
#include "permutations.hpp"
using std::vector;
using iter::permutations;
using std::cout;
using std::string;

int main(){
    vector<int> v = {1,2,3,4,5};
    //全排列
    for (auto&& vec : permutations(v)) {
        for (auto&& i : vec) {
            cout << i << ' ';
        }
        cout << '\n';
    }

    std::cout << "=======================" << std::endl;
    vector<int> v2 = {5,4,3,2,1};
    for (auto&& vec : permutations(v2)) {
        for (auto&& i : vec) {
            cout << i << ' ';
        }
        cout << '\n';
    }
    return 0;
}
