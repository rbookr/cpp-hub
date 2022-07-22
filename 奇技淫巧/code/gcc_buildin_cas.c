#include <stdio.h>

int a  = 1;
int main(){

    int success = __sync_bool_compare_and_swap(&a,1,2);
    printf("success: %d \n",success);
    success = __sync_bool_compare_and_swap(&a,1,2);
    printf("success: %d \n",success);
    return 0;
}
