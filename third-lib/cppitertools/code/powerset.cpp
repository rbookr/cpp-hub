
#include <iostream>
#include <string>
#include <vector>
#include "powerset.hpp"
using std::vector;
using iter::powerset;
using std::cout;
using std::string;

int main(){
    vector<int> vec {1,2,3};
    //求所的子集
    for (auto&& v : powerset(vec)) {
        for (auto&& i : v) {
            cout << i << " ";
        }
        cout << '\n';
    }
    return 0;
}
