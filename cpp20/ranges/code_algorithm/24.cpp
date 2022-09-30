#include <algorithm>
#include <array>
#include <iostream>
#include <string>
 
int main()
{
    std::string s{"ABCDEF"};
    std::cout << s << " → ";
    std::ranges::reverse(s.begin(), s.end());
    std::cout << s << " → ";
    std::ranges::reverse(s);
    std::cout << s << " │ ";
 
    std::array a{1, 2, 3, 4, 5};
    for(auto e : a) { std::cout << e << ' '; }
    std::cout << "→ ";
    std::ranges::reverse(a);
    for(auto e : a) { std::cout << e << ' '; }
    std::cout << '\n';

    std::cout << "======reverse_copy======" << "\n";
    std::string x{"12345"}, y(x.size(), ' ');
    std::cout << x << " → ";
    std::ranges::reverse_copy(x.begin(), x.end(), y.begin());
    std::cout << y << " → ";
    std::ranges::reverse_copy(y, x.begin());
    std::cout << x << '\n';
}
