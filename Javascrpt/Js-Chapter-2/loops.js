// for loop:
for(let i = 1; i <= 5; i++){
    console.log("Hello World!")
}

//Calculate sum of 1 to 5 
let sum = 0;
for(let i = 0; i <= 5; i++){
    sum = sum + i;
}
console.log("sum =",sum);

// while loop:
let i=3;
while (i < 5) {
    console.log("Hello World!");
    i++;
}

// do while loop:
let j = 20;
do{
    console.log("Hello World!");
    j++;
}while(j <= 10);

// for-of loop --> we use it for string and arrays
let str = "Javascript";
for(let i of str){
    console.log("i = ",i);
}

// size of string
let count = 0;
for(i of str){
    count++;
}
console.log(count);

// for-in loop --> used for objects and arrays
let student = {
    name : "Adarsh",
    age : 20,
    cgpa : 8.35,
    isPass : true,
};
for (let key in student){
    console.log("key = ",key);
}