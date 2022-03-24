/* --------------------------- recursive solution --------------------------- */

// f(1) => 1
// f(n) => n * f(n-1)
function factorial(n){
	if (n === 0) {
		return 1
	}else{
		// console.log(`n = ${n}`);
		return n * factorial(n - 1)
	}
}

console.log( factorial(3) );


/* --------------------------- iterrative solution -------------------------- */
// function factorielItter(n) {
// 	let res = 1;

// 	for(let i = 1; i<=n; i+=1){
// 		res *= i;
// 	}

// 	return res
// }


// console.log( factorielItter(5) );