#include <concepts>
#include <iostream>
using namespace std;

struct A {
};


struct B :public A {
};

int main(){
    cout << "-----  std::common_reference_with<int,double> :"
        << std::common_reference_with<int,double>
        << "\n";

    cout << "-----  std::common_reference_with<int,char> :"
        << std::common_reference_with<int,char>
        << "\n";

    cout << "-----  std::common_reference_with<A,B> :"
        << std::common_reference_with<A,B>
        << "\n";
    return 0;
}
