#include <concepts>
#include <iostream>


//
    
struct node {
};

int main(){
    std::cout << 
        std::common_with<int,double>
        << std::endl;

    std::cout << 
        std::common_with<node,double>
        << std::endl;

    std::cout << 
        std::common_with<char,int>
        << std::endl;
    std::cout << 

        std::common_with<char&,int>
        << std::endl;

    std::cout << "------------------------------" << std::endl;

    std::cout << 
        std::assignable_from<int,double>
        << std::endl;

    std::cout << 
        std::assignable_from<double,int>
        << std::endl;

    std::cout << 
        std::assignable_from<int,int>
        << std::endl;

    return 0;
}
