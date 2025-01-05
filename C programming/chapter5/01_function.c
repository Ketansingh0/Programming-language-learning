#include<stdio.h>
int sum(int x, int y){
    // printf("The sum is %d\n",x+y);
    return x+y;
}
int main(){
    int a, b;
    printf("Enter a:\n");
    scanf("%d",&a);
    printf("Enter b:\n");
    scanf("%d",&b);
    int c = sum(a,b);
    printf("%d\n",c);
    return 0;
}