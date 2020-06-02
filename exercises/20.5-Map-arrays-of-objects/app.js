let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

function calculate_age(birthday) { 
    var diff_ms = Date.now() - birthday.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear()-1970);
}

let simplifier = function(person){
	return `Hello, my name is ${person.name} and I am ${calculate_age(person.birthDate)}`;
};

console.log(people.map(simplifier));