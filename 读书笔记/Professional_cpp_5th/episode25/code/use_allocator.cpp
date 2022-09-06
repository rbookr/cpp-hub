#include <iostream>
using namespace std;

class myclass { 
public:
    myclass(int) {
        std::cout << "myclass construct" << std::endl;
    }

    myclass(myclass&&) {
        std::cout << "move construct" << std::endl;
    }

    ~myclass() {
        std::cout << "myclass deconstruct" << std::endl;
    }
};

int main(){
    allocator<myclass> alloc;
    // placement new
    // https://www.geeksforgeeks.org/placement-new-operator-cpp/
    // https://en.cppreference.com/w/cpp/language/new
    auto * memory = alloc.allocate(1);
    new (memory) myclass {1};
    std::cout << "after new" << std::endl;
    std::destroy_at(memory);

    alloc.deallocate(memory, 1);
    memory = nullptr;
    return 0;
}
