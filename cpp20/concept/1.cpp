#include <cstdio>
#include <iostream>
#include <concepts>
using namespace std;


template<typename T>
concept Ineed = requires( T x){
    {x+1} -> std::same_as<int>;
};

template<typename T>
requires Ineed<T>
void myfoo(){
    cout << "hello" << endl;
}

int main(){
    myfoo<int>();
    myfoo<double>();
    
    return 0;
}
