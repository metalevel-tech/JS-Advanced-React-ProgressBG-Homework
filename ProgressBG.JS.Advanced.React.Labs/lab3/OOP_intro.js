/* ------------------------- define student objects ------------------------- */
const student1 = {
	'name': 'pesho',
	'score': 5,
	'greet':function () {
		console.log(`Hi, I'm ${this.name}, my score is ${this.score}`);
	}
}

const student2 = {
	// property/attribute
	'name': 'maria',
	'score': 3,
	// methods
	'greet':function () {
		console.log(`Hi, I'm ${this.name}, my score is ${this.score}`);
	}
}





/* ------------------------- define teacher objects ------------------------- */
const teacher1 = {
	'name': 'ivan',
	'subject':'HTML',
	'greet': function() {
		console.log(`Hello, my name is ${this.name}, I'm teaching ${this.subject}`);
	}
}

/* ------------------------------- use objects ------------------------------ */
student2.greet()
teacher1.greet()





