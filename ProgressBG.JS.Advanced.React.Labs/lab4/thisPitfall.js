function Constructor() {
	this.saidHello = 0;

	// auxilary function
	function __sayHello() {
		this.saidHello++;
	};

	// interface
	this.sayHello = function() {
		// __sayHello(this);
		__sayHello.call(this)
		// this.saidHello++;
		console.log(`I said hello ${this.saidHello} times`);
	};
}

var obj1 = new Constructor();
var obj2 = new Constructor();
obj1.sayHello();
obj1.sayHello();
obj1.sayHello();

obj2.sayHello();
obj2.sayHello();

//

