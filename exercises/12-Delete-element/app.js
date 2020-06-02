var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName){
let array = [];
  for (let i=0; i<people.length; i++){
    if (people[i] !== personName){
      array.push(people[i]);
    } 
  }
	return array;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));