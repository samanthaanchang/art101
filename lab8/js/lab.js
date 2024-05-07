// index.js - Lab 8: Anon Functions and Callbacks 
// Author: Samantha Chang
// Date: 5/6/2024

function squareIt(x){

    return x * x;
}

console.log("5 squared: ",squareIt(5));
console.log("3 squared: ",squareIt(3));

array = [5,3,7,25,32]
console.log("my array: ",array);

var result = array.map(squareIt);
console.log("squared array: ", result);

var result = array.map(function(x){
    return x*2;
})
console.log("array again: ", result);
