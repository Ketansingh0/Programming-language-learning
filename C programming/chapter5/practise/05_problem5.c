#include<stdio.h>

int main(){
    int a = 4;
    printf("%d %d %d \n", a, ++a, a++); // 6 6 4   or  // 4 5 5  (both are correct)
    return 0;
}