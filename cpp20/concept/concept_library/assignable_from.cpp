#include <iostream>
#include <concepts>

using namespace std;

int main(){
    cout << "-------- : assignable_from<int,int> ";
    std::cout << 
        std::assignable_from<int, int>
        << std::endl;
    std::cout << '\n' ;


    cout << "-------- : assignable_from<int&,int&> ";
    std::cout << 
        std::assignable_from<int&, int&>
        << std::endl;
    std::cout << '\n' ;

    cout << "-------- : assignable_from<int&,int> ";
    std::cout << 
        std::assignable_from<int&, int>
        << std::endl;
    std::cout << '\n' ;

    cout << "-------- : assignable_from<int,int&> ";
    std::cout <<
        std::assignable_from<int, int&>
        << std::endl;
    std::cout << '\n' ;

    std::cout << 
        " std::assignable_from<int,double> "
        << std::assignable_from<int,double>
        << std::endl;

    std::cout << 
        " std::assignable_from<double,int> "
        << std::assignable_from<double,int>
        << std::endl;

    std::cout << 
        " std::assignable_from<int,int> "
        std::assignable_from<int,int>
        << std::endl;
    return 0;
}
