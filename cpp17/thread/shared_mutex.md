std::shared_mutex


读写锁把对共享资源的访问者划分成读者和写者，读者只对共享资源进行读访问，写者则需要对共享资源进行写操作。C++17开始，标准库提供了shared_mutex类（在这之前，可以使用boost的shared_mutex类或系统相关api）。和其他便于独占访问的互斥类型不同，shared_mutex 拥有两个访问级别：

- 共享：多个线程能共享同一互斥的所有权（如配合shared_lock）；
- 独占：仅有一个线程能占有互斥（如配合lock_guard、unique_lock）

shared_mutex 通常用于多个读线程能同时访问同一资源而不导致数据竞争，但只有一个写线程能访问的情形。

lock() 锁定互斥。若另一线程已锁定互斥，则到 lock() 的调用将阻塞执行，直至获得锁。可以用 std::lock_guard 和 std::unique_lock 管理互斥锁定。唯一获得



[std::shared_mutex - cppreference.com](https://en.cppreference.com/w/cpp/thread/shared_mutex)
