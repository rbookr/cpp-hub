/* 
 * 类与派生的 关系
 *
 * 只有原来是private 不能被派生类 访问
 *
 * 原来是 public 被 private 继承了 基类的public 变成 派生类的private 可以被派生类访问
 * */

#include <cstdio>

class A {
    public:
        int a{123};
        int b;
        int c;
    protected:
        int pro{125};
    private:
        int p{124};
};

class B :public A {
    public:
        void print(){
            printf("B.a = %d\n",a); //可以 访问
        }
};

class B_private :protected A {
    public:
        void print(){
            printf("B_private.a = %d\n",a); //可以 访问
        }
        //void print2(){
            //printf("B_private.p = %d\n",p); //不可以 原来是private
        //}
        void print_protected(){
            printf("B_private.p = %d\n",pro); //不可以 原来是private
        }
};

int main(){
    printf("sizeof A = %d\n",sizeof(A));
    printf("sizeof B = %d\n",sizeof(B));
    A a;
    B b;
    printf("sizeof b = %d\n",sizeof(b));
    b.print();

    B_private bp;
    bp.print();
    bp.a = 1;
    return 0;
}
