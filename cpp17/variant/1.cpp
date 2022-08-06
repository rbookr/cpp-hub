#include <variant>
#include <string>
#include <cassert>
#include <iostream>
 
int main()
{
    std::variant<int, float> v, w;
    v = 42; // v contains int
    int i = std::get<int>(v);
    std::cout << i << std::endl;
    return 0;
}
