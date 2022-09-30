#pragma once

#include <new>      //std::align_val_t
#include <cstdio>   //printf
#include <cstdlib>

class TrackNew {

private:
    static inline int numMalloc = 0;
    static inline std::size_t sumSize = 0;
    static inline bool doTrace = false;
    static inline bool inNew = false;

public:
    
    static void reset() {
        numMalloc = 0;
        sumSize = 0;
    }

    static void trace(bool b){
        doTrace = b;
    }

    static void * allocate(std::size_t size,std::size_t align,
                const char * call) {
        ++numMalloc;
        sumSize += size;
        void *p;
        if( align == 0){
            p = std::malloc(size);
        }
        else 
            p = std::aligned_alloc(align, size);

        if( doTrace) {
            printf("#%d %s ",numMalloc,call);
            printf("%zu bytes",size);
            if (align > 0) {
                printf("%zu-byte aligned) ", align);
            }
            else {
                printf("def-aligned) ");
            }
            printf("=> %p (total: %zu bytes)\n", (void*)p, sumSize);
        }
        return p;
    }

    static void status(){
        printf("%d allocations for %zu bytes\n", numMalloc, sumSize);
    }

};

[[nodiscard]]
void * operator new( std::size_t size){
    return TrackNew::allocate(size, 0, "::new");
}
[[nodiscard]]
void* operator new (std::size_t size, std::align_val_t align) {
    return TrackNew::allocate(size, static_cast<size_t>(align),
            "::new aligned");
}

[[nodiscard]]
void* operator new[] (std::size_t size) {
    return TrackNew::allocate(size, 0, "::new[]");
}

[[nodiscard]]
void* operator new[] (std::size_t size, std::align_val_t align) {
    return TrackNew::allocate(size, static_cast<size_t>(align),
            "::new[] aligned");
}

// ensure deallocations match:
void operator delete (void* p) noexcept {
    std::free(p);
}
void operator delete (void* p, std::size_t) noexcept {
    ::operator delete(p);
}

void operator delete (void* p, std::align_val_t) noexcept {
    std::free(p);      // C++17 API
}

void operator delete (void* p, std::size_t,
        std::align_val_t align) noexcept {
    ::operator delete(p, align);
}
