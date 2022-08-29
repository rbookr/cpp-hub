#include <iostream>
#include <concepts>

using namespace std;

int main(){
    std::cout << 
        std::copyable<int>
        << std::endl;


    std::cout << 
        std::copyable<int&>
        << std::endl;
    return 0;
}

