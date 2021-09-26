#pragma once
#ifndef __MYTHREAD_POOL_HPP
#define __MYTHREAD_POOL_HPP
#include <queue>

#include <vector>
#include <queue>
#include <atomic>
#include <condition_variable>
#include <thread>
#include <functional>
#include <stdexcept>


namespace THREAD_POOL {

const int threadpool = 16; //线程池最大容量
    using std::function;
    using std::vector;
    using std::queue;
    using std::mutex;
    using std::atomic;
    using std::thread;
    using std::condition_variable;


//不直接支持类成员函数, 支持类静态成员函数或全局函数,operator(),lambda函数等
class threadpool {
    using TaskType = function<void()>; //任务的类型
    vector<thread> _pool;       //线程池
    queue<TaskType> _tasks;     //任务队列
    condition_variable _task_cv;//条件阻塞
    atomic<bool> _run{true};    //线程池是否执行
    atomic<int>  _idlThrNum{0}; //空闲线程数量

public:
    threadpool(const thread &)            = delete;
    threadpool& operator=(const thread &) = delete;

    explicit threadpool(unsigned int size = 4) {};
    ~threadpool(){}

public:
    template<typename  F,typename... Args>
    auto commit(F&& f,Args&&... args)->decltype(f(args...))
    {

    }
    
    unsigned int idlCount() const { return _idlThrNum;}
    unsigned int thrCount() const { return  _pool.size();}

private:
    void addThread(unsigned int size){

    }

};



}; // end namespace threadpool

#endif

