// Array methods
let marks = [96, 75, 48, 63, 77];

let marks1 = [55, 66, 88, 99];

// push method - To add elements to end of array
marks.push(49); // This method return the length of the updated array

// By seperating with , in the push method we can add multiple items

// pop method - Deletes the items from end
marks.pop() //Return the deleted value

//toString - Converts array to string
console.log(marks.toString());
// Returns new string

// concat() - joins multiple arrays & return new result
let fullMarks = marks.concat(marks1);
// Return new array
console.log(fullMarks);

// unshift() - To add elements at the start
marks.unshift(100);    // Return the length
console.log(marks);

// shift() - To delete the elements at the start
marks.shift();
console.log(marks); // Returns the deleted value


// slice - returns a piece of the array, doesnot change the array
// slics(startIdx, endIdx)
console.log(marks.slice(0,4));


// splice - changes original array, to add, remove, and replace in array
// splice(startIdx, delCount, newEle)
// splice (2, 2, 101, 102)
// Means - Start index is 2, from there delete 2 indexes data (i.e index 2 and 3 data will be deleted)
// replace the 2 and 3rd index data with 101 and 102
// If we want to only delete - splice(2,2)
// If we want to only add - splice(2,0,101)

let arr = [1, 2, 3, 4, 5, 6, 7];

//Replace element
arr.splice(2,2,101,102);
console.log(arr);

// Add element
arr.splice(2, 0, 110);
console.log(arr);  // 1,2,110,101,102,5,6,7

//Delete element
arr.splice(3,1);
console.log(arr);


// If we mention splice(3) 
// Then that means, delete every thing after the 4th index
