#include <cstdio>
#include <iostream>

class  A {
public:
    int m_int;
    int m_int2;

    int func() {
        printf("hello\n");
        return 0;
    }
};

int main(){
    printf("pointer m_int %d \n",&A::m_int);


    //输出4 相对A起始位置的便宜
    printf("pointer m_int2 %d \n",&A::m_int2);
    A a;

    int A::* p_mint2 = &A::m_int2;
    using t = int A::*;
    // t 表示 A的成员指针,且成员类型为int

    a.*p_mint2 = 100;
    printf("a.m_int2 = %d\n",a.m_int2);

    int(A::*myfunc)();
    using myfunc2 = int(A::*)();
    // 先读 : A::* 表明这是一个成员指针
    // 那么这个指针的类型是 int ()
    // 也就是一个返回int,参数为空的函数

    myfunc2 f = &A::func;
    (a.*f)();
    return 0;
}
