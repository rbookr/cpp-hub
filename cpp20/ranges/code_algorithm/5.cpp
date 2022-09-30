#include <algorithm>
#include <iomanip>
#include <iostream>
#include <string_view>
#include <ranges>

#include "common.hpp"
 
constexpr bool is_palindrome(const std::string_view s)
{
    namespace views = std::views;
    auto forward = s | views::take(s.size() / 2);
    auto backward = s | views::reverse | views::take(s.size() / 2);
    return std::ranges::equal(forward, backward);
}
 
void test(const std::string_view s)
{
    std::cout << quoted(s) << " is "
              << (is_palindrome(s) ? "" : "not ")
              << "a palindrome\n";
}
 
int main()
{
    auto v1 = get_vec();
    decltype(v1) v2;
    v2.reserve(v1.size());

    std::ranges::copy(v1,std::back_inserter(v2));

    std::cout << "v1 equal v2 :"
        << ( std::ranges::equal(v1,v2) ? " yes ": " no ")
        << "\n";

    test("radar");
    test("hello");
    static_assert(is_palindrome("ABBA") and not is_palindrome("AC/DC"));
    return 0;
}
