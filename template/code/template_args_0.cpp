#include <iostream>
using namespace std;


template<int N> //1 int型的常量
struct node { int myvalue = N; };

template<int N = 2> //2 有一个默认值
struct node2 { };

template<int = 2> //3 匿名常量
struct node3 {};

int main(){
    return 0;
}
