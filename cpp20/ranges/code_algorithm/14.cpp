#include <algorithm>
#include <iterator>
#include <iostream>
#include <iomanip>
#include <string>
#include <string_view>
 
int main()
{
    const std::string_view in {"ABCDEFGH"};
    std::string out;
 
    std::ranges::copy_n(in.begin(), 4, std::back_inserter(out));
    std::cout << std::quoted(out) << '\n';
 
    out = "abcdefgh";
    const auto res = std::ranges::copy_n(in.begin(), 5, out.begin());
    // 测试返回值
    std::cout
        << "*(res.in): '" << *(res.in) << "', distance: "
        << std::distance(std::begin(in), res.in) << '\n'
        << "*(res.out): '" << *(res.out) << "', distance: "
        << std::distance(std::begin(out), res.out) << '\n';
}
