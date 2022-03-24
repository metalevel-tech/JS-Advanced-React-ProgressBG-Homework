// arguments object

console.log(arguments);

const foo = ()=> {
	// console.log(arguments);
	let sum = 0
	for(let i in arguments){
		sum+=arguments[i]
	}
	return sum;
}

console.log(foo(2,3));

console.log(foo(2,3,4));

console.log(foo(2,3,4,5));

