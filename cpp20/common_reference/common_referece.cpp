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
    cout <<"-----------single type----------\n";
    int a = 1;
    using t1 = common_reference_t<int&>;
    t1 a1 = a;
    print_type<t1,int&>();
    print_type<t1,int>();

    cout <<"-----------two type----------\n";
    using t2 = common_reference<int&,double&>::type;

    print_type<t2, double>();
    //? 为什么是double 类型呢？
    
    using t3 = common_reference<int&,int&>::type;
    print_type<t3, double>();

    cout <<"-----int& char&------\n";

    using t4 = common_reference<int&,char&>::type;
    print_type<t4, int>();

    //common_reference<int,void>::type a3;
    
    cout << "-- t5 --\n";
    using t5 = decltype(false ? std::declval<int &>() : std::declval<double &>());
    print_type<t5,int>();

    auto xxx = true ? (int)1 : double(3.111);

    cout << xxx << '\n';
    print_type<decltype(xxx),int>();
    //using t4 = decltype(false ? std::declval<t int &>() : std::declval<>())
    return 0;
}
