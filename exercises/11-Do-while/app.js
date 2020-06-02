let result= "";
let i = 20;
do {
    if(i%5===0 && i!==1){
      result+= i+"!" + "\n";
      
    } else if (i===1){
        result+= i+"\n"+"LIFTOFF"
    }
    else {
      result+= i + "\n";
    }
    i--;
} while (i > 0);

console.log(result);
