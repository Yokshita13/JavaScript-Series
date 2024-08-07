//Q1- Create a variable of type string and try to add a numbers to it

// Creating a variable of type string
let stringVar = "The answer is ";
// Creating a variable of type number
let numberVar = 42;
// Adding the string and the number
let combined = stringVar + numberVar;
console.log(combined);  // Output: The answer is 42

//Q2- Write a JavaScript program to create a word meaning dictorary of five words

let obj = {
    name: "Yokshita",
    stream: "Computer Science"
}
console.log(obj);

//Create a const object in JavaScript, try to add a new key to the const object. Can you change it to hold a number later?

const person = {
    name: "Radha",
    age: 18
};
// Adding a new key to the const object
person.city = "New York";
console.log(person);  
// Trying to change the const object to hold a number
// This will result in a TypeError
// person = 18;  // Uncaught TypeError: Assignment to constant variable.

// The correct way to change a property of the const object
person.age = 20;
console.log(person);
