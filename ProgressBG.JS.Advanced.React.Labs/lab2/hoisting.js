let x = 1;
foo()
bar()

function foo(params) {
	console.log(`foo`);
}

var bar =function(params) {
	console.log(`bar`);
}



// 1 step => compile time
// RAM:
// 	7383284327:x   => undefined
// 	7383284376:foo => function foo
// 	7383284234:bar => undefined

// 2 step => run time
// undefined
// 'foo'
// Error: bar is not a function