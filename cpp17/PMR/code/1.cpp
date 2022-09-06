//https://quick-bench.com/q/gyRE6p5EdZ-2P0XOAUwO99JRN7g
#include <iostream>
#include <bitset>
#include <array>
#include <memory_resource>
#include <list>

using namespace std;

std::array<int,1024> buf;

std::ostream& operator<< (std::ostream& os, std::byte b) {
    return os << std::bitset<8>(std::to_integer<int>(b));
}
 

int main(){
    for(int i = 0 ;i< 10;i++){
        cout << hex
            << (0xff & (int)buf[i])
            << " ";
    }
    std::cout << "\n" ;
    std::pmr::monotonic_buffer_resource
        memory_resource(buf.data(),buf.size());
    std::pmr::list<int>
        list({1,2,3,4,5,6,7},&memory_resource);
    for(int i = 0 ;i< 10;i++){
        cout 
            // << (0xff & (char)buf[i])
            << buf[i]
            << " ";

    }
    return 0;
}
