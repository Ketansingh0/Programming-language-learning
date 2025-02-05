let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "Light";

modeBtn.addEventListener("click", () =>{
    if(currMode === "Light") {
        currMode = "Dark";
        //document.querySelector('body').style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");
    }else {
        currMode = "Light";
        //document.querySelector('body').style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});