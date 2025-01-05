#include<stdio.h>

int main(){
    int not_prime=0;
    int n;
    printf("Enter num:\n");
    scanf("%d",&n);
    if(n==0 || n==1){
        not_prime = 1;
    }
    else{
        // int i=2;
        // while(i<n){
        //     if(n%i==0 && n!=2){
        //         not_prime=1;
        //         break;
        //     }
        //     i++;
        // }
        int i=2;
        do {
            if(n%i==0 && n!=2){
                not_prime=1;
                break;
            }
            i++;
        }while(i<n);
    }
    if(not_prime){
        printf("%d is not prime\n",n);
    }
    else{
        printf("%d is prime\n",n);
    }
    return 0;
}