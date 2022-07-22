#include <bits/stdc++.h>

template<typename tuple_type,typename ftype>
constexpr decltype(auto) for_each(tuple_type && tuple,ftype && f)
{
    return []<std::size_t... I>
        (tuple_type && tuple,ftype && f,std::index_sequence<I...>)
        {
            (f(std::get<I>(tuple)),...),
            return f;
        }(std::forward<tuple_type>(tuple),
std::forward<ftype>(f),
      std::make_index_sequence<std::tuple_size<std::remove_reference_t<tuple_type>>::value>{});
                
}


int main(){
    
    return 0;
}
