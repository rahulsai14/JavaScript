// Map method
// Creates a new array with the result of some operation

let nums = [1, 2, 3, 4, 5];

let newArr = nums.map((val) => {
    return val * val;
})

console.log(nums);
console.log(newArr);

// foreach - does some performation on the values in the array and return the value
// map - does some operations and creates a new array with those values


// Filter method
// Creates a new array of elements that give true for a condition

let newEven = nums.filter((val) => {
    return val % 2 === 0;
})
console.log(newEven);


// Reduce method
// Performs some operations and reduce the array to a single value and it returns that single value


let total = nums.reduce((prev, current) => {
    return prev + current;
})

// Intially res and current will have 0 and 1 index position values
// Example: [1, 2, 3, 4]
// Intially prev = 1 , current = 2, prev + current = 3
// After prev will hold 3 and current is 3, so prev + current = 6
// Now prev will hold 6 and current is 4, so now prev + current = 10
// Now current has nothing to move forward, so it will return that value

console.log(total);


// Printing the biggest number in an array
let numbers = [55, 60, 41, 87, 8, 9]

let largest = numbers.reduce((prev, current) => {
    return prev > current ? prev : current ;
})

console.log(largest); 
