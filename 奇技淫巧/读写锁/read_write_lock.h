#include <mutex>
#include <condition_variable>

class RwLock {
public:
    RwLock() : read_count(0), write_count(0) {}

    void lock_read() {
        std::unique_lock<std::mutex> lock(mtx);
        while (write_count > 0) {
            cv.wait(lock);
        }
        ++read_count;
    }

    void unlock_read() {
        std::unique_lock<std::mutex> lock(mtx);
        --read_count;
        if (read_count == 0) {
            cv.notify_all();
        }
    }

    void lock_write() {
        std::unique_lock<std::mutex> lock(mtx);
        while (read_count > 0 || write_count > 0) {
            cv.wait(lock);
        }
        ++write_count;
    }

    void unlock_write() {
        std::unique_lock<std::mutex> lock(mtx);
        --write_count;
        cv.notify_all();
    }

private:
    int read_count; // 持有读的数量
    int write_count;// 持有写的数量
    std::mutex mtx;
    std::condition_variable cv;
};

