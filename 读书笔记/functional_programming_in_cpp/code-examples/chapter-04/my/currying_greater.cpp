#include <iostream>

bool greater(int first,int last){
    return first > last;
}


auto greater_curried(int first){
    return [first](int last){
        return first < last;
    };
}

int main(){
    
    std::cout << greater_curried(10)(100) << "\n";
    return 0;
}
