#include <iostream>
template<typename... Args>
void log(Args... args){
    ((std::cout << args <<" "), ...);
    std::cout <<"\n";
}
#define LOG(...) log("LINE:",__LINE__,__VA_ARGS__)
