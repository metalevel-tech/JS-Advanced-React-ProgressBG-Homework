// - In TypeScript we define classes similarly to the ES6 class syntax.
// - But in TypeScript public parameters in a constructor is a shorthand
//   to automatically create properties with that name.
// - In TypeScript we can also define methods with the same syntax as in ES6,
//   including the usage of the 'private' keyword.

class Person {
    // Private identifiers are only available when targeting ECMAScript 2015 and higher.
    // #name: string;
    name: string;
    
    constructor(public firstName: string, public lastName: string) {
        this.name = `${firstName} ${lastName}`;
    }
    
    greet() {
        console.log(`Hello, I'm ${this.name}.`);
    }
}

// - All properties and methods defined in parent class are
//   inherited from the derived class.
// - Each derived class that contains a constructor function
//   must call the super() constructor
class Student extends Person {
    public college: string;

    constructor(firstName: string, lastName: string, college: string) {
    // constructor(firstName: string, lastName: string, college: string) {
        super(firstName, lastName);
        this.college = college;
    }
    
    greet() {
        // If we want, we can reuse the parent's greet() method (if we want to extend it)
        super.greet();
        console.log(`I study in ${this.college}.`);
        // Or we can just override it as it is in the ES6 JS class syntax
    }
}

const maria = new Person("Maria", "Smith");
const ivan = new Student("Ivan", "Ivanov", "MIT");

maria.greet();
ivan.greet();