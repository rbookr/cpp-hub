#include <iostream>

class Car
{
    public:
    int speed;
};

int main(){

    int Car::*pSpeed = &Car::speed;
    // int car::* 
    return 0;
}
