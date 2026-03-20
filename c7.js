// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("Button has been clicked")
// }

// let btn2 = document.querySelector("#btn2");
// btn2.ondblclick = () => {
//     console.log("Button has been clicked 2 times")
// }

// let box = document.querySelector("div");
// box.onmouseover = () => {
//     console.log("You are inside div")
// }

//EVENT OBJECT 

// btn1.onclick = (e) => {
//     console.log(e);
// }

//EVENT LISTENERS -> ADD

// let btn3 = document.querySelector("#btn3");
// btn3.addEventListener("click", () => {
//     console.log("Button was clicked");
// });

//REMOVE

// let handler = () => {
//     console.log("Removed");
// };
// btn3.addEventListener("click", handler)


//PRACTICE SET
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";
modeBtn.addEventListener("click", () => {
   if(currMode === "light")
   {
    currMode = "dark";
    /* document.querySelector("body").style.backgroundColor = "Black"; */
    body.classList.add("dark");
    body.classList.remove("light");
   }
   else
   {
    currMode = "light";
   /*document.querySelector("body").style.backgroundColor = "White"; */
    body.classList.add("light");
    body.classList.remove("dark");
   }
   console.log(currMode);
});


//Homework problem
// let btn = document.querySelector("#btn");
// btn.onclick = () => {
//    console.log("Hello")
// }