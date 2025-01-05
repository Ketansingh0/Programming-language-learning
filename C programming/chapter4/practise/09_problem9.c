#include<stdio.h>

int main(){
    int i = 1;
    int p = 1;
    int n;
    scanf("%d",&n);
    while(i<=n){
        p *= i;
        i++;
    }
    printf("The factorial of %d is %d\n",n,p);
    return 0;
}