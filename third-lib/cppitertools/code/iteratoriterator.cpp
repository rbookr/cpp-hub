#include <iostream>
#include <iomanip>
#include <ranges> // c++20, g++ -std=c++20
#include <vector>

#include "internal/iteratoriterator.hpp"
#include "internal/iterbase.hpp"

using std::ranges::advance;

namespace iter {
    namespace impl {

        template <typename T>
            using IndexVector = std::vector<iterator_type<T>>;
        template <typename T>
        using CombIteratorDeref = IterIterWrapper<IndexVector<T>>;
        
    } // end namespace impl
    
} // end namespace name


std::vector<int> v1 { 1,2,3,4,5};


int main(){
    using namespace iter::impl;
    // 
    CombIteratorDeref<decltype(v1)> ci1(3);
    // decltype(v1) 是 std::vector<int>
    // CombIteratorDeref -> IterIterWrapper< std::vector< std::vector<int>::iterator  > >
    //std::vector< std::vector<int>::iterator  > 
    //-> 就是ci1 内部的的 Container
    //      存储的是指向 v1的的迭代器

    auto beIter = ci1.begin();


    std::cout << 
        ci1.size()
        << std::endl;

    //ci1.get() 得了 内部的 container 的引用
    // container 就是 std::vector< std::vector<int>::iterator_type > 这个类型
    // 也就是一个存v1的iter的容器
    int a=0;
    for (const auto& iter : ci1.get()) {
        std::cout << a++ << " "  ;
    }
    std::cout << "\n" ;

    // ci1 内部的 迭代器类型为
    // using iterator = IteratorIterator<typename Container::iterator>;
    // -> IteratorIterator<T>;
    //      -> T = std::vector< std::vector<int>::iterator_type >::iterator
    // T 也就是指向 container 内部的元素
    // 再加上IteratorIterator<T> 来上一层包装

    //初始化 ci1 内部的container 元素的值
    std::size_t inc = 0;
    for( auto & iter : ci1.get() ){
        auto it = std::begin(v1); //得到v1的起始的 iterator
        advance(it,inc,v1.end());
        if( it != v1.end() ) {
            //这里 : iter 类型是 std::vector<int>::iterato;r
            //也就是容器v1的迭代器
            iter = it;
            std::cout << "ci1 container "
                << inc << " pointer to value -> "
                << *it // *it v1里的值
                << std::endl;
            ++inc;
        }
        else break;
    }

    //进行++ 操作,得到下一个组合
    //

    // 从后向前走
    auto Next = [&] {

        for( auto it = ci1.get().rbegin() ; it != ci1.get().rend(); ++it)
        {
            // ci1.get() 得到ci1 得到 内部的container
            // rbegin(), rend() 得到 container的 iterator
            // it 指向 container的值
            // *it container的值,也就是v1的iterator
            // ++(*it) 表示v1的itrator向后移动
            ++(*it);
            // container 对应位置的值会变

            auto dist = std::distance(ci1.get().rbegin(), it);
            // it 距离 container 容器最后一个位置的距离
            // 表示it是Container里的第几个元素?
            // 5个数中选三个
            // [0][1][2][3][4]
            // 
            //      [a][b][c]
            // dist  2  1  0
    //能选到的位置   2  3  4
            // 规律 到达能选到位置后再进dist 就到了边界,表示不能选了
            if( std::ranges::next(*it,dist,v1.end()) != std::end(v1) ) {
                break; // 没有到边界
            }
            else { //处理越界
                   //
                //是不是起始位置到头了
                if( std::ranges::next(it,1,ci1.get().rend()) 
                        != ci1.get().rend()
                ) {
                    std::size_t inc = 1;
                    // 左边的位置是 
                    auto left = std::ranges::next(it,1);
                    for( auto down = it; ; --down){
                        *down = std::ranges::next(*left,1+inc);
                        ++inc;
                        if( down == ci1.get().rbegin())
                            break;
                    }
                }
                else {
                    return true;
                    //complete
                    // break;
                }
            }
        }
        return false;

    }; // end lambda Next

    std::cout << "===========\n" ;
    int step = 1;
    do {
        std::cout << "[" << std::setw(2) << step << "]: " ;
        for( auto & iter : ci1.get() ){
            std::cout << *iter << ' ' ;
        }
        std::cout << "\n" ;
        step++;
    } while( Next() != true );


    return 0;
}
