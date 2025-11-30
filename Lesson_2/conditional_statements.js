// Conditional Statements
let grade = "A";

// if statement
if(age >= 18){
    console.log("Elgible");
}

// if-else statement
if(age >= 18){
    console.log("Elgible");
}else{
    console.log("Not elgible");
}

//if-elseif ladder
if(grade === "A"){
    console.log("Excellent");
}
else if(grade == "B"){
    console.log("Very Good");
}
else{
    console.log("Good");
}

// Ternary operators (Here we use 3 operands)
// condition ? true output: false output

age >= 18 ? console.log("Elgible") : console.log("Not elgible");

// Switch - case is also there, but we rarely use it
//  switch(exp){
//     case: '':
//         console.log("");
//     default:
//         console.log("");
// }