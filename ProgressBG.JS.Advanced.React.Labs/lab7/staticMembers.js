class Person{
	// fields declarations
	#name = 'Anonymous';
	age = 100

	constructor(name, age){
		this.#name = name;
		this.age = age;
		Person.counter();
	}

	greet(){
		console.log(`I'm ${this.name}, ${this.age} years old.`);
	}

	// static (class) property
	static count = 0;

	// static method=> utility function
	static counter(){
		Person.count+=1;
		console.log(`${Person.count} objects were created.`);
	}
}


let p1 = new Person('Pesho', 23);
let p2 = new Person('Maria', 28);
let p3 = new Person('Maria', 28);

console.log(p1.name);

console.log(Person.count);
