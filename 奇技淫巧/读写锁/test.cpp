#include <iostream>
#include <thread>
#include <chrono>
#include "read_write_lock.h"


RwLock rwlock;

void writer_thread(int id) {
    for(int i =1 ;i<=3;i++) {
        rwlock.lock_write();
        std::cout << "Writer " << id << " is writing\n";
        std::this_thread::sleep_for(std::chrono::seconds(1));
        rwlock.unlock_write();
    }
}

void reader_thread(int id) {
    for(int i =1 ;i<=3;i++) {
        rwlock.lock_read();
        std::cout << "Reader " << id << " is reading\n";
        std::this_thread::sleep_for(std::chrono::milliseconds(500));
        rwlock.unlock_read();
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
