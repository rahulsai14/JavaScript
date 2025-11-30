// Array - Collection of items
// We store same type of inforamtion
// If we want we can include multiple data type in array

let marks = [96, 75, 48, 63, 77];

//Array length
console.log(marks.length); 
// property - which gives some value
// method - which does some work
// Here length is property

// Here typeof array is object
// It is a object 
// Here it is a key value pair but instead of key here we use indexes

console.log(marks[3]);
// If we try to access the array out of index, then it will show undefined

// Changing value of a specific index
marks[2] = 55;
console.log(marks);

// Looping through an array
for(let i = 0; i<marks.length; i++){
    console.log(marks[i]);
}

for(let val of marks){
    console.log(val);
}
