/* ----------------------------- classic syntax ----------------------------- */
// function foo() {
// 	console.log(this);// window
// }

// let obj = {
// 	foo: foo
// }

// foo()
// obj.foo()



/* ------------------------------ arrow syntax ------------------------------ */

// console.log(this);

// const foo= () => console.log(this);

// let obj = {
// 	foo: foo
// }

// foo.call(obj)
// obj.foo()


/* --------------------------------- example -------------------------------- */
console.log(this);

let obj = {
	id:1,

	foo: function() {
		return this.id++
	},
	bar: () => this.id++
}




obj.foo()
console.log(obj.id);

obj.bar()
console.log(obj.id);

