#include<stdio.h>

int main(){
    int n;
    int p = 1;
    scanf("%d",&n);
    for(int i=1; i<=n ;i++){
        p *= i;
    }
    printf("The factorial is %d\n",p);
    return 0;
}