// The Singleton Pattern: 
// Singleton provides protection against accidentally creating multiple copies of a complex object.
// Allows deferral of object instantiation until the first use.
// It's main usage is for managing the global application state and name-spacing.
// In short, the main idea of the Singleton is to have only one instance of a specific class.
// Perhaps the most overused pattern, though it has fallen out of favour in recent years.
// Note in the classic OOP languages you can't create object literal,
// In the classic OOP languages - the objects are instances of classes, mandatory! 

const { greenBright } = require("ansi-colors");

// Usage:
// - for name-spacing, i.e. to reduces the number of global variables
// - used to organize the code in a consistent manner,
// - Note that from ES6 we can use modules (import/export).

// Object literal - in JS an object literal can be regarded as the simplest form of Singleton
const object = {
    name: 'Beta',
    greet() {
        return `Hello, I'm ${this.name}`;
    }
}
console.log(object.greet());

console.log('*'.repeat(20));

// caching the singular instance - ES6 Class style ---
class SingleObject {
    constructor(name) {
        // return the cached instance if exist
        if (this.constructor.instance) {
            return this.constructor.instance;
        }

        // this will be used only at the first usage of the class
        // because at each other usage the above condition will be satisfied
        this.name = name;

        // Cache the first instance of the class
        this.constructor.instance = this;
    }
}
const object_1 = new SingleObject('no name');
const object_2 = new SingleObject('Another name');
console.log(object_1.name);
console.log(object_2.name);
console.log(object_1 === object_2);
// no name
// no name
// true

console.log('*'.repeat(20));

// caching the singular instance - Constructor function style ---
function Car(name = 'Car', speed = 180) {
    // check for existing instance
    if (typeof this.constructor.instance === 'object') {
        return this.constructor.instance;
    }

    // set instance properties
    this.name = name;
    this.speed = speed;

    // cache the instance
    this.constructor.instance = this;
}
const car_1 = new Car('CarA', 220);
const car_2 = new Car('CarB', 190);
console.log(car_1.name, car_1.speed);
console.log(car_2.name, car_2.speed);
console.log(car_1 === car_2);
// CarA 220
// CarA 220
// true

console.log('*'.repeat(20));

// caching the singular instance - Factory function style ---
function carMaker(name = 'Car', speed = 180) {
    if (this.instance) return this.instance;
    this.instance = { name, speed };
    return this.instance;
}
const car_A = carMaker('Volvo', 180);
const car_B = carMaker('Audi', 235);
console.log(car_A);
console.log(car_B);
console.log(car_A === car_B);
// {name: 'Volvo', speed: 180}
// {name: 'Volvo', speed: 180}
// true

console.log('*'.repeat(20));

// Instance in a Closure: rewrite the Constructor - Constructor function style ---
function CarClosure(name = 'Car', speed = 180) {
    // catch the instance
    const instance = this;

    // set instance properties
    this.name = name;
    this.speed = speed;

    // rewrite the constructor
    CarClosure = function () {
        return instance;
    };
}
const car_X = new CarClosure('CarX', 205);
const car_Y = new CarClosure('CarY', 170);
console.log(car_X.name, car_X.speed);
console.log(car_Y.name, car_Y.speed);
console.log(car_X === car_Y);
// CarX 205
// CarX 205
// true

console.log('*'.repeat(20));

// Instance in a Closure: rewrite the Constructor - Factory function style ---
function carMakerClosure(name = 'Car', speed = 180) {
    const instance = { name, speed };
    carMakerClosure = function() { return instance; };
    return instance;
}
const car_U = carMakerClosure('Volkswagen Type 82E', 110);
const car_W = carMakerClosure('Volkswagen Passat', 170);
console.log(car_U);
console.log(car_W);
console.log(car_U === car_W);
// {name: 'Volkswagen Type 82E', speed: 110}
// {name: 'Volkswagen Type 82E', speed: 110}
// true

