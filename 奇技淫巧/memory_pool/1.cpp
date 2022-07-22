
//内存池的定义
union MemNode {
    MemNode * next;
    char _data[1];
};
// ? 这样真的能把数据 链接起来?
// ? 内存上的样子是什么样的? 使用GDB 显示内存
