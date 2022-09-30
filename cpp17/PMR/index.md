这里提供了pmr的实现代码

https://github.com/gcc-mirror/gcc/blob/16e2427f50c208dfe07d07f18009969502c25dc8/libstdc%2B%2B-v3/include/experimental/memory_resource

[gcc/memory\_resource.cc at master · gcc-mirror/gcc](https://github.com/gcc-mirror/gcc/blob/master/libstdc%2B%2B-v3/src/c%2B%2B17/memory_resource.cc)

动态的内存管理
pmr大概意思是“多态的内存资源”
pmr是polymorphic memory resource的缩写

cpp17 complete guide episode 27 PMR


## 1. use PMR

### Standard Memory Resource

- new_delete_resource()
- synchroinzed_poll_resource
- unsynchroinzed_poll_resource
- monotonic_buffer_resource,可以直接在头文件里看到源码
- null_memory_resource

- get_default_resource
- set_default_resource

```cpp
  inline memory_resource*
  new_delete_resource() noexcept
  {
    using type = resource_adaptor<std::__new_allocator<char>>;
    alignas(type) static unsigned char __buf[sizeof(type)];
    static type* __r = new(__buf) type;
    return __r;
  }
```


基类`std::pmr::memory_resource`

纯虚函数
```cpp
  class memory_resource
  {
    static constexpr size_t _S_max_align = alignof(max_align_t);

  public:
    memory_resource() = default;
    memory_resource(const memory_resource&) = default;
    virtual ~memory_resource() = default;

    memory_resource& operator=(const memory_resource&) = default;

    _GLIBCXX_NODISCARD void*
    allocate(size_t __bytes, size_t __alignment = _S_max_align)
    { return do_allocate(__bytes, __alignment); }

    void
    deallocate(void* __p, size_t __bytes, size_t __alignment = _S_max_align)
    { return do_deallocate(__p, __bytes, __alignment); }

    bool
    is_equal(const memory_resource& __other) const noexcept
    { return do_is_equal(__other); }

  protected:
    virtual void*
    do_allocate(size_t __bytes, size_t __alignment) = 0;

    virtual void
    do_deallocate(void* __p, size_t __bytes, size_t __alignment) = 0;

    virtual bool
    do_is_equal(const memory_resource& __other) const noexcept = 0;
  };
```

monotonic_buffer_resource
- 有一个部分的代码在头文件
- 有一部分的代码在: https://github.com/gcc-mirror/gcc/blob/master/libstdc++-v3/src/c++17/memory_resource.cc

FAQ: 那些容器如`std::pmr::vector`是怎么使用`memory_resource的呢?`
`allocate(基类) -> do_allocate(子类)`

FAQ: 怎么样才能一个default_resource呢

```
__constinit constant_init<atomic_mem_res> default_res{&newdel_res.obj};
或者是

struct {
  atomic_mem_res obj = &newdel_res.obj;
} default_res __attribute__ ((init_priority (100))); //一个全局变量

```

## 2. Define Custom Memory Resource Support Custom type
## 3. Providing memory resource support for custom types

1. define allocator_type as public member defined as polymorphic allocator
2. add overloads for all constructors to take the allocator as additional argument
3. let initializing constructors without an allocator argument use allocator_type

为什么`std::pmr::vector<std::pmr::string> coll(&trakcer)`
使用了同一个`memory_resource呢`
