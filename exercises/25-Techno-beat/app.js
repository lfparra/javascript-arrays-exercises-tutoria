function lyricsGenerator(arr) {
    let aux = "";
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === 0) {
            aux += 'Boom ';
            count = 0;
        } else if (arr[i] === 1) {
            aux += "Drop the base ";
            count += 1;
            if (count === 3){
                aux += "!!!Break the base!!! ";
                count = 0;
            }
            
        }
    }
    return aux;
}


// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))