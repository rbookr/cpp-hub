#include <bits/stdc++.h>

using namespace std;


struct DataLevel {
    constexpr DataLevel( unsigned int L = 7)
        : level{L}
    {}
    constexpr std::size_t tranValue() const {
        std::size_t v = 1;
        for(int i =0;i< level;i++)
            v *= 10;
        return v + 5;
    }
    unsigned int level;

private:
    //int x; //  不可以 因为
//all base classes and non-static data members are **public** and non-mutable and
};

template<DataLevel lev = 4>
class myx {
public:
    static constexpr auto x = lev.tranValue();
    void print(){
        std::cout << x << std::endl;
    }
};


int main(){
    myx<1> a;
    myx<2> a2;
    myx<3> a3;
    myx a4;
    a.print();
    a2.print();
    a3.print();
    a4.print();

    return 0;
}
