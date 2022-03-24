function Student(name,score) {
	// let this = {}
	this.name = name;
	this.score = score;
	this.greet = function () {
					console.log(`Hi, I'm ${this.name}, my score is ${this.score}`);
				}

	// return this
}
/* ------------------------- define student objects ------------------------- */
const student1=new Student('pesho', 5)
const student2=new Student('maria', 3)

/* ------------------------------- use objects ------------------------------ */
console.log( student1.name );
console.log( student1.score );
student2.greet()

