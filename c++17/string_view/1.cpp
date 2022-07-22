#include <string>
#include <string_view>
#include <ostream>
#include <iostream>
using namespace std;

int main(){
    string_view a = "123123121231123123121231123123121231123123121231123123121231123123121231123123121231123123121231123123121231123123121231123123121231123123121231" ;
    //string b = a; error 不能隐式的转换为string
    string b{a}; //可以显示的转换

    string_view c = b;
    std::cout << c << std::endl;
    b[0]='A';
    std::cout << c << std::endl; //b的改变会导致c的改变

    //c[0] = 'B'; // 不能改
    //
    string x1  = "1.2.3.4";
    string_view x1_view = x1;
    x1_view.remove_prefix(1);
    std::cout << x1_view << std::endl;
    return 0;
}
