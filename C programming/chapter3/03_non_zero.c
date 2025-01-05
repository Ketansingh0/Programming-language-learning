#include<stdio.h>

int main(){
    
    if(1){
        printf("This if is excuted\n");
    }
    if(2345){
        printf("This if is also excuted\n");
    }
    if(2.74){
        printf("This if is also excuted\n");
    }
    if('c'){
        printf("This character inside if is also excuted\n");
    }
    if(0){
        printf("I am zero - I am not excuted\n");
    }
    return 0;
}