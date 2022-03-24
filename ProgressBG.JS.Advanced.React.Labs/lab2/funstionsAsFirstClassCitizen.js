function foo(x) {
	console.log(typeof(x));
}

function bar() {
	console.log(`bar`);
}
x = 3;

// pass 3
foo(x);

// pass function bar
foo(bar);

// pass anonymous function
foo(function (params) {
	console.log(`baz`);
})



// foo(bar())

