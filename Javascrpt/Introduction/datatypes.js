// Number, String, Boolean, Undefined, Null, BigInt, Symbol
const student = {
    fullName : 'Adarsh Singh',
    age : 20,
    cgpa : 8.25,
    isPass : true,
};
student["age"] = student["age"] + 1; // Although it is declared using const we can still change value that will be not possible for any variable , we can do so only on the key of the object
console.log(student.age);  // Two ways to print!!!!
console.log(student["isPass"]);
console.log(student);