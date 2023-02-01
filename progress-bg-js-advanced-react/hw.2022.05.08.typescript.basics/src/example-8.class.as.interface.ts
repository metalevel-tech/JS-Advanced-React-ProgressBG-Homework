// A class as an interface
// - A class declaration in TypeScript creates two things:
//   - `a type` representing instances of the class and
//   - `a constructor function`.
// - Consider next example and the error that throws:

/**
class Duck {
    constructor(public name: string) {
        this.name = name;
    }
    
    quacks() {}
    swim() {}
}

class Cat {
    constructor(public name: string) {
        this.name = name;
    }
    quacks() {}
}

// function isItDuck(obj: Duck | Cat) {
function isItDuck(obj: Duck) {
    // obj.quacks?.();
    obj.quacks?
        console.log(`${obj.name} is a Duck`) :
        console.log(`${obj.name} is not a Duck`);
}

const download = new Duck("Donald");
const tom = new Cat("Tom");

isItDuck(download);
isItDuck(tom);
*/

// - In dynamic taping languages, the type of the object is determined by
//   it's shape (set of properties and methods) and this is called "Duck-typing"
//   :: If it looks like a duck, swims like a duck, and quacks like a duck,
//   :: then it probably is a duck.
// - In TypeScript, interfaces can create duck-typing.

// export {};

interface IDuck {
    name: string,
    quacks(): void
}

class Duck implements IDuck {
    constructor(public name: string) {
        this.name = name;
    }
    
    quacks() {}
    swim() {}
}

class Cat {
    constructor(public name: string) {
        this.name = name;
    }
    quacks() {}
}

function isItDuck(obj: IDuck) {
    // error TS2774: This condition will always return true since this function 
    // is always defined. Did you mean to call it instead?
    
    // obj.quacks?
    //     console.log(`${obj.name} is a Duck`) :
    //     console.log(`${obj.name} is not a Duck`);
}

const download = new Duck("Donald");
const tom = new Cat("Tom");

isItDuck(download);
isItDuck(tom);