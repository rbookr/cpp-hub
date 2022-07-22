#pragma once

#include <iostream>

#define dbg(...) std::cerr << "Line: " << __LINE__ << "  ";\
[](const auto&...x){ char c='='; std::cerr<<#__VA_ARGS__<<" "; ((std::cerr<<std::exchange(c,',')<<" "<<x),...); std::cerr<<std::endl; }(__VA_ARGS__)
