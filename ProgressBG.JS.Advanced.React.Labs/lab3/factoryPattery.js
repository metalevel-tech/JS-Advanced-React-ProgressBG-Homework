function studentFactory(name,score) {
	// return {
	// 	'name': name,
	// 	'score': score,
	// 	'greet':function () {
	// 		console.log(`Hi, I'm ${this.name}, my score is ${this.score}`);
	// 	}
	// }

	let obj = {}

	obj.name = name;
	obj.score = score;
	obj.greet = function () {
					console.log(`Hi, I'm ${this.name}, my score is ${this.score}`);
				}
	return obj;

}
/* ------------------------- define student objects ------------------------- */
const student1=studentFactory('pesho', 5)
const student2=studentFactory('maria', 3)

/* ------------------------------- use objects ------------------------------ */
console.log( student1.name );
console.log( student1.score );
student2.greet()

