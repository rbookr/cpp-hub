#include <iostream>
#include <iomanip>
#include <algorithm>
#include <numeric>
#include <ranges>
#include <vector>

using namespace std;

auto get_vec(){
    std::vector<int> v(10);
    ranges::generate(v, [n=0] ()mutable {return ++n;} );
    return v;
}

template<typename T>
void log_vec(T&& v){
    ranges::copy(v,std::ostream_iterator< ranges::range_value_t<T> >(std::cout," "));
    std::cout << "\n";
}

