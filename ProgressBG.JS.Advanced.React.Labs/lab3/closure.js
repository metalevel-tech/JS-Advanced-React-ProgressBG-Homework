// Allows a function which is executed outside its lexical scope, to preserve the values of scoped variables
let x = 5;
function outer() {
	let x = 5;

	return function inner() {
		console.log(`inner x=${x}`);
	}

	// inner()
}


// call inner outside its scope
let f = outer();
x++;
f();

// f = function inner() {
// 	console.log(`inner x=${5}`);
// }



// outerNamespace = {
// 	x: 6327324 (5)
// }



