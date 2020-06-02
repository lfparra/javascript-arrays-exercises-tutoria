let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

let resultingNames = allNames.filter(function(rNames){
    return (rNames.charAt(0)=="R")
})

console.log(resultingNames);