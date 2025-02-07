// const student = {
//     fullName: "Ketan Singh",
//     marks: 94.4,
//     rollNo: 12345,
//     printDetails: function () {
//         return `Name: ${this.fullName}, Marks: ${this.marks}, Roll No: ${this.rollNo}`;
//     }
// };

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };

// const KaranArjun = {
//     salary : 100000,
// };

// KaranArjun.__proto__ = employee;  // A javaScript object is an entity having state and behavior (properties and method). JS objects have a special property called prototype. We can set prototype of an object using __proto__ property.

// If object & prototype have same method. object's method will be used.

// Classes in JavaScript
// Class is a program-code template for creating objects. Classes are used to create objects. Classes define properties and methods that objects of the class will have.


// class ToyotaCar {
//     start() {
//         console.log("Start");
//     }

//     stop() {
//         console.log("Stop");
//     }

//     setBrand(brand) {
//         this.brandName = brand;
//     }
// }

// let fortuner = new ToyotaCar();
// fortuner.setBrand("Toyota");


// Constructor in JavaScript
// automatically invoked by new
// constructor is a special method of a class for creating and initializing an object of that class. It must have the same name as the class itself. It is executed when a class is instantiated. It is used to set initial values of an object.


// class ToyotaCar {
//     constructor(brand, mileage) {
//         console.log("Object Created");
//         this.brandName = brand;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log("Start");
//     }

//     stop() {
//         console.log("Stop");
//     }
// }

// let fortuner = new ToyotaCar("fortuner", 10); // Constructor is called when object is created
// let lexus = new ToyotaCar(); // Constructor 


// Inheritance in JavaScript
// Inheritance is a mechanism in which one class acquires the property of another class. It represents the IS-A relationship. It is used for code reusability and method overriding.

// class Parent {
//     hello() {
//         console.log("Hello");
//     }
// }

// class child extends Parent {}
// let obj = new child();

// class Person {
//     eat() {
//         console.log("Eating");
//     }

//     sleep() {
//         console.log("Sleeping");
//     }
// }

// class Engineer extends Person {
//     work() {
//         console.log("Working");
//     }
// }

// let ketan = new Engineer();

// Super keyword in JavaScript
// super keyword is used to access and call functions on an object's parent.
// super can be used to call parent class constructor. super() is used to call parent class constructor and super.method() is used to call parent class method.

class Person {
    constructor(name) {
        console.log("Enter parent constructor");
        this.species = "Human";
    }
    eat() {
        console.log("Eating");
    }
}

class Engineer extends Person {
    constructor(branch) {
        console.log("Enter child constructor");
        super();
        this.branch = branch;
        console.log("Exit child constructor");
    }
    work() {
        console.log("Solve Problems and Build Things");
    }
}

let obj = new Engineer("Computer Science");