#pragma once

#include <coroutine>
#include <exception>
#include <utility>
#include <variant>

// This is a naïve implementation of a recursive generator using C++20
// coroutines.

template <class T> struct generator {
  struct promise_type {
    generator get_return_object() {
      return std::coroutine_handle<promise_type>::from_promise(*this);
    }

    static std::suspend_always initial_suspend() { return {}; }
    static std::suspend_always final_suspend() noexcept { return {}; }

    [[noreturn]] void unhandled_exception() { std::terminate(); }

    void return_void() {}

    void await_transform() = delete;

    //这里 函数重载
    template <class U> std::suspend_always yield_value(U &&v) {
      state.template emplace<1>(std::forward<U>(v));
      return {};
    }

    std::suspend_always yield_value(generator &&g) {
      state.template emplace<2>(std::move(g));
      return {};
    }

  private:
    friend generator;
    struct empty {};
    std::variant<empty, T, generator> state;
  };

  // move next 
  // 移动下一个?,那是到哪里呢?
  bool move_next() {
    if (!coro)
      return false;

    auto &p = coro.promise(); // 得到promise object
    do {
        //如果得到了 promise 中的state
        if (auto g = std::get_if<generator>(&p.state)) 
            if (g->move_next()) // g 执行了move next
                return true; // 返回 true

        coro.resume(); // resume
        if (coro.done()) { //运行了
            coro.destroy();
            coro = {};
            return false;
        }

    } while (std::get_if<generator>(&p.state));

    return true;
  }

  T current_value() const {
    auto &p = coro.promise();
    if (auto g = std::get_if<generator>(&p.state)) {
      return g->current_value();
    } else if (auto v = std::get_if<T>(&p.state)) {
      return *v;
    } else {
      std::terminate();
    }
  }

  generator(const generator &) = delete;
  generator(generator &&that) : coro(that.coro) { that.coro = {}; }

  ~generator() {
    if (coro) {
      coro.destroy();
    }
  }

private:
  generator() {}
  generator(std::coroutine_handle<promise_type> h) : coro(h) {}
  std::coroutine_handle<promise_type> coro;
};

template <class Fn, class T> void for_each(Fn &&fn, generator<T> &&generator) {
  while (generator.move_next()) { // move_next 成功
    fn(generator.current_value());
  }
}
