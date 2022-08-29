#include <iostream>
#include <type_traits>
#include <typeinfo>

#include "utils.hpp"

using namespace std;

template<typename T,typename T2>
void print_type(){
    std::cout << "T type is "
        << type_name<T>()
        << "\n";
    std::cout <<
        type_name<T>() << " "<< type_name<T2>() <<" "
        << "is_same "
        << std::is_same_v<T, T2>
        << "\n\n";
}

int main(){
    int a = 1;
    using t1 = common_reference_t<int&>;
    t1 a1 = a;
    print_type<t1,int&>();
    print_type<t1,int>();

    using t2 = common_reference<int&,double&>::type;

    print_type<t2, double>();
    std::cout << 
        sizeof(t2)
        << std::endl;
    return 0;
}
