#include <iostream>
#include <ranges>
#include <algorithm>
#include <vector>

using namespace std;

std::vector<int> v {1,1,2,3,4,8,13,21,34};

auto print_elem = [](auto const & e){
	std::cout << e << ' ';
};
auto is_even = [](auto const i){
	return i % 2 == 0;
}; 
