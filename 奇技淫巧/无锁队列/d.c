#include "stdlib.h"
#include "stdio.h"
#include <pthread.h>
#define MAXLEN 2000
 
#define NUM_THREADS 8
#define NUM_MSG        500
#define CAS __sync_bool_compare_and_swap
#define FAA __sync_fetch_and_add
#define FAS __sync_fetch_and_sub
#define VCAS __sync_val_compare_and_swap

int g_inputOver = 0;
typedef struct
{
    int elem;
    long threadId;
    int status;//indicate whether the node can be read
}node;

typedef struct
{
    node elePool[MAXLEN];
    int front;
    int rear;
    int writeableCnt;//the number of node that can be written
    int readableCnt; //the number of node that have been written
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
    g_que.readableCnt  = 0;
    g_que.writeableCnt = MAXLEN;
    
    for(i=0;i<MAXLEN;i++)
    {
        g_que.elePool[i].status = EMPTY;
    }
    return;
}

int enque(int elem)
{    
    int pos = 0;   
    if(FAS(&(g_que.writeableCnt),1) <= 0)
    {
        printf("dis-%d(%u)\n",elem,pthread_self());
        FAA(&(g_que.writeableCnt),1); //加回去
        return -1;
    } 
    //CAS(&(g_que.rear),g_que.rear,g_que.rear%MAXLEN);
    CAS(&(g_que.rear),MAXLEN,0);
    pos = FAA(&(g_que.rear),1)%MAXLEN;

    g_que.elePool[pos].elem = elem;
    g_que.elePool[pos].threadId = pthread_self();
    printf("in-%d(%u),inpos=(%d),rear=(%d)\n",elem,pthread_self(),pos,g_que.rear);

    CAS(&(g_que.elePool[pos].status),EMPTY,FULL);
    FAA(&(g_que.readableCnt),1);
    return 0;
}
int deque(int* pElem, int* pThreadId)
{   
    //printf("readableCnt--%d,pos = %d\n",g_que.readableCnt,g_que.front);
    do
    {
        if(g_que.readableCnt == 0)
        {
            return -1;
        }
    }while(!CAS(&(g_que.elePool[g_que.front].status),FULL,EMPTY));

    *pElem = g_que.elePool[g_que.front].elem;
    *pThreadId = g_que.elePool[g_que.front].threadId;

    CAS(&(g_que.front),g_que.front,(g_que.front+1)%MAXLEN);
    FAS(&(g_que.readableCnt),1);
    FAA(&(g_que.writeableCnt),1);

    printf("out-%d(%u)(%u)\n",*pElem,*pThreadId,pthread_self());
    return 0;
}

void* SendMsg(void *arg) 
{
    int msgNo = 0;
    for ( msgNo = 0; msgNo < NUM_MSG; msgNo++ )
    {
        usleep(1000);
        enque(msgNo);
    }
    g_inputOver++;
    return NULL;
}

int main(void)
{
 
    int rc,i;     
    pthread_t thread[NUM_THREADS];
    int elem,threadId;

    initQue();
    for( i = 0; i < NUM_THREADS; i++ )  
    {
        printf("Creating thread %i\n", i);   
        rc = pthread_create(&thread[i], NULL, SendMsg, NULL);  
        if(rc)
        {   
            printf("ERROR; return code is %d\n", rc); 
        return -1;
        }
    }
    while((NUM_THREADS != g_inputOver) || (g_que.readableCnt != 0))
    {
        //printf("readableCnt--%d,g_inputOver--%d\n",g_que.readableCnt,g_inputOver);
        rc = deque(&elem,&threadId);
        if (0 == rc)    
        {
            usleep(100);
        }
    }
    printf("WCnt-%d\n",g_que.writeableCnt);
    printf("RCnt-%d\n",g_que.readableCnt);
    return 0;
}
