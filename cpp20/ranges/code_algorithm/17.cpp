#include <algorithm>
#include <vector>
#include <iostream>

auto print(const auto& v) {
    for (const auto& elem : v) {
        std::cout << elem << " ";
    }
    std::cout << '\n';
}
 
int main()
{
    std::vector<int> v{0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
 
    namespace ranges = std::ranges;
    ranges::fill(v.begin(), v.end(), -1);
 
    for (auto elem : v) {
        std::cout << elem << " ";
    }
    std::cout << "\n";
 
    ranges::fill(v, 10);
 
    for (auto elem : v) {
        std::cout << elem << " ";
    }
    std::cout << "\n";


    constexpr auto n{8};
 
    std::vector<std::string> v1(n, "░░");
    print(v1);
 
    std::ranges::fill_n(v1.begin(), n/2, "▓▓");
    print(v1);
}
