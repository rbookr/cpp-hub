#include <iostream>
#include <string>
#include <type_traits>


//c++ 20 才能使用
template<typename... Args>
std::string quick_dump_json(Args&&... args) {
    static_assert(sizeof... (Args) % 2 == 0, "quick_dump_json Args size must was even!");
    std::string ret{"{"};

    auto f = [&ret](auto && f,auto&& arg1,auto && arg2,auto&&... other) {
        ret += '"';
        ret += std::string(arg1);
        ret += std::string("\":");

        using type_arg2 = std::remove_cvref_t<decltype(arg2)>;
        if constexpr ( 
                std::is_same_v<std::string, type_arg2>
                || std::is_convertible_v<type_arg2,std::string>
                ) {
            ret += '"';
            ret += arg2;
            ret += '"';
        }
        else if constexpr (std::is_integral_v<type_arg2>)
            ret += std::to_string(arg2);

        if constexpr (sizeof... (other) == 0)
            return ;
        ret += ',';
        if constexpr (sizeof... (other) > 0)
            f(f,other...);
    };

    //f(f,std::forward<Args>(args)... ); //递归的调用
    f(f,args...);


    ret += '}';
    return ret;
}

int main(){
    auto t = quick_dump_json("name","hel","int",1);
    std::cout << t << std::endl;
    return 0;
}
