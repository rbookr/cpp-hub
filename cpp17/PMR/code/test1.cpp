#include <iostream>
#include <memory_resource>

int main(){
    std::string s("my string with some value!");
    std::pmr::string ps{std::move(s),std::pmr::new_delete_resource()};
    return 0;
}
