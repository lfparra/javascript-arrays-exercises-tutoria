let par = "Hello World"

let newPar = par.toLowerCase();

let counts = {};

for(let i = 0; i < newPar.length; i++) {
    if (newPar[i] === " ") continue;
    if (counts.hasOwnProperty(newPar[i])) {
        counts[newPar[i]] += 1;
    } else {
        counts[newPar[i]] = 1;
    }
}

console.log(counts);


