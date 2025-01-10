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

// Escape character
