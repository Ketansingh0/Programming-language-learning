// Map method
let nums = [67, 52, 39];

let newArr = nums.map((val) => {
    return val * 2;
});
console.log(newArr);

// To create a new array with the results of calling a provided function on every element in the calling array.
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.




// Filter method
// Creates a new array of elements that give true for a condition/function

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let evenArr = arr.filter((val) => {
    return val % 2 === 0; // returns value that are even and this will be stored in evenArr
});
console.log(evenArr);

let newArray = arr.filter((val) => {
    return val > 5; // returns value that are greater than 5 and this will be stored in newArray
});
console.log(newArray);






// Reduce method
// Perform some operations and reduces the array to a single value. It returns that single value.

let arr1 = [1, 2, 3, 4];

const output = arr1.reduce((res, curr) => {
    return res + curr;         // To return greates number [    return res > curr ? res : curr;  ]
});
console.log(output);

