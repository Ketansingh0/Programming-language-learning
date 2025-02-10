// async await >> promise chains >> callbacks hell

// Sync in JS
// Synchronous 
// Synchoronous means the code runs in a particular sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution.


// Asynchronous
// Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructoins, which causes a delay in the UI.
// Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.


// Callback Hell
// Callback hell is a situation when you have a lot of nested callbacks in your code. (pyramid of doom)
// It makes the code hard to read and understand.
// It makes the code difficult to maintain.

// Promises
// Promises solve the problem of callback hell.
// Promise is for "eventuall " completion of task. It is an object in JS.
// let promise = new Promise((resolve, reject) => {....});
// resolve and reject are callbacks provided by JS.

// Promise States
// Pending : the result is undefined
// Resolved : the result is a value(fulfilled               resolve(result)
// Rejected : the result is an error(rejected)              reject(error)

// .then() and .catch()
// .then() is called when the promise is resolved.
// .catch() is called when the promise is rejected.

// promise.then((res) => {.....})
// promise.catch((err) => {.....})



// Async Await
// async always returns a promise.
// async function asyncFunction() {...}
// await pauses the execution of its surrounding async function until the proise is settled.

// IIFE (Immediately Invoked Function Expression)

// (function() {
//     console.log("I am IIFE");
// })();

// (() => {
//     console.log("I am IIFE");
// })();

// (async () => {
//     console.log("I am IIFE");
// })();