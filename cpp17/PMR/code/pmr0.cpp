// source https://www.cppstd17.com/code/pmr/pmr0.cpp.html
#include <iostream>
#include <string>
#include <vector>
#include "tracknew.hpp"

int main(){
    TrackNew::reset();
    std::vector<std::string> coll;
    for(int i=1;i<=3;++i){
        coll.emplace_back("just a non-SSO string");
    }
    TrackNew::status();
    return 0;
}
