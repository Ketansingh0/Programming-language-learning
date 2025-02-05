let btn1 = document.querySelector('#btn1');

// btn1.onclick = (evt) => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("You are inside div")
// }

btn1.addEventListener("click", () => {
    console.log("Button1 was clicked");
});

btn1.addEventListener("click", () => {
    console.log("Button1 was clicked--handler2");
});