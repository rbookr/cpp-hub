#include <algorithm>
#include <iostream>
#include <numeric>
#include <string>
#include <vector>

#include "common.hpp"

void my_rotate(){
    std::vector<int> v;
    std::ranges::generate_n(std::back_inserter(v),10,[n{0}]() mutable { return ++n; });
    log_vec(v);

    std::ranges::rotate(v,std::ranges::next(v.begin(),2));
    log_vec(v);



}
 
int main()
{
    std::cout << "my_rotate" << "\n";

    my_rotate();

    std::cout  << "\n";
    std::string s(16, ' ');
 
    for (int k{}; k != 5; ++k) {
        std::iota(s.begin(), s.end(), 'A');
        std::ranges::rotate(s, s.begin() + k);
        std::cout << "Rotate left (" << k << "): " << s << '\n';
    }
 
    std::cout << '\n';
 
    for (int k{}; k != 5; ++k) {
        std::iota(s.begin(), s.end(), 'A');
        std::ranges::rotate(s, s.end() - k);
        std::cout << "Rotate right (" << k << "): " << s << '\n';
    }
 
    std::cout << "\n" "Insertion sort using `rotate`, step-by-step:\n";
 
    s = {'2', '4', '2', '0', '5', '9', '7', '3', '7', '1'};
 
    for (auto i = s.begin(); i != s.end(); ++i) {
        std::cout << "i = " << std::ranges::distance(s.begin(), i) << ": ";
        std::ranges::rotate(std::ranges::upper_bound(s.begin(), i, *i), i, i + 1);
        std::cout << s << '\n';
    }
    std::cout << (std::ranges::is_sorted(s) ? "Sorted!" : "Not sorted.") << '\n';
}
