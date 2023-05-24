#include "stdlib.h"
#include "stdio.h"
#include <pthread.h>
#define MAXLEN 2
#define CAS __sync_bool_compare_and_swap

typedef struct
{
    int elem;
    int status;//用于状态监测
}node;

typedef struct
{
    node elePool[MAXLEN];
    int front;
    int rear;
}queue;

enum
{
    EMPTY =1,
    FULL,
};

queue g_que;

void initQue()
{
    int i = 0;
    g_que.front = 0;
    g_que.rear  = 0;
    
    for(i=0;i<MAXLEN;i++)
    {
        g_que.elePool[i].status = EMPTY;
    }
    return;
}

int enque(int elem)
{
    do
    {
        if((g_que.rear+1)%MAXLEN == g_que.front)
        {
            return -1;
        }
    }while(!CAS(&(g_que.elePool[g_que.rear].status),EMPTY,FULL));
    g_que.elePool[g_que.rear].elem = elem;
    printf("in--%d(%lu)\n",elem,pthread_self());
    CAS(&(g_que.rear),g_que.rear,(g_que.rear+1)%MAXLEN);
    
    return 0;
}

int deque(int* pElem)
{
    do
    {
        if(g_que.rear == g_que.front)
        {
            return -1;
        }
    }while(!CAS(&(g_que.elePool[g_que.front].status),FULL,EMPTY));
    *pElem = g_que.elePool[g_que.front].elem;
    printf("out--%d(%lu)\n",*pElem,pthread_self());
    CAS(&(g_que.front),g_que.front,(g_que.front+1)%MAXLEN);
    return 0;
}
