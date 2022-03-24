/* -------------------------------- class Car ------------------------------- */
function Car() {

}
Car.prototype.drive = function () {
	console.log(`driving with ${this.speed}`);
}

/* -------------------------------- class BMW ------------------------------- */
function BMW(speed){
	this.speed = speed;
}
// BMW.prototype={}
// BMW.__proto__ = Object()

// BMW.prototype.__proto__ =  Car.prototype;
BMW.prototype = Object.create(Car.prototype);
BMW.prototype.bar = function () {
	console.log('bar');
}

/* ------------------------------- class Ford ------------------------------- */
function Ford(speed){
	this.speed = speed;
}

// Ford.prototype.__proto__ =  Car.prototype;
Ford.prototype = Object.create(Car.prototype);
Ford.prototype.foo = function () {
	console.log('foo');
}
// method overloading:
Ford.prototype.drive = function () {
	console.log(`DRIVING WITH ${this.speed}`);
}

/* ------------------------------ using objects ----------------------------- */
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





