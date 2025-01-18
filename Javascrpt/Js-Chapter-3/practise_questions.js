/* Qs. For a given array with marks of students --> [85, 97, 44, 37, 76, 60]
Find the average marks of the entire class. */
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let val in marks){
    sum += val;
}
let avg = sum / marks.length;
console.log(`Average marks of the class is ${avg}`);

/* Qs. For a given array with prices of 5 items --> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store final price after applying offer. */
let prices = [250, 645, 300, 900, 50];

// For of loop
let i = 0;
for(let val of prices){
    let offer = val / 10;
    prices[i] = prices[i] - offer;
    console.log(`value after offer = ${prices[i]}`);
    i++;
}

// for loop 
for(let i = 0; i < prices.length; i++){
    let offer = prices[i] / 10;
    prices[i] = prices[i] - offer;
}
console.log(prices);