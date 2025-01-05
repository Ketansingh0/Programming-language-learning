#include<stdio.h>

int factorial(int n){
    if(n==0 || n==1){  // Base condition
        return 1;
    }
    // factorial(n) = factorial(n-1) * n
    return factorial(n-1)*n;
}
int main(){
    int a;
    printf("Enter number: ");
    scanf("%d",&a);
    int c = factorial(a);
    printf("Factorial of %d is %d\n",a,c);
    return 0;
}