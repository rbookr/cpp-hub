CXX=g++
CFLAGS=-g

SRC=$(wildcard *.cpp)
TARGET=$(patsubst %.cpp,%.o,$(SRC))

main: $(TARGET)
	$(CXX) $(CFLAGS) -o $@.out $^
	@echo done

%.o : %.cpp
	$(CXX) $(CFLAGS) -c $@ $<

clean:
	rm -rf $(TARGET) main.out
