function foo(x) {
	console.log(`Foo x = ${x}`);

	return function bar() {
		console.log(`Bar x= ${x}`);
	}
}


// const a = foo()
// a()

foo(3)()