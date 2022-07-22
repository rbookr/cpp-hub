/* author: Rainboy email: rainboylvx@qq.com  time: 2022年 03月 01日 星期二 21:04:44 CST */
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
const int maxn = 1e6+5,maxe = 1e6+5; //点与边的数量

int n,m;
/* 定义全局变量 */

template<typename T,typename F,std::size_t... idx>
void myfor_each(T&& t,F&& f,std::index_sequence<idx...> ){
    (f(std::get<idx>(t)),...); //fold expression
}

template<std::size_t... idx>
void test(std::index_sequence<idx...> ){
    (cout << ... << idx);
}

template<typename... Ts,typename F>
void for_each_tuple(std::tuple<Ts...> & t,F&& f){
    myfor_each(t,std::forward<F>(f),std::make_index_sequence<sizeof... (Ts)>{});
}

int main(int argc,char * argv[]){
    auto tp = std::make_tuple("1",2,3,"hello");
    std::cout << std::get<3>(tp) << std::endl;
    //for_each_tuple(tp, [](auto x){
            //});
    myfor_each(tp, [](auto& x){
            cout << x << " ";
            },std::make_index_sequence<4> {});
    //test(std::make_index_sequence<4>{});
    return 0;
}
