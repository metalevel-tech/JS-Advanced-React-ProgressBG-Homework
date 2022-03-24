class Account{
	constructor(name="Anonymous",balance){
		this._name = name;
		this._balance = balance
	}

	get name(){
		console.log(`getting name at: ${new Date()}`);
		return this._name;
	}

	set name(name){
		console.log(`setting new name at: ${new Date()}`);
		this._name = name;
	}

	// greet(){
	// 	console.log(`I'm ${this.name}`); // here we use the getter
	// }
}


let a1 = new Account('Pesho', 1000);

// set name:
a1.name = 'Petar';

// get name
console.log(a1.name);//

