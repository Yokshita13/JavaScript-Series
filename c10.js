//FETCH API [APLLICATION PROGRAMMING INTERFACE]
const URL = "https://cat-fact.herokuapp.com/facts";

const factPara = document.querySelector("#fact");

const btn = document.querySelector("#btn");

const getFact = async () => {
    console.log("Fetching Data...");
    let response = await fetch(URL,);
    console.log(response); //JSON FORMAT
    // console.log(response.status);
    let data = await response.json();
    factPara.innerText = data[0].text;
    // console.log(data[0].text);
};
btn.addEventListener("Click", getFact)