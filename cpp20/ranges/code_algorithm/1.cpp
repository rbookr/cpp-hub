#include "common.hpp"

int main(){
    auto vec = get_vec();
    log_vec(vec);

    std::cout << std::boolalpha
        << ranges::all_of(vec,[](auto i){ return i > 0; })
        << "\n";

    std::cout << std::boolalpha
        << ranges::any_of(vec,[](auto i){ return i > 0; })
        << "\n";

    std::cout << std::boolalpha
        << ranges::none_of(vec,[](auto i){ return i < -1; })
        << "\n";
    return 0;
}
