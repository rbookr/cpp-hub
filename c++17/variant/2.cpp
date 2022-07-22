#include <variant>
#include <string>
#include <iostream>
int main()
{
    std::variant<int, std::string> v = 1;
    std::cout << std::boolalpha
              << "variant holds int? "
              << std::holds_alternative<int>(v) << '\n'
              << "variant holds string? "
              << std::holds_alternative<std::string>(v) << '\n';
}
