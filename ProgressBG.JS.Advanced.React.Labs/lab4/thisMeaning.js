/* -------------------------- this in Global Scope -------------------------- */
// console.log(this);

// this.Math = {}

// let res = Math.floor(Math.random() * 100)
// console.log(res);



/* ------------------------ this in function context ------------------------ */
// function foo() {
// 	console.log(this);
// }

// foo()


// let user = {
// 	name: 'Ada',
// 	greet(){
// 		console.log(`Hi, ${this.name}`);
// 	},
// 	setName(newName){
// 		"use strict"
// 		this.name = newName
// 	},
// 	showName(){
// 		console.log(this.name);
// 	},
// 	showThis(){
// 		console.log(this);
// 	}
// }
// // invoke as function
// const setName = user.setName;
// setName('Byron')

// // invoke as method
// user.showName()


/* -------------------------- invoke as constructor ------------------------- */

function User(name, age) {
	"use strict"
	// this= {}
	this.name = name;
	this.age = age;

	this.greet = function () {
		console.log(this.name);
	}

	// return this
}

// operation constructor call:
const ada = new User('Ada', 21)

// operation method call:
ada.greet()

// operation function call
const sayGreet = ada.greet;
sayGreet()





