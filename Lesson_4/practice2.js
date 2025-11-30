//Offer  on each item and update the array
let price = [250, 645, 300, 900, 50];
for(let i =0; i< price.length; i++){
    let sum = price[i] / 10;
    price[i] -= sum;
}
console.log(price);