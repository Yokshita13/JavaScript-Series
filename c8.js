//Classes and Ojects

//PROTOTYPE IN JS
const student = {
    fullName: "Yokshita Jaiswal",
    marks: 86.2,
    printMarks: function() {
        console.log("Marks =", this.marks)
    },
};

const employee = {
    calcTax () {
        console.log("Tax for each employee is 10%");
    }
};
const yokshita = {
    salary: 100000
};
yokshita.__proto__ = employee;

//CLASSES IN JS
class M5 {
    constructor() {
        console.log("Creating new object");
    }
    start() {
        console.log("Start");
    }

    stop() {
        console.log("Stop");
    }
    setBrand(brand){
        this.brandName = brand;
    }
}
let M8 = new M5();
M8.setBrand("BMW");

//INHERITANCE IN JS
class Repeat{
    constructor() {
        console.log("Enter parent constructor");
        this.spices = "Human";
    }
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
    }
    code(){
        console.log("Solve questions practice them. Build projects");
    }
} 
class coder extends Repeat{
    constructor(branch){
        console.log("Enter child constructor");
        super(); //to invoke parent class
        this.branch = branch;
        console.log("Eixt child constructor"); 
    }
    routine(){
        console.log("Routine")
    }
}
let obj = new coder();

//PRACTICE SET
let data = "Secret info"
class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    veiwData(){
        console.log("Some data =", data)
    }
};
class admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data = "Khula info";
    }
}
let s1 = new User("Yokshita","yokshita13");
let s2 = new User("Prakhyat","prakhyat12");
let s3 = new User("Pratishtha","pratishtha04");
let ad1 = new admin("Pratibha","pratibha21");
