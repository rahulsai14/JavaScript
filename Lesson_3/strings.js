// String - is a sequence of characters used to represent text

let str = "Rahul Sai"; // We can use either single quotes or double quotes

// To find length 
console.log(str.length);  // length is a property

// String indices - To access a specifi acharacter from a string through index
console.log(str[6]);

// Template literals - This is a special string
let sentence = `This is a template literal`; // If we check type it will show string

let obj = {
    item: "pen",
    price: 10
};

let output = `The cost of ${obj.item} is ${obj.price} rupess`;
console.log(output);

// Template literals allow varibales in string
// String interpolation - Modern technique for embedding expressions within string literals
// Whatever written in ${} first the value will be calculated and then it becomes the part of the string
// We can write expression also like ${1+2+3}

//Escape characters
// \n - next line
// \t - tab space
// If escape character is mentioned in string, the it will considered as a single character
// For example: Rahul\tSai - The lenght of the string will be 9 not 10