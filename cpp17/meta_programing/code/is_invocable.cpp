#include <type_traits>

#include "utils.hpp"

void func1() {}

int main(){
    using t1 = decltype(func1);

    log( type_name<t1>(), std::is_invocable<t1>::value);

    using t2 = int();
    log( type_name<t2>(), std::is_invocable<t2>::value);

    using t3 = int(int);
    log( type_name<t3>(), "std::is_invocable<t3,int>",std::is_invocable<t3,int>::value);

    auto a4 = [](int,double) {};
    using t4 = decltype(a4);

    log( type_name<t4>(), "std::is_invocable<t4,int,double>",std::is_invocable<t4,int,double>::value);
    log_barrier();

        

    return 0;
}
