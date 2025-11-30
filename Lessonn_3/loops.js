// Loops are used to execute a piece of code again and again

// for loop
let name = "Hi I am";
for(let i = 1; i< 6; i++){
    console.log(name , i);
}

// while loop
let i = 10;
while(i <= 15){
    console.log(i);
    i++;
}

// do-while loop
let j = 10;
do {
    console.log(j);
    j++;
}while(j <= 15);

// for-of loop - Used to loop on strings and arrays
str = "Rahul Sai";
for(let val of str){
    console.log("letter = ", val);
}
// We need not to mention update and condition here

// for-in loop - used on the objects and arrays, we get object keys in the iterator
const student = {
    name: "Rahul",
    age: 21,
    cgpa: 9.22
};

for(let key in student){
    console.log("key = ", key, "value = ", student[key]);
}
// Returns the key's of the object
