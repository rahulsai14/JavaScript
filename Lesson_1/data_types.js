// Data types
// Primitive data types - 7 
// Non-primitive data types - Objects

// 1. Number (Include decimal)
// 2. String
// 3. Boolean
// 4. Undefined - By default every variable will be undefined, unless we dont intialize them with a value
// 5. Null - It is a object
// 6. BigInt 
// 7. Symbol

// Object - It is a collection of different values
// 1. Arrays
// 2. Functions

let a = 24;
console.log(typeof a)

let x = BigInt("123");
let y = Symbol("Hello");

const student = {
    name: "Rahul Sai",
    age: 21,
    cgpa: 9.22,
    isPass: true
};

// Here student is a object
// How to access a specific field in a collection
// Two ways
console.log(student["age"]);
console.log(student.name);

// To update the value in objects
student.name = "Rahul";


// Even though the object is declared as const we can the values inside it

// Number + Number = Addition
// String + Number = Concatination
// 
