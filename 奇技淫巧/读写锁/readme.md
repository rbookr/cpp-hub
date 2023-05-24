读写锁是一种并发控制机制，允许多个读操作同时进行，但只有一个写操作可以进行。在C++中，可以通过使用互斥锁和条件变量来实现一个简单的读写锁。

以下是一个基本的读写锁的实现，有三个重要的方法：`lock_read、unlock_read 和 lock_write`。其中，`lock_read` 用于获取对共享资源的读访问权，`unlock_read` 用于释放读锁，`lock_write` 用于获取对共享资源的写访问权



我们的如何设计呢?

多个线程可以同时读取,但此时,不能读取,
只有一个线程在同一时刻可以写,

```c
<%- include("read_write_lock.h") _%>
```


```c
#include <iostream>
#include <thread>
#include <chrono>
#include "RWLock.h"

RWLock rwlock;

void writer_thread(int id) {
    while (true) {
        rwlock.writeLock();
        std::cout << "Writer " << id << " is writing\n";
        std::this_thread::sleep_for(std::chrono::seconds(1));
        rwlock.writeUnlock();
    }
}

void reader_thread(int id) {
    while (true) {
        rwlock.readLock();
        std::cout << "Reader " << id << " is reading\n";
        std::this_thread::sleep_for(std::chrono::milliseconds(500));
        rwlock.readUnlock();
    }
}

int main() {
    std::thread w1(writer_thread, 1);
    std::thread w2(writer_thread, 2);
    std::thread r1(reader_thread, 1);
    std::thread r2(reader_thread, 2);

    w1.join();
    w2.join();
    r1.join();
    r2.join();

    return 0;
}
```
