// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#securing_javascript
'use strict';
function fun() { return this; }
console.dir(fun());
console.dir(fun.call(2));
console.dir(fun.apply(null));
console.dir(fun.call(undefined));
console.dir(fun.bind(true)());

console.assert(fun() === undefined);
console.assert(fun.call(2) === 2);
console.assert(fun.apply(null) === null);
console.assert(fun.call(undefined) === undefined);
console.assert(fun.bind(true)() === true);

// ---
// Add property to an object by Object.defineProperty();
const user = {
    name: 'ada',
    age: 23
};
const keys0 = Object.keys(user);
console.log(keys0); // (2) ['name', 'age']

Object.defineProperty(user, 'new-prop', {
    value: 123,
    writable: true,
    enumerable: true,
});
const keys1 = Object.keys(user);
console.log(keys1); // (3) ['name', 'age', 'new-prop']

// Omitting this in a method
function Constructor(id) {
    this.id = id;
    this.showId = () => {
        console.log(`id as param: ${id}`);          // this wont be changed further...
        console.log(`id as property: ${this.id}`);
    }
}
const user1 = new Constructor(1);
user1.id = 99;
user1.showId();
// id as param: 1
// id as property: 99

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

//
function findProto() {
    console.log('test');
}
findProto.prototype.id = 1;
console.log(findProto.prototype);
console.log(`___`);
//
function carFactory(id) {
    return {
        id: id,
        drive: function() {
            console.log(this.id);
        }
    }
}

let car1 = carFactory(1);
console.log(car1);

let car2 = new carFactory(2);
console.log(car2);

