CXX=g++
CFLAGS=-std=c++20 -g
INCLUDE=/home/rainboy/__git__/c++/cppitertools

SRC=$(wildcard *.cpp)
TARGET=$(patsubst %.cpp,%.out,$(SRC))

all: $(TARGET)
	@echo done

%.out : %.cpp
	$(CXX) $(CFLAGS) -o $@ $< -I$(INCLUDE)
	./$@

clean:
	rm -rf $(TARGET)
