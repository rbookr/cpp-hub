#include "mythreadpool.hpp"
#include <iostream>
#include <chrono>
using namespace std;
int main(){
    THREAD_POOL::threadpool pool{4}; //只有一个池子
    atomic<int> a{0};
    for(int i=1;i<=1000;++i){
        pool.commit([i,&a](){
                //std::cout << i << std::endl;
                //std::cout << i << '\n' ;
                ++a;
                });
    }
    this_thread::sleep_for(chrono::seconds(2));
    std::cout << "a=" << a << std::endl;
    return 0;
}
