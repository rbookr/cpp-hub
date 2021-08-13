#include <iostream>
#include <cstring>
using namespace std;

template<size_t S>
class FixedString {
    public:
        FixedString() = default;
        FixedString(const char * str){
            if( str) ::strncpy(str_, str, S);
        }
        char const  * c_str() const { return str_;}
        size_t count() const { return ::strlen(str_);}
        char const & operator[](size_t i) const { return str_[i];}

        //itertor
        template<typename T>
        struct Itertor {
            T * p;
            T & operator*() { return *p;}
            bool operator!=(const Itertor<T> & rhs){
                return p != rhs.p;
            }
            void operator++() { ++p;}
        };

        auto begin() const {
            return Itertor<const char>{str_};
        }
        auto end() const {
            return Itertor<const char>{str_+count()};
        }
    private:
        char str_[S+1]{};
};

int main(){
    FixedString<12> fs("hello world");
    for( auto & c : fs){
        cout << c << endl;
    }
    return 0;
}
