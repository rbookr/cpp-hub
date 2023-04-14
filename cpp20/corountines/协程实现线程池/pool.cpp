struct thread_pool_t
{    
    struct promise_type;
    struct awaitable
    {
        bool await_ready()
        { 
            return false; 
        }
        void await_suspend(std::coroutine_handle<> h)
        {
            m_thread_pool->m_queue.put(h);
        }
        void await_resume() {}
        
        thread_pool_t *m_thread_pool;
    };

    struct wrapper
    {
        struct promise_type
        {
            wrapper get_return_object() { return {}; }
            std::suspend_never initial_suspend() { return {}; }
            std::suspend_never final_suspend() noexcept { return {}; }
            void return_void() {}
            void unhandled_exception() {}

            promise_type() {}
        };
    };

    thread_pool_t(int thread_number)
    {
        for (int i=0; i<thread_number; ++i) {
            m_threads.emplace(std::jthread([this] {
                this->worker();
            }));
        }
    }

    template <typename T>
    wrapper submit(T task)
    {
        co_await awaitable(this);

        task();
    }

    void stop()
    {
        m_queue.destroy();
        while (!m_threads.empty()) {
            m_threads.pop();
        }
    }

    threadsafe_queue_t<std::coroutine_handle<>> m_queue;
private:
    void worker()
    {
        while (auto task = m_queue.take()) {
            task.value().resume();
        }
    }

    std::queue<std::jthread> m_threads;
};

#include <chrono>
int main()
{
    using namespace std::chrono_literals;
    auto tpool = thread_pool_t(3);
    for (int i=0; i<7; ++i) {
        tpool.submit([i]{
            std::this_thread::sleep_for(2s);
            std::cout << "* Task " << i << std::endl;
        });
    }
    std::this_thread::sleep_for(3s);
    tpool.stop();
}
