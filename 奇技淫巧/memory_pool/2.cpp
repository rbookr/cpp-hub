#include <iostream>


// 大块内存的分配和回收
//

/**
 * 在内存块上初始化对象
 */
template<typename T,typename... Args>
T* poolNew(Args&&... args);

//释放对象
template<typename T>
void poolDel(T* &c);


int main(){
    
    return 0;
}

