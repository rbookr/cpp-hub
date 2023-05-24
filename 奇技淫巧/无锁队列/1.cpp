/* 
   根据 [无锁队列的实现-循环数组 - 平凡之路 - 博客园](https://www.cnblogs.com/chencheng/p/3527692.html)
   实现
 * 
 *   [ ]
 *   head 永远指向，第一个有数据的结点
 *   tail 永远指向，最后一个有数据的结点的，后一个位置
 *
 *   if head == tail  queue is empty
 *
 * */
#include <vector>
#include <atomic>
#include <iomanip>
#include <iostream>
#include <mutex>
#include <thread>
using namespace std;

const int custom_thread_count = 1;
const int product_thread_count = 2;
const int in_product_thread_count = 10;

const int MAXLEN  =  3;

mutex _m_;
std::atomic_flag __lock = ATOMIC_FLAG_INIT;

template<typename... T>
void praint(T&&... args){
    //_m_.lock();
    while ( __lock.test_and_set() ) {
    }
    ( (std::cout << args << " "), ... ) << std::endl;
    //_m_.unlock();
}


struct node {
    std::thread::id threadId;
    int elem;
    //int status;
};
struct queue {
    node q[MAXLEN];
    atomic_int head;
    atomic_int tail;
    atomic_int writeableCnt;
    atomic_int readableCnt;
} myq;


void initQueue(){
    myq.head = 0;
    myq.tail  = 0;
    myq.readableCnt = 0;
    myq.writeableCnt = MAXLEN;
    //for(int i=0;i<MAXLEN;++i){
    //}
}

bool enque(int elem){
    if( myq.writeableCnt.fetch_sub(1) <= 0){

        _m_.lock();
        std::cout << "enque fail at tid: " << std::this_thread::get_id() <<" ";
        std::cout << "elem :" <<" "<< elem << std::endl;
        _m_.unlock();
        myq.writeableCnt.fetch_add(1);
        return false;
    }
    int m = MAXLEN;
    myq.tail.compare_exchange_strong(m,0); //  因为 tail 只能加1 
    int pos = myq.tail.fetch_add(1) % MAXLEN; // 得到这个位置

    // change
    myq.q[pos].elem = elem;
    myq.q[pos].threadId = std::this_thread::get_id();

    _m_.lock();
    std::cout << "in thread: " 
        << myq.q[pos].threadId
        << "   pos " << pos 
        << "   elem " <<  elem
        << std::endl;
    _m_.unlock();

    myq.readableCnt.fetch_add(1);
    return true;
}

bool deque(int *elem){
    if( myq.readableCnt.fetch_sub(1) <= 0) {

        _m_.lock();
        std::cout << "deque fail at tid:" << std::this_thread::get_id() << std::endl;
        //std::cout << "elem :" <<" "<< elem << std::endl;
        _m_.unlock();
        myq.readableCnt.fetch_add(1);
        return false;
    }
    int m = MAXLEN;
    myq.head.compare_exchange_strong(m, 0);
    int pos = myq.head.fetch_add(1) % MAXLEN;
    *elem = myq.q[pos].elem;
    
    _m_.lock();
    std::cout << "deque get value : " 
        << *elem << " " << "at pos " << pos
        << " threadId" << std::this_thread::get_id() ;
        
    std::cout << std::endl;
    _m_.unlock();

    myq.writeableCnt.fetch_add(1);

    return true;
}

void func_product(){
    for(int i=1;i<=in_product_thread_count ;++i){
        while ( !enque(i) ) {
        }
    }
}

atomic_ullong tot{0};
void func_custom(){
    int t;
    for(int i=1;i<= in_product_thread_count * product_thread_count;++i){
        
        while ( !deque(&t) ) ;
        _m_.lock();
        std::cout << "custom: "<< t << std::endl;
        _m_.unlock();
        tot.fetch_add(t);
    }
}
int main(){
    initQueue();
    std::cout << "init queue end!" << std::endl;
    vector<std::thread> v;
    for(int i=1;i<=product_thread_count;++i){
        v.push_back(std::thread(func_product));
    }
    for(int i=1;i<=custom_thread_count;++i){
        v.push_back(std::thread(func_custom));
    }
    for (auto& e : v) {
        e.join();
    }
    std::cout << "tot " ;
    std::cout << tot << std::endl;
    long long sum = 0;
    for(int i=1;i<=in_product_thread_count;++i){
        sum += i;
    }
    std::cout << " tot should euq " << sum * product_thread_count << " : " <<  std::boolalpha <<( sum * product_thread_count == tot);
    std::cout  << std::endl;

    //std::cout << "head " << myq.head << std::endl;
    //std::cout << "tail " << myq.tail << std::endl;
    //std::cout << "readableCnt " << myq.readableCnt << std::endl;
    //std::cout << "writeableCnt " << myq.writeableCnt<< std::endl;
    //for(int i=0;i<=MAXLEN-1;++i){
        //std::cout << myq.q[i].elem << " " << myq.q[i].threadId << std::endl;
    //}
    //std::cout   << std::endl;
    return 0;
}
