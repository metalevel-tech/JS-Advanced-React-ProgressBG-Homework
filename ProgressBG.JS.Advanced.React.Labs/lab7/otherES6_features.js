/* ------------------------ destructuring assignment ------------------------ */
// const data = ['Ada', 23]

// // const userName = data[0]
// // const userAge = data[1]


// const [userName,userAge] = data

// console.log(userName);
// console.log(userAge);

// swap two variable values
// let x = 1;
// let y = 9;

// let z;
// z=x;
// x=y;
// y=z;

// [x,y] = [y,x]

// console.log(x,y); // 9,1


/* -------------------------- object destructuring -------------------------- */
// const data = {
// 	name:'Ada',
// 	age:23
// }

// // let name = data.name;
// let {name} = data;
// console.log(name);

// function foo({name}) {
// 	console.log(`Hello, ${name}`);
// };

// const data = {
// 	name:'Ada',
// 	age:23
// };

// foo(data)


/* ------------------------- object literal features ------------------------ */
// const name = 'Ada';
// const age = 23;

// // let data = {
// // 	name:name,
// // 	age:age,
// // }

// let data = {name, age};
// console.log(data);

// Method definitions
// let p1 = {
// 	name: 'Pesho',
// 	greet(){
// 	  console.log(`Hi, I'm ${this.name}`);
// 	}
//   }

//   p1.greet(); // Hi, I'm Pesho
// class Person{
// 	constructor(name){
// 		this.name = name
// 	}

// 	greet(){
// 		console.log(`Hi, I'm ${this.name}`);
// 	}

// 	getFoo(){
// 		let foo = 5;
// 		let bar = 9;
// 		return {foo,bar}
// 	}
// }

// let pesho = new Person('pesho');
// pesho.greet()

// let foo = pesho.getFoo();
// console.log(foo);


// // example for non-enumerable prop:
// const object1 = {};

// Object.defineProperties(object1, {
//   property1: {
//     value: 42,
//     writable: true,
// 	// enumerable:false
//   },
//   property2: {}
// });

// console.log(object1);
// console.log(object1.property1);


// // example for non-own prop:
// let car = {
// 	speed:100
// }

// let ford = {
// 	__proto__:car
// }

// console.log(ford.speed);

/* ------------------------------ Object.assign ----------------------------- */
// let car = {
// 	speed:100
// }

// let cycle = {
// 	wheels: 2
// }

// const carcycle = {id:1};
// Object.assign(carcycle, car,cycle)
// console.log(carcycle);

// Shallow vs Deep copy
// let p1 = {
// 	name: 'Pesho',
// 	address: {
// 		town: 'Sofia',
// 		zip: [1504, 1502]
// 	}
// }

// // shallow copy the object:
// let backup = Object.assign({}, p1);

// console.log(backup.address);

// // now change p1
// p1.address.town = 'Plovdiv';

// console.log(backup);



// // create a deep copy
// let backup = JSON.parse(JSON.stringify(p1));
// console.log(backup.address);

// // now change p1
// p1.address.town = 'Plovdiv';

// console.log(p1);
// console.log(backup);



// for .. in => loop on object key
// for .. of =>loop on array values

// let obj = 'abcd'; //(new String(obj))

// // for (let i = 0; i < obj.length; i++) {
// // 	const element = obj[i];
// // 	console.log(element);
// // }

// for(let element of obj){
// 	console.log(element);
// }


let arr = [1,2,3];
for(let el of arr){
	console.log(el);
}