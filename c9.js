//ASYNCHRONOUS CONCEPT
// console.log("Yokshita");
// console.log("Jaiswal");

// setTimeout(() => {
//     console.log("Hello")
// }, 2000);


//CALLBACK HELL CONCEPT
// function getData(dataId,getNextData){
//     //2s
//     setTimeout(() => {
//         console.log("Data ID =", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }
// //callback hell
// getData(1, () => {
//     getData(2, () => {
//         getData(3,() => {
//         });
//     });
// });

//PROMISE CONCEPT
// let promise = new Promise((resolve,reject) => {
//     console.log("I'm a promise");
//     resolve("Successfull");
//     reject("Error");
// });

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I'm a promise");
//         resolve("Success");
//         //reject("Error");
//     });
// };
// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise fulfilled",res);
// });
// promise.catch((err)=>{
//     console.log("Rejected",err);
// })

//ASYNC AND AWAIT

// function api()
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather Report");
//             resolve(200); //200 means it is successful
//         }, 2000)
//     });
// };
// async function getWeatherData(){
//     await api();
// }

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data...." ,dataId);
//             resolve("Success");
//         }, 2000);
//     });
// };
// async function getAllData() {
//     console.log("Weather Report of Lucknow is.....");
//     await getData(1);
//     console.log("Weather Report of Mumbai is.....");
//     await getData(2);
//     console.log("Weather Report of Pune is.....");
//     await getData(3);
//     console.log("Weather Report of Delhi is.....");
//     await getData(4);
//     console.log("Weather Report of Hardoi is.....");
//     await getData(5);
// }

//IIFE [CODE KO EXECUTE NHI KRNA PDEGA KHUD SE HO JATA HAI USING IIFE]
function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data...." ,dataId);
            resolve("Success");
        }, 2000);
    });
};
(async function(){
    console.log("Weather Report of Lucknow is.....");
    await getData(1);
    console.log("Weather Report of Mumbai is.....");
    await getData(2);
    console.log("Weather Report of Pune is.....");
    await getData(3);
    console.log("Weather Report of Delhi is.....");
    await getData(4);
    console.log("Weather Report of Hardoi is.....");
    await getData(5);
})();