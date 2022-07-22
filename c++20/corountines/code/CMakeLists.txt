# CMake 最低版本号要求
cmake_minimum_required (VERSION 2.8)

# 项目名称

project(learn_coroutine)

set(CMAKE_CXX_FLAGS "-g -std=c++20")

file(GLOB TESTS "*.cpp")
foreach(f ${TESTS})
    string(REPLACE ".cpp" "" testname ${f})
    string(REPLACE ${CMAKE_CURRENT_SOURCE_DIR}/ "" name ${testname})
    add_executable(${name} ${f})
endforeach(f)


