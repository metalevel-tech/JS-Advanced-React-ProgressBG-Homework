/* -------------------------- pure function exmple -------------------------- */
// same input=>same output
// no side effects

// Function Expression syntax
const add = function (x,y) {
	return x+y
}
// Function Declaratin syntax
function add (x,y) {
	return x+y
}



/* ----------------------- non - pure function example ---------------------- */
// Function Expression syntax
const add = function (x,y) {
	console.log(x+y); // side effect

	return x+y
	// return undefined
}


// add(2,3) => undefined



