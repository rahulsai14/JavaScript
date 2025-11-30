// Functions - A block of code that performs a specific task and can be invoked whenever needed

//Function definition
function sum(a, b){
    // a, b are local variables - for this block of scope only
    let res = a + b;
    return res;
}

// Return will be the last line of the function
// If you write the line will not execute

let ans = sum(5, 10);
console.log(ans);

// Arrow functions
// Compact a way of writing function
// We store the function value in a varibale

const mul = (a, b) => {
    return a*b;
}

// If we print mul - it will print the function definition
console.log(mul(5, 5));

let hello = () => {
    console.log("Hello from Arrow functions!!");
}
hello();


// Method and function difference
// When we associate a function with an object then it becomes method
// Like str.toUpperCase() - here toUpperCase becomes method
