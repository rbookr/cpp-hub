#include <iostream>
#include "common.hpp"


using namespace std;

//SFINAE
//sink hole
template<typename>
void test(...){
    cout << 
        "sink hole function"
        << endl;
}


template<typename T>
void test(int T::*){
    cout << 
        "template func"
        << endl;
}

struct node {
    int a;
};

union myu {
    int a;
    double b;
};

template<typename T>
void check_is_union(){
    cout << "is_union_type "
        << rainboy::is_union<T>::value
        << endl;
}

struct A { int a; };

struct B :public A { int b; };

struct C { };

int main() {
    test<int>(0);
    test<node>(0);
    test<myu>(0);
    check_is_union<myu>();
    check_is_union<int>();
    cout <<"-------------------\n";

    cout << "node is class " << rainboy::is_class_v<node> << '\n';
    cout << "int is class " << rainboy::is_class_v<int> << '\n';
    cout << "is_base of A B " << rainboy::is_base_of<A,B>::value << '\n';
    cout << "is_base of A C " << rainboy::is_base_of<A,C>::value << '\n';
    cout << "is_base of A int " << rainboy::is_base_of<A,int>::value << '\n';

    cout <<"-------------------\n";
    cout << "convertible to B -> A " << rainboy::convertible_to<B, A> << '\n';
    cout << "convertible to int -> double " << rainboy::convertible_to<int, double> << '\n';
    
    // 是一个 is_integral
    


    return 0;
}
