#include <iostream>
using namespace std;

// <<<<<<<<<<<
template<int>
struct node_int{};

template<int = 1>
struct node_int1{};

template<int N = 2> //给一个名字
struct node_int2{};
// >>>>>>>>>>>


template<bool>
struct node{};

template<bool = true>
struct node2{};

template<bool = false>
struct node3{};

template<double d=0.001> //c++ 20 之间不尽指定double
struct node_double {};

int main(){
    node_int<int> a; // wrong ,只能给一个int类型的表达式
    node_int<1+2+3+4> b;
    node_int2<> c; //有一个默认的值N=2
    return 0;
}
