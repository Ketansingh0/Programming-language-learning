#include<stdio.h>

int main(){
    int len;
    char arr[len];
    printf("enter len : ");
    scanf("%d", &len);
    printf("ENter str: ");
    scanf("%c", &arr);

    for(int i=0;i<=len;i++){
        if(arr[i]!='1' || arr[i] != '0') {
            printf("error!");
            return 0;

        }
    }
    if(arr[len-1] == '0' && arr[len-2] == '1'){
        printf("accepted");
    }
    else {
        printf("not acc");
    }

}