// Return the number of vowels in a string
function retVowels(str){
    let total = 0;
    for(let val of str){
        if(val === "a" || val === "e" || val === "i" || val === "o" || val === "u" ){
            total++;
        }
    }
    return total;
}

console.log(retVowels("apple"));

// Arrow function
let countVowels = (str) => {
    let total = 0;
    for(let val of str){
        if(val === "a" || val === "e" || val === "i" || val === "o" || val === "u" ){
            total++;
        }
    }
    return total;
}

console.log(`The number of vowels ${countVowels("banana")}`);