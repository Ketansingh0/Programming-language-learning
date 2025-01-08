// if statement
let age = 18;
if(age >= 18){
    console.log("You are eligible to Vote");
}

// if-else statement 
let mode = "light";
let color;

if(mode == "dark"){
    color = "black";
}
else{
    color = "white";
}

console.log(color);

// else-if statement 
if(age < 18){
    console.log("Junior");
}
else if(age > 60){
    console.log("Senior");
}
else{
    console.log("Middle");
}

// Ternary Operators --> condition ? true output : false output
age >= 18 ? "adult" : "not adult" ;