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

    return 0;
}
