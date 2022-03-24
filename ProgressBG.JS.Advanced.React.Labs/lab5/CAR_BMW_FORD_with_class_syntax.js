class Car{
	drive(){
		console.log(`driving with ${this.speed}`);
	}
}

class BMW extends Car{
	constructor(speed){
		super()
		this.speed = speed;
	}
	bar(){
		console.log('bar');
	}
}

class Ford extends Car{
	constructor(speed){
		super()
		this.speed = speed;
	}

	foo(){
		console.log('foo');
	}

	// method overloading:
	drive(){
		console.log(`DRIVING WITH ${this.speed}`);
	}
}


let ford1 = new Ford(100);
let ford2 = new Ford(200);
let bmw1 = new BMW(200)

// positive test cases
ford1.foo();
ford1.drive();

bmw1.bar();
bmw1.drive();

// negative test cases
// ford1.bar()
// bmw1.foo()





