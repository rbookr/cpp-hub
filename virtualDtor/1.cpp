#include <iostream>

class student
{
public:
    student() {}
    ~student() { std::cout << "a student" << std::endl; }
};

class bachelor
{
public:
    bachelor() {}
    ~bachelor() { std::cout << "a bachelor" << std::endl; }
};

class studentHolder
{
public:
    studentHolder()
    {

    }

    ~studentHolder() {
        std::cout << "studentHolder" << std::endl;
    }


private:
    student st;
};

class bachelorHolder : public studentHolder
{
public:
    bachelorHolder()
        : studentHolder()
    {

    }

    ~bachelorHolder() override
    {
        std::cout << "bachelorHolder" << std::endl;

    }

private:
    bachelor bcl;
};

int main()
{
    //_CrtSetDbgFlag(_CRTDBG_ALLOC_MEM_DF | _CRTDBG_LEAK_CHECK_DF);
    studentHolder* holder = new bachelorHolder();
    delete holder;
    return 0;
}
