//Q1- For a given array with marks of students [85,97,44]. Find the average marks of class.

let arr = [85,97,44];
let sum = 0;
for(let marks in arr){
    sum += marks;
    avg = sum/arr.length;
};
console.log(`The average marks of students is ${avg}`);