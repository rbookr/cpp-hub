c++ class member pointer
=====================

- class member data pointer
- class member function pointer


## class member data pointer


`int Car::*` 这是一个整体,表示指向类`Car`内部的一个`int`成员数据的指针

`int Car::*pSpeed = &Car::speed;` 在这里`pSpeed`的值应该是`0`,
表示在类对象中的偏移量

那怎么使用这个指针呢?

```cpp
#include <iostream>
using namespace std;

class Car
{
    public:
    int speed;
};

int main()
{
    int Car::*pSpeed = &Car::speed;

    Car c1;
    c1.speed = 1;       // direct access
    cout << "speed is " << c1.speed << endl;
    c1.*pSpeed = 2;     // access via pointer to member
    cout << "speed is " << c1.speed << endl;
    return 0;
}
```

`c1.*pSpeed = 2;`表示访问对象`c1`的偏移量为`pSpeed`的成员数据

## class member function pointer


调用

```cpp
void Apply( SomeClass * c, void (SomeClass::*func)() ) {
    // do hefty pre-call processing
    (c->*func)();  // call user specified function
    // do hefty post-call processing
}
```

- [c++ - Pointer to class data member "::\*" - Stack Overflow](https://stackoverflow.com/questions/670734/pointer-to-class-data-member)
