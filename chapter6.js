//Q1- Create a function using the "function" keyword that takes a string as an argument and return the number of vowels in the string.

const countVow = (str) => {
    let count = 0;
    for(const char of str)
    {
       
        if(char === "a"|| char === "o" || char === "e" || char === "i" || char === "u")
        {
            count++;

        }
    }
    console.log(count);
}

//Q2- For a given array of numbers, print the square of each value using the foreach loop

let ar = [1,2,3,4,5];
ar.forEach((sqr) =>
{
    console.log(sqr*sqr);
}
)

//Q3- Take a number n as input from user. Use the reduce method to calculate sum and product of all number in the array.

let n = prompt("Enter a Number: ");
let arrr = [];
for(let i = 1; i<=n; i++)
{
    arrr[i-1] = i;
}
console.log(arrr);
const op = arrr.reduce((prev , currt) => {
    return prev + currt;
});
console.log(op);
const out = arrr.reduce((prev , currt) => {
    return prev * currt;
});
console.log(out);

//Q4- We are given array of marks of students. Filter our of the marks of students that scored 90+.

let c = [46,69,74,91,95,84,70,100];
let score = c.filter((val) => {
    return val > 90;
});
console.log(score);

//Q5- Create an array of square of given number

let num = [2,4,6,8,10];
let newArr = num.map((val) => {
    return val*val;
}
);
console.log(newArr) ;

//Q6- Filter for number divisible by 10 from a given array

let d = [10,20,2,100,80,45,752,458,1000];
let fil = d.filter((div) => {
    return div / 10;
});
console.log(fil);
