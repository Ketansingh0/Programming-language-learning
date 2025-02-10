// function hello() {
//     console.log("Hello, World!");
// }
// setTimeout(hello, 5000);

// setTimeout(() => {
//     console.log("Hello, World!");
// }, 2000);

// console.log("One");
// console.log("Two");

// setTimeout(() => {
//     console.log("Hello!");
// }, 2000);

// console.log("Three");
// console.log("Four");

// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(5, 10, sum);




// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("Fetched data with id: " + dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000); //2 seconds
// }

// // Callback Hell (Pyramid of Doom)
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });



// Promises
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("I am a promise success");
//     reject("I am a promise error");
// });

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("data", dataId);
//             // resolve("Success");
//             reject("Error");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000); // 5 seconds
//     });
// }

// .then() and .catch()
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         //resolve("Success");
//         reject("Error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("I am then! , Promise fulfilled", res);
// });
// promise.catch((err) => {
//     console.log("I am catch! , Promise rejected",err);
// });


// function asyncFunction() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("Success");
//         }, 2000);
//     }); // 2 seconds
// }

// console.log("fetching data1...");
// let p1 = asyncFunction();
// p1.then((res) => {
//     console.log(res);
// });


// function asyncFunction1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("Success");
//         }, 4000);
//     }); // 2 seconds
// }
// function asyncFunction2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("Success");
//         }, 6000);
//     }); // 2 seconds
// }

// console.log("fetching data1...");
// let p1 = asyncFunction1();
// p1.then((res) => {
//     console.log(res);
// });

// console.log("fetching data2...");
// let p2 = asyncFunction2();
// p2.then((res) => {
//     console.log(res);
// });

// Promise chains
// console.log("fetching data1...");
// asyncFunction1().then((res) => {
//     console.log(res);
//     console.log("fetching data2...");
//     asyncFunction2().then((res) => {
//         console.log(res);
//     });
// });

// another example
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("Success");
//         }, 5000); // 5 seconds
//     });
// }
// // Promise chains
// getData(1).then((res) => {
//     return getData(2);
// })
// .then((res) => {
//     console.log(res);
// });


// Async Await

// async function hello() {
//     console.log("Hello, World!");
// }

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api();
// }

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("Success");
        }, 2000); // 5 seconds
    });
}

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
};

// IIFE using async await
(async function () {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
})();