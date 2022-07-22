/* author: Rainboy email: rainboylvx@qq.com  time: 2021年 08月 19日 星期四 19:41:53 CST */
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
const int maxn = 1e6+5,maxe = 1e6+5; //点与边的数量

int n,m;
/* 定义全局变量 */

struct A {
    protected:
        int m;
    private:
        int pm;
};

struct a : A {
    
    void foo(){
        m = 1; // 可以使用 protected
    }
};

struct aa : private a {
    
    void foo2(){
        m = 1; // 可以使用 private
    }
};

struct aaa : aa {
    
    void foo2(){
        //m = 1; // 不可以使用 private
    }
};

// stuct 默认 使用 public 继承
// class 默认 使用 private 继承
struct B : A {
    using A::m; //把基类的protect 对自己暴露为 public
    //using A::pm; //不能把基类的private 对自己暴露为 public 
};

int main(int argc,char * argv[]){
    a t1;
    // t1.m; //不用使用 
    aa t2;

    B b;
    b.m; //可以使用
    return 0;
}
