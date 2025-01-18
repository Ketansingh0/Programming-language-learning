// Array methods
// push(): add to end
let foodItems = ['potato', 'apple', 'litchi', 'tomato'];
foodItems.push("chips"); // chips is addes in the end
console.log(foodItems);


// pop(): delete from end & return
foodItems.pop(); // chips will be deleted
console.log(foodItems);


// toString(): converts array to string
console.log(foodItems.toString());


// concat(): joins multiple arrays & returns result
let marvelHeros = ['thor', 'spiderman', 'ironman'];
let dcHeroes = ['superman', ' batman', 'wonderwoman'];

let heroes = marvelHeros.concat(dcHeroes);
console.log(heroes);


// unshift(): add to start --> similar to push

// shift(): delete from start & return --> similar to pop

// slice(): returns a piece of the array
console.log(marvelHeros.slice(1,2));


// splice(): change original array (add, remove, replace) --> splice(startIndex, deleteCount, newElement....)
let arr = [1, 2, 3, 4, 5, 6, 7];

// arr.splice(2, 2, 101, 102)
// console.log(arr);

// arr.splice(2, 0, 101); // Add element
// console.log(arr);

// Delete Element
// arr.splice(3,1);

// Replace Element
//arr.splice(3, 1, 101);