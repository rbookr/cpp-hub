#include <iostream>
namespace {
    int a;
}

void func1() {
    a = 1;
    std::cout << "change file 1.cpp a -> 1" << std::endl;
}
