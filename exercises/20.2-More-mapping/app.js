

var myNumbers = [23,234,345,4356234,243,43,56,2];

let newArray;
let myFunction = myNumbers.map(function(number){
    newArray = number * 3;
    return newArray
})

console.log(myFunction);