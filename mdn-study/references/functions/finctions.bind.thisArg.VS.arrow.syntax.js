// Test access THIS
// ... example for BIND and Arrow function in a method
let functions = {
	id: 1,
	set setID(value){
		this.id = value;
	},
	foo(){
		// console.log(this); // functions
		// const tmp = function () {
		// 	console.log(this.id);
		// }
		// return tmp.bind(this);

		return function () {
			console.log(this.id);
		}.bind(this);
	},
	bar(){
		return () => {
			console.log(this.id);
		}
	}
}

const foo = functions.foo();
// console.log(foo);
console.log(`___A___`);
foo();
functions.setID = 10;
foo();

const bar = functions.bar();
// console.log(bar);
console.log(`___B___`);
bar();
functions.setID = 20;
bar();