CXX=g++
CFLAGS=-std=c++20 -g

SRC=$(wildcard *.cpp)
TARGET=$(patsubst %.cpp,%.out,$(SRC))

all: $(TARGET)
	@echo done

%.out : %.cpp common.hpp
	$(CXX) $(CFLAGS) -o $@ $<
	./$@

clean:
	rm -rf $(TARGET)
