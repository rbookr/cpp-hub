#include <iostream>

class Car
{
    public:
    int speed;
    
    void print(){
        std::cout << "Car speed is " << speed << std::endl;
    }
};

int main(){

    Car mycar;
    int Car::*pSpeed = &Car::speed;
    // int car::* 
    mycar.*pSpeed = 10;
    mycar.print();

    using Car_func_pointer = void (Car::*)();
    Car_func_pointer p_print = &Car::print;
    ( mycar.*p_print)(); //调用

    return 0;
}
