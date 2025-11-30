// These are built-in-functions used to manipulate a string
let str = "Avengers";
// Point to be noted: The functions performed on the string will not affect the original string
// A new string will be created with new value, we can store it in a variable

// Strings are immutable in JS

// To upper case
let up = str.toUpperCase();
console.log(up);

// To lower case
let lc = str.toLowerCase();
console.log(lc);

// Trim - to remove white spaces in starting and ending of the string
let s = "   Rahul   ";
console.log(s.trim());

// Slicing the string
let slice = str.slice(0,5); // ending value is optional and non-inclusive
console.log(slice);

// String concatination
let str2 = "Endgame"
let con = str.concat(str2);
console.log(con);
// We can concate string using + operator

// String replace - searches a value and replaces it
// Only replaces one time of the first occurance in the string
let rep = str.replace("s","r");
console.log(rep);

// To replace all occurances we use str.replaceAll(searchVal, newVal);

// Fetching a character using the index
let c = str.charAt(2);
console.log(c);

// We cannot directly change a character at a particular index
// We need to create a new string for that
// We can use replace for that and store in the declared string
