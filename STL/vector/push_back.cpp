#include <iostream>
#include <vector>
using namespace std;

struct node {
    int id;
    node(int i):id{i} {
        std::cout << "I am being constructed " << id <<".\n";
    }
    ~node(){
        std::cout << ">>I am being Deconstructed " << id << ".\n";
    }
};
int main(){
    vector<node> vec;
    std::cout << 1 << std::endl;
    vec.push_back(node(1));
    std::cout << 2 << std::endl;
    vec.push_back(node(2));
    std::cout << 3 << std::endl;
    vec.push_back(node(3));
    // 在复制到新内存的时候也会析构
    std::cout << "==============" << std::endl;
    
    vector<node> vec2;
    //vec2.reserve(3); //预留空间,可以避免析构
    std::cout << 1 << std::endl;
    vec2.emplace_back(1);
    std::cout << 2 << std::endl;
    vec2.emplace_back(2);
    std::cout << 3 << std::endl;
    vec2.emplace_back(3);
    std::cout << "==============" << std::endl;
    
    return 0;
}
