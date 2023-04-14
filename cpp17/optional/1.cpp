#include <optional>
#include <iostream>

std::optional<int> func(int num){

    if( num >10)
        return std::nullopt;
    else
        return num;
}

int main(){

    std::optional<int> a1 = func(1);
    if( a1.has_value())
        std::cout << "a1 = " << a1.value() << "\n";

    std::optional<int> a2 = func(100);
    if( a2.has_value())
        std::cout << "a2 = " << a2.value() << "\n";
    else
        std::cout << "a2 has no value";
    return 0;
}
