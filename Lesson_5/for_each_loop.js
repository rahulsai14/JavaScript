// We use this loop for arrays
// Here it is a method
// We pass a function as argument to another function is JS
// A callback is a function passed as an argument to another function

let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val){  // Each index value will be stored in val
    console.log(val);
})

// Arrow functions
arr.forEach((val) => {
    console.log(val);
})

// In call back function we can use 3 parameters
// 1. item(value)
// 2. index
// 3. the array itself

let cities = ["Chennai", "Mumbai", "Delhi"];

let value = (item, index) => {
    console.log(item, index);   
}

cities.forEach(value);


// Higher Order functions / Methods
// These are those function, they take another function as parameter or return a function
// For-each is HOF