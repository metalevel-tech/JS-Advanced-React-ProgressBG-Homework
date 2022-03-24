// function foo() {
// 	let/const/var => local scope
// }
// // let and const declares a block scope
{
	var x = 1;
	let y = 5;
	console.log(`y in block: ${y}`);
}

console.log(`x: ${x}`);
console.log(`y: ${y}`);