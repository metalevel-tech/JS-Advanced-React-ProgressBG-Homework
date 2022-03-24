function Animal(id, name) {
	// 1. this = {}
	this.id = id;
	this.name = name;
	// 2. return this
}

// Animal.prototype = Object.create(Parent.prototype)
Animal.prototype.greet = function(){
	console.log(`Hello, ${this.name}`);
}


// Animal.prototype.incId = function(){
// 	this.id+=1;
// }

// const tom = new Animal(1,'Tom');
// // class/static prop:
// Animal.id = 9;

// // static method:
// Animal.incId = function () {
// 	Animal.id+=1;
// }

// const jerry = new Animal(2,'Jerry');
// // 3. jerry.__proto__ = Animal.prototype

// jerry.incId();
// Animal.incId();
// console.log(jerry.id);    // 3
// console.log(Animal.id);   //9

class GreetMethods{
	greet(){
		console.log(`Hello, ${this.name}`);
	}
}

class Person extends(GreetMethods){

	constructor(id, name){
		// super = new GreetMethods()
		super();
		this.id = id;
		this.name = name;
		super.greet();
	}

	static id = 9;
}



// console.dir(Animal);
// console.dir(Person);

// console.dir(Person.prototype);
// console.dir(Animal.prototype);

// console.log(typeof(Person));
const pesho=new Person(1,'Petar');


// pesho.greet();



