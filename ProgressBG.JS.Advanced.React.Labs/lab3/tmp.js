function add(x,y) {
	console.log(`x+y=${x+y}`);

	return x+y
}

let res1 =  add(2,3);
let res2 =  new add(2,3);

console.log(res1);
console.log(res2);