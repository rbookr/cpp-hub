#include <iostream>
#include <ranges>
#include <type_traits>


namespace rainboy {

    template<typename T>
        struct is_union 
            : public std::integral_constant<bool,__is_union(T)> 
        {};
    // helper
    template<typename T>
    constexpr bool is_union_v = is_union<T>::value;

    inline namespace __detail {

        template<typename>
        std::false_type check_is_class(...);

        template<typename T>
        std::integral_constant<bool,!is_union_v<T>> check_is_class(int T::*);

    };

    template<typename T>
    struct is_class 
        : public std::integral_constant<bool,decltype(check_is_class<T>(0))::value>
    {};
    //helper
    template<typename T>
    constexpr bool is_class_v = is_class<T>::value;


    //====== is_base_of
    inline namespace __detail {

        template<typename>
        std::false_type test_ptr_convertible(...);

        //利用的原理是能否 自动转换
        template<typename T>
        std::true_type test_ptr_convertible(T const *);

        template<typename B,typename D>
        auto test_pre_is_base_of(int) 
            -> decltype(test_ptr_convertible<B>(static_cast<D*>(nullptr)));

    }

    template<typename Base,typename Derived>
        struct is_base_of 
        : public std::integral_constant<bool,
        is_class_v<Base> &&  is_class_v<Derived>
          && decltype(test_pre_is_base_of<Base,Derived>(0))::value
          >
        {};
    //helper

    template<typename Base,typename Derived>
    constexpr bool is_base_of_v = is_base_of<Base,Derived>::value;


    //is convertible

    //derived_from
    template<class From , class To>
    concept convertible_to = 
        std::is_convertible_v<From,To> &&
        requires {
            static_cast<To>(std::declval<From>());
        };

    template<typename T>
    concept integral = std::is_integral_v<T>;
    // std::is_ntegral 对每个数据类型进行定义
    // std::is_signed
    // 这个 用 < 实现
    //
    // std::assignable_from();
    // std::assignable_from();
    //
    // ls -> ls
    // ls -> ls
    // std::
    template<typename T>
    concept swappable = requires(T&a, T&b) {
        std::ranges::swap(a,b);
    };



} // end namespace rainboy
