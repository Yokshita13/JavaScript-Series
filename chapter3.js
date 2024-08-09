//Q1- Write a program to print the marks of a student in an object using for loop

let obj = {
    yokshita: 80,
    krishn:50,
    radha:90
};
console.log(obj);

//Q2- Write a program to print the marks of a student in an object using for-in loop 

let student = {
    shiv:80,
    krishn: 70
};
for(let key in student){
    console.log(key,":",student[key]);
}

//Q3- Write a program to print "try again" until the user enters the correct number.

let gameNum = 8;
let userNum = prompt("Take a guess");
while(userNum != gameNum)
{
    userNum = prompt("Oops, it's a wrong guess");
}
console.log("Congrualtions");

//Q4- Write a program to find mean of 5 numbers.

const numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
const mean = sum / numbers.length;
console.log("The mean of the 5 numbers is: " + mean);

//Q5- Print all even numbers from 0 to 100.

for(let y = 0; y<=100; y++){
    if(y % 2 === 0){
        console.log(y)
    }
}
