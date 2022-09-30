
#include <algorithm>
#include <array>
#include <vector>
#include <iostream>



void _replace_copy_if(){
    auto print = [](const auto rem, const auto& v) {
        for (std::cout << rem << ": "; const auto& e : v)
            std::cout << e << ' ';
        std::cout << '\n';
    };
 
    std::vector<int> o;
 
    std::array p{1, 6, 1, 6, 1, 6};
    o.resize(p.size());
    print("p", p);
    std::ranges::replace_copy(p, o.begin(), 6, 9);
    print("o", o);
 
    std::array q{1, 2, 3, 6, 7, 8, 4, 5};
    o.resize(q.size());
    print("q", q);
    std::ranges::replace_copy_if(q, o.begin(), [](int x){ return 5 < x; }, 5);
    print("o", o);

}
 
int main()
{
    auto print = [](const auto& v) {
        for (const auto& e : v) { std::cout << e << ' '; }
        std::cout << '\n';
    };
 
    std::array p{1, 6, 1, 6, 1, 6};
    print(p);
    std::ranges::replace(p, 6, 9);
    print(p);
 
    std::array q{1, 2, 3, 6, 7, 8, 4, 5};
    print(q);
    std::ranges::replace_if(q, [](int x){ return 5 < x; }, 5);
    print(q);

    std::cout << "\n\n_replace_copy_if" << "\n\n";

    _replace_copy_if();

    return 0; 
}
