
[Lambda 表达式 (C++11 起) - cppreference.com](https://zh.cppreference.com/w/cpp/language/lambda)

```c++
#include <iostream>
using namespace std;
int main(){
    auto f1 = []<typename T>(T t){cout << t << endl;};
    f1(1);
    f1(1.1);
    return 0;
}
```
