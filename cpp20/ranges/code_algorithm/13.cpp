#include "common.hpp"

int main(){
    auto v1 = get_vec();
    std::vector<int> v2;
    v2.reserve(v1.size());

    ranges::copy(v1,std::back_inserter(v2));
    std::cout << "v2 :" ;
    log_vec(v2);

    std::vector<int> from_vector(10);
    //在序列from_vector 上生成值
    std::iota(from_vector.begin(), from_vector.end(), 0);
 
    std::vector<int> to_vector;
 
    namespace ranges = std::ranges;
    ranges::copy(from_vector.begin(), from_vector.end(),
                 std::back_inserter(to_vector));
// or, alternatively,
//  std::vector<int> to_vector(from_vector.size());
//  ranges::copy(from_vector.begin(), from_vector.end(), to_vector.begin());
// either way is equivalent to
//  std::vector<int> to_vector = from_vector;
 
    std::cout << "to_vector contains: ";
 
    ranges::copy(to_vector, std::ostream_iterator<int>(std::cout, " "));
    std::cout << '\n';
 
    std::cout << "odd numbers in to_vector are: ";
 
    ranges::copy_if(to_vector, std::ostream_iterator<int>(std::cout, " "),
                 [](int x) { return (x % 2) == 1; });
    std::cout << '\n';
    return 0;
}
