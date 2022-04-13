// Creational design patterns:
// Creational design patterns focus on object creation mechanisms
// Summaries best practices for object creation suitable for different, common, situations
// Removes the potential complexity in a project
// Some of the patterns that fall under this category are: Factory, Abstract, Prototype, Singleton and Builder
// There are various ways to create an object in JS:

// by Object literal
const obj1 = {};
console.log(obj1);

// by Object.create() method
const obj2 = Object.create({});
const obj3 = Object.create(null);
console.log(obj2);
console.log(obj3);

// by Object.assign() method
const obj4 = Object.assign({},{});
console.log(obj4);

// by Object Constructor (Class)
const obj5 = new Object();
console.log(obj5);