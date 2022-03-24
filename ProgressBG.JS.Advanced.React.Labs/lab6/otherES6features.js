/* ----------------------------- spread operator ---------------------------- */
// const foo = (a,b,c)=>{
// 	console.log(`a=${a}, b=${b}, c=${c}`)
// 	// console.log(c.id);
// }

// const data=[1,2,{id:3}]
// // foo(data)
// foo(data[0], data[1], data[2])
// foo(...data)


// // example
// data = [1,2,3]
// // console.log( Math.max(data) ); // NaN
// console.log( Math.max(...data) ); // 3

// in array literal
// data = [1,2,3];
// // let arr1 = [data, 9];
// let arr1 = [...data, 9];
// console.log( arr1.length);


// // copy array:
// const data = [1,2,3];

// // const backup = data; // not a copy
// let backup = [...data]

// data[0] = 99;

// console.log(backup);


// copy array:
const data = [{id:1},[2],3];
// shallow copy
let backup = [...data]

// backup[0] = data[0]
// backup[1] = data[1]
// backup[2] = data[2]

// data[0].id = 99;
// data[1][0] = 88;

// console.log(data);
// console.log(backup);


/* ------------------------------ rest operator ----------------------------- */

function foo(a,b,...c) {
	console.log(a);
	console.log(b);
	console.log(c);
}
foo(1)

// a = 1
// b = undefined
// c = []
