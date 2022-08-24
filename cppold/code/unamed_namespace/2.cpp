#include <iostream>
namespace {
    int a;
}

void func2() {
    a = 1;
    std::cout << "change file 2.cpp a -> 1" << std::endl;
}
