#include<stdio.h>

int main(){
    int num1, num2, num3, num4;
    printf("Enter num1: \n");
    scanf("%d",&num1);
    printf("Enter num2: \n");
    scanf("%d",&num1);
    printf("Enter num3: \n");
    scanf("%d",&num3);
    printf("Enter num4: \n");
    scanf("%d",&num4);
    if(num1>num2 && num1>num3 && num1>num4){
        printf("Num1 is greater\n");
    }
    else if(num2>num1 && num2>num3 && num2>num4){
        printf("Num2 is greater\n");
    }
    else if(num3>num1 && num3>num2 && num3>num4){
        printf("Num3 is greater\n");
    }
    else{
        printf("Num4 is greater\n");
    }
    return 0;
}