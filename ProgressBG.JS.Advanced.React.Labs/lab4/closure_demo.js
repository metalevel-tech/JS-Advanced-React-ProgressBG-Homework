let functions = {
	id: 1,
	setID(){
		this.id = 9;
	},
	foo(){
		// console.log(this); // functions


		// const tmp = function () {
		// 	console.log(this.id);
		// }

		// return tmp.bind(this);


		return function () {
			console.log(this.id);
		}.bind(this)
	}
}

const bar = functions.foo();
// console.log(bar);
console.log(`test`);
bar();

functions.setID();

