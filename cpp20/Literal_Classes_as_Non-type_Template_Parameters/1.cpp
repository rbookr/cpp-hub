#include <iostream>

struct point {
    int x,y;
};

template<point P>
struct location {
    location()
        : p_{P}
    { }
    point p_;
};

int main(){
    constexpr point p1 = {1,2};
    location<p1> l1;
    return 0;
}
