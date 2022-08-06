#include <filesystem>
#include <string_view>
#include <iostream>
using namespace std;

namespace fs = std::filesystem;

int main(){
    fs::path a ("/1/2/3/4");
    std::cout << a.extension() << std::endl;
    fs::path b ("/1/2/3/4.html");
    std::cout << b.extension() << std::endl;

    std::cout << "====== 2====" << std::endl;

    fs::path c = a / "xxx";
    std::cout << c << std::endl;

    string_view xxx = "/xxx";
    xxx.remove_prefix(1);
    c = fs::path("../www") / xxx;
    std::cout << c << std::endl;

    return 0;
}
