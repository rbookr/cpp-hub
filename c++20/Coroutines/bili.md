
什么是协程？

协程是一种可以暂停和恢复执行的函数

一个协程中必须要有co_await,co_yield或co_return关键字
其返回类型需要有个可被公有访问的内部类型`promise_type`(可以是由useing/tpyedef而来)

promise_type的特定成员函数共有9种，必须实现5种，至多实现8种

协程执行的流程

1. 为状态对象分配内存
什么是状态对象？
 - 承诺对象(promise_type 实例)
 - 各个形参（全部按值复制）
 - 暂停点状态
 - 局部变量和临时变量，其生存周期跨过当前暂停点


main函数不能为协程

https://www.bilibili.com/video/BV1Pf4y1s75m?from=search&seid=14232144487099699629
