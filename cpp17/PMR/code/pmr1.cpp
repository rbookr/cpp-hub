#include <iostream>
#include <string>
#include <vector>
#include <array>
#include <cstdlib>
#include <memory_resource>
#include "tracknew.hpp"


int main(){
    TrackNew::reset();
    std::array<std::byte, 200000> buf;
    std::pmr::monotonic_buffer_resource pool { buf.data(),buf.size()};

    std::pmr::vector<std::string> coll{&pool};

    for (int i=0; i < 1000; ++i) {
        coll.emplace_back("just a non-SSO string");
    }
    TrackNew::status();
    return 0;
}
