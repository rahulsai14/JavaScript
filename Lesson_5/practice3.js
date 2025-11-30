// Find out marks of student hat scored 90+
let marks = [87, 93, 64, 99, 86];

let score = marks.filter((val) => {
    return val > 90;
})

console.log(score);

// Take a number n as input from user, create an array of number from 1 to n
// Use the reduce method to calculate sum and product of all numbers in the array

let n = prompt("Enter a number: ");
let arr = [];
for(let i = 0; i< n; i++){
    arr[i] = i+1;
}

console.log(arr);

let sum = arr.reduce((prev, current) => {
    return prev + current;
})
console.log(`The sum of array elements ${sum}`);

let mul = arr.reduce((prev, current) => {
    return prev * current;
})
console.log(`The multiplication of array elements ${mul}`);