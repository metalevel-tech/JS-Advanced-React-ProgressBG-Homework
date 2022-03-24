/* ----------------------------- property names ----------------------------- */
// let obj = {
// 	0: 'Ada',
// 	1:23,
// 	'user': 'Byron'
// }

// let arr = ['Ada', 23]

// console.log(obj);
// console.log(arr);

// let obj = {
// 	userName: 'Ada',
// 	'user family': 'Byron'
// }


// console.log(obj.userName);

// const propName = 'userName'

// console.log(obj.propName);
// console.log(obj[propName]);
// console.log(obj['user family']);


/* ------------------------- Computed property names ------------------------ */
// let obj = {
// 	[2+3]:'ada'
// }

// console.log(obj);

/* ------------------------ Shorthand property names ------------------------ */
// let name = 'Ada', age = 21;

// let obj = {
// 	name: name,
// 	age: age
// }

// let obj = {name, age}

// console.log(obj);

/* ------------------------ Shorthand method notation ----------------------- */
// let obj = {
// 	name: 'Ada',
// 	greet(){
// 		console.log(this.name);
// 	}
// }

// obj.greet()

/* --------------------------- for...in statement --------------------------- */

/* ------------------------ enumarable own properties ----------------------- */
// let user = {
// 	name: 'Ada',
// 	age: 23
// }

// Object.defineProperty(user, 'id', {
// 	value:1,
// 	writable: false,
// 	enumerable:false
// })

// // console.log(user);

// for(let key in user){
// 	console.log(`${key}-${user[key]}`);
// }

/* ------------------------------ Object.keys() ----------------------------- */
// let user = {
// 	name: 'Ada',
// 	age: 23
// };


// const keys = Object.keys(user)
// // console.log( keys );
// for(const key of keys){
// 	console.log(`${key}-${user[key]}`);
// }
