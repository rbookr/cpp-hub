
#include <atomic>
#include <iostream>
#include <thread>
using namespace std;

#define MAXLEN  200

struct node {
    long long threadId;
    int elem;
    //int status;
};

struct queue {
    node q[MAXLEN];
    atomic_int front;
    atomic_int rear;
    atomic_int writeableCnt;
    atomic_int readableCnt;
} myq;


void initQueue(){
    myq.front = 0;
    myq.rear  = 0;
    myq.readableCnt = 0;
    myq.writeableCnt = MAXLEN;
    //for(int i=0;i<MAXLEN;++i){
    //}
}

bool enque(int elem){
    int pos=0;
    if( myq.writeableCnt.fetch_sub(1) <= 0){

    }
}
int main(){
    atomic_int a = 1;
    int ts_val = 1;
    a.compare_exchange_strong(ts_val,2);
    std::cout << a << std::endl;
    return 0;
}
