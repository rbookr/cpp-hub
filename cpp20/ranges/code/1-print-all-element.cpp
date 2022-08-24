#include "common.h"

namespace vw = std::ranges::views;

int main(){
	//use stl algorithm
	std::for_each(v.cbegin(),v.cend(),print_elem);

	//use range loop

	cout << "\n\n====use range loop" << "\n\n\n";

	for(auto & i : v){
		print_elem(i);
	}

	cout << "\n\n====use std::ranges " << "\n\n\n";

	std::ranges::for_each(v.begin(),v.end(),print_elem);

	cout << "\n\n====use std::ranges,print all elements in reverse order " << "\n\n\n";
	cout << " method 1 \n";
	std::ranges::for_each(v.rbegin(),v.rend(),print_elem);
	cout <<  '\n';

	cout << " method 2 \n";
	for(auto &i : v | std::ranges::views::reverse ){
		cout << i << ' ';
	}
	cout <<  '\n';

	cout << "\n\n====use std::ranges,print all even elements in reverse order " << "\n\n\n";

	cout << "before ranges ,use std::for_each\n";
	std::for_each(v.rbegin(),v.rend(),
			[&](auto i){
				if( is_even(i) )
					print_elem(i);
			});
	cout <<  '\n';

	cout << "after ranges ,use views : reverse, filter \n";
	for(auto i : v | vw::reverse | vw::filter(is_even) ){
		print_elem(i);
	}
	cout <<  '\n';


	cout << "\n\n==== skip first two element then print only the even numbers of next three" << "\n\n\n";
	
	cout << "before ranges \n";
	auto it = std::begin(v);
	std::advance(it,2);
	for(int i = 0 ;  it != v.end() && i < 3; i++,it++ ){
		if( is_even(*it))
			print_elem(*it);
	}

	cout <<  '\n';
	cout << "before ranges \n";
	for( auto i : v | vw::drop(2) | vw::take(3) | vw::filter(is_even))
		print_elem(i);

	cout <<  '\n';


	 /* cout << "\n\n==== all numbers from 100 to 200"<< "\n\n\n"; */
	/* for( auto i : std::ranges::range(100,200)) */
	 	/* print_elem(i);  */
	//TODO ....

	return 0;
}
