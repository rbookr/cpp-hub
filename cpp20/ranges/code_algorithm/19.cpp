#include <algorithm>
#include <array>
#include <numeric>
#include <iostream>
#include <random>
#include <string_view>
 
auto dice() {
    static std::uniform_int_distribution<int> distr{1, 6};
    static std::random_device device;
    static std::mt19937 engine{device()};
    return distr(engine);
}
 
void iota(auto& v, int n) {
    std::ranges::generate(v, [&n] () mutable { return n++; });
}
 
void print(std::string_view comment, const auto& v) {
    for (std::cout << comment; int i : v) { std::cout << i << ' '; }
    std::cout << '\n';
}
 
int main()
{
    std::array<int, 8> v;
 
    std::ranges::generate(v.begin(), v.end(), dice);
    print("dice: ", v);
    std::ranges::generate(v, dice);
    print("dice: ", v);
 
    iota(v, 1);
    print("iota: ", v);
    std::iota(v.begin(),v.end(),100);
    print("iota: ", v);

    std::cout << "========generate_n  \n" ;
    std::array<int, 8> v1;
 
    std::ranges::generate_n(v1.begin(), v1.size(), dice);
    print("dice: ",v1);
 
    std::ranges::generate_n(v1.begin(), v1.size(), [n{0}] () mutable { return n++; });
    // same effect as std::iota(v.begin(), v.end(), 0);
    print("iota: ",v1);
    return 0;
}
