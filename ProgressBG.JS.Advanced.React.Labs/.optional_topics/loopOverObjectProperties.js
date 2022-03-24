let person = {
	greet: function () {
		console.log(`I'm ${this.name}`);
	}
}
let pesho = {
	name: "Pesho",
	age:23,
	__proto__: person
}

// for...in loop:
for (const prop in pesho) {
	console.log( `${prop}: ${pesho[prop]}` );
}

