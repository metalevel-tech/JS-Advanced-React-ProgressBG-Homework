"use strict";

function foo() {
	x = 99;
	console.log(`x in foo: ${x}`);
}

// let x = 5;

foo(10);

console.log(`x in main: ${x}`);



// GlobalNamespace = {
// 	foo: 13333443,
// 	x:   7328832832 (99),
// }

// fooNamespace = {

// }