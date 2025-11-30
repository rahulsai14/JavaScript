//Average
let marks = [85, 97, 44, 37, 76, 60];

let l = marks.length;
let sum = 0;

for(let val of marks){
    sum += val;
}

let avg = sum / l;
console.log(`Average is ${avg}`);