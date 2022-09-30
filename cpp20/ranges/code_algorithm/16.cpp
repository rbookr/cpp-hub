#include "common.hpp"

using Vec = std::vector<std::string>;
void print(std::string_view rem, Vec const& vec) {
    std::cout << rem << "[" << vec.size() << "]: ";
    for (const std::string& s : vec)
        std::cout << (s.size() ? s : std::string{"·"}) << ' ';
    std::cout << '\n';
}
 

int main(){
    auto v1 = get_vec();
    auto v2 = std::vector<int> ();
    v2.reserve(v1.size());

    ranges::move(v1,std::back_inserter(v2));
    log_vec(v1);
    log_vec(v2);

    std::vector<std::string> v3;
    v3.emplace_back("hello1");
    v3.emplace_back("hello2");
    v3.emplace_back("hello3");
    v3.emplace_back("hello4");

    std::vector<std::string> v4;
    v4.reserve(v3.size());

    ranges::move(v3,std::back_inserter(v4));
    std::cout << "v3: " ;
    log_vec(v3);
    std::cout << "v4: " ;
    log_vec(v4);

    std::cout << "===== move_backward \n" ;

    Vec a{"▁", "▂", "▃", "▄", "▅", "▆", "▇", "█"};
    Vec b(a.size());
 
    print("Before move:\n" "a", a);
    print("b", b);
 
    std::ranges::move_backward(a, b.end());
 
    print("\n" "Move a >> b:\n" "a", a);
    print("b", b);
 
    std::ranges::move_backward(b.begin(), b.end(), a.end());
    print("\n" "Move b >> a:\n" "a", a);
    print("b", b);
 
    std::ranges::move_backward(a.begin(), a.begin()+3, a.end());
    print("\n" "Overlapping move a[0, 3) >> a[5, 8):\n" "a", a);
    return 0;
}
