//Q1- For a given array with marks of students [85,97,44]. Find the average marks of class.

let arr = [85,97,44];
let sum = 0;
for(let marks in arr){
    sum += marks;
    avg = sum/arr.length;
};
console.log(`The average marks of students is ${avg}`);

//Q2- For a given array with price of 5items. [250,645,300,900,50]. All items have on offer of 10% off on them. Change the array to store final price after applying offer.

let items = [250,645,300,900,50];
for(let j = 0; j<items.length; j++)
{
    let offer = items[j] / 10;
    items[j] = items[j] - offer;
}
console.log(items);

//Q3- Create an array to store companies. Remove first company from array. Remove Uber and add ola in its place. Add amazon at the end.

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
let c = companies.shift();
console.log(`The removed element from the array is ${c}`);
let d = companies.splice(2,1,"Ola");
console.log(d);
let e = companies.push("Amazon");
console.log(e);
