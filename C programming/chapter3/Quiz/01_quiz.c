#include<stdio.h>

int main(){
    /* Quick quiz: Write a program to find grade of a student given his marks based on below:
            90 - 100 => A
            80 - 90 => B
    */
   char grade;
   int marks = 46;
   if(marks<=100 && marks>=90){
    grade = 'A';
   }
   else if(marks<=90 && marks >=80){
    grade = 'B';
   }
   else if(marks<=80 && marks >=70){
    grade = 'C';
   }
   else if(marks<=60 && marks >=50){
    grade = 'D';
   }
   else if(marks<=50 && marks >=40){
    grade = 'E';
   }
   else
   {
    grade = 'F';
   }
   
    return 0;
}