#include <iostream>
#include <vector>
#include <numeric>

template<typename T>
void log_vec(T && vec){
    for (const auto& e : vec) {
        std::cout << e << " ";
    }
    std::cout << "\n" ;
}

int main(){
    std::vector<int> v{1,2,3,4,5 };
    std::vector<int> b;
    b.reserve(v.size());
    std::exclusive_scan(v.begin(),v.end(),std::back_inserter(b),0);
    std::cout << "=== log vector b: " << "\n";
    log_vec(b);

    return 0;
}

