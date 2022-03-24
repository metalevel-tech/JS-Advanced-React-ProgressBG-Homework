function foo(x) {
	x = 99;
	console.log(`x in foo: ${x}`);
	return x
}


let x = 1;
let y = foo(x);
console.log(`x in global: ${x}`);
console.log(`y in global: ${y}`);


// OUTPUT:
// x in foo: 99
// x in global: 1


// g= {
// 	'x': 1,
// 	'y': 99
// }

// foo = {
// 	'x': 99
// }