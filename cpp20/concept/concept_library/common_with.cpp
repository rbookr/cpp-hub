#include <concepts>
#include <iostream>

    
struct node {
};

int main(){
    std::cout 
        << "std::common_with<int,double> "
        << std::common_with<int,double> 
        << "\n";
        

    std::cout 
        << " std::common_with<node,double> "
        << std::common_with<node,double>
        << std::endl;

    std::cout << 
        " std::common_with<char,int> "
        << std::common_with<char,int>
        << std::endl;

    std::cout << 
        " std::common_with<char&,int> "
        << std::common_with<char&,int>
        << std::endl;

    std::cout << "------------------------------" << std::endl;


    return 0;
}
