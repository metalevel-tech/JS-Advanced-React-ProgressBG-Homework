/* ------------------------------ full syntax: ------------------------------ */
// const foo = (param1, param2, …, paramN) => { statements }

// const foo = function (param1, param2...,paramN){
// 	statements;
// }

// const pi = 3.14
// const foo1 = (r)=>{return r*r*pi};
// const foo2 = function(r) {return r*r*pi}

/* ------------------------ "single parameter" syntax ----------------------- */


// const pi = 3.14
// const foo1 = r => {return r*r*pi};
// const foo2 = function(r,pi) {return r*r*pi}

// foo1(2)


/* ----------------------- "single expression" syntax ----------------------- */
// (param1, param2, …, paramN) => expression

// function (param1, param2, …, paramN) {
// 	return expression
// }

// const pi = 3.14
// const foo1 = r => r*r*pi;
// const foo2 = function(r) {return r*r*pi}

// console.log(foo1(2));



/* --------------------------------- example -------------------------------- */
// function caller(f, op) {
// 	console.log(`3`);

// 	if(op=='add'){
// 		f()
// 	}
// }

// console.log('1');
// caller( function(x,y){return x+y})
// caller( (x,y)=> x+y, 'add')
// console.log('2');


// OUTPUT
// 1
// 4
// 3
// Error: f isnot a funct

// 1
// 3
// 4
// 2