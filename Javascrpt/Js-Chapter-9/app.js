const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector('#fact');
const btn = document.querySelector('#btn'); 

// Fetching data from the server
// Async Await is used 
const getFacts = async () => {
    console.log("getting data......");
    let response = await fetch(URL);
    console.log(response); 
    const data = await response.json(); // JSON format 
    console.log(data[0].text);
    factPara.innerText = data[0].text;
};


// using Promise chaining
// function getFacts() {
//     fetch(URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         factPara.innerText = data[0].text;
//     });
// }

btn.addEventListener('click', getFacts);
