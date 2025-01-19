/* arr.foEach(callBackFunction)   - Higher Order function
CallbackFunction : Here, it is a function to execute for each element in the array

* A callback is a function passed as an argument to another function.
*/

let arr = [1, 2, 3, 4, 5];

// arr.forEach(function printVal(val){
//     console.log(val);
// });

// arrow function passed as an callback function
let arr1 = ['pune','delhi','mumbai']
arr1.forEach((val) => {
    console.log(val.toUpperCase());
});

// arr.forEach(value, index, array) -- this three things can be passed