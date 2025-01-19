// Block of code that performs a specific task, can be invoked whenever needed

/* function functionName(){
    do some work
}
*/

function myFuction(){
    console.log("Learning functions in javaScript");
    console.log("Its fun........!!");
}

myFuction();  // Function call or invoke

// Parameter and Argument
function myFuction1(msg){
    // parameter -> input
    console.log(msg);
}
myFuction1("I love JavaScript"); // argument

// Add two numbers
function sum(x, y){
    s = x + y;
    return s;
}
let val = sum(3, 4);
console.log(val);