var myArray = [2323,4344,2325,324413,21234,24531,2123,42234,544,456,345,42,5445,23,5656,423];
let aux = 0;
for (var index in myArray){
    aux += myArray[index]/myArray.length;
}
console.log(aux);