
/* ----------------------------- apply and call ----------------------------- */
// func.apply(thisArg, [argsArray])
// func.call(thisArg, arg1, ... , argN)

// function foo(id) {
// 	this.id = id
// 	console.log(this.id);
// }

// foo(1);
// console.log(`*`.repeat(20));

// let obj = {};
// // foo.apply(obj, [9]);
// foo.call(obj, 9)
// console.log(obj);


/* ---------------------------------- bind ---------------------------------- */
// function foo(id) {
// 	this.id = id
// 	console.log(this.id);
// }

// let obj = {};
// let bar = foo.bind(obj);
// bar(3)

// console.log(obj);