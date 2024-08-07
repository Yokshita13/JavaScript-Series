//Q1- Use logical operators to find whether the age of a person lies between 10 and 20?

let age = 17; // Replace with the actual age you want to check
let isBetween10And20 = (age >= 10) && (age <= 20);
console.log(isBetween10And20);  // Output: true if age is between 10 and 20, false otherwise

//Q2- Demonstrate the use of switch case statement

let fruit = "Mango";
switch (fruit)
{
    case 'Mango':
        console.log("Here is your Mango");
    break;
    case 'Grapes':
        console.log("Here is your Grapes");
    break;
    case 'Apple':
        console.log("Here is your Apple");
    break;
    default:
        console.log("Sorry! We don't have"(fruit));
}

//Q3- Write a JavaScript program to find whether a number is Divisible by 2 and 3?

let num = 70;
if(num/2)
{
    console.log(num, "is divisible by 2");
}
else if(num/3)
{
    console.log(num, "is divisible by 3");
}
else{
    console.log("Both are numbers are divisible");
}

//Q4- Print "You can Drive" or "You cannot Drive" based on age being greater than 18 using ternary operator

let age = 18;
let drive = age>=18 ? "Yes you can drive": "No you cannot";
console.log(drive);
