// String
let str1 = "Hello World";
let str2 = 'JavaScript';

// String Length --> str.length
console.log(str1.length);

// String Indices --> str[i]
console.log(str1[0]);

// Template Literals
let specialString = `This is a template literal ${1 + 2 + 3}`; // String Interpolation --> ${expression}
console.log(specialString);

// use of template literal
let obj = {
    item : "pen",
    price : 10,
};
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
// console.log("The cost of", obj.item, "is", obj.price, "rupees");

// Escape character --> \t, \n
console.log("Apna\ncollege");

// String Method in JavaScript --> toUpperCase(), toLowerCase(), str.trim()
let str = "     JavaScript  JS";
console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.trim()); // Trims spaces from starting and end leaves space between character

// str.slice(start,end?) --> returns part of string

// str1.concat(str2) --> joins str2 with str1 --> can also be done by simple "+".

// str.replace(searchVal, newVal) 
let ch = "Hello";
console.log(ch.replace("lo","p"));

let ch1 = "Hellololo!!";
console.log(ch1.replace("lo","p")); // Only once
console.log(ch1.replaceAll("lo","p")); // To replace all

// str.charAt(idx)
console.log(ch.charAt(2));