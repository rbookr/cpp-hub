#include <cstdio>
#include <iostream>
#include <ranges>
#include <vector>
using namespace std;

int main(){
    vector<int> v{1,2,3,-1,2,3};
    auto iter = std::min_element(v.begin(),v.end());
    cout << *iter << endl;
    return 0;
}
