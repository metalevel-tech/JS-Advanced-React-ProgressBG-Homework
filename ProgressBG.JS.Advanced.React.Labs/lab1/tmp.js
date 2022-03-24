// const arr = [1, 'a', function(){console.log(`Hi`)}, {id:1} ]

// console.log( arr[0] + 3 );
// arr[2]()

// console.log( x );

// const x;
// console.log( x ); // undefined

const obj = {};
const str = 'aaa';

console.log( obj.id );
obj.id = 1
console.log( obj.id );

// undefined
// 1

console.log( str.id ); // new String(str).id
str.id = 1
console.log( str.id ); // new String(str).id

// undefined
// undefined


// RAM:
// 	str: 7138328723782: 'aaa'

// 					  : 1