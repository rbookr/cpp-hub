CXX=g++
CXXFLAGS=-g -lpthread

main.out: main.cpp mythreadpool.hpp
	$(CXX) $(CXXFLAGS) -o $@ $<

clean:
	rm -rf main
#$@  表示目标文件
#$^  表示所有的依赖文件
#$<  表示第一个依赖文件
#$?  表示比目标还要新的依赖文件列表

