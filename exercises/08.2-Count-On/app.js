let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let hello = [];
for(let index = 0; index < myArray.length; index++){
    if(typeof myArray[index] === "object"){
        let element = myArray[index];
        hello.push(element);
    }
 
    // MAGIC HAPPENS HERE

}

console.log(hello)